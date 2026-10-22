import type { Metadata } from "next";
import Link from "next/link";
import { Search, Zap, ArrowRight, CheckCircle2, Shield, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Free SEO Audit Tool | Get Your Instant Website Score | Tenacious Hub",
  description:
    "Run a free SEO audit on your website. Get an instant score covering Core Web Vitals, meta tags, HTTPS, mobile readiness, schema markup, and AI/GEO search visibility.",
  openGraph: {
    title: "Free SEO Audit Tool | Tenacious Hub",
    description: "Instant SEO & AI search visibility score for your website — completely free.",
    url: "https://www.tenacioushub.com/free-seo-audit",
  },
};

const auditChecks = [
  "Page title & meta description quality",
  "H1 heading structure",
  "Image alt text coverage",
  "HTTPS & SSL certificate",
  "Mobile viewport tag",
  "Core Web Vitals (LCP, CLS hints)",
  "Schema markup presence",
  "AI/GEO search readiness signals",
];

export default function FreeSeoAuditPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--primary)]/10 rounded-full blur-[160px]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold mb-6 shadow-sm">
            <Zap className="w-4 h-4" />
            Instant Result in Under 60 Seconds
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
            Free{" "}
            <span className="text-gradient">SEO Audit</span>
            <br />
            for Your Website
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Get an instant score covering Core Web Vitals, meta tags, HTTPS, mobile readiness, structured data, and AI search engine (GEO) visibility — completely free.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Audit Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[var(--text-main)]">Run Your Free Audit</h2>
                    <p className="text-sm text-[var(--text-muted)] font-normal">We&apos;ll email your full report instantly</p>
                  </div>
                </div>

                <form
                  id="seo-audit-form"
                  action="/api/seo-audit"
                  method="POST"
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="audit-url" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                      Your Website URL <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm font-semibold">https://</span>
                      <input
                        id="audit-url"
                        name="url"
                        type="text"
                        required
                        placeholder="yourwebsite.com"
                        className="w-full pl-20 pr-4 py-3.5 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="audit-name" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="audit-name"
                        name="name"
                        type="text"
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3.5 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="audit-email" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="audit-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Honeypot */}
                  <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div className="flex items-start gap-3">
                    <input
                      id="audit-consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-0.5 w-4 h-4 accent-[var(--primary)] rounded"
                    />
                    <label htmlFor="audit-consent" className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                      I consent to receiving my SEO audit report by email and to Tenacious Hub storing my contact details, per the{" "}
                      <Link href="/legal/privacy" className="text-[var(--primary)] underline hover:text-[var(--primary-light)] transition-colors">
                        Privacy Policy
                      </Link>.
                    </label>
                  </div>

                  <button
                    id="seo-audit-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all text-sm"
                  >
                    <Search className="w-4 h-4" />
                    Run Free SEO Audit Now
                  </button>

                  <p className="text-center text-xs text-[var(--text-muted)] font-normal">
                    Results delivered in under 60 seconds. We never spam.
                  </p>
                </form>
              </div>
            </div>

            {/* What we check + trust signals */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-lg font-extrabold text-[var(--text-main)] mb-4">
                  What We Audit
                </h3>
                <ul className="space-y-3">
                  {auditChecks.map((check) => (
                    <li key={check} className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-2xl glass-card border border-[var(--glass-border)] shadow-sm">
                  <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-[var(--text-main)]">SSRF & Privacy Protected</p>
                    <p className="text-xs text-[var(--text-muted)] font-normal">We only audit publicly accessible URLs. Private IPs are blocked.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl glass-card border border-[var(--glass-border)] shadow-sm">
                  <Clock className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-[var(--text-main)]">Instant Report by Email</p>
                    <p className="text-xs text-[var(--text-muted)] font-normal">Your full report is emailed within 60 seconds with actionable recommendations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-main)]">
                <p className="text-sm text-[var(--text-muted)] font-normal mb-3">
                  Want a deeper technical audit with a real SEO strategist?
                </p>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
                >
                  Book a Manual SEO Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
