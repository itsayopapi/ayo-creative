import { useEffect, useState } from "react";

const NAV = [
  { id: "opportunities", label: "Opportunities" },
  { id: "how-it-works", label: "How It Works" },
  { id: "categories", label: "Categories" },
  { id: "for-clients", label: "For Clients" },
  { id: "faq", label: "FAQ" },
];

export function DevNav() {
  const [active, setActive] = useState("opportunities");
  useEffect(() => {
    function onScroll() {
      const mid = window.innerHeight * 0.35;
      let current = NAV[0].id;
      for (const n of NAV) {
        const el = document.getElementById("dh-" + n.id);
        if (el && el.getBoundingClientRect().top <= mid) current = n.id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="sticky top-[68px] sm:top-[76px] z-30 -mx-5 sm:-mx-6 md:-mx-10 px-5 sm:px-6 md:px-10 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
        <span className="font-display font-bold text-sm mr-4 shrink-0">Dev4Hire<span className="text-[#ff6b35]">.</span></span>
        {NAV.map((n) => (
          <a
            key={n.id}
            href={"#dh-" + n.id}
            aria-current={active === n.id ? "true" : undefined}
            className={
              "text-xs px-3 py-2.5 rounded-lg whitespace-nowrap min-h-[44px] flex items-center transition-colors " +
              (active === n.id ? "bg-[#ff6b35]/10 text-[#ff6b35] font-semibold" : "text-[#888] hover:text-white hover:bg-white/5")
            }
          >
            {n.label}
          </a>
        ))}
        <a href="#dh-register" className="ml-auto shrink-0 btn-orange text-white text-xs font-semibold px-4 py-2.5 min-h-[44px] flex items-center">Join the Network</a>
      </div>
    </div>
  );
}
