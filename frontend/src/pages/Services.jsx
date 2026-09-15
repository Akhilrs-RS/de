import React from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';
import s7 from '../assets/s7.png';
import s8 from '../assets/s8.png';
import s9 from '../assets/s9.png';
import s10 from '../assets/s10.png';
import s11 from '../assets/s11.png';
import s12 from '../assets/s12.png';
import s13 from '../assets/s13.png';
import s14 from '../assets/s14.png';

const servicesData = [
  {
    key: "s2",
    image: s2,
    title: "General Checkup & Consultation",
    description: "A thorough oral examination is the foundation of good dental health. Our dentist will assess your teeth, gums, and overall oral condition, identify any concerns early, and create a personalised care plan.",
    features: ["Full oral examination", "X-rays if required", "Gum health assessment", "Personalized treatment plan"],
    disclaimer: "Checkup findings are specific to each patient. Results may vary."
  },
  {
    key: "s3",
    image: s3,
    title: "Scaling & Cleaning",
    description: "Professional scaling and polishing removes hardened plaque (tartar) and surface stains that regular brushing cannot eliminate. Regular cleaning helps prevent gum disease, bad breath, and cavities.",
    features: ["Removal of tartar and plaque", "Polishing for a clean, smooth surface", "Gum health evaluation", "Home-care guidance"],
    disclaimer: "Results depend on individual oral hygiene and dental condition."
  },
  {
    key: "s4",
    image: s4,
    title: "Tooth Filling (Restoration)",
    description: "Cavities are treated with modern, tooth-coloured composite fillings that blend naturally with your tooth. We remove the decayed portion and restore the tooth to its proper shape and function.",
    features: ["Composite (tooth-coloured) fillings", "Restoration of tooth function", "Removal of decay", "Minimally invasive technique"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s5",
    image: s5,
    title: "Root Canal Treatment",
    description: "When decay or infection reaches the nerve of the tooth, root canal treatment can save the tooth and relieve pain. Modern techniques and anaesthesia make the procedure far more comfortable than many patients expect.",
    features: ["Removal of infected pulp", "Sealed with biocompatible material", "Thorough canal cleaning", "Crown placement if needed"],
    disclaimer: "Root canal treatment outcomes vary by case. Your dentist will evaluate and advise accordingly."
  },
  {
    key: "s6",
    image: s6,
    title: "Tooth Extraction",
    description: "When a tooth cannot be saved by other means, extraction is performed gently and precisely. We ensure your comfort throughout with appropriate anaesthesia and provide post-extraction care instructions.",
    features: ["Simple and surgical extractions", "Post-extraction care guidance", "Local anesthesia for comfort", "Replacement options discussed if needed"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s7",
    image: s7,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with cosmetic dental treatments tailored to your aesthetic goals. Whether it's whitening, reshaping, or other cosmetic procedures, we help you achieve a smile you feel confident about.",
    features: ["Smile assessment and planning", "Personalised cosmetic treatment planning", "Cosmetic bonding and contouring", "Minimally invasive technique"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s8",
    image: s8,
    title: "Teeth Whitening",
    description: "Brighten your smile with safe and effective professional teeth whitening treatments designed to remove stains and restore a naturally radiant appearance.",
    features: ["Smile assessment and shade analysis", "Post-treatment care guidance", "Professional whitening treatment", "Stain and discoloration removal"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s9",
    image: s9,
    title: "Dental Implants",
    description: "Restore missing teeth with durable and natural-looking dental implants designed to improve your smile, comfort, and overall oral function.",
    features: ["Comprehensive dental evaluation", "High-quality implant restoration", "Personalized implant planning", "Post-treatment care support"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s10",
    image: s10,
    title: "Crowns & Bridges",
    description: "Restore damaged or missing teeth with custom-made crowns and bridges that blend seamlessly with your natural smile, providing both strength and aesthetic appeal.",
    features: ["Custom-shade matching", "Durable materials (ceramic)", "Protection for weakened teeth", "Gap replacement for missing teeth"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s11",
    image: s11,
    title: "Mouth Guards",
    description: "Custom-fitted mouth guards to protect your teeth from grinding (bruxism) while sleeping, and specialized sports guards to prevent injuries during physical activities.",
    features: ["Custom fit for comfort", "Protection against teeth grinding", "Sports injury prevention", "Durable and safe materials"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s12",
    image: s12,
    title: "Tooth Reshaping",
    description: "Minor adjustments to the shape, length, or surface of your teeth to create a more balanced and even smile. A quick and painless way to improve dental aesthetics.",
    features: ["Smoothing uneven edges", "Adjusting tooth length", "Improving overall symmetry", "Quick, painless procedure"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s13",
    image: s13,
    title: "Veneers & Crowns",
    description: "Transform your smile with ultra-thin porcelain veneers and high-quality crowns designed to cover imperfections, improve colour, and restore the shape of your teeth.",
    features: ["Smile makeover planning", "High-aesthetic porcelain", "Correction of chipped teeth", "Long-lasting results"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  },
  {
    key: "s14",
    image: s14,
    title: "X-Ray",
    description: "Advanced digital X-rays provide detailed, high-resolution images of your teeth and jaw bone, allowing for accurate diagnosis and precise treatment planning with minimal radiation.",
    features: ["Digital high-res imaging", "Minimal radiation exposure", "Detection of hidden decay", "Accurate treatment planning"],
    disclaimer: "Information provided is general. Your dentist will advise on the best option for your situation."
  }
];

export default function Services() {
  const { getImage } = useMedia();

  return (
    <div className="w-full bg-white">
      
      {/* Hero Section */}
      <section className="w-full bg-white pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-10 lg:pr-20">
            <p className="text-sm font-sans font-medium text-gray-900 uppercase tracking-widest">
              OUR SERVICES
            </p>
            <h1 className="text-[3.5rem] md:text-6xl lg:text-[4.5rem] font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
              Comprehensive <br />
              <span className="text-[#C4A47C]">Dental Care</span>
            </h1>
            <p className="text-gray-600 font-sans text-base md:text-lg leading-[1.8] pt-2 max-w-md">
              From routine checkups to advanced treatments — we provide complete dental care with a gentle, patient-focused approach.
            </p>
          </div>

          {/* Right Column - Large Image */}
          <div className="relative w-full flex justify-end">
            <div className="w-full max-w-[500px] lg:max-w-[550px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={getImage('services', 's1', s1)} 
                alt="Comprehensive Dental Care" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-sm border border-[#E6E1D6]">
              {/* Image */}
              <div className="w-full aspect-[4/3] bg-gray-100 relative">
                <img 
                  src={getImage('services', service.key, service.image)} 
                  alt={service.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-[15px] leading-[1.8] text-gray-600 mb-8 min-h-[80px]">
                  {service.description}
                </p>
                
                <h4 className="font-sans font-semibold text-gray-900 mb-5">
                  What's Included
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="text-[#9E7CFF] shrink-0 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-sans text-[13px] text-gray-600 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-l-2 border-gray-200 pl-4 py-1 mb-10">
                  <p className="font-serif italic text-gray-500 text-[13px] leading-relaxed">
                    {service.disclaimer}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <Link 
                    to="/book-appointment"
                    className="w-full border border-[#3b1866] text-[#3b1866] hover:bg-[#3b1866] hover:text-white transition-colors rounded-xl py-3.5 text-sm font-medium flex justify-center items-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 flex flex-col items-center text-center">
        <p className="text-sm font-sans font-medium text-gray-900 uppercase tracking-widest mb-6">
          YOUR JOURNEY BEGINS HERE
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold text-gray-900 leading-tight mb-8">
          Your Best Smile <br />
          <span className="italic">Is Waiting.</span>
        </h2>
        <p className="text-gray-600 font-sans text-lg mb-10">
          Begin your journey toward a healthier, more confident smile.
        </p>
        <Link 
          to="/book-appointment"
          className="bg-[#3b1866] text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#2A114B] transition-colors flex items-center space-x-3"
        >
          <span>Book Appointment</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>
      
    </div>
  );
}
