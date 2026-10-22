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
  specialties: string[];
  department: "Leadership" | "Growth Marketing" | "Digital Engineering" | "Business Operations";
  isFounder?: boolean;
}

export const founderMember: TeamMember = {
  slug: "vaibhav-sheel-pandey",
  name: "Vaibhav Sheel Pandey",
  role: "Founder & Managing Director",
  title: "Founder & Managing Director",
  office: "Noida (UP) & Rudrapur (Uttarakhand)",
  photo: "/team/vaibhav.jpg",
  bio: `Vaibhav Sheel Pandey founded Tenacious Hub with a vision to bring enterprise-grade digital capabilities to businesses of all sizes. With deep expertise spanning web engineering, performance marketing, and BPO operations, he has led the firm from a focused web design practice to a full-stack digital technology and management-consulting company serving clients across India and globally.

A firm believer in outcome-over-output, Vaibhav personally oversees client strategy and ensures every engagement is grounded in measurable business impact.`,
  quote: "Our mission is to bridge technical excellence and operational execution for businesses so they can scale with predictability and efficiency.",
  responsibilities: [
    "Strategic roadmap and company growth direction",
    "Key enterprise account strategy & leadership",
    "Pillar innovation across Engineering, Growth, and BPO operations",
  ],
  experience: "10+ Years Industry Leadership",
  specialties: [
    "Digital Strategy & Architecture",
    "Business Development & Partnerships",
    "BPO Operations Management",
    "Growth Marketing Oversight",
  ],
  department: "Leadership",
  isFounder: true,
};

export const leadershipTeam: TeamMember[] = [
  {
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    role: "Head of Growth Marketing",
    title: "Head of Growth Marketing",
    office: "Noida Office",
    photo: null,
    bio: "Ananya Sharma leads the Growth Marketing division at Tenacious Hub, overseeing search engine optimization, paid media campaigns, and Generative Engine Optimization (GEO).",
    quote: "Marketing in 2026 demands AI search visibility, high-intent targeting, and ruthless focus on conversion tracking.",
    responsibilities: [
      "Client SEO & GEO organic search campaigns",
      "PPC media budgets and ROAS optimization",
      "Performance content writing team guidance",
    ],
    experience: "8+ Years Growth Marketing",
    specialties: [
      "SEO & GEO Engine Optimization",
      "Paid Performance Ad Campaigns",
      "Conversion Rate Optimization (CRO)",
      "High-Intent Lead Funnels",
    ],
    department: "Growth Marketing",
  },
  {
    slug: "rohit-verma",
    name: "Rohit Verma",
    role: "VP of Software Engineering",
    title: "VP of Software Engineering",
    office: "Noida (Corporate) Office",
    photo: null,
    bio: "Rohit Verma directs technical software engineering, website architecture, mobile apps, and attendance management software development.",
    quote: "Clean, modular code and sub-second page performance are non-negotiable standards for modern web applications.",
    responsibilities: [
      "Next.js, React & Node.js application architecture",
      "Android mobile app development & API design",
      "Cybersecurity and code quality standards",
    ],
    experience: "9+ Years Technical Architecture",
    specialties: [
      "Next.js App Router Architecture",
      "REST & GraphQL Microservices",
      "Android Native & Hybrid Development",
      "Cloud Infrastructure & Security",
    ],
    department: "Digital Engineering",
  },
  {
    slug: "megha-gupta",
    name: "Megha Gupta",
    role: "Director of Business Operations & BPO",
    title: "Director of Business Operations & BPO",
    office: "Rudrapur HQ",
    photo: null,
    bio: "Megha Gupta manages back-office operations, virtual assistant desk teams, data entry accuracy standards, and financial accounting support.",
    quote: "Precision and SLA compliance are the cornerstones of successful back-office outsourcing.",
    responsibilities: [
      "BPO team management and QA audits",
      "Virtual Assistant deployment workflows",
      "Financial advisory and bookkeeping oversight",
    ],
    experience: "7+ Years Operations Management",
    specialties: [
      "Enterprise BPO Workflow Automation",
      "Virtual Assistant Desk Leadership",
      "Financial Reporting & Compliance",
      "SLA & Quality Assurance",
    ],
    department: "Business Operations",
  },
];

export const allTeamMembers: TeamMember[] = [founderMember, ...leadershipTeam];

export const teamDataMap: Record<string, TeamMember> = Object.fromEntries(
  allTeamMembers.map((member) => [member.slug, member])
);
