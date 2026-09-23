import { useState } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { useCurrency } from "../hooks/useCurrency";

const FIXED_PACKAGES = [
  {
    name: "Landing Page",
    priceMin: 100,
    priceMax: 200,
    tagline: "One focused page built to convert.",
    items: [
      "1 conversion-focused page",
      "Mobile-first responsive build",
      "Copy structuring guidance",
      "Contact / lead form",
      "Basic on-page SEO",
      "2 revision rounds",
    ],
    turnaround: "5–10 days",
  },
  {
    name: "Portfolio Site",
    priceMin: 100,
    priceMax: 200,
    tagline: "Show your work like a professional.",
    items: [
      "Up to 4 pages",
      "Project / work showcase layouts",
      "Mobile-first responsive build",
      "Contact form",
      "Basic on-page SEO",
      "2 revision rounds",
    ],
    turnaround: "1–2 weeks",
    featured: true,
  },
  {
    name: "5-Page Business Website",
    priceMin: 300,
    priceMax: 500,
    tagline: "A complete web presence for your business.",
    items: [
      "Up to 5 custom pages",
      "Services, about & contact layouts",
      "Mobile-first responsive build",
      "Lead capture form",
      "Basic on-page SEO setup",
      "2 revision rounds",
    ],
    turnaround: "2–3 weeks",
  },
];

const BRIEF_SERVICES = [
  {
    name: "E-commerce Stores",
    desc: "Product catalogs, carts, checkout, payments and order flows scoped to what you actually need — no bloated feature lists.",
  },
  {
    name: "Company & Corporate Sites",
    desc: "Larger multi-section sites with custom layouts, CMS needs or multiple stakeholders involved in approval.",
  },
  {
    name: "Custom Builds & Backend Work",
    desc: "Web apps, dashboards, API integrations and anything technical where the scope can't be guessed from a template.",
  },
];

const FAQS = [
  {
    q: "Does the price include hosting and domain?",
    a: "No. Hosting and domain are billed separately and registered in your own name — you always own your accounts. We help you set them up at cost during the project so there are no surprises, and ongoing hosting is typically $5–25/month depending on traffic.",
  },
  {
    q: "How does pricing work for complex projects like e-commerce?",
    a: "You send us your brief, we scope it, and you get a written fixed quote before any work starts. Complex projects are quoted individually because a 10-product store and a 2,000-product store are not the same job. The quote is agreed up front — no moving targets.",
  },
  {
    q: "What's the payment schedule?",
    a: "50% to reserve your slot and start, 50% on delivery before handover. For larger quoted projects we split payments across agreed milestones so you're never paying far ahead of progress.",
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
];

export default function PricingPage() {
  useSEO(
    "Transparent Website Pricing | Ayo Creative Designs",
    "Fixed-price landing pages from $100, portfolio and 5-page business websites from $300. E-commerce and custom builds quoted from your brief. Hosting and domain never hidden in the price."
  );

  const { convert, info } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const rawSym = String((info as any)?.symbol ?? (info as any)?.currency ?? "");
  const currencySymbol = !rawSym
    ? "$"
    : /^[A-Z]{3}$/.test(rawSym)
      ? rawSym + " "
      : rawSym;

  const fmt = (usd: number): string => {
    const v = convert(usd);
    if (typeof v === "string") return v;
    return currencySymbol + Math.round(v).toLocaleString();
  };

  return (
    <main className="bg-[#080808] text-[#f4f1ea]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#ff6b35]/10 blur-[130px]" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6b35]">
            — Pricing
          </p>
          <h1
            className="font-display font-black leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            CLEAR PRICES.
            <br />
            <span className="text-[#ff6b35] text-glow-orange">NO SURPRISES.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Fixed prices for defined scopes. For e-commerce, corporate sites and
            custom technical work, send a brief and get a written quote. Hosting
            and domain are never baked into the number to hide a margin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#fixed-prices"
              className="btn-orange inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold"
            >
              See fixed prices
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white"
            >
              Send a brief →
            </Link>
          </div>
        </div>
      </section>

      {/* FIXED PACKAGES */}
      <section id="fixed-prices" className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            — Fixed-price projects
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Know the number before we start.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {FIXED_PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`group relative flex flex-col bg-[#0b0b0b] p-7 transition-colors hover:bg-[#111] sm:p-8 ${
                  p.featured ? "ring-1 ring-inset ring-[#ff6b35]/45" : ""
                }`}
              >
                {p.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#ff6b35]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#ff6b35]">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display text-xl font-extrabold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm text-white/55">{p.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="font-display font-black text-[#ff6b35] text-glow-orange"
                    style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
                  >
                    {fmt(p.priceMin)}–{fmt(p.priceMax)}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-white/40">
                    fixed
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/45">
                  Typical delivery: {p.turnaround}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-6">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-white/70">
                      <span className="mt-0.5 font-bold text-[#ff6b35]">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-7 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "btn-orange"
                      : "border border-white/15 text-white/85 hover:border-[#ff6b35]/60 hover:text-white"
                  }`}
                >
                  Start this project →
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-white/45">
            Hosting and domain are not included — they're registered in your
            name, at cost, so you keep full ownership.
          </p>
        </div>
      </section>

      {/* BRIEF-BASED (COMPLEX) */}
      <section className="border-y border-white/10 bg-[#0a0a0a] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            — Complex projects
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Send a brief. Get a real quote.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            E-commerce stores, corporate sites and custom technical work can't be
            honestly priced from a menu. Tell us what you're building and you get
            a written, fixed quote before any work starts — competitive, not
            cheap, not padded.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {BRIEF_SERVICES.map((s) => (
              <div
                key={s.name}
                className="bg-[#0b0b0b] p-7 transition-colors hover:bg-[#111]"
              >
                <h3 className="font-display text-lg font-extrabold tracking-tight">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Send your brief",
                d: "What you're building, who it's for, your deadline. A few paragraphs is enough to start.",
              },
              {
                n: "02",
                t: "Get a scoped quote",
                d: "We define the scope together and you receive a written fixed price — no estimates that drift.",
              },
              {
                n: "03",
                t: "Build at that price",
                d: "The number you approved is the number you pay. Extra scope is quoted before it's built.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6"
              >
                <span className="font-display text-2xl font-black text-[#ff6b35]">
                  {s.n}
                </span>
                <h4 className="mt-3 font-semibold">{s.t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-orange inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold"
            >
              Send your brief →
            </Link>
          </div>
        </div>
      </section>

      {/* PAYMENT TERMS */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            — How payment works
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            Fair for you. Sustainable for us.
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
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
                className="bg-[#0b0b0b] p-7 transition-colors hover:bg-[#111]"
              >
                <h3 className="font-display text-lg font-extrabold text-[#ff6b35]">
                  {c.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            — Questions
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            Straight answers.
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span
                    className={`shrink-0 text-[#ff6b35] transition-transform duration-300 ${
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
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-20 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b35]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-3xl">
          <h2
            className="font-display font-black leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Ready to know your number?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Pick a fixed package or send your brief — either way you'll have a
            clear price in writing before anything begins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="btn-orange inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold"
            >
              Start a project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white"
            >
              View services →
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}

