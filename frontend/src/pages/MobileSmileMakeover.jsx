import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import s from '../assets/s.png';
import ab from '../assets/ab.png';
import ss from '../assets/ss.png';

const roadmapSteps = [
  {
    number: '01',
    title: 'Smile Assessment'
  },
  {
    number: '02',
    title: 'Digital Smile Planning'
  },
  {
    number: '03',
    title: 'Personalized Treatment'
  },
  {
    number: '04',
    title: 'Your New Smile'
  }
];

const makeoverBenefits = [
  'Enhances the appearance of your smile',
  'Improves tooth shape and symmetry',
  'Corrects discoloration and imperfections',
  'Creates a balanced, natural-looking smile',
  'Boosts confidence in every moment'
];

const candidateCards = [
  {
    title: 'Discolored Teeth',
    subtitle: 'Restore a brighter and more radiant smile.'
  },
  {
    title: 'Uneven or Damaged Teeth',
    subtitle: 'Improve shape, symmetry and overall appearance.'
  },
  {
    title: 'Gaps & Alignment Concerns',
    subtitle: 'Create a more balanced and harmonious smile'
  }
];

const faqItems = [
  {
    question: 'What is included in a smile makeover?',
    answer: 'A smile makeover combines treatments tailored to your unique goals. It may include teeth whitening, composite bonding, porcelain veneers, tooth contouring, or orthodontic alignment to create a harmonious smile.'
  },
  {
    question: 'How long does a smile makeover take?',
    answer: 'The treatment duration depends on your personalized plan. Treatments like whitening and bonding can be completed in 1–2 visits, while custom porcelain veneers or aligners may take a few weeks to several months.'
  },
  {
    question: 'Is a smile makeover painful?',
    answer: 'Most procedures involved in a smile makeover are minimally invasive and virtually painless. We utilize gentle techniques and modern anesthetics to ensure complete comfort throughout your care.'
  },
  {
    question: 'Will my new smile look natural?',
    answer: 'Yes. Every treatment is designed with an emphasis on facial harmony, natural translucency, and proportion, ensuring your new smile looks radiant, authentic, and uniquely yours.'
  },
  {
    question: 'How long do smile makeover results last?',
    answer: 'With good daily oral hygiene and regular dental checkups, results from treatments like porcelain veneers and crowns can last 10 to 15 years or longer, while whitening can be maintained with periodic touch-ups.'
  }
];

export default function MobileSmileMakeover() {
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
        className="relative w-full sm:max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide flex flex-col bg-[#FAF8F3]"
      >
        <MobileNavbar />

        <div className="flex-grow flex flex-col w-full">
          {/* 1. Hero Section */}
          <section className="w-full bg-white pt-6 pb-10 px-5 flex flex-col">
            <p className="text-[11px] font-sans font-semibold text-gray-800 uppercase tracking-widest mb-2.5">
              OUR SERVICES
            </p>
            <h1 className="text-[32px] sm:text-[34px] font-serif font-bold text-gray-900 leading-[1.15] tracking-tight mb-3">
              Smile <br />
              <span className="text-[#C4A47C]">Makeover</span>
            </h1>
            <p className="text-gray-600 font-sans text-xs sm:text-[13px] leading-relaxed mb-5">
              Transform your smile with a personalized combination of advanced cosmetic dental treatments, designed to enhance your confidence and bring out your best smile.
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
                src={getImage('smile-makeover', 'hero-image', s)} 
                alt="Patient smiling in dental suite" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>

          {/* 2. Overview & Roadmap Section */}
          <section className="w-full bg-[#FAF8F3] py-10 px-5 flex flex-col">
            <h2 className="text-[22px] sm:text-[24px] font-serif font-bold text-gray-900 mb-3 leading-snug">
              A Complete Transformation. <br />A Confident You.
            </h2>
            <p className="text-gray-600 font-sans text-xs leading-relaxed mb-3">
              A smile makeover is a personalized approach to improving the appearance of your teeth and smile. From colour and shape to alignment and overall balance, every detail is carefully planned.
            </p>
            <p className="text-gray-600 font-sans text-xs leading-relaxed mb-8">
              Our experienced dental team combines advanced techniques with artistic precision to help you achieve a smile that feels as good as it looks.
            </p>

            <h3 className="text-lg font-serif font-bold text-gray-900 mb-5">
              Your Journey to a Beautiful Smile
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

          {/* 3. A Beautiful Smile Starts With Confidence Section */}
          <section className="w-full bg-[#B79A72] py-10 px-5 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 shrink-0 opacity-70">
                  <img 
                    src={getImage('smile-makeover', 'section-2-image', ab)} 
                    alt="Tooth graphic" 
                    className="w-full h-full object-contain filter drop-shadow-sm brightness-200" 
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  A Beautiful Smile <br />
                  Starts With Confidence.
                </h2>
              </div>

              <h3 className="text-base font-serif font-semibold text-white/95 mb-4 border-b border-white/20 pb-2">
                Smile Makeover Benefits
              </h3>
              
              <ul className="space-y-2.5">
                {makeoverBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2.5 text-white/95 font-sans text-xs leading-snug">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Banner Section */}
          <section className="w-full relative h-[180px] sm:h-[200px] overflow-hidden flex items-center justify-center">
            <img 
              src={getImage('smile-makeover', 'footer-banner', ss)} 
              alt="Radiant Smile" 
              className="absolute inset-0 w-full h-full object-cover object-[center_35%]" 
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 text-center px-4">
              <h2 className="text-white font-serif font-bold text-xl sm:text-2xl tracking-wide drop-shadow-md">
                Designed Around You. <br />Crafted for Confidence.
              </h2>
            </div>
          </section>

          {/* 5. Who Can Benefit From a Smile Makeover? & FAQ Section */}
          <section className="w-full bg-[#FAF8F3] py-10 px-5 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 text-center mb-6">
              Who Can Benefit From a Smile Makeover?
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
