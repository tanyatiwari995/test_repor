export interface ServiceItem {
  slug: string;
  pillarId: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  pricingTeaser: { starter: string; pro: string; enterprise: string };
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroBadge: string;
  color: string;
  bgColor: string;
  textColor: string;
  services: ServiceItem[];
}

export const servicePillarsData: Record<string, ServicePillar> = {
  "digital-engineering": {
    id: "digital-engineering",
    title: "Digital Engineering",
    tagline: "High-performance software, web platforms, and mobile apps built to scale.",
    description: "We craft custom digital platforms, responsive web applications, native Android apps, and custom software systems designed to solve complex business challenges.",
    heroBadge: "Pillar 01 · Engineering Excellence",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    services: [
      {
        slug: "website-design",
        pillarId: "digital-engineering",
        title: "Website Design & Development",
        tagline: "Stunning, high-converting websites tailored to your brand.",
        description: "Responsive, ultra-fast websites designed with modern UX principles, SEO best practices, and seamless CMS integration.",
        longDescription: "Our custom website development service delivers high-converting, mobile-first web platforms built on modern technology stacks like Next.js, React, and React Server Components. We focus on lightning-fast speed, accessibility, and intuitive user experiences that turn site visitors into loyal customers.",
        features: [
          "100% Mobile-first Responsive Layouts",
          "Sub-2-second Page Loading Speed",
          "SEO-Optimized Architecture & Schema",
          "Content Management System Integration",
          "Custom UI/UX Design System",
          "SSL & Security Best Practices"
        ],
        deliverables: [
          "Custom Website Design & Front-end Code",
          "CMS Setup & Admin Access",
          "On-page SEO & OpenGraph Meta Setup",
          "Google Analytics & Tag Manager Configuration",
          "User Manual & Technical Documentation"
        ],
        process: [
          { step: "01", title: "Discovery & Blueprint", desc: "Understanding your business goals, target audience, and brand requirements." },
          { step: "02", title: "UI/UX & Wireframing", desc: "Crafting modern layouts, visual prototypes, and interactive wireframes." },
          { step: "03", title: "Development & Testing", desc: "Writing clean, semantic code with comprehensive cross-device QA." },
          { step: "04", title: "Launch & Support", desc: "Deployment to live servers, DNS setup, and post-launch maintenance." }
        ],
        faqs: [
          { question: "How long does a website project take?", answer: "Typical custom websites take 3 to 6 weeks from strategy to deployment depending on complexity." },
          { question: "Will my website be mobile friendly?", answer: "Yes! Every site we build is engineered mobile-first and tested on all major screen sizes." },
          { question: "Can I manage site content myself?", answer: "Absolutely. We build intuitive admin CMS dashboards so your team can easily edit pages, posts, and media." }
        ],
        pricingTeaser: { starter: "₹24,999", pro: "₹49,999", enterprise: "Custom Quote" }
      },
      {
        slug: "ecommerce-portal",
        pillarId: "digital-engineering",
        title: "E-Commerce & Portal Design",
        tagline: "Scalable online stores & customer portals that drive sales.",
        description: "Secure, high-performing online storefronts with integrated payment gateways, inventory management, and smooth checkout workflows.",
        longDescription: "Build revenue-generating e-commerce platforms with custom product catalogs, multi-currency support, Indian & global payment gateway integrations (Razorpay, Stripe, Paytm), inventory automation, and detailed sales analytics.",
        features: [
          "Custom Product Catalogs & Variant Management",
          "Multi-Payment Gateway Integration (Razorpay, Stripe)",
          "Cart Abandonment & Discount Engine",
          "Customer Portal & Order Tracking",
          "Inventory & Order Management Dashboard",
          "Fast & Secure Checkout UX"
        ],
        deliverables: [
          "E-Commerce Front-end Storefront",
          "Admin Order & Product Management Portal",
          "Payment & Shipping API Integrations",
          "Customer Account Dashboard",
          "Security & Fraud Protection Setup"
        ],
        process: [
          { step: "01", title: "Catalog Architecture", desc: "Structuring categories, SKU variations, and payment workflows." },
          { step: "02", title: "Design & UX Flow", desc: "Designing frictionless product discovery, cart, and checkout." },
          { step: "03", title: "Integration & Build", desc: "Connecting payment gateways, SMS gateways, and inventory systems." },
          { step: "04", title: "Launch & Optimization", desc: "Stress testing, load testing, live launch, and conversion tracking." }
        ],
        faqs: [
          { question: "Which payment gateways do you integrate?", answer: "We support Razorpay, PhonePe, Paytm, Stripe, PayPal, and Cash on Delivery (COD) workflows." },
          { question: "Is the online store scalable for thousands of products?", answer: "Yes, our e-commerce solutions use optimized database schemas and CDN caching capable of handling thousands of products and heavy traffic spikes." }
        ],
        pricingTeaser: { starter: "₹39,999", pro: "₹79,999", enterprise: "Custom Quote" }
      },
      {
        slug: "android-app-development",
        pillarId: "digital-engineering",
        title: "Android App Development",
        tagline: "High-performance native & cross-platform Android mobile applications.",
        description: "Feature-rich Android apps engineered with Kotlin, Flutter, and React Native for smooth performance and offline-first capabilities.",
        longDescription: "We build intuitive Android applications that deliver exceptional user experience, offline capabilities, push notifications, secure data synchronization, and Google Play Store compliance.",
        features: [
          "Native Kotlin & Flutter App Engineering",
          "Offline Data Sync & Local Storage",
          "Push Notifications & Firebase Integration",
          "Biometric & Secure OAuth Authentication",
          "REST & GraphQL API Integration",
          "Google Play Store Submission & Compliance"
        ],
        deliverables: [
          "Android Application (APK/AAB)",
          "Source Code & Git Repository",
          "Backend API Integration",
          "Play Store Storefront Assets & Listing",
          "Maintenance & Bug Fix Support"
        ],
        process: [
          { step: "01", title: "App Blueprint", desc: "Defining user personas, app architecture, and API requirements." },
          { step: "02", title: "Mobile UI/UX Design", desc: "Creating Material Design wireframes and interactive prototypes." },
          { step: "03", title: "App Development", desc: "Coding mobile app logic, offline cache, and backend connections." },
          { step: "04", title: "QA & Play Store Launch", desc: "Device matrix testing and submitting to Google Play Store." }
        ],
        faqs: [
          { question: "Do you publish the app to Google Play Store?", answer: "Yes, we handle complete Play Store submission, compliance checks, and privacy policy setup." }
        ],
        pricingTeaser: { starter: "₹49,999", pro: "₹99,999", enterprise: "Custom Quote" }
      },
      {
        slug: "logo-brand-identity",
        pillarId: "digital-engineering",
        title: "Logo & Brand Identity",
        tagline: "Distinct visual identity systems that leave a lasting mark.",
        description: "Memorable logo design, color typography standards, style guides, and collateral assets that embody your corporate vision.",
        longDescription: "Establish a cohesive visual brand identity with strategic logo creation, typography hierarchies, brand guidelines books, stationery designs, and social media media kits.",
        features: [
          "Vector Logo Design (Multiple Concepts)",
          "Comprehensive Brand Style Guide",
          "Typography & Color Palette System",
          "Business Cards & Corporate Stationery",
          "Social Media Kit & Banner Templates",
          "Full Copyright & Vector File Handover"
        ],
        deliverables: [
          "Master Vector File Formats (AI, EPS, SVG, PNG, PDF)",
          "Brand Identity Guidelines Document",
          "Social Media Profile & Cover Assets",
          "Print-Ready Stationery Templates"
        ],
        process: [
          { step: "01", title: "Brand Strategy", desc: "Uncovering your mission, audience, and visual positioning." },
          { step: "02", title: "Concept Exploration", desc: "Creating diverse visual logo concepts and color boards." },
          { step: "03", title: "Refinement & Polish", desc: "Perfecting chosen concept, typography, and asset formats." },
          { step: "04", title: "Brand Kit Delivery", desc: "Exporting print and digital formats with brand style guide." }
        ],
        faqs: [
          { question: "Do I get full ownership of the logo?", answer: "Yes, once completed you receive 100% intellectual property ownership and full vector master files." }
        ],
        pricingTeaser: { starter: "₹9,999", pro: "₹19,999", enterprise: "Custom Quote" }
      },
      {
        slug: "attendance-management",
        pillarId: "digital-engineering",
        title: "Attendance Management Software",
        tagline: "Automated employee attendance, shift tracking, and leave management.",
        description: "Cloud-based attendance software featuring geo-fencing, biometric integration, shift schedules, and automated payroll exports.",
        longDescription: "Simplify workforce management with our modular Attendance Management System. Track employee check-ins via mobile geo-fencing, biometric devices, or Web Kiosks while automatically computing overtime, shift differentials, and monthly payroll summaries.",
        features: [
          "Geo-fenced Mobile Check-in / Check-out",
          "Biometric & RFID Device Integration",
          "Shift & Leave Approval Workflows",
          "Real-time Attendance Dashboard",
          "Payroll Ready Reports (CSV/Excel/PDF)",
          "Role-based Admin & Employee Access"
        ],
        deliverables: [
          "Cloud Software License & Admin Portal",
          "Employee Mobile/Web Access",
          "Biometric Hardware Sync API",
          "Custom Payroll Export Templates"
        ],
        process: [
          { step: "01", title: "Requirement Assessment", desc: "Mapping team structures, shifts, and hardware setups." },
          { step: "02", title: "System Setup", desc: "Configuring organizations, rules, leaves, and roles." },
          { step: "03", title: "Integration & Training", desc: "Connecting biometric devices and training admin staff." },
          { step: "04", title: "Go Live & Support", desc: "Rolling out to employees with dedicated helpdesk support." }
        ],
        faqs: [
          { question: "Can it integrate with biometric devices?", answer: "Yes, we support biometric hardware syncing as well as mobile GPS geo-fenced check-ins." }
        ],
        pricingTeaser: { starter: "₹2,999/mo", pro: "₹7,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "lead-management",
        pillarId: "digital-engineering",
        title: "Lead Management Software",
        tagline: "Streamline sales pipelines, lead distribution, and customer tracking.",
        description: "Custom sales CRM and lead management tool to capture leads from all channels, assign tasks, and track conversion funnels.",
        longDescription: "Never lose a potential buyer. Our Lead Management Software automatically aggregate leads from websites, Facebook ads, WhatsApp, and landing pages into a unified sales pipeline board with auto-assignment rules and follow-up reminders.",
        features: [
          "Multi-channel Lead Auto-capture",
          "Visual Kanban Pipeline Board",
          "Automated Lead Assignment & Routing",
          "Call & Meeting Activity Logging",
          "WhatsApp & SMS Notification Triggers",
          "Conversion Analytics & ROI Reports"
        ],
        deliverables: [
          "Custom CRM Application Instance",
          "Form & API Integrations",
          "Sales Rep Mobile-ready Portal",
          "Staff Training & Onboarding"
        ],
        process: [
          { step: "01", title: "Pipeline Mapping", desc: "Defining sales stages, lead sources, and team hierarchy." },
          { step: "02", title: "Workflow Setup", desc: "Configuring auto-assign rules, tags, and notification alerts." },
          { step: "03", title: "Integration", desc: "Connecting website forms, Meta ads, and WhatsApp API." },
          { step: "04", title: "Deployment", desc: "Launching system and conducting sales team walkthroughs." }
        ],
        faqs: [
          { question: "Can leads automatically sync from Meta & Google Ads?", answer: "Yes, leads flow instantly into your pipeline via webhooks and direct API integrations." }
        ],
        pricingTeaser: { starter: "₹3,999/mo", pro: "₹9,999/mo", enterprise: "Custom Quote" }
      }
    ]
  },
  "growth-marketing": {
    id: "growth-marketing",
    title: "Growth Marketing",
    tagline: "Data-driven marketing campaigns that acquire and retain high-value customers.",
    description: "Scale your reach with AI-enhanced Search Engine Optimization (SEO), high-ROI paid media campaigns, social media management, and performance copywriting.",
    heroBadge: "Pillar 02 · Performance Growth",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-500",
    services: [
      {
        slug: "seo",
        pillarId: "growth-marketing",
        title: "Search Engine Optimization (SEO)",
        tagline: "Dominate search results & AI search engines with technical excellence.",
        description: "Complete organic search strategy covering technical audit, keyword architecture, GEO (Generative Engine Optimization), and authority link building.",
        longDescription: "Our modern SEO services combine technical code optimization, keyword targeted content strategy, local SEO, and Generative Engine Optimization (GEO) to get your brand cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews.",
        features: [
          "Comprehensive Technical & Audit Fixes",
          "Generative Engine Optimization (GEO / AEO)",
          "Targeted High-Intent Keyword Architecture",
          "Local SEO & Google Business Profile Scaling",
          "High-Quality Authority Link Acquisition",
          "Transparent Monthly ROI & Rank Reports"
        ],
        deliverables: [
          "Full Technical Site Audit Report",
          "Quarterly Content Strategy & Keyword Blueprint",
          "On-page Optimization & Schema Markup",
          "Monthly Backlink Acquisition & Rank Tracking"
        ],
        process: [
          { step: "01", title: "Audit & Competitor Mapping", desc: "Analyzing technical bottlenecks, rankings, and competitor keywords." },
          { step: "02", title: "Technical & On-Page Fixes", desc: "Fixing speed, crawlability, schema, and meta structures." },
          { step: "03", title: "Content & GEO Optimization", desc: "Writing authority content optimized for human readers and AI models." },
          { step: "04", title: "Authority & Local Growth", desc: "Building high-trust backlinks and dominating local maps." }
        ],
        faqs: [
          { question: "How long before we see organic search improvements?", answer: "Most clients see initial technical indexation and ranking improvements within 60-90 days." }
        ],
        pricingTeaser: { starter: "₹14,999/mo", pro: "₹29,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "social-media-management",
        pillarId: "growth-marketing",
        title: "Social Media Management",
        tagline: "Build an active, engaging presence across LinkedIn, Instagram & Meta.",
        description: "End-to-end social media strategy, visual content creation, reel editing, community engagement, and brand storytelling.",
        longDescription: "Transform social channels into brand magnets. We handle monthly content calendars, custom graphic design, short-form video reels, copy, posting, and audience interaction.",
        features: [
          "Strategic Monthly Content Calendar",
          "Custom Graphic Design & Carousel Creation",
          "Short-Form Video (Reels / Shorts) Production",
          "Engaging Copywriting & Hashtag Research",
          "Active Community & Comment Management",
          "Monthly Performance Analytics"
        ],
        deliverables: [
          "12-24 High-quality Posts Per Month",
          "Weekly Reel/Short Video Edits",
          "Custom Social Media Assets",
          "Monthly Analytics & Engagement Report"
        ],
        process: [
          { step: "01", title: "Brand Voice Alignment", desc: "Establishing tone, visual style, and pillar themes." },
          { step: "02", title: "Content Calendar Creation", desc: "Drafting monthly schedule with graphics, captions, and tags." },
          { step: "03", title: "Review & Scheduling", desc: "Client approval followed by multi-channel scheduled posting." },
          { step: "04", title: "Community & Report", desc: "Replying to inquiries and analyzing top-performing posts." }
        ],
        faqs: [
          { question: "Do you create video reels?", answer: "Yes! We edit high-engaging video reels with captions, audio trending hooks, and branding." }
        ],
        pricingTeaser: { starter: "₹11,999/mo", pro: "₹24,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "ads-management",
        pillarId: "growth-marketing",
        title: "Ads Management (Google & Meta)",
        tagline: "High-ROI paid advertising on Google Search, Facebook, Instagram & YouTube.",
        description: "Targeted pay-per-click (PPC) and social ad campaigns structured to generate qualified leads and measurable return on ad spend (ROAS).",
        longDescription: "Maximize your ad budgets with precision audience targeting, conversion tracking, split-testing ad creative, and continuous campaign optimization across Google Ads, Meta Ads, and LinkedIn Ads.",
        features: [
          "Google Search & Display Ad Campaigns",
          "Meta (Facebook & Instagram) Retargeting",
          "High-converting Landing Page Copy & Guidance",
          "Conversion & Pixel Event Setup",
          "A/B Testing Creatives & Headlines",
          "Real-time ROAS & Lead Cost Tracking"
        ],
        deliverables: [
          "Ad Account Setup & Structuring",
          "Ad Creative Graphic/Video Variations",
          "Pixel & Event Setup Verification",
          "Bi-weekly Optimizations & Weekly Performance Reports"
        ],
        process: [
          { step: "01", title: "Offer & Audience Strategy", desc: "Identifying target buyer personas, key triggers, and offer angles." },
          { step: "02", title: "Creative & Copy Build", desc: "Designing ad visuals, headlines, and configuring pixel triggers." },
          { step: "03", title: "Campaign Launch", desc: "Starting bidding strategies with tight budget caps." },
          { step: "04", title: "Scale & Optimize", desc: "Pruning low performers, scaling high ROAS audiences." }
        ],
        faqs: [
          { question: "What ad spend budget do you recommend?", answer: "We recommend starting with a minimum ad budget of ₹15,000 to ₹30,000/month for effective testing." }
        ],
        pricingTeaser: { starter: "₹14,999/mo", pro: "₹29,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "app-store-optimization",
        pillarId: "growth-marketing",
        title: "App Store Optimization (ASO)",
        tagline: "Drive organic mobile app downloads on Google Play & Apple App Store.",
        description: "Optimize app titles, keywords, graphics, and reviews to rank higher in app store searches and boost install rates.",
        longDescription: "Increase your mobile app's organic visibility with targeted app keyword optimization, conversion-optimized screenshots, localized store listings, and rating management.",
        features: [
          "App Title & Subtitle Keyword Strategy",
          "Conversion Screenshot & Icon Redesign",
          "Localized App Store Descriptions",
          "Review & Rating Improvement Workflows",
          "Competitor ASO Breakdown",
          "Keyword Rank & Install Analytics"
        ],
        deliverables: [
          "ASO Audit & Strategy Guide",
          "Optimized Store Text Metadata",
          "New Graphic Screenshots & Feature Banner",
          "Monthly Install Growth Report"
        ],
        process: [
          { step: "01", title: "ASO Audit", desc: "Analyzing current store ranking, keywords, and conversion drop-off." },
          { step: "02", title: "Metadata & Asset Creation", desc: "Crafting keyword-rich copy and eye-catching store screenshots." },
          { step: "03", title: "Store Submission", desc: "Updating Google Play Console and Apple App Store Connect." },
          { step: "04", title: "Tracking & Iteration", desc: "Monitoring ranking movements and conversion rates." }
        ],
        faqs: [
          { question: "Does ASO help increase organic app downloads?", answer: "Yes, proper ASO improves search rankings in Play Store and can increase install conversion rates by 20-35%." }
        ],
        pricingTeaser: { starter: "₹12,999/mo", pro: "₹24,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "content-writing",
        pillarId: "growth-marketing",
        title: "Content Writing & Strategy",
        tagline: "Engaging, SEO-focused copy that educates, builds trust, and converts.",
        description: "Blog articles, landing page copy, whitepapers, case studies, and marketing collateral written by subject-matter writers.",
        longDescription: "High-quality written content tailored to your target audience. We produce search-optimized blog posts, authoritative industry articles, case study narratives, and persuasive sales page copy.",
        features: [
          "SEO-Optimized Blog Posts & Articles",
          "High-converting Landing Page Copy",
          "Comprehensive eBooks & Whitepapers",
          "Product Descriptions & Sales Pitch Material",
          "Grammar & Originality Plagiarism Checks",
          "Content Calendar & Keyword Placement"
        ],
        deliverables: [
          "Ready-to-Publish Markdown/Word Documents",
          "Royalty-free Featured Header Images",
          "Meta Descriptions & Internal Link Suggestions"
        ],
        process: [
          { step: "01", title: "Topic & Keyword Brief", desc: "Selecting high-intent topics with keyword outlines." },
          { step: "02", title: "Research & Writing", desc: "Drafting thoroughly researched content adhering to brand voice." },
          { step: "03", title: "Editing & QA", desc: "Proofreading, fact-checking, and optimizing readability." },
          { step: "04", title: "Publishing & Formatting", desc: "Formatting in CMS with headers, bullet points, and CTA blocks." }
        ],
        faqs: [
          { question: "Are content pieces checked for plagiarism and AI quality?", answer: "Yes, all content is human-curated, thoroughly edited, and checked for originality and readability." }
        ],
        pricingTeaser: { starter: "₹9,999/mo", pro: "₹19,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "lead-generation",
        pillarId: "growth-marketing",
        title: "Lead Generation & Bulk Communications",
        tagline: "Reach qualified prospects via targeted outreach, SMS, and WhatsApp.",
        description: "Multi-channel B2B lead generation, verified prospect list building, and compliant bulk SMS/WhatsApp notification campaigns.",
        longDescription: "Accelerate your sales pipeline with verified lead databases, outreach automation, and targeted broadcast messaging campaigns across WhatsApp and transactional SMS.",
        features: [
          "Targeted B2B Prospect List Building",
          "WhatsApp Business API Integration & Broadcasts",
          "Transactional & Promotional Bulk SMS (DLT Compliant)",
          "Email Cold Outreach Sequences",
          "Lead Verification & Clean-up",
          "Delivery & Open Rate Tracking"
        ],
        deliverables: [
          "Verified Lead Lists (CSV)",
          "WhatsApp Message Templates & DLT Approvals",
          "Campaign Execution & Delivery Logs"
        ],
        process: [
          { step: "01", title: "Audience Profiling", desc: "Defining target industry, location, designation, and company size." },
          { step: "02", title: "Campaign Setup", desc: "Configuring WhatsApp API and DLT SMS templates." },
          { step: "03", title: "Execution", desc: "Sending targeted messages with immediate link tracking." },
          { step: "04", title: "Handoff", desc: "Routing responses directly to your sales representatives." }
        ],
        faqs: [
          { question: "Are SMS campaigns DLT registered?", answer: "Yes, all bulk SMS campaigns comply fully with Indian TRAI DLT regulations." }
        ],
        pricingTeaser: { starter: "₹9,999/mo", pro: "₹19,999/mo", enterprise: "Custom Quote" }
      }
    ]
  },
  "business-operations": {
    id: "business-operations",
    title: "Business Operations & Advisory",
    tagline: "Streamline back-office operations, reduce overhead, and accelerate growth.",
    description: "Offload manual processes to dedicated virtual assistants, back-office data teams, financial advisory experts, and IT helpdesk management.",
    heroBadge: "Pillar 03 · Operational Scale",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    services: [
      {
        slug: "back-office-data-entry",
        pillarId: "business-operations",
        title: "Back Office & Data Entry Services",
        tagline: "Reliable, high-accuracy data processing & operational support.",
        description: "Outsourced back-office operations including data entry, document digitization, CRM updating, catalog management, and verification.",
        longDescription: "Reduce operational overhead by up to 60% with our reliable back-office outsourcing team. We handle data entry, invoice processing, catalog management, customer data verification, and document digitization with 99.5% accuracy.",
        features: [
          "99.5%+ Data Processing Accuracy",
          "Dedicated Data Entry & Ops Specialists",
          "Document Digitization & OCR Processing",
          "E-Commerce Catalog & Product Entry",
          "Data Verification & Database Cleaning",
          "Strict Data Security & Non-Disclosure Agreements (NDA)"
        ],
        deliverables: [
          "Processed Data Files & Clean Spreadsheets",
          "Daily Work Logs & SLA Tracking",
          "Dedicated Account Supervisor"
        ],
        process: [
          { step: "01", title: "Workflow SLA Definition", desc: "Understanding guidelines, templates, and accuracy targets." },
          { step: "02", title: "Team Training", desc: "Training dedicated back-office specialists on your software." },
          { step: "03", title: "Processing & QA", desc: "Executing data tasks with 2-tier quality audit checks." },
          { step: "04", title: "Daily Delivery", desc: "Delivering completed files and daily progress summaries." }
        ],
        faqs: [
          { question: "Is our company data kept secure?", answer: "Yes. All staff sign strict NDAs and operate on secure, monitored workstations." }
        ],
        pricingTeaser: { starter: "₹14,999/mo", pro: "₹29,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "virtual-assistant",
        pillarId: "business-operations",
        title: "Virtual Assistant & Operations",
        tagline: "Dedicated executive assistants for administrative & operational tasks.",
        description: "Scale your productivity with full-time or part-time virtual assistants for scheduling, inbox management, customer inquiries, and research.",
        longDescription: "Free up executive time. Our trained virtual assistants assist with calendar scheduling, travel bookings, email filtering, customer service ticketing, vendor coordination, and market research.",
        features: [
          "Dedicated Remote Executive Assistant",
          "Email & Inbox Management",
          "Calendar Scheduling & Meeting Coordination",
          "Customer Inquiry & Ticket Handling",
          "Travel Booking & Expense Tracking",
          "Flexible Hourly or Monthly Plans"
        ],
        deliverables: [
          "Dedicated Assistant Assignment",
          "Weekly Task Summaries & Hour Tracking",
          "Backup Assistant Coverage"
        ],
        process: [
          { step: "01", title: "Role Requirements", desc: "Defining task scope, preferred hours, and communication tools." },
          { step: "02", title: "Assistant Matching", desc: "Pairing you with a qualified, trained virtual assistant." },
          { step: "03", title: "Onboarding", desc: "Shared access setup and initial delegation tasks." },
          { step: "04", title: "Ongoing Support", desc: "Daily assistance with regular feedback check-ins." }
        ],
        faqs: [
          { question: "Can the virtual assistant adapt to our working timezone?", answer: "Yes, our assistants can align with Indian, Middle East, European, or US timezones." }
        ],
        pricingTeaser: { starter: "₹12,999/mo", pro: "₹24,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "finance-accounting",
        pillarId: "business-operations",
        title: "Finance & Accounting Advisory",
        tagline: "Expert bookkeeping, GST filing, payroll & financial consulting.",
        description: "Comprehensive financial management for small and medium businesses including accounts bookkeeping, GST/tax compliance, and financial reporting.",
        longDescription: "Maintain flawless financial compliance and clear visibility into your cash flow. We provide bookkeeping, GST return filing, TDS compliance, payroll processing, and quarterly financial advisory.",
        features: [
          "Routine Bookkeeping (Tally / Zoho / Quickbooks)",
          "GST Registration, Filing & Reconciliation",
          "TDS & Income Tax Return Compliance",
          "Monthly Payroll Calculation & Payslips",
          "Financial Statement Preparation (P&L, Balance Sheet)",
          "Strategic Cash Flow & Cost Advisory"
        ],
        deliverables: [
          "Monthly Financial Statements",
          "GST & Tax Return Acknowledgment Receipts",
          "Payroll Registers & Employee Payslips"
        ],
        process: [
          { step: "01", title: "Financial Audit", desc: "Reviewing existing books, vouchers, and compliance status." },
          { step: "02", title: "System Setup", desc: "Establishing standard accounting workflows and chart of accounts." },
          { step: "03", title: "Monthly Processing", desc: "Recording transactions, reconciling banks, and managing GST." },
          { step: "04", title: "Advisory & Reporting", desc: "Reviewing P&L metrics with management." }
        ],
        faqs: [
          { question: "Do you handle GST filing for Indian businesses?", answer: "Yes, we handle GSTR-1, GSTR-3B, and annual GST reconciliations." }
        ],
        pricingTeaser: { starter: "₹7,999/mo", pro: "₹17,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "it-helpdesk",
        pillarId: "business-operations",
        title: "IT Managed Helpdesk",
        tagline: "24/7 technical support & infrastructure management for your team.",
        description: "Outsourced IT helpdesk for employee technical support, cloud server monitoring, software licensing, and network troubleshooting.",
        longDescription: "Keep your business running without IT downtime. Our managed IT helpdesk provides remote desktop support, email server setup (Google Workspace, Office 365), server monitoring, and cybersecurity maintenance.",
        features: [
          "Remote Technical Support Desk",
          "Google Workspace & Microsoft 365 Management",
          "Cloud Server & Backup Monitoring",
          "User Account & Password Provisioning",
          "Antivirus & Endpoint Security",
          "SLA-backed Response Times"
        ],
        deliverables: [
          "Ticketing Portal Access",
          "Server & Network Health Reports",
          "Emergency Incident Response"
        ],
        process: [
          { step: "01", title: "IT Infrastructure Discovery", desc: "Auditing computers, servers, cloud software, and security." },
          { step: "02", title: "Helpdesk Onboarding", desc: "Setting up support email/portal and installing agent tools." },
          { step: "03", title: "Continuous Support", desc: "Resolving employee tickets and monitoring server uptime." },
          { step: "04", title: "Quarterly Review", desc: "Evaluating ticket logs and security upgrades." }
        ],
        faqs: [
          { question: "What is your response time SLA for IT support tickets?", answer: "Critical issues are addressed within 15 minutes; standard tickets within 2 hours." }
        ],
        pricingTeaser: { starter: "₹9,999/mo", pro: "₹19,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "rural-economic-development",
        pillarId: "business-operations",
        title: "Rural Economic Development",
        tagline: "Empowering rural communities through digital inclusion and economic programs.",
        description: "Advisory, training, and digital outreach programs that bring economic opportunity, digital literacy, and business support to rural India.",
        longDescription: "Tenacious Hub's Rural Economic Development program bridges the digital divide by delivering government scheme awareness, micro-enterprise setup support, digital literacy training, and rural marketing campaigns for businesses and NGOs looking to impact grassroots communities across India.",
        features: [
          "Government Scheme Awareness & Application Support",
          "Rural Digital Literacy & Skill Development Programs",
          "Micro-Enterprise Setup & MSME Registration",
          "Agri-Business & Farmer Market Outreach",
          "Rural Franchise & Distribution Network Setup",
          "CSR Impact Reporting & Compliance"
        ],
        deliverables: [
          "Community Outreach Program Design",
          "Training Material & Workshop Content",
          "MSME Registration & Documentation Support",
          "Digital Platform Setup for Rural Access"
        ],
        process: [
          { step: "01", title: "Community Assessment", desc: "Understanding target rural geography, demographics, and economic gaps." },
          { step: "02", title: "Program Design", desc: "Crafting tailored training programs, digital tools, and outreach plans." },
          { step: "03", title: "Implementation", desc: "Executing workshops, digital onboarding, and enterprise support." },
          { step: "04", title: "Impact Monitoring", desc: "Tracking participation, business registrations, and economic indicators." }
        ],
        faqs: [
          { question: "Who are rural economic development programs suited for?", answer: "These programs are ideal for NGOs, government agencies, corporates with CSR mandates, and businesses entering rural markets." },
          { question: "Do you help with government scheme applications?", answer: "Yes, our team helps identify applicable schemes (PM SVANidhi, MUDRA, e-Shram, etc.) and assists with application paperwork." }
        ],
        pricingTeaser: { starter: "₹19,999/mo", pro: "₹49,999/mo", enterprise: "Custom Quote" }
      },
      {
        slug: "investment-insurance",
        pillarId: "business-operations",
        title: "Investment & Insurance Advisory",
        tagline: "Smart wealth management and comprehensive insurance solutions for businesses and individuals.",
        description: "Expert investment planning, mutual fund guidance, life and health insurance advisory, and corporate insurance consulting tailored to Indian businesses.",
        longDescription: "Protect and grow your wealth with Tenacious Hub's certified financial advisors. We help businesses and individuals structure tax-efficient investment portfolios, select the right insurance covers (life, health, group, property), and navigate complex regulatory requirements under IRDAI and SEBI guidelines.",
        features: [
          "Mutual Fund & SIP Portfolio Planning",
          "Life & Health Insurance Advisory",
          "Group Employee Insurance Plans (Mediclaim, GTLI)",
          "Corporate Asset & Property Insurance",
          "Tax-Saving Investment Strategies (ELSS, PPF, NPS)",
          "Claim Assistance & Policy Management"
        ],
        deliverables: [
          "Personalized Financial Plan Document",
          "Insurance Cover Comparison Report",
          "Portfolio Review & Recommendations",
          "Ongoing Policy Renewal Reminders"
        ],
        process: [
          { step: "01", title: "Financial Discovery", desc: "Understanding goals, risk appetite, and existing assets." },
          { step: "02", title: "Plan Design", desc: "Creating a diversified investment and insurance strategy." },
          { step: "03", title: "Implementation", desc: "Executing policy purchases and investment allocations." },
          { step: "04", title: "Annual Review", desc: "Monitoring portfolio performance and recommending adjustments." }
        ],
        faqs: [
          { question: "Can you help my business get group health insurance for employees?", answer: "Yes, we arrange group mediclaim and term life insurance plans at competitive corporate rates from all major insurers." },
          { question: "Are your advisors SEBI/IRDAI registered?", answer: "Our advisory team includes IRDAI-licensed insurance advisors and AMFI-registered mutual fund distributors." }
        ],
        pricingTeaser: { starter: "Free Consultation", pro: "₹4,999/plan", enterprise: "Custom Quote" }
      },
      {
        slug: "startup-advice",
        pillarId: "business-operations",
        title: "Startup Advisory & Business Consulting",
        tagline: "Expert guidance from idea to launch — company registration, funding, and market entry strategy.",
        description: "End-to-end startup consulting covering business model validation, company incorporation, investor pitching, and go-to-market strategy.",
        longDescription: "Whether you're a first-time founder or serial entrepreneur, Tenacious Hub's startup advisory helps you avoid costly mistakes. We guide you through company registration (Pvt. Ltd., LLP, OPC), GST setup, product-market fit research, pitch deck creation, and introductions to angel investors and incubators.",
        features: [
          "Business Idea Validation & Market Research",
          "Company Registration (Pvt. Ltd., LLP, OPC)",
          "GST, PAN, MSME, & Startup India Registration",
          "Investor Pitch Deck Design & Financial Projections",
          "Go-to-Market Strategy & Launch Planning",
          "Mentorship from Serial Entrepreneurs"
        ],
        deliverables: [
          "Market Research & Feasibility Report",
          "Company Incorporation Documents",
          "Investor-Ready Pitch Deck",
          "90-Day Launch Roadmap"
        ],
        process: [
          { step: "01", title: "Idea Validation", desc: "Researching target audience, competitors, and market opportunity." },
          { step: "02", title: "Legal Setup", desc: "Registering company, opening current account, and configuring tax IDs." },
          { step: "03", title: "Strategy Build", desc: "Designing launch plan, pricing, and investor pitch materials." },
          { step: "04", title: "Launch Support", desc: "Supporting go-to-market execution and investor introductions." }
        ],
        faqs: [
          { question: "How long does company registration take?", answer: "Private Limited company registration typically takes 7-15 business days with all documents in order." },
          { question: "Can you help us get into a startup incubator or accelerator?", answer: "Yes, we guide applications for government incubators (SINE, NSRCEL, IIMA CIIE) and private accelerators." }
        ],
        pricingTeaser: { starter: "₹9,999", pro: "₹24,999", enterprise: "Custom Quote" }
      }
    ]
  }
};
