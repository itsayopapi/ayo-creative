import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import PricingPage from "./pages/Pricing";
import About from "./pages/About";
import Process from "./pages/Process";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import Dev4Hire from "./pages/dev4hire/Overview";
import Dev4HireOpportunities from "./pages/dev4hire/Opportunities";
import Dev4HireHow from "./pages/dev4hire/HowItWorks";
import Dev4HireTalent from "./pages/dev4hire/Talent";
import Dev4HireClients from "./pages/dev4hire/Clients";
import Dev4HireJoin from "./pages/dev4hire/Join";

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
}
