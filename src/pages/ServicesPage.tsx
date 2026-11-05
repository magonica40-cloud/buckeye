import React, { useState } from 'react';
import {
  ArrowRight,
  Compass,
  Palette,
  TrendingUp,
  Radio,
  Megaphone,
  BarChart3,
  Sparkles,
  X,
  Layers,
  ShieldCheck,
  Check
} from 'lucide-react';
import { SERVICES_DATA, ServiceCategory } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  'strategy-planning':      Compass,
  'creative':               Palette,
  'digital-marketing':      TrendingUp,
  'traditional-media':      Radio,
  'pr-events':              Megaphone,
  'analytics-optimization': BarChart3,
  'specialized-services':   Sparkles,
};

// Per-card colour scheme — uniform layout, distinct colour personality
const PALETTE: Record<string, {
  bg: string;
  border: string;
  hoverBorder: string;
  iconBg: string;
  iconColor: string;
  tagBg: string;
  tagText: string;
  watermark: string;
  bar: string;
}> = {
  'strategy-planning': {
    bg: 'bg-[#F0F9FF]', border: 'border-[#BAE6FD]', hoverBorder: 'hover:border-sky-400',
    iconBg: 'bg-white', iconColor: 'text-sky-600',
    tagBg: 'bg-sky-100', tagText: 'text-sky-800',
    watermark: 'text-sky-400', bar: 'bg-sky-500',
  },
  'creative': {
    bg: 'bg-[#FFF1F2]', border: 'border-[#FECDD3]', hoverBorder: 'hover:border-rose-400',
    iconBg: 'bg-white', iconColor: 'text-rose-600',
    tagBg: 'bg-rose-100', tagText: 'text-rose-800',
    watermark: 'text-rose-400', bar: 'bg-rose-500',
  },
  'digital-marketing': {
    bg: 'bg-[#F0FDF4]', border: 'border-[#BBF7D0]', hoverBorder: 'hover:border-emerald-400',
    iconBg: 'bg-white', iconColor: 'text-emerald-600',
    tagBg: 'bg-emerald-100', tagText: 'text-emerald-800',
    watermark: 'text-emerald-400', bar: 'bg-emerald-500',
  },
  'traditional-media': {
    bg: 'bg-[#FAF5FF]', border: 'border-[#E9D5FF]', hoverBorder: 'hover:border-violet-400',
    iconBg: 'bg-white', iconColor: 'text-violet-600',
    tagBg: 'bg-violet-100', tagText: 'text-violet-800',
    watermark: 'text-violet-400', bar: 'bg-violet-500',
  },
  'pr-events': {
    bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', hoverBorder: 'hover:border-amber-400',
    iconBg: 'bg-white', iconColor: 'text-amber-600',
    tagBg: 'bg-amber-100', tagText: 'text-amber-800',
    watermark: 'text-amber-400', bar: 'bg-amber-500',
  },
  'analytics-optimization': {
    bg: 'bg-[#EEF2FF]', border: 'border-[#C7D2FE]', hoverBorder: 'hover:border-indigo-400',
    iconBg: 'bg-white', iconColor: 'text-indigo-600',
    tagBg: 'bg-indigo-100', tagText: 'text-indigo-800',
    watermark: 'text-indigo-400', bar: 'bg-indigo-500',
  },
  'specialized-services': {
    bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', hoverBorder: 'hover:border-orange-400',
    iconBg: 'bg-white', iconColor: 'text-orange-600',
    tagBg: 'bg-orange-100', tagText: 'text-orange-800',
    watermark: 'text-orange-400', bar: 'bg-orange-500',
  },
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <div className="flex flex-col w-full pt-28 sm:pt-36 pb-20 bg-[#FBF9F6] text-[#1B1C1A]">

      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="w-full border-b border-[#E4E1DC] pb-10 sm:pb-14">
        <div className="px-5 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto">

          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 bg-[#C8102E]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E]">
              Capabilities Index // 07 Core Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-end">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.06] mb-5">
                Commercial Advertising &amp;{' '}
                <span className="text-[#C8102E]">Strategic Advisory.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-xl">
                From market-defining brand positioning and cinema-grade visual craft to multi-market
                media planning, performance acquisition and transparent attribution.
              </p>
            </div>

            <div className="p-7 bg-white border border-[#E4E1DC] shadow-sm">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#71717A] block mb-3">
                Atelier Philosophy
              </span>
              <p className="font-display italic text-xl sm:text-2xl text-[#1B1C1A] font-semibold leading-snug mb-4">
                "Everything your brand needs. Nothing it doesn't."
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#5C403F] pt-3 border-t border-[#F0EDE9]">
                <span>Rigorous Full-Funnel Attribution</span>
                <span className="text-[#C8102E] font-bold">100% Transparent</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── UNIFORM COLOURED 3-COLUMN GRID ──────────────────────── */}
      <section className="w-full py-12 sm:py-16">
        <div className="px-5 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto">

          {/* Equal 3-col grid — every card identical structure & height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {SERVICES_DATA.map((service) => {
              const Icon = ICON_MAP[service.id] || Sparkles;
              const p = PALETTE[service.id] || {
                bg: 'bg-white', border: 'border-[#E4E1DC]', hoverBorder: 'hover:border-[#C8102E]',
                iconBg: 'bg-white', iconColor: 'text-[#C8102E]',
                tagBg: 'bg-red-100', tagText: 'text-red-800',
                watermark: 'text-red-400', bar: 'bg-[#C8102E]',
              };

              return (
                <div
                  key={service.id}
                  id={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`${p.bg} border ${p.border} ${p.hoverBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer group relative overflow-hidden`}
                >
                  {/* Colour top bar (reveals on hover) */}
                  <div className={`h-1 w-full ${p.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Background watermark icon */}
                  <div
                    aria-hidden="true"
                    className={`absolute -right-6 -bottom-6 pointer-events-none opacity-[0.07] group-hover:opacity-[0.13] ${p.watermark} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="w-48 h-48" />
                  </div>

                  {/* Card body */}
                  <div className="relative z-10 p-7 flex flex-col flex-1 gap-5">

                    {/* Row 1: Icon box + number badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 p-3 ${p.iconBg} border border-black/5 shadow-sm flex items-center justify-center ${p.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest ${p.tagBg} ${p.tagText}`}>
                        {service.number}
                      </span>
                    </div>

                    {/* Row 2: Title + subtitle */}
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1B1C1A] tracking-tight mb-1 group-hover:text-[#C8102E] transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] font-semibold">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Row 3: Description — flex-1 so all cards stretch equally */}
                    <p className="text-sm text-[#5C403F] font-body leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Row 4: Capability tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.slice(0, 4).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/70 border border-black/8 text-[11px] text-[#1B1C1A] font-body"
                        >
                          <span className="w-1 h-1 bg-[#C8102E]" />
                          {item}
                        </span>
                      ))}
                      {service.items.length > 4 && (
                        <span className="inline-flex items-center px-2.5 py-1 bg-white/50 border border-black/8 text-[11px] text-[#71717A] font-mono">
                          +{service.items.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Row 5: Footer actions */}
                    <div className="pt-4 border-t border-black/8 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] group-hover:text-[#C8102E] flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onOpenConsultation(service.title); }}
                        className="px-3.5 py-1.5 bg-[#1B1C1A] text-white hover:bg-[#C8102E] text-[11px] font-mono font-bold uppercase tracking-wider transition-colors"
                      >
                        Brief Us
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ── DETAIL MODAL ─────────────────────────────────────────── */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white border border-[#E4E1DC] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 bg-[#F5F3F0] hover:bg-[#E4E1DC] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-[#1B1C1A]" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-red-50 text-[#C8102E] text-xs font-mono font-bold uppercase border border-red-200">
                {selectedService.number} // Deep Dive
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B1C1A] mb-1">
              {selectedService.title}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold mb-5">
              {selectedService.subtitle}
            </p>
            <p className="text-sm text-[#5C403F] leading-relaxed mb-7">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8102E]" /> Scope of Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-[#FBF9F6] border border-[#E4E1DC] text-xs text-[#1B1C1A]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8102E]" /> Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-red-50/60 border border-red-200/60 text-xs text-[#1B1C1A] font-medium">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                    {deliv}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E1DC]">
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onOpenConsultation(s.title);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Initiate Brief for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM CTA BANNER ─────────────────────────────────────── */}
      <section className="w-full mt-8 sm:mt-14 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div
          className="bg-[#121214] text-white p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg"
            >
              <span>Initiate Strategic Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
