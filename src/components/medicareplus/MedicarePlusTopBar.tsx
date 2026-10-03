import React from 'react';
import { Phone, AlertCircle, Ambulance, Clock, ShieldCheck } from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

export const MedicarePlusTopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#083344] text-slate-200 text-xs font-['Satoshi',sans-serif] border-b border-cyan-900/60">
      {/* Desktop Top Information Bar */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Contact Numbers */}
          <div className="flex items-center gap-3 text-[11px] flex-wrap font-medium">
            <span className="text-teal-400 font-bold flex items-center gap-1">
              <Phone className="w-3 h-3 text-teal-400" />
              OPD:
            </span>
            <a
              href={`tel:${MEDICARE_CONFIG.phoneOpd}`}
              className="text-white hover:text-teal-300 transition-colors"
            >
              {MEDICARE_CONFIG.phoneOpd}
            </a>

            <span className="text-slate-600">|</span>

            <span className="text-slate-300 font-medium">Boardline:</span>
            <a
              href={`tel:${MEDICARE_CONFIG.phoneBoardline}`}
              className="text-white hover:text-teal-300 transition-colors"
            >
              {MEDICARE_CONFIG.phoneBoardline}
            </a>

            <span className="text-slate-600">|</span>

            <span className="text-rose-400 font-bold flex items-center gap-1">
              <AlertCircle className="w-3 h-3 text-rose-400" />
              Casualty:
            </span>
            <a
              href={`tel:${MEDICARE_CONFIG.phoneCasualty}`}
              className="text-white hover:text-rose-300 transition-colors font-bold"
            >
              {MEDICARE_CONFIG.phoneCasualty}
            </a>

            <span className="text-slate-600">|</span>

            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Ambulance className="w-3.5 h-3.5 text-amber-400" />
              Ambulance:
            </span>
            <a
              href={`tel:${MEDICARE_CONFIG.phoneAmbulance}`}
              className="text-white hover:text-amber-300 transition-colors font-bold"
            >
              {MEDICARE_CONFIG.phoneAmbulance}
            </a>
          </div>

          {/* Right: Hospital Demo Tag & Working Mode */}
          <div className="flex items-center gap-3 text-[11px] text-slate-300 shrink-0">
            <span className="flex items-center gap-1 text-emerald-400">
              <Clock className="w-3 h-3" />
              24x7 Emergency Ready
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
              Demo Hospital Portal
            </span>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Compact Emergency Bar */}
      <div className="lg:hidden px-3 py-1.5 bg-[#05222E] flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-rose-400 font-bold">
            <AlertCircle className="w-3 h-3" />
            Emerg:
          </span>
          <a
            href={`tel:${MEDICARE_CONFIG.phoneCasualty}`}
            className="text-white font-bold underline"
          >
            {MEDICARE_CONFIG.phoneCasualty}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-amber-400 font-bold">
            <Ambulance className="w-3 h-3" />
            Amb:
          </span>
          <a
            href={`tel:${MEDICARE_CONFIG.phoneAmbulance}`}
            className="text-white font-bold"
          >
            {MEDICARE_CONFIG.phoneAmbulance}
          </a>
        </div>
      </div>
    </div>
  );
};
