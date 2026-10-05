import React from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import { JournalArticle, ProductItem } from '../../data/site76Data';

interface Site76JournalProps {
  articles: JournalArticle[];
  selectedArticleSlug?: string | null;
  onSelectArticle: (slug: string) => void;
  onBackToJournal: () => void;
  onNavigateToShop: () => void;
}

export const Site76Journal: React.FC<Site76JournalProps> = ({
  articles,
  selectedArticleSlug,
  onSelectArticle,
  onBackToJournal,
  onNavigateToShop
}) => {
  const currentArticle = selectedArticleSlug
    ? articles.find(a => a.slug === selectedArticleSlug)
    : null;

  // Single Article Reader View
  if (currentArticle) {
    return (
      <article className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back button */}
          <button
            type="button"
            onClick={onBackToJournal}
            className="text-xs font-semibold text-[#544133] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Slow Living Journal</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#9C4C36] font-mono uppercase tracking-widest">
              <span>{currentArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{currentArticle.readTime}</span>
            </div>

            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold text-[#1E1F21] leading-tight">
              {currentArticle.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-[#6F736D] pt-2 border-b border-[#E8E1D5] pb-4">
              <span className="font-medium text-[#1E1F21]">{currentArticle.author}</span>
              <span>•</span>
              <span>{currentArticle.authorRole}</span>
              <span>•</span>
              <span>{currentArticle.publishedDate}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#D5C7B5] bg-[#EAE2D7]">
            <img
              src={currentArticle.coverImage}
              alt={currentArticle.title}
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base text-[#544133] leading-relaxed font-light">
            <p className="text-lg font-normal italic text-[#1E1F21] border-l-2 border-[#C16A52] pl-4">
              {currentArticle.excerpt}
            </p>

            {currentArticle.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-3 pt-4">
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1E1F21]">
                  {sec.heading}
                </h2>
                <p>{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Author Box & CTA */}
          <div className="border-t border-[#E8E1D5] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F5EFEB] p-6 rounded-2xl">
            <div>
              <p className="font-semibold text-xs text-[#1E1F21]">Written by {currentArticle.author}</p>
              <p className="text-xs text-[#6F736D]">{currentArticle.authorRole}</p>
            </div>
            <button
              type="button"
              onClick={onNavigateToShop}
              className="px-5 py-2.5 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
            >
              Shop Handcrafted Pieces
            </button>
          </div>
        </div>
      </article>
    );
  }

  // Journal Directory View
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
            Slow Living &amp; Textile Ecology
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1E1F21]">
            The Aranya Earth Journal
          </h1>
          <p className="text-sm text-[#544133] font-light leading-relaxed">
            In-depth dispatches from village loom sheds, botanical dye vats, regenerative agriculture trials, and slow wardrobe care.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(article => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article.slug)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#D5C7B5] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-[#9C4C36] font-mono uppercase tracking-widest">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21] group-hover:text-[#C16A52] transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-xs text-[#544133] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#6F736D]">
                <span>By {article.author} · {article.publishedDate}</span>
                <span className="font-semibold text-[#263422] group-hover:text-[#C16A52] flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
