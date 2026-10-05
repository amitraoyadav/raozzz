import React from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Users, 
  Wallet, 
  Plane, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  Clock,
  AlertCircle
} from 'lucide-react';
import { DestinationItem } from '../../data/psrWeddingsData';
import { siteConfig } from '../../config/siteConfig';

interface PsrDestinationDetailModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onOpenConsultation: (destName: string) => void;
}

export const PsrDestinationDetailModal: React.FC<PsrDestinationDetailModalProps> = ({
  destination,
  onClose,
  onOpenConsultation
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6">
        <div className="relative bg-[#1A0509] text-white rounded-3xl max-w-4xl w-full border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Hero Banner */}
          <div className="relative h-72 sm:h-96">
            <img
              src={destination.coverImage}
              alt={`${destination.name} Wedding Destination`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0509] via-[#1A0509]/60 to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#DFBE78] text-[#1A0509] font-bold text-[10px] uppercase tracking-wider inline-block">
                {destination.vibe}
              </span>
              <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {destination.name}, {destination.stateOrRegion}
              </h2>
              <p className="text-[#DFBE78] text-sm sm:text-base font-serif italic">
                "{destination.tagline}"
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="bg-[#24080D] border-y border-[#C5A059]/20 px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Guest Bracket</span>
              <span className="text-white font-bold flex items-center gap-1.5 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#DFBE78]" />
                {destination.avgGuestCount}
              </span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Budget Guide</span>
              <span className="text-[#DFBE78] font-bold flex items-center gap-1.5 mt-0.5">
                <Wallet className="w-3.5 h-3.5 text-[#DFBE78]" />
                {destination.estBudgetRange}
              </span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Best Season</span>
              <span className="text-white font-bold flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#DFBE78]" />
                {destination.bestSeason.split('(')[0]}
              </span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Nearest Airport</span>
              <span className="text-white font-bold flex items-center gap-1.5 mt-0.5 truncate">
                <Plane className="w-3.5 h-3.5 text-[#DFBE78] shrink-0" />
                {destination.airportAccess.split('—')[0]}
              </span>
            </div>
          </div>

          {/* Modal Content Sections */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#DFBE78]" />
                <span>Destination Overview & Royal Allure</span>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                {destination.fullDesc}
              </p>
            </div>

            {/* Featured Luxury Venues in this Destination */}
            <div className="space-y-4">
              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#DFBE78]" />
                <span>Featured Venues in {destination.name}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.highlightVenues.map((v, i) => (
                  <div key={i} className="bg-[#24080D] border border-stone-800 rounded-xl overflow-hidden space-y-2 pb-3">
                    <img src={v.image} alt={v.name} className="w-full h-32 object-cover" />
                    <div className="px-3 space-y-1">
                      <span className="text-[10px] text-[#DFBE78] font-bold uppercase block">{v.type}</span>
                      <h4 className="text-sm font-bold text-white leading-tight">{v.name}</h4>
                      <p className="text-[11px] text-stone-400 line-clamp-2">{v.highlight}</p>
                      <div className="pt-1 text-[10px] text-stone-300 flex items-center justify-between">
                        <span>Cap: {v.capacity}</span>
                        <span>{v.rooms}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Day Wedding Itinerary */}
            <div className="space-y-4">
              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#DFBE78]" />
                <span>Curated 3-Day Wedding Itinerary</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.itinerary.map((item, idx) => (
                  <div key={idx} className="bg-[#24080D] p-4 rounded-xl border border-stone-800 space-y-2">
                    <span className="text-xs font-bold text-[#DFBE78] uppercase tracking-wider block">{item.day}</span>
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <ul className="space-y-1 text-xs text-stone-300 font-light">
                      {item.events.map((ev, ei) => (
                        <li key={ei} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#DFBE78] shrink-0 mt-0.5" />
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Planning Considerations & Local Guidelines */}
            <div className="p-4 rounded-xl bg-[#24080D]/60 border border-[#C5A059]/20 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFBE78] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#DFBE78]" />
                <span>Key Planning Considerations for {destination.name}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300 font-light">
                {destination.keyConsiderations.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DFBE78] font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom CTA Bar */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block">Dreaming of getting married in {destination.name}?</span>
                <span className="text-sm font-bold text-white">Let {siteConfig.SITE_NAME} curate your palace shortlist &amp; budget.</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-stone-700 text-stone-300 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation(destination.name);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Plan in {destination.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
