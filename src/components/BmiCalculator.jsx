import React, { useState, useMemo } from 'react';
import { Calculator, Activity, ArrowRight, Zap, CheckCircle2, RotateCcw } from 'lucide-react';

export default function BmiCalculator({ onOpenBooking }) {
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  const [gender, setGender] = useState('male');
  
  // Metric values
  const [heightCm, setHeightCm] = useState(178);
  const [weightKg, setWeightKg] = useState(76);
  
  // Imperial values
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(10);
  const [weightLbs, setWeightLbs] = useState(168);
  
  const [age, setAge] = useState(26);
  const [activity, setActivity] = useState('moderate'); // 'sedentary', 'light', 'moderate', 'active'

  // Calculate BMI
  const bmiResult = useMemo(() => {
    let heightInMeters = 0;
    let weightInKg = 0;

    if (unit === 'metric') {
      heightInMeters = heightCm / 100;
      weightInKg = weightKg;
    } else {
      const totalInches = (heightFt * 12) + parseInt(heightIn || 0, 10);
      heightInMeters = totalInches * 0.0254;
      weightInKg = weightLbs * 0.453592;
    }

    if (!heightInMeters || heightInMeters <= 0 || !weightInKg || weightInKg <= 0) {
      return null;
    }

    const bmi = parseFloat((weightInKg / (heightInMeters * heightInMeters)).toFixed(1));
    
    let status = '';
    let statusColor = '';
    let recommendation = '';
    let recommendedProgram = '';

    if (bmi < 18.5) {
      status = 'Underweight';
      statusColor = 'text-amber-400 bg-amber-400/10 border-amber-400/30';
      recommendation = 'Focus on caloric surplus and progressive hypertrophy strength training to build lean muscle mass safely.';
      recommendedProgram = 'Strength & Muscle Building';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = 'Optimal Healthy Weight';
      statusColor = 'text-green-400 bg-green-400/10 border-green-400/30';
      recommendation = 'Great baseline! Maintain metabolic conditioning, increase athletic power, and refine body composition.';
      recommendedProgram = 'Cardio & HIIT Conditioning';
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = 'Overweight';
      statusColor = 'text-accent-orange bg-accent-orange/10 border-accent-orange/30';
      recommendation = 'Prioritize high-yield metabolic intervals paired with compound resistance routines to accelerate fat loss.';
      recommendedProgram = 'Fat Loss & Metabolic Reset';
    } else {
      status = 'Obese Class';
      statusColor = 'text-primary bg-primary/10 border-primary/30';
      recommendation = 'Work with an elite 1-on-1 coach to establish sustainable nutritional deficits and joint-friendly training.';
      recommendedProgram = '1-on-1 Elite Coaching';
    }

    // Rough calorie expenditure estimation (Mifflin-St Jeor)
    let bmr = 10 * weightInKg + 6.25 * (heightInMeters * 100) - 5 * age;
    bmr += gender === 'male' ? 5 : -161;

    const multMap = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725
    };
    const tdee = Math.round(bmr * (multMap[activity] || 1.55));

    return {
      bmi,
      status,
      statusColor,
      recommendation,
      recommendedProgram,
      tdee
    };
  }, [unit, heightCm, weightKg, heightFt, heightIn, weightLbs, age, gender, activity]);

  const getMeterPercentage = (bmi) => {
    if (!bmi) return 0;
    // Map BMI 15 -> 40 to 0% -> 100%
    const min = 15;
    const max = 40;
    const pct = ((bmi - min) / (max - min)) * 100;
    return Math.min(Math.max(pct, 2), 98);
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#07080a]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>BODY METRICS EVALUATION</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CALCULATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">BMI & CALORIES</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Enter your height and weight metrics to receive your instantaneous body mass classification, estimated maintenance calories, and recommended fitness path.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Input Controls (7 Columns) */}
          <div className="lg:col-span-7 bg-dark-800 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Unit & Gender Toggle Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
              {/* Unit Toggle */}
              <div className="flex bg-dark-900 p-1 rounded-xl border border-white/5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setUnit('metric')}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase transition-all ${
                    unit === 'metric' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Metric (CM / KG)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('imperial')}
                  className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-heading font-bold uppercase transition-all ${
                    unit === 'imperial' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Imperial (FT / LBS)
                </button>
              </div>

              {/* Gender Radio */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    gender === 'male'
                      ? 'bg-primary/20 border-primary text-white font-bold'
                      : 'bg-dark-900 border-white/5 text-gray-400'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    gender === 'female'
                      ? 'bg-primary/20 border-primary text-white font-bold'
                      : 'bg-dark-900 border-white/5 text-gray-400'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Height Input */}
              {unit === 'metric' ? (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-2">
                    <span>Height (cm)</span>
                    <span className="text-primary font-bold">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="225"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full h-2 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="mt-2 w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-primary"
                  />
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-2">
                    <span>Height (Feet & Inches)</span>
                    <span className="text-primary font-bold">{heightFt}' {heightIn}"</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-400">Feet</label>
                      <input
                        type="number"
                        min="3"
                        max="7"
                        value={heightFt}
                        onChange={(e) => setHeightFt(Number(e.target.value))}
                        className="w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400">Inches</label>
                      <input
                        type="number"
                        min="0"
                        max="11"
                        value={heightIn}
                        onChange={(e) => setHeightIn(Number(e.target.value))}
                        className="w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Weight Input */}
              {unit === 'metric' ? (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-2">
                    <span>Weight (kg)</span>
                    <span className="text-primary font-bold">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="180"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <input
                    type="number"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="mt-2 w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-primary"
                  />
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-300 mb-2">
                    <span>Weight (lbs)</span>
                    <span className="text-primary font-bold">{weightLbs} lbs</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="400"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="w-full h-2 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <input
                    type="number"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="mt-2 w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-primary"
                  />
                </div>
              )}

              {/* Age */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">Age (Years)</label>
                <input
                  type="number"
                  min="14"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-primary"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">Weekly Activity Level</label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary"
                >
                  <option value="sedentary">Sedentary (Little to no exercise)</option>
                  <option value="light">Light (Exercise 1-3 times/week)</option>
                  <option value="moderate">Moderate (Exercise 3-5 times/week)</option>
                  <option value="active">Very Active (Hard training 6-7 times/week)</option>
                </select>
              </div>

            </div>

          </div>

          {/* Result Card (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-dark-800 to-dark-900 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-heading font-bold text-gray-400 tracking-wider flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-primary" />
                  Your Biometric Output
                </span>
                {bmiResult && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${bmiResult.statusColor}`}>
                    {bmiResult.status}
                  </span>
                )}
              </div>

              {/* Big Score Display */}
              <div className="text-center py-2">
                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Body Mass Index</div>
                <div className="font-heading font-black text-6xl sm:text-7xl text-white tracking-tight">
                  {bmiResult ? bmiResult.bmi : '--'}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Est. Daily Maintenance: <strong className="text-accent-orange">{bmiResult ? bmiResult.tdee : '--'} kcal</strong>
                </div>
              </div>

              {/* Graphical BMI Gauge Bar */}
              <div className="space-y-2">
                <div className="relative w-full h-3.5 rounded-full overflow-hidden bg-dark-950 flex">
                  <div className="w-[18.5%] bg-amber-400" title="Underweight"></div>
                  <div className="w-[25%] bg-green-500" title="Normal"></div>
                  <div className="w-[20%] bg-accent-orange" title="Overweight"></div>
                  <div className="flex-1 bg-primary" title="Obese"></div>
                </div>

                {/* Marker indicator */}
                {bmiResult && (
                  <div className="relative w-full h-4">
                    <div
                      className="absolute top-0 -translate-x-1/2 flex flex-col items-center transition-all duration-500"
                      style={{ left: `${getMeterPercentage(bmiResult.bmi)}%` }}
                    >
                      <div className="w-2.5 h-2.5 rotate-45 bg-white border border-black shadow-sm"></div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
                  <span>&lt; 18.5 (Under)</span>
                  <span>18.5 - 24.9 (Normal)</span>
                  <span>25 - 29.9 (Over)</span>
                  <span>30+ (Obese)</span>
                </div>
              </div>

              {/* Recommendation summary box */}
              {bmiResult && (
                <div className="bg-dark-950/80 rounded-2xl p-4 border border-white/5 space-y-2">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span>Recommended Program: <strong>{bmiResult.recommendedProgram}</strong></span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {bmiResult.recommendation}
                  </p>
                </div>
              )}

            </div>

            {/* CTA button */}
            <div className="pt-6">
              <button
                onClick={() => onOpenBooking(bmiResult ? `Custom Plan for BMI ${bmiResult.bmi} (${bmiResult.recommendedProgram})` : 'Free Consultation')}
                className="w-full py-4 rounded-2xl font-heading font-black text-sm uppercase text-white bg-gradient-to-r from-primary to-accent-orange hover:from-primary-hover hover:to-primary shadow-glow-red hover:shadow-glow-red-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Get Free Custom Nutrition Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
