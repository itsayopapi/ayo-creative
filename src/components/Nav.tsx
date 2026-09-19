import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "What We Build", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Dev4Hire", href: "/dev4hire" },
];

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrolled: boolean;
};

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Portal the mobile menu to document.body so no ancestor
  // (overflow-x-clip root, blurred nav) can clip or cover it.
  if (menuOpen) {
    return (
      <>
        {createPortal(
          <div id="mobile-menu" className="fixed inset-0 z-[60] bg-[#080808] md:hidden overflow-y-auto flex flex-col">
            <div className="absolute inset-0 pointer-events-none orange-radial-strong opacity-70" />
            <div className="absolute -top-24 right-[-20%] w-[70vw] h-[70vw] rounded-full bg-[#ff6b35]/5 blur-3xl pointer-events-none" />
            <div className="h-[68px] flex-shrink-0" aria-hidden="true" />
            <div className="relative z-10 px-6 pt-6 pb-10 flex flex-col flex-1">
              <p className="menu-item-in text-[#ff6b35] text-[10px] font-semibold tracking-[0.25em] uppercase mb-4 flex items-center gap-3" style={{ animationDelay: "60ms" }}>
                <span className="w-6 h-px bg-[#ff6b35]" />
                Menu
              </p>
              <nav aria-label="Mobile" className="flex flex-col">
                {NAV_LINKS.map((l, idx) => (
                  <NavLink
                    key={l.label}
                    to={l.href}
                    className="menu-item-in group flex items-center justify-between py-4 border-b border-white/5 min-h-[60px] active:bg-white/5 rounded-lg px-2 -mx-2 transition-colors"
                    style={{ animationDelay: (120 + idx * 60) + "ms" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[11px] font-mono text-[#555]">0{idx + 1}</span>
                      <span className="font-display text-2xl font-bold tracking-tight">{l.label}</span>
                    </span>
                    <span className="text-lg text-[#555] transition-transform duration-200 group-active:translate-x-1">→</span>
                  </NavLink>
                ))}
              </nav>

              <div className="menu-item-in mt-8" style={{ animationDelay: (120 + NAV_LINKS.length * 60) + "ms" }}>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-orange text-[#ffffff] text-base font-semibold px-5 py-4 text-center rounded-lg min-h-[56px] flex items-center justify-center gap-2 orange-glow"
                >
                  Start a Project <span aria-hidden="true">→</span>
                </NavLink>
                <a
                  href="mailto:ayocoding12@gmail.com"
                  className="mt-4 border border-white/15 text-[#f0ebe0] text-sm font-medium px-5 py-3.5 text-center rounded-lg min-h-[52px] flex items-center justify-center hover:border-white/30 transition-colors"
                >
                  ayocoding12@gmail.com
                </a>
              </div>
              <div className="menu-item-in mt-auto pt-10 flex flex-col gap-4" style={{ animationDelay: (180 + NAV_LINKS.length * 60) + "ms" }}>
                <div className="flex items-center gap-5">
                  <a href="https://instagram.com/ayo.creative.designs" target="_blank" rel="noopener noreferrer" className="text-[#888880] text-xs uppercase tracking-widest hover:text-[#ff6b35] transition-colors min-h-[44px] flex items-center">Instagram</a>
                  <a href="https://linkedin.com/in/ayomidequdus" target="_blank" rel="noopener noreferrer" className="text-[#888880] text-xs uppercase tracking-widest hover:text-[#ff6b35] transition-colors min-h-[44px] flex items-center">LinkedIn</a>
                </div>
                <p className="text-[#555] text-[11px]">Replies within 24 hours · Working worldwide</p>
              </div>
            </div>
          </div>,
          document.body
        )}
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
      </>
    );
  }

  return <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />;
}

function Header({ menuOpen, setMenuOpen, scrolled }: HeaderProps) {
  return (
    <nav className={"fixed top-0 left-0 right-0 z-[70] transition-colors duration-500 " + (scrolled || menuOpen ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/5" : "")}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 flex items-center justify-between py-4 sm:py-5">
        <NavLink to="/" className="font-display text-xl font-bold tracking-tight min-h-[44px] flex items-center" onClick={() => setMenuOpen(false)}>
          Ayo<span className="text-[#ff6b35]">.</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.href}
              className={({ isActive }) =>
                "nav-link text-sm transition-colors duration-200 " +
                (isActive ? "active text-[#ff6b35]" : "text-[#888880] hover:text-[#f0ebe0]")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/contact"
          className="hidden md:inline-flex btn-orange text-[#ffffff] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#ff8a5b] orange-glow transition-colors duration-200"
        >
          Start a Project
        </NavLink>
        <button
          className="md:hidden text-[#f0ebe0] p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="w-6 space-y-1.5">
            <span className={"block h-0.5 bg-current transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-[7px]" : "")} />
            <span className={"block h-0.5 bg-current transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
            <span className={"block h-0.5 bg-current transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
          </div>
        </button>
      </div>
    </nav>
  );
}
