import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full h-dvh flex flex-col bg-[#FBF9F6] overflow-hidden relative">

      {/* Background: soft crimson glow, no grid, no image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(200,16,46,0.055) 0%, transparent 68%)',
        }}
      />

      {/* Faint watermark */}
      <div
        aria-hidden="true"
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.016] font-display font-black text-[21vw] leading-none text-[#1B1C1A] tracking-tighter"
      >
        BUCKEYE
      </div>

      {/* ── HERO: takes all available space between header and bottom bar ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center relative z-10">

        {/* Pill tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-[#E4E1DC] shadow-sm mb-7 sm:mb-9">
          <span className="w-2 h-2 bg-[#C8102E] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.22em] uppercase text-[#1B1C1A]">
            Buckeye Design &amp; Consulting
          </span>
          <span className="hidden sm:block w-px h-3 bg-[#D4D1CC]" />
          <span className="hidden sm:block text-[10px] font-mono tracking-[0.15em] uppercase text-[#8A8480]">
            Commercial Advertising
          </span>
        </div>

        {/* Main headline — pure CSS, no image */}
        <h1
          className="font-display font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#C8102E] mb-5 sm:mb-6"
          style={{ fontSize: 'clamp(2.6rem, 9vw, 7.5rem)' }}
        >
          REACH YOUR
          <br />
          TARGET AUDIENCE
        </h1>

        {/* Divider ornament */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <span className="w-10 sm:w-16 h-px bg-[#C8102E]/25" />
          <span className="w-2 h-2 rotate-45 bg-[#C8102E]" />
          <span className="w-10 sm:w-16 h-px bg-[#C8102E]/25" />
        </div>

        {/* Sub-headline */}
        <p
          className="font-mono font-black uppercase tracking-[0.2em] text-[#1B1C1A] mb-5 sm:mb-7"
          style={{ fontSize: 'clamp(0.6rem, 1.6vw, 1.1rem)' }}
        >
          BETTER TARGETING &nbsp;=&nbsp; BETTER RESULTS
        </p>

        {/* Supporting copy */}
        <p className="text-[#5C403F] text-xs sm:text-sm md:text-base max-w-xl font-body leading-relaxed mb-8 sm:mb-10">
          We build campaigns that connect with the right people and deliver real
          business growth — from brand positioning to multi-market media planning
          and transparent attribution.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onOpenConsultation('Advertising & Marketing')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            <span>Initiate Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 bg-white text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white border border-[#D4D1CC] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── BOTTOM BAR: studio info, always pinned ── */}
      <div className="shrink-0 w-full bg-[#121214] text-[#A1A1AA] text-[10px] sm:text-[11px] font-mono py-2 px-5 sm:px-10 flex items-center justify-between gap-4 relative z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-white font-bold tracking-widest">BUCKEYE ATELIER</span>
          <span className="text-[#3F3F46]">·</span>
          <span>Bengaluru HQ</span>
          <span className="text-[#3F3F46] hidden sm:inline">·</span>
          <span className="hidden sm:inline">12.9716° N, 77.6412° E</span>
          <span className="text-[#3F3F46] hidden md:inline">·</span>
          <span className="hidden md:inline text-emerald-400 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Accepting Q4/Q1 Briefs
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-5">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/services" className="hover:text-white text-white font-bold transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>

    </div>
  );
};
