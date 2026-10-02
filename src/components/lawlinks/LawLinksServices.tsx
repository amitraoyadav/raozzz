import React, { useState } from 'react';
import { INDUSTRY_SECTORS, PRACTICE_AREAS } from '../../data/lawlinksData';
import { LawLinksSubPage } from './LawLinksHeader';
import {
  CheckCircle,
  Search,
  Scale,
  ArrowRight,
  Briefcase,
  Shield,
  Layers
} from 'lucide-react';

interface Props {
  onNavigate: (page: LawLinksSubPage) => void;
  onRequestConsultation: () => void;
}

export const LawLinksServices: React.FC<Props> = ({
  onNavigate,
  onRequestConsultation
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSectors = INDUSTRY_SECTORS.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Inner Banner */}
      <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/lawlinks/about-banner.png"
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-4 space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
            Comprehensive Legal Offerings
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Services & Industry Sectors</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Strategic counsel, appellate litigation, commercial arbitration, and corporate compliance across 32 specialized business sectors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 2. Practice Areas Links */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#03A9F5]">Core Service Lines</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Litigation & Advisory Practices</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select any core practice area below to view procedural expertise and tribunal representations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRACTICE_AREAS.map((pa) => (
              <button
                key={pa.id}
                onClick={() => onNavigate(pa.id as LawLinksSubPage)}
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-[#03A9F5] shadow-xs hover:shadow-md transition-all text-left group flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#03A9F5] group-hover:bg-[#03A9F5] group-hover:text-white transition-colors flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors leading-snug">
                    {pa.title}
                  </h3>
                </div>
                <div className="pt-3 text-[11px] font-bold uppercase tracking-wider text-[#03A9F5] flex items-center gap-1">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. INDUSTRY SECTORS (All 32 Sectors) */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#03A9F5]">
                Specialized Domains
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                INDUSTRY SECTOR
              </h2>
              <p className="text-sm text-slate-600">
                Our partners and associates handle regulatory, contentious, and transactional matters in 32 recognized sectors.
              </p>
            </div>

            {/* Filter */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search industry sector..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#03A9F5] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSectors.map((sector) => (
              <div
                key={sector.name}
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-md transition-all flex items-center gap-3.5 group cursor-default"
              >
                <div className="w-9 h-9 rounded-full bg-sky-50 text-[#03A9F5] group-hover:bg-[#03A9F5] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#03A9F5] transition-colors">
                    {sector.name}
                  </h4>
                  <span className="text-[11px] text-slate-500">Advisory & Litigation</span>
                </div>
              </div>
            ))}
          </div>

          {filteredSectors.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No industry sector matched &ldquo;{searchTerm}&rdquo;. Try another term.
            </div>
          )}
        </div>

        {/* 4. Consultation CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Require counsel for a specific industry dispute?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Our partners advise corporations, government agencies, and industry leaders across all 32 practice verticals.
            </p>
          </div>
          <button
            onClick={onRequestConsultation}
            className="px-6 py-3 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg uppercase tracking-wider text-xs shadow cursor-pointer transition-colors shrink-0"
          >
            Contact Practice Head
          </button>
        </div>
      </div>
    </div>
  );
};
