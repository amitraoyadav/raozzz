import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/brioTravelsData';
import { BrioBlogPost } from '../data/types';

export const BrioBlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BrioBlogPost | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            Travel Insights & Guides
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Brio Travels Blog
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-['Inter']">
            Expert travel tips, packing guides, and hidden gems curated by Delhi’s leading holiday planners.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div
                  onClick={() => setSelectedPost(post)}
                  className="relative h-52 overflow-hidden cursor-pointer"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author.split(',')[0]}</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2 cursor-pointer font-['Poppins']"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-['Inter']">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-teal-600 hover:text-white text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-60 sm:h-72 overflow-hidden shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-teal-600 inline-block mb-1">
                  Travel Article
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-['Poppins']">
                  {selectedPost.title}
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  By {selectedPost.author} · {selectedPost.date} ({selectedPost.readTime})
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-['Inter']">
              <p className="font-semibold text-slate-900 text-sm sm:text-base border-l-4 border-teal-600 pl-3 italic">
                {selectedPost.summary}
              </p>
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Brio Travels Editorial Desk</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
