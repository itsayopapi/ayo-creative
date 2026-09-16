import { useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import { useRevealOnScroll } from "../hooks/useReveal";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  useRevealOnScroll(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0ebe0] overflow-x-clip">
      <ScrollProgress />
      <Nav />
      <main className="pt-[68px] sm:pt-[76px]">
        <div key={location.pathname} className="page-enter">
          {children}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

