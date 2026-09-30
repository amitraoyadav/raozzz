import React from 'react';
import { Car, Users, Wind, Briefcase, ShieldCheck, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { CAR_RENTALS } from '../data/brioTravelsData';
import { BrioVehicle } from '../data/types';

interface BrioCarRentalsPageProps {
  onOpenBookingModal: (vehicleName: string) => void;
}

export const BrioCarRentalsPage: React.FC<BrioCarRentalsPageProps> = ({
  onOpenBookingModal
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-teal-800/40">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-400/30">
            Delhi NCR Chauffeur Services
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-['Poppins'] tracking-tight mb-3">
            Premium Car Rentals & Outstation Coaches
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-['Inter'] leading-relaxed max-w-2xl">
            Reliable chauffeur-driven car rentals for outstation trips, airport pickups, same-day Agra tours, and group hill journeys. Sanitized vehicles, verified drivers, transparent per-km billing, and zero surge pricing.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CAR_RENTALS.map(vehicle => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/85 text-white text-xs font-bold backdrop-blur-md">
                    {vehicle.type}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-black shadow-md font-mono">
                    {vehicle.ratePerKm}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-['Poppins']">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Local 8h/80km: <strong className="text-slate-800">{vehicle.dailyRate}</strong> · Outstation: <strong className="text-teal-700">{vehicle.ratePerKm}</strong>
                    </p>
                  </div>

                  {/* Required Specs: Seats, AC, Luggage */}
                  <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                    <div className="flex flex-col items-center text-center p-1">
                      <Users className="w-5 h-5 text-teal-600 mb-1" />
                      <span className="font-bold text-slate-800">{vehicle.seats.split('+')[0]}</span>
                      <span className="text-[10px] text-slate-400">Capacity</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-1 border-x border-slate-200">
                      <Wind className="w-5 h-5 text-cyan-600 mb-1" />
                      <span className="font-bold text-slate-800 truncate max-w-full">AC Climate</span>
                      <span className="text-[10px] text-slate-400">Cooling</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-1">
                      <Briefcase className="w-5 h-5 text-amber-600 mb-1" />
                      <span className="font-bold text-slate-800 truncate max-w-full">{vehicle.luggage.split('+')[0]}</span>
                      <span className="text-[10px] text-slate-400">Luggage</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {vehicle.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Daily Package
                  </div>
                  <div className="text-sm font-black text-slate-900 font-mono">
                    {vehicle.dailyRate}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingModal(`Car Rental: ${vehicle.name}`)}
                  className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  Enquire Car
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chauffeur Trust Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 font-['Poppins']">Police Verified Drivers</h4>
            <p className="text-xs text-slate-500">All chauffeurs are background checked, hill certified, and speak English and Hindi fluently.</p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
              <Wind className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 font-['Poppins']">100% Sanitized Fleet</h4>
            <p className="text-xs text-slate-500">Every vehicle undergoes interior vacuuming and sanitization before every booking departure.</p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 font-['Poppins']">24x7 On-Trip Dispatch</h4>
            <p className="text-xs text-slate-500">Live GPS tracking and fleet dispatch control room active 24 hours a day across North India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
