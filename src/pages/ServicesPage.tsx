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
  X,
  Check,
  Layers,
  ShieldCheck,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenConsultation: (category?: string, contextTitle?: string) => void;
}

interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  deliverables: string[];
  Icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  bg: string;
  iconColor: string;
  watermark: string;
}

const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy-Oriented Services',
    short: 'Insight + neuromarketing + campaign planning',
    description: 'Rigorous market intelligence, category deconstruction, consumer psychology and defensible commercial angles that place your brand at the vanguard of consumer conversation.',
    items: ['Brand strategy & positioning', 'Market & audience research', 'Neuromarketing insights', 'Campaign strategy & planning', 'Competitive landscape mapping'],
    deliverables: ['Brand Positioning Book', 'Competitive Vacuum Map', 'Omnichannel Media Plan', 'Commercial Campaign Thesis'],
    Icon: Compass,
    bg: '#EBF4FF', iconColor: '#3B82F6', watermark: '#BFDBFE',
  },
  {
    id: 'mainline',
    title: 'Mainline Advertising',
    short: 'Print, TV, Outdoor, Media Coordination',
    description: 'High-impact broadcast, print and out-of-home placements designed for mass cultural mindshare and unignorable physical presence across all major media channels.',
    items: ['TV & radio commercials', 'Print ads (newspapers, magazines)', 'Outdoor advertising & billboards', 'Transit & ambient media', 'Media coordination & buying'],
    deliverables: ['Cinema & TV Commercials', 'High-Gloss Editorial Print', 'Strategic Billboard Placements', 'Integrated Media Schedule'],
    Icon: Monitor,
    bg: '#FEF0F2', iconColor: '#E11D48', watermark: '#FECDD3',
  },
  {
    id: 'branding',
    title: 'Branding',
    short: 'Identity design, packaging, tone of voice',
    description: 'High-contrast visual design, typographic rigor and compelling narrative concepts that demand immediate and lasting recall — from logo to full brand system.',
    items: ['Logo & visual identity design', 'Brand guidelines creation', 'Packaging design', 'Tone of voice development', 'Brand architecture'],
    deliverables: ['Master Brand Guidelines', 'Custom Typographic System', 'Packaging Prototypes', 'Editorial Voice Manual'],
    Icon: Palette,
    bg: '#EFFDF5', iconColor: '#16A34A', watermark: '#BBF7D0',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Content, paid campaigns, engagement analytics',
    description: 'Full-funnel digital architecture engineered for maximum discovery, audience acquisition and commercial conversion across modern search, social and content channels.',
    items: ['Social media marketing & management', 'Pay-per-click ads (Google, Meta)', 'Email marketing campaigns', 'Content marketing & blogging', 'Engagement analytics & reporting'],
    deliverables: ['Organic Growth Engine', 'High-Converting Ad Creative', 'Retention Email Sequences', 'Monthly Analytics Report'],
    Icon: TrendingUp,
    bg: '#F5F0FF', iconColor: '#7C3AED', watermark: '#DDD6FE',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    short: 'Reels, explainer videos, brand films',
    description: 'Cinema-grade video production, motion design and animation that capture attention, tell brand stories and drive commercial action across digital and broadcast platforms.',
    items: ['Brand films & TVCs', 'Reels & short-form video', 'Explainer & product videos', 'Motion graphics & animation', '2D/3D visual effects'],
    deliverables: ['Campaign Films', 'Social Reels Package', 'Explainer Video', 'Motion Design System'],
    Icon: Play,
    bg: '#FFF7EB', iconColor: '#D97706', watermark: '#FDE68A',
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    short: 'Partnerships, campaign management',
    description: 'Strategic influencer identification, partnership curation and campaign management that authentically extends brand reach to highly targeted, engaged audience communities.',
    items: ['Influencer identification & vetting', 'Campaign brief & coordination', 'Content review & approval', 'Performance tracking & reporting', 'Long-term partnership management'],
    deliverables: ['Influencer Strategy Deck', 'Creator Partnership Contracts', 'Campaign Performance Report', 'UGC Content Library'],
    Icon: Users,
    bg: '#ECFEFF', iconColor: '#0891B2', watermark: '#A5F3FC',
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    short: 'UI/UX, SEO, CMS integration',
    description: 'Modern, conversion-optimised web platforms designed with editorial precision and built for speed, accessibility and seamless CMS management from day one.',
    items: ['UI/UX design & prototyping', 'Front-end development', 'CMS integration (WordPress, Webflow)', 'On-page SEO setup', 'Performance & accessibility audits'],
    deliverables: ['Wireframes & UI Kit', 'Production-Ready Website', 'CMS Training Guide', 'SEO Foundation Report'],
    Icon: Code,
    bg: '#F7FEE7', iconColor: '#65A30D', watermark: '#D9F99D',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    short: 'Data-driven growth, conversion optimisation',
    description: 'Precision paid media strategy and execution focused on measurable ROI — from audience targeting and creative testing to attribution dashboards and iterative scaling.',
    items: ['Paid search & display campaigns', 'Meta & programmatic advertising', 'Conversion rate optimisation', 'A/B creative testing', 'Revenue attribution modelling'],
    deliverables: ['Performance Campaign Setup', 'CRO Audit Report', 'Custom Attribution Dashboard', 'Bi-weekly Scaling Reports'],
    Icon: BarChart3,
    bg: '#FFF1F2', iconColor: '#BE123C', watermark: '#FECDD3',
  },
  {
    id: 'online-reputation',
    title: 'Online Reputation',
    short: 'Monitoring, sentiment control',
    description: 'Proactive brand reputation management across digital channels — monitoring sentiment, suppressing negative content and building a positive, authoritative online presence.',
    items: ['Brand mention monitoring', 'Sentiment analysis & reporting', 'Review management (Google, Glassdoor)', 'Negative content suppression', 'Crisis communication strategy'],
    deliverables: ['Reputation Audit Report', 'Monitoring Dashboard', 'Crisis Communication Protocol', 'Monthly Sentiment Report'],
    Icon: Shield,
    bg: '#F0F9FF', iconColor: '#0369A1', watermark: '#BAE6FD',
  },
  {
    id: 'seo',
    title: 'SEO',
    short: 'Visibility, keyword optimisation',
    description: 'Technical and editorial SEO strategies engineered for first-page dominance — from site architecture and keyword research to link building and content scaling.',
    items: ['Technical SEO audit & fixes', 'Keyword research & mapping', 'On-page content optimisation', 'Link building campaigns', 'Local & international SEO'],
    deliverables: ['Technical SEO Audit', 'Keyword Strategy Map', 'Content Optimisation Plan', 'Monthly Ranking Report'],
    Icon: Search,
    bg: '#ECFDF5', iconColor: '#059669', watermark: '#6EE7B7',
  },
  {
    id: 'tvc-scripting',
    title: 'TVC Scripting',
    short: 'Concept to storyboarding to delivery',
    description: 'Compelling television and digital commercial scripts crafted with narrative precision — from initial concept and character development to final shooting script and storyboard.',
    items: ['Concept development & ideation', 'Script writing & dialogue', 'Storyboarding & shot lists', 'Director treatment briefs', 'Post-production supervision'],
    deliverables: ['Concept Presentation Deck', 'Final Shooting Script', 'Storyboard Panels', 'Director Treatment Brief'],
    Icon: FileText,
    bg: '#FAF5FF', iconColor: '#7C3AED', watermark: '#D8B4FE',
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121214] pt-24 md:pt-28">
      {/* Services header content removed as requested. */}

      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.id}
                id={service.id}
                className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col scroll-mt-28"
                style={{ backgroundColor: service.bg, minHeight: '280px' }}
                onClick={() => setSelected(service)}
              >
                <div
                  className="absolute right-5 bottom-5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                  style={{ opacity: 0.2 }}
                >
                  <Icon className="w-28 h-28 md:w-32 md:h-32" style={{ color: service.watermark }} />
                </div>

                <div className="relative z-10 p-7 md:p-8 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-sm shrink-0 bg-white">
                    <Icon className="w-5 h-5" style={{ color: service.iconColor }} />
                  </div>
                  <h3
                    className="font-display font-bold text-[#121214] leading-tight mb-2.5"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-[#5C5C5C] font-body leading-relaxed flex-1">
                    {service.short}
                  </p>
                  <button
                    onClick={(event) => { event.stopPropagation(); setSelected(service); }}
                    className="mt-7 inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E] group-hover:gap-3 transition-all duration-200 self-start"
                  >
                    <span>View Our Work</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

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

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white border border-[#E8E8E8] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-9 h-9 bg-[#F5F5F5] hover:bg-[#E8E8E8] flex items-center justify-center transition-colors rounded-lg"
              aria-label="Close service details"
            >
              <X className="w-5 h-5 text-[#121214]" />
            </button>

            <div className="rounded-xl p-6 mb-6 relative overflow-hidden" style={{ backgroundColor: selected.bg }}>
              <div className="absolute right-4 bottom-2 pointer-events-none" style={{ opacity: 0.2 }} aria-hidden="true">
                <selected.Icon className="w-20 h-20" style={{ color: selected.watermark }} />
              </div>
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
                <selected.Icon className="w-5 h-5" style={{ color: selected.iconColor }} />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121214] mb-1 relative z-10">
                {selected.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold relative z-10">
                {selected.short}
              </p>
            </div>

            <p className="text-sm text-[#5C5C5C] leading-relaxed mb-7">{selected.description}</p>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121214] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C8102E]" /> Scope of Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selected.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-[#FAFAFA] border border-[#E8E8E8] text-xs text-[#121214] rounded-lg">
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
                {selected.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-center gap-2 p-3 bg-red-50/60 border border-red-200/60 text-xs text-[#121214] font-medium rounded-lg">
                    <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full shrink-0" />
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E8E8]">
              <button
                onClick={() => { setSelected(null); onOpenConsultation(selected.title); }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C8102E] text-white hover:bg-[#121214] text-xs font-mono font-bold uppercase tracking-wider transition-colors rounded-lg"
              >
                <span>Initiate Brief for {selected.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
