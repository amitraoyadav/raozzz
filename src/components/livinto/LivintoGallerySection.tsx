import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Clock,
  Home,
  Layers,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { PROJECTS_SHOWCASE_DATA, ProjectShowcase } from '../../data/livintoInteriorsData';

interface LivintoGallerySectionProps {
  onOpenConsultation: () => void;
}

export const LivintoGallerySection: React.FC<LivintoGallerySectionProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectShowcase | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const FILTERS = [
    { id: 'all', label: 'All Projects' },
    { id: 'Apartment', label: 'Apartments' },
    { id: 'Villa', label: 'Villas & Penthouses' },
    { id: 'Bengaluru', label: 'Bengaluru' },
    { id: 'Mumbai', label: 'Mumbai' },
    { id: 'Hyderabad', label: 'Hyderabad' },
    { id: 'Kochi', label: 'Kochi' },
  ];

  const filteredProjects = PROJECTS_SHOWCASE_DATA.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Apartment') return proj.propertyType.toLowerCase().includes('apartment');
    if (activeFilter === 'Villa') return proj.propertyType.toLowerCase().includes('villa') || proj.propertyType.toLowerCase().includes('penthouse');
    return proj.city.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const handleOpenProject = (proj: ProjectShowcase) => {
    setSelectedProject(proj);
    setLightboxImageIndex(0);
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#814882]" />
            <span>Real Delivered Living Spaces</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            RECENT HANDOVERS &amp; GALLERY
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore 100% genuine photographs of customized home interiors designed, manufactured at our factory, and handed over across India.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#814882] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#814882] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-[11px] font-bold shadow">
                      {project.propertyType}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/10 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{project.duration}</span>
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#814882]" />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#814882] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.city}</span>
                    <span>•</span>
                    <span>{project.areaSqFt}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-[#814882] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#814882]">
                <span>View Full Photo Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Active Image with Prev / Next */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-950">
              <img
                src={selectedProject.images[lightboxImageIndex] || selectedProject.coverImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              {/* Prev / Next controls */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setLightboxImageIndex(
                        (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setLightboxImageIndex((prev) => (prev + 1) % selectedProject.images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-full text-white text-xs font-mono">
                {lightboxImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="p-4 bg-slate-100 flex gap-2 overflow-x-auto">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImageIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 cursor-pointer transition-all ${
                    lightboxImageIndex === idx ? 'border-[#814882] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#814882] uppercase tracking-wider">
                    {selectedProject.city} • {selectedProject.designStyle}
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold">
                    {selectedProject.propertyType}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    {selectedProject.duration}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 mb-3">
                  Delivered Interior Work &amp; Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#814882]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Want a similar design for your home? Connect with our project architect.
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
                >
                  Book Free Consultation For This Style
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
