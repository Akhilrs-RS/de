import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import { createAppointment } from '../utils/api';
import book from '../assets/book.png';

const servicesList = [
  'General Checkups',
  'Scaling & Cleaning',
  'Tooth Filling (Restoration)',
  'Root Canal Treatment',
  'Tooth Extraction',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Dental Implants',
  'Crowns & Bridges',
  'Mouth Guards',
  'Tooth Reshaping',
  'Veneers & Crowns',
  'X-Ray'
];

const MobileAppointment = () => {
  const { getImage } = useMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    preferredDate: '',
    service: 'General Checkups',
    preferredTime: 'Morning (9:30Am - 12:30PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createAppointment(formData);
    } catch (err) {
      console.warn('Backend appointment submission notice:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

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
              Book Appointment
            </h4>
            <h1 
              className="font-serif font-bold tracking-tight text-[#111111]"
              style={{ fontSize: '36px', lineHeight: '1.1' }}
            >
              Book Your Dental
            </h1>
            <div 
              className="font-serif font-bold mt-0.5"
              style={{ fontSize: '36px', lineHeight: '1.1', color: '#9E7648' }}
            >
              Appointment
            </div>
            <p className="text-[13px] leading-relaxed text-[#4A4A4A] mt-4 max-w-[340px]">
              Fill in the form below and our team will confirm your slot via phone or WhatsApp.
            </p>
          </section>

          {/* Hero Image */}
          <div className="px-6 mb-8">
            <div 
              className="w-full overflow-hidden shadow-sm aspect-[4/5] bg-gray-100"
              style={{
                borderRadius: '28px'
              }}
            >
              <img 
                src={getImage('book', 'side-image', book)} 
                alt="Doctor examining patient with gentle dental care" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Appointment Form */}
          <section className="px-6 mb-12">
            {submitted ? (
              <div className="bg-white rounded-[24px] p-8 text-center shadow-sm border border-gray-100/60 my-4">
                <div 
                  className="w-14 h-14 rounded-full text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                  style={{ backgroundColor: '#391361' }}
                >
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif font-bold text-[22px] text-[#111111] mb-2">
                  Appointment Requested!
                </h3>
                <p className="text-[13px] text-[#555555] leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-gray-900">{formData.fullName || 'Patient'}</span>. Our clinic team will call you shortly on <span className="font-semibold text-gray-900">{formData.phoneNumber || 'your phone'}</span> to confirm your booking for {formData.service}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      preferredDate: '',
                      service: 'General Checkups',
                      preferredTime: 'Morning (9:30Am - 12:30PM)',
                      notes: ''
                    });
                  }}
                  className="px-6 py-3 rounded-full text-white text-[13px] font-semibold transition-colors"
                  style={{ backgroundColor: '#391361' }}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 placeholder:text-gray-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your Mobile number"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 placeholder:text-gray-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 placeholder:text-gray-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                    Select your Services
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all appearance-none cursor-pointer"
                    >
                      {servicesList.map((svc, sIdx) => (
                        <option key={sIdx} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all appearance-none cursor-pointer"
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
                  <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                    Notes (Optional)
                  </label>
                  <textarea
                    rows="3"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us briefly what's troubling yoou"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 placeholder:text-gray-400 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full text-white text-[14px] font-semibold shadow-md transition-colors disabled:opacity-50 cursor-pointer"
                    style={{ backgroundColor: '#391361' }}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileAppointment;
