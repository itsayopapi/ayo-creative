import { useSEO } from "../hooks/useSEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FAQ from "../components/FAQ";
import DevHero from "../components/dev4hire/DevHero";
import { ValueProp, WhoCanJoin, HowItWorks, ForTalent, NotifyExample } from "../components/dev4hire/DevSections";
import { ForClients, AyoAdvantage, PaymentTransparency, TrustSection, FinalCTA } from "../components/dev4hire/ForClients";
import OppBoard from "../components/dev4hire/OppBoard";
import DevWizard from "../components/dev4hire/DevWizard";
import { DEV_FAQS } from "../data/dev4hire";

export default function Dev4Hire() {
  useSEO("Dev4Hire — Your Skills. Our Projects.", "Join the Dev4Hire talent network: developers, designers, testers and cybersecurity professionals matched with paid project opportunities.", "/dev4hire");
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      return () => clearTimeout(t);
    }
  }, [location.hash]);
  return (
    <div className="pt-20 sm:pt-24 pb-12 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <DevHero />
        <ValueProp />
        <WhoCanJoin />
        <HowItWorks />
        <section id="dh-opportunities" className="scroll-mt-36 py-14 sm:py-20 border-t border-white/5">
          <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Available opportunities</p>
          <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Projects looking for talent.</h2>
          <p className="text-[#aaa] max-w-2xl text-sm sm:text-base leading-relaxed mb-8">Explore the brief format. Live briefs publish here with full details and express-interest forms.</p>
          <OppBoard />
        </section>
        <ForTalent />
        <NotifyExample />
        <ForClients />
        <AyoAdvantage />
        <PaymentTransparency />
        <TrustSection />
        <section id="dh-register" className="scroll-mt-36 py-14 sm:py-20 border-t border-white/5">
          <div className="max-w-3xl mb-10">
            <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Join the network</p>
            <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Tell us what you do.</h2>
            <p className="text-[#aaa] text-sm sm:text-base leading-relaxed">Four quick steps. When a relevant paid project comes in, we contact matching registered professionals directly.</p>
          </div>
          <div className="max-w-2xl">
            <DevWizard />
          </div>
        </section>
        <FinalCTA />
        <div id="dh-faq" className="scroll-mt-36">
          <FAQ items={DEV_FAQS} title="Dev4Hire questions." />
        </div>
      </div>
    </div>
  );
}
