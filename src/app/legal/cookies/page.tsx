import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy | Tenacious Hub",
  description: "Cookie Policy for tenacioushub.com — what cookies we use and how to manage them.",
};

export default function CookiesPage() {
  return (
    <div id="main-content">
      <section className="relative pt-32 pb-16 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="container-custom max-w-3xl">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[var(--text-main)]">Cookie Policy</h1>
          <p className="text-[var(--text-muted)] font-normal">Last updated: 2026</p>
        </div>
      </section>
      <SectionWrapper className="py-16 transition-colors">
        <div className="container-custom max-w-3xl prose dark:prose-invert prose-slate max-w-none">
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience.</p>
          <h2>Types of Cookies We Use</h2>
          <h3>Necessary Cookies</h3>
          <p>These cookies are essential for the website to function. They cannot be disabled.</p>
          <h3>Analytics Cookies</h3>
          <p>We use Google Analytics 4 (with your consent) to understand how visitors interact with our website. Data is anonymised where possible.</p>
          <h3>Marketing Cookies</h3>
          <p>Facebook Pixel and Meta advertising cookies (with your consent) allow us to personalise ads and measure campaign effectiveness.</p>
          <h2>Managing Cookies</h2>
          <p>You can manage your cookie preferences at any time using the cookie consent banner at the bottom of the page, or by clearing cookies in your browser settings.</p>
          <h2>Contact</h2>
          <p>Cookie enquiries: <a href="mailto:sales@tenacioushub.com">sales@tenacioushub.com</a></p>
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex gap-4 text-sm">
            <Link href="/legal/terms" className="text-primary hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link href="/legal/privacy" className="text-primary hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/legal/refund" className="text-primary hover:text-accent transition-colors">Refund Policy</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
