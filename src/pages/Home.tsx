import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import ShowcasePreview from "../components/ShowcasePreview";
import ServicesPreview from "../components/ServicesPreview";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import { Link } from "react-router-dom";
import { PROCESS_STEPS, PRICING_FAQS } from "../data/content";
import { useSEO } from "../hooks/useSEO";

export default function Home() {
  useSEO(
    "Ayo Creative Designs — Website Design & Development Agency",
    "Premium web design agency building revenue-generating websites for businesses in 40+ countries. UI/UX, web development, e-commerce & SEO. Free quote in 24 hours.",
    "/"
  );
  return (
    <>
      <Hero />
      <Marquee />
      <div className="reveal"><ShowcasePreview /></div>
      <div className="reveal"><ServicesPreview /></div>
      <div className="reveal"><WhyUs /></div>

      {/* Process strip */}
      <div className="reveal">
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="w-5 h-px bg-[#ff6b35]" />
                How We Work
              </p>
              <h2
                className="font-display font-black leading-[1.02]"
                style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
              >
                From brief to launch in
                <br />
                <span className="text-[#ff6b35] text-glow-orange">six clear steps.</span>
              </h2>
            </div>
            <Link
              to="/process"
              className="text-xs font-semibold text-[#ff6b35] border border-[#ff6b35]/30 px-4 py-2.5 rounded-lg hover:bg-[#ff6b35] hover:text-white transition-colors duration-200 whitespace-nowrap w-fit min-h-[44px] inline-flex items-center"
            >
              Full Process →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {PROCESS_STEPS.slice(0, 6).map((step) => (
              <div key={step.number} className="bg-[#080808] p-6 sm:p-8 group hover:bg-[#111] transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#333] text-xs font-mono">{step.number}</span>
                  <span className="text-[#ff6b35] text-[10px] font-semibold">{step.duration}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#888880] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      <FAQ items={PRICING_FAQS.slice(0, 4)} title="Questions, answered." />
      <CTABanner />
    </>
  );
}

