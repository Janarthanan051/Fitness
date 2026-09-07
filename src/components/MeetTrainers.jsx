import React from 'react';
import { trainersData } from '../data/fitnessData';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MeetTrainers({ onOpenBooking }) {
  return (
    <section id="trainers" className="py-20 relative bg-[#07080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
              MEET OUR <span className="text-primary">TRAINERS</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Train with our certified, world-class personal trainers committed to your success.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-dark-800 border border-white/10 text-gray-400 hover:text-white">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg bg-dark-800 border border-white/10 text-gray-400 hover:text-white">
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>

        {/* 4 Trainer Cards Grid matching PNG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="group bg-gradient-to-b from-dark-800 to-dark-900 border border-white/10 hover:border-primary/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-glow-red"
            >
              {/* Photo Area with Dark Red Background */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-red-950/40 to-dark-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-heading font-black text-lg text-white uppercase group-hover:text-primary transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {trainer.role}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking(`Trainer Session with ${trainer.name}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 group-hover:text-primary uppercase"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-10">
          <button
            onClick={() => onOpenBooking('All Trainers Consultation')}
            className="px-7 py-2.5 rounded-full border border-white/20 hover:border-primary font-heading font-bold text-xs uppercase text-gray-200 hover:text-white transition-all inline-flex items-center gap-2"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>

      </div>
    </section>
  );
}
