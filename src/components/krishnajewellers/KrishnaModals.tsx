import React, { useState } from 'react';
import {
  X,
  Phone,
  Video,
  Heart,
  ShoppingBag,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Share2,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  Search,
  Trash2
} from 'lucide-react';
import {
  KrishnaProduct,
  KrishnaBlogArticle,
  GOLD_RATE_TODAY
} from '../../data/krishnaJewellersData';

// 1. PRODUCT DETAIL MODAL
interface ProductDetailModalProps {
  product: KrishnaProduct | null;
  onClose: () => void;
  onAddToCart: (product: KrishnaProduct) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
  onOpenVideoCall: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenVideoCall
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  if (!product) return null;

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imageUrl];

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Krishna Jewellers! I am interested in ${product.name} (SKU: ${product.sku}). Please share current pricing and availability details.`
    );
    window.open(`https://wa.me/918499011111?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-[#543E3A]/20 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-black flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Gallery */}
          <div className="p-6 bg-stone-50/60 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center mb-4">
              <img
                src={images[selectedImageIdx]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {images.length > 1 && (
              <div className="flex items-center gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImageIdx === idx
                        ? 'border-[#543E3A] scale-105 shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between font-['Open_Sans',sans-serif]">
            <div>
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-[#543E3A]/10 text-[#543E3A] text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider rounded-full mb-2">
                  {product.badge}
                </span>
              )}

              <h2 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#543E3A] leading-snug mb-2">
                {product.name}
              </h2>

              <div className="text-xs text-stone-500 font-mono mb-4">
                SKU: <span className="font-bold text-stone-800">{product.sku}</span>
              </div>

              {/* Price display */}
              <div className="mb-5 pb-4 border-b border-stone-100">
                {product.price ? (
                  <div>
                    <div className="text-2xl font-bold text-[#543E3A] font-['Cinzel']">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Inclusive of all taxes · BIS Hallmarked
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#543E3A] font-['Cinzel']">
                      Price On Request
                    </span>
                    <span className="text-xs bg-amber-50 text-amber-900 px-2 py-0.5 rounded-sm border border-amber-200 font-medium">
                      High Jewellery
                    </span>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-6 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <div>
                  <span className="text-stone-500 block text-[11px]">Metal & Purity:</span>
                  <span className="font-bold text-stone-800">{product.metal} ({product.purity})</span>
                </div>
                {product.grossWeightGrams && (
                  <div>
                    <span className="text-stone-500 block text-[11px]">Approx Gross Weight:</span>
                    <span className="font-bold text-stone-800">{product.grossWeightGrams} Grams</span>
                  </div>
                )}
                {product.gemstones && (
                  <div className="col-span-2 mt-1">
                    <span className="text-stone-500 block text-[11px]">Gemstones & Setting:</span>
                    <span className="font-semibold text-stone-800">{product.gemstones}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3.5 px-6 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-rose-50 border-rose-300 text-rose-600'
                      : 'border-stone-300 text-stone-700 hover:bg-stone-50'
                  }`}
                  title={isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="flex-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenVideoCall();
                  }}
                  className="flex-1 border border-[#543E3A] text-[#543E3A] hover:bg-[#543E3A] hover:text-white py-3 px-4 rounded-xl font-['Cinzel'] font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Video className="w-4 h-4" />
                  <span>Live Video Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. VIDEO CALL BOOKING MODAL (Recreated from Globo Form 122220 in reference)
interface VideoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoCallModal: React.FC<VideoCallModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '2026-10-05',
    timeSlot: '12:00 pm - 02:00 pm',
    categoryInterest: 'Bridal Jewellery (Kundan & Polki)',
    notes: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#543E3A]/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-['Cinzel'] text-2xl font-bold text-[#543E3A] mb-2">
              Appointment Scheduled!
            </h3>
            <p className="text-xs text-stone-600 mb-6 leading-relaxed">
              Thank you, <strong>{formData.firstName}</strong>. Our senior jewellery consultant from the Jubilee Hills showroom will connect with you via WhatsApp Video on <strong>{formData.date}</strong> at <strong>{formData.timeSlot}</strong>.
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-left mb-6 space-y-1.5 font-['Open_Sans']">
              <div><strong>Client:</strong> {formData.firstName} {formData.lastName}</div>
              <div><strong>Mobile:</strong> {formData.phone}</div>
              <div><strong>Interest:</strong> {formData.categoryInterest}</div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="bg-[#543E3A] hover:bg-[#3D2C29] text-white px-8 py-3 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5 text-center">
              <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#876D68]">
                Personalized Virtual Experience
              </span>
              <h3 className="font-['Cinzel'] text-2xl font-bold text-[#543E3A] mt-1">
                Schedule Video Call Shopping
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Explore our exclusive collections live with a Hyderabad diamond & gold jewellery specialist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-['Open_Sans']">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Appointment Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Preferred Slot *</label>
                  <select
                    value={formData.timeSlot}
                    onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A] bg-white"
                  >
                    <option value="10:00 am - 12:00 pm">10:00 am - 12:00 pm</option>
                    <option value="12:00 pm - 02:00 pm">12:00 pm - 02:00 pm</option>
                    <option value="02:00 pm - 04:00 pm">02:00 pm - 04:00 pm</option>
                    <option value="04:00 pm - 06:00 pm">04:00 pm - 06:00 pm</option>
                    <option value="06:00 pm - 08:00 pm">06:00 pm - 08:00 pm</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Collections to View</label>
                <select
                  value={formData.categoryInterest}
                  onChange={e => setFormData({ ...formData, categoryInterest: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A] bg-white"
                >
                  <option value="Bridal Jewellery (Kundan & Polki)">Bridal Jewellery (Kundan & Polki)</option>
                  <option value="22K Gold Temple Jewellery & Haram">22K Gold Temple Jewellery & Haram</option>
                  <option value="Diamond Solitaire & Chokers">Diamond Solitaire & Chokers</option>
                  <option value="Silver Articles & God Idols">Silver Articles & God Idols</option>
                  <option value="Hyderabad Pearls & Rare Gems">Hyderabad Pearls & Rare Gems</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Special Requests</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any specific design or weight range you wish to see..."
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3.5 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer mt-2"
              >
                Confirm Video Call Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. GOLD & SILVER RATE MODAL
interface GoldRateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoldRateModal: React.FC<GoldRateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#543E3A]/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-2">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#876D68]">
            {GOLD_RATE_TODAY.city}
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#543E3A] mt-1">
            Today's Precious Metal Rates
          </h3>
          <p className="text-[11px] text-stone-500">
            Updated daily for Hyderabad bullion & jewellery market ({GOLD_RATE_TODAY.updatedDate})
          </p>
        </div>

        <div className="space-y-3 font-['Open_Sans'] text-xs mb-6">
          <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-bold text-[#543E3A] text-sm">22 Karat Gold (916)</div>
              <div className="text-[11px] text-stone-500">Standard for Indian Bridal Jewellery</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-amber-900 text-base font-['Cinzel']">
                ₹{GOLD_RATE_TODAY.gold22kPerGram.toLocaleString()} / g
              </div>
              <div className="text-[10px] text-stone-600 font-mono">
                ₹{(GOLD_RATE_TODAY.gold22kPerGram * 10).toLocaleString()} / 10g
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-bold text-stone-800 text-sm">24 Karat Pure Gold (999)</div>
              <div className="text-[11px] text-stone-500">Gold Coins & Bars Purity</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-stone-900 text-base font-['Cinzel']">
                ₹{GOLD_RATE_TODAY.gold24kPerGram.toLocaleString()} / g
              </div>
              <div className="text-[10px] text-stone-600 font-mono">
                ₹{(GOLD_RATE_TODAY.gold24kPerGram * 10).toLocaleString()} / 10g
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-bold text-stone-800 text-sm">18 Karat Gold (750)</div>
              <div className="text-[11px] text-stone-500">Diamond & Solitaire Jewellery</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-stone-900 text-base font-['Cinzel']">
                ₹{GOLD_RATE_TODAY.gold18kPerGram.toLocaleString()} / g
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-bold text-slate-800 text-sm">Fine Silver (999)</div>
              <div className="text-[11px] text-stone-500">Silver Idols & Pooja Articles</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-900 text-base font-['Cinzel']">
                ₹{GOLD_RATE_TODAY.silverPerGram.toFixed(2)} / g
              </div>
              <div className="text-[10px] text-stone-600 font-mono">
                ₹{GOLD_RATE_TODAY.silverPer10Gram.toLocaleString()} / 10g
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-stone-500 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-100">
          <p>
            * All jewellery sold at Krishna Jewellers is 100% BIS Hallmarked with HUID. Prices exclude GST (3%) and making charges. Rates subject to daily bullion fluctuations.
          </p>
        </div>
      </div>
    </div>
  );
};

// 4. PREDICTIVE SEARCH MODAL
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: KrishnaProduct[];
  onSelectProduct: (product: KrishnaProduct) => void;
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
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.subCategory.toLowerCase().includes(query.toLowerCase()) ||
        p.metal.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 border border-[#543E3A]/20 font-['Open_Sans']">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-4">
          <span className="text-[10px] font-['Cinzel'] font-bold text-[#876D68] uppercase tracking-widest">
            WHAT ARE YOU LOOKING FOR?
          </span>
          <h3 className="font-['Cinzel'] text-xl font-bold text-[#543E3A]">
            Search Krishna Jewellers
          </h3>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search gold necklaces, diamond rings, polki chokers, silver..."
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-[#543E3A] text-stone-800"
          />
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px]">
          <span className="text-stone-400 font-medium">Trending:</span>
          {['Gold Haram', 'Diamond Ring', 'Polki Choker', 'Varalakshmi Face', 'Guttapusalu', 'Gold Coin'].map(term => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 bg-stone-100 hover:bg-[#543E3A] hover:text-white rounded-full text-stone-700 transition-colors cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto divide-y divide-stone-100 pr-1">
          {query.trim() !== '' && filtered.length === 0 && (
            <div className="text-center py-8 text-stone-500 text-xs">
              No matching pieces found for "{query}". Try searching "Gold", "Diamond", or "Polki".
            </div>
          )}

          {filtered.map(product => (
            <div
              key={product.id}
              onClick={() => {
                onSelectProduct(product);
                onClose();
              }}
              className="py-3 flex items-center gap-4 hover:bg-stone-50 px-2 rounded-xl transition-colors cursor-pointer"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-14 h-14 object-cover rounded-lg bg-stone-100 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="font-['Cinzel'] font-bold text-xs text-[#543E3A] truncate">
                  {product.name}
                </div>
                <div className="text-[11px] text-stone-500">
                  {product.metal} · {product.subCategory}
                </div>
              </div>
              <div className="text-right shrink-0">
                {product.price ? (
                  <span className="font-bold text-xs text-[#543E3A]">
                    ₹{product.price.toLocaleString()}
                  </span>
                ) : (
                  <span className="text-[11px] text-[#876D68] font-medium">
                    Price on Request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 5. SLIDING CART DRAWER
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: KrishnaProduct; quantity: number }[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const [orderNote, setOrderNote] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    return acc + (item.product.price || 0) * item.quantity;
  }, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert(
        `Thank you for placing your enquiry with Krishna Jewellers!\n\nOur concierge at Jubilee Hills will contact you with order verification and delivery schedule.`
      );
      setIsCheckingOut(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 flex flex-col font-['Open_Sans']">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-[#ECE5E3]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#543E3A]" />
            <h3 className="font-['Cinzel'] font-bold text-lg text-[#543E3A]">
              Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-stone-600 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="font-['Cinzel'] text-sm font-bold text-[#543E3A]">
                Your bag is empty
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Explore our handcrafted 22K gold, diamond & polki collections.
              </p>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="py-4 flex gap-3">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg bg-stone-50 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-['Cinzel'] font-bold text-xs text-[#543E3A] line-clamp-1">
                    {product.name}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    {product.metal} · {product.sku}
                  </div>
                  <div className="font-semibold text-xs text-[#543E3A] mt-1">
                    {product.price ? `₹${product.price.toLocaleString()}` : 'Price on Request'}
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-stone-200 rounded-md">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-stone-800">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-stone-400 hover:text-rose-600 text-xs flex items-center gap-1"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div>
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Add Order Note / Special Instructions
              </label>
              <textarea
                rows={1}
                value={orderNote}
                onChange={e => setOrderNote(e.target.value)}
                placeholder="Gift wrapping, ring size or bangles size..."
                className="w-full text-xs p-2 bg-white border border-stone-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm font-bold text-[#543E3A]">
              <span>Subtotal:</span>
              <span className="font-['Cinzel'] text-base">₹{total.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-stone-500">
              Complimentary fully-insured doorstep delivery across India.
            </p>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3.5 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md disabled:opacity-50"
            >
              {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// 6. WISHLIST DRAWER
interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: KrishnaProduct[];
  onRemoveWishlist: (id: string) => void;
  onAddToCart: (p: KrishnaProduct) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 flex flex-col font-['Open_Sans']">
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-[#ECE5E3]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#543E3A] fill-current" />
            <h3 className="font-['Cinzel'] font-bold text-lg text-[#543E3A]">
              My Wishlist ({wishlistedProducts.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-stone-600 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="font-['Cinzel'] text-sm font-bold text-[#543E3A]">
                No items saved yet
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Click the heart on any jewellery design to save it for your bridal consultation.
              </p>
            </div>
          ) : (
            wishlistedProducts.map(product => (
              <div key={product.id} className="py-4 flex gap-3 items-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg bg-stone-50 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-['Cinzel'] font-bold text-xs text-[#543E3A] line-clamp-1">
                    {product.name}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    {product.metal} · {product.subCategory}
                  </div>
                  <div className="font-semibold text-xs text-[#543E3A] mt-1">
                    {product.price ? `₹${product.price.toLocaleString()}` : 'Price on Request'}
                  </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onRemoveWishlist(product.id);
                    }}
                    className="px-3 py-1.5 bg-[#543E3A] text-white text-[11px] font-bold rounded-lg hover:bg-[#3D2C29]"
                  >
                    Move to Bag
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(product.id)}
                    className="text-stone-400 hover:text-rose-600 text-[11px] text-center"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// 7. ARTICLE READER MODAL (Krishna Journal)
interface ArticleModalProps {
  article: KrishnaBlogArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 sm:p-10 border border-[#543E3A]/20 my-8 font-['Open_Sans']">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="inline-block px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-['Cinzel'] font-bold uppercase rounded-full mb-3">
          {article.category}
        </span>

        <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#543E3A] leading-tight mb-3">
          {article.title}
        </h2>

        <div className="flex items-center gap-3 text-xs text-stone-500 mb-6 pb-4 border-b border-stone-200">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden mb-6">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="text-sm text-stone-700 leading-relaxed space-y-4 whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </div>
  );
};

// 8. LOGIN / ACCOUNT MODAL
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome back to Krishna Jewellers, ${fullName || email}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#543E3A]/20 font-['Open_Sans']">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#876D68]">
            ESTD 1983 · HYDERABAD
          </span>
          <h3 className="font-['Cinzel'] text-2xl font-bold text-[#543E3A] mt-1">
            {tab === 'login' ? 'Customer Login' : 'Create Account'}
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Access private sales, tracked orders, and bridal lounge privileges.
          </p>
        </div>

        <div className="flex border-b border-stone-200 mb-5 text-xs font-bold font-['Cinzel']">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2 text-center border-b-2 transition-colors ${
              tab === 'login' ? 'border-[#543E3A] text-[#543E3A]' : 'border-transparent text-stone-400'
            }`}
          >
            SIGN IN
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-2 text-center border-b-2 transition-colors ${
              tab === 'register' ? 'border-[#543E3A] text-[#543E3A]' : 'border-transparent text-stone-400'
            }`}
          >
            REGISTER
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {tab === 'register' && (
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
              />
            </div>
          )}

          <div>
            <label className="block text-stone-700 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
            />
          </div>

          <div>
            <label className="block text-stone-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-[#543E3A]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#543E3A] hover:bg-[#3D2C29] text-white py-3 rounded-xl font-['Cinzel'] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer mt-2"
          >
            {tab === 'login' ? 'Sign In' : 'Register Account'}
          </button>
        </form>
      </div>
    </div>
  );
};
