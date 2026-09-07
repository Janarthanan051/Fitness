import React, { useState } from 'react';
import Navbar from './components/Navbar';
import heroTrainerImg from './assets/hero-trainer.png';
import serviceLosingWeight from './assets/service-losing-weight.jpg';
import serviceBuildingMuscle from './assets/service-building-muscle.jpg';
import serviceTrainingHome from './assets/service-training-home.jpg';
import serviceGymPlan from './assets/service-gym-plan.jpg';
import CustomerReviews from './components/CustomerReviews';
import FitnessTools from './components/FitnessTools';
import Trainers from './components/Trainers';
import BlogPosts from './components/BlogPosts';
import CommunitySignup from './components/CommunitySignup';
import Footer from './components/Footer';

/**
 * Main Application Root Component
 * Modular layout composing Hero, Services, Pricing Plans, Fitness Tools, Testimonials, Trainers, Blog, Community Registration, and Footer.
 */
export default function App() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#120a09] text-[#f5ede9] min-h-screen font-sans selection:bg-[#e8291c] selection:text-white relative overflow-x-hidden">
      {/* Page Ambient Glow Backdrop */}
      <div className="fixed top-12 -left-36 w-[550px] h-[550px] rounded-full bg-[#ff7a1a]/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-20 -right-36 w-[650px] h-[650px] rounded-full bg-[#e8291c]/20 blur-[130px] pointer-events-none z-0"></div>

      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 lg:pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-visible" id="home">
        <div className="hero-glow"></div>
        <div className="hero-glow-left"></div>

        {/* Left: Headline & Call To Action Buttons */}
        <div className="flex-1 space-y-6 text-center z-10 flex flex-col items-center">
          <div className="text-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-vazir tracking-tight block text-center mb-1">
              Achieve Your
            </span>
            <h1 className="font-gagalin text-[42px] sm:text-[58px] md:text-[68px] lg:text-[76px] font-black tracking-wider grad-text uppercase leading-none drop-shadow-md my-2.5 text-center whitespace-nowrap">
              FITNESS GOALS
            </h1>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-vazir tracking-tight block text-center mt-1">
              With FitMaker
            </span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto text-center font-vazir">
            Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
            <a 
              href="#plans" 
              className="px-8 py-3.5 rounded-full bg-[#D90A14] hover:bg-[#C50912] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(217,10,20,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 font-vazir"
            >
              Start Your Journey
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 rounded-full border-2 border-[#CD4E17] text-[#CD4E17] hover:bg-[#CD4E17]/10 font-semibold text-sm transition-all duration-300 font-vazir"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right: Hero Trainer Graphic with Stat Badges */}
        <div className="relative flex-1 flex items-center justify-center min-w-[320px] lg:min-w-[500px] h-[520px]">
          <div className="absolute top-[2%] left-[20%] w-24 h-24 rounded-full bg-[#CD4E17]/60 blur-xl pointer-events-none"></div>
          <div className="absolute bottom-[2%] right-[10%] w-20 h-20 rounded-full bg-[#D90A14]/70 blur-lg pointer-events-none"></div>

          {/* Glowing Red Backdrop Circle */}
          <div className="absolute w-[380px] sm:w-[430px] h-[380px] sm:h-[430px] rounded-full bg-gradient-to-br from-[#E00A15] via-[#A8080F] to-[#590307] shadow-[0_0_70px_rgba(217,10,20,0.65)] overflow-hidden">
          </div>

          {/* Cutout Trainer Graphic */}
          <img 
            src={heroTrainerImg} 
            alt="FitMaker Trainer" 
            className="relative z-10 w-[420px] sm:w-[470px] max-w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]" 
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"; }}
          />

          {/* Floating Stat Badges */}
          <div className="absolute top-[20%] left-[0%] sm:left-[2%] z-20 bg-[#161618]/95 border border-[#D90A14]/40 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_8px_20px_rgba(217,10,20,0.25)] flex flex-col items-center justify-center min-w-[120px]">
            <span className="text-white text-base font-bold tracking-tight">+ 80</span>
            <span className="text-gray-400 text-[11px] font-medium tracking-normal mt-0.5">Coaches</span>
          </div>

          <div className="absolute top-[12%] right-[0%] sm:right-[2%] z-20 bg-[#161618]/95 border border-[#D90A14]/40 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_8px_20px_rgba(217,10,20,0.25)] flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-white text-base font-bold tracking-tight">+ 1300</span>
            <span className="text-gray-400 text-[11px] font-medium tracking-normal mt-0.5">Positive Reviews</span>
          </div>

          <div className="absolute bottom-[6%] left-[4%] sm:left-[8%] z-20 bg-[#161618]/95 border border-[#D90A14]/40 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_8px_20px_rgba(217,10,20,0.25)] flex flex-col items-center justify-center min-w-[130px]">
            <span className="text-white text-base font-bold tracking-tight">+ 1000</span>
            <span className="text-gray-400 text-[11px] font-medium tracking-normal mt-0.5">Workout Videos</span>
          </div>

          <div className="absolute bottom-[10%] right-[0%] sm:right-[4%] z-20 bg-[#161618]/95 border border-[#D90A14]/40 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-[0_8px_20px_rgba(217,10,20,0.25)] flex flex-col items-center justify-center min-w-[120px]">
            <span className="text-white text-base font-bold tracking-tight">+ 1500</span>
            <span className="text-gray-400 text-[11px] font-medium tracking-normal mt-0.5">Trainers</span>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="stats-bar">
        <div className="wrap stats-grid">
          <div className="stat-item"><b>96%</b><p>Client Satisfaction</p></div>
          <div className="stat-item"><b>+5 Years</b><p>of Experience</p></div>
          <div className="stat-item"><b>+800</b><p>Active Members</p></div>
          <div className="stat-item"><b>24/7</b><p>Support Available</p></div>
        </div>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services relative py-24 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(217,10,20,0.22)_0%,rgba(18,10,9,1)_70%)]" id="services">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,10,20,0.28)_0%,rgba(205,78,23,0.12)_45%,transparent_75%)] pointer-events-none"></div>

        <div className="wrap relative z-10">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <h2 className="font-gagalin text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase drop-shadow-sm mb-3">
              <span className="text-white">Our </span>
              <span className="text-[#D90A14]">Services</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-vazir leading-relaxed">
              At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="service-card group rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ backgroundImage: `url(${serviceLosingWeight})` }}>
              <a href="#plans" className="learn text-[#ff7a1a] font-semibold flex items-center gap-1.5 hover:text-white transition-colors">
                Learn More <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="service-card group rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ backgroundImage: `url(${serviceBuildingMuscle})` }}>
              <a href="#plans" className="learn text-[#ff7a1a] font-semibold flex items-center gap-1.5 hover:text-white transition-colors">
                Learn More <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="service-card group rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ backgroundImage: `url(${serviceTrainingHome})` }}>
              <a href="#plans" className="learn text-[#ff7a1a] font-semibold flex items-center gap-1.5 hover:text-white transition-colors">
                Learn More <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="service-card group rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ backgroundImage: `url(${serviceGymPlan})` }}>
              <a href="#plans" className="learn text-[#ff7a1a] font-semibold flex items-center gap-1.5 hover:text-white transition-colors">
                Learn More <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLANS SECTION ===== */}
      <section className="plans relative overflow-visible py-20 bg-transparent" id="plans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(217,10,20,0.3)_0%,rgba(205,78,23,0.1)_50%,transparent_75%)] pointer-events-none z-0"></div>

        <div className="wrap relative z-10">
          <div className="section-head text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-poppins text-white">
              Our <span className="text-[#D90A14]">Plans</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto font-vazir leading-relaxed">
              Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
            </p>
          </div>
          
          {/* Billing Cycle Toggle */}
          <div className="toggle-wrap flex justify-center mb-12">
            <div className="bg-[#120a09] border border-[#CD4E17]/40 p-1 rounded-full flex items-center shadow-lg">
              <button 
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${billingCycle === 'monthly' ? 'bg-[#D90A14] text-white shadow-md' : 'text-gray-400 hover:text-white'}`} 
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${billingCycle === 'annually' ? 'bg-[#D90A14] text-white shadow-md' : 'text-gray-400 hover:text-white'}`} 
                onClick={() => setBillingCycle('annually')}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* PRO PLAN */}
            <div className="bg-[#1a080a] border-2 border-[#CD4E17] rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[#CD4E17] text-xs font-semibold uppercase tracking-wider block text-center mb-1">Package</span>
                <h3 className="font-gagalin text-3xl text-white text-center mb-4 tracking-wide">PRO PLAN</h3>
                
                <span className="text-[#CD4E17] text-xs font-semibold uppercase tracking-wider block text-center mb-1">Description</span>
                <p className="text-gray-300 text-xs text-center mb-6 leading-relaxed">
                  Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!
                </p>
                
                <span className="text-[#CD4E17] text-xs font-semibold uppercase tracking-wider block text-center mb-3">Features</span>
                <ul className="space-y-2.5 text-xs text-gray-200 mb-8">
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Access To All Of Our Exercise Videos</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Progress Tracking</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Supportive Online Community</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Advanced, Personalized Workout Plans</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Comprehensive Nutrition Coaching</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Access To Advanced Workout Programs</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Body Composition Analysis</li>
                </ul>
              </div>

              <div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-extrabold text-white">{billingCycle === 'annually' ? '990$' : '99$'}</span>
                  <span className="text-xs text-gray-400">/USDT</span>
                </div>
                <a 
                  href="#signup"
                  className="block text-center w-full py-3.5 rounded-full bg-[#CD4E17] hover:bg-[#b54110] text-white font-bold text-sm shadow-md transition-all duration-300"
                >
                  Choose This Plan
                </a>
              </div>
            </div>

            {/* CUSTOM PLAN */}
            <div className="bg-[#1a080a] border-2 border-[#D90A14] rounded-2xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(217,10,20,0.4)] transform md:-translate-y-2">
              <div>
                <span className="text-[#D90A14] text-xs font-semibold uppercase tracking-wider block text-center mb-1">Package</span>
                <h3 className="font-gagalin text-3xl text-white text-center mb-4 tracking-wide">CUSTOM PLAN</h3>
                
                <span className="text-[#D90A14] text-xs font-semibold uppercase tracking-wider block text-center mb-1">Description</span>
                <p className="text-gray-300 text-xs text-center mb-6 leading-relaxed">
                  Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.
                </p>
                
                <span className="text-[#D90A14] text-xs font-semibold uppercase tracking-wider block text-center mb-3">Features</span>
                <ul className="space-y-2.5 text-xs text-gray-200 mb-8">
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Access To All Of Our Exercise Videos</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Progress Tracking</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Supportive Online Community</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Fully Customized Workout And Nutrition Plan</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Weekly Check-Ins With Your Trainer</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Access To All Platform Features</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Exclusive Gear Discounts</li>
                </ul>
              </div>

              <div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-extrabold text-white">{billingCycle === 'annually' ? '1490$' : '149$'}</span>
                  <span className="text-xs text-gray-400">/USDT</span>
                </div>
                <a 
                  href="#signup"
                  className="block text-center w-full py-3.5 rounded-full bg-[#D90A14] hover:bg-[#C50912] text-white font-bold text-sm shadow-md transition-all duration-300"
                >
                  Choose This Plan
                </a>
              </div>
            </div>

            {/* BEGINNER PLAN */}
            <div className="bg-[#1a080a] border-2 border-[#CD4E17] rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[#CD4E17] text-xs font-semibold uppercase tracking-wider block text-center mb-1">Package</span>
                <h3 className="font-gagalin text-3xl text-white text-center mb-4 tracking-wide">BEGINNER PLAN</h3>
                
                <span className="text-[#CD4E17] text-xs font-semibold uppercase tracking-wider block text-center mb-1">Description</span>
                <p className="text-gray-300 text-xs text-center mb-6 leading-relaxed">
                  Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.
                </p>
                
                <span className="text-[#CD4E17] text-xs font-semibold uppercase tracking-wider block text-center mb-3">Features</span>
                <ul className="space-y-2.5 text-xs text-gray-200 mb-8">
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Access To All Of Our Exercise Videos</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Progress Tracking</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Supportive Online Community</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Personalized Workout Plans</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Basic Nutrition Guidance</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400">•</span> Access To Group Fitness Classes</li>
                </ul>
              </div>

              <div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-extrabold text-white">{billingCycle === 'annually' ? '490$' : '49$'}</span>
                  <span className="text-xs text-gray-400">/USDT</span>
                </div>
                <a 
                  href="#signup"
                  className="block text-center w-full py-3.5 rounded-full bg-[#CD4E17] hover:bg-[#b54110] text-white font-bold text-sm shadow-md transition-all duration-300"
                >
                  Choose This Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FITNESS TOOLS SECTION ===== */}
      <FitnessTools />

      {/* ===== TESTIMONIALS SECTION ===== */}
      <CustomerReviews />

      {/* ===== TRAINERS SECTION ===== */}
      <Trainers />

      {/* ===== BLOG SECTION ===== */}
      <BlogPosts />

      {/* ===== SIGNUP COMMUNITY SECTION ===== */}
      <CommunitySignup />

      {/* ===== FAQ SECTION ===== */}
      <section className="faq relative py-20 overflow-visible" id="faq">
        <div className="wrap">
          <div className="section-head text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-white">FAQ</h2>
          </div>
          <div className="faq-list max-w-3xl mx-auto space-y-4">
            <div className={`faq-item bg-[#181818] border ${openFaq === 0 ? 'border-[#D90A14]' : 'border-white/10'} rounded-xl overflow-hidden transition-all`}>
              <div className="faq-q flex justify-between items-center p-5 cursor-pointer font-semibold" onClick={() => toggleFaq(0)}>
                <span>What is FitMaker and how can it help me reach my fitness goals?</span>
                <i className={`fa-solid fa-chevron-down text-[#D90A14] transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`}></i>
              </div>
              {openFaq === 0 && (
                <div className="faq-a px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                  FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance.
                </div>
              )}
            </div>

            <div className={`faq-item bg-[#181818] border ${openFaq === 1 ? 'border-[#D90A14]' : 'border-white/10'} rounded-xl overflow-hidden transition-all`}>
              <div className="faq-q flex justify-between items-center p-5 cursor-pointer font-semibold" onClick={() => toggleFaq(1)}>
                <span>How do I get started with a workout plan on FitMaker?</span>
                <i className={`fa-solid fa-chevron-down text-[#D90A14] transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`}></i>
              </div>
              {openFaq === 1 && (
                <div className="faq-a px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                  Simply sign up for an account, choose the plan that fits your goals, and complete a short fitness assessment.
                </div>
              )}
            </div>

            <div className={`faq-item bg-[#181818] border ${openFaq === 2 ? 'border-[#D90A14]' : 'border-white/10'} rounded-xl overflow-hidden transition-all`}>
              <div className="faq-q flex justify-between items-center p-5 cursor-pointer font-semibold" onClick={() => toggleFaq(2)}>
                <span>What is included in the custom plan?</span>
                <i className={`fa-solid fa-chevron-down text-[#D90A14] transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`}></i>
              </div>
              {openFaq === 2 && (
                <div className="faq-a px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                  The custom plan includes one-on-one coaching, fully personalized workout and nutrition programs, weekly check-ins, and gear discounts.
                </div>
              )}
            </div>

            <div className={`faq-item bg-[#181818] border ${openFaq === 3 ? 'border-[#D90A14]' : 'border-white/10'} rounded-xl overflow-hidden transition-all`}>
              <div className="faq-q flex justify-between items-center p-5 cursor-pointer font-semibold" onClick={() => toggleFaq(3)}>
                <span>Can I change my plan after signing up?</span>
                <i className={`fa-solid fa-chevron-down text-[#D90A14] transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`}></i>
              </div>
              {openFaq === 3 && (
                <div className="faq-a px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                  Yes, you can upgrade or downgrade your plan at any time from your account settings.
                </div>
              )}
            </div>

            <div className={`faq-item bg-[#181818] border ${openFaq === 4 ? 'border-[#D90A14]' : 'border-white/10'} rounded-xl overflow-hidden transition-all`}>
              <div className="faq-q flex justify-between items-center p-5 cursor-pointer font-semibold" onClick={() => toggleFaq(4)}>
                <span>What kind of support can I expect from my trainer?</span>
                <i className={`fa-solid fa-chevron-down text-[#D90A14] transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`}></i>
              </div>
              {openFaq === 4 && (
                <div className="faq-a px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                  Your trainer is available to answer questions, adjust your program, and keep you accountable through regular check-ins.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
