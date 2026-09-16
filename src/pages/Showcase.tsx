import { useState } from "react";
import { Link } from "react-router-dom";
import BrowserMockup from "../components/BrowserMockup";
import INDUSTRIES from "../data/industries";
import { IndustryPreview } from "../types";
import CTABanner from "../components/CTABanner";
import { useSEO } from "../hooks/useSEO";

const CATEGORIES = ["All", ...Array.from(new Set(INDUSTRIES.map((i) => i.category)))];

export default function Showcase() {
  useSEO(
    "Our Work — Website Design Portfolio",
    "Browse website design examples across restaurants, fashion, real estate, healthcare, SaaS and 40+ industries. See what Ayo Creative Designs can build for your business.",
    "/showcase"
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? INDUSTRIES
      : INDUSTRIES.filter((i) => i.category === activeCategory);

  return (
    <section className="py-28 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Full Showcase
            <span className="w-5 h-px bg-[#ff6b35]" />
          </p>
          <h2
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Every industry.
            <br />
            <span className="text-[#ff6b35] text-glow-orange">The same standard.</span>
          </h2>
          <p className="text-[#888880] max-w-lg mx-auto mt-6 text-sm leading-relaxed">
            Explore how we adapt our approach to each market — same quality, different context.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-lg transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#ff6b35] text-[#080808] orange-glow"
                  : "bg-[#111] text-[#888880] hover:text-[#f0ebe0] hover:bg-[#141414]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((industry) => (
            <div
              key={industry.id}
              className="group bg-[#111] border border-white/5 rounded-lg overflow-hidden hover:border-[#ff6b35]/30 transition-all duration-300"
              onMouseEnter={() => setHoveredId(industry.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Preview */}
              <div className="aspect-[16/10] overflow-hidden">
                <BrowserMockup industry={industry} />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-bold group-hover:text-[#ff6b35] transition-colors">
                    {industry.name}
                  </h3>
                  <span className="text-[10px] text-[#888880]">{industry.region}</span>
                </div>
                <p className="text-[#888880] text-xs mb-4">{industry.tagline}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {industry.navItems.slice(0, 3).map((n) => (
                      <span
                        key={n}
                        className="text-[10px] px-2 py-1 bg-white/5 rounded-lg text-[#888880]"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2 py-1 rounded-lg transition-colors ${
                      hoveredId === industry.id
                        ? "bg-[#ff6b35] text-[#080808]"
                        : "bg-[#ff6b35]/10 text-[#ff6b35]"
                    }`}
                  >
                    {industry.pill}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#888880]">No industries in this category yet.</p>
          </div>
        )}

        {/* Your industry not listed */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-[#0d0d0d] border border-white/5 rounded-lg p-6 sm:p-8">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold mb-1">
              Don't see your industry? <span className="text-[#ff6b35] text-glow-orange">That's our specialty.</span>
            </h3>
            <p className="text-[#888880] text-sm">We've built for 40+ markets — if it needs to convert, we can build it.</p>
          </div>
          <Link
            to="/contact"
            className="btn-orange inline-flex items-center justify-center text-[#ffffff] text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-[#ff8a5b] orange-glow transition-colors duration-200 min-h-[52px] whitespace-nowrap"
          >
            Ask About Yours →
          </Link>
        </div>
      </div>
      <CTABanner />
    </section>
  );
}
