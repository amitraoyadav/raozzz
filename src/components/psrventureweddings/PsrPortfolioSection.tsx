import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Eye, 
  Heart,
  Crown,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { 
  PSR_REAL_WEDDINGS, 
  PSR_GALLERY, 
  RealWeddingStory, 
  GalleryPhotoItem 
} from '../../data/psrWeddingsData';
import { PsrGalleryLightboxModal } from './PsrGalleryLightboxModal';

interface PsrPortfolioSectionProps {
  onOpenConsultation: (referenceStory?: string) => void;
}

export const PsrPortfolioSection: React.FC<PsrPortfolioSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'stories' | 'gallery'>('stories');
  const [galleryFilter, setGalleryFilter] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryCategories = ['All', 'Mandap', 'Sangeet', 'Mehendi', 'Haldi', 'Reception', 'Decor', 'Couple'];

  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'All') return PSR_GALLERY;
    return PSR_GALLERY.filter(item => item.category === galleryFilter);
  }, [galleryFilter]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio-section" className="py-20 lg:py-28 bg-[#120306] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Crown className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Captured Royal Memories
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Portfolio & Real Wedding Stories
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Witness how our team breathes life into monumental palace courtyards and coastal beaches. Explore real couple narratives and filter our curated visual gallery by ceremony.
          </p>

          {/* Section Switcher: Real Stories vs Photo Gallery */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'stories'
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
              }`}
            >
              Real Wedding Narratives ({PSR_REAL_WEDDINGS.length})
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'gallery'
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Visual Gallery ({PSR_GALLERY.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: REAL WEDDINGS NARRATIVES */}
        {activeTab === 'stories' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PSR_REAL_WEDDINGS.map(story => (
                <div
                  key={story.id}
                  className="bg-[#1C060A] rounded-3xl border border-[#C5A059]/25 overflow-hidden shadow-2xl hover:border-[#DFBE78]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Photo Banner */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={story.coverImage}
                      alt={story.coupleNames}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C060A] via-transparent to-black/30" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#DFBE78] text-[10px] font-bold uppercase tracking-wider border border-[#DFBE78]/30">
                      {story.destination}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-serif italic text-[#DFBE78] block">
                        Theme: {story.theme}
                      </span>
                      <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
                        {story.coupleNames}
                      </h3>
                      <span className="text-xs text-stone-300 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#DFBE78]" />
                        {story.venue}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                      {story.story}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-stone-800">
                      <span className="text-[10px] uppercase font-bold text-[#DFBE78] tracking-wider block">
                        Celebration Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-300 font-light">
                        {story.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBE78] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Info & Action */}
                    <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-[11px] text-stone-400 space-x-3">
                        <span>{story.weddingDate}</span>
                        <span>•</span>
                        <span>{story.guestCount}</span>
                      </div>

                      <button
                        onClick={() => onOpenConsultation(`Wedding like ${story.coupleNames} at ${story.venue}`)}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Inquire This Style</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: VISUAL GALLERY WITH CATEGORY FILTERS & LIGHTBOX */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            {/* Gallery Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    galleryFilter === cat
                      ? 'bg-[#DFBE78] text-[#1A0509] font-bold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo Masonry/Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => handleOpenLightbox(index)}
                  className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-[#C5A059]/20 cursor-pointer shadow-lg hover:border-[#DFBE78] transition-all duration-300"
                >
                  <div className="h-64 sm:h-72 overflow-hidden">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#DFBE78] text-[#1A0509] font-bold text-[9px] uppercase tracking-wider w-max mb-1.5">
                      {photo.category}
                    </span>
                    <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-white leading-tight">
                      {photo.title}
                    </h4>
                    <span className="text-xs text-[#DFBE78] flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {photo.location}
                    </span>
                    <div className="pt-2 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                      <Eye className="w-3.5 h-3.5 text-[#DFBE78]" />
                      <span>Click to expand full screen</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <PsrGalleryLightboxModal
        photos={filteredGallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex(prev => (prev > 0 ? prev - 1 : filteredGallery.length - 1))}
        onNext={() => setLightboxIndex(prev => (prev < filteredGallery.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
};
