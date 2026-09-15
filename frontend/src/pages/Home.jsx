import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMedia } from '../context/MediaContext';

// Image assets
import homeImage from '../assets/home.png';
import h1Image from '../assets/h1.png';
import h2Image from '../assets/h2.png';
import h3Image from '../assets/h3.png';
import h4Image from '../assets/h4.png';
import haImage from '../assets/ha.png';
import h5Image from '../assets/h5.png';
import h6Image from '../assets/h6.png';
import h7Image from '../assets/h7.png';
import h8Image from '../assets/h8.png';
import h9Image from '../assets/h9.png';
import h10Image from '../assets/h10.png';
import h11Image from '../assets/h11.png';

const AnimatedWord = ({ word, delayIndex }) => {
  const firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  return (
    <motion.span 
      className="inline-flex overflow-hidden mr-3 md:mr-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.3, delayChildren: delayIndex * 0.6 } },
        hidden: {}
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
      >
        {firstLetter}
      </motion.span>
      <motion.span
        variants={{
          hidden: { opacity: 0, width: 0 },
          visible: { opacity: 1, width: "auto", transition: { duration: 0.5, ease: "easeOut" } }
        }}
        className="overflow-hidden"
      >
        {restOfWord}
      </motion.span>
    </motion.span>
  );
};

