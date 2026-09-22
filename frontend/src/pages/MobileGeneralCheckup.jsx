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

export default function MobileGeneralCheckup() {
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
              General Checkup &amp; <br />
              <span className="text-[#C4A47C]">Consultation</span>
            </h1>
            <p className="text-gray-600 font-sans text-xs sm:text-[13px] leading-relaxed mb-5">
              Routine dental checkups are essential to detect issues early and maintain healthy teeth and gums. We provide complete dental care with a gentle, patient-focused approach.
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
                src={getImage('general-checkup', 'hero-image', s)} 
                alt="Patient smiling in dental suite" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>

          {/* 2. Overview & Roadmap Section */}
          <section className="w-full bg-[#FAF8F3] py-10 px-5 flex flex-col">
            <h2 className="text-[22px] sm:text-[24px] font-serif font-bold text-gray-900 mb-3 leading-snug">
              A Complete Look at Your Oral Health
            </h2>
            <p className="text-gray-600 font-sans text-xs leading-relaxed mb-3">
              Routine checkups are the foundation of a healthy smile. Regular dental evaluations can prevent unexpected and severe issues ensuring optimal oral health, early detection and complete peace of mind.
            </p>
            <p className="text-gray-600 font-sans text-xs leading-relaxed mb-8">
              Our comprehensive approach combines advanced digital diagnostics with personalized care. During your visit, our experienced dental team carefully assesses your teeth, gums, and bite.
            </p>

            <h3 className="text-lg font-serif font-bold text-gray-900 mb-5">
              Your Journey to Optimal Health
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

          {/* 3. Prevention & Check Up Benefits Section */}
          <section className="w-full bg-[#B79A72] py-10 px-5 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 shrink-0 opacity-70">
                  <img 
                    src={getImage('general-checkup', 'section-2-image', ab)} 
                    alt="Tooth graphic" 
                    className="w-full h-full object-contain filter drop-shadow-sm brightness-200" 
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  Prevention is <br />
                  Always Better Than Treatment.
                </h2>
              </div>

              <h3 className="text-base font-serif font-semibold text-white/95 mb-4 border-b border-white/20 pb-2">
                Check Up Benefits
              </h3>
              
              <ul className="space-y-2.5">
                {checkupBenefits.map((benefit, index) => (
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
              src={getImage('general-checkup', 'footer-banner', g)} 
              alt="Healthy Smile" 
              className="absolute inset-0 w-full h-full object-cover object-[center_35%]" 
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 text-center px-4">
              <h2 className="text-white font-serif font-bold text-xl sm:text-2xl tracking-wide drop-shadow-md">
                Small Checkups. <br />Long-Lasting Smiles.
              </h2>
            </div>
          </section>

          {/* 5. Who Should Get a Dental Checkup? & FAQ Section */}
          <section className="w-full bg-[#FAF8F3] py-10 px-5 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 text-center mb-6">
              Who Should Get a Dental Checkup?
            </h2>

            {/* 3 Audience Cards */}
            <div className="flex flex-col gap-3 mb-10">
              {audienceCards.map((card, index) => (
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
