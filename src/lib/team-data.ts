export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  title: string;
  office: string;
  bio: string;
  quote?: string;
  photo?: string | null;
  responsibilities: string[];
  experience: string;
  education: string[];
  certifications: string[];
  specialties: string[];
  department: "Executive Leadership";
  isFounder: boolean;
}

export const founderMember: TeamMember = {
  slug: "vaibhav-sheel-pandey",
  name: "Vaibhav Sheel Pandey",
  role: "Founder & Managing Director",
  title: "Founder & Managing Director",
  office: "Noida (Delhi NCR) & Rudrapur (Uttarakhand)",
  photo: "/team/vaibhav.jpg",
  bio: `Vaibhav Sheel Pandey is the founder and Managing Director of Tenacious Hub Private Limited. Holding both a B.Tech in Computer Science & Technology and an M.Tech in Information Technology, he merges rigorous technical computer science fundamentals with high-growth digital marketing and strategic business consulting.

With over a decade of hands-on expertise in Google Analytics, Google Ads, and full-funnel digital architecture, Vaibhav has consulted for multinational corporations (MNCs), real estate developers, and fast-growing Indian enterprises. His operational philosophy centers on strategic management — maximizing output from minimal input to build sustainable, predictable revenue engines for local and global businesses.

Under his leadership, Tenacious Hub has grown from a specialized web engineering shop into an integrated digital technology, GEO/AI search, and BPO management consulting firm serving clients across India, North America, and worldwide.`,
  quote: "Our mission is to bridge technical excellence and operational execution for businesses so they can scale with predictability, transparency, and high ROI.",
  responsibilities: [
    "Overall company vision, digital strategy, and enterprise roadmap",
    "Digital marketing architecture & high-intent lead generation funnels",
    "Strategic business management and client growth advisory",
    "Technology governance across Digital Engineering and BPO operations",
  ],
  experience: "10+ Years Industry Leadership & Consulting",
  education: [
    "B.Tech - Computer Science & Technology",
    "M.Tech - Information Technology",
  ],
  certifications: [
    "Google Analytics Certified",
    "Google Ads Professional",
    "Google Search Console & Webmaster Specialist",
    "Google Digital Unlocked Certified",
  ],
  specialties: [
    "Digital Strategy & IT Architecture",
    "Google Analytics & Conversion Tracking",
    "AI SEO & Generative Engine Optimization (GEO)",
    "High-Intent Lead Generation (Real Estate & B2B)",
    "Strategic Management & MNC Consulting",
    "BPO Operations & Delivery Governance",
  ],
  department: "Executive Leadership",
  isFounder: true,
};

export const allTeamMembers: TeamMember[] = [founderMember];

export const teamDataMap: Record<string, TeamMember> = {
  [founderMember.slug]: founderMember,
};
