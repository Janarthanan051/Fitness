import React from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import blog1Img from '../assets/blog-1.png';
import blog2Img from '../assets/blog-2.png';
import blog3Img from '../assets/blog-3.png';
import blog4Img from '../assets/blog-4.png';
import blog5Img from '../assets/blog-5.png';

export default function BlogPosts() {
  return (
    <section id="blog" className="py-20 relative bg-[#120a09] border-t border-white/5 overflow-hidden">
      {/* Background Soft Red Ambient Glow matching reference picture media_1788791865925.jpg */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none z-0 rounded-full opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217,10,20,0.2) 0%, rgba(205,78,23,0.06) 50%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row: Fitmaker Blog Posts on Left, Arrow Navigation & Pagination Indicators on Right */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Fitmaker <span className="text-[#D90A14]">Blog Posts</span>
          </h2>

          {/* Navigation Arrows & Pagination Dots stacked matching reference photo */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <button 
                className="w-10 h-10 rounded-xl border border-white/20 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
                aria-label="Previous blog posts"
                title="Previous"
              >
                <ArrowLeft className="w-5 h-5 text-white transition-colors" />
              </button>
              <button 
                className="w-10 h-10 rounded-xl border border-white/20 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
                aria-label="Next blog posts"
                title="Next"
              >
                <ArrowRight className="w-5 h-5 text-white transition-colors" />
              </button>
            </div>

            {/* Pagination Dots/Pills matching media_1788791865925.jpg */}
            <div className="flex items-center gap-1.5 pr-1">
              <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
              <span className="w-5 h-2 rounded-full bg-[#D90A14] block"></span>
              <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
            </div>
          </div>
        </div>

        {/* Subtitle centered below header matching reference photo */}
        <p className="text-center text-gray-400 text-xs sm:text-sm font-medium mb-10 max-w-2xl mx-auto">
          Discover Essential Tips To Maximize Your Workout Results And Reach Your Fitness Goals Faster.
        </p>

        {/* Blog Grid using the 5 exact uploaded picture assets matching media_1788791865925.jpg layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Article (Left 6 Columns): 5 Essential Exercises For Building Muscle */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl transition-all duration-300 hover:border-[#D90A14] h-full min-h-[380px] sm:min-h-[450px] flex flex-col justify-end bg-[#18181c]">
            <img
              src={blog1Img}
              alt="5 Essential Exercises For Building Muscle"
              className="w-full h-full object-fill rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* 4 Smaller Articles Grid (Right 6 Columns, 2x2 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Top-Left Card: The Ultimate Guide To A Balanced Diet */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl transition-all duration-300 hover:border-[#D90A14] aspect-[16/10.5] w-full bg-[#18181c]">
              <img
                src={blog2Img}
                alt="The Ultimate Guide To A Balanced Diet"
                className="w-full h-full object-fill rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Top-Right Card: The Benefits Of HIIT Training */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl transition-all duration-300 hover:border-[#D90A14] aspect-[16/10.5] w-full bg-[#18181c]">
              <img
                src={blog5Img}
                alt="The Benefits Of HIIT Training"
                className="w-full h-full object-fill rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom-Left Card: Home Workouts For Busy People */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl transition-all duration-300 hover:border-[#D90A14] aspect-[16/10.5] w-full bg-[#18181c]">
              <img
                src={blog3Img}
                alt="Home Workouts For Busy People"
                className="w-full h-full object-fill rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom-Right Card: How To Always Stay Motivated */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-xl transition-all duration-300 hover:border-[#D90A14] aspect-[16/10.5] w-full bg-[#18181c]">
              <img
                src={blog4Img}
                alt="How To Always Stay Motivated"
                className="w-full h-full object-fill rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>

        {/* View All Button centered below the grid matching reference image */}
        <div className="text-center mt-10">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#CD4E17]/60 text-white hover:bg-[#D90A14] hover:border-[#D90A14] transition-all text-xs font-semibold shadow-md cursor-pointer group"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D90A14] group-hover:text-white transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
}
