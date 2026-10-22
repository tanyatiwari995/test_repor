import { redirect } from "next/navigation";
import type { Metadata } from "next";

interface ServiceDetailPhpProps {
  searchParams: Promise<{
    url?: string;
    action?: string;
  }>;
}

const legacyServiceMap: Record<string, { pillar: string; service: string }> = {
  // Legacy query slugs
  responsive_website_design: { pillar: "digital-engineering", service: "website-design" },
  "website-design": { pillar: "digital-engineering", service: "website-design" },
  digital_marketing: { pillar: "growth-marketing", service: "seo" },
  "digital-marketing": { pillar: "growth-marketing", service: "seo" },
  "e-commerce-portals": { pillar: "digital-engineering", service: "ecommerce-portal" },
  "ecommerce-portal": { pillar: "digital-engineering", service: "ecommerce-portal" },
  "logo-design": { pillar: "digital-engineering", service: "logo-brand-identity" },
  "logo-brand-identity": { pillar: "digital-engineering", service: "logo-brand-identity" },
  "andriod-app": { pillar: "digital-engineering", service: "android-app-development" },
  "android-app-development": { pillar: "digital-engineering", service: "android-app-development" },
  "bulk-sms": { pillar: "growth-marketing", service: "lead-generation" },
  "lead-management": { pillar: "digital-engineering", service: "lead-management" },
  "attandance-management": { pillar: "digital-engineering", service: "attendance-management" },
  "attendance-management": { pillar: "digital-engineering", service: "attendance-management" },
  Outsourcing_Services: { pillar: "business-operations", service: "back-office-data-entry" },
  outsourcing_services: { pillar: "business-operations", service: "back-office-data-entry" },
  "back-office-data-entry": { pillar: "business-operations", service: "back-office-data-entry" },
  seo: { pillar: "growth-marketing", service: "seo" },
  "social-media-management": { pillar: "growth-marketing", service: "social-media-management" },
  "social-media": { pillar: "growth-marketing", service: "social-media-management" },
  "ads-management": { pillar: "growth-marketing", service: "ads-management" },
  ads: { pillar: "growth-marketing", service: "ads-management" },
  "app-store-optimization": { pillar: "growth-marketing", service: "app-store-optimization" },
  "app-store": { pillar: "growth-marketing", service: "app-store-optimization" },
  "content-writing": { pillar: "growth-marketing", service: "content-writing" },
  "lead-generation": { pillar: "growth-marketing", service: "lead-generation" },
  "virtual-assistant": { pillar: "business-operations", service: "virtual-assistant" },
  "finance-accounting": { pillar: "business-operations", service: "finance-accounting" },
  finance: { pillar: "business-operations", service: "finance-accounting" },
  "it-helpdesk": { pillar: "business-operations", service: "it-helpdesk" },
  "rural-economic-development": { pillar: "business-operations", service: "rural-economic-development" },
  rural: { pillar: "business-operations", service: "rural-economic-development" },
  "investment-insurance": { pillar: "business-operations", service: "investment-insurance" },
  investment: { pillar: "business-operations", service: "investment-insurance" },
  "startup-advice": { pillar: "business-operations", service: "startup-advice" },
  startup: { pillar: "business-operations", service: "startup-advice" },
};

export async function generateMetadata({ searchParams }: ServiceDetailPhpProps): Promise<Metadata> {
  const resolved = await searchParams;
  const key = resolved.url || "responsive_website_design";
  const target = legacyServiceMap[key] || { pillar: "digital-engineering", service: "website-design" };
  return {
    title: `Service Detail | Tenacious Hub`,
    description: `Explore professional ${target.service} services by Tenacious Hub.`,
  };
}

export default async function ServiceDetailPhpPage({ searchParams }: ServiceDetailPhpProps) {
  const resolved = await searchParams;
  const key = resolved.url || "responsive_website_design";
  const target = legacyServiceMap[key] || { pillar: "digital-engineering", service: "website-design" };

  // Redirect cleanly to the modern Next.js route
  redirect(`/services/${target.pillar}/${target.service}`);
}
