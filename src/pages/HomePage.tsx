import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-full h-dvh flex flex-col bg-[#FAF8F5] overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 72% 60% at 50% 44%, rgba(200,16,46,0.055) 0%, transparent 65%)' }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center relative z-10">
        <div className="w-full max-w-6xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-[#C8102E]/70">
            <span className="block h-px w-10 bg-[#C8102E]/40" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.38em]">Buckeye Atelier</span>
            <span className="block h-px w-10 bg-[#C8102E]/40" />
          </div>

          <h1
            data-cursor-hover
            className="font-display font-extrabold uppercase text-[#C8102E] leading-[0.98] tracking-[-0.055em] transition-all duration-500 ease-out hover:scale-[1.015] hover:text-[#A80D27]"
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6.4vw, 6.4rem)',
              marginBottom: 'clamp(1.25rem, 3vw, 2.5rem)',
            }}
          >
            REACH YOUR
            <br />
            <span className="font-extrabold not-italic tracking-[-0.055em]">TARGET AUDIENCE</span>
          </h1>

          <div className="flex items-center justify-center gap-4" style={{ marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
            <span className="block w-12 sm:w-16 h-px bg-[#C8102E]/30" />
            <span className="block w-2 h-2 rotate-45 bg-[#C8102E]/60" />
            <span className="block w-12 sm:w-16 h-px bg-[#C8102E]/30" />
          </div>

          <p
            className="font-mono font-extrabold uppercase tracking-[0.18em] text-[#1B1C1A]/70"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', marginBottom: '0' }}
          >
            Better Targeting &nbsp;=&nbsp; Better Results
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
