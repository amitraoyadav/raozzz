import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Activity,
  FileCheck,
  HeartPulse,
} from 'lucide-react';

export const MedicarePlusQualitySafety: React.FC = () => {
  const pillars = [
    {
      title: 'Patient Safety Focus',
      desc: 'Zero-harm clinical protocols with automated identification barcodes, double-check surgical timeouts, and continuous bed-fall prevention audits.',
      icon: ShieldCheck,
      badge: 'Safety Priority',
    },
    {
      title: 'Quality Care Processes',
      desc: 'Standard operating clinical pathways audited against benchmark healthcare parameters and clinical indicators.',
      icon: CheckCircle2,
      badge: 'Process Audit',
    },
    {
      title: 'Clinical Governance & Audits',
      desc: 'Peer-reviewed mortality, morbidity, and infection surveillance committees enforcing evidence-based antimicrobial stewardship.',
      icon: FileCheck,
      badge: 'Ethical Oversight',
    },
    {
      title: 'Continuous Quality Improvement',
      desc: 'Quarterly clinical indicator assessments, computerized incident reporting, and mandatory annual basic & advanced life support certification for staff.',
      icon: Activity,
      badge: 'Ongoing Training',
    },
  ];

  return (
    <section id="quality-safety" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Safety &amp; Compliance Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Quality &amp; Patient Safety
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Structured clinical governance ensuring that every operative procedure, medication delivery, and nursing handoff adheres to rigorous safety benchmarks.
          </p>
          <span className="inline-block mt-2 text-[10px] font-mono text-slate-400 bg-slate-200 px-2.5 py-0.5 rounded">
            DEMO / SAMPLE GOVERNANCE SHOWCASE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#00A896] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {pil.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0C4A60] leading-snug">
                    {pil.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-teal-700">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#00A896]" />
                  <span>Quality Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
