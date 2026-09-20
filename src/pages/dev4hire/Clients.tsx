import { useSEO } from "../../hooks/useSEO";
import { Link } from "react-router-dom";
import { PageIntro, SubPageHero } from "../../components/dev4hire/DevBits";
import { CLIENT_POINTS, ACD_HANDLES } from "../../data/dev4hire";

export default function ClientsPage() {
  useSEO("For Clients — Need Tech Talent? | Dev4Hire", "Tell Ayo Creative Designs what you're building. We scope it, source professionals from the Dev4Hire network and manage delivery end to end.", "/dev4hire/clients");
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SubPageHero
            label="Dev4Hire - For Clients"
            title="Need"
            accent="tech talent?"
            copy="Tell Ayo Creative Designs what you're trying to build. We scope the project, source the right professionals and manage the engagement through delivery."
            cta="Submit a Project"
            ctaHref="/contact"
          />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {CLIENT_POINTS.map((c, i) => (
                <div key={c} className="bg-[#080808] p-5 sm:p-6 hover:bg-[#111] transition-colors duration-300">
                  <div className="text-[#333] text-xs font-mono mb-3">0{i + 1}</div>
                  <h3 className="font-display font-bold text-sm">{c}</h3>
                </div>
              ))}
            </ul>
            <div className="bg-[#111] border border-white/5 rounded-lg p-6 sm:p-8">
              <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-5">Who does what</p>
              <div className="space-y-3.5">
                {ACD_HANDLES.map((h) => (
                  <div key={h} className="flex justify-between items-center text-sm border-b border-white/5 pb-3.5 last:border-0">
                    <span className="text-[#888880]">{h}</span>
                    <span className="text-[#ff6b35] font-semibold text-xs uppercase tracking-wider">ACD</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm pt-2 border-t border-white/10">
                  <span className="text-[#888880]">Executing the work</span>
                  <span className="text-lime-300 font-semibold text-xs uppercase tracking-wider">You*</span>
                </div>
              </div>
              <p className="text-[11px] text-[#666] mt-5">*The selected professional from the network. Your relationship, requirements and delivery stay managed by Ayo Creative Designs.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-orange text-white text-sm font-semibold px-7 py-3.5 rounded-lg min-h-[52px] inline-flex items-center justify-center">Submit a Project</Link>
            <Link to="/contact" className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-7 py-3.5 rounded-lg hover:border-white/40 transition-colors min-h-[52px] inline-flex items-center justify-center">Talk to Ayo Creative Designs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
