import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '../data/siteData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenConsultation: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121214] text-[#F2F0ED] pt-20 pb-28 md:pb-16 border-t-2 border-[#C8102E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#27272A]">
          
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo variant="badge" size="md" />
            </div>
            
            <p className="font-display italic text-2xl text-white font-normal leading-snug">
              “{SITE_CONFIG.heroHeadline}”
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md font-sans">
              {SITE_CONFIG.agencyDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className="px-5 py-3 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-2"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I'd%20like%20to%20discuss%20a%20strategic%20engagement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-sans font-semibold tracking-wider transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Priority Desk</span>
              </a>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
              Directory
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-sans">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">
                  01 Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">
                  02 About Buckeye
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">
                  03 Services
                </Link>
              </li>
              <li>
                <Link to="/clients" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">
                  04 Client Work
                </Link>
              </li>
              <li>
                <Link to="/workshops" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">
                  05 Workshops &amp; Campus
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">
                  06 Contact Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services Breakdown */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
              Core Capabilities
            </span>
            <ul className="flex flex-col gap-2 text-xs font-sans text-[#A1A1AA]">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/services#${srv.id}`} 
                    onClick={scrollToTop}
                    className="hover:text-white transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/workshops#tech-career-launchpad" 
                  onClick={scrollToTop}
                  className="text-white hover:text-[#C8102E] font-semibold transition-colors flex items-center gap-1.5 pt-1"
                >
                  <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
                  <span>Tech Career Launchpad</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Bureau Coordinates (Configurable Placeholders) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
              Studio Coordinates
            </span>
            
            <div className="flex flex-col gap-3 text-xs font-sans text-[#A1A1AA]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phoneTel}`} className="hover:text-white transition-colors font-mono">
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.emailBriefs}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.emailBriefs}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <p>{SITE_CONFIG.contact.hours}</p>
                  <p className="text-[11px] text-[#71717A]">{SITE_CONFIG.contact.protocol}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Compliance Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#71717A]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BUCKEYE – DESIGN &amp; CONSULTING.</span>
            <span className="hidden sm:inline-block text-[#3F3F46]">|</span>
            <span className="text-[11px] text-[#A1A1AA]">Editorial Brand Architecture &amp; Strategic Advisory</span>
          </div>

          <div className="text-[11px] text-[#71717A] text-center md:text-right max-w-md">
            Studio coordinates and case studies represent configurable portfolio demonstrations.
          </div>
        </div>

      </div>
    </footer>
  );
};
