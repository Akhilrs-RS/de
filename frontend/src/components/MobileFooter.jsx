import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/lo_clean.png';
import mapImage from '../assets/map.png';

const MobileFooter = () => {
  return (
    <footer className="w-full bg-[#391361] text-white py-14 px-6 flex flex-col shrink-0 relative overflow-hidden">
      <div className="relative z-10 flex flex-col space-y-10">
        {/* Logo & Tagline */}
        <div>
          <div className="bg-white px-4 py-3 rounded-2xl inline-block mb-4">
            <img 
              src={logoImage} 
              alt="Manick Dental" 
              className="w-[140px] h-auto object-contain" 
            />
          </div>
          <p className="text-white/90 text-[11px] leading-relaxed max-w-[280px]">
            An atelier of dental artistry — where clinical precision meets editorial grace.
          </p>
        </div>

        {/* Clinic Hours */}
        <div>
          <div className="flex items-center gap-2 text-[#C4A47C] mb-4 font-medium text-[13px]">
            <Clock className="w-[18px] h-[18px]" />
            <span>Clinic Hours</span>
          </div>
          <p className="text-white text-[13px] mb-2 font-medium">Monday - Saturday</p>
          <p className="text-white/80 text-[12.5px] leading-relaxed">9:30 AM - 12:30 PM &nbsp;•&nbsp; 4:30 - 7:30 PM</p>
          <Link 
            to="/mobile/book-appointment" 
            className="inline-flex items-center space-x-1.5 text-xs text-[#C4A47C] hover:text-white transition-colors mt-3 font-medium"
          >
            <span>Book an Appointment</span>
            <span>→</span>
          </Link>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-[#C4A47C] font-normal text-[15px] uppercase tracking-wider mb-5">Explore</h4>
          <div className="flex flex-col space-y-4 text-[13px] text-white font-light">
            <Link to="/mobile" className="hover:text-white/80 transition-colors">Home</Link>
            <Link to="/mobile/about" className="hover:text-white/80 transition-colors">About</Link>
            <Link to="/mobile/services" className="hover:text-white/80 transition-colors">Services &amp; Treatments</Link>
            <Link to="/mobile/our-story" className="hover:text-white/80 transition-colors">Our Story</Link>
            <Link to="/mobile/clinic-tour" className="hover:text-white/80 transition-colors">Clinic Tour</Link>
            <Link to="/mobile/contact" className="hover:text-white/80 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-[#C4A47C] font-normal text-[15px] uppercase tracking-wider mb-5">Contact</h4>
          <div className="flex flex-col space-y-5 text-[13px] text-white font-light">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Manick+Dental+Clinic+Melpuram+Road+Kuzhithurai+Tamil+Nadu+629163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-white/80 transition-colors"
            >
              <MapPin className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Melpuram Road, Kazhuvanthitai,<br />
                Kaluvanthittai, Tamil Nadu 629168
              </span>
            </a>
            
            <a 
              href="tel:+917358834773" 
              className="flex items-center gap-4 hover:text-white/80 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#C4A47C] shrink-0" />
              <span>+917358834773</span>
            </a>

            <a 
              href="mailto:manickdental@gmail.com" 
              className="flex items-center gap-4 hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5 text-[#C4A47C] shrink-0" />
              <span>manickdental@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="pt-2">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Manick+Dental+Clinic+Melpuram+Road+Kuzhithurai+Tamil+Nadu+629163" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden hover:opacity-95 transition-opacity"
          >
            <img 
              src={mapImage} 
              alt="Manick Dental Clinic Map Location" 
              className="w-full h-[140px] object-cover"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
