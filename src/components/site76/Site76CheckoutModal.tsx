import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Truck,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Building,
  Banknote,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Leaf
} from 'lucide-react';
import { CartItem } from './Site76CartDrawer';
import { site76Config } from '../../config/site76Config';

interface Site76CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  appliedCoupon: string | null;
  discountAmount: number;
  onOrderSuccess: (orderData: any) => void;
}

export const Site76CheckoutModal: React.FC<Site76CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  appliedCoupon,
  discountAmount,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmed'>('shipping');

  // Customer Form Data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('Delhi');
  const [pincode, setPincode] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [orderId, setOrderId] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isFreeStandard = subtotal >= site76Config.FREE_SHIPPING_THRESHOLD;
  const standardFee = isFreeStandard ? 0 : site76Config.DEFAULT_SHIPPING_FEE;
  const shippingCost = shippingMethod === 'express' ? standardFee + 200 : standardFee;
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !city || !pincode) {
      alert('Please fill out all required shipping fields.');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `AE-${Date.now().toString().slice(-6)}`;
      const orderData = {
        orderId: generatedId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: cart,
        subtotal,
        discountAmount,
        shippingCost,
        totalAmount,
        paymentMethod: paymentMethod.toUpperCase(),
        shippingAddress: {
          fullName,
          phone,
          email,
          address,
          city,
          stateName,
          pincode
        },
        status: 'Confirmed — Handcrafted Packing'
      };

      setOrderId(generatedId);
      setConfirmedOrder(orderData);
      onOrderSuccess(orderData);
      setStep('confirmed');
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-3xl w-full border border-[#E8E1D5] shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E1D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold tracking-wider text-[#1E1F21]">
              {site76Config.WORDMARK}
            </span>
            <span className="text-xs text-[#6F736D] font-mono border-l border-[#E8E1D5] pl-3">
              Conscious Checkout
            </span>
          </div>

          {step !== 'confirmed' && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#6F736D] hover:text-[#1E1F21] rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Multi-Step Indicator */}
        {step !== 'confirmed' && (
          <div className="bg-[#F5EFEB] px-6 py-3 border-b border-[#E8E1D5] flex items-center justify-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-[#C16A52]' : 'text-[#586737]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'shipping' ? 'bg-[#C16A52] text-white' : 'bg-[#586737] text-white'}`}>
                1
              </span>
              <span>1. Shipping Details</span>
            </div>
            <div className="w-8 h-px bg-[#D5C7B5]" />
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-[#C16A52]' : 'text-[#6F736D]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'payment' ? 'bg-[#C16A52] text-white' : 'bg-[#EAE2D7] text-[#544133]'}`}>
                2
              </span>
              <span>2. Payment &amp; Review</span>
            </div>
          </div>
        )}

        {/* STEP 1: SHIPPING FORM */}
        {step === 'shipping' && (
          <form onSubmit={handleProceedToPayment} className="p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
                Delivery Destination
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#1E1F21] font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Radhika Sen"
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg focus:outline-hidden focus:border-[#C16A52]"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1F21] font-semibold mb-1">Phone Number (For Delivery SMS) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg focus:outline-hidden focus:border-[#C16A52]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#1E1F21] font-semibold mb-1">Email Address (For Tax Invoice)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg focus:outline-hidden focus:border-[#C16A52]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#1E1F21] font-semibold mb-1">Street Address &amp; House Number *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Flat 4B, Gulmohar Enclave, Ring Road"
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg focus:outline-hidden focus:border-[#C16A52]"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1F21] font-semibold mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, Bengaluru"
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg focus:outline-hidden focus:border-[#C16A52]"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1F21] font-semibold mb-1">State *</label>
                  <select
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg focus:outline-hidden focus:border-[#C16A52] cursor-pointer"
                  >
                    <option value="Delhi">Delhi NCR</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Other">Other Indian State</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1E1F21] font-semibold mb-1">PIN Code *</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="110001"
                    className="w-full p-2.5 bg-white border border-[#D5C7B5] rounded-lg font-mono focus:outline-hidden focus:border-[#C16A52]"
                  />
                </div>

                <div>
                  <label className="block text-[#1E1F21] font-semibold mb-1">Shipping Speed</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShippingMethod('standard')}
                      className={`flex-1 p-2 rounded-lg border text-left ${shippingMethod === 'standard' ? 'border-[#263422] bg-[#EAE2D7]' : 'border-[#D5C7B5] bg-white'}`}
                    >
                      <span className="font-semibold block">Eco Ground</span>
                      <span className="text-[10px] text-[#6F736D]">{isFreeStandard ? 'Free' : `₹${site76Config.DEFAULT_SHIPPING_FEE}`} · 3-5 days</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShippingMethod('express')}
                      className={`flex-1 p-2 rounded-lg border text-left ${shippingMethod === 'express' ? 'border-[#263422] bg-[#EAE2D7]' : 'border-[#D5C7B5] bg-white'}`}
                    >
                      <span className="font-semibold block">Express Air</span>
                      <span className="text-[10px] text-[#6F736D]">₹{standardFee + 200} · 1-2 days</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E8E1D5] pt-4 flex items-center justify-between">
              <span className="text-xs text-[#6F736D]">
                Order Total: <strong className="text-[#1E1F21] font-mono text-sm">₹{totalAmount.toLocaleString('en-IN')}</strong>
              </span>

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PAYMENT & REVIEW */}
        {step === 'payment' && (
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
                Select Payment Mode
              </h3>

              {/* Payment Methods Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: Smartphone, desc: 'GPay / PhonePe / Paytm' },
                  { id: 'card', label: 'Cards', icon: CreditCard, desc: 'Visa / MC / RuPay / Amex' },
                  { id: 'netbanking', label: 'NetBanking', icon: Building, desc: '50+ Indian Banks' },
                  { id: 'cod', label: 'Cash on Delivery', icon: Banknote, desc: 'Pay at Doorstep' }
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        paymentMethod === m.id
                          ? 'border-[#C16A52] bg-white ring-2 ring-[#C16A52]/20 shadow-xs'
                          : 'border-[#D5C7B5] bg-[#FDFBF7] hover:bg-white'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1 ${paymentMethod === m.id ? 'text-[#C16A52]' : 'text-[#6F736D]'}`} />
                      <span className="font-bold text-xs block text-[#1E1F21]">{m.label}</span>
                      <span className="text-[10px] text-[#6F736D] leading-tight block">{m.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Method-specific inputs */}
              <div className="p-4 bg-white rounded-xl border border-[#E8E1D5] space-y-3">
                {paymentMethod === 'upi' && (
                  <div className="space-y-2 text-xs">
                    <label className="font-semibold text-[#1E1F21] block">Enter Virtual Payment Address (UPI ID)</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okhdfcbank or 9876543210@paytm"
                      className="w-full p-2.5 bg-[#FDFBF7] border border-[#D5C7B5] rounded-lg font-mono focus:outline-hidden focus:border-[#C16A52]"
                    />
                    <p className="text-[11px] text-[#586737]">
                      ✓ Instant payment request will be triggered on your UPI app upon confirmation.
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="font-semibold text-[#1E1F21] block mb-1">Card Number</label>
                      <input
                        type="text"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4532 •••• •••• 8921"
                        className="w-full p-2.5 bg-[#FDFBF7] border border-[#D5C7B5] rounded-lg font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-semibold text-[#1E1F21] block mb-1">Expiry Date</label>
                        <input
                          type="text"
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full p-2.5 bg-[#FDFBF7] border border-[#D5C7B5] rounded-lg font-mono"
                        />
                      </div>
                      <div>
                        <label className="font-semibold text-[#1E1F21] block mb-1">CVV</label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="•••"
                          className="w-full p-2.5 bg-[#FDFBF7] border border-[#D5C7B5] rounded-lg font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="space-y-2 text-xs">
                    <label className="font-semibold text-[#1E1F21] block">Select Your Bank</label>
                    <select className="w-full p-2.5 bg-[#FDFBF7] border border-[#D5C7B5] rounded-lg">
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>State Bank of India</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="text-xs space-y-1 text-[#544133]">
                    <p className="font-semibold text-[#1E1F21]">Cash on Delivery (Doorstep Verification)</p>
                    <p className="text-[11px] text-[#6F736D]">
                      Please keep exact cash ready upon delivery. An OTP verification SMS will be sent to {phone}.
                    </p>
                  </div>
                )}
              </div>

              {/* Order Summary Recap */}
              <div className="bg-[#F5EFEB] p-4 rounded-xl border border-[#E8E1D5] space-y-2 text-xs">
                <div className="flex justify-between text-[#6F736D]">
                  <span>Deliver To:</span>
                  <span className="font-medium text-[#1E1F21]">{fullName}, {city} ({pincode})</span>
                </div>
                <div className="flex justify-between text-[#6F736D]">
                  <span>Items ({cart.length}):</span>
                  <span className="font-mono text-[#1E1F21]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#586737]">
                    <span>Coupon ({appliedCoupon}):</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#6F736D]">
                  <span>Shipping:</span>
                  <span className="font-mono text-[#1E1F21]">{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1E1F21] pt-2 border-t border-[#D5C7B5]">
                  <span>Final Payable Amount:</span>
                  <span className="font-mono text-base tabular-nums">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E8E1D5] pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="text-xs font-semibold text-[#544133] hover:text-[#C16A52] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Shipping</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-full bg-[#C16A52] hover:bg-[#9C4C36] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Securing Order...' : `Confirm & Place Order (₹${totalAmount.toLocaleString('en-IN')})`}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER CONFIRMED RECEIPT */}
        {step === 'confirmed' && confirmedOrder && (
          <div className="p-6 sm:p-10 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#586737]/15 text-[#586737] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                Order #{orderId} Placed
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                Thank you, {fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-[#544133] max-w-md mx-auto leading-relaxed">
                Your order is confirmed and will be lovingly hand-packaged in unbleached organic cotton parchment and shipped plastic-free from our Delhi atelier.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#F5EFEB] p-6 rounded-2xl border border-[#E8E1D5] max-w-lg mx-auto text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-[#E8E1D5] pb-2">
                <span className="text-[#6F736D]">Order Date:</span>
                <span className="font-medium text-[#1E1F21]">{confirmedOrder.date}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E1D5] pb-2">
                <span className="text-[#6F736D]">Payment Method:</span>
                <span className="font-medium text-[#1E1F21]">{confirmedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E1D5] pb-2">
                <span className="text-[#6F736D]">Destination:</span>
                <span className="font-medium text-[#1E1F21] text-right">{address}, {city}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm text-[#1E1F21]">
                <span>Total Paid / Payable:</span>
                <span className="font-mono tabular-nums">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/${site76Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                  `Hello Aranya Earth Concierge, I just placed order #${orderId} for ₹${totalAmount}. Please share delivery tracking updates.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
              >
                Receive Updates via WhatsApp
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-white border border-[#D5C7B5] text-[#1E1F21] text-xs font-semibold uppercase tracking-wider hover:bg-[#F5EFEB] transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
