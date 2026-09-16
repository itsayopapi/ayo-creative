import { MARQUEE_ITEMS } from "../data/content";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="w-full overflow-hidden bg-[#111] border-y border-white/5 py-3 sm:py-4" aria-hidden="true">
      <div className="animate-marquee flex items-center gap-8 w-max">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-[10px] sm:text-[11px] text-[#888880] uppercase tracking-widest whitespace-nowrap">
            {item}<span className="text-[#ff6b35]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

