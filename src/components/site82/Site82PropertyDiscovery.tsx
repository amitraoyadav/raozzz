import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MapPin, Building, ShieldCheck } from 'lucide-react';
import { CITIES_LIST, WEALTH_PROPERTIES, WealthProperty } from '../../data/site82Data';

interface Site82PropertyDiscoveryProps {
  onSelectProperty: (property: WealthProperty) => void;
  onViewAll: () => void;
}

export const Site82PropertyDiscovery: React.FC<Site82PropertyDiscoveryProps> = ({
  onSelectProperty,
  onViewAll
}) => {
  const [activeCityId, setActiveCityId] = useState('all');

  // Filter properties by city
  const filteredProperties = WEALTH_PROPERTIES.filter((p) => {
    if (activeCityId === 'all') return true;
    const cityObj = CITIES_LIST.find((c) => c.id === activeCityId);
    if (!cityObj) return true;
    return p.city.toLowerCase() === cityObj.name.toLowerCase();
  });

  return (
    <section className="px-6 pt-12 pb-16 lg:pt-24 lg:pb-28 bg-[#F7F5F4] relative">
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-sans font-semibold text-2xl sm:text-4xl lg:text-5xl leading-tight text-[#1F2430]">
            Explore Residential &amp; Commercial Properties in India’s{' '}
            <span className="text-[#F54900]">Fastest-Growing</span> Real Estate Markets
          </h2>

          {/* Subheading Ribbon */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#F54900]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F54900]">
              Guidance You Can Trust
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#F54900]" />
          </div>

          <p className="text-sm sm:text-base text-[#5F6672] font-normal leading-relaxed mt-4 max-w-3xl mx-auto">
            Invest in residential and commercial opportunities across Noida, Greater Noida, Yamuna Expressway, Delhi NCR, Ayodhya, and Lucknow. Wealth Nexus helps you discover{' '}
            <span className="text-[#F54900] font-semibold">RERA-approved properties</span> with strong appreciation potential and{' '}
            <span className="text-[#F54900] font-semibold">expert investment guidance</span>.
          </p>

          {/* City Navigation Tabs */}
          <nav className="flex justify-start sm:justify-center items-end gap-0 mt-10 border-b border-[#E5E2DF] overflow-x-auto scrollbar-none pb-0">
            {CITIES_LIST.map((city) => {
              const isActive = activeCityId === city.id;
              return (
                <button
                  key={city.id}
                  onClick={() => setActiveCityId(city.id)}
                  className={`py-3 sm:py-4 px-5 sm:px-7 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer -mb-[2px] border-b-2 ${
                    isActive
                      ? 'text-[#F54900] border-[#F54900] bg-orange-50/50 rounded-t-xl'
                      : 'text-[#7B8088] border-transparent hover:text-neutral-900'
                  }`}
                >
                  {city.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Property Cards Grid (Matching Wealth Clinic 34px rounded cards with hover reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {filteredProperties.slice(0, 8).map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group relative h-[430px] rounded-[34px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-neutral-900 border border-neutral-100"
            >
              {/* Background Property Image */}
              <img
                src={prop.images[0]}
                alt={prop.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Default Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10" />

              {/* Top Details (Title & Location) */}
              <div className="absolute top-6 left-5 right-5 text-white z-20">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold leading-tight group-hover:text-amber-200 transition-colors truncate">
                    {prop.name}
                  </h3>
                  {prop.isReraCompliant && (
                    <span className="text-[10px] bg-emerald-600/90 text-white font-mono px-2 py-0.5 rounded-full font-bold shrink-0">
                      RERA
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{prop.location}</span>
                </p>
              </div>

              {/* Bottom Gradient Overlay (Reveals full specs on desktop hover, visible on mobile) */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/75 to-transparent z-10 transition-opacity duration-300" />

              {/* Bottom Content (Price, Project Type, Configuration) */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white z-20 transition-all duration-300">
                <p className="text-base font-bold text-[#FF9B54] tracking-tight">
                  {prop.priceFormatted}
                </p>

                <div className="mt-2.5 flex flex-col gap-1.5 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono block">
                      Project Type
                    </span>
                    <span className="font-semibold text-neutral-200">{prop.projectType}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono block">
                      Configuration
                    </span>
                    <span className="font-medium text-neutral-300 line-clamp-1 text-[11px]">
                      {prop.configuration}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-300 font-mono">
                  <span>View Details →</span>
                  <span className="text-neutral-400 font-sans">{prop.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties Pill Button with Arrow Circle */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-3.5 bg-white/70 backdrop-blur-md border border-[#F36F21] rounded-full pl-7 pr-2 py-2 text-[#C84F0B] font-semibold text-sm sm:text-base hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer shadow-md"
          >
            <span>View All Properties ({WEALTH_PROPERTIES.length})</span>
            <span className="w-10 h-10 rounded-full bg-[#F54900] text-white flex items-center justify-center shrink-0 shadow-md">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
