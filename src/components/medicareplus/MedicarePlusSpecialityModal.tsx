import React from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Activity,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { SpecialityItem } from '../../data/medicarePlusData';

interface MedicarePlusSpecialityModalProps {
  speciality: SpecialityItem | null;
  onClose: () => void;
  onRequestAppointment: (doctorName?: string, speciality?: string) => void;
}

export const MedicarePlusSpecialityModal: React.FC<MedicarePlusSpecialityModalProps> = ({
  speciality,
  onClose,
  onRequestAppointment,
}) => {
  if (!speciality) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto font-['Satoshi',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header with image & overlay */}
        <div className="relative h-48 bg-[#0C4A60] overflow-hidden shrink-0">
          <img
            src={speciality.imageUrl}
            alt={speciality.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A60] via-[#0C4A60]/80 to-transparent p-6 flex flex-col justify-end">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500 text-white w-fit mb-1.5">
              Clinical Speciality
            </span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">{speciality.name}</h3>
            <p className="text-xs text-teal-200 mt-0.5">{speciality.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-600">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Department Overview
            </h4>
            <p className="leading-relaxed text-slate-600">{speciality.description}</p>
          </div>

          {/* Procedures & Treatments */}
          {speciality.commonProcedures && speciality.commonProcedures.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-teal-600" />
                Key Surgeries & Interventions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {speciality.commonProcedures.map((proc, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-200/60 flex items-center gap-2 text-teal-900 font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conditions Treated */}
          {speciality.conditionsTreated && speciality.conditionsTreated.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-teal-600" />
                Conditions Treated
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {speciality.conditionsTreated.map((cond, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                  >
                    {cond}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Department Features */}
          {speciality.features && speciality.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Clinical Infrastructure & Highlights
              </h4>
              <ul className="space-y-1.5">
                {speciality.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestAppointment(undefined, speciality.name);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0C4A60] to-[#00A896] hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult {speciality.shortName || speciality.name} Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
