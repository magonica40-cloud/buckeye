import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // Update document title dynamically based on route for SEO
    const titleMap: Record<string, string> = {
      '/': 'BUCKEYE – Strategic Advertising & Creative Agency | Bengaluru',
      '/about': 'About BUCKEYE – Brand Architecture & The Bureau Essence',
      '/services': 'Services & Capabilities | Strategy, Creative & Digital Marketing – BUCKEYE',
      '/clients': 'Client Portfolio & Case Studies | BUCKEYE – Design & Consulting',
      '/workshops': 'Workshops & Tech Career Launchpad | Applied Academics – BUCKEYE',
      '/contact': 'Contact Us | Start a Strategic Consultation – BUCKEYE',
    };

    document.title = titleMap[pathname] || 'BUCKEYE – Design & Consulting';
  }, [pathname]);

  return null;
};
