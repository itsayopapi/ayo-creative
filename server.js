const express = require('express');
const { Resend } = require('resend');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS for production
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'https://ayocreativedesigns.com',
      'https://www.ayocreativedesigns.com',
      'http://localhost:3000'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Force HTTPS in production
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

// Debug environment variables
console.log('Resend Configuration Check:');
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('CONTACT_EMAIL exists:', !!process.env.CONTACT_EMAIL);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Serve SEO files (ADD THIS HERE - AFTER APP INIT BUT BEFORE OTHER ROUTES)
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

// Contact form endpoint with Resend
app.post('/send-email', async (req, res) => {
  console.log('📧 Contact form submitted:', {
    name: req.body.name,
    email: req.body.email,
    service: req.body.service
  });

  try {
    const { name, email, phone, service, budget, timeline, message } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('❌ Resend API key not configured');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please contact support.'
      });
    }

    console.log('📤 Attempting to send emails with Resend...');

    // Email to you (Ayo)
    const emailToYou = await resend.emails.send({
      from: 'Ayo Creative Designs <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'ayocoding12@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF4D00;">New Project Inquiry - Ayo Creative Designs</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333;">Client Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #333;">Project Details:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666; margin-top: 20px;">Sent from ayocreativedesigns.com contact form</p>
        </div>
      `
    });

    console.log('✅ Email to you sent:', emailToYou.data?.id);

    // Auto-reply to client
    const autoReply = await resend.emails.send({
      from: 'Ayo Creative Designs <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for contacting Ayo Creative Designs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #FF4D00;">Thank You for Your Inquiry!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Ayo Creative Designs. I have received your project inquiry and will get back to you within 24 hours.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #FF4D00;">Inquiry Summary:</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
          </div>
          
          <p>In the meantime, feel free to explore our portfolio to see more of our work.</p>
          
          <p>Best regards,<br>
          <strong>Ayomide.Q Hassan</strong><br>
          Founder & Creative Director<br>
          Ayo Creative Designs<br>
          <a href="https://ayocreativedesigns.com" style="color: #FF4D00;">ayocreativedesigns.com</a></p>
          
          <div style="border-top: 2px solid #FF4D00; padding-top: 20px; margin-top: 30px;">
            <p style="font-size: 12px; color: #666;">
              Ayo Creative Designs<br>
              Phone: (+27) 78 257 1454<br>
              Email: ayocoding12@gmail.com
            </p>
          </div>
        </div>
      `
    });

    console.log('✅ Auto-reply sent:', autoReply.data?.id);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully! We will get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    
    let errorMessage = 'Failed to send email. Please try again.';
    
    // More specific error messages
    if (error.message?.includes('API key')) {
      errorMessage = 'Email service configuration error. Please contact support.';
    }

    res.status(500).json({ 
      success: false, 
      message: errorMessage 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    emailConfigured: !!process.env.RESEND_API_KEY,
    service: 'Resend'
  });
});

// Serve the main page (THIS SHOULD BE LAST)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📧 Resend configured: ${!!process.env.RESEND_API_KEY}`);
});