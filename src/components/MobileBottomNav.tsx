import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, Briefcase, GraduationCap, Mail } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const items = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Layers },
    { name: 'Clients', path: '/clients', icon: Briefcase },
    { name: 'Workshops', path: '/workshops', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-[#FBF9F6]/95 backdrop-blur-xl border-t border-[#E4E1DC] md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                  isActive
                    ? 'text-[#C8102E] font-bold'
                    : 'text-[#5C403F] hover:text-[#1B1C1A]'
                }`
              }
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-sans uppercase tracking-widest">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
