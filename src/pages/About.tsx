import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import founderImg from "../img/founder.jpeg";
import logoImg from "../img/logo.jpg";
import { VALUES } from "../data/content";
import CTABanner from "../components/CTABanner";

const FALLBACK =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&auto=format&crop=face";
void FALLBACK; // kept for future image fallbacks

export default function About() {
  useSEO(
    "About — Ayo Creative Designs",
    "Ayo Creative Designs is an independent web design studio building custom, conversion-focused websites for businesses locally and internationally. Meet the founder.",
    "/about"
  );
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="mb-14 sm:mb-20">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            About Us
          </p>
          <h2
            className="font-display font-black leading-[1.05] max-w-3xl"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            A small studio with a
            <br />
            <span className="text-[#ff6b35] text-glow-orange">simple standard:</span> build it properly.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          {/* Founder photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-28">
              <div className="aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-full border border-white/10 bg-[#080808]">
                <img
                  src={logoImg}
                  alt="Ayo Creative Designs logo"
                  className="w-full h-full object-contain p-12 sm:p-16"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-l-2 border-t-2 border-[#ff6b35] rounded-sm pointer-events-none" />
              <div className="absolute -inset-10 bg-[#ff6b35] opacity-10 blur-3xl -z-10 pointer-events-none" />
            </div>
          </div>
          {/* Bio content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="space-y-6 text-[#888880] leading-relaxed text-base">
              <p>
                Ayo Creative Designs is an independent web design studio led by{" "}
                <span className="text-[#f0ebe0] font-semibold">Ayomide Qudus</span>. We build custom
                websites for businesses that need more than a template — restaurants, boutiques,
                startups, and professional practices, both locally and internationally.
              </p>
              <p>
                The studio was born from a straightforward observation: most small and mid-sized
                businesses were choosing between cheap, generic website builders and expensive
                agencies with layers of overhead. We sit deliberately in the middle — senior-level
                design and development, fixed transparent pricing, and direct communication with
                the person actually doing the work.
              </p>
              <p>
                Every project gets the same treatment regardless of size: a real discovery process,
                designs tailored to your brand and market, clean production code, and a launch you
                fully own — accounts, domain, and source code in your name.
              </p>
            </div>

            {/* Founder signature card */}
            <div className="mt-10 bg-[#111] border border-white/5 rounded-lg p-6 flex items-center gap-4">
              <img
                src={founderImg}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 rounded-full object-cover border border-[#ff6b35]/30 flex-shrink-0"
              />
              <div>
                <div className="font-display font-bold text-lg">Ayomide Qudus</div>
                <div className="text-[#888880] text-sm">Founder & Lead Designer, Ayo Creative Designs</div>
              </div>
            </div>

            {/* Quick facts — honest, no invented numbers */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
              {[
                { label: "Focus", value: "Web design & development" },
                { label: "Clients", value: "Local & international" },
                { label: "Model", value: "Fixed-price, project-based" },
              ].map((f) => (
                <div key={f.label} className="bg-[#080808] px-5 py-5">
                  <div className="text-[#ff6b35] text-[10px] font-semibold uppercase tracking-[0.15em] mb-1.5">
                    {f.label}
                  </div>
                  <div className="text-sm text-[#f0ebe0]/90">{f.value}</div>
                </div>
              ))}
            </div>

            {/* Page CTA */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-[#0d0d0d] border border-white/5 rounded-lg p-6 sm:p-8">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
                  Want to work with a studio that <span className="text-[#ff6b35] text-glow-orange">cares this much?</span>
                </h3>
                <p className="text-[#888880] text-sm">Tell us about your project — replies within 24 hours.</p>
              </div>
              <Link
                to="/contact"
                className="btn-orange inline-flex items-center justify-center text-[#ffffff] text-sm font-semibold px-7 py-4 rounded-lg hover:bg-[#ff8a5b] orange-glow transition-colors duration-200 min-h-[52px] whitespace-nowrap"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 sm:mt-28">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            What We Stand For
          </p>
          <h2
            className="font-display font-black leading-[1.02] mb-10 sm:mb-14"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            Principles we
            <br />
            <span className="text-[#ff6b35] text-glow-orange">never compromise.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-[#111] border border-white/5 p-6 sm:p-8 rounded-lg hover:border-[#ff6b35]/30 transition-all duration-300">
                <div className="text-[#333] text-xs font-mono mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTABanner />
    </section>
  );
}
