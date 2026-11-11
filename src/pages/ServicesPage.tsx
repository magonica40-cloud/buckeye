import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Monitor, Palette, TrendingUp, Play, Users, Code, BarChart3, Shield, Search, FileText } from 'lucide-react';

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
  { id: 'strategy', title: 'Strategy-Oriented Services', short: 'Insight + neuromarketing + campaign planning', description: 'Rigorous market intelligence, category deconstruction, consumer psychology and defensible commercial angles that place your brand at the vanguard of consumer conversation.', items: ['Brand strategy & positioning', 'Market & audience research', 'Neuromarketing insights', 'Campaign strategy & planning', 'Competitive landscape mapping'], deliverables: ['Brand Positioning Book', 'Competitive Vacuum Map', 'Omnichannel Media Plan', 'Commercial Campaign Thesis'], Icon: Compass, bg: '#EBF4FF', iconColor: '#3B82F6', watermark: '#BFDBFE' },
  { id: 'mainline', title: 'Mainline Advertising', short: 'Print, TV, Outdoor, Media Coordination', description: 'High-impact broadcast, print and out-of-home placements designed for mass cultural mindshare and unignorable physical presence across all major media channels.', items: ['TV & radio commercials', 'Print ads (newspapers, magazines)', 'Outdoor advertising & billboards', 'Transit & ambient media', 'Media coordination & buying'], deliverables: ['Cinema & TV Commercials', 'High-Gloss Editorial Print', 'Strategic Billboard Placements', 'Integrated Media Schedule'], Icon: Monitor, bg: '#FEF0F2', iconColor: '#E11D48', watermark: '#FECDD3' },
  { id: 'branding', title: 'Branding', short: 'Identity design, packaging, tone of voice', description: 'High-contrast visual design, typographic rigor and compelling narrative concepts that demand immediate and lasting recall — from logo to full brand system.', items: ['Logo & visual identity design', 'Brand guidelines creation', 'Packaging design', 'Tone of voice development', 'Brand architecture'], deliverables: ['Master Brand Guidelines', 'Custom Typographic System', 'Packaging Prototypes', 'Editorial Voice Manual'], Icon: Palette, bg: '#EFFDF5', iconColor: '#16A34A', watermark: '#BBF7D0' },
  { id: 'digital-marketing', title: 'Digital Marketing', short: 'Content, paid campaigns, engagement analytics', description: 'Full-funnel digital architecture engineered for maximum discovery, audience acquisition and commercial conversion across modern search, social and content channels.', items: ['Social media marketing & management', 'Pay-per-click ads (Google, Meta)', 'Email marketing campaigns', 'Content marketing & blogging', 'Engagement analytics & reporting'], deliverables: ['Organic Growth Engine', 'High-Converting Ad Creative', 'Retention Email Sequences', 'Monthly Analytics Report'], Icon: TrendingUp, bg: '#F5F0FF', iconColor: '#7C3AED', watermark: '#DDD6FE' },
  { id: 'motion-graphics', title: 'Motion Graphics', short: 'Reels, explainer videos, brand films', description: 'Cinema-grade video production, motion design and animation that capture attention, tell brand stories and drive commercial action across digital and broadcast platforms.', items: ['Brand films & TVCs', 'Reels & short-form video', 'Explainer & product videos', 'Motion graphics & animation', '2D/3D visual effects'], deliverables: ['Campaign Films', 'Social Reels Package', 'Explainer Video', 'Motion Design System'], Icon: Play, bg: '#FFF7EB', iconColor: '#D97706', watermark: '#FDE68A' },
  { id: 'influencer-marketing', title: 'Influencer Marketing', short: 'Partnerships, campaign management', description: 'Strategic influencer identification, partnership curation and campaign management that authentically extends brand reach to highly targeted, engaged audience communities.', items: ['Influencer identification & vetting', 'Campaign brief & coordination', 'Content review & approval', 'Performance tracking & reporting', 'Long-term partnership management'], deliverables: ['Influencer Strategy Deck', 'Creator Partnership Contracts', 'Campaign Performance Report', 'UGC Content Library'], Icon: Users, bg: '#ECFEFF', iconColor: '#0891B2', watermark: '#A5F3FC' },
  { id: 'web-design', title: 'Web Design & Development', short: 'UI/UX, SEO, CMS integration', description: 'Modern, conversion-optimised web platforms designed with editorial precision and built for speed, accessibility and seamless CMS management from day one.', items: ['UI/UX design & prototyping', 'Front-end development', 'CMS integration (WordPress, Webflow)', 'On-page SEO setup', 'Performance & accessibility audits'], deliverables: ['Wireframes & UI Kit', 'Production-Ready Website', 'CMS Training Guide', 'SEO Foundation Report'], Icon: Code, bg: '#F7FEE7', iconColor: '#65A30D', watermark: '#D9F99D' },
  { id: 'performance-marketing', title: 'Performance Marketing', short: 'Data-driven growth, conversion optimisation', description: 'Precision paid media strategy and execution focused on measurable ROI — from audience targeting and creative testing to attribution dashboards and iterative scaling.', items: ['Paid search & display campaigns', 'Meta & programmatic advertising', 'Conversion rate optimisation', 'A/B creative testing', 'Revenue attribution modelling'], deliverables: ['Performance Campaign Setup', 'CRO Audit Report', 'Custom Attribution Dashboard', 'Bi-weekly Scaling Reports'], Icon: BarChart3, bg: '#FFF1F2', iconColor: '#BE123C', watermark: '#FECDD3' },
  { id: 'online-reputation', title: 'Online Reputation', short: 'Monitoring, sentiment control', description: 'Proactive brand reputation management across digital channels — monitoring sentiment, suppressing negative content and building a positive, authoritative online presence.', items: ['Brand mention monitoring', 'Sentiment analysis & reporting', 'Review management (Google, Glassdoor)', 'Negative content suppression', 'Crisis communication strategy'], deliverables: ['Reputation Audit Report', 'Monitoring Dashboard', 'Crisis Communication Protocol', 'Monthly Sentiment Report'], Icon: Shield, bg: '#F0F9FF', iconColor: '#0369A1', watermark: '#BAE6FD' },
  { id: 'seo', title: 'SEO', short: 'Visibility, keyword optimisation', description: 'Technical and editorial SEO strategies engineered for first-page dominance — from site architecture and keyword research to link building and content scaling.', items: ['Technical SEO audit & fixes', 'Keyword research & mapping', 'On-page content optimisation', 'Link building campaigns', 'Local & international SEO'], deliverables: ['Technical SEO Audit', 'Keyword Strategy Map', 'Content Optimisation Plan', 'Monthly Ranking Report'], Icon: Search, bg: '#ECFDF5', iconColor: '#059669', watermark: '#6EE7B7' },
  { id: 'tvc-scripting', title: 'TVC Scripting', short: 'Concept to storyboarding to delivery', description: 'Compelling television and digital commercial scripts crafted with narrative precision — from initial concept and character development to final shooting script and storyboard.', items: ['Concept development & ideation', 'Script writing & dialogue', 'Storyboarding & shot lists', 'Director treatment briefs', 'Post-production supervision'], deliverables: ['Concept Presentation Deck', 'Final Shooting Script', 'Storyboard Panels', 'Director Treatment Brief'], Icon: FileText, bg: '#FAF5FF', iconColor: '#7C3AED', watermark: '#D8B4FE' },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#121214] pt-20 md:pt-24 justify-center">
      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map(({ Icon, ...service }) => (
            <div key={service.id} id={service.id} className="relative group rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col scroll-mt-28" style={{ backgroundColor: service.bg, minHeight: '280px' }}>
              <div className="absolute right-5 bottom-5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110" aria-hidden="true" style={{ opacity: 0.2 }}><Icon className="w-28 h-28 md:w-32 md:h-32" style={{ color: service.watermark }} /></div>
              <div className="relative z-10 p-7 md:p-8 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-sm shrink-0 bg-white"><Icon className="w-5 h-5" style={{ color: service.iconColor }} /></div>
                <h3 className="font-display font-bold text-[#121214] leading-tight mb-2.5" style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)' }}>{service.title}</h3>
                <p className="text-xs md:text-[13px] text-[#5C5C5C] font-body leading-relaxed flex-1">{service.short}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-5 sm:px-10 lg:px-16 max-w-[1440px] mx-auto pb-16 md:pb-20">
        <div className="bg-[#121214] text-white p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none" style={{ background: 'radial-gradient(ellipse at right center, rgba(200,16,46,0.22), transparent 70%)' }} />
          <div className="relative z-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C8102E] block mb-3">Initiate Partnership</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">Ready to reach your <span className="text-[#FFDAD8]">target audience?</span></h2>
            <p className="text-[13px] text-[#A1A1AA] font-body leading-relaxed max-w-lg">Book a strategic consultation at our Bengaluru atelier or virtually worldwide.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8102E] text-white hover:bg-white hover:text-[#C8102E] text-[11px] font-mono font-bold uppercase tracking-wider transition-all shadow-lg rounded-lg"><span>Initiate Strategic Brief</span><ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
