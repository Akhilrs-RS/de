import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, ArrowRight, ArrowUpRight, ShieldCheck, Heart, Star, Stethoscope, Quote } from 'lucide-react';
import bgImage from '../assets/mobile_home_bg.jpg';
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
import mapImage from '../assets/map.png';

const MobileLanding = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex justify-center items-center">
      {/* Mobile viewport frame container */}
      <div className="relative w-full max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide bg-white flex flex-col">
        
        {/* First Page / Hero Section */}
        <div className="relative w-full min-h-screen sm:min-h-[890px] flex flex-col justify-between shrink-0">
          {/* Background Image - Exactly aligned with dental clinic, doctor, patient, and tray */}
          <img 
            src={bgImage} 
            alt="Manick Dental Clinic" 
            className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none" 
          />

          {/* Top Header */}
          <header className="relative z-20 flex items-center justify-between px-6 pt-9 pb-2 w-full">
            <img 
              src={logoImage} 
              alt="Manick Dental - Your smile matters" 
              className="w-[124px] sm:w-[130px] h-auto object-contain select-none" 
            />
            
            {/* Hamburger Menu Icon matching screenshot */}
            <button 
              type="button" 
              className="p-1 -mr-1 text-black flex flex-col justify-center items-center gap-[4.5px] cursor-pointer focus:outline-none"
              aria-label="Navigation Menu"
            >
              <span className="block w-[24px] h-[2.5px] bg-black rounded-full"></span>
              <span className="block w-[24px] h-[2.5px] bg-black rounded-full"></span>
              <span className="block w-[24px] h-[2.5px] bg-black rounded-full"></span>
            </button>
          </header>

          {/* Hero Title Section */}
          <div className="relative z-10 px-5 pt-8 sm:pt-10 pb-4 text-center">
            <h1 className="font-serif text-[41px] sm:text-[44px] font-normal leading-[1.12] tracking-tight select-none">
              <span className="block text-black">Where Every</span>
              <span className="text-black">Smile </span>
              <span className="text-[#2D0A5C]">Becomes</span>
              <span className="block text-[#2D0A5C]">a Masterpiece</span>
            </h1>
          </div>

          {/* Glassmorphism Card Section */}
          <div className="relative z-10 px-5 pb-8 sm:pb-10 w-full mt-auto">
            <div className="w-full bg-white/45 backdrop-blur-md border border-white/60 rounded-[1.75rem] px-5 py-7 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <p className="text-[15.5px] font-normal leading-[1.45] text-black mb-6 px-1 tracking-tight">
                Experience Modern dentistry where advanced Technology meets exceptional, deeply human care.
              </p>

              <div className="flex flex-col gap-3 w-full">
                {/* Primary Button */}
                <button 
                  type="button"
                  className="w-full h-[52px] bg-white text-black border-[1.5px] border-black rounded-full flex items-center justify-center gap-2.5 px-6 shadow-sm hover:bg-neutral-50 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="text-[16.5px] font-normal tracking-tight">Book Appointment</span>
                  <svg 
                    className="w-[19px] h-[19px] text-black stroke-[1.8]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                {/* Secondary Button */}
                <button 
                  type="button"
                  className="w-full h-[52px] bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black border border-black/80 rounded-full flex items-center justify-center px-6 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="text-[16.5px] font-normal tracking-tight">Explore Our Care</span>
                </button>
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
            
            {/* Foreground Title */}
            <div className="relative z-10 w-full flex flex-col pt-8">
              <h2 className="font-serif text-[34px] italic font-semibold text-black leading-tight ml-4">
                Beautiful
              </h2>
              <h2 className="font-serif text-[28px] italic text-[#A48650] leading-tight text-center mt-1">
                with extraordinary care.
              </h2>
            </div>
          </div>

          {/* Image Section */}
          <div className="px-5 w-full relative z-10 -mt-2">
            <img 
              src={h1Image} 
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
                <strong className="font-semibold text-black">Manick Dental Clinic</strong> was founded with a simple mission: provide honest, gentle, and affordable dental care to the families of Kuzhuvanthitai and the surrounding community.
              </p>

              <div className="mt-2 flex flex-col">
                <span className="font-serif text-[15px] italic text-[#A48650] font-semibold">More Than Dentistry,</span>
                <span className="font-serif text-[15px] italic text-[#A48650] font-semibold">A New Way To Feel Confident.</span>
              </div>

              <div className="mt-4">
                <button 
                  type="button" 
                  className="bg-[#2D0A5C] text-white rounded-full px-5 py-2.5 flex items-center justify-between w-[150px] shadow-sm hover:bg-[#3f1082] active:scale-95 transition-all cursor-pointer"
                >
                  <span className="text-[14px] font-medium tracking-wide">Learn More</span>
                  <ArrowRight className="w-[18px] h-[18px] text-white stroke-[2]" />
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Third Page / Signature Treatments */}
        <div className="w-full min-h-screen sm:min-h-[890px] bg-[#FAF8F3] flex flex-col shrink-0 px-5 py-12 relative overflow-hidden">
          
          {/* Header */}
          <div className="w-full flex items-start justify-between gap-2 mb-3">
            <span className="text-[#A48650] text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap pt-0.5">
              Signature Treatments
            </span>
            <p className="text-[#A48650] text-[8px] sm:text-[9px] font-medium text-right leading-tight max-w-[130px]">
              Four disciplines, one philosophy — each treatment is a study in precision and aesthetic harmony.
            </p>
          </div>

          <h2 className="font-serif text-[32px] sm:text-[34px] font-bold text-black leading-tight mb-8">
            The Art of Transformation
          </h2>

          {/* Cards List */}
          <div className="flex flex-col gap-6 w-full pb-8">
            
            {/* Card 01 */}
            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden group">
              <img src={haImage} alt="General Checkup" className="absolute inset-0 w-full h-full object-cover" />
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
                <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white/70 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden group">
              <img src={h2Image} alt="Cosmetic Dentistry" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">02</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    Cosmetic<br/>Dentistry
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    A bespoke, full-arch artistic transformation crafted to your facial harmony
                  </p>
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white/70 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden group">
              <img src={h4Image} alt="Orthodontics" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">03</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    Advanced<br/>Orthodontics
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    A bespoke, full-arch artistic transformation crafted to your facial harmony
                  </p>
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white/70 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden group">
              <img src={h3Image} alt="Dental Implants" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
              
              <div className="absolute top-5 left-5">
                <span className="font-serif text-[60px] font-bold text-white leading-none drop-shadow-md">04</span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[24px] font-bold text-white leading-tight drop-shadow-md">
                    Dental<br/>Implants
                  </h3>
                  <p className="text-white/90 text-[11px] leading-relaxed max-w-[200px]">
                    A bespoke, full-arch artistic transformation crafted to your facial harmony
                  </p>
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-white/70 flex items-center justify-center backdrop-blur-sm shrink-0 mb-1">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
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
        <section className="relative w-full bg-[#7E6399] min-h-[380px] sm:min-h-[420px] py-14 px-2 flex flex-col items-center justify-center text-center shrink-0 overflow-hidden select-none">
          {/* Floating Faces with Zoom In & Zoom Out Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 1. Far Left - Laughing man (h6.png) */}
            <motion.div
              className="absolute top-[52%] left-[2%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              <img 
                src={h6Image} 
                alt="Patient Story 1" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* 2. Upper Left - Child in yellow shirt (h7.png) */}
            <motion.div
              className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-34 sm:h-34 rounded-full overflow-hidden"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <img 
                src={h7Image} 
                alt="Patient Story 2" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* 3. Center Left / Lower - Blonde woman (h8.png) */}
            <motion.div
              className="absolute top-[78%] left-[36%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-34 sm:h-34 rounded-full overflow-hidden"
              animate={{ scale: [1, 1.14, 1] }}
              transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            >
              <img 
                src={h8Image} 
                alt="Patient Story 3" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* 4. Center Right / Upper - Woman smiling & pointing (h9.png) */}
            <motion.div
              className="absolute top-[18%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-38 sm:h-38 rounded-full overflow-hidden"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <img 
                src={h9Image} 
                alt="Patient Story 4" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* 5. Lower Right - Man pointing to smile (h10.png) */}
            <motion.div
              className="absolute top-[76%] left-[74%] -translate-x-1/2 -translate-y-1/2 w-26 h-26 sm:w-32 sm:h-32 rounded-full overflow-hidden"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            >
              <img 
                src={h10Image} 
                alt="Patient Story 5" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* 6. Far Right - Man looking right (h11.png) */}
            <motion.div
              className="absolute top-[46%] left-[96%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-34 sm:h-34 rounded-full overflow-hidden"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
            >
              <img 
                src={h11Image} 
                alt="Patient Story 6" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center w-full px-2 pointer-events-none">
            <span className="text-white/80 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
              PATIENT STORIES
            </span>
            <h2 className="font-serif text-[19px] sm:text-[22px] font-bold text-white leading-[1.28] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] max-w-[360px]">
              <span className="block whitespace-nowrap">“From the first consultation to my</span>
              <span className="block">final smile,</span>
              <span className="block text-[#F6D4A5] italic font-normal">every detail felt exceptional.”</span>
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
                <img src={avatar3} alt="Sophie M." className="w-11 h-11 rounded-full object-cover p-[1.5px] border border-[#C7B9F4]" />
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
                <img src={avatar2} alt="Daniel K." className="w-11 h-11 rounded-full object-cover p-[1.5px] border border-[#C7B9F4]" />
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
                <img src={avatar1} alt="Amara T." className="w-11 h-11 rounded-full object-cover p-[1.5px] border border-[#C7B9F4]" />
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
            to="/book-appointment" 
            className="bg-[#2D0A5C] text-white px-8 py-3.5 rounded-full text-[13px] font-semibold shadow-lg inline-flex items-center gap-2 hover:bg-[#210745] active:scale-95 transition-all"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Seventh Section / Mobile Footer */}
        <footer className="w-full bg-[#391361] text-white py-14 px-6 flex flex-col shrink-0 relative overflow-hidden">
          <div className="relative z-10 flex flex-col space-y-10">
            {/* Logo & Tagline */}
            <div>
              <div className="bg-white px-4 py-3 rounded-2xl inline-block mb-4">
                <img 
                  src={logoImage} 
                  alt="Manick Dental" 
                  className="w-[140px] h-auto object-contain" 
                />
              </div>
              <p className="text-white/90 text-[11px] leading-relaxed max-w-[280px]">
                An atelier of dental artistry — where clinical precision meets editorial grace.
              </p>
            </div>

            {/* Clinic Hours */}
            <div>
              <div className="flex items-center gap-2 text-[#C4A47C] mb-4 font-medium text-[13px]">
                <Clock className="w-[18px] h-[18px]" />
                <span>Clinic Hours</span>
              </div>
              <p className="text-white text-[13px] mb-3">Monday - Saturday</p>
              <p className="text-white text-[13px]">9:30 AM - 12:30 . 4:30-7:30PM</p>
            </div>

            {/* Explore Links */}
            <div>
              <h4 className="text-[#C4A47C] font-normal text-[15px] uppercase tracking-wider mb-5">Explore</h4>
              <div className="flex flex-col space-y-4 text-[13px] text-white font-light">
                <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-white/80 transition-colors">About</Link>
                <Link to="/services" className="hover:text-white/80 transition-colors">Treatment</Link>
                <Link to="/our-doctors" className="hover:text-white/80 transition-colors">Our Doctors</Link>
                <Link to="/smile-gallery" className="hover:text-white/80 transition-colors">Smile Gallery</Link>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-[#C4A47C] font-normal text-[15px] uppercase tracking-wider mb-5">Contact</h4>
              <div className="flex flex-col space-y-5 text-[13px] text-white font-light">
                <div className="flex items-start gap-4 hover:text-white/80 transition-colors">
                  <MapPin className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Melpuram Road, Kazhuvanthitai,<br />
                    Kaluvanthittai, Tamil Nadu 629168
                  </span>
                </div>
                
                <a 
                  href="tel:+917358834773" 
                  className="flex items-center gap-4 hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C4A47C] shrink-0" />
                  <span>+917358834773</span>
                </a>

                <a 
                  href="mailto:manickdental@gmail.com" 
                  className="flex items-center gap-4 hover:text-white/80 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#C4A47C] shrink-0" />
                  <span>manickdental@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="pt-2">
              <img 
                src={mapImage} 
                alt="Manick Dental Clinic Map Location" 
                className="w-full h-[140px] object-cover"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MobileLanding;
