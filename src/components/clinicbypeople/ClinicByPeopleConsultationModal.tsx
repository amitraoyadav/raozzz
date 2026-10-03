import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Stethoscope,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Phone,
} from 'lucide-react';
import {
  CLINIC_CONFIG,
  CITIES_LIST,
  SPECIALITIES_DATA,
  ClinicConsultationLead,
  submitClinicConsultation,
  buildClinicWhatsAppLink,
} from '../../data/clinicByPeopleData';

interface ClinicByPeopleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpeciality?: string;
  initialCity?: string;
  initialNote?: string;
}

export const ClinicByPeopleConsultationModal: React.FC<ClinicByPeopleConsultationModalProps> = ({
  isOpen,
  onClose,
  initialSpeciality = "General Surgery",
  initialCity = "Delhi NCR",
  initialNote = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(initialCity);
  const [speciality, setSpeciality] = useState(initialSpeciality);
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (initialSpeciality) setSpeciality(initialSpeciality);
      if (initialCity) setCity(initialCity);
      setSubmitted(false);
      setIsSubmitting(false);
      setErrorMsg('');
    }
  }, [isOpen, initialSpeciality, initialCity]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!fullName.trim()) {
      setErrorMsg('Please enter patient full name');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    const lead: ClinicConsultationLead = {
      fullName,
      phone: cleanPhone,
      city,
      speciality,
      preferredDate,
      preferredTime,
      notes: initialNote || 'Book consultation modal request',
    };

    await submitClinicConsultation(lead);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 font-['Lexend',sans-serif]">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                Consultation Request Registered
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Thank You, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-md mx-auto">
                Thank you. Your consultation request has been received. A dedicated ClinicByPeople care coordinator will call you within 15 minutes to confirm your specialist slot in <strong className="text-slate-900">{city}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs space-y-1.5 text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-400">Speciality:</span>
                <span className="font-bold text-slate-900">{speciality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Preferred Slot:</span>
                <span className="font-semibold text-slate-900">{preferredDate} · {preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone:</span>
                <span className="font-mono text-slate-900">+91 {phone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={buildClinicWhatsAppLink(`Hi ClinicByPeople, I just submitted an appointment request for ${fullName} in ${city} for ${speciality}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Update</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100 inline-flex items-center gap-1 mb-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Zero Consultation Fee</span>
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Book Free Specialist Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your details to schedule an evaluation with a senior surgeon near you.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium mb-3">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* 1. Full Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Anand Verma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                />
              </div>

              {/* 2. Phone */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number (10 Digits) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
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

              {/* 3 & 4. City & Speciality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    City *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                  >
                    {CITIES_LIST.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Speciality *
                  </label>
                  <select
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                  >
                    {SPECIALITIES_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5 & 6. Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                  >
                    <option value="Today">Today (Urgent)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Within 3 Days">Within 3 Days</option>
                    <option value="This Weekend">This Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 focus:border-[#0C5BE2]"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (4:00 PM – 7:30 PM)">Evening (4 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {isSubmitting ? (
                  <span>Securing Doctor Slot...</span>
                ) : (
                  <>
                    <span>BOOK CONSULTATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-[10px] text-center text-slate-400 space-y-0.5">
                <p>100% Confidential · Free Doorstep Cab Support on Procedure Day</p>
                <p>Zero spam guarantee · Demo consultation mode</p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
