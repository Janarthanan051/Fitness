import React from 'react';
import { ArrowNavButtons } from './ui/UIComponents';
import trainer1Img from '../assets/trainer-1.jpg';
import trainer2Img from '../assets/trainer-2.jpg';
import trainer3Img from '../assets/trainer-3.png';
import trainer4Img from '../assets/trainer-4.jpg';

const trainersList = [
  {
    id: 1,
    name: 'Sam Cole',
    role: 'Personal Trainer',
    image: trainer1Img,
  },
  {
    id: 2,
    name: 'Michael Harris',
    role: 'Personal Trainer',
    image: trainer2Img,
  },
  {
    id: 3,
    name: 'John Anderson',
    role: 'Personal Trainer',
    image: trainer3Img,
  },
  {
    id: 4,
    name: 'Tom Blake',
    role: 'Personal Trainer',
    image: trainer4Img,
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 relative bg-[#120a09] overflow-hidden border-t border-white/5">
      {/* Background Soft Red Radial Glow matching site theme */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] pointer-events-none z-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217,10,20,0.2) 0%, rgba(205,78,23,0.06) 50%, transparent 75%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row: Title on Left, Carousel Navigation Arrows on Right */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Meet Our <span className="text-[#D90A14]">Trainers</span>
          </h2>

          <ArrowNavButtons onPrev={() => {}} onNext={() => {}} />
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs sm:text-sm font-medium mb-10 max-w-2xl text-center mx-auto">
          Discover our certified master trainers dedicated to guiding every step of your fitness transformation.
        </p>

        {/* 4 Trainer Cards Grid in Exact 1 to 4 Order (Left to Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersList.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative bg-[#18181c] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-[#D90A14] shadow-xl flex flex-col justify-between"
            >
              {/* Photo Frame fitting the box perfectly */}
              <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-black/60">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181c] via-transparent to-transparent opacity-90" />
              </div>

              {/* Trainer Info Card Body */}
              <div className="p-5 relative z-10 flex flex-col justify-between bg-[#18181c] space-y-2">
                <div>
                  <h3 className="text-white font-extrabold text-lg uppercase tracking-wide group-hover:text-[#D90A14] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {trainer.role}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-start text-xs font-semibold text-[#D90A14] group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <span className="ml-1 text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
