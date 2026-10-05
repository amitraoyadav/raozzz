import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Share2,
  X,
  Disc,
  Tag
} from 'lucide-react';
import { BLOGS_DATA, ClubBlog } from '../../data/site77Data';

interface Site77BlogsProps {
  onOpenBooking: () => void;
}

export const Site77Blogs: React.FC<Site77BlogsProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ClubBlog | null>(null);

  const filteredBlogs = BLOGS_DATA.filter(blog => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.excerpt.toLowerCase().includes(q) ||
      blog.category.toLowerCase().includes(q) ||
      blog.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <section className="py-24 bg-[#07080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              NOCTURNA CHRONICLES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            NIGHTLIFE JOURNAL & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              INSIDER STORIES
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto my-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Guides to luxury party etiquette in North Goa, the engineering secrets of 3D acoustic rigs, 
            and curated cocktail stories from our master mixologists.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-md mx-auto mb-14">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-500 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search guides, acoustic science, dress code..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#12141A] border border-white/10 text-white text-xs font-mono placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        {/* Featured Article Spotlight */}
        {BLOGS_DATA.length > 0 && !searchQuery && (
          <div
            onClick={() => setActiveArticle(BLOGS_DATA[0])}
            className="mb-14 bg-gradient-to-r from-[#12141C] to-[#0A0C10] border border-[#D4AF37]/40 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl hover:border-[#D4AF37] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 p-6 sm:p-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-[10px] font-mono uppercase tracking-widest mb-3">
                  FEATURED EDITORIAL
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors mb-3">
                  {BLOGS_DATA[0].title}
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  {BLOGS_DATA[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-xs font-mono text-gray-400 mb-6">
                  <span>{BLOGS_DATA[0].author}</span>
                  <span>·</span>
                  <span>{BLOGS_DATA[0].date}</span>
                  <span>·</span>
                  <span className="text-[#D4AF37]">{BLOGS_DATA[0].readTime}</span>
                </div>
                <span className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] group-hover:text-[#F3E5AB]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
                <img
                  src={BLOGS_DATA[0].image}
                  alt={BLOGS_DATA[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        )}

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <div
              key={blog.id}
              onClick={() => setActiveArticle(blog)}
              className="bg-[#0E1015] border border-white/10 hover:border-[#D4AF37] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-gray-300 text-[10px] font-mono">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400 mb-2">
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span className="text-[#D4AF37]">{blog.readTime}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#F3E5AB] transition-colors mb-2">
                    {blog.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-mono text-gray-300">{blog.author}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reading Lightbox Modal */}
      {activeArticle && (
        <div
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="max-w-3xl w-full bg-[#0E1015] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-black/60" />
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#D4AF37] border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded bg-[#D4AF37] text-black text-[10px] font-mono font-bold uppercase tracking-wider mb-2 inline-block">
                  {activeArticle.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-gray-400">
                <div>
                  <span className="text-white font-bold">{activeArticle.author}</span>
                  <span className="block text-[10px] text-gray-500">{activeArticle.authorRole}</span>
                </div>
                <div className="text-right">
                  <span>{activeArticle.date}</span>
                  <span className="block text-[10px] text-[#D4AF37]">{activeArticle.readTime}</span>
                </div>
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-light">
                {activeArticle.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="border-t border-white/10 pt-4 flex flex-wrap gap-2">
                {activeArticle.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Bottom Reservation CTA inside Blog */}
              <div className="bg-[#141822] border border-[#D4AF37]/30 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-serif font-bold text-base uppercase">
                    Experience Nocturna In Person
                  </h4>
                  <p className="text-xs text-gray-400">
                    Tables sell out quickly for headline artists and weekend nights.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs font-mono uppercase tracking-wider flex-shrink-0"
                >
                  Reserve Table Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
