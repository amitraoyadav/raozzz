import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Zap,
  Sun,
  Heart,
  Activity,
  Flame,
  Shield,
  Compass,
  Droplets,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import {
  CONCERN_SELECTOR_OPTIONS,
  TREATMENTS_DATA,
} from '../../data/skinScieneData';

interface SkinScieneConcernQuizProps {
  onOpenBooking: (treatmentSlug?: string) => void;
  onSelectTreatment: (slug: string) => void;
}

export const SkinScieneConcernQuiz: React.FC<SkinScieneConcernQuizProps> = ({
  onOpenBooking,
  onSelectTreatment,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'skin' | 'hair' | 'body'>('all');
  const [selectedConcernId, setSelectedConcernId] = useState('skin-acne');

  const filteredConcerns =
    activeCategory === 'all'
      ? CONCERN_SELECTOR_OPTIONS
      : CONCERN_SELECTOR_OPTIONS.filter((c) => c.category === activeCategory);

  const selectedConcern =
    CONCERN_SELECTOR_OPTIONS.find((c) => c.id === selectedConcernId) ||
    CONCERN_SELECTOR_OPTIONS[0];

  const matchedTreatment = TREATMENTS_DATA.find(
    (t) => t.slug === selectedConcern.recommendedTreatment
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Concern Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            What Brings You to SkinSciene Naturals Today?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select your primary skin, hair, or aesthetic concern to discover our customized, US-FDA approved clinical solution.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
            {(['all', 'skin', 'hair', 'body'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Concerns' : `${cat} Concerns`}
              </button>
            ))}
          </div>
        </div>

        {/* Concern Selector Grid & Solution Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Concern Selection Buttons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredConcerns.map((item) => {
              const isSelected = selectedConcernId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedConcernId(item.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-800 shadow-lg scale-[1.02]'
                      : 'bg-white hover:bg-emerald-50/60 text-slate-800 border-slate-200/90 shadow-sm'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-emerald-700/80 text-emerald-200'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm truncate">
                      {item.label}
                    </div>
                    <div
                      className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-emerald-200' : 'text-slate-500'
                      }`}
                    >
                      {item.treatmentTitle}
                    </div>
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Matched Clinical Protocol Card */}
          <div className="lg:col-span-5">
            {matchedTreatment ? (
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -z-0" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 tracking-wide">
                      Recommended Protocol
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      ⭐ {matchedTreatment.rating} ({matchedTreatment.reviewsCount} reviews)
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                    {matchedTreatment.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {matchedTreatment.overview}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Technology</span>
                      <strong className="text-slate-800 text-xs line-clamp-1">
                        {matchedTreatment.technology}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Sessions</span>
                      <strong className="text-slate-800 text-xs">
                        {matchedTreatment.recommendedSessions}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Downtime</span>
                      <strong className="text-emerald-700 font-semibold text-xs">
                        {matchedTreatment.downtime}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Session Time</span>
                      <strong className="text-slate-800 text-xs">
                        {matchedTreatment.sessionDuration}
                      </strong>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800">
                      Why Dermatologists Recommend This:
                    </span>
                    {matchedTreatment.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onOpenBooking(matchedTreatment.slug)}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-emerald-300" />
                      <span>Book Consultation</span>
                    </button>

                    <button
                      onClick={() => onSelectTreatment(matchedTreatment.slug)}
                      className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
