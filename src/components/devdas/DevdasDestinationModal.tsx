import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  Building,
  Users,
  Compass,
  X,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Heart,
  ChevronRight,
} from 'lucide-react';
import { DESTINATIONS_DATA, DestinationItem, DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasDestinationModalProps {
  slug: string | null;
  onClose: () => void;
  onOpenInquiry: (destinationName?: string) => void;
  onOpenCalculator: () => void;
}

export const DevdasDestinationModal: React.FC<DevdasDestinationModalProps> = ({
  slug,
  onClose,
  onOpenInquiry,
  onOpenCalculator,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'venues' | 'itinerary' | 'costs'>('overview');

  if (!slug) return null;

  const destination: DestinationItem | undefined = DESTINATIONS_DATA.find((d) => d.slug === slug);

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={destination.coverImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Destination Badges and Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider">
                {destination.stateOrCountry}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                {destination.vibe}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-300" />
                Best: {destination.bestSeason}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {destination.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl font-light">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 shrink-0 overflow-x-auto text-xs sm:text-sm font-semibold">
          {[
            { id: 'overview', label: 'Overview & Highlights' },
            { id: 'venues', label: `Curated Venues (${destination.venues.length})` },
            { id: 'itinerary', label: '3-Day Wedding Flow' },
            { id: 'costs', label: 'Cost Structure & Budget' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-3 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#7A1C30] text-[#7A1C30] font-bold'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed">
                <p>{destination.description}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-900/10">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Avg Guests</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-slate-900 mt-0.5">{destination.avgGuestCount}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Est. Budget</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-[#7A1C30] mt-0.5">{destination.estBudgetRange}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Ideal Season</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-slate-900 mt-0.5">{destination.bestSeason}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">On-Ground Team</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-emerald-700 mt-0.5">Permanent Hub</div>
                </div>
              </div>

              {/* Gallery Strip */}
              {destination.galleryImages && destination.galleryImages.length > 0 && (
                <div>
                  <h4 className="font-serif font-bold text-base text-slate-900 mb-3">Location Highlights</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {destination.galleryImages.map((img, i) => (
                      <div key={i} className="h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <img src={img} alt={`${destination.name} photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'venues' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Devdas Wedding holds verified commercial contracts and preferential group buyout agreements at these verified properties.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.venues.map((venue, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#7A1C30] hover:shadow-md transition-all flex gap-3.5">
                    <img src={venue.image} alt={venue.name} className="w-20 h-20 rounded-xl object-cover shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-serif font-bold text-sm text-slate-900">{venue.name}</div>
                      <div className="text-[11px] text-amber-900 font-medium px-2 py-0.5 rounded bg-amber-50 inline-block">{venue.type}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#7A1C30]" />
                        <span>Capacity: {venue.capacity}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-2">{venue.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                Recommended 3-day signature sequence planned and staged by Devdas Nuptial Artistes in {destination.name}.
              </p>
              <div className="space-y-4">
                {destination.itinerary.map((itin, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#7A1C30] text-white text-[11px] font-bold">
                        {itin.day}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-slate-900">{itin.title}</h4>
                    </div>
                    <ul className="space-y-1.5 pl-2">
                      {itin.events.map((ev, eIdx) => (
                        <li key={eIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1C30] shrink-0 mt-0.5" />
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'costs' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7A1C30]" />
                  <span>Devdas Transparent Budget Philosophy</span>
                </div>
                <p>
                  We operate on fixed planning fees with zero hotel kickbacks. All vendor invoices, room block contracts, and decor fabrication rates are billed directly at net cost with verified audit trails.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-sm text-slate-900 mb-2">Cost Parameters for {destination.name}</h4>
                <ul className="space-y-2">
                  {destination.costHighlights.map((hl, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-700 flex items-start gap-2 p-2 rounded-xl bg-slate-50">
                      <ChevronRight className="w-4 h-4 text-[#7A1C30] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need an itemized calculation for your guest count?</span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCalculator();
                  }}
                  className="text-xs font-bold text-[#7A1C30] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Launch Cost Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0 flex-wrap gap-3">
          <div className="text-xs text-slate-600">
            <span>Planning in </span>
            <strong className="text-slate-900">{destination.name}</strong>
            <span className="hidden sm:inline">? Speak with our resident nuptial director.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(destination.name);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-red-950/20 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Recce &amp; Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
