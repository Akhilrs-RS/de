import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../context/MediaContext';
import o1 from '../assets/o1.png';
import h5 from '../assets/h5.png';
import o2 from '../assets/o2.png';
import storyCrowns from '../assets/story_dental_crowns.png';
import storyAligners from '../assets/story_clear_aligners.png';
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
    image: storyCrowns
  },
  {
    id: 2,
    title: 'Clear Aligners',
    category: 'Clear Aligners',
    description: 'Discreet, removable aligners that gradually reposition teeth into a healthy, balanced alignment.',
    image: storyAligners
  },
  {
    id: 3,
    title: 'Teeth Whitening',
    category: 'Teeth Whitening',
    description: 'Professional-grade whitening that brightens enamel by several shades for a naturally luminous result.',
    image: storyWhitening
  },
  {
    id: 4,
    title: 'Teeth Whitening',
    category: 'Teeth Whitening',
    description: 'Professional-grade whitening that brightens enamel by several shades for a naturally luminous result.',
    image: storyWhitening
  },
  {
    id: 5,
    title: 'Dental Crowns',
    category: 'Dental Crowns',
    description: 'Precision-crafted crowns that restore the shape, strength, and aesthetics of damaged teeth.',
    image: storyCrowns
  },
  {
    id: 6,
    title: 'Clear Aligners',
    category: 'Clear Aligners',
    description: 'Discreet, removable aligners that gradually reposition teeth into a healthy, balanced alignment.',
    image: storyAligners
  }
];

