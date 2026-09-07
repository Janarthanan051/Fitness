import React from 'react';
import { heroData } from '../data/fitnessData';

export default function Hero({ onOpenBooking, onScrollToServices }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden flex flex-col justify-center bg-[#0e0f13]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-[#e50914]/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#ff6b00]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main 2-Column Hero Layout matching media_1788189388050.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column: Exact Typography and Alignment */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-1">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-normal">
                Achive Your
              </h2>
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#ff3823] leading-none drop-shadow-md">
                FITNESS GOALS
              </h1>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-normal">
                With FitMaker
              </h2>
            </div>

            {/* Exact Quote Paragraph from screenshot */}
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed mx-auto lg:mx-0 font-normal">
              "Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?"
            </p>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => onOpenBooking('Start Your Journey')}
                className="w-full sm:w-auto px-9 py-3.5 rounded-full font-heading font-bold text-xs uppercase text-white bg-[#e50914] hover:bg-red-600 shadow-glow-red hover:shadow-glow-red-lg transition-all duration-300"
              >
                Start Your Journey
              </button>

              <button
                onClick={onScrollToServices}
                className="w-full sm:w-auto px-9 py-3.5 rounded-full font-heading font-bold text-xs uppercase text-[#f59e0b] hover:text-white bg-[#14151c]/80 border border-[#f59e0b]/60 hover:border-[#f59e0b] hover:bg-[#1a1b22] transition-all duration-300"
              >
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right Column: Exact Athlete, Glow Backdrop & 4 Floating Stat Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Big Orange-Red Glowing Backdrop Circle */}
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#e50914] via-[#ff5500] to-[#e50914] opacity-90 blur-xl -z-10"></div>
            
            {/* Floating Top-Left Orange Ambient Orb matching screenshot */}
            <div className="absolute top-2 left-6 sm:left-14 w-12 h-12 rounded-full bg-[#ff6b00]/70 blur-md -z-10 animate-pulse-slow"></div>

            {/* Main Athlete Photo holding Dumbbell */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[440px] sm:h-[500px] flex items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=90"
                alt="FitMaker Athlete Trainer with Dumbbell"
                className="w-full h-full object-cover object-top filter contrast-110 drop-shadow-2xl"
              />
            </div>

            {/* Floating Badge 1: Top Left -> + 80 Coaches */}
            <div className="absolute top-20 left-0 sm:left-4 bg-[#16171e]/95 border border-[#e50914]/50 rounded-2xl px-5 py-2.5 backdrop-blur-md shadow-2xl z-10 text-center min-w-[100px]">
              <div className="font-heading font-black text-white text-lg leading-tight">+ 80</div>
              <div className="text-[10px] text-gray-400 font-medium">Coaches</div>
            </div>

            {/* Floating Badge 2: Top Right -> + 1300 Positive Reviews */}
            <div className="absolute top-12 right-0 sm:right-4 bg-[#16171e]/95 border border-[#e50914]/50 rounded-2xl px-5 py-2.5 backdrop-blur-md shadow-2xl z-10 text-center min-w-[120px]">
              <div className="font-heading font-black text-white text-lg leading-tight">+ 1300</div>
              <div className="text-[10px] text-gray-400 font-medium">Positive Reviews</div>
            </div>

            {/* Floating Badge 3: Bottom Left -> + 1000 Fitness Videos */}
            <div className="absolute bottom-4 left-0 sm:left-6 bg-[#16171e]/95 border border-[#e50914]/50 rounded-2xl px-5 py-2.5 backdrop-blur-md shadow-2xl z-10 text-center min-w-[110px]">
              <div className="font-heading font-black text-white text-lg leading-tight">+ 1000</div>
              <div className="text-[10px] text-gray-400 font-medium">Fitness Videos</div>
            </div>

            {/* Floating Badge 4: Bottom Right -> + 1500 Trainers */}
            <div className="absolute bottom-4 right-0 sm:right-4 bg-[#16171e]/95 border border-[#e50914]/50 rounded-2xl px-5 py-2.5 backdrop-blur-md shadow-2xl z-10 text-center min-w-[110px]">
              <div className="font-heading font-black text-white text-lg leading-tight">+ 1500</div>
              <div className="text-[10px] text-gray-400 font-medium">Trainers</div>
            </div>

          </div>

        </div>

        {/* Bottom 4-Column Stats Strip matching PNG */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {heroData.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#ff3823]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-200">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
