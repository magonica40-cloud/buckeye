import React from 'react';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FBF9F6] pt-24 md:pt-28">
      <section className="flex-1 w-full relative overflow-hidden py-10 md:py-14">
        <div className="px-5 sm:px-10 lg:px-16 w-full max-w-[1200px] mx-auto relative h-full flex items-center">
          <div className="max-w-4xl">
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
