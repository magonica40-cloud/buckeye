import React from 'react';

interface ClientsPageProps {
  onOpenConsultation: (category?: string) => void;
}

const revealLetters = ['T', 'H', 'E', 'R', 'E', 'V', 'E', 'A', 'L'];

export const ClientsPage: React.FC<ClientsPageProps> = () => (
  <main className="min-h-screen bg-[#FBF9F6] text-[#C8102E] flex flex-col overflow-hidden relative pt-20 sm:pt-[7.25rem]">
    <div className="flex-1 min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100dvh-7.25rem)] flex flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-6 text-[10px] sm:text-xs font-display font-bold uppercase tracking-[0.3em] text-[#C8102E]">
        Client Portfolio
      </p>

      <h1
        data-cursor-hover
        className="font-display font-black uppercase leading-[1.05] select-none text-[#C8102E]"
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.12em' }}
      >
        <span className="block text-[#1B1C1A]">T</span>
        <span className="block mt-2">
          {revealLetters.map((letter, index) => (
            <span key={letter + index} className="inline-block" style={{ marginRight: index < revealLetters.length - 1 ? '0.18em' : '0' }}>
              {letter}
            </span>
          ))}
        </span>
      </h1>

      <span aria-hidden="true" className="mt-7 block h-px w-16 bg-[#C8102E]/60" />
    </div>
  </main>
);
