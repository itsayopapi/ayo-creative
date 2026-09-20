import { useSEO } from "../../hooks/useSEO";
import OppBoard from "../../components/dev4hire/OppBoard";
import { PageIntro, SubPageHero, DevCTA } from "../../components/dev4hire/DevBits";
import { MATCH_SIGNALS } from "../../data/dev4hire";

export default function OpportunitiesPage() {
  useSEO("Opportunities — Dev4Hire Talent Network", "Sample project briefs from the Dev4Hire network: development, design, testing, cybersecurity. Register to be notified when a paid project matches your skills.", "/dev4hire/opportunities");
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SubPageHero
            label="Dev4Hire - Opportunities"
            title="Projects looking"
            accent="for talent."
            copy="Explore the brief format below. When a live project matches your registered skills, you get contacted directly - no bidding wars."
            cta="Register for Alerts"
            ctaHref="/dev4hire/register"
          />
          <OppBoard />

          <div className="mt-16 sm:mt-24">
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#ff6b35]" />
              How Matching Works
            </p>
            <h2 className="font-display font-black leading-[1.02] mb-10" style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}>
              The right project.
              <br />
              <span className="text-[#ff6b35] text-glow-orange">The right person.</span>
            </h2>
            <p className="text-[#888880] max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
              We never broadcast every project to everyone. Notification lists are built from your registered profile.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {MATCH_SIGNALS.map((m) => (
                <span key={m} className="bg-[#111] border border-white/10 text-[#f0ebe0]/80 text-xs sm:text-sm px-4 py-2.5 rounded-lg hover:border-[#ff6b35]/40 hover:text-[#ff6b35] transition-colors">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DevCTA />
    </>
  );
}
