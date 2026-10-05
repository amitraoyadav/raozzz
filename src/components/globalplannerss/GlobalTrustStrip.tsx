import React from 'react';

export const GlobalTrustStrip: React.FC = () => {
  const venues = [
    'ITC Grand Goa',
    'Alila Diwa Goa',
    'The Leela Jaipur',
    'Taj Exotica',
    'W Goa',
    'Shangri-La Bengaluru'
  ];

  return (
    <section className="bg-[#14110E] py-6 border-b border-stone-800/80 text-stone-300 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-[11px] font-serif uppercase tracking-widest text-[#C19A4B] font-semibold">
            Trusted by couples at
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-stone-400">
            {venues.map((venue, idx) => (
              <span key={idx} className="flex items-center gap-4">
                <span>{venue}</span>
                {idx < venues.length - 1 && <span className="opacity-30">·</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 bg-stone-900/80 px-3.5 py-1.5 rounded-full border border-stone-800">
          <span className="text-amber-400 text-sm tracking-widest">★★★★★</span>
          <span className="font-semibold text-white">5.0</span>
          <span className="text-stone-400 text-[11px]">· Google Verified Reviews</span>
        </div>
      </div>
    </section>
  );
};
