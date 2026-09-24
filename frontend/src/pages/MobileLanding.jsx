import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, ArrowRight, ArrowUpRight, ShieldCheck, Heart, Star, Stethoscope, Quote } from 'lucide-react';
import bgImage from '../assets/y.png';
import logoImage from '../assets/lo_clean.png';
import h1Image from '../assets/h1.png';
import haImage from '../assets/ha.png';
import h2Image from '../assets/h2.png';
import h4Image from '../assets/h4.png';
import h3Image from '../assets/h3.png';
import h6Image from '../assets/h6.png';
import h7Image from '../assets/h7.png';
import h8Image from '../assets/h8.png';
import h9Image from '../assets/h9.png';
import h10Image from '../assets/h10.png';
import h11Image from '../assets/h11.png';
import avatar1 from '../assets/avatar_amara.png';
import avatar2 from '../assets/avatar_daniel.png';
import avatar3 from '../assets/avatar_sophie.png';
import reviewImg from '../assets/s1.png';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';

const ROTATING_WORDS = [
  ['Beautiful', 'Smile', 'Begins'],
  ['Beautiful', 'Smiles', 'Begin']
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.15
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.35 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(3px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const MobileLanding = () => {
  const { getImage } = useMedia();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white sm:bg-neutral-900 flex justify-center items-center">
      {/* Mobile viewport frame container */}
      <div className="relative w-full sm:max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide bg-white flex flex-col">
        
        {/* First Page / Hero Section */}
        <div className="relative w-full min-h-screen sm:min-h-[890px] flex flex-col justify-start shrink-0 overflow-hidden bg-white">
          {/* Background Image Container with y.png */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            <img 
              src={getImage('mobile-home', 'hero', bgImage)} 
              alt="Manick Dental Clinic" 
              className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none" 
            />
          </div>

          <MobileNavbar />

          {/* Hero Title Section - Sits in the luminous mist area completely above doctor's head */}
          <div className="relative z-10 px-5 pt-2 sm:pt-3 pb-1 text-center">
            <h1 className="font-serif text-[32px] sm:text-[34px] font-normal leading-[1.14] tracking-tight select-none">
              <span className="block text-black">Where Every</span>
              <span className="text-black">Smile </span>
              <span className="text-[#2D0A5C]">Becomes</span>
              <span className="block text-[#2D0A5C]">a Masterpiece</span>
            </h1>
          </div>

          {/* Glassmorphism Card Section - sits over doctor's face & upper body, leaving patient jeans & tray visible below */}
          <div className="relative z-10 px-5 mt-3 sm:mt-4 mb-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-md border border-white/70 rounded-[1.5rem] px-5 py-4 sm:py-5 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <p className="text-[14px] sm:text-[14.5px] font-normal leading-[1.45] text-black mb-4 px-1 tracking-tight">
                Experience Modern density where advanced Technology meets exceptional, deeply human care.
              </p>

              <div className="flex flex-col gap-2.5 w-full">
                {/* Primary Button */}
                <Link 
                  to="/mobile/book-appointment"
                  className="w-full h-[48px] bg-white text-black border border-black rounded-2xl flex items-center justify-center gap-2.5 px-6 shadow-sm hover:bg-neutral-50 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="text-[15.5px] font-normal tracking-tight">Book Appointment</span>
                  <svg 
                    className="w-[18px] h-[18px] text-black stroke-[1.8]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Secondary Button */}
                <Link 
                  to="/mobile/services"
                  className="w-full h-[48px] bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black border border-black rounded-2xl flex items-center justify-center px-6 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="text-[15.5px] font-normal tracking-tight">Explore Our Care</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Page / Info Section */}
        <div className="w-full min-h-screen sm:min-h-[890px] bg-[#FAF8F3] flex flex-col shrink-0 relative overflow-hidden pb-8">
          
          {/* Top Section with Watermark and Titles */}
          <div className="relative w-full pt-16 pb-8 px-5 flex flex-col items-center justify-center min-h-[280px]">
            {/* Watermark */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 select-none pointer-events-none gap-6 mt-4">
              <h2 className="font-serif text-[42px] leading-none text-[#D9CDB8] uppercase tracking-widest font-normal">SMILE</h2>
              <h2 className="font-serif text-[42px] leading-none text-[#D9CDB8] uppercase tracking-widest font-normal">CONFIDENCE</h2>
              <h2 className="font-serif text-[42px] leading-none text-[#D9CDB8] uppercase tracking-widest font-normal">CARE</h2>
            </div>
            
            {/* Foreground Title with Word-by-Word Rotating Animation & FIXED Subtitle */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8 min-h-[110px]">
              <div className="h-[44px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phraseIndex}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5"
                  >
                    {ROTATING_WORDS[phraseIndex].map((word, idx) => (
                      <motion.span
                        key={`${phraseIndex}-${idx}`}
                        variants={wordVariants}
                        className="font-serif text-[32px] sm:text-[35px] italic font-semibold text-black leading-tight tracking-tight inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Fixed, static subtitle as explicitly requested */}
              <h2 className="font-serif text-[24px] sm:text-[27px] italic text-[#A68A60] leading-tight text-center mt-1 font-normal select-none">
                with extraordinary care.
              </h2>
            </div>
          </div>

          {/* Image Section */}
          <div className="px-5 w-full relative z-10 -mt-2">
            <img 
              src={getImage('home', 'section-2-image', h1Image)} 
              alt="Dental care in progress" 
              className="w-full h-[220px] object-cover rounded-3xl shadow-sm"
            />
          </div>

          {/* About Card */}
          <div className="px-5 w-full mt-6 relative z-10 flex-grow flex flex-col">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100 flex flex-col gap-4">
              <span className="text-[11px] font-semibold tracking-wider text-black uppercase">About</span>
              
              <h3 className="font-serif text-[22px] font-bold text-black leading-tight">
                Caring for Your Smile Since Day One
              </h3>
              
              <p className="text-[13px] text-neutral-600 leading-relaxed font-normal">
                <strong className="font-semibold text-black">Manick Dental Clinic</strong> was founded with a simple mission: provide honest, gentle, and affordable dental care to the families of Kazhuvanthitai and the surrounding community.
              </p>

              <div className="mt-2 flex flex-col">
                <span className="font-serif text-[15px] text-[#222222] font-semibold">More Than Dentistry.</span>
                <span className="font-serif text-[15px] italic text-[#A68A60] font-semibold">A New Way To Feel Confident.</span>
              </div>

              <div className="mt-4">
                <Link 
                  to="/mobile/about"
                  className="bg-[#2D0A5C] text-white rounded-full px-5 py-2.5 flex items-center justify-between w-[150px] shadow-sm hover:bg-[#3f1082] active:scale-95 transition-all cursor-pointer"
                >
                  <span className="text-[14px] font-medium tracking-wide">Learn More</span>
                  <ArrowRight className="w-[18px] h-[18px] text-white stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>
          
        </div>

        {/* Third Page / Signature Treatments - Stack-Up Animation for the 4 Cards */}
        <div className="w-full bg-[#FAF8F3] flex flex-col shrink-0 px-5 py-12 relative">
          
          {/* Header */}
          <div className="w-full flex items-start justify-between gap-2 mb-3">
            <span className="text-[#A48650] text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap pt-0.5">
              Signature Treatments
            </span>
            <div className="flex flex-col items-end gap-1">
              <p className="text-[#A48650] text-[8px] sm:text-[9px] font-medium text-right leading-tight max-w-[130px]">
                Four disciplines, one philosophy — each treatment is a study in precision and aesthetic harmony.
              </p>
              <Link to="/mobile/services" className="text-[10px] text-[#A48650] hover:text-[#2D0A5C] font-semibold transition-colors">
                View More →
              </Link>
            </div>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[34px] font-bold text-black leading-tight mb-8">
            The Art of Transformation
          </h2>

          {/* Stacking Cards List */}
          <div className="flex flex-col gap-6 w-full pb-16 relative">
            
            {/* Card 01 - Sticky Stack 1 */}
            <div className="sticky top-[75px] z-10 w-full h-[360px] rounded-3xl overflow-hidden group shadow-xl border border-black/5 bg-[#FAF8F3]">
              <img src={getImage('home', 'about', haImage)} alt="General Checkup" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">01</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    General Checkup &<br/>Consultation
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    A bespoke, full-arch artistic transformation crafted to your facial harmony
                  </p>
                </div>
                <Link 
                  to="/mobile/general-checkup"
                  className="w-[36px] h-[36px] rounded-full border-[1.5px] border-white/80 bg-black/20 hover:bg-white/20 active:scale-95 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1 transition-all"
                  aria-label="View General Checkup & Consultation"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Card 02 - Sticky Stack 2 */}
            <div className="sticky top-[95px] z-20 w-full h-[360px] rounded-3xl overflow-hidden group shadow-xl border border-black/5 bg-[#FAF8F3]">
              <img src={getImage('home', 'treatment-1', h2Image)} alt="Smile Makeover" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">02</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    Smile<br/>Makeover
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    A bespoke, full-arch artistic transformation crafted to your facial harmony
                  </p>
                </div>
                <Link 
                  to="/mobile/smile-makeover"
                  className="w-[36px] h-[36px] rounded-full border-[1.5px] border-white/80 bg-black/20 hover:bg-white/20 active:scale-95 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1 transition-all"
                  aria-label="View Smile Makeover"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Card 03 - Sticky Stack 3 */}
            <div className="sticky top-[115px] z-30 w-full h-[360px] rounded-3xl overflow-hidden group shadow-xl border border-black/5 bg-[#FAF8F3]">
              <img src={getImage('home', 'treatment-2', h3Image)} alt="Invisible Aligners" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">03</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    Invisible<br/>Aligners
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    Discreet, precision-engineered alignment with zero compromise to lifestyle
                  </p>
                </div>
                <Link 
                  to="/mobile/invisible-aligners"
                  className="w-[36px] h-[36px] rounded-full border-[1.5px] border-white/80 bg-black/20 hover:bg-white/20 active:scale-95 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1 transition-all"
                  aria-label="View Invisible Aligners"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Card 04 - Sticky Stack 4 */}
            <div className="sticky top-[135px] z-40 w-full h-[360px] rounded-3xl overflow-hidden group shadow-xl border border-black/5 bg-[#FAF8F3]">
              <img src={getImage('home', 'treatment-3', h4Image)} alt="Cosmetic Dentistry" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">04</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    Cosmetic<br/>Dentistry
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    Micro-refinements — veneers, whitening, contouring — for luminous detail.
                  </p>
                </div>
                <Link 
                  to="/mobile/cosmetic-dentistry"
                  className="w-[36px] h-[36px] rounded-full border-[1.5px] border-white/80 bg-black/20 hover:bg-white/20 active:scale-95 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1 transition-all"
                  aria-label="View Cosmetic Dentistry"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Fourth Page / Why Patients Choose Us */}
        <div className="w-full bg-[#FAF8F3] flex flex-col shrink-0 px-5 pt-8 pb-12 relative overflow-hidden">
          
          <div className="w-full flex items-start justify-end mb-6">
            <p className="text-[#A48650] text-[9px] font-medium text-right leading-tight max-w-[150px]">
              We combine gentle dentistry with modern standards to give you the best care experience.
            </p>
          </div>

          <h2 className="font-serif text-[34px] font-bold text-black leading-tight mb-8">
            Why Patients Choose Us
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Feature 1 */}
            <div className="bg-white rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-neutral-50">
              <div className="w-11 h-11 rounded-2xl border-[1.5px] border-[#e9d5ff] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#9333ea]" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-black text-[12.5px] mb-2 leading-tight">Strict Hygiene Standards</h3>
              <p className="text-neutral-500 text-[10px] leading-relaxed font-medium">
                Sterilized instruments, single-use materials, and a clean, safe environment every visit.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-neutral-50">
              <div className="w-11 h-11 rounded-2xl border-[1.5px] border-[#e9d5ff] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#9333ea]" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-black text-[12.5px] mb-2 leading-tight">Gentle, Patient Care</h3>
              <p className="text-neutral-500 text-[10px] leading-relaxed font-medium">
                We treat every patient with patience and compassion — especially those with dental anxiety.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-neutral-50">
              <div className="w-11 h-11 rounded-2xl border-[1.5px] border-[#e9d5ff] flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-[#9333ea]" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-black text-[12.5px] mb-2 leading-tight">Transparent Pricing</h3>
              <p className="text-neutral-500 text-[10px] leading-relaxed font-medium">
                No hidden charges. Clear costs explained before any treatment begins.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-[24px] p-5 flex flex-col items-center text-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-neutral-50">
              <div className="w-11 h-11 rounded-2xl border-[1.5px] border-[#e9d5ff] flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5 text-[#9333ea]" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-black text-[12.5px] mb-2 leading-tight">Modern Equipment</h3>
              <p className="text-neutral-500 text-[10px] leading-relaxed font-medium">
                Up-to-date dental technology for accurate diagnosis and comfortable treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Patient Stories Banner */}
        <section 
          className="relative w-full bg-[#7E6399] min-h-[210px] sm:min-h-[225px] py-8 px-2 flex flex-col items-center justify-center text-center shrink-0 overflow-hidden select-none"
          style={{ backgroundColor: '#7E6399' }}
        >
          {/* Floating Faces with subtle breathe animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 1. Far Left - Laughing man (h6.png) - brought inward away from border */}
            <motion.div
              className="absolute top-[52%] left-[12%] -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full overflow-hidden"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              <img 
                src={getImage('home', 'patient-story-1', h6Image)} 
                alt="Patient Story 1" 
                className="w-full h-full object-cover rounded-full opacity-[0.42]"
              />
            </motion.div>

            {/* 2. Top Left - Man looking right / up (h11.png) */}
            <motion.div
              className="absolute top-[26%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full overflow-hidden"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <img 
                src={getImage('home', 'patient-story-6', h11Image)} 
                alt="Patient Story 2" 
                className="w-full h-full object-cover rounded-full opacity-[0.42]"
              />
            </motion.div>

            {/* 3. Center Bottom - Man pointing to smile (h10.png) */}
            <motion.div
              className="absolute top-[76%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full overflow-hidden"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            >
              <img 
                src={getImage('home', 'patient-story-5', h10Image)} 
                alt="Patient Story 3" 
                className="w-full h-full object-cover rounded-full opacity-[0.42]"
              />
            </motion.div>

            {/* 4. Top Right - Woman smiling & pointing (h9.png) */}
            <motion.div
              className="absolute top-[26%] left-[72%] -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px] rounded-full overflow-hidden"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <img 
                src={getImage('home', 'patient-story-4', h9Image)} 
                alt="Patient Story 4" 
                className="w-full h-full object-cover rounded-full opacity-[0.42]"
              />
            </motion.div>

            {/* 5. Far Right - Blonde woman (h8.png) - brought inward away from border */}
            <motion.div
              className="absolute top-[52%] left-[88%] -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full overflow-hidden"
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            >
              <img 
                src={getImage('home', 'patient-story-3', h8Image)} 
                alt="Patient Story 5" 
                className="w-full h-full object-cover rounded-full opacity-[0.42]"
              />
            </motion.div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center w-full px-2 pointer-events-none">
            <span className="text-white/95 text-[12px] sm:text-[13px] font-sans font-normal mb-2.5 tracking-normal">
              Patient Stories
            </span>
            <h2 className="font-serif text-[19px] sm:text-[21px] font-normal text-white leading-[1.3] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] max-w-[340px] sm:max-w-[370px]">
              <span className="block whitespace-nowrap">“From the first consultation to my final</span>
              <span className="block">smile,</span>
              <span className="block text-[#F7D6A4] italic font-normal">every detail felt exceptional.”</span>
            </h2>
          </div>
        </section>

        {/* Patient Stories List */}
        <div className="w-full bg-[#FAF8F3] flex flex-col shrink-0 px-5 pt-14 pb-12">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-[#B49DFB] text-[10.5px] font-semibold uppercase tracking-[0.2em] mb-3">
              PATIENT STORIES
            </span>
            <h2 className="font-serif text-[30px] sm:text-[34px] font-bold text-black leading-tight">
              Their Smiles. Their Stories.
            </h2>
          </div>
          
          <div className="flex flex-col gap-5 w-full">
            {/* Review Card 1 */}
            <div className="w-full bg-transparent rounded-[28px] p-6 border-[1.5px] border-[#C7B9F4]">
              <svg width="24" height="19" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M7.7 0C3.4 0 0 3.5 0 7.8C0 14.5 4.8 19.8 11.2 21.6L12.4 17.8C7.6 16.5 4.5 13 4.5 9.4C5.4 9.9 6.5 10.2 7.7 10.2C11.5 10.2 14.4 7.5 14.4 3.9C14.4 1.4 12.1 0 7.7 0ZM21.3 0C17 0 13.6 3.5 13.6 7.8C13.6 14.5 18.4 19.8 24.8 21.6L26 17.8C21.2 16.5 18.1 13 18.1 9.4C19 9.9 20.1 10.2 21.3 10.2C25.1 10.2 28 7.5 28 3.9C28 1.4 25.7 0 21.3 0Z" fill="#C7B9F4"/>
              </svg>
              <p className="text-[#2D2D2D] text-[12.5px] sm:text-[13px] leading-[1.65] mb-6 font-normal">
                "The results are beyond what I imagined. I finally smile in photos — something I hadn't done in years. This clinic changed that for me."
              </p>
              <div className="flex items-center gap-3">
                <img src={getImage('home', 'testimonial-3', avatar3)} alt="Sophie M." className="w-11 h-11 rounded-full object-cover p-[1.5px] border border-[#C7B9F4]" />
                <div className="flex flex-col">
                  <span className="text-black font-bold text-[13px]">Sophie M.</span>
                  <span className="text-neutral-500 text-[11px]">Porcelain Veneers</span>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="w-full bg-transparent rounded-[28px] p-6 border-[1.5px] border-[#C7B9F4]">
              <svg width="24" height="19" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M7.7 0C3.4 0 0 3.5 0 7.8C0 14.5 4.8 19.8 11.2 21.6L12.4 17.8C7.6 16.5 4.5 13 4.5 9.4C5.4 9.9 6.5 10.2 7.7 10.2C11.5 10.2 14.4 7.5 14.4 3.9C14.4 1.4 12.1 0 7.7 0ZM21.3 0C17 0 13.6 3.5 13.6 7.8C13.6 14.5 18.4 19.8 24.8 21.6L26 17.8C21.2 16.5 18.1 13 18.1 9.4C19 9.9 20.1 10.2 21.3 10.2C25.1 10.2 28 7.5 28 3.9C28 1.4 25.7 0 21.3 0Z" fill="#C7B9F4"/>
              </svg>
              <p className="text-[#2D2D2D] text-[12.5px] sm:text-[13px] leading-[1.65] mb-6 font-normal">
                "I was nervous about starting my treatment, but the entire experience was comfortable and reassuring. The team is truly world-class."
              </p>
              <div className="flex items-center gap-3">
                <img src={getImage('home', 'testimonial-2', avatar2)} alt="Daniel K." className="w-11 h-11 rounded-full object-cover p-[1.5px] border border-[#C7B9F4]" />
                <div className="flex flex-col">
                  <span className="text-black font-bold text-[13px]">Daniel K.</span>
                  <span className="text-neutral-500 text-[11px]">Invisalign</span>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="w-full bg-transparent rounded-[28px] p-6 border-[1.5px] border-[#C7B9F4]">
              <svg width="24" height="19" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M7.7 0C3.4 0 0 3.5 0 7.8C0 14.5 4.8 19.8 11.2 21.6L12.4 17.8C7.6 16.5 4.5 13 4.5 9.4C5.4 9.9 6.5 10.2 7.7 10.2C11.5 10.2 14.4 7.5 14.4 3.9C14.4 1.4 12.1 0 7.7 0ZM21.3 0C17 0 13.6 3.5 13.6 7.8C13.6 14.5 18.4 19.8 24.8 21.6L26 17.8C21.2 16.5 18.1 13 18.1 9.4C19 9.9 20.1 10.2 21.3 10.2C25.1 10.2 28 7.5 28 3.9C28 1.4 25.7 0 21.3 0Z" fill="#C7B9F4"/>
              </svg>
              <p className="text-[#2D2D2D] text-[12.5px] sm:text-[13px] leading-[1.65] mb-6 font-normal">
                "Exceptional care from start to finish. The clinic environment is serene, and the staff treated me with so much gentleness and attention to detail."
              </p>
              <div className="flex items-center gap-3">
                <img src={getImage('home', 'testimonial-1', avatar1)} alt="Amara T." className="w-11 h-11 rounded-full object-cover p-[1.5px] border border-[#C7B9F4]" />
                <div className="flex flex-col">
                  <span className="text-black font-bold text-[13px]">Amara T.</span>
                  <span className="text-neutral-500 text-[11px]">Teeth Whitening</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sixth Section / Call to Action */}
        <section className="w-full bg-[#FAF8F3] py-20 px-6 flex flex-col items-center justify-center text-center shrink-0 border-t border-[#f0ebe1]">
          <span className="text-gray-900 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
            Your Journey Begins Here
          </span>
          <h2 className="font-serif text-[34px] sm:text-[38px] font-bold italic text-black leading-tight mb-3">
            Your Best Smile <br /> Is Waiting.
          </h2>
          <p className="text-gray-600 font-sans text-[12.5px] leading-relaxed mb-7 max-w-[280px]">
            Begin your journey toward a healthier, more confident smile.
          </p>
          <Link 
            to="/mobile/book-appointment" 
            className="bg-[#2D0A5C] text-white px-8 py-3.5 rounded-full text-[13px] font-semibold shadow-lg inline-flex items-center gap-2 hover:bg-[#210745] active:scale-95 transition-all"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileLanding;
