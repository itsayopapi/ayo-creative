import { IndustryPreview } from "../types";

export default function BrowserMockup({ industry }: { industry: IndustryPreview }) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow-2xl"
      style={{
        background: industry.bgColor,
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-white/5">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 bg-[#2a2a2a] rounded-lg px-3 py-1 text-[10px] text-[#888880] font-mono truncate">
          www.{industry.id}.com
        </div>
      </div>

      {/* Simulated nav */}
      <div
        className="px-4 sm:px-6 py-3 flex items-center justify-between gap-3 border-b"
        style={{
          borderColor: `${industry.accentColor}18`,
          background: `${industry.bgColor}dd`,
        }}
      >
        <div
          className="font-display font-bold text-sm truncate"
          style={{ color: industry.accentColor }}
        >
          {industry.name.split(" ")[0]}
          <span style={{ color: industry.textColor }}>.</span>
        </div>
        <div className="hidden sm:flex items-center gap-5 flex-shrink-0">
          {industry.navItems.slice(0, 3).map((n) => (
            <span
              key={n}
              className="text-[10px] opacity-60"
              style={{ color: industry.textColor }}
            >
              {n}
            </span>
          ))}
        </div>
        <div
          className="text-[10px] font-semibold px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0"
          style={{
            background: industry.accentColor,
            color: industry.bgColor,
          }}
        >
          {industry.navItems[industry.navItems.length - 1]}
        </div>
      </div>

      {/* Hero area */}
      <div className="relative overflow-hidden" style={{ minHeight: 240 }}>
        <img
          src={industry.img}
          alt={industry.name}
          loading="lazy"
          className="w-full h-52 sm:h-64 object-cover"
          style={{ opacity: 0.45 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${industry.bgColor}ee 0%, ${industry.bgColor}88 60%, transparent 100%)`,
          }}
        />
        <div className="absolute inset-0 px-4 sm:px-6 py-5 sm:py-6 flex flex-col justify-center gap-2 sm:gap-3">
          <div
            className="text-[9px] font-semibold tracking-widest uppercase px-2 py-1 rounded-lg w-fit"
            style={{
              background: `${industry.accentColor}22`,
              color: industry.accentColor,
              border: `1px solid ${industry.accentColor}44`,
            }}
          >
            {industry.pill}
          </div>
          <h2
            className="font-display font-black leading-tight"
            style={{
              color: industry.textColor,
              fontSize: "clamp(20px, 5vw, 28px)",
              whiteSpace: "pre-line",
            }}
          >
            {industry.heroHeadline}
          </h2>
          <p
            className="text-[11px] leading-relaxed opacity-70 max-w-xs hidden min-[400px]:block"
            style={{ color: industry.textColor }}
          >
            {industry.heroCopy}
          </p>
          <button
            className="mt-1 text-[10px] font-bold px-4 py-2 rounded-lg w-fit"
            style={{
              background: industry.accentColor,
              color: industry.bgColor,
            }}
          >
            {industry.ctaLabel} →
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-3 gap-3 border-t"
        style={{ borderColor: `${industry.accentColor}15` }}
      >
        {["Quality", "Speed", "Support"].map((label) => (
          <div key={label} className="flex flex-col gap-1">
            <div
              className="h-1 rounded-full opacity-30"
              style={{ background: industry.accentColor }}
            />
            <span
              className="text-[9px] opacity-40"
              style={{ color: industry.textColor }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
