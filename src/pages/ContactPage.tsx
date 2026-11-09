import React from 'react';
import { Instagram } from 'lucide-react';

export const ContactPage: React.FC = () => (
  <main className="min-h-[calc(100dvh-6rem)] w-full bg-[#FBF9F6] px-4 sm:px-6 py-24 flex items-center justify-center text-center">
    <section className="w-full max-w-[1440px] mx-auto translate-y-24">
      <h1
        className="whitespace-nowrap font-display font-black text-[#C8102E] tracking-[-0.06em] leading-[0.95]"
        style={{ fontSize: 'clamp(1.35rem, 5vw, 5.25rem)' }}
      >
        Ready to grow your brand?
      </h1>

      <p
        className="mt-4 font-display font-black text-[#C8102E] tracking-[-0.04em]"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 5.25rem)' }}
      >
        Let’s talk.
      </p>

      <address className="mt-10 not-italic text-[#C8102E] leading-relaxed font-body font-semibold" style={{ fontSize: 'clamp(0.95rem, 1.45vw, 1.75rem)' }}>
        <span className="block">Church Street, Haridevpur, Shanthala Nagar, Ashok Nagar,</span>
        <span className="block">Bengaluru, Karnataka – 560001</span>
        <p className="mt-3">
          Email: <a className="underline underline-offset-4 decoration-1" href="mailto:info@buckeye.in">info@buckeye.in</a>
        </p>
        <p className="mt-2">
          Ph: <a className="underline underline-offset-4 decoration-1" href="tel:9880321673">9880321673</a>
        </p>
      </address>

      <a
        href="https://www.instagram.com/buckeyeads?srtk=MTRjcHZ5enF0ZzA2dA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Buckeye on Instagram"
        className="inline-flex items-center gap-2 mt-6 text-[#C8102E] hover:text-[#8F0B20] transition-colors font-body font-semibold"
      >
        <Instagram className="w-6 h-6" aria-hidden="true" />
        <span>Instagram</span>
      </a>
    </section>
  </main>
);
