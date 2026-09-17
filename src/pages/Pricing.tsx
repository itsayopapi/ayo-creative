import { useSEO } from "../hooks/useSEO";
import FAQ from "../components/FAQ";
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
  const { info, convert, localize, loading, failed, retry } = useCurrency();

  return (
      <div className="pt-20 sm:pt-24 pb-12 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl border border-white/10 bg-linear-to-br from-[#ff6b35]/10 via-[#111] to-[#111] p-6 sm:p-10 lg:p-14 mb-14">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-5">Website design & development / Pricing</p>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-center">
            <div>
              <h1 className="font-display font-bold leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
                Clear scope.<br />Considered design.<br /><span className="text-[#ff6b35]">An upfront price.</span>
              </h1>
              <p className="text-[#bbb] max-w-xl text-base leading-relaxed">From a focused landing page to a growing business website, invest in exactly what you need. Choose a starting scope below, then agree a fixed build price before work begins.</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a href="#website-packages" className="btn-orange text-white text-center text-sm font-semibold px-6 py-3.5">Explore packages ↓</a>
                <Link to="/contact" className="rounded-xl border border-white/20 text-center text-sm font-semibold px-6 py-3.5 hover:bg-white/5">Help me choose ↗</Link>
              </div>
            </div>
            <aside className="rounded-2xl bg-[#080808]/70 border border-white/10 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-[#aaa] mb-3">Your starting investment</p>
              <p aria-busy={loading} className="text-4xl sm:text-5xl font-semibold text-[#ff6b35] tracking-tight [overflow-wrap:anywhere]">{convert(100)}</p>
              <p className="text-sm text-[#bbb] mt-3">One-time build fee · not a subscription</p>
              <ul className="text-sm text-[#ccc] border-t border-white/10 mt-6 pt-5 space-y-3">
                <li>Written scope before you commit</li>
                <li>Additional work approved separately</li>
                <li>Hosting, domain & setup excluded</li>
              </ul>
            </aside>
          </div>
          <p role="status" className="text-[#ff6b35] text-xs mt-4 flex flex-wrap items-center justify-center gap-2">
            <span aria-hidden="true">💱</span>
            {loading
              ? "Detecting your local currency from your IP address…"
              : failed
                ? "Local currency is temporarily unavailable. Showing USD base prices."
                : info.code === "USD"
                  ? "Prices automatically selected in USD based on your approximate IP location."
                  : `Automatically showing approximate ${info.code} prices based on your IP location. Your quote confirms the final amount.`}
            {failed && <button type="button" onClick={retry} className="underline underline-offset-4 rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-2">Retry detection</button>}
          </p>
        </div>
        <div id="website-packages" className="scroll-mt-28 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div><p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">01 / Choose your website</p><h2 className="font-display text-3xl sm:text-4xl font-bold">A package for your next step.</h2></div>
          <p className="max-w-md text-sm text-[#aaa] leading-relaxed">Compare the entry and expanded scopes. Each range is a guide for the listed deliverables, not unlimited features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {WEBSITE_PACKAGES.map((p, index) => (
            <article key={p.name} className="min-w-0 flex flex-col p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#111] hover:border-[#ff6b35]/50 transition-colors">
              <div className="flex flex-wrap justify-between items-center gap-3 mb-6"><span className="text-[#ff6b35] text-xs font-semibold tracking-widest">0{index + 1}</span><span className="text-[11px] text-[#bbb] rounded-full border border-white/10 px-3 py-1">{p.min === 100 ? "Personal & launch" : "Business & functionality"}</span></div>
              <h3 className="text-xl font-semibold mb-4">{p.name}</h3>
              <p aria-busy={loading} className="text-3xl font-semibold text-[#ff6b35] flex flex-wrap items-baseline gap-x-2 [overflow-wrap:anywhere]">
                <span>{convert(p.min)}</span><span aria-hidden="true">–</span><span className="sr-only">to</span><span>{convert(p.max)}</span>
              </p>
              <p className="text-xs text-[#aaa] mt-2 mb-5">{loading ? "Detecting currency…" : info.code} · one-time build · scoped range</p>
              <p className="text-sm text-[#aaa] leading-relaxed mb-5">{p.description}</p>
              <dl className="rounded-2xl bg-[#080808]/60 border border-white/5 p-4 text-sm leading-relaxed mb-5 space-y-4">
                <div><dt className="text-[#ff6b35] font-medium mb-1">Entry scope</dt><dd className="text-[#ccc]">{localize(p.entry)}</dd></div>
                <div className="border-t border-white/10 pt-4"><dt className="text-[#f0ebe0] font-medium mb-1">Expanded scope</dt><dd className="text-[#aaa]">{localize(p.upgrade)}</dd></div>
              </dl>
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
                  `Optional care plans after the agreed support window — from ${convert(99)}/mo`,
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

        <section aria-labelledby="planning-title" className="mt-16 sm:mt-20 rounded-3xl border border-white/10 bg-[#111] p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Plan with confidence</p>
              <h2 id="planning-title" className="font-display text-3xl font-bold mb-5">From your brief<br />to a clear proposal.</h2>
              <p className="text-[#aaa] text-sm leading-relaxed mb-6">Page count, content volume, design complexity, and integrations determine your final quote. If your requirements change, additional work is priced for your approval first.</p>
              <h3 className="font-semibold text-sm mb-3">What to bring to the conversation</h3>
              <ul className="space-y-3 text-sm text-[#bbb]">
                {["Your business goal and intended audience", "Required pages, features, and example websites", "Your logo, copy, images, or product information", "Your budget and preferred launch date"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[#ff6b35]">✓</span>{item}</li>)}
              </ul>
              <p className="text-xs text-[#aaa] mt-4">Still gathering content? Tell us what you have so we can plan around it.</p>
            </div>
            <ol className="space-y-5">
              {[
                ["01", "Agree the deliverables", "Your proposal sets the pages, features, revision rounds, content requirements, delivery milestones, and support window."],
                ["02", "Confirm your payment plan", "The proposed split is 50% upfront and 50% on completion of the agreed scope. Your written quote confirms the currency, payment method, and milestones."],
                ["03", "Review and hand over", "Review the agreed work together, then complete payment and handover as outlined in your proposal. Domain and hosting setup remain separately quoted services."],
              ].map(([number, title, copy]) => <li key={number} className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"><span className="text-[#ff6b35] text-xs font-semibold pt-1">{number}</span><div><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-[#aaa] leading-relaxed">{copy}</p></div></li>)}
            </ol>
          </div>
        </section>

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
          <p className="text-sm text-[#aaa] leading-relaxed max-w-2xl mb-7">Optional services, never mandatory upgrades. These are starting prices for separately scoped work; specialist content and SEO can cost more than a small website build.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ADD_ONS.map((a) => (
              <div key={a.name} className="rounded-2xl border border-white/10 bg-[#111] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm text-[#f0ebe0]/90 flex-1 min-w-40">{a.label ? "Priority scheduling (subject to availability)" : a.name}</span>
                <span className="text-[#ff6b35] text-sm font-semibold [overflow-wrap:anywhere]">
                  {a.label ?? `${convert(a.usd!)}${a.suffix}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ items={PRICING_FAQS} title="Before you decide." />
      <div className="max-w-5xl mx-auto rounded-3xl border border-[#ff6b35]/25 bg-linear-to-br from-[#ff6b35]/10 to-[#111] p-6 sm:p-12 text-center">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-4">Your next step</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's put a clear price on your idea.</h2>
        <p className="text-[#bbb] max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-7">Tell us what you want to build, your budget, and your preferred launch date. We will help you choose a suitable scope before you commit.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3"><Link to="/contact" className="btn-orange px-7 py-4 text-white text-sm font-semibold">Discuss my project ↗</Link><Link to="/showcase" className="rounded-xl border border-white/20 px-7 py-4 text-sm hover:bg-white/5">Explore website concepts</Link></div>
        <p className="text-xs text-[#aaa] mt-5">A conversation first. A written proposal next.</p>
      </div>
    </div>
  );
}
