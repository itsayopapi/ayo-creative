const FLOATERS = [
  { title: "React Developer Needed", pay: "₦250,000", time: "2 Weeks", cls: "lg:top-6 lg:-right-2 xl:-right-10 top-3 right-0 rotate-2" },
  { title: "UI/UX Designer", pay: "₦180,000", time: "10 Days", cls: "lg:top-40 lg:-right-8 xl:-right-20 top-24 right-2 -rotate-2" },
  { title: "QA Tester", pay: "₦120,000", time: "1 Week", cls: "lg:bottom-8 lg:right-10 xl:right-0 bottom-3 right-6 rotate-1" },
];

export default function DevHero() {
  return (
    <section className="relative pt-12 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(255,107,53,0.35) 0%, transparent 65%)" }}
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div className="relative z-10">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#ff6b35] mb-5">
            Dev4Hire · Ayo Creative Designs Talent Network
          </p>
          <h1
            className="font-display font-black uppercase leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(44px,7.5vw,92px)" }}
          >
            Your Skills.
            <br />
            <span className="text-[#ff6b35]" style={{ textShadow: "0 0 40px rgba(255,107,53,0.45)" }}>
              Our Projects.
            </span>
          </h1>
          <p className="text-[#b5b5b5] text-sm sm:text-lg leading-relaxed max-w-xl mb-9">
            Join a growing network of developers, designers, testers, cybersecurity
            professionals and other technology specialists. Tell us what you do and
            what opportunities you're interested in — we'll notify you when relevant
            paid projects become available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#dh-register"
              className="btn-orange text-white text-center text-sm font-bold px-8 py-4 min-h-[56px] flex items-center justify-center"
            >
              Join the Network
            </a>
            <a
              href="#dh-opportunities"
              className="rounded-xl border border-white/20 text-center text-sm font-semibold px-8 py-4 hover:bg-white/5 hover:border-white/40 min-h-[56px] flex items-center justify-center transition"
            >
              Explore Opportunities
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-[#777]">
            <span>Free to join</span>
            <span className="text-[#ff6b35]">·</span>
            <span>Paid project briefs</span>
            <span className="text-[#ff6b35]">·</span>
            <span>Payout agreed before you start</span>
          </div>
        </div>

        <div className="relative hidden lg:block min-h-[420px]" aria-hidden="true">
          <div className="absolute inset-8 rounded-3xl border border-[#ff6b35]/20 bg-[#111]/60 backdrop-blur-sm" style={{ boxShadow: "0 0 80px rgba(255,107,53,0.12)" }} />
          <div className="absolute inset-x-16 top-16 rounded-2xl bg-[#0d0d0d] border border-white/10 p-5">
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#666] mb-2">Network status</p>
            <div className="flex items-end gap-2">
              <span className="font-display font-black text-4xl text-white">6</span>
              <span className="text-xs text-[#888] pb-1">open brief formats</span>
            </div>
            <div className="mt-4 flex gap-1.5">
              {[80, 45, 65, 30, 90, 55].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/10 flex-1 overflow-hidden">
                  <div className="h-full rounded-full bg-[#ff6b35]" style={{ width: w + "%" }} />
                </div>
              ))}
            </div>
          </div>
          {FLOATERS.map((f) => (
            <div key={f.title} className={"absolute rounded-2xl bg-[#141414] border border-white/15 p-4 w-56 shadow-2xl " + f.cls}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold text-white">{f.title}</p>
                <span className="text-[8px] font-bold tracking-widest uppercase text-lime-300 bg-lime-400/15 border border-lime-400/30 rounded-full px-2 py-0.5">Open</span>
              </div>
              <p className="text-[#ff6b35] font-display font-bold text-lg">{f.pay}</p>
              <p className="text-[10px] text-[#777] uppercase tracking-widest mt-1">{f.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
