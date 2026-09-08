import React from 'react';
import { Link } from 'react-router-dom';
import loImage from '../assets/lo.png';
import mapImage from '../assets/map.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A114B] text-white py-16 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 w-full flex flex-col justify-end pointer-events-none select-none z-0 opacity-[0.03]">
        <div className="text-[10rem] md:text-[14rem] font-serif leading-[0.8] tracking-widest whitespace-nowrap overflow-hidden">
          SMILE
        </div>
        <div className="text-[10rem] md:text-[14rem] font-serif leading-[0.8] tracking-widest whitespace-nowrap overflow-hidden">
          BEAUTIFUL
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column - Branding & Hours */}
        <div className="md:col-span-5 flex flex-col space-y-8">
          <Link to="/" className="bg-white rounded p-2 inline-block w-48">
            <img src={loImage} alt="Manick Dental" className="w-full h-auto object-contain" />
          </Link>
          
          <p className="text-white/80 font-sans text-sm max-w-sm leading-relaxed">
            An atelier of dental artistry — where clinical precision meets editorial grace.
          </p>

          <div>
            <div className="flex items-center space-x-2 text-[#C4A47C] mb-2 font-medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Clinic Hours</span>
            </div>
            <div className="font-sans text-sm space-y-1 text-white/90">
              <p className="font-semibold">Monday - Saturday</p>
              <p className="text-white/70">9:30 AM - 1:30 PM &nbsp;•&nbsp; 4:30 - 7:30 PM</p>
            </div>
          </div>
        </div>

        {/* Middle Column - Explore Links */}
        <div className="md:col-span-3 flex flex-col space-y-6">
          <h4 className="text-[#C4A47C] font-sans font-medium uppercase tracking-wider text-sm">Explore</h4>
          <nav className="flex flex-col space-y-3 font-sans text-sm text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="#" className="hover:text-white transition-colors">Treatment</Link>
            <Link to="/clinic-tour" className="hover:text-white transition-colors">Clinic Tour</Link>
            <Link to="#" className="hover:text-white transition-colors">Smile Gallery</Link>
          </nav>
        </div>

        {/* Right Column - Contact & Map */}
        <div className="md:col-span-4 flex flex-col space-y-6">
          <h4 className="text-[#C4A47C] font-sans font-medium uppercase tracking-wider text-sm">Contact</h4>
          
          <div className="flex flex-col space-y-4 font-sans text-sm text-white/80">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 shrink-0 text-[#C4A47C] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="leading-relaxed">
                Melpuram Road, Kuzhithurai,<br />
                Kanyakumari Dist, Tamil Nadu 629163
              </span>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 shrink-0 text-[#C4A47C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>+91 7358834772</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 shrink-0 text-[#C4A47C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>manickdental@gmail.com</span>
            </div>
          </div>

          {/* Map */}
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg border border-white/10 w-full h-32 md:h-40">
            <img src={mapImage} alt="Clinic Location Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </footer>
  );
}
