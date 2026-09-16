import { useSEO } from "../hooks/useSEO";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import { Link } from "react-router-dom";
import { ADD_ONS, PRICING_FAQS } from "../data/content";
import { useCurrency } from "../hooks/useCurrency";

const PRICING = [
  {
    tier: "Starter",
    usd: 1500,
    suffix: "",
    period: "one-time",
    tagline: "Launch fast, look sharp.",
    features: [
      "Custom landing page",
      "Mobile-responsive design",
      "Contact / lead capture form",
      "Basic SEO setup",
      "2 revision rounds",
      "7-day delivery",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    tier: "Growth",
    usd: 3500,
    suffix: "",
    period: "one-time",
    tagline: "The full brand experience.",
    features: [
      "Up to 8-page custom website",
      "UI/UX strategy session",
      "Brand identity integration",
      "Advanced SEO optimization",
      "CMS integration + Analytics",
      "Multilingual support",
      "4 revision rounds",
      "14-day delivery",
    ],
    cta: "Start Your Project",
    highlight: true,
  },
  {
    tier: "Premium",
    usd: 7500,
    suffix: "+",
    period: "custom scope",
    tagline: "Enterprise-grade. No compromises.",
    features: [
      "Custom e-commerce or web app",
      "Full brand strategy & identity",
      "Advanced animations & interactions",
      "Custom CMS / backend",
      "Multi-currency & multilingual",
      "1-month post-launch support",
      "Unlimited revisions",
      "Priority delivery",
    ],
    cta: "Book a Call",
    highlight: false,
  },
];

export default function PricingPage() {
  useSEO(
    "Pricing — Website Design Packages & Costs",
    "Transparent website design pricing from $1,500. Starter, Growth and Premium packages with add-ons, care plans and a launch guarantee. Multi-currency accepted.",
    "/pricing"
  );
  const { info, convert } = useCurrency();

  return (
    <section className="py-28 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Investment
            <span className="w-5 h-px bg-[#ff6b35]" />
          </p>
          <h2
            className="font-display font-black leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Transparent pricing.
            <br />
            Serious results.
          </h2>
          <p className="text-[#888880] max-w-md mx-auto text-sm leading-relaxed">
            Every package includes our full process — strategy, design, and development. No hidden fees, ever.
            <span className="text-[#f0ebe0]"> Hosting and domain setup are billed separately</span> so you always own your accounts.
          </p>
          <p className="text-[#ff6b35] text-xs mt-4 flex items-center justify-center gap-2">
            <span aria-hidden="true">💱</span>
            {info.code === "USD"
              ? "Prices shown in USD (your local currency)."
              : `Prices auto-converted to your local currency (${info.code}).`}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {PRICING.map((p) => (
            <div
              key={p.tier}
              className={`relative flex flex-col p-10 ${p.highlight ? "bg-[#ff6b35]" : "bg-[#0d0d0d]"}`}
            >
              {p.highlight && (
                <div className="absolute top-4 right-4 bg-[#080808] text-[#ff6b35] text-[9px] font-bold px-2 py-1 tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <div
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${p.highlight ? "text-[#080808]/60" : "text-[#888880]"}`}
              >
                {p.tier}
              </div>
              <div
                className={`font-display text-5xl font-black mb-1 ${p.highlight ? "text-[#080808]" : "text-[#f0ebe0]"}`}
              >
                {convert(p.usd)}
                {p.suffix}
              </div>
              <div
                className={`text-xs mb-4 ${p.highlight ? "text-[#080808]/60" : "text-[#888880]"}`}
              >
                {p.period}
              </div>
              <p
                className={`text-sm mb-8 leading-relaxed ${p.highlight ? "text-[#080808]/80" : "text-[#888880]"}`}
              >
                {p.tagline}
              </p>
              <ul className="flex flex-col gap-3 flex-1 mb-10">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-sm ${p.highlight ? "text-[#080808]" : "text-[#f0ebe0]/80"}`}
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 ${p.highlight ? "text-[#080808]" : "text-[#ff6b35]"}`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`text-center text-sm font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 ${
                  p.highlight
                    ? "bg-[#080808] text-[#ff6b35] hover:bg-[#111] text-glow-orange"
                    : "btn-orange text-[#ffffff] hover:bg-[#ff8a5b] orange-glow"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-[#888880] text-xs mt-8">
          Need something custom?{" "}
          <Link to="/contact" className="text-[#ff6b35] underline underline-offset-2">
            Let's talk.
          </Link>
        </p>

        {/* Transparent by design */}
        <div className="mt-14 sm:mt-16">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Transparent by Design
          </p>
          <h2
            className="font-display font-black leading-[1.02] mb-8 sm:mb-10"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Exactly what's in,
            <br />
            <span className="text-[#ff6b35] text-glow-orange">and what's not.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#111] border border-white/5 rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full flex items-center justify-center text-[#ff6b35] flex-shrink-0">✓</div>
                <h3 className="font-display text-lg font-bold">Included in your price</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Strategy, UI/UX design & development",
                  "All revision rounds in your package",
                  "SEO setup & analytics integration",
                  "Source code & design file ownership",
                  "Post-launch support window",
                  "Launch QA across devices & browsers",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#f0ebe0]/85">
                    <span className="text-[#ff6b35] mt-0.5 flex-shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-white/5 border border-white/15 rounded-full flex items-center justify-center text-[#888880] flex-shrink-0">—</div>
                <h3 className="font-display text-lg font-bold">Billed separately (at cost)</h3>
              </div>
              <ul className="flex flex-col gap-2.5 mb-5">
                {[
                  "Domain name — ~$10–20/yr, paid directly to your registrar",
                  "Hosting — ~$5–25/mo, on your own account (Vercel, Netlify, etc.)",
                  "Premium plugins, stock assets or paid APIs your project needs",
                  "Ongoing care plans after the support window (optional, from $99/mo)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#888880]">
                    <span className="text-[#555] mt-0.5 flex-shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#888880] leading-relaxed bg-[#0d0d0d] border border-white/5 rounded-lg p-4">
                Why separate? Because hosting and domains registered in <span className="text-[#f0ebe0]">your name</span> mean
                no lock-in, no ransom pricing, and full control. We set everything up with you on the call — you just
                approve the account.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 sm:mt-20 bg-[#111] border border-[#ff6b35]/20 rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-14 h-14 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
            🛡️
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
              The Ayo Creative <span className="text-[#ff6b35] text-glow-orange">Launch Guarantee</span>
            </h3>
            <p className="text-[#888880] text-sm leading-relaxed max-w-2xl">
              If your finished site doesn't match the approved designs, we keep iterating until it does — free.
              And if we miss an agreed launch date for reasons within our control, you get 10% back. Simple.
            </p>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-16 sm:mt-20">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Add-Ons
          </p>
          <h2
            className="font-display font-black leading-[1.02] mb-8 sm:mb-10"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Extend any package.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {ADD_ONS.map((a) => (
              <div key={a.name} className="bg-[#080808] px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#111] transition-colors duration-200">
                <span className="text-sm text-[#f0ebe0]/90">{a.name}</span>
                <span className="text-[#ff6b35] text-sm font-semibold whitespace-nowrap">
                  {a.label ?? `${convert(a.usd!)}${a.suffix}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ items={PRICING_FAQS} title="Pricing questions." />
      <CTABanner title="Still deciding? Start with a free call." copy="A 30-minute discovery call costs nothing and commits you to nothing. Walk away with clarity on scope and budget either way." />
    </section>
  );
}
