import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PricingQuiz from "./PricingQuiz";


export default function PricingQuizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Bump every time the modal opens so the quiz always starts fresh
  // (no stale answers from the last session).
  const [session, setSession] = useState(0);
  const wasOpen = useRef(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && !wasOpen.current) {
      setSession((s) => s + 1);
      requestAnimationFrame(() => closeRef.current?.focus());
    }
    wasOpen.current = open;
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  // Portal to document.body: Pricing renders inside Layout's animated
  // `.page-enter` wrapper (a permanent transform = containing block that
  // traps `position: fixed`). Portaling escapes it so the overlay truly
  // covers the viewport. z-[100] sits above nav (70) + back-to-top (75).
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center sm:p-6"
      style={{ overscrollBehavior: "contain" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Find your tier in 30 seconds"
    >
      <div
        className="page-enter relative max-h-[94dvh] w-full overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0d0d0d] shadow-2xl sm:max-h-[92vh] sm:max-w-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* drag handle on phones */}
        <div className="sticky top-0 z-10 bg-[#0d0d0d]/95 pt-3 backdrop-blur sm:hidden" aria-hidden="true">
          <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
        </div>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#0d0d0d]/95 px-5 py-4 backdrop-blur sm:top-auto sm:px-7">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff6b35]">
              Find your tier in 30 seconds
            </p>
            <p className="font-display mt-1 truncate text-base font-extrabold sm:text-lg">
              Not sure which package fits?
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close quiz"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-white/70 transition hover:border-[#ff6b35]/60 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="px-3 pb-6 pt-3 sm:p-6">
          <PricingQuiz key={session} />
        </div>
      </div>
    </div>,
    document.body
  );
}
