"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Briefcase,
  Code,
  Palette,
  Smartphone,
  Search,
  Megaphone,
  ShoppingCart,
  Star,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Users,
  Target,
  BarChart3,
  Headphones,
  Lightbulb,
  Rocket,
  ChevronDown,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Clock,
  ArrowUpRight,
  MessageSquare,
  FileText,
  PhoneCall,
  Check,
  Database,
  Calculator,
  Server,
  Layers3,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

/* ═══════════════════════════════════════════════
   ANIMATION PRESETS — Smooth, responsive motion
   ═══════════════════════════════════════════════ */
const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

/* ════════════════════════════════════════════
   1. HERO SECTION — Matches live tenacioushub.com
   ════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 hero-gradient transition-colors duration-500" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[var(--primary)]/15 via-cyan-400/10 to-transparent rounded-full blur-[140px] opacity-70" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Headline & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-7 text-left"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {/* Google Rating Eyebrow */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface border border-[var(--border-main)] shadow-sm text-xs sm:text-sm font-bold text-[var(--text-main)]"
            >
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-[var(--text-main)]">4.9/5</span>
              <span className="text-[var(--text-muted)] font-medium">Rating on Google Reviews</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-[var(--text-main)] tracking-[-0.03em] leading-[1.08]"
            >
              Powering Smarter{" "}
              <span className="text-gradient">Technology</span>
              <br />& Operations
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed font-normal"
            >
              Drive organic growth, rank higher on search engines, and convert high-intent visitors into loyal clients with our tailored SEO, digital engineering & BPO operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <Link
                href="/get-a-quote"
                className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:shadow-xl hover:scale-[1.02] transition-all duration-200 text-center text-[15px] flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 glass-surface font-bold rounded-full text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] hover:scale-[1.02] transition-all duration-200 text-center text-[15px] flex items-center justify-center shadow-sm"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Guarantees with Checkmarks */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span>Instant SEO Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                <span>100% SLA Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Dashboard Mockup & Live Stats Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Tech Showcase Frame */}
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#0c1322] border border-cyan-500/25 shadow-2xl shadow-cyan-900/20 text-white space-y-6 overflow-hidden">
              {/* Inner ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-gentle-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Tenacious Hub Performance Engine
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-400">Live Dashboard</span>
              </div>

              {/* Main Metric: +148% Traffic Surge */}
              <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-300">Organic Traffic Surge</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <TrendingUp className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  +148%
                </div>
                <p className="text-xs text-zinc-400">Average client 6-month organic growth trajectory</p>
              </div>

              {/* Grid of Micro-Metrics */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <div className="text-2xl font-black text-amber-400">10+ Years</div>
                  <div className="text-xs font-bold text-zinc-200">Industry Leadership</div>
                  <p className="text-[11px] text-zinc-400">Delivering digital excellence</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <div className="text-2xl font-black text-cyan-400">500+</div>
                  <div className="text-xs font-bold text-zinc-200">Global Enterprises</div>
                  <p className="text-[11px] text-zinc-400">Trusted technology partner</p>
                </div>
              </div>

              {/* Status Banner */}
              <div className="flex items-center justify-between pt-1 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AI SEO & Generative Search Ready</span>
                </div>
                <span className="font-mono text-cyan-400 font-bold">99.8% SLA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   2. ABOUT SECTION — Empowering Growth
   ════════════════════════════════════════════ */
function AboutSection() {
  return (
    <SectionWrapper className="py-20 sm:py-24 relative overflow-hidden transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with Floating Experience Card (Matching live tenacioushub.com) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-3 bg-white dark:bg-slate-900 shadow-2xl border border-[var(--border-main)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-us-tenacioushub.png"
                alt="About Tenacious Hub"
                className="w-full h-auto max-h-[460px] object-cover rounded-2xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith("/images/slider-01.jpg")) {
                    target.src = "/images/slider-01.jpg";
                  }
                }}
              />
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 flex items-center gap-3.5 bg-[#102630] text-white p-3.5 sm:p-4 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-black/50 z-10">
              <div className="w-12 h-12 rounded-xl bg-[#FF6A00] flex items-center justify-center text-white shadow-md flex-shrink-0 text-xl font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white leading-tight">10+ Years</div>
                <div className="text-xs font-semibold text-cyan-400">Digital Industry Leadership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Authority */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-gentle-pulse" />
              ABOUT TENACIOUS HUB
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.18]">
              Empowering Growth Through{" "}
              <span className="text-cyan-500">Smarter Technology</span> &{" "}
              <span className="text-[#FF6A00]">Strategy</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal">
              Tenacious Hub is a pioneering digital technology & management consulting firm. We partner with ambitious leaders to build resilient digital platforms, execute high-ROI marketing campaigns, and streamline back-office operations.
            </p>

            {/* Core Values List */}
            <div className="space-y-3 pt-1">
              {[
                "Data-driven keyword strategies & technical audits",
                "100% transparent live performance reporting & SLAs",
                "Proven track record across 500+ global enterprises",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] font-medium text-[var(--text-main)]">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/about"
                className="px-7 py-3.5 bg-gradient-to-r from-[#FF6A00] to-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/25 hover:opacity-95 hover:scale-[1.02] transition-all duration-200 text-sm flex items-center gap-2"
              >
                <span>Discover Our Process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full font-bold text-sm border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 flex items-center gap-2"
              >
                <span>Talk to an Expert</span>
                <MessageSquare className="w-4 h-4 text-cyan-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   3. SERVICES & SOLUTIONS — Tremendous Reach Through Tailored Solutions
   ════════════════════════════════════════════ */
const solutionCards = [
  {
    num: "SOLUTION #01",
    title: "Responsive Website Design: A Creative Art Form",
    desc: "In today's digital world, responsive website design is not just a technical necessity—it's an essential brand experience. We build pixel-perfect, ultra-fast websites that adapt seamlessly across devices.",
    icon: Globe,
    href: "/services/digital-engineering/website-design",
    tag: "Web Engineering",
  },
  {
    num: "SOLUTION #02",
    title: "Digital Marketing & AI SEO Dominance",
    desc: "Search Engine Optimization (SEO) & Generative Engine Optimization (GEO) are the keys to unlocking your website's potential. Turn organic search traffic into high-converting revenue streams.",
    icon: Search,
    href: "/services/growth-marketing/seo",
    tag: "Growth Marketing",
  },
  {
    num: "SOLUTION #03",
    title: "E-Commerce And Portal Design",
    desc: "In today's competitive market, a powerful online portal is the key to scaling your reach, educating customers, and facilitating effortless transactions with secure checkout flows.",
    icon: ShoppingCart,
    href: "/services/digital-engineering/ecommerce-portal",
    tag: "E-Commerce",
  },
  {
    num: "SOLUTION #04",
    title: "Logo Design & Brand Identity",
    desc: "A logo is more than just a graphic—it's the visual embodiment of your brand's identity. We craft timeless visual assets, brand books, and design systems that command authority.",
    icon: Palette,
    href: "/services/digital-engineering/logo-brand-identity",
    tag: "Branding",
  },
  {
    num: "SOLUTION #05",
    title: "Android App Development",
    desc: "In today's mobile-first world, your Android app isn't just software—it's a direct revenue pipeline and daily customer engagement channel built for rock-solid stability.",
    icon: Smartphone,
    href: "/services/digital-engineering/android-app-development",
    tag: "Mobile Apps",
  },
  {
    num: "SOLUTION #06",
    title: "Bulk SMS | Voice Call Solutions",
    desc: "Break language barriers and connect with your audience in their preferred regional languages—Hindi, English, Tamil, Telugu, and more with high deliverability and engagement.",
    icon: MessageSquare,
    href: "/services/growth-marketing/content-copywriting",
    tag: "Omnichannel Comms",
  },
];

function SolutionsSection() {
  return (
    <>
      {/* Glowing Brand Accent Divider Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400/20 via-cyan-500 via-[#FF6A00] to-[#FF6A00]/20" />

      <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden bg-slate-50/90 dark:bg-gradient-to-b dark:from-[#07141C] dark:to-[#102630] transition-colors duration-400">
        {/* Ambient background lights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF6A00]/5 dark:bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300 border border-cyan-500/25 dark:border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-gentle-pulse" />
              SERVICES & SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
              Tremendous Reach Through{" "}
              <span className="text-cyan-600 dark:text-cyan-400">Tailored</span>{" "}
              <span className="text-[#FF6A00]">Solutions</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-normal leading-relaxed">
              Full-spectrum digital consulting, AI-driven marketing, and custom technology solutions engineered for growth and market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {solutionCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white text-slate-900 border border-slate-200/90 hover:border-cyan-500 hover:shadow-2xl hover:-translate-y-1.5 dark:bg-slate-900/90 dark:text-white dark:border-white/10 dark:hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <card.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

/* ════════════════════════════════════════════
   4. WHY CHOOSE US / SEO EXPERTISE
   ════════════════════════════════════════════ */
function SeoExpertiseSection() {
  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container-custom space-y-16">
        <SectionHeader
          badge="WHY CHOOSE US"
          title="What Makes Your Business Grow with"
          highlightedText="Our SEO Expertise"
          description="We combine cutting-edge AI analytics with experienced marketing execution to turn your website into a reliable revenue generator."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <SpotlightCard className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">Niche Expertise</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
              Specialized industry-tailored strategies built for your specific target demographic, competitive landscape, and customer search intents.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">Flexibility to Serve You Better</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
              Agile execution models aligned with your evolving business targets, rapid sprint cycles, and scalable resource requirements.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">Reliability & Quality</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
              Uncompromising quality assurance, 99.8% SLA commitments, and transparent weekly reporting on every keyword ranking and lead metric.
            </p>
          </SpotlightCard>
        </div>

        {/* Ready to Scale Mid-Page Banner */}
        <div className="rounded-3xl p-8 sm:p-10 glass-card border border-[var(--border-main)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Ready to Scale Your Brand?
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal">
              Join over 500+ businesses achieving 3x growth with Tenacious Hub.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all duration-200 text-sm whitespace-nowrap"
          >
            Schedule Strategy Call
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   5. BACK OFFICE & BPO SOLUTIONS
   ════════════════════════════════════════════ */
const bpoServices = [
  {
    title: "Back Office Support & Data Entry",
    desc: "High-accuracy data entry, catalog management, CRM updates, and transaction processing with dual QA verification.",
    icon: Database,
    href: "/services/business-operations/back-office-data-entry",
  },
  {
    title: "Virtual Assistant & Operations",
    desc: "Dedicated virtual assistants for executive email triage, calendar scheduling, customer ticketing, and vendor management.",
    icon: Headphones,
    href: "/services/business-operations/virtual-assistant",
  },
  {
    title: "Finance & Accounting Advisory",
    desc: "Bookkeeping, accounts payable/receivable, invoice processing, GST reconciliation, and financial audit support.",
    icon: Calculator,
    href: "/services/business-operations/finance-accounting-advisory",
  },
  {
    title: "IT Managed Helpdesk",
    desc: "24/7 technical desk support, server monitoring, security patching, cloud management, and remote system care.",
    icon: Server,
    href: "/services/business-operations/it-helpdesk-support",
  },
];

function BpoSection() {
  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden bg-[var(--bg-card)]/50 border-y border-[var(--border-main)]">
      <div className="container-custom space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Zap className="w-3.5 h-3.5" />
              BACK OFFICE & BPO SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
              Streamline Operations with{" "}
              <span className="text-gradient">Outsourcing Services</span>
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-muted)] font-normal">
              Reduce operational overhead by up to 60% while expanding your back-office capacity and IT support with trained Indian specialists.
            </p>
          </div>
          <Link
            href="/services/business-operations"
            className="px-7 py-3.5 bg-[var(--primary)] text-white font-bold rounded-full shadow-md shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] transition-colors text-sm whitespace-nowrap self-start md:self-end"
          >
            Explore Outsourcing
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bpoServices.map((service, idx) => (
            <SpotlightCard key={idx} className="p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)]">{service.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[var(--border-main)]">
                <Link
                  href={service.href}
                  className="text-xs font-bold text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   6. INTEGRATIONS & REVENUE MACHINE
   ════════════════════════════════════════════ */
function IntegrationsSection() {
  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container-custom">
        <div className="rounded-3xl p-8 sm:p-14 glass-card border border-[var(--border-main)] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                <Layers3 className="w-3.5 h-3.5" />
                INTEGRATIONS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
                Transform Your Website into a{" "}
                <span className="text-gradient">Revenue-Generating Machine</span>
              </h2>

              <p className="text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed">
                Seamlessly bridge your digital storefront with high-intent organic search, automated CRM workflows, and reliable payment gateways to accelerate conversion velocity.
              </p>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all duration-200 text-sm inline-flex items-center gap-2"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="p-6 rounded-2xl glass-surface border border-[var(--border-main)] space-y-2">
                <div className="text-4xl sm:text-5xl font-black text-[var(--primary)]">86%</div>
                <div className="text-sm font-bold text-[var(--text-main)]">
                  Sales Growth & Top Organic Search Visibility
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Average year-over-year revenue uplift across multi-channel client implementations.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-surface border border-[var(--border-main)] space-y-2">
                <div className="text-4xl sm:text-5xl font-black text-[var(--accent)]">98%</div>
                <div className="text-sm font-bold text-[var(--text-main)]">
                  Revenue Generating for Local & Global Enterprises
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  High-intent lead conversion rates driven by optimized funnels and performance SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   7. TESTIMONIALS & SOCIAL PROOF
   ════════════════════════════════════════════ */
const testimonials = [
  {
    quote:
      "Great services, very professional in terms of timely delivery of error free websites as promised. Highly recommended.",
    author: "Zed Security Services Pvt. Ltd.",
    badge: "Verified Client",
  },
  {
    quote:
      "Very kind, with enough skills to develop my project, i am very satisfied with them, and surely i will going to work with them again. They are very supportive.",
    author: "PEJKSMS",
    badge: "Verified Client",
  },
  {
    quote:
      "I needed help getting my business to be more dynamic & be more effective for my target market to use and come back to regularly. Thanks so much for the exceptional delivery!",
    author: "Yoganta",
    badge: "Verified Client",
  },
];

const brandLogos = ["Google", "Meta", "Shopify", "WordPress", "Amazon", "Razorpay"];

function TestimonialsSection() {
  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container-custom space-y-16">
        <SectionHeader
          badge="TESTIMONIALS"
          title="From Strategy to Victory:"
          highlightedText="Leads to Customers"
          description="Hear what our clients say about partnering with Tenacious Hub."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <SpotlightCard key={idx} className="p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] text-[var(--text-main)] italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-main)] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[var(--text-main)]">{t.author}</div>
                  <div className="text-xs text-[var(--text-muted)]">{t.badge}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/15 flex items-center justify-center text-[var(--accent)]">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Brand Logos Bar */}
        <div className="pt-10 border-t border-[var(--border-main)] text-center space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
            Trusted by Leading Global Brands & Modern Enterprises
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {brandLogos.map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-xl font-extrabold text-[var(--text-muted)] tracking-wider hover:text-[var(--text-main)] transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   8. LATEST INSIGHTS / MARKETING JOURNAL
   ════════════════════════════════════════════ */
const blogPosts = [
  {
    date: "2026-04-24",
    title: "AI in Daily Life: How You're Already Using It Without Knowing",
    excerpt:
      "Artificial Intelligence (AI) is no longer something only tech experts talk about—it has quietly become a core part of modern living and digital consumer journeys.",
    href: "/blog",
    category: "AI & Search",
  },
  {
    date: "2026-04-22",
    title: "Will AI Replace Jobs or Create More Opportunities?",
    excerpt:
      "Artificial Intelligence is redefining how digital teams operate. Discover how automated workflows empower human specialists to produce higher-leverage results.",
    href: "/blog",
    category: "Operations",
  },
  {
    date: "2026-04-21",
    title: "Generative AI vs Traditional AI: What's the Real Difference?",
    excerpt:
      "AI has evolved from a buzzword into the operational backbone of high-growth brands. Learn how generative engine optimization (GEO) changes the SEO landscape.",
    href: "/blog",
    category: "SEO Strategy",
  },
];

function BlogInsightsSection() {
  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden bg-[var(--bg-card)]/50 border-t border-[var(--border-main)]">
      <div className="container-custom space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
              <FileText className="w-3.5 h-3.5" />
              LATEST INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              From Our Marketing Journal
            </h2>
          </div>
          <Link
            href="/blog"
            className="px-6 py-3 glass-surface font-bold rounded-full text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all text-sm self-start sm:self-end"
          >
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, idx) => (
            <SpotlightCard key={idx} className="p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                  <span>{post.date}</span>
                  <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] hover:text-[var(--primary)] transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[var(--border-main)]">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   9. FREQUENTLY ASKED QUESTIONS
   ════════════════════════════════════════════ */
const faqs = [
  {
    q: "What services does Tenacious Hub provide?",
    a: "Tenacious Hub provides end-to-end digital solutions including Web & UI/UX Design, Performance AI SEO & Generative Engine Optimization (GEO), Paid Media Marketing (Google & Meta Ads), and BPO Back-Office Outsourcing (Data Entry, Virtual Assistant, Finance Advisory, and 24/7 IT Helpdesk).",
  },
  {
    q: "What is Generative Engine Optimization (GEO) and AI SEO?",
    a: "Generative Engine Optimization (GEO) and AI SEO optimize content and schema architecture so AI search assistants (such as ChatGPT, Google Gemini, Perplexity AI, and Claude) accurately recommend and cite your business in direct generative responses.",
  },
  {
    q: "How does Tenacious Hub's BPO Outsourcing service work?",
    a: "Tenacious Hub delivers dedicated BPO back-office teams with 99.8% SLA accuracy, reducing operational costs by up to 60% with flexible risk-free 14-day onboarding pilots.",
  },
  {
    q: "Where are Tenacious Hub's office locations?",
    a: "Tenacious Hub operates key technology and BPO delivery hubs in Noida (Delhi NCR - Ground Floor, F 294, Sector 63, PIN 201309) and Rudrapur (Gangapur Road, PIN 263153), serving global clients across North America, Europe, and Asia-Pacific.",
  },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container-custom max-w-3xl space-y-12">
        <SectionHeader
          badge="COMMON QUESTIONS"
          title="Frequently Asked"
          highlightedText="Questions"
          description="Everything you need to know about partnering with Tenacious Hub."
        />

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border border-[var(--glass-border)] shadow-sm rounded-2xl"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left font-bold text-[var(--text-main)] flex items-center justify-between gap-4 hover:bg-[var(--primary)]/5 transition-colors"
              >
                <span className="text-sm sm:text-base text-[var(--text-main)] font-bold">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--primary)] flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-main)] pt-4 font-normal">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   10. FINAL CTA — High-Impact Banner
   ════════════════════════════════════════════ */
function FinalCtaSection() {
  return (
    <SectionWrapper className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container-custom text-center max-w-3xl space-y-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Ready to Scale Your Brand with{" "}
          <span className="text-gradient">Tenacious Hub</span>?
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed font-normal">
          Book a 1-on-1 strategy consultation with our senior digital engineering, SEO, and operations specialists today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/get-a-quote"
            className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all duration-200 text-[15px] flex items-center justify-center gap-2"
          >
            <span>Start Your Free Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919105267000"
            className="w-full sm:w-auto px-8 py-4 glass-surface font-bold rounded-full text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all duration-200 text-[15px] flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[var(--primary)]" />
            <span>Call +91 9105267000</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════
   MAIN PAGE EXPORT
   ════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <SeoExpertiseSection />
      <BpoSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <BlogInsightsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
