import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import s from '../assets/s.png';
import ab from '../assets/ab.png';
import g from '../assets/g.png';

const roadmapSteps = [
  {
    number: '01',
    title: '3D Consultation & Scan'
  },
  {
    number: '02',
    title: 'Custom Fabrication'
  },
  {
    number: '03',
    title: 'Wear Trays Daily'
  },
  {
    number: '04',
    title: 'Reveal Straight Smile'
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

export default function MobileInvisibleAligners() {
  const { getImage } = useMedia();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF8F3] sm:bg-neutral-900 flex justify-center items-center">
      {/* Mobile viewport frame container */}
      <div 
        className="relative w-full sm:max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide flex flex-col bg-white"
      >
        <MobileNavbar bgWhite className="bg-white" />

        <div className="flex-grow flex flex-col w-full">
          {/* 1. Hero Section */}
          <section className="w-full bg-white pt-6 pb-10 px-5 flex flex-col">
            <p className="text-[11px] font-sans font-semibold text-gray-800 uppercase tracking-widest mb-2.5">
              OUR SERVICES
            </p>
            <h1 className="text-[32px] sm:text-[34px] font-serif font-bold text-gray-900 leading-[1.15] tracking-tight mb-3">
              Invisible <br />
              <span className="text-[#C4A47C]">Aligners</span>
            </h1>
            <p className="text-gray-600 font-sans text-xs sm:text-[13px] leading-relaxed mb-5">
              Straighten your teeth discreetly without metal braces. Experience a modern, comfortable, and removable orthodontic treatment tailored specifically to your lifestyle.
            </p>
            
            <div className="mb-6">
              <Link 
                to="/mobile/book-appointment"
                className="bg-[#3b1866] text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-[#2A114B] transition-colors inline-flex items-center space-x-2 shadow-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={getImage('invisible-aligners', 'hero-image', s)} 
                alt="Patient smiling with clear aligners" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>

          {/* 2. Overview & Roadmap Section */}
          <section className="w-full bg-[#FAF8F3] py-10 px-5 flex flex-col">
            <h2 className="text-[22px] sm:text-[24px] font-serif font-bold text-gray-900 mb-3 leading-snug">
              A Modern Way to Straighten Your Smile
            </h2>
            <p className="text-gray-600 font-sans text-xs leading-relaxed mb-3">
              Invisible aligners offer a subtle and convenient alternative to traditional metal braces. Custom-made from smooth, medical-grade plastic, these clear trays gently shift your teeth into place over time.
            </p>
            <p className="text-gray-600 font-sans text-xs leading-relaxed mb-8">
              Our dental team utilizes advanced 3D scanning to design custom aligners that fit comfortably and deliver predictable, efficient results.
            </p>

            <h3 className="text-lg font-serif font-bold text-gray-900 mb-5">
              Your Journey to Straight Teeth
            </h3>

            {/* 4-step roadmap */}
            <div className="grid grid-cols-2 gap-3.5">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 border border-[#E9E4DA] flex flex-col justify-between shadow-xs">
                  <span className="font-serif font-bold text-2xl text-[#C4A47C] mb-2 leading-none">
                    {step.number}
                  </span>
                  <h4 className="font-sans font-medium text-gray-900 text-xs leading-snug">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Clear Aligners & Benefits Section */}
          <section className="w-full bg-[#B79A72] py-10 px-5 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 shrink-0 opacity-70">
                  <img 
                    src={getImage('invisible-aligners', 'section-2-image', ab)} 
                    alt="Tooth graphic" 
                    className="w-full h-full object-contain filter drop-shadow-sm brightness-200" 
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  Clear Aligners. <br />
                  Seamless Results.
                </h2>
              </div>

              <h3 className="text-base font-serif font-semibold text-white/95 mb-4 border-b border-white/20 pb-2">
                Invisible Aligner Benefits
              </h3>
              
              <ul className="space-y-2.5">
                {alignerBenefits.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2.5 text-white/95 font-sans text-xs leading-snug">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="font-semibold text-white">{item.title}:</strong> {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Banner Section (Before / After) */}
          <section className="w-full relative h-[190px] sm:h-[210px] overflow-hidden flex items-center justify-center">
            <img 
              src={getImage('invisible-aligners', 'footer-banner', g)} 
              alt="Before and After Alignment Transformation" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-black/40" />
            
            <span className="absolute left-4 bottom-4 text-white font-serif italic text-sm font-bold tracking-wide drop-shadow-md z-10">
              Before
            </span>

            <div className="relative z-10 text-center px-4">
              <h2 className="text-white font-serif font-bold text-xl sm:text-2xl tracking-wide drop-shadow-md">
                Designed Around You. <br />Crafted for Confidence.
              </h2>
            </div>

            <span className="absolute right-4 bottom-4 text-white font-serif italic text-sm font-bold tracking-wide drop-shadow-md z-10">
              After
            </span>
          </section>

          {/* 5. Who Can Benefit & FAQ Section */}
          <section className="w-full bg-[#FAF8F3] py-10 px-5 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 text-center mb-6">
              Who Can Benefit From Clear Aligners?
            </h2>

            {/* 3 Candidate Cards */}
            <div className="flex flex-col gap-3 mb-10">
              {candidateCards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-4 shadow-xs border border-[#E9E4DA] flex flex-col justify-center"
                >
                  <h3 className="font-sans font-bold text-gray-900 text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-xs leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ Heading */}
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>

            {/* FAQ Accordion */}
            <div className="w-full space-y-2 border-t border-[#E6E1D6]">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="border-b border-[#E6E1D6]">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-3.5 flex items-center justify-between text-left transition-colors"
                    >
                      <span className="font-sans font-medium text-gray-900 text-xs sm:text-[13px] pr-3">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-gray-900' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-4 text-gray-600 font-sans text-xs leading-relaxed animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
}
