import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, X, Share2, Check } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../../data/site81Data';

interface Site81JournalSectionProps {
  onOpenArticleModal?: (article: JournalArticle) => void;
}

export const Site81JournalSection: React.FC<Site81JournalSectionProps> = ({
  onOpenArticleModal
}) => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const handleArticleClick = (art: JournalArticle) => {
    if (onOpenArticleModal) {
      onOpenArticleModal(art);
    } else {
      setActiveArticle(art);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Valtierra Journal &amp; Editorial</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-950 font-normal">
              Market Intelligence &amp; Architectural Design
            </h2>
            <p className="text-sm text-neutral-500 mt-2 max-w-2xl font-light">
              Critical essays, sovereign property market forecasts, and private walkthroughs of the world’s most consequential estates.
            </p>
          </div>

          <button
            onClick={() => handleArticleClick(JOURNAL_ARTICLES[0])}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-900 hover:text-amber-700 transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((art) => (
            <article
              key={art.id}
              onClick={() => handleArticleClick(art)}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-200/80 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/75 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                    {art.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 font-mono">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-neutral-900 group-hover:text-amber-800 transition-colors font-medium leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 font-light leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-800 block text-xs">
                      {art.author}
                    </span>
                    <span className="text-[11px] text-neutral-400">{art.authorRole}</span>
                  </div>
                  <span className="text-amber-700 font-mono text-[11px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Read Story →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl relative text-neutral-900">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-700">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 text-neutral-500 hover:text-black rounded hover:bg-neutral-100 transition-colors cursor-pointer"
                  title="Share story"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 text-neutral-500 hover:text-black rounded hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
              <h1 className="text-2xl sm:text-4xl font-serif font-normal text-neutral-950 leading-tight">
                {activeArticle.title}
              </h1>

              <p className="text-base sm:text-lg font-serif italic text-neutral-600 mt-3 leading-relaxed">
                {activeArticle.subtitle}
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500 font-mono pb-6 border-b border-neutral-100">
                <span>By {activeArticle.author} ({activeArticle.authorRole})</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
              </div>

              <div className="my-6 aspect-[16/9] rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-neutral max-w-none text-neutral-800 text-sm sm:text-base leading-relaxed space-y-4">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 p-5 bg-neutral-50 border border-neutral-200 rounded-xl text-center">
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Stay Informed on Super-Prime Movements
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Receive private quarterly market dossiers directly to your private office.
                </p>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="mt-3 px-5 py-2 bg-neutral-900 text-white rounded text-xs uppercase font-semibold tracking-wider hover:bg-neutral-800"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
