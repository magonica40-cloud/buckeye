import React from 'react';

export const ContactPage: React.FC = () => (
  <main className="min-h-[calc(100dvh-6rem)] w-full bg-[#FBF9F6] px-6 py-24 flex items-center justify-center text-center">
    <section className="w-full max-w-4xl mx-auto">
      <h1 className="font-display font-black text-[#C8102E] tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-7xl">
        Ready to grow your brand?
        <span className="block mt-3">Let’s talk.</span>
      </h1>

      <address className="mt-10 not-italic font-body text-[#C8102E] text-lg sm:text-xl leading-relaxed">
        <p>Church Street, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka – 560001</p>
        <p className="mt-3">
          Email: <a className="underline underline-offset-4" href="mailto:info@buckeye.in">info@buckeye.in</a>
        </p>
        <p className="mt-2">
          Ph: <a className="underline underline-offset-4" href="tel:9880321673">9880321673</a>
        </p>
      </address>
    </section>
  </main>
);
