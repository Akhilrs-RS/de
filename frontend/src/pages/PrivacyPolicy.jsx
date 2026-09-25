import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, FileText, Bell, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen text-gray-900">
      {/* Hero Header */}
      <section className="w-full bg-[#2A114B] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle Watermark Accent */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none font-serif text-[12rem] lg:text-[18rem] leading-none text-white font-bold -mb-16 -mr-16">
          MD
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-[#C4A47C] hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="block text-[#C4A47C] font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Legal &amp; Transparency
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Patient Privacy &amp; <br className="hidden sm:inline" />
            <span className="text-[#C4A47C] italic font-normal">Data Protection Policy</span>
          </h1>
          
          <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
            At Manick Dental Clinic, we hold your trust and health information to the highest ethical and professional standards. This policy details how your contact details and inquiries are responsibly collected, protected, and handled.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60 font-sans">
            <span>Effective Date: September 2026</span>
            <span>•</span>
            <span>Applicable to: Manick Dental Clinic Patients &amp; Online Inquirers</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="space-y-12">
          
          {/* Card 1: Introduction */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <div className="flex items-center space-x-3 text-[#2A114B] mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A114B]/5 flex items-center justify-center text-[#2A114B]">
                <ShieldCheck className="w-5 h-5 text-[#2A114B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                1. Our Commitment to Patient Confidentiality
              </h2>
            </div>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
              Manick Dental Clinic ("we," "our," or "the Clinic") operates as a specialized dental healthcare provider located in Kuzhithurai, Tamil Nadu. We recognize that medical and dental consultations require absolute confidentiality. Whether you reach out online to schedule an appointment, request a callback, or visit our clinic in person, we treat all personal information with strict discretion and care.
            </p>
          </div>

          {/* Card 2: What We Collect */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <div className="flex items-center space-x-3 text-[#2A114B] mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A114B]/5 flex items-center justify-center text-[#2A114B]">
                <FileText className="w-5 h-5 text-[#2A114B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                2. Information We Collect
              </h2>
            </div>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-4">
              To coordinate appointments and provide patient support, we collect the following categories of information:
            </p>
            <ul className="space-y-3 font-sans text-sm md:text-base text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-[#C4A47C] font-bold mt-1">•</span>
                <span><strong>Personal Contact Details:</strong> Full Name, telephone/mobile number, and email address submitted via appointment or contact forms.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#C4A47C] font-bold mt-1">•</span>
                <span><strong>Appointment Preferences:</strong> Preferred dates, convenient time slots, and treatment interests (e.g., Smile Makeover, Invisible Aligners, Cosmetic Dentistry, or General Dental Checkup).</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#C4A47C] font-bold mt-1">•</span>
                <span><strong>Inquiry Notes:</strong> Voluntary descriptions of your dental concerns, queries, or dental history shared during appointment booking.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: How We Use Data */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <div className="flex items-center space-x-3 text-[#2A114B] mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A114B]/5 flex items-center justify-center text-[#2A114B]">
                <Bell className="w-5 h-5 text-[#2A114B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                3. Purpose of Using Patient Contact Details
              </h2>
            </div>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-4">
              Your contact details are collected strictly for legitimate healthcare and communication needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-gray-100">
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Appointment Coordination</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Confirming your scheduled consultation, sending slot reminders, and notifying you in case of doctor schedule adjustments.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-gray-100">
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Clinical Communication</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Providing pre-care guidelines, addressing procedure queries, and conducting post-treatment healing check-ins.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-gray-100">
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Inquiry Response</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Direct phone calls or WhatsApp messages from our front desk to answer your questions regarding clinic procedures or pricing.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-gray-100">
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Service Quality</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Gauging patient satisfaction and upgrading clinic workflow and patient hospitality.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Strict Non-Disclosure */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <div className="flex items-center space-x-3 text-[#2A114B] mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A114B]/5 flex items-center justify-center text-[#2A114B]">
                <EyeOff className="w-5 h-5 text-[#2A114B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                4. Absolute Non-Disclosure &amp; Zero Marketing Sharing
              </h2>
            </div>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-3">
              We uphold a strict policy against commercializing patient data:
            </p>
            <ul className="space-y-2 font-sans text-sm md:text-base text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></span>
                <span><strong>No Data Selling:</strong> We do NOT sell, rent, monetize, or trade patient personal contact details to external brokers, advertisers, or lead generators.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></span>
                <span><strong>Restricted Access:</strong> Only authorized clinic dentists, hygienists, and front desk personnel directly assisting with your care have access to your details.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A47C]"></span>
                <span><strong>No Unsolicited Spam:</strong> You will only receive messages directly relevant to your appointments, treatment follow-ups, and requested information.</span>
              </li>
            </ul>
          </div>

          {/* Card 5: Security Measures */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <div className="flex items-center space-x-3 text-[#2A114B] mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A114B]/5 flex items-center justify-center text-[#2A114B]">
                <Lock className="w-5 h-5 text-[#2A114B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                5. Security &amp; Data Safeguards
              </h2>
            </div>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
              We employ industry-standard technical and operational safeguards to secure all online forms and internal databases. All website transmissions are encrypted using Secure Sockets Layer (SSL/TLS). Electronic records are housed on secure infrastructure with strict role-based access controls to prevent unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* Card 6: Patient Rights & Contact */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <div className="flex items-center space-x-3 text-[#2A114B] mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A114B]/5 flex items-center justify-center text-[#2A114B]">
                <Phone className="w-5 h-5 text-[#2A114B]" />
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                6. Your Rights &amp; Privacy Contact
              </h2>
            </div>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-6">
              You are entitled to verify, amend, or update the contact details on file with Manick Dental Clinic at any time. If you have questions regarding this privacy policy or wish to update your notification preferences, please reach out to us:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans">
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#FAF8F3]">
                <MapPin className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">Clinic Address</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Melpuram Road, Kuzhithurai,<br />Tamil Nadu 629163
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#FAF8F3]">
                <Phone className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">Phone</h4>
                  <a href="tel:+917358834772" className="text-xs text-gray-600 hover:text-[#2A114B] font-medium">
                    +91 7358834772
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-[#FAF8F3]">
                <Mail className="w-5 h-5 text-[#C4A47C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">Email</h4>
                  <a href="mailto:manickdental@gmail.com" className="text-xs text-gray-600 hover:text-[#2A114B] font-medium break-all">
                    manickdental@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="bg-[#2A114B] rounded-3xl p-8 md:p-12 text-center text-white flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
              Ready to schedule your appointment?
            </h3>
            <p className="text-white/80 font-sans text-sm max-w-lg mb-8 leading-relaxed">
              Experience modern dental care tailored to your facial harmony and long-term oral well-being.
            </p>
            <Link 
              to="/book-appointment" 
              className="bg-[#C4A47C] text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-[#d5b892] transition-colors shadow-md"
            >
              Book Consultation
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
