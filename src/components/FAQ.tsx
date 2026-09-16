import { useState } from "react";

export type FAQItem = { q: string; a: string };

export default function FAQ({ items, title = "Frequently asked" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
          <span className="w-5 h-px bg-[#ff6b35]" />
          FAQ
          <span className="w-5 h-px bg-[#ff6b35]" />
        </p>
        <h2
          className="font-display font-black text-center leading-tight mb-10 sm:mb-14"
          style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={item.q} className="bg-[#111] border border-white/5 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 min-h-[56px] hover:bg-[#141414] transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base text-[#f0ebe0]">{item.q}</span>
                <span
                  className={`text-[#ff6b35] text-xl leading-none flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 text-[#888880] text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
