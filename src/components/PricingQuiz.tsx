import { useState } from "react";
import { Link } from "react-router-dom";
import { QUIZ_STEPS, recommendTier, type QuizAnswers } from "../data/quiz-logic";
import { WEBSITE_TIERS, APP_TIERS } from "../data/nigeria-pricing";
import { useLocalPrice } from "../hooks/useLocalPrice";

export default function PricingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [done, setDone] = useState(false);
  const { price } = useLocalPrice();

  const current = QUIZ_STEPS[step];
  const total = QUIZ_STEPS.length;

  const pick = (opt: string) => {
    const next = { ...answers, [current.key]: opt };
    setAnswers(next);
    if (step + 1 < total) setStep(step + 1);
    else setDone(true);
  };

  const back = () => {
    if (done) setDone(false);
    else if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const copySummary = async () => {
    const lines = QUIZ_STEPS.map((s) => `- ${s.q}: ${(answers as Record<string, string>)[s.key] ?? "-"}`);
    const rec = recommendTier(answers);
    const text = `AYO CREATIVE — QUIZ ANSWERS\n${lines.join("\n")}\nSuggested tier: ${rec.tier}`;
    try {
      await navigator.clipboard.writeText(text);
      alert("Answers copied — paste them on WhatsApp or the contact form.");
    } catch {
      alert(text);
    }
  };

  if (done) {
    const rec = recommendTier(answers);
    const tier =
      [...WEBSITE_TIERS, ...APP_TIERS].find((t) => t.slug === rec.tier) ?? WEBSITE_TIERS[1];
    const isApp = APP_TIERS.some((t) => t.slug === tier.slug);
    return (
      <div className="rounded-2xl border border-[#ff6b35]/30 bg-[#0d0d0d] p-5 sm:p-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff6b35] sm:text-[11px]">Your result</p>
        <h3 className="font-display mt-2 text-xl font-black leading-tight sm:mt-3 sm:text-3xl">{tier.name}</h3>
        <p className="mt-2 text-sm text-white/60">{tier.tagline}</p>
        <p className="font-display mt-4 break-words text-[1.7rem] font-black leading-tight text-[#ff6b35] text-glow-orange sm:text-3xl">
          {price(tier.min, tier.max)}
        </p>
        <ul className="mt-4 space-y-2 sm:mt-5">
          {rec.why.map((w) => (
            <li key={w} className="flex gap-2.5 text-[13px] leading-relaxed text-white/70 sm:text-sm">
              <span className="shrink-0 font-bold text-[#ff6b35]">✓</span>
              <span className="min-w-0">{w}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 break-words rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-white/55">
          {(isApp ? tier.specs : (tier as { deliverables: string[] }).deliverables)?.slice(0, 3).join("  •  ")}
        </div>
        <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
          <Link to="/contact" className="btn-orange inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold sm:w-auto">
            Start this project →
          </Link>
          <button onClick={copySummary} className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:border-[#ff6b35]/60 hover:text-white sm:w-auto">
            Copy my answers
          </button>
          <button onClick={reset} className="inline-flex min-h-[48px] items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-white/50 transition hover:text-white">
            Restart ↺
          </button>
        </div>
        <button onClick={back} className="mt-4 inline-flex min-h-[44px] items-center text-xs text-white/40 underline underline-offset-4 hover:text-white/70">
          ← Back to last question
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-10">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b35] sm:text-[11px] sm:tracking-[0.25em]">
          Question {step + 1} of {total}
        </p>
        <div className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-white/10 sm:w-48">
          <div className="h-full rounded-full bg-[#ff6b35] transition-all duration-300" style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
      </div>
      <h3 className="font-display mt-4 text-lg font-extrabold leading-snug sm:text-2xl">{current.q}</h3>
      <div className="mt-5 grid gap-2 sm:mt-6 sm:gap-2.5">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => pick(opt)}
            className="min-h-[52px] rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-left text-[13px] font-medium leading-snug text-white/80 transition hover:border-[#ff6b35]/60 hover:bg-[#ff6b35]/5 hover:text-white active:border-[#ff6b35] active:bg-[#ff6b35]/10 sm:px-5 sm:text-sm"
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between sm:mt-6">
        <button
          onClick={back}
          disabled={step === 0}
          className="inline-flex min-h-[44px] items-center text-xs text-white/40 underline underline-offset-4 hover:text-white/70 disabled:opacity-30"
        >
          ← Back
        </button>
        <button onClick={reset} className="inline-flex min-h-[44px] items-center text-xs text-white/40 hover:text-white/70">
          Restart ↺
        </button>
      </div>
    </div>
  );
}
