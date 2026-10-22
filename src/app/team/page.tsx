import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Star } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";



export const metadata: Metadata = {
  title: "Our Team | Tenacious Hub Leadership",
  description:
    "Meet the leadership team at Tenacious Hub Private Limited — the digital technology and management-consulting firm driving growth for businesses across India and globally.",
  openGraph: {
    title: "Our Team | Tenacious Hub Leadership",
    description: "Meet the people powering Tenacious Hub's digital engineering, marketing, and operations excellence.",
    url: "https://www.tenacioushub.com/team",
  },
};

// TODO_CONFIRM: All team member data below needs verification from the company
const founder = {
  name: "Vaibhav Sheel Pandey",
  title: "Founder & Managing Director",
  bio: `Vaibhav Sheel Pandey founded Tenacious Hub with a vision to bring enterprise-grade digital capabilities to businesses of all sizes. With deep expertise spanning web engineering, performance marketing, and BPO operations, he has led the firm from a focused web design practice to a full-stack digital technology and management-consulting company serving clients across India and globally.

A firm believer in outcome-over-output, Vaibhav personally oversees client strategy and ensures every engagement is grounded in measurable business impact.`,
  photo: "/team/vaibhav.jpg",
  linkedin: null,
  twitter: null,
  specialties: [
    "Digital Strategy & Architecture",
    "Business Development & Partnerships",
    "BPO Operations Management",
    "Growth Marketing Oversight",
  ],
};

const teamMembers: Array<{ name: string; title: string; bio?: string; photo?: string | null }> = [
  // TODO_CONFIRM: Add actual team members with real names, titles, bios and photos
  // Example structure:
  // { name: "TODO_CONFIRM", title: "Head of Engineering", bio: "...", photo: null }
];

export default function TeamPage() {
  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
            The Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[var(--text-main)]">
            People Who{" "}
            <span className="text-gradient">Make It Happen</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Dedicated specialists in engineering, marketing, and operations — united by a shared commitment to measurable client outcomes.
          </p>
        </div>
      </section>

      {/* Founder Feature */}
      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-4">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 border border-[var(--glass-border)] flex items-center justify-center overflow-hidden shadow-md">
                {founder.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center space-y-2 p-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-4xl font-extrabold text-[var(--primary)]">
                      {founder.name.charAt(0)}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] italic font-medium">Photo coming soon</p>
                    <p className="text-[10px] text-[var(--text-subtle)]">TODO_CONFIRM</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                  <Star className="w-3.5 h-3.5 fill-primary" />
                  Founder
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] mb-1">
                  {founder.name}
                </h2>
                <p className="text-[var(--primary)] font-bold">{founder.title}</p>
              </div>

              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                {founder.bio.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--text-main)] mb-3">Core Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {founder.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-full text-sm shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Grid (empty — to be filled from CMS) */}
      {teamMembers.length > 0 && (
        <SectionWrapper className="py-24 bg-slate-50 dark:bg-slate-950/40 border-y border-slate-200 dark:border-white/5 transition-colors">
          <div className="container-custom space-y-16">
            <SectionHeader
              badge="Our Team"
              title="The Specialists Behind"
              highlightedText="Your Growth"
              description="A handpicked team of engineers, marketers, and operations experts."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member: { name: string; title: string; bio?: string; photo?: string | null }) => (
                <SpotlightCard key={member.name} className="p-7 space-y-4 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-2xl font-extrabold text-[var(--primary)]">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-main)]">{member.name}</h3>
                    <p className="text-xs text-[var(--primary)] font-semibold">{member.title}</p>
                  </div>
                  {member.bio && (
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal">{member.bio}</p>
                  )}
                </SpotlightCard>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Join the team CTA */}
      <SectionWrapper className="py-24 transition-colors">
        <div className="container-custom text-center max-w-3xl space-y-8">
          <SectionHeader
            badge="Join Us"
            title="Want to Build Something"
            highlightedText="Great Together?"
            description="We're always looking for talented people who share our commitment to quality and impact."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Send Us Your CV
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
