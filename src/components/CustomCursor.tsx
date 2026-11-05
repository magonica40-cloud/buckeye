import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]') !== null;
      setIsHovering(isClickable);
    };

    const animate = () => {
      // Ring lags behind dot for smooth follow
      ringX += (dotX - ringX) * 0.14;
      ringY += (dotY - ringY) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Outer ring — slow lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          border: `1.5px solid ${isHovering ? '#C8102E' : 'rgba(200,16,46,0.5)'}`,
          borderRadius: isHovering ? '0' : '50%',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, border-radius 0.25s ease, opacity 0.2s ease',
        }}
      />
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: isHovering ? 6 : 5,
          height: isHovering ? 6 : 5,
          backgroundColor: '#C8102E',
          borderRadius: '50%',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.2s ease',
        }}
      />
    </>
  );
};

