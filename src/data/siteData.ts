export interface ServiceCategory {
  id: string;
  title: string;
  number: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: string;
  deliverables: string[];
}

export interface WorkshopItem {
  id: string;
  title: string;
  badge: string;
  duration: string;
  audience: string;
  description: string;
  topics: string[];
  outcomes: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  aspectRatio?: string;
  scope: {
    label: string;
    value: string;
  }[];
  isPlaceholder: boolean;
}

export const SITE_CONFIG = {
  agencyName: "BUCKEYE",
  subTitle: "DESIGN & CONSULTING",
  fullName: "BUCKEYE – DESIGN & CONSULTING",
  heroHeadline: "Good Brands Get Noticed. Great Brands Get Remembered.",
  heroSupporting: "Every brand has a story. Not every brand knows how to tell it.",
  agencyDescription:
    "We're a team of strategists, designers, writers, and media experts who believe great advertising does two things: it grabs attention and it drives action. From first idea to final report, we build campaigns that connect with the right people and deliver real business growth.",
  
  // Configurable Studio Coordinates (Clearly identifiable placeholders for client deployment)
  contact: {
    phoneDisplay: "+91 (080) 4122-8900", // [Configurable Studio Line]
    phoneTel: "+918041228900",
    whatsappNumber: "918041228900",
    emailBriefs: "briefs@buckeyedsc.com", // [Configurable Partner Desk]
    emailWorkshops: "workshops@buckeyedsc.com",
    address: "Office 402, 100Ft Road, Indiranagar, Bengaluru, KA 560038", // [Configurable Atelier Address]
    coordinates: "12.9716° N, 77.6412° E",
    hours: "Monday – Friday: 09:30 – 18:30 IST",
    protocol: "By Prior Appointment · Concierge Registration",
    disclaimer:
      "All studio coordinates, sample client projects, and contact points represent configurable design placeholders until official brand assets are published.",
  },

  socialLinks: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/918041228900?text=Hello%20Buckeye%20team%2C%20I%20would%20like%20to%20discuss%20a%20strategic%20project.",
  },
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "strategy-planning",
    number: "01",
    title: "Strategy & Planning",
    subtitle: "Brand Architecture & Strategic Positioning",
    description: "Rigorous market intelligence, category deconstruction, and defensible commercial angles that place your brand at the vanguard of consumer conversation.",
    icon: "radar",
    items: [
      "Brand strategy and positioning",
      "Market and audience research",
      "Media planning and buying",
      "Campaign strategy",
    ],
    deliverables: ["Brand Positioning Book", "Competitive Vacuum Map", "Omnichannel Media Plan", "Commercial Campaign Thesis"]
  },
  {
    id: "creative",
    number: "02",
    title: "Creative",
    subtitle: "Visual Identity & Verbal Architecture",
    description: "High-contrast visual design, cinema-grade video, typographic rigor, and compelling narrative concepts that demand immediate and lasting recall.",
    icon: "draw",
    items: [
      "Copywriting and concept development",
      "Graphic design and visual identity",
      "Logo and brand guideline creation",
      "Video and animation production",
      "Photography",
    ],
    deliverables: ["Master Brand Guidelines", "Custom Typographic Hierarchy", "Campaign Films & Stills", "Editorial Key Visuals"]
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    subtitle: "High-Velocity Omnichannel Distribution",
    description: "Full-funnel digital architecture engineered for maximum discovery, audience acquisition, and commercial conversion across modern search and social channels.",
    icon: "trending_up",
    items: [
      "Social media marketing and management",
      "Search engine optimization (SEO)",
      "Pay-per-click ads (Google Ads, Meta Ads)",
      "Email marketing",
      "Content marketing and blogging",
      "Influencer marketing",
      "Website design and development",
    ],
    deliverables: ["Organic Growth Engine", "High-Converting Ad Creative", "Retention Email Sequences", "Modern Web Platform"]
  },
  {
    id: "traditional-media",
    number: "04",
    title: "Traditional Media",
    subtitle: "Large-Scale Broadcast & Physical Presence",
    description: "High-impact broadcast, print, and out-of-home placements designed for mass cultural mindshare, spatial prestige, and unignorable physical presence.",
    icon: "tv",
    items: [
      "TV and radio commercials",
      "Print ads (newspapers, magazines)",
      "Outdoor advertising (billboards, transit, hoardings)",
      "Direct mail and brochures",
    ],
    deliverables: ["Cinema & TV Commercials", "High-Gloss Editorial Print", "Strategic Billboard Placements", "Luxury Print Collateral"]
  },
  {
    id: "pr-events",
    number: "05",
    title: "Public Relations & Events",
    subtitle: "Cultural Activation & Media Relations",
    description: "High-level media relations, brand activations, experiential environments, and strategic communications that shape public sentiment and industry reputation.",
    icon: "campaign",
    items: [
      "Press releases and media relations",
      "Event marketing and brand activations",
      "Sponsorships",
      "Crisis communication",
    ],
    deliverables: ["Editorial Press Outreach", "Brand Launch Activations", "Sponsorship Curation", "Crisis Protocol Briefs"]
  },
  {
    id: "analytics-optimization",
    number: "06",
    title: "Analytics & Optimization",
    subtitle: "Attribution, Conversion & Performance Telemetry",
    description: "Unvarnished performance measurement, data-informed creative testing, and transparent return-on-investment tracking that aligns with executive finance.",
    icon: "query_stats",
    items: [
      "Campaign performance tracking",
      "Conversion rate optimization (CRO)",
      "Reporting and ROI analysis",
      "A/B testing",
    ],
    deliverables: ["Custom Attribution Dashboards", "CRO Audit & Experiment Logs", "Executive Board Reports", "Multivariate Testing Loops"]
  },
  {
    id: "specialized-services",
    number: "07",
    title: "Specialized Services",
    subtitle: "Product Launch, Packaging & Automation",
    description: "Targeted execution modules for physical product launches, bespoke structural packaging, performance lead generation, and marketing automation systems.",
    icon: "inventory_2",
    items: [
      "Packaging design",
      "Product launch campaigns",
      "Performance marketing and lead generation",
      "Marketing automation and CRM setup",
    ],
    deliverables: ["Structural Packaging Systems", "Go-To-Market Launch Sprints", "B2B Lead Generation Engines", "Lifecycle CRM Architectures"]
  },
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Workshop",
    badge: "EXECUTIVE INTENSIVE",
    duration: "1 to 2 Full Days",
    audience: "Marketing managers, founders, and growth professionals seeking modern funnel mastery.",
    description:
      "A fast-paced masterclass covering the modern digital growth stack, organic vs paid synergies, conversion optimization, and omnichannel measurement.",
    topics: [
      "Full-funnel digital architecture and customer journeys",
      "Organic growth, SEO fundamentals, and technical discovery",
      "Paid acquisition modeling across Google & Meta networks",
      "Conversion rate optimization (CRO) and analytics telemetry",
    ],
    outcomes: [
      "Audit your current marketing stack",
      "Build a 90-day actionable digital roadmap",
      "Measure customer acquisition cost (CAC) and customer lifetime value (LTV)",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing Workshop",
    badge: "CREATIVE STRATEGY",
    duration: "1 Day Intensive",
    audience: "Social media managers, content creators, and brand communications teams.",
    description:
      "Stop posting noise. Learn how category-defining brands architect magnetic social narratives, build viral momentum, and convert casual scrollers into loyal advocates.",
    topics: [
      "Platform algorithm mechanics (LinkedIn, Instagram, X, YouTube)",
      "Editorial calendars and content batching systems",
      "High-converting short-form video concepting",
      "Community management and brand advocacy flywheels",
    ],
    outcomes: [
      "Develop a distinct brand voice guideline",
      "Create high-velocity content production workflows",
      "Implement social listening and sentiment measurement",
    ],
  },
  {
    id: "branding-creative-design",
    title: "Branding & Creative Design Workshop",
    badge: "DESIGN EXCELLENCE",
    duration: "1 to 2 Days",
    audience: "Designers, brand custodians, creative leads, and product innovators.",
    description:
      "Explore the principles of iconic visual identity. From typographic hierarchies to design systems that scale across physical, print, and digital surfaces.",
    topics: [
      "Brand manifesto crafting and core positioning",
      "Typographic discipline and color psychology",
      "Design systems and component modularity",
      "Packaging, collateral, and environmental branding",
    ],
    outcomes: [
      "Evaluate brand identity cohesiveness",
      "Master Swiss editorial design principles",
      "Deliver multi-surface brand toolkits",
    ],
  },
  {
    id: "advertising-campaign-strategy",
    title: "Advertising & Campaign Strategy Workshop",
    badge: "COMMERCIAL IMPACT",
    duration: "1 Day Masterclass",
    audience: "Agency planners, brand directors, and media strategists.",
    description:
      "How to build advertising campaigns that capture cultural attention and trigger commercial velocity. From raw creative brief to integrated media rollout.",
    topics: [
      "Writing unignorable creative briefs",
      "Big idea ideation and concept stress-testing",
      "Media mix planning: TV, Print, Outdoor, and Digital",
      "Campaign attribution and post-campaign analysis",
    ],
    outcomes: [
      "Draft sharp, inspiring creative briefs",
      "Structure multi-channel campaign budgets",
      "Accurately benchmark ROI against business milestones",
    ],
  },
  {
    id: "ai-tools-for-marketing",
    title: "AI Tools for Marketing Workshop",
    badge: "NEXT-GEN PRODUCTIVITY",
    duration: "Half-Day or 1 Day",
    audience: "Modern marketing teams, copywriters, strategists, and agency creatives.",
    description:
      "Hands-on immersion into practical generative AI tools transforming creative and marketing workflows. Move beyond gimmicks to rigorous productivity and rapid asset ideation.",
    topics: [
      "LLMs for consumer research, positioning drafts, and copy testing",
      "Image and visual generation for concept moodboards",
      "Workflow automation and prompt engineering frameworks",
      "Ethical boundaries, copyright, and brand safety",
    ],
    outcomes: [
      "Accelerate creative ideation from days to hours",
      "Deploy custom AI assistants for copywriting & research",
      "Safeguard brand integrity while leveraging AI tools",
    ],
  },
  {
    id: "business-growth-lead-generation",
    title: "Business Growth & Lead Generation Workshop",
    badge: "B2B & ENTERPRISE",
    duration: "1 Day Intensive",
    audience: "Sales leaders, B2B marketers, venture founders, and business development executives.",
    description:
      "Construct a predictable, scalable lead generation engine. Learn how to combine outbound account-based marketing with magnetic inbound authority.",
    topics: [
      "Ideal customer profile (ICP) definition and account scoring",
      "Account-based marketing (ABM) strategy and executive outreach",
      "High-converting landing pages and lead magnets",
      "CRM pipeline automation and sales qualification cadences",
    ],
    outcomes: [
      "Establish qualified lead scoring criteria",
      "Create high-response outbound email sequences",
      "Align marketing pipelines with sales revenue targets",
    ],
  },
];

