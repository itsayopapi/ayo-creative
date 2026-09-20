import { useState } from "react";
import { Link } from "react-router-dom";
import { OPP_FILTERS, SAMPLE_OPPORTUNITIES } from "../../data/dev4hire";

function OppCard({ o }: { o: (typeof SAMPLE_OPPORTUNITIES)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="reveal rounded-2xl border border-white/10 bg-[#111] p-6 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-[#bbb] border border-white/10 uppercase tracking-widest">{o.category}</span>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400/15 text-lime-300 border border-lime-400/30">SAMPLE</span>
      </div>
      <h3 className="font-semibold leading-snug mb-3">{o.title}</h3>
      <div className="flex flex-wrap gap-1.5 mb-4">{o.skills.map((s) => (<span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#bbb]">{s}</span>))}</div>
      <div className="mt-auto grid grid-cols-2 gap-2 text-xs mb-4">
        <div className="rounded-xl bg-[#0d0d0d] border border-white/10 px-3 py-2.5"><p className="text-[#666] uppercase tracking-widest text-[10px] mb-0.5">Duration</p><p className="font-semibold">{o.duration}</p></div>
        <div className="rounded-xl bg-[#0d0d0d] border border-white/10 px-3 py-2.5"><p className="text-[#666] uppercase tracking-widest text-[10px] mb-0.5">Payout</p><p className="font-semibold text-[#ff6b35]">{o.payout}</p></div>
      </div>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold hover:bg-white/5 min-h-[48px]">{open ? "Hide brief" : "View opportunity"}</button>
      {open && (
        <div className="mt-4 rounded-xl border border-white/10 bg-[#0d0d0d] p-4 text-xs text-[#aaa] leading-relaxed">
          <p className="mb-2">Example brief format. Real briefs include full description, requirements, deadline, payout and an express-interest form.</p>
          <Link to="/dev4hire/register" className="text-[#ff6b35] font-semibold">Register to get notified →</Link>
        </div>
      )}
    </article>
  );
}

export default function OppBoard() {
  const [filter, setFilter] = useState<(typeof OPP_FILTERS)[number]>("All");
  const list = filter === "All" ? SAMPLE_OPPORTUNITIES : SAMPLE_OPPORTUNITIES.filter((o) => o.category === filter);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Filter opportunities">
        {OPP_FILTERS.map((f) => (
          <button key={f} type="button" role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className={filter === f ? "text-xs px-4 py-2.5 rounded-full bg-[#ff6b35] text-white font-semibold min-h-[44px]" : "text-xs px-4 py-2.5 rounded-full border border-white/15 text-[#ccc] hover:bg-white/5 min-h-[44px]"}>{f}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((o) => (<OppCard key={o.id} o={o} />))}
      </div>
      <p className="text-xs text-[#666] mt-5 leading-relaxed">Illustrative examples of the brief format. Live briefs publish here with full details and express-interest forms — register below to be notified.</p>
    </div>
  );
}
