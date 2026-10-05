import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Users, 
  Bed, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Volume2, 
  Wine, 
  Utensils, 
  Layers, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { VenueItem } from '../../data/psrWeddingsData';

interface PsrVenueDetailModalProps {
  venue: VenueItem | null;
  onClose: () => void;
  onOpenConsultation: (venueName: string) => void;
}

export const PsrVenueDetailModal: React.FC<PsrVenueDetailModalProps> = ({
  venue,
  onClose,
  onOpenConsultation
}) => {
  if (!venue) return null;
  const [activePhoto, setActivePhoto] = useState<string>(venue.image);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6">
        <div className="relative bg-[#1A0509] text-white rounded-3xl max-w-4xl w-full border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Active Photo Display */}
          <div className="relative h-72 sm:h-96">
            <img
              src={activePhoto}
              alt={venue.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0509] via-transparent to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#DFBE78] text-[#1A0509] font-bold text-[10px] uppercase tracking-wider">
                  {venue.propertyType}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/70 border border-[#C5A059]/40 text-[#DFBE78] font-bold text-[10px]">
                  {venue.priceTier}
                </span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-4xl font-bold text-white leading-tight">
                {venue.name}
              </h2>
              <span className="text-xs text-[#DFBE78] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE78]" />
                {venue.destination}
              </span>
            </div>
          </div>

          {/* Gallery Thumbnails if available */}
          {venue.galleryImages && venue.galleryImages.length > 1 && (
            <div className="bg-[#120306] px-6 py-3 border-b border-[#C5A059]/20 flex items-center gap-3 overflow-x-auto">
              {venue.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(img)}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activePhoto === img ? 'border-[#DFBE78] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Key Specs Bar */}
          <div className="bg-[#24080D] border-b border-[#C5A059]/20 px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Guest Capacity</span>
              <span className="text-white font-bold flex items-center gap-1.5 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#DFBE78]" />
                {venue.capacity}
              </span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Guest Rooms</span>
              <span className="text-white font-bold flex items-center gap-1.5 mt-0.5">
                <Bed className="w-3.5 h-3.5 text-[#DFBE78]" />
                {venue.guestRooms} Rooms & Suites
              </span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Price Guidance</span>
              <span className="text-[#DFBE78] font-bold flex items-center gap-1.5 mt-0.5">
                {venue.priceTier}
              </span>
            </div>
            <div>
              <span className="text-stone-400 text-[10px] uppercase block">Partner Privilege</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Direct GM Rates
              </span>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#DFBE78]" />
                <span>Property Profile & Heritage</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {venue.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider">
                Signature Venue Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {venue.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-200 bg-[#24080D] p-2.5 rounded-lg border border-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBE78] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Spaces: Lawns & Halls */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#DFBE78]" />
                <span>Available Event Spaces (Lawns & Ballrooms)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {venue.lawnsAndHalls.map((space, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#24080D] border border-[#C5A059]/30 text-xs text-stone-200"
                  >
                    {space}
                  </span>
                ))}
              </div>
            </div>

            {/* Venue Policies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#24080D] p-3.5 rounded-xl border border-stone-800 space-y-1">
                <span className="text-[10px] text-[#DFBE78] uppercase font-bold flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-[#DFBE78]" />
                  <span>Catering Policy</span>
                </span>
                <p className="text-xs text-stone-300 font-light leading-tight">{venue.cateringPolicy}</p>
              </div>

              <div className="bg-[#24080D] p-3.5 rounded-xl border border-stone-800 space-y-1">
                <span className="text-[10px] text-[#DFBE78] uppercase font-bold flex items-center gap-1">
                  <Wine className="w-3 h-3 text-[#DFBE78]" />
                  <span>Alcohol & Bar</span>
                </span>
                <p className="text-xs text-stone-300 font-light leading-tight">{venue.alcoholPolicy}</p>
              </div>

              <div className="bg-[#24080D] p-3.5 rounded-xl border border-stone-800 space-y-1">
                <span className="text-[10px] text-[#DFBE78] uppercase font-bold flex items-center gap-1">
                  <Volume2 className="w-3 h-3 text-[#DFBE78]" />
                  <span>Music / Sound Curfew</span>
                </span>
                <p className="text-xs text-stone-300 font-light leading-tight">{venue.musicCurfew}</p>
              </div>
            </div>

            {/* Investment Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#2B090F] to-[#1F070B] border border-[#C5A059]/30 text-xs space-y-1">
              <span className="text-[#DFBE78] font-bold uppercase tracking-wider block">
                Estimated Investment Note
              </span>
              <p className="text-stone-300 font-light">
                {venue.startingPriceNote}. Our direct relationships with hotel management ensure priority dates, waiver of venue hire fees on room buyouts, and tailored catering packages.
              </p>
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block">Interested in hosting your wedding at {venue.name}?</span>
                <span className="text-sm font-bold text-white">We verify available dates and negotiate your room block package.</span>
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
                    onOpenConsultation(venue.name);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire Availability</span>
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
