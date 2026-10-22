import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight, ChevronRight, CheckCircle2, Trophy, BarChart3, Clock, Zap } from "lucide-react";

const caseStudiesMap: Record<string, any> = {
  "fintech-lead-generation-boost": {
    slug: "fintech-lead-generation-boost",
    title: "Scaling Lead Generation by 210% for Regional Financial Services",
    client: "PEJKSMS Financial Advisory",
    industry: "Financial Services",
    pillar: "Growth Marketing",
    metrics: [
      { label: "Lead Growth", value: "+210%" },
      { label: "Cost Per Acquisition", value: "-42%" },
      { label: "Keyword Rankings", value: "#1 Top 3" },
    ],
    challenge: "PEJKSMS suffered from erratic lead volumes and high reliance on expensive third-party lead aggregators. Their website lacked search visibility for regional keywords.",
    approach: "We audited their web assets, rebuilt their conversion landing pages with schema markup, launched targeted Google Search ad campaigns, and deployed an automated WhatsApp lead capture funnel.",
    results: [
      "210% surge in verified inbound qualified inquiries within 90 days.",
      "42% decrease in cost-per-lead (CPA) compared to previous channels.",
      "Achieved Page 1 rankings for 18 primary high-intent financial keywords."
    ],
    tech: ["Next.js", "Google Search Ads", "Meta Lead Ads", "WhatsApp Business API", "PostgreSQL"],
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  "ecommerce-platform-overhaul": {
    slug: "ecommerce-platform-overhaul",
    title: "Re-engineering E-Commerce Infrastructure for High Volume Sales",
    client: "Zed Security Solutions",
    industry: "Security Technology",
    pillar: "Digital Engineering",
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Conversion Growth", value: "+3.4%" },
      { label: "Checkout Dropoff", value: "-35%" },
    ],
    challenge: "Legacy PHP site suffered slow page speeds on mobile, frequent payment gateway timeouts, and poor product catalog management.",
    approach: "Rebuilt storefront on Next.js App Router, optimized images with WebP/AVIF formats, integrated multi-payment gateways (Razorpay & Cashfree), and constructed custom admin inventory controls.",
    results: [
      "Sub-1.2s page load speed across all product detail pages.",
      "3.4% increase in cart-to-purchase checkout conversion.",
      "Zero downtime during peak festive promotional sales."
    ],
    tech: ["Next.js", "TailwindCSS", "Razorpay", "PostgreSQL", "Prisma"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  "bpo-backoffice-automation": {
    slug: "bpo-backoffice-automation",
    title: "Outsourced Back-Office Operations Scaling & SLA Optimization",
    client: "Yoganta Health & Wellness",
    industry: "Healthcare & Wellness",
    pillar: "Business Operations",
    metrics: [
      { label: "Cost Reduction", value: "55%" },
      { label: "SLA Compliance", value: "99.8%" },
      { label: "Turnaround Time", value: "< 4 Hours" },
    ],
    challenge: "Internal team was overwhelmed by data entry backlog, customer verification delays, and high operational overhead costs.",
    approach: "Delivered a dedicated outsourced back-office squad with dual-layer QA verification and automated work logging systems.",
    results: [
      "55% reduction in total operational backend cost.",
      "Achieved 99.8% SLA accuracy on over 50,000 processed documents.",
      "Customer verification cycle reduced from 24 hours to under 4 hours."
    ],
    tech: ["Attendance Management System", "Virtual Assistant Desk", "Helpdesk SLA Monitoring"],
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
};

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesMap).map((slug) => ({ slug }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyProps) {
  const resolvedParams = await params;
  const study = caseStudiesMap[resolvedParams.slug];

  if (!study) notFound();

  return (
    <div className="pt-24 pb-16 min-h-screen text-[var(--text-main)]">
      {/* Breadcrumb */}
      <div className="glass-surface border-b border-[var(--border-main)] py-4">
        <div className="container-custom flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <Link href="/work" className="hover:text-[var(--primary)] transition-colors">
            Case Studies
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{study.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-16 hero-gradient border-b border-[var(--border-main)] transition-colors">
        <div className="container-custom max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-xs font-bold text-[var(--primary)]">
            {study.pillar} Case Study
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
            {study.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)] border-y border-[var(--border-main)] py-4 font-medium">
            <div>Client: <strong className="text-[var(--text-main)] font-bold">{study.client}</strong></div>
            <div>Industry: <strong className="text-[var(--text-main)] font-bold">{study.industry}</strong></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {study.metrics.map((m: any, idx: number) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center border border-[var(--border-main)] shadow-sm">
                <div className="text-3xl font-extrabold text-[var(--primary)] mb-1">{m.value}</div>
                <div className="text-xs text-[var(--text-muted)] font-semibold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper className="py-20 bg-[var(--bg-card)]/40 border-b border-[var(--border-main)]">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center text-sm font-bold border border-rose-500/20">1</span>
              The Challenge
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed text-lg font-normal">
              {study.challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm font-bold border border-[var(--primary)]/20">2</span>
              Our Strategic Approach
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed text-lg font-normal">
              {study.approach}
            </p>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold border border-emerald-500/20">3</span>
              Key Business Results
            </h2>
            <div className="space-y-3">
              {study.results.map((res: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-4 glass-card border border-[var(--border-main)] rounded-2xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-main)] font-medium">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-6 border-t border-[var(--border-main)] space-y-3">
            <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Technologies & Stack Used</h3>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t: string) => (
                <span key={t} className="px-3.5 py-1.5 glass-card border border-[var(--border-main)] rounded-xl text-xs font-semibold text-[var(--text-main)] shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#1d1d1f] via-[#0b0c10] to-[#181920] border border-black/10 dark:border-white/15 p-10 md:p-14 text-center space-y-6 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight relative z-10">
            Ready to achieve similar metrics for your company?
          </h2>
          <p className="text-white/75 max-w-lg mx-auto text-base relative z-10">
            Book a complimentary strategy call with our digital engineering and growth teams today.
          </p>
          <div className="pt-2 relative z-10">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-100 hover:scale-[1.03] transition-all shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
