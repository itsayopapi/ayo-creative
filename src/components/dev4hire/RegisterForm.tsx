import { useState } from "react";
import { FORM_ENDPOINT, type Status } from "./shared";
import { DEV_REG_CATEGORIES, DEV_REG_EXPERIENCE, DEV_REG_AVAILABILITY, DEV_REG_PREFS, REGISTER_SKILLS } from "../../data/dev4hire";

const box = "w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]";
const kick = "text-xs uppercase tracking-widest text-[#aaa] mb-3";

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [cats, setCats] = useState<string[]>(["Developer"]);
  const [skills, setSkills] = useState<string[]>(["React"]);
  const [exp, setExp] = useState<string>("");
  const [av, setAv] = useState<string>("");
  const [prefs, setPrefs] = useState<string>("");
  const [f, setF] = useState({ name: "", email: "", phone: "", country: "", tz: "", portfolio: "", interests: "" });
  function upd(k: string, v: string) { setF((p) => ({ ...p, [k]: v })); }
  function toggle(list: string[], v: string, set: (x: string[]) => void) { set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]); }
  function sel(list: string[], v: string, set: (x: string) => void) { set(v); }
  const chip = (on: boolean) => (on ? "text-xs px-4 py-2.5 rounded-full bg-[#ff6b35] text-white font-semibold min-h-[44px]" : "text-xs px-4 py-2.5 rounded-full border border-white/15 text-[#ccc] hover:bg-white/5 min-h-[44px]");
  const chipGroup = (label: string, list: string[], selected: string, set: (x: string) => void) => (
    <>
      <p className={kick}>{label}</p>
      <div className="flex flex-wrap gap-2 mb-6">{list.map((c) => (<button key={c} type="button" aria-pressed={selected === c} onClick={() => sel(list, c, set)} className={chip(selected === c)}>{c}</button>))}</div>
    </>
  );
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (cats.length === 0 || skills.length === 0) return;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Dev4Hire profile - " + f.name,
          _template: "table",
          _captcha: "false",
          "Full Name": f.name,
          Email: f.email,
          "Phone / WhatsApp": f.phone,
          Country: f.country,
          Timezone: f.tz,
          "Categories": cats.join(", "),
          "Skills": skills.join(", "),
          "Portfolio": f.portfolio,
          "Project Interests": f.interests,
          "Submitted From": "ayocreativedesigns.com/dev4hire",
        }),
      });
      if (!res.ok) throw new Error("x");
      setStatus("success");
    } catch { setStatus("error"); }
  }
  if (status === "success") return (<p className="rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-6 text-sm text-center">Profile created. We will notify you when matching paid work lands.</p>);
  return (
    <form onSubmit={submit}>
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <input required value={f.name} onChange={(e) => upd("name", e.target.value)} placeholder="Full name *" className={box} />
        <input required type="email" value={f.email} onChange={(e) => upd("email", e.target.value)} placeholder="Email *" className={box} />
        <input required value={f.phone} onChange={(e) => upd("phone", e.target.value)} placeholder="Phone / WhatsApp *" className={box} />
        <input required value={f.country} onChange={(e) => upd("country", e.target.value)} placeholder="Country *" className={box} />
        <input value={f.tz} onChange={(e) => upd("tz", e.target.value)} placeholder="Timezone (e.g. WAT, UTC+1)" className={`${box} sm:col-span-2`} />
      </div>
      <p className={kick}>Professional category *</p>
      <div className="flex flex-wrap gap-2 mb-6">{DEV_REG_CATEGORIES.map((c) => (<button key={c} type="button" aria-pressed={cats.includes(c)} onClick={() => toggle(cats, c, setCats)} className={chip(cats.includes(c))}>{c}</button>))}</div>
      <p className={kick}>Skills *</p>
      <div className="flex flex-wrap gap-2 mb-6">{REGISTER_SKILLS.map((s) => (<button key={s} type="button" aria-pressed={skills.includes(s)} onClick={() => toggle(skills, s, setSkills)} className={chip(skills.includes(s))}>{s}</button>))}</div>
      {chipGroup("Experience level", DEV_REG_EXPERIENCE, exp, setExp)}
      {chipGroup("Availability", DEV_REG_AVAILABILITY, av, setAv)}
      {chipGroup("Preferred project type", DEV_REG_PREFS, prefs, setPrefs)}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <input value={f.portfolio} onChange={(e) => upd("portfolio", e.target.value)} placeholder="Portfolio / GitHub / LinkedIn" className={`${box} sm:col-span-2`} />
        <textarea value={f.interests} onChange={(e) => upd("interests", e.target.value)} rows={3} placeholder="Project interests — briefs you want to hear about" className="sm:col-span-2 w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm" />
      </div>
      {status === "error" && (<p className="text-sm text-red-300 mb-4">Something went wrong. Please try again.</p>)}
      <button type="submit" disabled={status === "sending"} className="btn-orange text-white text-sm font-bold py-4 px-8 rounded-xl disabled:opacity-60 w-full sm:w-auto min-h-[56px]">{status === "sending" ? "Creating profile…" : "Create my profile"}</button>
    </form>
  );
}
