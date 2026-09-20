import { useState } from "react";
import { FORM_ENDPOINT, inputCls, labelCls, type Status } from "./shared";
import { DEV_REG_CATEGORIES, DEV_REG_EXPERIENCE, DEV_REG_AVAILABILITY, DEV_REG_PREFS, REGISTER_SKILLS } from "../../data/dev4hire";

export type ProfileForm = {
  name: string; email: string; phone: string; country: string;
  category: string; experience: string;
  skills: string[]; availability: string;
  prefs: string[]; portfolio: string; interests: string;
};

export const EMPTY_PROFILE: ProfileForm = {
  name: "", email: "", phone: "", country: "",
  category: "", experience: "",
  skills: [], availability: "",
  prefs: [], portfolio: "", interests: "",
};

const STEPS = ["You", "Your work", "Skills & fit", "Portfolio"];

const chipOn = "text-xs px-4 py-2.5 rounded-full bg-[#ff6b35] text-white font-semibold border border-[#ff6b35] min-h-[44px] transition";
const chipOff = "text-xs px-4 py-2.5 rounded-full border border-white/15 text-[#ccc] hover:bg-white/5 hover:border-white/30 min-h-[44px] transition";

function Chips({ options, value, onToggle }: { options: string[]; value: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value.includes(o);
        return <button key={o} type="button" aria-pressed={on} onClick={() => onToggle(o)} className={on ? chipOn : chipOff}>{o}</button>;
      })}
    </div>
  );
}

export function WizardProgress({ step }: { step: number }) {
  return (
    <ol className="flex items-center gap-2 mb-8" aria-label="Registration progress">
      {STEPS.map((s, i) => (
        <li key={s} className="flex-1">
          <div className={"h-1.5 rounded-full transition-colors " + (i <= step ? "bg-[#ff6b35]" : "bg-white/10")} />
          <p className={"text-[10px] uppercase tracking-widest mt-2 hidden sm:block " + (i === step ? "text-[#ff6b35] font-bold" : "text-[#666]")}>{s}</p>
        </li>
      ))}
    </ol>
  );
}

function WizardStep0({ form, set }: { form: ProfileForm; set: (k: keyof ProfileForm, v: string) => void }) {
  return (
    <div className="space-y-5">
      <h3 className="font-display font-black text-2xl sm:text-3xl">First, the basics.</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={labelCls} htmlFor="dw-name">Full name</label><input id="dw-name" className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Ada Lovelace" autoComplete="name" /></div>
        <div><label className={labelCls} htmlFor="dw-email">Email</label><input id="dw-email" type="email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" autoComplete="email" /></div>
        <div><label className={labelCls} htmlFor="dw-phone">Phone / WhatsApp</label><input id="dw-phone" className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+234 ..." autoComplete="tel" /></div>
        <div><label className={labelCls} htmlFor="dw-country">Country</label><input id="dw-country" className={inputCls} value={form.country} onChange={(e) => set("country", e.target.value)} placeholder="Nigeria" autoComplete="country-name" /></div>
      </div>
      <p className="text-xs text-[#666]">Your details are never shown publicly. We only use them to contact you about matching projects.</p>
    </div>
  );
}
function WizardStep1({ form, set }: { form: ProfileForm; set: (k: keyof ProfileForm, v: string) => void }) {
  return (
    <div className="space-y-6">
      <h3 className="font-display font-black text-2xl sm:text-3xl">What do you do?</h3>
      <div><span className={labelCls}>Professional category</span><Chips options={DEV_REG_CATEGORIES} value={form.category ? [form.category] : []} onToggle={(v) => set("category", form.category === v ? "" : v)} /></div>
      <div><span className={labelCls}>Experience level</span><Chips options={DEV_REG_EXPERIENCE} value={form.experience ? [form.experience] : []} onToggle={(v) => set("experience", form.experience === v ? "" : v)} /></div>
    </div>
  );
}

function WizardStep2({ form, set, toggle }: { form: ProfileForm; set: (k: keyof ProfileForm, v: string) => void; toggle: (k: "skills" | "prefs", v: string) => void }) {
  return (
    <div className="space-y-6">
      <h3 className="font-display font-black text-2xl sm:text-3xl">Skills & fit.</h3>
      <div><span className={labelCls}>Skills (pick all that apply)</span><Chips options={REGISTER_SKILLS} value={form.skills} onToggle={(v) => toggle("skills", v)} /></div>
      <div><span className={labelCls}>Availability</span><Chips options={DEV_REG_AVAILABILITY} value={form.availability ? [form.availability] : []} onToggle={(v) => set("availability", form.availability === v ? "" : v)} /></div>
      <div><span className={labelCls}>Preferred project types</span><Chips options={DEV_REG_PREFS} value={form.prefs} onToggle={(v) => toggle("prefs", v)} /></div>
    </div>
  );
}

