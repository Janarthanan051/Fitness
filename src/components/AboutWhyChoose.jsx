import React from 'react';
import { whyChooseData } from '../data/fitnessData';
import { Dumbbell, Users, Clock, Utensils, Activity, Award, CheckCircle, Flame, Shield } from 'lucide-react';

const iconMap = {
  Dumbbell: Dumbbell,
  Users: Users,
  Clock: Clock,
  Utensils: Utensils,
  Activity: Activity,
  Award: Award,
};

export default function AboutWhyChoose({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 relative bg-[#0c0d12] border-y border-white/5 overflow-hidden">
      
      {/* Background glowing flare */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>THE FITMAKER ADVANTAGE</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">FITMAKER CLUB</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We bridge the gap between hard work and elite results with world-class facilities, intelligent programming, and a culture of relentless progress.
          </p>
        </div>

        {/* Main Grid: Features on Left, Visual Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 6 Feature Cards (8 Columns on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseData.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Dumbbell;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-dark-800/90 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card group"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg text-white uppercase group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Visual Showcase Card on Right (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-dark-800">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="FitMaker Modern Facility"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 space-y-4">
                <div className="bg-dark-900/90 border border-white/15 rounded-2xl p-4 backdrop-blur-md space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
                    <span>Facility Capacity & Airflow</span>
                    <span className="text-primary font-bold">100% Medical Grade</span>
                  </div>
                  <div className="w-full bg-dark-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-accent-orange h-full w-[94%] rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Equipped with hospital-grade HEPA filtration and biometric contact-less check-ins.
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking('VIP Facility Tour')}
                  className="w-full py-3.5 rounded-xl font-heading font-black text-sm uppercase text-white bg-gradient-to-r from-primary to-accent-orange shadow-glow-red hover:shadow-glow-red-lg transition-all"
                >
                  Book A Free Facility Tour
                </button>
              </div>

            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-white font-heading font-black text-xs uppercase px-4 py-2 rounded-2xl shadow-glow-red border border-white/20">
              #1 Ranked Club 2026
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
