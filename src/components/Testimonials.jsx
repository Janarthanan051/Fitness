import React, { useState } from 'react';
import { testimonialsData } from '../data/fitnessData';
import { Star, ChevronLeft, ChevronRight, Quote, Trophy } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-[#07080a] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-accent-orange/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>REAL TRANSFORMATION STORIES</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">MEMBERS ACHIEVE</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real people. Relentless effort. Tangible transformations. Hear how FitMaker became their ultimate fitness home.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* User Avatar & Transformation Pill (4 Columns) */}
            <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start space-y-4">
              <div className="relative">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-2 border-primary shadow-glow-red"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-xl shadow-md">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

              <div>
                <h3 className="font-heading font-black text-xl text-white uppercase">
                  {current.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">{current.role}</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange text-xs font-bold font-mono">
                  {current.change}
                </div>
              </div>
            </div>

            {/* Testimonial Quote & Star Rating (8 Columns) */}
            <div className="md:col-span-8 space-y-6">
              
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-200 text-base sm:text-xl font-normal leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              {/* Navigation controls */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-8 bg-primary shadow-glow-red' : 'w-2 bg-dark-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-dark-700 hover:bg-primary border border-white/10 hover:border-transparent text-gray-300 hover:text-white transition-all shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-dark-700 hover:bg-primary border border-white/10 hover:border-transparent text-gray-300 hover:text-white transition-all shadow-sm"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
