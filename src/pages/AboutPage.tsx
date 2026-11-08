import React from 'react';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <main className="w-full min-h-screen bg-[#FBF9F6] pt-24 md:pt-28 flex flex-col">
      <section className="flex-1 min-h-[calc(100dvh-7rem)] w-full flex items-center py-10 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="w-full max-w-6xl">
            <h1
              className="font-display font-black text-[#1B1C1A] tracking-[-0.065em] leading-[0.92]"
              style={{ fontSize: 'clamp(3.25rem, 9vw, 8.5rem)' }}
            >
              We Create.
              <br />
              <span className="text-[#C8102E] font-serif italic font-medium">You Grow.</span>
            </h1>

            <p className="mt-8 md:mt-12 max-w-4xl text-lg sm:text-xl lg:text-2xl text-[#5C403F] font-body leading-relaxed">
              A creative space where ideas become identities, stories become experiences
              and brands become unforgettable. We bring imagination, strategy and
              execution together to make brands matter.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
