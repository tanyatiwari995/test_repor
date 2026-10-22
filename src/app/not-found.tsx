import Link from "next/link";
import { ArrowLeft, Search, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient text-[var(--text-main)] transition-colors duration-500">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--primary)]/10 rounded-full blur-[140px]" />
      </div>

      <div className="container-custom relative z-10 text-center max-w-2xl mx-auto py-32">
        {/* 404 number */}
        <div className="text-[150px] md:text-[200px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-[var(--primary)]/25 to-transparent select-none mb-0">
          404
        </div>

        <div className="space-y-4 -mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-md mx-auto leading-relaxed font-normal">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or the URL might be mistyped.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mb-10">
          {[
            { icon: Home, label: "Go Home", href: "/" },
            { icon: Search, label: "Our Services", href: "/services" },
            { icon: Phone, label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center gap-2 p-4 rounded-2xl glass-card border border-[var(--glass-border)] shadow-sm hover:border-[var(--primary)]/40 hover:shadow-md transition-all text-sm font-bold text-[var(--text-main)]"
            >
              <item.icon className="w-4 h-4 text-[var(--primary)]" />
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
