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
  // Size map — only BUCKEYE, no subtitle
  const sizeMap = {
    sm: { fontSize: '17px', px: '12px 16px' },
    md: { fontSize: '21px', px: '14px 20px' },
    lg: { fontSize: '26px', px: '16px 28px' },
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
            style={{ fontSize: sizeMap.fontSize, letterSpacing: '0.1em' }}
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
