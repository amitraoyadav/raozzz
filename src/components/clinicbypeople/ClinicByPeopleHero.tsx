import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  Stethoscope,
  HeartHandshake,
  MessageSquare,
} from 'lucide-react';
import {
  CLINIC_CONFIG,
  CITIES_LIST,
  SPECIALITIES_DATA,
  ClinicConsultationLead,
  submitClinicConsultation,
  buildClinicWhatsAppLink,
} from '../../data/clinicByPeopleData';

interface ClinicByPeopleHeroProps {
  currentCity: string;
  onSelectCity: (city: string) => void;
  onExploreSpecialities: () => void;
  onOpenConsultationModal: (speciality?: string) => void;
}

export const ClinicByPeopleHero: React.FC<ClinicByPeopleHeroProps> = ({
  currentCity,
  onSelectCity,
  onExploreSpecialities,
  onOpenConsultationModal,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCity, setSelectedCity] = useState(currentCity || 'Delhi NCR');
  const [selectedSpeciality, setSelectedSpeciality] = useState('general-surgery');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!fullName.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    const lead: ClinicConsultationLead = {
      fullName,
      phone: cleanPhone,
      city: selectedCity,
      speciality: SPECIALITIES_DATA.find((s) => s.id === selectedSpeciality)?.name || selectedSpeciality,
      preferredDate: 'Earliest Available',
      preferredTime: 'Morning (10 AM - 1 PM)',
      notes: 'Hero quick consultation request',
    };

    await submitClinicConsultation(lead);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F5F8FF] via-white to-white py-12 lg:py-20 border-b border-slate-200 overflow-hidden font-['Lexend',sans-serif]">
      {/* Decorative background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* LEFT COLUMN: HERO TEXT & BADGES */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Verification Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-[#0C5BE2]">
              <Sparkles className="w-3.5 h-3.5 text-[#0C5BE2]" />
              <span>US-FDA Approved Daycare Technologies · NABH Accredited Centres</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0B1528] tracking-tight leading-[1.15] text-balance">
              Specialist Care.{' '}
              <span className="text-[#0C5BE2]">Trusted Doctors.</span>{' '}
              Better Recovery.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Discover experienced specialists, explore advanced treatment options, and connect with the right healthcare support. From free first OPD to 100% cashless insurance settlements.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenConsultationModal()}
                className="px-6 py-3.5 rounded-2xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSpecialities}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE SPECIALITIES</span>
              </button>
            </div>

            {/* Key Trust Metrics Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="block text-2xl font-black text-[#0C5BE2]">30+</span>
                <span className="text-xs text-slate-500 font-medium">Major Indian Cities</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#0C5BE2]">400+</span>
                <span className="text-xs text-slate-500 font-medium">Partner Hospitals</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#0C5BE2]">70+</span>
                <span className="text-xs text-slate-500 font-medium">Advanced Procedures</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#FF6B4A]">0%</span>
                <span className="text-xs text-slate-500 font-medium">No-Cost EMI Support</span>
              </div>
            </div>

            {/* 3 Core Highlights */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Free Pick &amp; Drop Cab</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dedicated Care Buddy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Advance Paperwork</span>
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE QUICK CONSULTATION CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100 flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Free Specialist Evaluation</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  Instant Response
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1528] tracking-tight leading-snug">
                Book Your Doctor OPD Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Connect with our senior surgeon panel. Completely confidential &amp; zero advisory fee.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Request Confirmed!</h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{fullName}</strong>. Your consultation request for <strong className="text-[#0C5BE2]">{selectedCity}</strong> has been registered. Our care coordinator will call you within 15 minutes.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={buildClinicWhatsAppLink(`Hi ClinicByPeople, I just submitted an appointment request for ${fullName} in ${selectedCity}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat with Care Coordinator on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhone('');
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      Book another appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {formError && (
                    <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
                      {formError}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="9876543210"
                        className="w-full pl-11 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                      />
                    </div>
                  </div>

                  {/* City Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Select City *
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => {
                          setSelectedCity(e.target.value);
                          onSelectCity(e.target.value);
                        }}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                      >
                        {CITIES_LIST.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Speciality Selector */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Select Speciality *
                      </label>
                      <select
                        value={selectedSpeciality}
                        onChange={(e) => setSelectedSpeciality(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                      >
                        {SPECIALITIES_DATA.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.shortName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-1"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Your Slot...</span>
                    ) : (
                      <>
                        <span>BOOK FREE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    By submitting, you agree to receive medical coordination updates. 100% data privacy ensured.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
