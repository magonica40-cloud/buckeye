import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full h-dvh flex flex-col bg-[#FAF8F5] overflow-hidden relative">

      {/* Soft radial glow — pure CSS */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 72% 60% at 50% 44%, rgba(200,16,46,0.055) 0%, transparent 65%)' }}
      />

      {/* Corner accent lines */}
      <div aria-hidden="true" className="absolute top-8 left-8 pointer-events-none">
        <div className="w-14 h-px bg-[#C8102E]/25" />
        <div className="w-px h-14 bg-[#C8102E]/25" />
      </div>
      <div aria-hidden="true" className="absolute bottom-14 right-8 pointer-events-none">
        <div className="w-14 h-px bg-[#C8102E]/25 ml-auto" />
        <div className="w-px h-14 bg-[#C8102E]/25 ml-auto" />
      </div>

      {/* Faint watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-end pr-6 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display font-black text-[#1B1C1A] leading-none tracking-tighter"
          style={{ fontSize: 'clamp(8rem, 24vw, 22rem)', opacity: 0.014 }}
        >
          BUCKEYE
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO — centred, clean, no buttons, proper spacing
      ══════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center relative z-10">

        {/* Main headline */}
        <h1
          className="font-display font-black uppercase text-[#C8102E]"
          style={{
            fontSize: 'clamp(2.8rem, 9.5vw, 8rem)',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          REACH YOUR
          <br />
          TARGET AUDIENCE
        </h1>

        {/* Thin rule separator */}
        <div className="flex items-center gap-4" style={{ marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <span className="block w-16 sm:w-24 h-px bg-[#C8102E]/30" />
          <span className="block w-2 h-2 rotate-45 bg-[#C8102E]/60" />
          <span className="block w-16 sm:w-24 h-px bg-[#C8102E]/30" />
        </div>

        {/* Sub-line — proper breathing room */}
        <p
          className="font-mono font-bold uppercase tracking-[0.26em] text-[#1B1C1A]/60"
          style={{
            fontSize: 'clamp(0.6rem, 1.4vw, 0.9rem)',
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
          }}
        >
          Better Targeting &nbsp;=&nbsp; Better Results
        </p>

        {/* Supporting copy */}
        <p className="text-[#5C403F] text-sm sm:text-base max-w-md font-body leading-relaxed">
          We build campaigns that connect with the right people and deliver real
          business growth — from brand positioning to multi-market media planning
          and transparent attribution.
        </p>

      </div>

      {/* Bottom bar — studio info, always pinned */}
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
