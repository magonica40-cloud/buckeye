import React from 'react';
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
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA, CASE_STUDIES_DATA, TECH_CAREER_LAUNCHPAD_INFO } from '../data/siteData';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full bg-[#FBF9F6] text-[#1B1C1A]">
      
      {/* =========================================================================
          HERO: EDITORIAL MAGAZINE BROADSHEET (ASIDE FROM CONVENTIONAL AI TEMPLATES)
      ========================================================================= */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E4E1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Metadata Line */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E4E1DC] text-xs font-sans text-[#5C403F]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C8102E] inline-block"></span>
              <span className="font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                BUCKEYE // EST. BENGALURU
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-[#71717A]">
              <span>Design &amp; Brand Advisory</span>
              <span>12.9716° N, 77.6412° E</span>
            </div>
          </div>

          {/* Monolithic Editorial Headline (Verbatim Brief) */}
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[5.5rem] font-bold text-[#1B1C1A] tracking-[-0.03em] leading-[1.02]">
              Good Brands Get Noticed. <br />
              <span className="font-serif italic font-normal text-[#C8102E]">
                Great Brands Get Remembered.
              </span>
            </h1>
          </div>

          {/* Asymmetric Subtitle & Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 mt-6 border-t border-[#E4E1DC] items-start">
            
            <div className="lg:col-span-5">
              <blockquote className="font-display text-xl sm:text-2xl text-[#1B1C1A] italic font-normal leading-snug">
                “{SITE_CONFIG.heroSupporting}”
              </blockquote>
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Advertising & Marketing')}
                  className="px-7 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I%20would%20like%20to%20discuss%20a%20strategic%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Priority Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <p className="text-sm sm:text-base text-[#5C403F] font-sans leading-relaxed">
                {SITE_CONFIG.agencyDescription}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E4E1DC] text-xs font-sans">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#71717A] block">Discipline</span>
                  <span className="font-bold text-[#1B1C1A]">Swiss Modernism</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#71717A] block">Focus</span>
                  <span className="font-bold text-[#1B1C1A]">Full-Funnel ROI</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#71717A] block">Atelier</span>
                  <span className="font-bold text-[#C8102E]">Bengaluru HQ</span>
                </div>
              </div>
            </div>

          </div>

          {/* Dominant Carefully Selected Editorial Visual */}
          <div className="mt-12 relative border border-[#E4E1DC] bg-white p-2 shadow-sm">
            <div className="relative h-80 sm:h-[480px] w-full overflow-hidden bg-[#121214]">
              <img 
                src="/assets/buckeye_hero_backdrop.jpg" 
                alt="Buckeye Design & Consulting Atelier Studio in Bengaluru" 
                className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 border border-[#E4E1DC] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#C8102E] block">
                    Strategic Atelier // Bengaluru
                  </span>
                  <span className="font-display font-bold text-sm text-[#1B1C1A]">
                    Where quantitative consumer psychology meets uncompromising aesthetic discipline.
                  </span>
                </div>
                <Link 
                  to="/about"
                  className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E] hover:text-[#1B1C1A] flex items-center gap-1 shrink-0"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INFINITE RUNNING CAPABILITY TICKER
      ========================================================================= */}
      <div className="w-full bg-[#121214] text-white py-3.5 border-b border-[#27272A] overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-sans uppercase font-bold tracking-[0.2em]">
          <span>Brand Architecture</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Commercial Advertising</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Digital Growth Engine</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Tech Career Launchpad</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Student Practical Apprenticeship</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Packaging &amp; Identity</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Media Strategy &amp; Buying</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Bengaluru Creative Atelier</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          {/* Repeating copy */}
          <span>Brand Architecture</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Commercial Advertising</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Digital Growth Engine</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Tech Career Launchpad</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Student Practical Apprenticeship</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Packaging &amp; Identity</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Media Strategy &amp; Buying</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
          <span>Bengaluru Creative Atelier</span>
          <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
        </div>
      </div>

      {/* =========================================================================
          AGENCY STORYTELLING (HUMAN EDITORIAL SPREAD)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E4E1DC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                01 // Agency Architecture
              </span>
              <span className="w-8 h-px bg-[#E4E1DC]"></span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight leading-tight">
              Engineered for Brands That Refuse to Be Ignored.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5C403F] font-sans leading-relaxed">
              <p>
                Operating out of Bengaluru's innovation corridor, <strong>Buckeye – Design &amp; Consulting</strong> bridges the chasm between cold management consulting and undisciplined boutique creative. We do not manufacture cosmetic identity changes; we deploy precision cultural capital that commands market share.
              </p>
              <p>
                By uniting quantitative consumer psychology with uncompromising Swiss aesthetic discipline, our agency constructs commercial assets that remain memorable through shifts in digital consumption.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#C8102E] hover:text-[#1B1C1A] transition-colors group"
              >
                <span>Read the Buckeye Manifesto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative border border-[#E4E1DC] bg-white p-2 shadow-sm">
              <div className="relative h-80 sm:h-96 overflow-hidden bg-[#121214]">
                <img 
                  src="/assets/war_room.jpg" 
                  alt="Buckeye Strategic Deliberation Studio" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-4 border border-[#E4E1DC] flex items-center justify-between">
                  <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-[#1B1C1A]">
                    Studio Deliberation · South Wing
                  </span>
                  <span className="px-2 py-0.5 bg-[#C8102E] text-white text-[10px] font-sans uppercase font-bold tracking-wider">
                    Atelier Standard
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CAPABILITIES INDEX: EDITORIAL PRACTICE SPREAD (AVOIDING IDENTICAL CARDS)
      ========================================================================= */}
      <section className="py-20 bg-[#F5F3F0] border-b border-[#E4E1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#C8102E]"></span>
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  02 // Full Spectrum Practice
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
                Comprehensive Agency Capabilities
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#1B1C1A] hover:text-[#C8102E] transition-colors"
            >
              <span>Explore All 7 Practice Chapters</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Structured Horizontal Practice Rows */}
          <div className="divide-y divide-[#E4E1DC] border-y border-[#E4E1DC] bg-white shadow-sm">
            {SERVICES_DATA.map((service) => (
              <div 
                key={service.id} 
                className="p-6 sm:p-8 hover:bg-[#FBF9F6] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                  <span className="font-mono text-xs font-bold text-[#C8102E] pt-1">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#1B1C1A] group-hover:text-[#C8102E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#5C403F] font-sans mt-1 max-w-xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-3">
                      {service.items.slice(0, 3).map((item, i) => (
                        <span key={i} className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-4 py-2 border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider text-[#1B1C1A] transition-colors"
                  >
                    Enquire
                  </button>
                  <Link
                    to={`/services#${service.id}`}
                    className="p-2 bg-[#1B1C1A] text-white hover:bg-[#C8102E] transition-colors"
                    aria-label={`View ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO ARCHIVE: DIVERSE IMAGE PROPORTIONS & TRANSPARENT NOTATION
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E4E1DC]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                03 // Selected Archive
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
              Representative Case Studies
            </h2>
            <p className="text-xs text-[#5C403F] uppercase tracking-wider mt-1">
              Sample creative demonstrations illustrating Buckeye's execution standards.
            </p>
          </div>
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E] hover:text-[#1B1C1A] transition-colors"
          >
            <span>View Work Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Varied Image Proportion Grid (Widescreen + Portrait) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Feature 1: Widescreen Kinetic */}
          <div className="lg:col-span-7 bg-white border border-[#E4E1DC] p-4 shadow-sm group">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#121214]">
              <img 
                src="/assets/kinetic.jpg" 
                alt="Kinetic Aeronautics" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-[#121214]/90 px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest text-white">
                Mobility &amp; Aviation Tech
              </div>
            </div>
            <div className="pt-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                Kinetic Aeronautics
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B1C1A] mt-1">
                The Autonomous Leap: Rebranding Urban Aviation
              </h3>
              <p className="text-xs text-[#5C403F] font-sans mt-1">
                Strategic visual identity, investor presentation system, and architectural digital platform concept.
              </p>
              <div className="pt-3 mt-3 border-t border-[#F5F3F0] flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-[#71717A] uppercase">Prototype Case Study</span>
                <Link to="/clients" className="font-bold text-[#1B1C1A] hover:text-[#C8102E] flex items-center gap-1">
                  <span>Inspect Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 2: Editorial Portrait Atelier Nouveau */}
          <div className="lg:col-span-5 bg-white border border-[#E4E1DC] p-4 shadow-sm group">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#121214]">
              <img 
                src="/assets/atelier.jpg" 
                alt="Atelier Nouveau" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-[#121214]/90 px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest text-white">
                Luxury Consumer
              </div>
            </div>
            <div className="pt-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                Atelier Nouveau
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B1C1A] mt-1">
                Sensory Architecture: Haute Perfumery
              </h3>
              <p className="text-xs text-[#5C403F] font-sans mt-1">
                Tactile bottle packaging, custom glass forms, and editorial digital storefront concept.
              </p>
              <div className="pt-3 mt-3 border-t border-[#F5F3F0] flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-[#71717A] uppercase">Prototype Case Study</span>
                <Link to="/clients" className="font-bold text-[#1B1C1A] hover:text-[#C8102E] flex items-center gap-1">
                  <span>Inspect Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CAMPUS & TALENT SPOTLIGHT: TECH CAREER LAUNCHPAD (HIGH PRIORITY)
      ========================================================================= */}
      <section className="py-20 bg-[#121214] text-white border-y-2 border-[#C8102E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C8102E] text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                  Flagship Campus Initiative
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  Bengaluru Colleges
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                TECH CAREER LAUNCHPAD
              </h2>

              <p className="font-display italic text-lg sm:text-xl text-[#FFDAD8] leading-snug">
                {TECH_CAREER_LAUNCHPAD_INFO.subTitle}
              </p>

              <div className="p-4 bg-[#1E1E22] border border-[#27272A] text-xs font-sans text-[#D4D4D8] leading-relaxed">
                <strong className="text-white uppercase tracking-wider block mb-1">Target Audience:</strong>
                {TECH_CAREER_LAUNCHPAD_INFO.targetAudience}
              </div>

              {/* Confirmed Curriculum Grid */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                  Confirmed Curriculum Sessions
                </div>

                <div className="p-4 bg-[#1A1A1E] border-l-2 border-[#C8102E] flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FFDAD8]">
                    <span>00:00–00:20 (20 Mins)</span>
                    <span className="uppercase text-emerald-400">Confirmed</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    Welcome and IT Career Roadmap
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-sans">
                    <strong>Student outcome:</strong> Understand entry-level career options, industry specializations, and real-world IT hiring expectations.
                  </p>
                </div>

                <div className="p-4 bg-[#1A1A1E] border-l-2 border-[#C8102E] flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FFDAD8]">
                    <span>00:20–01:00 (40 Mins)</span>
                    <span className="uppercase text-emerald-400">Confirmed Lab</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    AI Tools for Software Students
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-sans">
                    <strong>Student outcome:</strong> Practise using AI for learning, coding support, bug debugging, and everyday professional productivity.
                  </p>
                </div>

                <div className="p-3 bg-[#1E1E22] border border-dashed border-[#3F3F46] text-xs text-[#71717A] font-sans">
                  Remaining timetable customizable in coordination with college placement cells.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenConsultation('Workshops & Training', 'Tech Career Launchpad')}
                  className="px-8 py-4 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenConsultation('Workshops & Training', 'College On-Campus Workshop Enquiry')}
                  className="px-6 py-4 border border-[#3F3F46] hover:border-white text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enquire About College Workshops</span>
                </button>
              </div>

            </div>

            {/* Logistics Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#1C1C20] border border-[#27272A] p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E] border-b border-[#27272A] pb-3">
                  Programme Details
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                    <span className="text-[#71717A] uppercase">Duration</span>
                    <span className="text-sm font-bold text-white font-mono">{TECH_CAREER_LAUNCHPAD_INFO.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                    <span className="text-[#71717A] uppercase">Batch Size</span>
                    <span className="text-sm font-bold text-white font-mono">{TECH_CAREER_LAUNCHPAD_INFO.batchSize}</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                    <span className="text-[#71717A] uppercase">Venue</span>
                    <span className="text-sm font-bold text-white">{TECH_CAREER_LAUNCHPAD_INFO.venue}</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                    <span className="text-[#71717A] uppercase">Ticket Price</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">{TECH_CAREER_LAUNCHPAD_INFO.ticketPrice}</span>
                  </div>
                </div>

                <Link
                  to="/workshops"
                  className="w-full py-3 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] text-center transition-colors block"
                >
                  View Workshops Page →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PRACTICAL FINAL-YEAR INTERNSHIP SECTION
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white border border-[#E4E1DC] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C8102E]"></span>
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Talent Development
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
                Practical Final-Year Internship Programme
              </h3>

              <p className="text-sm sm:text-base text-[#5C403F] font-sans leading-relaxed">
                A hands-on apprenticeship for final-year students preparing for careers in advertising, creative direction, digital marketing, and commercial design. Gain real brief experience under direct senior mentorship.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  'Real-world project briefs',
                  'Campaign execution',
                  'Digital marketing',
                  'Creative design & typography',
                  'Content development',
                  'Professional mentorship',
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#F5F3F0] p-2.5 text-xs font-sans font-semibold text-[#1B1C1A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#71717A] font-sans pt-1">
                * Note: Buckeye provides real skills training and industry immersion. We do not make false promises of guaranteed employment or placement.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenConsultation('Internship Opportunities', 'Application for Final-Year Practical Internship')}
                className="w-full py-4 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Apply for Internship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL EDITORIAL CALL TO ACTION
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-8">
        <div className="bg-[#121214] text-white p-8 sm:p-14 border border-[#27272A] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C8102E]"></div>

          <div className="max-w-3xl flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#FFDAD8]">
              Initiate Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to grow your brand? Let’s talk.
            </h2>
            <p className="text-sm sm:text-base text-[#D4D4D8] font-sans leading-relaxed">
              Book an introductory strategic consultation with our partners or connect directly with our studio desks in Bengaluru.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation('Advertising & Marketing')}
                className="px-8 py-4 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 shadow-md"
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

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-[11px] font-sans uppercase tracking-widest text-[#71717A] border-t border-[#27272A] mt-2">
              <span>Strict Non-Disclosure Standard</span>
              <span>Direct Studio Line: {SITE_CONFIG.contact.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
