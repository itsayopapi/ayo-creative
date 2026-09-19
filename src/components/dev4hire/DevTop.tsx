import { DEV_FLOW } from "../../data/dev4hire";

export function DevSubnav() {
  return (
    <div className="sticky top-[68px] sm:top-[76px] z-30 -mx-5 sm:-mx-6 md:-mx-10 px-5 sm:px-6 md:px-10 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-3">
        <span className="font-display font-bold text-sm mr-3 shrink-0">Dev4Hire<span className="text-[#ff6b35]">.</span></span>
        <a href="#dev4hire-opportunities" className="text-xs text-[#aaa] hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 whitespace-nowrap min-h-[44px] flex items-center">Opportunities</a>
        <a href="#dev4hire-how" className="text-xs text-[#aaa] hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 whitespace-nowrap min-h-[44px] flex items-center">How It Works</a>
        <a href="#dev4hire-talent" className="text-xs text-[#aaa] hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 whitespace-nowrap min-h-[44px] flex items-center">For Talent</a>
        <a href="#dev4hire-clients" className="text-xs text-[#aaa] hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 whitespace-nowrap min-h-[44px] flex items-center">For Clients</a>
        <a href="#dev4hire-faq" className="text-xs text-[#aaa] hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 whitespace-nowrap min-h-[44px] flex items-center">FAQ</a>
        <a href="/login" className="text-xs text-[#aaa] hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 whitespace-nowrap min-h-[44px] flex items-center">Login</a>
        <a href="#dev4hire-register" className="ml-auto shrink-0 btn-orange text-white text-xs font-semibold px-4 py-2.5 whitespace-nowrap min-h-[44px] flex items-center">Join the Network</a>
      </div>
    </div>
  );
}

export function DevHero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] mt-6">
      <div className="absolute inset-0 pointer-events-none orange-radial opacity-70" />
      <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-[#ff6b35]/10 blur-3xl pointer-events-none" />
      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-8 p-6 sm:p-10 lg:p-14">
        <div>
          <p className="text-[#ff6b35] text-[11px] font-bold tracking-[0.25em] uppercase mb-5">Dev4Hire · Ayo Creative Designs Talent Network</p>
          <h1 className="font-display font-black leading-[1.02] tracking-tight mb-5" style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
            Your skills.<br />Our projects.
          </h1>
          <p className="text-[#bbb] max-w-xl text-sm sm:text-base leading-relaxed mb-7">
            Join a growing network of developers, designers, testers, cybersecurity professionals and other technology specialists. Tell us what you do, and we notify you when relevant paid projects become available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <a href="#dev4hire-register" className="btn-orange text-white text-center text-sm font-bold px-7 py-4 min-h-[56px] flex items-center justify-center">Join the network</a>
            <a href="#dev4hire-opportunities" className="rounded-xl border border-white/20 text-center text-sm font-semibold px-7 py-4 hover:bg-white/5 min-h-[56px] flex items-center justify-center">Explore opportunities</a>
          </div>
          <p className="text-[11px] text-[#666] tracking-wide">{DEV_FLOW}</p>
        </div>
        <div className="relative hidden md:block" aria-hidden="true">
          <div className="absolute top-2 left-2 w-64 rounded-2xl border border-white/10 bg-[#111]/95 p-5 shadow-2xl rotate-[-4deg]">
            <p className="text-xs font-bold mb-1">React Developer Needed</p>
            <p className="text-[11px] text-[#888] mb-3">SaaS Dashboard · Remote</p>
            <div className="flex items-center justify-between text-xs"><span className="text-[#ff6b35] font-bold">₦250,000</span><span className="text-[#888]">2 Weeks</span></div>
            <span className="inline-block mt-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400/15 text-lime-300 border border-lime-400/30">OPEN</span>
          </div>
          <div className="absolute top-48 right-0 w-64 rounded-2xl border border-white/10 bg-[#111]/95 p-5 shadow-2xl rotate-[3deg]">
            <p className="text-xs font-bold mb-1">UI/UX Designer</p>
            <p className="text-[11px] text-[#888] mb-3">Mobile App · Remote</p>
            <div className="flex items-center justify-between text-xs"><span className="text-[#ff6b35] font-bold">₦180,000</span><span className="text-[#888]">10 Days</span></div>
            <span className="inline-block mt-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400/15 text-lime-300 border border-lime-400/30">OPEN</span>
          </div>
          <div className="absolute bottom-2 left-10 w-60 rounded-2xl border border-white/10 bg-[#111]/95 p-5 shadow-2xl rotate-[-2deg]">
            <p className="text-xs font-bold mb-1">QA Tester</p>
            <p className="text-[11px] text-[#888] mb-3">Web App · Remote</p>
            <div className="flex items-center justify-between text-xs"><span className="text-[#ff6b35] font-bold">₦120,000</span><span className="text-[#888]">1 Week</span></div>
            <span className="inline-block mt-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400/15 text-lime-300 border border-lime-400/30">OPEN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
