import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Globe, Star, Building2, Clock, Award } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const metadata: Metadata = {
  title: "About Tenacious Hub | 10+ Years of Digital Innovation & BPO Leadership",
  description:
    "Tenacious Hub Private Limited is a digital technology and management-consulting firm with offices in Noida (Delhi NCR) and Rudrapur (Uttarakhand). Discover our story, mission, and the team driving your growth.",
  openGraph: {
    title: "About Tenacious Hub | 10+ Years of Digital Innovation & BPO Leadership",
    description:
      "Discover Tenacious Hub's journey as a pioneering digital technology and management consulting firm with 10+ years of experience.",
    url: "https://www.tenacioushub.com/about",
  },
};

const values = [
  {
    icon: Star,
    title: "Excellence First",
    desc: "We hold every deliverable to the highest standard — measurable results, not just activity.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    desc: "We work as an extension of your team, not a vendor. Your success is our KPI.",
  },
  {
    icon: CheckCircle2,
    title: "Transparency",
    desc: "Clear pricing, honest timelines, and straight-talking reports — no surprises.",
  },
  {
    icon: Globe,
    title: "Innovation",
    desc: "We continuously adopt emerging tools — from AI SEO (GEO) to next-gen frameworks — so you stay ahead.",
  },
];

const offices = [
  {
    city: "Delhi NCR (Noida)",
    address: "Ground Floor, F 294, Sector 63 Rd, Chotpur, F Block, Sector 63, Noida, Uttar Pradesh 201309",
    type: "Corporate & Technology Hub",
    mapUrl: "https://www.google.com/maps/place/Tenacious+Hub+Pvt+Ltd/@28.6211304,77.3885094,17z/data=!3m1!4b1!4m6!3m5!1s0x390ceff4c29d77d1:0xa8f573d840307ee0!8m2!3d28.6211304!4d77.3885094!16s%2Fg%2F11tmsklpzc?entry=ttu",
  },
  {
    city: "Rudrapur (Uttarakhand)",
    address: "Tenacious Hub Private Limited, Gangapur Road, Rudrapur, Uttarakhand 263153",
    type: "Regional Office & BPO Operations",
    mapUrl: "https://maps.google.com/?q=Tenacious+Hub+Gangapur+Road+Rudrapur",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience", icon: Clock },
  { value: "500+", label: "Projects Delivered", icon: Award },
  { value: "2", label: "Strategic Offices", icon: Building2 },
  { value: "4.9/5", label: "Average Client Rating", icon: Star },
];

export default function AboutPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
              Built on{" "}
              <span className="text-gradient">Tenacity,</span>
              <br />
              Driven by Results
            </h1>
            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              Tenacious Hub Private Limited is a digital technology and management-consulting firm helping businesses build, grow, and operate with clarity and confidence — since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 glass-card border border-[var(--glass-border)] shadow-sm">
                <stat.icon className="w-6 h-6 text-[var(--primary)] mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-[var(--text-main)] mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Story */}
      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                badge="Our Story"
                title="From a Laptop to"
                highlightedText="a Full-Service Agency"
                description=""
                align="left"
              />
              <div className="space-y-4 text-slate-600 dark:text-white/70 leading-relaxed text-base">
                <p>
                  Tenacious Hub began as a focused digital engineering shop — a small team obsessed with building fast, reliable websites for Indian SMEs who deserved better than cookie-cutter templates.
                </p>
                <p>
                  Over more than a decade, client demand organically expanded our practice: a web client needed SEO, then paid media, then someone to manage their back-office operations. We said yes to every genuine need — and built the expertise to back it up.
                </p>
                <p>
                  Today, <strong className="text-slate-900 dark:text-white">Tenacious Hub Private Limited</strong> is incorporated and operating across three service pillars — Digital Engineering, Growth Marketing, and Business Operations — from offices in Noida (Delhi NCR) and Rudrapur (Uttarakhand).
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl text-sm shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
                >
                  Meet the Founder
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {[
                { year: "~2014", label: "Founded", desc: "Started as a small web design practice serving local businesses in UP." },
                { year: "~2017", label: "Growth Phase", desc: "Expanded into SEO and digital marketing; first enterprise retainer clients." },
                { year: "~2019", label: "BPO Launch", desc: "Launched back-office and virtual assistant services, doubling team size." },
                { year: "2021", label: "Incorporated", desc: "Registered as Tenacious Hub Private Limited with offices in Noida & Rudrapur." },
                { year: "2024+", label: "AI & GEO Era", desc: "Pioneering Generative Engine Optimization (GEO) to future-proof client visibility." },
              ].map((item, idx, arr) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">
                      {idx + 1}
                    </div>
                    {idx < arr.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent my-1 min-h-[48px]" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-xs font-bold text-primary mb-0.5">{item.year}</div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">{item.label}</div>
                    <p className="text-sm text-slate-600 dark:text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-slate-950/40 border-y border-slate-200 dark:border-white/5 transition-colors">
        <div className="container-custom space-y-16">
          <SectionHeader
            badge="What We Stand For"
            title="Our Core"
            highlightedText="Values"
            description="Four principles that guide every project, every proposal, and every partnership."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <SpotlightCard key={v.title} className="p-7 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed">{v.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Office Locations */}
      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom space-y-16">
          <SectionHeader
            badge="Where We Are"
            title="Our"
            highlightedText="Offices"
            description="Two strategic delivery hubs in Delhi NCR (Noida) and Rudrapur (Uttarakhand)."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <SpotlightCard key={office.city} className="p-7 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{office.city}</h3>
                  <span className="text-xs font-semibold text-primary">{office.type}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed">{office.address}</p>
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent transition-colors"
                >
                  View on Map <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="py-20 sm:py-24 relative overflow-hidden">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1d1d1f] via-[#0b0c10] to-[#181920] border border-black/10 dark:border-white/15 shadow-2xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Ready to work with a team that{" "}
                <span className="text-gradient">delivers?</span>
              </h2>
              <p className="text-zinc-200 text-base sm:text-lg max-w-xl mx-auto font-normal">
                Whether you need a new website, a stronger search ranking, or an outsourced operations team — let&apos;s talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/get-a-quote"
                  className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all inline-flex items-center justify-center gap-2"
                >
                  Start a Free Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full hover:scale-[1.02] transition-all border border-white/25 backdrop-blur-md inline-flex items-center justify-center shadow-sm"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
