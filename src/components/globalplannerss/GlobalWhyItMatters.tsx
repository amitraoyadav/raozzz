import React from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

export const GlobalWhyItMatters: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            Why it matters
          </p>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-100 leading-snug">
            A wedding is not just how it looks. It’s how it unfolds, how it feels, and what stays with you after.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#171410] border border-stone-800">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3">
              What changes
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
              The wedding doesn’t get smaller. What changes is how it feels — you stay as involved as you choose, without carrying the weight.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#171410] border border-stone-800">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3">
              On the day
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
              You are not managing your wedding — we are. Your family isn’t coordinating — they’re celebrating, fully present.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#171410] border border-stone-800">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3">
              Why we exist
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
              Because every couple deserves someone in their corner — someone who stays calm, takes ownership, and shows up. No matter what.
            </p>
          </div>
        </div>

        {/* Bride Spotlight Quote Box */}
        <div className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1C1713] to-[#12100E] border border-[#C19A4B]/30 shadow-2xl">
          <span className="font-serif text-5xl sm:text-6xl text-[#C19A4B] leading-none block mb-2">
            “
          </span>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white italic leading-relaxed mb-6">
            If {globalPlannerssConfig.SITE_NAME} wasn’t there, this wedding wouldn’t have happened.
          </p>
          <p className="text-xs font-sans uppercase tracking-widest text-[#E5D7B7]">
            — A bride, on her wedding morning
          </p>
        </div>
      </div>
    </section>
  );
};
