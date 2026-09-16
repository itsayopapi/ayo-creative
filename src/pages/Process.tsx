import { useSEO } from "../hooks/useSEO";
import { PROCESS_STEPS } from "../data/content";
import CTABanner from "../components/CTABanner";
import { Link } from "react-router-dom";

const WHAT_YOU_GET = [
  "A dedicated senior point of contact",
  "Weekly progress demos",
  "Figma access with live prototypes",
  "Full source code & design files at handoff",
  "Training walkthrough for your team",
  "Post-launch support window",
];

const TOOLS = ["Figma", "Slack / WhatsApp", "Google Meet", "Notion", "Loom", "Email"];

export default function Process() {
  useSEO(
    "Our Process — From Brief to Launch in 6 Steps",
    "How we work: free discovery call, strategy & scope, design, development, launch and ongoing support. Most websites ship in 2–6 weeks with weekly demos.",
    "/process"
  );
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            How We Work
            <span className="w-5 h-px bg-[#ff6b35]" />
          </p>
          <h2 className="font-display font-black leading-[1.02]" style={{ fontSize: "clamp(32px, 6vw, 60px)" }}>
            A process built for
            <br />
            <span className="text-[#ff6b35] text-glow-orange">speed & clarity.</span>
          </h2>
          <p className="text-[#888880] max-w-lg mx-auto mt-6 text-sm leading-relaxed">
            From first call to launch — typically 3–6 weeks. No black boxes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="group relative bg-[#111] border border-white/5 p-6 sm:p-8 hover:border-[#ff6b35]/30 transition-all duration-300 rounded-lg">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-0 group-hover:opacity-100" />
              <div className="text-[#333] text-xs font-mono mb-4">{step.number}</div>
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">{step.title}</h3>
              <div className="text-[#ff6b35] text-xs font-semibold mb-4">{step.duration}</div>
              <p className="text-[#888880] text-sm leading-relaxed mb-5">{step.desc}</p>
              <ul className="flex flex-col gap-2">
                {step.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-[#888880]">
                    <span className="text-[#ff6b35] mt-0.5 flex-shrink-0">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#ff6b35]" />
              Included in Every Project
            </p>
            <h2
              className="font-display font-black leading-[1.02] mb-6"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              What you get,
              <br />
              <span className="text-[#ff6b35] text-glow-orange">always.</span>
            </h2>
            <p className="text-[#888880] text-sm leading-relaxed mb-8">
              Regardless of package or price, every Ayo Creative engagement includes the same core
              standard of communication, transparency, and handoff quality.
            </p>
            <Link
              to="/contact"
              className="btn-orange inline-flex items-center justify-center text-[#ffffff] text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-[#ff8a5b] orange-glow transition-colors duration-200 min-h-[52px]"
            >
              Start With Step 01 →
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {WHAT_YOU_GET.map((w, i) => (
                <div key={w} className="bg-[#0d0d0d] px-6 py-5 flex items-center gap-3">
                  <span className="text-[#333] text-xs font-mono flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-[#f0ebe0]/90">{w}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#888880] mb-3">
                Tools we work with
              </div>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <span key={t} className="bg-[#111] border border-white/10 text-[#f0ebe0]/80 text-xs px-3.5 py-2 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </section>
  );
}
