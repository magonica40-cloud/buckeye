import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenConsultation: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FBF9F6] border-b border-[#E4E1DC] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with User's Cropped Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 group">
              <Logo variant="badge" size="md" />
              <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-[#E4E1DC]">
                <span className="w-1.5 h-1.5 bg-[#C8102E] inline-block animate-pulse"></span>
                <span className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase text-[#5C403F]">
                  Design &amp; Strategic Advisory
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - High Contrast, 100% Readable */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#EFEEEB] p-1 border border-[#E4E1DC]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`px-3 lg:px-4 py-2 text-xs font-sans font-extrabold uppercase tracking-[0.16em] transition-all relative flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-[#C8102E] text-white shadow-sm' 
                      : 'text-[#1B1C1A] hover:text-[#C8102E] hover:bg-white'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Priority Button */}
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I%20would%20like%20to%20discuss%20a%20strategic%20engagement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2.5 text-xs font-sans font-bold tracking-wider text-[#1B1C1A] bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] transition-colors shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="text-[11px] uppercase tracking-wider">WhatsApp</span>
            </a>

            {/* Consultation Trigger */}
            <button
              onClick={() => onOpenConsultation('Advertising & Marketing')}
              className="px-5 py-2.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2 shadow-sm hover:shadow-sharp hover:-translate-y-0.5"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#1B1C1A] hover:text-[#C8102E] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-[#121214]/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-[85vw] max-w-sm bg-[#FBF9F6] z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between md:hidden border-r border-[#E4E1DC] ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E4E1DC]">
            <Logo variant="badge" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1B1C1A] hover:text-[#C8102E]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C8102E]"></span>
            <span>Site Directory</span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`py-3 px-3 text-sm font-sans font-bold uppercase tracking-[0.14em] flex items-center justify-between border transition-colors ${
                    isActive ? 'text-white bg-[#C8102E] border-[#C8102E]' : 'text-[#1B1C1A] bg-white border-[#E4E1DC] hover:text-[#C8102E]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`text-xs font-mono ${isActive ? 'text-white' : 'text-[#5C403F]'}`}>0{idx + 1}</span>
                    <span>{link.name}</span>
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#5C403F]'}`} />
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-6 bg-[#F5F3F0] border-t border-[#E4E1DC] flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] text-center transition-colors"
          >
            Get a Free Consultation
          </button>

          <div className="flex flex-col gap-1 text-[11px] text-[#5F5E60] font-sans">
            <span className="uppercase font-bold tracking-widest text-[#1B1C1A]">Bureau Coordinates</span>
            <p>Bengaluru, India · Global Strategic Practice</p>
            <p className="text-[10px] text-[#5C403F]">{SITE_CONFIG.contact.coordinates}</p>
          </div>
        </div>
      </aside>
    </>
  );
};
