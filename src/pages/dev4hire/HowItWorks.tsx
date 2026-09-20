import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import { PageIntro, SubPageHero, DevCTA } from "../../components/dev4hire/DevBits";
import { DEV_STEPS, TRUST_CARDS } from "../../data/dev4hire";

export default function HowItWorksPage() {
  useSEO("How It Works — Dev4Hire Talent Network", "Register, get matched, express interest, build and get paid. Clear project terms: the freelancer payout is agreed before work starts.", "/dev4hire/how-it-works");
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SubPageHero
            label="Dev4Hire - Process"
            title="Register. Match."
            accent="Build. Get paid."
            copy="Six steps from joining the network to receiving your payout."
            cta="Start - Join the Network"
            ctaHref="/dev4hire/register"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {DEV_STEPS.map((s) => (
              <div key={s.n} className="bg-[#080808] p-6 sm:p-8 hover:bg-[#111] transition-colors duration-300">
                <span className="text-[#333] text-xs font-mono">{s.n}</span>
                <h3 className="font-display text-lg font-bold mb-2 mt-4">{s.title}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Money split */}
          <div className="mt-20 sm:mt-28">
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#ff6b35]" />
              Clear Project Terms
            </p>
            <h2 className="font-display font-black leading-[1.02] mb-10" style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}>
              Clear terms.
              <br />
              <span className="text-[#ff6b35] text-glow-orange">Clear payouts.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-8">
              {[
                { v: "₦400,000", l: "Client project value", c: "text-[#f0ebe0]" },
                { v: "₦320,000", l: "Your agreed payout", c: "text-[#ff6b35] text-glow-orange" },
                { v: "₦80,000", l: "ACD service margin", c: "text-[#f0ebe0]" },
              ].map((r) => (
                <div key={r.l} className="bg-[#080808] p-8 text-center">
                  <div className={"font-display text-3xl sm:text-4xl font-black " + r.c}>{r.v}</div>
                  <div className="text-[10px] sm:text-xs text-[#888880] mt-2 uppercase tracking-wider">{r.l}</div>
                </div>
              ))}
            </div>
            <ul className="max-w-3xl space-y-3 text-sm text-[#888880]">
              <li className="flex gap-3"><span className="text-[#ff6b35]">→</span>Ayo Creative Designs retains a service margin for sourcing talent, managing the client, coordinating delivery and providing oversight. It is agreed openly — never a hidden fee.</li>
              <li className="flex gap-3"><span className="text-[#ff6b35]">→</span>Your payout is confirmed in writing before the project starts, with milestone-based releases as work passes acceptance criteria.</li>
            </ul>
          </div>

          {/* Trust */}
          <div className="mt-20 sm:mt-28">
            <PageIntro
              label="Quality"
              title="Built around"
              accent="quality."
              copy="Registration puts you in the matching pool — it doesn't guarantee assignment. Selection is based on skills, portfolio and fit."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {TRUST_CARDS.map((c, i) => (
                <div key={c.t} className="bg-[#080808] p-6 sm:p-8 hover:bg-[#111] transition-colors duration-300">
                  <div className="text-[#333] text-xs font-mono mb-4">0{i + 1}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{c.t}</h3>
                  <p className="text-[#888880] text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link to="/dev4hire/register" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center">Start — Join the Network</Link>
          </div>
        </div>
      </section>
      <DevCTA />
    </>
  );
}
