import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Heart,
  CheckCircle2,
  MapPin,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Truck,
  Sparkles,
  ChevronRight,
  TrendingUp,
  CreditCard,
  QrCode,
  Droplets,
  Ruler
} from 'lucide-react';
import {
  TanishqProduct,
  TANISHQ_LIVE_GOLD_RATES,
  TANISHQ_STORES,
  RING_SIZE_GUIDE,
  JEWELLERY_CARE_TIPS
} from '../../data/tanishqData';

export interface CartItem {
  product: TanishqProduct;
  quantity: number;
  selectedSize?: number;
}

// 1. PRODUCT DETAIL MODAL
export const ProductDetailModal: React.FC<{
  product: TanishqProduct | null;
  onClose: () => void;
  onAddToCart: (p: TanishqProduct, size?: number) => void;
  onBuyNow: (p: TanishqProduct, size?: number) => void;
  onOpenStoreLocator: () => void;
  onToggleWishlist: (p: TanishqProduct) => void;
  isWishlisted: boolean;
}> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  onOpenStoreLocator,
  onToggleWishlist,
  isWishlisted
}) => {
  const [selectedSize, setSelectedSize] = useState<number>(14);
  const [pincode, setPincode] = useState<string>('400001');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>('Delivery available in 2-3 business days with Free Transit Insurance');

  if (!product) return null;

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setPincodeStatus(`Available for delivery to PIN ${pincode} by ${new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}.`);
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian PIN code.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-['Inter']">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-stone-100 text-stone-700 shadow-xs cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left: Gallery & Cover Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#832729] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={product.hoverImageUrl}
                alt="Alternate perspective"
                className="aspect-square rounded-xl object-cover border border-stone-200"
              />
              <div className="aspect-square rounded-xl bg-amber-50/60 border border-amber-200/60 p-3 flex flex-col justify-center text-xs text-amber-900">
                <span className="font-bold block mb-1">Hallmark Guarantee</span>
                <span className="text-[11px] text-stone-600">Every jewel carries the BIS Hallmark & TATA trust logo laser engraved.</span>
              </div>
            </div>
          </div>

          {/* Right: Specifications & Actions */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[11px] text-stone-500 uppercase tracking-widest font-semibold">
                <span>SKU: {product.sku}</span>
                <span>•</span>
                <span>{product.collection} Collection</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] text-stone-900 mt-1">
                {product.name}
              </h2>

              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {product.description}
              </p>

              {/* Price & Weight Breakdown */}
              <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#832729]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    (Inclusive of all taxes & 3% GST)
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Purity</span>
                    <strong className="text-stone-800">{product.karatage} Gold</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Gross Weight</span>
                    <strong className="text-stone-800">{product.grossWeightGrams} grams</strong>
                  </div>
                  {product.diamondWeightCarat && (
                    <div>
                      <span className="text-stone-400 block text-[10px]">Diamond Weight</span>
                      <strong className="text-stone-800">{product.diamondWeightCarat} ct ({product.diamondClarity})</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Size Selector for Rings/Bangles */}
              {(product.category === 'rings' || product.category === 'bangles') && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-stone-800">Select Size:</span>
                    <span className="text-stone-500 text-[11px]">Free resizing within 30 days</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[10, 12, 14, 16, 18, 20].map(s => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-9 h-9 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                          selectedSize === s
                            ? 'bg-[#832729] text-white border-[#832729]'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pincode checker */}
              <div className="mt-4">
                <span className="text-xs font-semibold text-stone-800 block mb-1">Check Delivery Pincode:</span>
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={e => setPincode(e.target.value)}
                    className="w-36 px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg"
                    placeholder="Enter PIN Code"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-bold bg-stone-800 text-white rounded-lg hover:bg-stone-700 cursor-pointer"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <p className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> {pincodeStatus}
                  </p>
                )}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="space-y-2 pt-2 border-t border-stone-200">
              <div className="flex gap-3">
                <button
                  onClick={() => onAddToCart(product, selectedSize)}
                  className="flex-1 py-3 px-4 bg-white border-2 border-[#832729] text-[#832729] hover:bg-[#832729]/5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={() => onBuyNow(product, selectedSize)}
                  className="flex-1 py-3 px-4 bg-[#832729] hover:bg-[#6b1e20] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                >
                  <span>Buy Now</span>
                </button>
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded-xl border cursor-pointer transition-colors ${
                    isWishlisted ? 'bg-rose-50 border-rose-300 text-rose-600' : 'bg-white border-stone-300 text-stone-600 hover:text-stone-900'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                onClick={onOpenStoreLocator}
                className="w-full py-2 text-center text-xs text-stone-600 hover:text-[#832729] font-medium flex items-center justify-center gap-1 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Find this piece at a Tanishq store near you</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. CART DRAWER & CHECKOUT
export const CartDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemove: (productId: string) => void;
  onProceedCheckout: () => void;
}> = ({ isOpen, onClose, items, onUpdateQty, onRemove, onProceedCheckout }) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const gstAmount = Math.round(subtotal * 0.03);
  const total = subtotal;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end font-['Inter']">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#832729]" />
            <h3 className="font-bold text-base text-stone-900">
              Shopping Bag ({items.reduce((c, i) => c + i.quantity, 0)})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-stone-400 hover:text-stone-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-stone-500">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-2" />
              <p className="font-semibold text-sm">Your shopping bag is empty</p>
              <p className="text-xs text-stone-400 mt-1">Explore our fine jewellery collections to add pieces.</p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.product.id}
                className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex gap-3 relative"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-18 h-18 object-cover rounded-lg border border-stone-200 shrink-0"
                />
                <div className="flex-1 pr-6">
                  <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    {item.product.karatage} Gold · {item.product.grossWeightGrams}g
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#832729]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>

                    <div className="flex items-center border border-stone-300 rounded-md bg-white">
                      <button
                        onClick={() => onUpdateQty(item.product.id, -1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(item.product.id)}
                  className="absolute top-2 right-2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Order Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Free Insured Doorstep Delivery</span>
                <span className="text-emerald-700 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-stone-900 pt-2 border-t border-stone-200">
                <span>Estimated Total (Incl. 3% GST)</span>
                <span className="text-[#832729]">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedCheckout();
              }}
              className="w-full py-3 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Proceed to Demo Checkout</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. CHECKOUT MODAL
