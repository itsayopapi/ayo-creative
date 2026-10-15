// Pricing is split into two deliberate models:
// 1. FIXED_PACKAGES   — defined scopes (landing, portfolio, business, company sites) with a published price.
// 2. BRIEF_PROJECTS   — complex builds (e-commerce, custom apps, platforms) priced only after reading a brief.
// Prices are USD base values; useCurrency() converts them for display only.

export type FixedPackage = {
  slug: string;
  name: string;
  price: number;
  priceMax: number;
  badge?: string;
  tagline: string;
  bestFor: string;
  turnaround: string;
  includes: string[];
  excludes: string[];
};

export type BriefProject = {
  slug: string;
  name: string;
  from: number;
  tagline: string;
  drivers: string[];
  examples: string[];
};

export type AddOn = { name: string; price: number | null; note: string };
export type PaymentStep = { step: string; title: string; copy: string };
export type PriceFAQ = { q: string; a: string };

export const FIXED_PACKAGES: FixedPackage[] = [
  {
    slug: "landing-page",
    name: "Landing Page",
    price: 300,
    priceMax: 450,
    badge: "Fastest start",
    tagline: "One page engineered around a single action.",
    bestFor: "Product or service launches, paid campaigns, event and lead-capture pages.",
    turnaround: "5–7 working days",
    includes: [
      "One page, up to 7 sections",
      "Custom layout built from your brand",
      "Conversion-focused structure and copy polish",
      "Email-connected enquiry form",
      "Mobile, tablet and desktop testing",
      "Basic on-page SEO and analytics setup",
      "Two rounds of revisions",
    ],
    excludes: ["Hosting and domain (billed separately, in your name)"],
  },
  {
    slug: "portfolio-site",
    name: "Portfolio Site",
    price: 400,
    priceMax: 600,
    tagline: "A personal site that makes your work the argument.",
    bestFor: "Designers, developers, photographers, creatives and consultants.",
    turnaround: "7–10 working days",
    includes: [
      "Up to 4 pages including a project gallery",
      "Up to 12 work samples laid out for you",
      "Individual project or case-study pages",
      "About, contact and social links",
      "Downloadable CV or media kit",
      "Mobile, tablet and desktop testing",
      "Two rounds of revisions",
    ],
    excludes: ["Hosting and domain (billed separately, in your name)"],
  },
  {
    slug: "business-website",
    name: "Business Website",
    price: 750,
    priceMax: 1100,
    badge: "Most chosen",
    tagline: "Five pages that make a small business look established.",
    bestFor: "Service businesses, clinics, agencies, restaurants and local brands.",
    turnaround: "10–15 working days",
    includes: [
      "Up to 5 pages: Home, About, Services, Work, Contact",
      "Editable service and pricing sections",
      "Enquiry form routed to your inbox",
      "Google Maps and business details",
      "Basic SEO, sitemap and analytics setup",
      "Mobile, tablet and desktop testing",
      "Three rounds of revisions",
    ],
    excludes: ["Hosting and domain (billed separately, in your name)"],
  },
  {
    slug: "company-website",
    name: "Company Website + CMS",
    price: 1400,
    priceMax: 2000,
    tagline: "A larger corporate site you can update yourself.",
    bestFor: "Established companies, multi-service firms and teams publishing regularly.",
    turnaround: "3–4 weeks",
    includes: [
      "Up to 8 pages with a consistent design system",
      "Content management so you edit text and images yourself",
      "Blog, news or insight section",
      "Team, careers and multi-service layouts",
      "Structured on-page SEO across all pages",
      "Analytics, sitemap and search console setup",
      "Handover session so your team can manage it",
      "Three rounds of revisions",
    ],
    excludes: ["Hosting and domain (billed separately, in your name)"],
  },
];

// Complex builds are intentionally not fixed. A published number would either
// undersell the work or mislead the client, so we quote after reading a brief.
export const BRIEF_PROJECTS: BriefProject[] = [
  {
    slug: "ecommerce-store",
    name: "E-commerce Store",
    from: 1200,
    tagline: "A store built to sell, not just to look like a shop.",
    drivers: [
      "Number of products and variants",
      "Payment gateways and currencies needed",
      "Shipping, tax and fulfilment rules",
      "Inventory, wholesale or subscription logic",
      "Whether product data must be migrated",
    ],
    examples: ["Fashion and apparel", "Beauty and skincare", "Digital products", "Multi-vendor marketplaces"],
  },
  {
    slug: "custom-web-app",
    name: "Custom Web App / Backend",
    from: 2500,
    tagline: "A tool built around how your business actually works.",
    drivers: [
      "Number of user roles and permission levels",
      "Database design and data migration",
      "Third-party APIs and integrations",
      "Admin dashboards and reporting views",
      "Authentication, billing and notifications",
    ],
    examples: ["Booking and scheduling systems", "Client or member portals", "Internal operations tools", "Dashboards and reporting"],
  },
  {
    slug: "platform-build",
    name: "Platform / Marketplace",
    from: 5000,
    tagline: "A product where users, data and payments all move.",
    drivers: [
      "Two-sided or multi-sided user flows",
      "Payment splitting and payout logic",
      "Search, matching and messaging features",
      "Scalability and hosting architecture",
      "Phased delivery across multiple releases",
    ],
    examples: ["Marketplaces", "SaaS products", "Community platforms", "Subscription systems"],
  },
];

