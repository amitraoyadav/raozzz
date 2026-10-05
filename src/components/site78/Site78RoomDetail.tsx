import React, { useState } from 'react';
import {
  Maximize2,
  Users,
  BedDouble,
  Waves,
  Sun,
  Coffee,
  Tv,
  Wifi,
  ShieldCheck,
  Check,
  Calendar,
  ArrowRight,
  ChevronLeft,
  X,
  Phone,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { ROOMS_DATA, RoomItem, AMENITIES_DATA, FAQS_DATA } from '../../data/site78Data';
import { site78Config } from '../../config/site78Config';

interface Site78RoomDetailProps {
  roomSlug: string;
  onNavigateHome: () => void;
  onSelectOtherRoom: (slug: string) => void;
  onBookRoom: (slug: string) => void;
}

export const Site78RoomDetail: React.FC<Site78RoomDetailProps> = ({
  roomSlug,
  onNavigateHome,
  onSelectOtherRoom,
  onBookRoom
}) => {
  const room = ROOMS_DATA.find(r => r.slug === roomSlug) || ROOMS_DATA[0];
  const otherRoom = ROOMS_DATA.find(r => r.slug !== room.slug) || ROOMS_DATA[1];

  const [activeImage, setActiveImage] = useState(room.bannerImage);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#222222] font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Button */}
        <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-widest mb-8">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#747157] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-stone-400">Rooms</span>
          <span>/</span>
          <span className="text-[#747157] font-semibold">{room.name}</span>
        </div>

        {/* Room Header Hero */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>{room.subtitle}</span>
          </div>

          <h1 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-tight">
            {room.name}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-light max-w-3xl leading-relaxed">
            {room.description}
          </p>

          {/* Quick Specifications Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-medium text-stone-800 uppercase tracking-wider">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EEE7]">
              <Maximize2 className="w-4 h-4 text-[#747157]" />
              <span>{room.areaSqFt} SQ.FT Space</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EEE7]">
              <Users className="w-4 h-4 text-[#747157]" />
              <span>{room.maxGuests} Guests (+{room.extraGuestsAllowed} Extra Adult)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EEE7]">
              <BedDouble className="w-4 h-4 text-[#747157]" />
              <span>{room.bedType}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#747157] text-white">
              <Waves className="w-4 h-4 text-[#B99D75]" />
              <span>Private Plunge Pool Included</span>
            </div>
          </div>
        </div>

        {/* High-Resolution Photo Gallery & Lightbox Trigger */}
        <div className="space-y-4 mb-16">
          {/* Main Featured Photo */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD7] cursor-pointer group"
          >
            <img
              src={activeImage}
              alt={room.name}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B99D75]" />
              <span>Click to Expand Gallery ({room.galleryImages.length + 1} Photos)</span>
            </div>
          </div>

          {/* Thumbnail Rail */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
            <button
              onClick={() => setActiveImage(room.bannerImage)}
              className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                activeImage === room.bannerImage
                  ? 'border-[#747157] ring-2 ring-[#747157]/20 scale-102'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={room.bannerImage} alt="Main" className="w-full h-full object-cover" />
            </button>
            {room.galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImage === img
                    ? 'border-[#747157] ring-2 ring-[#747157]/20 scale-102'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Detail Layout: Narrative & Sticky Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Room Narrative & Specifications */}
          <div className="lg:col-span-8 space-y-12">
            {/* Architectural Highlights */}
            <div className="space-y-4">
              <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
                Sanctuary Overview
              </h2>
              <div className="w-12 h-[2px] bg-[#B99D75]" />
              <p className="text-stone-600 font-light text-base leading-relaxed">
                {room.longDescription}
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F3EEE7]/60 border border-[#E5DFD7] space-y-2">
                <div className="flex items-center gap-2 text-[#747157] font-semibold text-xs uppercase tracking-wider">
                  <Waves className="w-4 h-4 text-[#B99D75]" />
                  <span>Private Pool</span>
                </div>
                <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C]">
                  {room.keyHighlights.pool}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EEE7]/60 border border-[#E5DFD7] space-y-2">
                <div className="flex items-center gap-2 text-[#747157] font-semibold text-xs uppercase tracking-wider">
                  <Sun className="w-4 h-4 text-[#B99D75]" />
                  <span>Open-Air Rainforest Shower</span>
                </div>
                <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C]">
                  {room.keyHighlights.shower}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EEE7]/60 border border-[#E5DFD7] space-y-2">
                <div className="flex items-center gap-2 text-[#747157] font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#B99D75]" />
                  <span>Serene Surroundings</span>
                </div>
                <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C]">
                  {room.keyHighlights.view}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3EEE7]/60 border border-[#E5DFD7] space-y-2">
                <div className="flex items-center gap-2 text-[#747157] font-semibold text-xs uppercase tracking-wider">
                  <Maximize2 className="w-4 h-4 text-[#B99D75]" />
                  <span>Dimensions</span>
                </div>
                <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C]">
                  {room.keyHighlights.space}
                </div>
              </div>
            </div>

            {/* Complete Included Amenities Grid */}
            <div className="space-y-6 pt-4">
              <h3 className="font-['Cormorant',serif] font-bold text-3xl text-[#1C1C1C]">
                Full Amenities Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {room.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E5DFD7]">
                    <Check className="w-4 h-4 text-[#747157] shrink-0" />
                    <span className="text-xs text-stone-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Policies */}
            <div className="p-6 rounded-2xl bg-[#F3EEE7] border border-[#E5DFD7] space-y-3 text-xs text-stone-600 font-light leading-relaxed">
              <div className="font-['Cormorant',serif] font-bold text-xl text-[#1C1C1C]">
                Reservation & Stay Policies
              </div>
              <p>• Standard Check-in is at 2:00 PM and Check-out is at 11:00 AM.</p>
              <p>• Early arrival and late departure are accommodated subject to prior notice and room availability.</p>
              <p>• Government-approved photo identity (Passport / Aadhaar / Driving Licence) required for all adult guests at check-in.</p>
              <p>• 100% smoke-free guest rooms. Dedicated outdoor designated verandas provided.</p>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Reservation Card */}
          <div className="lg:col-span-4 sticky top-28 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5DFD7] shadow-xl space-y-6">
            <div className="border-b border-[#E5DFD7] pb-4">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                Direct Booking Rate
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#747157]">
                  ₹{room.pricePerNightInr.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-stone-500 font-normal">/ night + taxes</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-stone-400">
                <span className="line-through">₹{room.strikePriceInr.toLocaleString('en-IN')}</span>
                <span className="text-emerald-600 font-semibold">Save 25% Direct</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex items-center justify-between py-1 border-b border-[#F3EEE7]">
                <span>Occupancy</span>
                <span className="font-semibold text-stone-800">{room.maxGuests} Guests</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#F3EEE7]">
                <span>Private Pool</span>
                <span className="font-semibold text-stone-800">Included (Exclusive)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#F3EEE7]">
                <span>Breakfast</span>
                <span className="font-semibold text-stone-800">Included Daily</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#F3EEE7]">
                <span>Wi-Fi & Butler</span>
                <span className="font-semibold text-stone-800">Complimentary 24/7</span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onBookRoom(room.slug)}
                className="w-full py-4 px-6 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Reserve Room Now</span>
                <ArrowRight className="w-4 h-4 text-[#B99D75]" />
              </button>

              <a
                href={`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(
                  `Hello, I would like to book the ${room.name} at Aurelia Goa.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase transition-all text-center flex items-center justify-center gap-2"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>

            <div className="text-center pt-2 text-[11px] text-stone-500 font-light">
              Best Rate Guaranteed · Instant Confirmation
            </div>
          </div>
        </div>

        {/* Other Room Upsell */}
        <div className="pt-16 border-t border-[#E5DFD7] space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-[#747157] tracking-widest">
              Explore Alternative Sanctuaries
            </span>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
              You May Also Consider
            </h3>
          </div>

          <div className="bg-[#F3EEE7]/60 rounded-3xl p-6 sm:p-8 border border-[#E5DFD7] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[16/10]">
              <img src={otherRoom.bannerImage} alt={otherRoom.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="text-xs text-[#747157] uppercase font-bold tracking-wider">
                {otherRoom.areaSqFt} SQ.FT · {otherRoom.maxGuests} Guests
              </div>
              <h4 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#1C1C1C]">
                {otherRoom.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {otherRoom.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onSelectOtherRoom(otherRoom.slug)}
                  className="px-6 py-2.5 rounded-full bg-[#747157] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#56543e] transition-colors cursor-pointer"
                >
                  View {otherRoom.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between text-white pb-4">
            <div className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl text-[#B99D75]">
              {room.name} · Photo Gallery
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden my-auto max-h-[75vh]">
            <img src={activeImage} alt="Gallery Enlarge" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl" />
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 overflow-x-auto py-2">
            {[room.bannerImage, ...room.galleryImages].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === img ? 'border-[#B99D75] scale-105' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
