import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Compass,
  Palette,
  TrendingUp,
  Radio,
  Megaphone,
  BarChart3,
  Sparkles
} from 'lucide-react';

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
    <div className="w-full h-dvh flex flex-col bg-[#FBF9F6] text-[#1B1C1A] select-none overflow-hidden relative">

      {/* ── Decorative background layers (pure CSS, no images) ── */}
      {/* Warm radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 38%, rgba(200,16,46,0.045) 0%, transparent 70%)' }}
      />
      {/* Corner accent lines */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-28 h-28 pointer-events-none">
        <div className="absolute top-6 left-6 w-px h-16 bg-gradient-to-b from-[#C8102E]/20 to-transparent" />
        <div className="absolute top-6 left-6 w-16 h-px bg-gradient-to-r from-[#C8102E]/20 to-transparent" />
      </div>
      <div aria-hidden="true" className="absolute bottom-16 right-0 w-28 h-28 pointer-events-none">
        <div className="absolute bottom-6 right-6 w-px h-16 bg-gradient-to-t from-[#C8102E]/20 to-transparent" />
        <div className="absolute bottom-6 right-6 w-16 h-px bg-gradient-to-l from-[#C8102E]/20 to-transparent" />
      </div>
      {/* Giant watermark */}
      <div 
        aria-hidden="true"
        className="absolute -right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.018] font-display font-black text-[22vw] leading-none text-[#1B1C1A] tracking-tight"
      >
        BUCKEYE
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO CORE — Fills viewport, centered content, zero scroll
      ═══════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center relative z-10 max-w-5xl mx-auto w-full">

        {/* Micro Agency Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#E4E1DC] shadow-sm mb-6 sm:mb-8">
          <span className="w-2 h-2 bg-[#C8102E] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1B1C1A]">
            Buckeye Design &amp; Consulting
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-[#E4E1DC]" />
          <span className="hidden sm:inline text-[10px] font-mono tracking-[0.15em] uppercase text-[#71717A]">
            Commercial Advertising
          </span>
        </div>

        {/* PRIMARY HEADLINE — Pure CSS styled text */}
        <h1 className="font-display font-black text-[#C8102E] text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] tracking-[-0.03em] leading-[0.92] uppercase mb-3 sm:mb-5 max-w-5xl">
          REACH YOUR<br />
          TARGET AUDIENCE
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="w-8 sm:w-12 h-px bg-[#C8102E]/30" />
          <span className="w-2 h-2 bg-[#C8102E] rotate-45" />
          <span className="w-8 sm:w-12 h-px bg-[#C8102E]/30" />
        </div>

        {/* SUB-HEADLINE */}
        <div className="font-mono font-extrabold text-[#1B1C1A] text-xs sm:text-sm md:text-lg lg:text-xl tracking-[0.18em] uppercase mb-5 sm:mb-7">
          BETTER TARGETING&nbsp;&nbsp;=&nbsp;&nbsp;BETTER RESULTS
        </div>

        {/* Supporting Narrative */}
        <p className="text-[#5C403F] text-xs sm:text-sm md:text-base max-w-2xl font-body leading-relaxed mb-7 sm:mb-9 px-2">
          We build campaigns that connect with the right people and deliver real business growth — from brand positioning and cinema-grade creative to multi-market media planning and transparent attribution.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-lg">
          <button
            onClick={() => onOpenConsultation('Advertising & Marketing')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Initiate Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/services"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 bg-white text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white border border-[#E4E1DC] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            <span>Explore All 7 Disciplines</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM DOCK — Pinned discipline strip, always in viewport
      ═══════════════════════════════════════════════════════════ */}
      <div className="w-full bg-white/95 backdrop-blur-md border-t border-[#E4E1DC] relative z-20 shrink-0">

        {/* Disciplines Horizontal Shelf */}
        <div className="w-full px-4 sm:px-8 lg:px-12 py-2 sm:py-2.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max gap-3 sm:gap-6 text-[11px] font-mono">
            <span className="text-[#A1A1AA] font-bold uppercase tracking-widest flex items-center gap-1.5 shrink-0 hidden md:inline-flex">
              <span className="w-1.5 h-1.5 bg-[#C8102E]" />
              Disciplines:
            </span>

            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.id}
                  to={`/services#${d.id}`}
                  className="flex items-center gap-1.5 text-[#5C403F] hover:text-[#C8102E] font-medium transition-colors py-1 px-1.5 group"
                >
                  <Icon className="w-3 h-3 text-[#A1A1AA] group-hover:text-[#C8102E] transition-colors" />
                  <span className="text-[#C8102E] font-bold">{d.num}</span>
                  <span className="group-hover:underline underline-offset-2">{d.name}</span>
                </Link>
              );
            })}

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-[#E4E1DC] text-[#71717A] text-[10px] uppercase font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
