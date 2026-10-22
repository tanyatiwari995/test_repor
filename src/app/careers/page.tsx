import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "Careers | Join Tenacious Hub",
  description:
    "Join the Tenacious Hub team. We're looking for talented web developers, SEO specialists, digital marketers, and BPO operations professionals.",
  openGraph: {
    title: "Careers | Join Tenacious Hub",
    description: "Build your career at Tenacious Hub. Open roles in engineering, marketing, and operations.",
    url: "https://www.tenacioushub.com/careers",
  },
};

// TODO: These will be loaded from the CMS (JobPost model in database)
const openRoles = [
  {
    slug: "senior-nextjs-developer",
    title: "Senior Next.js Developer",
    department: "Digital Engineering",
    location: "Noida / Remote",
    type: "Full-time",
    description: "Lead development of client web applications using Next.js, TypeScript, and modern full-stack tools.",
  },
  {
    slug: "seo-specialist-geo",
    title: "SEO Specialist (AI/GEO Focus)",
    department: "Growth Marketing",
    location: "Noida / Remote",
    type: "Full-time",
    description: "Drive organic growth for multiple clients with a focus on technical SEO and Generative Engine Optimization (GEO).",
  },
  {
    slug: "bpo-operations-executive",
    title: "BPO Operations Executive",
    department: "Business Operations",
    location: "Rudrapur, Uttarakhand",
    type: "Full-time",
    description: "Process client data and back-office tasks with high accuracy in a structured operations team.",
  },
  {
    slug: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Growth Marketing",
    location: "Noida",
    type: "Full-time",
    description: "Manage Google Ads, Meta Ads, and social media campaigns for a portfolio of B2B and B2C clients.",
  },
];

const perks = [
  { title: "Remote-Friendly", desc: "Engineering and marketing roles are hybrid or fully remote." },
  { title: "Learning Budget", desc: "Annual budget for courses, certifications, and conferences." },
  { title: "Performance Bonus", desc: "Quarterly bonuses tied to client outcomes, not just activity." },
  { title: "Great Culture", desc: "A collaborative team that ships quality work and celebrates wins." },
];

export default function CareersPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[140px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-[var(--accent)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 shadow-sm">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
              Come Build{" "}
              <span className="text-gradient">Something Great</span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
              We&apos;re a growing team of engineers, marketers, and operations specialists. If you care about quality and impact, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="text-center p-6 glass-card border border-[var(--glass-border)] shadow-sm">
                <h3 className="font-extrabold text-[var(--text-main)] mb-2">{perk.title}</h3>
                <p className="text-sm text-[var(--text-muted)] font-normal">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Open Roles */}
      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom space-y-12">
          <SectionHeader
            badge="Open Positions"
            title="Current"
            highlightedText="Open Roles"
            description="All roles are reviewed on a rolling basis. We respond to every application."
          />

          <div className="space-y-4">
            {openRoles.map((role) => (
              <SpotlightCard key={role.slug} className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-bold text-[var(--primary)] px-3 py-1 rounded-full bg-[var(--primary)]/10">
                        {role.department}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {role.type}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-[var(--text-main)]">{role.title}</h2>
                    <p className="text-sm text-[var(--text-muted)] max-w-xl font-normal leading-relaxed">{role.description}</p>
                  </div>
                  <Link
                    href={`/careers/${role.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-full text-sm shadow-lg shadow-[var(--primary)]/20 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all flex-shrink-0"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* No role found CTA */}
          <div className="text-center py-12 space-y-4 border-t border-[var(--border-main)]">
            <Briefcase className="w-10 h-10 text-[var(--text-muted)]/40 mx-auto" />
            <h3 className="font-extrabold text-[var(--text-main)]">Don&apos;t see the right fit?</h3>
            <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto font-normal">
              Send us your CV and a brief note about how you&apos;d like to contribute. We review all open applications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 glass-surface text-[var(--text-main)] font-bold rounded-full text-sm border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all"
            >
              Send Open Application
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