export const TECH_CAREER_LAUNCHPAD_INFO = {
  title: "TECH CAREER LAUNCHPAD",
  subTitle: "A practical career-readiness workshop for future software professionals.",
  duration: "3–4 hours",
  batchSize: "50–100 students",
  venue: "Bengaluru colleges (On-Campus / Auditorium)",
  ticketPrice: "₹499 per student",
  targetAudience:
    "Final-year B.E., B.Tech, BCA, MCA and computer science students preparing for placements or their first IT job.",
  confirmedCurriculum: [
    {
      time: "00:00–00:20",
      session: "Welcome and IT career roadmap",
      outcome: "Understand entry-level career options, industry specializations, and real-world salary/skill expectations.",
      isConfirmed: true,
    },
    {
      time: "00:20–01:00",
      session: "AI tools for software students",
      outcome: "Practise using AI for learning, coding support, bug debugging, and professional productivity.",
      isConfirmed: true,
    },
    {
      time: "01:00–Remaining",
      session: "Cohort-Specific Interactive Sessions",
      outcome: "Session schedule customizable in collaboration with college placement cell / academic faculty.",
      isConfirmed: false,
    },
  ],
};

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "kinetic",
    client: "Kinetic Aeronautics",
    category: "mobility",
    tag: "Aviation & Mobility",
    title: "The Autonomous Leap: Rebranding Urban Aviation",
    description:
      "Strategic visual identity, investor roadshow materials, and architectural digital platform concept for an autonomous electric aviation prototype.",
    badge: "Concept Prototype",
    image: "/assets/kinetic.jpg",
    aspectRatio: "16/9",
    scope: [
      { label: "Identity Scope", value: "Bespoke Monogram & Typographic System" },
      { label: "Digital Core", value: "3D Visual Platform & Mobile Interface" },
      { label: "Design Sprint", value: "14 Weeks Comprehensive Architecture" },
    ],
    isPlaceholder: true,
  },
  {
    id: "atelier",
    client: "Atelier Nouveau",
    category: "luxury",
    tag: "Luxury Consumer",
    title: "Sensory Architecture: Direct-To-Consumer Luxury",
    description:
      "Tactile packaging design, custom glass bottle aesthetics, and an editorial e-commerce boutique concept for an artisanal haute perfumery.",
    badge: "Sample Case Study",
    image: "/assets/atelier.jpg",
    aspectRatio: "4/5",
    scope: [
      { label: "Physical Scope", value: "Structural Bottle & Box Packaging" },
      { label: "Digital Core", value: "Editorial Storefront & Interactive Lookbook" },
      { label: "Art Direction", value: "Cinema-Grade Still Life Photography" },
    ],
    isPlaceholder: true,
  },
  {
    id: "omnia",
    client: "Omnia Cloud",
    category: "enterprise",
    tag: "Enterprise Infrastructure",
    title: "Capital Markets Narrative & Brand Platform",
    description:
      "Transforming complex multi-cloud architecture into a crisp, authoritative commercial narrative, investor deck system, and executive digital portal.",
    badge: "Sample Case Study",
    image: "/assets/omnia.jpg",
    aspectRatio: "16/9",
    scope: [
      { label: "Narrative Deck", value: "Executive Syndication Presentation System" },
      { label: "Brand System", value: "Corporate Design Tokens & Stylebook" },
      { label: "Digital Core", value: "Interactive Infrastructure Dashboard" },
    ],
    isPlaceholder: true,
  },
  {
    id: "horizon",
    client: "Horizon Brews",
    category: "beverage",
    tag: "Artisanal Beverage",
    title: "Bespoke Visual Identity & Packaging Architecture",
    description:
      "Elevating artisanal fermentation to collectible shelf status. Monolithic label typography, foil treatments, and an atmospheric lifestyle debut campaign concept.",
    badge: "Sample Case Study",
    image: "/assets/horizon.jpg",
    aspectRatio: "1/1",
    scope: [
      { label: "Packaging", value: "12-SKU Can & Bottle Label System" },
      { label: "Digital Core", value: "Direct-to-Consumer Subscription Portal" },
      { label: "Campaign", value: "Launch Collateral & Point-of-Sale Stills" },
    ],
    isPlaceholder: true,
  },
];

