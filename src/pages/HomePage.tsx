import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-full h-dvh flex flex-col bg-[#FAF8F5] overflow-hidden relative border-t-4 border-[#C8102E]">
      <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 text-center">
        <div className="w-full max-w-6xl">
          <h1
            data-cursor-hover
            className="font-display font-extrabold uppercase text-[#C8102E] leading-tight tracking-[-0.035em]"
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: 'clamp(2.4rem, 5.6vw, 4.5rem)',
            }}
          >
            <span className="block">REACH YOUR</span>
            <span className="block mt-5 sm:mt-8">TARGET AUDIENCE</span>
          </h1>

          <p
            className="mt-8 sm:mt-10 font-sans font-extrabold uppercase text-[#C8102E] leading-tight tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.25rem, 3.1vw, 2.5rem)' }}
          >
            Better Targeting = Better Results
          </p>
        </div>
      </main>

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
