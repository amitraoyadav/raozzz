import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  MapPin, 
  Users, 
  Clock, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { BUDGET_BENCHMARKS, PSR_DESTINATIONS } from '../../data/psrWeddingsData';

interface PsrBudgetCalculatorProps {
  onOpenConsultation: (customBrief?: string) => void;
}

export const PsrBudgetCalculator: React.FC<PsrBudgetCalculatorProps> = ({
  onOpenConsultation
}) => {
  const [selectedDestinationKey, setSelectedDestinationKey] = useState<keyof typeof BUDGET_BENCHMARKS.destinations>('udaipur');
  const [guestCount, setGuestCount] = useState<number>(200);
  const [numberOfDays, setNumberOfDays] = useState<number>(3);
  const [luxuryTierKey, setLuxuryTierKey] = useState<keyof typeof BUDGET_BENCHMARKS.tiers>('luxury');

  const destinationConfig = BUDGET_BENCHMARKS.destinations[selectedDestinationKey];
  const tierConfig = BUDGET_BENCHMARKS.tiers[luxuryTierKey];

  // Dynamic calculations
  const breakdown = useMemo(() => {
    // Rooms estimation: 1 room per 2 guests
    const roomCount = Math.ceil(guestCount / 2);
    const roomNights = numberOfDays - 1; // 3 days = 2 nights
    const accommodation = roomCount * roomNights * tierConfig.roomRate * destinationConfig.multiplier;

    // Food & Banqueting: 2 major meals per day (Lunch & Dinner) + breakfast
    const totalMeals = numberOfDays * 2;
    const foodAndBeverage = guestCount * totalMeals * tierConfig.foodPerPlatePerFunction * destinationConfig.multiplier;

    // Decor & Scenography: 4 to 5 functions scaled by multiplier
    const functionCount = numberOfDays === 2 ? 3 : numberOfDays === 3 ? 4 : 5;
    const decor = tierConfig.decorPerFunction * functionCount * destinationConfig.multiplier;

    // Production (Sound, Lighting, Trussing, LED walls)
    const production = tierConfig.soundAndLight * (functionCount / 4) * destinationConfig.multiplier;

    // Entertainment & Artists
    const entertainment = tierConfig.entertainment * destinationConfig.multiplier;

    // Photography & Cinematic Film
    const photography = tierConfig.photography;

    // Hospitality & Fleet Logistics
    const logistics = tierConfig.hospitalityAndLogistics * destinationConfig.multiplier;

    // Subtotal
    const subtotal = accommodation + foodAndBeverage + decor + production + entertainment + photography + logistics;

    // Statutory Taxes & Operational Contingency (approx 12%)
    const taxesAndContingency = subtotal * 0.12;

    const totalEstimate = subtotal + taxesAndContingency;

    // Estimated client savings with PSR direct GM rates (18%)
    const potentialSavings = totalEstimate * 0.18;

    return {
      roomCount,
      roomNights,
      accommodation: Math.round(accommodation),
      foodAndBeverage: Math.round(foodAndBeverage),
      decor: Math.round(decor),
      production: Math.round(production),
      entertainment: Math.round(entertainment),
      photography: Math.round(photography),
      logistics: Math.round(logistics),
      taxesAndContingency: Math.round(taxesAndContingency),
      totalEstimate: Math.round(totalEstimate),
      potentialSavings: Math.round(potentialSavings)
    };
  }, [guestCount, numberOfDays, destinationConfig, tierConfig]);

  // Format currency in Indian Lakhs / Crores
  const formatInr = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crores`;
    }
    return `₹${(amount / 100000).toFixed(1)} Lakhs`;
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `*${siteConfig.SITE_NAME} — Destination Wedding Budget Estimate*\n\n` +
      `• *Destination:* ${destinationConfig.label}\n` +
      `• *Guests:* ${guestCount} people\n` +
      `• *Duration:* ${numberOfDays} Days / ${breakdown.roomNights} Nights (${breakdown.roomCount} Rooms)\n` +
      `• *Luxury Tier:* ${tierConfig.name}\n\n` +
      `*Projected Line-Item Breakdown:*\n` +
      `- Rooms & Stay: ${formatInr(breakdown.accommodation)}\n` +
      `- Food & Banqueting: ${formatInr(breakdown.foodAndBeverage)}\n` +
      `- Decor & Floral Scenography: ${formatInr(breakdown.decor)}\n` +
      `- Audio/Visual & Stage Production: ${formatInr(breakdown.production)}\n` +
      `- Entertainment & Artists: ${formatInr(breakdown.entertainment)}\n` +
      `- Photography & Films: ${formatInr(breakdown.photography)}\n` +
      `- Hospitality & Fleet Logistics: ${formatInr(breakdown.logistics)}\n\n` +
      `*Total Projected Investment:* ${formatInr(breakdown.totalEstimate)}\n` +
      `*Estimated Savings with PSR GM Rates:* ~${formatInr(breakdown.potentialSavings)}\n\n` +
      `Please connect with me to schedule an in-depth consultation.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator-section" className="py-20 lg:py-28 bg-[#180408] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Calculator className="w-3.5 h-3.5 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Financial Transparency Engine
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Destination Wedding Budget Estimator
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Gain immediate clarity on real market costs across India’s top wedding destinations. Adjust guest counts, durations, and palace tiers to review an itemized financial roadmap.
          </p>
        </div>

        {/* Main Grid: Controls Left, Breakdown Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#20070B] rounded-3xl border border-[#C5A059]/30 p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white border-b border-stone-800 pb-3 flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#DFBE78]" />
              <span>Event Parameters</span>
            </h3>

            {/* 1. Destination Select */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE78]" />
                <span>Select Target Destination</span>
              </label>
              <select
                value={selectedDestinationKey}
                onChange={e => setSelectedDestinationKey(e.target.value as any)}
                className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-hidden focus:border-[#DFBE78]"
              >
                {Object.entries(BUDGET_BENCHMARKS.destinations).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Guest Count Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#DFBE78]" />
                  <span>Number of Guests</span>
                </label>
                <span className="font-bold text-[#DFBE78] text-base font-mono">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={600}
                step={25}
                value={guestCount}
                onChange={e => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#DFBE78] cursor-pointer"
              />
              <div className="flex items-center justify-between text-[10px] text-stone-500 font-mono">
                <span>50 (Intimate)</span>
                <span>200 (Classic)</span>
                <span>400 (Grand)</span>
                <span>600+ (Monumental)</span>
              </div>
            </div>

            {/* 3. Duration Selector */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#DFBE78]" />
                <span>Celebration Duration</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { days: 2, label: '2 Days / 1 Night' },
                  { days: 3, label: '3 Days / 2 Nights' },
                  { days: 4, label: '4 Days / 3 Nights' }
                ].map(item => (
                  <button
                    key={item.days}
                    type="button"
                    onClick={() => setNumberOfDays(item.days)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                      numberOfDays === item.days
                        ? 'bg-[#DFBE78] text-[#1A0509] border-[#DFBE78] font-bold shadow-md'
                        : 'bg-[#120306] border-stone-800 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Luxury Tier Selector */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#DFBE78]" />
                <span>Palace & Venue Standard</span>
              </label>
              <div className="space-y-2">
                {Object.entries(BUDGET_BENCHMARKS.tiers).map(([key, val]) => (
                  <label
                    key={key}
                    onClick={() => setLuxuryTierKey(key as any)}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      luxuryTierKey === key
                        ? 'bg-[#2A090E] border-[#DFBE78]'
                        : 'bg-[#120306] border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="luxuryTier"
                      checked={luxuryTierKey === key}
                      onChange={() => setLuxuryTierKey(key as any)}
                      className="accent-[#DFBE78] mt-1 cursor-pointer"
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-white block">{val.name}</span>
                      <span className="text-[11px] text-stone-400 font-light block">
                        Avg room rate ~₹{val.roomRate.toLocaleString()}/night • F&B ~₹{val.foodPerPlatePerFunction.toLocaleString()}/plate
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-[#C5A059]/20 text-[11px] text-stone-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFBE78] shrink-0 mt-0.5" />
              <span>
                Based on real contracts executed across 140+ luxury hotel properties in 2025/2026.
              </span>
            </div>
          </div>

          {/* Breakdown & Summary Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#21070B] rounded-3xl border border-[#DFBE78]/40 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-800 pb-4 gap-2">
              <div>
                <span className="text-xs text-[#DFBE78] font-bold uppercase tracking-wider block">
                  Projected Financial Blueprint
                </span>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white">
                  Estimated Total Investment
                </h3>
              </div>
              <div className="text-right">
                <span className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-black text-[#DFBE78] block">
                  {formatInr(breakdown.totalEstimate)}
                </span>
                <span className="text-[11px] text-stone-400">All-Inclusive Projection</span>
              </div>
            </div>

            {/* Savings Highlight Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-emerald-900/30 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <TrendingDown className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-xs font-bold text-emerald-300 block">
                    Estimated Savings with PSR Direct GM Rates
                  </span>
                  <span className="text-[11px] text-emerald-400/80">
                    We eliminate agent markups & secure complimentary room upgrades
                  </span>
                </div>
              </div>
              <span className="font-bold text-base text-emerald-300 font-mono">
                ~{formatInr(breakdown.potentialSavings)}
              </span>
            </div>

            {/* Line-item table */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-stone-300 tracking-wider">
                Line-Item Category Breakdown:
              </h4>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">
                    Accommodation ({breakdown.roomCount} Rooms × {breakdown.roomNights} Nights)
                  </span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.accommodation)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">Food & Banquets (4-5 Lavish Gourmet Functions)</span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.foodAndBeverage)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">Decor, Mandap Scenography & Exotic Florals</span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.decor)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">Concert Sound, Intelligent Lights & 3D LED Stage</span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.production)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">Entertainment, Celebrity Artists, DJs & Folk Troops</span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.entertainment)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">Photography, Drone Aerials & Cinematic Films</span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.photography)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306] border border-stone-800">
                  <span className="text-stone-300">Logistics, Fleet Transit & 24/7 Guest Concierge</span>
                  <span className="font-bold text-white font-mono">{formatInr(breakdown.logistics)}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#170306]/60 border border-stone-800/60 text-stone-400">
                  <span>Statutory Permits, GST (18%) & Operational Contingency</span>
                  <span className="font-mono">{formatInr(breakdown.taxesAndContingency)}</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="py-3.5 px-4 rounded-xl bg-emerald-800/40 hover:bg-emerald-700/60 border border-emerald-500/50 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send Estimate to WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenConsultation(`Calculated Estimate: ${formatInr(breakdown.totalEstimate)} for ${guestCount} guests in ${destinationConfig.label}`)}
                className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
