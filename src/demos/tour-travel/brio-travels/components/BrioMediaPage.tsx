import React, { useState } from 'react';
import { Camera, Video, Play, Eye, X, MapPin } from 'lucide-react';
import { EXPERIENCE_GALLERY, EXPERIENCE_VIDEOS } from '../data/brioTravelsData';

export const BrioMediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [lightboxPhoto, setLightboxPhoto] = useState<typeof EXPERIENCE_GALLERY[0] | null>(null);
  const [videoModal, setVideoModal] = useState<typeof EXPERIENCE_VIDEOS[0] | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            Media Hub
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Photos & Travel Videos
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-['Inter']">
            Visual glimpses of destinations, resorts, and travel moments captured across our holiday packages.
          </p>

          {/* Tab Switcher */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'photos'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Photo Gallery ({EXPERIENCE_GALLERY.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'videos'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Travel Videos ({EXPERIENCE_VIDEOS.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Photos */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn">
            {EXPERIENCE_GALLERY.map(item => (
              <div
                key={item.id}
                onClick={() => setLightboxPhoto(item)}
                className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 shadow-xs hover:shadow-lg transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-600 inline-block mb-1">
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
        )}

        {/* Tab 2: Videos */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {EXPERIENCE_VIDEOS.map(video => (
              <div
                key={video.id}
                onClick={() => setVideoModal(video)}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                    {video.duration}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 font-['Poppins']">
                    {video.title}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {video.views}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={lightboxPhoto.image} alt={lightboxPhoto.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-6 bg-slate-900 text-white">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-600 inline-block mb-1">{lightboxPhoto.category}</span>
              <h3 className="text-lg font-bold font-['Poppins']">{lightboxPhoto.title}</h3>
              <p className="text-xs text-slate-400">{lightboxPhoto.location}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Demo Modal */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setVideoModal(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 p-6 text-white text-center space-y-4 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-teal-600/30 text-teal-400 flex items-center justify-center mx-auto">
              <Play className="w-8 h-8 fill-teal-400" />
            </div>
            <h3 className="text-lg font-bold font-['Poppins']">{videoModal.title}</h3>
            <p className="text-xs text-slate-400">
              Demo Video Reel Preview ({videoModal.duration}) · Recorded during genuine Brio Travels tour departures.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
