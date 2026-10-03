import React, { useState } from 'react';
import {
  Star,
  Quote,
  Play,
  Heart,
  UserCheck,
  CheckCircle2,
  X,
  Stethoscope,
} from 'lucide-react';
import { PATIENT_FEEDBACK_LIST, PatientTestimonial } from '../../data/medicarePlusData';

export const MedicarePlusPatientFeedback: React.FC = () => {
  const [activeStoryModal, setActiveStoryModal] = useState<PatientTestimonial | null>(null);

  return (
    <section id="feedback" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Happy Faces &amp; Clinical Recoveries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Patient Feedback &amp; Experiences
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Sample Patient Experiences demonstrating surgical care workflows, emergency response timelines, and compassionate recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_FEEDBACK_LIST.map((story) => (
            <div
              key={story.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-[#00A896] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Treatment Badge */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded block mb-2 truncate">
                  {story.treatment}
                </span>

                {/* Patient Feedback */}
                <p className="text-xs text-slate-600 line-clamp-4 leading-relaxed italic">
                  "{story.feedback}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="mt-5 pt-4 border-t border-slate-200/60">
                <h4 className="text-sm font-black text-[#0C4A60]">
                  {story.patientName}
                </h4>
                <p className="text-[11px] text-teal-700 font-medium">
                  Treated by {story.doctorName}
                </p>
                <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{story.recoveryNote}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
