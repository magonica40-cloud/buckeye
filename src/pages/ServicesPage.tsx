import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  'strategy-planning': Compass,
  'creative': Palette,
  'digital-marketing': TrendingUp,
  'traditional-media': Radio,
  'pr-events': Megaphone,
  'analytics-optimization': BarChart3,
  'specialized-services': Sparkles,
};

// All cards share the same crisp white/grey styling — uniform look
const CARD_ACCENT: Record<string, { icon: string; tag: string; tagBg: string }> = {
  'strategy-planning':    { icon: 'text-sky-600',    tag: 'text-sky-700',    tagBg: 'bg-sky-50 border-sky-200' },
  'creative':             { icon: 'text-rose-600',   tag: 'text-rose-700',   tagBg: 'bg-rose-50 border-rose-200' },
  'digital-marketing':   { icon: 'text-emerald-600', tag: 'text-emerald-700', tagBg: 'bg-emerald-50 border-emerald-200' },
  'traditional-media':   { icon: 'text-violet-600',  tag: 'text-violet-700', tagBg: 'bg-violet-50 border-violet-200' },
  'pr-events':            { icon: 'text-amber-600',  tag: 'text-amber-700',  tagBg: 'bg-amber-50 border-amber-200' },
  'analytics-optimization': { icon: 'text-indigo-600', tag: 'text-indigo-700', tagBg: 'bg-indigo-50 border-indigo-200' },
  'specialized-services': { icon: 'text-orange-600', tag: 'text-orange-700', tagBg: 'bg-orange-50 border-orange-200' },
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <div className="flex flex-col w-full pt-28 sm:pt-36 pb-20 bg-[#FBF9F6] text-[#1B1C1A]">

      {/* ── PAGE HEADER ────────────────────────────────────────── */}
      <section className="w-full border-b border-[#E4E1DC] pb-10 sm:pb-14">
        <div className="px-5 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto">

          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2.5 h-2.5 bg-[#C8102E]" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E]">
              Capabilities Index // 07 Core Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-end">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.06] mb-4">
                Commercial Advertising &amp;{' '}
                <span className="text-[#C8102E]">Strategic Advisory.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-xl">
                From market-defining brand positioning and cinema-grade visual craft to multi-market
                media planning, performance acquisition and transparent attribution.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E4E1DC] shadow-sm">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#71717A] block mb-2">
                Atelier Philosophy
              </span>
              <p className="font-display italic text-xl text-[#1B1C1A] font-semibold leading-snug mb-3">
                "Everything your brand needs. Nothing it doesn't."
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#5C403F]">
                <span>Rigorous Full-Funnel Attribution</span>
                <span className="text-[#C8102E] font-bold">100% Transparent</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── UNIFORM 3-COLUMN SERVICE GRID ──────────────────────── */}
      <section className="w-full py-12 sm:py-16">
        <div className="px-5 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => {
              const Icon = ICON_MAP[service.id] || Sparkles;
              const accent = CARD_ACCENT[service.id] || {
                icon: 'text-[#C8102E]',
                tag: 'text-[#C8102E]',
                tagBg: 'bg-red-50 border-red-200',
              };

              return (
                <div
                  key={service.id}
                  id={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-white border border-[#E4E1DC] hover:border-[#C8102E]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer group"
                >
                  {/* Card top accent bar */}
                  <div className="h-1 w-full bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-7 flex flex-col flex-1 gap-5">

                    {/* Icon + number row */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-[#FBF9F6] border border-[#E4E1DC] flex items-center justify-center ${accent.icon}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border ${accent.tagBg} ${accent.tag}`}>
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1B1C1A] tracking-tight mb-1 group-hover:text-[#C8102E] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#5C403F] font-body leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Capability tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.slice(0, 4).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FBF9F6] border border-[#E4E1DC] text-[11px] text-[#1B1C1A] font-body"
                        >
                          <span className="w-1 h-1 bg-[#C8102E]" />
                          {item}
                        </span>
                      ))}
                      {service.items.length > 4 && (
                        <span className="inline-flex items-center px-2.5 py-1 bg-[#FBF9F6] border border-[#E4E1DC] text-[11px] text-[#71717A] font-mono">
                          +{service.items.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-[#F0EDE9] flex items-center justify-between">
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

      {/* ── DETAIL MODAL ────────────────────────────────────────── */}
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

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-50 text-[#C8102E] text-xs font-mono font-bold uppercase border border-red-200">
                {selectedService.number} // Deep Dive
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B1C1A] mb-1">
              {selectedService.title}
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold mb-4">
              {selectedService.subtitle}
            </p>
            <p className="text-sm text-[#5C403F] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8102E]" />
                Scope of Services
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
                <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                Deliverables
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

      {/* ── BOTTOM CTA BANNER ───────────────────────────────────── */}
      <section className="w-full mt-8 sm:mt-12 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="bg-[#121214] text-white p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="absolute right-0 top-0 bottom-0 w-72 opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at right center, #C8102E, transparent 70%)' }}
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
