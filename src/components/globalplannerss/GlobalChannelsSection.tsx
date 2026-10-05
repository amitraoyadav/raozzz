import React from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

interface GlobalChannelsSectionProps {
  onBookVideoCall: () => void;
}

export const GlobalChannelsSection: React.FC<GlobalChannelsSectionProps> = ({ onBookVideoCall }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
          Reach us
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-12">
          However feels easiest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Channel 1: Call */}
          <a
            href={`tel:${globalPlannerssConfig.PHONE.replace(/\s+/g, '')}`}
            className="p-8 rounded-2xl bg-[#171410] border border-stone-800 hover:border-[#C19A4B]/60 transition-all flex flex-col items-center justify-center text-center group shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-[#C19A4B]/10 border border-[#C19A4B]/30 flex items-center justify-center text-[#C19A4B] text-xl mb-4 group-hover:scale-110 transition-transform">
              📞
            </div>
            <span className="font-serif text-lg font-semibold text-white block mb-1">
              Call us
            </span>
            <span className="text-xs text-stone-400 font-sans">
              {globalPlannerssConfig.PHONE_DISPLAY}
            </span>
          </a>

          {/* Channel 2: WhatsApp */}
          <a
            href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hi%20Global%20Plannerss,%20we%20would%20love%20to%20talk%20about%20our%20wedding.`}
            target="_blank"
            rel="noreferrer"
            className="p-8 rounded-2xl bg-[#171410] border border-stone-800 hover:border-emerald-500/60 transition-all flex flex-col items-center justify-center text-center group shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-700/40 flex items-center justify-center text-emerald-400 text-xl mb-4 group-hover:scale-110 transition-transform">
              💬
            </div>
            <span className="font-serif text-lg font-semibold text-white block mb-1">
              WhatsApp
            </span>
            <span className="text-xs text-stone-400 font-sans">
              Chat with a Director now
            </span>
          </a>

          {/* Channel 3: Video Consultation */}
          <button
            type="button"
            onClick={onBookVideoCall}
            className="p-8 rounded-2xl bg-[#171410] border border-stone-800 hover:border-[#C19A4B]/60 transition-all flex flex-col items-center justify-center text-center group shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-[#C19A4B]/10 border border-[#C19A4B]/30 flex items-center justify-center text-[#C19A4B] text-xl mb-4 group-hover:scale-110 transition-transform">
              📹
            </div>
            <span className="font-serif text-lg font-semibold text-white block mb-1">
              Book a consultation
            </span>
            <span className="text-xs text-stone-400 font-sans">
              Video call — we’ll confirm a time
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
