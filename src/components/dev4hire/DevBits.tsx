import { NavLink, Link } from "react-router-dom";

export const DEV_PAGES = [
  { path: "/dev4hire", label: "Overview" },
  { path: "/dev4hire/opportunities", label: "Opportunities" },
  { path: "/dev4hire/how-it-works", label: "How It Works" },
  { path: "/dev4hire/talent", label: "For Talent" },
  { path: "/dev4hire/clients", label: "For Clients" },
  { path: "/dev4hire/register", label: "Join" },
];

export function DevTabs({ active }: { active: string }) {
  return (
    <div className="border-t border-white/5 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto no-scrollbar py-3">
        {DEV_PAGES.map((p) => (
          <NavLink
            key={p.path}
            to={p.path}
            end={p.path === "/dev4hire"}
            className={
              "text-xs px-4 py-2.5 rounded-lg whitespace-nowrap min-h-[44px] flex items-center transition-colors " +
              (active === p.path
                ? "bg-[#ff6b35]/10 text-[#ff6b35] font-semibold"
                : "text-[#888880] hover:text-[#f0ebe0] hover:bg-white/5")
            }
          >
            {p.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

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
