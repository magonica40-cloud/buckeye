import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full h-dvh flex flex-col bg-[#FAF8F5] overflow-hidden relative">

      {/* ── Background atmosphere (pure CSS) ──────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 72% 60% at 50% 44%, rgba(200,16,46,0.06) 0%, transparent 65%)',
        }}
      />
      {/* Top-left corner line accent */}
      <div aria-hidden="true" className="absolute top-8 left-8 pointer-events-none">
        <div className="w-14 h-px bg-[#C8102E]/30" />
        <div className="w-px h-14 bg-[#C8102E]/30" />
      </div>
      {/* Bottom-right corner line accent */}
      <div aria-hidden="true" className="absolute bottom-14 right-8 pointer-events-none">
        <div className="w-14 h-px bg-[#C8102E]/30 ml-auto" />
        <div className="w-px h-14 bg-[#C8102E]/30 ml-auto" />
      </div>
      {/* Giant faint watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-end pr-6 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display font-black text-[#1B1C1A] leading-none tracking-tighter"
          style={{ fontSize: 'clamp(8rem, 24vw, 22rem)', opacity: 0.015 }}
        >
          BUCKEYE
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════════
          HERO — simple, clean, perfectly centred
      ══════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center relative z-10 gap-6 sm:gap-8">

        {/* Main headline */}
        <h1
          className="font-display font-black uppercase text-[#C8102E]"
          style={{ fontSize: 'clamp(2.8rem, 9.5vw, 8rem)', lineHeight: '0.92', letterSpacing: '-0.03em' }}
        >
          REACH YOUR
          <br />
          TARGET AUDIENCE
        </h1>

        {/* Sub-line */}
        <p
          className="font-mono font-bold uppercase tracking-[0.22em] text-[#1B1C1A]/70"
          style={{ fontSize: 'clamp(0.55rem, 1.4vw, 0.9rem)' }}
        >
          Better Targeting &nbsp;=&nbsp; Better Results
        </p>

        {/* Supporting copy */}
        <p className="text-[#5C403F] text-sm sm:text-base max-w-md font-body leading-relaxed">
          We build campaigns that connect with the right people and deliver real
          business growth — from brand positioning to multi-market media planning
          and transparent attribution.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Advertising & Marketing')}
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            <span>Initiate Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white border border-[#C4C0BB] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* ── BOTTOM BAR: studio coordinates, always pinned ─────── */}
      <div className="shrink-0 w-full bg-[#121214] text-[#A1A1AA] text-[10px] sm:text-[11px] font-mono py-2.5 px-5 sm:px-10 flex items-center justify-between gap-4 relative z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-white font-bold tracking-widest uppercase">Buckeye Atelier</span>
          <span className="text-[#3F3F46]">·</span>
          <span>Bengaluru HQ</span>
          <span className="text-[#3F3F46] hidden sm:inline">·</span>
          <span className="hidden sm:inline">12.9716° N, 77.6412° E</span>
          <span className="text-[#3F3F46] hidden md:inline">·</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Accepting Q4/Q1 Briefs
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/services" className="text-white font-bold hover:text-[#FFDAD8] transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>

    </div>
  );
};
