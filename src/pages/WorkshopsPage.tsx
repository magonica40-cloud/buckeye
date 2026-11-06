import React from 'react';

interface WorkshopsPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden relative">
      {/* Giant red watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-[#C8102E] leading-none select-none"
          style={{ fontSize: 'clamp(5rem, 16vw, 15rem)', opacity: 0.05, letterSpacing: '-0.02em' }}
        >
          BUCKEYE
        </span>
      </div>

      {/* Main content — full viewport centred */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center" style={{ paddingTop: 'clamp(6rem, 14vh, 10rem)' }}>

        {/* Label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-px bg-[#C8102E]"></span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.35em] text-[#C8102E]">Workshops &amp; Masterclasses</span>
          <span className="w-10 h-px bg-[#C8102E]"></span>
        </div>

        {/* "THE" — black */}
        <div
          className="font-display font-black uppercase text-[#121214] leading-[0.9] tracking-tighter select-none"
          style={{ fontSize: 'clamp(5rem, 16vw, 13rem)' }}
        >
          THE
        </div>

        {/* "REVEAL" — crimson */}
        <div
          className="font-display font-black uppercase text-[#C8102E] leading-[0.9] tracking-tighter select-none"
          style={{ fontSize: 'clamp(5rem, 16vw, 13rem)' }}
        >
          REVEAL
        </div>

        {/* Sub caption */}
        <p className="mt-10 text-[11px] font-mono uppercase tracking-[0.4em] text-[#ADADAD]">
          Coming soon
        </p>

        {/* Dot + rule */}
        <div className="mt-8 flex items-center gap-3">
          <div className="w-16 h-px bg-[#C8102E]"></div>
          <div className="w-1.5 h-1.5 bg-[#C8102E]"></div>
          <div className="w-16 h-px bg-[#C8102E]"></div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#121214] py-4 px-8 flex items-center justify-between shrink-0">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">Buckeye · Bengaluru Atelier</span>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70 font-bold">Coming Soon</span>
      </div>
    </div>
  );
};
