import React from 'react';
import { Smartphone, CheckCircle2, QrCode, Sparkles } from 'lucide-react';

export const ClinicByPeopleAppCta: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1528] via-[#0E2044] to-[#0A3EA1] text-white border-b border-slate-800 font-['Lexend',sans-serif] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-sky-400 border border-white/20 inline-flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" />
              <span>ClinicByPeople Mobile Companion</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Healthcare support, wherever you are.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Book OPD slots, download digital diagnostic lab reports, track your doorstep cab, and consult care coordinators directly from your phone.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant OPD Appointment Confirmation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24x7 Post-Surgery Recovery Hotline</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Paperwork Digital Vault</span>
              </span>
            </div>

            {/* App Store Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => alert('ClinicByPeople iOS App - Demo Link')}
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-2.5 shadow-md cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center font-black text-sm"></div>
                <div className="text-left leading-none">
                  <span className="text-[9px] block text-slate-500 uppercase font-medium">Download on the</span>
                  <span className="text-xs font-bold">App Store</span>
                </div>
              </button>

              <button
                onClick={() => alert('ClinicByPeople Android App - Demo Link')}
                className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2.5 shadow-md cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center font-bold text-emerald-400 text-sm">▶</div>
                <div className="text-left leading-none">
                  <span className="text-[9px] block text-slate-400 uppercase font-medium">Get it on</span>
                  <span className="text-xs font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-3">
              <div className="w-28 h-28 bg-white rounded-2xl p-2 mx-auto flex items-center justify-center shadow-lg">
                <QrCode className="w-full h-full text-slate-900" />
              </div>
              <span className="text-xs font-bold block text-white">Scan to Explore Demo</span>
              <span className="text-[10px] text-slate-300 block">Available across iOS &amp; Android platforms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
