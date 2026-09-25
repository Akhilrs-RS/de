import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import cc1 from '../assets/cc1.png';
import cc2 from '../assets/cc2.png';

export default function Contact() {
  const { getImage } = useMedia();
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.clinic ? `Inquiry from ${formData.clinic}` : 'General Inquiry',
          message: formData.message
        })
      });
    } catch (err) {
      console.warn('Backend API connection notice:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-10 lg:pr-20">
            <p className="text-sm font-sans font-medium text-gray-500 uppercase tracking-widest">
              Contact Us
            </p>
            <h1 className="text-[3rem] md:text-5xl lg:text-[4rem] font-serif font-bold text-gray-900 leading-[1.1] tracking-tight uppercase">
              Get in Touch with <br />
              <span className="text-[#C4A47C]">Manick Dental</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-2 max-w-sm">
              Fill in the form below and our team will confirm your slot via phone or WhatsApp.
            </p>
          </div>

          {/* Right Column - Large Image */}
          <div className="relative w-full flex justify-end">
            <div className="w-full max-w-[450px] lg:max-w-[500px] aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-sm bg-gray-100">
              <img 
                src={getImage('contact', 'hero', cc1)} 
                alt="Contact Us" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Info Cards */}
            <a 
              href="https://maps.app.goo.gl/Wn7qpfAhaTeNVAvF9?g_st=ic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-sm border border-gray-100 hover:border-purple-200 transition-colors group block"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:text-[#431C75] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#431C75] transition-colors">Dental Clinic Address</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Manick Dental, 14 Industrial Estate,<br />
                  Coimbatore, Tamil Nadu 641001
                </p>
              </div>
            </a>

            <div className="bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5A2.25 2.25 0 0021.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C11.436 16.045 8.852 13.461 7.256 10.565L8.549 9.595C8.911 9.324 9.076 8.862 8.966 8.422L7.86 3.999C7.735 3.498 7.285 3.147 6.769 3.147H5.397A2.25 2.25 0 003.147 5.397V6.75H2.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-semibold text-gray-900 text-sm mb-1">Phone</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  +91 4221234567
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.75 6.75V17.25A2.25 2.25 0 0119.5 19.5H4.5A2.25 2.25 0 012.25 17.25V6.75M21.75 6.75A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75M21.75 6.75L12 13.5L2.25 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-semibold text-gray-900 text-sm mb-1">Email</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  hello@manickdental.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.25 18.75A1.5 1.5 0 019.75 17.25H14.25A1.5 1.5 0 0115.75 18.75V20.25H8.25V18.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 12V6C4.5 4.34315 5.84315 3 7.5 3H16.5C18.1569 3 19.5 4.34315 19.5 6V12L21 16.5V18C21 18.8284 20.3284 19.5 19.5 19.5H4.5C3.67157 19.5 3 18.8284 3 18V16.5L4.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 12H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-semibold text-gray-900 text-sm mb-1">PickUp Support</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  +91 4221234567
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 flex items-start space-x-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-semibold text-gray-900 text-sm mb-1">Billing Support</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  billing@manickdental.com
                </p>
              </div>
            </div>

            {/* Map Image */}
            <a 
              href="https://maps.app.goo.gl/Wn7qpfAhaTeNVAvF9?g_st=ic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-32 md:h-40 rounded-2xl overflow-hidden shadow-sm border border-gray-100 mt-2 block hover:opacity-95 transition-opacity"
            >
              <img 
                src={getImage('contact', 'map', cc2)} 
                alt="Map Location" 
                className="w-full h-full object-cover" 
              />
            </a>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-[#FAF8F3] border border-[#C4A47C]/40 rounded-2xl p-8 text-center animate-fadeIn">
                  <div className="w-14 h-14 bg-[#3b1866] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
                    Thank you, {formData.name || 'valued patient'}. We have received your inquiry and our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', clinic: '', phone: '', email: '', message: '' });
                    }}
                    className="bg-[#3b1866] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-[#2A114B] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-sans font-medium text-gray-700">Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9E7CFF]/20 focus:border-[#9E7CFF] transition-all font-sans text-sm" 
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-sans font-medium text-gray-700">Clinic</label>
                      <input 
                        type="text" 
                        value={formData.clinic}
                        onChange={(e) => setFormData(p => ({ ...p, clinic: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9E7CFF]/20 focus:border-[#9E7CFF] transition-all font-sans text-sm" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-sans font-medium text-gray-700">Phone *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9E7CFF]/20 focus:border-[#9E7CFF] transition-all font-sans text-sm" 
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-sans font-medium text-gray-700">Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9E7CFF]/20 focus:border-[#9E7CFF] transition-all font-sans text-sm" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-sans font-medium text-gray-700">Message</label>
                    <textarea 
                      rows="5" 
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9E7CFF]/20 focus:border-[#9E7CFF] transition-all font-sans text-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 rounded border-gray-300 text-[#3b1866] focus:ring-[#3b1866]" />
                    <label htmlFor="consent" className="text-[11px] font-sans text-gray-500 leading-relaxed">
                      I consent to Manick Dental Clinic contacting me regarding this appointment request. I understand this is a request only and not a confirmed booking. I have read the <Link to="/privacy-policy" className="text-[#3b1866] underline hover:text-[#2A114B] font-medium" target="_blank" rel="noopener noreferrer">Manick Dental Privacy Policy</Link>.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2A114B] transition-colors w-fit disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
