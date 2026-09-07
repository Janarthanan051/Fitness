import React, { useState } from 'react';
import { galleryData } from '../data/fitnessData';
import { Camera, Maximize2, X } from 'lucide-react';

export default function FacilityGallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-[#0c0d12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-700 border border-primary/30 text-primary text-xs font-heading uppercase font-bold tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>PREMIUM ENVIRONMENT</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            FITMAKER <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">FACILITY TOUR</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Take a look inside our 30,000 sq.ft. multi-level training sanctuary engineered for peak performance and recovery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-glow-red"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-primary" />
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-4 left-5 right-5 space-y-1">
                <span className="text-[10px] uppercase font-bold text-accent-orange tracking-wider bg-dark-900/90 px-2.5 py-0.5 rounded-md border border-white/5 inline-block">
                  {item.category}
                </span>
                <h3 className="font-heading font-black text-lg text-white uppercase group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-dark-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="p-5 bg-dark-900 flex items-center justify-between border-t border-white/10">
              <div>
                <span className="text-xs font-bold text-accent-orange uppercase">{activePhoto.category}</span>
                <h4 className="font-heading font-black text-xl text-white uppercase">{activePhoto.title}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
