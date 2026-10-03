import React from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  MapPin,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { TreatmentItem, DoctorProfile } from '../../data/skinScieneData';

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onOpenBooking: (treatmentSlug?: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onOpenBooking,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 p-5 sm:p-6 flex items-center justify-between z-10">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              {treatment.category.toUpperCase()} PROTOCOL · {treatment.tag}
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
              {treatment.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-800 text-xs sm:text-sm">
          {/* Overview */}
          <div>
            <h4 className="font-serif font-bold text-base text-slate-900 mb-2">
              Clinical Overview
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          {/* Parameters Badge Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Technology</span>
              <strong className="text-slate-800 block truncate">{treatment.technology.split('+')[0]}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Duration</span>
              <strong className="text-slate-800 block">{treatment.sessionDuration}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Recommended</span>
              <strong className="text-slate-800 block">{treatment.recommendedSessions}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Downtime</span>
              <strong className="text-emerald-800 block font-bold">{treatment.downtime}</strong>
            </div>
          </div>

          {/* Concerns Addressed */}
          <div>
            <h4 className="font-serif font-bold text-base text-slate-900 mb-2">
              Concerns Addressed
            </h4>
            <div className="flex flex-wrap gap-2">
              {treatment.concernsTreated.map((concern, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  ✓ {concern}
                </span>
              ))}
            </div>
          </div>

          {/* Procedure Steps */}
          <div>
            <h4 className="font-serif font-bold text-base text-slate-900 mb-3">
              Step-by-Step Clinical Procedure
            </h4>
            <div className="space-y-2.5">
              {treatment.procedureSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed text-xs">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="font-serif font-bold text-base text-slate-900 mb-2">
              Key Clinical Advantages
            </h4>
            <div className="space-y-1.5">
              {treatment.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-600 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {treatment.faqs && treatment.faqs.length > 0 && (
            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-3">
                Dermatologist FAQs
              </h4>
              <div className="space-y-2">
                {treatment.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <div className="text-slate-600 text-xs pl-5 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4 sm:p-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-slate-400 block text-[11px]">Pricing Guide</span>
            <strong className="text-emerald-800 text-sm">{treatment.priceEstimate}</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              Close
            </button>
            <button
              onClick={() => {
                const slug = treatment.slug;
                onClose();
                onOpenBooking(slug);
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300" />
              <span>Book This Treatment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DoctorBioModalProps {
  doctor: DoctorProfile | null;
  onClose: () => void;
  onOpenBooking: (doctorName?: string) => void;
}

export const DoctorBioModal: React.FC<DoctorBioModalProps> = ({
  doctor,
  onClose,
  onOpenBooking,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Top Header */}
        <div className="relative bg-slate-900 text-white p-6 rounded-t-3xl overflow-hidden">
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400/60 shadow"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {doctor.name}
                </h3>
                <p className="text-xs text-emerald-300 font-semibold">{doctor.role}</p>
                <p className="text-[11px] text-slate-300 mt-0.5">{doctor.qualifications}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs sm:text-sm text-slate-800">
          <div>
            <h4 className="font-serif font-bold text-sm text-slate-900 mb-1.5">
              Biography & Background
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              {doctor.bio}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Clinical Experience:</span>
              <strong>{doctor.experienceYears}+ Years</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Base City & Clinics:</span>
              <strong className="text-emerald-800">{doctor.city} ({doctor.clinicBranch})</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Next Slot Available:</span>
              <strong className="text-emerald-700">{doctor.nextAvailable}</strong>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-slate-900 mb-2">
              Key Specializations
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {doctor.speciality.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-100"
                >
                  ✓ {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-slate-900 mb-2">
              Clinical Accreditations
            </h4>
            <div className="space-y-1 text-xs text-slate-600">
              {doctor.achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 p-4 sm:p-5 flex items-center justify-end gap-3 bg-slate-50">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs"
          >
            Close
          </button>
          <button
            onClick={() => {
              const docName = doctor.name;
              onClose();
              onOpenBooking(docName);
            }}
            className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>Consult With {doctor.name.split(' ')[1]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
