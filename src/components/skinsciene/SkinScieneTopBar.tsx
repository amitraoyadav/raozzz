import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  ShieldCheck,
  Clock,
  Sparkles,
  Check,
} from 'lucide-react';
import { SKINSCIENE_CONFIG } from '../../data/skinScieneData';

interface SkinScieneTopBarProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenBooking: () => void;
}

export const SkinScieneTopBar: React.FC<SkinScieneTopBarProps> = ({
  selectedCity,
  onSelectCity,
  onOpenBooking,
}) => {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs border-b border-emerald-900/60 transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: City Selector & US-FDA Trust Tag */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* City Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-900/80 hover:bg-emerald-800 text-white font-medium transition-colors border border-emerald-700/50 cursor-pointer text-xs"
              title="Select Your Nearest City"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>City: <strong className="text-emerald-300 font-semibold">{selectedCity}</strong></span>
              <ChevronDown className="w-3 h-3 text-emerald-300" />
            </button>

            {cityDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCityDropdownOpen(false)}
                />
                <div className="absolute left-0 mt-1.5 w-52 bg-slate-900 border border-emerald-800/80 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-md">
                  <div className="px-3 py-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider border-b border-slate-800">
                    Select Your City (10 Cities)
                  </div>
                  <div className="max-h-60 overflow-y-auto py-1 divide-y divide-slate-800/40">
                    {SKINSCIENE_CONFIG.cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          onSelectCity(city);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-emerald-900/50 transition-colors ${
                          selectedCity === city
                            ? 'text-emerald-300 font-bold bg-emerald-950/60'
                            : 'text-slate-300'
                        }`}
                      >
                        <span>{city}</span>
                        {selectedCity === city && (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 text-emerald-300/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>US-FDA Approved Tech · 100% Dermatologist-Led</span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-1.5 text-emerald-300/80">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open All 7 Days: 9 AM - 8 PM</span>
          </div>
        </div>

        {/* Right: Phone, WhatsApp, and Booking CTA */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Toll Free Helpline */}
          <a
            href={`tel:${SKINSCIENE_CONFIG.phone}`}
            className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors font-semibold"
            title="Call SkinSciene Naturals Helpline"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Toll-Free:</span>
            <span>{SKINSCIENE_CONFIG.phoneDisplay}</span>
          </a>

          <div className="h-3.5 w-px bg-emerald-800 hidden sm:block" />

          {/* WhatsApp Desk */}
          <a
            href={`https://wa.me/${SKINSCIENE_CONFIG.whatsapp}?text=Hi%20SkinSciene%20Naturals,%20I%20would%20like%20to%20know%20more%20about%20your%20treatments%20and%20book%20a%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Desk</span>
          </a>

          {/* Top Quick Consultation CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>Book Free Consult</span>
          </button>
        </div>
      </div>
    </div>
  );
};
