import { Link } from "react-router-dom";

export default function CTABanner({
  title = "Ready to build something that converts?",
  copy = "Tell us about your project. We'll reply within 24 hours with a clear next step — no obligation, no sales script.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="px-5 sm:px-6 md:px-10 py-16 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-[#111] border border-white/5 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 text-center">
          {/* Orange radial glow */}
          <div className="absolute inset-0 pointer-events-none orange-radial opacity-60" />
          <div className="relative z-10">
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Start a Project
            </p>
            <h2
              className="font-display font-black leading-[1.05] mb-5"
              style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
            >
              {title.split("something").length > 1 ? (
                <>
                  {title.split("something")[0]}
                  <span className="text-[#ff6b35] text-glow-orange">something</span>
                  {title.split("something")[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-[#888880] text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">{copy}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <Link
                to="/contact"
                className="btn-orange text-[#ffffff] text-sm font-semibold px-7 py-4 rounded-lg hover:bg-[#ff8a5b] orange-glow transition-colors duration-300 min-h-[52px] inline-flex items-center justify-center"
              >
                Start a Project →
              </Link>
              <Link
                to="/pricing"
                className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-7 py-4 rounded-lg hover:border-white/40 transition-colors duration-200 min-h-[52px] inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
            <p className="text-[#555] text-xs mt-6">
              Fixed pricing · Replies within 24h · Working worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
