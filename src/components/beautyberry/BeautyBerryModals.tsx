import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Star,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Search,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { BeautyBerryProduct } from '../../data/beautyBerryData';

// -------------------------------------------------------------
// 1. PRODUCT DETAIL & QUICK ADD MODAL
// -------------------------------------------------------------
interface ProductModalProps {
  product: BeautyBerryProduct | null;
  onClose: () => void;
  onAddToCart: (product: BeautyBerryProduct, variant: string, quantity: number) => void;
  onBuyNow: (product: BeautyBerryProduct, variant: string, quantity: number) => void;
}

export const BeautyBerryProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) => {
  if (!product) return null;

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.length > 0 ? product.variants[0].name : 'Default'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const images = product.images.length > 0 ? product.images : [
    'https://www.beautyberry.co.in/cdn/shop/files/01_f9560437-6c66-447b-9aef-32439420364b.jpg?v=1747220319&width=720'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-['Montserrat',sans-serif]">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-auto shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-black shadow-md flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Images */}
        <div className="md:w-1/2 p-4 sm:p-6 bg-stone-50 border-r border-stone-200 flex flex-col justify-between">
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-stone-200 mb-3 shadow-inner">
              <img
                src={images[activeImageIdx] || images[0]}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-[#71DBD4] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImageIdx === i ? 'border-[#71DBD4] ring-2 ring-[#71DBD4]/30' : 'border-stone-200 opacity-70'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-[#71DBD4]/20 rounded-xl border border-[#71DBD4] text-xs text-black space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-800" />
              <span>Free Delivery On Orders Above ₹499</span>
            </div>
            <p className="text-[11px] text-stone-700">
              10% Instant Discount automatically applied on all prepaid payments.
            </p>
          </div>
        </div>

        {/* Right: Details & Buying */}
        <div className="md:w-1/2 p-4 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222]">
              {product.categoryLabel} {product.subCategoryLabel && `· ${product.subCategoryLabel}`}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mt-1 leading-snug">
              {product.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-1.5 text-xs">
              <div className="flex items-center text-[#FFAC0B]">
                {'★'.repeat(Math.round(product.rating))}
              </div>
              <span className="font-bold text-stone-800">{product.rating}</span>
              <span className="text-stone-500">({product.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-baseline gap-2.5">
            <span className="text-2xl font-black text-black">
              Rs. {product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm line-through text-red-600 font-semibold">
                Rs. {product.compareAtPrice.toFixed(2)}
              </span>
            )}
            {product.discountPercent && (
              <span className="px-2 py-0.5 rounded bg-[#71DBD4] text-black text-[11px] font-bold">
                -{product.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Variants / Shades */}
          {product.variants.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Shade / Option: <span className="text-black font-semibold">{selectedVariant}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                      selectedVariant === v.name
                        ? 'border-black bg-stone-100 text-black shadow-xs font-bold'
                        : 'border-stone-300 bg-white text-stone-600 hover:border-black'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ backgroundColor: v.colorHex }} />
                    <span>{v.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              Quantity
            </label>
            <div className="inline-flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold"
              >
                -
              </button>
              <span className="px-3 text-xs font-bold text-black">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-stone-600 hover:bg-stone-100 font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs: Add to Cart + Gokwik Instant Checkout */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => onAddToCart(product, selectedVariant, quantity)}
              disabled={product.isSoldOut}
              className={`w-full py-3 px-4 text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-sm flex items-center justify-center gap-2 ${
                product.isSoldOut
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                  : 'bg-[#71DBD4] hover:bg-[#5bc9c1] text-black'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{product.isSoldOut ? 'Sold Out' : 'Add to Cart'}</span>
            </button>

            {!product.isSoldOut && (
              <button
                onClick={() => onBuyNow(product, selectedVariant, quantity)}
                className="w-full py-3 px-4 bg-black hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center justify-center gap-2"
              >
                <span>Buy It Now · Gokwik 1-Click Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#71DBD4]" />
              </button>
            )}
          </div>

          {/* Product Description & Information */}
          <div className="pt-3 border-t border-stone-200 text-xs text-stone-700 leading-relaxed space-y-2">
            <p>{product.description}</p>
            {product.features && (
              <ul className="list-disc pl-4 space-y-1 text-stone-600">
                {product.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. SHOPPING CART DRAWER
// -------------------------------------------------------------
export interface BeautyBerryCartItem {
  id: string;
  product: BeautyBerryProduct;
  variant: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: BeautyBerryCartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const BeautyBerryCartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end font-['Montserrat',sans-serif]">
      <div className="bg-[#F5EDED] w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-4 bg-[#71DBD4] border-b border-black/10 flex items-center justify-between">
          <h3 className="font-black text-sm uppercase tracking-wider text-black flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Your Cart ({cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-black/10 rounded-md cursor-pointer">
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="bg-[#71DBD4]/30 px-4 py-2 text-xs font-semibold text-black border-b border-[#71DBD4]/50 flex items-center justify-between">
          <span>{total >= 499 ? '🎉 You qualified for FREE Delivery!' : `Add Rs. ${(499 - total).toFixed(2)} more for FREE Delivery`}</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <ShoppingBag className="w-12 h-12 text-stone-400 mb-3" />
              <h4 className="text-base font-bold text-black">Your cart is empty</h4>
              <p className="text-xs text-stone-600 mt-1 max-w-xs">
                Explore our bestsellers including Twin Turbo Mascara, Soft Matte Lipsticks, and Concealers.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-black text-white text-xs font-bold hover:bg-stone-800 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="p-3 bg-white rounded-xl border border-stone-200 flex gap-3 relative shadow-xs">
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="w-16 h-16 object-cover rounded-lg border border-stone-200 shrink-0"
                />
                <div className="flex-1 min-w-0 pr-6">
                  <h4 className="text-xs font-bold text-stone-900 truncate">
                    {item.product.title}
                  </h4>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    Option: {item.variant}
                  </div>
                  <div className="text-xs font-bold text-black mt-1">
                    Rs. {(item.product.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="mt-2 inline-flex items-center border border-stone-300 rounded-md bg-stone-50">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="px-2 py-0.5 text-stone-600 hover:text-black font-bold"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="px-2 py-0.5 text-stone-600 hover:text-black font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 text-stone-400 hover:text-red-600 p-1 cursor-pointer"
                  title="Remove"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 bg-white border-t border-stone-200 space-y-3">
            <div className="flex justify-between text-sm font-black text-black">
              <span>Estimated Total:</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-stone-500">
              Taxes included. Discounts and shipping calculated at checkout.
            </p>

            {/* GoKwik Styled Checkout Button */}
            <div className="pt-1">
              <button
                onClick={onCheckout}
                className="w-full py-3.5 px-4 bg-[#45E8D8] hover:bg-[#34d4c5] text-black text-xs font-extrabold rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black">Checkout</span>
                  <span className="text-[10px] font-semibold text-black/70">10% Instant Prepaid Off</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-xs">
                  <span>Pay Rs. {total.toFixed(2)}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. SEARCH PREDICTIVE MODAL
// -------------------------------------------------------------
export const BeautyBerrySearchModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  products: BeautyBerryProduct[];
  onSelectProduct: (p: BeautyBerryProduct) => void;
}> = ({ isOpen, onClose, products, onSelectProduct }) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim().length > 1
    ? products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        (p.subCategoryLabel && p.subCategoryLabel.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 px-4 font-['Montserrat',sans-serif]">
      <div className="bg-white rounded-2xl max-w-xl w-full p-4 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        <div className="relative mb-4">
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search makeup, lipstick, mascara, eyeliner, brushes..."
            className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#71DBD4]"
          />
        </div>

        {query.trim().length > 1 ? (
          <div className="max-h-80 overflow-y-auto divide-y divide-stone-100">
            {filtered.length > 0 ? (
              filtered.map(p => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="py-2.5 px-2 hover:bg-stone-50 flex items-center gap-3 cursor-pointer rounded-lg transition-colors"
                >
                  <img src={p.images[0]} alt={p.title} className="w-12 h-12 object-cover rounded-lg border shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-stone-900 truncate">{p.title}</h4>
                    <p className="text-[11px] font-bold text-black mt-0.5">Rs. {p.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-xs text-stone-500">
                No products found matching "{query}"
              </p>
            )}
          </div>
        ) : (
          <div className="p-3 text-xs text-stone-500">
            <span className="font-bold text-black block mb-2">Popular Searches:</span>
            <div className="flex flex-wrap gap-1.5">
              {['Mascara', 'Velvet Lipstick', 'Lip Crayon', 'Concealer', 'Nail Lacquer', 'Sunscreen'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-black text-xs font-medium cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. INFORMATION / POLICY MODAL
// -------------------------------------------------------------
export const BeautyBerryPageModal: React.FC<{
  pageType: string | null;
  onClose: () => void;
}> = ({ pageType, onClose }) => {
  if (!pageType) return null;

  const [trackAwb, setTrackAwb] = useState('');
  const [trackStatus, setTrackStatus] = useState<string | null>(null);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 font-['Montserrat',sans-serif]">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[88vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-black cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        {pageType === 'track-order' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#B22222]" />
              <h3 className="text-lg font-black uppercase text-black">Track Your Order ✈️</h3>
            </div>
            <p className="text-xs text-stone-600">
              Enter your Order Number or AWB Tracking Number to check live courier delivery status.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={trackAwb}
                onChange={(e) => setTrackAwb(e.target.value)}
                placeholder="Enter Order # (e.g. BB-98214) or Tracking ID"
                className="flex-1 px-3 py-2 border rounded-lg text-xs"
              />
              <button
                onClick={() => {
                  if (trackAwb.trim()) {
                    setTrackStatus(`Status for ${trackAwb}: In-Transit with BlueDart / Delhivery. Estimated delivery within 48 hours.`);
                  }
                }}
                className="px-4 py-2 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black font-bold text-xs rounded-lg cursor-pointer"
              >
                Track
              </button>
            </div>
            {trackStatus && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 font-semibold">
                {trackStatus}
              </div>
            )}
          </div>
        )}

        {pageType === 'contact' && (
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase text-black">Contact Us</h3>
            <p className="text-xs text-stone-600">
              We're here to help you! Reach out to Beauty Berry customer concierge team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#71DBD4]" /> +91 98711 23456</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#71DBD4]" /> care@beautyberry.co.in</p>
              <p className="sm:col-span-2 flex items-start gap-2"><MapPin className="w-4 h-4 text-[#71DBD4] shrink-0 mt-0.5" /> Netaji Subhash Place, Pitampura, New Delhi 110034</p>
            </div>

            {contactSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-900 font-bold">
                Thank you! Your query has been logged. Our beauty advisor will respond within 4 hours.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Email / Phone</label>
                  <input
                    type="text"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black font-bold rounded-lg cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        )}

        {pageType === 'about' && (
          <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-lg font-black uppercase text-black">About Beauty Berry</h3>
            <p>
              Beauty Berry stands as a premier Indian beauty brand, delivering top-tier makeup essentials including Lipsticks, Eyeliner, Foundation, and Eyelashes, addressing diverse makeup demands with superior quality formulations at democratic prices.
            </p>
            <p>
              Our mission is to empower beauty enthusiasts with professional-grade cosmetic tools that deliver high pigment payoff, long-lasting performance, and skin-friendly nourishment.
            </p>
          </div>
        )}

        {pageType === 'faqs' && (
          <div className="space-y-3 text-xs text-stone-700">
            <h3 className="text-lg font-black uppercase text-black mb-3">Frequently Asked Questions</h3>
            <div className="p-3 bg-stone-50 rounded-lg border space-y-1">
              <h4 className="font-bold text-black">What is the delivery timeline?</h4>
              <p>Orders are dispatched within 24 hours. Delivery takes 2-4 business days across India.</p>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border space-y-1">
              <h4 className="font-bold text-black">Are Beauty Berry products cruelty-free?</h4>
              <p>Yes, 100% of Beauty Berry products are cruelty-free and dermatologically tested.</p>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border space-y-1">
              <h4 className="font-bold text-black">How do I claim the 10% prepaid discount?</h4>
              <p>Simply select any prepaid method (UPI, Debit/Credit Card, NetBanking) at checkout and the discount applies automatically!</p>
            </div>
          </div>
        )}

        {pageType === 'returns-refund' && (
          <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-lg font-black uppercase text-black">Returns & Refund Policy</h3>
            <p>We accept returns on damaged or defective items within 5 days of delivery. For hygiene reasons, opened makeup products cannot be returned unless verified damaged in transit.</p>
            <p>Refunds are processed within 48 hours back to the original payment source once inspection is completed.</p>
          </div>
        )}

        {pageType === 'shipping-policy' && (
          <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-lg font-black uppercase text-black">Shipping Policy</h3>
            <p>Enjoy Free Express Delivery on all orders above Rs. 499/-. For orders below Rs. 499/-, a nominal flat delivery fee of Rs. 49/- applies.</p>
            <p>We partner with premier logistics carriers like BlueDart, Delhivery, and Xpressbees with tamper-proof packaging.</p>
          </div>
        )}

        {pageType === 'privacy-policy' && (
          <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-lg font-black uppercase text-black">Privacy Policy</h3>
            <p>Your privacy is strictly guarded. We use 256-bit encryption for all customer data and never share your personal information with third-party advertisers.</p>
          </div>
        )}

        {pageType === 'terms-service' && (
          <div className="space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-lg font-black uppercase text-black">Terms of Service</h3>
            <p>By visiting our website and purchasing products from Beauty Berry, you engage in our service and agree to be bound by our terms and conditions.</p>
          </div>
        )}
      </div>
    </div>
  );
};
