import { useSEO } from "../hooks/useSEO";
import { useState } from "react";
import { Link } from "react-router-dom";
import INDUSTRIES from "../data/industries";
import FAQ from "../components/FAQ";
import { PRICING_FAQS } from "../data/content";

const NEXT_STEPS = [
  { step: "01", title: "We review your brief", desc: "Within 24 hours you get a personal reply — not an autoresponder." },
  { step: "02", title: "Free discovery call", desc: "A 30-minute call to understand your goals, market, and constraints." },
  { step: "03", title: "Scoped proposal", desc: "A clear, fixed-price proposal with timeline and milestones in 2–3 days." },
];

const INDUSTRY_OPTIONS = Array.from(new Set(INDUSTRIES.map((i) => i.name)));

type FormData = {
  name: string;
  email: string;
  phone: string;
  industry: string;
  budget: string;
  message: string;
};

const BUDGET_OPTIONS = [
  "Under $1,500",
  "$1,500 – $3,500",
  "$3,500 – $7,500",
  "$7,500+",
  "Not sure yet",
];

const FORM_ENDPOINT = "https://formsubmit.co/ajax/5428e0cf9a61b9e7c1bf1cd93b3ce266";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  useSEO(
    "Contact — Start Your Website Project",
    "Tell us about your project and get a reply within 24 hours. Free 30-minute discovery call, fixed-price proposal, no obligation. Working worldwide.",
    "/contact"
  );
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", industry: "", budget: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🧡 New Project Brief — ${form.name} (${form.industry || "General"})`,
          _template: "table",
          _captcha: "false",
          "Full Name": form.name,
          Email: form.email,
          Phone: form.phone || "—",
          Industry: form.industry,
          "Budget Range": form.budget || "Not specified",
          "Project Details": form.message,
          "Submitted From": "ayocreativedesigns.com/contact",
          "Submitted At": new Date().toLocaleString("en-GB", { timeZone: "UTC" }) + " UTC",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", industry: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-5 h-px bg-[#ff6b35]" />
              Get In Touch
            </p>
            <h2 className="font-display font-black leading-[1.02] mb-8" style={{ fontSize: "clamp(32px, 6vw, 52px)" }}>
              Let's build something
              <br />
              <span className="text-[#ff6b35] text-glow-orange">that converts.</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="font-display text-lg font-bold mb-1">Email</div>
                  <a href="mailto:ayocoding12@gmail.com" className="text-[#888880] text-sm hover:text-[#ff6b35] transition-colors">ayocoding12@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="font-display text-lg font-bold mb-1">Response Time</div>
                  <div className="text-[#888880] text-sm">Within 24 hours</div>
                  <div className="text-[#888880] text-xs mt-1">Scoping call scheduled within 48h</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#ff6b35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#ff6b35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="font-display text-lg font-bold mb-1">Location</div>
                  <div className="text-[#888880] text-sm">Lagos, Nigeria</div>
                  <div className="text-[#888880] text-xs mt-1">Serving clients globally across 40+ countries</div>
                </div>
              </div>
            </div>

            {/* Industries we serve */}
            <div className="mt-8 sm:mt-12 p-5 sm:p-6 bg-[#111] border border-white/5 rounded-lg">
              <h3 className="font-display text-sm font-bold mb-4 text-[#f0ebe0]">Industries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.slice(0, 6).map((i) => (
                  <span key={i.id} className="text-[10px] px-2.5 py-1.5 bg-white/5 text-[#888880] rounded-lg hover:bg-[#ff6b35]/10 hover:text-[#ff6b35] transition-colors">
                    {i.name}
                  </span>
                ))}
                <span className="text-[10px] px-2.5 py-1.5 bg-[#ff6b35]/10 text-[#ff6b35] rounded-lg">+ more</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-[#111] border border-white/5 p-6 sm:p-8 md:p-10 rounded-lg">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6 orange-glow">
                    <svg className="w-8 h-8 text-[#080808]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="font-display text-2xl font-black text-[#f0ebe0] mb-2">Message sent.</div>
                  <p className="text-[#888880] text-sm mb-6">
                    Your brief landed in our inbox — expect a personal reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="border border-white/20 text-[#f0ebe0] text-sm font-medium px-6 py-3 rounded-lg hover:border-white/40 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs text-[#888880] uppercase tracking-wider">Full Name *</label>
                      <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full bg-[#0d0d0d] border border-white/10 text-[#f0ebe0] placeholder-[#555] text-base sm:text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors duration-200 min-h-[52px] sm:min-h-[48px]" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs text-[#888880] uppercase tracking-wider">Email *</label>
                      <input id="email" name="email" type="email" autoComplete="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full bg-[#0d0d0d] border border-white/10 text-[#f0ebe0] placeholder-[#555] text-base sm:text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors duration-200 min-h-[52px] sm:min-h-[48px]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs text-[#888880] uppercase tracking-wider">Phone / WhatsApp <span className="normal-case text-[#555]">(optional)</span></label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-[#0d0d0d] border border-white/10 text-[#f0ebe0] placeholder-[#555] text-base sm:text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors duration-200 min-h-[52px] sm:min-h-[48px]" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budget" className="text-xs text-[#888880] uppercase tracking-wider">Budget Range</label>
                      <select id="budget" name="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full bg-[#0d0d0d] border border-white/10 text-[#f0ebe0] text-base sm:text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors duration-200 min-h-[52px] sm:min-h-[48px]">
                        <option value="">Select…</option>
                        {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="industry" className="text-xs text-[#888880] uppercase tracking-wider">Industry *</label>
                    <select id="industry" name="industry" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} required className="w-full bg-[#0d0d0d] border border-white/10 text-[#f0ebe0] text-base sm:text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors duration-200 min-h-[52px] sm:min-h-[48px]">
                      <option value="">Select…</option>
                      {INDUSTRY_OPTIONS.map((name) => <option key={name} value={name}>{name}</option>)}
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-[#888880] uppercase tracking-wider">Project Details *</label>
                    <textarea id="message" name="message" placeholder="Goals, timeline, must-haves…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="w-full bg-[#0d0d0d] border border-white/10 text-[#f0ebe0] placeholder-[#555] text-base sm:text-sm px-4 py-3.5 rounded-lg focus:outline-none focus:border-[#ff6b35] transition-colors duration-200 resize-y min-h-[140px]" />
                  </div>
                  {status === "error" && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-lg">
                      Something went wrong sending your message. Please try again, or email us directly at{" "}
                      <a href="mailto:ayocoding12@gmail.com" className="underline underline-offset-2">ayocoding12@gmail.com</a>.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-orange text-white text-sm sm:text-base font-bold py-4 px-6 rounded-lg min-h-[56px] w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Sending Your Brief…
                      </span>
                    ) : (
                      "Send My Project Brief →"
                    )}
                  </button>
                  <p className="text-[#888880] text-xs text-center">No spam. Just a real conversation.</p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-16 sm:mt-20">
          <p className="text-[#ff6b35] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-5 h-px bg-[#ff6b35]" />
            After You Hit Send
          </p>
          <h2
            className="font-display font-black leading-[1.02] mb-10"
            style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
          >
            What happens next.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {NEXT_STEPS.map((n) => (
              <div key={n.step} className="bg-[#111] border border-white/5 p-6 rounded-lg">
                <div className="text-[#ff6b35] font-display font-black text-3xl mb-3">{n.step}</div>
                <h3 className="font-display text-base font-bold mb-2">{n.title}</h3>
                <p className="text-[#888880] text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prefer other channels */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#0d0d0d] border border-white/5 rounded-lg p-6 sm:p-8">
          <p className="text-[#888880] text-sm">
            Prefer a different channel? Reach us directly at{" "}
            <a href="mailto:ayocoding12@gmail.com" className="text-[#ff6b35] hover:underline">ayocoding12@gmail.com</a>
          </p>
          <div className="flex gap-4 flex-shrink-0">
            <a href="https://instagram.com/ayo.creative.designs" target="_blank" rel="noopener noreferrer" className="text-[#f0ebe0]/70 text-sm hover:text-[#ff6b35] transition-colors">Instagram</a>
            <a href="https://linkedin.com/in/ayomidequdus" target="_blank" rel="noopener noreferrer" className="text-[#f0ebe0]/70 text-sm hover:text-[#ff6b35] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      <FAQ items={PRICING_FAQS.slice(0, 4)} title="Before you write to us." />
    </section>
  );
}
