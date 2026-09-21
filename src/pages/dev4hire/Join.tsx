import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import DevWizard from "../../components/dev4hire/DevWizard";
import { SubPageHero, DevCTA } from "../../components/dev4hire/DevBits";

const PROMISES = [
  { t: "Free to join", d: "No fees, no bidding credits, no paid tiers." },
  { t: "Payout agreed first", d: "The figure is in the brief before you say yes." },
  { t: "Private by default", d: "Profiles are never listed publicly." },
  { t: "No spam", d: "Only briefs that match your category and skills." },
];

export default function JoinPage() {
  useSEO(
    "Join the Network - Dev4Hire",
    "Create your Dev4Hire profile in four steps.",
    "/dev4hire/register"
  );
  return (
    <>
      <SubPageHero
        label="Dev4Hire - Join"
        title="Tell us"
        accent="what you do."
        copy="Four quick steps. Your details are never shown publicly - we only use them to contact you about matching paid projects."
      />
      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
          <div className="min-w-0">
            <DevWizard />
          </div>
          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#aaa] mb-5">Why talent joins</p>
              <ul className="space-y-4">
                {PROMISES.map((p) => (
                  <li key={p.t} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#ff6b35] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#f0ebe0]">{p.t}</p>
                      <p className="text-sm text-[#888880]">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ff6b35]/25 bg-[#ff6b35]/[0.06] p-6 sm:p-7">
              <p className="font-display font-bold mb-2">Rather hire talent?</p>
              <p className="text-sm text-[#888880] mb-4">Tell the studio what you are building. We scope, source, and manage delivery.</p>
              <Link to="/dev4hire/clients" className="text-sm font-semibold text-[#ff6b35] hover:underline">Go to For Clients</Link>
            </div>
          </aside>
        </div>
      </section>
      <DevCTA />
    </>
  );
}
