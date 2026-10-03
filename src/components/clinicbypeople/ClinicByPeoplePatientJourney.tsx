import React, { useState } from 'react';
import {
  CheckCircle2,
  Calendar,
  FileCheck,
  Car,
  Activity,
  HeartHandshake,
  HeartPulse,
  ArrowRight,
} from 'lucide-react';
import { PATIENT_JOURNEY_STEPS } from '../../data/clinicByPeopleData';

interface ClinicByPeoplePatientJourneyProps {
  onOpenConsultationModal: () => void;
}

export const ClinicByPeoplePatientJourney: React.FC<ClinicByPeoplePatientJourneyProps> = ({
  onOpenConsultationModal,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [FileCheck, Calendar, Car, Activity, HeartHandshake, HeartPulse];

  return (
    <section className="py-16 sm:py-24 bg-[#0B1528] text-white border-b border-slate-800 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-sky-400 border border-blue-400/30">
            6-Step Recovery Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Your Journey to Full Recovery
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Click any milestone to explore how ClinicByPeople manages every detail—before, during, and after surgery.
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {PATIENT_JOURNEY_STEPS.map((step, index) => {
            const Icon = stepIcons[index] || CheckCircle2;
            const isActive = activeStep === index;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(index)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0C5BE2] border-sky-400 shadow-lg shadow-blue-500/30 scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`font-mono text-xs font-black px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-white text-[#0C5BE2]' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <span className="text-[11px] font-bold line-clamp-2 leading-tight">
                  {step.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#122244] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                <span>Milestone {PATIENT_JOURNEY_STEPS[activeStep].stepNumber}</span>
                <span>•</span>
                <span>{PATIENT_JOURNEY_STEPS[activeStep].subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {PATIENT_JOURNEY_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {PATIENT_JOURNEY_STEPS[activeStep].description}
              </p>

              {/* Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PATIENT_JOURNEY_STEPS[activeStep].highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-8">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400">
                100% Free Consultation Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
