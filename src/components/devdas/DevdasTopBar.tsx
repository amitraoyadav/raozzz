import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  Calendar,
  Sparkles,
  Heart,
  Globe,
} from 'lucide-react';
import { DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasTopBarProps {
  onOpenInquiry: () => void;
  onOpenCalculator: () => void;
}

export const DevdasTopBar: React.FC<DevdasTopBarProps> = ({
  onOpenInquiry,
  onOpenCalculator,
}) => {
  const [officesDropdownOpen, setOfficesDropdownOpen] = useState(false);

  return (
    <div className="bg-[#1f0a10] text-slate-200 text-xs border-b border-amber-900/40 select-none relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Global & Regional Studio Presence */}
        <div className="hidden lg:flex items-center gap-2 overflow-hidden text-[11px] text-slate-300">
          <span className="text-amber-400 font-bold uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Globe className="w-3 h-3 text-amber-400" />
            <span>Offices:</span>
          </span>
          <div className="truncate max-w-xl text-slate-400">
            <span>NEW DELHI</span> • <span>GURGAON</span> • <span>KOLKATA</span> • <span>JAIPUR</span> • <span>GOA</span> • <span>THAILAND</span>
          </div>
        </div>

        {/* Right: Phone, Office Selector & Consultation CTA */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-3 sm:gap-4 flex-wrap">
          {/* Offices Contact Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOfficesDropdownOpen(!officesDropdownOpen)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#7A1C30] hover:bg-[#631425] text-white font-semibold transition-colors cursor-pointer text-xs shadow-xs border border-amber-500/20"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>CALL PLANNER</span>
              <ChevronDown className="w-3 h-3 text-amber-200" />
            </button>

            {officesDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOfficesDropdownOpen(false)}
                />
                <div className="absolute left-0 lg:left-auto lg:right-0 mt-2 w-72 sm:w-80 bg-slate-900 border border-amber-800/60 rounded-2xl shadow-2xl py-3 z-50 backdrop-blur-md">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 flex items-center justify-between">
                    <span>Direct Planning Desks</span>
                    <span className="text-slate-500 font-normal">7 Days / Wk</span>
                  </div>
                  <div className="divide-y divide-slate-800/80">
                    {DEVDAS_CONFIG.offices.map((office, idx) => (
                      <div key={idx} className="p-3 hover:bg-slate-800/60 transition-colors">
                        <div className="font-bold text-xs text-white flex items-center justify-between">
                          <span>{office.city}</span>
                          <a
                            href={`tel:${office.phone}`}
                            className="text-amber-400 hover:text-amber-300 font-mono text-[11px]"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {office.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${DEVDAS_CONFIG.whatsapp.replace('+', '')}?text=Hi%20Devdas%20Wedding%20Team%2C%20I%20am%20planning%20a%20destination%20wedding`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors text-xs font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp: {DEVDAS_CONFIG.whatsappDisplay}</span>
          </a>

          {/* Instant Cost Estimator CTA */}
          <button
            onClick={onOpenCalculator}
            className="text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Budget Estimator</span>
          </button>

          {/* Book Consultation button */}
          <button
            onClick={onOpenInquiry}
            className="px-3 py-1 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-all shadow-xs cursor-pointer"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
