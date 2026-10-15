export const APP_TIERS: AppTier[] = [
  { slug: "mvp", name: "MVP / Prototype App", architecture: "Low-Code (FlutterFlow / Bubble)",
    min: 800000, max: 1800000, tagline: "Test the idea with real users, fast.",
    specs: ["Simple relational database", "User authentication + profiles",
      "5-8 functional screens", "Admin view for managing data",
      "TestFlight / internal deployment"],
    signals: ["Validate before big spend", "5-8 screens is enough", "Simple logins, no complex roles"] },
  { slug: "custom-web", name: "Custom Web Application", architecture: "Full Stack (React / Next.js / Node.js)",
    min: 2000000, max: 5000000, tagline: "Bespoke SaaS built around how you work.",
    specs: ["Bespoke SaaS structure + secure custom APIs",
      "Multi-tier user portals and permissions",
      "Dashboards, billing and notifications",
      "Third-party integrations scoped per brief",
      "Staging + production + handover docs"],
    signals: ["Multiple user roles", "Custom workflows or billing", "You need your own API / backend"] },
  { slug: "cross-platform", name: "Cross-Platform Mobile App", architecture: "Native Build (Flutter / React Native)",
    min: 3500000, max: 8000000, tagline: "One codebase, live on iOS and Android.",
    specs: ["iOS and Android store deployments",
      "Push notifications + deep links",
      "Native hardware integration (camera, GPS, etc.)",
      "Offline-aware data sync where needed",
      "Store listing assets + launch support"],
    signals: ["Must be in App Store + Play Store", "Needs push or hardware", "Customers are mostly on phones"] },
];
export const ADD_ONS_NG: AddOn[] = [
  { name: "Extra static pages", price: "NGN 15,000 / page", desc: "For scaling existing sites without a rebuild." },
  { name: "Custom API integrations", price: "NGN 80,000 - NGN 150,000", desc: "Sync external CRMs, inventory systems, or global shipping software." },
  { name: "Copywriting and content", price: "NGN 30,000 - NGN 60,000", desc: "SEO-optimized text that actually sells." },
  { name: "Monthly agency retainer", price: "NGN 25,000 - NGN 75,000 / mo", desc: "Small updates, security checks and hosting oversight." },
];
export function formatNGN(value: number): string {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(value);
}
export function priceRange(min: number, max: number | null): string {
  if (max === null) return formatNGN(min) + "+";
  return formatNGN(min) + " - " + formatNGN(max);
}
