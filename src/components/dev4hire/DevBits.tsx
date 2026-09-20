import { Link } from "react-router-dom";

export function PageIntro({ label, title, accent, copy }: { label: string; title: string; accent?: string; copy: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
      <div>
        <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
          <span className="w-5 h-px bg-[#ff6b35]" />
          {label}
        </p>
        <h1 className="font-display font-black leading-[1.02]" style={{ fontSize: "clamp(32px, 6vw, 60px)" }}>
          {title}
          {accent ? (
            <>
              <br />
              <span className="text-[#ff6b35] text-glow-orange">{accent}</span>
            </>
          ) : null}
        </h1>
      </div>
      <p className="text-[#888880] max-w-xs leading-relaxed text-sm">{copy}</p>
    </div>
  );
}

export function SubPageHero({ label, title, accent, copy, cta, ctaHref }: { label: string; title: string; accent?: string; copy: string; cta?: string; ctaHref?: string }) {
  return (
    <div className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none orange-radial opacity-70" />
      <div className="absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full bg-[#ff6b35]/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end overflow-hidden pr-2">
        <span className="font-display font-black text-[20vw] md:text-[13vw] text-white/[0.025] leading-none tracking-tighter whitespace-nowrap">HIRE</span>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16">
        <p className="text-[#ff6b35] text-glow-orange text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-5 flex items-center gap-3">
          <span className="w-6 h-px bg-[#ff6b35]" />
          {label}
        </p>
        <h1 className="font-display font-black leading-[0.95] tracking-tight mb-6" style={{ fontSize: "clamp(36px, 7vw, 84px)" }}>
          {title}
          {accent ? (
            <>
              <br />
              <span className="text-[#ff6b35] text-glow-orange">{accent}</span>
            </>
          ) : null}
        </h1>
        <p className="text-[#888880] text-sm sm:text-base leading-relaxed max-w-xl mb-8">{copy}</p>
        {cta && ctaHref ? (
          <Link to={ctaHref} className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center orange-glow">
            {cta}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function DevCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto rounded-2xl border border-[#ff6b35]/25 bg-[#111] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden orange-radial">
        <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4">Dev4Hire — Free to join</p>
        <h2 className="font-display font-black leading-[1.02] mb-4" style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}>
          Your skills. Our projects.
          <br />
          <span className="text-[#ff6b35] text-glow-orange">Get paid to build.</span>
        </h2>
        <p className="text-[#888880] max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
          Register once. When a paid project matches your skills and availability, we contact you directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link to="/dev4hire/register" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center justify-center">
            Join the Network
          </Link>
          <Link to="/dev4hire/opportunities" className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-7 py-3.5 rounded-lg hover:border-white/40 transition-colors min-h-[52px] inline-flex items-center justify-center">
            See Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
