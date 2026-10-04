import React, { useState } from 'react';
import {
  Calculator,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building,
  Users,
  Compass,
  Calendar,
  Send,
  Heart,
  ChevronRight,
} from 'lucide-react';
import { DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasBudgetCalculatorProps {
  onOpenInquiry: () => void;
}

export const DevdasBudgetCalculator: React.FC<DevdasBudgetCalculatorProps> = ({
  onOpenInquiry,
}) => {
  const [destination, setDestination] = useState<'rajasthan' | 'goa' | 'corbett' | 'kerala' | 'delhi' | 'thailand'>('goa');
  const [guestCount, setGuestCount] = useState<number>(100);
  const [durationNights, setDurationNights] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<'4star' | '5star' | 'palace'>('4star');
  const [decorTier, setDecorTier] = useState<'classic' | 'grand' | 'royal'>('grand');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [coupleName, setCoupleName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Cost calculation engine (in INR Lacs)
  const calculateBudget = () => {
    // Rooms required (assuming 2 guests per room)
    const rooms = Math.ceil(guestCount / 2);

    // Room + all-inclusive buffet rates per room per night
    let roomPerNight = 12000;
    if (destination === 'rajasthan') {
      roomPerNight = hotelTier === 'palace' ? 32000 : hotelTier === '5star' ? 22000 : 14000;
    } else if (destination === 'goa') {
      roomPerNight = hotelTier === '5star' ? 20000 : 12000;
    } else if (destination === 'corbett') {
      roomPerNight = hotelTier === '5star' ? 16000 : 10000;
    } else if (destination === 'kerala') {
      roomPerNight = hotelTier === '5star' ? 18000 : 11000;
    } else if (destination === 'thailand') {
      roomPerNight = hotelTier === '5star' ? 19000 : 13000;
    } else {
      roomPerNight = hotelTier === '5star' ? 18000 : 11000;
    }

    const totalStayMeals = (rooms * roomPerNight * durationNights) / 100000;

    // Decor & Production based on tier and destination
    let decorCost = 12; // Lacs
    if (decorTier === 'classic') decorCost = destination === 'rajasthan' ? 14 : 9;
    if (decorTier === 'grand') decorCost = destination === 'rajasthan' ? 22 : 15;
    if (decorTier === 'royal') decorCost = destination === 'rajasthan' ? 35 : 24;

    // Logistics & Shuttles
    let logistics = guestCount > 150 ? 5.5 : guestCount > 100 ? 4.0 : 2.8;
    if (destination === 'thailand') logistics += 3.5;

    // Photography & Cinematography
    const photoVideo = 4.5;

    // Entertainment, Sound, DJ & Artistes
    const entertainment = 4.0;

    // Devdas Fixed Planner Fee
    const plannerFee = 4.5;

    const minTotal = (totalStayMeals * 0.9 + decorCost * 0.9 + logistics + photoVideo + entertainment + plannerFee).toFixed(1);
    const maxTotal = (totalStayMeals * 1.1 + decorCost * 1.15 + logistics * 1.2 + photoVideo + entertainment * 1.3 + plannerFee).toFixed(1);

    return {
      minTotal,
      maxTotal,
      stayMeals: totalStayMeals.toFixed(1),
      decor: decorCost.toFixed(1),
      logistics: logistics.toFixed(1),
      photoVideo: photoVideo.toFixed(1),
      entertainment: entertainment.toFixed(1),
      plannerFee: plannerFee.toFixed(1),
      rooms,
    };
  };

  const budget = calculateBudget();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A1C30]/30 via-slate-950 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Forecaster</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            ESTIMATE YOUR DESTINATION WEDDING BUDGET
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select your dream destination, guest count, hotel category, and decor scale for a realistic line-by-line cost projection based on actual hotel contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-8">
            {/* 1. Destination */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>1. Select Wedding Destination</span>
                <span className="text-amber-400 font-mono text-[11px]">Step 1 of 4</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'rajasthan', label: 'Rajasthan Palaces', desc: 'Udaipur / Jaipur' },
                  { id: 'goa', label: 'Goa Coastal Shores', desc: 'Beach Resorts' },
                  { id: 'corbett', label: 'Jim Corbett / Hills', desc: 'Forest Riverfront' },
                  { id: 'kerala', label: 'Kerala Backwaters', desc: 'Lagoons & Beach' },
                  { id: 'delhi', label: 'Delhi NCR Mansions', desc: 'Luxury Farmhouses' },
                  { id: 'thailand', label: 'Thailand (Hua Hin)', desc: 'International' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDestination(item.id as any)}
                    className={`p-3 rounded-2xl text-left transition-all border cursor-pointer ${
                      destination === item.id
                        ? 'bg-[#7A1C30] border-amber-400/80 text-white shadow-lg'
                        : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                    <div className="text-[11px] opacity-75 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Guest Count */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Estimated Guest Count
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[60, 100, 150, 200].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setGuestCount(count)}
                      className={`py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        guestCount === count
                          ? 'bg-[#7A1C30] border-amber-400 text-white shadow-sm'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nights */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Celebration Duration
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { nights: 2, label: '2 Nights / 3 Days' },
                    { nights: 3, label: '3 Nights / 4 Days' },
                  ].map((d) => (
                    <button
                      key={d.nights}
                      type="button"
                      onClick={() => setDurationNights(d.nights)}
                      className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                        durationNights === d.nights
                          ? 'bg-[#7A1C30] border-amber-400 text-white shadow-sm'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Hotel Tier & Decor Scale */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Hotel Tier */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  4. Hotel / Venue Category
                </label>
                <div className="space-y-2">
                  {[
                    { id: '4star', title: '4-Star Premium Resort', sub: '₹10k - ₹15k / room / night' },
                    { id: '5star', title: '5-Star Luxury Resort', sub: '₹18k - ₹26k / room / night' },
                    { id: 'palace', title: 'Grand Heritage Palace', sub: '₹28k - ₹50k / room / night' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setHotelTier(tier.id as any)}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        hotelTier === tier.id
                          ? 'bg-[#7A1C30] border-amber-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      <span className="font-semibold text-xs">{tier.title}</span>
                      <span className="text-[10px] text-amber-300 font-mono">{tier.sub.split('/')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Decor Tier */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  5. Decor &amp; Production Scale
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'classic', title: 'Classic & Floral Elegance', sub: 'Essential production' },
                    { id: 'grand', title: 'Grand Thematic Concepts', sub: '3D Mandap & Sangeet Stage' },
                    { id: 'royal', title: 'Royal Luxury Extravaganza', sub: 'Bespoke custom builds' },
                  ].map((dec) => (
                    <button
                      key={dec.id}
                      type="button"
                      onClick={() => setDecorTier(dec.id as any)}
                      className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        decorTier === dec.id
                          ? 'bg-[#7A1C30] border-amber-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      <span className="font-semibold text-xs">{dec.title}</span>
                      <span className="text-[10px] text-amber-300">{dec.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-850 to-black rounded-3xl p-6 sm:p-8 border border-amber-800/40 shadow-2xl relative space-y-6">
            {/* Total Estimated Box */}
            <div className="border-b border-slate-800 pb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Estimated All-Inclusive Investment
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  ₹{budget.minTotal} - ₹{budget.maxTotal}
                </span>
                <span className="text-base text-slate-400 font-bold">Lacs*</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                *Includes {budget.rooms} guest rooms for {durationNights} nights, all banquet meals, decor, logistics, entertainment, and professional planner fees.
              </p>
            </div>

            {/* Line-item breakdown */}
            <div className="space-y-2 text-xs text-slate-300 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="flex justify-between pb-1.5 border-b border-slate-800">
                <span className="text-slate-400">Rooms &amp; All Buffet Meals:</span>
                <span className="font-bold text-white">₹{budget.stayMeals} Lacs</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-800">
                <span className="text-slate-400">Thematic Decor &amp; Mandap:</span>
                <span className="font-bold text-white">₹{budget.decor} Lacs</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-800">
                <span className="text-slate-400">Airport Logistics &amp; Shuttles:</span>
                <span className="font-bold text-white">₹{budget.logistics} Lacs</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-800">
                <span className="text-slate-400">DJs, Artistes &amp; Sound Setup:</span>
                <span className="font-bold text-white">₹{budget.entertainment} Lacs</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-800">
                <span className="text-slate-400">Photo, Drone &amp; Cinematic Film:</span>
                <span className="font-bold text-white">₹{budget.photoVideo} Lacs</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-amber-400 font-bold">Devdas Fixed Planning Fee:</span>
                <span className="font-bold text-amber-400">₹{budget.plannerFee} Lacs</span>
              </div>
            </div>

            {/* Lead capture form */}
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-3 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  Send Me Detailed Itinerary &amp; Hotel List:
                </div>

                <input
                  type="text"
                  placeholder="Couple Names (e.g. Rahul &amp; Priya) *"
                  value={coupleName}
                  onChange={(e) => setCoupleName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />

                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Receive Custom Budget Sheet on WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Zero spam. Our senior Nuptial Artiste will share venue rate-cards and recce guidance.
                </p>
              </form>
            ) : (
              <div className="bg-emerald-950/80 border border-emerald-500/60 p-5 rounded-2xl text-center space-y-3 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-white">
                  Budget Projection Dispatched!
                </h4>
                <p className="text-xs text-slate-300">
                  Thank you, <strong className="text-white">{coupleName || 'Couple'}</strong>. We have dispatched the itemized venue and decor cost breakdown for {guestCount} guests in {destination.toUpperCase()} to your WhatsApp ({phone}).
                </p>
                <button
                  onClick={onOpenInquiry}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  <span>Book Free 1-on-1 Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
