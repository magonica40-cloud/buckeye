import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare,
  Compass,
  Palette,
  TrendingUp,
  Radio,
  Megaphone,
  BarChart3,
  Rocket,
  Clock,
  Users,
  MapPin,
  Ticket,
  ChevronRight,
  ChevronDown,
  Search,
  Sliders,
  Layers,
  ShieldCheck,
  Award,
  Sparkles,
  Calculator,
  X,
  FileText,
  PhoneCall,
  Laptop
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA, CASE_STUDIES_DATA, TECH_CAREER_LAUNCHPAD_INFO, CLIENT_MONOGRAMS } from '../data/siteData';
import { TiltCard } from '../components/TiltCard';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  // Hero Interactive Reel State
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const heroSlides = [
    {
      id: 'kinetic',
      image: '/assets/kinetic.jpg',
      tag: 'Mobility & Aviation Tech',
      title: 'Kinetic Aeronautics: Autonomous Flight',
      metric: '+184% Pipeline',
      chapter: 'Ch 01 Strategy & Ch 02 Creative',
      caseId: 'kinetic'
    },
    {
      id: 'atelier',
      image: '/assets/atelier.jpg',
      tag: 'Haute Perfumery',
      title: 'Atelier Nouveau: Sensory Architecture',
      metric: '3.8x ROI Surge',
      chapter: 'Ch 07 Packaging & Ch 02 Design',
      caseId: 'atelier'
    },
    {
      id: 'war_room',
      image: '/assets/war_room.jpg',
      tag: 'Atelier Deliberation',
      title: 'Studio Headquarters: Bengaluru HQ',
      metric: '100% Attribution',
      chapter: 'Creative Direction & Strategy',
      caseId: 'kinetic'
    },
    {
      id: 'omnia',
      image: '/assets/omnia.jpg',
      tag: 'Enterprise Cloud',
      title: 'Omnia Cloud: Capital Markets Narrative',
      metric: 'Global Cut-Through',
      chapter: 'Ch 03 Digital & Ch 06 Analytics',
      caseId: 'omnia'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Service Explorer State (All 7 Disciplines from PDF)
  const [activeServiceId, setActiveServiceId] = useState<string>('strategy-planning');
  const [serviceSearchQuery, setServiceSearchQuery] = useState<string>('');

  // Interactive Case Study Modal & Category Filter State
  const [activeCaseModal, setActiveCaseModal] = useState<any | null>(null);
  const [caseStudyCategory, setCaseStudyCategory] = useState<string>('all');

  // Interactive Campaign Strategy Estimator State
  const [estimatorGoal, setEstimatorGoal] = useState<string>('brand-disruption');
  const [estimatorChannel, setEstimatorChannel] = useState<string>('omnichannel');
  const [estimatorTimeline, setEstimatorTimeline] = useState<string>('quarter');
  const [copiedEstimator, setCopiedEstimator] = useState<boolean>(false);

  // Tech Career Launchpad Interactive Calculator State
  const [studentBatchSize, setStudentBatchSize] = useState<number>(75);
  const [activeCurriculumTab, setActiveCurriculumTab] = useState<number>(0);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Map service icons
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'strategy-planning':
        return <Compass className="w-5 h-5 text-[#C8102E]" />;
      case 'creative':
        return <Palette className="w-5 h-5 text-[#C8102E]" />;
      case 'digital-marketing':
        return <TrendingUp className="w-5 h-5 text-[#C8102E]" />;
      case 'traditional-media':
        return <Radio className="w-5 h-5 text-[#C8102E]" />;
      case 'pr-events':
        return <Megaphone className="w-5 h-5 text-[#C8102E]" />;
      case 'analytics-optimization':
        return <BarChart3 className="w-5 h-5 text-[#C8102E]" />;
      case 'specialized-services':
        return <Sparkles className="w-5 h-5 text-[#C8102E]" />;
      default:
        return <Layers className="w-5 h-5 text-[#C8102E]" />;
    }
  };

  // Filtered Services based on search
  const filteredServices = useMemo(() => {
    if (!serviceSearchQuery.trim()) return SERVICES_DATA;
    const q = serviceSearchQuery.toLowerCase();
    return SERVICES_DATA.filter(service => 
      service.title.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q) ||
      service.items.some(item => item.toLowerCase().includes(q))
    );
  }, [serviceSearchQuery]);

  const activeService = useMemo(() => {
    return SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];
  }, [activeServiceId]);

  // Filtered Case Studies based on category tab
  const filteredCaseStudies = useMemo(() => {
    if (caseStudyCategory === 'all') return CASE_STUDIES_DATA;
    return CASE_STUDIES_DATA.filter(cs => cs.category === caseStudyCategory);
  }, [caseStudyCategory]);

  // Estimator blueprint output
  const estimatedBlueprint = useMemo(() => {
    let disciplines = ['01 Strategy & Planning', '02 Creative & Visual Identity'];
    let timelineLabel = '4–6 Weeks Sprint';
    let deliverables = ['Brand Architecture Book', 'Multi-Surface Key Visuals', 'Campaign Master Playbook'];

    if (estimatorChannel === 'digital') {
      disciplines.push('03 Digital Marketing', '06 Analytics & Optimization');
      deliverables.push('PPC Ad Funnels', 'SEO Architecture', 'Attribution Dashboard');
    } else if (estimatorChannel === 'traditional') {
      disciplines.push('04 Traditional Media (TV, Print, OOH)', '05 PR & Events');
      deliverables.push('High-Impact Billboards', 'Cinema/Broadcast Commercials', 'Editorial Press Kit');
    } else if (estimatorChannel === 'omnichannel') {
      disciplines.push('03 Digital Marketing', '04 Traditional Media', '05 PR & Events', '06 Analytics & Optimization');
      deliverables.push('360° Omnichannel Blitz', 'National OOH & Digital Ads', 'End-to-End ROI Telemetry');
    }

    if (estimatorTimeline === 'sprint') timelineLabel = 'Rapid Sprint (3–5 Weeks)';
    if (estimatorTimeline === 'quarter') timelineLabel = 'Quarter Growth Phase (90 Days)';
    if (estimatorTimeline === 'annual') timelineLabel = 'Annual Retainer & Strategic Governance';

    return { disciplines, timelineLabel, deliverables };
  }, [estimatorGoal, estimatorChannel, estimatorTimeline]);

  // Workshop detailed curriculum breakdown based on user's brief
  const workshopSessions = [
    {
      time: "00:00–00:20 (20 Mins)",
      badge: "ORIENTATION & PATHFINDING",
      title: "Welcome & IT Career Roadmap",
      outcome: "Understand entry-level career options, industry specializations, and real-world hiring expectations in today's software ecosystem.",
      points: [
        "Software engineering vs data vs AI vs product career paths",
        "Bengaluru and global tech hiring landscape benchmarks",
        "What hiring managers specifically look for beyond GPA"
      ]
    },
    {
      time: "00:20–01:00 (40 Mins)",
      badge: "PRACTICAL LAB",
      title: "AI Tools for Software Students",
      outcome: "Practise using AI for learning, coding support, bug debugging, and professional productivity.",
      points: [
        "Live prompt engineering for code comprehension and syntax mastery",
        "Using AI coding assistants for real-time bug diagnosis and unit testing",
        "Safeguarding code quality, avoiding hallucinations, and maintaining fundamentals"
      ]
    },
    {
      time: "01:00–02:15 (75 Mins)",
      badge: "LIVE CODE SPRINT",
      title: "Industry Problem-Solving & Architecture",
      outcome: "Deconstruct production codebases, write modular APIs, and tackle real-world algorithmic problems with clean standards.",
      points: [
        "Hands-on debugging sprint simulating an actual production ticket",
        "Clean architecture principles and Git collaboration etiquette",
        "Code review techniques and pull request best practices"
      ]
    },
    {
      time: "02:15–03:00 (45 Mins)",
      badge: "PLACEMENT ACCELERATION",
      title: "Resume Engineering & Mock Interview Clinic",
      outcome: "Transform academic projects into high-impact portfolio pieces that capture recruiter attention in under 10 seconds.",
      points: [
        "ATS-optimized resume blueprints and bullet point formulation",
        "Crafting a standout GitHub and LinkedIn presence",
        "Live technical mock interview walkthrough with instant feedback"
      ]
    }
  ];

  // Testimonials list
  const testimonials = [
    {
      quote: "Buckeye transformed our market identity from just another SaaS tool into an indispensable category benchmark. Their strategic rigor and design discipline are unmatched in Bengaluru.",
      author: "Vikramaditya Sengupta",
      title: "Chief Marketing Officer",
      company: "Aerovox Mobility Systems",
      metric: "+184% Inbound Pipeline"
    },
    {
      quote: "The Tech Career Launchpad workshop conducted by Buckeye at our campus was easily the highest-rated training program this academic year. 85+ students built real confidence with AI tools and placement roadmaps.",
      author: "Prof. Radhika Nambiar",
      title: "Head of Training & Placement",
      company: "Bengaluru Institute of Technology & Science",
      metric: "98% Student Approval"
    },
    {
      quote: "Their campaign architecture delivered immediate traction. From billboard placements to digital conversion funnels, every single rupee spent was tied to rigorous performance telemetry.",
      author: "Siddharth Verma",
      title: "Co-Founder & CEO",
      company: "Atelier Nouveau Parfums",
      metric: "3.8x Campaign ROI"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "Which services from Buckeye's capabilities catalogue are best for our business stage?",
      answer: "Every engagement begins with our Category Assessment. For early-stage and venture-backed ventures, we focus on Chapter 01 (Strategy & Planning) and Chapter 02 (Creative & Visual Identity) to establish unshakeable market positioning. For scaling commercial brands, we deploy Chapter 03 (Digital Marketing), Chapter 04 (Traditional Media), and Chapter 06 (Analytics & Optimization) to maximize market share and measurable revenue."
    },
    {
      question: "How does Buckeye approach media planning and campaign ROI?",
      answer: "Unlike traditional agencies that prioritize vanity metrics like impressions, Buckeye implements rigorous full-funnel attribution telemetry. Every campaign has explicit commercial KPIs: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), pipeline velocity, or verified footfall."
    },
    {
      question: "How can colleges book the Tech Career Launchpad workshop?",
      answer: "Colleges can book the 3–4 hour Tech Career Launchpad workshop directly through our on-campus coordination desk. The standard cohort size is 50–100 students at ₹499 per student. We provide experienced industry practitioners, structured student workbooks, and verified certificates of completion."
    },
    {
      question: "What is the typical timeline from initial creative brief to campaign rollout?",
      answer: "Strategic branding and identity engagements typically require 3 to 6 weeks for complete architecture and guidelines. High-velocity digital ad campaigns and PR initiatives can be deployed in as little as 10 to 14 business days following creative approval."
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs) prior to project deliberations?",
      answer: "Yes, universally. We maintain strict non-disclosure and intellectual property protection standards for all enterprise clients, venture founders, and proprietary college curriculum arrangements."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F6] text-[#1B1C1A] font-body selection:bg-[#C8102E] selection:text-white">
      
      {/* =========================================================================
          HERO: EDITORIAL SPLIT-SCREEN & EXPANDED CREATIVE SHOWCASE
      ========================================================================= */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E4E1DC] relative overflow-hidden hero-light-atmosphere">
        {/* Subtle Watermark Monogram Background Aura */}
        <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none opacity-[0.035] font-display font-black text-[22rem] leading-none text-[#1B1C1A]">
          BK
        </div>

        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative">
          
          {/* Balanced 12-Column Editorial Spread (6 / 6 Split for Maximum Visual Scale) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN (6 Cols): Bold Typographic Anchor */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Eyebrow status tag */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="w-2.5 h-2.5 bg-[#C8102E] inline-block animate-pulse"></span>
                <span className="font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E]">
                  BUCKEYE // CREATIVE &amp; STRATEGIC ADVISORY
                </span>
                <span className="text-[#A1A1AA]">·</span>
                <span className="font-mono text-[11px] text-[#71717A] uppercase">
                  Bengaluru Atelier · 12.9716° N, 77.6412° E
                </span>
              </div>

              {/* Main Monumental Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-[#1B1C1A] tracking-[-0.035em] leading-[1.04]">
                Good Brands Get Noticed. <br />
                <span className="text-[#C8102E] inline-block mt-1">
                  Great Brands Get Remembered.
                </span>
              </h1>

              {/* Narrative Quote & Description */}
              <div className="space-y-3 pt-1">
                <p className="font-display text-lg sm:text-xl text-[#1B1C1A] font-semibold leading-relaxed">
                  “{SITE_CONFIG.heroSupporting}”
                </p>
                <p className="text-sm sm:text-base text-[#5C403F] font-body leading-relaxed max-w-2xl">
                  {SITE_CONFIG.agencyDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenConsultation('Advertising & Marketing')}
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-sharp hover:-translate-y-0.5"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I%20would%20like%20to%20discuss%20a%20strategic%20advertising%20brief.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:bg-[#F5F3F0]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Priority</span>
                </a>

                <a
                  href="#capabilities-matrix"
                  className="px-4 py-3.5 text-xs font-sans font-bold uppercase tracking-wider text-[#71717A] hover:text-[#C8102E] transition-colors flex items-center gap-1.5"
                >
                  <span>7 Core Disciplines</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Three Pillars Stat Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#E4E1DC]">
                <div className="p-3 bg-white border border-[#E4E1DC]">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#71717A] block">DISCIPLINES</span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#1B1C1A]">07 Chapters</span>
                  <span className="text-[10px] text-[#71717A] block mt-0.5">Per Service PDF</span>
                </div>
                <div className="p-3 bg-white border border-[#E4E1DC]">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#71717A] block">METHODOLOGY</span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#C8102E]">Swiss Rigor</span>
                  <span className="text-[10px] text-[#71717A] block mt-0.5">High-Recall Identity</span>
                </div>
                <div className="p-3 bg-white border border-[#E4E1DC]">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#71717A] block">TELEMETRY</span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#1B1C1A]">Full-Funnel</span>
                  <span className="text-[10px] text-[#71717A] block mt-0.5">Attributed ROI</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (6 Cols): Expanded Cinematic Kinetic Campaign Showcase Reel with 3D Tilt */}
            <div className="lg:col-span-6">
              <TiltCard className="w-full">
                <div className="relative border-2 border-[#1B1C1A] bg-[#121214] p-3 sm:p-4 shadow-2xl group">
                  
                  {/* Visual Image Viewport: Enlarged to 540px-560px */}
                  <div className="relative h-96 sm:h-[480px] lg:h-[530px] xl:h-[560px] w-full overflow-hidden bg-[#1B1B1F]">
                    <img 
                      src={heroSlides[activeHeroSlide].image} 
                      alt={heroSlides[activeHeroSlide].title}
                      className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/90 via-transparent to-black/30 pointer-events-none"></div>

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1.5 bg-[#121214]/90 backdrop-blur-md border border-[#3F3F46] text-[11px] font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C8102E] inline-block"></span>
                        <span>{heroSlides[activeHeroSlide].tag}</span>
                      </span>
                      <span className="px-3 py-1.5 bg-[#C8102E] text-white text-[11px] font-mono font-bold tracking-wider shadow-md">
                        {heroSlides[activeHeroSlide].metric}
                      </span>
                    </div>

                    {/* Bottom Information Glass Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 border border-[#E4E1DC] flex flex-col gap-2.5 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C8102E]">
                          {heroSlides[activeHeroSlide].chapter}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      </div>

                      <h3 className="font-display font-extrabold text-base sm:text-lg text-[#1B1C1A] leading-snug">
                        {heroSlides[activeHeroSlide].title}
                      </h3>

                      <div className="flex items-center justify-between pt-2 border-t border-[#E4E1DC] text-xs">
                        <span className="font-mono text-[10px] text-[#71717A] uppercase tracking-wider">
                          Demonstrative Case Brief · Atelier Specimen
                        </span>
                        <button
                          onClick={() => {
                            const study = CASE_STUDIES_DATA.find(cs => cs.id === heroSlides[activeHeroSlide].caseId) || CASE_STUDIES_DATA[0];
                            setActiveCaseModal(study);
                          }}
                          className="font-bold text-[#C8102E] hover:text-[#1B1C1A] text-xs font-mono uppercase flex items-center gap-1.5 transition-colors"
                        >
                          <span>Inspect Full Brief</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Slide Controls Bar */}
                  <div className="pt-3 px-1 flex items-center justify-between gap-2 text-white">
                    <div className="flex items-center gap-2">
                      {heroSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => setActiveHeroSlide(idx)}
                          className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all ${
                            activeHeroSlide === idx
                              ? 'bg-[#C8102E] text-white shadow-sm'
                              : 'bg-[#27272A] text-[#A1A1AA] hover:bg-[#3F3F46]'
                          }`}
                        >
                          0{idx + 1}
                        </button>
                      ))}
                    </div>

                    <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider hidden sm:inline">
                      Live Reel · Auto-Cycles 4.5s
                    </span>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          INFINITE RUNNING CAPABILITY TICKER
      ========================================================================= */}
      <div className="w-full bg-[#121214] text-white py-3.5 border-b border-[#27272A] overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono uppercase font-bold tracking-[0.2em]">
          <span>Brand Strategy &amp; Positioning</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Graphic Design &amp; Visual Identity</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Pay-Per-Click Ads (Google &amp; Meta)</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Outdoor Billboards &amp; Transit</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>PR &amp; Brand Activations</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Conversion Rate Optimization (CRO)</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Packaging Design &amp; Launch</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Tech Career Launchpad (Bengaluru Colleges)</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          {/* Duplicated for smooth loop */}
          <span>Brand Strategy &amp; Positioning</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Graphic Design &amp; Visual Identity</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Pay-Per-Click Ads (Google &amp; Meta)</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Outdoor Billboards &amp; Transit</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>PR &amp; Brand Activations</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Conversion Rate Optimization (CRO)</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Packaging Design &amp; Launch</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Tech Career Launchpad (Bengaluru Colleges)</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
        </div>
      </div>

      {/* =========================================================================
          CLIENT TRUST & SECTOR MONOGRAMS STRIP
      ========================================================================= */}
      <div className="w-full bg-[#FAF8F5] border-b border-[#E4E1DC] py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1520px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
            <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#71717A]">
              PRACTICE SECTORS //
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
            {CLIENT_MONOGRAMS.map((mono, idx) => (
              <div 
                key={idx}
                className="px-3 py-2 bg-white border border-[#E4E1DC] hover:border-[#C8102E] transition-all flex flex-col text-left group cursor-default"
              >
                <span className="font-display font-bold text-xs text-[#1B1C1A] group-hover:text-[#C8102E] transition-colors truncate">
                  {mono.name}
                </span>
                <span className="text-[9px] font-mono uppercase text-[#71717A] tracking-wider truncate">
                  {mono.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 01: INTERACTIVE SERVICE CAPABILITIES MATRIX (VERBATIM PDF CONTENT)
      ========================================================================= */}
      <section id="capabilities-matrix" className="py-20 bg-[#F5F3F0] border-b border-[#E4E1DC]">
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E4E1DC]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  CAPABILITIES CATALOGUE // ADVERTISING AGENCY SERVICES PDF
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                7 Core Service Chapters
              </h2>
              <p className="text-xs sm:text-sm text-[#5C403F] mt-2 max-w-xl">
                Explore the complete agency capability spectrum directly from our official service framework. Filter and click any discipline to inspect scope and deliverables.
              </p>
            </div>

            {/* Interactive Live Filter Input */}
            <div className="w-full md:w-80 relative">
              <label htmlFor="service-filter" className="sr-only">Search capabilities</label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="service-filter"
                  type="text"
                  placeholder="Search SEO, TV, Packaging, PR..."
                  value={serviceSearchQuery}
                  onChange={(e) => setServiceSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#E4E1DC] focus:border-[#C8102E] focus:outline-none text-xs font-body text-[#1B1C1A] placeholder-[#A1A1AA] transition-colors"
                />
                {serviceSearchQuery && (
                  <button 
                    onClick={() => setServiceSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-[#1B1C1A]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Navigation Pills for All 7 PDF Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SERVICES_DATA.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`px-4 py-2.5 text-xs font-sans uppercase font-bold tracking-wider border transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-sm'
                      : 'bg-white text-[#1B1C1A] border-[#E4E1DC] hover:border-[#1B1C1A] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className={`font-mono text-[11px] ${isSelected ? 'text-[#FFDAD8]' : 'text-[#C8102E]'}`}>
                    {service.number}
                  </span>
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Interactive Viewport */}
          <div className="bg-white border border-[#E4E1DC] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Mission & Deliverables */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-2 bg-[#F5F3F0] text-[#C8102E] border border-[#E4E1DC]">
                      {getServiceIcon(activeService.id)}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#C8102E] tracking-widest uppercase">
                      CHAPTER {activeService.number} // {activeService.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B1C1A]">
                    {activeService.title}
                  </h3>

                  <p className="text-sm text-[#5C403F] font-body mt-3 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Commercial Deliverables Blueprint */}
                <div className="p-4 bg-[#FBF9F6] border border-[#E4E1DC] mt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#71717A] block mb-2">
                    Verified Chapter Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.deliverables.map((deliv, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white border border-[#E4E1DC] text-[11px] font-mono text-[#1B1C1A]">
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenConsultation(activeService.title)}
                    className="px-6 py-3 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>Enquire {activeService.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/services#${activeService.id}`}
                    className="px-4 py-3 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider text-[#1B1C1A] transition-colors flex items-center gap-1.5"
                  >
                    <span>Full Chapter Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: PDF Bullet Points Verbatim */}
              <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E4E1DC] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#E4E1DC] pb-4 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A]">
                    Core Services Offered (Per Brief PDF)
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A]">
                    {activeService.items.length} Scope Modules
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-white border border-[#E4E1DC] hover:border-[#C8102E] transition-colors flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="text-xs font-body font-semibold text-[#1B1C1A] leading-snug block">
                          {item}
                        </span>
                        <span className="text-[10px] font-mono text-[#71717A] uppercase mt-0.5 block">
                          Verified PDF Component
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E1DC] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span>Available on Standalone Project or Retainer Basis</span>
                  <span className="text-[#C8102E] font-bold">100% Transparent Attribution</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Filter Search Results (If searching) */}
          {serviceSearchQuery && (
            <div className="mt-8 p-6 bg-white border border-[#E4E1DC]">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A] mb-3">
                Matching Capabilities ({filteredServices.length} found for "{serviceSearchQuery}"):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => { setActiveServiceId(service.id); setServiceSearchQuery(''); }}
                    className="p-4 border border-[#E4E1DC] hover:border-[#C8102E] cursor-pointer bg-[#FAF8F5] hover:bg-white transition-all"
                  >
                    <span className="font-mono text-xs font-bold text-[#C8102E]">{service.number} // {service.title}</span>
                    <ul className="mt-2 space-y-1">
                      {service.items.slice(0, 3).map((it, i) => (
                        <li key={i} className="text-xs text-[#5C403F] flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#C8102E]"></span>
                          <span className="truncate">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 02: INTERACTIVE CAMPAIGN STRATEGY & SCOPE ESTIMATOR
      ========================================================================= */}
      <section className="py-20 bg-[#121214] text-white border-b border-[#27272A]">
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explainer Left */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-[#C8102E] text-white">
                  <Calculator className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FFDAD8]">
                  INTERACTIVE AGENCY TOOL
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architect Your Brand Strategy
              </h2>

              <p className="text-sm text-[#A1A1AA] font-body leading-relaxed">
                Configure your commercial objectives and channel mix to inspect the recommended disciplines from our PDF catalogue, estimated timeline, and deployable deliverables.
              </p>

              {/* Selector 1: Objective */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D8] block mb-2">
                  1. Select Strategic Growth Objective
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'brand-disruption', label: 'Brand Disruption & Positioning' },
                    { id: 'lead-generation', label: 'Performance Lead Gen & Sales' },
                    { id: 'product-launch', label: 'Product Launch & Packaging' },
                    { id: 'mass-awareness', label: 'Mass Cultural OOH & PR Blitz' },
                  ].map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setEstimatorGoal(goal.id)}
                      className={`p-3 text-left border text-xs font-body transition-all ${
                        estimatorGoal === goal.id
                          ? 'bg-[#C8102E] border-[#C8102E] text-white font-bold'
                          : 'bg-[#1C1C20] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46]'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Primary Channel Mix */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D8] block mb-2">
                  2. Select Desired Media Channel Mix
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'digital', label: 'Digital Ads & SEO' },
                    { id: 'traditional', label: 'TV, Print & OOH' },
                    { id: 'omnichannel', label: '360° Omnichannel' },
                  ].map((chan) => (
                    <button
                      key={chan.id}
                      onClick={() => setEstimatorChannel(chan.id)}
                      className={`p-2.5 text-center border text-xs font-body transition-all ${
                        estimatorChannel === chan.id
                          ? 'bg-white text-[#121214] border-white font-bold'
                          : 'bg-[#1C1C20] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46]'
                      }`}
                    >
                      {chan.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 3: Timeline */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#D4D4D8] block mb-2">
                  3. Execution Velocity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sprint', label: 'Sprint (4-6 Wks)' },
                    { id: 'quarter', label: 'Quarterly (90 Days)' },
                    { id: 'annual', label: 'Annual Retainer' },
                  ].map((time) => (
                    <button
                      key={time.id}
                      onClick={() => setEstimatorTimeline(time.id)}
                      className={`p-2.5 text-center border text-xs font-body transition-all ${
                        estimatorTimeline === time.id
                          ? 'bg-[#27272A] border-[#C8102E] text-white font-bold'
                          : 'bg-[#1C1C20] border-[#27272A] text-[#71717A] hover:border-[#3F3F46]'
                      }`}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Generated Strategy Blueprint Card Right */}
            <div className="lg:col-span-7">
              <div className="bg-[#18181B] border-2 border-[#27272A] p-6 sm:p-10 relative shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#C8102E] block">
                      DYNAMIC STRATEGY BLUEPRINT
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">
                      Recommended Engagement Architecture
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#27272A] text-[#FFDAD8] font-mono text-xs font-bold">
                    {estimatedBlueprint.timelineLabel}
                  </span>
                </div>

                {/* Recommended PDF Service Chapters */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-2">
                      Activated Service Chapters (Per PDF Framework):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {estimatedBlueprint.disciplines.map((disc, idx) => (
                        <div key={idx} className="p-3 bg-[#202024] border border-[#2E2E32] flex items-center gap-2.5 text-xs text-white font-mono">
                          <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0" />
                          <span>{disc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-2 pt-2">
                      Key Commercial Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {estimatedBlueprint.deliverables.map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] text-xs font-body text-[#E4E4E7]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-[#1F1F23] border-l-2 border-[#C8102E] text-xs text-[#A1A1AA] font-body mt-4">
                    <strong>Bengaluru Atelier Protocol:</strong> Each tailored engagement includes dedicated creative direction, multi-variant ad creative testing, and transparent weekly reporting.
                  </div>

                  {/* Transmit Action */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={() => onOpenConsultation('Advertising & Marketing', `Custom Strategy: ${estimatorGoal} via ${estimatorChannel}`)}
                      className="px-6 py-3.5 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Submit Blueprint for Briefing</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        const briefText = `Buckeye Strategic Campaign Blueprint:\n• Goal: ${estimatorGoal}\n• Media Mix: ${estimatorChannel}\n• Velocity: ${estimatedBlueprint.timelineLabel}\n• Disciplines: ${estimatedBlueprint.disciplines.join(', ')}\n• Deliverables: ${estimatedBlueprint.deliverables.join(', ')}`;
                        navigator.clipboard.writeText(briefText);
                        setCopiedEstimator(true);
                        setTimeout(() => setCopiedEstimator(false), 2500);
                      }}
                      className="px-4 py-3.5 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      {copiedEstimator ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Blueprint Copied!</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-4 h-4 text-[#A1A1AA]" />
                          <span>Copy Brief Text</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I%20used%20your%20interactive%20strategy%20estimator.%20Goal:%20${estimatorGoal},%20Channel:%20${estimatorChannel},%20Timeline:%20${estimatedBlueprint.timelineLabel}.%20Can%20we%20discuss?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3.5 bg-[#1F1F23] border border-[#27272A] hover:border-emerald-500 text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: CAMPUS & TALENT SPOTLIGHT: TECH CAREER LAUNCHPAD
          (FAITHFUL TO USER'S UPLOADED SCREENSHOT)
      ========================================================================= */}
      <section className="py-20 bg-[#FBF9F6] border-b border-[#E4E1DC]">
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-[#C8102E] text-white text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                  CAMPUS TRAINING INITIATIVE
                </span>
                <span className="text-xs font-mono text-[#5C403F]">
                  Bengaluru Colleges
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
                TECH CAREER LAUNCHPAD
              </h2>
              <p className="text-sm sm:text-base text-[#5C403F] mt-2 max-w-2xl font-body">
                {TECH_CAREER_LAUNCHPAD_INFO.subTitle} Designed specifically for final-year software &amp; computer science students preparing for placements or their first IT role.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('Workshops & Training', 'Tech Career Launchpad')}
                className="px-6 py-3 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Book College Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/workshops"
                className="px-4 py-3 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider text-[#1B1C1A] transition-colors"
              >
                <span>All Workshops</span>
              </Link>
            </div>
          </div>

          {/* Logistics Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 bg-white border border-[#E4E1DC] shadow-sm">
              <div className="flex items-center gap-2 text-[#C8102E] mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#71717A]">Duration</span>
              </div>
              <div className="font-display font-bold text-lg text-[#1B1C1A]">3–4 Hours</div>
              <div className="text-[11px] text-[#71717A]">Comprehensive Half-Day</div>
            </div>

            <div className="p-4 bg-white border border-[#E4E1DC] shadow-sm">
              <div className="flex items-center gap-2 text-[#C8102E] mb-1">
                <Users className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#71717A]">Batch Size</span>
              </div>
              <div className="font-display font-bold text-lg text-[#1B1C1A]">50–100 Students</div>
              <div className="text-[11px] text-[#71717A]">Interactive Auditorium / Lab</div>
            </div>

            <div className="p-4 bg-white border border-[#E4E1DC] shadow-sm">
              <div className="flex items-center gap-2 text-[#C8102E] mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#71717A]">Venue</span>
              </div>
              <div className="font-display font-bold text-lg text-[#1B1C1A]">Bengaluru Colleges</div>
              <div className="text-[11px] text-[#71717A]">On-Campus Delivery</div>
            </div>

            <div className="p-4 bg-white border border-[#E4E1DC] shadow-sm">
              <div className="flex items-center gap-2 text-[#C8102E] mb-1">
                <Ticket className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#71717A]">Ticket Price</span>
              </div>
              <div className="font-display font-extrabold text-lg text-[#C8102E]">₹499 / student</div>
              <div className="text-[11px] text-[#71717A]">Subsidized Student Rate</div>
            </div>
          </div>

          {/* Interactive Curriculum Stepper & Live Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Tabbed Curriculum Schedule */}
            <div className="lg:col-span-7 bg-white border border-[#E4E1DC] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E4E1DC] pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C8102E]">
                    Confirmed Workshop Curriculum
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#1B1C1A] mt-0.5">
                    Step-by-Step Session Timetable
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#71717A]">
                  Click session to inspect
                </span>
              </div>

              {/* Session Selector Buttons */}
              <div className="space-y-3">
                {workshopSessions.map((session, idx) => {
                  const isActive = activeCurriculumTab === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveCurriculumTab(idx)}
                      className={`p-4 border cursor-pointer transition-all ${
                        isActive
                          ? 'border-[#C8102E] bg-[#FAF8F5] shadow-sm'
                          : 'border-[#E4E1DC] bg-white hover:border-[#1B1C1A]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase ${
                            isActive ? 'bg-[#C8102E] text-white' : 'bg-[#F5F3F0] text-[#71717A]'
                          }`}>
                            {session.badge}
                          </span>
                          <span className="font-mono text-xs font-bold text-[#1B1C1A]">
                            {session.time}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#C8102E]">
                          {isActive ? 'Active Review' : 'View'}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-base text-[#1B1C1A] mt-2">
                        {session.title}
                      </h4>

                      <p className="text-xs text-[#5C403F] font-body mt-1">
                        <strong>Student outcome:</strong> {session.outcome}
                      </p>

                      {/* Expanded Points */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-[#E4E1DC] space-y-1.5">
                          {session.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2 text-xs text-[#1B1C1A] font-body">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-3 bg-[#FAF8F5] border border-dashed border-[#E4E1DC] text-xs text-[#71717A] font-body flex items-center justify-between">
                <span>* Timetable customizable in direct coordination with college placement cells.</span>
                <span className="font-mono font-bold text-[#C8102E]">Includes Student Certification</span>
              </div>
            </div>

            {/* Right: Interactive College Cohort Calculator & Target Audience */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Target Audience Card */}
              <div className="bg-white border border-[#E4E1DC] p-6 shadow-sm">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#C8102E] block mb-2">
                  AUDIENCE PROFILE
                </span>
                <h4 className="font-display font-bold text-lg text-[#1B1C1A] mb-2">
                  Who Should Attend?
                </h4>
                <p className="text-xs text-[#5C403F] font-body leading-relaxed">
                  {TECH_CAREER_LAUNCHPAD_INFO.targetAudience}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-1 bg-[#F5F3F0] border border-[#E4E1DC] text-[#1B1C1A]">B.E. / B.Tech</span>
                  <span className="px-2.5 py-1 bg-[#F5F3F0] border border-[#E4E1DC] text-[#1B1C1A]">BCA &amp; MCA</span>
                  <span className="px-2.5 py-1 bg-[#F5F3F0] border border-[#E4E1DC] text-[#1B1C1A]">Computer Science</span>
                  <span className="px-2.5 py-1 bg-[#F5F3F0] border border-[#E4E1DC] text-[#1B1C1A]">IT &amp; AI Branches</span>
                </div>
              </div>

              {/* Interactive Student Batch Calculator */}
              <div className="bg-[#121214] text-white p-6 sm:p-8 border border-[#27272A] shadow-lg">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#FFDAD8] block mb-1">
                  COLLEGE PLACEMENT CALCULATOR
                </span>
                <h4 className="font-display font-bold text-xl text-white mb-4">
                  Estimate Cohort Investment
                </h4>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-[#A1A1AA]">Student Cohort Size:</span>
                      <span className="font-bold text-white text-sm">{studentBatchSize} Students</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      step="5"
                      value={studentBatchSize}
                      onChange={(e) => setStudentBatchSize(Number(e.target.value))}
                      className="w-full accent-[#C8102E] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#71717A] mt-1">
                      <span>50 Min</span>
                      <span>100 Standard</span>
                      <span>150 Max</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#27272A] space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-[#A1A1AA]">
                      <span>Rate Per Student:</span>
                      <span className="text-white">₹499</span>
                    </div>
                    <div className="flex justify-between text-[#A1A1AA]">
                      <span>Practical AI Tools Lab:</span>
                      <span className="text-emerald-400">Included</span>
                    </div>
                    <div className="flex justify-between text-[#A1A1AA]">
                      <span>Placement Certifications:</span>
                      <span className="text-emerald-400">Included</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#27272A] text-sm font-bold">
                      <span className="text-white">Total Programme Cost:</span>
                      <span className="text-emerald-400 text-base font-mono">
                        ₹{(studentBatchSize * 499).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => onOpenConsultation('Workshops & Training', `Tech Career Launchpad for ${studentBatchSize} students`)}
                      className="w-full py-3.5 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Request College Booking Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: REPRESENTATIVE CASE ARCHIVE & CREATIVE SHOWCASE
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto border-b border-[#E4E1DC]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                SELECTED ARCHIVE // DEMONSTRATIVE PROTOTYPES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1C1A] tracking-tight">
              Commercial Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-[#5C403F] mt-2 max-w-2xl">
              Sample creative briefs illustrating Buckeye's typographic discipline, campaign architecture, and packaging craft across diverse market verticals.
            </p>
          </div>
          
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E] hover:text-[#1B1C1A] transition-colors self-start md:self-end pb-1 border-b border-[#C8102E]/30 hover:border-[#1B1C1A]"
          >
            <span>View Full Work Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E4E1DC]">
          {[
            { id: 'all', label: 'All Prototypes (04)' },
            { id: 'mobility', label: 'Aviation & Mobility' },
            { id: 'luxury', label: 'Luxury Consumer' },
            { id: 'enterprise', label: 'Enterprise Infrastructure' },
            { id: 'beverage', label: 'Artisanal Beverage' },
          ].map((cat) => {
            const isSelected = caseStudyCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCaseStudyCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#1B1C1A] text-white shadow-sm'
                    : 'bg-[#F5F3F0] text-[#5C403F] hover:bg-[#E4E1DC] hover:text-[#1B1C1A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Balanced 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCaseStudies.map((study, idx) => {
            return (
              <article 
                key={study.id}
                onClick={() => setActiveCaseModal(study)}
                className="bg-white border border-[#E4E1DC] hover:border-[#C8102E] shadow-sm hover:shadow-sharp transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                {/* Widescreen Image Viewport with Fixed 16:10 Ratio for Unified Row Heights */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#121214]">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Top Left: Category Badge with Index */}
                  <div className="absolute top-3.5 left-3.5 bg-[#121214]/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-white border border-[#27272A] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C8102E] inline-block"></span>
                    <span>{study.tag}</span>
                  </div>

                  {/* Top Right: Status Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-bold uppercase text-[#1B1C1A] flex items-center gap-1.5 border border-[#E4E1DC] shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{study.badge}</span>
                  </div>

                  {/* Hover Floating Action */}
                  <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-[#C8102E] text-white px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span>Inspect Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content: Structured & Balanced */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Client & Discipline Header */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                        {study.client}
                      </span>
                      <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                        Atelier Brief
                      </span>
                    </div>

                    {/* Case Study Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1B1C1A] group-hover:text-[#C8102E] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    {/* Description Narrative */}
                    <p className="text-xs sm:text-sm text-[#5C403F] font-body mt-2.5 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Deliverables & Scope Badges */}
                    <div className="pt-4 mt-4 border-t border-[#F5F3F0] space-y-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#71717A] block">
                        Core Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {study.scope.map((sc, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F5] border border-[#E4E1DC] text-[11px] font-mono text-[#1B1C1A]"
                          >
                            <span className="w-1.5 h-1.5 bg-[#C8102E] shrink-0"></span>
                            <span className="text-[#71717A] font-medium">{sc.label}:</span>
                            <span className="font-bold">{sc.value}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar: Pinned to Horizontal Baseline */}
                  <div className="pt-4 mt-6 border-t border-[#E4E1DC] flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Interactive Brief</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCaseModal(study);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-[0.14em] text-[#1B1C1A] group-hover:text-[#C8102E] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: PRACTICAL FINAL-YEAR INTERNSHIP PROGRAMME
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto border-b border-[#E4E1DC]">
        <div className="bg-white border border-[#E4E1DC] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  TALENT &amp; APPRENTICESHIP
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1B1C1A]">
                Practical Final-Year Internship Programme
              </h3>

              <p className="text-sm sm:text-base text-[#5C403F] font-body leading-relaxed">
                A hands-on apprenticeship for final-year students preparing for careers in advertising, creative direction, digital marketing, and commercial design. Gain real brief experience under direct senior mentorship.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  'Real-world project briefs',
                  'Live campaign execution',
                  'Digital marketing & SEO',
                  'Creative design & typography',
                  'Content & video development',
                  'Senior mentor reviews',
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#F5F3F0] p-2.5 text-xs font-body font-semibold text-[#1B1C1A]">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#71717A] font-body pt-2 italic">
                * Note: Buckeye provides authentic practical training and industry immersion. We do not make false promises of guaranteed employment or placement.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenConsultation('Internship Opportunities', 'Application for Final-Year Practical Internship')}
                className="w-full py-4 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-sharp"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="p-3 bg-[#FAF8F5] border border-[#E4E1DC] text-center text-xs font-mono text-[#71717A]">
                Cohort: Fall / Winter Intake (Indiranagar Atelier)
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: TESTIMONIALS & CLIENT ACCLAIM CAROUSEL
      ========================================================================= */}
      <section className="py-20 bg-[#F5F3F0] border-b border-[#E4E1DC]">
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E] block mb-1">
                CLIENT VERIFICATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1B1C1A]">
                Trusted by Founders &amp; Educators
              </h2>
            </div>

            {/* Carousel navigation indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 transition-all ${
                    activeTestimonial === idx ? 'w-8 bg-[#C8102E]' : 'w-2 bg-[#E4E1DC] hover:bg-[#71717A]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Active Card */}
          <div className="bg-white border border-[#E4E1DC] p-8 sm:p-12 relative shadow-sm">
            <div className="text-5xl font-display font-serif text-[#E4E1DC] absolute top-6 left-6 select-none pointer-events-none">
              “
            </div>
            
            <div className="relative max-w-4xl">
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1B1C1A] leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="pt-8 mt-8 border-t border-[#E4E1DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-base text-[#1B1C1A]">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-xs text-[#5C403F] font-body">
                    {testimonials[activeTestimonial].title} · <span className="text-[#C8102E] font-semibold">{testimonials[activeTestimonial].company}</span>
                  </p>
                </div>

                <div className="p-2.5 bg-[#FAF8F5] border border-[#E4E1DC] text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">Verified Impact</span>
                  <span className="font-display font-bold text-sm text-[#C8102E]">{testimonials[activeTestimonial].metric}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto border-b border-[#E4E1DC]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E] block mb-2">
              CLARITY &amp; PROTOCOL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1B1C1A]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5C403F] mt-2 font-body">
              Everything you need to know about engaging Buckeye for strategic advertising, campaigns, and workshops.
            </p>
          </div>

          <div className="divide-y divide-[#E4E1DC] border-y border-[#E4E1DC] bg-white shadow-sm">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#1B1C1A]">
                      {faq.question}
                    </span>
                    <span className={`p-1 border border-[#E4E1DC] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C8102E] text-white border-[#C8102E]' : 'bg-white text-[#1B1C1A]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5C403F] font-body leading-relaxed bg-[#FAF8F5]/50 border-t border-[#F5F3F0]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-[#71717A] font-body">
            Have a bespoke inquiry or specific RFP?{' '}
            <button
              onClick={() => onOpenConsultation('Other Enquiries')}
              className="text-[#C8102E] font-bold underline hover:text-[#1B1C1A] transition-colors"
            >
              Contact our direct studio desks
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION: BENGALURU ATELIER HIGH-IMPACT SPREAD
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto mb-12">
        <div className="bg-[#121214] text-white p-8 sm:p-14 border border-[#27272A] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C8102E]"></div>

          <div className="max-w-3xl flex flex-col gap-5">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#FFDAD8]">
              INITIATE STRATEGIC PARTNERSHIP
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to grow your brand? Let’s talk.
            </h2>

            <p className="text-sm sm:text-base text-[#D4D4D8] font-body leading-relaxed">
              Book an introductory strategic consultation with our partners or connect directly with our studio desks in Bengaluru. From initial creative brief to full campaign rollout, we make your brand unignorable.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation('Advertising & Marketing')}
                className="px-8 py-4 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-sharp hover:-translate-y-0.5"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I'd%20like%20to%20discuss%20a%20strategic%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Priority WhatsApp Desk</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-[#71717A] border-t border-[#27272A] mt-4">
              <span>Strict Non-Disclosure Standard (NDA)</span>
              <span>Direct Studio Line: {SITE_CONFIG.contact.phoneDisplay}</span>
              <span>Bengaluru Atelier: 100Ft Rd, Indiranagar</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CASE STUDY QUICK-INSPECT LIGHTBOX MODAL
      ========================================================================= */}
      {activeCaseModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-reveal"
          onClick={() => setActiveCaseModal(null)}
        >
          <div 
            className="bg-white border-2 border-[#1B1C1A] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#E4E1DC] bg-[#FBF9F6]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C8102E]">
                  INTERACTIVE CASE INSPECTOR // {activeCaseModal.tag}
                </span>
              </div>
              <button
                onClick={() => setActiveCaseModal(null)}
                className="p-1.5 text-[#1B1C1A] hover:bg-[#C8102E] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#121214] border border-[#E4E1DC]">
                <img 
                  src={activeCaseModal.image} 
                  alt={activeCaseModal.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-wider block">
                  {activeCaseModal.client}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B1C1A] mt-1">
                  {activeCaseModal.title}
                </h3>
                <p className="text-sm text-[#5C403F] font-body mt-3 leading-relaxed">
                  {activeCaseModal.description}
                </p>
              </div>

              {/* Scope Breakdown */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E4E1DC]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] block mb-3">
                  Scope Architecture &amp; Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeCaseModal.scope?.map((sc: any, idx: number) => (
                    <div key={idx} className="p-3 bg-white border border-[#E4E1DC]">
                      <span className="text-[10px] font-mono uppercase text-[#71717A] block">{sc.label}</span>
                      <span className="font-body text-xs font-bold text-[#1B1C1A] block mt-0.5">{sc.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#E4E1DC]">
                <button
                  onClick={() => {
                    const clientName = activeCaseModal.client;
                    setActiveCaseModal(null);
                    onOpenConsultation('Advertising & Marketing', `Inquiry regarding case study: ${clientName}`);
                  }}
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Commission Project in this Discipline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/clients"
                  onClick={() => setActiveCaseModal(null)}
                  className="px-4 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider text-[#1B1C1A] transition-colors text-center"
                >
                  <span>View All Case Studies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
