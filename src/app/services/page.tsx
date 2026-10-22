"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Briefcase,
  Code,
  ShoppingCart,
  Smartphone,
  Palette,
  Cpu,
  Users,
  Search,
  Megaphone,
  Share2,
  FileText,
  Target,
  MessageSquare,
  BarChart3,
  Headphones,
  Calculator,
  Lightbulb,
  Shield,
  TreePine,
} from "lucide-react";

const pillars = [
  {
    id: "digital-engineering",
    icon: Globe,
    title: "Digital Engineering",
    description:
      "We design, build, and scale digital products that power your business. From stunning websites to complex platforms.",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    services: [
      {
        icon: Code,
        title: "Website Design & Development",
        description: "Custom, responsive websites built with modern tech that convert visitors into customers.",
        href: "/services/digital-engineering/website-design",
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce & Portal Design",
        description: "Powerful online stores with seamless checkout, inventory management, and analytics.",
        href: "/services/digital-engineering/ecommerce-portal",
      },
      {
        icon: Smartphone,
        title: "Android App Development",
        description: "Native and cross-platform mobile apps built for performance and great user experience.",
        href: "/services/digital-engineering/android-app-development",
      },
      {
        icon: Palette,
        title: "Logo & Brand Identity",
        description: "Memorable logos and comprehensive brand systems that make your business stand out.",
        href: "/services/digital-engineering/logo-brand-identity",
      },
      {
        icon: Cpu,
        title: "Attendance Management",
        description: "Smart attendance tracking software for teams and organizations of all sizes.",
        href: "/services/digital-engineering/attendance-management",
      },
      {
        icon: Users,
        title: "Lead Management Software",
        description: "CRM and lead tracking tools to manage your pipeline and close more deals.",
        href: "/services/digital-engineering/lead-management",
      },
    ],
  },
  {
    id: "growth-marketing",
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Data-driven marketing strategies to attract, engage, and convert your ideal customers at every touchpoint.",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-500",
    services: [
      {
        icon: Search,
        title: "Search Engine Optimization",
        description: "Comprehensive SEO including technical, on-page, off-page, and AI/GEO search optimization.",
        href: "/services/growth-marketing/seo",
      },
      {
        icon: Share2,
        title: "Social Media Management",
        description: "Strategic social presence across all platforms with engaging content and community growth.",
        href: "/services/growth-marketing/social-media-management",
      },
      {
        icon: Megaphone,
        title: "Ads Management",
        description: "High-ROI Google Ads, Meta Ads, and programmatic campaigns that drive conversions.",
        href: "/services/growth-marketing/ads-management",
      },
      {
        icon: FileText,
        title: "Content Writing",
        description: "SEO-optimized blog posts, website copy, and content marketing that builds authority.",
        href: "/services/growth-marketing/content-writing",
      },
      {
        icon: Target,
        title: "Lead Generation",
        description: "Multi-channel lead generation strategies that fill your pipeline with qualified prospects.",
        href: "/services/growth-marketing/lead-generation",
      },
      {
        icon: MessageSquare,
        title: "Lead Generation & Bulk SMS",
        description: "Targeted outreach, WhatsApp broadcast campaigns, and DLT-compliant bulk SMS services.",
        href: "/services/growth-marketing/lead-generation",
      },
      {
        icon: Smartphone,
        title: "App Store Optimization",
        description: "Boost organic app installs on Google Play & Apple App Store with keyword and visual optimization.",
        href: "/services/growth-marketing/app-store-optimization",
      },
    ],
  },
  {
    id: "business-operations",
    icon: Briefcase,
    title: "Business Operations & Advisory",
    description:
      "Outsourcing, BPO, and advisory services that optimize your operations and reduce costs while maintaining quality.",
    color: "from-emerald-500 to-green-700",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    services: [
      {
        icon: BarChart3,
        title: "Back Office & Data Entry (BPO)",
        description: "Efficient, 99.5%-accurate data processing and back-office operations with guaranteed quality.",
        href: "/services/business-operations/back-office-data-entry",
      },
      {
        icon: Users,
        title: "Virtual Assistant & Operations",
        description: "Skilled VAs to handle admin tasks, scheduling, research, and daily operations.",
        href: "/services/business-operations/virtual-assistant",
      },
      {
        icon: Calculator,
        title: "Finance & Accounting Advisory",
        description: "Expert financial guidance, bookkeeping, GST filing, and tax compliance support.",
        href: "/services/business-operations/finance-accounting",
      },
      {
        icon: Headphones,
        title: "IT Managed Helpdesk",
        description: "Technical support and IT helpdesk services to keep your infrastructure running 24/7.",
        href: "/services/business-operations/it-helpdesk",
      },
      {
        icon: Lightbulb,
        title: "Startup Advisory & Consulting",
        description: "Company registration, pitch deck, go-to-market strategy, and investor connections.",
        href: "/services/business-operations/startup-advice",
      },
      {
        icon: Shield,
        title: "Investment & Insurance Advisory",
        description: "Mutual funds, SIP planning, life & health insurance advisory for businesses and individuals.",
        href: "/services/business-operations/investment-insurance",
      },
      {
        icon: TreePine,
        title: "Rural Economic Development",
        description: "Digital inclusion, MSME registration, and rural outreach programs for NGOs and corporates.",
        href: "/services/business-operations/rural-economic-development",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[128px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-[var(--accent)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 shadow-sm">
              Our Services
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]"
            >
              Everything you need to{" "}
              <span className="text-gradient">build, grow & optimize</span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              Three focused service pillars covering digital engineering, growth marketing,
              and business operations — all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      {pillars.map((pillar) => (
        <SectionWrapper
          key={pillar.id}
          className="py-20 transition-colors"
          id={pillar.id}
        >
          <div className="container-custom">
            {/* Pillar Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
                  {pillar.title}
                </h2>
                <p className="text-[var(--text-muted)] text-lg mt-1 font-normal">{pillar.description}</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.services.map((service) => (
                <Link
                  href={service.href}
                  key={service.title}
                  className="group glass-card p-6 border border-[var(--glass-border)] shadow-sm hover:shadow-xl hover:border-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                      <service.icon className={`w-6 h-6 ${pillar.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-main)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal mb-4">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] group-hover:translate-x-1 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper className="py-20 sm:py-24 relative overflow-hidden">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1d1d1f] via-[#0b0c10] to-[#181920] border border-black/10 dark:border-white/15 shadow-2xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Not sure which service you need?
              </h2>
              <p className="text-zinc-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Tell us about your project and we{"'"}ll recommend the right combination of services
                to achieve your business goals.
              </p>
              <div className="pt-2">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all text-[15px]"
                >
                  Get a Free Consultation
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
