import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Compass, 
  Grid, 
  TrendingUp, 
  Users, 
  FileText, 
  Zap, 
  Settings, 
  Globe2, 
  BarChart3,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Layers,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { TiltCard } from '../components/TiltCard';

interface AboutPageProps {
  onOpenConsultation: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  // Interactive 4-Phase Operational Framework State
  const [activeTab, setActiveTab] = useState(0);

  const frameworkPhases = [
    {
      phase: "PHASE 01 // DIAGNOSTIC AUDIT",
      duration: "Weeks 01–02",
      title: "Diagnostic Immersion",
      desc: "Comprehensive market audit, competitive landscape deconstruction, consumer friction mapping, and intensive executive stakeholder interviews to identify unexploited category vacuums.",
      tags: ["Commercial Audit", "Executive Stakeholder Interviews", "Category Vacuum Mapping"]
    },
    {
      phase: "PHASE 02 // POSITIONING ARCHITECTURE",
      duration: "Weeks 03–04",
      title: "Strategic Architecture",
      desc: "Brand essence synthesis, defensive category positioning, consumer perception re-anchoring, and commercial thesis formulation engineered to command premium market pricing.",
      tags: ["Brand Moat Definition", "Customer Archetypes", "Strategic Messaging Framework"]
    },
    {
      phase: "PHASE 03 // CREATIVE SYNTHESIS",
      duration: "Weeks 05–06",
      title: "Creative Synthesis & Craft",
      desc: "Iconic art direction, narrative copywriting, custom typographic systems, and high-impact visual design assets engineered for unforgettable market recall.",
      tags: ["Visual Identity System", "Editorial Voice Guidelines", "Production Prototypes"]
    },
    {
      phase: "PHASE 04 // GO-TO-MARKET DEPLOYMENT",
      duration: "Weeks 07+ Ongoing",
      title: "Omnichannel Deployment & Optimization",
      desc: "Multi-surface campaign rollout, targeted digital distribution, customer behavioral analytics, and iterative creative refinements for maximum commercial conversion.",
      tags: ["Campaign Rollout", "Attribution Dashboards", "Iterative Creative Loops"]
    }
  ];

