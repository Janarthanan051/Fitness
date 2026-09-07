import React, { useState, useMemo } from 'react';
import { scheduleData } from '../data/fitnessData';
import { Calendar, Clock, User, Check, Zap, Flame, Filter } from 'lucide-react';

export default function ClassSchedule({ onOpenBooking }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredClasses = useMemo(() => {
    return scheduleData.classes.filter((c) => {
      const matchDay = c.day === selectedDay;
      const matchCat = selectedCategory === 'All' || c.category === selectedCategory;
      return matchDay && matchCat;
    });
  }, [selectedDay, selectedCategory]);

  return (
    <section id="schedule" className="py-24 relative bg-[#0c0d12] border-t border-white/5">
      
      {/* Background flare */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>WEEKLY TIMETABLE</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            FITNESS CLASS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">SCHEDULE</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Choose your day, pick your training discipline, and reserve your spot in our high-energy instructor-led sessions.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {scheduleData.days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-primary text-white shadow-glow-red scale-105'
                  : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-white/5'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mt-4 pb-6 overflow-x-auto">
          {scheduleData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-white/10 text-primary border border-primary/40 font-semibold'
                  : 'text-gray-400 hover:text-gray-200 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classes Schedule Grid */}
        <div className="mt-8">
          {filteredClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((item) => (
                <div
                  key={item.id}
                  className="bg-dark-800/90 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    {/* Top Row: Time & Category */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </span>
                      <span className="text-[11px] uppercase font-bold text-gray-400 bg-dark-900 px-2.5 py-1 rounded-md border border-white/5">
                        {item.category}
                      </span>
                    </div>

                    {/* Class Name */}
                    <h3 className="font-heading font-black text-xl text-white uppercase group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>

                    {/* Trainer & Level */}
                    <div className="space-y-1.5 text-xs text-gray-300 pt-1">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-accent-orange" />
                        <span>Trainer: <strong className="text-white">{item.trainer}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span>Level: <strong className="text-gray-200">{item.level}</strong> ({item.duration})</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Spots Remaining & Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-400">
                      <span className="text-primary font-bold">{item.spots}</span> spots left
                    </span>
                    <button
                      onClick={() => onOpenBooking(`Class: ${item.name} on ${item.day} at ${item.time}`)}
                      className="px-4 py-2 rounded-xl bg-dark-700 hover:bg-primary text-gray-200 hover:text-white font-heading font-bold text-xs uppercase transition-all duration-300 border border-white/10 hover:border-transparent"
                    >
                      Reserve Spot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-dark-800/50 rounded-2xl border border-white/5 space-y-2">
              <p className="text-gray-400 text-sm font-medium">
                No classes scheduled for <strong className="text-white">{selectedDay}</strong> in category <strong className="text-white">{selectedCategory}</strong>.
              </p>
              <p className="text-xs text-gray-500">
                Please select another day or choose "All" categories to view scheduled times.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
