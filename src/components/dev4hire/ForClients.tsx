import { Link } from "react-router-dom";
import { CLIENT_POINTS, ACD_HANDLES } from "../../data/dev4hire";

export function ForClients() {
  return (
    <section id="dev4hire-clients" className="scroll-mt-32 py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">For clients</p>
          <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Need tech talent?</h2>
          <p className="text-[#aaa] text-sm sm:text-base leading-relaxed mb-6">Tell Ayo Creative Designs what you are trying to build. We scope the project, source suitable professionals from our network and manage the engagement through delivery.</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a href="/contact" className="btn-orange text-white text-center text-sm font-bold px-7 py-4 min-h-[56px] flex items-center justify-center">Submit a project</a>
            <a href="/contact" className="rounded-xl border border-white/20 text-center text-sm font-semibold px-7 py-4 hover:bg-white/5 min-h-[56px] flex items-center justify-center">Talk to Ayo Creative Designs</a>
          </div>
          <p className="text-[11px] text-[#666]">Dev4Hire is backed by Ayo Creative Designs. The network supports delivery — clients stay with ACD.</p>
        </div>
        <ul className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8 space-y-3">
          {CLIENT_POINTS.map((c) => (
            <li key={c} className="flex gap-3 text-sm text-[#ccc]"><span className="text-[#ff6b35] font-bold shrink-0">✓</span>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AyoAdvantage() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Behind Dev4Hire</p>
          <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>More than a talent directory.</h2>
          <p className="text-[#aaa] text-sm sm:text-base leading-relaxed mb-6">Dev4Hire is operated by Ayo Creative Designs. We handle the client side, the buildup and the payout coordination so professionals can focus on delivery.</p>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex gap-3"><span className="text-[#ff6b35] font-bold shrink-0 w-5">A</span><span className="text-[#ccc]"><strong className="text-white">ACD handles:</strong> {ACD_HANDLES.slice(0,3).join(", ")}.</span></div>
            <div className="flex gap-3"><span className="text-[#ff6b35] font-bold shrink-0 w-5">P</span><span className="text-[#ccc]"><strong className="text-white">You focus on:</strong> building.</span></div>
          </div>
        </div>
        <div className="reveal rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8">
          <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-4">Who does what</p>
          <div className="space-y-4">
            {ACD_HANDLES.map((h) => (
              <div key={h} className="flex justify-between text-sm border-b border-white/5 last:border-0 pb-3 last:pb-0">
                <span className="text-[#888]">{h}</span>
                <span className="text-[#ff6b35] font-bold">ACD</span>
              </div>
            ))}
            <div className="flex justify-between text-sm pt-3 border-t border-white/10">
              <span className="text-[#888]">Execution / delivery</span>
              <span className="text-lime-300 font-bold">You</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PaymentTransparency() {
  const rows = [
    { label: "Client project value", value: "N400,000", cls: "text-white" },
    { label: "Freelancer payout", value: "N320,000", cls: "text-[#ff6b35]" },
    { label: "ACD / Dev4Hire service margin", value: "N80,000", cls: "text-[#888]" },
  ];
  return (
    <section className="py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Payment transparency</p>
        <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Clear project terms.<br />Clear payout.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8">
            <p className="text-[#888] text-xs uppercase tracking-widest mb-4">Example breakdown</p>
            <div className="space-y-4">
              {rows.map((r) => (
                <div key={r.label} className="flex justify-between text-base py-3 border-b border-white/5 last:border-0">
                  <span className="text-[#ccc]">{r.label}</span>
                  <span className={`font-bold ${r.cls}`}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8">
            <ul className="space-y-3 text-sm text-[#ccc]">
              <li className="flex gap-3"><span className="text-[#ff6b35] font-bold shrink-0">•</span>Ayo Creative Designs may retain a service margin for sourcing talent, managing the client relationship, coordinating delivery and providing oversight.</li>
              <li className="flex gap-3"><span className="text-[#ff6b35] font-bold shrink-0">•</span>The freelancer's agreed payout is clearly communicated before the project begins.</li>
              <li className="flex gap-3"><span className="text-[#ff6b35] font-bold shrink-0">•</span>The margin is not a surprise or hidden fee. It covers the work of running the engagement.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Quality</p>
        <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Built around quality.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { t: "Skill matching", d: "Projects are matched with relevant professionals." },
            { t: "Human review", d: "Applications can be reviewed before talent is selected." },
            { t: "Project oversight", d: "Ayo Creative Designs remains involved in the project." },
            { t: "Professional standards", d: "Clear expectations, deadlines and deliverables." },
          ].map((c) => (
            <div key={c.t} className="reveal rounded-2xl border border-white/10 bg-[#111] p-6">
              <h3 className="font-display text-lg font-bold mb-2">{c.t}</h3>
              <p className="text-sm text-[#aaa] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="max-w-xl text-sm text-[#888] leading-relaxed">Registration does not automatically guarantee project assignment. Professionals are reviewed based on skills, portfolio, availability and project requirements.</p>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center px-5">
        <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-4">Get started</p>
        <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,5vw,56px)" }}>Your next project<br />could be the one.</h2>
        <p className="text-[#aaa] max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">Join the Dev4Hire network and put your skills in front of real project opportunities sourced through Ayo Creative Designs.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#dev4hire-register" className="btn-orange text-white text-center text-sm font-bold px-8 py-4 min-h-[60px] flex items-center justify-center">Join the network</a>
          <a href="#dev4hire-opportunities" className="rounded-xl border border-white/20 text-center text-sm font-semibold px-8 py-4 hover:bg-white/5 min-h-[60px] flex items-center justify-center">Explore opportunities</a>
        </div>
      </div>
    </section>
  );
}



