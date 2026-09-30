import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  CreditCard,
  QrCode,
  ArrowRight,
  Search,
  Dumbbell,
  BookOpen,
  User,
  Star,
  Check
} from 'lucide-react';
import {
  GoldsGymLocation,
  GoldsGymCourse,
  GoldsGymBlog,
  GOLDS_GYM_LOCATIONS,
  GOLDS_GYM_COURSES
} from '../../data/goldsGymData';

export interface GoldsGymCartItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Membership' | 'Course' | 'Trial';
  price: number;
  duration?: string;
  gymLocation?: string;
  quantity: number;
  image?: string;
}

/* ======================================================================== */
/* 1. CART DRAWER & DEMO CHECKOUT MODAL                                     */
/* ======================================================================== */
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: GoldsGymCartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenCheckout: () => void;
  onExplorePlans: () => void;
}

export const GoldsGymCartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  onExplorePlans
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-['Montserrat',sans-serif]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        {/* Header */}
        <div className="p-4 bg-black text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FFE400] text-black flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider">Your Shopping Cart</h3>
              <p className="text-[11px] text-stone-400">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-3">
                <ShoppingBag className="w-8 h-8 text-stone-400" />
              </div>
              <h4 className="font-bold text-stone-800 text-sm mb-1">Your Cart is Currently Empty</h4>
              <p className="text-xs text-stone-500 max-w-xs mb-6">
                Choose a Gold's Gym membership plan or enroll in a GGFI certified training diploma.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExplorePlans();
                }}
                className="bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Explore Memberships
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex gap-3 items-start relative hover:border-amber-300 transition-colors"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover bg-stone-200 shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0 pr-6">
                  <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-black text-[#FFE400] inline-block mb-1">
                    {item.category}
                  </span>
                  <h5 className="font-bold text-xs text-stone-900 leading-snug line-clamp-1">
                    {item.title}
                  </h5>
                  {item.gymLocation && (
                    <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      <span className="truncate">{item.gymLocation}</span>
                    </p>
                  )}
                  {item.duration && (
                    <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{item.duration}</span>
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-black text-xs text-black">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                    <div className="flex items-center border border-stone-300 rounded bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-3 right-3 text-stone-400 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 bg-stone-50 border-t border-stone-200 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-800">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18% Govt Tax)</span>
                <span className="font-semibold text-stone-800">₹{gst.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-black pt-1 border-t border-stone-200">
                <span>Grand Total</span>
                <span className="text-black">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-stone-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe & Secure 256-Bit SSL Demo Checkout</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ======================================================================== */
/* 2. DEMO CHECKOUT MODAL                                                   */
/* ======================================================================== */
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: GoldsGymCartItem[];
  onOrderComplete: () => void;
}

export const GoldsGymCheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderComplete
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    homeGym: 'Gold’s Gym Mumbai Bandra',
    paymentMethod: 'upi'
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [membershipId, setMembershipId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `GG-IND-${Math.floor(100000 + Math.random() * 900000)}`;
    setMembershipId(generatedId);
    setIsSuccess(true);
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Montserrat',sans-serif]">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
        <div className="p-4 bg-black text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#FFE400] inline-block rounded-xs"></span>
            <h3 className="font-extrabold text-sm uppercase tracking-wider">
              {isSuccess ? 'Enrollment Confirmed' : 'Gold’s Gym Official Enrollment'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-black text-stone-900 uppercase tracking-tight">
              Welcome to the Gold’s Gym Family!
            </h4>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Your official enrollment has been registered successfully. A welcome confirmation along with your digital access pass has been sent to your email.
            </p>

            <div className="bg-[#FFFDE5] border border-amber-300 rounded-xl p-4 max-w-sm mx-auto text-left space-y-1.5">
              <div className="text-[10px] uppercase font-bold text-stone-500">Membership / Enrollment ID</div>
              <div className="text-lg font-black text-black font-mono tracking-wider">{membershipId}</div>
              <div className="text-xs text-stone-700 font-medium">Home Club: {formData.homeGym}</div>
              <div className="text-xs text-stone-700 font-medium">Holder: {formData.fullName || 'Member'}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase px-8 py-3 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                Return to Gold’s Gym
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Order Items Preview */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
              <h5 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Order Summary ({cart.length} items)
              </h5>
              <div className="space-y-1.5 text-xs">
                {cart.map((c) => (
                  <div key={c.id} className="flex justify-between text-stone-800">
                    <span className="truncate pr-2 font-medium">
                      {c.title} x {c.quantity}
                    </span>
                    <span className="font-bold shrink-0">
                      ₹{(c.price * c.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
                <div className="border-t border-stone-200 pt-1.5 flex justify-between font-black text-black">
                  <span>Grand Total (incl. 18% GST)</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Member Details */}
            <div className="space-y-3">
              <h5 className="text-xs font-extrabold text-stone-900 uppercase tracking-wider">
                Member Information
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Home Club Location *
                  </label>
                  <select
                    value={formData.homeGym}
                    onChange={(e) => setFormData({ ...formData, homeGym: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                  >
                    {GOLDS_GYM_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name} ({loc.city})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <h5 className="text-xs font-extrabold text-stone-900 uppercase tracking-wider">
                Select Payment Method
              </h5>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    formData.paymentMethod === 'upi'
                      ? 'border-black bg-amber-50 text-black font-bold'
                      : 'border-stone-200 bg-white text-stone-600'
                  }`}
                >
                  <QrCode className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                  <span className="text-[11px] block">UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    formData.paymentMethod === 'card'
                      ? 'border-black bg-amber-50 text-black font-bold'
                      : 'border-stone-200 bg-white text-stone-600'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                  <span className="text-[11px] block">Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'netbanking' })}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    formData.paymentMethod === 'netbanking'
                      ? 'border-black bg-amber-50 text-black font-bold'
                      : 'border-stone-200 bg-white text-stone-600'
                  }`}
                >
                  <Award className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                  <span className="text-[11px] block">NetBanking</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#FFE400] hover:bg-black hover:text-white text-black font-black text-xs uppercase py-3.5 px-4 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              <span>Confirm & Activate Membership (₹{total.toLocaleString('en-IN')})</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

/* ======================================================================== */
/* 3. SEARCH MODAL                                                          */
/* ======================================================================== */
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGym: (gym: GoldsGymLocation) => void;
  onSelectCourse: (course: GoldsGymCourse) => void;
}

export const GoldsGymSearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectGym,
  onSelectCourse
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredGyms = GOLDS_GYM_LOCATIONS.filter(
    (g) =>
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCourses = GOLDS_GYM_COURSES.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.certification.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 font-['Montserrat',sans-serif]">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl z-10 flex flex-col">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-stone-500 shrink-0" />
          <input
            type="search"
            autoFocus
            placeholder="Search clubs, cities (e.g. Mumbai, Delhi, Bengaluru) or GGFI courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-black placeholder-stone-400 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-black rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Gym Matches */}
          <div>
            <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-stone-400 mb-2 flex items-center justify-between">
              <span>Gold's Gym Clubs ({filteredGyms.length})</span>
              <span className="text-[10px] text-amber-600 font-bold">156+ Pan India</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredGyms.slice(0, 6).map((gym) => (
                <button
                  key={gym.id}
                  onClick={() => {
                    onClose();
                    onSelectGym(gym);
                  }}
                  className="p-2.5 rounded-xl border border-stone-200 hover:border-black hover:bg-stone-50 text-left transition-all cursor-pointer flex gap-2.5 items-center group"
                >
                  <img
                    src={gym.featuredImage}
                    alt={gym.name}
                    className="w-12 h-12 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-xs text-stone-900 truncate group-hover:text-amber-600 transition-colors">
                      {gym.name}
                    </p>
                    <p className="text-[11px] text-stone-500 truncate">{gym.city}, {gym.state}</p>
                    <span className="text-[10px] text-amber-700 font-semibold block mt-0.5">
                      Annual: ₹{gym.annualPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* GGFI Courses */}
          <div>
            <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-stone-400 mb-2">
              GGFI Fitness Institute Courses ({filteredCourses.length})
            </h5>
            <div className="space-y-2">
              {filteredCourses.slice(0, 3).map((course) => (
                <button
                  key={course.id}
                  onClick={() => {
                    onClose();
                    onSelectCourse(course);
                  }}
                  className="w-full p-2.5 rounded-xl border border-stone-200 hover:border-black hover:bg-stone-50 text-left transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-[#FFFDE5] text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-xs text-stone-900">{course.title}</p>
                      <p className="text-[11px] text-stone-500">
                        {course.duration} · {course.mode} Mode
                      </p>
                    </div>
                  </div>
                  <span className="font-black text-xs text-black">
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ======================================================================== */
/* 4. FREE TRIAL / VIP 1-DAY PASS MODAL                                     */
/* ======================================================================== */
interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGym?: string;
}

export const GoldsGymFreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  defaultGym
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    gym: defaultGym || "Gold's Gym Mumbai Bandra",
    slot: 'Evening (5:00 PM – 9:00 PM)',
    goal: 'Weight Loss & Toning'
  });
  const [submitted, setSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassCode(code);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Montserrat',sans-serif]">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
        <div className="p-4 bg-black text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFE400]" />
            <h3 className="font-extrabold text-sm uppercase tracking-wider">
              {submitted ? 'Your VIP Pass Is Ready' : 'Claim 1-Day Free VIP Workout Pass'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto border-2 border-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black text-stone-900 uppercase">
              Free Trial Pass Confirmed!
            </h4>
            <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
              Show this digital pass code at the club reception desk upon arrival. A trainer will guide you through your free workout!
            </p>

            <div className="p-4 bg-black text-white rounded-xl max-w-xs mx-auto text-center border-2 border-[#FFE400] space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
                VIP Pass Voucher Code
              </span>
              <span className="text-2xl font-black text-[#FFE400] font-mono tracking-widest block">
                {passCode}
              </span>
              <span className="text-[11px] text-stone-300 block">{formData.gym}</span>
              <span className="text-[10px] text-stone-500 block">Valid for 7 days</span>
            </div>

            <button
              onClick={onClose}
              className="bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase px-8 py-3 rounded-xl transition-all cursor-pointer shadow-sm mt-3"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="text-center pb-2">
              <p className="text-xs text-stone-600 leading-relaxed">
                Experience world-class Hammer Strength & Life Fitness machinery, steam, and sauna with zero obligations.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">Select Gym Location *</label>
              <select
                value={formData.gym}
                onChange={(e) => setFormData({ ...formData, gym: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
              >
                {GOLDS_GYM_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.city})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">Preferred Time *</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                >
                  <option>Morning (6:00 AM – 10:00 AM)</option>
                  <option>Afternoon (12:00 PM – 4:00 PM)</option>
                  <option>Evening (5:00 PM – 9:00 PM)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">Primary Fitness Goal</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-black"
                >
                  <option>Weight Loss & Toning</option>
                  <option>Muscle & Hypertrophy</option>
                  <option>Athletic Conditioning</option>
                  <option>General Well-Being</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase py-3.5 px-4 rounded-xl transition-all cursor-pointer shadow-md mt-2"
            >
              Generate Free Trial Voucher
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

/* ======================================================================== */
/* 5. INDIVIDUAL GYM DETAIL MODAL                                           */
/* ======================================================================== */
interface GymDetailModalProps {
  gym: GoldsGymLocation | null;
  onClose: () => void;
  onAddToCart: (gym: GoldsGymLocation, planType: 'annual' | 'monthly') => void;
  onOpenFreeTrial: () => void;
}

export const GoldsGymDetailModal: React.FC<GymDetailModalProps> = ({
  gym,
  onClose,
  onAddToCart,
  onOpenFreeTrial
}) => {
  if (!gym) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Montserrat',sans-serif]">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 flex flex-col">
        {/* Header Hero */}
        <div className="relative h-60 sm:h-72 w-full bg-stone-900">
          <img
            src={gym.featuredImage}
            alt={gym.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFE400] text-black inline-block mb-1.5">
              {gym.gymType} · {gym.zone}
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              {gym.name}
            </h3>
            <p className="text-xs text-stone-300 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FFE400]" />
              <span>{gym.address}</span>
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Key Facts Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs">
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Operating Hours</span>
              <span className="font-semibold text-stone-800 block mt-0.5">{gym.operatingHours.weekdays}</span>
              <span className="text-[10px] text-stone-500">Sun: {gym.operatingHours.sunday}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Club Contact</span>
              <span className="font-semibold text-stone-800 block mt-0.5">{gym.phone}</span>
              <span className="text-[10px] text-stone-500 truncate block">{gym.email}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Club Format</span>
              <span className="font-semibold text-stone-800 block mt-0.5">{gym.gymType}</span>
              <span className="text-[10px] text-emerald-600 font-bold">Unisex Active</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Annual Price</span>
              <span className="text-base font-black text-black block mt-0.5">
                ₹{gym.annualPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-stone-500">EMI Available</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 mb-2">
              About This Facility
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">{gym.description}</p>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 mb-2.5">
              Included Amenities & Equipment
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {gym.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700"
                >
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="truncate">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers & Action Buttons */}
          <div className="border-t border-stone-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-bold block">
                Standard Annual Membership
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-black">
                  ₹{gym.annualPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-stone-400">/ year (+ 18% GST)</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenFreeTrial();
                }}
                className="flex-1 sm:flex-none border-2 border-black text-black font-extrabold text-xs uppercase px-5 py-3 rounded-xl hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                1-Day Free Trial
              </button>
              <button
                onClick={() => {
                  onAddToCart(gym, 'annual');
                  onClose();
                }}
                className="flex-1 sm:flex-none bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md"
              >
                Buy Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ======================================================================== */
/* 6. COURSE DETAIL & DEMO CLASS BOOKING MODAL                             */
/* ======================================================================== */
interface CourseModalProps {
  course: GoldsGymCourse | null;
  onClose: () => void;
  onAddToCart: (course: GoldsGymCourse) => void;
}

export const GoldsGymCourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onAddToCart
}) => {
  const [demoBooked, setDemoBooked] = useState(false);
  const [demoPhone, setDemoPhone] = useState('');

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Montserrat',sans-serif]">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 flex flex-col">
        <div className="p-4 bg-black text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#FFE400]" />
            <h3 className="font-extrabold text-xs uppercase tracking-wider">
              {course.code} · Gold’s Gym Fitness Institute
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <img
              src={course.image}
              alt={course.title}
              className="w-full sm:w-44 h-36 rounded-xl object-cover bg-stone-200 shrink-0"
            />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 inline-block mb-1">
                {course.mode} Learning Mode · {course.duration}
              </span>
              <h4 className="text-lg font-black text-stone-900 leading-snug">
                {course.title}
              </h4>
              <p className="text-xs text-stone-500 mt-1 font-medium">
                Accreditation: {course.certification}
              </p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl font-black text-black">
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-stone-400 line-through">
                  ₹{course.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Save ₹{(course.originalPrice - course.price).toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 mb-1.5">
              Course Overview
            </h5>
            <p className="text-xs text-stone-600 leading-relaxed">{course.description}</p>
          </div>

          {/* Highlights */}
          <div className="bg-[#FFFDE5] border border-amber-300 rounded-xl p-3.5 space-y-1.5">
            <h5 className="text-xs font-black uppercase text-amber-900">Career Highlights</h5>
            <ul className="text-xs text-amber-950 space-y-1">
              {course.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 mb-2">
              Core Curriculum Modules
            </h5>
            <div className="space-y-1">
              {course.syllabus.map((m, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs font-medium text-stone-800 flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking / Purchase Actions */}
          <div className="border-t border-stone-200 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            {demoBooked ? (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Demo class seat reserved! Our counselor will call you.
              </span>
            ) : (
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={demoPhone}
                  onChange={(e) => setDemoPhone(e.target.value)}
                  className="bg-stone-50 border border-stone-300 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-black w-36"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (demoPhone.trim()) setDemoBooked(true);
                  }}
                  className="border border-black text-black font-extrabold text-xs uppercase px-3.5 py-2 rounded-lg hover:bg-stone-100 cursor-pointer"
                >
                  Book Free Demo
                </button>
              </div>
            )}

            <button
              onClick={() => {
                onAddToCart(course);
                onClose();
              }}
              className="w-full sm:w-auto bg-[#FFE400] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md"
            >
              Enroll & Buy Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ======================================================================== */
/* 7. BLOG ARTICLE READER MODAL                                             */
/* ======================================================================== */
interface BlogModalProps {
  blog: GoldsGymBlog | null;
  onClose: () => void;
}

export const GoldsGymBlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Montserrat',sans-serif]">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
        <div className="relative h-56 w-full">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFE400] text-black inline-block mb-1">
              {blog.category}
            </span>
            <h3 className="text-lg sm:text-xl font-black leading-tight">{blog.title}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
            <span>By {blog.author}</span>
            <span>{blog.date} · {blog.readTime}</span>
          </div>

          <div className="text-xs text-stone-700 leading-relaxed space-y-3 whitespace-pre-line font-['Montserrat']">
            {blog.content}
          </div>

          <div className="pt-4 border-t border-stone-200 flex justify-end">
            <button
              onClick={onClose}
              className="bg-black text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg hover:bg-[#FFE400] hover:text-black transition-colors cursor-pointer"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
