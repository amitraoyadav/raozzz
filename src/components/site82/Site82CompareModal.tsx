import React from 'react';
import {
  X,
  Scale,
  Building,
  MapPin,
  CheckCircle2,
  Trash2,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Layers,
  Phone
} from 'lucide-react';
import { WealthProperty, WEALTH_PROPERTIES } from '../../data/site82Data';
import { site82Config } from '../../config/site82Config';

interface Site82CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  compareIds: string[];
  onRemoveFromCompare: (id: string) => void;
  onClearAll: () => void;
  onSelectProperty: (property: WealthProperty) => void;
  onOpenConsultation: (projectName: string) => void;
}

export const Site82CompareModal: React.FC<Site82CompareModalProps> = ({
  isOpen,
  onClose,
  compareIds,
  onRemoveFromCompare,
  onClearAll,
  onSelectProperty,
  onOpenConsultation
}) => {
  if (!isOpen) return null;

  const comparedProperties = WEALTH_PROPERTIES.filter((p) => compareIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F0D9CC] max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1E2430] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F54900] flex items-center justify-center text-white">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Compare Properties</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-neutral-200">
                  {comparedProperties.length} / 4
                </span>
              </h3>
              <p className="text-xs text-neutral-400">
                Detailed side-by-side RERA, pricing, and amenities matrix
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {comparedProperties.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-x-auto overflow-y-auto flex-1 bg-[#FCFAF9]">
          {comparedProperties.length === 0 ? (
            <div className="text-center py-16">
              <Scale className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-neutral-700">No properties in comparison</h4>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto mt-1 mb-6">
                Click the "Compare" button on any property card or detail page to compare up to 4 projects side-by-side.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#F54900] text-white text-xs font-bold hover:bg-[#E65100] transition-colors cursor-pointer"
              >
                Explore Properties
              </button>
            </div>
          ) : (
            <div className="min-w-[650px]">
              <div className="grid grid-cols-5 gap-3 border-b border-neutral-200 pb-4">
                <div className="font-semibold text-xs text-neutral-500 uppercase tracking-wider pt-4">
                  Feature / Project
                </div>
                {comparedProperties.map((p) => (
                  <div key={p.id} className="relative bg-white rounded-2xl p-3 border border-[#F0D9CC] shadow-sm flex flex-col justify-between">
                    <button
                      onClick={() => onRemoveFromCompare(p.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-neutral-100 hover:bg-red-50 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-2">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-bold text-sm text-[#1E2430] leading-tight line-clamp-1 mb-1">
                      {p.name}
                    </h5>
                    <p className="text-xs text-neutral-500 line-clamp-1 mb-2">
                      {p.location}, {p.city}
                    </p>
                    <div className="text-sm font-bold text-[#F54900]">
                      {p.priceFormatted}
                    </div>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="divide-y divide-neutral-200 text-xs">
                {/* Developer */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-semibold text-neutral-500">Developer</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="font-medium text-neutral-800">
                      {p.developer}
                    </div>
                  ))}
                </div>

                {/* Project Type */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center bg-white/60">
                  <div className="font-semibold text-neutral-500">Type</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="font-medium text-neutral-800">
                      <span className="px-2 py-0.5 rounded bg-orange-100 text-[#F54900] text-[11px] font-semibold">
                        {p.projectType}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Configuration */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-semibold text-neutral-500">Configuration</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="font-medium text-neutral-800">
                      {p.configuration}
                    </div>
                  ))}
                </div>

                {/* Area (Sq Ft) */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center bg-white/60">
                  <div className="font-semibold text-neutral-500">Super Area</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="font-medium text-neutral-800">
                      {p.areaSqFt}
                    </div>
                  ))}
                </div>

                {/* Status & Possession */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center">
                  <div className="font-semibold text-neutral-500">Possession Status</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="font-medium text-neutral-800">
                      <div>{p.status}</div>
                      <div className="text-[11px] text-neutral-500">{p.possessionDate}</div>
                    </div>
                  ))}
                </div>

                {/* RERA ID */}
                <div className="grid grid-cols-5 gap-3 py-3 items-center bg-white/60">
                  <div className="font-semibold text-neutral-500">RERA Registration</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="font-mono text-[11px] text-neutral-700">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {p.reraNumber}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Amenities */}
                <div className="grid grid-cols-5 gap-3 py-3 items-start">
                  <div className="font-semibold text-neutral-500">Amenities</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="space-y-1">
                      {p.amenities.slice(0, 4).map((a, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-neutral-600 text-[11px]">
                          <CheckCircle2 className="w-3 h-3 text-[#F54900] shrink-0" />
                          <span className="line-clamp-1">{a}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="grid grid-cols-5 gap-3 py-4 items-center bg-orange-50/50">
                  <div className="font-semibold text-neutral-500">Actions</div>
                  {comparedProperties.map((p) => (
                    <div key={p.id} className="space-y-2">
                      <button
                        onClick={() => {
                          onSelectProperty(p);
                          onClose();
                        }}
                        className="w-full py-2 px-2 rounded-xl bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenConsultation(p.name);
                        }}
                        className="w-full py-1.5 px-2 rounded-xl bg-[#F54900] text-white font-semibold text-xs hover:bg-[#E65100] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Enquire</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
