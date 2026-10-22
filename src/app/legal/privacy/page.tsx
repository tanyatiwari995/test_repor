import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | Tenacious Hub",
  description: "Privacy Policy for Tenacious Hub — how we collect, use, and protect your personal data in accordance with India's DPDP Act.",
};

export default function PrivacyPage() {
  return (
    <div id="main-content">
      <section className="relative pt-32 pb-16 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="container-custom max-w-3xl">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[var(--text-main)]">Privacy Policy</h1>
          <p className="text-[var(--text-muted)] font-normal">Last updated: 2026</p>
        </div>
      </section>
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom max-w-3xl prose dark:prose-invert prose-slate max-w-none">
          <p className="text-slate-500 dark:text-white/50 text-sm italic mb-8">
            TODO_CONFIRM: This policy must be reviewed and completed by legal counsel, particularly to comply with India&apos;s Digital Personal Data Protection (DPDP) Act 2023.
          </p>
          <h2>1. Data Controller</h2>
          <p>Tenacious Hub Private Limited (&quot;we&quot;, &quot;us&quot;) is the data controller for personal data collected through this website.</p>
          <h2>2. What Data We Collect</h2>
          <ul>
            <li>Name, email address, phone number submitted via contact forms</li>
            <li>Website URL submitted for SEO audit requests</li>
            <li>Usage data (analytics) — only with your consent</li>
            <li>Job application data including CV/resume</li>
          </ul>
          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To respond to your enquiries and provide requested services</li>
            <li>To send you our newsletter (with your explicit consent)</li>
            <li>To improve our website and services (anonymised analytics)</li>
          </ul>
          <h2>4. Data Retention</h2>
          <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, or as required by law. You may request deletion at any time.</p>
          <h2>5. Your Rights (DPDP Act / GDPR)</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:sales@tenacioushub.com">sales@tenacioushub.com</a>.</p>
          <h2>6. Cookies</h2>
          <p>See our <Link href="/legal/cookies">Cookie Policy</Link> for details on how we use cookies.</p>
          <h2>7. Contact</h2>
          <p>Data privacy enquiries: <a href="mailto:sales@tenacioushub.com">sales@tenacioushub.com</a> | +91 91052 67000</p>
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex gap-4 text-sm">
            <Link href="/legal/terms" className="text-primary hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/legal/refund" className="text-primary hover:text-accent transition-colors">Refund Policy</Link>
            <Link href="/legal/cookies" className="text-primary hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
