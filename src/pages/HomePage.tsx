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
          HERO — 3 clear visual zones, generous gaps between each
      ══════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center relative z-10">

        {/* ── ZONE 1: Agency identity tag ───────────────────────── */}
        <div className="flex flex-col items-center gap-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white border border-[#E4E1DC] shadow-sm">
            <span className="w-2 h-2 bg-[#C8102E] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.24em] uppercase text-[#1B1C1A]">
              Buckeye Design &amp; Consulting
            </span>
            <span className="w-px h-3.5 bg-[#D4D1CC]" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#8A8480]">
              Commercial Advertising
            </span>
          </div>
        </div>

        {/* ── ZONE 2: Primary headline ──────────────────────────── */}
        <div className="flex flex-col items-center gap-5 sm:gap-7 mb-10 sm:mb-14">
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-[-0.035em] text-[#C8102E]"
            style={{ fontSize: 'clamp(2.8rem, 9.5vw, 8rem)' }}
          >
            REACH YOUR
            <br />
            TARGET AUDIENCE
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <span className="block w-12 sm:w-20 h-px bg-[#C8102E]/30" />
            <span className="block w-2.5 h-2.5 rotate-45 bg-[#C8102E]" />
            <span className="block w-12 sm:w-20 h-px bg-[#C8102E]/30" />
          </div>

          <p
            className="font-mono font-black uppercase tracking-[0.22em] text-[#1B1C1A]"
            style={{ fontSize: 'clamp(0.6rem, 1.5vw, 1rem)' }}
          >
            Better Targeting &nbsp;=&nbsp; Better Results
          </p>
        </div>

        {/* ── ZONE 3: Copy + CTAs ───────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <p className="text-[#5C403F] text-sm sm:text-base max-w-lg font-body leading-relaxed">
            We build campaigns that connect with the right people and deliver real
            business growth — from brand positioning to multi-market media planning
            and transparent attribution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
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
