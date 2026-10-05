import React, { useState, useMemo } from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

interface RaozyBudgetCalculatorProps {
  onBookConsultation: (quoteData: any) => void;
}

export const RaozyBudgetCalculator: React.FC<RaozyBudgetCalculatorProps> = ({
  onBookConsultation
}) => {
  const [destination, setDestination] = useState<string>('delhi');
  const [guestCount, setGuestCount] = useState<number>(300);
  const [durationDays, setDurationDays] = useState<number>(3);
  const [decorTier, setDecorTier] = useState<'bespoke' | 'grandeur' | 'couture'>('grandeur');
  const [includeHospitality, setIncludeHospitality] = useState<boolean>(true);
  const [entertainmentTier, setEntertainmentTier] = useState<'folk' | 'bollywood' | 'celebrity'>('bollywood');
  const [selectedFunctions, setSelectedFunctions] = useState<{ [key: string]: boolean }>({
    mehendi: true,
    haldi: true,
    sangeet: true,
    wedding: true,
    reception: true
  });

  const destinationsList = [
    { id: 'delhi', name: 'Gurugram & Delhi NCR', factor: 1.0, baseVenuePerNight: 800000 },
    { id: 'udaipur', name: 'Udaipur Lake Palaces', factor: 1.45, baseVenuePerNight: 1600000 },
    { id: 'jaipur', name: 'Jaipur Heritage Forts', factor: 1.3, baseVenuePerNight: 1200000 },
    { id: 'goa', name: 'South Goa Beach Resorts', factor: 1.25, baseVenuePerNight: 1100000 },
    { id: 'corbett', name: 'Jim Corbett Forest Lodges', factor: 0.95, baseVenuePerNight: 700000 },
    { id: 'dubai', name: 'Dubai & UAE Skyline', factor: 1.85, baseVenuePerNight: 2400000 }
  ];

  const currentDest = destinationsList.find((d) => d.id === destination) || destinationsList[0];

  const activeFunctionsCount = Object.values(selectedFunctions).filter(Boolean).length;

  const calculation = useMemo(() => {
    // 1. Decor & In-House Production Cost
    let baseDecorPerFunction = 350000;
    if (decorTier === 'bespoke') baseDecorPerFunction = 380000;
    if (decorTier === 'grandeur') baseDecorPerFunction = 650000;
    if (decorTier === 'couture') baseDecorPerFunction = 1150000;

    const guestScalingFactor = Math.max(0.8, guestCount / 250);
    const decorTotal = Math.round(
      baseDecorPerFunction * activeFunctionsCount * currentDest.factor * Math.sqrt(guestScalingFactor)
    );

    // 2. Planning & Direction Fee (Flat transparent model)
    let basePlanningFee = 450000;
    if (durationDays > 2) basePlanningFee += (durationDays - 2) * 120000;
    if (guestCount > 400) basePlanningFee += 150000;
    const planningTotal = Math.round(basePlanningFee * (currentDest.id === 'dubai' ? 1.4 : 1.0));

    // 3. Hospitality & Ground Logistics (Airport concierge, luggage tags, fleet ops)
    let hospitalityTotal = 0;
    if (includeHospitality) {
      hospitalityTotal = Math.round(guestCount * 1250 * durationDays * (currentDest.id === 'dubai' ? 1.5 : 1.0));
    }

    // 4. Entertainment & Artist Production (Sound, L-Acoustics, Stage Lights & Acts)
    let entertainmentTotal = 300000; // Base acoustic/folk/DJ
    if (entertainmentTier === 'bollywood') entertainmentTotal = 850000;
    if (entertainmentTier === 'celebrity') entertainmentTotal = 2200000;

    // Subtotal
    const subtotal = decorTotal + planningTotal + hospitalityTotal + entertainmentTotal;
    const contingencyReserve = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + contingencyReserve;

    return {
      decorTotal,
      planningTotal,
      hospitalityTotal,
      entertainmentTotal,
      contingencyReserve,
      grandTotal
    };
  }, [destination, guestCount, durationDays, decorTier, includeHospitality, entertainmentTier, activeFunctionsCount, currentDest]);

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Crore`;
    }
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  const handleSendWhatsAppQuote = () => {
    const summary = `*${raozyConfig.SITE_NAME} — Instant Wedding Budget Estimate*

• Destination: ${currentDest.name}
• Estimated Guests: ${guestCount}
• Celebration Duration: ${durationDays} Days (${activeFunctionsCount} Functions)
• Decor Production Tier: ${decorTier.toUpperCase()}
• Hospitality & Concierge: ${includeHospitality ? 'Included' : 'Excluded'}
• Entertainment Tier: ${entertainmentTier.toUpperCase()}

*Itemized Investment Breakdown:*
- In-House Decor & Production: ${formatINR(calculation.decorTotal)}
- Turnkey Direction & Planning Fee: ${formatINR(calculation.planningTotal)}
- Hospitality & Ground Concierge: ${formatINR(calculation.hospitalityTotal)}
- Artist & Concert Production: ${formatINR(calculation.entertainmentTotal)}
- *Total Estimated Budget: ${formatINR(calculation.grandTotal)}*

Please confirm availability of senior director for our dates.`;

    const url = `https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;
    window.open(url, '_blank');
  };

  const handleBookFromCalculator = () => {
    onBookConsultation({
      destination: currentDest.name,
      guestCount,
      durationDays,
      decorTier,
      totalEstimate: formatINR(calculation.grandTotal)
    });
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            100% Financial Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Interactive Wedding Cost Estimator
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            Configure your celebration parameters below to preview an itemized, open-book estimate based on Raozy’s wholesale in-house production pricing.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 bg-[#171410] p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-8">
            {/* 1. Destination Selection */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-3">
                1. Select Destination Hub
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {destinationsList.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDestination(d.id)}
                    className={`p-3 rounded-lg text-left text-xs font-sans transition-all border ${
                      destination === d.id
                        ? 'bg-[#DFC082]/15 border-[#DFC082] text-white font-medium shadow-sm'
                        : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="font-semibold">{d.name.split('&')[0].trim()}</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">Factor: {d.factor}x</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-serif uppercase tracking-wider text-[#DFC082]">
                  2. Guest Attendance Range
                </label>
                <span className="text-base font-serif font-bold text-white px-3 py-0.5 rounded bg-stone-900 border border-stone-700">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1200"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#DFC082] bg-stone-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-sans">
                <span>50 (Intimate)</span>
                <span>300 (Destination Average)</span>
                <span>600 (Grand)</span>
                <span>1,200+ (Extravaganza)</span>
              </div>
            </div>

            {/* 3. Event Duration */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-3">
                3. Celebration Duration
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 4].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDurationDays(days)}
                    className={`py-3 rounded-lg text-xs font-sans font-medium text-center border transition ${
                      durationDays === days
                        ? 'bg-[#DFC082] text-[#171410] font-bold border-[#DFC082]'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    {days} Days / {days - 1} Nights
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Ceremony Checklist */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-3">
                4. Included Functions ({activeFunctionsCount} Selected)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { key: 'mehendi', label: 'Mehendi Carnival' },
                  { key: 'haldi', label: 'Joyful Haldi' },
                  { key: 'sangeet', label: 'Sangeet & Cocktail' },
                  { key: 'wedding', label: 'Phere & Sacred Mandap' },
                  { key: 'reception', label: 'Black-Tie Reception' }
                ].map((fn) => (
                  <button
                    key={fn.key}
                    type="button"
                    onClick={() =>
                      setSelectedFunctions((prev) => ({
                        ...prev,
                        [fn.key]: !prev[fn.key]
                      }))
                    }
                    className={`p-2.5 rounded text-xs font-sans flex items-center justify-between border transition ${
                      selectedFunctions[fn.key]
                        ? 'bg-[#DFC082]/10 border-[#DFC082]/60 text-white'
                        : 'bg-stone-900/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    <span>{fn.label}</span>
                    <span className="text-xs font-bold">
                      {selectedFunctions[fn.key] ? '✓' : '—'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Decor Tier */}
            <div>
              <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-3">
                5. In-House Decor &amp; Production Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'bespoke',
                    title: 'Bespoke Luxury',
                    desc: 'Floral Mandap, Elegant Lounges, Warm Fairy Lights'
                  },
                  {
                    id: 'grandeur',
                    title: 'Royal Grandeur',
                    desc: 'Gilded Arches, 3D CAD Staging, Moving Heads, Imported Blooms'
                  },
                  {
                    id: 'couture',
                    title: 'Haute Couture',
                    desc: 'Floating Pontoon Mandap, 48 Crystal Chandeliers, LED Tunnel'
                  }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setDecorTier(tier.id as any)}
                    className={`p-3.5 rounded-lg text-left border transition ${
                      decorTier === tier.id
                        ? 'bg-[#DFC082]/15 border-[#DFC082] text-white shadow-sm'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <div className="text-xs font-serif font-bold mb-1">{tier.title}</div>
                    <div className="text-[10px] text-stone-400 leading-tight">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 6. Hospitality & Entertainment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-800">
              <div>
                <label className="block text-[11px] font-serif uppercase tracking-wider text-[#DFC082] mb-2">
                  VIP Guest Hospitality &amp; Fleet
                </label>
                <button
                  type="button"
                  onClick={() => setIncludeHospitality(!includeHospitality)}
                  className={`w-full py-2 px-3 rounded text-xs border font-sans text-left flex items-center justify-between ${
                    includeHospitality
                      ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300'
                      : 'bg-stone-900 border-stone-800 text-stone-500'
                  }`}
                >
                  <span>Airport Desks &amp; WhatsApp Bot</span>
                  <span className="font-bold">{includeHospitality ? 'INCLUDED' : 'OMIT'}</span>
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-serif uppercase tracking-wider text-[#DFC082] mb-2">
                  Entertainment &amp; Sound
                </label>
                <select
                  value={entertainmentTier}
                  onChange={(e) => setEntertainmentTier(e.target.value as any)}
                  className="w-full py-2 px-3 rounded bg-stone-900 border border-stone-800 text-xs text-white focus:outline-none focus:border-[#DFC082]"
                >
                  <option value="folk">Acoustic Folk Ensemble &amp; DJ</option>
                  <option value="bollywood">Leading Bollywood Playback Singer</option>
                  <option value="celebrity">A-List Celebrity Artist &amp; Concert Stage</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right: Live Itemized Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#181512] rounded-2xl border border-[#DFC082]/40 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-[#DFC082] block">
                    Live Cost Architecture
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-white">
                    Estimated Investment
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#DFC082]/10 border border-[#DFC082]/30 text-[11px] font-serif text-[#DFC082]">
                  {guestCount} Guests · {durationDays} Days
                </div>
              </div>

              {/* Itemized Lines */}
              <div className="space-y-3.5 text-xs font-sans">
                <div className="flex justify-between items-center text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC082]" />
                    <span>In-House Decor &amp; Production Atelier:</span>
                  </span>
                  <span className="font-semibold text-white">
                    {formatINR(calculation.decorTotal)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC082]" />
                    <span>Full Direction &amp; Operations Crew:</span>
                  </span>
                  <span className="font-semibold text-white">
                    {formatINR(calculation.planningTotal)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC082]" />
                    <span>Guest Hospitality &amp; Fleet Transfers:</span>
                  </span>
                  <span className="font-semibold text-white">
                    {calculation.hospitalityTotal > 0 ? formatINR(calculation.hospitalityTotal) : 'Self Managed'}
                  </span>
                </div>

                <div className="flex justify-between items-center text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC082]" />
                    <span>Sound, Stage Lighting &amp; Artists:</span>
                  </span>
                  <span className="font-semibold text-white">
                    {formatINR(calculation.entertainmentTotal)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-stone-400 pt-2 border-t border-stone-800 text-[11px]">
                  <span>Operational Buffer Reserve (5%):</span>
                  <span>{formatINR(calculation.contingencyReserve)}</span>
                </div>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#272019] to-[#171410] border border-[#DFC082]/60 text-center">
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#DFC082] block mb-1">
                  Total Projected Celebration Budget
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  {formatINR(calculation.grandTotal)}
                </div>
                <p className="text-[10px] text-stone-400 mt-1">
                  100% Direct Wholesale Costing · Zero Secret Kickbacks
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsAppQuote}
                  className="w-full py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-semibold text-xs tracking-wider uppercase shadow transition flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
                  </svg>
                  <span>WhatsApp Me This Estimate</span>
                </button>

                <button
                  type="button"
                  onClick={handleBookFromCalculator}
                  className="w-full py-3.5 px-4 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase shadow hover:brightness-110 active:scale-95 transition"
                >
                  Book Date Availability Review
                </button>
              </div>

              <div className="text-[10px] text-stone-500 text-center leading-relaxed">
                * Note: Hotel room tariffs, food and beverage catering, and external venue rentals are paid directly to selected properties at contracted corporate rates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
