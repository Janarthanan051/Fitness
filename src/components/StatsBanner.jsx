import React from 'react';
import { heroData } from '../data/fitnessData';
import { TrendingUp, Award, Users, ShieldCheck } from 'lucide-react';

export default function StatsBanner() {
  const statIcons = [
    <ShieldCheck className="w-6 h-6 text-primary" key="1" />,
    <Award className="w-6 h-6 text-accent-orange" key="2" />,
    <Users className="w-6 h-6 text-primary" key="3" />,
    <TrendingUp className="w-6 h-6 text-accent-orange" key="4" />,
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16">
      <div className="bg-gradient-to-r from-dark-800 via-dark-700 to-dark-800 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {heroData.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 ${
                idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
              } group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-dark-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-md">
                {statIcons[idx % statIcons.length]}
              </div>
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
