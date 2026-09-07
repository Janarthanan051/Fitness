import React, { useState } from 'react';
import { programsData } from '../data/fitnessData';
import { Flame, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import ProgramModal from './ProgramModal';

export default function Programs({ onOpenBooking }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="programs" className="py-20 relative bg-[#07080a]">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>TRAIN WITH PURPOSE</span>
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            EXPLORE OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">FITNESS PROGRAMS</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every body is unique. Choose from science-backed training protocols engineered to build dense muscle, torch stubborn fat, and elevate your cardiovascular engine.
          </p>
        </div>

        {/* Programs Grid (4 Cards matching Figma design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="group relative rounded-2xl bg-dark-800 border border-white/10 hover:border-primary/60 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-glow-red"
            >
              {/* Card Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent"></div>
                
                {/* Highlight Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md backdrop-blur-sm">
                  {program.highlight}
                </div>

                {/* Subtag */}
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-accent-orange uppercase tracking-wider">
                  {program.tagline}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-heading font-black text-xl text-white uppercase group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Meta stats pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs text-gray-300">
                  <div className="flex items-center gap-1.5 bg-dark-900/60 px-2.5 py-1.5 rounded-lg border border-white/5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-dark-900/60 px-2.5 py-1.5 rounded-lg border border-white/5">
                    <Flame className="w-3.5 h-3.5 text-accent-orange" />
                    <span>{program.calories}</span>
                  </div>
                </div>

                {/* Checklist preview */}
                <div className="space-y-1.5 text-xs text-gray-300">
                  {program.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-dark-700 hover:bg-dark-600 border border-white/10 hover:border-primary/40 font-heading font-bold text-xs text-gray-200 hover:text-white uppercase transition-all duration-200 text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(`Program: ${program.title}`)}
                    className="py-2.5 px-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-heading font-bold text-xs uppercase transition-all duration-200 shadow-sm flex items-center justify-center"
                    title="Enroll Now"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onBook={(prog) => {
            setSelectedProgram(null);
            onOpenBooking(`Program: ${prog.title}`);
          }}
        />
      )}
    </section>
  );
}
