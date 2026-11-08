import React from 'react';

interface ClientsPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden relative">
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

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center" style={{ paddingTop: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-px bg-[#C8102E]" />
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.35em] text-[#C8102E]">Client Portfolio</span>
          <span className="w-8 h-px bg-[#C8102E]" />
        </div>

        <div
          className="font-display font-black uppercase text-[#121214] leading-[0.9] tracking-[-0.08em] select-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          THE
        </div>

        <div
          className="font-display font-black uppercase text-[#C8102E] leading-[0.9] tracking-[-0.08em] select-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          REVEAL
        </div>
      </div>

      <div className="bg-[#121214] py-3 px-8 flex items-center justify-between shrink-0">
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40">Buckeye · Bengaluru Atelier</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/70 font-bold">Coming Soon</span>
      </div>
    </div>
  );
};
