import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import stevenHawardImg from '../assets/steven-haward.png';
import joshOliverImg from '../assets/josh-oliver.png';
import edwardHawleyImg from '../assets/edward-hawley.png';

const testimonialsData = [
  {
    id: 1,
    name: 'Steven Haward',
    role: 'Our Trainer',
    mainImage: stevenHawardImg,
    quote: "I've Been Using Fitmaker For The Past Three Months, And I'm Genuinely Impressed. The Website Is Easy To Navigate, And Everything Is Laid Out Clearly. I Purchased The Premium Plan, And The Personalized Coaching Has Been A Game-Changer For Me. My Coach Is Incredibly Supportive And Always Available To Answer My Questions. The Weekly Video Sessions Keep Me Motivated, And The Custom Meal Plans Have Helped Me Stay On Track With My Goals. Highly Recommended For Anyone Serious About Their Fitness Journey!",
    sideThumbnails: [
      {
        name: 'Josh Oliver',
        image: joshOliverImg,
      },
      {
        name: 'Edward Hawley',
        image: edwardHawleyImg,
      },
    ],
  },
  {
    id: 2,
    name: 'Josh Oliver',
    role: 'Fitness Coach',
    mainImage: joshOliverImg,
    quote: "FitMaker completely elevated my training regimen! The customized nutrition breakdown and high-intensity resistance protocols helped me gain 12 lbs of pure muscle while improving my overall conditioning.",
    sideThumbnails: [
      {
        name: 'Edward Hawley',
        image: edwardHawleyImg,
      },
      {
        name: 'Steven Haward',
        image: stevenHawardImg,
      },
    ],
  },
  {
    id: 3,
    name: 'Edward Hawley',
    role: 'Strength Specialist',
    mainImage: edwardHawleyImg,
    quote: "The personalized check-ins and expert coaching gave me the consistency I was missing for years. Highly recommended for beginners and advanced athletes looking for real transformation!",
    sideThumbnails: [
      {
        name: 'Steven Haward',
        image: stevenHawardImg,
      },
      {
        name: 'Josh Oliver',
        image: joshOliverImg,
      },
    ],
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonial" className="relative py-24 bg-[#120a09] overflow-hidden border-t border-white/5 selection:bg-[#D90A14] selection:text-white">
      {/* Warm reddish ambient radial glow matching website dark theme */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none z-0 rounded-full opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217,10,20,0.2) 0%, rgba(205,78,23,0.06) 50%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            What Our <span className="text-[#D90A14]">Customers Say</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-medium mt-6 max-w-2xl mx-auto">
            At This Part you can See Few Of The Many Positive reviews Of Our Customers.
          </p>
        </div>

        {/* Main Layout matching reference screenshot media_1788790896926.png exactly */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Left Athlete Cutout + Overlapping Dark Red Review Card */}
          <div className="relative flex flex-col md:flex-row items-center w-full lg:w-auto">
            
            {/* Left Trainer Cutout Portrait with Dark Bottom Fade Gradient */}
            <div className="relative w-[280px] sm:w-[330px] h-[390px] sm:h-[440px] flex-shrink-0 flex items-end justify-center overflow-hidden">
              <img
                src={current.mainImage}
                alt={current.name}
                className="w-full h-full object-contain object-bottom"
              />
              {/* Bottom Dark Shadow Fade matching reference photo */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Deep Crimson Review Card */}
            <div className="relative md:-ml-28 mt-4 md:mt-0 z-20 bg-[#4A0005] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-[0_20px_40px_rgba(74,0,5,0.4)] border border-red-900/30 space-y-4">
              
              {/* Header: Name & Role on Left, Solid Red Quotes SVG on Right */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-extrabold text-xl sm:text-2xl font-sans tracking-wide">
                    {current.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">
                    {current.role}
                  </p>
                </div>

                {/* Solid Red Double Quotes SVG */}
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#D90A14] flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 22 25 C 12 25 6 35 6 50 L 6 75 L 44 75 L 44 46 L 24 46 C 24 35 29 29 42 29 L 42 25 Z M 72 25 C 62 25 56 35 56 50 L 56 75 L 94 75 L 94 46 L 74 46 C 74 35 79 29 92 29 L 92 25 Z" />
                </svg>
              </div>

              {/* Review Paragraph */}
              <p className="text-gray-200 text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
                {current.quote}
              </p>
            </div>
          </div>

          {/* Controls + Right Side Vertical Picture Cards */}
          <div className="flex items-center gap-4 mt-6 lg:mt-0">
            
            {/* Side-by-side Navigation Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl border border-white/20 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
                aria-label="Previous review"
                title="Previous review"
              >
                <ArrowLeft className="w-5 h-5 text-white transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl border border-white/20 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
                aria-label="Next review"
                title="Next review"
              >
                <ArrowRight className="w-5 h-5 text-white transition-colors" />
              </button>
            </div>

            {/* Right Side Vertical Cards matching uploaded picture artwork */}
            <div className="flex items-center gap-3">
              {current.sideThumbnails.map((item, index) => (
                <div
                  key={index}
                  onClick={handleNext}
                  className="relative w-[110px] sm:w-[125px] h-[310px] sm:h-[350px] rounded-2xl overflow-hidden cursor-pointer group shadow-xl hover:scale-105 transition-all duration-300 bg-[#3e1608]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
