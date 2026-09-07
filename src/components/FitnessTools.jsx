import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import calorieImg from '../assets/tool-calorie.png';
import bmiImg from '../assets/tool-bmi.png';
import waterImg from '../assets/tool-water.png';
import macroImg from '../assets/tool-macro.png';
import goalImg from '../assets/tool-goal.png';

const toolsPages = [
  // Page 1: Exact 5 uploaded images matching user's request
  [
    {
      id: 'calorie',
      title: 'CALORIE CALCULATOR',
      titleRaw: 'CALORIE CACULATOR',
      imgSrc: calorieImg,
      desc: 'Calculate daily energy expenditure and target calorie intake for fat loss or muscle gain.',
    },
    {
      id: 'bmi',
      title: 'BMI CALCULATOR',
      titleRaw: 'BMI CACULATOR',
      imgSrc: bmiImg,
      desc: 'Evaluate body mass index and healthy weight ranges.',
    },
    {
      id: 'macro',
      title: 'MACRONUTRIENT CALCULATOR',
      titleRaw: 'MACRONUTRIENT CALCULATOR',
      imgSrc: macroImg,
      desc: 'Break down daily protein, carbs, and healthy fats based on your fitness goal.',
    },
    {
      id: 'goal',
      title: 'GOAL SETTING TOOL',
      titleRaw: 'GOAL SETTING TOOL',
      imgSrc: goalImg,
      desc: 'Define target milestones for weight, body fat, and strength progress.',
    },
    {
      id: 'water',
      title: 'WATER INTAKE CALCULATOR',
      titleRaw: 'WATER INTAKE CALCULATOR',
      imgSrc: waterImg,
      desc: 'Determine daily hydration requirements based on your body mass and exercise intensity.',
    },
  ],
  // Page 2: Additional tool configurations
  [
    {
      id: 'water2',
      title: 'WATER INTAKE CALCULATOR',
      titleRaw: 'WATER INTAKE CALCULATOR',
      imgSrc: waterImg,
      desc: 'Calculate optimal daily hydration for training vs rest days.',
    },
    {
      id: 'macro2',
      title: 'MACRONUTRIENT CALCULATOR',
      titleRaw: 'MACRONUTRIENT CALCULATOR',
      imgSrc: macroImg,
      desc: 'Custom macro distribution protocols for peak performance.',
    },
    {
      id: 'calorie2',
      title: 'CALORIE CALCULATOR',
      titleRaw: 'CALORIE CACULATOR',
      imgSrc: calorieImg,
      desc: 'Advanced BMR and TDEE calorie deficit calculations.',
    },
    {
      id: 'goal2',
      title: 'GOAL SETTING TOOL',
      titleRaw: 'GOAL SETTING TOOL',
      imgSrc: goalImg,
      desc: 'Phased milestone tracker for body recomposition.',
    },
    {
      id: 'bmi2',
      title: 'BMI CALCULATOR',
      titleRaw: 'BMI CACULATOR',
      imgSrc: bmiImg,
      desc: 'Biometric ideal weight and body density metrics.',
    },
  ]
];

