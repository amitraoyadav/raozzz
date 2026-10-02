import React, { useState } from 'react';
import { PHOTO_GALLERY, VIDEO_GALLERY, PhotoItem, VideoItem } from '../../data/lawlinksData';
import {
  Image,
  Video,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Clock,
  User,
  ExternalLink
} from 'lucide-react';

interface Props {
  initialTab?: 'photos' | 'videos';
}

export const LawLinksGallery: React.FC<Props> = ({ initialTab = 'photos' }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>(initialTab);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [photoCategory, setPhotoCategory] = useState<string>('all');

  const categories = ['all', 'Court & Conferences', 'Team & Partners', 'Seminars & Arbitrations', 'Office & Events'];

  const filteredPhotos = PHOTO_GALLERY.filter((p) => {
    if (photoCategory === 'all') return true;
    return p.category === photoCategory;
  });

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Media Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Our Gallery</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            High-profile arbitration panels, seminars, court appearances, and lecture series.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Tab switchers */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'photos'
                ? 'bg-[#03A9F5] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Photo Gallery (20 Photos)</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'videos'
                ? 'bg-[#03A9F5] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Video Lectures (5 Videos)</span>
          </button>
        </div>

        {/* 2. PHOTOS VIEW */}
        {activeTab === 'photos' && (
          <div className="space-y-6">
            {/* Category tags */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPhotoCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    photoCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'All Photos' : cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="h-48 sm:h-56 bg-slate-100 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 relative group cursor-pointer border border-slate-200"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                    <span className="text-[11px] font-bold tracking-tight line-clamp-1">{photo.title}</span>
                    <span className="text-[10px] text-sky-300">{photo.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. VIDEOS VIEW */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_GALLERY.map((vid) => (
              <div
                key={vid.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                {/* Video thumbnail with play trigger */}
                <div
                  onClick={() => setSelectedVideo(vid)}
                  className="h-52 bg-slate-900 relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/lawlinks/about-banner.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#03A9F5] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-[11px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{vid.duration}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <User className="w-3.5 h-3.5 text-[#03A9F5]" />
                      <span>{vid.presenter}</span>
                    </div>
                    <h3
                      onClick={() => setSelectedVideo(vid)}
                      className="text-base font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {vid.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedVideo(vid)}
                      className="text-xs font-bold uppercase tracking-wider text-[#03A9F5] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch Lecture</span>
                      <Play className="w-3 h-3" />
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-700 text-xs flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Photo Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#03A9F5] text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#03A9F5] text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredPhotos[selectedPhotoIndex].src}
              alt={filteredPhotos[selectedPhotoIndex].title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-3 text-center text-white">
              <p className="text-sm font-bold">{filteredPhotos[selectedPhotoIndex].title}</p>
              <p className="text-xs text-slate-400">
                Photo {selectedPhotoIndex + 1} of {filteredPhotos.length} • {filteredPhotos[selectedPhotoIndex].category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[11px] text-[#03A9F5] font-semibold uppercase">{selectedVideo.presenter}</span>
                <h3 className="text-base font-bold line-clamp-1">{selectedVideo.title}</h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 bg-slate-900 text-slate-300 text-xs">
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
