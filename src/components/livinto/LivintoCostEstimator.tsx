import React, { useState } from 'react';
import {
  Calculator,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building,
  Home,
  Layers,
  ChevronRight,
  Phone,
  Mail,
  User,
  Calendar,
} from 'lucide-react';
import { LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

interface LivintoCostEstimatorProps {
  onOpenConsultation: () => void;
}

export const LivintoCostEstimator: React.FC<LivintoCostEstimatorProps> = ({ onOpenConsultation }) => {
  const [bhkType, setBhkType] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk_villa'>('2bhk');
  const [finishTier, setFinishTier] = useState<'essential' | 'premium' | 'luxury'>('premium');
  const [selectedScopes, setSelectedScopes] = useState<{ [key: string]: boolean }>({
    kitchen: true,
    wardrobes: true,
    living: true,
    dining: true,
    falseCeiling: false,
    wallPanelling: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(LIVINTO_CONFIG.cities[0]);

  const toggleScope = (key: string) => {
    setSelectedScopes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Base pricing matrix (in INR Lakhs)
  const BASE_PRICES: Record<string, { min: number; max: number }> = {
    '1bhk-essential': { min: 2.8, max: 3.5 },
    '1bhk-premium': { min: 3.6, max: 4.8 },
    '1bhk-luxury': { min: 4.9, max: 6.5 },
    '2bhk-essential': { min: 4.5, max: 5.6 },
    '2bhk-premium': { min: 5.8, max: 7.6 },
    '2bhk-luxury': { min: 7.9, max: 10.2 },
    '3bhk-essential': { min: 6.2, max: 7.8 },
    '3bhk-premium': { min: 7.9, max: 10.8 },
    '3bhk-luxury': { min: 11.2, max: 15.5 },
    '4bhk_villa-essential': { min: 9.5, max: 12.0 },
    '4bhk_villa-premium': { min: 12.5, max: 17.0 },
    '4bhk_villa-luxury': { min: 18.0, max: 26.0 },
  };

  const currentKey = `${bhkType}-${finishTier}`;
  const baseRange = BASE_PRICES[currentKey] || { min: 5.5, max: 7.5 };

  // Calculate scope multiplier
  let activeScopeCount = Object.values(selectedScopes).filter(Boolean).length;
  let multiplier = 0.5 + (activeScopeCount / 6) * 0.5;

  const minEstimated = (baseRange.min * multiplier).toFixed(1);
  const maxEstimated = (baseRange.max * multiplier).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 8) return;
    setFormSubmitted(true);
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/60 text-amber-300 text-xs font-bold uppercase tracking-wider border border-purple-700/50">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Estimate Your Home Interior Budget
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select your apartment size, preferred material finish, and woodwork scope to get an instant cost estimate backed by our 40-day delivery promise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-8">
            {/* 1. Select BHK Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>1. Select Home Type / BHK</span>
                <span className="text-amber-400 font-mono text-[11px]">Step 1 of 3</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: '1bhk', label: '1 BHK', desc: 'Compact Living' },
                  { id: '2bhk', label: '2 BHK', desc: 'Family Home' },
                  { id: '3bhk', label: '3 BHK', desc: 'Spacious Suite' },
                  { id: '4bhk_villa', label: '4 BHK / Villa', desc: 'Luxury Living' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBhkType(item.id as any)}
                    className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                      bhkType === item.id
                        ? 'bg-[#814882] border-amber-300/80 text-white shadow-lg'
                        : 'bg-slate-700/50 hover:bg-slate-700 border-slate-600/80 text-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-[11px] opacity-80 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Finish & Hardware Tier */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>2. Select Quality &amp; Finish Tier</span>
                <span className="text-amber-400 font-mono text-[11px]">Step 2 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'essential',
                    title: 'Essential',
                    badge: 'MR Grade + Matte',
                    desc: 'Durable matte laminates with standard soft-close hardware & 5-year warranty.',
                  },
                  {
                    id: 'premium',
                    title: 'Premium (Popular)',
                    badge: 'BWP 710 + Acrylic',
                    desc: 'Boiling waterproof marine ply, anti-scratch acrylics & Blum soft-close fittings.',
                  },
                  {
                    id: 'luxury',
                    title: 'Luxury Elegance',
                    badge: 'BWP + PU Lacquer',
                    desc: 'German lacquer / veneer, tinted profile glass shutters, Hafele sensory hardware.',
                  },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setFinishTier(tier.id as any)}
                    className={`p-4 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                      finishTier === tier.id
                        ? 'bg-[#814882] border-amber-300/80 text-white shadow-lg ring-2 ring-purple-400/30'
                        : 'bg-slate-700/50 hover:bg-slate-700 border-slate-600/80 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-sm">{tier.title}</span>
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 mb-2">
                        {tier.badge}
                      </span>
                      <p className="text-[11px] leading-relaxed opacity-85">
                        {tier.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Scope of Interior Work */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>3. Select Woodwork &amp; Interior Scope</span>
                <span className="text-amber-400 font-mono text-[11px]">Step 3 of 3</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { key: 'kitchen', label: 'Modular Kitchen (BWP)' },
                  { key: 'wardrobes', label: 'Bedrooms & Wardrobes' },
                  { key: 'living', label: 'Living Room TV Console' },
                  { key: 'dining', label: 'Dining & Crockery Unit' },
                  { key: 'falseCeiling', label: 'False Ceiling & Cove Lights' },
                  { key: 'wallPanelling', label: 'Fluted Wall Panelling' },
                ].map((scope) => (
                  <button
                    key={scope.key}
                    type="button"
                    onClick={() => toggleScope(scope.key)}
                    className={`p-3 rounded-xl text-left transition-all border flex items-center gap-2 cursor-pointer ${
                      selectedScopes[scope.key]
                        ? 'bg-purple-950/70 border-purple-400 text-white'
                        : 'bg-slate-700/30 hover:bg-slate-700/60 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        selectedScopes[scope.key]
                          ? 'bg-[#814882] border-amber-300 text-white'
                          : 'border-slate-600 bg-slate-800'
                      }`}
                    >
                      {selectedScopes[scope.key] && <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />}
                    </div>
                    <span className="text-xs font-medium truncate">{scope.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Instant Estimate Card & Lead Capture */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 rounded-3xl p-6 sm:p-8 border border-purple-800/40 shadow-2xl relative">
            <div className="space-y-6">
              <div className="border-b border-slate-700 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Estimated Project Investment
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    ₹{minEstimated} - ₹{maxEstimated}
                  </span>
                  <span className="text-base text-slate-400 font-bold">Lakhs*</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  *Indicative estimate based on {bhkType.toUpperCase().replace('_', ' ')} with{' '}
                  {finishTier} materials and {activeScopeCount} selected living zones.
                </p>
              </div>

              {/* Package Inclusions Highlights */}
              <div className="space-y-2.5 text-xs text-slate-300 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10 Years Written Warranty on Woodwork</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% In-House Factory Manufacturing (Homag CNC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>40 Working Days Handover Guarantee</span>
                </div>
              </div>

              {/* Form to Lock In This Estimate */}
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Lock This Estimate &amp; Get Detailed 3D Quote:
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-400 cursor-pointer"
                    >
                      {LIVINTO_CONFIG.cities.map((c) => (
                        <option key={c} value={c} className="bg-slate-900 text-white">
                          {c} Showroom
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#814882] to-[#a259a3] hover:from-[#6e3a6f] hover:to-[#8c4b8d] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Send Me Detailed Estimate PDF</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Zero spam. Our senior interior designer will share the itemized bill of materials on WhatsApp.
                  </p>
                </form>
              ) : (
                <div className="bg-emerald-950/80 border border-emerald-600/60 p-5 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    Estimate Sent to WhatsApp!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you, <strong className="text-white">{name || 'Homeowner'}</strong>. We have generated an estimated budget of <span className="text-amber-400 font-bold">₹{minEstimated} - ₹{maxEstimated} Lakhs</span> for your {bhkType.toUpperCase().replace('_', ' ')} in {city}.
                  </p>
                  <button
                    onClick={onOpenConsultation}
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors"
                  >
                    <span>Book In-Person Showroom Visit</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
