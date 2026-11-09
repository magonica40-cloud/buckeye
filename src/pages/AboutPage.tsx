import React from 'react';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => (
  <main className="w-full min-h-screen bg-[#FBF9F6] pt-24 md:pt-28 flex flex-col relative overflow-hidden">
    <section className="flex-1 min-h-[calc(100dvh-7rem)] w-full flex items-center justify-center relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h1
            data-cursor-hover
            className="font-display font-black text-[#C8102E] tracking-[-0.065em] leading-[1.05]"
            style={{ fontSize: 'clamp(3rem, 8.3vw, 7.5rem)' }}
          >
            <span className="block">We Create.</span>
            <span className="block mt-3 sm:mt-5">You Grow.</span>
          </h1>

          <p className="mt-8 md:mt-10 max-w-4xl text-xl sm:text-2xl lg:text-3xl text-[#C8102E] font-body leading-relaxed">
            A creative space where ideas become identities, stories become experiences
            and brands become unforgettable. We bring imagination, strategy and
            execution together to make brands matter.
          </p>
        </div>
      </div>
    </section>
  </main>
);
