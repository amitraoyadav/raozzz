import React, { useState } from 'react';
import { TEAM_MEMBERS, LawyerProfile } from '../../data/lawlinksData';
import { LawLinksSubPage } from './LawLinksHeader';
import {
  Scale,
  GraduationCap,
  Award,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone
} from 'lucide-react';

interface Props {
  selectedLawyerId?: string | null;
  onSelectLawyer: (lawyerId: string | null) => void;
  onNavigate: (page: LawLinksSubPage) => void;
  onRequestConsultation: () => void;
}

export const LawLinksTeam: React.FC<Props> = ({
  selectedLawyerId,
  onSelectLawyer,
  onNavigate,
  onRequestConsultation
}) => {
  const [filter, setFilter] = useState<'all' | 'partners' | 'delhi' | 'bengaluru'>('all');

  const selectedLawyer = selectedLawyerId
    ? TEAM_MEMBERS.find((m) => m.id === selectedLawyerId || m.slug === selectedLawyerId)
    : null;

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (filter === 'partners') {
      return (
        m.id === 'lalit-mohini-bhat' ||
        m.id === 'naveen-r-nath' ||
        m.id === 'hetu-arora-sethi' ||
        m.id === 'rahul-jain'
      );
    }
    if (filter === 'bengaluru') {
      return (
        m.id === 'reshma-thammaiah' ||
        m.id === 'rashmi-s' ||
        m.id === 'madhuri-gaikwad'
      );
    }
    if (filter === 'delhi') {
      return !(
        m.id === 'reshma-thammaiah' ||
        m.id === 'rashmi-s' ||
        m.id === 'madhuri-gaikwad'
      );
    }
    return true;
  });

  // If a lawyer is actively selected, show their full profile view
  if (selectedLawyer) {
    return (
      <div className="space-y-12 pb-16">
        {/* Breadcrumb banner */}
        <div className="bg-[#1e293b] text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            <button
              onClick={() => onSelectLawyer(null)}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#03A9F5] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All 12 Lawyers</span>
            </button>
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Lawyer Profile</span>
              <h1 className="text-3xl sm:text-5xl font-black">{selectedLawyer.name}</h1>
              <p className="text-slate-300 text-sm font-semibold">{selectedLawyer.role}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Photo & Fast Credentials */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <div className="h-80 sm:h-96 bg-slate-100 relative">
                  <img
                    src={selectedLawyer.image}
                    alt={selectedLawyer.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">{selectedLawyer.name}</h3>
                    <p className="text-xs font-semibold text-[#03A9F5] uppercase tracking-wider">{selectedLawyer.title}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Experience</strong>
                        <span>{selectedLawyer.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Scale className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Enrolment & Bar</strong>
                        <span>{selectedLawyer.enrolment}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Education</strong>
                        <span>{selectedLawyer.education}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-[#03A9F5] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Email Contact</strong>
                        <a href={`mailto:${selectedLawyer.email}`} className="text-[#03A9F5] hover:underline">
                          {selectedLawyer.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onRequestConsultation}
                      className="w-full py-3 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg uppercase tracking-wider text-xs shadow cursor-pointer transition-colors"
                    >
                      Brief {selectedLawyer.name.split(' ')[1] || 'Counsel'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Detailed Bio & Areas of Expertise */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
                <div className="border-l-4 border-[#03A9F5] pl-4 py-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#03A9F5]">Professional Biography</span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Career & Practice Profile</h2>
                </div>

                <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                  {selectedLawyer.bio.map((paragraph, i) => (
                    <p key={i} className={i === 0 ? 'text-lg font-medium text-slate-900 leading-relaxed' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Areas of Expertise */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900">Domains of Practice & Subject Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLawyer.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-md bg-sky-50 text-slate-800 border border-sky-100 text-xs font-semibold"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other partners nav */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Explore Other Counsel</h4>
                  <p className="text-xs text-slate-500">View colleagues and senior partners across Delhi & Bengaluru.</p>
                </div>
                <button
                  onClick={() => onSelectLawyer(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-[#03A9F5] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Full Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Team Directory View
  return (
    <div className="space-y-16 pb-16">
      {/* Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="Our Team Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Seasoned Litigators & Arbitrators
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Our Legal Team</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            12 Qualified Advocates and Legal Consultants practicing across the Supreme Court of India, High Courts, and National Tribunals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#03A9F5] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All 12 Lawyers
          </button>
          <button
            onClick={() => setFilter('partners')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'partners'
                ? 'bg-[#03A9F5] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Partners & Senior Advocates
          </button>
          <button
            onClick={() => setFilter('delhi')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'delhi'
                ? 'bg-[#03A9F5] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Delhi Office (Headquarters)
          </button>
          <button
            onClick={() => setFilter('bengaluru')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              filter === 'bengaluru'
                ? 'bg-[#03A9F5] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Bengaluru Office
          </button>
        </div>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => onSelectLawyer(member.id)}
            >
              <div className="h-68 bg-slate-100 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider bg-[#03A9F5] px-2.5 py-1 rounded">
                    Read Detailed Bio &rarr;
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#03A9F5] font-semibold">{member.role}</p>
                  <p className="text-xs text-slate-500 line-clamp-3 mt-2 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate pr-2">{member.experience}</span>
                  <span className="text-[#03A9F5] font-bold group-hover:underline shrink-0">
                    Profile &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
