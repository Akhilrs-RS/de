import React from 'react';
import { useMedia } from '../context/MediaContext';
import ch from '../assets/ch.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';

export default function ClinicTour() {
  const { getImage } = useMedia();

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-10 lg:pr-20">
            <p className="text-sm font-sans font-medium text-gray-500 uppercase tracking-widest">
              Clinic Tour
            </p>
            <h1 className="text-[3.5rem] md:text-5xl lg:text-[4.5rem] font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
              See Our <span className="text-[#C4A47C]">Clinic</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-2 max-w-sm">
              Take a virtual tour of our clinic. We maintain a clean, safe, and welcoming environment for every patient visit.
            </p>
          </div>

          {/* Right Column - Large Image */}
          <div className="relative w-full flex justify-end">
            <div className="w-full max-w-[450px] lg:max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
              <img 
                src={getImage('clinic-tour', 'hero', ch)} 
                alt="Clinic Tour" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col space-y-24 md:space-y-32">
          
          {/* Block 1: Reception & Waiting Area */}
          <div>
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Reception & Waiting Area</h2>
              <p className="font-sans text-sm text-gray-900 font-medium">A welcoming space designed for your comfort.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Left Image (Landscape) */}
              <div className="md:col-span-6 w-full rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={getImage('clinic-tour', 'c1', c1)} 
                  alt="Waiting Area" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              {/* Right Image (Portrait) */}
              <div className="md:col-span-6 w-full rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={getImage('clinic-tour', 'c2', c2)} 
                  alt="Reception" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Block 2: Treatment Room */}
          <div>
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Treatment Room</h2>
              <p className="font-sans text-sm text-gray-900 font-medium">Clean, modern, and fully equipped dental treatment room.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[600px]">
              {/* Left Image (Square/Portrait) */}
              <div className="md:col-span-6 w-full h-full rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={getImage('clinic-tour', 'c3', c3)} 
                  alt="Treatment Room" 
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* Right Images (Two stacked landscape) */}
              <div className="md:col-span-6 flex flex-col gap-6 md:gap-8 h-full">
                <div className="w-full flex-1 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={getImage('clinic-tour', 'c4', c4)} 
                    alt="Treatment Room View 2" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="w-full flex-1 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={getImage('clinic-tour', 'c5', c5)} 
                    alt="Treatment Room View 3" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Sterilization & Hygiene */}
          <div>
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Sterilization & Hygiene</h2>
              <p className="font-sans text-sm text-gray-900 font-medium">Our strict hygiene and sterilization protocols for your safety.</p>
            </div>
            
            <div className="w-full md:w-2/3 lg:w-1/2 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={getImage('clinic-tour', 'c6', c6)} 
                alt="Sterilization Room" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
