import Link from "next/link";
import {
  Globe,
  TrendingUp,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);


const pillars = [
  {
    name: "Digital Engineering",
    href: "/services/digital-engineering",
    icon: Globe,
    services: [
      { name: "Website Design", href: "/services/digital-engineering/website-design" },
      { name: "E-Commerce", href: "/services/digital-engineering/ecommerce-portal" },
      { name: "App Development", href: "/services/digital-engineering/android-app-development" },
      { name: "Logo & Branding", href: "/services/digital-engineering/logo-brand-identity" },
    ],
  },
  {
    name: "Growth Marketing",
    href: "/services/growth-marketing",
    icon: TrendingUp,
    services: [
      { name: "SEO", href: "/services/growth-marketing/seo" },
      { name: "Social Media", href: "/services/growth-marketing/social-media-management" },
      { name: "Ads Management", href: "/services/growth-marketing/ads-management" },
      { name: "Content Writing", href: "/services/growth-marketing/content-writing" },
    ],
  },
  {
    name: "Business Operations",
    href: "/services/business-operations",
    icon: Briefcase,
    services: [
      { name: "Back Office & BPO", href: "/services/business-operations/back-office-data-entry" },
      { name: "Virtual Assistant", href: "/services/business-operations/virtual-assistant" },
      { name: "Finance Advisory", href: "/services/business-operations/finance-accounting" },
      { name: "IT Helpdesk", href: "/services/business-operations/it-helpdesk" },
    ],
  },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Case Studies", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Terms & Conditions", href: "/legal/terms" },
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Refund Policy", href: "/legal/refund" },
  { name: "Cookie Policy", href: "/legal/cookies" },
];

const socials = [
  { name: "Facebook", icon: FacebookIcon, href: "https://facebook.com/tenacioushub" },
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com/tenacioushub" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/company/tenacious-hub/" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com/tenacioushub" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#f1f3f5] dark:bg-[#070709] text-[var(--text-main)] overflow-hidden border-t border-[var(--border-main)] transition-colors duration-400">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[var(--primary)]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      {/* Newsletter Section */}
      <div className="border-b border-[var(--border-main)]">
        <div className="container-custom py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--text-main)] mb-2 tracking-tight">
                Stay ahead of the curve
              </h3>
              <p className="text-[var(--text-muted)] text-sm max-w-md leading-relaxed font-normal">
                Get the latest insights on digital strategy, tech trends, and business growth
                delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-white dark:bg-white/10 border border-zinc-300 dark:border-white/20 rounded-full text-[var(--text-main)] placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 w-full md:w-72 transition-all duration-300 text-sm font-medium shadow-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-full hover:bg-[var(--primary-light)] hover:scale-[1.03] transition-all duration-300 whitespace-nowrap text-sm shadow-md shadow-[var(--primary)]/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-black/5 dark:bg-white/10 p-0.5 border border-black/10 dark:border-white/15 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.jpg"
                  alt="Tenacious Hub Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-[var(--text-main)] tracking-tight">
                Tenacious<span className="text-gradient"> Hub</span>
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-xs font-normal">
              Digital technology and management-consulting firm delivering
              engineering, marketing, and business operations solutions.
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="tel:+919105267000"
                  className="flex items-center gap-2.5 text-[var(--text-main)] hover:text-[var(--primary)] font-semibold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                  <span>+91 91052 67000 / 91053 67000</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:sales@tenacioushub.com"
                  className="flex items-center gap-2.5 text-[var(--text-main)] hover:text-[var(--primary)] font-semibold transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                  <span>sales@tenacioushub.com</span>
                </a>
                <a
                  href="mailto:info@tenacioushub.in"
                  className="block text-xs text-[var(--text-muted)] hover:text-[var(--primary)] pl-6.5 font-medium transition-colors"
                >
                  info@tenacioushub.in
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[var(--text-muted)] font-medium text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://www.google.com/maps/place/Tenacious+Hub+Pvt+Ltd/@28.6211304,77.3885094,17z/data=!3m1!4b1!4m6!3m5!1s0x390ceff4c29d77d1:0xa8f573d840307ee0!8m2!3d28.6211304!4d77.3885094!16s%2Fg%2F11tmsklpzc?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--text-main)] block hover:text-[var(--primary)] transition-colors"
                  >
                    Noida (Delhi NCR): F 294, Sector 63, UP 201309
                  </a>
                  <span>Rudrapur: Gangapur Road, Uttarakhand 263153</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Pillars */}
          {pillars.map((pillar) => (
            <div key={pillar.name}>
              <Link
                href={pillar.href}
                className="flex items-center gap-1.5 text-[var(--text-main)] font-bold text-sm mb-4 hover:text-[var(--primary)] transition-colors duration-200"
              >
                <pillar.icon className="w-4 h-4 text-[var(--primary)]" />
                <span>{pillar.name}</span>
              </Link>
              <ul className="space-y-2.5">
                {pillar.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] font-medium transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company */}
          <div>
            <h4 className="text-[var(--text-main)] font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-main)]">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] font-medium">
            <span>© {new Date().getFullYear()} Tenacious Hub Pvt. Ltd. All rights reserved.</span>
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[var(--primary)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 rounded-full bg-white dark:bg-white/10 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-[var(--text-main)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 shadow-sm"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
