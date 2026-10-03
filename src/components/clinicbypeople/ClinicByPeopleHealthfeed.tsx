import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  User,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Search,
} from 'lucide-react';
import { HEALTHFEED_ARTICLES, HealthfeedArticle } from '../../data/clinicByPeopleData';

interface ClinicByPeopleHealthfeedProps {
  onOpenConsultationModal: (speciality?: string, note?: string) => void;
}

export const ClinicByPeopleHealthfeed: React.FC<ClinicByPeopleHealthfeedProps> = ({
  onOpenConsultationModal,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<HealthfeedArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'General Surgery',
    "Women's Health",
    'Orthopaedics',
    'Urology',
    'ENT',
    'Plastic Surgery',
  ];

  const filteredArticles =
    activeCategory === 'All'
      ? HEALTHFEED_ARTICLES
      : HEALTHFEED_ARTICLES.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="healthfeed" className="py-16 sm:py-24 bg-white border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Medical Healthfeed &amp; Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Doctor-Verified Healthcare Knowledge
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, honest medical guides written by operating surgeons on disease symptoms, surgical procedures, and post-op care.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0C5BE2] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.slug}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer hover:border-[#0C5BE2]/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-[#0C5BE2] border border-blue-100 text-[10px]">
                    {art.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0C5BE2] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mt-2.5 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">{art.date}</span>
                <span className="font-bold text-[#0C5BE2] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-[#0C5BE2] border border-blue-100 text-[10px]">
                {selectedArticle.category}
              </span>
              <span className="text-slate-400">• {selectedArticle.readTime}</span>
              <span className="text-slate-400">• {selectedArticle.date}</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-2">
              {selectedArticle.title}
            </h3>
            <span className="text-xs text-slate-500 font-medium block mb-5">
              Authored by {selectedArticle.author}
            </span>

            {/* Key Takeaways Box */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C5BE2] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0C5BE2]" />
                Key Clinical Takeaways
              </h4>
              <ul className="space-y-1.5">
                {selectedArticle.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onOpenConsultationModal(
                    selectedArticle.category,
                    `Inquiry after reading: ${selectedArticle.title}`
                  );
                  setSelectedArticle(null);
                }}
                className="flex-1 py-3 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Discuss with a Specialist
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
