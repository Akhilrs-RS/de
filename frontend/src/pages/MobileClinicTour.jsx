import React, { useEffect } from 'react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import ch from '../assets/ch.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';

const MobileClinicTour = () => {
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
              Clinic Tour
            </h4>
            <h1 
              className="font-serif font-bold tracking-tight text-[#111111]"
              style={{ fontSize: '36px', lineHeight: '1.1' }}
            >
              See Our <span style={{ color: '#9E7648' }}>Clinic</span>
            </h1>
            <p className="text-[13px] leading-relaxed text-[#4A4A4A] mt-4 max-w-[340px]">
              Take a virtual tour of our clinic. We maintain a clean, safe, and welcoming environment for every patient visit.
            </p>
          </section>

          {/* Hero Image */}
          <div className="px-6 mb-12">
            <div className="w-full rounded-[28px] overflow-hidden shadow-sm aspect-[4/5] bg-gray-100">
              <img 
                src={getImage('clinic-tour', 'hero', ch)} 
                alt="Clinic Tour Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section 1: Reception & Waiting Area */}
          <section className="px-6 mb-10">
            <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-1.5">
              Reception & Waiting Area
            </h2>
            <p className="text-[13px] text-[#4A4A4A] mb-5">
              A welcoming space designed for your comfort.
            </p>
            <div className="space-y-4">
              <div className="w-full rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                <img 
                  src={getImage('clinic-tour', 'c1', c1)} 
                  alt="Reception and waiting area view 1" 
                  className="w-full h-[210px] object-cover"
                />
              </div>
              <div className="w-full rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                <img 
                  src={getImage('clinic-tour', 'c2', c2)} 
                  alt="Reception and waiting area view 2" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Treatment Room */}
          <section className="px-6 mb-10">
            <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-1.5">
              Treatment Room
            </h2>
            <p className="text-[13px] text-[#4A4A4A] mb-5">
              Clean, modern, and fully equipped dental treatment room.
            </p>
            <div className="space-y-4">
              <div className="w-full rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                <img 
                  src={getImage('clinic-tour', 'c3', c3)} 
                  alt="Treatment room view 1" 
                  className="w-full h-[260px] object-cover"
                />
              </div>
              <div className="w-full rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                <img 
                  src={getImage('clinic-tour', 'c4', c4)} 
                  alt="Treatment room view 2" 
                  className="w-full h-[210px] object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Sterilization & Hygiene */}
          <section className="px-6 mb-14">
            <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-1.5">
              Sterilization & Hygiene
            </h2>
            <p className="text-[13px] text-[#4A4A4A] mb-5">
              Our strict hygiene and sterilization protocols for your safety.
            </p>
            <div className="space-y-4">
              <div className="w-full rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                <img 
                  src={getImage('clinic-tour', 'c5', c5)} 
                  alt="Sterilization and hygiene view 1" 
                  className="w-full h-[210px] object-cover"
                />
              </div>
              <div className="w-full rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                <img 
                  src={getImage('clinic-tour', 'c6', c6)} 
                  alt="Sterilization and hygiene view 2" 
                  className="w-full h-[210px] object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileClinicTour;
