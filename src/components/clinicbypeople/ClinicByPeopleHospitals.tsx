import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Bed,
  Layers,
  ArrowRight,
  X,
  Calendar,
} from 'lucide-react';
import { CENTRES_DATA, ClinicCentre, CITIES_LIST } from '../../data/clinicByPeopleData';

interface ClinicByPeopleHospitalsProps {
  currentCity: string;
  onOpenConsultationModal: (speciality?: string, note?: string) => void;
}

export const ClinicByPeopleHospitals: React.FC<ClinicByPeopleHospitalsProps> = ({
  currentCity,
  onOpenConsultationModal,
}) => {
  const [selectedCityFilter, setSelectedCityFilter] = useState('All');
  const [selectedCentreModal, setSelectedCentreModal] = useState<ClinicCentre | null>(null);

  const cityTabs = ['All', 'Delhi NCR', 'Gurugram', 'Noida', 'Mumbai', 'Bengaluru', 'Hyderabad'];

  const filteredCentres =
    selectedCityFilter === 'All'
      ? CENTRES_DATA
      : CENTRES_DATA.filter((c) => c.city.toLowerCase() === selectedCityFilter.toLowerCase());

  return (
    <section id="hospitals" className="py-16 sm:py-24 bg-white border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Certified Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            ClinicByPeople Healthcare Centres
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            State-of-the-art daycare surgical hubs and NABH-accredited partner hospitals equipped with laminar airflow modular OTs.
          </p>

          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {cityTabs.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCityFilter(c)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCityFilter === c
                    ? 'bg-[#0C5BE2] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCentres.map((centre) => (
            <div
              key={centre.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0A3EA1] p-5 text-white flex flex-col justify-between relative">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
                      {centre.city}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white">
                      NABH Accredited
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="text-lg font-bold leading-tight group-hover:text-sky-300 transition-colors">
                      {centre.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0" />
                      <span className="truncate">{centre.location}</span>
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3 py-3 border-b border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-[#0C5BE2]" />
                      <span className="text-slate-600">
                        <strong className="text-slate-900">{centre.bedCapacity}</strong> Beds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#0C5BE2]" />
                      <span className="text-slate-600">
                        <strong className="text-slate-900">{centre.modularOTCount}</strong> Modular OTs
                      </span>
                    </div>
                  </div>

                  {/* Specialities available */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Surgical Divisions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {centre.specialities.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 text-slate-700 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCentreModal(centre)}
                  className="text-xs font-bold text-[#0C5BE2] hover:text-[#0947b3] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() =>
                    onOpenConsultationModal(
                      centre.specialities[0],
                      `Appointment request at ${centre.name}`
                    )
                  }
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-[#0C5BE2] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Book OPD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTRE DETAIL MODAL */}
      {selectedCentreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedCentreModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2]">
              {selectedCentreModal.city} Surgical Centre
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              {selectedCentreModal.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1 flex items-start gap-1">
              <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
              <span>{selectedCentreModal.address}</span>
            </p>

            <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Bed Capacity</span>
                <span className="font-bold text-slate-900 text-sm">
                  {selectedCentreModal.bedCapacity} Daycare &amp; Inpatient
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Operation Theatres</span>
                <span className="font-bold text-slate-900 text-sm">
                  {selectedCentreModal.modularOTCount} Modular Class 100
                </span>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <span className="text-xs font-bold text-slate-900 block">Accreditations &amp; Amenities:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCentreModal.accreditation.map((acc, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold"
                  >
                    ✓ {acc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  onOpenConsultationModal(
                    selectedCentreModal.specialities[0],
                    `Appointment at ${selectedCentreModal.name}`
                  );
                  setSelectedCentreModal(null);
                }}
                className="w-full py-3 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Schedule Appointment at this Centre
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
