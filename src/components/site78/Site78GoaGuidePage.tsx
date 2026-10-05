import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { GOA_GUIDE_CATEGORIES, GuideCategory, GuidePlace } from '../../data/site78Data';
import { site78Config } from '../../config/site78Config';

interface Site78GoaGuidePageProps {
  initialCategorySlug?: string;
  onBookRoom: () => void;
}

export const Site78GoaGuidePage: React.FC<Site78GoaGuidePageProps> = ({
  initialCategorySlug,
  onBookRoom
}) => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(
    initialCategorySlug || GOA_GUIDE_CATEGORIES[0].slug
  );

  const activeCategory =
    GOA_GUIDE_CATEGORIES.find(c => c.slug === activeCategorySlug) ||
    GOA_GUIDE_CATEGORIES[0];

  const handleWhatsAppInquiry = (placeTitle: string) => {
    const msg = `Hello Aurelia Goa Concierge, I would like guidance and travel transfer arrangements for visiting *${placeTitle}* in Goa.`;
    window.open(`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#222222] font-['Jost',sans-serif]">
      {/* Hero Header */}
      <section className="relative min-h-[440px] sm:min-h-[480px] flex items-center bg-[#1C1C1C] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={activeCategory.coverImage}
            alt={activeCategory.pageTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-[#B99D75]/40 text-[#B99D75] text-xs font-semibold uppercase tracking-[0.2em]">
              Aurelia Curated Concierge Guide
            </span>
            <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white leading-tight">
              {activeCategory.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              {activeCategory.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills Navigation (All 9 Guides) */}
        <div className="mb-14 pb-4 border-b border-[#E5DFD7]">
          <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
            {GOA_GUIDE_CATEGORIES.map(cat => {
              const isActive = cat.slug === activeCategorySlug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategorySlug(cat.slug)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#747157] text-white shadow-md'
                      : 'bg-[#F3EEE7] text-stone-700 hover:bg-[#e7dfd4]'
                  }`}
                >
                  {cat.navTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Introductory Narrative */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-bold text-[#747157] uppercase tracking-widest block">
            Local Recommendations
          </span>
          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
            {activeCategory.pageTitle}
          </h2>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            {activeCategory.description}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {activeCategory.places.map(place => (
            <div
              key={place.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E5DFD7] hover:border-[#B99D75] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[#B99D75] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{place.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C] group-hover:text-[#747157] transition-colors">
                    {place.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {place.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-[#F3EEE7]">
                    {place.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#747157] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {place.timing && (
                    <div className="text-[11px] text-stone-500 font-light flex items-center gap-1 pt-1">
                      <Clock className="w-3 h-3 text-[#747157]" />
                      <span>Best Hours: {place.timing}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Concierge Transfer Assistance */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleWhatsAppInquiry(place.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F3EEE7] group-hover:bg-[#747157] text-[#222222] group-hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Book Cab / Concierge Visit</span>
                  <MessageSquare className="w-3.5 h-3.5 text-[#B99D75] group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Concierge Assistance Card */}
        <div className="bg-[#F3EEE7] rounded-3xl p-8 sm:p-12 border border-[#E5DFD7] text-center space-y-4 max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center text-[#747157] shadow-sm">
            <Compass className="w-6 h-6 text-[#747157]" />
          </div>
          <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#1C1C1C]">
            Let Our Concierge Curate Your Itinerary
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl mx-auto">
            From VIP table access at Siolim and Arpora clubs to private boat charters, casino chips, and chauffeur cars—our concierge team makes Goa effortless.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(
                'Hello Aurelia Concierge, I would like personal assistance planning my sightseeing & day tours in Goa.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
            >
              WhatsApp Concierge
            </a>
            <button
              onClick={onBookRoom}
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-[#222222] border border-[#E5DFD7] text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
            >
              Reserve Room at Aurelia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
