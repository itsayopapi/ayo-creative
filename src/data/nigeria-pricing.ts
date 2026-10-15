// Master Nigeria pricelist — single source of truth for Pricing + quiz + contact.
export type WebsiteTier = {
  slug: string; name: string; audience: string;
  min: number; max: number | null;
  tagline: string; deliverables: string[]; signals: string[];
};
export type AppTier = {
  slug: string; name: string; architecture: string;
  min: number; max: number | null;
  tagline: string; specs: string[]; signals: string[];
};
export type AddOn = { name: string; min: number; max: number; per: string; desc: string };
// Reference rate used only to derive display equivalents for visitors
// outside Nigeria. NGN remains the single source of truth.
export const NGN_PER_USD = 1500;
export function ngnToUsd(ngn: number): number {
  return Math.max(5, Math.round(ngn / NGN_PER_USD / 5) * 5);
}
export const WEBSITE_TIERS: WebsiteTier[] = [
  { slug: "landing", name: "Landing Page / One-Pager",
    audience: "Product launches, events, single portfolios",
    min: 80000, max: 150000, tagline: "One sharp page built to capture leads.",
    deliverables: ["1 sectioned page (hero, benefits, proof, FAQ, contact)",
      "Lead capture form wired to email / WhatsApp",
      "Social pixel hooks (Meta, TikTok, Google)",
      "Standard on-page SEO + speed pass", "2 revision rounds"],
    signals: ["You need one page", "Goal is leads or signups", "No checkout, no login"] },
  { slug: "corporate", name: "Corporate Static",
    audience: "SMEs, consultancies, professional firms",
    min: 180000, max: 400000,
    tagline: "A complete 5-15 page presence that looks established.",
    deliverables: ["5 to 15 modular custom pages",
      "Services, about, team, contact layouts",
      "Speed optimization + mobile-first build",
      "Full structural SEO (sitemap, metadata, headings)",
      "Enquiry forms + Maps + business details", "3 revision rounds"],
    signals: ["5-15 pages", "Content rarely changes", "No admin panel needed"] },
  { slug: "cms", name: "Dynamic CMS Website",
    audience: "Blogs, news portals, heavy content sites",
    min: 350000, max: 750000, tagline: "Publish and edit everything yourself.",
    deliverables: ["WordPress or Strapi headless CMS setup",
      "Admin panel + roles for your team", "Blog / news / insights engine",
      "Auto-backups + update training session",
      "Structured SEO across all templates"],
    signals: ["You publish weekly", "Non-technical team must edit", "Blog / news section"] },
  { slug: "ecommerce", name: "E-Commerce Storefront",
    audience: "Retail brands, boutique merchants, D2C",
    min: 500000, max: 1200000, tagline: "A store built to sell, not just look like a shop.",
    deliverables: ["WooCommerce / Shopify setup",
      "Paystack / Flutterwave integration",
      "Product, cart, checkout and order flows",
      "Inventory + coupon + delivery-rule tools",
      "Order emails + WhatsApp notifications"],
    signals: ["You sell products online", "You need checkout + payments", "Inventory / variants / delivery"] },
];
export const APP_TIERS: AppTier[] = [
  { slug: "mvp", name: "MVP / Prototype App", architecture: "Low-Code (FlutterFlow / Bubble)",
    min: 800000, max: 1800000, tagline: "Test the idea with real users, fast.",
    specs: ["Simple relational database", "User authentication + profiles",
      "5-8 functional screens", "Admin view for managing data", "TestFlight / internal deployment"],
    signals: ["Validate before big spend", "5-8 screens is enough", "Simple logins"] },
  { slug: "custom-web", name: "Custom Web Application", architecture: "Full Stack (React / Next.js / Node.js)",
    min: 2000000, max: 5000000, tagline: "Bespoke SaaS built around how you work.",
    specs: ["Bespoke SaaS structure + secure custom APIs", "Multi-tier user portals and permissions",
      "Dashboards, billing and notifications", "Third-party integrations scoped per brief", "Staging + production + handover docs"],
    signals: ["Multiple user roles", "Custom workflows or billing", "You need your own backend"] },
  { slug: "cross-platform", name: "Cross-Platform Mobile App", architecture: "Native Build (Flutter / React Native)",
    min: 3500000, max: 8000000, tagline: "One codebase, live on iOS and Android.",
    specs: ["iOS and Android store deployments", "Push notifications + deep links",
      "Native hardware integration (camera, GPS, etc.)", "Offline-aware data sync where needed", "Store listing assets + launch support"],
    signals: ["Must be in App Store + Play Store", "Needs push or hardware", "Customers are mostly on phones"] },
];
export const ADD_ONS_NG: AddOn[] = [
  { name: "Extra static pages", min: 15000, max: 15000, per: " / page", desc: "For scaling existing sites without a rebuild." },
  { name: "Custom API integrations", min: 80000, max: 150000, per: "", desc: "Sync external CRMs, inventory systems, or global shipping software." },
  { name: "Copywriting and content", min: 30000, max: 60000, per: "", desc: "SEO-optimized text that actually sells." },
  { name: "Monthly agency retainer", min: 25000, max: 75000, per: " / mo", desc: "Small updates, security checks and hosting oversight." },
];
export function formatNGN(value: number): string {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(value);
}
export function priceRange(min: number, max: number | null): string {
  if (max === null) return formatNGN(min) + "+";
  return formatNGN(min) + " - " + formatNGN(max);
}
