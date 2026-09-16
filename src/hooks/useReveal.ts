import { useEffect } from "react";

/**
 * Global scroll-reveal: observes every element carrying the `.reveal`
 * class and adds `.revealed` when it enters the viewport. Runs once
 * per route change (keyed by pathname) so newly mounted pages are picked up.
 */
export function useRevealOnScroll(pathname: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
