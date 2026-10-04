import React from 'react';
import {
  X,
  BookOpen,
  Sparkles,
  Calendar,
  Clock,
  User,
  Share2,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { BLOGS_DATA, BlogItem, DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasBlogModalProps {
  slug: string | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const DevdasBlogModal: React.FC<DevdasBlogModalProps> = ({
  slug,
  onClose,
  onOpenInquiry,
}) => {
  if (!slug) return null;

  const blog: BlogItem | undefined = BLOGS_DATA.find((b) => b.slug === slug);

  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Cover Image Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block">
              {blog.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              {blog.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-200">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-300" />
                {blog.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-900/10 text-xs sm:text-sm text-amber-950 italic">
            "{blog.summary}"
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            {blog.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs text-slate-600">
              <strong>Need professional guidance on this destination?</strong> Consult our wedding directors.
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-4 py-2 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Expert Consultation</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
