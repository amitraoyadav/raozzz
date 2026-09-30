import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Phone, Mail, MapPin, ShieldCheck, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import './tourTravel2.css';
import { ALL_PACKAGES, REGIONS, DESTINATION_CHIPS, THEMES } from './data/packagesData';

export const TourTravel2App: React.FC = () => {
  const { setActiveView } = useApp();
  const [activeTab, setActiveTab] = useState<'home' | 'tours' | 'places' | 'blogs' | 'contact'>('home');

  return (
    <div className="tt2-wrapper min-h-screen flex flex-col">
      {/* 1. Isolation: Back to Portfolio Bar */}
      <div className="bg-[#07111E] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <Compass className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>VenturePulse Holidays · 11 Regions & 55+ Verified Packages</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-bold">
              Demo Website
            </span>
            <span className="text-slate-400">Data Stage Verified</span>
          </div>
        </div>
      </div>

      {/* Scaffold Placeholder for Stage 1 */}
      <div className="p-8 max-w-5xl mx-auto text-center my-auto py-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#FF6B35] font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Stage 1 Completed: Comprehensive Data Model & Packages Registry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0A192F] tracking-tight">
          VenturePulse Holidays
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          The complete data structure has been built with <strong>{ALL_PACKAGES.length} packages across {REGIONS.length} regions</strong> (Sikkim, Himachal, Kashmir, Andaman, Kerala, Spiti, Bhutan, Leh Ladakh, Thailand, Uttarakhand, Rajasthan), destination chips, country cards, season picks, and verified sample blogs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left pt-6">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 uppercase font-bold">Total Packages</span>
            <p className="text-2xl font-black text-[#0A192F] mt-1">{ALL_PACKAGES.length}</p>
            <span className="text-[11px] text-emerald-600 font-semibold">5 per each of 11 regions</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 uppercase font-bold">Active Regions</span>
            <p className="text-2xl font-black text-[#0A192F] mt-1">{REGIONS.length}</p>
            <span className="text-[11px] text-indigo-600 font-semibold">Domestic + International</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 uppercase font-bold">Destination Chips</span>
            <p className="text-2xl font-black text-[#0A192F] mt-1">{DESTINATION_CHIPS.length}</p>
            <span className="text-[11px] text-amber-600 font-semibold">Popular, Int'l & Trending</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 uppercase font-bold">Travel Themes</span>
            <p className="text-2xl font-black text-[#0A192F] mt-1">{THEMES.length}</p>
            <span className="text-[11px] text-rose-600 font-semibold">Honeymoon, Group, Solo...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
