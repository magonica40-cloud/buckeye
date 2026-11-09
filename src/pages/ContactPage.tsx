import React from 'react';

export const ContactPage: React.FC = () => (
  <main className="min-h-[calc(100dvh-6rem)] w-full bg-[#FBF9F6] px-6 py-24 flex items-center justify-center text-center">
    <section className="w-full max-w-[1200px] mx-auto">
      <h1
        className="font-display font-black text-[#C8102E] tracking-[-0.055em] leading-[0.9]"
        style={{ fontSize: 'clamp(3.2rem, 6vw, 8rem)' }}
      >
        Ready to grow your brand?
      </h1>

      <p
        className="mt-4 font-display font-black text-[#C8102E] tracking-[-0.04em]"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 6rem)' }}
      >
        Let’s talk.
      </p>

      <div className="mt-10 text-[#C8102E] leading-relaxed">
        <p
          className="font-body mx-auto"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 2rem)', maxWidth: '1100px' }}
        >
          Church Street, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka – 560001
        </p>

        <p className="mt-3" style={{ fontSize: 'clamp(1rem, 1.6vw, 2rem)' }}>
          Email: <a className="underline underline-offset-4 decoration-1" href="mailto:info@buckeye.in">info@buckeye.in</a>
        </p>

        <p className="mt-2" style={{ fontSize: 'clamp(1rem, 1.6vw, 2rem)' }}>
          Ph: <a className="underline underline-offset-4 decoration-1" href="tel:9880321673">9880321673</a>
        </p>
      </div>
    </section>
  </main>
);
