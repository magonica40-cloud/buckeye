import React from 'react';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <main className="w-full min-h-screen bg-[#FBF9F6] pt-24 md:pt-28 flex flex-col">
      <section className="flex-1 min-h-[calc(100dvh-7rem)] w-full flex items-stretch">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16 flex flex-col justify-center">
          <div className="w-full max-w-6xl">
            <h1
              data-cursor-hover
              className="font-display font-black text-[#1B1C1A] tracking-[-0.065em] leading-[0.88]"
              style={{ fontSize: 'clamp(3rem, 8.3vw, 7.5rem)' }}
            >
              We Create.
              <br />
              <span className="text-[#C8102E] font-serif italic font-medium">You Grow.</span>
            </h1>

            <div className="mt-8 md:mt-10 flex items-stretch gap-5 md:gap-8">
              <span aria-hidden="true" className="w-1 shrink-0 bg-[#C8102E]" />
              <p className="max-w-4xl text-lg sm:text-xl lg:text-2xl text-[#5C403F] font-body leading-relaxed">
                A creative space where ideas become identities, stories become experiences
                and brands become unforgettable. We bring imagination, strategy and
                execution together to make brands matter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
