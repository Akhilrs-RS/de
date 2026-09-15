import React from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import abImage from '../assets/ab.png';
import a1Image from '../assets/a1.png';
import h5Image from '../assets/h5.png';
import h12Image from '../assets/h12.png';

export default function About() {
  const { getImage } = useMedia();

  return (
    <div className="w-full">
      {/* Section 1: About Us */}
      <section className="w-full bg-white pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-10 lg:pr-20">
            <p className="text-sm font-sans font-medium text-gray-900 uppercase tracking-widest">
              ABOUT US
            </p>
            <h1 className="text-[3.5rem] md:text-6xl lg:text-[4.5rem] font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
              We are Here for <br />
              More Than Just <br />
              <span className="text-[#C4A47C] italic">a Beautiful Smile</span>
            </h1>
            <p className="text-gray-600 font-sans text-base md:text-lg leading-[1.8] pt-2">
              Manick Dental Clinic was founded with a simple mission: provide honest, gentle, and affordable dental care to the families of Kazhuvanthitai and the surrounding community.
            </p>
          </div>

          {/* Right Column - Large Arch Image */}
          <div className="relative w-full flex justify-end">
            <div className="w-full max-w-[500px] lg:max-w-[550px] aspect-[4/5] rounded-t-full overflow-hidden bg-gray-100 shadow-sm">
              <img src={getImage('about', 'hero-main', a1Image)} alt="About Us" className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <div className="relative w-full flex justify-center md:justify-start order-2 md:order-1">
            <div className="w-full max-w-[500px] aspect-square">
              <img src={getImage('about', 'hero-secondary', abImage)} alt="Tooth and Pearls" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8 order-1 md:order-2 md:pl-8 lg:pl-12">
            <p className="text-sm font-sans font-medium text-[#C4A47C] tracking-widest uppercase">
              OUR STORY
            </p>
            <h2 className="text-[2.75rem] md:text-5xl lg:text-[4rem] font-serif font-bold text-gray-900 leading-[1.1] max-w-xl tracking-tight">
              Build On Trust, Focused <br /> on You
            </h2>
            <div className="space-y-8 text-gray-700 font-sans text-lg md:text-xl leading-[1.6] max-w-lg font-light pt-2">
              <p>
                Dentalmed was founded with a simple vision to make high-quality dental care accessible, comfortable, and personalized for everyone.
              </p>
              <p>
                From day one, our goal has been to create a space where patients feel heard, cared for, and confident in their smiles.
              </p>
            </div>
            <div className="pt-6">
              <Link 
                to="/book-appointment"
                className="bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-[#2A114B] transition-colors flex items-center space-x-3 w-fit"
              >
                <span>Book Appointment</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 3: Our Mission & Values */}
      <section className="w-full bg-[#C4A47C] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <p className="text-xs font-sans font-bold text-white/80 tracking-widest uppercase">
              Our Mission & Values
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-white leading-[1.1]">
              Guided by Purpose, <br />
              Driven by Care.
            </h2>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col space-y-12">
            <div className="space-y-6 text-white/90 font-sans text-sm md:text-base leading-[1.8]">
              <p>
                At Manick Dental Clinic, we believe that good oral health is foundational to overall well-being. Our mission is to make quality dental care accessible, comfortable, and trustworthy for every patient who walks through our doors.
              </p>
              <p>
                We are a family-focused clinic rooted in the Kazhuvanthitai community. We take the time to listen to your concerns, explain your options clearly, and provide treatments that genuinely meet your needs — no upselling, no unnecessary procedures.
              </p>
            </div>
            
            {/* Grid of Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 shrink-0 rounded-full border-2 border-white flex items-center justify-center text-white mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-sans text-sm font-medium leading-snug">Honest diagnosis and treatment recommendations</span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 shrink-0 rounded-full border-2 border-white flex items-center justify-center text-white mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-sans text-sm font-medium leading-snug">Comfortable, anxiety-free environment</span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 shrink-0 rounded-full border-2 border-white flex items-center justify-center text-white mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-sans text-sm font-medium leading-snug">Affordable care without hidden fees</span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 shrink-0 rounded-full border-2 border-white flex items-center justify-center text-white mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-sans text-sm font-medium leading-snug">Modern equipment and sterile techniques</span>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* Section 4: Our Core Values, Stats & Our Team */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Core Values Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-[#C4A47C] font-sans text-sm md:text-base max-w-xs md:text-right">
              These principles guide every aspect of how we treat our patients and run our clinic.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="border border-[#E6E1D6] rounded-[2rem] p-8 flex flex-col items-center text-center bg-white/30 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#9E7CFF] mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-base mb-3">Patient First Care</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Every decision is made with the patients comfort, safety, and well-being in mind.
              </p>
            </div>

            <div className="border border-[#E6E1D6] rounded-[2rem] p-8 flex flex-col items-center text-center bg-white/30 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#9E7CFF] mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-base mb-3">Clinical Excellence</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Staying current with evidence-based dental practices and modern techniques.
              </p>
            </div>

            <div className="border border-[#E6E1D6] rounded-[2rem] p-8 flex flex-col items-center text-center bg-white/30 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#9E7CFF] mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H11C8.79086 15 7 16.7909 7 19V21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-base mb-3">Family Focused</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Serving patients of all ages — from children to seniors — with gentle, tailored care.
              </p>
            </div>

            <div className="border border-[#E6E1D6] rounded-[2rem] p-8 flex flex-col items-center text-center bg-white/30 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#9E7CFF] mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22S4 18 4 10V5L12 2L20 5V10C20 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-base mb-3">Honest & Transparent</h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Clear explanations, honest recommendations, and no unnecessary treatments.
              </p>
            </div>

          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-16 border-b border-[#E6E1D6]">
            
            <div className="flex flex-col items-center justify-center border-r border-gray-300">
              <div className="text-[2.5rem] md:text-5xl font-serif font-bold text-[#3b1866] mb-3">10 <span className="text-[#C4A47C]">+</span></div>
              <div className="text-[10px] md:text-xs font-serif text-gray-900 uppercase tracking-widest text-center px-2">Years of Excellence</div>
            </div>

            <div className="flex flex-col items-center justify-center md:border-r border-gray-300">
              <div className="text-[2.5rem] md:text-5xl font-serif font-bold text-[#3b1866] mb-3">15 <span className="text-[#C4A47C]">+</span></div>
              <div className="text-[10px] md:text-xs font-serif text-gray-900 uppercase tracking-widest text-center px-2">Happy Smiles</div>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-gray-300">
              <div className="text-[2.5rem] md:text-5xl font-serif font-bold text-[#3b1866] mb-3">30 <span className="text-[#C4A47C]">+</span></div>
              <div className="text-[10px] md:text-xs font-serif text-gray-900 uppercase tracking-widest text-center px-2">Dental Specialists</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-[2.5rem] md:text-5xl font-serif font-bold text-[#3b1866] mb-3">98%</div>
              <div className="text-[10px] md:text-xs font-serif text-gray-900 uppercase tracking-widest text-center px-2">Patient Satisfaction</div>
            </div>

          </div>

          {/* Our Team Section */}
          <div className="mt-24 md:mt-32">
            <div className="text-center mb-16">
              <p className="text-xs font-sans font-bold text-[#C4A47C] tracking-widest uppercase mb-4">OUR TEAM</p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-gray-900 leading-tight">
                The Experts Behind Your Smile
              </h2>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {/* Doctor 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-200">
                  <img src={getImage('about', 'team-james', h5Image)} alt="Dr. James Bennett, DDS" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-[#3b1866] text-xl mb-1">DR. James Bennett, DDS</h3>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Lead Dental Surgeon</p>
              </div>

              {/* Doctor 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-200">
                  <img src={getImage('about', 'team-amelia', h12Image)} alt="Amelia Carter" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-[#3b1866] text-xl mb-1">Amelia Carter</h3>
                <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Senior Dental Nurse</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
