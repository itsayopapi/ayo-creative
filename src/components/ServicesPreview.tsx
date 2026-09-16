import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-5 h-px bg-[#ff6b35]" />
              What We Do
            </p>
            <h2
              className="font-display font-black leading-[1.02]"
              style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
            >
              Everything your business
              <br />
              <span className="text-[#ff6b35] text-glow-orange">needs online.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-semibold text-[#ff6b35] border border-[#ff6b35]/30 px-4 py-2.5 rounded-lg hover:bg-[#ff6b35] hover:text-white transition-colors duration-200 whitespace-nowrap w-fit min-h-[44px] inline-flex items-center"
          >
            All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((s) => (
            <Link
              key={s.number}
              to="/services"
              className="group bg-[#080808] p-6 sm:p-8 hover:bg-[#111] transition-colors duration-300"
            >
              <div className="text-[#333] text-xs font-mono mb-4 sm:mb-6">{s.number}</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-[#ff6b35] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[#888880] text-sm leading-relaxed">{s.desc}</p>
              <span className="inline-flex items-center gap-2 text-[#ff6b35] text-xs font-semibold mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
