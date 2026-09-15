import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import s from '../assets/s.png';
import ab from '../assets/ab.png';
import g from '../assets/g.png';

const roadmapSteps = [
  {
    number: '01',
    title: 'Initial Aesthetic Assessment'
  },
  {
    number: '02',
    title: 'Digital Smile Design & Mockup'
  },
  {
    number: '03',
    title: 'Tailored Cosmetic Treatment'
  },
  {
    number: '04',
    title: 'Reveal Your New Smile'
  }
];

const cosmeticBenefits = [
  'Brighten discoloured teeth and refine tooth shapes',
  'Custom treatment plans tailored to your face structure',
  'Modern techniques designed for maximum comfort',
  'Durable materials for a permanent boost in confidence',
  'Improve overall alignment and bite harmony alongside beauty'
];

const candidateCards = [
  {
    title: 'Stained or Discolored Teeth',
    subtitle: 'Restore bright, youthful, and vibrant white shades.'
  },
  {
    title: 'Chipped, Cracked, or Worn Teeth',
    subtitle: 'Smooth out surface imperfections for seamless symmetry.'
  },
  {
    title: 'Gaps & Uneven Shapes',
    subtitle: 'Harmonize your entire smile with custom-contoured solutions.'
  }
];

const faqItems = [
  {
    question: 'What treatments fall under cosmetic dentistry?',
    answer: 'Cosmetic dentistry includes a range of aesthetic treatments such as professional teeth whitening, porcelain veneers, cosmetic bonding, gum contouring, and tooth reshaping designed to enhance the natural beauty of your smile.'
  },
  {
    question: 'How long do cosmetic dental treatments take?',
    answer: 'Treatment time depends on your personalized plan. Treatments like in-office whitening and dental bonding can be finished in just one appointment, while porcelain veneers or restorations typically require two visits over one to two weeks.'
  },
  {
    question: 'Is cosmetic dentistry covered by insurance?',
    answer: 'Most purely cosmetic dental procedures are elective and may not be covered by standard insurance. However, treatments that combine aesthetic and restorative benefits (such as crowns or repairing chipped teeth) may receive partial coverage.'
  },
  {
    question: 'How do I maintain my cosmetic results?',
    answer: 'You can keep your smile radiant with regular daily brushing, flossing, avoiding excessive consumption of staining agents like coffee or tobacco, and visiting our clinic every 6 months for professional cleanings.'
  },
  {
    question: 'Are cosmetic dental procedures painful?',
    answer: 'No, most procedures are minimally invasive and virtually painless. We utilize gentle techniques and local anesthetics whenever necessary to guarantee a comfortable, stress-free experience.'
  }
];

export default function CosmeticDentistry() {
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
              Cosmetic <br />
              <span className="text-[#C4A47C]">Dentistry</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-1 max-w-lg">
              Transform your teeth with advanced cosmetic dental treatments tailored to your unique features. Experience world-class care that combines artistry and technology for a flawless smile.
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

          {/* Right Column - Image s1.png */}
          <div className="relative w-full flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] lg:max-w-[520px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={getImage('cosmetic-dentistry', 'hero-image', s)} 
                alt="Cosmetic Dentistry Studio" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Artfully Crafted Dental Aesthetics Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            Artfully Crafted Dental Aesthetics.
          </h2>

          {/* Two-column descriptive text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Cosmetic dentistry goes beyond oral health to enhance the natural beauty of your smile. From subtle adjustments to complete transformations, our personalized treatments correct discolouration, gaps, and chips while preserving your natural tooth structure.
            </p>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Our expert cosmetic dentists utilize state-of-the-art digital imaging to design a custom treatment plan that complements your facial symmetry.
            </p>
          </div>

          {/* Secondary heading for roadmap */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-12">
            Your Path to a Stunner Smile.
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

      {/* 3. Aesthetic Precision. Radiant Results. & Benefits Section */}
      <section className="w-full bg-[#B79A72] py-20 md:py-28 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Tooth Image ab.png + Heading */}
          <div className="lg:col-span-6 relative flex items-center space-x-6 md:space-x-8">
            <div className="w-36 md:w-48 lg:w-56 shrink-0 opacity-40 select-none pointer-events-none">
              <img 
                src={getImage('cosmetic-dentistry', 'section-2-image', ab)} 
                alt="Tooth graphic"
                className="w-full h-auto object-contain filter drop-shadow-sm" 
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2]">
              Aesthetic Precision. <br />
              Radiant Results.
            </h2>
          </div>

          {/* Right Column: Cosmetic Dentistry Benefits List */}
          <div className="lg:col-span-6 lg:pl-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Cosmetic Dentistry Benefits
            </h3>
            <ul className="space-y-4 font-sans text-sm md:text-base leading-snug">
              {cosmeticBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3 text-white">
                  <span className="text-white text-base leading-none font-bold mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Banner Section: Image g.jpg */}
      <section className="w-full relative h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden flex items-center justify-center">
        <img 
          src={getImage('cosmetic-dentistry', 'footer-banner', g)} 
          alt="Radiant Smile" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]" 
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-wide drop-shadow-md">
            Designed for Elegance. Crafted for Perfection
          </h2>
        </div>
      </section>

      {/* 5. who should get cosmetic dentistry? & FAQ Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
            who should get cosmetic dentistry?
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
