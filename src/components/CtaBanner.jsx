import React, { useState } from 'react';
import { Flame, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function CtaBanner({ onOpenBooking }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onOpenBooking(`7-Day Free Trial (Lead: ${email})`);
      setEmail('');
    }
  };

  return (
    <section className="py-20 relative bg-[#07080a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 border border-primary/40 shadow-glow-red-lg p-8 sm:p-14 text-center">
          
          {/* Glowing Radial Circles in card */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/25 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent-orange/25 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-heading uppercase font-bold tracking-widest">
              <Flame className="w-4 h-4 text-primary animate-bounce" />
              <span>LIMITED PASSES AVAILABLE THIS MONTH</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              STOP WAITING. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-accent-orange">
                START YOUR TRANSFORMATION TODAY.
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Claim your 7-day all-access complimentary VIP pass. No credit card required. Experience why FitMaker is rated #1.
            </p>

            {/* Quick Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 bg-dark-950/90 border border-white/20 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary shadow-inner"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-black text-sm uppercase text-white bg-gradient-to-r from-primary via-red-600 to-accent-orange hover:from-primary-hover hover:to-primary shadow-glow-red hover:shadow-glow-red-lg transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Claim Free Pass</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                100% Free 7-Day Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Free 1-on-1 Fitness Scan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                No Commitments
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
