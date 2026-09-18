import { useState } from "react";
import { FORM_ENDPOINT, type Status } from "./shared";
import type { OpenProject } from "../../data/dev4hire";

export default function ProjectCard({ project }: { project: OpenProject }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [f, setF] = useState({ name: "", email: "", country: "", role: project.roles[0]?.title ?? "", links: "", exp: "", avail: "" });
  function upd(k: string, v: string) { setF((p) => ({ ...p, [k]: v })); }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const body = {
      _subject: "Contributor application - " + f.name,
      _template: "table",
      _captcha: "false",
      "Full Name": f.name,
      Email: f.email,
      Project: project.title,
      "Role Applied For": f.role,
      "Country / Timezone": f.country,
      "Portfolio": f.links,
      "Experience": f.exp,
      Availability: f.avail,
      "Submitted From": "ayocreativedesigns.com/dev4hire",
    };
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("x");
      setStatus("success");
    } catch { setStatus("error"); }
  }
  const card = "rounded-3xl border border-white/10 bg-[#111] overflow-hidden";
  const pill = "text-[11px] font-semibold px-3 py-1.5 rounded-full";
  if (!open) {
    return (
      <article className={card}>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`${pill} bg-[#ff6b35]/15 text-[#ff6b35] border border-[#ff6b35]/30`}>{project.status}</span>
            <span className={`${pill} text-[#888] bg-white/5 border border-white/10`}>{project.location}</span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-[#bbb] mb-4">{project.summary}</p>
          <p className="text-sm mb-1"><span className="text-[#888]">Budget: </span><span className="text-[#ff6b35] font-semibold">{project.budget}</span></p>
          <p className="text-sm mb-5"><span className="text-[#888]">Timeline: </span>{project.timeline}</p>
          <button type="button" onClick={() => setOpen(true)} className="w-full rounded-xl border border-white/15 px-5 py-3.5 text-sm font-semibold hover:bg-white/5 min-h-[52px]">View details and apply</button>
        </div>
      </article>
    );
  }
  return (
    <article className={card}>
      <div className="p-6 sm:p-8 border-b border-white/10">
        <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-[#bbb] mb-4">{project.summary}</p>
        <button type="button" onClick={() => setOpen(false)} className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5">Hide details</button>
      </div>
      <div className="px-6 sm:px-8 py-6 bg-[#0c0c0c]">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Open roles</p>
        <div className="space-y-3 mb-6">
          {project.roles.map((r) => (
            <div key={r.title} className="rounded-xl border border-white/10 p-4">
              <p className="font-semibold text-sm">{r.title}</p>
              <p className="text-xs text-[#888]">{r.type} · <span className="text-[#ff6b35]">{r.pay}</span></p>
            </div>
          ))}
        </div>
        {status === "success" ? (
          <p className="rounded-xl border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-5 text-sm text-center">Application received. Shortlisted contributors hear back within 5 working days.</p>
        ) : (
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
            <input required value={f.name} onChange={(e) => upd("name", e.target.value)} placeholder="Full name *" className="w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]" />
            <input required type="email" value={f.email} onChange={(e) => upd("email", e.target.value)} placeholder="Email *" className="w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]" />
            <input required value={f.country} onChange={(e) => upd("country", e.target.value)} placeholder="Country / timezone *" className="w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]" />
            <select required value={f.role} onChange={(e) => upd("role", e.target.value)} className="w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]">
              {project.roles.map((r) => (<option key={r.title} value={r.title}>{r.title}</option>))}
            </select>
            <input value={f.links} onChange={(e) => upd("links", e.target.value)} placeholder="Portfolio / GitHub links" className="sm:col-span-2 w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]" />
            <textarea required value={f.exp} onChange={(e) => upd("exp", e.target.value)} rows={3} placeholder="Relevant experience *" className="sm:col-span-2 w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm" />
            <input value={f.avail} onChange={(e) => upd("avail", e.target.value)} placeholder="Availability" className="sm:col-span-2 w-full rounded-xl bg-[#0d0d0d] border border-white/10 px-4 py-3 text-sm min-h-[52px]" />
            {status === "error" && (<p className="sm:col-span-2 text-sm text-red-300">Something went wrong. Please try again.</p>)}
            <button type="submit" disabled={status === "sending"} className="sm:col-span-2 btn-orange text-white text-sm font-bold py-4 rounded-xl disabled:opacity-60">{status === "sending" ? "Sending…" : "Submit application"}</button>
          </form>
        )}
      </div>
    </article>
  );
}
