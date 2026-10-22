import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Pricing & Packages | Tenacious Hub",
  description:
    "Transparent pricing for web development, SEO, digital marketing, and BPO services. Fixed-price milestone packages and flexible monthly retainers.",
  openGraph: {
    title: "Pricing & Packages | Tenacious Hub",
    description: "Explore our transparent service pricing across Digital Engineering, Growth Marketing, and Business Operations.",
    url: "https://www.tenacioushub.com/pricing",
  },
};

// TODO_CONFIRM: All pricing figures below must be confirmed with the company before publishing
const pillars = [
  {
    id: "digital-engineering",
    label: "Digital Engineering",
    plans: [
      {
        name: "Starter Web",
        price: "₹24,999",
        type: "one-time",
        popular: false,
        description: "Perfect for small businesses needing a professional web presence.",
        features: [
          "5-page responsive website",
          "Mobile-first design",
          "Basic SEO setup",
          "Contact form integration",
          "1 month support",
          "Google Analytics setup",
        ],
        cta: "/get-a-quote",
      },
      {
        name: "Business Pro",
        price: "₹59,999",
        type: "one-time",
        popular: true,
        description: "For growing businesses that need a feature-rich custom website.",
        features: [
          "Up to 15 pages",
          "Custom UI/UX design",
          "CMS integration",
          "SEO-optimised structure",
          "Payment gateway (if needed)",
          "3 months support",
          "Speed & Core Web Vitals optimised",
        ],
        cta: "/get-a-quote",
      },
      {
        name: "Enterprise Portal",
        price: "Custom",
        type: "custom",
        popular: false,
        description: "Complex portals, e-commerce, or Android apps built to spec.",
        features: [
          "Unlimited pages / features",
          "Custom architecture & API",
          "E-commerce / payment flows",
          "Android app development",
          "Attendance or Lead software",
          "6+ months support",
          "Dedicated project manager",
        ],
        cta: "/get-a-quote",
      },
    ],
  },
  {
    id: "growth-marketing",
    label: "Growth Marketing",
    plans: [
      {
        name: "SEO Starter",
        price: "₹12,999",
        type: "monthly",
        popular: false,
        description: "Foundation SEO for businesses new to organic search.",
        features: [
          "10 target keywords",
          "On-page optimisation",
          "Technical SEO audit",
          "Monthly report",
          "Google Search Console setup",
        ],
        cta: "/get-a-quote",
      },
      {
        name: "Growth Retainer",
        price: "₹29,999",
        type: "monthly",
        popular: true,
        description: "Full-funnel growth: SEO + social media + content + reporting.",
        features: [
          "30 keywords (SEO + GEO)",
          "Social media management (3 platforms)",
          "8 content pieces / month",
          "Google & Meta ads management",
          "Lead generation campaigns",
          "Bi-weekly strategy call",
          "ROI dashboard",
        ],
        cta: "/get-a-quote",
      },
      {
        name: "Performance Pro",
        price: "Custom",
        type: "custom",
        popular: false,
        description: "Enterprise-grade paid media and content marketing at scale.",
        features: [
          "Unlimited keywords",
          "Full social media management",
          "Bulk SMS / Voice campaigns",
          "App Store Optimization",
          "Custom content strategy",
          "Dedicated account manager",
          "Real-time analytics dashboard",
        ],
        cta: "/get-a-quote",
      },
    ],
  },
  {
    id: "business-operations",
    label: "Business Operations",
    plans: [
      {
        name: "VA Starter",
        price: "₹18,999",
        type: "monthly",
        popular: false,
        description: "A dedicated virtual assistant for admin and operations tasks.",
        features: [
          "1 dedicated VA (40 hrs/month)",
          "Email & calendar management",
          "Data entry & CRM updates",
          "NDA & secure workstation",
          "Monthly reporting",
        ],
        cta: "/get-a-quote",
      },
      {
        name: "BPO Operations",
        price: "₹44,999",
        type: "monthly",
        popular: true,
        description: "A full back-office squad with guaranteed SLA accuracy.",
        features: [
          "Dedicated team (3 specialists)",
          "99.5%+ data accuracy SLA",
          "Back-office processing",
          "Finance & accounting support",
          "IT helpdesk (< 15 min response)",
          "Dual QA audits",
          "Dedicated supervisor",
        ],
        cta: "/get-a-quote",
      },
      {
        name: "Enterprise BPO",
        price: "Custom",
        type: "custom",
        popular: false,
        description: "Large-scale outsourcing with flexible team sizing and multi-shift coverage.",
        features: [
          "10+ specialists team",
          "US/UK/India timezone coverage",
          "Finance & investment advisory",
          "Startup advisory & mentoring",
          "Rural development programmes",
          "Custom SLA agreements",
          "Monthly executive review",
        ],
        cta: "/get-a-quote",
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
            Transparent{" "}
            <span className="text-gradient">Pricing</span>,<br />No Surprises
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Fixed-price milestone packages for engineering projects. Flexible monthly retainers for ongoing growth and operations. Custom proposals for enterprise needs.
          </p>
          <p className="text-xs text-[var(--text-muted)]/70 mt-4 italic font-normal">
            * Transparent, competitive milestone pricing designed for growing businesses.
          </p>
        </div>
      </section>

      {/* Pricing Pillars */}
      {pillars.map((pillar, pillarIdx) => (
        <SectionWrapper
          key={pillar.id}
          id={pillar.id}
          className="py-24 transition-colors"
        >
          <div className="container-custom space-y-12">
            <SectionHeader
              badge={`Pillar ${pillarIdx + 1}`}
              title={pillar.label}
              highlightedText="Plans"
              description="Choose the plan that fits your current stage. Upgrade anytime."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {pillar.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? "glass-card border-2 border-[var(--primary)] shadow-2xl shadow-[var(--primary)]/20 scale-[1.02]"
                      : "glass-card border border-[var(--glass-border)] shadow-sm hover:shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-bold shadow-lg shadow-[var(--primary)]/30">
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-extrabold text-[var(--text-main)] mb-1">{plan.name}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed font-normal">{plan.description}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-extrabold text-[var(--text-main)] tracking-tight">{plan.price}</span>
                      {plan.type !== "custom" && (
                        <span className="text-sm text-[var(--text-muted)] pb-1 font-medium">
                          /{plan.type === "monthly" ? "month" : "project"}
                        </span>
                      )}
                    </div>
                    {plan.type === "custom" && (
                      <span className="text-xs text-[var(--primary)] font-bold">Request a custom proposal →</span>
                    )}
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)] font-medium">
                        <Check className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.cta}
                    id={`pricing-${pillar.id}-${plan.name.toLowerCase().replace(/\s+/g, "-")}-btn`}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-[var(--primary)] text-white shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02]"
                        : "glass-surface text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)]"
                    }`}
                  >
                    {plan.type === "custom" ? "Get a Custom Quote" : "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* Enterprise CTA */}
      <SectionWrapper className="py-20 sm:py-24 transition-colors">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1d1d1f] via-[#0b0c10] to-[#181920] border border-black/10 dark:border-white/15 shadow-2xl p-10 sm:p-16 text-center space-y-6 max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/15">
                <Zap className="w-4 h-4 text-amber-300" />
                Need something bespoke?
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Let&apos;s Build a Custom Proposal
              </h2>
              <p className="text-zinc-200 max-w-xl mx-auto text-base leading-relaxed font-normal">
                Most of our best client relationships started with a 15-minute discovery call. Tell us about your business goals and we&apos;ll tailor a solution that fits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/get-a-quote"
                  id="pricing-custom-quote-btn"
                  className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all inline-flex items-center justify-center gap-2"
                >
                  Start Free Quote Wizard
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919105267000"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full hover:scale-[1.02] transition-all border border-white/25 backdrop-blur-md inline-flex items-center justify-center shadow-sm"
                >
                  Call +91 91052 67000
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
