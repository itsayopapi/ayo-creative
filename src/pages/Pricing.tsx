import { useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import PricingQuizModal from "../components/PricingQuizModal";
import { WEBSITE_TIERS, APP_TIERS, ADD_ONS_NG, priceRange } from "../data/nigeria-pricing";

const FAQS = [
  {
    q: "Does the price include hosting and domain?",
    a: "No. Hosting and domain are registered in your own name and paid at cost — you keep full ownership. Build prices cover design, development, and launch only.",
  },
  {
    q: "What if my needs sit between two tiers?",
    a: "That is what the add-ons are for: extra pages at NGN 15,000 each, API integrations at NGN 80,000-150,000, or copywriting at NGN 30,000-60,000. If the scope has truly outgrown the tier, we re-scope in writing before building.",
  },
  {
    q: "What's the payment schedule?",
    a: "50% to reserve your slot and start, 50% on delivery before handover. Larger app builds split across agreed milestones.",
  },
  {
    q: "Are these prices negotiable?",
    a: "The listed prices match the listed scope. If your scope is smaller or larger, we adjust the quote to match — what we don't do is quote low and pad the invoice later. You'll always know the full number before we start.",
  },
  {
    q: "What if I need changes after the site is live?",
    a: "Every package includes 2 revision rounds during the build. After launch, small changes are billed individually or covered by a care plan. Anything beyond the original scope is quoted before we touch it.",
  },
  {
    q: "Can I see exactly what I'm paying for?",
    a: "Yes — every deliverable listed on each package is what you get. No vague line items. If something isn't listed, it isn't included, and we'll tell you the price before you commit.",
  },
  {
    q: "Why are the prices different in Nigeria?",
    a: "We price regionally. Clients in Nigeria see local naira rates because that reflects what sustainable agency work costs here — international clients are billed at competitive global rates in their own currency. Your location is detected automatically, you always see the right price, and the final number is agreed in writing before work starts.",
  },
];

export default function PricingPage() {
  useSEO(
    "Nigeria Website & App Pricing in Naira | Ayo Creative Designs",
    "Landing pages NGN 80k-150k, corporate sites NGN 180k-400k, CMS NGN 350k-750k, e-commerce NGN 500k-1.2M+. MVP apps, custom web apps and mobile apps priced by architecture. Take the 30-second quiz to find your tier."
  );

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
    <main className="bg-[#080808] text-[#f4f1ea]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-5 pt-24 pb-12 sm:px-6 sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#ff6b35]/10 blur-[130px]" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ff6b35] sm:mb-5 sm:text-xs">
            — Pricing
          </p>
          <h1
            className="font-display font-black leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2rem, 9vw, 4.5rem)" }}
          >
            CLEAR PRICES.
            <br />
            <span className="text-[#ff6b35] text-glow-orange">NO SURPRISES.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-lg">
            Standard Nigeria market rates in Naira — websites by complexity, apps by
            architecture, add-ons by fixed price. Not sure where you fit? Take the
            30-second check below.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => setQuizOpen(true)}
              className="btn-orange inline-flex w-full items-center justify-center rounded-xl px-7 py-4 text-sm font-semibold sm:w-auto sm:py-3.5"
            >
              Not sure? Find my tier — 30 secs
            </button>
            <a
              href="#websites"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white sm:w-auto sm:py-3.5"
            >
              Browse tiers ↓
            </a>
          </div>
        </div>
      </section>

      {/* WEBSITE TIERS */}
      <section id="websites" className="scroll-mt-20 px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:mb-4 sm:text-xs">
            — Website development tiers
          </p>
          <h2 className="font-display font-black leading-[1.05] tracking-tight" style={{ fontSize: "clamp(1.6rem, 7vw, 3rem)" }}>
            Websites, priced by complexity.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
            Standard local market rates in Nigeria. Find your row, check the deliverables,
            and you already know your band before the call.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
            {WEBSITE_TIERS.map((t) => (
              <div key={t.slug} className="flex flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-[#ff6b35]/40 sm:p-8">
                <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.22em] text-white/45 sm:text-[11px]">{t.audience}</p>
                <h3 className="font-display mt-2 text-lg font-extrabold tracking-tight sm:text-xl">{t.name}</h3>
                <p className="mt-1.5 text-sm text-white/55">{t.tagline}</p>
                <p className="font-display mt-4 break-words text-[1.65rem] font-black leading-tight text-[#ff6b35] text-glow-orange sm:text-3xl">{priceRange(t.min, t.max)}</p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-white/10 pt-5 sm:mt-6 sm:pt-6">
                  {t.deliverables.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[13px] leading-relaxed text-white/70 sm:text-sm">
                      <span className="mt-0.5 shrink-0 font-bold text-[#ff6b35]">✓</span>
                      <span className="min-w-0">{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 break-words text-xs italic leading-relaxed text-white/45 sm:mt-5">
                  Fits you if: {t.signals.join("  •  ")}
                </p>
                <Link
                  to="/contact"
                  className="btn-orange mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold sm:mt-6 sm:w-auto"
                >
                  Start this project →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/45">
            Hosting and domain are not included — registered in your name, at cost, so you keep full ownership.
          </p>
        </div>
      </section>

      {/* APP TIERS + ADDONS + QUESTIONNAIRE */}
      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:mb-4 sm:text-xs">
            — Mobile and web application tiers
          </p>
          <h2 className="font-display font-black leading-[1.05] tracking-tight" style={{ fontSize: "clamp(1.6rem, 7vw, 3rem)" }}>
            Apps, priced by architecture.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
            Low-code MVP, full-stack web app, or native mobile — pick the architecture
            that matches your ambition and budget.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {APP_TIERS.map((t) => (
              <div key={t.slug} className="flex flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:p-7">
                <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.22em] text-[#ff6b35] sm:text-[11px]">{t.architecture}</p>
                <h3 className="font-display mt-2 text-lg font-extrabold tracking-tight sm:text-xl">{t.name}</h3>
                <p className="mt-1.5 text-sm text-white/55">{t.tagline}</p>
                <p className="font-display mt-4 break-words text-[1.65rem] font-black leading-tight text-[#ff6b35] sm:text-2xl">{priceRange(t.min, t.max)}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-white/10 pt-5">
                  {t.specs.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[13px] leading-relaxed text-white/70 sm:text-sm">
                      <span className="mt-0.5 shrink-0 font-bold text-[#ff6b35]">✓</span><span className="min-w-0">{s}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white sm:mt-6">
                  Scope my app →
                </Link>
              </div>
            ))}
          </div>

          <h3 className="font-display mt-10 text-lg font-extrabold sm:mt-12 sm:text-xl">Modular add-ons and upsells</h3>
          <p className="mt-2 max-w-2xl text-sm text-white/55">For requirements that sit between packages — bolt these on without a rebuild.</p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {ADD_ONS_NG.map((a) => (
              <div key={a.name} className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:p-6">
                <p className="text-sm font-bold leading-snug">{a.name}</p>
                <p className="font-display mt-2 break-words text-base font-black leading-tight text-[#ff6b35] sm:text-lg">{a.price}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/55">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <button onClick={() => setQuizOpen(true)} className="btn-orange inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-7 py-4 text-sm font-semibold sm:w-auto sm:py-3.5">
              Not sure? Find my tier — 30 secs
            </button>
            <Link to="/contact" className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white sm:w-auto sm:py-3.5">
              Send your brief →
            </Link>
          </div>
        </div>
      </section>

      {/* PAYMENT TERMS */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:mb-4 sm:text-xs">
            — How payment works
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 7vw, 2.6rem)" }}
          >
            Fair for you. Sustainable for us.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-px sm:overflow-hidden sm:rounded-2xl sm:border sm:border-white/10 sm:bg-white/10 sm:grid-cols-3">
            {[
              {
                t: "50% to start",
                d: "Reserves your project slot and covers kickoff, structure and design direction.",
              },
              {
                t: "50% on delivery",
                d: "Paid when the site is complete and approved — before files and access are handed over.",
              },
              {
                t: "Milestones for big builds",
                d: "Larger quoted projects are split across agreed milestones so neither side is ever exposed.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-colors hover:bg-[#111] sm:rounded-none sm:border-0 sm:p-7"
              >
                <h3 className="font-display text-base font-extrabold text-[#ff6b35] sm:text-lg">
                  {c.t}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60 sm:mt-3 sm:text-sm">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:mb-4 sm:text-xs">
            — Questions
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 7vw, 2.6rem)" }}
          >
            Straight answers.
          </h2>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10 sm:mt-8">
            {FAQS.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
                >
                  <span className="text-[15px] font-semibold leading-snug sm:text-base">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-[#ff6b35] transition-transform duration-300 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === i
                      ? "grid-rows-[1fr] pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-white/60">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10 px-5 py-14 text-center sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-3xl">
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 7vw, 3rem)" }}
          >
            Ready to know your number?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
            Pick a fixed package or send your brief — either way you'll have a
            clear price in writing before anything begins.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <button
              onClick={() => setQuizOpen(true)}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white sm:w-auto sm:py-3.5"
            >
              Not sure? Find my tier — 30 secs
            </button>
            <Link
              to="/contact"
              className="btn-orange inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-7 py-4 text-sm font-semibold sm:w-auto sm:py-3.5"
            >
              Start a project
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white sm:w-auto sm:py-3.5"
            >
              View services →
            </Link>
          </div>
        </div>
      </section>


    </main>
    <PricingQuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}

