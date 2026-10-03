import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  User,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Building,
} from 'lucide-react';
import {
  SKINSCIENE_CONFIG,
  TREATMENTS_DATA,
  CLINIC_LOCATIONS,
  DOCTORS_DATA,
} from '../../data/skinScieneData';

interface SkinScieneAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentSlug?: string;
  initialBranchName?: string;
  initialDoctorName?: string;
  selectedCity: string;
}

export const SkinScieneAppointmentModal: React.FC<SkinScieneAppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentSlug,
  initialBranchName,
  initialDoctorName,
  selectedCity,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form states
  const [selectedConcern, setSelectedConcern] = useState(
    initialTreatmentSlug || 'laser-hair-removal'
  );
  const [patientCity, setPatientCity] = useState(selectedCity || 'Hyderabad');
  const [preferredBranch, setPreferredBranch] = useState(
    initialBranchName || ''
  );
  const [preferredDoctor, setPreferredDoctor] = useState(
    initialDoctorName || ''
  );
  const [appointmentDate, setAppointmentDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [timeSlot, setTimeSlot] = useState('11:30 AM - 12:30 PM (Morning)');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState('26');
  const [notes, setNotes] = useState('');

  // Confirmation state
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  const cityClinics = CLINIC_LOCATIONS.filter((c) => c.city === patientCity);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!patientName || !patientPhone) return;
      // Generate simulated booking ID
      const cityCode = patientCity.slice(0, 3).toUpperCase();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      setConfirmedBookingId(`SSN-${cityCode}-${randomNum}`);
      setStep(3);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setConfirmedBookingId(null);
    onClose();
  };

  const selectedTreatmentItem = TREATMENTS_DATA.find(
    (t) => t.slug === selectedConcern
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Book Free Clinical Assessment
              </h3>
              <p className="text-[11px] text-emerald-300">
                100% Dermatologist-Led · 36+ Clinics in 10 Cities
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-800">
          {step === 3 && confirmedBookingId ? (
            /* Confirmation Screen */
            <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                  Consultation Confirmed
                </span>
                <h4 className="font-serif font-bold text-2xl text-slate-900">
                  Appointment Scheduled!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  We look forward to welcoming you at SkinSciene Naturals. A confirmation SMS & WhatsApp reminder has been dispatched to{' '}
                  <strong>+91 {patientPhone}</strong>.
                </p>
              </div>

              {/* Booking Summary Ticket */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left space-y-2.5 text-xs text-slate-700 max-w-md mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-400 font-medium">Booking ID</span>
                  <span className="font-mono font-bold text-emerald-800 text-sm">
                    {confirmedBookingId}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Patient Name:</span>
                  <strong>{patientName}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Clinical Concern:</span>
                  <strong>{selectedTreatmentItem?.name || selectedConcern}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Clinic Location:</span>
                  <strong>
                    {preferredBranch || `${patientCity} Flagship Clinic`}
                  </strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Scheduled Date & Time:</span>
                  <strong className="text-emerald-800">
                    {appointmentDate} · {timeSlot.split(' ')[0]} {timeSlot.split(' ')[1]}
                  </strong>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <strong className="text-emerald-700 uppercase font-bold">
                    Complimentary (Free Screening)
                  </strong>
                </div>
              </div>

              <div className="text-xs text-slate-500 max-w-sm mx-auto flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Complimentary digital dermascope analysis included.</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="w-full max-w-xs py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* Step 1: Select Concern, City, Date */
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                <span className="font-bold text-emerald-800">Step 1 of 2: Select Details</span>
                <span className="text-slate-400">Next: Patient Information</span>
              </div>

              {/* Treatment Concern */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Clinical Concern or Treatment
                </label>
                <select
                  value={selectedConcern}
                  onChange={(e) => setSelectedConcern(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none"
                >
                  {TREATMENTS_DATA.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.category.toUpperCase()}: {t.name} ({t.tag})
                    </option>
                  ))}
                </select>
              </div>

              {/* City Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    City
                  </label>
                  <select
                    value={patientCity}
                    onChange={(e) => {
                      setPatientCity(e.target.value);
                      setPreferredBranch('');
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none"
                  >
                    {SKINSCIENE_CONFIG.cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Clinic Branch
                  </label>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none"
                  >
                    <option value="">Nearest Available Branch</option>
                    {cityClinics.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.area})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-emerald-600 focus:outline-none"
                  >
                    <option value="10:00 AM - 11:00 AM (Morning)">10:00 AM - 11:00 AM</option>
                    <option value="11:30 AM - 12:30 PM (Morning)">11:30 AM - 12:30 PM</option>
                    <option value="02:30 PM - 03:30 PM (Afternoon)">02:30 PM - 03:30 PM</option>
                    <option value="04:30 PM - 05:30 PM (Evening)">04:30 PM - 05:30 PM</option>
                    <option value="06:30 PM - 07:30 PM (Evening)">06:30 PM - 07:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Patient Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Step 2: Patient Info */
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Step 1</span>
                </button>
                <span className="font-bold text-emerald-800">Step 2 of 2: Patient Details</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Sharma"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mobile Number * (For Confirmation)
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      maxLength={10}
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-200 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="radhika@example.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Specific Skin/Hair Concerns or Previous Treatments
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. History of active acne on cheeks, sensitive skin, previous laser attempt..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl text-xs text-emerald-900 border border-emerald-100 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Doctor-Patient Confidentiality Guaranteed. Your information is strictly protected under medical compliance guidelines.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Confirm Free Clinical Appointment</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
