import React from 'react';

interface WorkshopsPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-[#121214] flex flex-col items-center justify-center pt-24 md:pt-28 select-none">
      {/* Label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 bg-[#C8102E]"></span>
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-[#C8102E]">
          Workshops &amp; Masterclasses
        </span>
        <span className="w-2 h-2 bg-[#C8102E]"></span>
      </div>

      {/* Crimson rule */}
      <div className="w-16 h-[2px] bg-[#C8102E] mb-10"></div>

      {/* Main heading */}
      <h1 className="font-display font-black text-[clamp(3.5rem,10vw,9rem)] leading-none tracking-tighter text-white text-center uppercase">
        The Reveal
      </h1>

      {/* Sub heading */}
      <p className="mt-8 text-sm font-mono uppercase tracking-[0.3em] text-[#52525B]">
        Coming soon
      </p>

      {/* Bottom rule */}
      <div className="w-16 h-[2px] bg-[#27272A] mt-10"></div>
    </div>
  );
};
