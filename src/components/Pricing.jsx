import React, { useState } from 'react';
import { pricingData } from '../data/fitnessData';
import { Check, X, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-24 relative bg-[#07080a]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">MEMBERSHIP PLAN</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            No hidden charges. No lock-in penalties. Pick the tier that fits your ambition and unlock world-class equipment and guidance.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-dark-800 p-1.5 rounded-full border border-white/10 flex items-center gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-heading font-bold text-xs uppercase transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-white shadow-glow-red'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-heading font-bold text-xs uppercase flex items-center gap-2 transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-primary text-white shadow-glow-red'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2 py-0.5 rounded-full bg-accent-orange text-white text-[10px] font-black uppercase">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {pricingData.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-dark-700 via-dark-800 to-dark-900 border-2 border-primary shadow-glow-red-lg -translate-y-2 lg:-translate-y-4'
                    : 'bg-dark-800/90 border border-white/10 hover:border-white/20 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent-orange text-white font-heading font-black text-xs uppercase tracking-wider shadow-glow-red">
                    ★ {plan.badgeText} ★
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tag */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-black text-2xl text-white uppercase">
                        {plan.name}
                      </h3>
                      {!plan.popular && (
                        <span className="text-[11px] font-bold text-gray-400 bg-dark-900 px-2.5 py-0.5 rounded-md border border-white/5 uppercase">
                          {plan.badgeText}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 pb-4 border-y border-white/10 flex items-baseline gap-2">
                    <span className="font-heading font-black text-5xl sm:text-6xl text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-gray-400 text-xs font-semibold uppercase">
                      / month {billingCycle === 'yearly' ? '(Billed Annually)' : ''}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Included With {plan.name}:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}

                      {/* Excluded items */}
                      {plan.excluded.map((ex, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500 line-through">
                          <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-gray-600" />
                          </div>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-6 border-t border-white/10">
                  <button
                    onClick={() => onOpenBooking(`${plan.name} (${billingCycle})`)}
                    className={`w-full py-4 rounded-2xl font-heading font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary via-red-600 to-accent-orange text-white shadow-glow-red hover:shadow-glow-red-lg hover:-translate-y-0.5'
                        : 'bg-dark-700 hover:bg-primary text-gray-200 hover:text-white border border-white/10 hover:border-transparent'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