export default function OurStory() {
  const { getImage } = useMedia();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getTransformationImage = (item) => {
    if (item.category === 'Dental Crowns') return getImage('our-story', 'card-crowns', storyCrowns);
    if (item.category === 'Clear Aligners') return getImage('our-story', 'card-aligners', storyAligners);
    if (item.category === 'Teeth Whitening') return getImage('our-story', 'card-whitening', storyWhitening);
    return item.image;
  };

  const filteredTransformations = selectedCategory === 'All'
    ? transformations
    : transformations.filter(t => 
        t.category === selectedCategory || 
        (selectedCategory === 'Smile Makeover' && (t.category === 'Dental Crowns' || t.category === 'Clear Aligners')) ||
        (selectedCategory === 'Veneers' && t.category === 'Dental Crowns')
      );

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full pt-12 pb-24 md:pt-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:pr-10 lg:pr-20">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase">
              OUR STORY
            </p>
            <h1 className="text-[3rem] md:text-5xl lg:text-[4rem] font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
              Every Smile Has<br />
              a Story.<br />
              <span className="text-[#3b1866] italic font-normal">We're Here to<br />Make It Beautiful.</span>
            </h1>
            <p className="text-gray-600 font-sans text-sm md:text-base leading-[1.8] pt-2 max-w-sm">
              At our clinic, dentistry is more than treatment. It is about understanding people, building confidence, and creating smiles that make a lasting difference.
            </p>
          </div>

          {/* Right Column - Large Image */}
          <div className="relative w-full flex justify-end">
            <div className="w-full max-w-[450px] lg:max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
              <img 
                src={getImage('our-story', 'hero', o1)} 
                alt="Our Story" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. Timeline / Journey Section */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Journey Text Card */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase mb-6">
              OUR JOURNEY
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-8">
              A Journey Built<br />Around Smiles
            </h2>
            <div className="space-y-6 font-sans text-sm text-gray-600 leading-[1.8]">
              <p>
                What started with a simple vision—to provide exceptional dental care with compassion and precision—has grown into a trusted destination for beautiful, healthy smiles.
              </p>
              <p>
                Over the years, we have combined modern dental technology, experienced professionals, and a patient-first approach to create an environment where every person feels comfortable, cared for, and confident. Our journey continues with one simple goal: <span className="font-bold text-gray-900">to make every dental experience better, more personal, and more rewarding.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative pt-6 md:pt-10 lg:pl-10">
            {/* Vertical Line */}
            <div className="absolute left-[1.15rem] lg:left-[3.65rem] top-8 bottom-8 w-px bg-[#E5E7EB]"></div>

            <div className="space-y-12 relative">
              
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  09
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2009</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Our Beginning</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    Founded with a vision to reimagine the dental experience — combining clinical precision with genuine human care.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#6D42A2] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  17
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2017</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Growing Together</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    Expanded our team and services, building a community of patients who trust us with their most visible confidence.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#52297A] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  18
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2018</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Modern Dentistry</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    Invested in advanced 3D imaging, digital smile design, and minimally invasive techniques.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#3b1866] text-white flex items-center justify-center font-sans font-semibold text-xs relative z-10 shadow-sm">
                  24
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs font-sans font-bold text-[#8B5CF6] mb-1">2024</span>
                  <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Smiles That Inspire</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
                    A decade and a half of transformations—each one a reminder of why we began.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* 3. The Team Section */}
      <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase mb-6">
              THE PEOPLE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Behind Every Smile Is<br />
              a Team That Cares
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              From the first consultation to the final result, our team is committed to making every step of your dental journey comfortable and reassuring.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
            
            {/* Dr. James Bennett */}
            <div className="bg-[#FAF8F3] rounded-3xl overflow-hidden flex flex-col shadow-sm">
              <div className="w-full aspect-[4/3] bg-gray-200">
                <img 
                  src={getImage('our-story', 'team-dr-james', h5)} 
                  alt="Dr. James Bennett" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 pb-10 text-center">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">DR. James Bennett, DDS</h3>
                <p className="font-sans text-xs text-[#8B5CF6] font-medium">Principal Dentist & Smile Designer</p>
              </div>
            </div>

            {/* Amelia Carter */}
            <div className="bg-[#FAF8F3] rounded-3xl overflow-hidden flex flex-col shadow-sm">
              <div className="w-full aspect-[4/3] bg-gray-200">
                <img 
                  src={getImage('our-story', 'team-amelia', o2)} 
                  alt="Amelia Carter" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 pb-10 text-center">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">Amelia Carter</h3>
                <p className="font-sans text-xs text-[#8B5CF6] font-medium">Senior Dental Nurse</p>
              </div>
            </div>

          </div>

          {/* Badges Row */}
          <div className="w-full flex flex-wrap justify-center gap-4">
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Experienced Dental Professionals</span>
            </div>
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Advanced Treatment Techniques</span>
            </div>
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Personalized Treatment Plans</span>
            </div>
            <div className="bg-[#F5F3FF] text-[#6D42A2] px-6 py-3 rounded-xl font-sans text-xs font-semibold flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D42A2]"></div>
              <span>Patient-Centered Care</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Real Stories, Real Transformations Section */}
      <section className="w-full bg-[#FAF8F3] py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex flex-col space-y-4">
              <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase">
                SMILE TRANSFORMATIONS
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.15]">
                Real Stories,<br />
                Real Transformations.
              </h2>
            </div>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
              Every beautiful smile represents a unique journey — from restored confidence to renewed happiness.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#1E1B26] text-white shadow-sm'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Transformation Cards Grid - Exactly Matching Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransformations.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Before / After Split Image Container */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 select-none">
                  <img
                    src={getTransformationImage(item)}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-sans font-bold text-gray-900 text-base md:text-lg mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Below Grid */}
          <div className="mt-16 text-center flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-2">
              Inspired by These Transformations?
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-500 mb-6">
              Start your smile transformation journey today.
            </p>
            <Link
              to="/book-appointment"
              className="inline-flex items-center space-x-2 bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-xs font-medium hover:bg-[#2A114B] transition-all shadow-sm"
            >
              <span>Start Your Journey Today</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Operatory Hero Banner: "More Than Just a Treatment" */}
      <section className="relative w-full min-h-[420px] md:min-h-[500px] flex items-center overflow-hidden">
        <img 
          src={getImage('our-story', 'operatory-banner', our)} 
          alt="Modern Dental Operatory" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-16 md:py-24">
          <div className="max-w-xl text-white space-y-4">
            <p className="text-xs font-sans font-bold text-[#A78BFA] tracking-[0.2em] uppercase">
              AT OUR DENTAL CLINIC
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-[1.15]">
              More Than<br />
              Just a Treatment
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
              Where modern dental technology meets compassion and comfort every single day.
            </p>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              We provide focused care that makes your visit calm, predictable, and reassuring from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Our Approach: "A More Personal Approach to Dentistry" */}
      <section className="w-full bg-[#FAF8F3] pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-sans font-bold text-[#8B5CF6] tracking-[0.2em] uppercase mb-3">
              OUR APPROACH
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              A More Personal<br />Approach to Dentistry
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1: Listen */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-sm font-sans font-bold text-[#8B5CF6] block mb-4">01</span>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">Listen</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  We take the time to understand your needs, concerns, and personal oral health goals.
                </p>
              </div>
            </div>

            {/* Step 2: Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-sm font-sans font-bold text-[#8B5CF6] block mb-4">02</span>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">Plan</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  We craft a personalized treatment roadmap designed specifically for your smile and comfort.
                </p>
              </div>
            </div>

            {/* Step 3: Transform */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-sm font-sans font-bold text-[#8B5CF6] block mb-4">03</span>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">Transform</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Advanced procedures and artistic techniques to deliver natural, long-lasting aesthetic results.
                </p>
              </div>
            </div>

            {/* Step 4: Celebrate */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-sm font-sans font-bold text-[#8B5CF6] block mb-4">04</span>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">Celebrate</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Enjoy a healthy, radiant smile that gives you genuine everyday confidence in every moment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Final Call to Action: "Your Best Smile Is Waiting." */}
      <section className="w-full bg-[#FAF8F3] pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <p className="text-xs font-sans font-medium text-gray-500 tracking-[0.2em] uppercase mb-4">
            Your Journey Begins Here
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-serif font-bold text-gray-900 leading-tight mb-4">
            Your Best Smile<br />
            Is Waiting.
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed mb-8 max-w-md">
            Begin your journey toward a healthier, more confident smile.
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center space-x-2 bg-[#3b1866] text-white px-8 py-3.5 rounded-full text-xs font-semibold hover:bg-[#2A114B] transition-all shadow-sm"
          >
            <span>Book Appointment</span>
            <span>→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
