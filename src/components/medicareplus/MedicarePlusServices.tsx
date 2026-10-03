import React, { useState } from 'react';
import {
  Stethoscope,
  Ambulance,
  Droplet,
  HeartPulse,
  TestTube,
  Scan,
  Clock,
  Filter,
  AlertCircle,
  Crosshair,
  Pill,
  Activity,
  FileCheck,
  Globe,
  ArrowRight,
  X,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_LIST, HospitalServiceItem } from '../../data/medicarePlusData';

interface MedicarePlusServicesProps {
  onOpenAppointmentModal: (doctorName?: string, speciality?: string) => void;
}

export const MedicarePlusServices: React.FC<MedicarePlusServicesProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedService, setSelectedService] = useState<HospitalServiceItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (16)' },
    { id: 'Emergency', label: 'Emergency & Critical Care' },
    { id: 'Diagnostic', label: 'Radiology & Laboratory' },
    { id: 'Surgical', label: 'Surgical & Interventional' },
    { id: 'Speciality', label: 'Daycare & Support Services' },
  ];

  const filteredServices =
    selectedFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => {
          if (selectedFilter === 'Emergency') {
            return s.category === 'Emergency';
          }
          if (selectedFilter === 'Diagnostic') {
            return s.category === 'Diagnostic' || s.category === 'Laboratory';
          }
          if (selectedFilter === 'Surgical') {
            return s.category === 'Surgical';
          }
          if (selectedFilter === 'Speciality') {
            return (
              s.category === 'Speciality' ||
              s.category === 'Preventive' ||
              s.category === 'Retail' ||
              s.category === 'Rehabilitation' ||
              s.category === 'Consultation' ||
              s.category === 'Immigration'
            );
          }
          return true;
        });

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Hospital Infrastructure &amp; Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Hospital Services &amp; Facilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            24/7 dedicated support infrastructure engineered for rapid emergency response, high-precision imaging, and seamless inpatient care.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-[#0C4A60] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Header Icon */}
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#00A896] flex items-center justify-center mb-4 group-hover:bg-[#00A896] group-hover:text-white transition-colors shadow-xs">
                  <Stethoscope className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {srv.category}
                </span>

                <h3 className="text-base font-extrabold text-[#0C4A60] group-hover:text-[#00A896] transition-colors mt-1 leading-snug">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {srv.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">{srv.timings}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896]">
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                {selectedService.category} Service
              </span>
              <h3 className="text-2xl font-black text-[#0C4A60] mt-1">
                {selectedService.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Operational Timings: <strong>{selectedService.timings}</strong>
              </p>
            </div>

            <div className="mt-5 space-y-4 text-xs text-slate-700 leading-relaxed">
              <p>{selectedService.description}</p>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Technical &amp; Operational Features
                </h4>
                <div className="space-y-1.5">
                  {selectedService.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-800 block">Direct Department Contact</span>
                  <span className="text-sm font-black text-[#0C4A60]">{selectedService.helpline}</span>
                </div>
                <a
                  href={`tel:${selectedService.helpline}`}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0C4A60] text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Department</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
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
