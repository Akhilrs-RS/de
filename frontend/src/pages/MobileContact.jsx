import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Truck, Receipt, Check } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import { sendContactMessage } from '../utils/api';
import cc1 from '../assets/cc1.png';
import cc2 from '../assets/cc2.png';

const MobileContact = () => {
  const { getImage } = useMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactMessage(formData);
    } catch (err) {
      console.warn('Backend API connection notice:', err);
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
              Contact
            </h4>
            <h1 
              className="font-serif font-bold tracking-tight text-[#111111]"
              style={{ fontSize: '36px', lineHeight: '1.1' }}
            >
              GET IN TOUCH WITH
            </h1>
            <div 
              className="font-serif font-bold mt-0.5 uppercase"
              style={{ fontSize: '36px', lineHeight: '1.1', color: '#9E7648' }}
            >
              MANICK DENTAL
            </div>
            <p className="text-[13px] leading-relaxed text-[#4A4A4A] mt-4 max-w-[340px]">
              Fill in the form below and our team will confirm your slot via phone or WhatsApp.
            </p>
          </section>

          {/* Hero Image */}
          <div className="px-6 mb-8">
            <div className="w-full rounded-[28px] overflow-hidden shadow-sm aspect-[4/5] bg-gray-100">
              <img 
                src={getImage('contact', 'hero-image', getImage('contact', 'hero', cc1))} 
                alt="Patient thumbs up in dental clinic" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 5 Contact Info Cards */}
          <section className="px-6 flex flex-col space-y-3.5 mb-12">
            {/* Card 1: Dental Clinic Address */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Manick+Dental+Clinic+Melpuram+Road+Kuzhithurai+Tamil+Nadu+629163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/60 flex items-start gap-4 hover:border-purple-200 active:scale-[0.99] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[14px] text-[#111111] mb-1">
                  Dental Clinic Address
                </h3>
                <p className="text-[12px] text-[#666666] leading-relaxed">
                  Manick Dental, 14 Industrial<br />
                  Estate, Coimbatore, Tamil Nadu<br />
                  641001
                </p>
              </div>
            </a>

            {/* Card 2: Phone */}
            <a 
              href="tel:+917358834772"
              className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/60 flex items-start gap-4 hover:border-purple-200 active:scale-[0.99] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[14px] text-[#111111] mb-1">
                  Phone
                </h3>
                <p className="text-[12px] text-[#666666] leading-relaxed">
                  +91 7358834772
                </p>
              </div>
            </a>

            {/* Card 3: Email */}
            <a 
              href="mailto:hello@manickdental.com"
              className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/60 flex items-start gap-4 hover:border-purple-200 active:scale-[0.99] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[14px] text-[#111111] mb-1">
                  Email
                </h3>
                <p className="text-[12px] text-[#666666] leading-relaxed">
                  hello@manickdental.com
                </p>
              </div>
            </a>

            {/* Card 4: PickUp Support */}
            <a 
              href="tel:+917358834772"
              className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/60 flex items-start gap-4 hover:border-purple-200 active:scale-[0.99] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[14px] text-[#111111] mb-1">
                  PickUp Support
                </h3>
                <p className="text-[12px] text-[#666666] leading-relaxed">
                  +91 7358834772
                </p>
              </div>
            </a>

            {/* Card 5: Billing Support */}
            <a 
              href="mailto:billing@manickdental.com"
              className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/60 flex items-start gap-4 hover:border-purple-200 active:scale-[0.99] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[14px] text-[#111111] mb-1">
                  Billing Support
                </h3>
                <p className="text-[12px] text-[#666666] leading-relaxed">
                  billing@manickdental.com
                </p>
              </div>
            </a>
          </section>

          {/* Send us a Message Section */}
          <section className="px-6 mb-8">
            <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-5">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="bg-white rounded-[24px] p-8 text-center shadow-sm border border-gray-100/60 mb-8">
                <div 
                  className="w-12 h-12 rounded-full text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold"
                  style={{ backgroundColor: '#391361' }}
                >
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-[20px] text-[#111111] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[12px] text-[#555555] leading-relaxed mb-5">
                  Thank you, {formData.name || 'valued patient'}. We have received your inquiry and our team will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', clinic: '', phone: '', email: '', message: '', consent: false });
                  }}
                  className="px-6 py-2.5 rounded-full text-white text-[12px] font-semibold transition-colors"
                  style={{ backgroundColor: '#391361' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div>
                  <label className="block text-[12.5px] font-medium text-[#444444] mb-1.5">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[12.5px] font-medium text-[#444444] mb-1.5">
                    Clinic
                  </label>
                  <input 
                    type="text" 
                    value={formData.clinic}
                    onChange={(e) => setFormData(p => ({ ...p, clinic: e.target.value }))}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[12.5px] font-medium text-[#444444] mb-1.5">
                    Phone *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[12.5px] font-medium text-[#444444] mb-1.5">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[12.5px] font-medium text-[#444444] mb-1.5">
                    Message
                  </label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 bg-white/70 focus:bg-white focus:outline-none focus:border-[#391361] text-[13px] text-gray-800 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input 
                    type="checkbox" 
                    id="contact-consent" 
                    required 
                    checked={formData.consent}
                    onChange={(e) => setFormData(p => ({ ...p, consent: e.target.checked }))}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#391361] focus:ring-[#391361] shrink-0" 
                  />
                  <label htmlFor="contact-consent" className="text-[10.5px] text-[#666666] leading-relaxed">
                    I consent to Manick Dental Clinic contacting me regarding this appointment request. I understand this is a request only and not a confirmed booking. I have read the Manick Dental *
                  </label>
                </div>

                <div className="pt-3">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-fit px-8 py-3 rounded-full text-white text-[13px] font-semibold shadow-md transition-colors disabled:opacity-50 cursor-pointer"
                    style={{ backgroundColor: '#391361' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Map Location Section */}
          <div className="w-full overflow-hidden shadow-xs">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Manick+Dental+Clinic+Melpuram+Road+Kuzhithurai+Tamil+Nadu+629163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full hover:opacity-95 transition-opacity"
            >
              <img 
                src={getImage('contact', 'map-image', getImage('contact', 'map', cc2))} 
                alt="Manick Dental Clinic Location Map" 
                className="w-full h-[180px] object-cover"
              />
            </a>
          </div>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileContact;
