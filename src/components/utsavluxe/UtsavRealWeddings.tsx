import React, { useState } from 'react';
import { UTSAV_REAL_WEDDINGS, RealWeddingStory } from '../../data/utsavLuxeData';

interface UtsavRealWeddingsProps {
  onPlanSimilar: (wedding: RealWeddingStory) => void;
}

export const UtsavRealWeddings: React.FC<UtsavRealWeddingsProps> = ({
  onPlanSimilar
}) => {
  const [selectedStory, setSelectedStory] = useState<RealWeddingStory>(UTSAV_REAL_WEDDINGS[0]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  return (
    <section id="real-weddings" className="py-16 sm:py-24 bg-white text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Real Love Stories & Case Studies
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Celebrated Real Weddings
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Step behind the scenes of our favorite celebrations across India. 
            Real photos, honest budgets, transparent timelines, and verified couple testimonials.
          </p>
        </div>

        {/* Story Selector Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {UTSAV_REAL_WEDDINGS.map(story => {
            const isSelected = story.id === selectedStory.id;
            return (
              <div
                key={story.id}
                onClick={() => {
                  setSelectedStory(story);
                  setActiveImageIndex(0);
                }}
                className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#E05A47] ring-2 ring-[#E05A47] shadow-lg scale-[1.01]'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.coverImage}
                    alt={story.coupleNames}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {story.city}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] text-white/80 block">{story.venueName}</span>
                    <h4 className="font-serif text-xl font-bold">{story.coupleNames}</h4>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-600 font-medium">
                    <span>{story.guestCount} Guests</span>
                    <span className="font-semibold text-stone-900">{story.eventsCount} Functions</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#E05A47]">
                    {story.budgetRange}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Story Spotlight Deep-Dive */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Gallery / Visual Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="relative h-[320px] sm:h-[420px] rounded-xl overflow-hidden shadow-inner">
                <img
                  src={selectedStory.gallery[activeImageIndex] || selectedStory.coverImage}
                  alt={selectedStory.coupleNames}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  {selectedStory.theme}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {selectedStory.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#E05A47] shadow-sm scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Story Details & Breakdown Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:border-l border-stone-200 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#E05A47] text-white">
                    Case Study
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {selectedStory.city} · {selectedStory.venueName}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                  {selectedStory.coupleNames}: {selectedStory.tagline}
                </h3>

                {/* Quote Card */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs relative">
                  <span className="text-2xl font-serif text-[#E05A47] absolute top-2 left-3">“</span>
                  <p className="text-xs text-stone-700 italic pl-5 leading-relaxed">
                    {selectedStory.quote}
                  </p>
                  <div className="text-[11px] font-bold text-stone-900 mt-2 pl-5">
                    — {selectedStory.quoteAuthor}
                  </div>
                </div>

                {/* Story Highlights */}
                <div>
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                    Production Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {selectedStory.storyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#E05A47] font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment Breakdown */}
                <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                    Actual Expense Breakdown:
                  </span>
                  <div className="text-xs space-y-1 text-stone-600">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Decor & Scenography:</span>
                      <span className="font-medium text-stone-900">{selectedStory.breakdown.decor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Turnkey Operations:</span>
                      <span className="font-medium text-stone-900">{selectedStory.breakdown.planning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Candid & Drone Cinema:</span>
                      <span className="font-medium text-stone-900">{selectedStory.breakdown.photography}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Entertainment & Sound:</span>
                      <span className="font-medium text-stone-900">{selectedStory.breakdown.entertainment}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={() => onPlanSimilar(selectedStory)}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-md shadow-[#E05A47]/20 transition-all hover:scale-[1.01]"
              >
                Plan a Similar Celebration With Us
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
