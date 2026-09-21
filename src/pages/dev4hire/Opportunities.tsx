import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import { SubPageHero, DevCTA } from "../../components/dev4hire/DevBits";
import { MATCH_SIGNALS } from "../../data/dev4hire";

const JOURNEY = [
  { n: "01", t: "Brief lands at the studio", d: "Scope, deadline, payout fixed up front before anything reaches you." },
  { n: "02", t: "Profiles shortlisted", d: "Filtered by category, skills, experience, availability. Only fits contacted." },
  { n: "03", t: "Full brief reaches you", d: "Scope, deliverables, deadline, payout by email. No bidding." },
  { n: "04", t: "You say yes or no", d: "Confirm or decline in one tap. A no keeps future matches sharper." },
  { n: "05", t: "Terms in writing", d: "Selected talent confirms written terms, builds with one studio contact." },
  { n: "06", t: "Delivery releases pay", d: "Agreed payout released on review pass. Margin stays client-side." },
];

const BRIEF = [
  { t: "Title and category", d: "What the work is and which craft it belongs to." },
  { t: "Required skills", d: "Exact stack expected, so you judge fit in seconds." },
  { t: "Duration and deadline", d: "How long it runs and when it must land." },
  { t: "Agreed payout", d: "Fixed figure, known before you say yes." },
];

export default function OpportunitiesPage() {
  useSEO(
    "Opportunities - Dev4Hire",
    "How Dev4Hire opportunities work.",
    "/dev4hire/opportunities"
  );
  return (
    <>
      <SubPageHero
        label="Dev4Hire - Opportunities"
        title="How opportunities"
        accent="reach you."
        copy="Register once. Matching briefs land in your inbox with payout fixed."
        cta="Register for Briefs"
        ctaHref="/dev4hire/register"
      />
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Journey</p>
          <h2 className="font-display font-black leading-[1.02] mb-10" style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}>
            From brief to payout.
          </h2>
          <div className="grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEY.map((s) => (
              <div key={s.n} className="bg-[#0a0a0a] hover:bg-[#111] transition-colors p-6 sm:p-8">
                <p className="font-display font-black text-[#ff6b35]/40 text-3xl mb-4">{s.n}</p>
                <h3 className="font-display font-bold text-lg mb-2">{s.t}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Anatomy of a Brief</p>
            <h2 className="font-display font-black leading-[1.02] mb-4" style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}>
              Everything upfront.
            </h2>
            <p className="text-[#888880] text-sm sm:text-base leading-relaxed mb-8">
              If a brief lacks these answers, it does not go out.
            </p>
            <Link to="/dev4hire/register" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center orange-glow">Join the Network</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8">
            <div className="rounded-xl border border-[#ff6b35]/25 bg-[#0a0a0a] p-5 mb-6">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="font-display font-bold">UI/UX Designer - Mobile Application</p>
                <span className="text-[11px] font-bold uppercase tracking-widest bg-[#ff6b35]/15 text-[#ff6b35] border border-[#ff6b35]/30 px-3 py-1 rounded-full">Example</span>
              </div>
              <p className="text-sm text-[#888880]">Design · Figma, UX, Mobile UI · 10 days · payout fixed in the brief</p>
            </div>
            <ul className="space-y-4">
              {BRIEF.map((b) => (
                <li key={b.t} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#ff6b35] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#f0ebe0]">{b.t}</p>
                    <p className="text-sm text-[#888880]">{b.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-4">How Matching Works</p>
          <h2 className="font-display font-black leading-[1.02] mb-4" style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}>
            The right project. The right person.
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {MATCH_SIGNALS.map((m) => (
              <span key={m} className="bg-[#111] border border-white/10 text-[#f0ebe0]/80 text-xs sm:text-sm px-4 py-2.5 rounded-lg">{m}</span>
            ))}
          </div>
        </div>
      </section>
      <DevCTA />
    </>
  );
}
