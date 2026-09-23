import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Route-level code splitting: only the current page's chunk loads on demand.
const ServicesPage = lazy(() => import("./pages/Services"));
const PricingPage = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const Showcase = lazy(() => import("./pages/Showcase"));
const Contact = lazy(() => import("./pages/Contact"));
const Dev4Hire = lazy(() => import("./pages/dev4hire/Overview"));
const Dev4HireOpportunities = lazy(() => import("./pages/dev4hire/Opportunities"));
const Dev4HireHow = lazy(() => import("./pages/dev4hire/HowItWorks"));
const Dev4HireTalent = lazy(() => import("./pages/dev4hire/Talent"));
const Dev4HireClients = lazy(() => import("./pages/dev4hire/Clients"));
const Dev4HireJoin = lazy(() => import("./pages/dev4hire/Join"));

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={<div className="min-h-screen bg-[#080808]" aria-hidden="true" />}
        >
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dev4hire" element={<Dev4Hire />} />
          <Route path="/dev4hire/opportunities" element={<Dev4HireOpportunities />} />
          <Route path="/dev4hire/how-it-works" element={<Dev4HireHow />} />
          <Route path="/dev4hire/talent" element={<Dev4HireTalent />} />
          <Route path="/dev4hire/clients" element={<Dev4HireClients />} />
          <Route path="/dev4hire/register" element={<Dev4HireJoin />} />
          <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
