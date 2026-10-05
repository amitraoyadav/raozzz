import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Layers, 
  MapPin, 
  Users, 
  Palette, 
  ShieldCheck,
  Building2,
  TrendingDown
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

interface SamarohDecorCalculatorProps {
  onOpenConsultation: (specsBrief: string) => void;
  selectedCity: string;
}

export const SamarohDecorCalculator: React.FC<SamarohDecorCalculatorProps> = ({
  onOpenConsultation,
  selectedCity
}) => {
  // Functions selection (checkboxes)
  const [functions, setFunctions] = useState<{ [key: string]: boolean }>({
    haldi: true,
    mehendi: false,
    sangeet: true,
    wedding: true,
    reception: true
  });

  // Style preference
  const [styleVibe, setStyleVibe] = useState<'traditional' | 'contemporary' | 'glam_mirror' | 'bohemian'>('traditional');

  // Venue scale
  const [venueType, setVenueType] = useState<'ballroom' | 'lawn' | 'courtyard' | 'beachfront'>('lawn');

  // Guest scale
  const [guestCount, setGuestCount] = useState<number>(350);

  // Floral density
  const [floralDensity, setFloralDensity] = useState<'curated' | 'lavish' | 'ultra_luxe'>('lavish');

  // City Object
  const activeCityObj = SAMAROH_CONFIG.CITIES.find(c => c.id === selectedCity) || SAMAROH_CONFIG.CITIES[0];

  const handleToggleFunction = (key: string) => {
    setFunctions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculation Engine
  const calculation = useMemo(() => {
    let baseTotal = 0;

    // Base cost per selected ceremony
    if (functions.haldi) baseTotal += 140000;
    if (functions.mehendi) baseTotal += 160000;
    if (functions.sangeet) baseTotal += 280000;
    if (functions.wedding) baseTotal += 320000;
    if (functions.reception) baseTotal += 340000;

    // Style multiplier
    let styleMultiplier = 1.0;
    if (styleVibe === 'contemporary') styleMultiplier = 1.12;
    if (styleVibe === 'glam_mirror') styleMultiplier = 1.25;
    if (styleVibe === 'bohemian') styleMultiplier = 1.08;

    // Venue scale adjustment (outdoors need more structure/lighting)
    let venueMultiplier = 1.0;
    if (venueType === 'lawn') venueMultiplier = 1.15;
    if (venueType === 'beachfront') venueMultiplier = 1.22;
    if (venueType === 'courtyard') venueMultiplier = 1.05;

    // Guest scaling (tables, walkways, seating)
    const guestFactor = Math.max(0.85, guestCount / 300);

    // Floral density multiplier
    let floralMultiplier = 1.0;
    if (floralDensity === 'curated') floralMultiplier = 0.9;
    if (floralDensity === 'lavish') floralMultiplier = 1.15;
    if (floralDensity === 'ultra_luxe') floralMultiplier = 1.4;

    const rawTotal = baseTotal * styleMultiplier * venueMultiplier * (0.8 + 0.2 * guestFactor) * floralMultiplier;
    const estimatedTotal = Math.round(rawTotal / 5000) * 5000;

    // Itemized breakdown
    const stageAndMandap = Math.round(estimatedTotal * 0.38);
    const floralDecor = Math.round(estimatedTotal * 0.26);
    const ambientLighting = Math.round(estimatedTotal * 0.16);
    const entranceAndPassage = Math.round(estimatedTotal * 0.12);
    const tableAndLounge = Math.round(estimatedTotal * 0.08);

    // Middleman savings (30% typical agency markup)
    const typicalAgencyPrice = Math.round(estimatedTotal * 1.35);
    const clientSavings = typicalAgencyPrice - estimatedTotal;

    return {
      estimatedTotal,
      typicalAgencyPrice,
      clientSavings,
      breakdown: {
        stageAndMandap,
        floralDecor,
        ambientLighting,
        entranceAndPassage,
        tableAndLounge
      }
    };
  }, [functions, styleVibe, venueType, guestCount, floralDensity]);

  const formatInr = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const selectedFunctionsCount = Object.values(functions).filter(Boolean).length;

  const handleShareWhatsApp = () => {
    const selectedList = Object.entries(functions)
      .filter(([_, v]) => v)
      .map(([k]) => k.toUpperCase())
      .join(', ');

    const text = encodeURIComponent(
      `*${SAMAROH_CONFIG.SITE_NAME} — Wedding Decor Cost Estimate*\n\n` +
      `• *City:* ${activeCityObj.name}\n` +
      `• *Selected Functions:* ${selectedList || 'None selected'}\n` +
      `• *Aesthetic Vibe:* ${styleVibe.toUpperCase()}\n` +
      `• *Venue Type:* ${venueType.toUpperCase()}\n` +
      `• *Guests:* ${guestCount} Guests\n` +
      `• *Floral Density:* ${floralDensity.toUpperCase()}\n\n` +
      `*Estimated In-House Decor Cost:* ${formatInr(calculation.estimatedTotal)}\n` +
      `*Estimated Savings vs Middleman Agencies:* ${formatInr(calculation.clientSavings)}\n\n` +
      `Please connect me with a senior designer for 3D layout renders.`
    );
    window.open(`https://wa.me/${SAMAROH_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  const handleBookWithSpecs = () => {
    const brief = `Decor Specs [${activeCityObj.name}]: ${selectedFunctionsCount} Functions (${Object.keys(functions).filter(k => functions[k]).join(', ')}), Style: ${styleVibe}, Venue: ${venueType}, Guests: ${guestCount}, Est: ${formatInr(calculation.estimatedTotal)}`;
    onOpenConsultation(brief);
  };

  return (
    <section id="calculator-section" className="py-20 lg:py-28 bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <Calculator className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              Interactive Design Estimator
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Calculate Your Wedding Decor Cost
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Select your ceremonies, aesthetic theme, and guest scale. Get an immediate itemized cost projection powered by our in-house fabrication benchmarks in {activeCityObj.name}.
          </p>
        </div>

        {/* Main Grid: Controls Left, Real-time Estimate Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form: 7 cols */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* 1. Select Ceremonies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E06D53] text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>Select Wedding Functions Required</span>
                </label>
                <span className="text-xs text-stone-400">{selectedFunctionsCount} Selected</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { key: 'haldi', label: 'Haldi Ceremony', tag: 'From ₹1.4L' },
                  { key: 'mehendi', label: 'Mehendi Day', tag: 'From ₹1.6L' },
                  { key: 'sangeet', label: 'Sangeet Night', tag: 'From ₹2.8L' },
                  { key: 'wedding', label: 'Muhurtham / Vows', tag: 'From ₹3.2L' },
                  { key: 'reception', label: 'Grand Reception', tag: 'From ₹3.4L' }
                ].map(item => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleToggleFunction(item.key)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      functions[item.key]
                        ? 'bg-[#E06D53]/15 border-[#E06D53] text-white font-semibold'
                        : 'bg-stone-850 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs">{item.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        functions[item.key] ? 'border-[#E06D53] bg-[#E06D53]' : 'border-stone-600'
                      }`}>
                        {functions[item.key] && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-500 mt-2 block">{item.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Aesthetic Vibe */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E06D53] text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Choose Your Preferred Aesthetic Vibe</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'traditional', label: 'Royal Traditional', desc: 'Temple & Marigold' },
                  { id: 'contemporary', label: 'Modern Pastel', desc: 'Hydrangea & Peony' },
                  { id: 'glam_mirror', label: 'Starlit Mirror Glam', desc: 'Crystal & LEDs' },
                  { id: 'bohemian', label: 'Boho Botanical', desc: 'Pampas & Cane' }
                ].map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setStyleVibe(v.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      styleVibe === v.id
                        ? 'bg-[#E06D53]/20 border-[#E06D53] text-white font-bold'
                        : 'bg-stone-850 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span className="text-xs block">{v.label}</span>
                    <span className="text-[10px] text-stone-500 block mt-1">{v.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Venue Type */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E06D53] text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Venue Setting &amp; Environment</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'lawn', label: 'Open Lawn / Farm', note: 'Heavy truss & lighting' },
                  { id: 'ballroom', label: 'AC Banquet Hall', note: 'Indoor rigging friendly' },
                  { id: 'courtyard', label: 'Heritage Courtyard', note: 'Architectural accents' },
                  { id: 'beachfront', label: 'Beachfront Resort', note: 'Windproof structures' }
                ].map(vn => (
                  <button
                    key={vn.id}
                    type="button"
                    onClick={() => setVenueType(vn.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      venueType === vn.id
                        ? 'bg-[#E06D53]/20 border-[#E06D53] text-white font-bold'
                        : 'bg-stone-850 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span className="text-xs block">{vn.label}</span>
                    <span className="text-[10px] text-stone-500 block mt-1">{vn.note}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E06D53] text-white text-xs flex items-center justify-center font-bold">4</span>
                  <span>Estimated Guest Attendance</span>
                </label>
                <span className="text-sm font-bold text-[#E06D53]">{guestCount} Guests</span>
              </div>

              <input
                type="range"
                min="50"
                max="1200"
                step="50"
                value={guestCount}
                onChange={e => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#E06D53] bg-stone-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                <span>50 Guests</span>
                <span>300 Guests</span>
                <span>600 Guests</span>
                <span>1,200+ Guests</span>
              </div>
            </div>

            {/* 5. Floral Density */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E06D53] text-white text-xs flex items-center justify-center font-bold">5</span>
                <span>Floral Density Preference</span>
              </label>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'curated', label: 'Curated Elegance', note: 'Balanced floral & fabric' },
                  { id: 'lavish', label: 'Lavish Floral', note: 'Dense floral canopies' },
                  { id: 'ultra_luxe', label: 'Ultra Luxe Exotics', note: 'Imported hydrangeas & roses' }
                ].map(f => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFloralDensity(f.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      floralDensity === f.id
                        ? 'bg-[#E06D53]/20 border-[#E06D53] text-white font-bold'
                        : 'bg-stone-850 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <span className="text-xs block">{f.label}</span>
                    <span className="text-[10px] text-stone-500 block mt-1">{f.note}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Price Projection Card: 5 cols */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#1F1B19] border border-stone-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Header Box */}
              <div className="space-y-1 pb-5 border-b border-stone-800">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  In-House Production Rate
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Fraunces',serif] text-3xl sm:text-4xl font-bold text-white">
                    {formatInr(calculation.estimatedTotal)}
                  </span>
                  <span className="text-xs text-stone-400">est. total</span>
                </div>
                <p className="text-xs text-stone-400 font-light">
                  Includes full staging, lighting, structural fabrication &amp; floral installations for {selectedFunctionsCount} function(s).
                </p>
              </div>

              {/* In-House Savings Callout */}
              <div className="bg-emerald-950/40 border border-emerald-800/40 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="text-emerald-300 font-bold block">
                    You save ~{formatInr(calculation.clientSavings)}
                  </span>
                  <span className="text-stone-400 text-[11px]">
                    vs traditional agencies (based on zero 30% subcontractor markups)
                  </span>
                </div>
              </div>

              {/* Itemized Allocation */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-300 block">
                  Projected Line-Item Budget Allocation:
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-stone-800">
                    <span className="text-stone-400">Stages, Mandaps &amp; Structures (38%):</span>
                    <span className="font-semibold text-white">{formatInr(calculation.breakdown.stageAndMandap)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-800">
                    <span className="text-stone-400">Fresh Floral Installations (26%):</span>
                    <span className="font-semibold text-white">{formatInr(calculation.breakdown.floralDecor)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-800">
                    <span className="text-stone-400">Lighting, Trusses &amp; Special Effects (16%):</span>
                    <span className="font-semibold text-white">{formatInr(calculation.breakdown.ambientLighting)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-800">
                    <span className="text-stone-400">Passages, Tunnels &amp; Welcome Arches (12%):</span>
                    <span className="font-semibold text-white">{formatInr(calculation.breakdown.entranceAndPassage)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-stone-800">
                    <span className="text-stone-400">Table Centerpieces &amp; Lounge Accents (8%):</span>
                    <span className="font-semibold text-white">{formatInr(calculation.breakdown.tableAndLounge)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleBookWithSpecs}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock Estimate &amp; Get 3D Layout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShareWhatsApp}
                  className="w-full py-3 rounded-xl bg-stone-800 hover:bg-stone-750 border border-stone-700 text-stone-200 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Share Estimate on WhatsApp</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[10px] text-stone-500">
                  ⚡ Estimates include setup, teardown &amp; dedicated on-site production crew.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
