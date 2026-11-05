import React, { useState } from 'react';
import { ArrowRight, X, Check, Layers, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, ServiceCategory } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

const NUMS = ['01', '02', '03', '04', '05', '06', '07'];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121214] pt-24 md:pt-28">

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="w-full border-b border-[#E8E8E8] py-12 md:py-16 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 bg-[#C8102E]"></span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-[#C8102E]">
            Capabilities // 07 Disciplines
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#121214] tracking-tighter leading-[1.0]">
            What We<br />
            <span className="text-[#C8102E]">Do Best.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5C5C5C] font-body leading-relaxed max-w-lg">
            From market-defining brand strategy and cinema-grade creative production
            to performance media and transparent attribution — all under one roof.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST — adwants-style numbered rows ───────── */}
      <section className="w-full flex-1 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto py-0">
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-[#E8E8E8] cursor-pointer transition-all duration-300"
                style={{ backgroundColor: isHovered ? '#121214' : 'transparent' }}
              >
                <div className="flex items-center justify-between py-7 md:py-9 gap-6 px-2">
                  {/* Left: number + title */}
                  <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
                    {/* Number */}
                    <span
                      className="font-mono text-[11px] font-bold tracking-[0.2em] shrink-0 transition-colors duration-300"
                      style={{ color: isHovered ? '#C8102E' : '#ADADAD' }}
                    >
                      {NUMS[index]}
                    </span>

                    {/* Title */}
                    <h2
                      className="font-display font-black uppercase tracking-tight leading-none transition-colors duration-300 truncate"
                      style={{
                        fontSize: 'clamp(1.6rem, 4vw, 3.4rem)',
                        color: isHovered ? '#FFFFFF' : '#121214',
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* Right: subtitle tag + arrow */}
                  <div className="flex items-center gap-4 md:gap-8 shrink-0">
                    <span
                      className="hidden md:block text-[11px] font-mono uppercase tracking-[0.18em] transition-colors duration-300 max-w-[220px] text-right"
                      style={{ color: isHovered ? '#A1A1AA' : '#ADADAD' }}
                    >
                      {service.subtitle}
                    </span>
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border transition-all duration-300 shrink-0"
                      style={{
                        borderColor: isHovered ? '#C8102E' : '#E8E8E8',
                        backgroundColor: isHovered ? '#C8102E' : 'transparent',
                      }}
                    >
                      <ArrowRight
                        className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ color: isHovered ? '#FFFFFF' : '#121214' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto py-16 md:py-20">
        <div className="bg-[#121214] text-white p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at right center, rgba(200,16,46,0.22), transparent 70%)' }}
          />
          <div className="relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E] block mb-3">
              Initiate Commercial Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
              Ready to reach your{' '}
              <span className="text-[#FFDAD8]">target audience?</span>
            </h2>
            <p className="text-sm text-[#A1A1AA] font-body leading-relaxed max-w-lg">
              Book a strategic consultation with our creative directors and media planners at our
              Indiranagar, Bengaluru atelier or virtually worldwide.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8102E] text-white hover:bg-white hover:text-[#C8102E] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg"
            >
              <span>Initiate Strategic Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── DETAIL MODAL ─────────────────────────────────────────── */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white border border-[#E8E8E8] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 bg-[#F5F5F5] hover:bg-[#E8E8E8] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-[#121214]" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-red-50 text-[#C8102E] text-xs font-mono font-bold uppercase border border-red-200">
                {selectedService.number} // Deep Dive
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121214] mb-1">
              {selectedService.title}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold mb-5">
              {selectedService.subtitle}
            </p>
            <p className="text-sm text-[#5C5C5C] leading-relaxed mb-7">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121214] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8102E]" /> Scope of Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-[#FAFAFA] border border-[#E8E8E8] text-xs text-[#121214]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121214] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8102E]" /> Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-red-50/60 border border-red-200/60 text-xs text-[#121214] font-medium">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                    {deliv}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E8E8]">
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onOpenConsultation(s.title);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C8102E] text-white hover:bg-[#121214] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Initiate Brief for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
