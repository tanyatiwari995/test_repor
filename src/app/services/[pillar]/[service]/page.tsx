import { notFound } from "next/navigation";
import Link from "next/link";
import { servicePillarsData } from "@/lib/services-data";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Zap,
  PhoneCall,
  Mail,
  Folder,
  Layers,
  ArrowLeft,
  ShieldCheck,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

interface ServiceDetailPageProps {
  params: Promise<{
    pillar: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  const params: { pillar: string; service: string }[] = [];
  Object.values(servicePillarsData).forEach((pillar) => {
    pillar.services.forEach((s) => {
      params.push({
        pillar: pillar.id,
        service: s.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pillar = servicePillarsData[resolvedParams.pillar];
  const service = pillar?.services.find((s) => s.slug === resolvedParams.service);

  if (!service) {
    return {
      title: "Service Not Found | Tenacious Hub",
    };
  }

  return {
    title: `${service.title} | ${pillar.title} Services | Tenacious Hub`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Tenacious Hub`,
      description: service.description,
      url: `https://www.tenacioushub.com/services/${pillar.id}/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const resolvedParams = await params;
  const pillar = servicePillarsData[resolvedParams.pillar];
  if (!pillar) notFound();

  const service = pillar.services.find((s) => s.slug === resolvedParams.service);
  if (!service) notFound();

  const allPillars = Object.values(servicePillarsData);

  // Calculate prev and next services in current pillar or cross-pillar
  const allServicesFlat = allPillars.flatMap((p) =>
    p.services.map((s) => ({ ...s, pillarId: p.id, pillarTitle: p.title }))
  );
  const currentFlatIdx = allServicesFlat.findIndex((s) => s.slug === service.slug);
  const prevService = currentFlatIdx > 0 ? allServicesFlat[currentFlatIdx - 1] : null;
  const nextService =
    currentFlatIdx < allServicesFlat.length - 1 ? allServicesFlat[currentFlatIdx + 1] : null;

  return (
    <div className="min-h-screen">
      {/* 1. Hero Banner with Compact Spacing & Integrated Breadcrumb */}
      <section className="relative pt-32 pb-10 sm:pt-36 sm:pb-12 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500 border-b border-[var(--border-main)]/60">
        <div className="container-custom relative z-10 text-center space-y-4 max-w-4xl mx-auto">
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center flex-wrap justify-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[var(--border-main)] text-xs font-semibold text-[var(--text-muted)] shadow-sm">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <Link href="/services" className="hover:text-[var(--primary)] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <Link href={`/services/${pillar.id}`} className="hover:text-[var(--primary)] transition-colors">
              {pillar.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="text-[var(--primary)] font-bold">{service.title}</span>
          </div>

          <div className="inline-block">
            <span className="text-xs font-bold text-[var(--primary)] tracking-widest uppercase px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
              {pillar.heroBadge}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-normal">
            {service.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/get-a-quote?service=${encodeURIComponent(service.slug)}`}
              className="px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-full shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all flex items-center gap-2 text-xs sm:text-sm"
            >
              <span>Get Started for {service.pricingTeaser.starter}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 glass-surface text-[var(--text-main)] font-bold rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all text-xs sm:text-sm"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+919105267000"
              className="px-5 py-3 glass-surface text-[var(--text-muted)] hover:text-[var(--primary)] font-semibold rounded-full border border-[var(--border-main)] transition-all text-xs sm:text-sm flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>+91 91052 67000</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Body: 2 Columns (Content + Services Sidebar Directory) */}
      <div className="py-10 sm:py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (8 cols): Service Details, Capabilities, Process, FAQs */}
            <div className="lg:col-span-8 space-y-8">
              {/* Overview Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-9 border border-[var(--border-main)] shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-7 rounded-full bg-[var(--primary)]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)]">
                    Service Overview
                  </h2>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base font-normal">
                  {service.longDescription}
                </p>

                {/* Key Features & Capabilities */}
                <div className="pt-4 border-t border-[var(--border-main)]/60">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                    Key Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl glass-surface border border-[var(--border-main)] hover:border-[var(--primary)]/40 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[var(--text-main)] font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Execution Process Section */}
              <div className="glass-card rounded-3xl p-6 sm:p-9 border border-[var(--border-main)] shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-7 rounded-full bg-teal-500" />
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)]">
                      Our Execution Process
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-[var(--text-muted)] hidden sm:block">
                    4-Stage Structured Workflow
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.process.map((p) => (
                    <div
                      key={p.step}
                      className="p-5 rounded-2xl glass-surface border border-[var(--border-main)] space-y-2 relative group hover:border-[var(--primary)]/40 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-[var(--primary)]/40 group-hover:text-[var(--primary)] transition-colors">
                          {p.step}
                        </span>
                        <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                          Phase {p.step}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] font-normal leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Box */}
              <div className="glass-card rounded-3xl p-6 sm:p-9 border border-[var(--border-main)] shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-7 rounded-full bg-amber-500" />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)]">
                    Included Deliverables
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl glass-surface border border-[var(--border-main)] text-xs sm:text-sm text-[var(--text-main)] font-medium"
                    >
                      <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="glass-card rounded-3xl p-6 sm:p-9 border border-[var(--border-main)] shadow-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-7 rounded-full bg-indigo-500" />
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)]">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl glass-surface border border-[var(--border-main)] space-y-2"
                      >
                        <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)] flex items-start gap-2.5">
                          <HelpCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Service Switcher: Prev & Next Services */}
              <div className="pt-4 border-t border-[var(--border-main)]/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevService ? (
                    <Link
                      href={`/services/${prevService.pillarId}/${prevService.slug}`}
                      className="group p-4 rounded-2xl glass-card border border-[var(--border-main)] hover:border-[var(--primary)]/50 transition-all flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:-translate-x-1 transition-transform">
                        <ArrowLeft className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                          Previous Service
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] truncate transition-colors">
                          {prevService.title}
                        </h5>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextService ? (
                    <Link
                      href={`/services/${nextService.pillarId}/${nextService.slug}`}
                      className="group p-4 rounded-2xl glass-card border border-[var(--border-main)] hover:border-[var(--primary)]/50 transition-all flex items-center justify-end text-right gap-3 ml-auto w-full"
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-bold">
                          Next Service
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] truncate transition-colors">
                          {nextService.title}
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Sticky All-Services Directory & Pricing Box */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* 1. All Services & Solutions Navigation Card (Live Site "Categories" Feature) */}
              <div className="glass-card rounded-3xl p-6 border border-[var(--border-main)] shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-[var(--border-main)]/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[var(--primary)]" />
                    <h3 className="font-extrabold text-sm text-[var(--text-main)] uppercase tracking-wider">
                      All Services & Solutions
                    </h3>
                  </div>
                  <Link
                    href="/services"
                    className="text-[11px] font-bold text-[var(--primary)] hover:underline"
                  >
                    View All
                  </Link>
                </div>

                <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
                  {allPillars.map((p) => (
                    <div key={p.id} className="space-y-1.5">
                      <div className="px-2 py-1 text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                        <span>{p.title}</span>
                        <span className="text-[10px] opacity-60">({p.services.length})</span>
                      </div>
                      <ul className="space-y-1">
                        {p.services.map((item) => {
                          const isActive = item.slug === service.slug;
                          return (
                            <li key={item.slug}>
                              <Link
                                href={`/services/${p.id}/${item.slug}`}
                                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-200 ${
                                  isActive
                                    ? "bg-[var(--primary)] text-white font-bold shadow-md shadow-[var(--primary)]/20"
                                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--primary)]/8"
                                }`}
                              >
                                <span className="truncate pr-2">{item.title}</span>
                                {isActive ? (
                                  <Check className="w-3.5 h-3.5 flex-shrink-0 text-white" />
                                ) : (
                                  <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Package Pricing Box */}
              <div className="glass-card rounded-3xl p-6 border border-[var(--border-main)] shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-[var(--text-main)] uppercase tracking-wider">
                    Investment Tiers
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Transparent
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-xl glass-surface border border-[var(--border-main)]">
                    <span className="text-[var(--text-muted)] font-medium">Starter Tier</span>
                    <span className="font-extrabold text-[var(--text-main)]">
                      {service.pricingTeaser.starter}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-xl glass-surface border border-[var(--border-main)]">
                    <span className="text-[var(--text-muted)] font-medium">Pro Package</span>
                    <span className="font-extrabold text-[var(--text-main)]">
                      {service.pricingTeaser.pro}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm p-3 rounded-xl glass-surface border border-[var(--primary)]/30 bg-[var(--primary)]/5">
                    <span className="text-[var(--text-muted)] font-medium">Enterprise Scope</span>
                    <span className="font-extrabold text-[var(--primary)]">
                      {service.pricingTeaser.enterprise}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/get-a-quote?service=${encodeURIComponent(service.slug)}`}
                  className="w-full py-3.5 bg-[var(--primary)] text-white text-center font-bold rounded-full shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all block text-xs sm:text-sm"
                >
                  Request Custom Quote
                </Link>
              </div>

              {/* 3. Direct Consultation Helpline */}
              <div className="rounded-3xl p-6 bg-gradient-to-br from-[var(--primary)]/15 via-cyan-500/10 to-transparent border border-[var(--primary)]/30 text-center space-y-3">
                <h4 className="text-sm font-extrabold text-[var(--text-main)]">
                  Need Immediate Advice?
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Speak directly with a senior solutions architect about your requirements.
                </p>
                <div className="space-y-2 pt-1">
                  <a
                    href="tel:+919105267000"
                    className="w-full py-2.5 px-4 bg-[var(--primary)] text-white text-xs font-bold rounded-full shadow-md hover:bg-[var(--primary-light)] transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call +91 91052 67000</span>
                  </a>
                  <a
                    href="mailto:sales@tenacioushub.com"
                    className="w-full py-2 px-4 glass-surface text-[var(--text-main)] text-xs font-semibold rounded-full border border-[var(--border-main)] hover:bg-[var(--glass-bg-hover)] transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>sales@tenacioushub.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "Organization",
              name: "Tenacious Hub Private Limited",
              url: "https://www.tenacioushub.com",
            },
            areaServed: "Global",
          }),
        }}
      />
    </div>
  );
}
