import { useState } from "react";
import BrowserMockup from "./BrowserMockup";
import INDUSTRIES from "../data/industries";
import { IndustryPreview } from "../types";
import { Link } from "react-router-dom";

const INDUSTRY_CATEGORIES = [
  "All",
  "Food & Hospitality",
  "Commerce & Retail",
  "Health & Wellness",
  "Professional Services",
  "Tech & Creative",
  "Social Impact",
];

export default function ShowcasePreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState<IndustryPreview>(INDUSTRIES[0]);
  const [animating, setAnimating] = useState(false);

  const filtered =
    activeCategory === "All"
      ? INDUSTRIES
      : INDUSTRIES.filter((i) => i.category === activeCategory);

  const selectIndustry = (industry: IndustryPreview) => {
    if (industry.id === activeIndustry.id) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndustry(industry);
      setAnimating(false);
    }, 180);
  };

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    const first =
      cat === "All"
        ? INDUSTRIES[0]
        : INDUSTRIES.find((i) => i.category === cat) || INDUSTRIES[0];
    selectIndustry(first);
  };

  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            Interactive Showcase
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-display font-black leading-[1.02]"
              style={{ fontSize: "clamp(32px, 6vw, 60px)" }}
            >
              Your industry.
              <br />
              <span className="text-[#ff6b35] text-glow-orange">Your website.</span>
            </h2>
            <Link
              to="/showcase"
              className="text-xs font-semibold text-[#ff6b35] border border-[#ff6b35]/30 px-4 py-2.5 rounded-lg hover:bg-[#ff6b35] hover:text-white transition-colors duration-200 whitespace-nowrap w-fit min-h-[44px] inline-flex items-center"
            >
              See All →
            </Link>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar scroll-x-touch -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap pb-2 mb-6 sm:mb-8" role="tablist" aria-label="Filter by industry category">
          {INDUSTRY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => selectCategory(cat)}
              className={`flex-shrink-0 text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2.5 rounded-lg transition-all duration-200 min-h-[44px] ${
                activeCategory === cat
                  ? "bg-[#ff6b35] text-[#080808]"
                  : "bg-[#111] text-[#888880] hover:text-[#f0ebe0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          {/* Industry sidebar */}
          <div className="space-y-1">
            {filtered.slice(0, 6).map((industry) => (
              <button
                key={industry.id}
                onClick={() => selectIndustry(industry)}
                className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 ${
                  activeIndustry.id === industry.id
                    ? "bg-[#ff6b35] text-[#080808]"
                    : "bg-[#111] text-[#f0ebe0] hover:bg-[#141414]"
                }`}
              >
                <div className="font-semibold text-sm">{industry.name}</div>
                <div className="text-[10px] opacity-60 mt-0.5">
                  {industry.region}
                </div>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div
            className="transition-all duration-200"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
            }}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-black">
                  {activeIndustry.name}
                </h3>
                <p className="text-[#888880] text-xs mt-1">
                  {activeIndustry.tagline}
                </p>
              </div>
              <Link
                to="/showcase"
                className="text-xs font-semibold text-[#ff6b35] border border-[#ff6b35]/30 px-4 py-2 rounded-lg hover:bg-[#ff6b35] hover:text-[#ffffff] orange-glow transition-colors duration-200 whitespace-nowrap"
              >
                See All →
              </Link>
            </div>
            <BrowserMockup industry={activeIndustry} />
          </div>
        </div>
      </div>
    </section>
  );
}
