import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Check, 
  CheckCircle2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  ExternalLink,
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, FAQ_ITEMS } from '../data/siteData';
import { TiltCard } from '../components/TiltCard';

export const ContactPage: React.FC = () => {
  // Engagement Category selection state
  const categories = [
    'Advertising & Marketing',
    'Branding & Creative Design',
    'Digital Marketing',
    'Workshops & Training',
    'Internship Opportunities',
    'Other Enquiries',
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('Advertising & Marketing');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    timeline: 'Immediate (<1 mo)',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionCode, setSubmissionCode] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // FAQ Accordion Open Items
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    // Strict validation
    if (!formData.fullName.trim()) {
      setFormStatus('error');
      setErrorMessage('Full name is required.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormStatus('error');
      setErrorMessage('A valid email address is required.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormStatus('error');
      setErrorMessage('Phone number with country code is required.');
      return;
    }
    if (!formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please include brief context for your consultation enquiry.');
      return;
    }

    try {
      // Simulate asynchronous brief submission
      await new Promise((res) => setTimeout(res, 800));

      const code = 'BK-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionCode(code);
      setFormStatus('success');
    } catch (err) {
      setFormStatus('error');
      setErrorMessage('Transmission failed. Please reach us directly via our WhatsApp priority line or email.');
    }
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Buckeye team, my name is ${formData.fullName || 'a client'}. I would like to inquire about [${selectedCategory}].\n\nContext: ${formData.message || 'Strategic advisory inquiry'}\nTimeline: ${formData.timeline}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full pt-32 md:pt-36 pb-16 bg-[#FBF9F6]">

      {/* =========================================================================
          SECTION 1: EDITORIAL HEADER SPLIT-SCREEN
      ========================================================================= */}
      <section className="w-full border-b border-[#E4E1DC] relative overflow-hidden hero-light-atmosphere py-8 md:py-10">
        {/* Subtle Watermark Aura */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] font-display font-black text-[18rem] leading-none text-[#1B1C1A]">
          CONTACT
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (6 Cols): Partner Desk Context & CTAs */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Initiate Partnership // Strategic Consultation
                </span>
                <span className="hidden sm:inline-block w-8 h-px bg-[#E4E1DC]"></span>
                <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#5C403F]">
                  Direct Partner Desk
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-[#1B1C1A] tracking-tight leading-[1.06]">
                Ready to grow your brand? <br className="hidden sm:inline" />
                <span className="text-[#C8102E]">Let’s talk.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-2xl">
                Have a commercial project in mind, need advertising advisory, or want to explore our academic workshops and student apprenticeship cohorts? We'd love to collaborate.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1 max-w-xl">
                <div className="p-3 bg-white border border-[#E4E1DC] shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-[#71717A] block">Protocol</span>
                  <span className="font-display font-bold text-xs text-[#1B1C1A] block mt-0.5">Strict NDA</span>
                </div>
                <div className="p-3 bg-white border border-[#E4E1DC] shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-[#71717A] block">Turnaround</span>
                  <span className="font-display font-bold text-xs text-[#C8102E] block mt-0.5">&lt; 24h Response</span>
                </div>
                <div className="p-3 bg-white border border-[#E4E1DC] shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-[#71717A] block">Location</span>
                  <span className="font-display font-bold text-xs text-[#1B1C1A] block mt-0.5">Indiranagar</span>
                </div>
              </div>

              {/* Quick Action Triggers */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact-form"
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2 shadow-sm hover:shadow-sharp hover:-translate-y-0.5"
                >
                  <span>Transmit Project Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I%20would%20like%20to%20discuss%20a%20strategic%20brief.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center gap-2 hover:bg-[#FAF8F5] shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Right Column (6 Cols): Expanded Studio Desk & Map Card with 3D Tilt */}
            <div className="lg:col-span-6">
              <TiltCard className="w-full">
                <div className="border-2 border-[#1B1C1A] bg-[#121214] p-3 sm:p-4 shadow-2xl relative group">
                  <div className="relative h-96 sm:h-[480px] lg:h-[530px] w-full overflow-hidden bg-[#1B1B1F]">
                    <img 
                      src="/assets/indiranagar_office.jpg" 
                      alt="Buckeye Indiranagar Atelier" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/90 via-transparent to-black/30 pointer-events-none"></div>

                    <div className="absolute top-4 left-4 bg-[#121214]/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-white border border-[#3F3F46] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C8102E] inline-block"></span>
                      <span>Studio Coordinates · Bengaluru</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 border border-[#E4E1DC] flex flex-col gap-2 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C8102E]">
                          {SITE_CONFIG.contact.hours}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1C1A]">
                        {SITE_CONFIG.contact.address}
                      </h4>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#A1A1AA] px-1">
                    <span>Direct Concierge Registration</span>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold flex items-center gap-1.5 hover:underline"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INSTANT HOTLINE STRIP / DIRECT CHANNELS (CONFIGURABLE)
      ========================================================================= */}
      <section className="py-12 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto border-b border-[#E4E1DC]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone / Direct Line */}
          <a
            href={`tel:${SITE_CONFIG.contact.phoneTel}`}
            className="group bg-white p-6 sm:p-8 border border-[#E4E1DC] hover:border-[#1B1C1A] transition-all flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F5F3F0] border border-[#E4E1DC] flex items-center justify-center text-[#C8102E] shrink-0 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                  Studio Phone Line
                </span>
                <span className="font-display text-lg font-bold text-[#1B1C1A] block">
                  {SITE_CONFIG.contact.phoneDisplay}
                </span>
                <span className="text-[10px] text-[#71717A] uppercase tracking-wider">
                  Configurable Studio Hotline
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#5C403F] group-hover:translate-x-1 group-hover:text-[#C8102E] transition-all shrink-0" />
          </a>

          {/* Email / Client Brief Desk */}
          <a
            href={`mailto:${SITE_CONFIG.contact.emailBriefs}`}
            className="group bg-white p-6 sm:p-8 border border-[#E4E1DC] hover:border-[#1B1C1A] transition-all flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F5F3F0] border border-[#E4E1DC] flex items-center justify-center text-[#C8102E] shrink-0 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                  Client Brief Desk
                </span>
                <span className="font-display text-lg font-bold text-[#1B1C1A] block">
                  {SITE_CONFIG.contact.emailBriefs}
                </span>
                <span className="text-[10px] text-[#71717A] uppercase tracking-wider">
                  Direct Partner Inbox
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#5C403F] group-hover:translate-x-1 group-hover:text-[#C8102E] transition-all shrink-0" />
          </a>

          {/* Physical Atelier Location */}
          <div className="bg-white p-6 sm:p-8 border border-[#E4E1DC] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F5F3F0] border border-[#E4E1DC] flex items-center justify-center text-[#C8102E] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                  Bengaluru Atelier
                </span>
                <span className="font-sans text-xs font-bold text-[#1B1C1A] block leading-snug">
                  Indiranagar 100ft Road, Bengaluru
                </span>
                <span className="text-[10px] text-[#71717A] font-mono">
                  {SITE_CONFIG.contact.coordinates}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase bg-[#F5F3F0] px-2 py-1 border border-[#E4E1DC] text-[#1B1C1A]">
              IST +5:30
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FAST-LANE WHATSAPP PRIORITY DESK
      ========================================================================= */}
      <section className="py-6 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto">
        <div className="bg-[#121214] p-6 sm:p-8 text-white border border-[#27272A] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#FFDAD8]">
                Priority Studio Dispatch
              </span>
              <span className="text-xs font-mono text-[#A1A1AA]">
                Avg Response: &lt; 15 mins
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] font-sans max-w-2xl">
              Need rapid consultation for an impending rebrand launch, campaign deadline, or college campus workshop schedule?
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2.5 shrink-0 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp Priority Desk</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: STRATEGIC BRIEF SUBMISSION FORM
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto border-b border-[#E4E1DC]">
        <div className="bg-white border border-[#E4E1DC] p-8 sm:p-14 shadow-sm max-w-4xl mx-auto">
          
          <div className="border-b border-[#E4E1DC] pb-6 mb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Strategic Consultation Desk
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-[#1B1C1A]">
              Project Scope &amp; Particulars
            </h2>
            <p className="text-xs sm:text-sm text-[#5C403F] font-sans mt-1">
              Select your primary area of interest and provide context below.
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-[#C8102E]/10 border border-[#C8102E] text-[#C8102E] flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5C403F]">
                  Consultation Reference: {submissionCode}
                </span>
                <h3 className="font-display text-3xl font-bold text-[#1B1C1A] mt-1">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#5C403F] font-sans max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <em>{selectedCategory}</em> has been securely logged. Our partner desk will review your details within 24 hours.
                </p>
              </div>

              <div className="p-4 bg-[#F5F3F0] border border-[#E4E1DC] text-xs text-[#5F5E60] font-sans max-w-md text-left flex items-start gap-2.5 mt-2">
                <span className="w-1.5 h-1.5 bg-[#C8102E] shrink-0 mt-1.5"></span>
                <p>
                  To attach pitch decks, RFP briefs, or book an immediate call, quote reference <strong>{submissionCode}</strong> with our studio via WhatsApp or email.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 bg-[#121214] hover:bg-[#C8102E] text-white text-xs font-sans font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Notify Partner via WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      company: '',
                      timeline: 'Immediate (<1 mo)',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-xs font-sans font-bold uppercase tracking-widest transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              
              {/* Scope of Engagement Chips */}
              <div className="space-y-3">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#1B1C1A] block">
                  Scope of Interest *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`p-3 text-xs font-sans uppercase tracking-wider text-left border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#C8102E] text-white border-[#C8102E] shadow-sm font-bold'
                            : 'bg-[#F5F3F0] text-[#1B1C1A] border-[#E4E1DC] hover:border-[#1B1C1A]'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        {isSelected && <Check className="w-4 h-4 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-3 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                    Work / Personal Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-3 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                    Phone Number (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98450 12345"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-3 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Company / College */}
                <div className="space-y-1.5">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                    Organisation / College Institution
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or College name"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-3 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Timeline / Urgency Bracket */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                  Target Timeline / Urgency
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Immediate (<1 mo)', '1-3 Months', 'Exploratory'].map((timeOption) => {
                    const isSelected = formData.timeline === timeOption;
                    return (
                      <button
                        key={timeOption}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: timeOption })}
                        className={`py-3 px-3 text-xs font-sans uppercase tracking-wider text-center border transition-all ${
                          isSelected
                            ? 'bg-[#1B1C1A] text-white border-[#1B1C1A] font-bold'
                            : 'bg-[#F5F3F0] text-[#5F5E60] border-[#E4E1DC] hover:border-[#1B1C1A]'
                        }`}
                      >
                        {timeOption}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Brief Summary */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#5C403F] block">
                  Enquiry Context &amp; Objectives *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your brand objectives, campaign timeline, or specific workshop / internship requirements..."
                  className="w-full bg-[#F5F3F0] border border-[#E4E1DC] p-4 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Error Alert */}
              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Action */}
              <div className="space-y-4 pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-[#C8102E] hover:bg-[#1B1C1A] disabled:opacity-50 text-white text-xs font-sans font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors shadow-md"
                >
                  <span>{formStatus === 'submitting' ? 'Submitting Details...' : 'Send Consultation Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="p-3 bg-[#F5F3F0] border border-[#E4E1DC] flex items-center justify-center gap-2 text-center text-xs font-sans text-[#5F5E60]">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>Prompt Response within 24 Hours • Strict Confidentiality</span>
                </div>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PHYSICAL ATELIER COORDINATES & VISUAL
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto border-b border-[#E4E1DC]">
        <div className="bg-[#F5F3F0] border border-[#E4E1DC] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Studio Coordinates
                </span>
                <span className="text-xs font-mono text-[#5F5E60]">
                  {SITE_CONFIG.contact.coordinates}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1B1C1A]">
                Bengaluru Creative Atelier
              </h3>

              <p className="text-sm text-[#5C403F] font-sans leading-relaxed">
                {SITE_CONFIG.contact.address}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-sans">
                <div className="bg-white p-4 border border-[#E4E1DC]">
                  <span className="text-[#5F5E60] uppercase text-[10px] font-bold block mb-1">Visiting Hours</span>
                  <span className="font-bold text-[#1B1C1A] block">Mon – Fri</span>
                  <span className="text-[11px] text-[#5C403F]">09:30 – 18:30 IST</span>
                </div>
                <div className="bg-white p-4 border border-[#E4E1DC]">
                  <span className="text-[#5F5E60] uppercase text-[10px] font-bold block mb-1">Consultation</span>
                  <span className="font-bold text-[#1B1C1A] block">By Appointment</span>
                  <span className="text-[11px] text-[#5C403F]">Partner Desk Check-in</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Indiranagar+100ft+Road+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E] hover:text-[#1B1C1A]"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-72 sm:h-80 overflow-hidden border border-[#E4E1DC] relative shadow-sm">
                <img 
                  src="/assets/indiranagar_office.jpg" 
                  alt="Bengaluru Creative Atelier on Indiranagar 100ft Road"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent flex items-end p-4 justify-between">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-white">
                    Indiranagar Atelier • Main Chamber
                  </span>
                  <span className="px-2.5 py-1 bg-[#C8102E] text-white text-[10px] uppercase font-bold tracking-wider">
                    Creative Desk
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INTERACTIVE FAQ ACCORDION
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E] block mb-2">
              Frequently Clarified
            </span>
            <h2 className="font-display text-3xl font-bold text-[#1B1C1A]">
              Consultation Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-[#E4E1DC] transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F5F3F0] transition-colors"
                  >
                    <span className="text-sm font-sans font-bold text-[#1B1C1A]">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 bg-[#F5F3F0] border border-[#E4E1DC] flex items-center justify-center shrink-0 text-[#C8102E]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed border-t border-[#F5F3F0]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
