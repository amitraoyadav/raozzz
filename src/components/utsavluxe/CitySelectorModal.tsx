import React from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface CitySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const CitySelectorModal: React.FC<CitySelectorModalProps> = ({
  isOpen,
  onClose,
  selectedCity,
  onSelectCity
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-scale-up">
        
        {/* Header */}
        <div className="p-5 bg-[#140809] text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8D7B]">
              Experience Centers & Destination Desks
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
              Select Your Wedding City / Studio
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-lg text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* City Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {UTSAV_BUSINESS_CONFIG.cities.map(c => {
            const isCurrent = c.id === selectedCity;
            return (
              <div
                key={c.id}
                onClick={() => {
                  onSelectCity(c.id);
                  onClose();
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  isCurrent
                    ? 'border-[#E05A47] bg-[#E05A47]/5 ring-2 ring-[#E05A47] shadow-xs'
                    : 'border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src={c.featuredImage} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {c.name}
                    </h4>
                    {isCurrent && (
                      <span className="text-[10px] font-bold text-[#E05A47] bg-white px-2 py-0.5 rounded-full border border-[#E05A47]">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500 truncate mt-0.5">
                    {c.tag}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-stone-400 mt-2 font-medium">
                    <span>{c.weddingsHosted}+ Weddings</span>
                    <span>•</span>
                    <span>{c.popularVenuesCount} Partner Venues</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
