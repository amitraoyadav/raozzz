import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Building,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { SHOWROOMS_DATA, ShowroomLocation, LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

interface LivintoLocationsSectionProps {
  onOpenConsultation: () => void;
  selectedCity?: string;
}

export const LivintoLocationsSection: React.FC<LivintoLocationsSectionProps> = ({
  onOpenConsultation,
  selectedCity = 'Bengaluru',
}) => {
  const [activeCityTab, setActiveCityTab] = useState<string>(selectedCity);

  const CITIES = [
    'Bengaluru',
    'Delhi NCR',
    'Gurugram',
    'Noida',
    'Mumbai',
    'Pune',
    'Hyderabad',
    'Chennai',
    'Kochi',
    'Trivandrum',
    'Calicut',
    'Ahmedabad',
  ];

  const cityShowrooms = SHOWROOMS_DATA.filter(
    (s) => s.city.toLowerCase() === activeCityTab.toLowerCase()
  );

  const displayList = cityShowrooms.length > 0 ? cityShowrooms : SHOWROOMS_DATA.slice(0, 4);

  return (
    <section id="locations" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-[#814882]" />
            <span>29 Direct Company Showrooms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            VISIT OUR EXPERIENCE CENTRES
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Touch and feel life-size modular kitchens, sliding wardrobes, living room setups, and hardware displays at our experience centres.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCityTab(city)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCityTab.toLowerCase() === city.toLowerCase()
                  ? 'bg-[#814882] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Showrooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((showroom) => (
            <div
              key={showroom.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#814882] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={showroom.image}
                    alt={showroom.branchName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-white/10">
                      {showroom.area}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-bold text-lg text-white">
                      {showroom.branchName}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{showroom.showroomSize}</span>
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4 text-xs">
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#814882] shrink-0 mt-0.5" />
                      <div>
                        <div>{showroom.address}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Landmark: {showroom.landmark}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{showroom.hours}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#814882] shrink-0" />
                      <a
                        href={`tel:${showroom.phone}`}
                        className="font-bold text-slate-900 hover:text-[#814882] transition-colors"
                      >
                        {showroom.phone}
                      </a>
                    </div>
                  </div>

                  {/* Display Suites */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Live Mockup Suites on Display:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {showroom.displaySuites.map((suite, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-purple-50 text-[#814882] text-[10px] font-semibold"
                        >
                          {suite}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    showroom.branchName + ' ' + showroom.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#814882]" />
                  <span>Get Directions</span>
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
