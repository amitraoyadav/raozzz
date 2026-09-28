import React, { useState, useEffect } from 'react';
import {
  Building2,
  MapPin,
  Bed,
  Maximize2,
  Calendar,
  Phone,
  MessageSquare,
  Heart,
  Share2,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Filter,
  UserCheck,
  Sparkles,
  ExternalLink,
  Award,
  Layers,
  FileText,
  Clock
} from 'lucide-react';
import { RealEstateProperty } from '../../types';
import { REAL_ESTATE_PROPERTIES, REAL_ESTATE_AGENT } from '../../data/realEstateProperties';

const SESSION_SHORTLIST_KEY = 'raositez_shortlisted_property_ids';

export const RealEstatePropertyExplorer: React.FC<{ onBackToSite?: () => void }> = ({ onBackToSite }) => {
  // Navigation within property portal: 'listings' | 'detail' | 'agent' | 'shortlist'
  const [view, setView] = useState<'listings' | 'detail' | 'agent' | 'shortlist'>('listings');
  const [selectedProperty, setSelectedProperty] = useState<RealEstateProperty>(REAL_ESTATE_PROPERTIES[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Shortlist in sessionStorage (no login needed)
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(() => {
    try {
      const stored = sessionStorage.getItem(SESSION_SHORTLIST_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleShortlist = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setShortlistedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        sessionStorage.setItem(SESSION_SHORTLIST_KEY, JSON.stringify(updated));
      } catch (err) {
        console.warn('Could not save shortlist to sessionStorage', err);
      }
      return updated;
    });
  };

  // Filters state
  const [filterType, setFilterType] = useState<string>('all');
  const [filterBudget, setFilterBudget] = useState<string>('all');
  const [filterBhk, setFilterBhk] = useState<string>('all');
  const [filterLocation, setFilterLocation] = useState<string>('all');

  // EMI Calculator state
  const [loanAmount, setLoanAmount] = useState<number>(selectedProperty.price * 0.8);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  // Update loan amount when property changes
  useEffect(() => {
    setLoanAmount(Math.round(selectedProperty.price * 0.8));
    setActiveImageIndex(0);
  }, [selectedProperty]);

  // Calculate EMI
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const monthlyEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayable = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayable - loanAmount);

  // Site visit booking form state
  const [visitName, setVisitName] = useState('');
  const [visitPhone, setVisitPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [visitSlot, setVisitSlot] = useState('11:00 AM - 1:00 PM');
  const [cabRequired, setCabRequired] = useState(true);
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSubmitted(true);
    // WhatsApp direct trigger
    const cleanPhone = REAL_ESTATE_AGENT.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${REAL_ESTATE_AGENT.name}, I want to schedule a site visit for "${selectedProperty.title}" (${selectedProperty.priceFormatted}).\nName: ${visitName}\nPhone: ${visitPhone}\nDate: ${visitDate}\nSlot: ${visitSlot}\nAC Cab Required: ${cabRequired ? 'Yes, please arrange doorstep cab' : 'No, self-drive'}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  // Filter listings
  const filteredProperties = REAL_ESTATE_PROPERTIES.filter(prop => {
    if (filterType !== 'all' && prop.propertyType !== filterType) return false;
    if (filterBhk !== 'all' && prop.bhk !== filterBhk) return false;
    if (filterLocation !== 'all' && !prop.location.toLowerCase().includes(filterLocation.toLowerCase())) return false;
    if (filterBudget === 'under1cr' && prop.price >= 10000000) return false;
    if (filterBudget === '1to2.5cr' && (prop.price < 10000000 || prop.price > 25000000)) return false;
    if (filterBudget === '2.5to5cr' && (prop.price < 25000000 || prop.price > 50000000)) return false;
    if (filterBudget === 'above5cr' && prop.price <= 50000000) return false;
    return true;
  });

  const shortlistedProperties = REAL_ESTATE_PROPERTIES.filter(p => shortlistedIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E7F0] px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            {onBackToSite && (
              <button
                onClick={onBackToSite}
                className="min-h-[36px] min-w-[36px] p-1.5 rounded-lg border border-[#E8E7F0] hover:bg-white text-xs font-semibold text-[#474B64] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                title="Back to Agent Demo Website"
                aria-label="Back to main site"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden md:inline">Main Site</span>
              </button>
            )}
            <button
              onClick={() => setView('listings')}
              className="text-left group cursor-pointer"
            >
              <span className="text-base sm:text-xl font-black text-[#14162B] font-['Fraunces'] flex items-center gap-1.5">
                <Building2 className="w-5 h-5 text-[#4338CA] shrink-0" />
                <span>Prime Spaces</span>
                <span className="hidden sm:inline text-xs px-2 py-0.5 rounded-md bg-[#4338CA]/10 text-[#4338CA] font-['Inter'] font-bold">RERA Portal</span>
              </span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setView('listings')}
              className={`min-h-[36px] px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
                view === 'listings' ? 'bg-[#14162B] text-white' : 'text-[#474B64] hover:bg-white'
              }`}
            >
              Listings ({REAL_ESTATE_PROPERTIES.length})
            </button>
            <button
              onClick={() => setView('agent')}
              className={`min-h-[36px] px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
                view === 'agent' ? 'bg-[#14162B] text-white' : 'text-[#474B64] hover:bg-white'
              }`}
            >
              Agent
            </button>
            <button
              onClick={() => setView('shortlist')}
              className={`min-h-[36px] relative px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1 shrink-0 ${
                view === 'shortlist' ? 'bg-[#14162B] text-white' : 'text-[#474B64] hover:bg-white border border-[#E8E7F0]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${shortlistedIds.length > 0 ? 'text-[#FF6B4A] fill-[#FF6B4A]' : ''}`} />
              <span>Saved</span>
              {shortlistedIds.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#FF6B4A] text-white text-[10px] flex items-center justify-center font-bold">
                  {shortlistedIds.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* VIEW: AGENT PROFILE */}
      {view === 'agent' && (
        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <button
            onClick={() => setView('listings')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338CA] hover:underline mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Properties
          </button>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E7F0] shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-[#E8E7F0]">
              <img
                src={REAL_ESTATE_AGENT.avatarUrl}
                alt={REAL_ESTATE_AGENT.name}
                className="w-28 h-28 rounded-2xl object-cover shadow-md border-2 border-white ring-1 ring-[#E8E7F0]"
              />
              <div className="text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified RERA Regd. Broker
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#14162B] font-['Fraunces']">
                  {REAL_ESTATE_AGENT.name}
                </h1>
                <p className="text-xs sm:text-sm text-[#474B64] font-medium mt-1">
                  Senior Real Estate Partners · {REAL_ESTATE_AGENT.agency}
                </p>
                <p className="text-xs text-[#8E92A8] font-mono mt-0.5">
                  RERA Reg: {REAL_ESTATE_AGENT.reraRegNo}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-[#14162B]">
                  <div className="bg-[#FAFAF8] px-3 py-1.5 rounded-xl border border-[#E8E7F0]">
                    <span className="text-[#4338CA] font-bold">{REAL_ESTATE_AGENT.experienceYears}+ Years</span> Experience
                  </div>
                  <div className="bg-[#FAFAF8] px-3 py-1.5 rounded-xl border border-[#E8E7F0]">
                    <span className="text-[#4338CA] font-bold">{REAL_ESTATE_AGENT.dealsClosed}+</span> Happy Families
                  </div>
                  <div className="bg-[#FAFAF8] px-3 py-1.5 rounded-xl border border-[#E8E7F0]">
                    ★ <span className="font-bold">{REAL_ESTATE_AGENT.rating}/5</span> Client Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <h3 className="text-sm font-bold text-[#14162B] uppercase tracking-wider font-['Fraunces']">
                About The Advisors
              </h3>
              <p className="text-xs sm:text-sm text-[#474B64] leading-relaxed">
                {REAL_ESTATE_AGENT.bio}
              </p>

              <h3 className="text-sm font-bold text-[#14162B] uppercase tracking-wider font-['Fraunces'] pt-2">
                Core Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#474B64]">
                {REAL_ESTATE_AGENT.specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E8E7F0] flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${REAL_ESTATE_AGENT.phone}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#14162B] text-white text-xs font-bold text-center hover:bg-[#232742] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Directly ({REAL_ESTATE_AGENT.phone})
                </a>
                <a
                  href={`https://wa.me/${REAL_ESTATE_AGENT.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prime%20Spaces,%20I%20want%20to%20consult%20regarding%20luxury%20properties%20in%20Gurugram`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* VIEW: SHORTLIST */}
      {view === 'shortlist' && (
        <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <button
                onClick={() => setView('listings')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338CA] hover:underline mb-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to All Listings
              </button>
              <h1 className="text-2xl sm:text-3xl font-black text-[#14162B] font-['Fraunces']">
                Your Saved Properties ({shortlistedProperties.length})
              </h1>
              <p className="text-xs text-[#474B64] mt-1">
                Saved during this browser session. No login or password required.
              </p>
            </div>

            {shortlistedProperties.length > 0 && (
              <a
                href={`https://wa.me/${REAL_ESTATE_AGENT.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Prime%20Spaces,%20here%20is%20my%20saved%20shortlist:%0A${encodeURIComponent(
                  shortlistedProperties.map(p => `• ${p.title} (${p.priceFormatted})`).join('\n')
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp My Shortlist to Broker
              </a>
            )}
          </div>

          {shortlistedProperties.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E7F0] p-8 max-w-md mx-auto">
              <Heart className="w-12 h-12 text-[#8E92A8] mx-auto mb-3 stroke-[1.5]" />
              <h3 className="text-base font-bold text-[#14162B] font-['Fraunces']">No Properties Saved Yet</h3>
              <p className="text-xs text-[#474B64] mt-1 mb-6">
                Click the heart icon on any property to save it here and compare them side by side.
              </p>
              <button
                onClick={() => setView('listings')}
                className="px-5 py-2.5 bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Browse Available Properties
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortlistedProperties.map(prop => (
                <div
                  key={prop.id}
                  onClick={() => {
                    setSelectedProperty(prop);
                    setView('detail');
                  }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8E7F0] shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={(e) => toggleShortlist(prop.id, e)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#FF6B4A] hover:scale-110 transition-transform shadow-xs"
                    >
                      <Heart className="w-4 h-4 fill-[#FF6B4A]" />
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-lg font-bold text-[#14162B] font-mono-price block">
                        {prop.priceFormatted}
                      </span>
                      <h4 className="text-xs font-bold text-[#14162B] mt-1 line-clamp-1">
                        {prop.title}
                      </h4>
                      <p className="text-[11px] text-[#474B64] mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#8E92A8]" />
                        {prop.location}, {prop.city}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#E8E7F0] mt-3 flex items-center justify-between text-xs">
                      <span className="text-[#8E92A8]">{prop.areaSqFt} sq.ft</span>
                      <span className="text-[#4338CA] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        View Details <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* VIEW: PROPERTY DETAIL */}
      {view === 'detail' && (
        <main className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#474B64] mb-6">
            <button
              onClick={() => setView('listings')}
              className="text-[#4338CA] hover:underline font-semibold cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All Listings
            </button>
            <span>/</span>
            <span>{selectedProperty.propertyType}</span>
            <span>/</span>
            <span className="text-[#14162B] font-bold truncate max-w-xs">{selectedProperty.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Photos, Info, Amenities, Floor plan, EMI Calculator */}
            <div className="lg:col-span-2 space-y-8">
              {/* Photo Carousel & Main Viewer */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#E8E7F0] shadow-sm">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-900 group">
                  <img
                    src={selectedProperty.images[activeImageIndex] || selectedProperty.images[0]}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Prev / Next controls */}
                  {selectedProperty.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveImageIndex(prev =>
                            prev === 0 ? selectedProperty.images.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setActiveImageIndex(prev =>
                            prev === selectedProperty.images.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  {/* Shortlist button */}
                  <button
                    onClick={() => toggleShortlist(selectedProperty.id)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-xs text-[#FF6B4A] hover:scale-110 transition-transform shadow-md cursor-pointer"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        shortlistedIds.includes(selectedProperty.id) ? 'fill-[#FF6B4A]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Thumbnails */}
                {selectedProperty.images.length > 1 && (
                  <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1">
                    {selectedProperty.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                          activeImageIndex === idx ? 'border-[#4338CA] shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Core Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E7F0]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#4338CA]/10 text-[#4338CA] text-[11px] font-bold">
                        {selectedProperty.propertyType}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                        {selectedProperty.status}
                      </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-[#14162B] font-['Fraunces'] leading-tight">
                      {selectedProperty.title}
                    </h1>
                    <p className="text-xs sm:text-sm text-[#474B64] flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#4338CA] shrink-0" />
                      {selectedProperty.location}, {selectedProperty.city}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-xs text-[#8E92A8] font-medium block">Guide Price</span>
                    <span className="text-3xl sm:text-4xl font-black text-[#14162B] font-mono-price tracking-tight">
                      {selectedProperty.priceFormatted}
                    </span>
                    <span className="text-[11px] text-[#474B64] block mt-0.5">
                      ₹{Math.round(selectedProperty.price / selectedProperty.areaSqFt).toLocaleString('en-IN')}/sq.ft
                    </span>
                  </div>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E8E7F0]">
                    <span className="text-[11px] text-[#8E92A8] block">Configuration</span>
                    <span className="text-sm font-bold text-[#14162B]">{selectedProperty.bhk}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E8E7F0]">
                    <span className="text-[11px] text-[#8E92A8] block">Super Area</span>
                    <span className="text-sm font-bold text-[#14162B]">{selectedProperty.areaSqFt} Sq.Ft</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E8E7F0]">
                    <span className="text-[11px] text-[#8E92A8] block">Possession</span>
                    <span className="text-sm font-bold text-[#14162B]">{selectedProperty.status}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-[#E8E7F0]">
                    <span className="text-[11px] text-[#8E92A8] block">Brokerage</span>
                    <span className="text-sm font-bold text-emerald-600">ZERO (0%)</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-bold text-[#14162B] uppercase tracking-wider font-['Fraunces'] mb-2">
                    Property Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-[#474B64] leading-relaxed">
                    {selectedProperty.description}
                  </p>
                  <p className="text-xs text-[#8E92A8] font-mono mt-3">
                    RERA Reg: {selectedProperty.reraNumber}
                  </p>
                </div>

                {/* Amenities Checklist */}
                <div>
                  <h3 className="text-sm font-bold text-[#14162B] uppercase tracking-wider font-['Fraunces'] mb-3">
                    Amenities & Lifestyle Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#14162B]">
                    {selectedProperty.amenities.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-[#FAFAF8] border border-[#E8E7F0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floor Plan Placeholder */}
                <div>
                  <h3 className="text-sm font-bold text-[#14162B] uppercase tracking-wider font-['Fraunces'] mb-2">
                    Architectural Floor Plan
                  </h3>
                  <div className="relative rounded-2xl border border-dashed border-[#8E92A8]/40 bg-[#FAFAF8] p-6 text-center">
                    <img
                      src={selectedProperty.floorPlanUrl}
                      alt="Floor plan preview"
                      className="max-h-56 mx-auto rounded-xl object-contain opacity-90"
                    />
                    <p className="text-xs text-[#8E92A8] mt-3">
                      Sanctioned RERA layout drawing · Exact room dimensions available during site visit
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive EMI Calculator Widget */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm">
                <div className="flex items-center gap-2 pb-4 border-b border-[#E8E7F0] mb-6">
                  <Calculator className="w-5 h-5 text-[#4338CA]" />
                  <h3 className="text-lg font-bold text-[#14162B] font-['Fraunces']">
                    Interactive Home Loan EMI Calculator
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    {/* Loan Amount Slider */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-[#474B64]">Loan Amount</span>
                        <span className="font-mono-price text-[#14162B] font-bold">
                          ₹{(loanAmount / 100000).toFixed(1)} Lakhs
                        </span>
                      </div>
                      <input
                        type="range"
                        min={1000000}
                        max={selectedProperty.price}
                        step={100000}
                        value={loanAmount}
                        onChange={e => setLoanAmount(Number(e.target.value))}
                        className="w-full accent-[#4338CA]"
                      />
                      <div className="flex justify-between text-[10px] text-[#8E92A8] mt-0.5">
                        <span>₹10L</span>
                        <span>₹{(selectedProperty.price / 10000000).toFixed(1)} Cr</span>
                      </div>
                    </div>

                    {/* Interest Rate Slider */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-[#474B64]">Interest Rate (% p.a.)</span>
                        <span className="font-mono-price text-[#14162B] font-bold">{interestRate}%</span>
                      </div>
                      <input
                        type="range"
                        min={7.0}
                        max={12.0}
                        step={0.1}
                        value={interestRate}
                        onChange={e => setInterestRate(Number(e.target.value))}
                        className="w-full accent-[#4338CA]"
                      />
                      <div className="flex justify-between text-[10px] text-[#8E92A8] mt-0.5">
                        <span>7.0% (SBI / HDFC Base)</span>
                        <span>12.0%</span>
                      </div>
                    </div>

                    {/* Loan Tenure Slider */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-[#474B64]">Loan Tenure</span>
                        <span className="font-mono-price text-[#14162B] font-bold">{tenureYears} Years</span>
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={30}
                        step={1}
                        value={tenureYears}
                        onChange={e => setTenureYears(Number(e.target.value))}
                        className="w-full accent-[#4338CA]"
                      />
                      <div className="flex justify-between text-[10px] text-[#8E92A8] mt-0.5">
                        <span>5 Yrs</span>
                        <span>30 Yrs</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Results Card */}
                  <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E7F0] flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-[#8E92A8] font-medium uppercase tracking-wider block">
                        Estimated Monthly EMI
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#4338CA] font-mono-price mt-1 block">
                        ₹{monthlyEmi.toLocaleString('en-IN')}
                      </span>
                      <p className="text-[11px] text-[#636882] mt-1">
                        Indicative for Tier-1 banks (HDFC, SBI, ICICI) with zero pre-payment penalty.
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[#E8E7F0] text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#636882]">Principal Loan:</span>
                        <span className="font-mono-price font-semibold">₹{loanAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#636882]">Total Interest:</span>
                        <span className="font-mono-price font-semibold text-[#c2410c]">₹{totalInterest.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#14162B] pt-1 border-t border-[#E8E7F0]">
                        <span>Total Payable:</span>
                        <span className="font-mono-price">₹{totalPayable.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Schedule a Site Visit Form & Agent Badge */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm sticky top-20">
                <div className="pb-4 border-b border-[#E8E7F0] mb-5">
                  <span className="px-2 py-0.5 rounded bg-[#FF6B4A]/10 text-[#FF6B4A] text-[10px] font-bold uppercase tracking-wider">
                    Zero Brokerage Visit
                  </span>
                  <h3 className="text-xl font-black text-[#14162B] font-['Fraunces'] mt-1">
                    Schedule a Site Visit
                  </h3>
                  <p className="text-xs text-[#474B64] mt-0.5">
                    Direct developer inspection with free AC cab pickup & drop.
                  </p>
                </div>

                {visitSubmitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#14162B] font-['Fraunces']">
                      Visit Request Sent!
                    </h4>
                    <p className="text-xs text-[#474B64]">
                      Our advisor {REAL_ESTATE_AGENT.name} will coordinate your site pass and driver details via WhatsApp.
                    </p>
                    <button
                      onClick={() => setVisitSubmitted(false)}
                      className="text-xs font-semibold text-[#4338CA] hover:underline cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleScheduleVisit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-[#14162B] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Malhotra"
                        value={visitName}
                        onChange={e => setVisitName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7F0] focus:ring-2 focus:ring-[#4338CA] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#14162B] mb-1">Phone Number (with WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={visitPhone}
                        onChange={e => setVisitPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E7F0] focus:ring-2 focus:ring-[#4338CA] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-[#14162B] mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={visitDate}
                          onChange={e => setVisitDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-[#E8E7F0] focus:ring-2 focus:ring-[#4338CA] focus:outline-none text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#14162B] mb-1">Time Slot</label>
                        <select
                          value={visitSlot}
                          onChange={e => setVisitSlot(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-[#E8E7F0] focus:ring-2 focus:ring-[#4338CA] focus:outline-none text-xs bg-white"
                        >
                          <option>10:00 AM - 12:00 PM</option>
                          <option>12:00 PM - 2:00 PM</option>
                          <option>2:00 PM - 4:00 PM</option>
                          <option>4:00 PM - 6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFAF8] border border-[#E8E7F0] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cabRequired}
                        onChange={e => setCabRequired(e.target.checked)}
                        className="w-4 h-4 accent-[#FF6B4A] rounded"
                      />
                      <span className="text-[11px] text-[#474B64]">
                        Need complimentary AC cab pickup from home / metro station
                      </span>
                    </label>

                    {/* Coral Conversion Button */}
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Schedule Site Visit
                    </button>

                    <p className="text-[10px] text-center text-[#8E92A8]">
                      🔒 100% Privacy. Zero broker spam. Verified developer inventory.
                    </p>
                  </form>
                )}

                {/* Assigned Agent Box */}
                <div className="mt-6 pt-5 border-t border-[#E8E7F0] flex items-center gap-3">
                  <img
                    src={REAL_ESTATE_AGENT.avatarUrl}
                    alt={selectedProperty.agentName}
                    className="w-11 h-11 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[#8E92A8] uppercase font-bold block">
                      Dedicated Advisor
                    </span>
                    <span className="text-xs font-bold text-[#14162B] truncate block">
                      {selectedProperty.agentName}
                    </span>
                    <span className="text-[11px] text-[#474B64] font-mono">
                      {selectedProperty.agentPhone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* VIEW: LISTINGS GRID WITH FILTERS */}
      {view === 'listings' && (
        <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          {/* Hero Banner */}
          <div className="mb-8 bg-gradient-to-r from-[#14162B] to-[#232742] text-white rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B4A]/20 text-[#FF6B4A] text-xs font-bold mb-3 border border-[#FF6B4A]/30">
                <Award className="w-3.5 h-3.5" /> RERA-Registered Luxury Inventory
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-['Fraunces'] leading-tight">
                Verified Homes & Commercial Floors in Gurugram
              </h1>
              <p className="text-xs sm:text-sm text-[#D5D4E3] mt-2 leading-relaxed">
                Direct builder pricing from DLF, M3M, Godrej, and SmartWorld on Golf Course Ext. & Dwarka Expressway. Zero brokerage on fresh inventory with complimentary site cab tours.
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E7F0] shadow-sm mb-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#14162B]">
              <Filter className="w-3.5 h-3.5 text-[#4338CA]" />
              <span>Filter Properties:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {/* Type */}
              <div>
                <label className="block text-[11px] text-[#636882] mb-1 font-medium">Property Type</label>
                <select
                  value={filterType}
                  onChange={e => setFilterType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E7F0] bg-white text-xs focus:ring-2 focus:ring-[#4338CA] focus:outline-none"
                >
                  <option value="all">All Types</option>
                  <option value="Luxury Apartment">Luxury Apartment</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Independent Villa">Independent Villa</option>
                  <option value="High-Street Retail">High-Street Retail</option>
                  <option value="Commercial Office">Commercial Office</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[11px] text-[#636882] mb-1 font-medium">Budget Range</label>
                <select
                  value={filterBudget}
                  onChange={e => setFilterBudget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E7F0] bg-white text-xs focus:ring-2 focus:ring-[#4338CA] focus:outline-none"
                >
                  <option value="all">All Budgets</option>
                  <option value="under1cr">Under ₹1 Crore</option>
                  <option value="1to2.5cr">₹1 Cr – ₹2.5 Cr</option>
                  <option value="2.5to5cr">₹2.5 Cr – ₹5 Cr</option>
                  <option value="above5cr">Above ₹5 Crore</option>
                </select>
              </div>

              {/* BHK */}
              <div>
                <label className="block text-[11px] text-[#636882] mb-1 font-medium">BHK Configuration</label>
                <select
                  value={filterBhk}
                  onChange={e => setFilterBhk(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E7F0] bg-white text-xs focus:ring-2 focus:ring-[#4338CA] focus:outline-none"
                >
                  <option value="all">All BHKs</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] text-[#636882] mb-1 font-medium">Location Corridor</label>
                <select
                  value={filterLocation}
                  onChange={e => setFilterLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E7F0] bg-white text-xs focus:ring-2 focus:ring-[#4338CA] focus:outline-none"
                >
                  <option value="all">All Corridors</option>
                  <option value="golf course">Golf Course Ext. Road</option>
                  <option value="dwarka">Dwarka Expressway</option>
                  <option value="cyber">Cyber City</option>
                  <option value="sohna">Sohna Road</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(prop => (
              <div
                key={prop.id}
                onClick={() => {
                  setSelectedProperty(prop);
                  setView('detail');
                }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E7F0] shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all cursor-pointer group flex flex-col"
              >
                {/* Image Cover */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#14162B]/80 backdrop-blur-xs text-white text-[10px] font-bold">
                      {prop.propertyType}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold">
                      {prop.status}
                    </span>
                  </div>

                  {/* Shortlist Heart Button */}
                  <button
                    onClick={(e) => toggleShortlist(prop.id, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#FF6B4A] hover:scale-110 transition-transform shadow-xs cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 ${shortlistedIds.includes(prop.id) ? 'fill-[#FF6B4A]' : ''}`}
                    />
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-[#14162B] font-mono-price tracking-tight">
                        {prop.priceFormatted}
                      </span>
                      <span className="text-[11px] text-[#8E92A8] font-mono">
                        {prop.areaSqFt} sq.ft
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#14162B] mt-1 line-clamp-1 group-hover:text-[#4338CA] transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-[#474B64] flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[#8E92A8] shrink-0" />
                      {prop.location}, {prop.city}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E7F0] mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#8E92A8]">
                      {prop.bhk} · Zero Brokerage
                    </span>
                    <span className="text-xs font-bold text-[#4338CA] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Tour <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E7F0] p-8 max-w-md mx-auto">
              <Building2 className="w-12 h-12 text-[#8E92A8] mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#14162B] font-['Fraunces']">No Matching Properties</h3>
              <p className="text-xs text-[#474B64] mt-1 mb-4">
                Try widening your budget range or location filter to view more listings.
              </p>
              <button
                onClick={() => {
                  setFilterType('all');
                  setFilterBudget('all');
                  setFilterBhk('all');
                  setFilterLocation('all');
                }}
                className="px-4 py-2 bg-[#4338CA] text-white text-xs font-bold rounded-xl"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      )}
    </div>
  );
};
