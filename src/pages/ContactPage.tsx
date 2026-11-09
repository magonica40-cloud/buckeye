import React from 'react';

export const ContactPage: React.FC = () => (
  <main className="min-h-[calc(100dvh-6rem)] w-full bg-[#FBF9F6] px-4 sm:px-6 py-24 flex items-center justify-center text-center">
    <section className="w-full max-w-[1440px] mx-auto translate-y-16">
      <h1
        className="whitespace-nowrap font-display font-black text-[#C8102E] tracking-[-0.06em] leading-[0.95]"
        style={{ fontSize: 'clamp(1.5rem, 5.6vw, 6rem)' }}
      >
        Ready to grow your brand?
      </h1>

      <p
        className="mt-4 font-display font-black text-[#C8102E] tracking-[-0.04em]"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 6rem)' }}
      >
        Let’s talk.
      </p>

      <address className="mt-10 not-italic text-[#C8102E] leading-relaxed font-body" style={{ fontSize: 'clamp(1rem, 1.6vw, 2rem)' }}>
        <span className="block">Church Street, Haridevpur, Shanthala Nagar, Ashok Nagar,</span>
        <span className="block">Bengaluru, Karnataka – 560001</span>
        <p className="mt-3">
          Email: <a className="underline underline-offset-4 decoration-1" href="mailto:info@buckeye.in">info@buckeye.in</a>
        </p>
        <p className="mt-2">
          Ph: <a className="underline underline-offset-4 decoration-1" href="tel:9880321673">9880321673</a>
        </p>
      </address>
    </section>
  </main>
);
