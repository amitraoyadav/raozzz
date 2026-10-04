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
  Upload,
  FileText,
} from 'lucide-react';
import { LIVINTO_CONFIG, SHOWROOMS_DATA } from '../../data/livintoInteriorsData';

interface LivintoConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCity?: string;
  preselectedPackage?: string;
}

export const LivintoConsultationModal: React.FC<LivintoConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCity = 'Bengaluru',
  preselectedPackage = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [propertyType, setPropertyType] = useState('Apartment');
  const [bhk, setBhk] = useState('3 BHK');
  const [consultationMode, setConsultationMode] = useState<'showroom' | 'virtual'>('showroom');
  const [city, setCity] = useState(preselectedCity);
  const [selectedShowroom, setSelectedShowroom] = useState(SHOWROOMS_DATA[0].branchName);
  const [budgetTier, setBudgetTier] = useState('Premium (₹6 - 10L)');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM - 01:00 PM');
  const [uploadedPlanName, setUploadedPlanName] = useState<string | null>(null);

  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedPlanName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 8) return;
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#814882] to-[#5a2e5b] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Free 3D Design Session</span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Book Interior Consultation
            </h3>
            <p className="text-xs text-purple-200">
              {preselectedPackage ? `Package: ${preselectedPackage}` : '40-Day Delivery • 10-Year Warranty • Dedicated Architect'}
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress */}
        {!isSuccess && (
          <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#814882]' : ''}`}>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 1 ? 'bg-[#814882] text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                1
              </div>
              <span className="hidden sm:inline">Property</span>
            </div>
            <div className="h-0.5 w-12 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#814882]' : ''}`}>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 2 ? 'bg-[#814882] text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                2
              </div>
              <span className="hidden sm:inline">Showroom</span>
            </div>
            <div className="h-0.5 w-12 bg-slate-200" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#814882]' : ''}`}>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 3 ? 'bg-[#814882] text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                3
              </div>
              <span className="hidden sm:inline">Contact</span>
            </div>
          </div>
        )}

        {/* Body Form */}
        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Property Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Apartment', 'Villa', 'Independent House', 'Penthouse'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPropertyType(type)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            propertyType === type
                              ? 'bg-purple-50 border-[#814882] text-[#814882] shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Configuration / BHK Size
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['1 BHK', '2 BHK', '3 BHK', '4 BHK+ / Villa'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBhk(b)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            bhk === b
                              ? 'bg-[#814882] border-[#814882] text-white shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Budget Expectation
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'Essential (₹4 - 6L)',
                        'Premium (₹6 - 10L)',
                        'Luxury (₹10L+)',
                      ].map((bud) => (
                        <button
                          key={bud}
                          type="button"
                          onClick={() => setBudgetTier(bud)}
                          className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            budgetTier === bud
                              ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {bud}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Next: Select Showroom / Mode</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Consultation Preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setConsultationMode('showroom')}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          consultationMode === 'showroom'
                            ? 'bg-purple-50 border-[#814882] text-slate-900 ring-1 ring-purple-300'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <div className="font-bold text-xs text-[#814882] flex items-center gap-1 mb-1">
                          <Building className="w-3.5 h-3.5" />
                          <span>Showroom Visit</span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Touch life-size kitchens, sliding wardrobes &amp; materials in person.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setConsultationMode('virtual')}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          consultationMode === 'virtual'
                            ? 'bg-purple-50 border-[#814882] text-slate-900 ring-1 ring-purple-300'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <div className="font-bold text-xs text-[#814882] flex items-center gap-1 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Virtual 3D Video Call</span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Connect with senior interior designer via Google Meet from home.
                        </p>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Select City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                    >
                      {LIVINTO_CONFIG.cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {consultationMode === 'showroom' && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Experience Centre
                      </label>
                      <select
                        value={selectedShowroom}
                        onChange={(e) => setSelectedShowroom(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                      >
                        {SHOWROOMS_DATA.map((s) => (
                          <option key={s.id} value={s.branchName}>
                            {s.branchName} ({s.area})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Optional Floor Plan Upload */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Upload Floor Plan (Optional)
                    </label>
                    <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-purple-400 rounded-2xl cursor-pointer bg-slate-50 transition-colors">
                      <Upload className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs font-semibold text-slate-700">
                        {uploadedPlanName ? uploadedPlanName : 'Click to upload PDF or Image'}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        Helps our architects prepare customized 2D layout before meeting
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Next: Contact Information</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Chandra"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Slot
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-purple-600"
                      >
                        <option>10:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 02:00 PM</option>
                        <option>02:00 PM - 04:00 PM</option>
                        <option>04:00 PM - 06:00 PM</option>
                        <option>06:00 PM - 08:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#814882] to-[#5a2e5b] hover:from-[#6e3a6f] hover:to-[#4e274f] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-300" />
                      <span>Confirm Free Consultation Booking</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-2xl text-slate-900">
                  Consultation Confirmed!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{name || 'Homeowner'}</strong>. Your consultation booking for{' '}
                  <strong className="text-[#814882]">{bhk} {propertyType}</strong> has been allocated to a senior project architect.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Ref:</span>
                  <span className="font-mono font-bold text-slate-900">
                    LIV-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Mode:</span>
                  <span className="font-semibold text-slate-900">
                    {consultationMode === 'showroom' ? `Showroom: ${selectedShowroom}` : 'Virtual 3D Video Call'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time:</span>
                  <span className="font-semibold text-slate-900">
                    {preferredDate || 'Upcoming Weekend'} • {preferredTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-semibold text-slate-900">{phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close &amp; Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
