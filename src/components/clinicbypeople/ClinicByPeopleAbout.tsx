import React from 'react';
import {
  ShieldCheck,
  Stethoscope,
  Building2,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { CLINIC_CONFIG } from '../../data/clinicByPeopleData';

interface ClinicByPeopleAboutProps {
  onOpenConsultationModal: () => void;
}

export const ClinicByPeopleAbout: React.FC<ClinicByPeopleAboutProps> = ({
  onOpenConsultationModal,
}) => {
  const pillars = [
    {
      title: 'Specialist Discovery',
      desc: 'Browse verified profiles of experienced surgeons across general surgery, proctology, gynaecology, orthopaedics, and urology.',
      icon: Stethoscope,
    },
    {
      title: 'Healthcare Centre Access',
      desc: 'Access NABH-accredited daycare surgical suites equipped with class 100 modular operation theatres and sanitized private recovery rooms.',
      icon: Building2,
    },
    {
      title: 'Treatment Transparency',
      desc: 'Transparent procedure information, hospital stay duration, and realistic recovery timelines without medical jargon.',
      icon: BookOpen,
    },
    {
      title: 'Consultation Assistance',
      desc: 'Dedicated care coordinators manage OPD scheduling, diagnostic pre-checks, and second opinions with zero consulting charges.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            About Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            About ClinicByPeople
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            ClinicByPeople is a digital healthcare platform focused on helping people discover specialist care, healthcare services and consultation options. We streamline the entire surgical journey—eliminating administrative hurdles so that patients and families experience dignity, clarity, and rapid recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0C5BE2] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory disclaimer box */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> {CLINIC_CONFIG.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
