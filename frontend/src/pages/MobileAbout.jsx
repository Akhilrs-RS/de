import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Heart, Award, Users, ShieldCheck } from 'lucide-react';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import a1Image from '../assets/a1.png';
import abImage from '../assets/ab.png';
import h5Image from '../assets/h5.png';
import h12Image from '../assets/h12.png';

const MobileAbout = () => {
  const { getImage } = useMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F3EFE9] sm:bg-neutral-900 flex justify-center items-center">
      {/* Mobile viewport frame container */}
      <div 
        className="relative w-full sm:max-w-[430px] h-screen sm:h-[890px] sm:my-6 sm:rounded-[36px] sm:shadow-2xl overflow-y-auto scrollbar-hide flex flex-col"
        style={{ backgroundColor: '#F3EFE9' }}
      >
        <MobileNavbar />

        <div className="flex-grow flex flex-col w-full">
          {/* SECTION 1: ABOUT US */}
          <section 
            className="relative w-full pt-3 pb-8 overflow-hidden" 
            style={{ minHeight: '535px' }}
          >
            {/* Top Heading */}
            <div className="px-6 relative z-20">
              <h4 
                className="text-[11px] font-semibold uppercase mb-4" 
                style={{ letterSpacing: '0.2em', color: '#222222' }}
              >
                About Us
              </h4>
              <h1 
                className="font-serif font-bold tracking-tight text-[#111111]"
                style={{ fontSize: '34px', lineHeight: '1.08' }}
              >
                We are Here<br />
                for More<br />
                Than Just
              </h1>
              <div 
                className="font-serif italic mt-0.5"
                style={{ fontSize: '34px', lineHeight: '1.08', color: '#9E7648' }}
              >
                a Beautiful<br />
                Smile
              </div>
            </div>

            {/* Left Paragraph - Exactly 13 lines matching screenshot */}
            <div className="mt-7 px-6 relative z-20">
              <p 
                style={{ 
                  maxWidth: '92px', 
                  color: '#4A4A4A', 
                  fontSize: '11px', 
                  lineHeight: '1.6' 
                }}
              >
                Manick Dental Clinic was founded with a simple mission: provide honest, gentle, and affordable dental care to the families of Kazhuvanthithai and the surrounding community.
              </p>
            </div>

            {/* Arch Image - Positioned on the right */}
            <div 
              className="absolute select-none pointer-events-none z-10"
              style={{
                right: 0,
                top: '124px',
                width: '56.5%',
                height: '385px',
                borderTopLeftRadius: '145px',
                borderBottomLeftRadius: '0px',
                overflow: 'hidden'
              }}
            >
              <img 
                src={getImage('about', 'hero-main', getImage('about', 'hero', a1Image))} 
                alt="Dentist and patient" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </section>

          {/* SECTION 2: OUR STORY */}
          <section 
            className="relative w-full px-6 pt-10 pb-12"
            style={{ backgroundColor: '#F3EFE9' }}
          >
            {/* Floating Tooth Image */}
            <div 
              className="absolute select-none pointer-events-none z-10"
              style={{
                right: '24px',
                top: '12px',
                width: '84px'
              }}
            >
              <img 
                src={getImage('about', 'hero-secondary', abImage)} 
                alt="Tooth illustration" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="relative z-20">
              <h4 
                className="font-semibold text-[11px] uppercase mb-4"
                style={{ letterSpacing: '0.2em', color: '#9E7648' }}
              >
                Our Story
              </h4>
              <h2 
                className="font-serif font-bold text-[#111111] mb-5"
                style={{ fontSize: '32px', lineHeight: '1.1', maxWidth: '240px' }}
              >
                Build On Trust,<br />
                Focused on You
              </h2>

              <div 
                className="space-y-4 text-[12px] leading-[1.65] mb-7"
                style={{ maxWidth: '340px', color: '#4A4A4A' }}
              >
                <p>
                  Dentalmed was founded with a simple vision to make high-quality dental care accessible, comfortable, and personalized for everyone.
                </p>
                <p>
                  From day one, our goal has been to create a space where patients feel heard, cared for, and confident in their smiles.
                </p>
              </div>

              <Link 
                to="/mobile/book-appointment" 
                className="text-white text-[12px] font-medium inline-flex items-center gap-2 transition-all shadow-md active:scale-95"
                style={{
                  backgroundColor: '#391361',
                  padding: '11px 26px',
                  borderRadius: '9999px'
                }}
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
          
          {/* SECTION 3: OUR MISSION & VALUES */}
          <section 
            className="relative w-full px-6 pt-10 pb-14 text-white"
            style={{ backgroundColor: '#B79A72' }}
          >
            <div 
              className="inline-flex items-center text-white font-medium mb-6"
              style={{
                fontSize: '9.5px',
                letterSpacing: '0.18em',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                borderRadius: '9999px',
                padding: '3.5px 13px'
              }}
            >
              OUR MISSION & VALUES
            </div>

            <h2 
              className="font-serif font-bold text-white mb-5"
              style={{ fontSize: '30px', lineHeight: '1.15' }}
            >
              Guided by Purpose,<br />
              Driven by Care.
            </h2>

            <div 
              className="space-y-4 text-[12px] leading-[1.65] mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.92)' }}
            >
              <p>
                At Manick Dental Clinic, we believe that good oral health is foundational to overall well-being. Our mission is to make quality dental care accessible, comfortable, and trustworthy for every patient who walks through our doors.
              </p>
              <p>
                We are a family-focused clinic rooted in the Kazhuvanthithai community. We take the time to listen to your concerns, explain your options clearly, and provide treatments that genuinely meet your needs — no upselling, no unnecessary procedures.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Honest diagnosis and treatment recommendations",
                "Comfortable, anxiety-free environment",
                "Affordable care without hidden fees",
                "Modern equipment and sterile techniques"
              ].map((val, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div 
                    className="rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      width: '18px',
                      height: '18px',
                      border: '1.5px solid white'
                    }}
                  >
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-white text-[12px] font-medium leading-snug">{val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: OUR CORE VALUES */}
          <section 
            className="relative w-full px-6 pt-12 pb-10"
            style={{ backgroundColor: '#F3EFE9' }}
          >
            {/* Header with Title and Subtitle */}
            <div className="flex items-start justify-between gap-4 mb-8">
              <h2 
                className="font-serif font-bold text-[#111111]"
                style={{ fontSize: '28px', lineHeight: '1.1' }}
              >
                Our Core Values
              </h2>
              <p 
                className="text-right leading-tight font-normal"
                style={{ 
                  maxWidth: '145px', 
                  fontSize: '9.5px', 
                  color: '#9E7648' 
                }}
              >
                These principles guide every aspect of how we treat our patients and run our clinic.
              </p>
            </div>

            {/* Core Values 4 Card Stack */}
            <div className="space-y-4">
              {/* Card 1: Patient-First Care */}
              <div 
                className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                style={{ border: '1px solid #EBE7DF' }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4"
                  style={{ border: '1px solid #EFECE6', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                >
                  <Heart className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <h3 className="font-serif font-bold text-[#111111] text-[17px] mb-2">
                  Patient-First Care
                </h3>
                <p className="text-[11.5px] leading-relaxed text-[#666666] max-w-[260px]">
                  Every decision is made with the patient's comfort, safety, and well-being in mind.
                </p>
              </div>

              {/* Card 2: Clinical Excellence */}
              <div 
                className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                style={{ border: '1px solid #EBE7DF' }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4"
                  style={{ border: '1px solid #EFECE6', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                >
                  <Award className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <h3 className="font-serif font-bold text-[#111111] text-[17px] mb-2">
                  Clinical Excellence
                </h3>
                <p className="text-[11.5px] leading-relaxed text-[#666666] max-w-[260px]">
                  Staying current with evidence-based dental practices and modern techniques.
                </p>
              </div>

              {/* Card 3: Family-Focused */}
              <div 
                className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                style={{ border: '1px solid #EBE7DF' }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4"
                  style={{ border: '1px solid #EFECE6', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                >
                  <Users className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <h3 className="font-serif font-bold text-[#111111] text-[17px] mb-2">
                  Family-Focused
                </h3>
                <p className="text-[11.5px] leading-relaxed text-[#666666] max-w-[260px]">
                  Serving patients of all ages — from children to seniors — with gentle, tailored care.
                </p>
              </div>

              {/* Card 4: Honest & Transparent */}
              <div 
                className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                style={{ border: '1px solid #EBE7DF' }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4"
                  style={{ border: '1px solid #EFECE6', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                >
                  <ShieldCheck className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <h3 className="font-serif font-bold text-[#111111] text-[17px] mb-2">
                  Honest & Transparent
                </h3>
                <p className="text-[11.5px] leading-relaxed text-[#666666] max-w-[260px]">
                  Clear explanations, honest recommendations, and no unnecessary treatments.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: STATS SECTION (2x2 Grid) */}
          <section 
            className="w-full px-6 py-12"
            style={{ backgroundColor: '#F3EFE9' }}
          >
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div 
                  className="font-serif font-bold flex items-baseline justify-center"
                  style={{ fontSize: '36px', color: '#391361' }}
                >
                  <span>10</span>
                  <span className="text-[#8B5CF6] font-light text-[26px] ml-1.5">+</span>
                </div>
                <div className="text-[11px] font-semibold text-[#111111] mt-1.5">
                  Years of Excellence
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div 
                  className="font-serif font-bold flex items-baseline justify-center"
                  style={{ fontSize: '36px', color: '#391361' }}
                >
                  <span>15</span>
                  <span className="text-[#8B5CF6] font-light text-[26px] ml-1.5">+</span>
                </div>
                <div className="text-[11px] font-semibold text-[#111111] mt-1.5">
                  Happy Smiles
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div 
                  className="font-serif font-bold flex items-baseline justify-center"
                  style={{ fontSize: '36px', color: '#391361' }}
                >
                  <span>30</span>
                  <span className="text-[#8B5CF6] font-light text-[26px] ml-1.5">+</span>
                </div>
                <div className="text-[11px] font-semibold text-[#111111] mt-1.5">
                  Dental Specialists
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <div 
                  className="font-serif font-bold flex items-baseline justify-center"
                  style={{ fontSize: '36px', color: '#391361' }}
                >
                  <span>98%</span>
                </div>
                <div className="text-[11px] font-semibold text-[#111111] mt-1.5">
                  Patient Satisfaction
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: OUR TEAM */}
          <section 
            className="w-full px-6 pt-10 pb-16"
            style={{ backgroundColor: '#F3EFE9' }}
          >
            {/* Header */}
            <div className="mb-8">
              <h4 
                className="font-semibold text-[11px] uppercase mb-2"
                style={{ letterSpacing: '0.2em', color: '#9E7648' }}
              >
                Our Team
              </h4>
              <h2 
                className="font-serif font-bold text-[#111111]"
                style={{ fontSize: '26px', lineHeight: '1.15' }}
              >
                The Experts Behind Your Smile
              </h2>
            </div>

            {/* Doctor Cards */}
            <div className="space-y-9">
              {/* Doctor 1: Dr. James Bennett, DDS */}
              <div className="flex flex-col items-center text-center w-full">
                <div className="w-full aspect-[4/4.3] rounded-2xl overflow-hidden mb-3.5 shadow-sm bg-gray-200">
                  <img 
                    src={getImage('about', 'team-james', getImage('home', 'doctor', h5Image))} 
                    alt="DR. James Bennett ,DDS" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <h3 
                  className="font-serif font-bold mb-1"
                  style={{ fontSize: '16px', color: '#391361' }}
                >
                  DR. James Bennett ,DDS
                </h3>
                <p className="text-[11px] text-[#777777] uppercase tracking-wider font-medium">
                  Lead Dental Surgeon
                </p>
              </div>

              {/* Doctor 2: Amelia Carter */}
              <div className="flex flex-col items-center text-center w-full">
                <div className="w-full aspect-[4/4.3] rounded-2xl overflow-hidden mb-3.5 shadow-sm bg-gray-200">
                  <img 
                    src={getImage('about', 'team-amelia', h12Image)} 
                    alt="Amelia Carter" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <h3 
                  className="font-serif font-bold mb-1"
                  style={{ fontSize: '16px', color: '#391361' }}
                >
                  Amelia Carter
                </h3>
                <p className="text-[11px] text-[#777777] uppercase tracking-wider font-medium">
                  Senior Dental Nurse
                </p>
              </div>
            </div>
          </section>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileAbout;
