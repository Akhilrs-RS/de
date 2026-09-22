import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/lo_clean.png';
import { X } from 'lucide-react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative z-40 flex items-center justify-between px-6 pt-9 pb-2 w-full">
        <Link to="/mobile" className="z-50">
          <img 
            src={logoImage} 
            alt="Manick Dental" 
            className="w-[124px] sm:w-[130px] h-auto object-contain select-none" 
          />
        </Link>
        
        <button 
          type="button" 
          onClick={() => setIsOpen(true)}
          className="p-1 -mr-1 text-black flex flex-col justify-center items-center gap-[4.5px] cursor-pointer focus:outline-none z-40"
          aria-label="Navigation Menu"
        >
          <span className="block w-[24px] h-[2.5px] bg-black rounded-full"></span>
          <span className="block w-[24px] h-[2.5px] bg-black rounded-full"></span>
          <span className="block w-[24px] h-[2.5px] bg-black rounded-full"></span>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/20 z-40 backdrop-blur-sm rounded-[inherit]"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-[70%] h-full bg-white z-50 rounded-l-[32px] sm:rounded-r-[36px] shadow-2xl flex flex-col px-8 py-12"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-6 p-2 text-gray-500 hover:text-black focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col space-y-8 mt-16 text-[14px] font-semibold text-gray-800 uppercase tracking-wide">
                <Link to="/mobile" onClick={() => setIsOpen(false)} className="hover:text-[#C4A47C] transition-colors">Home</Link>
                <Link to="/mobile/about" onClick={() => setIsOpen(false)} className="hover:text-[#C4A47C] transition-colors">About Us</Link>
                <Link to="/mobile/services" onClick={() => setIsOpen(false)} className="hover:text-[#C4A47C] transition-colors">Our Services</Link>
                <Link to="/mobile/our-story" onClick={() => setIsOpen(false)} className="hover:text-[#C4A47C] transition-colors">Our Story</Link>
                <Link to="/mobile/clinic-tour" onClick={() => setIsOpen(false)} className="hover:text-[#C4A47C] transition-colors">Clinic Tour</Link>
                <Link to="/mobile/contact" onClick={() => setIsOpen(false)} className="hover:text-[#C4A47C] transition-colors">Contact</Link>
              </div>

              <div className="mt-12">
                <Link 
                  to="/book-appointment" 
                  onClick={() => setIsOpen(false)}
                  className="bg-[#2A114B] text-white px-6 py-3.5 rounded-full text-[13px] font-semibold shadow-lg inline-flex items-center justify-center w-full hover:bg-[#210745] transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
