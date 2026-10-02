import React, { useState, useMemo } from 'react';
import {
  Building2,
  MapPin,
  Phone,
  MessageSquare,
  Search,
  Filter,
  SlidersHorizontal,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Percent,
  Calculator,
  Home,
  Star,
  Sparkles,
  ExternalLink,
  Layers,
  Award,
  Video,
  FileCheck2,
  Car,
  Compass,
  TrendingUp,
  X,
  Play
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { ChoudharyRealestateHeader } from './ChoudharyRealestateHeader';
import { ChoudharyRealestateFooter } from './ChoudharyRealestateFooter';
import {
  PropertyDetailModal,
  PostPropertyModal,
  ValuationModal,
  BlogDetailModal
} from './ChoudharyRealestateModals';
import {
  CHOUDHARY_PROPERTIES,
  DWARKA_SECTORS,
  CHOUDHARY_FAQS,
  CHOUDHARY_BLOGS,
  CHOUDHARY_TESTIMONIALS,
  RealEstateProperty,
  BlogArticle,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  GOVT_REG_ID
} from '../../data/choudharyRealestateData';

export const ChoudharyRealestateApp: React.FC = () => {
  // Navigation & active tab state
  const [activeTab, setActiveTab] = useState<string>('home');

  // Search & Filter State
  const [searchPurpose, setSearchPurpose] = useState<'All' | 'Sale' | 'Rent' | 'Commercial' | 'Plot'>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedBhk, setSelectedBhk] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'area'>('featured');

  // Modals state
  const [selectedProperty, setSelectedProperty] = useState<RealEstateProperty | null>(null);
  const [postPropertyOpen, setPostPropertyOpen] = useState(false);
  const [valuationOpen, setValuationOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(10000000); // 1 Crore
  const [loanRate, setLoanRate] = useState<number>(8.5); // 8.5%
  const [loanTenure, setLoanTenure] = useState<number>(20); // 20 years
  const [loanBank, setLoanBank] = useState<string>('SBI');
  const [loanApplicantName, setLoanApplicantName] = useState('');
  const [loanApplicantPhone, setLoanApplicantPhone] = useState('');
  const [loanSubmitted, setLoanSubmitted] = useState(false);

  // Calculate Monthly EMI: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyEmi = useMemo(() => {
    const P = loanAmount;
    const r = loanRate / 12 / 100;
    const n = loanTenure * 12;
    if (r === 0) return P / n;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  }, [loanAmount, loanRate, loanTenure]);

  const totalPayment = monthlyEmi * loanTenure * 12;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  // Filtered Properties
  const filteredProperties = useMemo(() => {
    return CHOUDHARY_PROPERTIES.filter(p => {
      // Tab filter
      if (activeTab === 'builder-floors' && p.propertyType !== 'Builder Floor') return false;
      if (activeTab === 'society-flats' && p.propertyType !== 'Society Flat') return false;
      if (activeTab === 'commercial' && p.propertyType !== 'Commercial') return false;
      if (activeTab === 'plots' && p.propertyType !== 'Plot') return false;
      if (activeTab === 'rent' && p.purpose !== 'Rent') return false;

      // Purpose filter
      if (searchPurpose === 'Sale' && p.purpose !== 'Sale') return false;
      if (searchPurpose === 'Rent' && p.purpose !== 'Rent') return false;
      if (searchPurpose === 'Commercial' && p.propertyType !== 'Commercial') return false;
      if (searchPurpose === 'Plot' && p.propertyType !== 'Plot') return false;

      // Sector filter
      if (selectedSector !== 'All' && p.sector !== selectedSector) return false;

      // BHK filter
      if (selectedBhk !== 'All') {
        const bhkNum = parseInt(selectedBhk.replace(/\D/g, ''), 10);
        if (p.bedrooms !== bhkNum) return false;
      }

      // Budget filter
      if (selectedBudget === 'under-1cr' && p.price > 10000000) return false;
      if (selectedBudget === '1cr-2cr' && (p.price < 10000000 || p.price > 20000000)) return false;
      if (selectedBudget === '2cr-3cr' && (p.price < 20000000 || p.price > 30000000)) return false;
      if (selectedBudget === 'above-3cr' && p.price < 30000000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'area') return b.area - a.area;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeTab, searchPurpose, selectedSector, selectedBhk, selectedBudget, sortBy]);

  const formatPrice = (val: number, purpose: string) => {
    if (purpose === 'Rent') {
      return `₹${val.toLocaleString('en-IN')}/mo`;
    }
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakh`;
  };

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loanApplicantName || !loanApplicantPhone) return;
    setLoanSubmitted(true);
    setTimeout(() => {
      setLoanSubmitted(false);
      setLoanApplicantName('');
      setLoanApplicantPhone('');
    }, 4000);
  };

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'loan-calc') {
      const el = document.getElementById('section-loan');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'sectors') {
      const el = document.getElementById('section-sectors');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'about') {
      const el = document.getElementById('section-about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'contact') {
      const el = document.getElementById('section-contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('section-properties');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1526] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C5A25D] selection:text-slate-950 flex flex-col">
      {/* 1. Global Platform Reference Switcher */}
      <ReferenceSiteSwitcher currentSiteId="choudhary-realestate" />

      {/* 2. Main Header */}
      <ChoudharyRealestateHeader
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenPostProperty={() => setPostPropertyOpen(true)}
        onOpenLoanModal={() => handleSelectTab('loan-calc')}
        onOpenValuationModal={() => setValuationOpen(true)}
      />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* HERO SECTION WITH AUTHENTIC BACKGROUND & DWARKA ACCENT        */}
        {/* ============================================================== */}
        <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#0F1E36] overflow-hidden">
          {/* Background image from reference */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/choudhary-realestate/home_hero_bg.webp"
              alt="Choudhary Realestate Dwarka Builder Floors"
              className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#091528]/90 to-[#0F1E36]/80" />
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#070D18]/95" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
            <div className="max-w-3xl space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A25D]/40 text-amber-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-[#C5A25D]" />
                <span>Govt. Registered Real Estate Consultant · Dwarka, New Delhi</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase font-['Poppins',sans-serif]">
                Best Property Dealer in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A25D] via-[#F3E2B5] to-[#E5C378]">
                  Dwarka, New Delhi
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
                Discover 100% legally verified DDA builder floors, luxury independent floors, and society flats in Dwarka. 30-year paper scrutiny, stilt parking, private lifts, and a transparent 1% brokerage fee.
              </p>

              {/* Multi-Tab Property Search Engine */}
              <div className="pt-2">
                <div className="bg-[#0A1526]/95 border border-[#C5A25D]/30 p-4 sm:p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-4">
                  {/* Purpose Tabs */}
                  <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
                    {[
                      { id: 'All', label: 'All Properties' },
                      { id: 'Sale', label: 'Buy (Sale)' },
                      { id: 'Rent', label: 'For Rent' },
                      { id: 'Commercial', label: 'Commercial' },
                      { id: 'Plot', label: 'Plots' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setSearchPurpose(tab.id as any)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          searchPurpose === tab.id
                            ? 'bg-[#C5A25D] text-slate-950 shadow-md font-black'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Filter Dropdowns Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Sector Picker */}
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Sector in Dwarka</label>
                      <select
                        value={selectedSector}
                        onChange={e => setSelectedSector(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C5A25D]"
                      >
                        <option value="All" className="bg-[#0F1E36]">All Sectors (Dwarka)</option>
                        <option value="Sector 8" className="bg-[#0F1E36]">Sector 8 (Builder Floors Hub)</option>
                        <option value="Sector 11" className="bg-[#0F1E36]">Sector 11 (Metro &amp; Markets)</option>
                        <option value="Sector 12" className="bg-[#0F1E36]">Sector 12 (City Centre)</option>
                        <option value="Sector 19" className="bg-[#0F1E36]">Sector 19 (Akshardham Enclave)</option>
                        <option value="Sector 22" className="bg-[#0F1E36]">Sector 22 (CGHS Societies)</option>
                        <option value="Sector 23" className="bg-[#0F1E36]">Sector 23 (Plots &amp; Floors)</option>
                        <option value="Sector 14" className="bg-[#0F1E36]">Sector 14 (Vegas Mall Area)</option>
                        <option value="Sector 7" className="bg-[#0F1E36]">Sector 7 (Rampal Chowk)</option>
                      </select>
                    </div>

                    {/* BHK Picker */}
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">BHK Layout</label>
                      <select
                        value={selectedBhk}
                        onChange={e => setSelectedBhk(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C5A25D]"
                      >
                        <option value="All" className="bg-[#0F1E36]">All Bedrooms</option>
                        <option value="2 BHK" className="bg-[#0F1E36]">2 BHK</option>
                        <option value="3 BHK" className="bg-[#0F1E36]">3 BHK</option>
                        <option value="4 BHK" className="bg-[#0F1E36]">4 BHK</option>
                      </select>
                    </div>

                    {/* Budget Picker */}
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Budget Range</label>
                      <select
                        value={selectedBudget}
                        onChange={e => setSelectedBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-[#C5A25D]"
                      >
                        <option value="All" className="bg-[#0F1E36]">All Budgets</option>
                        <option value="under-1cr" className="bg-[#0F1E36]">Under ₹1.00 Cr</option>
                        <option value="1cr-2cr" className="bg-[#0F1E36]">₹1.00 Cr – ₹2.00 Cr</option>
                        <option value="2cr-3cr" className="bg-[#0F1E36]">₹2.00 Cr – ₹3.00 Cr</option>
                        <option value="above-3cr" className="bg-[#0F1E36]">₹3.00 Cr &amp; Above</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <span className="text-xs text-slate-400">
                      Showing <strong>{filteredProperties.length}</strong> pre-vetted properties with freehold title
                    </span>
                    <button
                      onClick={() => {
                        const el = document.getElementById('section-properties');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 cursor-pointer flex items-center gap-2"
                    >
                      <Search className="w-4 h-4" />
                      <span>Search Dwarka Properties</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4 QUICK CATEGORY CARDS (EXACT MATCH FROM ARVIND ESTATES)       */}
        {/* ============================================================== */}
        <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: DDA Builder Floors */}
            <div
              onClick={() => handleSelectTab('builder-floors')}
              className="p-5 rounded-2xl bg-[#0F1E36] border border-emerald-500/40 hover:border-emerald-400 transition-all cursor-pointer shadow-xl hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Hot Pick
                </span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                DDA Builder Floors
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Independent floors with stilt parking &amp; private Otis/Schindler lift. Freehold registry.
              </p>
            </div>

            {/* Card 2: Society Flats & CGHS */}
            <div
              onClick={() => handleSelectTab('society-flats')}
              className="p-5 rounded-2xl bg-[#0F1E36] border border-sky-500/40 hover:border-sky-400 transition-all cursor-pointer shadow-xl hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-500/30 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors">
                  <Home className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  Gated
                </span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                Society Flats &amp; CGHS
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Gated cooperative housing societies with parks, power backup, clubhouse &amp; 24x7 guards.
              </p>
            </div>

            {/* Card 3: Commercial & Shops */}
            <div
              onClick={() => handleSelectTab('commercial')}
              className="p-5 rounded-2xl bg-[#0F1E36] border border-purple-500/40 hover:border-purple-400 transition-all cursor-pointer shadow-xl hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-400 group-hover:text-slate-950 transition-colors">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  High ROI
                </span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                Commercial &amp; Shops
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Prime retail shops, office spaces &amp; commercial hubs near Vegas Mall &amp; metro stations.
              </p>
            </div>

            {/* Card 4: List Your Property */}
            <div
              onClick={() => setPostPropertyOpen(true)}
              className="p-5 rounded-2xl bg-[#0F1E36] border border-rose-500/40 hover:border-rose-400 transition-all cursor-pointer shadow-xl hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center border border-rose-500/30 group-hover:bg-rose-400 group-hover:text-slate-950 transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  100% Free
                </span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-rose-300 transition-colors">
                + List Your Property
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Sellers &amp; Landlords: List directly with Choudhary Realestate. Zero upfront fees.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* TRUST NUMBERS & BROKERAGE ETHICS STRIP                         */}
        {/* ============================================================== */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F1E36] via-[#142644] to-[#0F1E36] p-6 sm:p-8 rounded-3xl border border-white/10 grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#C5A25D]">10+ Years</div>
              <div className="text-xs text-slate-300 uppercase font-semibold">Dwarka Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white">1,200+</div>
              <div className="text-xs text-slate-300 uppercase font-semibold">Properties Handled</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#C5A25D]">₹450+ Cr</div>
              <div className="text-xs text-slate-300 uppercase font-semibold">Volume Transacted</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-300 uppercase font-semibold">Clear Title Deeds</div>
            </div>
            <div className="space-y-1 col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-black text-[#C5A25D]">1% Fixed</div>
              <div className="text-xs text-slate-300 uppercase font-semibold">Transparent Brokerage</div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* MAIN PROPERTY CATALOG & EXPLORER                              */}
        {/* ============================================================== */}
        <section id="section-properties" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-mono text-[#C5A25D] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dwarka Verified Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Featured Properties for Sale &amp; Rent
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Every listing has been physically inspected by our team with complete 30-year registry documentation.
              </p>
            </div>

            {/* Quick Filter Pill Row */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold focus:outline-none focus:border-[#C5A25D]"
              >
                <option value="featured" className="bg-[#0F1E36]">Sort by: Featured First</option>
                <option value="price-asc" className="bg-[#0F1E36]">Price: Low to High</option>
                <option value="price-desc" className="bg-[#0F1E36]">Price: High to Low</option>
                <option value="area" className="bg-[#0F1E36]">Largest Super Area</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-white/10">
            {[
              { id: 'home', label: 'All Listings' },
              { id: 'builder-floors', label: 'DDA Builder Floors' },
              { id: 'society-flats', label: 'Society Flats & CGHS' },
              { id: 'commercial', label: 'Commercial & Shops' },
              { id: 'plots', label: 'Residential Plots' },
              { id: 'rent', label: 'Properties for Rent' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#C5A25D] text-slate-950 font-black shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          {filteredProperties.length === 0 ? (
            <div className="py-20 text-center bg-[#0F1E36] rounded-3xl border border-white/10 p-8 space-y-4">
              <Building2 className="w-12 h-12 text-[#C5A25D] mx-auto opacity-50" />
              <h3 className="text-xl font-bold text-white">No properties match your exact filters</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Try resetting your sector or budget filters, or contact our Dwarka Sector 8 office directly to find off-market private listings.
              </p>
              <button
                onClick={() => {
                  setSelectedSector('All');
                  setSelectedBhk('All');
                  setSelectedBudget('All');
                  setSearchPurpose('All');
                  setActiveTab('home');
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <div
                  key={property.id}
                  className="bg-[#0F1E36] rounded-3xl border border-white/10 hover:border-[#C5A25D]/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Property Card Image */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={property.featuredImage}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-black/40" />

                    {/* Badge Chips */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-sm">
                        ✔ Verified
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#C5A25D] text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-sm">
                        {property.purpose === 'Sale' ? 'Sale' : 'Rent'}
                      </span>
                    </div>

                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 text-slate-200 border border-white/20 text-[10px] font-mono">
                      {property.code}
                    </span>

                    {/* Bottom overlay with Sector */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white z-10 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{property.sector} {property.block ? `(${property.block})` : ''}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3
                        onClick={() => setSelectedProperty(property)}
                        className="font-bold text-base text-white hover:text-[#C5A25D] transition-colors cursor-pointer line-clamp-2"
                      >
                        {property.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 font-light">
                        {property.description}
                      </p>
                    </div>

                    {/* Specs Row */}
                    <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">Layout</span>
                        <span className="font-bold text-white">{property.bedrooms > 0 ? `${property.bedrooms} BHK` : property.propertyType}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">Super Area</span>
                        <span className="font-bold text-white">{property.area} sq.ft</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">Parking</span>
                        <span className="font-bold text-white">{property.parking > 0 ? `${property.parking} Stilt` : 'Road'}</span>
                      </div>
                    </div>

                    {/* Price and Action Bar */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">
                          {property.purpose === 'Sale' ? 'Demand' : 'Rent / Month'}
                        </div>
                        <div className="text-xl font-black text-[#C5A25D]">
                          {formatPrice(property.price, property.purpose)}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedProperty(property)}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#C5A25D] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/20 flex items-center gap-1.5"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* WhatsApp & Call Direct Quick Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                        className="py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Hello Choudhary Realestate, I am interested in ${property.code}: ${property.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ============================================================== */}
        {/* TRANSPARENT 1% BROKERAGE POLICY COMPARISON                     */}
        {/* ============================================================== */}
        <section className="py-16 bg-[#091322] border-t border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
                Professional Ethics &amp; Transparency
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">
                Why Dwarka Trusts Choudhary Realestate
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Unlike unorganized local brokers who inflate prices with hidden side margins, Choudhary Realestate operates on a crystal-clear, transparent 1% brokerage fee standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unorganized Broker Card */}
              <div className="p-8 rounded-3xl bg-red-950/20 border border-red-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-lg">
                    ✕
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Traditional Unorganized Brokers</h4>
                    <p className="text-xs text-red-300">Unreliable pricing &amp; legal risks</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Hidden price markups (selling ₹1.70 Cr properties for ₹1.90 Cr to keep difference).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>No title verification (passing encumbered properties with pending bank mortgages).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Disappear after token advance without helping in registry or MCD mutation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>No formal office, RERA registration, or official invoicing.</span>
                  </li>
                </ul>
              </div>

              {/* Choudhary Realestate Guarantee Card */}
              <div className="p-8 rounded-3xl bg-[#0F1E36] border border-[#C5A25D]/60 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A25D] text-slate-950 flex items-center justify-center font-bold text-lg">
                    ✔
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Choudhary Realestate Standards</h4>
                    <p className="text-xs text-[#C5A25D]">Strict 1% fee &amp; 30-year chain legal scrutiny</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>1% Fixed Brokerage:</strong> Direct negotiation between buyer and owner. Zero hidden margins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>30-Year Title Search:</strong> Thorough Sub-Registrar document audit before any advance is accepted.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>End-to-End Escort:</strong> We personally handle bank loans, Sub-Registrar registry, and MCD mutation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Physical Flagship:</strong> Established Sector 8 Dwarka headquarters with senior advisors available 7 days a week.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DWARKA SECTORS INTERACTIVE GUIDE                               */}
        {/* ============================================================== */}
        <section id="section-sectors" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
                Neighborhood Micro-Market Intelligence
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Dwarka Sectors Guide (Sectors 1–29)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Explore real estate characteristics, price benchmarks, and metro connectivity across Dwarka.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DWARKA_SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className="bg-[#0F1E36] p-5 rounded-3xl border border-white/10 hover:border-[#C5A25D]/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C5A25D] uppercase">
                      {sector.sector}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-300">
                      {sector.activeListingsCount} Listings
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-white">{sector.name}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Metro Station</span>
                    <span className="font-medium text-slate-200">{sector.metroStation}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Price Benchmark</span>
                    <span className="font-bold text-[#C5A25D]">{sector.avgPriceSqFt}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedSector(sector.sector);
                    const el = document.getElementById('section-properties');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2 rounded-xl bg-white/5 hover:bg-[#C5A25D] hover:text-slate-950 text-white font-bold text-xs transition-colors cursor-pointer border border-white/10"
                >
                  View Sector Properties
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* INTERACTIVE HOME LOAN & EMI CALCULATOR (SBI/HDFC/ICICI)         */}
        {/* ============================================================== */}
        <section id="section-loan" className="py-16 bg-[#091322] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
                18+ Partner Banks
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Dwarka Home Loan &amp; EMI Calculator
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Calculate your monthly installments and get pre-approved bank loans at competitive interest rates with zero processing fee hassles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Calculator Inputs */}
              <div className="lg:col-span-7 bg-[#0F1E36] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                {/* Loan Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-bold uppercase">Loan Amount</span>
                    <span className="text-lg font-black text-[#C5A25D]">
                      ₹{(loanAmount / 100000).toFixed(0)} Lakh (₹{(loanAmount / 10000000).toFixed(2)} Cr)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="40000000"
                    step="500000"
                    value={loanAmount}
                    onChange={e => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#C5A25D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>₹10 Lakh</span>
                    <span>₹2 Cr</span>
                    <span>₹4 Cr</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-bold uppercase">Interest Rate</span>
                    <span className="text-lg font-black text-white">{loanRate.toFixed(2)}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="11.5"
                    step="0.05"
                    value={loanRate}
                    onChange={e => setLoanRate(Number(e.target.value))}
                    className="w-full accent-[#C5A25D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>7.50%</span>
                    <span>8.50% (Current SBI/HDFC)</span>
                    <span>11.50%</span>
                  </div>
                </div>

                {/* Loan Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-bold uppercase">Loan Tenure</span>
                    <span className="text-lg font-black text-white">{loanTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={loanTenure}
                    onChange={e => setLoanTenure(Number(e.target.value))}
                    className="w-full accent-[#C5A25D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>5 Yrs</span>
                    <span>15 Yrs</span>
                    <span>30 Yrs</span>
                  </div>
                </div>

                {/* Bank Partner Logos */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Preferred Bank</span>
                  <div className="flex flex-wrap gap-2">
                    {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'PNB Housing', 'LIC HFL'].map(bank => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setLoanBank(bank)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          loanBank === bank
                            ? 'bg-[#C5A25D] text-slate-950 font-black'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {bank}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* EMI Calculation Summary Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#162B4D] via-[#0F1E36] to-[#0A1526] p-6 sm:p-8 rounded-3xl border border-[#C5A25D]/40 space-y-6 shadow-2xl">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold block">
                    Estimated Monthly Repayment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#C5A25D] mt-1">
                    ₹{monthlyEmi.toLocaleString('en-IN')} <span className="text-xs text-white font-normal">/ month</span>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Principal Loan Amount:</span>
                    <span className="font-bold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Interest Payable:</span>
                    <span className="font-bold text-amber-400">₹{totalInterest.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Amount Payable:</span>
                    <span className="font-bold text-white">₹{totalPayment.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Pre-Approval Form */}
                <div className="pt-3 border-t border-white/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Apply for Pre-Approved Home Loan
                  </h4>
                  {loanSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500 text-center text-xs text-emerald-200">
                      Loan assistance requested! Our banking DSA specialist will contact you shortly.
                    </div>
                  ) : (
                    <form onSubmit={handleLoanSubmit} className="space-y-2.5">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={loanApplicantName}
                        onChange={e => setLoanApplicantName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={loanApplicantPhone}
                        onChange={e => setLoanApplicantPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 cursor-pointer"
                      >
                        Get Instant Pre-Approval
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 30-YEAR TITLE SEARCH & VERIFICATION PROCESS                    */}
        {/* ============================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
              Legal Security Shield
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Our 4-Step Legal Verification Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              We eliminate 100% of property litigation risks before recommending any property to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#0F1E36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A25D]/20 text-[#C5A25D] flex items-center justify-center font-black">
                01
              </div>
              <h4 className="font-bold text-base text-white">Chain of Title Deeds</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Comprehensive 30-year unbroken chain audit confirming original DDA allotment, conversion to freehold, and mutation status.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0F1E36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A25D]/20 text-[#C5A25D] flex items-center justify-center font-black">
                02
              </div>
              <h4 className="font-bold text-base text-white">MCD Building Sanction</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Verification that the builder floor conforms to the sanctioned building layout without unauthorized extra floor construction.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0F1E36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A25D]/20 text-[#C5A25D] flex items-center justify-center font-black">
                03
              </div>
              <h4 className="font-bold text-base text-white">Sub-Registrar Encumbrance</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Formal non-encumbrance certificate from the Sub-Registrar confirming zero bank mortgages, court attachments, or disputes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0F1E36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A25D]/20 text-[#C5A25D] flex items-center justify-center font-black">
                04
              </div>
              <h4 className="font-bold text-base text-white">Direct Registry &amp; Mutation</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Assistance with drafting sale deeds, stamp duty payments, biometric appointment at Sub-Registrar, and MCD property tax mutation.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* REAL ESTATE GUIDES & BLOG INSIGHTS                             */}
        {/* ============================================================== */}
        <section className="py-16 bg-[#091322] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
                  Knowledge Center
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Dwarka Real Estate Guides &amp; Insights
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CHOUDHARY_BLOGS.map(article => (
                <div
                  key={article.id}
                  onClick={() => setSelectedBlog(article)}
                  className="bg-[#0F1E36] rounded-3xl border border-white/10 overflow-hidden shadow-xl hover:border-[#C5A25D]/50 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#C5A25D] text-[10px] font-bold uppercase">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono">
                        {article.readingTime} min read · {article.publishDate}
                      </span>
                      <h3 className="font-bold text-base text-white group-hover:text-[#C5A25D] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-3 font-light leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 text-xs font-bold text-[#C5A25D] flex items-center gap-1">
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CUSTOMER REVIEWS & TESTIMONIALS                                */}
        {/* ============================================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
              Trusted by 1,200+ Families
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHOUDHARY_TESTIMONIALS.map(t => (
              <div
                key={t.id}
                className="bg-[#0F1E36] p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <h4 className="font-bold text-sm text-white">{t.name}</h4>
                  <span className="text-[11px] text-[#C5A25D] block">{t.role}</span>
                  <span className="text-[10px] text-slate-400 block">{t.property}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* FREQUENTLY ASKED QUESTIONS (FAQ)                               */}
        {/* ============================================================== */}
        <section className="py-16 bg-[#091322] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
                Answers to Common Questions
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {CHOUDHARY_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#0F1E36] rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-[#C5A25D] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#C5A25D] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed font-light border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CONTACT DESK & OFFICE LOCATION                                 */}
        {/* ============================================================== */}
        <section id="section-contact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-gradient-to-br from-[#162B4D] via-[#0F1E36] to-[#0A1526] p-8 sm:p-12 rounded-3xl border border-[#C5A25D]/40 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#C5A25D]/20 text-[#C5A25D] text-xs font-bold uppercase">
                  Visit Our Dwarka Office
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  Schedule Your Guided Property Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Our senior consultants are available at our Sector 8 office 7 days a week. Feel free to walk in for property documents inspection, floor walkthroughs, or home loan advice.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3 text-slate-200">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{OFFICE_ADDRESS}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Direct Call Desk: {PHONE_NUMBER}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Consultation Hours: Daily 9:00 AM – 8:00 PM</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Desk Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Choudhary Realestate, I would like to schedule an accompanied property visit in Dwarka.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>
              </div>

              {/* Map Card */}
              <div className="h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-slate-900 relative">
                <iframe
                  title="Choudhary Realestate Office Location Dwarka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.2541349896!2d77.0647895!3d28.5671212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3dbff6929%3A0xc345da58fa6c5e53!2sSector%208%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <ChoudharyRealestateFooter
        onSelectCategory={handleSelectTab}
        onSelectSector={sec => {
          setSelectedSector(sec);
          const el = document.getElementById('section-properties');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPostProperty={() => setPostPropertyOpen(true)}
        onOpenValuation={() => setValuationOpen(true)}
      />

      {/* 4. Modals Container */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookSiteVisit={p => {
          setSelectedProperty(p);
        }}
      />

      <PostPropertyModal
        isOpen={postPropertyOpen}
        onClose={() => setPostPropertyOpen(false)}
      />

      <ValuationModal
        isOpen={valuationOpen}
        onClose={() => setValuationOpen(false)}
      />

      <BlogDetailModal
        article={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
};
