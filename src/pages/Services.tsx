import { useSEO } from "../hooks/useSEO";
import { SERVICES } from "../data/content";
import CTABanner from "../components/CTABanner";

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Shopify", "Webflow",
  "Sanity CMS", "Figma", "Vercel", "Stripe", "GA4", "Framer Motion",
];

const ENGAGEMENT_MODELS = [
  {
    title: "Fixed-Scope Project",
    desc: "Best for defined launches — a new site, redesign, or e-commerce build. Fixed price, fixed timeline, milestone payments.",
    meta: "From $1,500",
  },
  {
    title: "Retainer Partnership",
    desc: "Ongoing design and development support for teams that ship continuously. Reserved capacity each month.",
    meta: "From $1,200/mo",
  },
  {
    title: "Sprint Consultancy",
    desc: "Targeted audits and fixes — conversion audits, UX reviews, performance rescue — delivered in focused 1–2 week sprints.",
    meta: "From $600",
  },
];

export default function Services() {
  useSEO(
    "Services — Web Design, Development, E-Commerce & SEO",
    "UI/UX design, web development, e-commerce stores, brand strategy, SEO and responsive design. Fixed-scope projects, retainers and sprints from $600.",
    "/services"
  );
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#ff6b35]" />
              What We Do
            </p>
            <h2
              className="font-display font-black leading-[1.02]"
              style={{ fontSize: "clamp(32px, 6vw, 60px)" }}
            >
              Services built
              <br />
              for global growth.
            </h2>
          </div>
          <p className="text-[#888880] max-w-xs leading-relaxed text-sm">
            Every engagement is scoped to your goals — not a templated deliverable that ignores your market.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((s) => (
            <div
              key={s.number}
              className="group bg-[#080808] p-6 sm:p-8 hover:bg-[#111] transition-colors duration-300 cursor-default flex flex-col"
            >
              <div className="text-[#333] text-xs font-mono mb-4 sm:mb-6">{s.number}</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-[#ff6b35] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[#888880] text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-5 pt-5 border-t border-white/5 flex flex-col gap-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-[#888880]">
                    <span className="text-[#ff6b35] mt-0.5 flex-shrink-0">→</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engagement models */}
        <div className="mt-20 sm:mt-28">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Ways to Work With Us
          </p>
          <h2
            className="font-display font-black leading-[1.02] mb-10 sm:mb-14"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Pick the engagement
            <br />
            that fits <span className="text-[#ff6b35] text-glow-orange">your stage.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {ENGAGEMENT_MODELS.map((m) => (
              <div key={m.title} className="bg-[#111] border border-white/5 p-6 sm:p-8 rounded-lg hover:border-[#ff6b35]/30 transition-all duration-300">
                <div className="text-[#ff6b35] text-xs font-semibold mb-3">{m.meta}</div>
                <h3 className="font-display text-xl font-bold mb-3">{m.title}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-20 sm:mt-28">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Our Stack
          </p>
          <h2
            className="font-display font-black leading-[1.02] mb-10"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Modern tools.
            <br />
            <span className="text-[#ff6b35] text-glow-orange">Zero legacy debt.</span>
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {TECH_STACK.map((t) => (
              <span
                key={t}
                className="bg-[#111] border border-white/10 text-[#f0ebe0]/80 text-xs sm:text-sm px-4 py-2.5 rounded-lg hover:border-[#ff6b35]/40 hover:text-[#ff6b35] transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <CTABanner />
    </section>
  );
}
