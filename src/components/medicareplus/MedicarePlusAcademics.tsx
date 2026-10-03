import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Microscope,
  FileCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const MedicarePlusAcademics: React.FC = () => {
  const academicPrograms = [
    {
      title: 'Diplomate of National Board (DNB)',
      desc: 'Accredited post-graduate residency programs in Cardiology, General Surgery, Anesthesia, and Radiodiagnosis with hands-on surgical exposure.',
      icon: GraduationCap,
      code: 'Post-Graduate DNB',
    },
    {
      title: 'Super-Speciality Clinical Fellowships',
      desc: 'Advanced 1-year and 2-year fellowships in Critical Care Medicine, Endourology, Interventional Cardiology, and Joint Replacement.',
      icon: Award,
      code: 'Post-Doctoral Training',
    },
    {
      title: 'College of Nursing & Clinical Training',
      desc: 'Comprehensive B.Sc and Post-Basic nursing education focusing on intensive care management, surgical scrubbing, and infection-control mastery.',
      icon: Users,
      code: 'Nursing Excellence',
    },
    {
      title: 'Clinical Research & Ethical Review Board',
      desc: 'Institutional Ethics Committee overseeing multi-center phase-3 pharmaceutical trials, registry tracking, and academic medical publications.',
      icon: Microscope,
      code: 'Academic Research',
    },
    {
      title: 'Continuing Medical Education (CME)',
      desc: 'Weekly grand rounds, live surgical webinars, and case discussion symposia for attending consultants and practicing medical practitioners.',
      icon: BookOpen,
      code: 'Physician CME Credits',
    },
    {
      title: 'Healthcare Careers & Faculty Recruitment',
      desc: 'Opening opportunities for experienced clinical fellows, resident medical officers (RMOs), and allied healthcare technicians.',
      icon: FileCheck,
      code: 'Hospital Faculty',
    },
  ];

  return (
    <section id="academics" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Medical Education &amp; Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Academics, DNB &amp; Clinical Research
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Fostering the next generation of medical specialists through rigorous post-graduate residency, ethical clinical trials, and continuing medical education.
          </p>
          <p className="text-[11px] text-slate-400 mt-1 font-mono">
            *Demo academic descriptions for hospital portfolio showcase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicPrograms.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#00A896] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {prog.code}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0C4A60] leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#00A896]">
                  <span>Academic Curriculum</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
