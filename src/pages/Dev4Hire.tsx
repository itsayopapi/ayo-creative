import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import { DevSubnav, DevHero } from "../components/dev4hire/DevTop";
import { ValueProp, WhoCanJoin, HowItWorks, ForTalent, NotifyExample } from "../components/dev4hire/DevSections";
import { ForClients, AyoAdvantage, PaymentTransparency, TrustSection, FinalCTA } from "../components/dev4hire/ForClients";
import OppBoard from "../components/dev4hire/OppBoard";
import RegisterForm from "../components/dev4hire/RegisterForm";
import { DEV_FAQS } from "../data/dev4hire";
export default function Dev4Hire() {
  useSEO("Dev4Hire - Your Skills. Our Projects.", "Join the Dev4Hire talent network: developers, designers, testers and cybersecurity professionals matched with paid project opportunities.", "/dev4hire");
  return (
    <div className="pt-20 sm:pt-24 pb-12 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <DevSubnav />
        <DevHero />
        <ValueProp />
        <WhoCanJoin />
        <HowItWorks />
        <section id="dev4hire-opportunities" className="scroll-mt-32 py-14 sm:py-20 border-t border-white/5">
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
        <section id="dev4hire-register" className="scroll-mt-32 py-14 sm:py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#ff6b35] text-xs uppercase tracking-widest mb-3">Register</p>
            <h2 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(30px,4.5vw,52px)" }}>Tell us what you do.</h2>
            <p className="text-[#aaa] max-w-2xl text-sm sm:text-base leading-relaxed mb-8">When a relevant project comes in, we contact matching registered professionals. Keep your skills, category and availability current.</p>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
              <RegisterForm />
            </div>
          </div>
        </section>
        <FinalCTA />
        <FAQ items={DEV_FAQS} title="Dev4Hire questions." />
      </div>
    </div>
  );
}