export default function FitnessTools() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  // Modal Calculator State
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('70');
  const [age, setAge] = useState('25');
  const [result, setResult] = useState(null);

  const calculateModalResult = (toolId) => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (!h || !w) return;

    if (toolId.startsWith('bmi')) {
      const bmi = (w / (h * h)).toFixed(1);
      let cat = 'Normal Weight';
      if (bmi < 18.5) cat = 'Underweight';
      else if (bmi >= 25 && bmi < 29.9) cat = 'Overweight';
      else if (bmi >= 30) cat = 'Obese';
      setResult(`Your BMI score is ${bmi} (${cat})`);
    } else if (toolId.startsWith('calorie')) {
      const bmr = Math.round(10 * w + 6.25 * (h * 100) - 5 * a + 5);
      const maintenance = Math.round(bmr * 1.55);
      setResult(`Estimated Maintenance: ${maintenance} kcal/day (BMR: ${bmr} kcal)`);
    } else if (toolId.startsWith('macro') || toolId.startsWith('water')) {
      const protein = Math.round(w * 2.2);
      const fats = Math.round(w * 0.9);
      const carbs = Math.round((w * 30 - (protein * 4 + fats * 9)) / 4);
      setResult(`Daily Target: ${protein}g Protein | ${carbs}g Carbs | ${fats}g Fats`);
    } else {
      setResult(`Goal Target: Gain 3kg Lean Muscle & Cut 2% Body Fat in 60 Days.`);
    }
  };

  const currentTools = toolsPages[activeTab] || toolsPages[0];

  return (
    <section id="tools" className="relative py-20 bg-[#120a09] overflow-hidden selection:bg-red-600 selection:text-white border-t border-b border-white/5">
      {/* Background Soft Red Radial Glow matching PNG image */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none z-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(217,10,20,0.28) 0%, rgba(205,78,23,0.1) 50%, transparent 75%)',
          filter: 'blur(50px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row: Title on Left, Stacked Controls on Right matching uploaded image */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Our fitness <span className="text-[#D90A14]">Tools</span>
            </h2>
          </div>

          {/* Right Controls: Stacked Square Arrow Buttons + Indicator Pills */}
          <div className="flex flex-col items-end gap-3">
            {/* Top Row: Square Rounded Arrow Buttons matching image */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : 1))}
                className="w-10 h-10 rounded-xl border border-white/60 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md group cursor-pointer"
                aria-label="Previous"
                title="Previous"
              >
                <ArrowLeft className="w-5 h-5 text-white transition-colors" />
              </button>
              <button 
                onClick={() => setActiveTab((prev) => (prev < 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-xl border border-white/60 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md group cursor-pointer"
                aria-label="Next"
                title="Next"
              >
                <ArrowRight className="w-5 h-5 text-white transition-colors" />
              </button>
            </div>

            {/* Bottom Row: Red & Dark Pill Indicators matching image */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab(0)} 
                className={`h-3.5 rounded-full transition-all duration-300 ${activeTab === 0 ? 'w-10 bg-[#D90A14]' : 'w-6 bg-[#262626] hover:bg-[#D90A14]/70'}`}
                aria-label="Tab 1"
              />
              <button 
                onClick={() => setActiveTab(1)} 
                className={`h-3.5 rounded-full transition-all duration-300 ${activeTab === 1 ? 'w-10 bg-[#D90A14]' : 'w-6 bg-[#262626] hover:bg-[#D90A14]/70'}`}
                aria-label="Tab 2"
              />
            </div>
          </div>
        </div>

        {/* Subtitle centered */}
        <p className="text-center text-gray-400 text-xs sm:text-sm font-medium mb-10 max-w-xl mx-auto">
          Access a variety of tools to help you reach your fitness goals more effectively
        </p>

        {/* 5 Cards Row matching exact 1-to-5 left-to-right order with zero empty space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-300">
          {currentTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                setActiveModal(tool);
                setResult(null);
              }}
              className="group relative bg-[#18181c] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 border border-white/10 hover:border-[#D90A14] shadow-lg hover:shadow-[0_12px_30px_rgba(217,10,20,0.3)] flex flex-col justify-between h-[270px] sm:h-[285px]"
            >
              {/* Internal card red ambient glow backdrop */}
              <div 
                className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at 50% 35%, rgba(220,38,38,0.35) 0%, transparent 70%)'
                }}
              />

              {/* Exact Uploaded Picture Asset - Zoomed slightly to remove letterbox spacing */}
              <div className="relative z-10 w-full h-[220px] sm:h-[235px] overflow-hidden flex items-center justify-center p-1">
                <img 
                  src={tool.imgSrc} 
                  alt={tool.title} 
                  className="w-full h-full object-cover scale-105 rounded-xl transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom "Learn More ->" Bar */}
              <div className="relative z-10 w-full px-4 py-2.5 bg-[#18181c]/90 backdrop-blur-sm flex items-center justify-start text-xs font-semibold text-white group-hover:text-[#D90A14] transition-colors border-t border-white/5">
                <span>Learn More</span>
                <span className="ml-1 text-[#D90A14] text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Tool Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#1c1c20] border border-[#D90A14]/50 rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div>
              <span className="text-[11px] font-bold text-[#D90A14] uppercase tracking-wider">Fitness Tool</span>
              <h3 className="text-xl font-extrabold text-white mt-1 uppercase">{activeModal.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{activeModal.desc}</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#D90A14]"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#D90A14]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-300 font-medium block mb-1">Age (years)</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-[#121214] border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#D90A14]"
                />
              </div>

              <button
                onClick={() => calculateModalResult(activeModal.id)}
                className="w-full py-3 rounded-lg bg-[#D90A14] hover:bg-[#c20811] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(217,10,20,0.4)] transition-all"
              >
                Calculate Results
              </button>

              {result && (
                <div className="p-3 bg-[#D90A14]/15 border border-[#D90A14]/40 rounded-lg text-xs font-semibold text-center text-[#ff6b6b]">
                  {result}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
