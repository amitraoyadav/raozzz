import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ArrowLeft, Send, ShieldCheck, Phone, Mail, Calendar, MapPin, DollarSign, MessageSquare, AlertCircle } from 'lucide-react';
import { site75Config } from '../../config/site75Config';
import { DESTINATIONS_DATA } from '../../data/site75Data';

interface PlanningFormData {
  // Step 1
  fullName: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';

  // Step 2
  weddingDate: string;
  destination: string;
  venuePreference: string;
  guestCount: string;
  functions: string[];

  // Step 3
  budgetRange: string;
  servicesRequired: string[];
  designAesthetic: string;

  // Step 4
  message: string;
}

interface Site75PlanningFormProps {
  initialDestination?: string;
  onSuccess?: () => void;
}

export const Site75PlanningForm: React.FC<Site75PlanningFormProps> = ({
  initialDestination = 'Udaipur, Rajasthan',
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<PlanningFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'whatsapp',
    weddingDate: '',
    destination: initialDestination,
    venuePreference: 'Heritage Palace / Fort',
    guestCount: '250 - 450 Guests',
    functions: ['Sangeet Extravaganza', 'Pheras & Sacred Vows', 'Reception Gala'],
    budgetRange: '₹1.5 Cr – ₹3 Cr (Luxury Tier)',
    servicesRequired: ['Turnkey Wedding Planning', 'Bespoke Scenography & Décor', 'Guest Hospitality & Logistics'],
    designAesthetic: 'Regal Heritage & Scented Florals',
    message: ''
  });

  const availableFunctions = [
    'Welcome Dinner / Cocktails',
    'Sunlit Haldi / Phoolon Ki Holi',
    'Bohemian Mehendi',
    'Sangeet Extravaganza',
    'Regal Baraat',
    'Pheras & Sacred Vows',
    'Reception Gala',
    'Midnight After-Party'
  ];

  const availableServices = [
    'Turnkey Wedding Planning',
    'Destination Logistics & Visas',
    'Bespoke Scenography & Décor',
    'Celebrity & Artist Booking',
    'Bridal Styling & Trousseau',
    'Guest Hospitality & Chauffeurs',
    'Gastronomy & Mixology Direction',
    'Sacred Vedic Ceremonies'
  ];

  const toggleFunction = (func: string) => {
    setFormData(prev => ({
      ...prev,
      functions: prev.functions.includes(func)
        ? prev.functions.filter(f => f !== func)
        : [...prev.functions, func]
    }));
  };

  const toggleService = (srv: string) => {
    setFormData(prev => ({
      ...prev,
      servicesRequired: prev.servicesRequired.includes(srv)
        ? prev.servicesRequired.filter(s => s !== srv)
        : [...prev.servicesRequired, srv]
    }));
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
      if (!formData.phone.trim()) {
        errs.phone = 'Contact number is required.';
      } else if (!/^[+0-9\s-]{7,15}$/.test(formData.phone.trim())) {
        errs.phone = 'Please provide a valid phone number with country code.';
      }
      if (!formData.email.trim()) {
        errs.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    if (step === 2) {
      if (!formData.weddingDate) errs.weddingDate = 'Please select a tentative or confirmed date.';
      if (!formData.destination) errs.destination = 'Please choose a primary destination.';
      if (formData.functions.length === 0) errs.functions = 'Select at least one wedding function.';
    }

    if (step === 3) {
      if (!formData.budgetRange) errs.budgetRange = 'Please specify your estimated budget.';
      if (formData.servicesRequired.length === 0) errs.servicesRequired = 'Select at least one service.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: (document.getElementById('planning-form-container')?.offsetTop || 0) - 80, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      // Post to centralized endpoint or simulate high-reliability demo submission
      await new Promise(resolve => setTimeout(resolve, 1400));
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (error) {
      setErrors({ form: 'Network error submitting request. Please reach our direct WhatsApp hotline.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="planning-form-container" className="py-24 sm:py-32 bg-[#080B12] text-white border-t border-[#20293D]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
            Start Planning
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Consult the Atelier
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto">
            Please share the preliminary outlines of your vision. Our creative directors personally review every inquiry within 24 business hours.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#0E131F] border border-[#20293D] rounded-3xl p-6 sm:p-12 shadow-2xl relative">
          
          {/* Progress Bar & Steps Counter */}
          {!isSubmitted && (
            <div className="mb-10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#D4AF37] tracking-wider uppercase font-semibold">
                  Step 0{currentStep} of 04
                </span>
                <span className="text-slate-400">
                  {currentStep === 1 && 'Personal Information'}
                  {currentStep === 2 && 'Celebration Architecture'}
                  {currentStep === 3 && 'Design Scope & Budget'}
                  {currentStep === 4 && 'Vision & Confirmation'}
                </span>
              </div>
              <div className="w-full h-1 bg-[#20293D] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA65] transition-all duration-500 rounded-full"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* SUCCESS STATE */}
          {isSubmitted ? (
            <div className="text-center py-10 sm:py-16 space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-[#131A29] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <Check className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                  Inquiry Received with Distinction
                </h3>
                <p className="text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#D4AF37]">{formData.fullName}</strong>. Your wedding dossier for <span className="text-white font-medium">{formData.destination}</span> has been routed directly to our Creative Directors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#131A29] border border-[#20293D] max-w-md mx-auto text-left text-xs text-slate-300 space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-stone-400">Estimated Dates:</span>
                  <span className="text-white">{formData.weddingDate || 'To be finalized'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Expected Guests:</span>
                  <span className="text-white">{formData.guestCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Preferred Reach:</span>
                  <span className="text-[#D4AF37] capitalize">{formData.preferredContact}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${site75Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                    `Hello Aura Luxe Concierge, I have just submitted a planning inquiry for ${formData.fullName} (${formData.destination}). Looking forward to connecting!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-center gap-2 hover:bg-emerald-900/80 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Follow-Up</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white border border-[#20293D] hover:border-white/30 transition-all cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              
              {/* STEP 1: Personal Contact Details */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white font-medium">
                      Step 1: Your Personal Details
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      Please tell us who we will have the pleasure of speaking with.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Radhika Merchant & Anant Ambani"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#131A29] border text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] transition-all ${
                          errors.fullName ? 'border-red-500/80' : 'border-[#20293D]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Phone / WhatsApp <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#131A29] border text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] transition-all ${
                          errors.phone ? 'border-red-500/80' : 'border-[#20293D]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#131A29] border text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] transition-all ${
                          errors.email ? 'border-red-500/80' : 'border-[#20293D]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                    </div>

                    {/* Preferred Mode of Communication */}
                    <div className="sm:col-span-2 space-y-1.5 pt-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Preferred Contact Medium
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {(['whatsapp', 'phone', 'email'] as const).map(medium => (
                          <button
                            key={medium}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: medium })}
                            className={`p-3 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                              formData.preferredContact === medium
                                ? 'bg-[#D4AF37] text-[#080B12] font-bold border-[#D4AF37]'
                                : 'bg-[#131A29] text-slate-300 border-[#20293D] hover:border-white/20'
                            }`}
                          >
                            {medium === 'whatsapp' && <MessageSquare className="w-3.5 h-3.5" />}
                            {medium === 'phone' && <Phone className="w-3.5 h-3.5" />}
                            {medium === 'email' && <Mail className="w-3.5 h-3.5" />}
                            <span>{medium}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Celebration Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white font-medium">
                      Step 2: Celebration Architecture
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      Locations, dates, and ceremonial milestones.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Destination Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Preferred Destination <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        value={formData.destination}
                        onChange={e => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#131A29] border border-[#20293D] text-sm text-white focus:outline-hidden focus:border-[#D4AF37]"
                      >
                        {DESTINATIONS_DATA.map(d => (
                          <option key={d.id} value={d.name} className="bg-[#0E131F] text-white">
                            {d.name} ({d.region})
                          </option>
                        ))}
                        <option value="Other International" className="bg-[#0E131F] text-white">Other International Location</option>
                        <option value="Undecided / Open to Recommendation" className="bg-[#0E131F] text-white">Undecided / Seeking Recommendation</option>
                      </select>
                    </div>

                    {/* Wedding Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Tentative / Confirmed Date <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={e => setFormData({ ...formData, weddingDate: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#131A29] border text-sm text-white focus:outline-hidden focus:border-[#D4AF37] ${
                          errors.weddingDate ? 'border-red-500/80' : 'border-[#20293D]'
                        }`}
                      />
                      {errors.weddingDate && <p className="text-[11px] text-red-400">{errors.weddingDate}</p>}
                    </div>

                    {/* Venue Preference Style */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Envisioned Setting Style
                      </label>
                      <select
                        value={formData.venuePreference}
                        onChange={e => setFormData({ ...formData, venuePreference: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#131A29] border border-[#20293D] text-sm text-white focus:outline-hidden focus:border-[#D4AF37]"
                      >
                        <option value="Heritage Palace / Fort" className="bg-[#0E131F]">Heritage Palace / Royal Fort</option>
                        <option value="Private Island / Oceanfront Beach" className="bg-[#0E131F]">Private Island / Oceanfront Beach</option>
                        <option value="Lakeside Neoclassical Villa" className="bg-[#0E131F]">Lakeside Neoclassical Villa (e.g. Lake Como)</option>
                        <option value="Modern High-Tech Metro Ballroom" className="bg-[#0E131F]">Modern High-Tech Metro Ballroom</option>
                        <option value="Desert Oasis & Sandstone Fort" className="bg-[#0E131F]">Desert Oasis & Sandstone Citadel</option>
                      </select>
                    </div>

                    {/* Guest Count */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Anticipated Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={e => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#131A29] border border-[#20293D] text-sm text-white focus:outline-hidden focus:border-[#D4AF37]"
                      >
                        <option value="Under 150 Guests (Intimate Royal)" className="bg-[#0E131F]">Under 150 Guests (Intimate Royal)</option>
                        <option value="150 - 300 Guests (Grand Destination)" className="bg-[#0E131F]">150 - 300 Guests (Grand Destination)</option>
                        <option value="300 - 600 Guests (Palatial Gathering)" className="bg-[#0E131F]">300 - 600 Guests (Palatial Gathering)</option>
                        <option value="600 - 1,200+ Guests (Monumental Scale)" className="bg-[#0E131F]">600 - 1,200+ Guests (Monumental Scale)</option>
                      </select>
                    </div>

                    {/* Wedding Functions Selection */}
                    <div className="sm:col-span-2 space-y-2 pt-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Functions to be Curated by Aura Luxe <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {availableFunctions.map(func => {
                          const isChecked = formData.functions.includes(func);
                          return (
                            <button
                              key={func}
                              type="button"
                              onClick={() => toggleFunction(func)}
                              className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${
                                isChecked
                                  ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-medium'
                                  : 'bg-[#131A29] border-[#20293D] text-slate-400 hover:text-white'
                              }`}
                            >
                              <span className="truncate pr-1">{func}</span>
                              {isChecked && <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                      {errors.functions && <p className="text-[11px] text-red-400">{errors.functions}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Design Scope & Budget */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white font-medium">
                      Step 3: Design Scope &amp; Budget
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      Calibrating the scale and creative ambitions of your celebration.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Budget Tier */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Estimated Overall Wedding Budget <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          '₹75 Lakh – ₹1.5 Cr (Curated Luxury)',
                          '₹1.5 Cr – ₹3.5 Cr (Grand Palatial Tier)',
                          '₹3.5 Cr – ₹8 Cr (Ultra-Luxury Spectacular)',
                          '₹8 Cr+ (Monumental Bespoke Scale)'
                        ].map(budget => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetRange: budget })}
                            className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all flex items-center justify-between cursor-pointer ${
                              formData.budgetRange === budget
                                ? 'bg-[#D4AF37] text-[#080B12] font-bold border-[#D4AF37]'
                                : 'bg-[#131A29] text-slate-300 border-[#20293D] hover:border-white/20'
                            }`}
                          >
                            <span>{budget}</span>
                            {formData.budgetRange === budget && <Check className="w-4 h-4 text-[#080B12]" />}
                          </button>
                        ))}
                      </div>
                      {errors.budgetRange && <p className="text-[11px] text-red-400">{errors.budgetRange}</p>}
                    </div>

                    {/* Services Required */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Atelier Pillars Requested <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {availableServices.map(srv => {
                          const isChecked = formData.servicesRequired.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between cursor-pointer ${
                                isChecked
                                  ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white font-medium'
                                  : 'bg-[#131A29] border-[#20293D] text-slate-400 hover:text-white'
                              }`}
                            >
                              <span>{srv}</span>
                              {isChecked && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                            </button>
                          );
                        })}
                      </div>
                      {errors.servicesRequired && <p className="text-[11px] text-red-400">{errors.servicesRequired}</p>}
                    </div>

                    {/* Design Aesthetic Preference */}
                    <div className="space-y-1.5 pt-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Primary Aesthetic Orientation
                      </label>
                      <select
                        value={formData.designAesthetic}
                        onChange={e => setFormData({ ...formData, designAesthetic: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#131A29] border border-[#20293D] text-sm text-white focus:outline-hidden focus:border-[#D4AF37]"
                      >
                        <option value="Regal Heritage & Scented Florals" className="bg-[#0E131F]">Regal Heritage, Candlelit Baoris &amp; Mogra Mandaps</option>
                        <option value="Old World European Villa" className="bg-[#0E131F]">Old World European Villa &amp; Fresco Glamour (Lake Como / Tuscany)</option>
                        <option value="Barefoot Bohème Beach" className="bg-[#0E131F]">Barefoot Bohème Beach, Pampas Grass &amp; Sunset Driftwood</option>
                        <option value="Modern High-Fashion Kinetic Neon" className="bg-[#0E131F]">Modern High-Fashion Kinetic Lighting &amp; Mirrored Runways</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Personal Vision & Message */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl text-white font-medium">
                      Step 4: Vision &amp; Special Directives
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      Any specific artist dreams, family traditions, or confidential requirements?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Your Vision Note (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about how you met, any must-have artists, unique dietary requirements, or private security needs..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#131A29] border border-[#20293D] text-sm text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37] transition-all resize-none"
                      />
                    </div>

                    {/* Summary Overview */}
                    <div className="p-4 rounded-2xl bg-[#131A29]/80 border border-white/5 space-y-2 text-xs text-slate-300 font-mono">
                      <div className="flex justify-between">
                        <span className="text-stone-400">Couple / Client:</span>
                        <span className="text-white font-medium">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Destination:</span>
                        <span className="text-[#D4AF37] font-medium">{formData.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Budget Range:</span>
                        <span className="text-white font-medium">{formData.budgetRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Functions Selected:</span>
                        <span className="text-white font-medium">{formData.functions.length} Ceremonies</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-stone-400">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>Protected by strict Non-Disclosure Protocols. We never sell or share family contact data.</span>
                    </div>

                    {errors.form && (
                      <div className="p-3 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-300 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errors.form}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Form Navigation Action Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-[#20293D]">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white border border-[#20293D] hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] active:scale-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Step 0{currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#080B12] border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Dossier...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Celebration Inquiry</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default Site75PlanningForm;
