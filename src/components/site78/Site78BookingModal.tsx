import React, { useState, useMemo } from 'react';
import {
  X,
  Calendar,
  Users,
  BedDouble,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Heart,
  Plane,
  Waves
} from 'lucide-react';
import { ROOMS_DATA, RoomItem } from '../../data/site78Data';
import { site78Config } from '../../config/site78Config';

interface Site78BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomSlug?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const Site78BookingModal: React.FC<Site78BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomSlug,
  initialCheckIn = '2026-10-15',
  initialCheckOut = '2026-10-18',
  initialGuests = 2
}) => {
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>(
    preselectedRoomSlug || ROOMS_DATA[0].slug
  );
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [adults, setAdults] = useState(initialGuests);
  const [children, setChildren] = useState(0);

  // Add-ons
  const [addAirportPickup, setAddAirportPickup] = useState(false);
  const [addRomanticDecor, setAddRomanticDecor] = useState(false);
  const [addSunsetDinner, setAddSunsetDinner] = useState(false);

  // Guest details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const selectedRoom = useMemo(() => {
    return ROOMS_DATA.find(r => r.slug === selectedRoomSlug) || ROOMS_DATA[0];
  }, [selectedRoomSlug]);

  // Calculate nights
  const numberOfNights = useMemo(() => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  }, [checkIn, checkOut]);

  // Pricing breakdown
  const baseRoomTotal = useMemo(() => {
    return selectedRoom.pricePerNightInr * numberOfNights;
  }, [selectedRoom, numberOfNights]);

  const addOnsTotal = useMemo(() => {
    let sum = 0;
    if (addAirportPickup) sum += 2800; // MOPA Airport AC SUV
    if (addRomanticDecor) sum += 3500; // Flowers, cake, candles
    if (addSunsetDinner) sum += 5000;  // 5-course beachfront gazebo dinner
    return sum;
  }, [addAirportPickup, addRomanticDecor, addSunsetDinner]);

  const gstTax = useMemo(() => {
    return Math.round((baseRoomTotal + addOnsTotal) * 0.12);
  }, [baseRoomTotal, addOnsTotal]);

  const grandTotal = useMemo(() => {
    return baseRoomTotal + addOnsTotal + gstTax;
  }, [baseRoomTotal, addOnsTotal, gstTax]);

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const addOnList = [];
    if (addAirportPickup) addOnList.push('MOPA Airport AC SUV Pickup (₹2,800)');
    if (addRomanticDecor) addOnList.push('Romantic Floral Pool Decor & Cake (₹3,500)');
    if (addSunsetDinner) addOnList.push('Sunset Beach Gazebo Chef Dinner (₹5,000)');

    const msg = `*AURELIA GOA — LUXURY RESERVATION REQUEST*\n\n` +
      `*Room Category:* ${selectedRoom.name}\n` +
      `*Dates:* ${checkIn} to ${checkOut} (${numberOfNights} Nights)\n` +
      `*Guests:* ${adults} Adults, ${children} Children\n` +
      `*Estimated Total:* ₹${grandTotal.toLocaleString('en-IN')} (incl. 12% GST)\n` +
      (addOnList.length > 0 ? `*Selected Add-Ons:*\n• ${addOnList.join('\n• ')}\n` : '') +
      `\n*Guest Details:*\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      (notes ? `Special Notes: ${notes}\n` : '') +
      `\nPlease confirm booking and share payment link / bank details.`;

    window.open(`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
    setConfirmed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn font-['Jost',sans-serif]">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E5DFD7] relative animate-scaleUp text-[#222222]">
        {/* Top Header */}
        <div className="sticky top-0 z-10 bg-[#1C1C1C] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] text-[#B99D75] uppercase tracking-widest block font-bold">
              Direct Hotel Reservation
            </span>
            <div className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl">
              Book Your Sanctuary at Aurelia Goa
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl text-[#1C1C1C]">
              Booking Request Received!
            </h3>
            <p className="text-sm text-stone-600 font-light max-w-md mx-auto leading-relaxed">
              We have dispatched your stay summary to our Reservations Desk and opened WhatsApp for instant confirmation.
            </p>
            <div className="p-4 rounded-2xl bg-[#F3EEE7] text-xs text-stone-700 max-w-md mx-auto text-left space-y-1">
              <div><strong>Room:</strong> {selectedRoom.name}</div>
              <div><strong>Dates:</strong> {checkIn} to {checkOut} ({numberOfNights} Nights)</div>
              <div><strong>Estimated Total:</strong> ₹{grandTotal.toLocaleString('en-IN')}</div>
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#747157] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#56543e] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Room */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#747157] tracking-wider block">
                1. Select Room Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ROOMS_DATA.map(r => {
                  const isSelected = r.slug === selectedRoomSlug;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRoomSlug(r.slug)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#747157] bg-[#F3EEE7]/50 shadow-sm'
                          : 'border-[#E5DFD7] hover:border-stone-400 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C]">
                            {r.name}
                          </div>
                          <div className="text-[11px] text-[#747157] font-medium">
                            {r.areaSqFt} SQ.FT · Max {r.maxGuests} Guests
                          </div>
                        </div>
                        {isSelected && <span className="text-[#747157] font-bold text-sm">✓</span>}
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#E5DFD7] flex items-baseline justify-between text-xs">
                        <span className="text-stone-500 font-light">Price/Night:</span>
                        <span className="font-bold text-[#747157]">
                          ₹{r.pricePerNightInr.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dates & Guests */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#747157] tracking-wider block">
                2. Dates & Guests
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Check-In</span>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Check-Out</span>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Adults</span>
                  <select
                    value={adults}
                    onChange={e => setAdults(parseInt(e.target.value, 10))}
                    className="w-full p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults (+Extra Bed)</option>
                    <option value={4}>4 Adults (Suite)</option>
                    <option value={5}>5 Adults (Suite Extended)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Children</span>
                  <select
                    value={children}
                    onChange={e => setChildren(parseInt(e.target.value, 10))}
                    className="w-full p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                  >
                    <option value={0}>0 Children</option>
                    <option value={1}>1 Child (under 6 free)</option>
                    <option value={2}>2 Children</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Bespoke Add-ons */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#747157] tracking-wider block">
                3. Bespoke Celebration Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer transition-all ${addAirportPickup ? 'border-[#747157] bg-[#F3EEE7]/40' : 'border-[#E5DFD7]'}`}>
                  <input
                    type="checkbox"
                    checked={addAirportPickup}
                    onChange={e => setAddAirportPickup(e.target.checked)}
                    className="mt-1 accent-[#747157]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold block text-stone-800">Airport AC SUV Pickup</span>
                    <span className="text-stone-500 text-[11px]">+₹2,800 (MOPA Airport)</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer transition-all ${addRomanticDecor ? 'border-[#747157] bg-[#F3EEE7]/40' : 'border-[#E5DFD7]'}`}>
                  <input
                    type="checkbox"
                    checked={addRomanticDecor}
                    onChange={e => setAddRomanticDecor(e.target.checked)}
                    className="mt-1 accent-[#747157]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold block text-stone-800">Romantic Bed Florals & Cake</span>
                    <span className="text-stone-500 text-[11px]">+₹3,500</span>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer transition-all ${addSunsetDinner ? 'border-[#747157] bg-[#F3EEE7]/40' : 'border-[#E5DFD7]'}`}>
                  <input
                    type="checkbox"
                    checked={addSunsetDinner}
                    onChange={e => setAddSunsetDinner(e.target.checked)}
                    className="mt-1 accent-[#747157]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold block text-stone-800">Sunset Beach Gazebo Dinner</span>
                    <span className="text-stone-500 text-[11px]">+₹5,000 for Couple</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#747157] tracking-wider block">
                4. Primary Guest Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Special requests, flight arrival time, or dietary notes..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#F3EEE7]/50 border border-[#E5DFD7] text-xs font-medium"
              />
            </div>

            {/* Price Summary Breakdown */}
            <div className="p-4 rounded-2xl bg-[#F3EEE7] border border-[#E5DFD7] space-y-2 text-xs">
              <div className="flex items-center justify-between text-stone-600">
                <span>Room Charges ({numberOfNights} Nights × ₹{selectedRoom.pricePerNightInr.toLocaleString('en-IN')})</span>
                <span className="font-medium text-stone-800">₹{baseRoomTotal.toLocaleString('en-IN')}</span>
              </div>
              {addOnsTotal > 0 && (
                <div className="flex items-center justify-between text-stone-600">
                  <span>Selected Add-Ons</span>
                  <span className="font-medium text-stone-800">₹{addOnsTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-stone-600">
                <span>Goods & Services Tax (12% GST)</span>
                <span className="font-medium text-stone-800">₹{gstTax.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-[#E5DFD7] flex items-center justify-between font-bold text-sm text-[#1C1C1C]">
                <span>Total Payable</span>
                <span className="font-['Cormorant',serif] text-xl text-[#747157]">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Submission CTA */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm & Dispatch Reservation Request</span>
              <ArrowRight className="w-4 h-4 text-[#B99D75]" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
