import React, { useState } from 'react';
import {
  Calendar, Users, MapPin, Building, Sparkles, CheckCircle2, ArrowRight,
  ArrowLeft, Phone, Mail, User, ShieldCheck, AlertCircle, FileText
} from 'lucide-react';
import { site74Config } from '../../config/site74Config';
import { DESTINATIONS_DATA } from '../../data/site74Data';

interface Site74PlanningFormProps {
  initialDestination?: string;
  onSuccess?: () => void;
}

export const Site74PlanningForm: React.FC<Site74PlanningFormProps> = ({
  initialDestination,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form State
  const [formData, setFormData] = useState({
    destination: initialDestination || 'Jaipur',
    venueType: 'Heritage Palace / Fort',
    occasion: 'Complete 3-Day Multi-Event Wedding',
    startDate: '',
    endDate: '',
    attendees: '250 - 400 Guests',
    roomsRequired: '80 - 120 Rooms',
    fullName: '',
    email: '',
    phone: '',
    budgetRange: '₹50 Lakhs – ₹1 Crore',
    specialNotes: '',
    termsAgreed: true
  });

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.startDate) newErrors.startDate = 'Please select your tentative wedding start date';
    if (!formData.endDate) newErrors.endDate = 'Please select your wedding wrap / departure date';
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      newErrors.endDate = 'Departure date must be after the start date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 9) {
      newErrors.phone = 'Please provide a valid contact phone number with country code';
    }
    if (!formData.termsAgreed) {
      newErrors.termsAgreed = 'Please confirm consent for our wedding concierge to connect with you';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep(1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    // Simulate API call to centralized endpoint: site74Config.API_ENDPOINTS.planningInquiry
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `GW-${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(generatedRef);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  return (
    <section id="planning-form-section" className="py-20 lg:py-28 px-5 sm:px-6 bg-[#FAF8F5] border-t border-[#E8E1D5]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Personalized Concierge Service
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#141210]">
            Start Planning Your Wedding
          </h2>
          <p className="text-sm sm:text-base text-[#6B6155] max-w-xl mx-auto leading-relaxed">
            Share your dates and vision. Our Senior Wedding Specialists will prepare custom venue availability, spatial layout proposals, and itemized hospitality budgets.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-[#E8E1D5] shadow-xl overflow-hidden p-6 sm:p-10">
          {!submitted ? (
            <div className="space-y-8">
              {/* Step Indicator */}
              <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    currentStep === 1 ? 'bg-[#141210] text-amber-300' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    1
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8A7B6E] block">Step 1</span>
                    <span className={`font-serif text-sm font-medium ${currentStep === 1 ? 'text-[#141210]' : 'text-stone-500'}`}>
                      Destination &amp; Event Scope
                    </span>
                  </div>
                </div>

                <div className="h-0.5 w-12 sm:w-20 bg-[#E8E1D5] hidden sm:block" />

                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    currentStep === 2 ? 'bg-[#141210] text-amber-300' : 'bg-stone-100 text-stone-500'
                  }`}>
                    2
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8A7B6E] block">Step 2</span>
                    <span className={`font-serif text-sm font-medium ${currentStep === 2 ? 'text-[#141210]' : 'text-stone-500'}`}>
                      Contact Details &amp; Vision
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 1: DESTINATION & OCCASION */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Preferred Destination *
                      </label>
                      <select
                        value={formData.destination}
                        onChange={e => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs font-medium text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      >
                        {DESTINATIONS_DATA.map(d => (
                          <option key={d.id} value={d.name}>{d.name} ({d.stateCountry})</option>
                        ))}
                        <option value="Flexible / Needs Recommendation">Flexible / Needs Expert Recommendation</option>
                      </select>
                    </div>

                    {/* Venue Preference */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Venue Style *
                      </label>
                      <select
                        value={formData.venueType}
                        onChange={e => setFormData({ ...formData, venueType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs font-medium text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option>Heritage Palace / Fort</option>
                        <option>Private Oceanfront Lawn &amp; Beach Resort</option>
                        <option>Mountain / Hill Sanctuary</option>
                        <option>Pillarless Metropolitan Grand Ballroom</option>
                        <option>Complete Resort Buyout (Exclusive Private Access)</option>
                      </select>
                    </div>
                  </div>

                  {/* Occasion / Scope */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                      Celebration Type / Occasion *
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs font-medium text-[#141210] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option>Complete 3-Day Multi-Event Wedding (Welcome, Sangeet, Pheras, Reception)</option>
                      <option>2-Day Wedding &amp; Sangeet Celebration</option>
                      <option>Grand 1-Day Vows &amp; Gala Reception</option>
                      <option>Intimate Wedding Vows (Under 100 Guests)</option>
                      <option>Post-Wedding Honeymoon Sanctuary Extension</option>
                    </select>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Event Start Date *
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      />
                      {errors.startDate && <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.startDate}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Event Wrap / Departure Date *
                      </label>
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      />
                      {errors.endDate && <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.endDate}</p>}
                    </div>
                  </div>

                  {/* Estimated Attendees & Rooms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Estimated Number of Attendees *
                      </label>
                      <select
                        value={formData.attendees}
                        onChange={e => setFormData({ ...formData, attendees: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option>Under 100 Guests (Boutique Intimate)</option>
                        <option>100 - 250 Guests</option>
                        <option>250 - 450 Guests</option>
                        <option>450 - 800 Guests</option>
                        <option>800 - 1,500+ Guests (Grand Imperial)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Guest Rooms Required *
                      </label>
                      <select
                        value={formData.roomsRequired}
                        onChange={e => setFormData({ ...formData, roomsRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option>25 - 50 Rooms</option>
                        <option>50 - 80 Rooms</option>
                        <option>80 - 120 Rooms</option>
                        <option>120 - 200+ Rooms</option>
                        <option>Full Private Resort / Palace Buyout</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3.5 rounded-full bg-[#141210] hover:bg-[#8C6D37] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Contact &amp; Vision</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CONTACT & BUDGET */}
              {currentStep === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ananya Singhania"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                      {errors.fullName && <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ananya@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                      {errors.email && <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                      {errors.phone && <p className="text-[11px] text-rose-600 mt-1 font-mono">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                        Estimated Overall Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option>₹35 Lakhs – ₹50 Lakhs</option>
                        <option>₹50 Lakhs – ₹1 Crore</option>
                        <option>₹1 Crore – ₹2 Crores</option>
                        <option>₹2 Crores – ₹5 Crores (Ultra-Luxury Palatial)</option>
                        <option>Open / Bespoke Custom Scope</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1.5">
                      Specific Requirements &amp; Celebration Vision
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialNotes}
                      onChange={e => setFormData({ ...formData, specialNotes: e.target.value })}
                      placeholder="Tell us about your community rituals (Jain/Marwari/Punjabi/South Indian), artist preferences, dietary sensitivities, or favorite palace properties..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D5] space-y-1">
                    <label className="flex items-start gap-2.5 text-xs text-[#52483E] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.termsAgreed}
                        onChange={e => setFormData({ ...formData, termsAgreed: e.target.checked })}
                        className="rounded border-[#D5C9B8] text-[#C5A059] focus:ring-[#C5A059] mt-0.5"
                      />
                      <span>
                        I request the Grandeur Wedding Concierge to check property inventory and prepare a custom date availability and banqueting proposal.
                      </span>
                    </label>
                    {errors.termsAgreed && <p className="text-[11px] text-rose-600 font-mono pl-6">{errors.termsAgreed}</p>}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 hover:text-black hover:border-black font-medium text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Step 1</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] hover:from-[#E2C78A] hover:to-[#B59148] text-[#141210] font-bold text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Checking Resort Inventory...</span>
                      ) : (
                        <>
                          <span>Submit Wedding Proposal Request</span>
                          <Sparkles className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* SUCCESS STATE */
            <div className="text-center py-10 px-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs text-amber-800 tracking-widest uppercase font-bold">
                  Proposal Request Logged · Ref #{refId}
                </span>
                <h3 className="font-serif font-medium text-3xl text-[#141210]">
                  Thank You, {formData.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6155] max-w-lg mx-auto leading-relaxed pt-1">
                  Your luxury wedding inquiry for <span className="font-bold text-[#141210]">{formData.destination}</span> ({formData.startDate} to {formData.endDate}) has been transmitted to our Senior Concierge Directorate.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="max-w-md mx-auto bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8E1D5] text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between border-b border-[#E8E1D5] pb-2 text-[11px]">
                  <span className="text-[#8A7B6E]">Destination:</span>
                  <span className="font-bold text-[#141210]">{formData.destination}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E1D5] pb-2 text-[11px]">
                  <span className="text-[#8A7B6E]">Attendees &amp; Rooms:</span>
                  <span className="font-bold text-[#141210]">{formData.attendees} · {formData.roomsRequired}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E1D5] pb-2 text-[11px]">
                  <span className="text-[#8A7B6E]">Contact Phone:</span>
                  <span className="font-bold text-[#141210]">{formData.phone}</span>
                </div>
                <div className="flex justify-between text-[11px] pt-1">
                  <span className="text-[#8A7B6E]">Official Response Window:</span>
                  <span className="font-bold text-emerald-800">Within 4 Business Hours</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-2.5 rounded-full border border-stone-300 text-xs font-mono uppercase tracking-wider text-stone-700 hover:text-black hover:border-black cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Site74PlanningForm;