export const CLIENT_MONOGRAMS = [
  { name: "Kinetic", sector: "Mobility Tech" },
  { name: "Atelier Nouveau", sector: "Luxury Goods" },
  { name: "Omnia Cloud", sector: "Enterprise Cloud" },
  { name: "Aura Capital", sector: "Venture Practice" },
  { name: "Vektor Systems", sector: "Autonomous AI" },
  { name: "Horizon Brews", sector: "Artisanal F&B" },
];

export const FAQ_ITEMS = [
  {
    q: "How does the strategic consultation process work?",
    a: "We initiate with a structured discovery session analyzing your commercial positioning, current brand friction, and target milestones. Following this, we furnish a clear Strategic Proposal with defined deliverables, timelines, and engagement models.",
  },
  {
    q: "What is your typical project timeline for comprehensive rebrands?",
    a: "Comprehensive brand systems generally span 6 to 10 weeks across three distinct sprints: Strategic Architecture & Research, Core Visual Identity & Guidelines, and Omni-channel Deployment & Design System Handover.",
  },
  {
    q: "Do you work with high-growth startups as well as established enterprises?",
    a: "Yes. We partner with ambitious high-growth venture-backed companies requiring high-velocity market entry, as well as established organizations undergoing digital and brand modernization.",
  },
  {
    q: "How do college institutions schedule the Tech Career Launchpad workshop?",
    a: "Academic departments and student chapters can book dedicated on-campus cohorts. Simply select 'Workshops & Training' in our enquiry form or reach out via WhatsApp/email for batch scheduling and syllabus coordination.",
  },
  {
    q: "How does the practical internship programme work for final-year students?",
    a: "Our internship provides final-year students with hands-on immersion into live advertising briefs, campaign execution, digital marketing, and creative design under senior mentorship. We focus on real skills and portfolio outcomes without making false promises of guaranteed placements.",
  },
];
