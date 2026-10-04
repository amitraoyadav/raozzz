import React from 'react';
import {
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
} from 'lucide-react';
import { BLOGS_DATA, BlogItem } from '../../data/devdasWeddingData';

interface DevdasBlogSectionProps {
  onOpenBlog: (slug: string) => void;
}

export const DevdasBlogSection: React.FC<DevdasBlogSectionProps> = ({ onOpenBlog }) => {
  return (
    <section id="blog" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nuptial Knowledge Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            WEDDING GUIDES &amp; BUDGET ADVICE
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Expert breakdowns on Udaipur palace costs, Goa beach permits, resort negotiations, and guest hospitality logistics.
          </p>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS_DATA.map((blog) => (
            <div
              key={blog.id}
              onClick={() => onOpenBlog(blog.slug)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#7A1C30] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-[#7A1C30] transition-colors leading-snug line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center gap-1 text-xs font-bold text-[#7A1C30] group-hover:underline">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
