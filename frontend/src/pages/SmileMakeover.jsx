import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function SmileMakeover() {
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
              Smile <br />
              <span className="text-[#C4A47C]">Makeover</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-1 max-w-lg">
              Transform your smile with a personalized combination of advanced cosmetic dental treatments, designed to enhance your confidence and bring out your best smile.
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
                src={getImage('smile-makeover', 'hero-image', s)} 
                alt="Patient smiling in dental suite" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. A complete Transformation. A Confident You. Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            A complete Transformation. A Confident You.
          </h2>

          {/* Two-column descriptive text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              A smile makeover is a personalized approach to improving the appearance of your teeth and smile. From colour and shape to alignment and overall balance, every detail is carefully planned to create results that look naturally beautiful and uniquely yours.
            </p>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Our experienced dental team combines advanced techniques with artistic precision to help you achieve a smile that feels as good as it looks.
            </p>
          </div>

          {/* Secondary heading for roadmap */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-12">
            Your Journey to a Beautiful Smile.
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

      {/* 3. A Beautiful Smile Starts With Confidence & Benefits Section */}
      <section className="w-full bg-[#B79A72] py-20 md:py-28 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Tooth Image ab.png + Heading */}
          <div className="lg:col-span-6 relative flex items-center space-x-6 md:space-x-8">
            <div className="w-36 md:w-48 lg:w-56 shrink-0 opacity-40 select-none pointer-events-none">
              <img 
                src={getImage('smile-makeover', 'section-2-image', ab)} 
                alt="Tooth graphic" 
                className="w-full h-auto object-contain filter drop-shadow-sm" 
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2]">
              A Beautiful Smile <br />
              Starts With Confidence.
            </h2>
          </div>

          {/* Right Column: Smile Makeover Benefits List */}
          <div className="lg:col-span-6 lg:pl-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Smile Makeover Benefits
            </h3>
            <ul className="space-y-4">
              {makeoverBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3 text-white font-sans text-sm md:text-base leading-snug">
                  <span className="text-white text-base leading-none font-bold mt-0.5">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Banner Section: Image g.png */}
      <section className="w-full relative h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden flex items-center justify-center">
        <img 
          src={getImage('smile-makeover', 'footer-banner', ss)} 
          alt="Radiant Smile" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]" 
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-wide drop-shadow-md">
            Designed Around You. Crafted for Confidence.
          </h2>
        </div>
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
