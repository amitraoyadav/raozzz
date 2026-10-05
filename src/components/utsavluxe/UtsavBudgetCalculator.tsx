import React, { useState, useMemo } from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavBudgetCalculatorProps {
  onBookConsultation: (quoteData: any) => void;
  initialCity?: string;
}

export const UtsavBudgetCalculator: React.FC<UtsavBudgetCalculatorProps> = ({
  onBookConsultation,
  initialCity = 'bengaluru'
}) => {
  const [city, setCity] = useState(initialCity);
  const [guestCount, setGuestCount] = useState<number>(300);
  const [eventDays, setEventDays] = useState<number>(3);
  const [decorTier, setDecorTier] = useState<'essential' | 'luxe' | 'royal'>('luxe');

  // Service toggles
  const [includePlanning, setIncludePlanning] = useState(true);
  const [includePhotography, setIncludePhotography] = useState(true);
  const [includeCatering, setIncludeCatering] = useState(false);
  const [cateringTier, setCateringTier] = useState<number>(2200); // per plate
  const [includeEntertainment, setIncludeEntertainment] = useState(true);

  // Functions selected
  const [functions, setFunctions] = useState<string[]>([
    'haldi',
    'sangeet',
    'pheras',
    'reception'
  ]);

  const toggleFunction = (fnId: string) => {
    if (functions.includes(fnId)) {
      if (functions.length > 1) {
        setFunctions(functions.filter(f => f !== fnId));
      }
    } else {
      setFunctions([...functions, fnId]);
    }
  };

  // Pricing calculations
  const calculation = useMemo(() => {
    // City multiplier (slight destination / logistics adjustment)
    const cityMultipliers: Record<string, number> = {
      'bengaluru': 1.0,
      'delhi-ncr': 1.05,
      'mumbai': 1.12,
      'hyderabad': 1.0,
      'jaipur': 1.08,
      'goa': 1.15,
      'udaipur': 1.14,
      'chennai': 1.0
    };
    const multiplier = cityMultipliers[city] || 1.0;

    // Decor Base by Tier & Number of functions
    let baseDecorPerFunction = 150000;
    if (decorTier === 'luxe') baseDecorPerFunction = 320000;
    if (decorTier === 'royal') baseDecorPerFunction = 650000;

    // Scale decor with guest volume (more chairs, wider stages, bigger mandap lawns)
    const guestScale = guestCount > 500 ? 1.3 : guestCount > 300 ? 1.15 : 1.0;
    const decorSubtotal = Math.round(baseDecorPerFunction * functions.length * guestScale * multiplier);

    // Planning Fee (Turnkey operations squad + bridal shadow + guest RSVP)
    const planningFee = includePlanning
      ? Math.round((eventDays <= 2 ? 180000 : 280000) * (guestCount > 500 ? 1.25 : 1.0))
      : 0;

    // Photography & Cinema (per day crew of candid + drone + cinematic lead)
    const photographyFee = includePhotography
      ? Math.round(eventDays * 125000 * multiplier)
      : 0;

    // Catering (Optional calculation per plate * guest count * main dinner functions)
    const cateringEventsCount = Math.max(1, functions.filter(f => f === 'pheras' || f === 'reception' || f === 'sangeet').length);
    const cateringSubtotal = includeCatering
      ? Math.round(guestCount * cateringTier * cateringEventsCount)
      : 0;

    // Entertainment (Band, DJ, sound truss, cold pyrotechnics)
    const entertainmentFee = includeEntertainment
      ? Math.round((eventDays * 75000 + (functions.includes('sangeet') ? 100000 : 0)) * multiplier)
      : 0;

    const grandTotal = decorSubtotal + planningFee + photographyFee + cateringSubtotal + entertainmentFee;
    
    // Estimated traditional markup savings (in-house floral & direct farm procurement saves ~22%)
    const traditionalAgencyMarkup = Math.round(grandTotal * 0.22);
    const costPerGuest = Math.round(grandTotal / Math.max(50, guestCount));

    return {
      decorSubtotal,
      planningFee,
      photographyFee,
      cateringSubtotal,
      entertainmentFee,
      grandTotal,
      traditionalAgencyMarkup,
      costPerGuest
    };
  }, [city, guestCount, eventDays, decorTier, includePlanning, includePhotography, includeCatering, cateringTier, includeEntertainment, functions]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleConsultationWithQuote = () => {
    onBookConsultation({
      city,
      guestCount,
      eventDays,
      decorTier,
      functions,
      includePlanning,
      includePhotography,
      includeCatering,
      includeEntertainment,
      estimatedTotal: calculation.grandTotal
    });
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Utsav Luxe Team! I used your Instant Wedding Cost Estimator for ${city.toUpperCase()} with ${guestCount} guests across ${eventDays} days (${decorTier.toUpperCase()} tier). My estimated budget is ${formatINR(calculation.grandTotal)}. I would like to schedule my free 3D design recce.`
    );
    window.open(`https://wa.me/${UTSAV_BUSINESS_CONFIG.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-stone-100 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Zero Hidden Markups Guaranteed
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Interactive Wedding Cost Estimator
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Customize your ceremonies, guest count, decor aesthetics, and add-ons in real-time. 
            Enjoy transparent line-item pricing with zero unexpected fees on your wedding day.
          </p>
        </div>

        {/* Main Grid: Inputs on Left, Real-Time Breakdown on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-8">
            
            {/* 1. City & Duration */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E05A47] text-white text-xs flex items-center justify-center font-bold">1</span>
                  Wedding Location & Duration
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-stone-500 font-medium mb-1">City / Studio Hub</span>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-800 text-sm font-semibold focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  >
                    {UTSAV_BUSINESS_CONFIG.cities.map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.tag})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-xs text-stone-500 font-medium mb-1">Celebration Duration</span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map(days => (
                      <button
                        key={days}
                        type="button"
                        onClick={() => setEventDays(days)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          eventDays === days
                            ? 'bg-[#E05A47] text-white border-[#E05A47] shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {days} {days === 1 ? 'Day' : 'Days'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E05A47] text-white text-xs flex items-center justify-center font-bold">2</span>
                  Expected Guest Count
                </label>
                <div className="px-3 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] font-bold text-sm">
                  {guestCount} Guests
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E05A47]"
              />

              <div className="flex justify-between text-[11px] text-stone-500 font-medium mt-1.5">
                <span>50 (Intimate)</span>
                <span>300 (Average)</span>
                <span>750 (Grand)</span>
                <span>1,500+ (Royal Scale)</span>
              </div>
            </div>

            {/* 3. Included Functions / Events */}
            <div>
              <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E05A47] text-white text-xs flex items-center justify-center font-bold">3</span>
                Select Ceremonies & Events
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'haldi', label: 'Haldi & Chooda', icon: '🌼' },
                  { id: 'mehendi', label: 'Mehendi Carnival', icon: '🌿' },
                  { id: 'sangeet', label: 'Sangeet & Cocktail', icon: '✨' },
                  { id: 'pheras', label: 'Sacred Mandap Pheras', icon: '🔥' },
                  { id: 'reception', label: 'Grand Reception Gala', icon: '🥂' },
                  { id: 'afterparty', label: 'Late Night After-Party', icon: '🎧' }
                ].map(item => {
                  const isChecked = functions.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleFunction(item.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                        isChecked
                          ? 'border-[#E05A47] bg-[#E05A47]/5 text-stone-950 font-semibold shadow-xs ring-1 ring-[#E05A47]'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Decor & Scenography Tier */}
            <div>
              <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E05A47] text-white text-xs flex items-center justify-center font-bold">4</span>
                Choose Decor & Scenography Level
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Essential */}
                <div
                  onClick={() => setDecorTier('essential')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    decorTier === 'essential'
                      ? 'border-[#E05A47] bg-white ring-2 ring-[#E05A47] shadow-sm'
                      : 'border-stone-200 bg-stone-50/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-stone-900 text-sm">Essential Elegance</span>
                    {decorTier === 'essential' && <span className="w-2 h-2 rounded-full bg-[#E05A47]" />}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">Smart & refined aesthetic</div>
                  <div className="text-xs font-bold text-stone-900 mt-2">₹1.5L / event</div>
                  <ul className="text-[11px] text-stone-600 mt-2 space-y-1">
                    <li>• Fresh Indian seasonal florals</li>
                    <li>• Ambient LED spotlights</li>
                    <li>• Stage & entrance archway</li>
                  </ul>
                </div>

                {/* Luxe (Popular) */}
                <div
                  onClick={() => setDecorTier('luxe')}
                  className={`p-4 rounded-xl border cursor-pointer relative transition-all ${
                    decorTier === 'luxe'
                      ? 'border-[#E05A47] bg-white ring-2 ring-[#E05A47] shadow-md'
                      : 'border-stone-200 bg-stone-50/60 hover:bg-white'
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#E05A47] text-white shadow-xs">
                    Popular
                  </span>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-stone-900 text-sm">Luxe Grandeur</span>
                    {decorTier === 'luxe' && <span className="w-2 h-2 rounded-full bg-[#E05A47]" />}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">Concert-grade 3D designs</div>
                  <div className="text-xs font-bold text-[#E05A47] mt-2">₹3.2L / event</div>
                  <ul className="text-[11px] text-stone-600 mt-2 space-y-1">
                    <li>• 3D CAD renders before build</li>
                    <li>• Imported Dutch blooms</li>
                    <li>• Kinetic intelligent lighting</li>
                    <li>• Themed furniture & lounges</li>
                  </ul>
                </div>

                {/* Royal */}
                <div
                  onClick={() => setDecorTier('royal')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    decorTier === 'royal'
                      ? 'border-[#E05A47] bg-white ring-2 ring-[#E05A47] shadow-sm'
                      : 'border-stone-200 bg-stone-50/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-stone-900 text-sm">Royal Bespoke</span>
                    {decorTier === 'royal' && <span className="w-2 h-2 rounded-full bg-[#E05A47]" />}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">Monumental palace takeover</div>
                  <div className="text-xs font-bold text-stone-900 mt-2">₹6.5L / event</div>
                  <ul className="text-[11px] text-stone-600 mt-2 space-y-1">
                    <li>• Glass water mandap & dome</li>
                    <li>• Unlimited farm floral volume</li>
                    <li>• Pyrotechnic synchronizations</li>
                    <li>• Chandelier forest ceilings</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 5. Additional Turnkey Services Toggles */}
            <div>
              <label className="block text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E05A47] text-white text-xs flex items-center justify-center font-bold">5</span>
                Integrated Turnkey Services
              </label>

              <div className="space-y-3">
                
                {/* Planning */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition-colors">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="opt-planning"
                      checked={includePlanning}
                      onChange={(e) => setIncludePlanning(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-[#E05A47] focus:ring-[#E05A47]"
                    />
                    <div>
                      <label htmlFor="opt-planning" className="text-xs font-bold text-stone-900 cursor-pointer">
                        Turnkey Planning & 14-Member Operations Squad
                      </label>
                      <p className="text-[11px] text-stone-500">
                        Minute-by-minute timeline, RSVP concierge, bridal shadow managers & vendor contract audits.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-stone-900 whitespace-nowrap ml-2">
                    {includePlanning ? formatINR(calculation.planningFee) : 'Excluded'}
                  </span>
                </div>

                {/* Photography */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition-colors">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="opt-photo"
                      checked={includePhotography}
                      onChange={(e) => setIncludePhotography(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-[#E05A47] focus:ring-[#E05A47]"
                    />
                    <div>
                      <label htmlFor="opt-photo" className="text-xs font-bold text-stone-900 cursor-pointer">
                        Candid Photography & 4K Aerial Cinema Team
                      </label>
                      <p className="text-[11px] text-stone-500">
                        Top-tier editorial documentary crew, licensed drone aerials & same-day social media teaser reel.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-stone-900 whitespace-nowrap ml-2">
                    {includePhotography ? formatINR(calculation.photographyFee) : 'Excluded'}
                  </span>
                </div>

                {/* Entertainment */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition-colors">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="opt-ent"
                      checked={includeEntertainment}
                      onChange={(e) => setIncludeEntertainment(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-[#E05A47] focus:ring-[#E05A47]"
                    />
                    <div>
                      <label htmlFor="opt-ent" className="text-xs font-bold text-stone-900 cursor-pointer">
                        Celebrity DJ, Live Sangeet Band & SFX Sound
                      </label>
                      <p className="text-[11px] text-stone-500">
                        Concert line-array sound, wireless microphones, cold pyros, dry ice fog & emcee coordination.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-stone-900 whitespace-nowrap ml-2">
                    {includeEntertainment ? formatINR(calculation.entertainmentFee) : 'Excluded'}
                  </span>
                </div>

                {/* Catering (Optional) */}
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition-colors space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="opt-catering"
                        checked={includeCatering}
                        onChange={(e) => setIncludeCatering(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded text-[#E05A47] focus:ring-[#E05A47]"
                      />
                      <div>
                        <label htmlFor="opt-catering" className="text-xs font-bold text-stone-900 cursor-pointer">
                          Gourmet Catering & Live Food Stations
                        </label>
                        <p className="text-[11px] text-stone-500">
                          Curated master chefs, live interactive counters, bone china service & dessert studio.
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-stone-900 whitespace-nowrap ml-2">
                      {includeCatering ? formatINR(calculation.cateringSubtotal) : 'Optional'}
                    </span>
                  </div>

                  {includeCatering && (
                    <div className="pt-2 pl-7 flex items-center gap-3">
                      <span className="text-xs text-stone-600 font-medium">Menu Tier:</span>
                      {[
                        { label: 'Royal Classic', price: 1800 },
                        { label: 'Gourmet Grand', price: 2400 },
                        { label: 'Ultra Luxury', price: 3200 }
                      ].map(tier => (
                        <button
                          key={tier.price}
                          type="button"
                          onClick={() => setCateringTier(tier.price)}
                          className={`px-2.5 py-1 text-xs rounded-md border font-semibold ${
                            cateringTier === tier.price
                              ? 'bg-[#E05A47] text-white border-[#E05A47]'
                              : 'bg-white text-stone-700 border-stone-300'
                          }`}
                        >
                          ₹{tier.price}/plate
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

          {/* Real-Time Cost Summary Box (Right Column) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            
            <div className="bg-stone-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-stone-800 space-y-6">
              
              {/* Box Header */}
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8D7B]">
                  Live Transparent Breakdown
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="font-serif text-2xl font-bold text-white">Estimated Investment</h3>
                  <span className="text-xs text-stone-400 font-medium">{city.toUpperCase()}</span>
                </div>
              </div>

              {/* Total Display */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-xs text-stone-300 font-medium mb-1">
                  Total Projected Budget ({guestCount} Guests · {eventDays} Days)
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-200">
                  {formatINR(calculation.grandTotal)}
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1">
                  ≈ {formatINR(calculation.costPerGuest)} per guest (all inclusive)
                </div>
              </div>

              {/* Line Items */}
              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-stone-400">
                    Decor & Scenography ({functions.length} events · {decorTier})
                  </span>
                  <span className="font-semibold text-white">{formatINR(calculation.decorSubtotal)}</span>
                </div>

                {includePlanning && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-stone-400">Turnkey Planning & Operations (14 staff)</span>
                    <span className="font-semibold text-white">{formatINR(calculation.planningFee)}</span>
                  </div>
                )}

                {includePhotography && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-stone-400">Candid Cinema & 4K Drone Coverage</span>
                    <span className="font-semibold text-white">{formatINR(calculation.photographyFee)}</span>
                  </div>
                )}

                {includeEntertainment && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-stone-400">Headline Sound, DJ & Pyrotechnics</span>
                    <span className="font-semibold text-white">{formatINR(calculation.entertainmentFee)}</span>
                  </div>
                )}

                {includeCatering && (
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-stone-400">Gourmet Catering ({guestCount} pax)</span>
                    <span className="font-semibold text-white">{formatINR(calculation.cateringSubtotal)}</span>
                  </div>
                )}
              </div>

              {/* Direct Farm Procurement Savings Banner */}
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2.5">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-bold text-white">Direct-to-Farm Production Savings:</span>
                  <div className="text-[11px] text-emerald-300">
                    You save ~{formatINR(calculation.traditionalAgencyMarkup)} vs standard middleman agency markup.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleConsultationWithQuote}
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-lg shadow-[#E05A47]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Lock This Quote & Book Free 3D Recce</span>
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-stone-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Send Estimate to WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-stone-400 text-center">
                *Taxes extra as applicable. Exact quotes confirmed after on-ground site laser recce.
              </div>

            </div>

            {/* Inclusions Card */}
            <div className="bg-white rounded-xl p-4 border border-stone-200 text-xs text-stone-600 space-y-2">
              <span className="font-bold text-stone-900 block">Every UTSAV LUXE Package Includes:</span>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-stone-700">
                  <span className="text-emerald-600">✓</span> Free 3D CAD Walkthrough
                </div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <span className="text-emerald-600">✓</span> 0% Middleman Markups
                </div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <span className="text-emerald-600">✓</span> In-House Cold Chain Floral
                </div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <span className="text-emerald-600">✓</span> 100% On-Time Baraat Guarantee
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
