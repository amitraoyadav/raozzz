import React, { useState } from 'react';
import { X, MapPin, Users, Bed, Star, ShieldCheck, Check, Phone, Sparkles, IndianRupee } from 'lucide-react';
import { WeddingVenue, RAOZ_WEDDINGS_CONTACT } from '../../data/raozWeddingsData';

interface Props {
  venue: WeddingVenue | null;
  onClose: () => void;
  onOpenProposal: () => void;
}

export const VenueDetailModal: React.FC<Props> = ({ venue, onClose, onOpenProposal }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!venue) return null;

  const allImages = [venue.featuredImage, ...(venue.galleryImages || [])];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl relative border border-rose-100 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Top Header Image & Close */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900 shrink-0">
          <img
            src={allImages[activeImgIndex] || venue.featuredImage}
            alt={venue.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {venue.badge && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
              {venue.badge}
            </span>
          )}

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
              <span className="capitalize">{venue.type}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {venue.rating} ({venue.reviewsCount} reviews)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight mt-0.5">
              {venue.name}
            </h2>
            <p className="text-xs text-slate-200 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>{venue.locality}</span>
            </p>
          </div>
        </div>

        {/* Thumbnails row */}
        {allImages.length > 1 && (
          <div className="flex gap-2 p-3 bg-slate-100 border-b border-slate-200 overflow-x-auto shrink-0">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImgIndex(i)}
                className={`h-14 w-20 rounded-lg overflow-hidden shrink-0 border-2 transition cursor-pointer ${
                  activeImgIndex === i ? 'border-[#9A2157] scale-105' : 'border-transparent opacity-70'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Price & Capacity Snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-rose-50/60 p-4 rounded-2xl border border-rose-100">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Veg Plate</span>
              <span className="text-base sm:text-lg font-black text-[#9A2157]">
                ₹{venue.vegPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500 block">+ taxes</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Non-Veg Plate</span>
              <span className="text-base sm:text-lg font-black text-slate-900">
                ₹{venue.nonVegPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500 block">+ taxes</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Guest Capacity</span>
              <span className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1">
                <Users className="w-4 h-4 text-[#9A2157]" />
                {venue.capacityMin} - {venue.capacityMax}
              </span>
              <span className="text-[10px] text-slate-500 block">Seating & floating</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Guest Rooms</span>
              <span className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1">
                <Bed className="w-4 h-4 text-[#9A2157]" />
                {venue.roomsCount} Rooms
              </span>
              <span className="text-[10px] text-slate-500 block">Stay accommodation</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              About This Venue
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Highlights */}
          {venue.highlights && venue.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Venue Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {venue.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Key Amenities Included
            </h4>
            <div className="flex flex-wrap gap-2">
              {venue.amenities.map((am, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-800 font-medium px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9A2157]" />
                  <span>{am}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Price Beat Guarantee Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 font-bold text-amber-800 text-xs">
                <Sparkles className="w-4 h-4 text-amber-600" />
                RAOZ Price Beat Guarantee on {venue.name}
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Already have a direct quotation for this venue? We guarantee to beat it by 5% to 10% or provide ₹25,000 complimentary decor credit.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenProposal();
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow"
            >
              Claim Price Beat
            </button>
          </div>
        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600">
            <span>Official Booking & Consultation Helpline: </span>
            <strong className="text-slate-900 font-mono">{RAOZ_WEDDINGS_CONTACT.supportPhone}</strong>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={`https://api.whatsapp.com/send?phone=${RAOZ_WEDDINGS_CONTACT.phoneRaw}&text=Hi%20RAOZ%20WEDDINGS%2C%20I%20am%20interested%20in%20${encodeURIComponent(venue.name)}%20(${venue.cityName}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Details</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenProposal();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9A2157] to-[#BC2D6D] text-white font-bold text-xs shadow hover:shadow-md transition cursor-pointer"
            >
              Book Site Visit & Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
