import React from 'react';

interface WorkshopsPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-24 md:pt-28 overflow-hidden relative">

      {/* Giant red background watermark letter */}
      <div
        className="absolute left-0 top-0 w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-[#C8102E] leading-none"
          style={{ fontSize: 'clamp(16rem, 50vw, 60rem)', opacity: 0.04, letterSpacing: '-0.05em' }}
        >
          W
        </span>
      </div>

      {/* Content — vertically centred */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-12 h-[2px] bg-[#C8102E]"></span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#C8102E]">
            Workshops &amp; Masterclasses
          </span>
          <span className="w-12 h-[2px] bg-[#C8102E]"></span>
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-black uppercase text-[#1B1C1A] leading-none tracking-tighter mb-6"
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
        >
          The
        </h1>
        <h1
          className="font-display font-black uppercase text-[#C8102E] leading-none tracking-tighter"
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
        >
          Reveal
        </h1>

        {/* Subtext */}
        <p className="mt-10 text-xs font-mono uppercase tracking-[0.4em] text-[#9B9B9B]">
          Coming soon
        </p>

        {/* Bottom rule */}
        <div className="mt-10 flex items-center gap-4">
          <div className="w-20 h-[2px] bg-[#C8102E]"></div>
          <div className="w-2 h-2 bg-[#C8102E]"></div>
          <div className="w-20 h-[2px] bg-[#C8102E]"></div>
        </div>
      </div>

      {/* Bottom red band */}
      <div className="bg-[#C8102E] py-5 px-8 flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-white/70">
          Buckeye · Bengaluru Atelier
        </span>
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-white">
          Coming Soon
        </span>
      </div>
    </div>
  );
};
