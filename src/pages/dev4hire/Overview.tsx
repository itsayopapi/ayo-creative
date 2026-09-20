import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";
import { PageIntro, DevCTA } from "../../components/dev4hire/DevBits";
import { DEV_VALUES, TALENT_GROUPS, DEV_FAQS, SAMPLE_OPPORTUNITIES } from "../../data/dev4hire";

const FLOW = ["Client brief", "Ayo Creative Designs", "Dev4Hire network", "You build", "Delivery", "You get paid"];

export default function Dev4HireHome() {
  useSEO("Dev4Hire — Your Skills. Our Projects. | Ayo Creative Designs", "Join the Dev4Hire talent network. Register once, get contacted when paid projects match your skills, and keep the agreed payout while the agency handles the client.", "/dev4hire");
  return (
    <>
      {/* Hero - proper, main-site architecture */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&h=1200&fit=crop&auto=format"
            alt="Developers collaborating on a project"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]" />
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none select-none overflow-hidden pr-2">
          <span className="font-display font-black text-[20vw] md:text-[13vw] text-white/[0.025] leading-none tracking-tighter whitespace-nowrap">HIRE</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 orange-radial">
          <p className="text-[#ff6b35] text-glow-orange text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-[#ff6b35]" />
            Dev4Hire — Ayo Creative Designs Talent Network
          </p>
          <h1 className="font-display font-black leading-[0.95] tracking-tight mb-6" style={{ fontSize: "clamp(36px, 7vw, 84px)" }}>
            Your Skills.
            <br />
            <span className="text-[#ff6b35] text-glow-orange">Our Projects.</span>
          </h1>
          <p className="text-[#888880] text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            Developers, designers, testers, cybersecurity specialists — register once. When a paid project from Ayo Creative Designs matches your skills, we contact you. You build, you get the agreed payout, we handle the client.
          </p>
          <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
            <Link to="/dev4hire/register" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center orange-glow">
              Join the Network
            </Link>
            <Link to="/dev4hire/opportunities" className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-7 py-3.5 rounded-lg hover:border-white/40 transition-colors min-h-[52px] inline-flex items-center">
              See Opportunities
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[["Free", "to join"], ["Paid", "project briefs"], ["Agreed", "payout upfront"], ["Remote", "work"]].map(function (s) {
              return (
                <div key={s[0]} className="bg-[#080808] px-4 py-4 sm:py-5">
                  <div className="font-display text-lg sm:text-xl font-black text-[#f0ebe0]">{s[0]}</div>
                  <div className="text-[#888880] text-[11px] sm:text-xs">{s[1]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flow strip */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {FLOW.map((f, i) => (
              <span key={f} className="flex items-center gap-3">
                <span className={"text-xs sm:text-sm " + (i === 3 ? "text-[#ff6b35] font-semibold" : "text-[#888880]")}>{f}</span>
                {i < FLOW.length - 1 && <span className="text-[#ff6b35]/50">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <PageIntro
            label="Why Dev4Hire"
            title="Stop searching."
            accent="Start building."
            copy="No more chasing clients. The projects come to you through Ayo Creative Designs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {DEV_VALUES.map((v, i) => (
              <div key={v.t} className="bg-[#080808] p-6 sm:p-8 hover:bg-[#111] transition-colors duration-300">
                <div className="text-[#333] text-xs font-mono mb-4">0{i + 1}</div>
                <h3 className="font-display text-lg font-bold mb-2">{v.t}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample briefs preview */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="w-5 h-px bg-[#ff6b35]" />
                The Format
              </p>
              <h2 className="font-display font-black leading-[1.02]" style={{ fontSize: "clamp(30px, 5vw, 52px)" }}>
                Real briefs.
                <br />
                <span className="text-[#ff6b35] text-glow-orange">Real payouts.</span>
              </h2>
            </div>
            <Link to="/dev4hire/opportunities" className="text-xs font-semibold text-[#ff6b35] border border-[#ff6b35]/30 px-4 py-2.5 rounded-lg hover:bg-[#ff6b35] hover:text-white transition-colors whitespace-nowrap w-fit min-h-[44px] inline-flex items-center">
              All Opportunities →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SAMPLE_OPPORTUNITIES.slice(0, 3).map((o) => (
              <div key={o.id} className="bg-[#080808] p-6 sm:p-8 hover:bg-[#111] transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#888880]">{o.category}</span>
                  <span className="text-[10px] font-semibold text-lime-300">OPEN</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-3">{o.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#888880]">{o.duration}</span>
                  <span className="text-[#ff6b35] font-semibold">{o.payout}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#666] mt-3">Illustrative brief format. Live briefs publish on the Opportunities page.</p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <PageIntro
            label="Who Can Join"
            title="Not just"
            accent="developers."
            copy="Design, QA, cybersecurity, DevOps, data — if you build or protect digital products, there's a seat here. Even if you're starting out and want real portfolio work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TALENT_GROUPS.map((g) => (
              <div key={g.title} className="bg-[#111] border border-white/5 rounded-lg p-6 hover:border-[#ff6b35]/30 transition-all duration-300">
                <h3 className="font-display text-lg font-bold mb-3">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#888880]">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/dev4hire/register" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center justify-center">Join the Network</Link>
            <Link to="/dev4hire/talent" className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-7 py-3.5 rounded-lg hover:border-white/40 transition-colors min-h-[52px] inline-flex items-center justify-center">For Talent — More Details</Link>
          </div>
        </div>
      </section>

      <DevCTA />
      <FAQ items={DEV_FAQS.slice(0, 4)} title="Dev4Hire questions." />
    </>
  );
}
