import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from '../components/MobileNavbar';
import MobileFooter from '../components/MobileFooter';
import { useMedia } from '../context/MediaContext';
import o1 from '../assets/o1.png';
import h5 from '../assets/h5.png';
import o2 from '../assets/o2.png';
import storyCrowns from '../assets/story_clear_aligners.png';
import storyAligners from '../assets/story_dental_crowns.png';
import storyWhitening from '../assets/story_teeth_whitening.png';
import our from '../assets/our.jpg';

const categories = [
  'All',
  'Dental Crowns',
  'Clear Aligners',
  'Teeth Whitening',
  'Smile Makeover',
  'Veneers'
];

const transformations = [
  {
    id: 1,
    title: 'Dental Crowns',
    category: 'Dental Crowns',
    description: 'Precision-crafted crowns that restore the shape, strength, and aesthetics of damaged teeth.',
    image: storyCrowns,
    hasSlider: false
  },
  {
    id: 2,
    title: 'Clear Aligners',
    category: 'Clear Aligners',
    description: 'Discreet, removable aligners that gradually reposition teeth into a healthy, balanced alignment.',
    image: storyAligners,
    hasSlider: true
  },
  {
    id: 3,
    title: 'Teeth Whitening',
    category: 'Teeth Whitening',
    description: 'Professional-grade whitening that brightens enamel by several shades for a naturally luminous result.',
    image: storyWhitening,
    hasSlider: true
  }
];

