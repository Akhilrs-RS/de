import React, { useState } from 'react';
import { useMedia } from '../context/MediaContext';
import book from '../assets/book.png';
import ab from '../assets/ab.png';

export default function BookAppointment() {
  const { getImage } = useMedia();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: 'Morning (9:30Am - 12:30PM)',
    service: 'General Checkups',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          service: formData.service,
          notes: formData.notes
        })
      });
    } catch (err) {
      console.warn('Backend API connection notice:', err);
    }
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white py-12 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Image book.png */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4.5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
            <img 
              src={getImage('book-appointment', 'book', book)} 
              alt="Dental Appointment Consultation" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Right Column: Title with ab.png + Form */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Title Header with Tooth icon ab.png */}
          <div className="flex items-center space-x-3 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-gray-900 leading-tight">
              Book Your Dental <span className="text-[#C4A47C]">Appointment</span>
            </h1>
            <div className="w-12 sm:w-14 lg:w-16 shrink-0 select-none">
              <img 
                src={getImage('book-appointment', 'ab', ab)} 
                alt="Dental tooth graphic" 
                className="w-full h-auto object-contain filter drop-shadow-sm" 
              />
            </div>
          </div>

          {submitted ? (
            <div className="bg-[#FAF8F3] border border-[#C4A47C]/40 rounded-2xl p-8 text-center my-6 animate-fadeIn">
              <div className="w-16 h-16 bg-[#3b1866] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Appointment Requested!
              </h3>
              <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-gray-900">{formData.fullName || 'Patient'}</span>. Our clinic team will call you shortly on <span className="font-semibold text-gray-900">{formData.phoneNumber || 'your number'}</span> to confirm your booking for {formData.service}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#3b1866] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-[#2A114B] transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-gray-900 font-sans font-medium text-sm md:text-base mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b1866] focus:ring-1 focus:ring-[#3b1866] transition-all"
                />
              </div>

              {/* Phone Number & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-sans font-medium text-sm md:text-base mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your Mobile number"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b1866] focus:ring-1 focus:ring-[#3b1866] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-sans font-medium text-sm md:text-base mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b1866] focus:ring-1 focus:ring-[#3b1866] transition-all"
                  />
                </div>
              </div>

              {/* Preferred Time & Select your Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-sans font-medium text-sm md:text-base mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#3b1866] focus:ring-1 focus:ring-[#3b1866] bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="Morning (9:30Am - 12:30PM)">Morning (9:30Am - 12:30PM)</option>
                      <option value="Evening (4:30PM - 7:30PM)">Evening (4:30PM - 7:30PM)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 font-sans font-medium text-sm md:text-base mb-2">
                    Select your Services
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#3b1866] focus:ring-1 focus:ring-[#3b1866] bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="General Checkups">General Checkups</option>
                      <option value="Smile Makeover">Smile Makeover</option>
                      <option value="Invisible Aligners">Invisible Aligners</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Scaling & Cleaning">Scaling &amp; Cleaning</option>
                      <option value="Tooth Filling (Restoration)">Tooth Filling (Restoration)</option>
                      <option value="Root Canal Treatment">Root Canal Treatment</option>
                      <option value="Tooth Extraction">Tooth Extraction</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Crowns & Bridges">Crowns &amp; Bridges</option>
                      <option value="Mouth Guards">Mouth Guards</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes (Optional) */}
              <div>
                <label className="block text-gray-900 font-sans font-medium text-sm md:text-base mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us briefly what's troubling you"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3b1866] focus:ring-1 focus:ring-[#3b1866] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#3b1866] hover:bg-[#2A114B] text-white py-4 rounded-xl font-medium text-sm md:text-base transition-colors shadow-sm cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
