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
    md: 'h-10',
    lg: 'h-14',
  }[size];

  // If badge variant is selected, use the crisp cropped version of IMG_1478.PNG with SVG vector fallback
  if (variant === 'badge') {
    return (
      <div className={`relative inline-flex items-center select-none group ${className}`}>
        {/* Real cropped asset from IMG_1478.PNG */}
        <img
          src="/assets/buckeye_logo_cropped.png"
          alt="Buckeye Design & Consulting"
          className={`${heightClass} w-auto object-contain block`}
          onError={(e) => {
            // High-resolution SVG fallback if image is not loaded
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        {/* Vector SVG Backup matching exact typography and styling */}
        <div 
          style={{ display: 'none' }}
          className={`${heightClass} px-3.5 py-1.5 bg-[#C8102E] flex-col justify-center items-start border border-[#9E001F] shadow-sm`}
        >
          <span className="font-sans font-extrabold tracking-[0.22em] text-white text-base leading-none uppercase">
            Buckeye
          </span>
          <span className="font-sans font-medium tracking-[0.14em] text-white text-[9px] uppercase mt-0.5 leading-none">
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