export const CheckoutModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderPlaced: () => void;
}> = ({ isOpen, onClose, items, onOrderPlaced }) => {
  const [name, setName] = useState('Ananya Sharma');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [email, setEmail] = useState('ananya.sharma@example.com');
  const [address, setAddress] = useState('Flat 402, Sea Green Apts, Worli Sea Face');
  const [city, setCity] = useState('Mumbai');
  const [pincode, setPincode] = useState('400018');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onOrderPlaced();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Inter']">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-stone-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700">
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-['Playfair_Display'] text-stone-900">
              Order Confirmed!
            </h3>
            <p className="text-xs text-stone-600 max-w-xs mx-auto">
              Order #TAN-{Math.floor(100000 + Math.random() * 900000)} has been placed successfully in this demo. Your certified BIS Hallmarked jewellery will be dispatched in tamper-proof insured transit.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
                Demo Secure Checkout
              </span>
              <h3 className="text-lg font-bold font-['Playfair_Display'] text-stone-900">
                Delivery & Payment Details
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <label className="block text-stone-600 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Mobile</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Delivery Address</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-600 font-medium mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={e => setPincode(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-stone-200">
              <label className="block text-xs font-semibold text-stone-800 mb-2">
                Select Payment Mode (Demo Simulation):
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-lg border text-center font-bold cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-amber-50 border-amber-600 text-amber-900'
                      : 'border-stone-200 text-stone-600'
                  }`}
                >
                  <QrCode className="w-4 h-4 mx-auto mb-1 text-amber-700" />
                  UPI / GPay
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-lg border text-center font-bold cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-amber-50 border-amber-600 text-amber-900'
                      : 'border-stone-200 text-stone-600'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mx-auto mb-1 text-amber-700" />
                  Card / Netbanking
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2.5 rounded-lg border text-center font-bold cursor-pointer ${
                    paymentMethod === 'cod'
                      ? 'bg-amber-50 border-amber-600 text-amber-900'
                      : 'border-stone-200 text-stone-600'
                  }`}
                >
                  <Truck className="w-4 h-4 mx-auto mb-1 text-amber-700" />
                  Cash on Delivery
                </button>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl flex items-center justify-between text-xs">
              <span className="text-stone-600">Total Payable:</span>
              <strong className="text-base text-[#832729]">₹{total.toLocaleString('en-IN')}</strong>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors"
            >
              Place Insured Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 4. BOOK APPOINTMENT MODAL