  const executionSteps = [
    {
      number: "01",
      name: "DIAGNOSTIC SPRINT",
      duration: "Days 01–14",
      title: "Category Diagnostic & Intelligence",
      description: "Thorough cross-channel analysis of market competitors, target audience interviews, and baseline brand equity assessment.",
      gate: "Diagnostic Dossier Sign-Off"
    },
    {
      number: "02",
      name: "POSITIONING THESIS",
      duration: "Days 15–28",
      title: "Strategic Narrative & Market Stance",
      description: "Formulation of the defensible commercial angle, brand manifesto, value proposition, and editorial voice guidelines.",
      gate: "Category Stance Executive Lock"
    },
    {
      number: "03",
      name: "CREATIVE CRAFT",
      duration: "Days 29–48",
      title: "Visual System & Prototyping",
      description: "High-contrast visual language prototyping, key campaign assets, brand style guides, and interactive interface design.",
      gate: "Master Asset Sign-Off"
    },
    {
      number: "04",
      name: "ORCHESTRATION",
      duration: "Day 49+ Ongoing",
      title: "Market Rollout & Performance Optimization",
      description: "Omnichannel campaign launch, conversion rate tracking, audience cohort evaluation, and bi-weekly strategic reviews.",
      gate: "Attribution & Performance Review"
    }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Senior Leadership Immersion",
      description: "Zero mid-level handoffs. Every strategic brand engagement is spearheaded directly by agency principals with established industry pedigree."
    },
    {
      icon: FileText,
      title: "Action-Oriented Deliverables",
      description: "We bypass generic 100-page presentations in favor of deployable brand systems, actionable battleplans, and concrete commercial assets."
    },
    {
      icon: Zap,
      title: "High-Velocity Cadence",
      description: "Sprint-based workflow operating at venture speed. Strategic concept to active market launch achieved in weeks, not quarters."
    },
    {
      icon: Settings,
      title: "Unified Strategy & Production",
      description: "Full-spectrum sovereignty. We design the high-level positioning and craft the final visual assets under one roof."
    },
    {
      icon: Globe2,
      title: "Cultural & Market Insight",
      description: "Deep regional market nuances married with global aesthetic standards, tailored specifically to fast-growing modern businesses."
    },
    {
      icon: BarChart3,
      title: "Transparent Attribution",
      description: "Honest analytics and tracking. We collaborate with leadership teams to evaluate brand cut-through, customer engagement, and long-term equity."
    }
  ];

  return (
    <div className="flex flex-col w-full pt-24 md:pt-28 pb-12 bg-[#FBF9F6]">

      {/* =========================================================================
          SECTION 1: EDITORIAL HERO & MANIFESTO SPLIT-SCREEN
      ========================================================================= */}
      <section className="w-full border-b border-[#E4E1DC] relative overflow-hidden hero-light-atmosphere py-8 md:py-10">
        {/* Subtle Watermark Aura */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] font-display font-black text-[18rem] leading-none text-[#1B1C1A]">
          ATELIER
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (6 Cols): Manifesto & Narrative */}
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

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.08]">We Create. You Grow.</h1>

              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-2xl">
                We Create. You Grow.<br/><br/>A creative space where ideas become identities, stories become experiences and brands become unforgettable. We bring imagination, strategy and execution together to make brands matter. Any crazy idea is welcome.
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

            {/* Right Column: CSS-only Studio Identity Card — no image, fits viewport */}
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

      {/* =========================================================================
          SECTION 2: WHO WE ARE & ARCHITECTURAL STUDIO VISUAL
      ========================================================================= */}
      <section className="py-20 bg-[#F5F3F0] border-b border-[#E4E1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  01 // Studio Provenance
                </span>
                <span className="w-8 h-px bg-[#E4E1DC]"></span>
                <span className="text-xs font-sans uppercase tracking-widest text-[#5C403F]">
                  The Agency Essence
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A] leading-tight">
                Engineered for Enterprise Leaders &amp; Ambitious Challengers
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#5C403F] font-sans leading-relaxed">
                <p>
                  Operating out of Bengaluru's innovation corridor, Buckeye bridges the gap between traditional management consulting and boutique creative shops. We do not manufacture cosmetic identity changes; we craft distinctive brand equity that commands attention in crowded markets.
                </p>
                <p>
                  By uniting consumer research with uncompromising Swiss aesthetic discipline, our studio develops commercial assets designed to withstand shifts in digital media consumption.
                </p>
              </div>

              {/* Leadership Philosophy Card */}
              <div className="bg-white p-6 border border-[#E4E1DC] shadow-sm relative overflow-hidden mt-2">
                <Quote className="w-8 h-8 text-[#C8102E]/20 mb-2" />
                <blockquote className="font-display italic text-lg sm:text-xl text-[#1B1C1A] leading-snug">
                  “We build commercial moats through unignorable visual architecture.”
                </blockquote>
                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-[#F5F3F0]">
                  <div className="w-8 h-8 bg-[#C8102E] text-white flex items-center justify-center font-display font-bold text-sm uppercase">
                    B
                  </div>
                  <div>
                    <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                      Creative Direction Panel
                    </div>
                    <div className="text-[11px] text-[#5F5E60] font-sans">
                      Buckeye Design &amp; Consulting · Bengaluru
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#E4E1DC] bg-white p-2 shadow-sharp">
                <div className="relative h-80 sm:h-[440px] overflow-hidden bg-[#121214]">
                  <img 
                    src="/assets/war_room.jpg" 
                    alt="Buckeye Creative War Room in Bengaluru"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#FBF9F6]/95 backdrop-blur-md p-4 border-t border-[#E4E1DC] flex items-center justify-between">
                    <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#1B1C1A]">
                      Creative War Room · Strategy Wing
                    </span>
                    <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-[#C8102E] flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#C8102E] rounded-full animate-ping"></span>
                      Active Atelier
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THREE CORE CONVICTIONS (THE PILLARS OF BUCKEYE)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E4E1DC]">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              02 // Core Convictions
            </span>
            <span className="w-8 h-px bg-[#E4E1DC]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
            The Three Pillars of Buckeye
          </h2>
          <p className="text-sm text-[#5C403F] font-sans mt-2">
            Every campaign, brand ecosystem, and marketing engagement is calibrated against these three unshakeable fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-[#E4E1DC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8102E] transition-colors shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                  PILLAR 01
                </span>
                <Compass className="w-5 h-5 text-[#5F5E60]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B1C1A] mb-3">
                Uncompromising Relevance
              </h3>
              <p className="text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed">
                Advertising that shapes culture rather than merely echoing it. We reject trend-chasing in favor of distinctive perspectives that position your brand at the center of customer attention.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F5F3F0] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                Cultural Resonance
              </span>
              <span className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                Unignorable Impact
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-[#E4E1DC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8102E] transition-colors shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                  PILLAR 02
                </span>
                <Grid className="w-5 h-5 text-[#5F5E60]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B1C1A] mb-3">
                Architectural Rigor
              </h3>
              <p className="text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed">
                Design systems structured to scale seamlessly across multi-channel deployments. We build systematic, modular guidelines engineered for total visual and typographic consistency.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F5F3F0] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                Multi-Channel Systems
              </span>
              <span className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                Modular Toolkits
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-[#E4E1DC] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8102E] transition-colors shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                  PILLAR 03
                </span>
                <TrendingUp className="w-5 h-5 text-[#5F5E60]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1B1C1A] mb-3">
                Commercial Accountability
              </h3>
              <p className="text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed">
                Every creative initiative connects to commercial performance and brand equity. We evaluate conversion funnels and audience reception, ensuring aesthetics translate into measurable growth.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#F5F3F0] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                Attribution Tracking
              </span>
              <span className="px-2.5 py-1 bg-[#F5F3F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                Commercial Yield
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OPERATIONAL FRAMEWORK (INTERACTIVE 4-PHASE ENGINE)
      ========================================================================= */}
      <section className="py-20 bg-[#EFEEEB] border-b border-[#E4E1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                03 // Operational Methodology
              </span>
              <span className="w-8 h-px bg-[#E4E1DC]"></span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
              The Four-Phase Precision Engine
            </h2>
            <p className="text-sm text-[#5C403F] font-sans mt-2">
              Select each operational phase to inspect key deliverables and workflow milestones:
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {frameworkPhases.map((phase, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 text-left border transition-all flex flex-col justify-between min-h-[90px] ${
                    isSelected
                      ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-md'
                      : 'bg-white text-[#1B1C1A] border-[#E4E1DC] hover:border-[#1B1C1A]'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-white' : 'text-[#C8102E]'}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider">
                    {phase.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Display Card */}
          <div className="bg-white border border-[#E4E1DC] p-6 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F5F3F0] pb-3">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                  {frameworkPhases[activeTab].phase}
                </span>
                <span className="text-xs font-mono text-[#5F5E60] uppercase tracking-wider bg-[#F5F3F0] px-2.5 py-1">
                  {frameworkPhases[activeTab].duration}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1B1C1A] mt-2">
                {frameworkPhases[activeTab].title}
              </h3>

              <p className="text-sm sm:text-base text-[#5C403F] font-sans leading-relaxed max-w-3xl">
                {frameworkPhases[activeTab].desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E4E1DC] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#5F5E60] mr-2">
                Deliverable Artifacts:
              </span>
              {frameworkPhases[activeTab].tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#F5F3F0] border border-[#E4E1DC] text-xs font-sans uppercase tracking-wider text-[#1B1C1A]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EXECUTION BLUEPRINT & QUALITY GATES
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E4E1DC]">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              04 // Quality Milestones
            </span>
            <span className="w-8 h-px bg-[#E4E1DC]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
            Precision Process &amp; Quality Gates
          </h2>
          <p className="text-sm text-[#5C403F] font-sans mt-2">
            Clear delivery milestones. Every sprint advances toward defined validation sign-offs prior to public launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionSteps.map((step) => (
            <div key={step.number} className="bg-white border border-[#E4E1DC] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#F5F3F0] mb-4">
                  <span className="w-7 h-7 bg-[#C8102E] text-white text-xs font-bold font-mono flex items-center justify-center">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#5F5E60] uppercase tracking-wider">
                    {step.duration}
                  </span>
                </div>

                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E] mb-1">
                  {step.name}
                </div>

                <h3 className="font-display text-lg font-bold text-[#1B1C1A] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#5C403F] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E4E1DC] bg-[#F5F3F0] p-2.5 -mx-2 -mb-2">
                <span className="text-[10px] uppercase font-bold text-[#5F5E60] block tracking-wider">Quality Gate:</span>
                <span className="text-xs font-bold text-[#C8102E] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                  <span className="truncate">{step.gate}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHY FORWARD-THINKING BRANDS CHOOSE BUCKEYE
      ========================================================================= */}
      <section className="py-20 bg-[#F5F3F0] border-b border-[#E4E1DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                05 // Structural Advantage
              </span>
              <span className="w-8 h-px bg-[#E4E1DC]"></span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
              Why Forward-Thinking Brands Choose Buckeye
            </h2>
            <p className="text-sm text-[#5C403F] font-sans mt-2">
              Six structural factors that eliminate agency friction and accelerate market momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div key={index} className="bg-white border border-[#E4E1DC] p-6 sm:p-8 flex items-start gap-4 shadow-sm hover:border-[#1B1C1A] transition-colors">
                  <div className="w-10 h-10 bg-[#F5F3F0] border border-[#E4E1DC] text-[#C8102E] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1B1C1A] mb-1">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STUDIO WORKSPACE & CULTURE SHOWCASE
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white border border-[#E4E1DC] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Studio Atelier
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#5F5E60]">
                  Indiranagar HQ
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1B1C1A]">
                Where Discipline Meets Unrestrained Expression
              </h3>

              <p className="text-sm text-[#5C403F] font-sans leading-relaxed">
                Located in Bengaluru’s design district, our studio is purpose-built for intensive creative sprints, brand war rooms, and executive workshops. Every asset crafted here reflects our commitment to structural elegance.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E] hover:text-[#1B1C1A]"
                >
                  <span>Visit Our Indiranagar Atelier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-64 sm:h-80 overflow-hidden border border-[#E4E1DC]">
                <img 
                  src="/assets/studio_hq.jpg" 
                  alt="Buckeye Design & Consulting Workspace Bengaluru"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: ENGAGEMENT CALLOUT
      ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#121214] text-white p-8 sm:p-14 border-t-2 border-[#C8102E] flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#FFDAD8] block mb-2">
              Next Step // Strategic Consultation
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to grow your brand? Let’s talk.
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans mt-2 max-w-xl">
              Book an introductory strategic consultation with our partners or connect directly with our studio team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="px-6 py-3.5 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors shadow-md text-center"
            >
              Get a Free Consultation
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I'd%20like%20to%20discuss%20a%20strategic%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-sans font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Priority WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