function WizardStep3({ form, set, status }: { form: ProfileForm; set: (k: keyof ProfileForm, v: string) => void; status: Status }) {
  return (
    <div className="space-y-5">
      <h3 className="font-display font-black text-2xl sm:text-3xl">Show us your work.</h3>
      <div><label className={labelCls} htmlFor="dw-portfolio">Portfolio / GitHub / LinkedIn</label><input id="dw-portfolio" className={inputCls} value={form.portfolio} onChange={(e) => set("portfolio", e.target.value)} placeholder="https://github.com/you" /></div>
      <div><label className={labelCls} htmlFor="dw-interests">Anything else about the projects you want? (optional)</label><textarea id="dw-interests" rows={4} className={inputCls} value={form.interests} onChange={(e) => set("interests", e.target.value)} placeholder="e.g. I enjoy WordPress builds with custom themes and e-commerce..." /></div>
      {status === "error" && (
        <p className="text-sm text-red-400 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3">Something went wrong sending your profile. Please try again, or email ayocoding12@gmail.com directly.</p>
      )}
    </div>
  );
}
export function useDevForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<ProfileForm>(EMPTY_PROFILE);
  const set = (k: keyof ProfileForm, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggle = (k: "skills" | "prefs", v: string) =>
    setForm((f) => ({ ...f, [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v] }));
  const reset = () => { setStep(0); setStatus("idle"); setForm(EMPTY_PROFILE); };
  return { step, setStep, status, setStatus, form, set, toggle, reset };
}

async function sendProfile(form: ProfileForm, setStatus: (s: Status) => void) {
  setStatus("sending");
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Dev4Hire Profile — ${form.name} (${form.category})`,
        _template: "table",
        "Full Name": form.name,
        Email: form.email,
        "Phone / WhatsApp": form.phone || "—",
        Country: form.country || "—",
        "Professional Category": form.category,
        Experience: form.experience || "—",
        Skills: form.skills.join(", "),
        Availability: form.availability,
        "Project Preferences": form.prefs.join(", ") || "—",
        Portfolio: form.portfolio || "—",
        Interests: form.interests || "—",
        "Submitted From": "ayocreativedesigns.com/dev4hire",
        Timestamp: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error();
    setStatus("success");
  } catch {
    setStatus("error");
  }
}

const stepValid: ((f: ProfileForm) => boolean)[] = [
  (f) => !!f.name.trim() && /.+@.+\..+/.test(f.email),
  (f) => !!f.category,
  (f) => f.skills.length > 0 && !!f.availability,
  () => true,
];

export default function DevWizard() {
  const { step, setStep, status, setStatus, form, set, toggle, reset } = useDevForm();
  if (status === "success") return <WizardSuccess onReset={reset} />;
  const canBack = step > 0 && status !== "sending";
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6 sm:p-10">
      <WizardProgress step={step} />
      {step === 0 && <WizardStep0 form={form} set={set} />}
      {step === 1 && <WizardStep1 form={form} set={set} />}
      {step === 2 && <WizardStep2 form={form} set={set} toggle={toggle} />}
      {step === 3 && <WizardStep3 form={form} set={set} status={status} />}
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
        {canBack && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-xl border border-white/20 text-sm font-semibold px-6 py-3.5 hover:bg-white/5 min-h-[52px] transition">Back</button>
        )}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-xs text-[#666] hidden sm:block">Step {step + 1} of 4</span>
          {step < 3 ? (
            <button type="button" disabled={!stepValid[step](form)} onClick={() => setStep((s) => s + 1)} className="btn-orange text-white text-sm font-bold px-7 py-3.5 min-h-[52px] disabled:opacity-40 disabled:cursor-not-allowed">Continue</button>
          ) : (
            <button type="button" disabled={status === "sending"} onClick={() => sendProfile(form, setStatus)} className="btn-orange text-white text-sm font-bold px-7 py-3.5 min-h-[52px] disabled:opacity-50">
              {status === "sending" ? "Creating profile..." : "Create my profile"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function WizardSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-3xl border border-lime-400/30 bg-[#111] p-8 sm:p-12 text-center">
      <p className="text-4xl mb-4">🧡</p>
      <h3 className="font-display font-black text-2xl sm:text-3xl mb-3">You're in the network.</h3>
      <p className="text-[#aaa] text-sm sm:text-base leading-relaxed max-w-md mx-auto">
        Your profile is registered. When a paid project matches your skills and availability, we'll reach out using the details you provided.
      </p>
      <button type="button" onClick={onReset} className="mt-8 text-sm font-semibold text-[#ff6b35] hover:underline">Register another profile</button>
    </div>
  );
}