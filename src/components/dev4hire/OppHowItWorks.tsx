const JOURNEY = [
  { n: "01", t: "A brief lands", d: "A real client project arrives at Ayo Creative Designs with a scope, deadline, and a payout figure agreed up front." },
  { n: "02", t: "Profiles get matched", d: "Registered talent is filtered by category, skills, experience, and availability. Only genuine fits make the shortlist." },
  { n: "03", t: "The brief reaches you", d: "Matching talent gets the full brief by email: scope, deadline, payout. No bidding, no auctions, no race to the bottom." },
  { n: "04", t: "You respond", d: "Confirm you are available and interested, or decline. A no is always fine — it keeps future matches sharper." },
  { n: "05", t: "Talent is selected, work is paid", d: "The best-fit responder is selected, terms are confirmed in writing, and payment releases on delivery." },
];

export default function OppHowItWorks() {
  return (
    <div className="grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
      {JOURNEY.map((s) => (
        <div key={s.n} className="bg-[#0a0a0a] hover:bg-[#111] transition-colors p-6 sm:p-8">
          <p className="font-display font-black text-[#ff6b35]/40 text-3xl mb-4">{s.n}</p>
          <h3 className="font-display font-bold text-lg mb-2">{s.t}</h3>
          <p className="text-[#888880] text-sm leading-relaxed">{s.d}</p>
        </div>
      ))}
      <div className="bg-[#ff6b35] p-6 sm:p-8 flex flex-col justify-between gap-6">
        <div>
          <p className="font-display font-black text-3xl mb-4 text-white">Ready?</p>
          <p className="text-white/85 text-sm leading-relaxed">Be in the pool before the next brief lands. Registration takes under five minutes.</p>
        </div>
        <a href="/dev4hire/register" className="bg-[#080808] text-white text-sm font-semibold px-6 py-3.5 rounded-lg min-h-[52px] inline-flex items-center justify-center hover:bg-black transition-colors">Join the Network</a>
      </div>
    </div>
  );
}

