import React, { useState } from 'react';
import {
  Clock,
  Coffee,
  ShieldCheck,
  Car,
  Compass,
  AlertCircle,
  CheckCircle2,
  Building2,
  Users,
  HeartHandshake,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

export const MedicarePlusVisitorsGuide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'hours' | 'policy' | 'facilities' | 'parking'>('hours');

  return (
    <section id="visitors-guide" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Hospital Navigation &amp; Policies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Visitors Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Essential guidelines for patient relatives and visitors to maintain a restful, sterile, and healing environment.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'hours', label: 'Visiting Hours', icon: Clock },
            { id: 'policy', label: 'Visitor Policies & Passes', icon: ShieldCheck },
            { id: 'facilities', label: 'Convenience & Facilities', icon: Coffee },
            { id: 'parking', label: 'Parking & Campus Navigation', icon: Car },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#0C4A60] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Visiting Hours */}
        {activeCategory === 'hours' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#0C4A60]">Inpatient Wards &amp; Rooms</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visiting hours for private deluxe suites, twin-sharing rooms, and general inpatient recovery floors:
              </p>
              <div className="space-y-2 text-xs font-bold text-slate-800 bg-white p-4 rounded-2xl border border-slate-200/80">
                <div className="flex justify-between">
                  <span>Morning Session:</span>
                  <span className="text-[#00A896]">10:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Evening Session:</span>
                  <span className="text-[#00A896]">4:00 PM – 8:00 PM</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                *Maximum of 2 visitors permitted inside the room at any given time.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 border border-rose-200/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-rose-950">Intensive Care Units (ICU / CCU)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict infection-control protocol applies to all critical care bays to protect immunocompromised patients:
              </p>
              <div className="space-y-2 text-xs font-bold text-slate-800 bg-white p-4 rounded-2xl border border-rose-200/60">
                <div className="flex justify-between">
                  <span>Morning ICU Slot:</span>
                  <span className="text-rose-700">11:00 AM – 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Evening ICU Slot:</span>
                  <span className="text-rose-700">5:00 PM – 6:00 PM</span>
                </div>
              </div>
              <p className="text-[11px] text-rose-600">
                *Only 1 primary attendant permitted. Shoe covers, gowns, and hand rub mandatory before entry.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Visitor Policy */}
        {activeCategory === 'policy' && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-4 animate-in fade-in duration-200 text-xs sm:text-sm text-slate-700">
            <h3 className="text-xl font-black text-[#0C4A60]">Visitor Code of Conduct &amp; Safety Policy</h3>
            <p className="text-slate-600 leading-relaxed">
              We urge all visitors to co-operate with hospital security and nursing teams to maintain acoustic quiet and zero clinical contamination.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {[
                'Visitor passes must be worn visibly at all security check-points.',
                'Children under 12 years are discouraged from visiting ICU and isolation floors for infection safety.',
                'Outside food, flowers, and potted plants are strictly prohibited in patient recovery areas.',
                'Maintain silent mode on mobile devices; loud conversations in corridors are restricted.',
                'Sanitize hands using automatic wall-mounted dispensers before entering and leaving patient rooms.',
                'Smoking, tobacco, and vaping are strictly prohibited anywhere inside the medical campus.',
              ].map((pol, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                  <span>{pol}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Facilities */}
        {activeCategory === 'facilities' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-200 text-xs">
            {[
              { title: '24/7 Cafeteria & Food Court', desc: 'Hygienic vegetarian and multicuisine dining on Ground Floor and 1st Floor mezzanine.', icon: Coffee },
              { title: 'Automated Teller Machines (ATMs)', desc: 'SBI and HDFC multi-currency ATM kiosks adjacent to main reception.', icon: Building2 },
              { title: 'Prayer & Meditation Pods', desc: 'Peaceful multi-faith spiritual prayer room located on the 2nd Floor.', icon: HeartHandshake },
              { title: 'Free High-Speed Wi-Fi', desc: 'Complimentary seamless connectivity across all patient lounges and waiting areas.', icon: Compass },
            ].map((fac, i) => {
              const Icon = fac.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#0C4A60] text-sm">{fac.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{fac.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Parking */}
        {activeCategory === 'parking' && (
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-4 animate-in fade-in duration-200 text-xs sm:text-sm text-slate-700">
            <h3 className="text-xl font-black text-[#0C4A60]">Campus Parking &amp; Wayfinding</h3>
            <p className="text-slate-600 leading-relaxed">
              MedicarePlus Hospital provides multi-level underground basement parking accommodating over 800 four-wheelers and two-wheelers with round-the-clock CCTV surveillance and valet services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="font-bold text-[#0C4A60] block mb-1">Valet Parking Desk</span>
                <p className="text-xs text-slate-500">Available at main porch entrance 24 hours a day for emergency casualty arrivals and senior citizens.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="font-bold text-[#0C4A60] block mb-1">EV Charging Stations</span>
                <p className="text-xs text-slate-500">Fast dual-gun electric vehicle chargers installed on Basement Level 1 for visitors.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <span className="font-bold text-[#0C4A60] block mb-1">Wheelchair Escorts</span>
                <p className="text-xs text-slate-500">Dedicated porter assistance with sanitized wheelchairs at all basement lift lobbies.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
