import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import BriefCard from "../components/dev4hire/BriefCard";
import Dev4HireForm from "../components/dev4hire/Dev4HireForm";
import { DEV_CATEGORIES, DEV_ROLES, DEV_BRIEFS, DEV_FAQS } from "../data/dev4hire";

export default function Dev4Hire() {
  useSEO("Dev4Hire - Paid Project Roles for Developers and Testers", "Paid remote contributor roles on real builds: frontend, backend, QA and automation testing. Fixed-fee milestones, worldwide.", "/dev4hire");
  return (
    <div className="pt-20 sm:pt-24 pb-12 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-[#111] p-6 sm:p-10 mb-12">
          <p className="text-[#ff6b35] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Dev4Hire — Get hired for real builds</p>
          <h1 className="font-display font-bold mb-4" style={{ fontSize: "clamp(34px, 5vw, 58px)" }}>Dev4Hire. <span className="text-[#ff6b35]">Build real work. Get paid.</span></h1>
          <p className="text-[#bbb] max-w-2xl text-base leading-relaxed mb-6">When a Dev4Hire brief lands — for example, a WordPress build that needs a UI/UX designer — we contact matching people directly. Register your interests below.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#register" className="btn-orange text-white text-center text-sm font-semibold px-6 py-3.5">Register for Dev4Hire alerts</a>
            <a href="#board" className="rounded-xl border border-white/20 text-center text-sm font-semibold px-6 py-3.5 hover:bg-white/5">See current Dev4Hire board</a>
          </div>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Dev4Hire categories</h2>
        <p className="text-sm text-[#bbb] max-w-2xl mb-6">Pick the kinds of work you want to hear about. When a matching project lands, we reach out to registered people first.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {DEV_CATEGORIES.map((c) => (
            <div key={c.id} className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-[#aaa] mb-3">{c.desc}</p>
              <p className="text-xs text-[#888] mb-4">{c.example}</p>
              <div className="flex flex-wrap gap-2">{c.tags.map((t) => (<span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#bbb]">{t}</span>))}</div>
            </div>
          ))}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Who can register</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {DEV_ROLES.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-[#aaa] mb-3">{r.desc}</p>
              <div className="flex flex-wrap gap-2">{r.tags.map((t) => (<span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#bbb]">{t}</span>))}</div>
            </div>
          ))}
        </div>
        <h2 id="board" className="scroll-mt-28 font-display text-2xl sm:text-3xl font-bold mb-3">Current Dev4Hire board</h2>
        <p className="text-sm text-[#bbb] max-w-2xl mb-6">Example: the WordPress brief below is gathering UI/UX and QA interest now. We contact matching registrants when it starts.</p>
        <div className="space-y-5 mb-12">{DEV_BRIEFS.map((p) => (<BriefCard key={p.id} project={p} />))}</div>
        <div id="register" className="scroll-mt-28 rounded-3xl border border-[#ff6b35]/25 bg-[#111] p-6 sm:p-10 mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Register for Dev4Hire alerts</h2>
          <p className="text-sm text-[#bbb] max-w-2xl mb-6">Choose your role and Dev4Hire categories. When matching work lands, we reach out using your registration info.</p>
          <Dev4HireForm />
        </div>
      </div>
      <FAQ items={DEV_FAQS} title="Dev4Hire questions." />
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#111] p-6 sm:p-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Need an extensive build delivered?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <Link to="/contact" className="btn-orange px-7 py-4 text-white text-sm font-semibold">Start a project</Link>
          <Link to="/pricing" className="rounded-xl border border-white/20 px-7 py-4 text-sm hover:bg-white/5">See pricing</Link>
        </div>
      </div>
    </div>
  );
}
