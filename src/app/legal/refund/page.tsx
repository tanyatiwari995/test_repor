import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Refund Policy | Tenacious Hub",
  description: "Refund and cancellation policy for Tenacious Hub services.",
};

export default function RefundPage() {
  return (
    <div id="main-content">
      <section className="relative pt-32 pb-16 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="container-custom max-w-3xl">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[var(--text-main)]">Refund Policy</h1>
          <p className="text-[var(--text-muted)] font-normal">Last updated: 2026</p>
        </div>
      </section>
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom max-w-3xl prose dark:prose-invert prose-slate max-w-none">
          <p className="text-slate-500 dark:text-white/50 text-sm italic mb-8">
            TODO_CONFIRM: Refund terms must be finalised with the company before publishing.
          </p>
          <h2>1. Project-Based Services</h2>
          <p>For fixed-price project engagements, refund eligibility depends on the stage of delivery. Deposits paid to commence work are generally non-refundable once the project has been initiated.</p>
          <h2>2. Monthly Retainers</h2>
          <p>Monthly retainer services may be cancelled with 30 days written notice. Partial months are billed in full.</p>
          <h2>3. Dispute Resolution</h2>
          <p>We are committed to resolving any service concerns. Please contact us at <a href="mailto:sales@tenacioushub.com">sales@tenacioushub.com</a> before initiating any formal dispute.</p>
          <h2>4. Contact</h2>
          <p>For refund enquiries: <a href="mailto:sales@tenacioushub.com">sales@tenacioushub.com</a> | +91 91052 67000</p>
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex gap-4 text-sm">
            <Link href="/legal/terms" className="text-primary hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/legal/privacy" className="text-primary hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/legal/cookies" className="text-primary hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
