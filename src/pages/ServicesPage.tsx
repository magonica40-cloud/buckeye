import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Compass, 
  Palette, 
  TrendingUp, 
  Radio, 
  Megaphone, 
  BarChart3, 
  Sparkles,
  ChevronRight,
  X,
  Layers,
  ShieldCheck,
  Check
} from 'lucide-react';
import { SERVICES_DATA, SITE_CONFIG, ServiceCategory } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  // Icon mapping for each service id
  const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
    'strategy-planning': Compass,
    'creative': Palette,
    'digital-marketing': TrendingUp,
    'traditional-media': Radio,
    'pr-events': Megaphone,
    'analytics-optimization': BarChart3,
    'specialized-services': Sparkles,
  };

  // Adwants bento grid configuration (colors, spans, accent highlights)
  const bentoConfig: Record<string, {
    colSpan: string;
    bgClass: string;
    borderClass: string;
    iconBg: string;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
    watermarkColor: string;
  }> = {
    'strategy-planning': {
      colSpan: 'col-span-1 md:col-span-2',
      bgClass: 'bg-[#F0F9FF]',
      borderClass: 'border-[#BAE6FD]/80 hover:border-[#0284C7]',
      iconBg: 'bg-white',
      iconColor: 'text-[#0284C7]',
      badgeBg: 'bg-sky-100',
      badgeText: 'text-[#0369A1]',
      watermarkColor: 'text-[#0284C7]',
    },
    'creative': {
      colSpan: 'col-span-1',
      bgClass: 'bg-[#FFF1F2]',
      borderClass: 'border-[#FECDD3]/80 hover:border-[#E11D48]',
      iconBg: 'bg-white',
      iconColor: 'text-[#E11D48]',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-[#BE123C]',
      watermarkColor: 'text-[#E11D48]',
    },
    'digital-marketing': {
      colSpan: 'col-span-1',
      bgClass: 'bg-[#F0FDF4]',
      borderClass: 'border-[#BBF7D0]/80 hover:border-[#16A34A]',
      iconBg: 'bg-white',
      iconColor: 'text-[#16A34A]',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-[#15803D]',
      watermarkColor: 'text-[#16A34A]',
    },
    'traditional-media': {
      colSpan: 'col-span-1',
      bgClass: 'bg-[#FAF5FF]',
      borderClass: 'border-[#E9D5FF]/80 hover:border-[#9333EA]',
      iconBg: 'bg-white',
      iconColor: 'text-[#9333EA]',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-[#7E22CE]',
      watermarkColor: 'text-[#9333EA]',
    },
    'pr-events': {
      colSpan: 'col-span-1',
      bgClass: 'bg-[#FFFBEB]',
      borderClass: 'border-[#FDE68A]/80 hover:border-[#D97706]',
      iconBg: 'bg-white',
      iconColor: 'text-[#D97706]',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-[#B45309]',
      watermarkColor: 'text-[#D97706]',
    },
    'analytics-optimization': {
      colSpan: 'col-span-1',
      bgClass: 'bg-[#EEF2FF]',
      borderClass: 'border-[#C7D2FE]/80 hover:border-[#4F46E5]',
      iconBg: 'bg-white',
      iconColor: 'text-[#4F46E5]',
      badgeBg: 'bg-indigo-100',
      badgeText: 'text-[#4338CA]',
      watermarkColor: 'text-[#4F46E5]',
    },
    'specialized-services': {
      colSpan: 'col-span-1 md:col-span-2',
      bgClass: 'bg-[#FFF7ED]',
      borderClass: 'border-[#FED7AA]/80 hover:border-[#EA580C]',
      iconBg: 'bg-white',
      iconColor: 'text-[#EA580C]',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-[#C2410C]',
      watermarkColor: 'text-[#EA580C]',
    },
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === activeTab);

  return (
    <div className="flex flex-col w-full pt-28 sm:pt-36 pb-20 bg-[#FBF9F6] text-[#1B1C1A]">
      
      {/* =========================================================================
          ADWANTS-STYLE EDITORIAL HEADER: PURE TYPOGRAPHY (NO HEADER PHOTOS)
      ========================================================================= */}
      <section className="w-full border-b border-[#E4E1DC] pb-12 sm:pb-16 relative">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto">
          
          {/* Top Tag */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E]">
              CAPABILITIES INDEX // 07 CORE DISCIPLINES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end justify-between">
            
            {/* Left: Main Impact Title */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-[-0.03em] leading-[1.08]">
                Commercial Advertising &amp; <br />
                <span className="text-[#C8102E]">Strategic Advisory.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-2xl">
                From market-defining brand positioning and cinema-grade visual craft to multi-market media planning, performance acquisition, and transparent attribution telemetry.
              </p>
            </div>

            {/* Right: Adwants Style Editorial Quote / Value Proposition */}
            <div className="lg:col-span-5 flex flex-col justify-end lg:border-l lg:border-[#E4E1DC] lg:pl-10">
              <div className="p-6 bg-white border border-[#E4E1DC] rounded-2xl shadow-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#71717A] block mb-2">
                  Atelier Discipline Philosophy
                </span>
                <p className="font-display italic text-lg sm:text-xl text-[#1B1C1A] font-semibold leading-snug mb-3">
                  "Everything your brand needs. Nothing it doesn't."
                </p>
                <div className="text-xs font-mono text-[#5C403F] flex items-center justify-between">
                  <span>Rigorous Full-Funnel Attribution</span>
                  <span className="text-[#C8102E] font-bold">100% Transparency</span>
                </div>
              </div>
            </div>

          </div>

          {/* Practice Quick Jump Navigation Bar */}
          <div className="mt-10 pt-6 border-t border-[#E4E1DC]/80 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#71717A] mr-2">
              Filter Chapter:
            </span>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all ${
                activeTab === 'all'
                  ? 'bg-[#1B1C1A] text-white shadow-xs'
                  : 'bg-white text-[#5C403F] border border-[#E4E1DC] hover:border-[#1B1C1A]'
              }`}
            >
              All (07)
            </button>
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                  activeTab === srv.id
                    ? 'bg-[#C8102E] text-white font-bold shadow-xs'
                    : 'bg-white text-[#5C403F] border border-[#E4E1DC] hover:border-[#1B1C1A]'
                }`}
              >
                {srv.number} {srv.title}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          ADWANTS ASYMMETRICAL BENTO GRID (ALL 7 DISCIPLINES PRESERVED)
      ========================================================================= */}
      <section className="w-full py-12 sm:py-16">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
            {filteredServices.map((service) => {
              const cfg = bentoConfig[service.id] || {
                colSpan: 'col-span-1',
                bgClass: 'bg-white',
                borderClass: 'border-[#E4E1DC]',
                iconBg: 'bg-white',
                iconColor: 'text-[#C8102E]',
                badgeBg: 'bg-zinc-100',
                badgeText: 'text-zinc-800',
                watermarkColor: 'text-zinc-400',
              };
              const Icon = serviceIcons[service.id] || Sparkles;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`${cfg.colSpan} ${cfg.bgClass} border ${cfg.borderClass} rounded-3xl p-7 sm:p-9 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group cursor-pointer`}
                >
                  {/* Subtle Background Watermark Icon (Adwants style: rotates slightly on hover) */}
                  <div 
                    aria-hidden="true"
                    className={`absolute -right-8 -bottom-8 pointer-events-none opacity-[0.06] group-hover:opacity-[0.11] ${cfg.watermarkColor} transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="w-64 h-64" />
                  </div>

                  {/* Card Header: Floating Icon & Chapter Number Pill */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      {/* Floating Icon Pill */}
                      <div className={`w-14 h-14 ${cfg.iconBg} rounded-2xl shadow-sm border border-black/5 flex items-center justify-center ${cfg.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Chapter Pill */}
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase ${cfg.badgeBg} ${cfg.badgeText}`}>
                        {service.number} // {service.title.split(' ')[0]}
                      </span>
                    </div>

                    {/* Service Title & Subtitle */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1B1C1A] tracking-tight mb-2 group-hover:text-[#C8102E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#71717A] font-semibold mb-4">
                      {service.subtitle}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-sm text-[#5C403F] font-body leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Items / Capabilities */}
                    <div className="space-y-2 mb-8">
                      <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#71717A]">
                        Key Capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/80 border border-black/5 text-xs text-[#1B1C1A] font-body"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C8102E]"></span>
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Interactive Trigger */}
                  <div className="relative z-10 pt-4 border-t border-black/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] group-hover:text-[#C8102E] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation(service.title);
                      }}
                      className="px-3 py-1.5 bg-white text-[#1B1C1A] hover:bg-[#C8102E] hover:text-white rounded-lg border border-black/10 text-[11px] font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Brief Chapter
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CHAPTER INSPECTOR MODAL (DEEP DIVE ON DELIVERABLES)
      ========================================================================= */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl border border-[#E4E1DC] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-100 text-[#C8102E] rounded-full text-xs font-mono font-bold uppercase">
                {selectedService.number} // Chapter Deep Dive
              </span>
              <span className="text-xs font-mono text-zinc-500 uppercase">
                Buckeye Advertising Specification
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B1C1A] mb-2">
              {selectedService.title}
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold mb-4">
              {selectedService.subtitle}
            </p>
            <p className="text-sm text-[#5C403F] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Core Capabilities */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8102E]" />
                <span>Scope of Services</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/70 text-xs text-[#1B1C1A]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tangible Deliverables */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B1C1A] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                <span>Tangible Deliverables Handed to Client</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-red-50/60 border border-red-200/60 text-xs text-[#1B1C1A] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200">
              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  onOpenConsultation(s.title);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                <span>Initiate Brief for {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          BOTTOM CONVERSION BANNER (ADWANTS INITIATIVE)
      ========================================================================= */}
      <section className="w-full mt-8 sm:mt-12 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] mx-auto">
        <div className="bg-[#121214] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle Ambient Crimson Glow */}
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-radial from-[#C8102E]/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E] block mb-3">
              Initiate Commercial Partnership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Ready to reach your <br />
              <span className="text-[#FFDAD8]">target audience?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] font-body leading-relaxed">
              Book a strategic consultation with our creative directors and media planners at our Indiranagar, Bengaluru atelier or virtually worldwide.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="w-full sm:w-auto px-7 py-4 bg-[#C8102E] text-white hover:bg-[#A60D24] text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
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
