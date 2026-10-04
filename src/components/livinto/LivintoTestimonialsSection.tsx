import React, { useState } from 'react';
import {
  Star,
  Quote,
  Play,
  X,
  CheckCircle2,
  Calendar,
  Building,
  Heart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CLIENT_REVIEWS_DATA, ClientReview } from '../../data/livintoInteriorsData';

interface LivintoTestimonialsSectionProps {
  onOpenConsultation: () => void;
}

export const LivintoTestimonialsSection: React.FC<LivintoTestimonialsSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeVideoModal, setActiveVideoModal] = useState<ClientReview | null>(null);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const activeReview = CLIENT_REVIEWS_DATA[activeReviewIdx];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#814882]" />
            <span>16,000+ Delighted Homeowners</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            CLIENT EXPERIENCES &amp; STORIES
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real feedback from families who entrusted their dream homes to our design team and factory execution.
          </p>
        </div>

        {/* Featured Video / Story Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Video / Image Hero */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-auto min-h-[340px] bg-slate-900">
              <img
                src={activeReview.projectPhoto}
                alt={activeReview.clientName}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              {/* Play Video Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideoModal(activeReview)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#814882]/90 hover:bg-[#814882] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                  Delivered in {activeReview.city}
                </span>
                <span className="font-semibold text-amber-300">
                  {activeReview.packageTaken}
                </span>
              </div>
            </div>

            {/* Right: Review Details */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{activeReview.date}</span>
                </div>

                <Quote className="w-10 h-10 text-purple-200" />

                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed">
                  "{activeReview.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {activeReview.clientName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {activeReview.propertyType} • {activeReview.city}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveReviewIdx(
                        (prev) => (prev - 1 + CLIENT_REVIEWS_DATA.length) % CLIENT_REVIEWS_DATA.length
                      )
                    }
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#814882] hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveReviewIdx((prev) => (prev + 1) % CLIENT_REVIEWS_DATA.length)
                    }
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#814882] hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS_DATA.map((rev, index) => (
            <div
              key={rev.id}
              onClick={() => setActiveReviewIdx(index)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                activeReviewIdx === index
                  ? 'bg-white border-[#814882] shadow-lg ring-2 ring-purple-100'
                  : 'bg-white/80 hover:bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400">{rev.date}</span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                "{rev.review}"
              </p>

              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                <img
                  src={rev.avatar}
                  alt={rev.clientName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">{rev.clientName}</div>
                  <div className="text-[11px] text-[#814882]">{rev.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl max-w-2xl w-full p-6 text-white border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center relative mb-4">
              <img
                src={activeVideoModal.projectPhoto}
                alt={activeVideoModal.clientName}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-black/50">
                <div className="w-16 h-16 rounded-full bg-[#814882] flex items-center justify-center text-white">
                  <Play className="w-8 h-8 fill-white ml-1 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">
                    Client Handover Story: {activeVideoModal.clientName}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {activeVideoModal.propertyType} • {activeVideoModal.city} • Handed over in 40 Days
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-serif italic text-sm text-slate-300">
                "{activeVideoModal.review}"
              </div>
              <div className="text-xs text-amber-400 font-semibold">
                Package: {activeVideoModal.packageTaken}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
