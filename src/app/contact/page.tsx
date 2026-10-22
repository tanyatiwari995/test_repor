import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, MessageSquare, Headphones } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeLocationsMap } from "@/components/ui/OfficeLocationsMap";

export const metadata: Metadata = {
  title: "Contact Us | Tenacious Hub — Noida & Rudrapur Offices",
  description:
    "Get in touch with Tenacious Hub. Corporate Office in Noida (Delhi NCR) and Regional Office in Rudrapur, Uttarakhand. Call (+91) 9105267000 or email sales@tenacioushub.com.",
  openGraph: {
    title: "Contact Us | Tenacious Hub",
    description: "Connect with our technology, marketing, and business operations specialists.",
    url: "https://www.tenacioushub.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div id="main-content">
      {/* Hero Header */}
      <section className="relative pt-32 pb-14 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
        </div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-[var(--primary)] tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 shadow-sm">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-[var(--text-main)]">
            Let&apos;s Start a{" "}
            <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Have a project in mind, need technical advisory, or want a custom quotation? Reach out directly to our corporate and regional teams.
          </p>
        </div>
      </section>

      {/* 3 Top Contact Cards (Matching Official Tenacious Hub Bar) */}
      <section className="relative -mt-6 z-20 pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Office Locations */}
            <div className="p-6 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl flex flex-col items-center text-center group hover:border-[var(--primary)]/40 transition-all">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[var(--text-main)] text-lg mb-2">Office Locations</h3>
              <div className="text-xs text-[var(--text-muted)] space-y-1.5 leading-relaxed font-medium">
                <p>
                  <strong className="text-[var(--text-main)] font-bold">Delhi NCR:</strong> F 294, Sector 63, Noida, UP 201309
                </p>
                <p>
                  <strong className="text-[var(--text-main)] font-bold">Rudrapur:</strong> Gangapur Road, Rudrapur, UK 263153
                </p>
              </div>
            </div>

            {/* Card 2: Call & WhatsApp */}
            <div className="p-6 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl flex flex-col items-center text-center group hover:border-[var(--primary)]/40 transition-all">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[var(--text-main)] text-lg mb-2">Call & WhatsApp</h3>
              <div className="text-sm font-bold space-y-1.5">
                <a
                  href="https://wa.me/919105267000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[var(--text-main)] hover:text-emerald-500 transition-colors"
                >
                  <span className="text-xs text-emerald-500">WA:</span> (+91) 9105267000
                </a>
                <a
                  href="https://wa.me/919105367000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[var(--text-main)] hover:text-emerald-500 transition-colors"
                >
                  <span className="text-xs text-emerald-500">WA:</span> (+91) 9105367000
                </a>
              </div>
            </div>

            {/* Card 3: 24/7 Online Support */}
            <div className="p-6 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl flex flex-col items-center text-center group hover:border-[var(--primary)]/40 transition-all">
              <div className="w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[var(--text-main)] text-lg mb-2">24/7 Online Support</h3>
              <div className="text-sm font-bold space-y-1.5">
                <a
                  href="mailto:sales@tenacioushub.com"
                  className="block text-[var(--text-main)] hover:text-[var(--primary)] transition-colors"
                >
                  sales@tenacioushub.com
                </a>
                <a
                  href="mailto:info@tenacioushub.in"
                  className="block text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-xs font-semibold"
                >
                  info@tenacioushub.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Office Location Maps Tabs (Left) + Contact Form (Right) */}
      <SectionWrapper className="pb-24 pt-4 transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Office Locations with Map Tabs */}
            <div className="lg:col-span-6 space-y-6">
              <OfficeLocationsMap />

              {/* Direct Quote Link Box */}
              <div className="p-6 rounded-2xl glass-card border border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[var(--text-main)] text-sm mb-1">Looking for a Project Estimate?</h4>
                  <p className="text-xs text-[var(--text-muted)]">Get a comprehensive scope and timeline proposal in minutes.</p>
                </div>
                <Link
                  href="/get-a-quote"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white font-bold rounded-full text-xs shadow-lg shadow-[var(--primary)]/20 hover:bg-[var(--primary-light)] transition-all cursor-pointer"
                >
                  Get a Free Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
