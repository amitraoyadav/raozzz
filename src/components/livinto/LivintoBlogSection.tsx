import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  X,
  Share2,
  Calendar,
} from 'lucide-react';
import { BLOGS_DATA, BlogItem } from '../../data/livintoInteriorsData';

interface LivintoBlogSectionProps {
  onOpenConsultation: () => void;
}

export const LivintoBlogSection: React.FC<LivintoBlogSectionProps> = ({ onOpenConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#814882]" />
            <span>Design &amp; Material Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            HOME INTERIOR KNOWLEDGE HUB
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Expert guides on modular kitchens, wardrobe configurations, false ceilings, and interior budget planning authored by senior architects.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#814882] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-[11px] font-bold shadow">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-[#814882] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#814882]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 w-full bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {selectedArticle.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
