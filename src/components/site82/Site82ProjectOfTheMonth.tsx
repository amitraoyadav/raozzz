import React, { useState } from 'react';
import {
  Sparkles,
  X,
  MapPin,
  Building,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { WEALTH_PROPERTIES, WealthProperty } from '../../data/site82Data';
import { site82Config } from '../../config/site82Config';

interface Site82ProjectOfTheMonthProps {
  onSelectProperty: (property: WealthProperty) => void;
  onBookConsultation: () => void;
}

export const Site82ProjectOfTheMonth: React.FC<Site82ProjectOfTheMonthProps> = ({
  onSelectProperty,
  onBookConsultation
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Featured Project of the Month (Orion One 32 or first listing)
  const featured = WEALTH_PROPERTIES.find((p) => p.isProjectOfTheMonth) || WEALTH_PROPERTIES[0];

  return (
    <>
      {/* Floating Right-Edge Badge (Hidden on small mobile) */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 hidden sm:flex flex-col items-center justify-between w-14 sm:w-16 h-28 sm:h-32 py-3 px-1 rounded-l-2xl bg-gradient-to-br from-[#FF8A4C] to-[#F5490A] shadow-[0_14px_30px_-6px_rgba(240,90,20,.65)] text-white cursor-pointer hover:scale-105 transition-transform"
        aria-label="View Project of the Month"
      >
        <Building className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">
          Project <br /> of Month
        </span>
        <span className="w-6 h-6 rounded-full bg-white text-[#F5490A] flex items-center justify-center font-bold text-xs shadow">
          ★
        </span>
      </button>

      {/* Featured Project Popup Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full text-neutral-900 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-white bg-black/50 hover:bg-black rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] bg-neutral-900">
              <img
                src={featured.images[0]}
                alt={featured.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#F54900] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                  ★ Project of the Month
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">{featured.name}</h3>
                <p className="text-xs text-neutral-200 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>{featured.location}, {featured.city}</span>
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase">Pricing</span>
                  <div className="text-xl font-bold text-[#F54900]">{featured.priceFormatted}</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase">Configuration</span>
                  <div className="text-xs font-semibold text-neutral-800">{featured.projectType} · {featured.status}</div>
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {featured.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {featured.amenities.slice(0, 4).map((a, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-neutral-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{a}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex gap-2">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    onSelectProperty(featured);
                  }}
                  className="flex-1 py-3 rounded-xl border border-neutral-300 hover:border-neutral-500 font-bold text-xs uppercase tracking-wider text-neutral-800 cursor-pointer text-center"
                >
                  View Full Details
                </button>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    onBookConsultation();
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#F54900] hover:bg-[#C7510B] text-white font-bold text-xs uppercase tracking-wider cursor-pointer text-center shadow-lg shadow-orange-500/30"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
