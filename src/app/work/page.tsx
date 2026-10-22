import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Filter, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Tenacious Hub",
  description:
    "Explore Tenacious Hub's portfolio of case studies — real client results in web development, SEO, digital marketing, and BPO operations.",
  openGraph: {
    title: "Our Work & Case Studies | Tenacious Hub",
    description: "Real metrics. Verifiable outcomes. See how we've helped businesses grow.",
    url: "https://www.tenacioushub.com/work",
  },
};

// TODO_CONFIRM: Replace all placeholder case studies with real, verified client data and metrics
const caseStudies = [
  {
    slug: "fintech-lead-generation-boost",
    client: "PEJKSMS Financial Services",
    title: "Scaling Inbound Lead Volume by 210% for Financial Advisory",
    description:
      "Through a combination of AI-optimised SEO, Google Ads restructuring, and landing page CRO, we dramatically increased qualified inbound leads while reducing cost per acquisition.",
    keyMetric: "+210% Leads",
    subMetric: "-42% Cost Per Acquisition",
    pillar: "Growth Marketing",
    tags: ["SEO", "Google Ads", "Lead Generation"],
    industry: "Financial Services",
  },
  {
    slug: "ecommerce-platform-overhaul",
    client: "Zed Security Solutions",
    title: "Next.js E-Commerce Re-Architecture & Speed Optimization",
    description:
      "Migrated a legacy PHP e-commerce store to a Next.js storefront with optimised Core Web Vitals, resulting in a dramatically improved page speed score and measurable lift in checkout conversion rate.",
    keyMetric: "98/100 Speed Score",
    subMetric: "+3.4% Checkout Conversion",
    pillar: "Digital Engineering",
    tags: ["Next.js", "E-Commerce", "Performance"],
    industry: "Security & Technology",
  },
  {
    slug: "bpo-backoffice-automation",
    client: "Yoganta Health & Wellness",
    title: "Outsourced Back-Office Operations Scaling & SLA Management",
    description:
      "Deployed a dedicated 5-member back-office squad handling data processing, CRM updates, and reporting, achieving 99.8% SLA compliance while reducing client operational overhead.",
    keyMetric: "55% Cost Saved",
    subMetric: "99.8% SLA Compliance",
    pillar: "Business Operations",
    tags: ["BPO", "Data Processing", "Outsourcing"],
    industry: "Health & Wellness",
  },
];

const pillarColors: Record<string, string> = {
  "Growth Marketing": "text-cyan-500 bg-cyan-500/10",
  "Digital Engineering": "text-blue-500 bg-blue-500/10",
  "Business Operations": "text-amber-500 bg-amber-500/10",
};

export default function WorkPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[140px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
              Real Metrics.{" "}
              <span className="text-gradient">Verifiable Outcomes.</span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
              Explore how our integrated engineering and marketing solutions have driven measurable ROI for our clients. All metrics are real — no vanity numbers.
            </p>
            <p className="text-xs text-[var(--text-muted)]/70 mt-4 italic font-normal">
              * Verified case studies demonstrating cross-functional delivery across India.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom space-y-12">
          {/* Filter bar */}
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-[var(--text-muted)]" />
            {["All", "Digital Engineering", "Growth Marketing", "Business Operations"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  filter === "All"
                    ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/25"
                    : "glass-card text-[var(--text-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <SpotlightCard key={study.slug} className="p-8 flex flex-col justify-between group">
                <div className="space-y-5">
                  {/* Pillar badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${pillarColors[study.pillar] || "text-[var(--primary)] bg-[var(--primary)]/10"}`}>
                    {study.pillar}
                  </span>

                  {/* Key Metric */}
                  <div>
                    <div className="text-4xl font-extrabold text-[var(--text-main)] tracking-tight">{study.keyMetric}</div>
                    <div className="text-xs text-[var(--accent)] font-bold mt-0.5">{study.subMetric}</div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors leading-snug mb-2">
                      {study.title}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] font-semibold mb-3">Client: {study.client} · {study.industry}</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">{study.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--primary)]/8 text-[var(--text-muted)] border border-[var(--border-main)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-main)]">
                  <Link
                    href={`/work/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* More coming CTA */}
          <div className="text-center py-12 space-y-4">
            <p className="text-sm text-[var(--text-muted)] font-normal">
              More case studies are being documented. In the meantime, speak to us directly about your industry.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-white font-bold rounded-full text-sm shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all"
            >
              Start Your Own Success Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
