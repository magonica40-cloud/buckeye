import React from 'react';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FBF9F6] pt-24 md:pt-28">
      <section className="flex-1 w-full relative overflow-hidden py-10 md:py-14">
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none font-display font-black leading-none text-[#1B1C1A]"
          style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', opacity: 0.035, letterSpacing: '-0.04em' }}
          aria-hidden="true"
        >
          BUCKEYE
        </div>

        <div className="px-5 sm:px-10 lg:px-16 w-full max-w-[1200px] mx-auto relative h-full flex items-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <span className="w-2.5 h-2.5 bg-[#C8102E]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                Buckeye Manifesto
              </span>
            </div>

            <h1
              className="font-display font-black text-[#1B1C1A] tracking-[-0.06em] leading-[0.9]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)' }}
            >
              We Create. You Grow.
            </h1>

            <p className="mt-6 max-w-3xl text-base sm:text-lg text-[#5C403F] font-body leading-relaxed">
              A creative space where ideas become identities, stories become experiences
              and brands become unforgettable. We bring imagination, strategy and
              execution together to make brands matter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
