import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenConsultation: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateISTTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateISTTime();
    const interval = setInterval(updateISTTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <header className="fixed top-0 inset-x-0 z-50 bg-[#121214] transition-all shadow-lg">
        {/* White reading progress bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-white z-50 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Top micro-ribbon */}
        <div className="w-full bg-[#0A0A0C] text-white py-1.5 px-4 sm:px-8 lg:px-12 xl:px-16 hidden sm:block border-b border-white/10">
          <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-wider">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-white font-bold">BENGALURU ATELIER</span>
              </span>
              <span className="text-white/30">·</span>
              <span className="text-white/60">12.9716° N, 77.6412° E</span>
              {currentTime && (
                <>
                  <span className="text-white/30">·</span>
                  <span className="text-white/80 font-bold">{currentTime} IST</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline text-white/50">Creative Strategy &amp; Brand Advisory</span>
              <span className="text-white/20 hidden md:inline">·</span>
              <span className="text-emerald-400 font-semibold">Accepting Q4/Q1 Briefs</span>
            </div>
          </div>
        </div>

        {/* Primary nav bar */}
        <div className="w-full h-20 pl-4 sm:pl-6 lg:pl-10 xl:pl-12 pr-3 sm:pr-5 lg:pr-6 xl:pr-8 flex items-center justify-between gap-4">

          {/* Logo — white badge on black */}
          <div className="flex items-center shrink-0">
            <Link to="/" onClick={handleLinkClick} className="flex items-center group">
              <div className="bg-white px-5 py-2.5 md:px-7 md:py-3 shadow-sm group-hover:bg-white/90 transition-colors">
                <span
                  className="font-display font-black text-[#121214] leading-none uppercase select-none block"
                  style={{ fontSize: '24px', letterSpacing: '0.12em' }}
                >
                  BUCKEYE
                </span>
              </div>
            </Link>
          </div>

          {/* Nav + CTA */}
          <div className="ml-auto flex items-center gap-4 lg:gap-6 xl:gap-8">
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors relative py-2 ${
                      isActive ? 'text-white' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-[2px] bg-white transition-all" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            <div className="hidden md:block h-5 w-px bg-white/20"></div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Initiate Brief: white button, black text */}
              <button
                onClick={() => onOpenConsultation('Advertising & Marketing')}
                className="px-4 sm:px-6 py-2.5 bg-white hover:bg-[#C8102E] text-[#121214] hover:text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Initiate Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 text-white hover:text-white/60 transition-colors ml-1"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-[85vw] max-w-sm bg-[#121214] z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between md:hidden border-r border-white/10 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="bg-white px-4 py-2">
              <span className="font-display font-black text-[#121214] text-xl leading-none uppercase tracking-widest block">BUCKEYE</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/60 hover:text-white" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white/40 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white/40"></span>
            <span>Site Directory</span>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`py-3 px-3 text-sm font-sans font-bold uppercase tracking-[0.14em] flex items-center justify-between border transition-colors ${
                    isActive
                      ? 'text-[#121214] bg-white border-white'
                      : 'text-white bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#121214]' : 'text-white/40'}`} />
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-6 bg-[#0A0A0C] border-t border-white/10 flex flex-col gap-4">
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
            className="w-full py-3.5 bg-white hover:bg-[#C8102E] text-[#121214] hover:text-white text-xs font-sans font-bold uppercase tracking-[0.16em] text-center transition-colors shadow-sm"
          >
            Initiate Brief Consultation
          </button>
          <div className="flex flex-col gap-1 text-[11px] text-white/40 font-mono">
            <span className="uppercase font-bold tracking-widest text-white/70">Bengaluru Atelier</span>
            <p>Indiranagar, Bengaluru · 12.9716° N, 77.6412° E</p>
          </div>
        </div>
      </aside>
    </>
  );
};
