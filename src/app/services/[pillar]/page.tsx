import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { servicePillarsData } from "@/lib/services-data";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, HelpCircle } from "lucide-react";

interface PillarPageProps {
  params: Promise<{
    pillar: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicePillarsData).map((pillar) => ({
    pillar,
  }));
}

export default async function PillarPage({ params }: PillarPageProps) {
  const resolvedParams = await params;
  const pillar = servicePillarsData[resolvedParams.pillar];

  if (!pillar) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section — Immediate visibility */}
      <section className="relative hero-gradient text-[var(--text-main)] pt-32 pb-14 sm:pt-36 sm:pb-16 overflow-hidden transition-colors duration-500 border-b border-[var(--border-main)]/60">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-5 relative z-10">
          {/* Integrated Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[var(--border-main)] text-xs font-semibold text-[var(--text-muted)] shadow-sm">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <Link href="/services" className="hover:text-[var(--primary)] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="text-[var(--text-main)] font-bold">{pillar.title}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
            {pillar.title} <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-normal">
            {pillar.tagline} {pillar.description}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/get-a-quote"
              className="px-8 py-3.5 bg-[var(--primary)] text-white font-bold rounded-full shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 glass-surface text-[var(--text-main)] font-bold rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all text-sm"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-20 transition-colors">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-[var(--text-main)]">Services under {pillar.title}</h2>
            <p className="text-[var(--text-muted)] font-normal">
              Explore specialized offerings tailored to accelerate your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillar.services.map((service) => (
              <div
                key={service.slug}
                className="group relative glass-card border border-[var(--glass-border)] rounded-3xl p-8 hover:border-[var(--primary)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-main)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">Starting at <strong className="text-[var(--text-main)] font-bold">{service.pricingTeaser.starter}</strong></span>
                  <Link
                    href={`/services/${pillar.id}/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary)] group-hover:translate-x-1 transition-transform"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 transition-colors">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1d1d1f] via-[#0b0c10] to-[#181920] border border-black/10 dark:border-white/15 shadow-2xl p-10 md:p-16 text-center space-y-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Need a custom solution for your enterprise?
              </h2>
              <p className="text-zinc-200 text-base max-w-xl mx-auto font-normal">
                Our engineers and consultants work with brands to deliver custom architecture and dedicated managed operations.
              </p>
              <div className="pt-2">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all text-sm"
                >
                  Request Custom Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
