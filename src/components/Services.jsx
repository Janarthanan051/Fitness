import React from 'react';
import { servicesData } from '../data/fitnessData';
import { ArrowRight } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 relative bg-[#07080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching PNG */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Achieve Your Fitness Goals with Diverse Workouts Tailored to Elevate Your Strength and Health.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-gradient-to-b from-dark-800 to-dark-900 border border-white/10 hover:border-primary/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-glow-red"
            >
              {/* Photo Area */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
              </div>

              {/* Text content with red glow text & description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-lg text-primary uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking(`Service: ${item.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 group-hover:text-primary transition-colors uppercase pt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
