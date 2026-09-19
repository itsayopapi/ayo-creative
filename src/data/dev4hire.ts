export const DEV_FLOW = "CLIENT > AYO CREATIVE DESIGNS > DEV4HIRE > TECH PROFESSIONAL > DELIVERY > PAYMENT";

export const DEV_STEPS = [
  { n: "01", title: "Register", desc: "Create your Dev4Hire profile and tell us what you do." },
  { n: "02", title: "Share your skills", desc: "Select skills, experience, interests and preferred project types." },
  { n: "03", title: "Get matched", desc: "When a project fits your profile, you are shortlisted as a candidate." },
  { n: "04", title: "Get notified", desc: "Receive an email and website notification about the paid opportunity." },
  { n: "05", title: "Express interest", desc: "Review the brief and confirm you are available and interested." },
  { n: "06", title: "Build and get paid", desc: "Complete the work to the agreed requirements and receive your payout." },
];

export const DEV_VALUES = [
  { t: "Real projects", d: "Actual projects sourced through Ayo Creative Designs." },
  { t: "Relevant opportunities", d: "Matching uses skills, interests and availability." },
  { t: "Flexible work", d: "Pick briefs that fit expertise and schedule." },
  { t: "Get paid", d: "Terms and agreed payout are clear before you start." },
];

export const TALENT_GROUPS = [
  { title: "Development", items: ["Frontend", "Backend", "Full Stack", "Mobile", "WordPress", "Shopify"] },
  { title: "Design", items: ["UI/UX", "Product Design", "Graphic Design", "Brand Identity", "Motion Design"] },
  { title: "Testing and QA", items: ["Manual Testing", "Automation", "QA Engineering", "Performance Testing"] },
  { title: "Cybersecurity", items: ["Security Testing", "Vulnerability Assessment", "SOC", "Hardening"] },
  { title: "Other Tech", items: ["DevOps", "Cloud", "AI/ML", "Data", "SEO", "Project Management"] },
];

export const TALENT_BENEFITS = [
  "Access paid project opportunities",
  "Build your professional portfolio",
  "Work on projects aligned with your skills",
  "Receive relevant opportunity notifications",
  "Flexible project participation",
  "Transparent project expectations",
  "Know your agreed payout before starting",
];

export const CLIENT_POINTS = [
  "Project scoping",
  "Talent sourcing",
  "Project management",
  "Quality control",
  "Client communication",
  "Delivery management",
];

export const ACD_HANDLES = [
  "Client relationships",
  "Project scoping",
  "Talent sourcing",
  "Project coordination",
  "Quality control",
  "Delivery management",
  "Payment coordination",
];

export const TRUST_CARDS = [
  { t: "Skill matching", d: "Projects are matched with relevant professionals." },
  { t: "Human review", d: "Applications can be reviewed before talent is selected." },
  { t: "Project oversight", d: "Ayo Creative Designs remains involved in the project." },
  { t: "Professional standards", d: "Clear expectations, deadlines and deliverables." },
];

export const MATCH_SIGNALS = ["Skills", "Professional category", "Experience", "Availability", "Project interests", "Preferred project type"];

export type SampleOpportunity = {
  id: string;
  title: string;
  category: string;
  skills: string[];
  duration: string;
  payout: string;
};

export const OPP_FILTERS = ["All", "Development", "Design", "Testing", "Cybersecurity", "Other"];

export const SAMPLE_OPPORTUNITIES: SampleOpportunity[] = [
  { id: "react-saas", title: "React Developer - SaaS Dashboard", category: "Development", skills: ["React", "TypeScript", "Tailwind"], duration: "2-3 Weeks", payout: "N200,000" },
  { id: "uiux-mobile", title: "UI/UX Designer - Mobile Application", category: "Design", skills: ["Figma", "UX", "Mobile UI"], duration: "10 Days", payout: "N180,000" },
  { id: "qa-web", title: "QA Tester - Web Application", category: "Testing", skills: ["Manual Testing", "API Testing"], duration: "1 Week", payout: "N120,000" },
  { id: "wp-build", title: "WordPress Developer - Company Site", category: "Development", skills: ["WordPress", "WooCommerce", "PHP"], duration: "2 Weeks", payout: "N250,000" },
  { id: "soc-review", title: "Security Review - Vulnerability Assessment", category: "Cybersecurity", skills: ["Security Testing", "OWASP"], duration: "1 Week", payout: "N150,000" },
  { id: "devops-setup", title: "DevOps Helper - Deploy and Harden VPS", category: "Other", skills: ["Linux", "Nginx", "Backups"], duration: "5 Days", payout: "N130,000" },
];

export const DEV_REG_CATEGORIES = ["Developer", "Designer", "Tester / QA", "Cybersecurity", "DevOps / Cloud", "Data / AI", "Other"];
export const DEV_REG_EXPERIENCE = ["Beginner", "Junior", "Mid-Level", "Senior", "Expert"];
export const DEV_REG_AVAILABILITY = ["Immediately Available", "Available This Week", "Part-Time", "Evenings / Weekends", "Currently Unavailable"];
export const DEV_REG_PREFS = ["Short-Term", "Long-Term", "One-Off", "Contract", "Flexible"];
export const REGISTER_SKILLS = ["React", "TypeScript", "Next.js", "WordPress", "Figma", "UI/UX", "Manual Testing", "Automation", "Node.js", "Python", "PHP", "Cybersecurity", "DevOps", "SEO"];

export const DEV_FAQS = [
  { q: "What is Dev4Hire?", a: "Dev4Hire is the talent network run by Ayo Creative Designs. Client projects come to us; when we need extra capacity, matching developers, designers, testers and other tech professionals are notified about paid work." },
  { q: "Who can register?", a: "Developers, designers, testers, cybersecurity professionals and related tech specialists - remote, from anywhere in the world." },
  { q: "Do I have to be a developer?", a: "No. Design, QA, cybersecurity, DevOps, data, writing and support roles are all welcome." },
  { q: "How do I receive project opportunities?", a: "By email and website notification. Keep your skills, category and availability current so matching stays accurate." },
  { q: "Do I have to pay to join?", a: "No. Joining is free. Payouts are agreed in writing before any project begins." },
  { q: "How are freelancers selected?", a: "By skills, portfolio, availability and fit for the brief. Shortlisted people may get a small paid trial first." },
  { q: "How do I get paid?", a: "Fixed-fee milestones. When work passes the stated acceptance criteria, payment is released via an agreed method such as bank transfer or Wise." },
  { q: "Can I reject an opportunity?", a: "Yes. Notifications are invitations, never obligations." },
  { q: "Can I register if I already have a full-time job?", a: "Yes. Set your availability honestly and we match around evenings, weekends or part-time windows." },
  { q: "Does joining Dev4Hire guarantee work?", a: "No. Registration puts you in the matching pool; projects depend on client demand and fit." },
  { q: "Can clients submit projects?", a: "Yes - use the For Clients section or the contact page. We scope the work, source talent and manage delivery." },
  { q: "What happens after I express interest?", a: "Shortlisted professionals are reviewed, selected talent agrees written terms, then delivery and payout follow." },
];
