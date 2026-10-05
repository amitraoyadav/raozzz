import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, Sparkles, User, ShieldCheck, Heart, Plane, Compass, AlertCircle } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

// ==========================================
// 1. CHECKOUT MODAL
// ==========================================
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  planType?: 'couple' | 'planner-studio' | 'planner-agency';
  onSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  currency,
  planType = 'couple',
  onSuccess
}) => {
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    partnerName: '',
    weddingDate: '',
    destination: 'Tuscany, Italy',
    cardNumber: '4242 •••• •••• 4242',
    expiry: '06/28',
    cvc: '730'
  });

  if (!isOpen) return null;

  const currentCurr = raozWeddingHubConfig.CURRENCIES.find(c => c.code === currency) || raozWeddingHubConfig.CURRENCIES[0];
  
  let basePrice = currentCurr.couplePrice;
  let planName = 'Raoz Wedding Hub — Full Couple Chapter';
  if (planType === 'planner-studio') {
    basePrice = currentCurr.plannerStudio;
    planName = 'Planner Partner — Studio (Up to 5 Weddings)';
  } else if (planType === 'planner-agency') {
    basePrice = currentCurr.plannerAgency;
    planName = 'Planner Partner — Agency (Unlimited + White-Label)';
  }

  const finalPrice = couponApplied ? Math.round(basePrice * 0.9) : basePrice;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'RAOZCALM' || coupon.trim().toUpperCase() === 'CALM10' || coupon.trim().toUpperCase() === 'LOVE') {
      setCouponApplied(true);
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      onSuccess();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full overflow-hidden border border-[#E8DFD3] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1F1B16] flex items-center justify-center transition-colors border border-[#E8DFD3]"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div className="p-7 sm:p-9 space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#A85C3D] font-bold">
                Lifetime Access · No Subscriptions
              </span>
              <h3 className="font-serif font-medium text-2xl text-[#1F1B16] mt-1">
                {planName}
              </h3>
              <p className="text-xs text-[#6B6155] mt-1">
                One-time transparent payment. All guest hubs, itineraries, budget trackers &amp; coordination included.
              </p>
            </div>

            {/* Price pill */}
            <div className="bg-white rounded-2xl p-4 border border-[#E8DFD3] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7A6E62] block">Total Investment</span>
                <span className="font-serif text-2xl font-bold text-[#1F1B16]">
                  {currentCurr.symbol}{finalPrice}
                </span>
                {couponApplied && (
                  <span className="text-[11px] text-emerald-700 ml-2 font-mono">
                    (10% code applied)
                  </span>
                )}
              </div>
              <span className="text-[11px] font-mono text-[#8A7B6E] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8DFD3]">
                Zero Renewal Traps
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handlePay} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none focus:border-[#A85C3D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@example.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none focus:border-[#A85C3D]"
                  />
                </div>
              </div>

              {planType === 'couple' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Partner's Name</label>
                    <input
                      type="text"
                      value={formData.partnerName}
                      onChange={e => setFormData({ ...formData, partnerName: e.target.value })}
                      placeholder="e.g. David Ross"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none focus:border-[#A85C3D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Estimated Wedding Date</label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={e => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none focus:border-[#A85C3D]"
                    />
                  </div>
                </div>
              )}

              {/* Coupon row */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Coupon code (try: RAOZCALM)"
                  className="flex-1 px-3 py-1.5 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-3 py-1.5 bg-[#E8DFD3] hover:bg-[#D5C9B8] text-[#1F1B16] rounded-xl text-xs font-medium transition-colors"
                >
                  Apply
                </button>
              </div>

              {/* Mock Payment Details */}
              <div className="p-3 bg-white rounded-xl border border-[#E8DFD3] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#6B6155]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CreditCard className="w-3.5 h-3.5 text-[#A85C3D]" /> Secure Card Checkout
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700">256-bit Encrypted</span>
                </div>
                <input
                  type="text"
                  readOnly
                  value={formData.cardNumber}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 rounded-2xl bg-[#4A5847] hover:bg-[#394437] text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Securing your calm wedding hub...</span>
                ) : (
                  <>
                    <span>Complete Investment · {currentCurr.symbol}{finalPrice}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-medium text-2xl text-[#1F1B16]">
              Welcome to Raoz Wedding Hub
            </h3>
            <p className="text-sm text-[#6B6155] max-w-sm mx-auto">
              Your celebration workspace is now active. We’ve dispatched your private couple onboarding link and guest invitation keys to your inbox.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1F1B16] text-white rounded-full text-xs font-medium hover:bg-black transition-colors"
              >
                Enter Your Wedding Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// ==========================================
// 2. DEMO LOGIN / PORTAL MODAL
// ==========================================
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: 'couple' | 'guest' | 'planner') => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSelectRole
}) => {
  const [selectedRole, setSelectedRole] = useState<'couple' | 'guest' | 'planner'>('couple');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInstantDemoLogin = (role: 'couple' | 'guest' | 'planner') => {
    onSelectRole(role);
    onClose();
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSelectRole(selectedRole);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-md w-full overflow-hidden border border-[#E8DFD3] shadow-2xl relative p-7 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1F1B16] flex items-center justify-center transition-colors border border-[#E8DFD3]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-1 mb-6">
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#A85C3D] font-bold">
            Portal Access
          </span>
          <h3 className="font-serif font-medium text-2xl text-[#1F1B16]">
            Sign in to Raoz Wedding Hub
          </h3>
          <p className="text-xs text-[#7A6E62]">
            Select your account type or launch an instant simulated test session.
          </p>
        </div>

        {/* 1-Click Instant Demo Portals */}
        <div className="space-y-2 mb-6">
          <span className="font-mono text-[10px] uppercase text-[#8A7B6E] tracking-wider block text-center">
            — 1-Click Simulated Access —
          </span>
          
          <button
            onClick={() => handleInstantDemoLogin('couple')}
            className="w-full p-3 rounded-2xl bg-white hover:bg-[#FAF2ED] border border-[#E8DFD3] hover:border-[#A85C3D] transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <span className="font-medium text-xs text-[#1F1B16] block">Sign In as Couple</span>
                <span className="text-[11px] text-[#8A7B6E]">Maya &amp; David (4-Day Tuscany Wedding)</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#A85C3D] font-bold group-hover:translate-x-0.5 transition-transform">Launch →</span>
          </button>

          <button
            onClick={() => handleInstantDemoLogin('guest')}
            className="w-full p-3 rounded-2xl bg-white hover:bg-[#FBF4E8] border border-[#E8DFD3] hover:border-[#9E6D28] transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FBF4E8] text-[#9E6D28] flex items-center justify-center">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <span className="font-medium text-xs text-[#1F1B16] block">Sign In as Guest</span>
                <span className="text-[11px] text-[#8A7B6E]">Eleanor Vance (Guest Hub &amp; RSVP)</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#9E6D28] font-bold group-hover:translate-x-0.5 transition-transform">Launch →</span>
          </button>

          <button
            onClick={() => handleInstantDemoLogin('planner')}
            className="w-full p-3 rounded-2xl bg-white hover:bg-[#F0F4EF] border border-[#E8DFD3] hover:border-[#4A5847] transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F0F4EF] text-[#4A5847] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="font-medium text-xs text-[#1F1B16] block">Sign In as Planner Partner</span>
                <span className="text-[11px] text-[#8A7B6E]">Aurelia Wedding Atelier (Agency Console)</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#4A5847] font-bold group-hover:translate-x-0.5 transition-transform">Launch →</span>
          </button>
        </div>

        {/* Traditional Credentials Form */}
        <form onSubmit={handleManualSubmit} className="pt-4 border-t border-[#E8DFD3] space-y-3">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#1F1B16] text-white rounded-xl text-xs font-medium hover:bg-black transition-colors"
          >
            Sign in with credentials
          </button>
        </form>
      </div>
    </div>
  );
};


// ==========================================
// 3. GUEST RSVP & DIETARY MODAL
// ==========================================
interface GuestRSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  guestName?: string;
}

export const GuestRSVPModal: React.FC<GuestRSVPModalProps> = ({
  isOpen,
  onClose,
  guestName = 'Eleanor Vance'
}) => {
  const [attendingEvents, setAttendingEvents] = useState({
    welcome: true,
    cruise: true,
    rehearsal: true,
    wedding: true,
    farewell: true
  });
  const [dietary, setDietary] = useState('Vegetarian');
  const [songRequest, setSongRequest] = useState('L-O-V-E - Nat King Cole');
  const [shuttleNeeded, setShuttleNeeded] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full overflow-hidden border border-[#E8DFD3] shadow-2xl relative p-7 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1F1B16] flex items-center justify-center transition-colors border border-[#E8DFD3]"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#A85C3D] font-bold">
                Guest Response · No Account Required
              </span>
              <h3 className="font-serif font-medium text-2xl text-[#1F1B16] mt-1">
                RSVP for {guestName}
              </h3>
              <p className="text-xs text-[#7A6E62] mt-0.5">
                Kindly submit your attendance by 1 May 2026 for Maya &amp; David’s celebration in Tuscany.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-2">
                  Select Events You'll Be Attending:
                </label>
                <div className="space-y-2 bg-white rounded-2xl p-3 border border-[#E8DFD3]">
                  {[
                    { key: 'welcome', label: 'Day 1: Sunset Welcome Aperitivo & Pizza' },
                    { key: 'cruise', label: 'Day 2: Coastal Catamaran Swimming Cruise' },
                    { key: 'rehearsal', label: 'Day 2: Candlelit Rehearsal Dinner' },
                    { key: 'wedding', label: 'Day 3: The Wedding Vows & Gala Reception' },
                    { key: 'farewell', label: 'Day 4: Farewell Poolside Recovery Brunch' }
                  ].map(ev => (
                    <label key={ev.key} className="flex items-center gap-2.5 text-xs text-[#1F1B16] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={attendingEvents[ev.key as keyof typeof attendingEvents]}
                        onChange={e => setAttendingEvents({ ...attendingEvents, [ev.key]: e.target.checked })}
                        className="rounded border-[#D5C9B8] text-[#A85C3D] focus:ring-[#A85C3D]"
                      />
                      <span>{ev.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">
                  Dietary Requirements &amp; Allergies
                </label>
                <input
                  type="text"
                  value={dietary}
                  onChange={e => setDietary(e.target.value)}
                  placeholder="e.g. Vegetarian, Nut allergy, Gluten-free, none"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6155] mb-1">
                  Dance Floor Song Request
                </label>
                <input
                  type="text"
                  value={songRequest}
                  onChange={e => setSongRequest(e.target.value)}
                  placeholder="Artist & Song Title"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#1F1B16] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="shuttle"
                  checked={shuttleNeeded}
                  onChange={e => setShuttleNeeded(e.target.checked)}
                  className="rounded border-[#D5C9B8] text-[#A85C3D] focus:ring-[#A85C3D]"
                />
                <label htmlFor="shuttle" className="text-xs text-[#52483E] cursor-pointer">
                  I will require the private group airport/hotel shuttle transfers
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4A5847] hover:bg-[#394437] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Confirm RSVP &amp; Update My Preferences
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-medium text-xl text-[#1F1B16]">
              Thank you, {guestName}!
            </h4>
            <p className="text-xs text-[#6B6155]">
              Your RSVP and dietary requirements have been recorded and synched to Maya &amp; David’s dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
