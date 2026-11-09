import React from 'react';

interface WorkshopsPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = () => (
  <main className="min-h-[calc(100dvh-7rem)] bg-[#FBF9F6] text-[#C8102E] flex flex-col overflow-hidden relative">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
      <span
        className="font-display font-black leading-none text-[#C8102E] opacity-[0.05] tracking-[-0.06em]"
        style={{ fontSize: 'clamp(7rem, 18vw, 18rem)' }}
      >
        BUCKEYE
      </span>
    </div>

    <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center relative z-10">
      <p className="mb-7 text-[10px] sm:text-xs font-display font-bold uppercase tracking-[0.3em] text-[#C8102E]">
        Workshops &amp; Masterclasses
      </p>

      <h1
        data-cursor-hover
        className="font-display font-black uppercase leading-[0.88] tracking-[-0.07em] select-none text-[#C8102E]"
        style={{ fontSize: 'clamp(3.25rem, 8vw, 7rem)' }}
      >
        <span className="block">The</span>
        <span className="block transition-transform duration-300 hover:scale-[1.03]">Reveal</span>
      </h1>

      <span aria-hidden="true" className="mt-8 block h-px w-16 bg-[#C8102E]/60" />
    </div>
    <div className="h-1 w-full bg-[#C8102E]" />
  </main>
);
