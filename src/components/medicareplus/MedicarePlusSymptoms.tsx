import React, { useState } from 'react';
import {
  Heart,
  Activity,
  AlertCircle,
  HelpCircle,
  X,
  Stethoscope,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { SYMPTOMS_DATA, SymptomGuide } from '../../data/medicarePlusData';

interface MedicarePlusSymptomsProps {
  onSelectSpeciality: (specialityId: string) => void;
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
}

export const MedicarePlusSymptoms: React.FC<MedicarePlusSymptomsProps> = ({
  onSelectSpeciality,
  onOpenAppointmentModal,
}) => {
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomGuide | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Symptom Checker &amp; Clinical Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Find Possible Symptoms and Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Select a common symptom below to explore potential clinical conditions and connect directly with the appropriate medical specialist.
          </p>
        </div>

        {/* Symptoms Circular Row / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {SYMPTOMS_DATA.map((symptom) => (
            <div
              key={symptom.id}
              onClick={() => setSelectedSymptom(symptom)}
              className="bg-white rounded-3xl p-5 border border-slate-200/80 hover:border-teal-400 hover:shadow-lg transition-all flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
            >
              {/* Circular Image with Overlay */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden relative shadow-sm border-2 border-white group-hover:border-teal-400 transition-colors">
                <img
                  src={symptom.iconImg}
                  alt={symptom.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                    Analyze
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-extrabold text-[#0C4A60] mt-3 group-hover:text-[#00A896] transition-colors">
                {symptom.title}
              </h3>

              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {symptom.summary}
              </p>

              <button className="mt-3 text-xs font-bold text-[#00A896] group-hover:underline flex items-center gap-1">
                <span>View Conditions</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Symptom Details Interactive Modal (Matching Reference Content Box) */}
      {selectedSymptom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSymptom(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-slate-100">
              <img
                src={selectedSymptom.iconImg}
                alt={selectedSymptom.title}
                className="w-20 h-20 rounded-2xl object-cover shadow-sm shrink-0 border border-slate-200"
              />
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                  Clinical Assessment
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0C4A60] mt-1">
                  {selectedSymptom.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {selectedSymptom.summary}
                </p>
              </div>
            </div>

            {/* Differential Conditions List */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Possible Related Conditions &amp; Clinical Departments
              </h4>

              <div className="space-y-3">
                {selectedSymptom.conditions.map((cond, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                        <h5 className="text-sm font-bold text-slate-900">{cond.name}</h5>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 pl-6 leading-relaxed">
                        {cond.description}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onSelectSpeciality(cond.specialityId);
                        setSelectedSymptom(null);
                      }}
                      className="shrink-0 text-xs font-bold text-[#0C4A60] bg-teal-50 hover:bg-[#00A896] hover:text-white px-3 py-2 rounded-xl border border-teal-200 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Stethoscope className="w-3.5 h-3.5" />
                      <span>{cond.recommendedSpecialist}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[11px] text-slate-400">
                *Demo information for preliminary triage guidance. Not an official medical diagnosis.
              </p>
              <button
                onClick={() => {
                  onOpenAppointmentModal(undefined, selectedSymptom.title);
                  setSelectedSymptom(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#00A896] hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consult a Specialist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
