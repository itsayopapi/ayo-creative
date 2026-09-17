import { useSEO } from "../hooks/useSEO";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import { Link } from "react-router-dom";
import { ADD_ONS, PRICING_FAQS } from "../data/content";
import { useCurrency } from "../hooks/useCurrency";

import { WEBSITE_PACKAGES } from "../data/pricing";

export default function PricingPage() {
  useSEO(
    "Pricing — Website Design Packages & Costs",
    "Website pricing from $100 USD: landing pages and portfolios $100–$200; company sites, starter stores and scoped backend projects $300–$500. Hosting and domain setup excluded.",
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
          <h1
            className="font-display font-black leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Your website. Your budget.
            <br />
            <span className="text-[#ff6b35]">Starting at {convert(100)}.</span>
          </h1>
          <p className="text-[#888880] max-w-md mx-auto text-sm leading-relaxed">
            Choose the kind of website you need, then agree a fixed scope and price before work begins. The ranges below are for the listed deliverables, not unlimited features.
            <span className="text-[#f0ebe0]"> Hosting, domains, and their setup are not included.</span>
          </p>
          <p className="text-[#ff6b35] text-xs mt-4 flex items-center justify-center gap-2">
            <span aria-hidden="true">💱</span>
            {info.code === "USD"
              ? "Base prices in USD. Any local-currency estimates are indicative; your quote confirms the final currency and amount."
              : `Approximate ${info.code} conversions of USD base prices. Exchange rates can change; your quote confirms the final amount.`}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {WEBSITE_PACKAGES.map((p) => (
            <article key={p.name} className="min-w-0 flex flex-col p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0d0d0d] hover:border-[#ff6b35]/50 transition-colors">
              <h2 className="font-display text-xl font-bold mb-4">{p.name}</h2>
              <p className="font-display text-3xl font-black text-[#ff6b35] flex flex-wrap items-baseline gap-x-2 break-all">
                <span>{convert(p.min)}</span><span aria-hidden="true">–</span><span className="sr-only">to</span><span>{convert(p.max)}</span>
              </p>
              <p className="text-xs text-[#aaa] mt-2 mb-5">{info.code} · one-time build · scoped range</p>
              <p className="text-sm text-[#aaa] leading-relaxed mb-5">{p.description}</p>
              <div className="rounded-xl bg-white/5 p-4 text-sm leading-relaxed mb-5">
                <p className="text-[#f0ebe0]">{p.entry}</p>
                <p className="text-[#aaa] mt-3">{p.upgrade}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-7">
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#f0ebe0]/80">
                    <span aria-hidden="true" className="text-[#ff6b35]">✓</span>{feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-orange text-white text-center text-sm font-semibold py-3.5 px-4 rounded-xl min-h-12" aria-label={`Request a quote for ${p.name}`}>
                Discuss this project →
              </Link>
            </article>
          ))}
          <article className="min-w-0 rounded-2xl border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-4">Beyond the essentials</p>
            <h2 className="font-display text-2xl font-bold mb-4">Bigger idea? Let's scope it.</h2>
            <p className="text-sm text-[#aaa] leading-relaxed mb-6">Large catalogues, custom checkout, booking systems, complex permissions, and full SaaS products need a separate quote. The {convert(500)} upper range is not a cap on every project.</p>
            <Link to="/contact" className="border border-[#ff6b35]/50 rounded-xl text-center text-[#ff6b35] py-3.5 px-4 text-sm font-semibold hover:bg-[#ff6b35]/10">Get a custom quote →</Link>
          </article>
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
                  "Written scope and agreed deliverables",
                  "Mobile-responsive layouts for website builds",
                  "Basic page titles and descriptions for website builds",
                  "Ownership of your custom code; platform licences remain separate",
                  "Revision rounds and support window specified in your quote",
                  "Testing of the agreed pages and features",
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
                <h3 className="font-display text-lg font-bold">Not included in the build price</h3>
              </div>
              <ul className="flex flex-col gap-2.5 mb-5">
                {[
                  "Domain registration and hosting subscriptions — paid directly to your providers",
                  "Domain / hosting setup assistance — quoted separately",
                  "Paid themes, plugins, stock assets, APIs, and payment processing fees",
                  "Optional care plans after the agreed support window — from $99 USD/mo",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#888880]">
                    <span className="text-[#555] mt-0.5 flex-shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#888880] leading-relaxed bg-[#0d0d0d] border border-white/5 rounded-lg p-4">
                Why separate? Because hosting and domains registered in <span className="text-[#f0ebe0]">your name</span> mean
                no lock-in and full control. Any setup help and third-party costs are agreed separately before you commit.
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
              A clear scope. <span className="text-[#ff6b35]">A price agreed upfront.</span>
            </h3>
            <p className="text-[#888880] text-sm leading-relaxed max-w-2xl">
              Your proposal lists deliverables, revisions, content requirements, timeline, and payment milestones.
              If you request additional work, you receive a separate price to approve first — no surprise extras.
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
