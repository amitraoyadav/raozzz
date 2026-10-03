import React from 'react';
import {
  AlertTriangle,
  Ambulance,
  Phone,
  Clock,
  ShieldAlert,
  HeartPulse,
  Activity,
  CheckCircle2,
  MapPin,
  Flame,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

export const MedicarePlusEmergency: React.FC = () => {
  return (
    <section id="emergency" className="py-16 sm:py-24 bg-gradient-to-br from-[#051E28] via-[#0C4A60] to-[#083344] text-white font-['Satoshi',sans-serif] relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Pulses */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Emergency 24/7 Headline & Key Triage Protocol */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-bold uppercase tracking-wider animate-pulse">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Level-1 Trauma &amp; Emergency Center</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
              24/7 Emergency Care &amp; Rapid Ambulance
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed">
              Equipped with a 20-bed triaged casualty bay, dedicated resuscitation crash team, adjacent emergency CT, and biplane cath lab for immediate acute stroke and heart attack intervention.
            </p>

            {/* Emergency Hotline Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${MEDICARE_CONFIG.phoneCasualty}`}
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-sm sm:text-base shadow-xl shadow-rose-950/50 transition-all flex items-center gap-3 cursor-pointer hover:scale-105 active:scale-95"
              >
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rose-200 block">
                    Casualty &amp; Trauma Call
                  </span>
                  <span>{MEDICARE_CONFIG.phoneCasualty}</span>
                </div>
              </a>

              <a
                href={`tel:${MEDICARE_CONFIG.phoneAmbulance}`}
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-black text-sm sm:text-base shadow-xl shadow-amber-950/50 transition-all flex items-center gap-3 cursor-pointer hover:scale-105 active:scale-95"
              >
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Ambulance className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200 block">
                    Ambulance Dispatch
                  </span>
                  <span>{MEDICARE_CONFIG.phoneAmbulance}</span>
                </div>
              </a>
            </div>

            {/* Protocols Ticker */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Door-to-Balloon &lt; 40 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Code-Stroke CT within 10 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero Bedside Wait for Triage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Trauma & Critical Care Features Card */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-teal-300" />
              <span>Critical Care Capabilities</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white">ICU-on-Wheels Mobile Fleet</h4>
                  <p className="text-slate-300 mt-0.5">Equipped with transport ventilators, defibrillators, oxygen cascades, and paramedic tele-link.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white">Dedicated Resuscitation Bay</h4>
                  <p className="text-slate-300 mt-0.5">High-velocity polytrauma crash bay with point-of-care blood gas analysis (ABG) and instant blood transfusion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white">Level-3 Critical Care Network</h4>
                  <p className="text-slate-300 mt-0.5">120 adult and pediatric ICU beds with round-the-clock intensivist monitoring and continuous renal replacement therapy.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Sector 62 Medical Enclave, NCR</span>
              </span>
              <span className="text-[10px] text-teal-300 font-mono">GPS Dispatch Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
