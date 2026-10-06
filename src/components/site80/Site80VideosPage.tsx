import React, { useState } from 'react';
import { Play, X, Film, Sparkles, Clock, Calendar, Volume2, ArrowRight } from 'lucide-react';
import { CLUB_VIDEOS, ClubVideo } from '../../data/site80Data';
import { site80Config } from '../../config/site80Config';

interface Site80VideosPageProps {
  onOpenBooking: () => void;
}

export const Site80VideosPage: React.FC<Site80VideosPageProps> = ({ onOpenBooking }) => {
  const [selectedVideo, setSelectedVideo] = useState<ClubVideo | null>(null);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-black text-white min-h-screen font-['Inter']">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          <Film className="w-3.5 h-3.5" />
          <span>Cinematic Nightlife</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-normal font-['Alegreya_Sans',sans-serif] uppercase tracking-wide leading-tight">
          Club <span className="text-[#FFD700]">Videos</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-400 font-light font-['Alegreya_Sans',sans-serif] leading-relaxed">
          Watch official aftermovies, midnight drop recaps, and exclusive theme night footage from {site80Config.BRAND_NAME} at The Suryaa New Delhi.
        </p>
      </div>

      {/* Featured Video Player Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-[#0d0d0d] shadow-2xl group">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={CLUB_VIDEOS[0].posterUrl}
              alt={CLUB_VIDEOS[0].title}
              className="w-full h-full object-cover brightness-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setSelectedVideo(CLUB_VIDEOS[0])}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFD700] text-black flex items-center justify-center transition-all duration-300 hover:scale-115 hover:shadow-[0_0_35px_rgba(255,215,0,0.8)] cursor-pointer pl-1 shadow-2xl"
                aria-label={`Play ${CLUB_VIDEOS[0].title}`}
              >
                <Play className="w-8 h-8 fill-current" />
              </button>
            </div>

            {/* Video Badges & Details */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-black/80 border border-[#FFD700]/60 text-[#FFD700] inline-block">
                  Featured Official Aftermovie
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
                  {CLUB_VIDEOS[0].title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light">
                  {CLUB_VIDEOS[0].subtext}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 shrink-0 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFD700]" />
                  {CLUB_VIDEOS[0].duration}
                </span>
                <span>•</span>
                <span>{CLUB_VIDEOS[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
            All Video Recaps
          </h3>
          <span className="text-xs text-gray-400 font-mono">{CLUB_VIDEOS.length} Videos Available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUB_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 hover:border-[#FFD700]/70 cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                <img
                  src={video.posterUrl}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                  loading="lazy"
                />

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-white/90 border border-white/20">
                  {video.duration}
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/70 group-hover:bg-[#FFD700] text-white group-hover:text-black border border-white/20 group-hover:border-[#FFD700] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg pl-0.5">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 space-y-1 bg-[#0e0e0e]">
                <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono mb-1">
                  <span>{video.date}</span>
                  <span className="text-[#FFD700] font-semibold">HD 1080p</span>
                </div>
                <h4 className="text-lg font-bold font-['Alegreya_Sans',sans-serif] text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 font-light">
                  {video.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Strip */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-b from-[#111111] to-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD700] block mb-1">
              Be Part of the Atmosphere
            </span>
            <h3 className="text-2xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
              Ready to witness the high voltage energy live?
            </h3>
            <p className="text-xs text-gray-400 max-w-lg mt-1 font-light">
              Reserve your VIP table to enjoy premium bottle service, priority entrance, and private butler attention.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg shrink-0"
          >
            Reserve Table Now
          </button>
        </div>
      </div>

      {/* Video Lightbox Playback Modal */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer z-50 transition-colors"
            aria-label="Close Video Player"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Player Modal Frame */}
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
              <video
                src={selectedVideo.videoUrl}
                poster={selectedVideo.posterUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom Bar */}
            <div className="p-5 bg-[#0e0e0e] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest block">
                  {selectedVideo.date} • {selectedVideo.duration}
                </span>
                <h4 className="text-xl font-bold font-['Alegreya_Sans',sans-serif] text-white">
                  {selectedVideo.title}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {selectedVideo.subtext}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedVideo(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-full bg-[#FFD700] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md shrink-0 ml-4"
              >
                Book For This Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
