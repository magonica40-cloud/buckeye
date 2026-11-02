import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  sheen?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 3.5,
  sheen = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [sheenPosition, setSheenPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalized position from -1 to 1
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const rotateX = ((0.5 - y) * maxTilt * 2).toFixed(2);
    const rotateY = ((x - 0.5) * maxTilt * 2).toFixed(2);
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    setSheenPosition({ x: Math.round(x * 100), y: Math.round(y * 100) });
  }, [maxTilt]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setSheenPosition(null);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle || 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      }}
    >
      {children}

      {/* Dynamic Specular Light Sheen */}
      {sheen && isHovered && sheenPosition && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 380px at ${sheenPosition.x}% ${sheenPosition.y}%, rgba(255, 255, 255, 0.12), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
};
