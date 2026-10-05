import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  User, 
  ArrowRight, 
  ChevronRight,
  Calendar
} from 'lucide-react';
import { PSR_BLOG, BlogItem } from '../../data/psrWeddingsData';
import { PsrBlogDetailModal } from './PsrBlogDetailModal';

interface PsrBlogSectionProps {
  onOpenConsultation: () => void;
}

export const PsrBlogSection: React.FC<PsrBlogSectionProps> = ({
  onOpenConsultation
}) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);

  return (
    <section id="blog-section" className="py-20 lg:py-28 bg-[#120306] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <BookOpen className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Industry Knowledge & Advice
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Destination Wedding Journal
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Essential intelligence for modern couples. Explore real line-item budget analyses, legal permit guides, and unbiased palace hotel comparisons written by our on-ground directors.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PSR_BLOG.map(post => (
            <article
              key={post.id}
              className="bg-[#1C060A] rounded-3xl border border-[#C5A059]/25 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#DFBE78]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C060A] via-transparent to-black/30" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#DFBE78] text-[10px] font-bold uppercase tracking-wider border border-[#DFBE78]/30">
                  {post.category}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#DFBE78]" />
                    {post.author.split('(')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#DFBE78]" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white group-hover:text-[#DFBE78] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-mono">
                    {post.date}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(post)}
                    className="text-xs font-bold text-[#DFBE78] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      <PsrBlogDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
