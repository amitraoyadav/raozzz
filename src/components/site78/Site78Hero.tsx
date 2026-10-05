import React, { useState } from 'react';
import {
  Calendar,
  Users,
  BedDouble,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Waves
} from 'lucide-react';
import { site78Config } from '../../config/site78Config';
import { ROOMS_DATA } from '../../data/site78Data';

interface Site78HeroProps {
  onExploreRooms: () => void;
  onOpenBooking: (roomSlug?: string, initialData?: { checkIn?: string; checkOut?: string; guests?: number }) => void;
}

export const Site78Hero: React.FC<Site78HeroProps> = ({
  onExploreRooms,
  onOpenBooking
}) => {
  const [checkIn, setCheckIn] = useState('2026-10-15');
  const [checkOut, setCheckOut] = useState('2026-10-18');
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState(ROOMS_DATA[0].slug);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoom, {
      checkIn,
      checkOut,
      guests: parseInt(guests, 10) || 2
    });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between text-white overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#161616]">
      {/* Background Hero Image with Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/site78/banner-9.webp"
          alt="Aurelia Goa Luxury Beach Resort"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayer gradient: cinematic darkening for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-black/60" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10">
        <div className="max-w-3xl space-y-6 animate-fadeIn">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#B99D75]/40 text-[#B99D75] text-xs font-['Jost',sans-serif] tracking-[0.2em] uppercase font-semibold">
            <SparklesIcon className="w-3.5 h-3.5 text-[#B99D75]" />
            <span>Where The Wind Whispers & Time Stands Still</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] drop-shadow-sm">
            Best Luxury Beach Resort <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#B99D75]">in North Goa</span>
          </h1>

          {/* Supporting Description */}
          <p className="font-['Jost',sans-serif] text-base sm:text-xl text-stone-200 font-light leading-relaxed max-w-2xl">
            A boutique sanctuary of secluded private pool villas and suites on Morjim Beach. 
            Immerse yourself in gentle Arabian Sea tides, bespoke coastal dining, and restorative unhurried indulgence.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 font-['Jost',sans-serif]">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2.5 group"
            >
              <span>Reserve Your Stay</span>
              <ArrowRight className="w-4 h-4 text-[#B99D75] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreRooms}
              className="px-8 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-[#B99D75]/60 hover:border-[#B99D75] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all backdrop-blur-xs cursor-pointer flex items-center gap-2"
            >
              <Waves className="w-4 h-4 text-[#B99D75]" />
              <span>Explore Our Rooms</span>
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-stone-300 font-['Jost',sans-serif] tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B99D75]" />
              <span>100% Private Pool Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B99D75]" />
              <span>60m To Morjim Beach</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B99D75]" />
              <span>Free Flexible Cancellation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Reservation Booking Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <form
          onSubmit={handleCheckAvailability}
          className="bg-white/95 backdrop-blur-md text-[#222222] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-[#E5DFD7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center font-['Jost',sans-serif]"
        >
          {/* Check-In */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#747157] block">
              Check-In Date
            </label>
            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-[#B99D75] absolute left-3 pointer-events-none" />
              <input
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F3EEE7]/60 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157] border border-[#E5DFD7]"
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#747157] block">
              Check-Out Date
            </label>
            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-[#B99D75] absolute left-3 pointer-events-none" />
              <input
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F3EEE7]/60 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157] border border-[#E5DFD7]"
              />
            </div>
          </div>

          {/* Room Selection */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#747157] block">
              Room Category
            </label>
            <div className="relative flex items-center">
              <BedDouble className="w-4 h-4 text-[#B99D75] absolute left-3 pointer-events-none" />
              <select
                value={selectedRoom}
                onChange={e => setSelectedRoom(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F3EEE7]/60 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157] border border-[#E5DFD7] appearance-none cursor-pointer"
              >
                {ROOMS_DATA.map(r => (
                  <option key={r.slug} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-[0.16em] text-[#747157] block">
              Guests
            </label>
            <div className="relative flex items-center">
              <Users className="w-4 h-4 text-[#B99D75] absolute left-3 pointer-events-none" />
              <select
                value={guests}
                onChange={e => setGuests(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F3EEE7]/60 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#747157] border border-[#E5DFD7] appearance-none cursor-pointer"
              >
                <option value="1">1 Adult (Solo)</option>
                <option value="2">2 Adults (Couple)</option>
                <option value="3">3 Adults (Extra Bed)</option>
                <option value="4">4 Guests (Family / Suite)</option>
                <option value="5">5+ Guests (Suite Extended)</option>
              </select>
            </div>
          </div>

          {/* Submit Search Button */}
          <div className="pt-2 sm:pt-4 sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-[#747157] hover:bg-[#56543e] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Check Rates</span>
              <ArrowRight className="w-4 h-4 text-[#B99D75]" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
