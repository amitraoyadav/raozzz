import React, { useState } from 'react';
import { PUBLICATIONS, PublicationItem } from '../../data/lawlinksData';
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Download,
  Share2,
  X,
  FileText
} from 'lucide-react';

export const LawLinksPublications: React.FC = () => {
  const [activePublication, setActivePublication] = useState<PublicationItem | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = (pub: PublicationItem) => {
    if (navigator.share) {
      navigator.share({
        title: pub.title,
        text: pub.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="Publications Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Scholarly Papers & Legal Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Publications & Lectures</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Practical strategies in legal drafting, force majeure doctrines, and commercial disputes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#03A9F5] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Legal Article
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#03A9F5]" />
                    <span>{pub.date}</span>
                    <span>•</span>
                    <span className="text-slate-600 font-semibold">{pub.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {pub.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActivePublication(pub)}
                  className="w-full py-3 bg-slate-900 hover:bg-[#03A9F5] text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activePublication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            {/* Modal Header */}
            <div className="bg-[#1e293b] text-white p-6 flex items-start justify-between gap-4 border-b border-slate-700">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-[#03A9F5] font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activePublication.date}</span>
                  <span>•</span>
                  <span>{activePublication.author}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black">{activePublication.title}</h3>
              </div>
              <button
                onClick={() => setActivePublication(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 leading-relaxed whitespace-pre-line text-sm sm:text-base font-normal">
              {activePublication.fullContent}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => handleShare(activePublication)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
              </button>

              <button
                onClick={() => setActivePublication(null)}
                className="px-6 py-2 bg-[#03A9F5] hover:bg-[#0288d1] text-white text-xs font-bold rounded-lg uppercase tracking-wider cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
