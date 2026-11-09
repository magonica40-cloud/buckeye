import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenConsultation: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#121214] text-[#F2F0ED] pt-20 pb-28 md:pb-16 border-t-2 border-[#C8102E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#27272A]">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3"><Logo variant="badge" size="md" /></div>
            <p className="font-display italic text-2xl text-white font-normal leading-snug">“{SITE_CONFIG.heroHeadline}”</p>
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md font-sans">{SITE_CONFIG.agencyDescription}</p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">Directory</span>
            <ul className="flex flex-col gap-2.5 text-sm font-sans">
              <li><Link to="/" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">About Buckeye</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/clients" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">Client Work</Link></li>
              <li><Link to="/workshops" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">Workshops &amp; Campus</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-[#D4D4D8] hover:text-white transition-colors">Contact Atelier</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">Core Capabilities</span>
            <ul className="flex flex-col gap-2 text-xs font-sans text-[#A1A1AA]">
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors">Strategy-Oriented Services</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors">Mainline Advertising</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors">Branding &amp; Identity</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors">Web Design &amp; Development</Link></li>
              <li><Link to="/workshops" onClick={scrollToTop} className="text-white hover:text-[#C8102E] font-semibold transition-colors">Workshops &amp; Masterclasses</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">Studio Coordinates</span>
            <div className="flex flex-col gap-3 text-xs font-sans text-[#A1A1AA]">
              <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" /><span>{SITE_CONFIG.contact.address}</span></div>
              <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-[#C8102E] shrink-0" /><a href={`tel:${SITE_CONFIG.contact.phoneTel}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.phoneDisplay}</a></div>
              <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-[#C8102E] shrink-0" /><a href={`mailto:${SITE_CONFIG.contact.emailBriefs}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.emailBriefs}</a></div>
              <div className="flex items-start gap-2.5 pt-1"><Clock className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" /><div><p>{SITE_CONFIG.contact.hours}</p><p className="text-[11px] text-[#71717A]">Bengaluru Atelier</p></div></div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#71717A]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BUCKEYE – DESIGN &amp; CONSULTING.</span><span className="hidden sm:inline-block text-[#3F3F46]">|</span><span className="text-[11px] text-[#A1A1AA]">Creative Strategy &amp; Brand Advisory</span>
          </div>
          <div className="text-[11px] text-[#71717A] text-center md:text-right max-w-md">Studio coordinates and case studies represent configurable portfolio demonstrations.</div>
        </div>
      </div>
    </footer>
  );
};
