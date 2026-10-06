import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Play, Pause } from 'lucide-react';
import { site79Config } from '../../config/site79Config';

interface Site79HeroProps {
  onOpenTableBooking: () => void;
  onOpenGuestlist: () => void;
  onOpenWalkIn: () => void;
}

export const Site79Hero: React.FC<Site79HeroProps> = ({
  onOpenTableBooking,
  onOpenGuestlist,
  onOpenWalkIn
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full h-[calc(65vh-3.5rem)] sm:h-[75vh] lg:h-screen flex items-center justify-center text-center p-2 sm:p-4 bg-[#050505] overflow-hidden pt-20 sm:pt-24 lg:pt-20">
      {/* Video Container with Rounded Border matching Priveé */}
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DFB759]/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-black">
        {/* HTML5 Autoplay Nightlife Video with high quality poster fallback */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-110 rounded-2xl sm:rounded-3xl scale-105 transition-transform duration-1000"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80"
        >
          {/* Robust public video streams */}
          <source
            src="https://static.priveenewdelhi.com/files/bf47e3174111f6e0cacfbf596dab2bb8.webm"
            type="video/webm"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,183,89,0.1),transparent_70%)] pointer-events-none" />

        {/* Central Brand Headline Overlay */}
        <div className="absolute inset-x-4 top-1/3 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#DFB759]/40 text-[#DFB759] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-md mb-3">
            <Sparkles className="w-3 h-3 text-[#DFB759]" />
            <span>The Gold Standard of Delhi Nightlife</span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.18em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] leading-tight">
            Elysium
            <span className="block text-xl sm:text-3xl md:text-4xl tracking-[0.28em] font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759] mt-1 sm:mt-2">
              THE ECSTASY
            </span>
          </h1>

          <p className="max-w-xl text-xs sm:text-sm md:text-base text-gray-300 font-light mt-3 sm:mt-4 leading-relaxed font-['Inter'] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-4">
            Curated music, Void Acoustics sound, signature mixology, and high-energy VIP celebrations in the heart of Connaught Place.
          </p>
        </div>

        {/* Floating 3 CTAs Matching Reference */}
        <div className="absolute inset-x-0 bottom-4 px-2 sm:bottom-8 sm:px-4 flex justify-center z-30 pointer-events-none">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-5 max-w-full pointer-events-auto">
            {/* 1. RESERVE A TABLE */}
            <button
              onClick={onOpenTableBooking}
              className="touch-manipulation whitespace-nowrap relative overflow-hidden cursor-pointer px-4 py-2.5 sm:px-7 sm:py-3.5 md:px-9 md:py-4 backdrop-blur-xl bg-white/10 border border-white/30 text-white font-semibold text-xs sm:text-sm md:text-base rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] tracking-wider uppercase font-['Inter']"
            >
              Reserve a Table
            </button>

            {/* 2. JOIN GUESTLIST (Central Gold Highlight) */}
            <button
              onClick={onOpenGuestlist}
              className="touch-manipulation whitespace-nowrap relative overflow-hidden cursor-pointer px-5 py-2.5 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#e8c676] text-black font-extrabold text-xs sm:text-sm md:text-base rounded-full shadow-[0_0_35px_rgba(223,183,89,0.8)] transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_50px_rgba(244,215,116,1)] tracking-wider uppercase font-['Inter']"
            >
              Join Guestlist
            </button>

            {/* 3. VIP WALK-INS */}
            <button
              onClick={onOpenWalkIn}
              className="touch-manipulation whitespace-nowrap relative overflow-hidden cursor-pointer px-4 py-2.5 sm:px-7 sm:py-3.5 md:px-9 md:py-4 backdrop-blur-xl bg-white/10 border border-white/30 text-white font-semibold text-xs sm:text-sm md:text-base rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] tracking-wider uppercase font-['Inter']"
            >
              VIP Walk-ins
            </button>
          </div>
        </div>

        {/* Video Control Audio/Play Toggles in Bottom Corners */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 sm:p-2.5 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-[#DFB759] hover:border-[#DFB759]/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#DFB759]" />
            )}
          </button>

          <button
            onClick={togglePlay}
            className="p-2 sm:p-2.5 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-[#DFB759] hover:border-[#DFB759]/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            title={isPlaying ? 'Pause Video' : 'Play Video'}
            aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 text-[#DFB759]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
