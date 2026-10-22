import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tenacious Hub",
  description: "Terms and Conditions for using Tenacious Hub's services and website.",
};

export default function TermsPage() {
  return (
    <div id="main-content">
      <section className="relative pt-32 pb-16 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="container-custom max-w-3xl">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[var(--text-main)]">Terms &amp; Conditions</h1>
          <p className="text-[var(--text-muted)] font-normal">Last updated: 2026</p>
        </div>
      </section>
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom max-w-3xl prose dark:prose-invert prose-slate max-w-none">
          <p className="text-slate-500 dark:text-white/50 text-sm italic mb-8">
            TODO_CONFIRM: This page requires legal review and final content from Tenacious Hub Private Limited before publishing. The placeholder below outlines the expected structure.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using tenacioushub.com, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
          <h2>2. Services</h2>
          <p>Tenacious Hub Private Limited provides digital technology, marketing, and business operations services as described on this website.</p>
          <h2>3. Intellectual Property</h2>
          <p>All content, designs, and materials on this website are the property of Tenacious Hub Private Limited unless otherwise stated.</p>
          <h2>4. Limitation of Liability</h2>
          <p>TODO_CONFIRM: Full limitation of liability clause to be added by legal counsel.</p>
          <h2>5. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.</p>
          <h2>6. Contact</h2>
          <p>For any queries about these terms, contact us at <a href="mailto:sales@tenacioushub.com">sales@tenacioushub.com</a> or call <a href="tel:+919105267000">+91 91052 67000</a>.</p>
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex gap-4 text-sm">
            <Link href="/legal/privacy" className="text-primary hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/legal/refund" className="text-primary hover:text-accent transition-colors">Refund Policy</Link>
            <Link href="/legal/cookies" className="text-primary hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
