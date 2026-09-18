export type OpenProject = {
  id: string;
  title: string;
  summary: string;
  budget: string;
  timeline: string;
  location: string;
  status: string;
  roles: { title: string; type: string; pay: string; skills: string[] }[];
  about: string[];
};

export const CONTRIBUTOR_ROLES = [
  {
    title: "Frontend developers",
    desc: "React, Next.js and responsive interfaces. You build accessible, mobile-first screens from clear specs.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend developers",
    desc: "APIs, databases and integrations. You deliver tested endpoints with clear documentation.",
    tags: ["Node.js", "REST APIs", "Databases"],
  },
  {
    title: "QA testers",
    desc: "Manual and exploratory testing across devices. You find the bugs users would find first.",
    tags: ["Manual testing", "Bug reports", "Mobile + desktop"],
  },
  {
    title: "Automation testers",
    desc: "Repeatable test coverage for critical flows like checkout, signup and payments.",
    tags: ["Test cases", "Regression suites", "CI-friendly"],
  },
  {
    title: "UI / UX contributors",
    desc: "Layouts, prototypes and design polish for specific screens or flows.",
    tags: ["Figma", "Prototypes", "Design systems"],
  },
  {
    title: "No-code / CMS helpers",
    desc: "Content entry, store setup and CMS configuration for larger launches.",
    tags: ["Shopify", "WordPress", "Content ops"],
  },
];

// ─── EDIT THESE ──────────────────────────────────────────────────────────────
// Replace the samples below with your real open projects.
// To hide the board temporarily, set OPEN_PROJECTS to an empty array:
//   export const OPEN_PROJECTS: OpenProject[] = [];
// The page automatically shows a "join the talent pool" state instead.

export const OPEN_PROJECTS: OpenProject[] = [
  {
    id: "wordpress-uiux",
    title: "WordPress build — UI/UX designer + QA",
    summary: "A WordPress project that needs a design pass and careful testing before launch.",
    budget: "Fixed-fee milestones, agreed before work starts",
    timeline: "Remote · async-friendly · milestone-based",
    location: "Remote — worldwide",
    status: "Accepting interest",
    roles: [
      {
        title: "UI/UX designer",
        type: "Register interest",
        pay: "Fee agreed per milestone",
        skills: ["Page layouts", "Mobile polish", "Design handoff"],
      },
      {
        title: "QA tester",
        type: "Register interest",
        pay: "Fee agreed per test cycle",
        skills: ["Cross-device checks", "Form testing", "Clear bug reports"],
      },
    ],
    about: [
      "This is an interest list, not an instant hire — we contact matching people when the build starts.",
      "Fixed fee and definition of done are agreed in writing before any work begins.",
      "Remote and async-friendly, with one weekly check-in.",
    ],
  },
];

export const PROJECT_CATEGORIES = [
  {
    id: "wordpress",
    title: "WordPress projects",
    desc: "Theme builds, customisation, WooCommerce setup, redesigns and cleanups.",
    example: "Example: a WordPress build that needs a UI/UX designer plus QA.",
    tags: ["UI/UX designer", "Frontend", "QA tester"],
  },
  {
    id: "company",
    title: "Company & business websites",
    desc: "Multi-page company sites, services, booking and enquiry flows.",
    example: "Example: a 5-page company site needing build plus device testing.",
    tags: ["Frontend", "Backend", "QA tester"],
  },
  {
    id: "ecommerce",
    title: "Online stores",
    desc: "Product setup, cart, checkout, payments and store testing.",
    example: "Example: a starter store needing product entry and checkout QA.",
    tags: ["Frontend", "CMS helper", "QA tester"],
  },
  {
    id: "landing",
    title: "Landing pages & portfolios",
    desc: "Single-page launches, campaigns and personal portfolio sites.",
    example: "Example: a launch page needing fast build and mobile QA.",
    tags: ["Frontend", "UI/UX", "QA tester"],
  },
  {
    id: "webapp",
    title: "Custom web apps & backend",
    desc: "Dashboards, APIs, small tools and database-backed workflows.",
    example: "Example: a reporting MVP needing full-stack plus automation tests.",
    tags: ["Full-stack", "Backend", "Automation tester"],
  },
  {
    id: "fixes",
    title: "Redesigns, fixes & QA cycles",
    desc: "Audits, bug hunts, speed improvements and cross-device testing.",
    example: "Example: a redesign QA cycle needing manual and automation testers.",
    tags: ["QA tester", "Automation tester", "Frontend"],
  },
];

export const CONTRIBUTOR_FAQS = [
  {
    q: "How do I get paid?",
    a: "Each task or milestone has a fixed fee agreed in writing before you start. When your work passes the stated acceptance criteria, payment is released via bank transfer, Wise or another method agreed with you.",
  },
  {
    q: "I'm a tester, not a developer. Can I apply?",
    a: "Yes — testers are core to this board. Manual QA, device testing, exploratory testing and regression cycles are paid roles on every extensive build.",
  },
  {
    q: "Do I need to be in a specific country?",
    a: "No. All contributor roles are remote. You just need reliable internet, overlap for at least one weekly check-in, and the ability to receive international payments.",
  },
  {
    q: "How are contributors selected?",
    a: "We review your experience, portfolio or past bug reports, availability and fit for the specific milestone. Shortlisted contributors get a small paid trial task before a larger milestone.",
  },
  {
    q: "Who owns the work?",
    a: "Work delivered under a paid milestone belongs to the project owner on payment, as stated in the contributor agreement you approve before starting.",
  },
  {
    q: "What if there are no open projects right now?",
    a: "Join the talent pool anyway using the form below. When a project matching your role opens, you'll be contacted before the public posting goes wider.",
  },
];
