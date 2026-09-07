import React from 'react';
import { X, Clock, Flame, Zap, CheckCircle2, ShieldCheck, Dumbbell } from 'lucide-react';

export default function ProgramModal({ program, onClose, onBook }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-dark-800 border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp">
        
        {/* Header Image banner */}
        <div className="relative h-64 sm:h-72">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/60 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-900/80 border border-white/20 text-gray-300 hover:text-white hover:bg-primary transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-white font-heading font-bold text-xs uppercase tracking-wider">
              {program.tagline}
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-2">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {program.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-dark-900 p-3.5 rounded-2xl border border-white/5 text-center">
              <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="text-[10px] text-gray-400 uppercase font-semibold">Session Length</div>
              <div className="font-heading font-bold text-white text-sm mt-0.5">{program.duration}</div>
            </div>
            <div className="bg-dark-900 p-3.5 rounded-2xl border border-white/5 text-center">
              <Flame className="w-5 h-5 text-accent-orange mx-auto mb-1" />
              <div className="text-[10px] text-gray-400 uppercase font-semibold">Avg Calorie Burn</div>
              <div className="font-heading font-bold text-white text-sm mt-0.5">{program.calories}</div>
            </div>
            <div className="bg-dark-900 p-3.5 rounded-2xl border border-white/5 text-center">
              <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <div className="text-[10px] text-gray-400 uppercase font-semibold">Intensity Level</div>
              <div className="font-heading font-bold text-white text-sm mt-0.5">{program.intensity}</div>
            </div>
          </div>

          {/* Features Included */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase text-sm mb-3 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-primary" />
              <span>What's Included in This Program:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action footer */}
          <div className="pt-4 flex items-center gap-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full border border-white/15 hover:bg-dark-700 font-heading font-bold text-sm text-gray-300 uppercase transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onBook(program)}
              className="flex-1 py-3 rounded-full bg-gradient-to-r from-primary to-accent-orange font-heading font-black text-sm text-white uppercase shadow-glow-red hover:shadow-glow-red-lg transition-all"
            >
              Enroll in Program
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
