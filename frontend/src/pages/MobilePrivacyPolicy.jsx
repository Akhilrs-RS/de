import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, FileText, Bell, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';

export default function MobilePrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FAF8F3] sm:bg-neutral-900 flex justify-center items-center">
      {/* Mobile viewport container */}
      <div 
        className="relative w-full sm:max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide flex flex-col"
        style={{ backgroundColor: '#FAF8F3' }}
      >
        <MobileNavbar />

        <div className="flex-grow flex flex-col w-full">
          {/* Header Banner */}
          <section className="bg-[#2A114B] text-white px-6 pt-6 pb-10 relative overflow-hidden">
            <Link 
              to="/mobile" 
              className="inline-flex items-center space-x-1.5 text-[#C4A47C] text-xs font-semibold uppercase tracking-wider mb-5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>

            <span className="text-[#C4A47C] text-[11px] font-semibold tracking-[0.2em] uppercase block mb-2">
              Legal &amp; Transparency
            </span>
            <h1 className="font-serif font-bold text-2xl text-white leading-tight mb-3">
              Patient Privacy &amp; <br />
              <span className="text-[#C4A47C] italic font-normal">Data Protection</span>
            </h1>
            <p className="text-white/80 text-[12px] leading-relaxed">
              How Manick Dental Clinic protects, processes, and respects your personal health information and contact details.
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 text-[10.5px] text-white/60">
              Effective Date: September 2026
            </div>
          </section>

          {/* Policy Sections */}
          <div className="px-5 py-8 space-y-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
              <div className="flex items-center gap-2.5 text-[#2A114B] mb-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2A114B] shrink-0" />
                <h2 className="font-serif font-bold text-[15px] text-gray-900">
                  1. Patient Confidentiality
                </h2>
              </div>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                Manick Dental Clinic provides specialized dental care in Kuzhithurai, Tamil Nadu. We treat all personal and dental consultation records with the highest ethical and professional discretion.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
              <div className="flex items-center gap-2.5 text-[#2A114B] mb-2.5">
                <FileText className="w-4 h-4 text-[#2A114B] shrink-0" />
                <h2 className="font-serif font-bold text-[15px] text-gray-900">
                  2. Details We Collect
                </h2>
              </div>
              <p className="text-gray-600 text-[12px] leading-relaxed mb-3">
                To coordinate appointments and patient care, we collect:
              </p>
              <ul className="space-y-2 text-[11.5px] text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A47C] font-bold">•</span>
                  <span><strong>Contact Information:</strong> Full name, telephone number, and email.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A47C] font-bold">•</span>
                  <span><strong>Appointment Requests:</strong> Preferred schedule dates, times, and treatment interests (e.g. Smile Makeover, Aligners).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A47C] font-bold">•</span>
                  <span><strong>Clinical Notes:</strong> Any voluntary notes or dental symptoms shared during inquiry.</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
              <div className="flex items-center gap-2.5 text-[#2A114B] mb-2.5">
                <Bell className="w-4 h-4 text-[#2A114B] shrink-0" />
                <h2 className="font-serif font-bold text-[15px] text-gray-900">
                  3. How Contact Details Are Used
                </h2>
              </div>
              <ul className="space-y-2 text-[11.5px] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A47C] font-bold">•</span>
                  <span>Confirming appointments and schedule reminders via phone or WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A47C] font-bold">•</span>
                  <span>Sharing pre-treatment guidance and post-procedure check-ins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C4A47C] font-bold">•</span>
                  <span>Promptly answering treatment or pricing inquiries.</span>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
              <div className="flex items-center gap-2.5 text-[#2A114B] mb-2.5">
                <EyeOff className="w-4 h-4 text-[#2A114B] shrink-0" />
                <h2 className="font-serif font-bold text-[15px] text-gray-900">
                  4. Zero Marketing Sharing
                </h2>
              </div>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                We NEVER sell, trade, or share your contact details with external advertisers or commercial third-party brokers. Access is restricted exclusively to authorized clinic staff involved in your care.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
              <div className="flex items-center gap-2.5 text-[#2A114B] mb-2.5">
                <Lock className="w-4 h-4 text-[#2A114B] shrink-0" />
                <h2 className="font-serif font-bold text-[15px] text-gray-900">
                  5. Security Safeguards
                </h2>
              </div>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                Online submissions are secured with SSL encryption and protected databases to prevent unauthorized access or disclosure.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
              <div className="flex items-center gap-2.5 text-[#2A114B] mb-2.5">
                <Phone className="w-4 h-4 text-[#2A114B] shrink-0" />
                <h2 className="font-serif font-bold text-[15px] text-gray-900">
                  6. Contact &amp; Grievance
                </h2>
              </div>
              <p className="text-gray-600 text-[12px] leading-relaxed mb-3">
                To update your contact preferences or ask questions regarding privacy, please contact:
              </p>
              <div className="space-y-2 text-[12px]">
                <div className="flex items-start gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-[#C4A47C] shrink-0 mt-0.5" />
                  <span>Melpuram Road, Kuzhithurai, Tamil Nadu 629163</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-[#C4A47C] shrink-0" />
                  <a href="tel:+917358834772" className="text-gray-900 font-medium">+91 7358834772</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-[#C4A47C] shrink-0" />
                  <a href="mailto:manickdental@gmail.com" className="text-gray-900 font-medium">manickdental@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-[#2A114B] rounded-2xl p-6 text-center text-white">
              <h3 className="font-serif font-bold text-lg mb-2">
                Need Dental Care?
              </h3>
              <p className="text-white/80 text-[12px] mb-4">
                Schedule your personalized consultation with our dental team.
              </p>
              <Link 
                to="/mobile/book-appointment" 
                className="bg-[#C4A47C] text-black px-6 py-2.5 rounded-xl font-medium text-xs inline-block shadow-md"
              >
                Book Appointment
              </Link>
            </div>

          </div>

          <MobileFooter />
        </div>
      </div>
    </div>
  );
}
