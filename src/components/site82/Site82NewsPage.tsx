import React, { useState } from 'react';
import { Newspaper, Calendar, ExternalLink, ArrowRight, X } from 'lucide-react';
import { REAL_ESTATE_NEWS, NewsItem } from '../../data/site82Data';

export const Site82NewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <div className="bg-[#FCFAF9] min-h-screen pt-28 pb-20 text-[#1E2430]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F54900] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Market Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1E2430] tracking-tight">
            Real Estate News &amp; Infrastructure Updates
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
            Stay ahead with verified updates on Jewar International Airport milestones, UP RERA circulars, and NCR commercial trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REAL_ESTATE_NEWS.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded-full bg-black/75 text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                    <span>{item.date}</span>
                    <span className="text-[#F54900] font-semibold">{item.source}</span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-[#1E2430] group-hover:text-[#F54900] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-neutral-100 mt-4">
                <span className="text-neutral-500 font-mono">Source: {item.source}</span>
                <span className="text-[#F54900] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full my-auto overflow-hidden shadow-2xl relative text-[#1E2430]">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold text-[#F54900]">
                {selectedNews.category} · {selectedNews.date}
              </span>
              <button
                onClick={() => setSelectedNews(null)}
                className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight">{selectedNews.title}</h1>
              <p className="text-xs text-neutral-500 font-mono">Reported by {selectedNews.source}</p>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
                <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-3">
                {selectedNews.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
