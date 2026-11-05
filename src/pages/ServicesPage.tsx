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
  Check,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA, ServiceCategory } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

// Adwants-style pastel palette — one per service
const PALETTE = [
  { bg: '#EBF4FF', icon: '#3B82F6', iconBg: '#FFFFFF', watermark: '#BFDBFE' },  // blue
  { bg: '#FEF0F2', icon: '#E11D48', iconBg: '#FFFFFF', watermark: '#FECDD3' },  // pink
  { bg: '#EFFDF5', icon: '#16A34A', iconBg: '#FFFFFF', watermark: '#BBF7D0' },  // green
  { bg: '#F5F0FF', icon: '#7C3AED', iconBg: '#FFFFFF', watermark: '#DDD6FE' },  // violet
  { bg: '#FFF7EB', icon: '#D97706', iconBg: '#FFFFFF', watermark: '#FDE68A' },  // amber
  { bg: '#ECFEFF', icon: '#0891B2', iconBg: '#FFFFFF', watermark: '#A5F3FC' },  // cyan
  { bg: '#F7FEE7', icon: '#65A30D', iconBg: '#FFFFFF', watermark: '#D9F99D' },  // lime
];

const ICONS = [Compass, Palette, TrendingUp, Radio, Megaphone, BarChart3, Sparkles];

const SHORT_DESC: Record<string, string> = {
  'strategy-planning':      'Brand positioning, market research & campaign strategy',
  'creative':               'Visual identity, copywriting & video production',
  'digital-marketing':      'Social media, SEO, paid ads & influencer marketing',
  'traditional-media':      'TV, radio, print & outdoor advertising',
  'pr-events':              'Media relations, brand activations & event marketing',
  'analytics-optimization': 'Attribution dashboards, CRO & ROI reporting',
  'specialized-services':   'Product launches, packaging design & marketing automation',
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121214] pt-24 md:pt-28">

      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="w-full border-b border-[#EBEBEB] py-12 md:py-16 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-2 h-2 bg-[#C8102E]"></span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-[#C8102E]">
            Our Services
          </span>
        </div>
        <h1
          className="font-display font-black text-[#121214] tracking-tighter leading-[1.0]"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
        >
          Capabilities built for<br />
          <span className="text-[#C8102E]">real commercial impact.</span>
        </h1>
      </section>

      {/* ── PASTEL CARDS GRID ────────────────────────────────────── */}
      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES_DATA.map((service, index) => {
            const p = PALETTE[index] || PALETTE[0];
            const Icon = ICONS[index] || Sparkles;
            const shortDesc = SHORT_DESC[service.id] || service.description;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col p-7 md:p-8 min-h-[260px]"
                style={{ backgroundColor: p.bg }}
              >
                {/* Background ghost icon watermark */}
                <div
                  className="absolute right-4 bottom-4 pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  style={{ opacity: 0.18 }}
                  aria-hidden="true"
                >
                  <Icon
                    className="w-28 h-28 md:w-32 md:h-32"
                    style={{ color: p.watermark }}
                  />
                </div>

                {/* Icon box */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-sm shrink-0"
                  style={{ backgroundColor: p.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: p.icon }} />
                </div>

                {/* Title + description */}
                <div className="flex-1 flex flex-col relative z-10">
                  <h3
                    className="font-display font-bold text-[#121214] leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#5C5C5C] font-body leading-relaxed flex-1">
                    {shortDesc}
                  </p>
                </div>

                {/* VIEW OUR WORK link */}
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                  className="relative z-10 mt-6 flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#C8102E] hover:gap-3 transition-all duration-200 group/link"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto pb-16 md:pb-20">
        <div className="bg-[#121214] text-white p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl">
          <div
            className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none rounded-r-2xl"
            style={{ background: 'radial-gradient(ellipse at right center, rgba(200,16,46,0.22), transparent 70%)' }}
          />
          <div className="relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E] block mb-3">
              Initiate Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Ready to reach your{' '}
              <span className="text-[#FFDAD8]">target audience?</span>
            </h2>
            <p className="text-sm text-[#A1A1AA] font-body leading-relaxed max-w-lg">
              Book a strategic consultation at our Indiranagar, Bengaluru atelier or virtually worldwide.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8102E] text-white hover:bg-white hover:text-[#C8102E] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg rounded-lg"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white border border-[#E8E8E8] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 bg-[#F5F5F5] hover:bg-[#E8E8E8] flex items-center justify-center transition-colors rounded-lg"
            >
              <X className="w-5 h-5 text-[#121214]" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-red-50 text-[#C8102E] text-xs font-mono font-bold uppercase border border-red-200 rounded">
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
                  <div key={i} className="flex items-start gap-2 p-3 bg-[#FAFAFA] border border-[#E8E8E8] text-xs text-[#121214] rounded-lg">
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
                  <div key={i} className="flex items-center gap-2 p-3 bg-red-50/60 border border-red-200/60 text-xs text-[#121214] font-medium rounded-lg">
                    <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full shrink-0" />
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C8102E] text-white hover:bg-[#121214] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md rounded-lg"
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
