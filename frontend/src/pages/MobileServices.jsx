import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
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
    features: ["Full oral examination", "Gum health assessment", "X-rays if required", "Personalized treatment plan"],
    disclaimer: "Checkup findings are specific to each patient. Results may vary."
  },
  {
    key: "s3",
    image: s3,
    title: "Scaling & Cleaning",
    description: "Professional scaling and polishing removes hardened plaque (tartar) and surface stains that regular brushing cannot eliminate. Regular cleaning helps prevent gum disease, bad breath, and cavities.",
    features: ["Removal of tartar and plaque", "Gum health evaluation", "Polishing for a clean, smooth surface", "Home-care guidance"],
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

const MobileServices = () => {
  const { getImage } = useMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F3EFE9] sm:bg-neutral-900 flex justify-center items-center">
      <div 
        className="relative w-full sm:max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide flex flex-col"
        style={{ backgroundColor: '#F3EFE9' }}
      >
        <MobileNavbar />

        <div className="flex-grow flex flex-col w-full">
          {/* Header Section */}
          <section className="px-6 pt-3 pb-6">
            <h4 
              className="text-[11px] font-semibold uppercase mb-3"
              style={{ letterSpacing: '0.2em', color: '#222222' }}
            >
              OUR SERVICES
            </h4>
            <h1 
              className="font-serif font-bold tracking-tight text-[#111111]"
              style={{ fontSize: '36px', lineHeight: '1.1' }}
            >
              Comprehensive
            </h1>
            <div 
              className="font-serif font-bold mt-0.5"
              style={{ fontSize: '36px', lineHeight: '1.1', color: '#9E7648' }}
            >
              Dental Care
            </div>
            <p className="text-[13px] leading-relaxed text-[#4A4A4A] mt-4 max-w-[340px]">
              From routine checkups to advanced treatments — we provide complete dental care with a gentle, patient-focused approach.
            </p>
          </section>

          {/* Hero Image */}
          <div className="px-6 mb-8">
            <div className="w-full rounded-[28px] overflow-hidden shadow-sm aspect-[4/5] bg-gray-100">
              <img 
                src={getImage('services', 's1', getImage('services', 'hero', s1))} 
                alt="Manick Dental Clinic Services Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Services Stack */}
          <section className="px-6 flex flex-col space-y-8 pb-14">
            {servicesData.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[28px] overflow-hidden shadow-sm flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-[220px] bg-gray-100 overflow-hidden">
                  <img 
                    src={getImage('services', service.key, service.image)} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h2 className="font-serif font-bold text-[22px] text-[#111111] leading-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-[12.5px] text-[#555555] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <h3 className="font-semibold text-[14px] text-[#111111] mb-3.5">
                    What's Included
                  </h3>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-3 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span className="text-[11px] text-[#444444] leading-snug font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] italic text-[#777777] border-l-2 border-gray-200 pl-3 py-0.5 mb-6">
                    {service.disclaimer}
                  </p>

                  <Link 
                    to="/mobile/book-appointment"
                    className="w-full py-3 rounded-full border border-[#391361] text-[#391361] text-[13px] font-semibold flex items-center justify-center hover:bg-[#391361] hover:text-white transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileServices;
