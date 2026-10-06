import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  ChevronDown,
  Search,
  Mic,
  Clock,
  Eye,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CITIES_LIST, WEALTH_PROPERTIES, WealthProperty } from '../../data/site82Data';
import { site82Config } from '../../config/site82Config';

interface Site82HeroSearchProps {
  onSearch: (filters: {
    city: string;
    propertyType: string;
    query: string;
  }) => void;
  onSelectProperty: (property: WealthProperty) => void;
  onViewAllProperties: () => void;
}

export const Site82HeroSearch: React.FC<Site82HeroSearchProps> = ({
  onSearch,
  onSelectProperty,
  onViewAllProperties
}) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [propertyType, setPropertyType] = useState('');
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [lastSearch, setLastSearch] = useState<string>(() => {
    return localStorage.getItem('wealth_last_search') || 'Orion One 32 in Sector 132, Noida';
  });

  const propertyTypesList = [
    'All Types',
    'Commercial Office Suites',
    'High-Street Retail Shops',
    'Residential 3 BHK Apartments',
    'Luxury 4/5 BHK Penthouses',
    'Residential Freehold Plots',
    'Serviced Studio Apartments'
  ];

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter autocomplete suggestions based on query
  const autocompleteSuggestions = WEALTH_PROPERTIES.filter((p) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.developer.toLowerCase().includes(q)
    );
  }).slice(0, 5);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setCityDropdownOpen(false);
    setTypeDropdownOpen(false);
    setSuggestionsOpen(false);

    const searchSummary = `${searchQuery || propertyType || 'Properties'} in ${selectedCity || 'All Cities'}`;
    setLastSearch(searchSummary);
    try {
      localStorage.setItem('wealth_last_search', searchSummary);
    } catch {}

    onSearch({
      city: selectedCity,
      propertyType,
      query: searchQuery
    });
  };

  // Voice search handler
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      try {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        setIsListening(true);
        recognition.start();

        recognition.onresult = (event: any) => {
          const speechResult = event.results[0][0].transcript;
          setSearchQuery(speechResult);
          setIsListening(false);
          onSearch({
            city: selectedCity,
            propertyType,
            query: speechResult
          });
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };
      } catch {
        setIsListening(false);
        setSearchQuery('Noida Expressway');
      }
    } else {
      // Fallback voice simulation
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        setSearchQuery('Commercial in Sector 132 Noida');
      }, 1500);
    }
  };

  // Recently viewed properties from top listings
  const recentlyViewed = WEALTH_PROPERTIES.slice(0, 4);

  return (
    <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-14 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,#fbd9c8_0%,transparent_55%),radial-gradient(ellipse_80%_60%_at_100%_0%,#fbd9c8_0%,transparent_55%),linear-gradient(180deg,#fdf1ea_0%,#fef7f2_35%,#fdeadd_50%,#ffffff_80%,#ffffff_100%)]">
      <div className="max-w-[1760px] mx-auto relative">
        {/* DESKTOP BANNER CONTAINER (aspect-ratio 5200 / 2532 on lg) */}
        <div className="hidden lg:block relative rounded-[28px] overflow-hidden w-full aspect-[5200/2532] shadow-2xl bg-neutral-900">
          {/* Background image & gradient overlay */}
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2600&q=85"
            alt="Modern Indian Luxury Architecture"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

          {/* Banner Tagline & Headlines */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 text-center text-white max-w-4xl px-4 z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono tracking-widest uppercase border border-white/30 text-amber-200 mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>100% Verified RERA-Approved Projects</span>
            </span>
            <h1 className="text-3xl xl:text-5xl font-extrabold tracking-tight drop-shadow-md font-sans">
              Smart Real Estate Advisory in Noida &amp; NCR
            </h1>
            <p className="text-sm xl:text-base text-neutral-200 font-light mt-2 max-w-2xl mx-auto drop-shadow">
              Zero Brokerage on Builder Bookings · 14+ Years of Trust · Free Escorted Site Visits
            </p>
          </div>

          {/* FLOATING GLASS / WHITE SEARCH PANEL */}
          <div
            ref={searchContainerRef}
            className="absolute top-[60%] xl:top-[63%] left-[14.7%] w-[70.6%] z-20"
          >
            <div className="w-full rounded-[24px] bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-visible">
              {/* Row 1: Search Form Inputs */}
              <div className="flex items-center gap-4 xl:gap-8 px-6 py-4 xl:py-5">
                {/* 1. Location / Select Your City */}
                <div className="flex-1 min-w-0 relative">
                  <div className="font-semibold text-neutral-900 text-sm xl:text-base mb-0.5">
                    Location
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      placeholder="Select Your City"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      onFocus={() => setCityDropdownOpen(true)}
                      className="text-xs xl:text-sm text-neutral-800 font-medium w-full bg-transparent border-none outline-none truncate"
                    />
                    <button
                      type="button"
                      onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                      className="p-1 hover:text-[#F54900] text-neutral-400 transition-colors cursor-pointer"
                      aria-label="Toggle city options"
                    >
                      <MapPin className="w-4 h-4" />
                    </button>
                  </div>

                  {/* City Dropdown */}
                  {cityDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl border border-orange-100 shadow-2xl p-2 z-50 animate-in fade-in duration-150">
                      {CITIES_LIST.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => {
                            setSelectedCity(c.name === 'All Cities' ? '' : c.name);
                            setCityDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-orange-50 hover:text-[#F54900] rounded-xl transition-colors cursor-pointer"
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-[1px] self-stretch bg-neutral-200" />

                {/* 2. Property Type */}
                <div className="flex-1 min-w-0 relative">
                  <div className="font-semibold text-neutral-900 text-sm xl:text-base mb-0.5">
                    Property Type
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      placeholder="Choose Property Type"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      onFocus={() => setTypeDropdownOpen(true)}
                      className="text-xs xl:text-sm text-neutral-800 font-medium w-full bg-transparent border-none outline-none truncate"
                    />
                    <button
                      type="button"
                      onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                      className="p-1 hover:text-[#F54900] text-neutral-400 transition-colors cursor-pointer"
                      aria-label="Toggle type options"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Type Dropdown */}
                  {typeDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl border border-orange-100 shadow-2xl p-2 z-50 animate-in fade-in duration-150">
                      {propertyTypesList.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setPropertyType(t === 'All Types' ? '' : t);
                            setTypeDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-orange-50 hover:text-[#F54900] rounded-xl transition-colors cursor-pointer"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-[1px] self-stretch bg-neutral-200" />

                {/* 3. Search Keyword */}
                <div className="flex-1 min-w-0 relative">
                  <div className="font-semibold text-neutral-900 text-sm xl:text-base mb-0.5">
                    Search
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search properties, projects..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSuggestionsOpen(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearchSubmit();
                      }}
                      className="text-xs xl:text-sm text-neutral-800 font-medium w-full bg-transparent border-none outline-none truncate"
                    />
                    <Search className="w-4 h-4 text-neutral-400 shrink-0" />
                  </div>

                  {/* Autocomplete Suggestions Dropdown */}
                  {suggestionsOpen && autocompleteSuggestions.length > 0 && (
                    <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl border border-orange-100 shadow-2xl p-2 z-50 animate-in fade-in duration-150">
                      {autocompleteSuggestions.map((prop) => (
                        <button
                          key={prop.id}
                          type="button"
                          onClick={() => {
                            setSuggestionsOpen(false);
                            onSelectProperty(prop);
                          }}
                          className="w-full text-left p-2.5 hover:bg-orange-50 rounded-xl flex items-center justify-between text-xs transition-colors cursor-pointer"
                        >
                          <div>
                            <div className="font-bold text-neutral-900">{prop.name}</div>
                            <div className="text-[11px] text-neutral-500">{prop.location}, {prop.city}</div>
                          </div>
                          <span className="text-[11px] font-bold text-[#F54900]">{prop.priceFormatted}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button
                  type="button"
                  onClick={() => handleSearchSubmit()}
                  aria-label="Search"
                  className="w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-[#F36F21] hover:bg-[#E05A12] text-white flex items-center justify-center cursor-pointer shadow-lg shadow-orange-500/35 shrink-0 transition-transform hover:scale-105"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Voice Search Button */}
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  aria-label="Start voice search"
                  className={`w-12 h-12 xl:w-14 xl:h-14 rounded-2xl flex items-center justify-center cursor-pointer shadow-lg shrink-0 transition-all ${
                    isListening
                      ? 'bg-rose-600 text-white animate-pulse shadow-rose-500/40 ring-4 ring-rose-300'
                      : 'bg-[#F36F21] hover:bg-[#E05A12] text-white shadow-orange-500/35 hover:scale-105'
                  }`}
                  title={isListening ? 'Listening...' : 'Voice Search'}
                >
                  <Mic className="w-5 h-5" />
                </button>
              </div>

              {/* Row 2: Continue Last Search + Recently Viewed */}
              <div className="h-[1px] bg-neutral-200" />
              <div className="flex flex-row items-center justify-between gap-6 px-6 py-3 bg-neutral-50/60 rounded-b-[24px]">
                {/* Continue Last Search */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900">
                    <Clock className="w-3.5 h-3.5 text-[#F36F21]" />
                    <span>CONTINUE LAST SEARCH:</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('Orion One 32');
                      handleSearchSubmit();
                    }}
                    className="text-xs font-semibold text-[#F54900] hover:underline cursor-pointer truncate max-w-xs"
                  >
                    {lastSearch}
                  </button>
                </div>

                {/* Recently Viewed */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900">
                    <Eye className="w-3.5 h-3.5 text-[#F36F21]" />
                    <span>RECENTLY VIEWED:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {recentlyViewed.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectProperty(item)}
                        className="text-xs px-2.5 py-1 rounded-full bg-white border border-neutral-200 hover:border-orange-300 text-neutral-700 hover:text-[#F54900] font-medium transition-colors cursor-pointer truncate max-w-[130px]"
                      >
                        {item.name}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={onViewAllProperties}
                      className="text-xs font-bold text-[#C7510B] hover:text-[#F54900] flex items-center gap-1 ml-1 cursor-pointer whitespace-nowrap"
                    >
                      <span>View All ({WEALTH_PROPERTIES.length})</span>
                      <ChevronRight className="w-3 h-3 text-[#F36F21]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE SEARCH CONTAINER (< lg) */}
        <div className="lg:hidden relative">
          {/* Mobile Hero Visual */}
          <div className="relative rounded-2xl overflow-hidden w-full aspect-[430/360] shadow-lg bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Residence Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-4 right-4 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                14+ Years of Real Estate Trust
              </span>
              <h2 className="text-xl font-bold mt-0.5 leading-snug">
                Smart Property Advisory in Noida &amp; NCR
              </h2>
            </div>
          </div>

          {/* Mobile Search Card */}
          <div className="w-[calc(100%-16px)] mx-auto -mt-10 relative z-20 rounded-2xl bg-white border border-neutral-200 shadow-xl p-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-neutral-100">
              {/* Mobile City */}
              <div>
                <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                  Location
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full py-1.5 px-2 text-xs border border-neutral-200 rounded-lg font-medium text-neutral-800 bg-white"
                >
                  <option value="">Select City</option>
                  {CITIES_LIST.filter((c) => c.id !== 'all').map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Type */}
              <div>
                <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full py-1.5 px-2 text-xs border border-neutral-200 rounded-lg font-medium text-neutral-800 bg-white"
                >
                  <option value="">Choose Type</option>
                  {propertyTypesList.filter((t) => t !== 'All Types').map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keyword Input & Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                <Search className="w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search project, sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs font-medium text-neutral-900 bg-transparent border-none outline-none"
                />
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className="p-1 text-neutral-500 hover:text-[#F36F21]"
                  aria-label="Voice search"
                >
                  <Mic className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSearchSubmit()}
                className="w-10 h-10 rounded-xl bg-[#F36F21] text-white flex items-center justify-center shadow-md shadow-orange-500/30 shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Last Search & Recently Viewed */}
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-1 text-[11px] text-neutral-600">
              <div className="flex items-center justify-between">
                <span className="font-bold uppercase text-neutral-800">Recent Search:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('Orion One 32');
                    handleSearchSubmit();
                  }}
                  className="text-[#F54900] truncate max-w-[180px] font-semibold"
                >
                  {lastSearch}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
