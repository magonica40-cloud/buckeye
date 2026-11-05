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
  // All variants: show ONLY "BUCKEYE" — no sub-text
  const sizeMap = {
    sm: { px: '12px 18px', fontSize: '15px', letterSpacing: '0.08em' },
    md: { px: '14px 22px', fontSize: '18px', letterSpacing: '0.08em' },
    lg: { px: '16px 26px', fontSize: '22px', letterSpacing: '0.09em' },
  }[size];

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
        <div
          className="bg-[#C8102E] border border-[#A50C24] shadow-sm"
          style={{ padding: sizeMap.px }}
        >
          <span
            className="font-display font-black text-white leading-none tracking-widest uppercase select-none block"
            style={{ fontSize: sizeMap.fontSize, letterSpacing: sizeMap.letterSpacing }}
          >
            BUCKEYE
          </span>
        </div>
      </div>
    );
  }

  const textColor = {
    crimson: 'text-[#C8102E]',
    white: 'text-white',
    dark: 'text-[#121214]',
  }[variant] ?? 'text-[#C8102E]';

  const fontSizeClass = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl' }[size];

  return (
    <span
      className={`font-display font-black uppercase tracking-widest leading-none select-none ${fontSizeClass} ${textColor} ${className}`}
    >
      BUCKEYE
    </span>
  );
};
