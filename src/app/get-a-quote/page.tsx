import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft, ArrowRight as ArrowR } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Get a Free Quote | Tenacious Hub",
  description:
    "Tell us about your project and receive a custom proposal. Web development, SEO, digital marketing, and BPO outsourcing quotes — no obligation.",
  openGraph: {
    title: "Get a Free Quote | Tenacious Hub",
    description: "Start your free project proposal with Tenacious Hub.",
    url: "https://www.tenacioushub.com/get-a-quote",
  },
};

const services = [
  { id: "website-design", label: "Website Design & Development", pillar: "Digital Engineering" },
  { id: "ecommerce", label: "E-Commerce / Portal Design", pillar: "Digital Engineering" },
  { id: "android-app", label: "Android App Development", pillar: "Digital Engineering" },
  { id: "logo-branding", label: "Logo & Brand Identity", pillar: "Digital Engineering" },
  { id: "seo", label: "Search Engine Optimization (SEO/GEO)", pillar: "Growth Marketing" },
  { id: "social-media", label: "Social Media Management", pillar: "Growth Marketing" },
  { id: "google-meta-ads", label: "Google & Meta Ads", pillar: "Growth Marketing" },
  { id: "content-writing", label: "Content Writing", pillar: "Growth Marketing" },
  { id: "lead-generation", label: "Lead Generation", pillar: "Growth Marketing" },
  { id: "bpo-back-office", label: "BPO / Back Office Operations", pillar: "Business Operations" },
  { id: "virtual-assistant", label: "Virtual Assistant", pillar: "Business Operations" },
  { id: "finance-advisory", label: "Finance & Accounting Advisory", pillar: "Business Operations" },
  { id: "it-helpdesk", label: "IT Managed Helpdesk", pillar: "Business Operations" },
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP (within 2 weeks)",
  "1 month",
  "2–3 months",
  "3–6 months",
  "Flexible / Not sure",
];

export default function GetAQuotePage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--primary)]/10 rounded-full blur-[160px]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
            Free Quote
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[var(--text-main)]">
            Tell Us About Your{" "}
            <span className="text-gradient">Project</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg font-normal">
            Takes 3 minutes. No obligation. We&apos;ll respond within 2 business hours.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom max-w-3xl">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-10">
            {["Services", "Project Details", "Contact"].map((step, idx) => (
              <div key={step} className="flex items-center gap-2 flex-1">
                <div className={`flex items-center gap-2 ${idx === 0 ? "" : "text-[var(--text-muted)]"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${idx === 0 ? "bg-[var(--primary)] text-white shadow-sm" : "glass-card text-[var(--text-muted)]"}`}>
                    {idx + 1}
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${idx === 0 ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"}`}>{step}</span>
                </div>
                {idx < 2 && <div className="flex-1 h-px bg-[var(--border-main)] ml-2" />}
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            id="quote-wizard-form"
            action="/api/leads"
            method="POST"
            className="space-y-8"
          >
            {/* Step 1: Services */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-[var(--text-main)] mb-1">What can we help you with?</h2>
                <p className="text-sm text-[var(--text-muted)] font-normal">Select all that apply</p>
              </div>

              <div className="space-y-4">
                {(["Digital Engineering", "Growth Marketing", "Business Operations"] as const).map((pillar) => (
                  <div key={pillar}>
                    <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-2">{pillar}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {services.filter((s) => s.pillar === pillar).map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--border-main)] bg-[var(--bg-main)] cursor-pointer hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 transition-all"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service.id}
                            className="w-4 h-4 accent-[var(--primary)] rounded"
                          />
                          <span className="text-sm text-[var(--text-main)] font-semibold">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Project Details */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl space-y-6">
              <h2 className="text-xl font-extrabold text-[var(--text-main)]">Project details</h2>

              <div>
                <label htmlFor="quote-message" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                  Tell us about your project <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your goals, current situation, and what success looks like for you…"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-budget" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Budget Range
                  </label>
                  <select
                    id="quote-budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm cursor-pointer dark:bg-[#12131a] dark:text-white"
                  >
                    <option value="" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">Select budget…</option>
                    {budgets.map((b) => <option key={b} value={b} className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">{b}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-timeline" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Preferred Timeline
                  </label>
                  <select
                    id="quote-timeline"
                    name="timeline"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm cursor-pointer dark:bg-[#12131a] dark:text-white"
                  >
                    <option value="" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">Select timeline…</option>
                    {timelines.map((t) => <option key={t} value={t} className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quote-website" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                  Your current website (if any)
                </label>
                <input
                  id="quote-website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Step 3: Contact */}
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl space-y-6">
              <h2 className="text-xl font-extrabold text-[var(--text-main)]">Your contact details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="quote-company" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Company / Organisation
                  </label>
                  <input
                    id="quote-company"
                    name="company"
                    type="text"
                    placeholder="Acme Pvt. Ltd."
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Honeypot */}
              <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="flex items-start gap-3">
                <input
                  id="quote-consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 w-4 h-4 accent-[var(--primary)] rounded"
                />
                <label htmlFor="quote-consent" className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                  I consent to Tenacious Hub contacting me about my project enquiry and storing my details per the{" "}
                  <Link href="/legal/privacy" className="text-[var(--primary)] underline hover:text-[var(--primary-light)] transition-colors">
                    Privacy Policy
                  </Link>.
                </label>
              </div>

              <button
                id="quote-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all text-sm"
              >
                Submit Free Quote Request
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-[var(--text-muted)] font-normal">
                We respond within 2 business hours. No spam, ever.
              </p>
            </div>
          </form>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)] font-bold">
            {["No obligation", "2-hour response", "Custom proposal", "NDA available"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
