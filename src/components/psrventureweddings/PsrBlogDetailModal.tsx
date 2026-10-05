import React from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  Calendar, 
  User, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { BlogItem } from '../../data/psrWeddingsData';

interface PsrBlogDetailModalProps {
  article: BlogItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const PsrBlogDetailModal: React.FC<PsrBlogDetailModalProps> = ({
  article,
  onClose,
  onOpenConsultation
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6">
        <div className="relative bg-[#1A0509] text-white rounded-3xl max-w-3xl w-full border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner */}
          <div className="relative h-64 sm:h-80">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0509] via-[#1A0509]/60 to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#DFBE78] text-[#1A0509] font-bold text-[10px] uppercase tracking-wider inline-block">
                {article.category}
              </span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white leading-tight">
                {article.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-stone-300 font-light">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#DFBE78]" />
                  {article.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#DFBE78]" />
                  {article.readTime}
                </span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Key Takeaways */}
            <div className="p-4 rounded-2xl bg-[#24080D] border border-[#C5A059]/30 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFBE78] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#DFBE78]" />
                <span>Executive Summary & Key Takeaways</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-200">
                {article.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBE78] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm text-stone-300 font-light leading-relaxed">
              {article.contentParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block">Need expert guidance for your celebration?</span>
                <span className="text-sm font-bold text-white">Speak with our senior destination wedding planners.</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <span>Plan Your Wedding</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
