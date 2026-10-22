import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tenacious Hub — Digital Engineering, Growth Marketing & Business Operations",
    template: "%s | Tenacious Hub",
  },
  description:
    "Tenacious Hub Private Limited is a digital technology and management-consulting firm offering web development, SEO, digital marketing, BPO services, and business advisory. Offices in Noida (Delhi NCR) & Rudrapur (Uttarakhand).",
  keywords: [
    "web design",
    "digital marketing",
    "SEO",
    "BPO services",
    "app development",
    "Noida",
    "Rudrapur",
    "Delhi NCR",
    "Uttarakhand",
    "Tenacious Hub",
  ],
  authors: [{ name: "Tenacious Hub Private Limited" }],
  creator: "Tenacious Hub",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.tenacioushub.com",
    siteName: "Tenacious Hub",
    title: "Tenacious Hub — Digital Engineering, Growth Marketing & Business Operations",
    description:
      "Transform your business with Tenacious Hub. Expert web development, digital marketing, and business operations services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenacious Hub — Digital Engineering, Growth Marketing & Business Operations",
    description:
      "Transform your business with Tenacious Hub. Expert web development, digital marketing, and business operations services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { GlowCursor } from "@/components/ui/GlowCursor";
import { CookieBanner } from "@/components/ui/CookieBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("th_theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-400">
        <ThemeProvider>
          <GlowCursor />
          <Navbar />
          <main id="main-content" className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
