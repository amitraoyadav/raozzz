import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Crown, 
  ShieldCheck, 
  Award, 
  Search,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PSR_DESTINATIONS } from '../../data/psrWeddingsData';
import { PsrNavTab } from './PsrNavbar';

interface PsrHeroProps {
  onOpenConsultation: (initialDestination?: string) => void;
  onSelectTab: (tab: PsrNavTab) => void;
  onSelectDestination: (slug: string) => void;
}

export const PsrHero: React.FC<PsrHeroProps> = ({
  onOpenConsultation,
  onSelectTab,
  onSelectDestination
}) => {
  const [selectedDest, setSelectedDest] = useState('');
  const [guestCount, setGuestCount] = useState('150-300');
  const [weddingSeason, setWeddingSeason] = useState('Winter 2026/27');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDest) {
      onSelectDestination(selectedDest);
    } else {
      onSelectTab('destinations');
    }
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#150407] text-white overflow-hidden">
      {/* Background Editorial Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Destination Wedding in Rajasthan Palace"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Rich Multi-layered Gradient Overlay for High Contrast & Editorial Luxury */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120306]/95 via-[#1A0509]/80 to-[#120306]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120306] via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/40 backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-[#DFBE78]" />
            <span className="text-[#DFBE78] text-xs font-semibold uppercase tracking-wider">
              India’s Premier Destination Wedding & Venue Specialists
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Your Dream Destination Wedding,{' '}
            <span className="italic font-normal bg-gradient-to-r from-[#DFBE78] via-[#C5A059] to-[#EBD29B] bg-clip-text text-transparent">
              Perfecty Planned
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light max-w-2xl">
            From the shimmering waters of Udaipur’s island palaces and the regal sandstone ramparts of Jaipur to sunset beachfront vows in South Goa, <strong>{siteConfig.SITE_NAME}</strong> orchestrates every detail with open-book financial transparency and white-glove hospitality.
          </p>

          {/* Primary CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="px-7 py-4 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-[#1A0509]" />
              <span>{siteConfig.PRIMARY_CTA}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectTab('destinations')}
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs uppercase tracking-widest backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{siteConfig.SECONDARY_CTA}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectTab('calculator')}
              className="px-5 py-4 rounded-full bg-[#4A0E17]/60 hover:bg-[#4A0E17] border border-[#C5A059]/40 text-[#DFBE78] font-semibold text-xs uppercase tracking-widest backdrop-blur-md transition-all cursor-pointer"
            >
              Calculate Budget
            </button>
          </div>

          {/* Quick Destination Search Box (Integrated Card) */}
          <div className="pt-6">
            <form 
              onSubmit={handleQuickSearch}
              className="bg-[#1A0509]/90 backdrop-blur-lg border border-[#C5A059]/35 rounded-2xl p-3 sm:p-4 shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs"
            >
              {/* Destination Dropdown */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#DFBE78] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Destination</span>
                </label>
                <select
                  value={selectedDest}
                  onChange={e => setSelectedDest(e.target.value)}
                  className="w-full bg-[#120306] border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-[#DFBE78]"
                >
                  <option value="">Any Royal Destination</option>
                  {PSR_DESTINATIONS.map(d => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} ({d.vibe.split(' ')[0]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Count */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#DFBE78] flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>Guests</span>
                </label>
                <select
                  value={guestCount}
                  onChange={e => setGuestCount(e.target.value)}
                  className="w-full bg-[#120306] border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-[#DFBE78]"
                >
                  <option value="50-150">50 - 150 (Intimate Buyout)</option>
                  <option value="150-300">150 - 300 (Classic Royal)</option>
                  <option value="300-600">300 - 600 (Grand Celebration)</option>
                  <option value="600+">600+ (Monumental Palatial)</option>
                </select>
              </div>

              {/* Season */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-[#DFBE78] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Target Season</span>
                </label>
                <select
                  value={weddingSeason}
                  onChange={e => setWeddingSeason(e.target.value)}
                  className="w-full bg-[#120306] border border-stone-700 rounded-lg px-3 py-2 text-white focus:outline-hidden focus:border-[#DFBE78]"
                >
                  <option value="Winter 2026/27">Winter 2026/27 (Peak)</option>
                  <option value="Spring 2027">Spring 2027 (Feb-Apr)</option>
                  <option value="Autumn 2027">Autumn 2027 (Oct-Nov)</option>
                  <option value="Monsoon / Summer">Off-Peak (Privileged Rates)</option>
                </select>
              </div>

              {/* Search Submit */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full h-[38px] rounded-lg bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Find Venues</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Floating Trust Metrics Row */}
        <div className="mt-14 pt-8 border-t border-[#C5A059]/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-black text-[#DFBE78] block">
              12+ Years
            </span>
            <span className="text-xs text-stone-300 font-medium">Of Destination Excellence</span>
          </div>
          <div className="space-y-1">
            <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-black text-[#DFBE78] block">
              380+ Weddings
            </span>
            <span className="text-xs text-stone-300 font-medium">Flawlessly Orchestrated</span>
          </div>
          <div className="space-y-1">
            <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-black text-[#DFBE78] block">
              140+ Venues
            </span>
            <span className="text-xs text-stone-300 font-medium">Privileged Partner Rates</span>
          </div>
          <div className="space-y-1">
            <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-black text-[#DFBE78] block">
              100% Open Book
            </span>
            <span className="text-xs text-stone-300 font-medium">Zero Hidden Markups</span>
          </div>
        </div>
      </div>
    </section>
  );
};
