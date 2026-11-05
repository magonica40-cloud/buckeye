import React, { useState } from 'react';
import {
  ArrowRight,
  Compass,
  Monitor,
  Palette,
  TrendingUp,
  Play,
  Users,
  Code,
  BarChart3,
  Shield,
  Search,
  FileText,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

// All 11 services — matching the adwants reference list
const SERVICES = [
  {
    id: 'strategy',
    title: 'Strategy-Oriented Services',
    short: 'Insight + neuromarketing + campaign planning',
    description: 'Rigorous market intelligence, category deconstruction, consumer psychology and defensible commercial angles that place your brand at the vanguard of consumer conversation.',
    items: ['Brand strategy & positioning', 'Market & audience research', 'Neuromarketing insights', 'Campaign strategy & planning', 'Competitive landscape mapping'],
    deliverables: ['Brand Positioning Book', 'Competitive Vacuum Map', 'Omnichannel Media Plan', 'Commercial Campaign Thesis'],
    icon: Compass,
    palette: { bg: '#EBF4FF', icon: '#3B82F6', watermark: '#BFDBFE' },
  },
  {
    id: 'mainline',
    title: 'Mainline Advertising',
    short: 'Print, TV, Outdoor, Media Coordination',
    description: 'High-impact broadcast, print, and out-of-home placements designed for mass cultural mindshare, spatial prestige, and unignorable physical presence across all major media channels.',
    items: ['TV & radio commercials', 'Print ads (newspapers, magazines)', 'Outdoor advertising (billboards, hoardings)', 'Transit & ambient media', 'Media coordination & buying'],
    deliverables: ['Cinema & TV Commercials', 'High-Gloss Editorial Print', 'Strategic Billboard Placements', 'Integrated Media Schedule'],
    icon: Monitor,
    palette: { bg: '#FEF0F2', icon: '#E11D48', watermark: '#FECDD3' },
  },
  {
    id: 'branding',
    title: 'Branding',
    short: 'Identity design, packaging, tone of voice',
    description: 'High-contrast visual design, typographic rigor and compelling narrative concepts that demand immediate and lasting recall — from logo to full brand system.',
    items: ['Logo & visual identity design', 'Brand guidelines creation', 'Packaging design', 'Tone of voice development', 'Brand architecture'],
    deliverables: ['Master Brand Guidelines', 'Custom Typographic System', 'Packaging Prototypes', 'Editorial Voice Manual'],
    icon: Palette,
    palette: { bg: '#EFFDF5', icon: '#16A34A', watermark: '#BBF7D0' },
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Content, paid campaigns, engagement analytics',
    description: 'Full-funnel digital architecture engineered for maximum discovery, audience acquisition and commercial conversion across modern search, social and content channels.',
    items: ['Social media marketing & management', 'Pay-per-click ads (Google, Meta)', 'Email marketing campaigns', 'Content marketing & blogging', 'Engagement analytics & reporting'],
    deliverables: ['Organic Growth Engine', 'High-Converting Ad Creative', 'Retention Email Sequences', 'Monthly Analytics Report'],
    icon: TrendingUp,
    palette: { bg: '#F5F0FF', icon: '#7C3AED', watermark: '#DDD6FE' },
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    short: 'Reels, explainer videos, brand films',
    description: 'Cinema-grade video production, motion design and animation that capture attention, tell brand stories and drive commercial action across digital and broadcast platforms.',
    items: ['Brand films & TVCs', 'Reels & short-form video', 'Explainer & product videos', 'Motion graphics & animation', '2D/3D visual effects'],
    deliverables: ['Campaign Films', 'Social Reels Package', 'Explainer Video', 'Motion Design System'],
    icon: Play,
    palette: { bg: '#FFF7EB', icon: '#D97706', watermark: '#FDE68A' },
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    short: 'Partnerships, campaign management',
    description: 'Strategic influencer identification, partnership curation and campaign management that authentically extends brand reach to highly targeted, engaged audience communities.',
    items: ['Influencer identification & vetting', 'Campaign brief & coordination', 'Content review & approval', 'Performance tracking & reporting', 'Long-term partnership management'],
    deliverables: ['Influencer Strategy Deck', 'Creator Partnership Contracts', 'Campaign Performance Report', 'UGC Content Library'],
    icon: Users,
    palette: { bg: '#ECFEFF', icon: '#0891B2', watermark: '#A5F3FC' },
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    short: 'UI/UX, SEO, CMS integration',
    description: 'Modern, conversion-optimised web platforms designed with editorial precision and built for speed, accessibility and seamless CMS management from day one.',
    items: ['UI/UX design & prototyping', 'Front-end development', 'CMS integration (WordPress, Webflow)', 'On-page SEO setup', 'Performance & accessibility audits'],
    deliverables: ['Wireframes & UI Kit', 'Production-Ready Website', 'CMS Training Guide', 'SEO Foundation Report'],
    icon: Code,
    palette: { bg: '#F7FEE7', icon: '#65A30D', watermark: '#D9F99D' },
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    short: 'Data-driven growth, conversion optimisation',
    description: 'Precision paid media strategy and execution focused on measurable ROI — from audience targeting and creative testing to attribution dashboards and iterative scaling.',
    items: ['Paid search & display campaigns', 'Meta & programmatic advertising', 'Conversion rate optimisation', 'A/B creative testing', 'Revenue attribution modelling'],
    deliverables: ['Performance Campaign Setup', 'CRO Audit Report', 'Custom Attribution Dashboard', 'Bi-weekly Scaling Reports'],
    icon: BarChart3,
    palette: { bg: '#FFF1F2', icon: '#E11D48', watermark: '#FECDD3' },
  },
  {
    id: 'online-reputation',
    title: 'Online Reputation',
    short: 'Monitoring, sentiment control',
    description: 'Proactive brand reputation management across digital channels — monitoring sentiment, suppressing negative content and building a positive, authoritative online presence.',
    items: ['Brand mention monitoring', 'Sentiment analysis & reporting', 'Review management (Google, Glassdoor)', 'Negative content suppression', 'Crisis communication strategy'],
    deliverables: ['Reputation Audit Report', 'Monitoring Dashboard', 'Crisis Communication Protocol', 'Monthly Sentiment Report'],
    icon: Shield,
    palette: { bg: '#F0F9FF', icon: '#0369A1', watermark: '#BAE6FD' },
  },
  {
    id: 'seo',
    title: 'SEO',
    short: 'Visibility, keyword optimisation',
    description: 'Technical and editorial SEO strategies engineered for first-page dominance — from site architecture and keyword research to link building and content scaling.',
    items: ['Technical SEO audit & fixes', 'Keyword research & mapping', 'On-page content optimisation', 'Link building campaigns', 'Local & international SEO'],
    deliverables: ['Technical SEO Audit', 'Keyword Strategy Map', 'Content Optimisation Plan', 'Monthly Ranking Report'],
    icon: Search,
    palette: { bg: '#ECFDF5', icon: '#059669', watermark: '#6EE7B7' },
  },
  {
    id: 'tvc-scripting',
    title: 'TVC Scripting',
    short: 'Concept to storyboarding to delivery',
    description: 'Compelling television and digital commercial scripts crafted with narrative precision — from initial concept and character development to final shooting script and storyboard.',
    items: ['Concept development & ideation', 'Script writing & dialogue', 'Storyboarding & shot lists', 'Director treatment briefs', 'Post-production supervision'],
    deliverables: ['Concept Presentation Deck', 'Final Shooting Script', 'Storyboard Panels', 'Director Treatment Brief'],
    icon: FileText,
    palette: { bg: '#FAF5FF', icon: '#7C3AED', watermark: '#D8B4FE' },
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const active = SERVICES[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121214] pt-24 md:pt-28">

      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="w-full border-b border-[#EBEBEB] py-10 md:py-12 px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-[#C8102E]"></span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-[#C8102E]">
            Our Services · 11 Disciplines
          </span>
        </div>
        <h1
          className="font-display font-black text-[#121214] tracking-tighter leading-[1.0]"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)' }}
        >
          Capabilities built for<br />
          <span className="text-[#C8102E]">real commercial impact.</span>
        </h1>
      </section>

      {/* ── SPLIT LAYOUT ─────────────────────────────────────── */}
      <section className="w-full flex-1 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT: service name list */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32">
            <ul className="flex flex-col divide-y divide-[#EBEBEB]">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={service.id}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left py-4 md:py-5 flex items-center justify-between gap-4 group transition-colors duration-200 ${
                        isActive ? 'text-[#C8102E]' : 'text-[#1B1C1A] hover:text-[#C8102E]'
                      }`}
                    >
                      <span
                        className="font-display font-semibold leading-tight"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
                      >
                        {service.title}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-all duration-200 ${
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

          {/* RIGHT: pastel card detail */}
          <div className="w-full lg:w-[60%]">
            <div
              key={activeIndex}
              className="rounded-2xl overflow-hidden relative p-8 md:p-10 min-h-[360px] flex flex-col"
              style={{ backgroundColor: active.palette.bg }}
            >
              {/* Ghost watermark */}
              <div
                className="absolute right-5 bottom-5 pointer-events-none select-none"
                aria-hidden="true"
                style={{ opacity: 0.18 }}
              >
                <ActiveIcon
                  className="w-36 h-36 md:w-48 md:h-48"
                  style={{ color: active.palette.watermark }}
                />
              </div>

              {/* Icon box */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-7 shadow-sm shrink-0"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <ActiveIcon className="w-5 h-5" style={{ color: active.palette.icon }} />
              </div>

              {/* Title + short desc */}
              <h2
                className="font-display font-bold text-[#121214] leading-tight mb-2 relative z-10"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
              >
                {active.title}
              </h2>
              <p className="text-sm md:text-base text-[#5C5C5C] font-body leading-relaxed mb-4 relative z-10 max-w-lg">
                {active.short}
              </p>
              <p className="text-sm text-[#7A7A7A] font-body leading-relaxed mb-6 relative z-10 max-w-lg">
                {active.description}
              </p>

              {/* Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6 relative z-10">
                {active.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#1B1C1A]">
                    <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full shrink-0 mt-1.5" />
                    <span className="font-body">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-auto">
                <button
                  onClick={() => onOpenConsultation(active.title)}
                  className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E] hover:gap-4 transition-all duration-200 group/link"
                >
                  <span>Initiate Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Deliverables below card */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {active.deliverables.map((deliv, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl text-xs text-[#1B1C1A] font-body"
                >
                  <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full shrink-0" />
                  {deliv}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
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
