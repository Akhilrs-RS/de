import React from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import marvicLogo from '../assets/marvic.png';

export default function Navbar() {
  const { getImage } = useMedia();
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 bg-white relative z-20">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img src={getImage('global', 'navbar-logo', marvicLogo)} alt="Manick Dental" className="h-28 lg:h-[140px] w-auto object-contain" />
      </Link>

      {/* Links */}
      <div className="hidden lg:flex items-center space-x-10 text-gray-900 text-base font-medium">
        <Link to="/about" className="hover:text-[#431C75] transition-colors">About</Link>
        <Link to="/services" className="hover:text-[#431C75] transition-colors">Services</Link>
        <Link to="/clinic-tour" className="hover:text-[#431C75] transition-colors">Clinic Tour</Link>
        <Link to="/our-story" className="hover:text-[#431C75] transition-colors">Our Story</Link>
        <Link to="/contact" className="hover:text-[#431C75] transition-colors">Contact</Link>
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <Link 
          to="/book-appointment" 
          className="bg-[#3b1866] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#2A114B] transition-colors inline-block text-center"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
