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
  Box, 
  MessageSquare,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA, SITE_CONFIG } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const coreServices = SERVICES_DATA.slice(0, 6);
  const specializedService = SERVICES_DATA[6]; // Specialized Services

  const practiceImages: Record<string, string> = {
    'strategy-planning': '/assets/war_room.jpg',
    'creative': '/assets/atelier.jpg',
    'digital-marketing': '/assets/omnia.jpg',
    'traditional-media': '/assets/horizon.jpg',
    'pr-events': '/assets/indiranagar_office.jpg',
    'analytics-optimization': '/assets/kinetic.jpg',
    'specialized-services': '/assets/studio_hq.jpg',
  };

  const filteredCore = activeTab === 'all' 
    ? coreServices 
    : coreServices.filter(s => s.id === activeTab);

  return (
    <div className="flex flex-col w-full pt-24 md:pt-28 pb-16 bg-[#FBF9F6] text-[#1B1C1A]">
      
      {/* =========================================================================
          EDITORIAL HEADER
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-12 border-b border-[#E4E1DC]">
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Capabilities Index // Full Spectrum Practice
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1B1C1A] tracking-[-0.03em] leading-tight">
            Commercial Advertising &amp; <br />
            <span className="font-serif italic font-normal text-[#C8102E]">Strategic Advisory.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#5C403F] font-sans leading-relaxed max-w-3xl">
            From market-defining brand positioning and cinema-grade visual craft to multi-market media planning, performance acquisition, and transparent attribution telemetry.
          </p>

          {/* Practice Jump Navigation Bar */}
          <div className="pt-6">
            <div className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#71717A] mb-3">
              Practice Disciplines:
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider border transition-colors ${
                  activeTab === 'all'
                    ? 'bg-[#1B1C1A] text-white border-[#1B1C1A]'
                    : 'bg-white text-[#5C403F] border-[#E4E1DC] hover:border-[#1B1C1A]'
                }`}
              >
                All Chapters (06)
              </button>
              {coreServices.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`px-4 py-2 text-xs font-sans uppercase tracking-wider border transition-colors ${
                    activeTab === srv.id
                      ? 'bg-[#C8102E] text-white border-[#C8102E] font-bold'
                      : 'bg-white text-[#5C403F] border-[#E4E1DC] hover:border-[#1B1C1A]'
                  }`}
                >
                  {srv.number} {srv.title}
                </button>
              ))}
              <a
                href="#specialized-services"
                className="px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider border border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Specialized Modules</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE SIX DISTINCT EDITORIAL PRACTICE CHAPTERS
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-20">
          {filteredCore.map((service, index) => {
            const isReversed = index % 2 === 1;
            const imgPath = practiceImages[service.id] || '/assets/war_room.jpg';

            return (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white border border-[#E4E1DC] p-8 sm:p-12 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Narrative & Deliverables Column */}
                  <div className={`lg:col-span-7 flex flex-col gap-6 ${isReversed ? 'lg:col-start-6' : ''}`}>
                    
                    <div className="flex items-center justify-between border-b border-[#F5F3F0] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#C8102E]">
                          {service.number} //
                        </span>
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                          {service.subtitle}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#71717A] uppercase">
                        Practice Chapter
                      </span>
                    </div>

                    <div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A] tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#5C403F] font-sans mt-3 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Actual Confirmed Services List from PDF */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1B1C1A] block">
                        Included Services &amp; Solutions
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.items.map((item, idx) => (
                          <div 
                            key={idx}
                            className="bg-[#F5F3F0] border border-[#E4E1DC] p-3 text-xs font-sans font-semibold text-[#1B1C1A] flex items-center gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 bg-[#C8102E] shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable Artifacts */}
                    {service.deliverables && (
                      <div className="pt-2">
                        <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#71717A] block mb-2">
                          Core Deliverable Artifacts:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((del, dIdx) => (
                            <span 
                              key={dIdx}
                              className="px-2.5 py-1 bg-white border border-[#E4E1DC] text-[11px] font-sans text-[#1B1C1A]"
                            >
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Triggers */}
                    <div className="pt-4 border-t border-[#F5F3F0] flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onOpenConsultation(service.title)}
                        className="px-6 py-3 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-2 shadow-sm"
                      >
                        <span>Enquire About {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I'd%20like%20to%20discuss%20our%20needs%20for%20[${service.title}].`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-semibold tracking-wider text-[#1B1C1A] flex items-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Quick Dispatch</span>
                      </a>
                    </div>

                  </div>

                  {/* Asymmetric Visual Frame */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div className="border border-[#E4E1DC] bg-[#121214] p-2 shadow-sm">
                      <div className="relative h-72 sm:h-96 overflow-hidden">
                        <img 
                          src={imgPath} 
                          alt={service.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 border border-[#E4E1DC] flex items-center justify-between">
                          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                            Chapter {service.number} // {service.title}
                          </span>
                          <span className="w-2 h-2 bg-[#C8102E]"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SPECIALIZED SERVICES (DISTINCT ART-DIRECTED MODULE PRESENTATION)
      ========================================================================= */}
      {specializedService && (
        <section id="specialized-services" className="py-20 bg-[#121214] text-white border-y-2 border-[#C8102E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#C8102E]"></span>
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#FFDAD8]">
                  07 // Specialized Deployment Modules
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Specialized Services
              </h2>
              <p className="text-sm text-[#A1A1AA] font-sans mt-2">
                Focused commercial modules for physical product launches, packaging architecture, and automation infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedService.items.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1C1C20] border border-[#27272A] p-6 flex flex-col justify-between hover:border-[#C8102E] transition-colors group shadow-lg"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#C8102E] block mb-3">
                      MOD-0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FFDAD8] transition-colors leading-snug">
                      {item}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#27272A] flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation('Specialized Services', item)}
                      className="text-xs font-sans font-bold uppercase tracking-wider text-[#C8102E] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Enquire Module</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <Box className="w-4 h-4 text-[#71717A]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 mt-12 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-sans uppercase font-bold text-[#FFDAD8] block mb-1">
                  Need a custom specialized scope?
                </span>
                <p className="text-xs text-[#A1A1AA]">
                  We structure bespoke sprints for physical product rollouts and go-to-market milestones.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation('Specialized Services')}
                className="px-6 py-3.5 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors shrink-0"
              >
                Discuss Specialized Scope
              </button>
            </div>

          </div>
        </section>
      )}

      {/* =========================================================================
          FINAL ENGAGEMENT BANNER
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#EFEEEB] border border-[#E4E1DC] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E] block mb-2">
              Engagement Initiation
            </span>
            <h3 className="font-display text-3xl font-bold text-[#1B1C1A]">
              Deploy a Buckeye Sprint
            </h3>
            <p className="text-xs sm:text-sm text-[#5C403F] font-sans mt-1 max-w-xl">
              Initiate a strategic brief consultation to review timeline, deliverables, and commercial objectives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors shadow-sm text-center"
            >
              Get a Free Consultation
            </button>
            <Link
              to="/contact"
              className="px-5 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#1B1C1A] transition-colors flex items-center justify-center gap-2"
            >
              <span>Visit Contact Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
