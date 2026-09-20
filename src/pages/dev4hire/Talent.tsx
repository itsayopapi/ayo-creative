import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import { PageIntro, SubPageHero, DevCTA } from "../../components/dev4hire/DevBits";
import { TALENT_BENEFITS } from "../../data/dev4hire";

const GROWTH = [
  { t: "Build your portfolio", d: "Real shipped projects with real clients — work you can show, not tutorials you followed." },
  { t: "Learn the client side", d: "Briefs, deadlines, acceptance criteria and milestone payments — how professional work actually flows." },
  { t: "Grow your rate", d: "Start with smaller scoped briefs, prove delivery, get matched on bigger projects with higher payouts." },
];

export default function TalentPage() {
  useSEO("For Talent — Dev4Hire | Ayo Creative Designs", "Whether you're experienced or building your first portfolio, Dev4Hire matches you with paid projects that fit your skills and availability. Free to join.", "/dev4hire/talent");
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SubPageHero
            label="Dev4Hire - For Talent"
            title="You build."
            accent="We bring the work."
            copy="You shouldn't have to spend every day hunting clients. Register your skills once and we notify you when relevant paid projects land."
            cta="Join the Network"
            ctaHref="/dev4hire/register"
          />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <ul className="rounded-lg border border-white/10 bg-[#111] p-6 sm:p-8 space-y-3">
              {TALENT_BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[#ccc]"><span className="text-[#ff6b35] font-bold shrink-0">✓</span>{b}</li>
              ))}
            </ul>
            <div className="space-y-4">
              <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
                <span className="w-5 h-px bg-[#ff6b35]" />
                Starting out? Also welcome.
              </p>
              <p className="text-[#888880] text-sm leading-relaxed">
                Dev4Hire isn't only for senior engineers. If you're early in your career, joining is a way to get real project experience, build a portfolio clients can see, and learn how professional delivery works — with Ayo Creative Designs managing scope, quality and payment so you can focus on doing the work well.
              </p>
              <div className="grid gap-4">
                {GROWTH.map((g) => (
                  <div key={g.t} className="bg-[#111] border border-white/5 rounded-lg p-5 hover:border-[#ff6b35]/30 transition-all duration-300">
                    <h3 className="font-display font-bold mb-1">{g.t}</h3>
                    <p className="text-[#888880] text-sm leading-relaxed">{g.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link to="/dev4hire/register" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center justify-center">Join the Network</Link>
            <Link to="/dev4hire/opportunities" className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-7 py-3.5 rounded-lg hover:border-white/40 transition-colors min-h-[52px] inline-flex items-center justify-center">See the Brief Format</Link>
          </div>
        </div>
      </section>
      <DevCTA />
    </>
  );
}
