import { STATS } from "../data/content";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1722884263486-4824843769d6?w=1800&h=1200&fit=crop&auto=format"
          srcSet="https://images.unsplash.com/photo-1722884263486-4824843769d6?w=640&h=427&fit=crop&auto=format 640w, https://images.unsplash.com/photo-1722884263486-4824843769d6?w=1200&h=800&fit=crop&auto=format 1200w, https://images.unsplash.com/photo-1722884263486-4824843769d6?w=1800&h=1200&fit=crop&auto=format 1800w"
          sizes="100vw"
          alt="Design studio workspace"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]" />
      </div>

      {/* Large text watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[30vw] text-white/[0.025] leading-none tracking-tighter whitespace-nowrap">
          AYO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 pb-16 md:pb-20 pt-28 md:pt-36 orange-radial">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Headline */}
          <div className="max-w-4xl">
            <p className="text-[#ff6b35] text-glow-orange text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-[#ff6b35]" />
              Premium Web Design Agency
            </p>
            <h1
              className="font-display font-black leading-[0.9] tracking-tight mb-0"
              style={{ fontSize: "clamp(42px, 8vw, 108px)" }}
            >
              We Build
              <br />
              Websites That
              <br />
              <span className="text-[#ff6b35] text-glow-orange">Generate</span>
              <br />
              Revenue.
            </h1>
          </div>

          {/* Copy + CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="text-[#888880] text-sm sm:text-base leading-relaxed max-w-sm">
              For restaurants in Lagos, boutiques in Paris, startups in Singapore — we build
              digital experiences that convert everywhere.
            </p>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                to="/showcase"
                className="btn-orange text-[#ffffff] text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#ff8a5b] orange-glow transition-colors duration-300 whitespace-nowrap"
              >
                See What We Build
              </Link>
              <Link
                to="/pricing"
                className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-5 py-3 rounded-lg hover:border-white/40 transition-colors duration-200 whitespace-nowrap"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-[#080808] px-4 sm:px-6 py-5 sm:py-6 text-center"
              >
                <div className="font-display text-3xl sm:text-4xl font-black text-[#ff6b35] text-glow-orange">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs text-[#888880] mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
