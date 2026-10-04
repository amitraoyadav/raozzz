import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { REAL_WEDDINGS_DATA, RealWeddingStory } from '../../data/devdasWeddingData';

interface DevdasRealWeddingsProps {
  onOpenInquiry: () => void;
}

export const DevdasRealWeddings: React.FC<DevdasRealWeddingsProps> = ({ onOpenInquiry }) => {
  const [selectedStory, setSelectedStory] = useState<RealWeddingStory | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenStory = (story: RealWeddingStory) => {
    setSelectedStory(story);
    setPhotoIndex(0);
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FCFBF7] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Memorable Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            REAL WEDDINGS &amp; STORIES
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Glimpse into authentic celebrations brought to life across palaces, shores, and wild hills.
          </p>
        </div>

        {/* Real Weddings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REAL_WEDDINGS_DATA.map((story) => (
            <div
              key={story.id}
              onClick={() => handleOpenStory(story)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#7A1C30] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <img
                    src={story.coverImage}
                    alt={story.coupleNames}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#7A1C30] text-white text-[11px] font-bold shadow">
                      {story.destination}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/10 flex items-center gap-1">
                      <Users className="w-3 h-3 text-amber-400" />
                      <span>{story.guestCount}</span>
                    </span>
                  </div>

                  {/* Couple Names */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-amber-300 font-semibold mb-1">
                      {story.venue}
                    </div>
                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition-colors">
                      {story.coupleNames}
                    </h3>
                  </div>

                  {/* Zoom indicator */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#7A1C30]" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {story.story}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#7A1C30]">
                      Theme &amp; Execution: {story.theme}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {story.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-rose-50 text-[#7A1C30] text-[11px] font-medium"
                        >
                          • {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7A1C30]">
                <span>View Full Photo Album ({story.photos.length} Photos)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-amber-900/10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Slideshow */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-950">
              <img
                src={selectedStory.photos[photoIndex] || selectedStory.coverImage}
                alt={selectedStory.coupleNames}
                className="w-full h-full object-cover"
              />

              {selectedStory.photos.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setPhotoIndex(
                        (prev) => (prev - 1 + selectedStory.photos.length) % selectedStory.photos.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setPhotoIndex((prev) => (prev + 1) % selectedStory.photos.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-full text-white text-xs font-mono">
                {photoIndex + 1} / {selectedStory.photos.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="p-3 bg-slate-100 flex gap-2 overflow-x-auto border-b border-slate-200">
              {selectedStory.photos.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 cursor-pointer transition-all ${
                    photoIndex === idx ? 'border-[#7A1C30] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Story Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#7A1C30] uppercase tracking-wider">
                    {selectedStory.destination} • {selectedStory.venue}
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                    {selectedStory.coupleNames}’s Celebration
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  {selectedStory.guestCount}
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedStory.story}
              </p>

              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-2">
                  Ceremonial &amp; Decor Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStory.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#7A1C30]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Inspired by this celebration? Discuss a similar format for your destination wedding.
                </div>
                <button
                  onClick={() => {
                    setSelectedStory(null);
                    onOpenInquiry();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Enquire About Similar Venues
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
