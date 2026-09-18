import { Link } from "react-router-dom";

const SITEMAP = [
  { label: "What We Build", to: "/showcase" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "Dev4Hire", to: "/dev4hire" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 sm:px-6 md:px-10 pt-10 sm:pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              Ayo<span className="text-[#ff6b35] text-glow-orange">.</span>
            </Link>
            <p className="text-[#888880] text-sm mt-3 leading-relaxed max-w-xs">
              Premium web design for businesses in 40+ countries. Strategy, design, build, launch.
            </p>
            <a href="mailto:ayocoding12@gmail.com" className="inline-flex items-center min-h-[44px] text-[#ff6b35] text-sm font-semibold mt-3">
              ayocoding12@gmail.com
            </a>
          </div>
          <nav aria-label="Sitemap">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#888880] mb-4">Explore</div>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1">
              {SITEMAP.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="inline-flex items-center min-h-[40px] text-sm text-[#f0ebe0]/80 hover:text-[#ff6b35] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#888880] mb-4">Services</div>
            <ul className="flex flex-col gap-1 text-sm text-[#f0ebe0]/80">
              {["UI/UX Design", "Web Development", "E-Commerce", "Brand Strategy", "SEO", "Care Plans"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="inline-flex items-center min-h-[40px] hover:text-[#ff6b35] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#888880] mb-4">Start a project</div>
            <p className="text-sm text-[#888880] mb-4 leading-relaxed">Fixed pricing. Replies within 24 hours.</p>
            <Link to="/contact" className="btn-orange inline-flex items-center justify-center min-h-[52px] w-full sm:w-auto text-white text-sm font-bold px-6 py-3.5 rounded-lg">
              Start a Project →
            </Link>
            <div className="flex items-center gap-2 mt-5">
              <a href="https://instagram.com/ayo.creative.designs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-[#888880] text-xs hover:text-[#ff6b35] transition-colors">Instagram</a>
              <a href="https://linkedin.com/in/ayomidequdus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-[#888880] text-xs hover:text-[#ff6b35] transition-colors">LinkedIn</a>
              <a href="mailto:ayocoding12@gmail.com" className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-[#888880] text-xs hover:text-[#ff6b35] transition-colors">Email</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#888880] text-xs text-center">
            © {new Date().getFullYear()} Ayo Creative Designs · Lagos · 40+ countries
          </p>
          <p className="text-[#555] text-[11px]">Designed & built in-house. No templates.</p>
        </div>
      </div>
    </footer>
  );
}
