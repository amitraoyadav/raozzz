import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Eye, 
  Quote, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { SAMAROH_REAL_WEDDINGS, RealCelebration } from '../../data/samarohLuxeData';
import { SamarohWeddingLightboxModal } from './SamarohWeddingLightboxModal';

interface SamarohRealWeddingsSectionProps {
  onOpenConsultation: (brief?: string) => void;
}

export const SamarohRealWeddingsSection: React.FC<SamarohRealWeddingsSectionProps> = ({
  onOpenConsultation
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');
  const [lightboxSubtitle, setLightboxSubtitle] = useState('');

  const handleOpenLightbox = (wedding: RealCelebration) => {
    setLightboxImages(wedding.galleryImages);
    setLightboxIndex(0);
    setLightboxTitle(wedding.coupleName);
    setLightboxSubtitle(`${wedding.celebrationType} · ${wedding.venueName}, ${wedding.city}`);
    setLightboxOpen(true);
  };

  return (
    <section id="lookbook-section" className="py-20 lg:py-28 bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
              <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
                Real Celebrations Lookbook
              </span>
            </div>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Real Weddings Brought to Life
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl">
              Authentic stories, venue transformations, and honest reviews from couples across Bengaluru, Hyderabad, and Goa.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Lookbook Exploration Brief')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E06D53] hover:text-[#C8523B] transition-colors cursor-pointer group"
          >
            <span>Discuss Your Celebration Vision</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Real Weddings Stories */}
        <div className="space-y-16">
          {SAMAROH_REAL_WEDDINGS.map((wedding, idx) => (
            <div 
              key={wedding.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-xl ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Collage: 7 cols */}
              <div className="lg:col-span-7 space-y-3">
                <div 
                  onClick={() => handleOpenLightbox(wedding)}
                  className="rounded-2xl overflow-hidden h-72 sm:h-96 relative border border-stone-800 shadow-md cursor-pointer group"
                >
                  <img
                    src={wedding.coverImage}
                    alt={wedding.coupleName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                      {wedding.city}
                    </span>
                    <span className="bg-[#E06D53] px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Gallery ({wedding.galleryImages.length} Photos)</span>
                    </span>
                  </div>
                </div>

                {/* Sub-thumbnails */}
                <div className="grid grid-cols-3 gap-3">
                  {wedding.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => handleOpenLightbox(wedding)}
                      className="rounded-xl overflow-hidden h-24 border border-stone-800 cursor-pointer group"
                    >
                      <img
                        src={img}
                        alt={`${wedding.coupleName} thumb ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Story & Review Content: 5 cols */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#E06D53] font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{wedding.venueName}</span>
                  </div>
                  <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-white">
                    {wedding.coupleName}
                  </h3>
                  <span className="text-xs text-stone-400 block font-medium">
                    {wedding.celebrationType}
                  </span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {wedding.story}
                </p>

                {/* Key Decor Elements Tag Cloud */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                    Signature Installations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {wedding.keyDecorElements.map((elem, i) => (
                      <span key={i} className="text-[11px] bg-stone-800 text-stone-300 px-2.5 py-1 rounded-lg border border-stone-700/60">
                        {elem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Card */}
                <div className="p-4 rounded-2xl bg-[#1C1816] border border-stone-800 relative space-y-2">
                  <Quote className="w-5 h-5 text-[#E06D53]/40 absolute top-3 right-3" />
                  <p className="text-xs text-stone-300 italic leading-relaxed font-light pr-6">
                    "{wedding.testimonial.quote}"
                  </p>
                  <div className="text-[11px] font-bold text-white">
                    — {wedding.testimonial.author}
                    <span className="text-stone-500 font-normal block">{wedding.testimonial.relation}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(`Inspired by ${wedding.coupleName} at ${wedding.venueName}`)}
                    className="w-full py-3 rounded-xl bg-stone-800 hover:bg-[#E06D53] text-stone-200 hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Style My Wedding Like This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <SamarohWeddingLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        title={lightboxTitle}
        subtitle={lightboxSubtitle}
      />
    </section>
  );
};
