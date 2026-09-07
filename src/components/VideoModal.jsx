import React from 'react';
import { X, Play, Dumbbell } from 'lucide-react';

export default function VideoModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-dark-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-white hover:bg-primary transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Container (Responsive 16:9 iframe) */}
        <div className="relative pb-[56.25%] h-0 bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/gC_L9qAHVJ8?autoplay=1&mute=0&rel=0"
            title="FitMaker Brand Workout Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Bottom Info Bar */}
        <div className="p-6 bg-dark-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-black text-lg text-white uppercase">Inside FitMaker: High Intensity Training</h4>
              <p className="text-xs text-gray-400">Discover our facilities, coaching methodology, and community energy.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-dark-700 hover:bg-primary font-heading font-bold text-xs uppercase text-white transition-colors"
          >
            Close Player
          </button>
        </div>

      </div>
    </div>
  );
}
