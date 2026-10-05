import React, { useState } from 'react';
import { RAOZY_REAL_WEDDINGS, RealWeddingStory } from '../../data/raozyWeddingData';

interface RaozyRealWeddingsSectionProps {
  onPlanSimilar: (wedding: RealWeddingStory) => void;
  onOpenConsultationModal: () => void;
}

export const RaozyRealWeddingsSection: React.FC<RaozyRealWeddingsSectionProps> = ({
  onPlanSimilar,
  onOpenConsultationModal
}) => {
  const [selectedStory, setSelectedStory] = useState<RealWeddingStory>(RAOZY_REAL_WEDDINGS[0]);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  return (
    <section id="real-weddings" className="py-20 sm:py-28 bg-[#0F0D0C] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            Real Celebrations &amp; Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Stories Behind The 60 Weddings
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            From emergency 15-day takeover rescues to complex island logistics on Lake Pichola, 
            see how Raozy turns ambitious creative visions into seamless realities.
          </p>
        </div>

        {/* Story Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {RAOZY_REAL_WEDDINGS.map((wedding) => {
            const isSelected = selectedStory.id === wedding.id;
            return (
              <button
                key={wedding.id}
                onClick={() => {
                  setSelectedStory(wedding);
                  setActivePhotoIndex(0);
                }}
                className={`p-5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1C1713] border-[#DFC082] shadow-xl'
                    : 'bg-[#151210] border-stone-800 hover:border-stone-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div>
                  <span className="text-[10px] font-serif text-[#DFC082] uppercase tracking-widest block mb-1">
                    {wedding.destination}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-white">
                    {wedding.coupleNames}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {wedding.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 text-[11px] text-stone-500 font-sans">
                  <span>{wedding.guestCount} Guests</span>
                  <span>•</span>
                  <span>{wedding.functionsCount} Functions</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Story Spotlight */}
        <div className="bg-[#161310] rounded-2xl border border-stone-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Imagery and Gallery Slider */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-black">
              <img
                src={selectedStory.gallery[activePhotoIndex] || selectedStory.coverImage}
                alt={`${selectedStory.coupleNames} Wedding Highlight`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="bg-black/60 px-3 py-1 rounded backdrop-blur-md border border-white/10 font-serif">
                  {selectedStory.venue}
                </span>
                <span className="bg-black/60 px-2 py-1 rounded text-[11px] text-[#DFC082]">
                  {selectedStory.decorBudgetTier}
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="p-4 bg-[#12100E] border-t border-stone-800/80 flex items-center gap-2 overflow-x-auto">
              {selectedStory.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`w-16 h-12 rounded overflow-hidden shrink-0 border-2 transition ${
                    activePhotoIndex === idx ? 'border-[#DFC082]' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Narrative & Client Experience */}
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#DFC082] font-serif uppercase tracking-widest mb-2">
                <span>{selectedStory.destination}</span>
                <span>•</span>
                <span>{selectedStory.dates}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                {selectedStory.coupleNames}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-stone-300 mb-6">
                "{selectedStory.tagline}"
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-sans leading-relaxed mb-6">
                <p>{selectedStory.story}</p>
                <div className="p-4 rounded-lg bg-[#201A15] border-l-2 border-[#DFC082] text-xs text-stone-300">
                  <strong className="text-[#DFC082] block mb-1 uppercase font-serif tracking-wider">
                    Execution Hurdle Overcome:
                  </strong>
                  {selectedStory.challengesOvercome}
                </div>
              </div>

              {/* Verified Client Testimonial Quote */}
              <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 mb-6">
                <p className="text-xs italic text-stone-300 mb-2">
                  "{selectedStory.clientQuote}"
                </p>
                <div className="text-[11px] font-serif text-[#DFC082]">
                  — {selectedStory.clientRole}
                </div>
              </div>

              {/* Services Provided Pills */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[10px] text-stone-500 uppercase tracking-widest block">
                  Turnkey Deliverables:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStory.servicesProvided.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-stone-900 text-stone-300 text-[11px] border border-stone-800"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-800">
              <button
                type="button"
                onClick={() => onPlanSimilar(selectedStory)}
                className="flex-1 py-3 px-4 rounded bg-[#DFC082] hover:bg-[#C5A059] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase transition text-center shadow"
              >
                Plan a Similar Celebration
              </button>
              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="py-3 px-4 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white text-xs font-sans border border-stone-800 transition text-center"
              >
                Inquire For Dates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
