import React, { useState } from 'react';
import s1 from '../assets/s1.png';
import ab from '../assets/ab.png';
import g from '../assets/g.jpg';

const roadmapSteps = [
  {
    number: '01',
    title: 'Initial Examination'
  },
  {
    number: '02',
    title: 'Digital Assessment'
  },
  {
    number: '03',
    title: 'Professional Consultation'
  },
  {
    number: '04',
    title: 'Personalized Care Plan'
  }
];

const checkupBenefits = [
  'Detect problems early',
  'Prevent tooth decay and gum disease',
  'Maintain healthy gums',
  'Avoid costly urgent treatments',
  'Receive professional oral hygiene advice',
  'Keep your smile looking its best'
];

const audienceCards = [
  {
    title: 'Families & Kids',
    subtitle: 'Regular preventive checkups'
  },
  {
    title: 'Dental Concerns',
    subtitle: 'Pain, sensitivity or discomfort'
  },
  {
    title: 'Smile Maintenance',
    subtitle: 'Keeping your teeth and gums healthy'
  }
];

const faqItems = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'Most dentists recommend visiting every 6 months for a routine checkup and cleaning. However, depending on your oral health needs, your dentist may recommend more frequent visits.'
  },
  {
    question: 'Does a dental checkup hurt?',
    answer: 'No, a routine dental checkup is completely painless and non-invasive. Our team uses gentle, patient-centered techniques to ensure you stay fully comfortable throughout your visit.'
  },
  {
    question: 'How long does a consultation take?',
    answer: 'A comprehensive checkup and consultation typically takes between 30 to 45 minutes, giving us ample time to evaluate your teeth and discuss your personalized care plan.'
  },
  {
    question: 'Do I need an appointment?',
    answer: 'We recommend scheduling an appointment in advance to avoid waiting times and guarantee your preferred time slot with our dental specialists.'
  },
  {
    question: 'What happens if a dental issue is found?',
    answer: 'If any issues like cavities or gum concerns are identified, we will discuss them openly with you, show you digital scans or X-rays, and propose a transparent, step-by-step treatment plan.'
  }
];

export default function GeneralCheckup() {
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
              General Checkup &amp; <br />
              <span className="text-[#C4A47C]">Consultation</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-1 max-w-lg">
              Routine dental checkups are essential to detect issues early and maintain healthy teeth and gums. We provide complete dental care with a gentle, patient-focused approach.
            </p>
            <div className="pt-2">
              <button className="bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2A114B] transition-colors flex items-center space-x-3 shadow-sm w-fit">
                <span>Book Appointment</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Image s1.png */}
          <div className="relative w-full flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] lg:max-w-[520px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={s1} 
                alt="General Checkup & Consultation Dental Suite" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. A Complete Look at Your Oral Health Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            A complete Look at Your Oral Health
          </h2>

          {/* Two-column descriptive text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Routine checkups are the foundation of a healthy smile. Regular dental evaluations can prevent unexpected and severe issues ensuring optimal oral health, early detection and complete peace of mind.
            </p>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8]">
              Our comprehensive approach combines advanced digital diagnostics with personalized care. During your visit, our experienced dental team carefully assesses your teeth, gums, and bite to create a tailored treatment plan focusing on prevention.
            </p>
          </div>

          {/* Secondary heading for process steps */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-12">
            A complete Look at Your Oral Health
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

      {/* 3. Prevention & Check Up Benefits Section (Warm Tan/Caramel Background) */}
      <section className="w-full bg-[#B79A72] py-20 md:py-28 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Tooth Image ab.png + Heading */}
          <div className="lg:col-span-6 relative flex items-center space-x-6 md:space-x-8">
            <div className="w-36 md:w-48 lg:w-56 shrink-0 opacity-40 select-none pointer-events-none">
              <img 
                src={ab} 
                alt="Tooth Illustration" 
                className="w-full h-auto object-contain filter drop-shadow-sm" 
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2]">
              Prevention is <br />
              Always Better Than Treatment.
            </h2>
          </div>

          {/* Right Column: Check Up Benefits List */}
          <div className="lg:col-span-6 lg:pl-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              Check Up Benefits
            </h3>
            <ul className="space-y-4">
              {checkupBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3 text-white font-sans text-sm md:text-base leading-snug">
                  <span className="text-white text-base leading-none font-bold mt-0.5">✓</span>
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
          src={g} 
          alt="Happy Patient Smile" 
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]" 
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-white font-serif font-bold text-2xl sm:text-4xl lg:text-5xl tracking-wide drop-shadow-md">
            Small Checkups. Long-Lasting Smiles.
          </h2>
        </div>
      </section>

      {/* 5. Who Should Get a Dental Checkup? & FAQ Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
            Who Should Get a Dental Checkup?
          </h2>

          {/* 3 Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {audienceCards.map((card, index) => (
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
