import React, { useState } from 'react';
import { ArrowRight, MapPin, Sparkles, Users, Calendar, X, Eye } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../../data/site75Data';

interface Site75PortfolioProps {
  onStartPlanning: () => void;
  onExploreAll?: () => void;
}

export const Site75Portfolio: React.FC<Site75PortfolioProps> = ({
  onStartPlanning,
  onExploreAll
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const categories = ['all', 'Palaces', 'Beachfront', 'International', 'Modern Luxe'];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio-section" className="py-24 sm:py-32 bg-[#080B12] text-white border-t border-[#20293D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            The Living Archive
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Real Wedding <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37]">
              Masterpieces
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Every celebration in our archive represents months of meticulous bespoke scenography, architectural lighting, and familial storytelling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#080B12] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#131A29] text-slate-300 hover:text-white border border-[#20293D]'
              }`}
            >
              {cat === 'all' ? 'All Masterpieces' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setActiveCaseStudy(project)}
              className="group bg-[#0E131F] rounded-3xl overflow-hidden border border-[#20293D] hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Visual Imagery */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">
                    {project.category}
                  </span>

                  {/* Quick View Button */}
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-all">
                    <Eye className="w-4 h-4" />
                  </span>

                  {/* Title Block over Image */}
                  <div className="absolute bottom-5 left-6 right-6 text-left">
                    <span className="text-xs text-[#D4AF37] font-serif italic block mb-0.5">
                      {project.couple}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-300 font-sans flex items-center gap-1.5 mt-1 font-light">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 text-left space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Concept Color Palette Swatches */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Palette:</span>
                      <div className="flex items-center gap-1">
                        {project.conceptPalette.map((color, i) => (
                          <span
                            key={i}
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
                      <span>{project.guestCount} Guests</span>
                      <span>·</span>
                      <span>{project.functionsCount} Functions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                <span className="text-[11px] font-medium text-[#D4AF37] group-hover:underline">
                  Read Case Study &amp; View Spatial Design →
                </span>
                <span className="w-8 h-8 rounded-full bg-[#131A29] border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-[#D4AF37] group-hover:text-[#080B12] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0E131F] border border-[#20293D] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#080B12]/80 border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
              <img
                src={activeCaseStudy.heroImage}
                alt={activeCaseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#080B12] text-[10px] font-mono uppercase font-bold tracking-widest inline-block">
                  {activeCaseStudy.category} Case Study
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                  {activeCaseStudy.title}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="text-[#D4AF37] font-semibold">{activeCaseStudy.couple}</span>
                  <span>·</span>
                  <span>{activeCaseStudy.location}</span>
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Concept Note */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
                  The Curatorial Concept
                </span>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {activeCaseStudy.description}
                </p>
              </div>

              {/* Ceremony Breakdown */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
                  Ceremonial Architecture
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCaseStudy.ceremonies.map((ceremony, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#131A29] border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold block">
                        Chapter 0{idx + 1}
                      </span>
                      <h4 className="font-serif text-base text-white font-medium">
                        {ceremony.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-light">
                        {ceremony.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid of this Event */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
                  Celebration Moments
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeCaseStudy.galleryImages.map((img, idx) => (
                    <div key={idx} className="h-36 rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={img}
                        alt="Wedding Moment"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-6 border-t border-[#20293D] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-stone-400 font-light">
                  Want an equivalent cinematic vision for your upcoming wedding?
                </span>
                <button
                  onClick={() => {
                    setActiveCaseStudy(null);
                    onStartPlanning();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-lg"
                >
                  Plan Your Wedding With Aura Luxe
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Site75Portfolio;
