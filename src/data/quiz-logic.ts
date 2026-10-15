export type QuizAnswers = {
  projectType?: string;
  sellOnline?: string;
  editSelf?: string;
  logins?: string;
  storeApps?: string;
  budget?: string;
  timeline?: string;
};
export const QUIZ_STEPS = [
  { key: "projectType", q: "What best describes what you want to build?",
    options: ["Landing / one-pager", "Corporate / business site (5-15 pages)",
      "Blog / content / news site", "Online store", "Mobile app (iOS + Android)",
      "Web app / SaaS / portal", "Not sure yet"] },
  { key: "sellOnline", q: "Must visitors buy or pay on the site?",
    options: ["Yes — checkout + payments", "No — leads and info only"] },
  { key: "editSelf", q: "Must YOU edit content or publish often?",
    options: ["Yes — I need an admin panel", "No — rarely changes"] },
  { key: "logins", q: "Must users create accounts / log in?",
    options: ["Yes — accounts, roles or dashboards", "No logins needed"] },
  { key: "storeApps", q: "Must it live in the App Store + Play Store?",
    options: ["Yes — real mobile apps", "No — website / web app is fine"] },
  { key: "budget", q: "Which budget band fits you? (shown in your currency)",
    options: ["Landing range", "Corporate range", "CMS range",
      "E-commerce range", "MVP app range", "Custom web app range", "Mobile app range", "Advise me"] },
  { key: "timeline", q: "When must it launch?",
    options: ["ASAP (rush)", "2-4 weeks", "1-2 months", "Flexible"] },
];
export function recommendTier(a: QuizAnswers): { tier: string; why: string[] } {
  const why: string[] = [];
  if (a.storeApps?.startsWith("Yes")) {
    why.push("You need App Store + Play Store builds.");
    return { tier: "cross-platform", why };
  }
  if (a.sellOnline?.startsWith("Yes") || a.projectType === "Online store") {
    why.push("Checkout + Paystack/Flutterwave means storefront scope.");
    return { tier: "ecommerce", why };
  }
  if (a.logins?.startsWith("Yes")) {
    if (a.projectType === "Mobile app (iOS + Android)") return { tier: "cross-platform", why: [...why, "Logins inside native apps."] };
    const simple = a.budget === "MVP app range";
    why.push(simple ? "Simple logins + few screens = MVP first." : "Roles, dashboards or APIs = custom build.");
    return { tier: simple ? "mvp" : "custom-web", why };
  }
  if (a.projectType === "Mobile app (iOS + Android)") return { tier: "cross-platform", why: ["Native mobile requirement."] };
  if (a.projectType === "Web app / SaaS / portal") {
    why.push("Portal / SaaS scope.");
    return { tier: a.budget === "MVP app range" ? "mvp" : "custom-web", why };
  }
  if (a.editSelf?.startsWith("Yes") || a.projectType === "Blog / content / news site")
    return { tier: "cms", why: ["You publish often and need an admin panel."] };
  if (a.projectType === "Corporate / business site (5-15 pages)") return { tier: "corporate", why: ["Multi-page static scope."] };
  if (a.projectType === "Landing / one-pager") return { tier: "landing", why: ["Single page, lead goal."] };
  if (a.budget === "Landing range") return { tier: "landing", why: ["Budget matches landing band."] };
  if (a.budget === "Corporate range") return { tier: "corporate", why: ["Budget matches corporate band."] };
  if (a.budget === "CMS range") return { tier: "cms", why: ["Budget matches CMS band."] };
  if (a.budget === "E-commerce range") return { tier: "ecommerce", why: ["Budget matches storefront band."] };
  return { tier: "corporate", why: ["Default: tell us more on the call and we will re-scope in writing."] };
}
