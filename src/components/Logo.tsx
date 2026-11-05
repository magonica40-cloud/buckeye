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
    sm: { px: '10px 16px', fontSize: '16px', letterSpacing: '0.1em' },
    md: { px: '14px 22px', fontSize: '21px', letterSpacing: '0.1em' },
    lg: { px: '20px 36px', fontSize: '32px', letterSpacing: '0.12em' },
  }[size];

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
        <div
          className="bg-[#C8102E] shadow-md"
          style={{ padding: sizeMap.px }}
        >
          <span
            className="font-display font-black text-white leading-none uppercase select-none block"
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

  const fontSizeClass = { sm: 'text-2xl', md: 'text-3xl', lg: 'text-5xl' }[size];

  return (
    <span
      className={`font-display font-black uppercase tracking-widest leading-none select-none ${fontSizeClass} ${textColor} ${className}`}
    >
      BUCKEYE
    </span>
  );
};
