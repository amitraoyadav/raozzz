import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  Quote,
  Play,
  X,
  Sparkles,
  ShieldCheck,
  ThumbsUp,
} from 'lucide-react';
import { PATIENT_TESTIMONIALS } from '../../data/skinScieneData';

export const SkinScieneReviews: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const VIDEO_STORIES = [
    {
      id: 'vid-1',
      title: 'How 4 Sessions of GFC Reversed My Hair Loss',
      patient: 'Vikram Mehta (32 yrs)',
      treatment: 'GFC Hair Regrowth',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      duration: '2:15 min',
    },
    {
      id: 'vid-2',
      title: 'Acne Scars to Glass Skin: My Bridal Journey',
      patient: 'Priyanka S. (28 yrs)',
      treatment: 'Subcision + Fractional Laser',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      duration: '3:04 min',
    },
    {
      id: 'vid-3',
      title: 'Pain-Free Laser Hair Removal: Realistic Review',
      patient: 'Natasha D. (25 yrs)',
      treatment: 'Soprano Titanium Laser',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      duration: '1:48 min',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>4.8 / 5.0 Across 45,000+ Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Stories of Confidence Restored
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Read and watch honest journeys of patients who trusted our dermatologists with their skin, hair, and aesthetics.
          </p>
        </div>

        {/* Video Story Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-xl text-slate-900">
              Featured Video Testimonials
            </h3>
            <span className="text-xs text-slate-500">Documented Clinical Journeys</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_STORIES.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideoModal(vid.title)}
                className="group relative rounded-3xl overflow-hidden bg-slate-950 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5 space-y-1.5">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    {vid.treatment}
                  </span>
                  <h4 className="font-serif font-bold text-white text-base leading-snug line-clamp-2">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-slate-400">Patient: {vid.patient}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATIENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-400/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Patient
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Treatment metadata */}
              <div className="pt-3 border-t border-slate-200/70">
                <div className="font-serif font-bold text-sm text-slate-900">
                  {item.name}
                </div>
                <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {item.treatment}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center justify-between mt-1">
                  <span>{item.city}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-slate-900 rounded-3xl max-w-xl w-full p-6 text-white border border-slate-800 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-lg text-white">
                  {activeVideoModal}
                </h4>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Video Player */}
              <div className="relative aspect-video rounded-2xl bg-slate-950 flex flex-col items-center justify-center border border-slate-800 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center mb-3">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <p className="text-xs text-slate-300">
                  Simulated Clinical Case Video Stream
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Recorded at SkinSciene Naturals Hyderabad Flagship Laser Suite
                </p>
              </div>

              <div className="text-right">
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
