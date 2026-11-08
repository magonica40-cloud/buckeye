import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full h-dvh flex flex-col bg-[#FAF8F5] overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 72% 60% at 50% 44%, rgba(200,16,46,0.055) 0%, transparent 65%)' }}
      />

      <div aria-hidden="true" className="absolute top-8 left-8 pointer-events-none">
        <div className="w-14 h-px bg-[#C8102E]/25" />
        <div className="w-px h-14 bg-[#C8102E]/25" />
      </div>
      <div aria-hidden="true" className="absolute bottom-14 right-8 pointer-events-none">
        <div className="w-14 h-px bg-[#C8102E]/25 ml-auto" />
        <div className="w-px h-14 bg-[#C8102E]/25 ml-auto" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-end pr-6 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display font-black text-[#1B1C1A] leading-none tracking-tighter"
          style={{ fontSize: 'clamp(8rem, 24vw, 22rem)', opacity: 0.035 }}
        >
          BUCKEYE
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center relative z-10">
        <div className="max-w-5xl">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#C8102E]/70">
            <span className="block h-px w-10 bg-[#C8102E]/40" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.38em]">Buckeye Atelier</span>
            <span className="block h-px w-10 bg-[#C8102E]/40" />
          </div>

          <h1
            className="font-display font-black uppercase text-[#C8102E] leading-[0.9] tracking-[-0.07em]"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 6.2rem)',
              marginBottom: 'clamp(1rem, 2vw, 1.6rem)',
            }}
          >
            REACH YOUR
            <br />
            TARGET AUDIENCE
          </h1>

          <div className="flex items-center justify-center gap-4" style={{ marginBottom: 'clamp(1rem, 2vw, 1.8rem)' }}>
            <span className="block w-12 sm:w-16 h-px bg-[#C8102E]/30" />
            <span className="block w-2 h-2 rotate-45 bg-[#C8102E]/60" />
            <span className="block w-12 sm:w-16 h-px bg-[#C8102E]/30" />
          </div>

          <p
            className="font-mono font-bold uppercase tracking-[0.26em] text-[#1B1C1A]/65"
            style={{
              fontSize: 'clamp(0.55rem, 1.1vw, 0.8rem)',
              marginBottom: 'clamp(1.2rem, 2.5vw, 2.2rem)',
            }}
          >
            Better Targeting &nbsp;=&nbsp; Better Results
          </p>

          <p className="mx-auto max-w-xl text-[#5C403F] text-sm sm:text-base font-body leading-relaxed">
            We build campaigns that connect with the right people and deliver real
            business growth — from brand positioning to multi-market media planning
            and transparent attribution.
          </p>
        </div>
      </div>

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
