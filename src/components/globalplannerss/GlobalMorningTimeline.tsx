import React from 'react';
import { MORNING_TIMELINE } from '../../data/globalPlannerssData';

export const GlobalMorningTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            The morning of your wedding
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight max-w-2xl mx-auto">
            While you’re getting ready, we’re carrying everything else.
          </h2>
        </div>

        {/* Timeline Table */}
        <div className="bg-[#151210] rounded-2xl border border-stone-800 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 p-4 sm:p-5 bg-[#1B1714] border-b border-stone-800 text-[11px] font-serif uppercase tracking-widest text-stone-400">
            <div className="col-span-3 sm:col-span-2 font-semibold">Time</div>
            <div className="col-span-4 sm:col-span-5 font-semibold text-stone-300">Your family</div>
            <div className="col-span-5 sm:col-span-5 font-semibold text-[#E5D7B7]">Our team</div>
          </div>

          {/* Timeline Rows */}
          <div className="divide-y divide-stone-800/80 font-sans text-xs sm:text-sm">
            {MORNING_TIMELINE.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-4 sm:p-5 hover:bg-white/[0.02] transition items-start">
                <div className="col-span-3 sm:col-span-2 font-serif text-[#C19A4B] font-semibold text-xs sm:text-sm">
                  {item.time}
                </div>
                <div className="col-span-4 sm:col-span-5 text-stone-400 pr-2 leading-relaxed">
                  {item.family}
                </div>
                <div className="col-span-5 sm:col-span-5 text-stone-200 font-medium pl-1 leading-relaxed">
                  {item.team}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs italic text-stone-400 text-center mt-8 font-serif">
          This is what carrying a wedding means. You were present. We handled the rest.
        </p>
      </div>
    </section>
  );
};
