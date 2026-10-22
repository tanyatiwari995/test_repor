"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  TrendingUp,
  Briefcase,
  Phone,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    name: "Digital Engineering",
    href: "/services/digital-engineering",
    icon: Globe,
    color: "text-blue-600 dark:text-blue-400",
    description: "Build powerful digital products",
    services: [
      { name: "Website Design & Development", href: "/services/digital-engineering/website-design" },
      { name: "E-Commerce & Portal Design", href: "/services/digital-engineering/ecommerce-portal" },
      { name: "Android App Development", href: "/services/digital-engineering/android-app-development" },
      { name: "Logo & Brand Identity", href: "/services/digital-engineering/logo-brand-identity" },
      { name: "Attendance Management", href: "/services/digital-engineering/attendance-management" },
      { name: "Lead Management Software", href: "/services/digital-engineering/lead-management" },
    ],
  },
  {
    name: "Growth Marketing",
    href: "/services/growth-marketing",
    icon: TrendingUp,
    color: "text-teal-600 dark:text-cyan-400",
    description: "Scale your reach & revenue",
    services: [
      { name: "Search Engine Optimization", href: "/services/growth-marketing/seo" },
      { name: "Social Media Management", href: "/services/growth-marketing/social-media-management" },
      { name: "Ads Management", href: "/services/growth-marketing/ads-management" },
      { name: "App Store Optimization", href: "/services/growth-marketing/app-store-optimization" },
      { name: "Content Writing", href: "/services/growth-marketing/content-writing" },
      { name: "Lead Generation", href: "/services/growth-marketing/lead-generation" },
    ],
  },
  {
    name: "Business Operations",
    href: "/services/business-operations",
    icon: Briefcase,
    color: "text-emerald-600 dark:text-emerald-400",
    description: "Optimize operations & advisory",
    services: [
      { name: "Back Office & Data Entry", href: "/services/business-operations/back-office-data-entry" },
      { name: "Virtual Assistant & Operations", href: "/services/business-operations/virtual-assistant" },
      { name: "Finance & Accounting Advisory", href: "/services/business-operations/finance-accounting" },
      { name: "IT Managed Helpdesk", href: "/services/business-operations/it-helpdesk" },
      { name: "Rural Economic Development", href: "/services/business-operations/rural-economic-development" },
      { name: "Investment & Insurance", href: "/services/business-operations/investment-insurance" },
      { name: "Startup Advice", href: "/services/business-operations/startup-advice" },
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Services", href: "/services", hasMega: true },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-white focus:rounded-full"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-[#f8f9fa]/95 dark:bg-[#090a0f]/95 backdrop-blur-2xl border-b border-[var(--border-main)] shadow-md shadow-black/5 dark:shadow-black/50"
            : "py-3.5 bg-[#f8f9fa]/90 dark:bg-[#090a0f]/90 backdrop-blur-xl border-b border-[var(--border-main)]/60 shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-black/5 dark:bg-white/10 p-0.5 border border-black/10 dark:border-white/15 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.jpg"
                  alt="Tenacious Hub Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-bold text-[var(--text-main)] tracking-tight leading-tight">
                  Tenacious<span className="text-gradient"> Hub</span>
                </span>
                <span className="text-[9px] text-[var(--text-muted)] tracking-[0.12em] uppercase leading-none hidden sm:block font-bold">
                  Technology & Operations
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsMegaOpen(true)}
                    onMouseLeave={() => setIsMegaOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMegaOpen(false)}
                      className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] rounded-full hover:bg-[var(--primary)]/8 dark:hover:bg-white/10 transition-all duration-200"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isMegaOpen ? "rotate-180 text-[var(--primary)]" : ""
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {isMegaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute top-full right-[-100px] lg:right-[-140px] xl:left-1/2 xl:-translate-x-1/2 pt-3 z-50 max-w-[calc(100vw-2rem)]"
                        >
                          <div className="bg-[#ffffff] dark:bg-[#0c0d14] rounded-2xl shadow-2xl dark:shadow-black/90 p-6 w-[740px] max-w-[calc(100vw-2rem)] border border-black/10 dark:border-white/15">
                            <div className="grid grid-cols-3 gap-6">
                              {pillars.map((pillar) => (
                                <div key={pillar.name} className="space-y-3">
                                  <Link
                                    href={pillar.href}
                                    onClick={() => setIsMegaOpen(false)}
                                    className="flex items-center gap-2 group/pillar"
                                  >
                                    <div className="w-8 h-8 rounded-xl bg-[var(--primary)]/10 dark:bg-white/10 flex items-center justify-center">
                                      <pillar.icon className={`w-4 h-4 ${pillar.color}`} />
                                    </div>
                                    <div>
                                      <span className="font-bold text-[13px] text-[var(--text-main)] group-hover/pillar:text-[var(--primary)] transition-colors block">
                                        {pillar.name}
                                      </span>
                                      <span className="text-[11px] text-[var(--text-muted)] font-medium">{pillar.description}</span>
                                    </div>
                                  </Link>
                                  <ul className="space-y-0.5">
                                    {pillar.services.map((service) => (
                                      <li key={service.name}>
                                        <Link
                                          href={service.href}
                                          onClick={() => setIsMegaOpen(false)}
                                          className="block px-3 py-1.5 text-[12px] font-medium text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 dark:hover:bg-white/8 rounded-lg transition-all duration-200"
                                        >
                                          {service.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            <div className="mt-5 pt-4 border-t border-[var(--border-main)] flex items-center justify-between">
                              <p className="text-[11px] text-[var(--text-muted)] font-medium">
                                Explore our specialized digital engineering, growth, and ops pillars.
                              </p>
                              <Link
                                href="/services"
                                onClick={() => {
                                  setIsMegaOpen(false);
                                  if (typeof window !== "undefined" && window.location.pathname === "/services") {
                                    window.scrollTo({ top: 400, behavior: "smooth" });
                                  }
                                }}
                                className="text-[12px] font-bold text-[var(--primary)] hover:text-[var(--primary-light)] flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                View All Services
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1.5 text-[13px] font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] rounded-full hover:bg-[var(--primary)]/8 dark:hover:bg-white/10 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Theme Toggle + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/get-a-quote"
                className="hidden md:inline-flex items-center gap-1.5 px-4.5 py-2 bg-[var(--primary)] text-white text-[13px] font-bold rounded-full hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300 shadow-md shadow-[var(--primary)]/25 shrink-0"
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:+919105267000"
                className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold text-[var(--text-main)] hover:text-[var(--primary)] hover:bg-black/5 dark:hover:bg-white/8 rounded-full transition-all duration-200 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>+91 91052 67000</span>
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-full text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/8 transition-colors"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav — Glass Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              background: "var(--bg-main)",
              backdropFilter: "blur(40px) saturate(180%)",
            }}
          >
            <div className="pt-24 px-6 pb-8 h-full overflow-y-auto flex flex-col justify-between">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3.5 text-lg font-semibold text-[var(--text-main)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 rounded-2xl transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                    {link.hasMega && (
                      <div className="pl-4 mt-1 space-y-0.5">
                        {pillars.map((pillar) => (
                          <Link
                            key={pillar.name}
                            href={pillar.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors rounded-xl"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[var(--primary)]/8 dark:bg-white/8 flex items-center justify-center">
                              <pillar.icon className={`w-3.5 h-3.5 ${pillar.color}`} />
                            </div>
                            {pillar.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between p-4 glass-card rounded-2xl">
                  <span className="text-sm font-semibold text-[var(--text-main)]">Theme Mode</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/get-a-quote"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[var(--primary)] text-white font-semibold rounded-2xl shadow-lg shadow-[var(--primary)]/20"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919105267000"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 glass-card text-[var(--text-main)] font-semibold rounded-2xl"
                >
                  <Phone className="w-4 h-4 text-[var(--primary)]" />
                  +91 91052 67000
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
