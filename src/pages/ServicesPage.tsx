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
  Check,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_DATA, ServiceCategory } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

// Pastel colour per service — matching adwants visual style
const PALETTE = [
  { bg: '#EBF4FF', icon: '#3B82F6', watermark: '#BFDBFE' }, // blue   — Strategy
  { bg: '#FEF0F2', icon: '#E11D48', watermark: '#FECDD3' }, // pink   — Creative
  { bg: '#EFFDF5', icon: '#16A34A', watermark: '#BBF7D0' }, // green  — Digital
  { bg: '#F5F0FF', icon: '#7C3AED', watermark: '#DDD6FE' }, // violet — Traditional
  { bg: '#FFF7EB', icon: '#D97706', watermark: '#FDE68A' }, // amber  — PR & Events
  { bg: '#ECFEFF', icon: '#0891B2', watermark: '#A5F3FC' }, // cyan   — Analytics
  { bg: '#F7FEE7', icon: '#65A30D', watermark: '#D9F99D' }, // lime   — Specialized
];

const ICONS = [Compass, Palette, TrendingUp, Radio, Megaphone, BarChart3, Sparkles];

const SHORT_DESC: Record<string, string> = {
  'strategy-planning':      'Insight + market research + campaign planning',
  'creative':               'Visual identity, copywriting & video production',
  'digital-marketing':      'Content, paid campaigns, engagement analytics',
  'traditional-media':      'TV, radio, print & outdoor advertising',
  'pr-events':              'Media relations, brand activations & event marketing',
  'analytics-optimization': 'Attribution dashboards, CRO & ROI reporting',
  'specialized-services':   'Product launches, packaging & marketing automation',
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeService = SERVICES_DATA[activeIndex];
  const activePalette = PALETTE[activeIndex] || PALETTE[0];
  const ActiveIcon = ICONS[activeIndex] || Sparkles;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121214] pt-24 md:pt-28">

      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section className="w-full border-b border-[#EBEBEB] py-10 md:py-12 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-[#C8102E]"></span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-[#C8102E]">
            Our Services
          </span>
        </div>
        <h1
          className="font-display font-black text-[#121214] tracking-tighter leading-[1.0]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          Capabilities built for<br />
          <span className="text-[#C8102E]">real commercial impact.</span>
        </h1>
      </section>

      {/* ── SPLIT LAYOUT: LEFT LIST + RIGHT CARD ──────────────── */}
      <section className="w-full flex-1 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Adwants-style service name list ──────────── */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-32">
            <ul className="flex flex-col divide-y divide-[#EBEBEB]">
              {SERVICES_DATA.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={service.id}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left py-5 md:py-6 flex items-center justify-between gap-4 group transition-colors duration-200 ${
                        isActive ? 'text-[#C8102E]' : 'text-[#1B1C1A] hover:text-[#C8102E]'
                      }`}
                    >
                      <span
                        className="font-display font-semibold leading-tight transition-all duration-200"
                        style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.55rem)' }}
                      >
                        {service.title}
                      </span>
                      <ArrowRight
                        className={`w-5 h-5 shrink-0 transition-all duration-200 ${
                          isActive
                            ? 'text-[#C8102E] translate-x-1'
                            : 'text-[#CCCCCC] group-hover:text-[#C8102E] group-hover:translate-x-1'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── RIGHT: Adwants-style pastel card ───────────────── */}
          <div className="w-full lg:w-[58%]">
            <div
              key={activeIndex}
              className="rounded-2xl overflow-hidden relative p-8 md:p-10 min-h-[380px] flex flex-col"
              style={{ backgroundColor: activePalette.bg }}
            >
              {/* Background ghost watermark icon */}
              <div
                className="absolute right-6 bottom-6 pointer-events-none select-none"
                aria-hidden="true"
                style={{ opacity: 0.18 }}
              >
                <ActiveIcon className="w-40 h-40 md:w-52 md:h-52" style={{ color: activePalette.watermark }} />
              </div>

              {/* Icon box */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 shadow-sm shrink-0"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <ActiveIcon className="w-6 h-6" style={{ color: activePalette.icon }} />
              </div>

              {/* Title */}
              <h2
                className="font-display font-bold text-[#121214] leading-tight mb-3 relative z-10"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}
              >
                {activeService.title}
              </h2>

              {/* Short desc */}
              <p className="text-sm md:text-base text-[#5C5C5C] font-body leading-relaxed mb-6 relative z-10 max-w-lg">
                {SHORT_DESC[activeService.id] || activeService.description}
              </p>

              {/* Full description */}
              <p className="text-sm text-[#7A7A7A] font-body leading-relaxed mb-8 relative z-10 max-w-lg">
                {activeService.description}
              </p>

              {/* Items list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 relative z-10">
                {activeService.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#1B1C1A]">
                    <Check className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span className="font-body">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-auto flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenConsultation(activeService.title)}
                  className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E] hover:gap-4 transition-all duration-200 group/link"
                >
                  <span>Initiate Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Deliverables strip below card */}
            {activeService.deliverables.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-3">
                {activeService.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl text-xs text-[#1B1C1A] font-body"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full shrink-0" />
                    {deliv}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto pb-16 md:pb-20">
        <div
          className="bg-[#121214] text-white p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl"
        >
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

    </div>
  );
};
