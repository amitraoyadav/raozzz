import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  Clock,
  Sparkles,
  Building,
} from 'lucide-react';
import { LIVINTO_CONFIG, SHOWROOMS_DATA } from '../../data/livintoInteriorsData';

interface LivintoTopBarProps {
  onOpenConsultation: () => void;
  onOpenEstimate: () => void;
  onSelectCity?: (city: string) => void;
}

export const LivintoTopBar: React.FC<LivintoTopBarProps> = ({
  onOpenConsultation,
  onOpenEstimate,
  onSelectCity,
}) => {
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  return (
    <div className="bg-[#1f1620] text-slate-200 text-xs border-b border-purple-950/60 select-none relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Showroom Presence Strip */}
        <div className="hidden lg:flex items-center gap-2 overflow-hidden text-[11px] text-slate-300">
          <span className="text-amber-400 font-bold uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Building className="w-3 h-3 text-amber-400" />
            <span>29 Direct Showrooms:</span>
          </span>
          <div className="truncate max-w-xl text-slate-400">
            <span>BENGALURU</span> • <span>DELHI NCR</span> • <span>GURUGRAM</span> • <span>NOIDA</span> • <span>MUMBAI</span> • <span>PUNE</span> • <span>HYDERABAD</span> • <span>CHENNAI</span> • <span>KOCHI</span> • <span>AHMEDABAD</span>
          </div>
        </div>

        {/* Right: Call Now Dropdown, Helpline & Estimate CTA */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-3 sm:gap-4 flex-wrap">
          {/* City Direct Call Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCallDropdownOpen(!callDropdownOpen)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#814882] hover:bg-[#6e3a6f] text-white font-semibold transition-colors cursor-pointer text-xs shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>CALL NOW</span>
              <ChevronDown className="w-3 h-3 text-purple-200" />
            </button>

            {callDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCallDropdownOpen(false)}
                />
                <div className="absolute left-0 lg:left-auto lg:right-0 mt-2 w-72 sm:w-80 bg-slate-900 border border-purple-900/80 rounded-2xl shadow-2xl py-3 z-50 backdrop-blur-md">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 flex items-center justify-between">
                    <span>Direct Showroom Desks</span>
                    <span className="text-[10px] text-slate-400 font-normal">All 7 Days</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1 divide-y divide-slate-800/40 text-xs">
                    {SHOWROOMS_DATA.map((showroom) => (
                      <div
                        key={showroom.id}
                        className="px-4 py-2 hover:bg-purple-950/40 transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-white">
                            {showroom.city} ({showroom.area})
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {showroom.branchName}
                          </div>
                        </div>
                        <a
                          href={`tel:${showroom.phone}`}
                          className="font-mono text-amber-300 hover:text-white font-semibold text-[11px]"
                        >
                          {showroom.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-purple-950/60 border-t border-slate-800 text-center text-[11px] text-slate-300">
                    National Toll-Free: <strong>{LIVINTO_CONFIG.helplineDisplay}</strong>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Toll-Free Number */}
          <a
            href={`tel:${LIVINTO_CONFIG.helpline}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Toll-Free: <strong>{LIVINTO_CONFIG.helplineDisplay}</strong></span>
          </a>

          <div className="h-3 w-px bg-slate-700 hidden sm:block" />

          {/* WhatsApp Support Desk */}
          <a
            href={`https://wa.me/${LIVINTO_CONFIG.whatsapp}?text=Hi%20Livinto,%20I%20would%20like%20to%20discuss%20a%20home%20interior%20project%20and%20know%20more%20about%20your%20design%20packages.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-white transition-colors font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Desk</span>
          </a>

          {/* Free Estimate Button */}
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>Free 1-Min Estimate</span>
          </button>
        </div>
      </div>
    </div>
  );
};