export default function Home() {
  const { getImage } = useMedia();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <main className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div 
            className="w-full md:w-[85%] h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${getImage('home', 'hero', homeImage)})` }}
          />
        </div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-x-0 bottom-0 h-32 z-0 bg-gradient-to-t from-white/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-3xl pt-10 pb-20">
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-gray-900 leading-[1.05] mb-8">
            Where Every <br />
            Smile <span className="text-[#3b1866]">Becomes a</span> <br />
            <span className="text-[#3b1866]">Masterpiece</span>
          </h1>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            Experience Modern density where advanced Technology meets exceptional, deeply human care.
          </p>
          
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/book-appointment" className="flex items-center space-x-3 border-2 border-gray-900 bg-white text-gray-900 px-8 py-3.5 rounded-[2rem] font-medium hover:bg-gray-50 transition-all shadow-sm">
              <span className="text-base">Book Appointment</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/services" className="border-2 border-gray-300 bg-white/20 backdrop-blur-sm text-gray-900 px-8 py-3.5 rounded-[2rem] font-medium hover:bg-white/40 hover:border-gray-400 transition-all inline-block text-center">
              Explore Our Care
            </Link>
          </div>
        </div>
      </main>

      {/* Second Section: About / Care */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 relative overflow-hidden flex flex-col items-center">
        
        {/* Top Header Area */}
        <div className="relative w-full py-16 mb-16 flex flex-col items-center justify-center">
          
          {/* Faint Background Text */}
          <div className="absolute inset-0 w-full flex flex-col items-center justify-center pointer-events-none select-none z-0 opacity-40">
            <div className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-serif text-[#E6E1D6] leading-[0.85] tracking-[0.2em] md:tracking-[0.3em]">SMILE</div>
            <div className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-serif text-[#E6E1D6] leading-[0.9] tracking-[0.2em] md:tracking-[0.4em] my-4">CONFIDENCE</div>
            <div className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-serif text-[#E6E1D6] leading-[0.85] tracking-[0.2em] md:tracking-[0.3em]">CARE</div>
          </div>

          {/* Foreground Title */}
          <div className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center justify-center mt-6">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold italic text-gray-900 mb-2 flex flex-wrap justify-center leading-tight">
              <AnimatedWord word="Beautiful" delayIndex={0} />
              <AnimatedWord word="smiles" delayIndex={1} />
              <AnimatedWord word="begin" delayIndex={2} />
            </h2>
            <div className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-bold italic text-[#C4A47C] leading-tight">with extraordinary care.</div>
          </div>

        </div>

        {/* Two-Column Content */}
        <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="col-span-1 md:col-span-5">
            <img src={getImage('home', 'section-2-image', h1Image)} alt="Dental treatment" className="w-full h-auto aspect-square object-cover rounded-3xl" />
          </div>

          {/* Card */}
          <div className="col-span-1 md:col-span-7 bg-white rounded-3xl p-10 md:p-14 shadow-sm w-full relative z-20">
            <div className="text-xs font-semibold text-gray-900 mb-6 font-sans">About</div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-[1.2] mb-6">
              Caring for Your Smile <br /> Since Day One
            </h2>
            <p className="text-gray-600 text-sm leading-[1.8] mb-8 font-sans">
              Manick Dental Clinic was founded with a simple mission: provide honest, gentle, and affordable dental care to the families of Kazhuvanthitai and the surrounding community.
            </p>
            
            <div className="mb-10 font-serif leading-tight">
              <span className="font-bold text-gray-900 text-[1.1rem] block mb-1">More Than Dentistry.</span>
              <span className="font-bold text-[#C4A47C] italic text-[1.1rem] block">A New Way To Feel Confident.</span>
            </div>

            <Link to="/about" className="bg-[#3b1866] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-[#2A114B] transition-colors inline-flex items-center space-x-2 w-max cursor-pointer">
              <span>Learn More</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Section 3: Signature Treatments */}
      <section className="w-full bg-[#FAF8F3] py-24 relative overflow-hidden">
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Left Header */}
            <div>
              <div className="text-[#C4A47C] font-sans text-xl mb-4 font-medium">Signature Treatments</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                The Art of Transformation
              </h2>
            </div>
            
            {/* Right Header */}
            <div className="md:max-w-md text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto">
              <p className="text-[#C4A47C] font-sans text-lg md:text-xl leading-[1.6] mb-8 font-light">
                Four disciplines, one philosophy — <br className="hidden md:block" />
                each treatment is a study in precision <br className="hidden md:block" />
                and aesthetic harmony.
              </p>
              <button className="text-gray-900 font-sans font-medium text-lg hover:text-[#C4A47C] transition-colors">
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full pl-6 md:pl-12 lg:pl-24">
          <div 
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pr-6 md:pr-12 lg:pr-24"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Card 1 */}
            <div className="relative flex-none w-[85vw] md:w-[480px] lg:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden snap-start group bg-gray-200">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url(${getImage('home', 'about', haImage)})` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="text-white font-serif text-[4rem] leading-none font-bold">01</div>
                <div className="flex items-end justify-between">
                  <div className="pr-6 flex-1">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">General Checkup &<br/>Consultation</h3>
                    <p className="text-white/90 font-sans text-base leading-relaxed font-light">A bespoke, full-arch artistic<br/>transformation crafted to your<br/>facial harmony</p>
                  </div>
                  <Link 
                    to="/general-checkup" 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black hover:bg-gray-50 transition-colors shrink-0"
                    aria-label="View General Checkup & Consultation"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex-none w-[85vw] md:w-[480px] lg:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden snap-start group bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${getImage('home', 'treatment-1', h2Image)})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="text-white font-serif text-[4rem] leading-none font-bold">02</div>
                <div className="flex items-end justify-between">
                  <div className="pr-6 flex-1">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">Smile Makeover</h3>
                    <p className="text-white/90 font-sans text-base leading-relaxed font-light">A bespoke, full-arch artistic<br/>transformation crafted to your<br/>facial harmony</p>
                  </div>
                  <Link 
                    to="/smile-makeover" 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black hover:bg-gray-50 transition-colors shrink-0"
                    aria-label="View Smile Makeover"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex-none w-[85vw] md:w-[480px] lg:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden snap-start group bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${getImage('home', 'treatment-2', h3Image)})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="text-white font-serif text-[4rem] leading-none font-bold">03</div>
                <div className="flex items-end justify-between">
                  <div className="pr-6 flex-1">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">Invisible Aligners</h3>
                    <p className="text-white/90 font-sans text-base leading-relaxed font-light">Invisible Aligners<br/>Discreet, precision-engineered<br/>alignment with zero compromise to<br/>lifestyle</p>
                  </div>
                  <Link 
                    to="/invisible-aligners" 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black hover:bg-gray-50 transition-colors shrink-0"
                    aria-label="View Invisible Aligners"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative flex-none w-[85vw] md:w-[480px] lg:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden snap-start group bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${getImage('home', 'treatment-3', h4Image)})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="text-white font-serif text-[4rem] leading-none font-bold">04</div>
                <div className="flex items-end justify-between">
                  <div className="pr-6 flex-1">
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">Cosmetic Dentistry</h3>
                    <p className="text-white/90 font-sans text-base leading-relaxed font-light">Micro-refinements — veneers,<br/>whitening, contouring — for<br/>luminous detail.</p>
                  </div>
                  <Link 
                    to="/cosmetic-dentistry" 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-[3px] border-black flex items-center justify-center text-black hover:bg-gray-50 transition-colors shrink-0"
                    aria-label="View Cosmetic Dentistry"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>

          {/* Navigation Controls (Bottom Right) Removed as requested */}
        </div>
      </section>

      {/* Section 4: Meet The Artist Behind Your Smile */}
      <section className="w-full bg-[#FAF8F3] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-md mx-auto">
              <img 
                src={getImage('home', 'doctor', h5Image)} 
                alt="Dr. Elena Marchetti" 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Floating Badge */}
            <Link 
              to="/our-story"
              className="absolute -bottom-6 -right-6 md:right-0 lg:-right-10 bg-[#242424] text-white w-32 h-32 rounded-full flex flex-col items-center justify-center p-4 shadow-xl border-4 border-[#FAF8F3] hover:bg-black hover:scale-105 transition-all cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C4A47C] mb-2">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] uppercase tracking-widest text-center font-sans">Discover OUR<br/>TEAM</span>
            </Link>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Meet The Artist <br /> Behind Your Smile.
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-sans font-semibold mb-1">Lead Dentist</p>
                <p className="text-xl font-serif font-bold text-gray-900">Dr. Elena Marchetti</p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-sans font-semibold mb-1">Specialization</p>
                <p className="text-lg font-sans text-gray-900">Cosmetic & Restorative Dentistry</p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-sans font-semibold mb-1">Experience</p>
                <p className="text-lg font-sans text-gray-900">20+ years refining the art of the smile</p>
              </div>
            </div>

            <p className="text-gray-600 font-sans leading-[1.8] text-sm md:text-base max-w-md pt-4">
              Dr. Marchetti approaches each patient as a canvas — blending clinical mastery with an editorial eye for facial harmony, light, and proportion.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Patients Choose Us */}
      <section className="w-full bg-[#FAF8F3] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Why Patients Choose Us
            </h2>
            <p className="text-[#C4A47C] font-sans text-lg md:text-xl max-w-sm leading-relaxed text-left md:text-right">
              We combine gentle dentistry with modern standards to give you the best care experience.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#F5F2EA] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#A67CFF] mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22S4 18 4 10V5L12 2L20 5V10C20 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Strict Hygiene Standards</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Sterilized instruments, single-use materials, and a clean, safe environment every visit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F2EA] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#FF7E8D] mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Gentle, Patient Care</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                We treat every patient with patience and compassion — especially those with dental anxiety.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F2EA] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#FFB054] mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Transparent Pricing</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                No hidden charges. Clear costs explained before any treatment begins.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F5F2EA] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#54A0FF] mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-3">Modern Equipment</h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                Up-to-date dental technology for accurate diagnosis and comfortable treatment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Patient Stories */}
      <section className="w-full bg-[#8A63A5] py-32 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Floating Faces */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.img 
            src={getImage('home', 'patient-story-1', h6Image)} alt="Patient" 
            className="absolute top-[15%] left-[5%] w-24 h-24 md:w-48 md:h-48 object-cover rounded-full opacity-60"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          />
          <motion.img 
            src={getImage('home', 'patient-story-2', h7Image)} alt="Patient" 
            className="absolute top-[10%] left-[25%] w-20 h-20 md:w-40 md:h-40 object-cover rounded-full opacity-50"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.img 
            src={getImage('home', 'patient-story-3', h8Image)} alt="Patient" 
            className="absolute bottom-[10%] left-[30%] w-24 h-24 md:w-44 md:h-44 object-cover rounded-full opacity-70"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.img 
            src={getImage('home', 'patient-story-4', h9Image)} alt="Patient" 
            className="absolute top-[5%] right-[30%] w-20 h-20 md:w-44 md:h-44 object-cover rounded-full opacity-60"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.img 
            src={getImage('home', 'patient-story-5', h10Image)} alt="Patient" 
            className="absolute bottom-[10%] right-[15%] w-24 h-24 md:w-56 md:h-56 object-cover rounded-full opacity-60"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.img 
            src={getImage('home', 'patient-story-6', h11Image)} alt="Patient" 
            className="absolute top-[20%] right-[2%] w-28 h-28 md:w-48 md:h-48 object-cover rounded-full opacity-70"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="text-white font-sans text-sm md:text-base mb-8">
            Patient Stories
          </div>
          <h2 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-serif font-bold text-white leading-[1.2]">
            “From the first consultation to my <br/>
            final smile,<br/>
            <span className="text-[#C4A47C] italic">every detail felt exceptional.”</span>
          </h2>
        </div>
      </section>

      {/* Section 7: Your Journey Begins Here */}
      <section className="w-full bg-[#FAF8F3] py-32 flex flex-col items-center justify-center text-center px-6">
        <p className="text-gray-900 font-sans text-sm font-medium mb-6">Your Journey Begins Here</p>
        
        <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold italic text-gray-900 leading-tight mb-6">
          Your Best Smile <br /> Is Waiting.
        </h2>
        
        <p className="text-gray-600 font-sans text-base md:text-lg mb-10">
          Begin your journey toward a healthier, more confident smile.
        </p>

        <Link to="/book-appointment" className="bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2A114B] transition-colors shadow-lg flex items-center space-x-3">
          <span>Book Appointment</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>
    </div>
  );
}
