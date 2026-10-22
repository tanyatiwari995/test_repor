import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ChevronRight, MapPin, Briefcase } from "lucide-react";
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
            Team
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{member.name}</span>
        </div>
      </div>

      <SectionWrapper className="py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 glass-card border border-[var(--border-main)] rounded-3xl p-8 shadow-sm">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-3xl font-extrabold text-white flex-shrink-0 shadow-md overflow-hidden">
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
            <div className="space-y-3 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-[var(--text-main)]">{member.name}</h1>
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

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--text-main)]">Biography & Background</h2>
            <p className="text-[var(--text-muted)] leading-relaxed text-lg font-normal">{member.bio}</p>

            {member.quote && (
              <blockquote className="p-6 bg-[var(--primary)]/10 border-l-4 border-[var(--primary)] rounded-r-2xl text-[var(--text-main)] font-medium italic shadow-sm">
                &ldquo;{member.quote}&rdquo;
              </blockquote>
            )}

            <div className="pt-4 space-y-3">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Key Strategic Responsibilities</h3>
              <ul className="space-y-2">
                {member.responsibilities.map((resp: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[var(--text-main)] text-base font-medium">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
