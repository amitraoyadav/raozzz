import React, { useState } from 'react';
import {
  Activity,
  Heart,
  Shield,
  Ear,
  Droplet,
  Flame,
  Sparkles,
  UserCheck,
  Search,
  ArrowRight,
  CheckCircle2,
  X,
  Calendar,
  Building2,
} from 'lucide-react';
import {
  SPECIALITIES_DATA,
  ClinicSpeciality,
  CITIES_LIST,
  buildClinicWhatsAppLink,
} from '../../data/clinicByPeopleData';

interface ClinicByPeopleSpecialitiesProps {
  currentCity: string;
  onOpenConsultationModal: (speciality?: string, note?: string) => void;
}

export const ClinicByPeopleSpecialities: React.FC<ClinicByPeopleSpecialitiesProps> = ({
  currentCity,
  onOpenConsultationModal,
}) => {
  const [selectedSpecialityModal, setSelectedSpecialityModal] = useState<ClinicSpeciality | null>(null);
  const [filterCity, setFilterCity] = useState(currentCity || 'Delhi NCR');
  const [filterQuery, setFilterQuery] = useState('');

  const getSpecialityIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName) {
      case 'Activity':
        return <Activity className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'Ear':
        return <Ear className={className} />;
      case 'Droplet':
        return <Droplet className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  const filteredSpecialities = SPECIALITIES_DATA.filter((s) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase().trim();
    return (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.treatments.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <section id="specialities" className="py-16 sm:py-24 bg-white border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Specialized Care Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Find Specialized Care Near You
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Explore 8 core medical specialities covering over 70 advanced daycare laser and laparoscopic procedures in {filterCity}.
          </p>
        </div>

        {/* Integrated Filter Bar */}
        <div className="max-w-2xl mx-auto mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-2.5 flex flex-col sm:flex-row items-center gap-2 shadow-xs">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search speciality or treatment (e.g. Hernia, Piles, Fibroids)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20"
            />
          </div>

          <select
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="w-full sm:w-44 px-3 py-2 text-xs bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 text-slate-800 font-medium"
          >
            {CITIES_LIST.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* 8 Speciality Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialities.map((spec) => (
            <div
              key={spec.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#0C5BE2] shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Color Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
                style={{ backgroundColor: spec.color }}
              />

              <div>
                {/* Speciality Icon */}
                <div
                  className="w-13 h-13 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md transition-transform group-hover:scale-105"
                  style={{ backgroundColor: spec.color }}
                >
                  {getSpecialityIcon(spec.iconName, 'w-6 h-6')}
                </div>

                <h3 className="text-lg font-bold text-[#0B1528] group-hover:text-[#0C5BE2] transition-colors leading-snug">
                  {spec.name}
                </h3>
                <span className="text-[11px] font-semibold text-slate-400 block mt-0.5 mb-2.5">
                  {spec.tagline}
                </span>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {spec.description}
                </p>

                {/* Popular Treatments Chips */}
                <div className="space-y-1.5 mb-6">
                  {spec.treatments.slice(0, 3).map((t, idx) => (
                    <div
                      key={idx}
                      className="text-[11px] text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: spec.color }} />
                      <span className="truncate">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedSpecialityModal(spec)}
                  className="text-xs font-bold text-[#0C5BE2] hover:text-[#0947b3] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenConsultationModal(spec.name, `Interested in ${spec.name} care`)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#0C5BE2] text-white text-[11px] font-bold transition-colors cursor-pointer"
                >
                  Book OPD
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0B1528] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Need Help Choosing a Speciality?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Talk to Our Clinical Care Coordinator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Describe your symptoms and our medical desk will connect you to the exact expert surgeon in {filterCity}.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultationModal('general-surgery', 'Need doctor recommendation')}
            className="px-6 py-3 rounded-2xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md cursor-pointer"
          >
            Get Doctor Advice
          </button>
        </div>
      </div>

      {/* SPECIALITY DETAIL MODAL */}
      {selectedSpecialityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedSpecialityModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundColor: selectedSpecialityModal.color }}
              >
                {getSpecialityIcon(selectedSpecialityModal.iconName, 'w-6 h-6')}
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                  {selectedSpecialityModal.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {selectedSpecialityModal.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedSpecialityModal.description}
            </p>

            {/* Key Clinical Features */}
            <div className="mb-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C5BE2] mb-2.5">
                Clinical Care Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSpecialityModal.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Treatments List */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                All Available Procedures &amp; Surgeries
              </h4>
              <div className="space-y-2">
                {selectedSpecialityModal.treatments.map((t, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-slate-800">{t}</span>
                    <button
                      onClick={() => {
                        onOpenConsultationModal(selectedSpecialityModal.name, `Interested in ${t}`);
                        setSelectedSpecialityModal(null);
                      }}
                      className="text-[11px] font-bold text-[#0C5BE2] hover:underline cursor-pointer"
                    >
                      Book OPD →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA in Modal */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  onOpenConsultationModal(selectedSpecialityModal.name, `Inquiry from speciality overview`);
                  setSelectedSpecialityModal(null);
                }}
                className="flex-1 py-3 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Book Free Consultation for {selectedSpecialityModal.shortName}
              </button>
              <a
                href={buildClinicWhatsAppLink(`Hi ClinicByPeople, I would like to consult about ${selectedSpecialityModal.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
