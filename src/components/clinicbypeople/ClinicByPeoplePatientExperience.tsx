import React, { useState } from 'react';
import {
  Clock,
  Car,
  ShieldCheck,
  Building2,
  HeartHandshake,
  HeartPulse,
  Activity,
  UserCheck,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { PATIENT_EXPERIENCE_DATA } from '../../data/clinicByPeopleData';

interface ClinicByPeoplePatientExperienceProps {
  onOpenConsultationModal: () => void;
}

export const ClinicByPeoplePatientExperience: React.FC<ClinicByPeoplePatientExperienceProps> = ({
  onOpenConsultationModal,
}) => {
  const [activeTab, setActiveTab] = useState<'pre' | 'during' | 'recovery'>('pre');

  const tabs = [
    { id: 'pre', label: 'PRE SURGERY', subtitle: 'Hassle-free preparation & paperless admission' },
    { id: 'during', label: 'DURING SURGERY', subtitle: 'US-FDA tech & dedicated hospital care buddy' },
    { id: 'recovery', label: 'RECOVERY', subtitle: 'Complimentary follow-ups & customized healing' },
  ];

  const currentStage =
    activeTab === 'pre'
      ? PATIENT_EXPERIENCE_DATA.preSurgery
      : activeTab === 'during'
      ? PATIENT_EXPERIENCE_DATA.duringSurgery
      : PATIENT_EXPERIENCE_DATA.recovery;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Care Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Patient Experiences: Beyond Just Surgery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We hold your hand at every stage of the surgical journey—from door-to-hospital cab to complete post-discharge healing.
          </p>

          {/* Interactive Stage Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#0C5BE2] text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg animate-in fade-in duration-200">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0C5BE2]">
              Stage Experience
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {currentStage.title}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {currentStage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentStage.points.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-blue-50/50 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0C5BE2] flex items-center justify-center font-bold text-sm mb-4">
                    0{index + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Managed by ClinicByPeople</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              Want to understand how your insurance policy applies to this procedure?
            </span>
            <button
              onClick={onOpenConsultationModal}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0C5BE2] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Verify My Insurance Cashless
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
