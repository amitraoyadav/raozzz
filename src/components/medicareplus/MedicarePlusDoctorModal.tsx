import React from 'react';
import {
  X,
  Calendar,
  Clock,
  Award,
  Stethoscope,
  GraduationCap,
  MapPin,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { DoctorProfile } from '../../data/medicarePlusData';

interface MedicarePlusDoctorModalProps {
  doctor: DoctorProfile | null;
  onClose: () => void;
  onRequestAppointment: (doctorName: string, speciality: string) => void;
}

export const MedicarePlusDoctorModal: React.FC<MedicarePlusDoctorModalProps> = ({
  doctor,
  onClose,
  onRequestAppointment,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto font-['Satoshi',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0C4A60] to-[#083344] text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <img
              src={doctor.photoUrl}
              alt={doctor.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-teal-400 shadow-md shrink-0 bg-slate-800"
            />
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500 text-white">
                {doctor.department}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1">{doctor.name}</h3>
              <p className="text-xs text-teal-200 font-medium">{doctor.qualification}</p>
              <p className="text-xs text-slate-300 mt-0.5">{doctor.speciality}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-600">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400">Experience</span>
              <p className="text-base font-bold text-[#0C4A60]">{doctor.experienceYears}+ Years</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400">Consultation Fee</span>
              <p className="text-base font-bold text-emerald-700">₹{doctor.consultationFee}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">OPD Timings</span>
              <p className="text-xs font-bold text-[#0C4A60] mt-0.5">{doctor.opdTimings}</p>
            </div>
          </div>

          {/* Available Days */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              OPD Available Days
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {doctor.availableDays.map((day) => (
                <span
                  key={day}
                  className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200 font-semibold text-xs"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Doctor Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Clinical Background
            </h4>
            <p className="leading-relaxed text-slate-600">{doctor.bio}</p>
          </div>

          {/* Education & Qualifications */}
          {doctor.education && doctor.education.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                Medical Qualifications & Training
              </h4>
              <ul className="space-y-1.5 pl-1">
                {doctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Clinical Expertise */}
          {doctor.keyExpertise && doctor.keyExpertise.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-teal-600" />
                Specialized Surgical & Clinical Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {doctor.keyExpertise.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
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
              onRequestAppointment(doctor.name, doctor.speciality);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0C4A60] to-[#00A896] hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Request Appointment with {doctor.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
