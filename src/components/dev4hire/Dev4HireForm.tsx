import { useState } from "react";
import { FORM_ENDPOINT, type Status } from "./shared";
import { DEV_CATEGORIES } from "../../data/dev4hire";

const ROLES = ["UI / UX designer", "Frontend developer", "Backend developer", "Full-stack developer", "Manual QA tester", "Automation tester", "No-code / CMS helper", "Content / data entry", "Other"];
const box = "w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]";

export default function Dev4HireForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [cats, setCats] = useState<string[]>(["wordpress"]);
  const [f, setF] = useState({ name: "", email: "", phone: "", country: "", role: ROLES[0], links: "", exp: "", avail: "" });
  function upd(k: string, v: string) { setF((p) => ({ ...p, [k]: v })); }
  function toggleCat(id: string) { setCats((p) => (p.includes(id) ? p.filter((c) => c !== id) : [...p, id])); }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (cats.length === 0) return;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ _subject: "Dev4Hire registration - " + f.name, _template: "table", _captcha: "false", "Full Name": f.name, Email: f.email, "WhatsApp / Phone": f.phone, "Country": f.country, "Role": f.role, "Categories": cats.join(", "), "Portfolio": f.links, "Experience": f.exp, Availability: f.avail, "Submitted From": "ayocreativedesigns.com/dev4hire" }) });
      if (!res.ok) throw new Error("x");
      setStatus("success");
      setF({ name: "", email: "", phone: "", country: "", role: ROLES[0], links: "", exp: "", avail: "" });
      setCats(["wordpress"]);
    } catch { setStatus("error"); }
  }
  if (status === "success") return (<p className="rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-5 text-sm text-center">Registered. We will reach out when matching work lands.</p>);
  return (
    <form onSubmit={submit}>
      <p className="text-xs uppercase tracking-widest text-[#aaa] mb-3">Dev4Hire categories *</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {DEV_CATEGORIES.map((c) => {
          const on = cats.includes(c.id);
          return (<button key={c.id} type="button" onClick={() => toggleCat(c.id)} aria-pressed={on} className={on ? "text-xs px-4 py-2.5 rounded-full bg-[#ff6b35] text-white font-semibold min-h-[44px]" : "text-xs px-4 py-2.5 rounded-full border border-white/15 text-[#ccc] hover:bg-white/5 min-h-[44px]"}>{c.title}</button>);
        })}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <input required value={f.name} onChange={(e) => upd("name", e.target.value)} placeholder="Full name *" className={box} />
        <input required type="email" value={f.email} onChange={(e) => upd("email", e.target.value)} placeholder="Email *" className={box} />
        <input required value={f.country} onChange={(e) => upd("country", e.target.value)} placeholder="Country / timezone *" className={box} />
        <input value={f.phone} onChange={(e) => upd("phone", e.target.value)} placeholder="WhatsApp / phone" className={box} />
        <select required value={f.role} onChange={(e) => upd("role", e.target.value)} className={`${box} sm:col-span-2`}>{ROLES.map((r) => (<option key={r} value={r}>{r}</option>))}</select>
        <input value={f.links} onChange={(e) => upd("links", e.target.value)} placeholder="Portfolio links" className={`${box} sm:col-span-2`} />
        <textarea required value={f.exp} onChange={(e) => upd("exp", e.target.value)} rows={3} placeholder="Experience *" className="sm:col-span-2 w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm" />
        <input value={f.avail} onChange={(e) => upd("avail", e.target.value)} placeholder="Availability" className={`${box} sm:col-span-2`} />
        {status === "error" && (<p className="sm:col-span-2 text-sm text-red-300">Something went wrong. Please try again.</p>)}
        <button type="submit" disabled={status === "sending"} className="sm:col-span-2 btn-orange text-white text-sm font-bold py-4 rounded-xl disabled:opacity-60">{status === "sending" ? "Registering..." : "Register for alerts"}</button>
      </div>
    </form>
  );
}
