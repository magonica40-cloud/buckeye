import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  GraduationCap, 
  Clock, 
  Users, 
  MapPin, 
  Ticket, 
  CheckCircle, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  Laptop, 
  Briefcase, 
  MessageSquare,
  AlertCircle,
  FileCheck,
  Award
} from 'lucide-react';
import { WORKSHOPS_DATA, TECH_CAREER_LAUNCHPAD_INFO, SITE_CONFIG } from '../data/siteData';
import { TiltCard } from '../components/TiltCard';

interface WorkshopsPageProps {
  onOpenConsultation: (category?: string, workshopTitle?: string) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'executive' | 'campus'>('all');

  return (
    <div className="flex flex-col w-full pt-32 md:pt-36 pb-16 bg-[#FBF9F6]">
      
      {/* =========================================================================
          SECTION 1: EDITORIAL HEADER SPLIT-SCREEN
      ========================================================================= */}
      <section className="w-full border-b border-[#E4E1DC] relative overflow-hidden hero-light-atmosphere py-14 md:py-20">
        {/* Subtle Watermark Aura */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035] font-display font-black text-[18rem] leading-none text-[#1B1C1A]">
          ACADEMY
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (6 Cols): Masterclass Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Buckeye Knowledge // Applied Masterclasses
                </span>
                <span className="hidden sm:inline-block w-8 h-px bg-[#E4E1DC]"></span>
                <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#5C403F]">
                  Corporate Desks &amp; Campus Cohorts
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C1A] tracking-tight leading-[1.08]">
                Masterclasses Engineered for <br className="hidden sm:inline" />
                <span className="text-[#C8102E]">Unfair Advantage.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5C403F] font-body leading-relaxed max-w-2xl">
                Practical, zero-fluff training led by senior practitioners. From corporate advertising and AI-augmented marketing strategy to our flagship on-campus <strong>Tech Career Launchpad</strong> and final-year student apprenticeship programme in Bengaluru.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#tech-career-launchpad"
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-2 shadow-sm hover:shadow-sharp hover:-translate-y-0.5"
                >
                  <span>Featured: Tech Career Launchpad</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#internship"
                  className="px-5 py-3.5 bg-white border border-[#E4E1DC] hover:border-[#1B1C1A] text-[#1B1C1A] text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-2 shadow-sm hover:bg-[#F5F3F0]"
                >
                  <span>Final-Year Internship</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8102E]" />
                </a>
              </div>
            </div>

            {/* Right Column (6 Cols): Clean CSS Event Pass Card with 3D Tilt */}
            <div className="lg:col-span-6">
              <TiltCard className="w-full">
                <div className="border-2 border-[#1B1C1A] bg-[#121214] p-3 sm:p-4 shadow-2xl relative group">
                  {/* CSS-only Event Pass — no photo */}
                  <div className="relative w-full overflow-hidden bg-[#1B1B1F] p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[420px] sm:min-h-[480px] lg:min-h-[530px]">
                    
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C8102E]/[0.03] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute top-8 right-8 w-px h-32 bg-gradient-to-b from-[#C8102E]/40 to-transparent pointer-events-none"></div>

                    {/* Top: Badge */}
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="bg-[#C8102E] px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white inline-block animate-pulse"></span>
                        <span>Flagship Campus Event Pass</span>
                      </span>
                    </div>

                    {/* Center: Key Info Grid */}
                    <div className="flex flex-col gap-6 relative z-10 my-8">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">Venue</span>
                          <span className="text-white font-display font-bold text-lg sm:text-xl">Bengaluru Colleges</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">Ticket Price</span>
                          <span className="text-[#C8102E] font-display font-bold text-lg sm:text-xl">₹499 per student</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">Batch Size</span>
                          <span className="text-white font-display font-bold text-lg sm:text-xl">50–100 Students</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">Duration</span>
                          <span className="text-white font-display font-bold text-lg sm:text-xl">2–4 Hours</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3F3F46] to-transparent"></div>

                      {/* Target Audience */}
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8102E] mb-2 block">Target Audience</span>
                        <p className="text-[#D4D4D8] text-sm sm:text-base font-body leading-relaxed">
                          Final-year B.E., B.Tech, BCA, MCA and computer science students preparing for placements or their first IT job.
                        </p>
                      </div>
                    </div>

                    {/* Bottom: Programme Info Card */}
                    <div className="bg-white/95 backdrop-blur-md p-5 border border-[#E4E1DC] flex flex-col gap-2 shadow-lg relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C8102E]">
                          Tech Career Launchpad
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 border border-emerald-200">
                          ₹499 / student
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1C1A]">
                        Practical career-readiness, applied code architecture &amp; generative AI tools for future engineering professionals.
                      </h4>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#A1A1AA] px-1">
                    <span>Bengaluru Engineering Colleges</span>
                    <a
                      href="#tech-career-launchpad"
                      className="text-white hover:text-[#FFDAD8] flex items-center gap-1 font-bold underline"
                    >
                      <span>Curriculum Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED PROGRAMME: TECH CAREER LAUNCHPAD (CAMPUS PRIORITY)
      ========================================================================= */}
      <section id="tech-career-launchpad" className="py-20 bg-[#121214] text-white border-y-2 border-[#C8102E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-10">
            
            {/* Top Bar Status Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#27272A]">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-[#C8102E] text-white text-xs font-sans font-bold uppercase tracking-[0.2em]">
                  Flagship Campus Initiative
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Bengaluru Colleges 2024–2026
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                <span>Enrolment Fee:</span>
                <span className="text-emerald-400 font-bold text-sm">₹499 / Student</span>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Description & Confirmed Curriculum */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                    TECH CAREER LAUNCHPAD
                  </h2>
                  <p className="font-display font-semibold text-xl text-[#FFDAD8] mt-2">
                    {TECH_CAREER_LAUNCHPAD_INFO.subTitle}
                  </p>
                </div>

                {/* Target Audience Box */}
                <div className="p-5 bg-[#1C1C20] border-l-2 border-[#C8102E] flex flex-col gap-2">
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#FFDAD8] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#C8102E]" />
                    <span>Target Cohort:</span>
                  </span>
                  <p className="text-xs sm:text-sm text-[#D4D4D8] font-sans leading-relaxed">
                    {TECH_CAREER_LAUNCHPAD_INFO.targetAudience}
                  </p>
                </div>

                {/* Confirmed Curriculum Schedule */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between border-b border-[#27272A] pb-2">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E]">
                      Confirmed Curriculum Sessions
                    </span>
                    <span className="text-[11px] font-mono text-[#A1A1AA]">
                      Official Syllabus Roadmap
                    </span>
                  </div>

                  {/* Session 1 */}
                  <div className="p-5 bg-[#18181C] border border-[#27272A] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#FFDAD8]">
                      <span className="bg-[#27272A] px-2.5 py-1 text-white font-bold">
                        00:00–00:20 (20 Mins)
                      </span>
                      <span className="text-emerald-400 font-sans uppercase text-[10px] tracking-wider font-bold">
                        Confirmed Session
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Welcome and IT Career Roadmap
                    </h3>
                    <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                      <strong className="text-white">Student outcome:</strong> Understand entry-level software career options, explore software engineering vs QA/DevOps vs product paths, and benchmark market hiring salary tiers.
                    </p>
                  </div>

                  {/* Session 2 */}
                  <div className="p-5 bg-[#18181C] border border-[#27272A] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#FFDAD8]">
                      <span className="bg-[#27272A] px-2.5 py-1 text-white font-bold">
                        00:20–01:00 (40 Mins)
                      </span>
                      <span className="text-emerald-400 font-sans uppercase text-[10px] tracking-wider font-bold">
                        Hands-On Practical Lab
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      AI Tools for Software Students
                    </h3>
                    <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                      <strong className="text-white">Student outcome:</strong> Practise using modern AI for assisted learning, real code generation, automated unit testing, debugging, and everyday professional developer productivity.
                    </p>
                  </div>

                  {/* Remaining Timetable Notice */}
                  <div className="p-4 bg-[#1C1C20] border border-dashed border-[#3F3F46] flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#C8102E] shrink-0 mt-1.5"></span>
                    <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                      <strong className="text-white">Customizable Timetable Note:</strong> The remaining 2 to 3 hours of the timetable are custom-calibrated in collaboration with participating Bengaluru college placement departments and student faculty leads. (Sessions remain fully editable per college cohort requirements).
                    </p>
                  </div>
                </div>

                {/* Registration & Booking CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => onOpenConsultation('Workshops & Training', 'Tech Career Launchpad Registration')}
                    className="px-8 py-4 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Register Now (₹499)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation('Workshops & Training', 'College On-Campus Cohort Booking Enquiry')}
                    className="px-6 py-4 border border-[#3F3F46] hover:border-white text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Enquire for College Campus</span>
                  </button>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20we%20want%20to%20schedule%20the%20Tech%20Career%20Launchpad%20at%20our%20college.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-4 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-sans font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Placement Desk</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Key Details Spec Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#1C1C20] border border-[#27272A] p-6 sm:p-8 space-y-6 shadow-2xl">
                  
                  <div className="border-b border-[#27272A] pb-4">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#C8102E] block mb-1">
                      Programme Blueprint
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Workshop Logistics
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs font-sans">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                      <span className="flex items-center gap-2 text-[#A1A1AA] uppercase">
                        <Clock className="w-4 h-4 text-[#C8102E]" />
                        <span>Duration:</span>
                      </span>
                      <span className="font-bold text-white font-mono text-sm">
                        {TECH_CAREER_LAUNCHPAD_INFO.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                      <span className="flex items-center gap-2 text-[#A1A1AA] uppercase">
                        <Users className="w-4 h-4 text-[#C8102E]" />
                        <span>Batch Size:</span>
                      </span>
                      <span className="font-bold text-white font-mono text-sm">
                        {TECH_CAREER_LAUNCHPAD_INFO.batchSize}
                      </span>
                    </div>

                    <div className="flex items-start justify-between pb-3 border-b border-[#27272A]">
                      <span className="flex items-center gap-2 text-[#A1A1AA] uppercase">
                        <MapPin className="w-4 h-4 text-[#C8102E]" />
                        <span>Venues:</span>
                      </span>
                      <span className="font-bold text-white text-right max-w-[200px]">
                        {TECH_CAREER_LAUNCHPAD_INFO.venue}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
                      <span className="flex items-center gap-2 text-[#A1A1AA] uppercase">
                        <Ticket className="w-4 h-4 text-[#C8102E]" />
                        <span>Ticket Price:</span>
                      </span>
                      <span className="font-bold text-emerald-400 font-mono text-base">
                        {TECH_CAREER_LAUNCHPAD_INFO.ticketPrice}
                      </span>
                    </div>

                  </div>

                  {/* Highlights Checklist */}
                  <div className="p-4 bg-[#121214] border border-[#27272A] space-y-3">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#FFDAD8] block">
                      Core Workshop Outcomes:
                    </span>
                    <ul className="space-y-2 text-xs text-[#A1A1AA]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                        <span>Demystified IT career options &amp; market hiring realities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                        <span>Hands-on practice with generative AI for software productivity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                        <span>Technical interview preparation frameworks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                        <span>Official certificate of practical participation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 text-[11px] text-[#71717A] font-sans text-center">
                    Dedicated cohorts can be hosted directly at college auditoriums across Bengaluru.
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRACTICAL INTERNSHIP PROGRAMME FOR FINAL-YEAR STUDENTS
      ========================================================================= */}
      <section id="internship" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E4E1DC]">
        <div className="bg-white border border-[#E4E1DC] p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#C8102E]"></span>
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Apprenticeship // Student Pathway
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#5F5E60]">
                  Bengaluru Atelier
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1B1C1A] tracking-tight leading-tight">
                Practical Internship Programme
              </h2>

              <p className="text-base text-[#5C403F] font-sans leading-relaxed max-w-2xl">
                A dedicated, hands-on apprenticeship for ambitious final-year students preparing to enter the professional arena. Work side-by-side with senior strategists, copywriters, and art directors on live studio briefs.
              </p>

              {/* 6 Core Highlights */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1B1C1A] block">
                  Programme Highlights:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Real-World Project Experience", desc: "Work on genuine client briefs, brand assets, and multi-surface design challenges." },
                    { title: "Advertising & Campaign Execution", desc: "Learn end-to-end commercial campaign planning, budget allocation, and asset deployment." },
                    { title: "Digital Marketing Mastery", desc: "Hands-on exposure to SEO, social advertising algorithms, content funnels, and tracking." },
                    { title: "Creative Design & Typography", desc: "Master Swiss modernist design principles, Bodoni/sans pairings, and brand guidelines." },
                    { title: "Content Development", desc: "Draft high-converting copy, brand manifestos, video scripts, and executive pitch decks." },
                    { title: "Professional Mentorship", desc: "Direct 1-on-1 guidance from agency principals with established industry pedigree." },
                  ].map((hl, idx) => (
                    <div key={idx} className="bg-[#F5F3F0] p-4 border border-[#E4E1DC] flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#1B1C1A]">
                          {hl.title}
                        </h4>
                        <p className="text-xs text-[#5C403F] font-sans mt-0.5 leading-relaxed">
                          {hl.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Truthful Disclosure Compliance Alert */}
              <div className="p-4 bg-[#F5F3F0] border border-[#E4E1DC] flex items-start gap-3 text-xs text-[#5F5E60] font-sans">
                <AlertCircle className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1B1C1A] uppercase tracking-wider block mb-0.5">
                    Truthful Disclosure &amp; Ethics Standard:
                  </strong>
                  Buckeye is dedicated to authentic skill acquisition and professional capability. We do not promise or advertise guaranteed employment or job placement assurances. Selection is competitive based on portfolio review and technical evaluation.
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-[#F5F3F0] border border-[#E4E1DC] p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
                <div className="border-b border-[#E4E1DC] pb-3">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#C8102E] block">
                    Internship Blueprint
                  </span>
                  <div className="font-display font-bold text-xl text-[#1B1C1A] mt-1">
                    Application Intake
                  </div>
                </div>

                <div className="space-y-3 text-xs font-sans text-[#5C403F]">
                  <div className="flex justify-between pb-2 border-b border-[#E4E1DC]">
                    <span className="text-[#5F5E60]">Target Group:</span>
                    <span className="font-bold text-[#1B1C1A]">Final-Year Students</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#E4E1DC]">
                    <span className="text-[#5F5E60]">Duration:</span>
                    <span className="font-bold text-[#1B1C1A]">8 to 16 Weeks</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#E4E1DC]">
                    <span className="text-[#5F5E60]">Location:</span>
                    <span className="font-bold text-[#1B1C1A]">Bengaluru Atelier / Hybrid</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5F5E60]">Selection:</span>
                    <span className="font-bold text-[#1B1C1A]">Portfolio &amp; Interview</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation('Internship Opportunities', 'Application for Final-Year Practical Internship')}
                  className="w-full py-4 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply for Internship</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-[#71717A] font-sans">
                  Applications evaluated on a rolling monthly intake.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PROFESSIONAL & EXECUTIVE MASTERCLASSES (EDITORIAL DIRECTORY)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#C8102E]"></span>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Executive Curricula
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B1C1A]">
            Corporate &amp; Team Masterclasses
          </h2>
          <p className="text-sm text-[#5C403F] font-sans mt-2">
            Equip internal marketing, creative, and leadership teams with battle-tested frameworks from the vanguard of advertising.
          </p>
        </div>

        {/* Masterclasses Editorial Spread (Alternating Wide Rows instead of repetitive cards) */}
        <div className="space-y-6">
          {WORKSHOPS_DATA.map((ws, idx) => (
            <div 
              key={ws.id}
              className="bg-white border border-[#E4E1DC] p-6 sm:p-8 hover:border-[#1B1C1A] transition-all shadow-sm group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Identification & Title */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-bold text-[#C8102E]">
                        WS-0{idx + 1}
                      </span>
                      <span className="w-4 h-px bg-[#E4E1DC]"></span>
                      <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#5F5E60] bg-[#F5F3F0] px-2 py-0.5">
                        {ws.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#1B1C1A] group-hover:text-[#C8102E] transition-colors leading-snug">
                      {ws.title}
                    </h3>
                  </div>

                  <div className="pt-4 text-xs font-sans text-[#5C403F]">
                    <span className="text-[#5F5E60] font-bold uppercase text-[10px] block mb-1">Target Audience:</span>
                    <span>{ws.audience}</span>
                  </div>
                </div>

                {/* Description & Learning Modules */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-[#5C403F] font-sans leading-relaxed">
                    {ws.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#F5F3F0]">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1B1C1A] block">
                      Core Syllabus Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {ws.topics.map((t, i) => (
                        <div key={i} className="text-xs text-[#5F5E60] font-sans flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C8102E] shrink-0"></span>
                          <span className="truncate">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Duration & Actions */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:border-l lg:border-[#E4E1DC] lg:pl-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-[#5F5E60] block mb-1">
                      Session Format
                    </span>
                    <div className="font-display text-lg font-bold text-[#1B1C1A] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C8102E]" />
                      <span>{ws.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={() => onOpenConsultation('Workshops & Training', ws.title)}
                      className="w-full py-2.5 bg-[#C8102E] hover:bg-[#1B1C1A] text-white text-xs font-sans font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire for Team</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I'd%20like%20details%20for%20[${ws.title}].`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[#F5F3F0] hover:bg-[#E4E1DC] text-xs font-sans uppercase font-bold text-[#1B1C1A] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COLLEGE INSTITUTIONS DISPATCH BANNER
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#121214] text-white p-8 sm:p-14 border-t-2 border-[#C8102E] flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#FFDAD8] block mb-2">
              Academic &amp; Placement Coordination
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Host a Buckeye Workshop on Your Campus
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans mt-2 max-w-xl">
              Placement officers, department heads, and student chapters can schedule customized cohorts tailored to final-year student readiness across Bengaluru and South India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('Workshops & Training', 'Campus Workshop Schedule Request')}
              className="px-6 py-3.5 bg-[#C8102E] hover:bg-white hover:text-[#121214] text-white text-xs font-sans font-bold uppercase tracking-[0.16em] transition-colors shadow-md text-center"
            >
              Enquire for College
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hello%20Buckeye%20team,%20I%20am%20from%20a%20college%20placement%20cell%20and%20want%20to%20discuss%20a%20workshop.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-sans font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