export const AppointmentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [city, setCity] = useState('Mumbai');
  const [service, setService] = useState('Rivaah Bridal Consultation');
  const [date, setDate] = useState('2026-10-15');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Inter']">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-stone-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 bg-amber-100 text-[#832729] rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-['Playfair_Display'] text-stone-900">
              Appointment Scheduled!
            </h3>
            <p className="text-xs text-stone-600">
              Your VIP consultation for <strong>{service}</strong> in {city} has been booked. A Tanishq Jewellery Specialist will contact you at {phone} to coordinate your private lounge preview.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-[#832729] text-white rounded-xl text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
                Complimentary In-Store VIP Service
              </span>
              <h3 className="text-xl font-bold font-['Playfair_Display'] text-stone-900">
                Book a Store Appointment
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <label className="block text-stone-600 font-medium mb-1">Select City</label>
                <select
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
                >
                  <option value="Mumbai">Mumbai (Bandra Flagship / Andheri)</option>
                  <option value="Delhi NCR">Delhi NCR (Connaught Place / GK 1)</option>
                  <option value="Bengaluru">Bengaluru (MG Road Boutique)</option>
                  <option value="Kolkata">Kolkata (Park Street Showroom)</option>
                  <option value="Chennai">Chennai (T Nagar Flagship)</option>
                  <option value="Hyderabad">Hyderabad (Jubilee Hills)</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Service Required</label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
                >
                  <option value="Rivaah Bridal Consultation">Rivaah Bridal Trousseau Styling</option>
                  <option value="Old Gold Exchange & Karatmeter Test">Old Gold Exchange & Karatmeter Test</option>
                  <option value="Solitaire Diamond Selection">Solitaire Diamond Selection</option>
                  <option value="Golden Harvest Scheme Enrolment">Golden Harvest Scheme Enrolment</option>
                  <option value="General Store Browsing">General Jewellery Shopping</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Guest Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors"
            >
              Confirm VIP Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 5. FIND IN STORE / STORE LOCATOR MODAL
export const StoreLocatorModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onBookAtStore: (store: any) => void;
}> = ({ isOpen, onClose, onBookAtStore }) => {
  const [cityFilter, setCityFilter] = useState('All');

  if (!isOpen) return null;

  const filteredStores = cityFilter === 'All'
    ? TANISHQ_STORES
    : TANISHQ_STORES.filter(s => s.city.toLowerCase().includes(cityFilter.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Inter']">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl relative border border-stone-200">
        <div className="p-4 border-b border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
              Nationwide Presence (450+ Boutiques)
            </span>
            <h3 className="text-lg font-bold font-['Playfair_Display'] text-stone-900">
              Find a Tanishq Showroom
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-stone-400 hover:text-stone-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* City Filter pills */}
        <div className="p-3 border-b border-stone-100 flex items-center gap-2 overflow-x-auto text-xs bg-stone-50">
          {['All', 'Mumbai', 'Delhi NCR', 'Bengaluru', 'Kolkata'].map(c => (
            <button
              key={c}
              onClick={() => setCityFilter(c)}
              className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                cityFilter === c
                  ? 'bg-[#832729] text-white font-bold'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Stores list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredStores.map(store => (
            <div
              key={store.id}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#832729]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-stone-900 font-['Playfair_Display']">
                  {store.name}
                </h4>
                <p className="text-xs text-stone-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#832729] shrink-0" />
                  <span>{store.address} (PIN: {store.pincode})</span>
                </p>
                <p className="text-[11px] text-stone-500">
                  Hours: {store.timings} · Ph: {store.phone}
                </p>
                <div className="flex gap-2 text-[10px] text-amber-800 pt-1">
                  {store.hasKaratmeter && <span className="bg-amber-100 px-2 py-0.5 rounded">✓ Karatmeter Available</span>}
                  {store.hasRivaahLounge && <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded">✓ Rivaah Bridal Lounge</span>}
                  {store.hasValet && <span className="bg-stone-200 px-2 py-0.5 rounded">✓ Valet Parking</span>}
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 shrink-0">
                <button
                  onClick={() => {
                    onClose();
                    onBookAtStore(store);
                  }}
                  className="px-3.5 py-1.5 bg-[#832729] hover:bg-[#6b1e20] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Book Appointment
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-bold rounded-lg text-center cursor-pointer"
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. LIVE GOLD RATE MODAL
export const GoldRateModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Inter']">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-stone-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
          <TrendingUp className="w-4 h-4" />
          <span>Live Bullion Market Ticker</span>
        </div>
        <h3 className="text-xl font-bold font-['Playfair_Display'] text-stone-900 mb-2">
          Today's Tanishq Gold Rates
        </h3>
        <p className="text-xs text-stone-500 mb-4">
          Updated live across major Indian metropolitan centers. Tanishq guarantees computerized Karatmeter testing and zero hidden melt loss.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-stone-200 text-stone-400 text-[10px] uppercase">
                <th className="py-2">City</th>
                <th className="py-2">22K Gold (per gram)</th>
                <th className="py-2">24K Gold (per gram)</th>
                <th className="py-2">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {TANISHQ_LIVE_GOLD_RATES.cities.map(c => (
                <tr key={c.city} className="hover:bg-amber-50/50">
                  <td className="py-2.5 font-bold text-stone-800">{c.city}</td>
                  <td className="py-2.5 text-[#832729] font-bold">₹{c.rate22k.toLocaleString('en-IN')}</td>
                  <td className="py-2.5 text-stone-800 font-medium">₹{c.rate24k.toLocaleString('en-IN')}</td>
                  <td className="py-2.5 text-emerald-600 font-mono text-[11px]">{c.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 7. RING SIZE & CARE GUIDES MODAL
export const GuideModal: React.FC<{
  type: 'size' | 'care' | null;
  onClose: () => void;
}> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Inter']">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-stone-200 max-h-[85vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700">
          <X className="w-5 h-5" />
        </button>

        {type === 'size' ? (
          <div>
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Ruler className="w-4 h-4" />
              <span>Accurate Measurements</span>
            </div>
            <h3 className="text-xl font-bold font-['Playfair_Display'] text-stone-900 mb-2">
              Indian Ring & Bangle Size Guide
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Match the inner diameter of your existing comfortable ring against our national BIS size standard.
            </p>

            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-stone-200 text-stone-400 text-[10px] uppercase">
                  <th className="py-2">Indian Size</th>
                  <th className="py-2">Inner Diameter (mm)</th>
                  <th className="py-2">Circumference (mm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {RING_SIZE_GUIDE.map(r => (
                  <tr key={r.size} className="hover:bg-stone-50">
                    <td className="py-2 font-bold text-stone-800">Size {r.size}</td>
                    <td className="py-2 text-stone-600">{r.innerDiameterMm} mm</td>
                    <td className="py-2 text-stone-600">{r.circumferenceMm} mm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Droplets className="w-4 h-4" />
              <span>Maintain Lifetime Sparkle</span>
            </div>
            <h3 className="text-xl font-bold font-['Playfair_Display'] text-stone-900 mb-2">
              Jewellery Care & Cleaning Guide
            </h3>
            <div className="space-y-4 mt-4">
              {JEWELLERY_CARE_TIPS.map(tip => (
                <div key={tip.title} className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-xs text-[#832729] mb-1">{tip.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
