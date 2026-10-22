import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight, ChevronRight, MapPin, Briefcase, Clock, CheckCircle2, Upload, Send } from "lucide-react";

const jobDetails: Record<string, any> = {
  "senior-nextjs-developer": {
    slug: "senior-nextjs-developer",
    title: "Senior Next.js / Full-Stack Engineer",
    department: "Digital Engineering",
    type: "Full-time",
    location: "Noida / Remote",
    experience: "3+ Years",
    description: "We are seeking a talented Senior Next.js Developer to architect modern React web applications, custom API endpoints, and database models.",
    responsibilities: [
      "Develop responsive front-end components using Next.js App Router & Tailwind CSS",
      "Design database models with Prisma ORM & PostgreSQL",
      "Integrate third-party REST APIs and payment gateways (Razorpay/Stripe)",
      "Maintain strict Lighthouse performance, SEO, and accessibility benchmarks"
    ],
    requirements: [
      "3+ years of professional experience with React and Next.js",
      "Strong TypeScript knowledge and async programming",
      "Experience with Git, TailwindCSS, and serverless/edge deployments",
      "Good communication skills and self-direction"
    ]
  },
  "seo-geo-specialist": {
    slug: "seo-geo-specialist",
    title: "SEO & Generative Search (GEO) Specialist",
    department: "Growth Marketing",
    type: "Full-time",
    location: "Noida / Hybrid",
    experience: "2+ Years",
    description: "Looking for a proactive SEO Specialist to drive organic traffic and AI search engine visibility across client platforms.",
    responsibilities: [
      "Conduct technical site audits, schema markup implementation, and site speed optimizations",
      "Develop AEO/GEO content strategies for citations in ChatGPT, Perplexity, and Google AI Overviews",
      "Execute targeted local SEO for Google Business Profiles",
      "Monitor keyword rankings and present monthly client performance reports"
    ],
    requirements: [
      "Proven track record of improving organic keyword rankings",
      "Deep understanding of Google Search Console, Ahrefs, and Schema.org",
      "Knowledge of AI search engines and Generative Engine Optimization"
    ]
  },
  "bpo-team-lead": {
    slug: "bpo-team-lead",
    title: "Back-Office & Operations Team Lead",
    department: "Business Operations",
    type: "Full-time",
    location: "Rudrapur HQ",
    experience: "4+ Years",
    description: "Leading our back-office operations team, enforcing SLA accuracy standards, and managing client client workflows.",
    responsibilities: [
      "Supervise daily data entry, document processing, and customer support desks",
      "Enforce 99.5%+ data accuracy and SLA compliance checks",
      "Train new virtual assistants and conduct performance reviews"
    ],
    requirements: [
      "4+ years experience in BPO or team management",
      "Strong process discipline and communication skills"
    ]
  },
  "digital-sales-executive": {
    slug: "digital-sales-executive",
    title: "Digital Business Development Executive",
    department: "Sales & Client Acquisition",
    type: "Full-time",
    location: "Noida (Delhi NCR)",
    experience: "1-3 Years",
    description: "Drive client acquisition by following up with inbound leads, understanding requirements, and preparing tailored service proposals.",
    responsibilities: [
      "Engage inbound leads via phone, WhatsApp, and email within 15 minutes",
      "Qualify requirements for web development, SEO, and BPO packages",
      "Present project quotes and close client agreements"
    ],
    requirements: [
      "Prior experience in IT sales or agency sales",
      "Excellent verbal and written English/Hindi communication"
    ]
  }
};

interface JobProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(jobDetails).map((slug) => ({ slug }));
}

export default async function JobDetailPage({ params }: JobProps) {
  const resolvedParams = await params;
  const job = jobDetails[resolvedParams.slug];

  if (!job) notFound();

  return (
    <div className="pt-24 pb-16 min-h-screen text-[var(--text-main)]">
      {/* Breadcrumb */}
      <div className="glass-surface border-b border-[var(--border-main)] py-4">
        <div className="container-custom flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <Link href="/careers" className="hover:text-[var(--primary)] transition-colors">
            Careers
          </Link>
          <ChevronRight className="w-4 h-4 text-[var(--text-subtle)]" />
          <span className="text-[var(--text-main)] font-semibold truncate max-w-xs">{job.title}</span>
        </div>
      </div>

      <SectionWrapper className="py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="glass-card border border-[var(--border-main)] rounded-3xl p-8 space-y-4 shadow-sm">
            <span className="px-3.5 py-1 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full text-xs font-bold text-[var(--primary)]">
              {job.department}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)] font-medium">
              <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[var(--primary)]" /> {job.type}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[var(--accent)]" /> {job.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> {job.experience}</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Role Overview</h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed font-normal">{job.description}</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Responsibilities</h2>
              <div className="space-y-2.5">
                {job.responsibilities.map((res: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 glass-card border border-[var(--border-main)] rounded-2xl shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--text-main)] text-sm font-medium">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Requirements</h2>
              <div className="space-y-2.5">
                {job.requirements.map((req: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 glass-card border border-[var(--border-main)] rounded-2xl shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-1" />
                    <span className="text-[var(--text-main)] text-sm font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="glass-card border border-[var(--border-main)] rounded-3xl p-8 md:p-10 space-y-6 shadow-md">
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--text-main)]">Apply for this Position</h2>
              <p className="text-sm text-[var(--text-muted)] mt-1 font-medium">Fill out the form below to submit your job application.</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-2">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Cover Letter / Note</label>
                <textarea
                  rows={4}
                  placeholder="Tell us why you are a great fit for this role..."
                  className="w-full px-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Upload Resume (PDF, max 5MB) *</label>
                <div className="border-2 border-dashed border-[var(--border-main)] rounded-2xl p-6 text-center hover:border-[var(--primary)]/50 transition-colors bg-[var(--bg-main)]/30">
                  <Upload className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)] mb-1 font-medium">Click or drag your PDF resume here</p>
                  <input type="file" accept=".pdf" className="hidden" id="resume-upload" />
                  <label htmlFor="resume-upload" className="cursor-pointer text-xs font-bold text-[var(--primary)] hover:underline">
                    Browse Files
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-2xl hover:bg-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--primary)]/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm shadow-md"
              >
                Submit Application
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
