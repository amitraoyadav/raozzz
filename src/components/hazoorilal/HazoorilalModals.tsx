import React, { useState } from 'react';
import {
  X,
  Phone,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ShoppingBag,
  Heart,
  Share2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Search,
  Trash2
} from 'lucide-react';
import { HazoorilalProduct, HAZOORILAL_STORES } from '../../data/hazoorilalData';

// 1. BOOK AN APPOINTMENT MODAL (Exact recreation from Contact Form 7 in uploaded HTML)
interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStoreId?: string;
  defaultJewelInterest?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedStoreId,
  defaultJewelInterest
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '2026-10-06',
    store: selectedStoreId || 'store-gk1',
    interest: defaultJewelInterest || 'High Jewellery & Bridal Heirlooms',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative bg-white w-full max-w-xl rounded-none shadow-2xl p-6 sm:p-10 border border-stone-300 font-['Open_Sans']">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-black p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-stone-100 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-black" />
            </div>
            <span className="font-['Chronicle_Display_Roman'] text-xs font-semibold uppercase tracking-[0.2em] text-[#5B5B5B]">
              HAZOORILAL CONCIERGE
            </span>
            <h3 className="font-['Chronicle_Display_Roman'] text-2xl font-normal text-black mt-1 mb-2">
              Private Preview Confirmed
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed max-w-md mx-auto mb-6">
              Thank you, <strong>{formData.fullName}</strong>. A dedicated senior client advisor will contact you at <strong>{formData.phone}</strong> to confirm your salon suite preparation for <strong>{formData.date}</strong>.
            </p>

            <div className="bg-stone-50 p-4 border border-stone-200 text-left text-xs space-y-1 mb-6">
              <div><strong>Salon:</strong> {HAZOORILAL_STORES.find(s => s.id === formData.store)?.name}</div>
              <div><strong>Selected Interest:</strong> {formData.interest}</div>
              <div><strong>Client Contact:</strong> {formData.phone} · {formData.email}</div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="bg-black hover:bg-stone-800 text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.24em] text-[#5B5B5B] block mb-1">
                A BESPOKE EXPERIENCE
              </span>
              <h3 className="font-['Chronicle_Display_Roman'] text-2xl sm:text-3xl font-normal text-black uppercase">
                Book An Appointment
              </h3>
              <p className="text-xs text-stone-600 mt-2 font-light leading-relaxed">
                Step into an intimate setting curated exclusively for you. Our appointments offer absolute attention and absolute distinction.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9811223344"
                    className="w-full px-3.5 py-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Select Store Location *
                  </label>
                  <select
                    value={formData.store}
                    onChange={e => setFormData({ ...formData, store: e.target.value })}
                    className="w-full px-3.5 py-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                  >
                    {HAZOORILAL_STORES.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Jewellery of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                  >
                    <option value="High Jewellery & Bridal Heirlooms">High Jewellery & Bridal Heirlooms</option>
                    <option value="Eden-Roc Diamond Collection">Eden-Roc Diamond Collection</option>
                    <option value="Solitaire Engagement Rings">Solitaire Engagement Rings</option>
                    <option value="Syndicate Polki & Uncut Diamonds">Syndicate Polki & Uncut Diamonds</option>
                    <option value="Men's Fine Jewellery">Men's Fine Jewellery</option>
                    <option value="Bespoke Redesign Consultation">Bespoke Redesign Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  Special Requests / Preferred Timing
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us if you are looking for specific carat weights, wedding attire matching, or private salon arrangements..."
                  className="w-full p-3 border border-stone-400 bg-white text-stone-900 focus:outline-none focus:border-black rounded-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-stone-800 text-white py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// 2. PRODUCT DETAIL / QUICK VIEW MODAL
interface ProductDetailModalProps {
  product: HazoorilalProduct | null;
  onClose: () => void;
  onAddToCart: (p: HazoorilalProduct) => void;
  onOpenAppointment: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenAppointment
}) => {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) return null;

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imageUrl];

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Hazoorilal Jewellers! I am enquiring about ${product.name} (SKU: ${product.sku}). Please share details regarding private viewing and pricing.`
    );
    window.open(`https://api.whatsapp.com/send?phone=919811223344&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="relative bg-white w-full max-w-4xl shadow-2xl overflow-hidden border border-stone-300 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-white text-stone-700 flex items-center justify-center shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Left */}
          <div className="p-6 bg-stone-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
            <div className="w-full aspect-square bg-white overflow-hidden shadow-xs mb-3 flex items-center justify-center">
              <img
                src={images[selectedImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`w-14 h-14 border-2 transition-all ${
                      selectedImg === i ? 'border-black' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Right */}
          <div className="p-6 sm:p-8 flex flex-col justify-between font-['Open_Sans']">
            <div>
              {product.badge && (
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#5B5B5B] block mb-1">
                  {product.badge}
                </span>
              )}

              <h2 className="font-['Chronicle_Display_Roman'] text-xl sm:text-2xl font-normal text-black mb-2">
                {product.name}
              </h2>

              <div className="text-xs text-stone-400 font-mono mb-4">
                SKU: <span className="font-semibold text-stone-800">{product.sku}</span>
              </div>

              {/* Price */}
              <div className="mb-5 pb-3 border-b border-stone-200">
                {product.priceOnRequest || !product.price ? (
                  <div className="flex items-center gap-2">
                    <span className="font-['Chronicle_Display_Roman'] text-xl font-normal text-black">
                      Price On Request
                    </span>
                    <span className="text-[11px] text-stone-500 uppercase tracking-wider font-light">
                      · Bespoke Edition
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="font-['Chronicle_Display_Roman'] text-2xl font-normal text-black">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-stone-500 block">
                      Inclusive of all taxes · BIS Hallmarked
                    </span>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="space-y-1.5 text-xs bg-stone-50 p-4 border border-stone-200 mb-5">
                <div>
                  <span className="text-stone-500">Metal: </span>
                  <span className="font-semibold text-stone-900">{product.metal}</span>
                </div>
                <div>
                  <span className="text-stone-500">Gemstones: </span>
                  <span className="font-semibold text-stone-900">{product.gemstones}</span>
                </div>
                {product.diamondCarat && (
                  <div>
                    <span className="text-stone-500">Total Diamond Weight: </span>
                    <span className="font-semibold text-stone-900">{product.diamondCarat}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-6 font-light">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-black hover:bg-stone-800 text-white py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Shopping Bag</span>
              </button>

              <div className="flex gap-2.5">
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="flex-1 bg-white hover:bg-stone-50 text-stone-800 border border-stone-400 py-3 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Price On Request</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenAppointment();
                  }}
                  className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 py-3 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Private Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. SEARCH MODAL (Search by product name or SKU matching reference JS)
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: HazoorilalProduct[];
  onSelectProduct: (p: HazoorilalProduct) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : products.filter(
        p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.sku.toLowerCase().includes(query.toLowerCase()) ||
          p.gemstones.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in">
      <div className="relative bg-white w-full max-w-2xl shadow-2xl p-6 sm:p-8 font-['Open_Sans'] border border-stone-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <span className="font-['Chronicle_Display_Roman'] text-xs uppercase tracking-[0.24em] text-[#5B5B5B] block mb-1">
            HAZOORILAL JEWELLERS CATALOGUE
          </span>
          <h3 className="font-['Chronicle_Display_Roman'] text-2xl font-normal text-black uppercase">
            Search By Product Name or SKU
          </h3>
        </div>

        <div className="relative mb-5">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by product name or SKU (e.g. Diamond, Emerald, Polki, HZL...)"
            className="w-full pl-11 pr-4 py-3.5 border border-stone-400 text-sm focus:outline-none focus:border-black rounded-none"
          />
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <span className="text-stone-400 font-semibold uppercase tracking-wider text-[10px]">
            Suggestions:
          </span>
          {['Eden-Roc', 'Emerald Chandelier', 'Polki Haaram', 'Eternity Ring', 'Men Cufflinks', 'Solitaire'].map(t => (
            <button
              key={t}
              onClick={() => setQuery(t)}
              className="text-stone-700 hover:text-black hover:underline cursor-pointer"
            >
              {t} ·
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto divide-y divide-stone-100">
          {query.trim() !== '' && filtered.length === 0 && (
            <div className="text-center py-8 text-stone-500 text-xs">
              No pieces found matching "{query}". Please search by jewellery type or SKU.
            </div>
          )}

          {filtered.map(p => (
            <div
              key={p.id}
              onClick={() => {
                onSelectProduct(p);
                onClose();
              }}
              className="py-3 flex items-center gap-4 hover:bg-stone-50 px-2 cursor-pointer transition-colors"
            >
              <img src={p.imageUrl} alt={p.name} className="w-14 h-14 object-cover bg-stone-100 shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-['Chronicle_Display_Roman'] text-xs font-normal text-stone-900 truncate">
                  {p.name}
                </h4>
                <div className="text-[11px] text-stone-500">
                  SKU: {p.sku} · {p.metal}
                </div>
              </div>
              <div className="text-right text-xs shrink-0">
                {p.price ? `₹${p.price.toLocaleString()}` : 'Price On Request'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. CART DRAWER
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: HazoorilalProduct; quantity: number }[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenAppointment: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenAppointment
}) => {
  const [checkingOut, setCheckingOut] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, i) => sum + (i.product.price || 0) * i.quantity, 0);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      alert(
        'Thank you for selecting Hazoorilal Jewellers by Sandeep Narang.\n\nOur flagship concierge team will contact you to review your order details and delivery protocol.'
      );
      setCheckingOut(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-['Open_Sans']">
      <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 flex flex-col">
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-black" />
            <h3 className="font-['Chronicle_Display_Roman'] font-normal text-lg uppercase tracking-wider text-black">
              Shopping Cart ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-stone-500 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="font-['Chronicle_Display_Roman'] text-sm font-normal uppercase tracking-wider text-stone-700">
                Your cart is currently empty
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Explore our high jewellery, fine diamond suites, and bespoke bridal collections.
              </p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="py-4 flex gap-3">
                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover bg-stone-50 shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-['Chronicle_Display_Roman'] text-xs font-normal text-black line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="text-[11px] text-stone-500 mt-0.5 font-mono">
                    SKU: {product.sku}
                  </div>
                  <div className="font-semibold text-xs text-black mt-1">
                    {product.price ? `₹${product.price.toLocaleString()}` : 'Price On Request'}
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border border-stone-300">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-stone-400 hover:text-rose-600 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between text-sm font-semibold text-black">
              <span>Subtotal:</span>
              <span className="font-['Chronicle_Display_Roman'] text-base">₹{total.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-stone-500">
              Taxes and insured priority shipping calculated at checkout.
            </p>

            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full bg-black hover:bg-stone-800 text-white py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer disabled:opacity-50"
            >
              {checkingOut ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
