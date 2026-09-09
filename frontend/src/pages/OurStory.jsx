import React from 'react';
import o1 from '../assets/o1.png';
import h5 from '../assets/h5.png';
import o2 from '../assets/o2.png';

export default function OurStory() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-10 lg:pr-20">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase">
              OUR STORY
            </p>
            <h1 className="text-[3rem] md:text-5xl lg:text-[4rem] font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
              Every Smile Has<br />
              a Story.<br />
              <span className="text-[#3b1866] italic font-normal">We're Here to<br />Make It Beautiful.</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-2 max-w-sm">
              At our clinic, dentistry is more than treatment. It is about understanding people, building confidence, and creating smiles that make a lasting difference.
            </p>
          </div>

          {/* Right Column - Large Image */}
          <div className="relative w-full flex justify-end">
            <div className="w-full max-w-[450px] lg:max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
              <img src={o1} alt="Our Story" className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Journey Text Card */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase mb-6">
              OUR JOURNEY
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-8">
              A Journey Built<br />Around Smiles
            </h2>
            <div className="space-y-6 font-sans text-sm text-gray-600 leading-[1.8]">
              <p>
                What started with a simple vision—to provide exceptional dental care with compassion and precision—has grown into a trusted destination for beautiful, healthy smiles.
              </p>
              <p>
                Over the years, we have combined modern dental technology, experienced professionals, and a patient-first approach to create an environment where every person feels comfortable, cared for, and confident. Our journey continues with one simple goal: <span className="font-bold text-gray-900">to make every dental experience better, more personal, and more rewarding.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative pt-6 md:pt-10 lg:pl-10">
            {/* Vertical Line */}
            <div className="absolute left-[1.15rem] lg:left-[3.65rem] top-8 bottom-8 w-px bg-[#E5E7EB]"></div>

            <div className="space-y-12 relative">
              
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  09
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2009</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Our Beginning</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    Founded with a vision to reimagine the dental experience — combining clinical precision with genuine human care.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#6D42A2] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  17
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2017</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Growing Together</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    Expanded our team and services, building a community of patients who trust us with their most visible confidence.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#52297A] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  18
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2018</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Modern Dentistry</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    Invested in advanced 3D imaging, digital smile design, and minimally invasive techniques.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#3b1866] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  24
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2024</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Smiles That Inspire</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    A decade and a half of transformations—each one a reminder of why we began.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* The Team Section */}
      <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase mb-6">
              THE PEOPLE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Behind Every Smile Is<br />
              a Team That Cares
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              From the first consultation to the final result, our team is committed to making every step of your dental journey comfortable and reassuring.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
            
            {/* Dr. James Bennett */}
            <div className="bg-[#FAF8F3] rounded-3xl overflow-hidden flex flex-col shadow-sm">
              <div className="w-full aspect-[4/3] bg-gray-200">
                <img src={h5} alt="Dr. James Bennett" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 pb-10 text-center">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">DR. James Bennett, DDS</h3>
                <p className="font-sans text-xs text-[#8B5CF6] font-medium">Principal Dentist & Smile Designer</p>
              </div>
            </div>

            {/* Amelia Carter */}
            <div className="bg-[#FAF8F3] rounded-3xl overflow-hidden flex flex-col shadow-sm">
              <div className="w-full aspect-[4/3] bg-gray-200">
                <img src={o2} alt="Amelia Carter" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 pb-10 text-center">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">Amelia Carter</h3>
                <p className="font-sans text-xs text-[#8B5CF6] font-medium">Senior Dental Nurse</p>
              </div>
            </div>

          </div>

          {/* Badges Row */}
          <div className="w-full flex flex-wrap justify-center gap-4">
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Experienced Dental Professionals</span>
            </div>
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Advanced Treatment Techniques</span>
            </div>
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Personalized Treatment Plans</span>
            </div>
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Patient-Centered Care</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
