import React from 'react';
import { PRACTICE_AREAS, INDUSTRY_SECTORS } from '../../data/lawlinksData';
import { LawLinksSubPage } from './LawLinksHeader';
import {
  Scale,
  CheckCircle2,
  Building2,
  FileText,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

interface Props {
  areaId: string;
  onNavigate: (page: LawLinksSubPage) => void;
  onRequestConsultation: () => void;
}

export const LawLinksPracticeArea: React.FC<Props> = ({
  areaId,
  onNavigate,
  onRequestConsultation
}) => {
  const currentArea =
    PRACTICE_AREAS.find((p) => p.id === areaId) ||
    PRACTICE_AREAS.find((p) => p.slug === areaId) ||
    PRACTICE_AREAS[0];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src={currentArea.heroImage}
          alt={currentArea.title}
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2 max-w-4xl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Practice Area
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{currentArea.title}</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {currentArea.shortDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed">
            <div className="border-l-4 border-[#03A9F5] pl-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Overview & Scope</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {currentArea.title} Practice
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base">
              {currentArea.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'text-lg font-medium text-slate-900 leading-relaxed' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* If Litigation: Forums & Tribunals */}
            {currentArea.forums && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Judicial & Quasi-Judicial Forums Where We Regularly Appear:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentArea.forums.map((forum, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-sky-50/60 border border-sky-100 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                      <span>{forum}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* If Arbitration or ADR: Features */}
            {currentArea.features && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Key Capabilities & Practice Scope:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentArea.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* If Corporate Advisory: Sections (i) to (iv) */}
            {currentArea.sections && (
              <div className="space-y-6 pt-4 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Advisory Services Spectrum:
                </h3>
                <div className="space-y-4">
                  {currentArea.sections.map((sec, i) => (
                    <div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="text-base font-bold text-slate-900 text-[#03A9F5]">
                        {sec.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* If Specialization: Areas list */}
            {currentArea.areas && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Subject-Matter Specializations:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentArea.areas.map((ar, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-sky-50/50 border border-sky-100 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ar}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA bar */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-lg font-bold">Require legal assistance in this practice area?</h4>
                <p className="text-xs text-slate-300">Discuss your matter directly with our senior advocates and partners.</p>
              </div>
              <button
                onClick={onRequestConsultation}
                className="px-6 py-3 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg uppercase tracking-wider text-xs shadow shrink-0 cursor-pointer transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Practice Areas Navigation Menu */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-[#1e293b] text-white px-5 py-4">
                <h4 className="text-sm font-bold uppercase tracking-wider">Practice Areas</h4>
              </div>
              <div className="p-2 divide-y divide-slate-100">
                {PRACTICE_AREAS.map((pa) => {
                  const isActive = pa.id === currentArea.id;
                  return (
                    <button
                      key={pa.id}
                      onClick={() => onNavigate(pa.id as LawLinksSubPage)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-sky-50 text-[#03A9F5]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#03A9F5]'
                      }`}
                    >
                      <span className="truncate pr-2">{pa.title}</span>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#03A9F5]' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                Litigation Registry & Briefs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                For urgent Supreme Court SLP filings, interim stay petitions, or arbitration notices:
              </p>
              <div className="space-y-2 text-xs">
                <a
                  href="tel:01143017435"
                  className="flex items-center gap-2 text-slate-700 hover:text-[#03A9F5] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#03A9F5]" />
                  <span>011- 43017435 / 46452172</span>
                </a>
                <a
                  href="mailto:mail@lawlinksoffice.com"
                  className="flex items-center gap-2 text-slate-700 hover:text-[#03A9F5] font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-[#03A9F5]" />
                  <span>mail@lawlinksoffice.com</span>
                </a>
              </div>
              <button
                onClick={onRequestConsultation}
                className="w-full py-2.5 bg-[#03A9F5] hover:bg-[#0288d1] text-white text-xs font-bold rounded-lg uppercase tracking-wider cursor-pointer shadow-xs transition-colors"
              >
                Send Urgent Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