export const PAYMENT_STEPS: PaymentStep[] = [
  {
    step: "01",
    title: "Written scope, fixed price",
    copy: "You receive the exact pages, features and deliverables in writing before anything is paid or built. The price on that document is the price you pay.",
  },
  {
    step: "02",
    title: "50% deposit books your slot",
    copy: "The deposit reserves your start date and covers discovery, design direction and initial build. Nothing is charged without your approval.",
  },
  {
    step: "03",
    title: "Build and review in stages",
    copy: "You see working previews as sections are completed, so feedback lands early instead of at the end. Revision rounds are included in every package.",
  },
  {
    step: "04",
    title: "Balance due at launch and handover",
    copy: "The remaining 50% is settled when the site is approved and going live. You receive full source ownership and every account is handed over.",
  },
];

// Optional extras, priced openly so nothing appears as a surprise later on an invoice.
export const ADD_ONS: AddOn[] = [
  { name: "Extra revision round", price: 60, note: "Beyond the rounds already included in your package." },
  { name: "Additional page", price: 80, note: "Same design system, new content, fully responsive." },
  { name: "Copywriting", price: 120, note: "Up to 3 pages written and edited with you." },
  { name: "Product upload", price: 90, note: "Per 25 products, including images and descriptions." },
  { name: "Booking or appointment setup", price: 150, note: "Calendar, availability rules and confirmation emails." },
  { name: "Multilingual setup", price: 180, note: "A second language rolled across every page." },
  { name: "Live chat or WhatsApp", price: 60, note: "Connected and styled to match your brand." },
  { name: "Priority timeline", price: null, note: "Your slot moved up the queue — +30% of the project price." },
  { name: "Care plan after launch", price: null, note: "Updates, backups and small edits — from $99/mo." },
];

export const WHY_FIXED = [
  {
    title: "No hourly meter running",
    copy: "Hourly billing rewards slow work and punishes you for our learning curve. A fixed price puts the risk of the build taking longer on us, not you.",
  },
  {
    title: "Scope agreed up front",
    copy: "Fixed pricing forces the scope to be defined properly before work begins — which is exactly where most website projects go wrong.",
  },
  {
    title: "One number, in writing",
    copy: "The price on the card is the price you pay. Any change is approved by you in writing before extra work begins — never invoiced afterwards.",
  },
];

export const PRICE_FAQS: PriceFAQ[] = [
  {
    q: "Why are package prices fixed instead of hourly?",
    a: "Hourly billing punishes you for our learning curve and rewards slow work. A fixed price means you know the number before we start, and the risk of the build taking longer sits with us rather than you. It also forces the scope to be agreed properly up front, which is where most projects actually go wrong.",
  },
  {
    q: "Why do e-commerce stores, apps and platforms not have a published price?",
    a: "Those builds move with real variables — product counts, integrations, user roles, payment and shipping rules, migration of existing data. Publishing one number for them would either undersell the work or mislead you. Send the brief and you get a written, itemised quote instead of a guess.",
  },
  {
    q: "Does the price include hosting and the domain?",
    a: "No, and that is deliberate. Hosting and domains are registered in your own name and paid directly to the provider, so you own them outright and there is nothing to buy back from us later. We set them up with you on a call at cost — typically $10–20 a year for a domain, and from about $5–25 a month for hosting depending on traffic.",
  },
  {
    q: "What happens if I need more than a package includes?",
    a: "Two honest options: add the extra pages or features at the listed add-on prices, or move to a written quote if the project has grown past its original scope. Either way you approve the number in writing before the extra work begins. We do not build first and invoice afterwards.",
  },
  {
    q: "How do payments actually work?",
    a: "50% books your slot and covers discovery, design direction and the initial build. The remaining 50% is due when the site is approved and ready to go live. Larger builds can be split across milestones so you are never paying far ahead of delivered work.",
  },
  {
    q: "What happens after the site launches?",
    a: "Every project includes a 30-day support window covering bugs, broken links and anything that does not behave as agreed — at no extra cost. After that you can manage it yourself, since you own every account and the full source code, or take a care plan from $99 a month.",
  },
  {
    q: "Can you work to a tight budget?",
    a: "Often, yes — but never by quietly removing quality. Tell us the number and we will tell you honestly what is realistic at that budget, then either scope down to fit it or phase the build so the essentials launch first and the rest follows. What we will not do is agree to something unrealistic and deliver something you are disappointed in.",
  },
];

