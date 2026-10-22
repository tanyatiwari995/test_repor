import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Briefcase, ChevronRight, Award, ShieldCheck, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { founderMember, leadershipTeam } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Our Leadership & Team | Tenacious Hub",
  description:
    "Meet the leadership team at Tenacious Hub Private Limited — the digital technology and management-consulting firm driving growth for businesses across India and globally.",
  openGraph: {
    title: "Our Leadership & Team | Tenacious Hub",
    description: "Meet the people powering Tenacious Hub's digital engineering, growth marketing, and operations excellence.",
    url: "https://www.tenacioushub.com/team",
  },
};

const values = [
  {
    icon: Award,
    title: "Outcome Over Output",
    description: "We don't measure success by hours clocked or code commits, but by measurable commercial revenue and operational efficiency for our clients.",
  },
  {
    icon: Zap,
    title: "Engineering Craftsmanship",
    description: "Modern Next.js architecture, sub-second response times, and robust mobile applications built to scale effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Discipline",
    description: "Sustaining a 99.8% SLA accuracy across dedicated BPO, data operations, and managed tech support ecosystems.",
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
            The Leadership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
            People Who{" "}
            <span className="text-gradient">Make It Happen</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Dedicated specialists in digital engineering, growth marketing, and business operations — united by an unyielding commitment to client outcomes.
          </p>
        </div>
      </section>

      {/* Founder Feature */}
      <SectionWrapper className="py-20 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center glass-card p-8 md:p-12 rounded-3xl border border-[var(--border-main)] shadow-xl">
            {/* Photo */}
            <div className="lg:col-span-5">
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
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-main)] shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-[var(--text-main)]">10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold mb-3">
                  <Star className="w-3.5 h-3.5 fill-[var(--primary)]" />
                  Founder & Managing Director
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] mb-1">
                  {founderMember.name}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-muted)] mt-2">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                    {founderMember.office}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
                    Executive Leadership
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-base">
                {founderMember.bio.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div>
                <h3 className="text-xs font-bold text-[var(--text-main)] tracking-wider uppercase mb-3">Core Strategic Focus</h3>
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

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/team/${founderMember.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-full text-sm shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300"
                >
                  View Full Profile
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 glass-surface text-[var(--text-main)] font-semibold rounded-full text-sm border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300"
                >
                  Connect with Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership & Practice Leads */}
      <SectionWrapper className="py-24 bg-[var(--bg-card)]/40 border-y border-[var(--border-main)] transition-colors">
        <div className="container-custom space-y-16">
          <SectionHeader
            badge="Leadership Team"
            title="Practice Leaders Driving"
            highlightedText="Every Solution"
            description="Our practice directors blend deep engineering, data-driven marketing, and process management expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <SpotlightCard
                key={member.slug}
                className="p-8 flex flex-col justify-between rounded-3xl border border-[var(--border-main)] group hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-6">
                  {/* Avatar / Photo */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-xl font-extrabold text-white shadow-md">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                      {member.department}
                    </span>
                  </div>

                  {/* Header info */}
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--primary)] mt-1">{member.title}</p>
                    <div className="flex items-center gap-3 text-[11px] text-[var(--text-muted)] font-medium mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--primary)]" />
                        {member.office}
                      </span>
                      <span>•</span>
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[var(--text-subtle)] block">
                      Core Expertise
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/5 dark:bg-white/5 text-[var(--text-main)] border border-[var(--border-main)]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-6 mt-6 border-t border-[var(--border-main)]">
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[var(--primary)] group-hover:text-[var(--primary-light)] group-hover:translate-x-1 transition-all duration-200"
                  >
                    View Executive Profile
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership Values */}
      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom space-y-16">
          <SectionHeader
            badge="Our Guiding Principles"
            title="How We Deliver"
            highlightedText="Measurable Value"
            description="Our core operational benchmarks that govern every client interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
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

      {/* Join the team CTA */}
      <SectionWrapper className="py-20 transition-colors">
        <div className="container-custom text-center max-w-3xl space-y-8 glass-card p-12 rounded-3xl border border-[var(--border-main)] shadow-xl">
          <SectionHeader
            badge="Careers & Culture"
            title="Want to Build Something"
            highlightedText="Impactful Together?"
            description="We are constantly seeking ambitious software engineers, growth marketers, and operations leaders to join our growing firm."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/careers"
              className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm"
            >
              See Open Roles
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 glass-surface text-[var(--text-main)] font-bold rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] hover:scale-[1.03] transition-all duration-300 text-sm shadow-sm flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
