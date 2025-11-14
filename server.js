const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS for production
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
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

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint (keep your existing code)
app.post('/send-email', async (req, res) => {
  // Your existing email sending code here
  try {
    const { name, email, phone, service, budget, timeline, message } = req.body;

    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: 'ayocoding12@gmail.com',
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
    };

    const mailOptionsToClient = {
      from: process.env.EMAIL_USER,
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
          
          <p>Best regards,<br>
          <strong>Ayomide.Q Hassan</strong><br>
          Founder & Creative Director<br>
          Ayo Creative Designs<br>
          <a href="https://ayocreativedesigns.com" style="color: #FF4D00;">ayocreativedesigns.com</a></p>
        </div>
      `
    };

    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToClient);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});