const MobileOurStory = () => {
  const { getImage } = useMedia();

  const getCardImage = (item) => {
    if (item.category === 'Dental Crowns') return getImage('our-story', 'card-crowns', storyCrowns);
    if (item.category === 'Clear Aligners') return getImage('our-story', 'card-aligners', storyAligners);
    if (item.category === 'Teeth Whitening') return getImage('our-story', 'card-whitening', storyWhitening);
    return item.image;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTransformations = selectedCategory === 'All'
    ? transformations
    : transformations.filter(t => 
        t.category === selectedCategory || 
        (selectedCategory === 'Smile Makeover' && (t.category === 'Dental Crowns' || t.category === 'Clear Aligners')) ||
        (selectedCategory === 'Veneers' && t.category === 'Dental Crowns')
      );

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
              OUR SERVICES
            </h4>
            <h1 
              className="font-serif font-bold tracking-tight text-[#111111]"
              style={{ fontSize: '36px', lineHeight: '1.1' }}
            >
              Every Smile Has<br />a Story.
            </h1>
            <div 
              className="font-serif italic mt-1"
              style={{ fontSize: '36px', lineHeight: '1.1', color: '#9E7648' }}
            >
              We're Here to Make<br />It Beautiful.
            </div>
            <p className="text-[13px] leading-relaxed text-[#4A4A4A] mt-4 max-w-[340px]">
              At our clinic, dentistry is more than treatment. It is about understanding people, building confidence, and creating smiles that make a lasting difference.
            </p>
          </section>

          {/* Hero Image with Arched Top */}
          <div className="px-6 mb-8">
            <div 
              className="w-full overflow-hidden shadow-sm aspect-[4/5] bg-gray-100"
              style={{
                borderTopLeftRadius: '140px',
                borderTopRightRadius: '140px',
                borderBottomLeftRadius: '24px',
                borderBottomRightRadius: '24px'
              }}
            >
              <img 
                src={getImage('our-story', 'hero', o1)} 
                alt="Doctor consulting smiling patient" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* Journey Card */}
          <section className="px-6 mb-10">
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100/50">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#9E7648] mb-3">
                OUR JOURNEY
              </h4>
              <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-4">
                A Journey Built<br />Around Smiles
              </h2>
              <div className="space-y-4 text-[12.5px] text-[#555555] leading-relaxed">
                <p>
                  What started with a simple vision—to provide exceptional dental care with compassion and precision—has grown into a trusted destination for beautiful, healthy smiles.
                </p>
                <p>
                  Over the years, we have combined modern dental technology, experienced professionals, and a patient-first approach to create an environment where every person feels comfortable, cared for, and confident. Our journey continues with one simple goal: <span className="font-bold text-[#111111]">to make every dental experience better, more personal, and more rewarding.</span>
                </p>
              </div>
            </div>
          </section>

          {/* Vertical Timeline */}
          <section className="px-6 mb-14">
            <div className="relative pl-3">
              {/* Vertical line connecting badges */}
              <div 
                className="absolute left-[29px] top-6 bottom-6 w-[1.5px] bg-[#E2D9EE]" 
              />

              <div className="space-y-8 relative z-10">
                {/* 2009 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center font-semibold text-[11px] shrink-0 shadow-sm"
                    style={{ backgroundColor: '#75558F' }}
                  >
                    09
                  </div>
                  <div className="pt-0.5">
                    <span className="text-[11px] font-bold text-[#75558F] block mb-0.5">2009</span>
                    <h3 className="font-serif font-bold text-[17px] text-[#111111] mb-1">
                      Our Beginning
                    </h3>
                    <p className="text-[12px] text-[#555555] leading-relaxed">
                      Founded with a vision to reimagine the dental experience — combining clinical precision with genuine human care.
                    </p>
                  </div>
                </div>

                {/* 2013 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center font-semibold text-[11px] shrink-0 shadow-sm"
                    style={{ backgroundColor: '#75558F' }}
                  >
                    13
                  </div>
                  <div className="pt-0.5">
                    <span className="text-[11px] font-bold text-[#75558F] block mb-0.5">2013</span>
                    <h3 className="font-serif font-bold text-[17px] text-[#111111] mb-1">
                      Growing Together
                    </h3>
                    <p className="text-[12px] text-[#555555] leading-relaxed">
                      Expanded our team and services, building a community of patients who trust us with their most visible confidence.
                    </p>
                  </div>
                </div>

                {/* 2018 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center font-semibold text-[11px] shrink-0 shadow-sm"
                    style={{ backgroundColor: '#75558F' }}
                  >
                    18
                  </div>
                  <div className="pt-0.5">
                    <span className="text-[11px] font-bold text-[#75558F] block mb-0.5">2018</span>
                    <h3 className="font-serif font-bold text-[17px] text-[#111111] mb-1">
                      Modern Dentistry
                    </h3>
                    <p className="text-[12px] text-[#555555] leading-relaxed">
                      Invested in advanced 3D imaging, digital smile design, and minimally invasive techniques.
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center font-semibold text-[11px] shrink-0 shadow-sm"
                    style={{ backgroundColor: '#75558F' }}
                  >
                    24
                  </div>
                  <div className="pt-0.5">
                    <span className="text-[11px] font-bold text-[#75558F] block mb-0.5">2024</span>
                    <h3 className="font-serif font-bold text-[17px] text-[#111111] mb-1">
                      Smiles That Inspire
                    </h3>
                    <p className="text-[12px] text-[#555555] leading-relaxed">
                      A decade and a half of transformations—each one a reminder of why we began.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Core Principles */}
          <section className="px-6 mb-12">
            <div className="text-center mb-6">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#9E7648] mb-2">
                WHAT GUIDES US
              </h4>
              <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight">
                Our Core Principles
              </h2>
            </div>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/50">
                <span className="font-serif font-bold text-[18px] text-[#9E7648] mb-2 block">
                  01
                </span>
                <h3 className="font-bold text-[15px] text-[#111111] mb-2">
                  Patient Comfort First
                </h3>
                <p className="text-[12.5px] text-[#555555] leading-relaxed">
                  We design every aspect of your visit — from the waiting area to the treatment chair — to be as stress-free, pain-free, and comfortable as possible.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/50">
                <span className="font-serif font-bold text-[18px] text-[#9E7648] mb-2 block">
                  02
                </span>
                <h3 className="font-bold text-[15px] text-[#111111] mb-2">
                  Honest & Transparent Care
                </h3>
                <p className="text-[12.5px] text-[#555555] leading-relaxed">
                  No hidden costs, no unnecessary procedures. We explain every recommendation clearly so you are always in complete control of your care.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/50">
                <span className="font-serif font-bold text-[18px] text-[#9E7648] mb-2 block">
                  03
                </span>
                <h3 className="font-bold text-[15px] text-[#111111] mb-2">
                  Modern Clinical Standards
                </h3>
                <p className="text-[12.5px] text-[#555555] leading-relaxed">
                  We invest in modern diagnostic and treatment equipment to ensure accuracy, safety, and the highest standards of hygiene for every visit.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100/50">
                <span className="font-serif font-bold text-[18px] text-[#9E7648] mb-2 block">
                  04
                </span>
                <h3 className="font-bold text-[15px] text-[#111111] mb-2">
                  Community-Rooted Service
                </h3>
                <p className="text-[12.5px] text-[#555555] leading-relaxed">
                  We are proud to serve our local community and build lasting relationships with our patients and their families across generations.
                </p>
              </div>
            </div>
          </section>

          {/* The People Section */}
          <section className="px-6 mb-14">
            <div className="text-center mb-7">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5CF6] mb-2.5">
                THE PEOPLE
              </h4>
              <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-3">
                Behind Every Smile Is<br />a Team That Cares
              </h2>
              <p className="text-[12.5px] text-[#555555] leading-relaxed max-w-[320px] mx-auto">
                From the first consultation to the final result, our team is committed to making every step of your dental journey comfortable and reassuring.
              </p>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-2 gap-3.5 mb-5">
              <div className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col">
                <div className="w-full aspect-[4/4.5] bg-gray-100 overflow-hidden">
                  <img 
                    src={getImage('our-story', 'team-dr-james', h5)} 
                    alt="Dr. James Bennett" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-serif font-bold text-[13px] text-[#111111] leading-snug">
                    Dr. James Bennett
                  </h3>
                  <p className="text-[10px] text-[#75558F] font-medium mt-0.5">
                    Principal Dentist
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col">
                <div className="w-full aspect-[4/4.5] bg-gray-100 overflow-hidden">
                  <img 
                    src={getImage('our-story', 'team-amelia', o2)} 
                    alt="Dr. Sarah Lin" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-serif font-bold text-[13px] text-[#111111] leading-snug">
                    Dr. Sarah Lin
                  </h3>
                  <p className="text-[10px] text-[#75558F] font-medium mt-0.5">
                    Senior Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Value Badges 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#F5F3FF] text-[#6D42A2] rounded-xl px-2.5 py-2.5 text-center flex items-center justify-center">
                <span className="text-[10.5px] font-semibold leading-tight">
                  ✦ Experienced Dental Professionals
                </span>
              </div>
              <div className="bg-[#F5F3FF] text-[#6D42A2] rounded-xl px-2.5 py-2.5 text-center flex items-center justify-center">
                <span className="text-[10.5px] font-semibold leading-tight">
                  ✦ Advanced Treatment Techniques
                </span>
              </div>
              <div className="bg-[#F5F3FF] text-[#6D42A2] rounded-xl px-2.5 py-2.5 text-center flex items-center justify-center">
                <span className="text-[10.5px] font-semibold leading-tight">
                  ✦ Personalized Treatment Plans
                </span>
              </div>
              <div className="bg-[#F5F3FF] text-[#6D42A2] rounded-xl px-2.5 py-2.5 text-center flex items-center justify-center">
                <span className="text-[10.5px] font-semibold leading-tight">
                  ✦ Patient-Centered Care
                </span>
              </div>
            </div>
          </section>

          {/* NEW SECTION 1: SMILE TRANSFORMATIONS */}
          <section className="px-6 mb-12">
            <div className="mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5CF6] mb-3">
                SMILE TRANSFORMATIONS
              </h4>
              <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight mb-2">
                Real Stories,<br />
                Real Transformations.
              </h2>
              <p className="text-[11.5px] text-[#666666] leading-relaxed max-w-[320px]">
                Every beautiful smile represents a unique journey — from restored confidence to renewed happiness.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#1E1B26] text-white shadow-xs'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/80'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Transformations Cards Stack */}
            <div className="space-y-5">
              {filteredTransformations.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img 
                      src={getCardImage(item)} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    {item.hasSlider && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md border border-purple-200 flex items-center justify-center text-[#75558F]">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col">
                    <h3 className="font-bold text-[15px] text-[#111111] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[11.5px] text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inspired Callout */}
            <div className="text-center pt-8 pb-2 flex flex-col items-center">
              <h3 className="font-serif font-bold text-[19px] text-[#111111] mb-1.5">
                Inspired by These Transformations?
              </h3>
              <p className="text-[12px] text-[#666666] mb-6">
                Your smile story could be next.
              </p>
              <Link
                to="/mobile/book-appointment"
                className="w-full py-3.5 rounded-full text-white text-[12px] font-bold tracking-wider uppercase text-center shadow-md transition-colors hover:bg-[#2A114B]"
                style={{ backgroundColor: '#391361' }}
              >
                START YOUR SMILE JOURNEY
              </Link>
            </div>
          </section>

          {/* NEW SECTION 2: OPERATORY HERO BANNER ("More Than Just a Treatment") */}
          <section className="relative w-full overflow-hidden my-6" style={{ minHeight: '440px' }}>
            <img 
              src={getImage('our-story', 'operatory-banner', our)} 
              alt="Modern dental operatory" 
              className="absolute inset-0 w-full h-full object-cover" 
              style={{ objectPosition: 'center' }}
            />
            {/* Dark gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.68) 55%, rgba(0,0,0,0.4) 100%)'
              }}
            />

            <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[440px] text-white">
              <h4 className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#C4B5FD] mb-2.5">
                EVERY PATIENT HAS A STORY
              </h4>
              <h2 className="font-serif font-bold text-[28px] leading-[1.15] mb-4 text-white">
                More Than<br />
                Just a Treatment
              </h2>
              <p className="text-[12px] text-white/90 leading-relaxed mb-3 font-normal">
                Behind every treatment is a person, a concern, a decision, and a reason to smile again.
              </p>
              <p className="text-[12px] text-white/80 leading-relaxed font-normal">
                We believe the best results are not just visible in a photograph — they are felt in the confidence that follows.
              </p>
            </div>
          </section>

          {/* NEW SECTION 3: OUR APPROACH */}
          <section className="px-6 pt-4 mb-14">
            <div className="text-center mb-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9E7648] mb-2">
                OUR APPROACH
              </h4>
              <h2 className="font-serif font-bold text-[24px] text-[#111111] leading-tight">
                A More Personal<br />Approach to Dentistry
              </h2>
            </div>

            <div className="space-y-4">
              {/* Step 1: Listen */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100/60">
                <span className="text-[26px] font-bold text-[#C4B5FD] block mb-2 leading-none">
                  01
                </span>
                <h3 className="font-serif font-bold text-[18px] text-[#111111] mb-1.5">
                  Listen
                </h3>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  We understand your concerns, expectations, and goals.
                </p>
              </div>

              {/* Step 2: Plan */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100/60">
                <span className="text-[26px] font-bold text-[#C4B5FD] block mb-2 leading-none">
                  02
                </span>
                <h3 className="font-serif font-bold text-[18px] text-[#111111] mb-1.5">
                  Plan
                </h3>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  We create a personalized treatment plan based on your needs.
                </p>
              </div>

              {/* Step 3: Transform */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100/60">
                <span className="text-[26px] font-bold text-[#C4B5FD] block mb-2 leading-none">
                  03
                </span>
                <h3 className="font-serif font-bold text-[18px] text-[#111111] mb-1.5">
                  Transform
                </h3>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  We combine expertise and modern technology to deliver precise treatment.
                </p>
              </div>

              {/* Step 4: Celebrate */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100/60">
                <span className="text-[26px] font-bold text-[#C4B5FD] block mb-2 leading-none">
                  04
                </span>
                <h3 className="font-serif font-bold text-[18px] text-[#111111] mb-1.5">
                  Celebrate
                </h3>
                <p className="text-[12px] text-[#555555] leading-relaxed">
                  We help you leave with a healthier, more confident smile.
                </p>
              </div>
            </div>
          </section>

          {/* NEW SECTION 4: FINAL CTA ("Your Best Smile Is Waiting.") */}
          <section className="px-6 pt-2 pb-14 text-center flex flex-col items-center">
            <p className="text-[11px] font-medium text-gray-500 tracking-[0.15em] uppercase mb-2.5">
              Your Journey Begins Here
            </p>
            <h2 className="font-serif font-bold italic text-[28px] text-[#111111] leading-tight mb-3">
              Your Best Smile<br />
              Is Waiting.
            </h2>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-6 max-w-[260px] mx-auto">
              Begin your journey toward a healthier, more confident smile.
            </p>
            <Link
              to="/mobile/book-appointment"
              className="w-full py-3.5 rounded-full text-white text-[13px] font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#2A114B] transition-colors"
              style={{ backgroundColor: '#391361' }}
            >
              <span>Book Appointment</span>
              <span className="text-sm">→</span>
            </Link>
          </section>
        </div>

        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileOurStory;
