import { DIFFERENTIATORS } from "../data/content";

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Why Ayo Creative
          </p>
          <h2
            className="font-display font-black leading-[1.02]"
            style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
          >
            Not another agency.
            <br />
            <span className="text-[#ff6b35] text-glow-orange">A revenue partner.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.title}
              className="group bg-[#111] border border-white/5 p-6 sm:p-8 rounded-lg hover:border-[#ff6b35]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-lg flex items-center justify-center text-xl mb-5">
                {d.icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                {d.title}
              </h3>
              <p className="text-[#888880] text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
