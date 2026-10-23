import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  ChevronRight,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { teamDataMap, allTeamMembers, type TeamMember } from "@/lib/team-data";

interface TeamMemberProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allTeamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: TeamMemberProps): Promise<Metadata> {
  const resolvedParams = await params;
  const member: TeamMember | undefined = teamDataMap[resolvedParams.slug];

  if (!member) {
    return {
      title: "Team Member | Tenacious Hub",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Tenacious Hub`,
    description: member.bio.slice(0, 160),
    openGraph: {
      title: `${member.name} | Tenacious Hub Leadership`,
      description: member.bio.slice(0, 160),
      url: `https://www.tenacioushub.com/team/${member.slug}`,
    },
  };
}

export default async function TeamMemberPage({ params }: TeamMemberProps) {
  const resolvedParams = await params;
  const member: TeamMember | undefined = teamDataMap[resolvedParams.slug];

  if (!member) notFound();

  return (
    <div className="pt-24 pb-16 min-h-screen text-[var(--text-main)]">
      {/* Breadcrumb */}
      <div className="glass-surface border-b border-[var(--border-main)] py-4">
        <div className="container-custom flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <Link href="/team" className="hover:text-[var(--primary)] transition-colors">
            Founder & Leadership
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{member.name}</span>
        </div>
      </div>

      <SectionWrapper className="py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 glass-card border border-[var(--border-main)] rounded-3xl p-8 shadow-sm">
            <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-3xl font-extrabold text-white flex-shrink-0 shadow-md overflow-hidden">
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                member.name.split(" ").map((n: string) => n[0]).join("")
              )}
            </div>
            <div className="space-y-3 text-center sm:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">{member.name}</h1>
              <p className="text-lg font-bold text-[var(--primary)]">{member.role}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[var(--text-muted)] font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                  {member.office}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {member.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-[var(--border-main)] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)]">
                <GraduationCap className="w-4 h-4 text-[var(--primary)]" />
                Academic Background
              </div>
              <ul className="space-y-2 text-xs font-semibold text-[var(--text-muted)]">
                {member.education.map((edu, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-[var(--border-main)] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)]">
                <Award className="w-4 h-4 text-amber-500" />
                Certifications & Accreditations
              </div>
              <div className="flex flex-wrap gap-2">
                {member.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Biography & Professional Journey</h2>
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-base">
              {member.bio.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {member.quote && (
              <blockquote className="p-6 bg-[var(--primary)]/10 border-l-4 border-[var(--primary)] rounded-r-2xl text-[var(--text-main)] font-medium italic shadow-sm">
                &ldquo;{member.quote}&rdquo;
              </blockquote>
            )}

            <div className="pt-4 space-y-3">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Core Executive Responsibilities</h3>
              <ul className="space-y-2">
                {member.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[var(--text-main)] text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Key Specialties & Consulting Domains</h3>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="pt-8 border-t border-[var(--border-main)] flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white font-bold rounded-full text-sm shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919105267000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 glass-surface text-[var(--text-main)] font-bold rounded-full text-sm border border-[var(--glass-border)] hover:bg-[var(--glass-bg-hover)] transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                WhatsApp Connect
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
