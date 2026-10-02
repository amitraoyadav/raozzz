import React from 'react';
import { X, Play } from 'lucide-react';
import { SMLWVideo } from './smlwData';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: SMLWVideo | null;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#141416] border border-stone-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-[#1c1d22]">
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">{video.title}</h4>
            <p className="text-xs text-[#d2cd48]">{video.couple} · {video.location}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative pt-[56.25%] bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
