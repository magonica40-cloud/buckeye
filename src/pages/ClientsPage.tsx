import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Calendar, 
  Sparkles,
  Info,
  Layers,
  Eye,
  SlidersHorizontal,
  Compass,
  Briefcase
} from 'lucide-react';
import { CASE_STUDIES_DATA, CLIENT_MONOGRAMS, SITE_CONFIG } from '../data/siteData';
import { TiltCard } from '../components/TiltCard';

interface ClientsPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCaseStudyModal, setSelectedCaseStudyModal] = useState<string | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects (04)' },
    { id: 'luxury', label: 'Luxury & D2C' },
    { id: 'mobility', label: 'Tech & Mobility' },
    { id: 'fintech', label: 'Enterprise & FinTech' },
    { id: 'craft', label: 'Craft Beverage' },
  ];

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((cs) => cs.category === activeFilter);

  const activeStudy = CASE_STUDIES_DATA.find((cs) => cs.id === selectedCaseStudyModal);

  return (
    <div className="flex flex-col w-full pt-32 md:pt-36 pb-16 bg-[#FBF9F6]">
      
      {/* =========================================================================
          SECTION 1: EDITORIAL HEADER & ARCHIVE CONTEXT SPLIT-SCREEN
      ========================================================================= */}
      <section className="w-full border-b border-[#E4E1DC] relative overflow-hidden hero-light-atmosphere py-14 md:py-20">
        {/* Subtle Watermark Aura */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] font-display font-black text-[18rem] leading-none text-[#1B1C1A]">
          CLIENTS
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (6 Cols): Archive Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Selected Portfolio // Studio Archive
                </span>
                <span className="hidden sm:inline-block w-8 h-px bg-[#E4E1DC]"></span>
                <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#5C403F]">
                  Bengaluru Atelier
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.08]">
                The Brands We Help <br className="hidden sm:inline" />
                <span className="text-[#C8102E]">Bring to Life.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-2xl">
                A curated archive of commercial campaigns, bespoke brand identities, and high-velocity digital architectures crafted for ambitious market contenders and category leaders.
              </p>

              {/* Authentic Portfolio Notice & Transparency Standard */}
              <div className="p-4 bg-white border border-[#E4E1DC] flex items-start gap-3 text-xs font-body text-[#5F5E60] max-w-2xl shadow-sm">
                <Info className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1B1C1A] uppercase tracking-wider block mb-0.5 font-mono text-[11px]">
                    Demonstration Portfolio Standard:
                  </strong>
                  The selected case studies and sector monograms illustrate Buckeye’s strategic methodology, brand craft, and engineering benchmarks. Real client assets and confidential NDA case studies can be reviewed during private consultation.
                </div>
              </div>
            </div>

            {/* Right Column (6 Cols): Expanded Hero Portfolio Showcase Card with 3D Tilt */}
            <div className="lg:col-span-6">
              <TiltCard className="w-full">
                <div className="border-2 border-[#1B1C1A] bg-[#121214] p-3 sm:p-4 shadow-2xl relative group">
                  <div className="relative h-96 sm:h-[480px] lg:h-[530px] w-full overflow-hidden bg-[#1B1B1F]">
                    <img 
                      src="/assets/kinetic.jpg" 
                      alt="Selected Case Study" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/90 via-transparent to-black/30 pointer-events-none"></div>

                    <div className="absolute top-4 left-4 bg-[#121214]/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-white border border-[#3F3F46] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C8102E] inline-block"></span>
                      <span>Selected Archive Feature</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 border border-[#E4E1DC] flex flex-col gap-2 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C8102E]">
                          Kinetic Aeronautics Rebrand
                        </span>
                        <span className="text-xs font-mono text-emerald-600 font-bold uppercase bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                          +184% Pipeline
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1C1A]">
                        The Autonomous Leap: Rebranding Urban Aviation
                      </h4>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#A1A1AA] px-1">
                    <span>04 Demonstrative Briefs Below</span>
                    <span className="text-white flex items-center gap-1 font-bold">
                      <span>Scroll to Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                    </span>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INSTITUTIONAL SECTOR MONOGRAM INDEX
      ========================================================================= */}
      <section className="py-12 bg-[#F5F3F0] border-b border-[#E4E1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E4E1DC]">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#5C403F] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>Representative Sector Practice Index</span>
            </span>
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase">
              06 Practice Sectors
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CLIENT_MONOGRAMS.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 border border-[#E4E1DC] flex flex-col justify-between min-h-[105px] shadow-sm hover:border-[#C8102E] transition-colors"
              >
                <span className="text-[10px] font-mono text-[#5F5E60] uppercase tracking-widest">
                  {client.sector}
                </span>
                <span className="font-display text-base font-bold text-[#1B1C1A] tracking-tight uppercase mt-2">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EDITORIAL PORTFOLIO ARCHIVE (ASYMMETRIC DIVERSE LAYOUT)
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Interactive Filter Bar */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4E1DC]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#C8102E]" />
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#1B1C1A]">
              Filter Archive by Domain
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => {
              const isSelected = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider border transition-colors flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#121214] text-white border-[#121214] shadow-sm'
                      : 'bg-white text-[#1B1C1A] border-[#E4E1DC] hover:border-[#1B1C1A]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 ${isSelected ? 'bg-[#C8102E]' : 'bg-[#C8C6C8]'}`}></span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Projects Layout */}
        <div className="space-y-16">
          {filteredStudies.map((study, index) => {
            // Asymmetric rhythm: alternate between wide cinematic hero format and 2-column editorial spread
            const isWideSpread = index % 2 === 0;

            if (isWideSpread) {
              return (
                /* Wide Cinematic Editorial Spread */
                <article 
                  key={study.id}
                  className="bg-white border border-[#E4E1DC] shadow-sm hover:shadow-sharp transition-all group overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Cinematic Media (16:9 widescreen feel) */}
                    <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] bg-[#121214] overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent"></div>
                      
                      <div className="absolute top-5 left-5 bg-[#121214]/90 backdrop-blur-md px-3.5 py-1.5 flex items-center gap-2 text-white border border-[#27272A]">
                        <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
                        <span className="text-[10px] font-sans uppercase font-bold tracking-widest">
                          {study.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 bg-[#C8102E] text-white px-3.5 py-1.5 font-sans text-xs font-bold uppercase tracking-widest shadow-md">
                        {study.badge}
                      </div>
                    </div>

                    {/* Editorial Details Column */}
                    <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E4E1DC]">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-[#F5F3F0] mb-4">
                          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                            {study.client}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                            Case Study 0{index + 1}
                          </span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A] tracking-tight leading-tight mb-4 group-hover:text-[#C8102E] transition-colors">
                          {study.title}
                        </h2>

                        <p className="text-sm text-[#5C403F] font-sans leading-relaxed mb-6">
                          {study.description}
                        </p>

                        {/* Deliverables Table */}
                        <div className="bg-[#F5F3F0] border border-[#E4E1DC] p-4 space-y-2.5 text-xs font-sans mb-6">
                          <div className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#1B1C1A] pb-1 border-b border-[#E4E1DC]">
                            Project Deliverable Scope
                          </div>
                          {study.scope.map((row, i) => (
                            <div key={i} className="flex items-center justify-between text-xs">
                              <span className="text-[#5F5E60] uppercase text-[10px] tracking-wider font-bold">
                                {row.label}:
                              </span>
                              <span className="text-[#1B1C1A] font-semibold text-right">
                                {row.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Links */}
                      <div className="pt-4 border-t border-[#E4E1DC] flex flex-wrap items-center justify-between gap-4">
                        <button
                          onClick={() => setSelectedCaseStudyModal(study.id)}
                          className="px-6 py-3 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Full Brief</span>
                        </button>

                        <button
                          onClick={() => onOpenConsultation('Branding & Creative Design', study.title)}
                          className="text-xs font-sans uppercase font-bold tracking-wider text-[#5C403F] hover:text-[#C8102E] flex items-center gap-1"
                        >
                          <span>Enquire Similar Brief</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                </article>
              );
            } else {
              return (
                /* Reverse Asymmetric Spread (Text Left, Image Right, 4:5 aspect ratio) */
                <article 
                  key={study.id}
                  className="bg-white border border-[#E4E1DC] shadow-sm hover:shadow-sharp transition-all group overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Editorial Details Column */}
                    <div className="lg:col-span-5 order-2 lg:order-1 p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#E4E1DC]">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-[#F5F3F0] mb-4">
                          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                            {study.client}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                            Case Study 0{index + 1}
                          </span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A] tracking-tight leading-tight mb-4 group-hover:text-[#C8102E] transition-colors">
                          {study.title}
                        </h2>

                        <p className="text-sm text-[#5C403F] font-sans leading-relaxed mb-6">
                          {study.description}
                        </p>

                        {/* Deliverables Table */}
                        <div className="bg-[#F5F3F0] border border-[#E4E1DC] p-4 space-y-2.5 text-xs font-sans mb-6">
                          <div className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#1B1C1A] pb-1 border-b border-[#E4E1DC]">
                            Project Deliverable Scope
                          </div>
                          {study.scope.map((row, i) => (
                            <div key={i} className="flex items-center justify-between text-xs">
                              <span className="text-[#5F5E60] uppercase text-[10px] tracking-wider font-bold">
                                {row.label}:
                              </span>
                              <span className="text-[#1B1C1A] font-semibold text-right">
                                {row.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Links */}
                      <div className="pt-4 border-t border-[#E4E1DC] flex flex-wrap items-center justify-between gap-4">
                        <button
                          onClick={() => setSelectedCaseStudyModal(study.id)}
                          className="px-6 py-3 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Full Brief</span>
                        </button>

                        <button
                          onClick={() => onOpenConsultation('Branding & Creative Design', study.title)}
                          className="text-xs font-sans uppercase font-bold tracking-wider text-[#5C403F] hover:text-[#C8102E] flex items-center gap-1"
                        >
                          <span>Enquire Similar Brief</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                    {/* Image Column */}
                    <div className="lg:col-span-7 order-1 lg:order-2 relative h-72 sm:h-96 lg:h-[480px] bg-[#121214] overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent"></div>
                      
                      <div className="absolute top-5 right-5 bg-[#121214]/90 backdrop-blur-md px-3.5 py-1.5 flex items-center gap-2 text-white border border-[#27272A]">
                        <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
                        <span className="text-[10px] font-sans uppercase font-bold tracking-widest">
                          {study.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-5 right-5 bg-[#C8102E] text-white px-3.5 py-1.5 font-sans text-xs font-bold uppercase tracking-widest shadow-md">
                        {study.badge}
                      </div>
                    </div>

                  </div>
                </article>
              );
            }
          })}
        </div>

      </section>

      {/* =========================================================================
          SECTION 4: CREATIVE DIRECTION & CURATORIAL MANIFESTO (AUTHENTIC)
      ========================================================================= */}
      <section className="py-20 bg-[#121214] text-white border-y border-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#FFDAD8]">
                Atelier Philosophy // Curatorial Stance
              </span>
            </div>

            <blockquote className="font-display italic text-2xl sm:text-4xl text-white leading-snug">
              “Great design does not beg for attention; it creates an undeniable gravitational pull. We construct enduring brand equity through clarity, structural discipline, and uncompromising craft.”
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-[#27272A]">
              <div className="w-12 h-12 bg-[#C8102E] text-white flex items-center justify-center font-display font-bold text-xl uppercase">
                B
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">Buckeye Creative Direction</div>
                <div className="text-xs font-sans uppercase tracking-widest text-[#A1A1AA]">
                  Design &amp; Consulting Panel · Bengaluru Atelier
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CAPABILITY & EXECUTION CADENCE STANDARDS
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E4E1DC]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E] block mb-2">
            Execution Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
            The Buckeye Delivery Cadence
          </h2>
          <p className="text-sm text-[#5C403F] font-sans mt-2">
            Every client partnership is calibrated for swift, predictable market deployment with senior-level immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-8 bg-white border border-[#E4E1DC] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#C8102E]">
                Sprint-Based
              </span>
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#1B1C1A] mt-4 block">
                8 to 16 Week Cycles
              </span>
            </div>
            <p className="text-xs text-[#5C403F] font-sans mt-3">
              Clear milestone sprints locked before capital deployment, eliminating agency drift and scope bloat.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#E4E1DC] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#1B1C1A]">
                Full Spectrum
              </span>
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#1B1C1A] mt-4 block">
                Strategy to Production
              </span>
            </div>
            <p className="text-xs text-[#5C403F] font-sans mt-3">
              We design macro positioning and execute final production under one roof, maintaining total aesthetic integrity.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#E4E1DC] flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#1B1C1A]">
                Restricted
              </span>
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#1B1C1A] mt-4 block">
                04 Clients Per Quarter
              </span>
            </div>
            <p className="text-xs text-[#5C403F] font-sans mt-3">
              Strict client intake limit ensures 100% senior leadership immersion on every campaign and rebrand.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FINAL INVITATION CALL TO ACTION
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#EFEEEB] border border-[#E4E1DC] p-8 sm:p-14 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Initiate Engagement
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
              Ready to make your brand unignorable?
            </h2>
            <p className="text-xs sm:text-sm text-[#5C403F] font-sans mt-2 max-w-xl">
              Schedule a strategic consultation with our creative directors to discuss your brand objectives or examine relevant case studies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors shadow-md text-center"
            >
              Get a Free Consultation
            </button>
            <button
              onClick={() => onOpenConsultation('Branding & Creative Design', 'Portfolio Walkthrough Request')}
              className="px-5 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#1B1C1A] transition-colors flex items-center justify-center gap-2"
            >
              <span>Book Walkthrough</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODAL: CASE STUDY DETAIL INSPECTION
      ========================================================================= */}
      {selectedCaseStudyModal && activeStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121214]/75 backdrop-blur-sm">
          <div className="bg-white border border-[#E4E1DC] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#E4E1DC]">
              <div>
                <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#C8102E]">
                  {activeStudy.client} // {activeStudy.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1B1C1A] mt-1">
                  {activeStudy.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedCaseStudyModal(null)}
                className="p-2 text-[#5F5E60] hover:text-[#1B1C1A] text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed">
              <p>{activeStudy.description}</p>
              
              <div className="bg-[#F5F3F0] p-4 border border-[#E4E1DC] space-y-2">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A] block">
                  Project Scope Breakdown:
                </span>
                {activeStudy.scope.map((row, i) => (
                  <div key={i} className="flex justify-between border-b border-[#E4E1DC] pb-1 text-xs">
                    <span className="text-[#5F5E60] font-bold uppercase">{row.label}:</span>
                    <span className="font-semibold text-[#1B1C1A]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-[#71717A] italic">
                * Note: Prototype case study for portfolio demonstration of agency delivery capability.
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E1DC] flex justify-end gap-3">
              <button
                onClick={() => {
                  setSelectedCaseStudyModal(null);
                  onOpenConsultation('Branding & Creative Design', activeStudy.title);
                }}
                className="px-6 py-2.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-wider"
              >
                Discuss Similar Brief
              </button>
              <button
                onClick={() => setSelectedCaseStudyModal(null)}
                className="px-4 py-2.5 border border-[#E4E1DC] text-xs font-sans uppercase font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
