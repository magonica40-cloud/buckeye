import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare,
  Compass,
  Palette,
  TrendingUp,
  Radio,
  Megaphone,
  BarChart3,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const disciplines = [
    { num: '01', name: 'Strategy & Planning', id: 'strategy-planning', icon: Compass },
    { num: '02', name: 'Creative & Design', id: 'creative', icon: Palette },
    { num: '03', name: 'Digital Marketing', id: 'digital-marketing', icon: TrendingUp },
    { num: '04', name: 'Traditional Media', id: 'traditional-media', icon: Radio },
    { num: '05', name: 'PR & Events', id: 'pr-events', icon: Megaphone },
    { num: '06', name: 'Analytics & ROI', id: 'analytics-optimization', icon: BarChart3 },
    { num: '07', name: 'Specialized Practice', id: 'specialized-services', icon: Sparkles },
  ];

  return (
    <div className="w-full h-[calc(100dvh-5rem)] sm:h-[calc(100dvh-6.75rem)] overflow-hidden flex flex-col justify-between bg-[#FAF7F2] text-[#1B1C1A] select-none relative">
      
      {/* Ambient Radial Atmosphere (Soft, warm, luxury paper glow - No grid lines) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_40%,rgba(200,16,46,0.06)_0%,rgba(250,247,242,0)_65%)]"
      />

      {/* Subtle Atmospheric Watermark */}
      <div 
        aria-hidden="true"
        className="absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] font-display font-black text-[22vw] leading-none text-[#1B1C1A]"
      >
        BUCKEYE
      </div>

      {/* =========================================================================
          HERO CORE: SINGLE-SCREEN ZERO-SCROLL VIEWPORT
      ========================================================================= */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center relative z-10 max-w-6xl mx-auto w-full py-2">
        
        {/* Micro Agency Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 border border-[#E4E1DC] shadow-xs mb-4 sm:mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse"></span>
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1B1C1A]">
            BUCKEYE DESIGN &amp; CONSULTING // COMMERCIAL ADVERTISING
          </span>
        </div>

        {/* PRIMARY HEADLINE (Matching exact text & crimson tone from user image) */}
        <h1 className="font-display font-black text-[#C8102E] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] tracking-[-0.03em] leading-[0.95] uppercase mb-4 sm:mb-6 drop-shadow-xs max-w-5xl">
          REACH YOUR<br />
          TARGET AUDIENCE
        </h1>

        {/* SUB-HEADLINE (Matching exact text from user image) */}
        <div className="font-mono sm:font-sans font-extrabold text-[#C8102E] text-xs sm:text-base md:text-xl lg:text-2xl tracking-[0.16em] sm:tracking-[0.22em] uppercase mb-5 sm:mb-8">
          BETTER TARGETING = BETTER RESULTS
        </div>

        {/* Supporting Narrative */}
        <p className="text-[#5C403F] text-xs sm:text-sm md:text-base max-w-2xl font-body leading-relaxed mb-6 sm:mb-8 px-2">
          We build campaigns that connect with the right people and deliver real business growth. From brand positioning and cinema-grade creative to multi-market media planning and transparent attribution telemetry.
        </p>

        {/* Action Button Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-lg">
          <button
            onClick={() => onOpenConsultation('Advertising & Marketing')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Initiate Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={SITE_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 bg-white text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white border border-[#E4E1DC] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Desk</span>
          </a>

          <Link
            to="/services"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-[#71717A] hover:text-[#C8102E] transition-colors"
          >
            <span>All 7 Disciplines</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM DOCK: PINNED QUICK-DISCIPLINE STRIP (ZERO SCROLL, IN-VIEWPORT)
      ========================================================================= */}
      <div className="w-full bg-white/95 backdrop-blur-md border-t border-[#E4E1DC] relative z-20">
        
        {/* Disciplines Horizontal Shelf */}
        <div className="w-full px-4 sm:px-8 lg:px-12 py-2 sm:py-2.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-3 sm:gap-6 text-[11px] font-mono">
            <span className="text-[#A1A1AA] font-bold uppercase tracking-widest flex items-center gap-1.5 shrink-0 hidden md:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              Disciplines:
            </span>
            
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.id}
                  to={`/services#${d.id}`}
                  className="flex items-center gap-1.5 text-[#5C403F] hover:text-[#C8102E] font-medium transition-colors py-1 px-1.5 rounded group"
                >
                  <Icon className="w-3 h-3 text-[#A1A1AA] group-hover:text-[#C8102E] transition-colors" />
                  <span className="text-[#C8102E] font-bold">{d.num}</span>
                  <span className="group-hover:underline underline-offset-2">{d.name}</span>
                </Link>
              );
            })}

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-[#E4E1DC] text-[#71717A] text-[10px] uppercase font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Accepting Q4/Q1 Briefs</span>
            </div>
          </div>
        </div>

        {/* Studio Coordinates Micro-Footer */}
        <div className="bg-[#121214] text-[#A1A1AA] text-[10px] font-mono py-1 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold tracking-wider">BUCKEYE ATELIER</span>
            <span className="text-[#52525B]">·</span>
            <span>Bengaluru HQ</span>
            <span className="text-[#52525B] hidden sm:inline">·</span>
            <span className="hidden sm:inline">12.9716° N, 77.6412° E</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors text-white font-bold">Services</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>

    </div>
  );
};
