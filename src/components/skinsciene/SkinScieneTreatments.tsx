import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  Shield,
  Layers,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { TREATMENTS_DATA, TreatmentItem } from '../../data/skinScieneData';

interface SkinScieneTreatmentsProps {
  onOpenBooking: (treatmentSlug?: string) => void;
  onSelectTreatment: (slug: string) => void;
}

export const SkinScieneTreatments: React.FC<SkinScieneTreatmentsProps> = ({
  onOpenBooking,
  onSelectTreatment,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'skin' | 'hair' | 'body'>('all');

  const filteredTreatments =
    activeTab === 'all'
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter((t) => t.category === activeTab);

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>US-FDA Approved Protocols</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Clinical Treatments Designed by MD Dermatologists
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Personalized, root-cause driven procedures utilizing gold-standard lasers and regenerative medicine for lasting, natural results.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl shrink-0 self-start md:self-end">
            {(
              [
                { id: 'all', label: 'All Treatments' },
                { id: 'skin', label: 'Skin Care' },
                { id: 'hair', label: 'Trichology / Hair' },
                { id: 'body', label: 'Body Aesthetics' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={treatment.beforeAfterImage.after}
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[11px] font-bold tracking-wide uppercase border border-emerald-500/30">
                    {treatment.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-sm">
                    {treatment.tag}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold flex items-center gap-1">
                    ⭐ {treatment.rating} ({treatment.reviewsCount} reviews)
                  </span>
                  <span className="text-emerald-300 font-bold">
                    {treatment.priceEstimate}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => onSelectTreatment(treatment.slug)}
                    className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    {treatment.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {treatment.shortDesc}
                  </p>
                </div>

                {/* Meta Attributes */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <div>
                    <span className="text-slate-400 block">Technology</span>
                    <strong className="text-slate-800 font-semibold truncate block">
                      {treatment.technology.split('+')[0]}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Downtime</span>
                    <strong className="text-emerald-700 font-semibold truncate block">
                      {treatment.downtime}
                    </strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenBooking(treatment.slug)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Book Consult</span>
                  </button>

                  <button
                    onClick={() => onSelectTreatment(treatment.slug)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
