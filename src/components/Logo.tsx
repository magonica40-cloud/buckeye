import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'crimson' | 'white' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'badge', 
  className = '',
  size = 'md' 
}) => {
  const heightClass = {
    sm: 'h-8',
    md: 'h-9 sm:h-9.5',
    lg: 'h-9.5 sm:h-10',
  }[size];

  // Precision Swiss Editorial Red Badge: Exact, non-expanded, razor-sharp vector typography
  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <div 
          className={`${heightClass} px-3 sm:px-3.5 py-1.5 bg-[#C8102E] flex flex-col justify-center items-start shadow-sm border border-[#A50C24] transition-all duration-200 group-hover:scale-[1.02] shrink-0`}
          style={{ aspectRatio: '3.1 / 1' }}
        >
          <span className="font-display font-black text-white text-[15px] sm:text-[16.5px] leading-tight tracking-[0.03em] select-none">
            Buckeye
          </span>
          <span className="font-sans font-bold text-white/95 text-[7.5px] sm:text-[8px] uppercase tracking-[0.16em] leading-none mt-0.5 select-none">
            Design &amp; Consulting
          </span>
        </div>
      </div>
    );
  }

  // Vector transparent variants (crimson / white / dark)
  const textColor = {
    crimson: 'text-[#C8102E]',
    white: 'text-white',
    dark: 'text-[#121214]',
  }[variant];

  const subColor = {
    crimson: 'text-[#5C403F]',
    white: 'text-[#D4D4D8]',
    dark: 'text-[#5F5E60]',
  }[variant];

  return (
    <div className={`inline-flex flex-col select-none leading-none ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className={`font-sans font-black tracking-[0.2em] text-xl md:text-2xl uppercase ${textColor}`}>
          Buckeye
        </span>
        <span className="w-1.5 h-1.5 bg-[#C8102E] inline-block"></span>
      </div>
      <span className={`font-sans font-semibold tracking-[0.18em] text-[10px] md:text-[11px] uppercase mt-0.5 ${subColor}`}>
        Design &amp; Consulting
      </span>
    </div>
  );
};
