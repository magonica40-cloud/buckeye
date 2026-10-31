import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialWorkshop?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Advertising & Marketing',
  initialWorkshop,
}) => {
  const categories = [
    'Advertising & Marketing',
    'Branding & Creative Design',
    'Digital Marketing',
    'Workshops & Training',
    'Internship Opportunities',
    'Other Enquiries',
  ];

  const [category, setCategory] = useState<string>(initialCategory);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    timeline: 'Immediate (<1 mo)',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionRef, setSubmissionRef] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
    if (initialWorkshop) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in registering/enquiring for: ${initialWorkshop}. Please provide cohort details and scheduling options.`,
      }));
    }
  }, [initialCategory, initialWorkshop, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    try {
      // Simulate submission to backend API / Webhook
      // In production, configure endpoint via VITE_API_ENQUIRY_URL or formspree/resend
      await new Promise((resolve) => setTimeout(resolve, 800));

      const ref = 'BK-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(ref);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error during brief transmission. Please try again or reach our WhatsApp desk.');
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Buckeye team, my name is ${formData.fullName || 'a client'}. I am enquiring about [${category}].\nNote: ${formData.message || 'I would like to discuss strategic partnership.'}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      timeline: 'Immediate (<1 mo)',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121214]/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-[#FBF9F6] border border-[#E4E1DC] w-full max-w-2xl shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#E4E1DC] bg-[#F5F3F0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                Strategic Consultation Desk
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1B1C1A] mt-1">
              Initiate Project Brief
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C403F] hover:text-[#1B1C1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-14 h-14 bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center border border-[#C8102E]/20">
                <CheckCircle2 className="w-8 h-8 text-[#C8102E]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#5C403F] uppercase">
                  Reference: {submissionRef}
                </span>
                <h4 className="font-display text-2xl font-bold text-[#1B1C1A] mt-1">
                  Brief Dispatched to Partner Desk
                </h4>
                <p className="text-sm text-[#5C403F] max-w-md mx-auto mt-2 font-sans">
                  Thank you, <strong className="text-[#1B1C1A]">{formData.fullName}</strong>. Your consultation enquiry regarding <em>{category}</em> has been logged. Our senior team will review your brief within 24 hours.
                </p>
              </div>

              <div className="p-4 bg-[#EFEEEB] border border-[#E4E1DC] text-xs text-[#5F5E60] max-w-md text-left font-sans flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#C8102E] shrink-0 mt-1.5"></span>
                <p>
                  Need expedited review? Connect directly with our live WhatsApp desk with your reference code <strong>{submissionRef}</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 bg-[#121214] hover:bg-[#C8102E] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Open WhatsApp Follow-Up</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Scope of Engagement Chips */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                  Engagement Category *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map((cat) => {
                    const isSelected = category === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={`px-3 py-2 text-xs font-sans uppercase tracking-wider text-left transition-colors flex items-center justify-between border ${
                          isSelected
                            ? 'bg-[#C8102E] text-white border-[#C8102E]'
                            : 'bg-[#F5F3F0] text-[#1B1C1A] border-[#E4E1DC] hover:border-[#1B1C1A]'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-2.5 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="v.malhotra@enterprise.com"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-2.5 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                    Phone Number (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98450 12345"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-2.5 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

                {/* Company / College */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                    Company / Organisation / College
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Brand, Agency, or Institution"
                    className="w-full bg-[#F5F3F0] border border-[#E4E1DC] px-4 py-2.5 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Timeline Radio Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                  Timeline / Urgency Bracket
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Immediate (<1 mo)', '1-3 Months', 'Exploratory'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`py-2 px-3 text-xs font-sans uppercase tracking-wider text-center border transition-colors ${
                        formData.timeline === t
                          ? 'bg-[#1B1C1A] text-white border-[#1B1C1A]'
                          : 'bg-[#F5F3F0] text-[#5F5E60] border-[#E4E1DC] hover:border-[#1B1C1A]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[#5C403F]">
                  Brief Summary &amp; Context *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your brand challenge, target launch schedule, or specific workshop cohort requirements..."
                  className="w-full bg-[#F5F3F0] border border-[#E4E1DC] p-3 text-sm text-[#1B1C1A] focus:border-[#C8102E] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-4 py-3 border border-[#E4E1DC] hover:border-[#121214] text-xs font-sans font-bold uppercase tracking-[0.14em] text-[#1B1C1A] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Priority Desk</span>
                </button>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3 bg-[#C8102E] hover:bg-[#1B1C1A] disabled:opacity-50 text-white text-xs font-sans font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <span>{status === 'submitting' ? 'Transmitting Brief...' : 'Send Enquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-center text-[#71717A] font-sans">
                Guaranteed response within 24 hours · Strict non-disclosure standard
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
