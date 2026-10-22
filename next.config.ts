import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about-us.php", destination: "/about", permanent: true },
      { source: "/founder.php", destination: "/team", permanent: true },
      { source: "/package.php", destination: "/pricing", permanent: true },
      { source: "/blog.php", destination: "/blog", permanent: true },
      { source: "/contact-us.php", destination: "/contact", permanent: true },
      { source: "/terms.php", destination: "/legal/terms", permanent: true },
      { source: "/privacy.php", destination: "/legal/privacy", permanent: true },
      { source: "/refund.php", destination: "/legal/refund", permanent: true },
      { source: "/service.php", destination: "/services/digital-engineering", permanent: true },
      { source: "/marketing.php", destination: "/services/growth-marketing", permanent: true },
      { source: "/seo.php", destination: "/services/growth-marketing/seo", permanent: true },
      { source: "/social-media.php", destination: "/services/growth-marketing/social-media-management", permanent: true },
      { source: "/ads.php", destination: "/services/growth-marketing/ads-management", permanent: true },
      { source: "/app-store.php", destination: "/services/growth-marketing/app-store-optimization", permanent: true },
      { source: "/content-writing.php", destination: "/services/growth-marketing/content-writing", permanent: true },
      { source: "/lead-generation.php", destination: "/services/growth-marketing/lead-generation", permanent: true },
      { source: "/outsourcing.php", destination: "/services/business-operations/back-office-data-entry", permanent: true },
      { source: "/finance.php", destination: "/services/business-operations/finance-accounting", permanent: true },
      { source: "/investment.php", destination: "/services/business-operations/investment-insurance", permanent: true },
      { source: "/startup.php", destination: "/services/business-operations/startup-advice", permanent: true },
      { source: "/rural.php", destination: "/services/business-operations/rural-economic-development", permanent: true },
      { source: "/attandance-management.php", destination: "/services/digital-engineering/attendance-management", permanent: true },
      { source: "/lead-management.php", destination: "/services/digital-engineering/lead-management", permanent: true },
    ];
  },
};

export default nextConfig;
