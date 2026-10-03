import React, { useState } from 'react';
import {
  ClipboardCheck,
  Clock,
  CheckCircle2,
  Calendar,
  AlertCircle,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { HEALTH_PACKAGES, HealthCheckupPackage } from '../../data/medicarePlusData';

interface MedicarePlusHealthPackagesProps {
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
}

export const MedicarePlusHealthPackages: React.FC<MedicarePlusHealthPackagesProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedPackageModal, setSelectedPackageModal] = useState<HealthCheckupPackage | null>(null);

  return (
    <section id="packages" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Preventive Wellness Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Health Check-up Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Personalized comprehensive screening panels conducted in a private single-floor lounge with same-day physician reviews.
          </p>
          <p className="text-xs text-amber-600 font-bold mt-1">
            *Demo Prices Shown For Portfolio Simulation Only
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HEALTH_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative bg-white ${
                pkg.isPopular
                  ? 'border-[#00A896] ring-2 ring-[#00A896]/30 shadow-md'
                  : 'border-slate-200/80 hover:border-teal-300'
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3 right-6 bg-[#00A896] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                {/* Duration & Tests Badge */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    {pkg.duration}
                  </span>
                  <span className="font-bold text-[#0C4A60] bg-teal-50 px-2 py-0.5 rounded-full">
                    {pkg.testsCount} Total Tests
                  </span>
                </div>

                {/* Package Name & Tagline */}
                <h3 className="text-lg font-black text-[#0C4A60] leading-tight">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {pkg.tagline}
                </p>

                {/* Pricing Block */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-[#0C4A60]">
                    ₹{pkg.demoPrice}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ₹{pkg.originalPrice}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 ml-auto bg-emerald-50 px-2 py-0.5 rounded">
                    Demo Price
                  </span>
                </div>

                {/* Tests Preview */}
                <div className="mt-5 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Inclusions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pkg.includedParameters.slice(0, 4).map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{t}</span>
                      </li>
                    ))}
                    {pkg.includedParameters.length > 4 && (
                      <li className="text-[11px] text-[#00A896] font-bold pl-5">
                        + {pkg.includedParameters.length - 4} more specialized tests
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() =>
                    onOpenAppointmentModal(undefined, `Health Package: ${pkg.name}`)
                  }
                  className="w-full py-2.5 rounded-xl bg-[#0C4A60] hover:bg-[#083344] text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-300" />
                  <span>Book Health Package</span>
                </button>

                <button
                  onClick={() => setSelectedPackageModal(pkg)}
                  className="w-full py-2 text-center text-xs font-bold text-[#00A896] hover:underline cursor-pointer"
                >
                  View All Test Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPackageModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                Preventive Health Plan
              </span>
              <h3 className="text-2xl font-black text-[#0C4A60] mt-1">
                {selectedPackageModal.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedPackageModal.tagline}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-2xl font-black text-[#0C4A60]">
                  ₹{selectedPackageModal.demoPrice}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{selectedPackageModal.originalPrice}
                </span>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded">
                  {selectedPackageModal.testsCount} Parameters Covered
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs text-slate-700">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Complete Test Inclusions ({selectedPackageModal.includedParameters.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPackageModal.includedParameters.map((p, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Fasting &amp; Preparation Instructions
                </h4>
                <ul className="space-y-1 text-slate-600">
                  {selectedPackageModal.preparationInstructions.map((inst, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Lounge opens daily at 7:30 AM.
              </span>
              <button
                onClick={() => {
                  onOpenAppointmentModal(undefined, `Package: ${selectedPackageModal.name}`);
                  setSelectedPackageModal(null);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#00A896] hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Check-up Slot</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
