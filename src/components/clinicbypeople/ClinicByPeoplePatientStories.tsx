import React from 'react';
import { Star, MapPin, CheckCircle2, User, Clock } from 'lucide-react';
import { PATIENT_STORIES_DATA } from '../../data/clinicByPeopleData';

export const ClinicByPeoplePatientStories: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Demonstration Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Patient Experience Stories
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Sample Patient Experiences demonstrating patient care workflow, cashless insurance assistance, and daycare recovery timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_STORIES_DATA.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating & Badge */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    Demo Case
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-bold text-[#0C5BE2] block">
                    {story.treatment}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Consultant: {story.doctorName}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{story.feedback.replace('Sample Patient Experience: ', '')}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">
                    {story.patientName}, {story.age}
                  </h4>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FF6B4A]" />
                    {story.city}
                  </span>
                </div>

                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {story.recoveryDays}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
