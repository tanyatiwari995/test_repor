import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { founderMember } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Our Founder & Leadership | Vaibhav Sheel Pandey | Tenacious Hub",
  description:
    "Meet Vaibhav Sheel Pandey, Founder & Managing Director of Tenacious Hub Private Limited. B.Tech (CSE), M.Tech (IT), Google Certified Marketer & Strategic Consultant.",
  openGraph: {
    title: "Our Founder & Leadership | Vaibhav Sheel Pandey",
    description:
      "Meet Vaibhav Sheel Pandey, Founder & Managing Director of Tenacious Hub Private Limited — driving digital engineering, AI SEO, and BPO operations.",
    url: "https://www.tenacioushub.com/team",
  },
};

const principles = [
  {
    icon: Award,
    title: "Outcome Over Output",
    description:
      "Every campaign, application, and outsourcing workflow is architected with one metric in mind: measurable business revenue and verifiable client ROI.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description:
      "Combining computer science fundamentals with modern Next.js engineering to produce sub-second page performance, robust security, and seamless user experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Discipline",
    description:
      "Upholding a 99.8% SLA accuracy benchmark across dedicated BPO desks, back-office administration, and financial advisory services.",
  },
];

export default function TeamPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
            Founder & Leadership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
            Visionary Behind <span className="text-gradient">Tenacious Hub</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Merging computer science engineering with growth marketing and operational consulting to build scalable revenue engines.
          </p>
        </div>
      </section>

      {/* Main Founder Profile Card */}
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-14 rounded-3xl border border-[var(--border-main)] shadow-2xl space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Photo & Quick Stats */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative group mx-auto max-w-md">
                  <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 border border-[var(--glass-border)] flex items-center justify-center overflow-hidden shadow-2xl">
                    {founderMember.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={founderMember.photo}
                        alt={founderMember.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center space-y-2 p-8">
                        <div className="w-24 h-24 mx-auto rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-4xl font-extrabold text-[var(--primary)]">
                          {founderMember.name.charAt(0)}
                        </div>
                        <p className="text-xs text-[var(--text-muted)] italic font-medium">Founder</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-main)] shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-[var(--text-main)]">10+ Years Experience</span>
                  </div>
                </div>

                {/* Academic Credentials Box */}
                <div className="glass-surface p-6 rounded-2xl border border-[var(--border-main)] space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)]">
                    <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
                    Academic Credentials
                  </div>
                  <ul className="space-y-2 text-xs font-semibold text-[var(--text-muted)]">
                    {founderMember.education.map((edu, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications Box */}
                <div className="glass-surface p-6 rounded-2xl border border-[var(--border-main)] space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)]">
                    <Award className="w-4 h-4 text-amber-500" />
                    Google & Industry Certifications
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founderMember.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold mb-3">
                    <Star className="w-3.5 h-3.5 fill-[var(--primary)]" />
                    Founder & Managing Director
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
                    {founderMember.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--text-muted)] mt-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[var(--primary)]" />
                      {founderMember.office}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                      Digital Marketer & Strategic Consultant
                    </span>
                  </div>
                </div>

                {/* Quote */}
                {founderMember.quote && (
                  <blockquote className="p-6 bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] rounded-r-2xl text-[var(--text-main)] text-base font-medium italic shadow-sm leading-relaxed">
                    &ldquo;{founderMember.quote}&rdquo;
                  </blockquote>
                )}

                {/* Bio text */}
                <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-base">
                  {founderMember.bio.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-[var(--text-main)] uppercase tracking-wider">
                    Executive Strategic Oversight
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {founderMember.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border-main)] flex items-start gap-2.5 text-xs font-semibold text-[var(--text-main)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Specialties */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-[var(--text-main)] uppercase tracking-wider">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {founderMember.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-main)]">
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white font-bold rounded-full text-sm shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300"
                  >
                    Start a Project with Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/919105267000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 glass-surface text-[var(--text-main)] font-bold rounded-full text-sm border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-emerald-500" />
                    Direct WhatsApp
                  </a>
                  <a
                    href="mailto:sales@tenacioushub.com"
                    className="inline-flex items-center gap-2 px-6 py-3.5 glass-surface text-[var(--text-main)] font-semibold rounded-full text-sm border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300 shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-[var(--primary)]" />
                    sales@tenacioushub.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership Principles */}
      <SectionWrapper className="py-20 bg-[var(--bg-card)]/40 border-y border-[var(--border-main)] transition-colors">
        <div className="container-custom space-y-16">
          <SectionHeader
            badge="Leadership Philosophy"
            title="How We Deliver"
            highlightedText="Measurable Business Impact"
            description="Our core operational standards instituted by founder Vaibhav Sheel Pandey across all client engagements."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((val, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-[var(--border-main)] space-y-4 hover:border-[var(--primary)]/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)]">{val.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Join the Team / Careers CTA */}
      <SectionWrapper className="py-20 transition-colors">
        <div className="container-custom text-center max-w-3xl space-y-8 glass-card p-12 rounded-3xl border border-[var(--border-main)] shadow-xl">
          <SectionHeader
            badge="Join Our Mission"
            title="Want to Build Something"
            highlightedText="Impactful Together?"
            description="We are constantly expanding our engineering, performance marketing, and BPO operations teams. Join us in delivering world-class client results."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/careers"
              className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm"
            >
              See Open Positions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 glass-surface text-[var(--text-main)] font-bold rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] hover:scale-[1.03] transition-all duration-300 text-sm shadow-sm flex items-center justify-center"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
