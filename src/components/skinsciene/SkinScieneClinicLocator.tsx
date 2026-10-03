import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Calendar,
  Check,
  Star,
  Building,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { CLINIC_LOCATIONS, ClinicLocation, SKINSCIENE_CONFIG } from '../../data/skinScieneData';

interface SkinScieneClinicLocatorProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenBooking: (treatmentSlug?: string, branchName?: string) => void;
}

export const SkinScieneClinicLocator: React.FC<SkinScieneClinicLocatorProps> = ({
  selectedCity,
  onSelectCity,
  onOpenBooking,
}) => {
  const [directionsModalBranch, setDirectionsModalBranch] = useState<ClinicLocation | null>(null);

  const cityClinics = CLINIC_LOCATIONS.filter((c) => c.city === selectedCity);

  return (
    <section id="clinics" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-emerald-600" />
            <span>36+ State-of-the-Art Clinics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Find Your Nearest SkinSciene Clinic
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conveniently situated in premium prime locations across 10 major cities with complimentary valet parking, private consultation lounges, and advanced laser suites.
          </p>

          {/* City Selection Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {SKINSCIENE_CONFIG.cities.map((city) => (
              <button
                key={city}
                onClick={() => onSelectCity(city)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCity === city
                    ? 'bg-emerald-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Clinics Grid for Selected City */}
        {cityClinics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityClinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Clinic Photo Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-emerald-500/30">
                      {clinic.city}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                      <span className="font-semibold flex items-center gap-1">
                        ⭐ {clinic.rating} ({clinic.totalReviews} reviews)
                      </span>
                      <span className="text-emerald-300 font-medium">9 AM - 8 PM</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {clinic.name}
                      </h3>
                      <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{clinic.area}</span>
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <p className="line-clamp-2 leading-relaxed">{clinic.address}</p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        <strong>Landmark:</strong> {clinic.landmark}
                      </p>
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {clinic.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-medium border border-emerald-100"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(undefined, clinic.name)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Book at this Clinic</span>
                    </button>

                    <button
                      onClick={() => setDirectionsModalBranch(clinic)}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      title="View Map & Directions"
                    >
                      <Navigation className="w-4 h-4" />
                    </button>
                  </div>

                  <a
                    href={`tel:${clinic.phone}`}
                    className="block text-center text-xs font-semibold text-emerald-700 hover:underline pt-1"
                  >
                    Direct Desk: {clinic.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900">
              Expanding Rapidly in {selectedCity}
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 mb-4">
              We operate multiple consultation centers and partner laser hubs in {selectedCity}. Contact our central helpline to schedule your nearest visit.
            </p>
            <button
              onClick={() => onOpenBooking(undefined, `${selectedCity} Central Hub`)}
              className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-bold"
            >
              Book in {selectedCity}
            </button>
          </div>
        )}

        {/* Directions / Map Preview Modal */}
        {directionsModalBranch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-slate-900">
                    {directionsModalBranch.name}
                  </h4>
                  <p className="text-xs text-emerald-700">{directionsModalBranch.area}</p>
                </div>
                <button
                  onClick={() => setDirectionsModalBranch(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative h-44 rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden border border-slate-800 text-center p-4">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-1">
                  <MapPin className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <div className="text-xs font-bold text-white">
                    {directionsModalBranch.address}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    GPS Coordinates: 17.4123° N, 78.4321° E · Valet Parking Available
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Hours:</strong> {directionsModalBranch.timings}</div>
                <div><strong>Direct Helpline:</strong> {directionsModalBranch.phone}</div>
                <div><strong>Email:</strong> {directionsModalBranch.email}</div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const clinicName = directionsModalBranch.name;
                    setDirectionsModalBranch(null);
                    onOpenBooking(undefined, clinicName);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow"
                >
                  Book Appointment Here
                </button>
                <button
                  onClick={() => setDirectionsModalBranch(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
