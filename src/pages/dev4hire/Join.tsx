import { useSEO } from "../../hooks/useSEO";
import DevWizard from "../../components/dev4hire/DevWizard";
import { PageIntro, SubPageHero } from "../../components/dev4hire/DevBits";

export default function JoinPage() {
  useSEO("Join the Network — Dev4Hire | Ayo Creative Designs", "Create your Dev4Hire profile in four steps. Free to join. Get contacted when a paid project matches your skills, experience and availability.", "/dev4hire/register");
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SubPageHero
            label="Dev4Hire - Join"
            title="Tell us"
            accent="what you do."
            copy="Four quick steps. Your details are never shown publicly - we only use them to contact you about matching paid projects."
          />
          <div className="max-w-2xl">
            <DevWizard />
          </div>
        </div>
      </section>
    </>
  );
}
