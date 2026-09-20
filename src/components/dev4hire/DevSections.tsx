import { DEV_VALUES, TALENT_GROUPS, DEV_STEPS } from "../../data/dev4hire";

export function ValueProp() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Why Dev4Hire</p>
        <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Stop searching.<br />Start building.</h2>
        <p className="text-[#aaa] max-w-2xl text-sm sm:text-base leading-relaxed mb-8">Dev4Hire gives tech professionals access to relevant paid opportunities without chasing clients. Register once, stay visible, get notified.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEV_VALUES.map((v) => (
            <div key={v.t} className="reveal rounded-2xl border border-white/10 bg-[#111] p-6">
              <h3 className="font-display text-lg font-bold mb-2 uppercase tracking-tight">{v.t}</h3>
              <p className="text-sm text-[#aaa] leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoCanJoin() {
  return (
    <section id="dh-categories" className="scroll-mt-32 py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Who can join</p>
        <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Not just developers.</h2>
        <p className="text-[#aaa] max-w-2xl text-sm sm:text-base leading-relaxed mb-8">Open to talented professionals across technology and digital — from code to design, testing, security and delivery.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {TALENT_GROUPS.map((g) => (
            <div key={g.title} className="reveal rounded-2xl border border-white/10 bg-[#111] p-6">
              <h3 className="font-display text-lg font-bold mb-3 uppercase">{g.title}</h3>
              <div className="flex flex-wrap gap-2">{g.items.map((i) => (<span key={i} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#bbb]">{i}</span>))}</div>
            </div>
          ))}
        </div>
        <a href="#dh-register" className="btn-orange inline-flex text-white text-sm font-bold px-7 py-4 min-h-[56px] items-center">Join the network</a>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="dh-how-it-works" className="scroll-mt-32 py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">How it works</p>
        <h2 className="font-display font-black leading-tight mb-8" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Register. Match. Build. Get paid.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEV_STEPS.map((s) => (
            <div key={s.n} className="reveal rounded-2xl border border-white/10 bg-[#111] p-6 relative overflow-hidden">
              <p className="font-display font-black text-4xl text-[#ff6b35]/25 mb-3">{s.n}</p>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[#aaa] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function ForTalent() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">For talent</p>
          <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>You build. We bring the opportunities.</h2>
          <p className="text-[#aaa] text-sm sm:text-base leading-relaxed mb-6">No daily client hunt. Register skills and interests once, and Dev4Hire can notify you when relevant paid projects become available.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#dh-register" className="btn-orange text-white text-center text-sm font-bold px-7 py-4 min-h-[56px] flex items-center justify-center">Join Dev4Hire</a>
            <a href="#dh-opportunities" className="rounded-xl border border-white/20 text-center text-sm font-semibold px-7 py-4 hover:bg-white/5 min-h-[56px] flex items-center justify-center">See sample briefs</a>
          </div>
        </div>
        <ul className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8 space-y-3">
          {["Access paid project opportunities", "Build your professional portfolio", "Work aligned with your skills", "Relevant opportunity notifications", "Flexible participation", "Transparent expectations", "Know your payout before starting"].map((b) => (
            <li key={b} className="flex gap-3 text-sm text-[#ccc]"><span className="text-[#ff6b35] font-bold">✓</span>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function NotifyExample() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Matching</p>
          <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>The right project. The right person.</h2>
          <p className="text-[#aaa] text-sm sm:text-base leading-relaxed mb-6">We do not broadcast every project to everyone. Notifications use skills, category, experience, availability, interests and preferred project type.</p>
          <div className="flex flex-wrap gap-2">{["Skills", "Category", "Experience", "Availability", "Interests", "Project type"].map((m) => (<span key={m} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#bbb]">{m}</span>))}</div>
        </div>
        <div className="reveal rounded-2xl border border-[#ff6b35]/30 bg-[#111] p-6 sm:p-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6b35] mb-3">New project · matched to you</p>
          <h3 className="font-bold text-lg mb-2">React Developer Needed</h3>
          <p className="text-xs text-[#888] mb-4">React, TypeScript, Tailwind — 2 Weeks — Payout N200,000</p>
          <p className="text-sm text-lime-300 bg-lime-400/10 border border-lime-400/25 rounded-xl px-4 py-3 mb-4">Your profile matches this opportunity.</p>
          <a href="#dh-register" className="btn-orange inline-flex text-white text-sm font-bold px-6 py-3.5">View project</a>
        </div>
      </div>
    </section>
  );
}