import React, { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Building2,
  ArrowRight,
  X,
  Stethoscope,
  Activity,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

export const MedicarePlusAbout: React.FC = () => {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  const stats = [
    { value: '200k+', label: 'Saved Lives', icon: Heart, color: 'text-rose-500' },
    { value: '420k+', label: 'Successful Surgeries', icon: Activity, color: 'text-teal-600' },
    { value: '480k+', label: 'Happy Patients', icon: Users, color: 'text-sky-600' },
    { value: '350k+', label: 'Saved Hearts', icon: Heart, color: 'text-emerald-500' },
    { value: '150k+', label: 'Annual Consultations', icon: Stethoscope, color: 'text-indigo-600' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Hospital High-Res Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80"
                alt="MedicarePlus Hospital Campus"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A60]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/80 backdrop-blur-xs">
                  Institutional Medical Enclave
                </span>
                <h4 className="text-xl sm:text-2xl font-black mt-2 leading-tight">
                  750-Bed Tertiary Care Medical Center
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  Plot 42, Institutional Area, Sector 62, New Delhi NCR
                </p>
              </div>
            </div>

            {/* Floating Quality Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Clinical Governance</p>
                <p className="text-[11px] text-slate-500">Continuous Audit &amp; Safety</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Summary Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
                Institutional Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
                Welcome to MedicarePlus Hospital
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                MedicarePlus Hospital is a modern multispeciality healthcare platform designed to connect patients with experienced medical professionals, advanced diagnostics, and compassionate clinical care.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                With comprehensive clinical wings covering robotic joint replacements, primary angioplasties, high-dose chemotherapy, and pediatric super-specialities, we serve thousands of domestic and international families with clinical integrity and human warmth.
              </p>
            </div>

            {/* Reference-style Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {stats.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${st.color}`} />
                      <span className="text-lg sm:text-xl font-black text-[#0C4A60]">
                        {st.value}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-slate-600 mt-1">
                      {st.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Core Values Bullets */}
            <div className="space-y-2 pt-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <span><strong>Patient-First Ethics:</strong> Transparent treatment plans without unnecessary diagnostic testing or procedures.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <span><strong>Modern Infrastructure:</strong> Class 100 laminar flow modular OTs and silent 3.0T wide-bore MRI.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <span><strong>Holistic Critical Care:</strong> Dedicated intensivists on floor 24 hours a day, 365 days a year.</span>
              </div>
            </div>

            {/* Read More Trigger */}
            <div className="pt-2">
              <button
                onClick={() => setReadMoreOpen(true)}
                className="px-6 py-2.5 rounded-xl bg-[#0C4A60] hover:bg-[#083344] text-white font-bold text-xs shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Hospital Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Modal */}
      {readMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setReadMoreOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                Institutional Charter
              </span>
              <h3 className="text-2xl font-black text-[#0C4A60] mt-1">
                The MedicarePlus Hospital Story &amp; Clinical Ethos
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              <p>
                Founded on the guiding principle of "More than Healthcare, Human Care", MedicarePlus Hospital was established to combine tertiary surgical capabilities with approachable, patient-centric compassion.
              </p>
              <h4 className="font-bold text-[#0C4A60] text-sm pt-2">Our Mission</h4>
              <p>
                To provide accessible, high-precision healthcare by uniting internationally trained medical specialists, cutting-edge biomedical technology, and compassionate nursing care within an environment of unwavering clinical safety.
              </p>
              <h4 className="font-bold text-[#0C4A60] text-sm pt-2">Our Vision</h4>
              <p>
                To stand as the most trusted multispeciality healthcare beacon across North India, setting benchmarks in door-to-balloon cardiac intervention times, organ preservation in oncology, and zero-infection surgical suites.
              </p>
              <h4 className="font-bold text-[#0C4A60] text-sm pt-2">Quality &amp; Continuous Improvement</h4>
              <p>
                Our clinical governance framework features daily multidisciplinary mortality and morbidity audits, strict antimicrobial stewardship policies, computerized prescription reconciliation, and dedicated patient care ombudsmen.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setReadMoreOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
