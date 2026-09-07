import React, { useState } from 'react';
import { X, CheckCircle2, Dumbbell, Sparkles, Phone, Mail, User, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ itemTitle, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    timeSlot: 'Morning (6am - 10am)',
    goal: 'Build Muscle & Strength'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Fire festive fitness confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff2a2a', '#ff6b00', '#ffffff', '#ffaa00']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-dark-800 border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-primary to-accent-orange p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <Dumbbell className="w-5 h-5" />
            <span className="font-heading font-black text-xs uppercase tracking-widest text-white/90">
              FITMAKER EXCLUSIVE ACCESS
            </span>
          </div>

          <h3 className="font-heading font-black text-2xl uppercase">
            {isSubmitted ? 'CONGRATULATIONS!' : (itemTitle || 'CLAIM YOUR FREE PASS')}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto shadow-glow-red">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-black text-2xl text-white uppercase">
                  Your VIP Pass is Confirmed!
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We sent a confirmation text & digital barcode pass to <strong className="text-white">{formData.email || 'your email'}</strong>. Show this at our front desk upon arrival.
                </p>
              </div>

              {/* Pass Card Preview */}
              <div className="bg-dark-900 border border-primary/40 rounded-2xl p-4 text-left font-mono text-xs space-y-1.5 shadow-inner">
                <div className="flex justify-between text-gray-400">
                  <span>Pass Type:</span>
                  <span className="text-primary font-bold">{itemTitle || '7-Day All-Access'}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Guest Name:</span>
                  <span className="text-white font-bold">{formData.fullName || 'VIP Guest'}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Status:</span>
                  <span className="text-green-400 font-bold">ACTIVE (Valid 7 Days)</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full font-heading font-black text-sm uppercase text-white bg-primary hover:bg-primary-hover transition-colors shadow-glow-red"
              >
                Done & Return To Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-400">
                Fill out the quick form below to activate your booking or start your 7-day complimentary pass immediately.
              </p>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary" /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Fitness Goal</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-primary"
                  >
                    <option value="Build Muscle & Strength">Build Muscle & Strength</option>
                    <option value="Fat Loss & Shredding">Fat Loss & Shredding</option>
                    <option value="Cardio & Stamina">Cardio & Stamina</option>
                    <option value="Mobility & Recovery">Mobility & Recovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Preferred Workout Time</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-primary"
                  >
                    <option value="Morning (6am - 10am)">Morning (6am - 10am)</option>
                    <option value="Midday (11am - 3pm)">Midday (11am - 3pm)</option>
                    <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
                    <option value="Night (8pm - 11pm)">Night (8pm - 11pm)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-heading font-black text-sm uppercase text-white bg-gradient-to-r from-primary to-accent-orange hover:from-primary-hover hover:to-primary shadow-glow-red hover:shadow-glow-red-lg transition-all"
                >
                  Activate My Pass Now
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
