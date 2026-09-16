import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import s from '../assets/s.png';
import ab from '../assets/ab.png';
import g from '../assets/g.png';

const roadmapSteps = [
  {
    number: '01',
    title: '3D Digital Consultation & Scan'
  },
  {
    number: '02',
    title: 'Custom Aligner Fabrication'
  },
  {
    number: '03',
    title: 'Wear Your Trays Daily'
  },
  {
    number: '04',
    title: 'Reveal Your Straight Smile'
  }
];

const alignerBenefits = [
  {
    title: 'Nearly Invisible',
    desc: 'Straighten teeth discreetly without notice'
  },
  {
    title: 'Removable',
    desc: 'Eat, drink, brush, and floss with ease'
  },
  {
    title: 'Maximum Comfort',
    desc: 'Smooth edges with no sharp metal wires'
  },
  {
    title: 'Fewer Visits',
    desc: 'Requires fewer in-office checkups'
  },
  {
    title: 'Predictable Results',
    desc: 'See your projected outcome before starting'
  }
];

const candidateCards = [
  {
    title: 'Crowded & Overlapped Teeth',
    subtitle: 'Easily straighten overlapping teeth for better hygiene and aesthetics.'
  },
  {
    title: 'Gaps & Spacing Issues',
    subtitle: 'Close unwanted spaces smoothly and evenly.'
  },
  {
    title: 'Bite Misalignments',
    subtitle: 'Correct mild-to-moderate overbites, underbites, and crossbites.'
  }
];

const faqItems = [
  {
    question: 'How do invisible aligners work?',
    answer: 'Invisible aligners use a sequence of custom-molded, clear medical-grade trays that apply gentle, targeted pressure to gradually shift your teeth into their ideal alignment.'
  },
  {
    question: 'How many hours a day do I need to wear them?',
    answer: 'Aligners must be worn for 20 to 22 hours per day to achieve optimal results. They should only be removed when eating, drinking hot or sugary beverages, and brushing or flossing.'
  },
  {
    question: 'Are clear aligners painful to wear?',
    answer: 'Most patients feel mild pressure or tightness for the first day or two after switching to a new tray, which indicates your teeth are safely shifting into place. There are no sharp metal wires or brackets.'
  },
  {
    question: 'How long does invisible aligner treatment take?',
    answer: 'Treatment length depends on case complexity, typically ranging between 6 to 18 months. During your 3D digital consultation, you will receive a precise timeline projected for your smile.'
  },
  {
    question: 'How do I clean and maintain my aligners?',
    answer: 'Rinse your aligners with lukewarm water whenever removed, gently brush them with a soft toothbrush, and use specialized cleaning crystals or tablets. Avoid hot water, which can warp the clear plastic.'
  }
];

export default function InvisibleAligners() {
  const { getImage } = useMedia();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full bg-white pt-10 pb-20 md:pt-16 md:pb-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-6 lg:pr-12">
            <p className="text-xs md:text-sm font-sans font-medium text-gray-900 uppercase tracking-widest">
              OUR SERVICES
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-serif font-bold text-gray-900 leading-[1.12] tracking-tight">
              INVISIBLE <br />
              <span className="text-[#C4A47C]">ALIGNERS</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-1 max-w-lg">
              Straighten your teeth discreetly without metal braces. Experience a modern, comfortable, and removable orthodontic treatment tailored specifically to your lifestyle.
            </p>
            <div className="pt-2">
              <Link 
                to="/book-appointment"
                className="bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2A114B] transition-colors flex items-center space-x-3 shadow-sm w-fit"
              >
                <span>Book Appointment</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Image s.png */}
          <div className="relative w-full flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] lg:max-w-[520px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={getImage('invisible-aligners', 'hero-image', s)} 
                alt="Patient smiling in dental suite" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. A Modern Way to Straighten Your Smile Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            A Modern Way to Straighten Your Smile.
          </h2>

          {/* Two-column descriptive text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Invisible aligners offer a subtle and convenient alternative to traditional metal braces. Custom-made from smooth, medical-grade plastic, these clear trays gently shift your teeth into place over time—giving you a perfect smile without compromising your everyday look.
            </p>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Our dental team utilizes advanced 3D scanning to design custom aligners that fit comfortably and deliver predictable, efficient results.
            </p>
          </div>

          {/* Secondary heading for roadmap */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-12">
            Your Journey to Straight Teeth.
          </h3>

          {/* 4-step process roadmap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="flex flex-col relative">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="font-serif font-bold text-3xl md:text-4xl text-[#C4A47C]">
                    {step.number}
                  </span>
                  {/* Divider line between steps for lg screens */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-[1px] bg-[#D8D1C3]" />
                  )}
                </div>
                <h4 className="font-sans font-medium text-gray-900 text-sm md:text-base">
                  {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clear Aligners. Seamless Results. & Benefits Section */}
      <section className="w-full bg-[#B79A72] py-20 md:py-28 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Tooth Image ab.png + Heading */}
          <div className="lg:col-span-6 relative flex items-center space-x-6 md:space-x-8">
            <div className="w-36 md:w-48 lg:w-56 shrink-0 opacity-40 select-none pointer-events-none">
              <img 
                src={getImage('invisible-aligners', 'section-2-image', ab)} 
                alt="Tooth graphic" 
                className="w-full h-auto object-contain filter drop-shadow-sm" 
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2]">
              Clear Aligners. <br />
              Seamless Results.
            </h2>
          </div>

          {/* Right Column: Invisible Aligner Benefits List */}
          <div className="lg:col-span-6 lg:pl-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Invisible Aligner Benefits
            </h3>
            <ul className="space-y-4 font-sans text-sm md:text-base leading-snug">
              {alignerBenefits.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-white">
                  <span className="text-white text-base leading-none font-bold mt-1">•</span>
                  <span>
                    <strong className="font-semibold">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Banner Section: Image g.png (Before / After) */}
      <section className="w-full relative h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden flex items-center justify-center">
        <img 
          src={getImage('invisible-aligners', 'footer-banner', g)} 
          alt="Before and After Alignment Transformation" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Left Before label */}
        <span className="absolute left-8 md:left-16 bottom-6 md:bottom-12 text-white font-serif italic text-lg md:text-2xl font-bold tracking-wide drop-shadow-md z-10">
          Before
        </span>

        {/* Center title */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-wide drop-shadow-md">
            Designed Around You. Crafted for Confidence.
          </h2>
        </div>

        {/* Right After label */}
        <span className="absolute right-8 md:right-16 bottom-6 md:bottom-12 text-white font-serif italic text-lg md:text-2xl font-bold tracking-wide drop-shadow-md z-10">
          After
        </span>
      </section>

      {/* 5. Who Can Benefit From a Smile Makeover? & FAQ Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
            Who Can Benefit From a Smile Makeover?
          </h2>

          {/* 3 Candidate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {candidateCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E4DA] flex flex-col justify-center"
              >
                <h3 className="font-sans font-bold text-gray-900 text-base mb-1">
                  {card.title}
                </h3>
                <p className="font-sans text-gray-500 text-xs md:text-sm leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="w-full space-y-2 border-t border-[#E6E1D6]">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#E6E1D6]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 flex items-center justify-between text-left transition-colors group"
                  >
                    <span className="font-sans font-medium text-gray-900 text-base group-hover:text-[#C4A47C] transition-colors pr-4">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gray-900' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="pb-6 text-gray-600 font-sans text-sm md:text-base leading-relaxed animate-fadeIn">
                      {item.answer}
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
}
