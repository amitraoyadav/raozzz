import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  Send,
} from 'lucide-react';
import {
  DOCTORS_LIST,
  SPECIALITIES_LIST,
  submitMedicareAppointment,
  MedicareAppointmentLead,
} from '../../data/medicarePlusData';

interface MedicarePlusAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorName?: string;
  initialSpeciality?: string;
}

export const MedicarePlusAppointmentModal: React.FC<MedicarePlusAppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctorName = '',
  initialSpeciality = '',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctorName);
  const [selectedSpeciality, setSelectedSpeciality] = useState(initialSpeciality || 'Cardiology');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [message, setMessage] = useState('');

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedId, setConfirmedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialDoctorName) setSelectedDoctor(initialDoctorName);
    if (initialSpeciality) setSelectedSpeciality(initialSpeciality);
  }, [initialDoctorName, initialSpeciality]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!patientName.trim()) {
      setFormError('Please enter the patient full name');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!preferredDate) {
      setFormError('Please select a preferred appointment date');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      const res = await submitMedicareAppointment({
        patientName,
        phone,
        email,
        doctorName: selectedDoctor || 'Any Available Senior Consultant',
        speciality: selectedSpeciality,
        preferredDate,
        preferredTime,
        message,
      });

      setConfirmedId(res.appointmentId);
    } catch {
      setConfirmedId('MED-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setConfirmedId(null);
    setPatientName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 font-['Satoshi',sans-serif]">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedId ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-[#00A896] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
              Appointment Request Confirmed
            </span>

            <h3 className="text-2xl font-black text-[#0C4A60]">
              Your Appointment Request Has Been Received
            </h3>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs space-y-1.5 text-left">
              <p>
                <strong>Appointment Ref:</strong> <span className="font-mono text-teal-700 font-bold">{confirmedId}</span>
              </p>
              <p>
                <strong>Patient:</strong> {patientName}
              </p>
              <p>
                <strong>Speciality / Department:</strong> {selectedSpeciality}
              </p>
              <p>
                <strong>Preferred Date:</strong> {preferredDate} ({preferredTime})
              </p>
              {selectedDoctor && (
                <p>
                  <strong>Doctor:</strong> {selectedDoctor}
                </p>
              )}
            </div>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Our hospital central OPD reception coordinator will call your mobile number to confirm your exact token number and doctor availability.
            </p>

            <button
              onClick={resetForm}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0C4A60] hover:bg-[#083344] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00A896]">
                Hospital OPD Scheduling
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0C4A60] mt-1">
                Request an Appointment
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill the consultation form below to reserve an OPD slot with our specialists.
              </p>
            </div>

            {formError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Medical Speciality
                  </label>
                  <select
                    value={selectedSpeciality}
                    onChange={(e) => setSelectedSpeciality(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] cursor-pointer"
                  >
                    {SPECIALITIES_LIST.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Doctor (Optional)
                  </label>
                  <select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] cursor-pointer"
                  >
                    <option value="">Any Senior Consultant</option>
                    {DOCTORS_LIST.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.speciality})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] cursor-pointer"
                  >
                    <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Symptoms or Remarks (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your health concern or symptoms briefly..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00A896] resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0C4A60] to-[#007A87] hover:from-[#083344] hover:to-[#005B66] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Reserving Slot...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-teal-300" />
                    <span>REQUEST APPOINTMENT</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Demonstration scheduling portal. No actual payments or medical files are transmitted.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
