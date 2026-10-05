import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { BLOGS_DATA, BlogPostItem } from '../../data/site78Data';

export const Site78BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#222222] relative font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Stories & Inspirations</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12]">
            Aurelia Goa Resort News And Insights
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore our curated travel guides, coastal photography tips, local culinary discoveries, and boutique hospitality narratives from North Goa.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BLOGS_DATA.map(post => (
            <article
              key={post.id}
              className="bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E5DFD7] hover:border-[#B99D75] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs text-[#B99D75] text-[10px] font-bold tracking-wider uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-stone-500 font-light">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#747157]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#747157]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-['Cormorant',serif] font-bold text-xl text-[#1C1C1C] group-hover:text-[#747157] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F3EEE7] group-hover:bg-[#747157] text-[#222222] group-hover:text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99D75] group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E5DFD7] relative animate-scaleUp">
            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-[#747157] text-white text-xs font-bold uppercase tracking-wider">
                {selectedPost.category}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs text-stone-500 font-light">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h2 className="font-['Cormorant',serif] font-bold text-2xl sm:text-4xl text-[#1C1C1C] leading-snug">
                {selectedPost.title}
              </h2>

              <p className="text-base text-[#747157] italic font-['Cormorant',serif] border-l-2 border-[#B99D75] pl-4 py-1">
                {selectedPost.excerpt}
              </p>

              <div className="space-y-3.5 text-stone-700 text-sm leading-relaxed font-light pt-2">
                {selectedPost.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E5DFD7] flex items-center justify-between">
                <span className="text-xs text-stone-500 font-light">Published by Aurelia Editorial Desk</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-full bg-[#747157] text-white text-xs font-semibold tracking-wider uppercase cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
