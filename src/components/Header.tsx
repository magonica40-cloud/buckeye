import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenConsultation: (category?: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateISTTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
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
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[#E8E8E8] transition-all">
        <div className="absolute top-0 left-0 h-[2.5px] bg-[#C8102E] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }} />
        <div className="w-full bg-[#121214] text-white py-1.5 px-4 sm:px-8 lg:px-12 xl:px-16 hidden sm:block border-b border-[#27272A]">
          <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-wider">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /><span className="text-white font-bold">BENGALURU ATELIER</span></span>
              <span className="text-[#52525B]">·</span><span className="text-[#A1A1AA]">12.9716° N, 77.6412° E</span>
              {currentTime && <><span className="text-[#52525B]">·</span><span className="text-[#FFDAD8] font-bold">{currentTime} IST</span></>}
            </div>
            <div className="flex items-center gap-4 text-[#A1A1AA]">
              <span className="hidden md:inline">Creative Strategy &amp; Brand Advisory</span><span className="text-[#52525B] hidden md:inline">·</span><span className="text-emerald-400 font-semibold">Accepting Q4/Q1 Briefs</span>
            </div>
          </div>
        </div>

        <div className="w-full h-20 pl-4 sm:pl-6 lg:pl-10 xl:pl-12 pr-3 sm:pr-5 lg:pr-6 xl:pr-8 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <Link to="/" onClick={handleLinkClick} className="flex items-center group"><Logo variant="badge" size="lg" className="shrink-0" /></Link>
          </div>
          <div className="ml-auto flex items-center gap-4 lg:gap-6 xl:gap-8">
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink key={link.name} to={link.path} className={`text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors relative py-2 ${isActive ? 'text-[#C8102E]' : 'text-[#1B1C1A] hover:text-[#C8102E]'}`}>
                    <span>{link.name}</span>{isActive && <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#C8102E] transition-all" />}
                  </NavLink>
                );
              })}
            </nav>
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-[#1B1C1A] hover:text-[#C8102E] transition-colors ml-1" aria-label="Open menu"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-[#121214]/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />

      <aside className={`fixed top-0 bottom-0 left-0 w-[85vw] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between md:hidden border-r border-[#E8E8E8] ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8]">
            <Logo variant="badge" size="sm" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-[#1B1C1A] hover:text-[#C8102E]" aria-label="Close menu"><X className="w-5 h-5" /></button>
          </div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#C8102E] flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#C8102E]" /><span>Site Directory</span></div>
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return <NavLink key={link.name} to={link.path} onClick={handleLinkClick} className={`py-3 px-3 text-sm font-sans font-bold uppercase tracking-[0.14em] flex items-center justify-between border transition-colors ${isActive ? 'text-white bg-[#C8102E] border-[#C8102E]' : 'text-[#1B1C1A] bg-white border-[#E8E8E8] hover:text-[#C8102E]'}`}><span>{link.name}</span><ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#5C403F]'}`} /></NavLink>;
            })}
          </nav>
        </div>
        <div className="p-6 bg-[#F5F5F5] border-t border-[#E8E8E8] flex flex-col gap-1 text-[11px] text-[#5F5E60] font-mono">
          <span className="uppercase font-bold tracking-widest text-[#1B1C1A]">Bengaluru Atelier</span>
          <p>Indiranagar, Bengaluru · 12.9716° N, 77.6412° E</p>
        </div>
      </aside>
    </>
  );
};
