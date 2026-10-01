import React, { useState } from 'react';
import {
  X,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  QrCode,
  Heart,
  Activity,
  ArrowRight,
  Phone,
  Flame,
  User,
  Check
} from 'lucide-react';
import { FitpassStudio, FitpassPlan, FITPASS_CITIES } from '../../data/fitpassData';

// 1. Studio Detail Modal
interface StudioDetailModalProps {
  studio: FitpassStudio | null;
  onClose: () => void;
  onOpenBooking: (studio: FitpassStudio) => void;
}

export const StudioDetailModal: React.FC<StudioDetailModalProps> = ({
  studio,
  onClose,
  onOpenBooking
}) => {
  if (!studio) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Image & Logo Badge */}
        <div className="h-64 relative overflow-hidden bg-stone-900">
          <img
            src={studio.profileImage}
            alt={studio.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-lg overflow-hidden shrink-0 border border-gray-100">
              <img src={studio.logo} alt={studio.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white">{studio.name}</h2>
                {studio.isVerified && (
                  <span className="bg-[#2563EB] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    VERIFIED
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-200 flex items-center gap-2 mt-0.5">
                <span>{studio.locality}, {studio.city}</span>
                <span>•</span>
                <span>{studio.distanceKm} km away</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 bg-gray-50 rounded-2xl p-3 text-center border border-gray-100">
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Rating</span>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-sm text-[#0A1F34]">{studio.rating}</span>
                <span className="text-xs text-gray-500">({studio.ratingCount})</span>
              </div>
            </div>
            <div className="border-x border-gray-200">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Open Timings</span>
              <span className="font-bold text-xs text-[#0A1F34] mt-0.5 block truncate px-1">
                {studio.openTimings}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Pass Accepted</span>
              <span className="font-bold text-xs text-emerald-600 mt-0.5 block">
                100% Free with FITPASS
              </span>
            </div>
          </div>

          {/* About Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1F34] mb-1.5">
              About This Studio
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {studio.description}
            </p>
          </div>

          {/* Activities Offered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1F34] mb-2">
              Available Workouts
            </h4>
            <div className="flex flex-wrap gap-2">
              {studio.workouts.map(w => (
                <span
                  key={w}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#D6383B] border border-red-100"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          {/* Studio Amenities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1F34] mb-2">
              Amenities & Facilities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-700">
              {studio.amenities.map(a => (
                <div key={a} className="flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Address */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#0A1F34]">
              <MapPin className="w-4 h-4 text-[#D6383B]" />
              <span>Full Address</span>
            </div>
            <p className="text-gray-600 pl-5">
              {studio.addressLine1}, {studio.addressLine2}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onOpenBooking(studio)}
              className="flex-1 py-3.5 rounded-xl bg-[#D6383B] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Workout Slot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Reserve Session Booking Modal
interface ReserveSessionModalProps {
  studio: FitpassStudio | null;
  onClose: () => void;
}

export const ReserveSessionModal: React.FC<ReserveSessionModalProps> = ({ studio, onClose }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<string>(studio?.workouts[0] || 'Gym Workout');
  const [selectedDate, setSelectedDate] = useState<string>('Today');
  const [selectedSlot, setSelectedSlot] = useState<string>('06:00 PM - 07:00 PM');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!studio) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `FP-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(id);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative my-8 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!confirmed ? (
          <form onSubmit={handleConfirm} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#D6383B] uppercase tracking-wider">
                Instant QR Check-In
              </span>
              <h3 className="text-xl font-black text-[#0A1F34]">
                Reserve Workout at {studio.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {studio.locality}, {studio.city} • Open {studio.openTimings}
              </p>
            </div>

            {/* Workout Choice */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Select Activity
              </label>
              <div className="grid grid-cols-2 gap-2">
                {studio.workouts.map(w => (
                  <button
                    type="button"
                    key={w}
                    onClick={() => setSelectedWorkout(w)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-left transition-all cursor-pointer ${
                      selectedWorkout === w
                        ? 'border-[#D6383B] bg-red-50 text-[#D6383B]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Workout Date
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Today', 'Tomorrow', 'Day After'].map(d => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`py-2 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      selectedDate === d
                        ? 'border-[#D6383B] bg-red-50 text-[#D6383B]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Preferred Time Slot
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '06:30 AM - 07:30 AM',
                  '08:00 AM - 09:00 AM',
                  '05:30 PM - 06:30 PM',
                  '07:00 PM - 08:00 PM'
                ].map(slot => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 text-[11px] font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      selectedSlot === slot
                        ? 'border-[#D6383B] bg-red-50 text-[#D6383B]'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Pass Balance Indicator */}
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl flex items-center justify-between text-xs text-emerald-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unlimited Pass Active (0 INR to pay)</span>
              </div>
              <span className="font-bold text-emerald-700">₹0.00</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Generate Check-In Pass</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Workout Confirmed
              </span>
              <h3 className="text-2xl font-black text-[#0A1F34] mt-2">
                Your FITPASS Check-In Pass
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Show this digital QR pass at {studio.name} reception desk
              </p>
            </div>

            {/* Simulated Digital Ticket */}
            <div className="bg-gradient-to-br from-stone-900 to-[#0A1F34] text-white p-5 rounded-2xl shadow-xl text-left space-y-4 border border-stone-800">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block">
                    FITPASS ONE PASS
                  </span>
                  <span className="font-bold text-base text-white">{studio.name}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white p-1">
                  <img src={studio.logo} alt="logo" className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Workout</span>
                  <span className="font-bold text-white">{selectedWorkout}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Slot Time</span>
                  <span className="font-bold text-white">{selectedDate}, {selectedSlot}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Pass ID</span>
                  <span className="font-mono font-bold text-amber-300">{bookingId}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Status</span>
                  <span className="font-bold text-emerald-400">Confirmed ✓</span>
                </div>
              </div>

              {/* QR Code Graphic */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded-lg p-1">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${bookingId}`}
                      alt="QR"
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] text-stone-300 leading-tight">
                    Scan for immediate turnstile admission
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-[#0A1F34] font-bold text-xs rounded-xl cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. City & Locality Selector Modal
interface CityModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: string;
  selectedLocality: string;
  onSelectLocation: (city: string, locality: string) => void;
}

export const CityModal: React.FC<CityModalProps> = ({
  isOpen,
  onClose,
  selectedCity,
  selectedLocality,
  onSelectLocation
}) => {
  const [activeCityTab, setActiveCityTab] = useState(selectedCity);

  if (!isOpen) return null;

  const currentCityData = FITPASS_CITIES.find(c => c.name === activeCityTab) || FITPASS_CITIES[0];

  return (
    <div className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <span className="text-[10px] uppercase font-bold text-[#D6383B] tracking-wider">
            150+ Indian Cities Supported
          </span>
          <h3 className="text-xl font-black text-[#0A1F34]">
            Select Your City & Neighbourhood
          </h3>
          <p className="text-xs text-gray-500">
            Switch your workout location to discover nearby partner gyms and studios
          </p>
        </div>

        {/* City Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-gray-100">
          {FITPASS_CITIES.map(c => (
            <button
              key={c.name}
              onClick={() => setActiveCityTab(c.name)}
              className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                activeCityTab === c.name
                  ? 'bg-[#0A1F34] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Localities for active city */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-gray-600 block">
            Popular Localities in {activeCityTab}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1">
            {currentCityData.localities.map(loc => {
              const isSelected = selectedCity === activeCityTab && selectedLocality === loc;
              return (
                <button
                  key={loc}
                  onClick={() => {
                    onSelectLocation(activeCityTab, loc);
                    onClose();
                  }}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#D6383B] bg-red-50 text-[#D6383B] font-bold'
                      : 'border-gray-200 text-gray-800 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="truncate">{loc}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#D6383B] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Interactive BMI Calculator Modal (FITFEAST Requirement)
interface BmiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreFitfeast: () => void;
}

export const BmiCalculatorModal: React.FC<BmiModalProps> = ({
  isOpen,
  onClose,
  onExploreFitfeast
}) => {
  const [gender, setGender] = useState<'Male' | 'Female'>('Female');
  const [age, setAge] = useState<number>(26);
  const [heightCm, setHeightCm] = useState<number>(165);
  const [weightKg, setWeightKg] = useState<number>(62);
  const [activityLevel, setActivityLevel] = useState<'Sedentary' | 'Moderate' | 'Active'>('Moderate');

  if (!isOpen) return null;

  // Real formula calculation
  const heightM = heightCm / 100;
  const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

  let category = 'Normal';
  let categoryColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  let advice = 'Your weight is in a healthy range! Focus on maintaining lean muscle tone and cardiovascular endurance.';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-amber-600 bg-amber-50 border-amber-200';
    advice = 'Caloric surplus with nutrient-dense protein shakes, complex grains, and progressive resistance training is recommended.';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    categoryColor = 'text-orange-600 bg-orange-50 border-orange-200';
    advice = 'A mild 300-500 kcal deficit combined with regular 45-min gym and cardio sessions will help achieve sustainable fat loss.';
  } else if (bmi >= 30) {
    category = 'Obese';
    categoryColor = 'text-red-600 bg-red-50 border-red-200';
    advice = 'Consult FITFEAST clinical nutritionists for personalized macro planning and low-impact joint-friendly workouts.';
  }

  // Daily target calorie estimate
  const bmr = gender === 'Male'
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  const mult = activityLevel === 'Sedentary' ? 1.2 : activityLevel === 'Moderate' ? 1.55 : 1.75;
  const targetCalories = Math.round(bmr * mult);

  return (
    <div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <span className="text-[10px] uppercase font-bold text-[#D6383B] tracking-wider">
            FITFEAST Nutrition Engine
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#0A1F34]">
            Clinical Health & BMI Calculator
          </h3>
          <p className="text-xs text-gray-500">
            Calculate your Body Mass Index and daily energy requirements instantly
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          {/* Gender */}
          <div className="grid grid-cols-2 gap-3">
            {(['Female', 'Male'] as const).map(g => (
              <button
                type="button"
                key={g}
                onClick={() => setGender(g)}
                className={`py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  gender === g
                    ? 'border-[#D6383B] bg-red-50 text-[#D6383B]'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Age, Height, Weight */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-bold text-gray-600 block mb-1">Age (Years)</label>
              <input
                type="number"
                value={age}
                onChange={e => setAge(parseInt(e.target.value) || 20)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm font-bold text-[#0A1F34] outline-none focus:border-[#D6383B]"
                min={12}
                max={90}
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-600 block mb-1">Height (cm)</label>
              <input
                type="number"
                value={heightCm}
                onChange={e => setHeightCm(parseInt(e.target.value) || 150)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm font-bold text-[#0A1F34] outline-none focus:border-[#D6383B]"
                min={100}
                max={230}
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-600 block mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weightKg}
                onChange={e => setWeightKg(parseInt(e.target.value) || 50)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm font-bold text-[#0A1F34] outline-none focus:border-[#D6383B]"
                min={30}
                max={200}
              />
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="text-[11px] font-bold text-gray-600 block mb-1.5">Weekly Activity Level</label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {(['Sedentary', 'Moderate', 'Active'] as const).map(lvl => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setActivityLevel(lvl)}
                  className={`py-2 px-2 text-[11px] font-bold rounded-xl border transition-all cursor-pointer ${
                    activityLevel === lvl
                      ? 'border-[#D6383B] bg-red-50 text-[#D6383B]'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Result Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Your Calculated BMI</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#0A1F34]">{bmi}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${categoryColor}`}>
                  {category}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-gray-400 block">Maintenance Calories</span>
              <span className="text-xl font-black text-[#D6383B]">{targetCalories} kcal/day</span>
            </div>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
            {advice}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onExploreFitfeast();
            }}
            className="flex-1 py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
          >
            Get Custom FITFEAST Diet Plan
          </button>
        </div>
      </div>
    </div>
  );
};

// 5. Login / OTP Modal
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'input' | 'otp' | 'success'>('input');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier.trim().length >= 4) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onClose();
      setStep('input');
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'input' && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#D6383B] tracking-wider">
                Member Portal
              </span>
              <h3 className="text-2xl font-black text-[#0A1F34]">
                Log In to FITPASS
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Enter your registered mobile number or email ID to access your passes
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">
                Mobile Number / Email ID
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 9820012345 or user@email.com"
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#D6383B] font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Get Verification Code
            </button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
                OTP Sent Successfully
              </span>
              <h3 className="text-2xl font-black text-[#0A1F34]">
                Enter 6-Digit Code
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                We sent a temporary code to <strong className="text-gray-800">{identifier}</strong>
              </p>
            </div>

            <div className="flex gap-2 justify-center py-2">
              {[0, 1, 2, 3, 4, 5].map(idx => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  defaultValue={idx + 1}
                  className="w-11 h-12 border border-gray-300 rounded-xl text-center font-bold text-lg text-[#0A1F34] focus:border-[#D6383B] outline-none"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Verify & Sign In
            </button>
          </form>
        )}

        {step === 'success' && (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#0A1F34]">Welcome Back to FITPASS!</h3>
            <p className="text-xs text-gray-500">
              Your unlimited workout pass is active across 12,000+ gyms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// 6. Plan Subscription / Checkout Modal
interface CheckoutModalProps {
  plan: FitpassPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  if (!plan) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      onClose();
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!success ? (
          <form onSubmit={handleCheckout} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#D6383B] tracking-wider">
                Instant Activation
              </span>
              <h3 className="text-2xl font-black text-[#0A1F34] mt-0.5">
                Subscribe to {plan.label}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Access 12,000+ premium fitness centres in 150+ cities immediately
              </p>
            </div>

            {/* Plan Price Summary */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0A1F34] block">{plan.title}</span>
                <span className="text-[11px] text-gray-500">₹{plan.monthlySellingPrice}/month</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 line-through block">₹{plan.actualPrice.toLocaleString('en-IN')}</span>
                <span className="text-lg font-black text-[#D6383B]">₹{plan.totalSellingPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#D6383B]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">Mobile Number</label>
              <input
                type="tel"
                required
                placeholder="e.g. 9820012345"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#D6383B]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Complete Demo Activation (₹0)
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#0A1F34]">
              Membership Activated!
            </h3>
            <p className="text-xs text-gray-600">
              Welcome, {name || 'Fitster'}! Your pass is active. You can now walk into any of our 12,000+ gyms and scan your digital QR code.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
