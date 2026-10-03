import React, { useState } from 'react';
import {
  Heart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  X,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { SPECIALITIES_LIST, SpecialityItem } from '../../data/medicarePlusData';

interface MedicarePlusSpecialitiesProps {
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
  selectedSpecialityId?: string | null;
}

export const MedicarePlusSpecialities: React.FC<MedicarePlusSpecialitiesProps> = ({
  onOpenAppointmentModal,
  selectedSpecialityId,
}) => {
  const [activeSpecialityModal, setActiveSpecialityModal] = useState<SpecialityItem | null>(null);
  const [showAllSpecialitiesModal, setShowAllSpecialitiesModal] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'surgical' | 'medical' | 'super_speciality'>('all');

  // Top featured specialities matching reference circular carousel
  const featuredSpecialities = SPECIALITIES_LIST.slice(0, 10);

  const filteredSpecialities =
    categoryFilter === 'all'
      ? SPECIALITIES_LIST
      : SPECIALITIES_LIST.filter((s) => s.category === categoryFilter);

  return (
    <section id="specialities" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Center of Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Our Specialities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Discover our expert medical specialities tailored for your health needs
          </p>
        </div>

        {/* Circular Specialities Row (Matching reference style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
          {featuredSpecialities.map((spec) => (
            <div
              key={spec.id}
              onClick={() => setActiveSpecialityModal(spec)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Container with Overlay Text */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-[#00A896] transition-all group-hover:scale-105 duration-300">
                <img
                  src={spec.imageUrl}
                  alt={spec.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Reference-style Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A60]/90 via-[#0C4A60]/40 to-transparent flex flex-col justify-end items-center p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-black uppercase tracking-wider text-white text-center leading-tight drop-shadow-sm">
                    {spec.shortName}
                  </span>
                  <span className="text-[9px] text-teal-300 font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                    <span>Explore</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Title below circle */}
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 mt-3 group-hover:text-[#00A896] transition-colors leading-snug">
                {spec.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Explore All Specialities Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAllSpecialitiesModal(true)}
            className="px-6 py-3 rounded-full bg-[#0C4A60] hover:bg-[#083344] active:bg-[#05222E] text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>Explore all our Specialities (22 Departments)</span>
            <ArrowRight className="w-4 h-4 text-teal-300" />
          </button>
        </div>
      </div>

      {/* Speciality Detail Modal */}
      {activeSpecialityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveSpecialityModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-slate-100">
              <img
                src={activeSpecialityModal.imageUrl}
                alt={activeSpecialityModal.name}
                className="w-24 h-24 rounded-2xl object-cover shadow-sm shrink-0 border border-slate-200"
              />
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  {activeSpecialityModal.category.replace('_', ' ')}
                </span>
                <h3 className="text-2xl font-black text-[#0C4A60] mt-1">
                  {activeSpecialityModal.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {activeSpecialityModal.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeSpecialityModal.description}
                </p>
              </div>
            </div>

            {/* Procedures & Conditions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C4A60] mb-2.5">
                  Common Procedures Performed
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeSpecialityModal.commonProcedures.map((proc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C4A60] mb-2.5">
                  Conditions Evaluated &amp; Treated
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeSpecialityModal.conditionsTreated.map((cond, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Department Clinical Features */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Department Clinical Features
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeSpecialityModal.features.map((feat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium"
                  >
                    • {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-500">
                Department OPD running Mon–Sat with senior faculty.
              </p>
              <button
                onClick={() => {
                  onOpenAppointmentModal(undefined, activeSpecialityModal.name);
                  setActiveSpecialityModal(null);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#00A896] hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment in {activeSpecialityModal.shortName}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explore All 22 Specialities Full Catalog Modal */}
      {showAllSpecialitiesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowAllSpecialitiesModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                Complete Clinical Directory
              </span>
              <h3 className="text-2xl font-black text-[#0C4A60] mt-1">
                All Medical &amp; Surgical Specialities
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Browse through our 22 full-service clinical departments.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-slate-100">
              {[
                { id: 'all', label: 'All Departments (22)' },
                { id: 'surgical', label: 'Surgical Specialities' },
                { id: 'medical', label: 'Medical Specialities' },
                { id: 'super_speciality', label: 'Super Specialities & Transplants' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCategoryFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    categoryFilter === tab.id
                      ? 'bg-[#0C4A60] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Specialities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {filteredSpecialities.map((spec) => (
                <div
                  key={spec.id}
                  onClick={() => {
                    setShowAllSpecialitiesModal(false);
                    setActiveSpecialityModal(spec);
                  }}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50/20 transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={spec.imageUrl}
                      alt={spec.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="truncate">
                      <h4 className="text-sm font-extrabold text-[#0C4A60] group-hover:text-[#00A896] transition-colors truncate">
                        {spec.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium capitalize">
                        {spec.category.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {spec.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896]">
                    <span>View Clinical Procedures</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
