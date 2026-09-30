import React, { useState } from 'react';
import { Camera, MapPin, Eye, X } from 'lucide-react';
import { EXPERIENCE_GALLERY } from '../data/brioTravelsData';

export const BrioExperienceGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof EXPERIENCE_GALLERY[0] | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Memories from our Travellers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
            A Simply Amazing Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-['Inter']">
            Moments captured by families, honeymooners, and adventurers traveling with Brio Travels.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {EXPERIENCE_GALLERY.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="relative h-48 sm:h-64 rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-600/90 inline-block mb-1">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-600 inline-block mb-1">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-lg font-bold font-['Poppins']">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{selectedPhoto.location}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
