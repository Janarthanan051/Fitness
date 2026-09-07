import React, { useState } from 'react';
import { plansData } from '../data/fitnessData';
import { Check } from 'lucide-react';

export default function OurPlans({ onOpenBooking }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="plans" className="py-20 relative bg-[#07080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            OUR <span className="text-primary">PLANS</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Choose the Perfect Plan for Your Fitness Journey with Flexible Pricing and Tailored Packages.
          </p>

          {/* Toggle pill matching PNG */}
          <div className="pt-3 flex items-center justify-center">
            <div className="bg-dark-800 p-1 rounded-full border border-white/10 flex items-center">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={`px-5 py-1.5 rounded-full text-xs font-heading font-bold uppercase transition-all ${
                  !isYearly ? 'bg-primary text-white shadow-glow-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={`px-5 py-1.5 rounded-full text-xs font-heading font-bold uppercase transition-all ${
                  isYearly ? 'bg-primary text-white shadow-glow-red' : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* 3 Plans Grid matching PNG */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plansData.map((plan) => {
            const rawPrice = parseInt(plan.price, 10);
            const calculatedPrice = isYearly ? Math.round(rawPrice * 0.8) : rawPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-dark-900 border-2 border-primary shadow-glow-red'
                    : 'bg-dark-800/80 border border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-5">
                  
                  {/* Plan Name */}
                  <div className="text-center pb-2 border-b border-white/10">
                    <h3 className="font-heading font-black text-2xl text-white uppercase">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed text-center">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price Tag */}
                  <div className="text-center pt-4">
                    <span className="font-heading font-black text-4xl text-white">
                      ${calculatedPrice}
                    </span>
                    <span className="text-gray-400 text-xs font-medium ml-1">/Mo</span>
                  </div>

                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenBooking(`${plan.name} (${isYearly ? 'Yearly' : 'Monthly'})`)}
                    className="w-full py-3 rounded-full font-heading font-bold text-xs uppercase text-white bg-primary hover:bg-primary-hover shadow-glow-red transition-all"
                  >
                    Choose This Plan
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
