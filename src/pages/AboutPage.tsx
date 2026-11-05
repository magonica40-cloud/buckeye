import React from 'react';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="flex flex-col w-full pt-24 md:pt-28 bg-[#FBF9F6] min-h-screen">

      {/* HERO — fits single viewport */}
      <section className="flex-1 w-full relative overflow-hidden hero-light-atmosphere py-8 md:py-10">
        {/* Subtle Watermark */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] font-display font-black text-[18rem] leading-none text-[#1B1C1A]">
          ATELIER
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto relative h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">

            {/* Left Column: Manifesto */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Buckeye Manifesto // Bengaluru Atelier
                </span>
                <span className="hidden sm:inline-block w-8 h-px bg-[#E4E1DC]"></span>
                <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#5C403F]">
                  Design &amp; Strategic Consulting
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.08]">
                We Create. You Grow.
              </h1>

              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-2xl">
                A creative space where ideas become identities, stories become experiences and brands become unforgettable. We bring imagination, strategy and execution together to make brands matter. Any crazy idea is welcome.
              </p>

              {/* Three Foundational Benchmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E4E1DC] mt-2">
                <div className="bg-white p-4 border border-[#E4E1DC] shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#5F5E60]">Precision</span>
                  </div>
                  <div className="font-display text-xl font-bold text-[#1B1C1A]">Bespoke</div>
                  <div className="text-[11px] text-[#5C403F] font-body mt-0.5">Custom strategic architecture</div>
                </div>

                <div className="bg-white p-4 border border-[#E4E1DC] shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#5F5E60]">Discipline</span>
                  </div>
                  <div className="font-display text-xl font-bold text-[#1B1C1A]">Swiss Rigor</div>
                  <div className="text-[11px] text-[#5C403F] font-body mt-0.5">Rigid modular aesthetic design</div>
                </div>

                <div className="bg-white p-4 border border-[#E4E1DC] shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#5F5E60]">Attribution</span>
                  </div>
                  <div className="font-display text-xl font-bold text-[#C8102E]">Full Funnel</div>
                  <div className="text-[11px] text-[#5C403F] font-body mt-0.5">Commercial ROI &amp; metrics</div>
                </div>
              </div>
            </div>

            {/* Right Column: CSS-only Studio Identity Card */}
            <div className="lg:col-span-6">
              <div className="border-2 border-[#1B1C1A] bg-[#121214] p-6 shadow-2xl">

                {/* Header badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-[#C8102E] px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                    Bengaluru Atelier · Indiranagar HQ
                  </span>
                </div>

                {/* Big quote */}
                <blockquote className="font-display font-bold text-white text-xl sm:text-2xl leading-snug mb-6 border-l-2 border-[#C8102E] pl-5">
                  "Where ideas become identities and brands become unforgettable."
                </blockquote>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { num: '7+', label: 'Years in Market' },
                    { num: '50+', label: 'Brands Served' },
                    { num: '100%', label: 'In-House Production' },
                    { num: '<24h', label: 'Response Guarantee' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#1C1C20] border border-[#27272A] p-4">
                      <div className="font-display font-black text-2xl text-[#C8102E] leading-none mb-1">{s.num}</div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#A1A1AA]">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pillars */}
                <div className="space-y-2">
                  {['Strategy & Brand Architecture', 'Cinema-Grade Creative Production', 'Multi-Market Media Planning', 'Transparent Attribution & ROI'].map((p) => (
                    <div key={p} className="flex items-center gap-3 text-[#D4D4D8] text-sm font-body">
                      <span className="w-1.5 h-1.5 bg-[#C8102E] shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between text-[11px] font-mono text-[#52525B]">
                  <span>Indiranagar Atelier HQ</span>
                  <span className="text-emerald-400 font-bold">12.9716° N, 77.6412° E</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
