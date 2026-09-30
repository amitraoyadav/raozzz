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
  HelpCircle,
  Clock,
  ArrowRight,
  Zap,
  Info,
  Scale
} from 'lucide-react';
import {
  JewelboxProduct,
  JewelboxStore,
  JEWELBOX_STORES,
  JEWELBOX_FAQS
} from '../../data/jewelboxData';

// -------------------------------------------------------------
// 1. PRODUCT DETAIL MODAL
// -------------------------------------------------------------
interface ProductModalProps {
  product: JewelboxProduct | null;
  onClose: () => void;
  onAddToCart: (product: JewelboxProduct, metal: string, size?: number) => void;
  onBuyNow: (product: JewelboxProduct, metal: string, size?: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: JewelboxProduct) => void;
  onOpenSizeGuide: () => void;
  onOpenEducation: () => void;
}

export const JewelboxProductDetailModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide,
  onOpenEducation
}) => {
  if (!product) return null;

  const [selectedMetal, setSelectedMetal] = useState<string>(product.defaultMetal);
  const [selectedPurity, setSelectedPurity] = useState<'14K' | '18K'>(product.metalPurity);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes ? product.sizes[2] || product.sizes[0] : 12);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'specs' | 'diamond' | 'policies'>('specs');

  const allImages = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imageUrl, product.hoverImageUrl];

  const savingsAmount = product.minedPriceEquivalent - product.price;
  const savingsPercent = Math.round((savingsAmount / product.minedPriceEquivalent) * 100);

  const handleCheckPincode = () => {
    if (!pincode || pincode.trim().length !== 6) {
      setPincodeStatus('Please enter a valid 6-digit Indian PIN code');
      return;
    }
    setPincodeStatus(`Available! Free Express Insured Delivery by ${new Date(Date.now() + 3 * 86400000).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] font-['Inter'] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 shadow-md flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 p-4 sm:p-6 bg-stone-50 border-r border-stone-200 flex flex-col justify-between">
          <div>
            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              {product.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37] text-[#0F2C24] uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> {product.badge}
                </span>
              )}
              {product.isReadyToShip && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Ready to Ship
                </span>
              )}
            </div>

            {/* Main Featured Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-stone-200 mb-3 shadow-inner">
              <img
                src={allImages[activeImageIdx] || product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                {product.diamondCarat} Carat {product.diamondShape}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImageIdx === idx ? 'border-[#0F2C24] ring-2 ring-[#0F2C24]/20' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Value Banner */}
          <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs">
            <div className="flex items-center gap-1.5 font-bold mb-1">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Conscious Luxury Savings</span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Mined diamond equivalent price is <strong>₹{product.minedPriceEquivalent.toLocaleString('en-IN')}</strong>. You save <strong>₹{savingsAmount.toLocaleString('en-IN')} ({savingsPercent}%)</strong> with 100% identical optical, physical & chemical brilliance.
            </p>
          </div>
        </div>

        {/* Right Column: Details & Purchasing */}
        <div className="md:w-1/2 p-4 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#B48425] font-bold">
              {product.collection} · SKU: {product.sku}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-['Playfair_Display'] mt-1 leading-snug">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 mt-1 text-xs text-stone-500">
              <span className="flex items-center text-amber-500 font-bold">
                ★ {product.rating}
              </span>
              <span>({product.reviewsCount} verified reviews)</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">IGI Certified</span>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0F2C24]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs line-through text-stone-400">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">
              Inclusive of all taxes · Free insured express shipping across India
            </p>
          </div>

          {/* Metal Color Selection */}
          <div>
            <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              Select Gold Color: <span className="text-[#0F2C24] capitalize">{selectedMetal.replace('_', ' ')}</span>
            </label>
            <div className="flex items-center gap-2">
              {product.availableMetals.map(metal => {
                const isSelected = selectedMetal === metal;
                const colors: Record<string, string> = {
                  yellow_gold: 'bg-amber-300 border-amber-400',
                  rose_gold: 'bg-rose-300 border-rose-400',
                  white_gold: 'bg-stone-200 border-stone-300'
                };
                const labels: Record<string, string> = {
                  yellow_gold: 'Yellow Gold',
                  rose_gold: 'Rose Gold',
                  white_gold: 'White Gold'
                };
                return (
                  <button
                    key={metal}
                    onClick={() => setSelectedMetal(metal)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#0F2C24] bg-stone-100 text-[#0F2C24] shadow-xs'
                        : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border ${colors[metal]}`} />
                    <span>{labels[metal]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gold Purity Selection */}
          <div>
            <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              Gold Purity (BIS Hallmarked)
            </label>
            <div className="flex items-center gap-2">
              {(['14K', '18K'] as const).map(purity => (
                <button
                  key={purity}
                  onClick={() => setSelectedPurity(purity)}
                  className={`flex-1 py-1.5 px-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                    selectedPurity === purity
                      ? 'border-[#0F2C24] bg-[#0F2C24] text-white'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {purity} Gold {purity === '18K' ? '(75.0% Pure)' : '(58.5% Pure)'}
                </button>
              ))}
            </div>
          </div>

          {/* Ring Size Selection (If Ring) */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Ring Size (Indian standard): <span className="text-[#0F2C24]">{selectedSize}</span>
                </label>
                <button
                  onClick={onOpenSizeGuide}
                  className="text-[11px] text-[#B48425] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Scale className="w-3 h-3" />
                  Ring Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-9 h-8 rounded-md border text-xs font-semibold cursor-pointer transition-all ${
                      selectedSize === size
                        ? 'border-[#0F2C24] bg-[#0F2C24] text-white'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pincode Check */}
          <div>
            <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
              Estimated Delivery Pincode Check
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit Pincode (e.g. 400050)"
                className="flex-1 px-3 py-1.5 border border-stone-300 rounded-lg text-xs"
              />
              <button
                onClick={handleCheckPincode}
                className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Check
              </button>
            </div>
            {pincodeStatus && (
              <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                {pincodeStatus}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => onAddToCart(product, selectedMetal, selectedSize)}
              className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => onBuyNow(product, selectedMetal, selectedSize)}
              className="flex-1 py-3 px-4 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span>Buy Now</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`p-3 rounded-xl border cursor-pointer transition-colors ${
                isWishlisted
                  ? 'border-rose-500 bg-rose-50 text-rose-600'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-600'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* WhatsApp Direct Chat */}
          <div className="pt-1">
            <a
              href={`https://wa.me/919820045678?text=Hello%20Jewelbox,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku})`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask Our Certified Diamond Stylist on WhatsApp</span>
            </a>
          </div>

          {/* Specifications Accordion / Tabs */}
          <div className="pt-3 border-t border-stone-200">
            <div className="flex border-b border-stone-200 text-xs">
              <button
                onClick={() => setActiveTab('specs')}
                className={`py-2 px-3 font-bold border-b-2 cursor-pointer ${
                  activeTab === 'specs' ? 'border-[#0F2C24] text-[#0F2C24]' : 'border-transparent text-stone-500'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('diamond')}
                className={`py-2 px-3 font-bold border-b-2 cursor-pointer ${
                  activeTab === 'diamond' ? 'border-[#0F2C24] text-[#0F2C24]' : 'border-transparent text-stone-500'
                }`}
              >
                Diamond Details
              </button>
              <button
                onClick={() => setActiveTab('policies')}
                className={`py-2 px-3 font-bold border-b-2 cursor-pointer ${
                  activeTab === 'policies' ? 'border-[#0F2C24] text-[#0F2C24]' : 'border-transparent text-stone-500'
                }`}
              >
                Buyback & Trust
              </button>
            </div>

            <div className="py-3 text-xs text-stone-600 leading-relaxed">
              {activeTab === 'specs' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Metal Purity:</span>
                    <span className="font-semibold text-stone-800">{selectedPurity} Solid Gold</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Gross Weight:</span>
                    <span className="font-semibold text-stone-800">~{product.grossWeightGrams} grams</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">BIS Hallmark:</span>
                    <span className="font-semibold text-stone-800">Government Certified with 6-digit HUID</span>
                  </div>
                  {product.dimensions && (
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-400">Dimensions:</span>
                      <span className="font-semibold text-stone-800">{product.dimensions}</span>
                    </div>
                  )}
                  <p className="text-[11px] text-stone-500 pt-1">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === 'diamond' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Diamond Type:</span>
                    <span className="font-semibold text-emerald-800">100% Real Lab-Grown (Type IIa)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Carat Weight:</span>
                    <span className="font-semibold text-stone-800">{product.diamondCarat} Carats</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Shape / Cut:</span>
                    <span className="font-semibold text-stone-800">{product.diamondShape} / {product.diamondCut}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Color & Clarity:</span>
                    <span className="font-semibold text-stone-800">{product.diamondColor} / {product.diamondClarity}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <span className="text-stone-400">Certificate:</span>
                    <span className="font-semibold text-stone-800">IGI / SGL with Laser Girdle Inscription</span>
                  </div>
                  <div className="pt-1">
                    <button
                      onClick={onOpenEducation}
                      className="text-[#B48425] font-bold text-[11px] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3" />
                      Learn Why Lab Diamonds Have Identical Hardness (10 Mohs)
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'policies' && (
                <div className="space-y-2 text-[11px]">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>15-Day Return:</strong> 100% money-back guarantee with zero deduction and complimentary pickup.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Lifetime Exchange:</strong> 80% exchange value towards any current Jewelbox design forever.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Truck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Free Insured Transit:</strong> Fully insured by Sequel & BVC Logistics until handed to you.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. SHOPPING CART DRAWER & CHECKOUT
// -------------------------------------------------------------
export interface CartItem {
  id: string;
  product: JewelboxProduct;
  metal: string;
  size?: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  couponCode: string;
  setCouponCode: (c: string) => void;
  appliedDiscount: number;
  onApplyCoupon: (code: string) => void;
}

export const JewelboxCartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  couponCode,
  setCouponCode,
  appliedDiscount,
  onApplyCoupon
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const minedEquivalent = cart.reduce((acc, item) => acc + item.product.minedPriceEquivalent * item.quantity, 0);
  const totalSavings = minedEquivalent - subtotal;
  const gst = Math.round((subtotal - appliedDiscount) * 0.03); // 3% jewellery GST in India
  const finalTotal = Math.max(0, subtotal - appliedDiscount + gst);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end font-['Inter']">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-4 border-b border-stone-200 bg-[#0F2C24] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-bold text-sm tracking-wide">
              Your Bag ({cart.reduce((a, b) => a + b.quantity, 0)} items)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping & Carbon Savings Bar */}
        <div className="bg-emerald-50 p-2.5 px-4 border-b border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
          <span className="flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>You save ₹{totalSavings.toLocaleString('en-IN')} vs mined diamonds!</span>
          </span>
          <span className="text-[10px] font-bold uppercase bg-emerald-200 px-1.5 py-0.5 rounded text-emerald-800">
            Free Shipping
          </span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-3" />
              <p className="text-sm font-semibold text-stone-800">Your shopping bag is empty</p>
              <p className="text-xs text-stone-400 mt-1 max-w-xs">
                Explore our IGI certified solitaire rings, tennis bracelets and modern mangalsutras.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2 rounded-lg bg-[#0F2C24] text-white text-xs font-bold hover:bg-[#163e33] cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex gap-3 relative"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-18 h-18 object-cover rounded-lg border border-stone-200 shrink-0"
                />
                <div className="flex-1 min-w-0 pr-6">
                  <h4 className="text-xs font-bold text-stone-900 truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-[11px] text-stone-500 mt-0.5 space-x-1">
                    <span className="capitalize">{item.metal.replace('_', ' ')}</span>
                    {item.size && <span>• Size: {item.size}</span>}
                    <span>• {item.product.diamondCarat} ct</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-xs font-bold text-[#0F2C24]">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-stone-400 line-through">
                      ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="inline-flex items-center border border-stone-300 rounded-md bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-stone-600 hover:text-stone-900 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-stone-600 hover:text-stone-900 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                  title="Remove item"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-3">
            {/* Promo Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                placeholder="Promo Code (SHARK10 / JEWEL2000)"
                className="flex-1 px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs uppercase"
              />
              <button
                onClick={() => onApplyCoupon(couponCode)}
                className="px-4 py-1.5 bg-[#0F2C24] hover:bg-[#163e33] text-white rounded-lg text-xs font-bold cursor-pointer"
              >
                Apply
              </button>
            </div>

            {/* Calculations */}
            <div className="space-y-1 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Special Discount:</span>
                  <span>- ₹{appliedDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[11px] text-stone-500">
                <span>GST (3% Indian Bullion/Jewellery):</span>
                <span>₹{gst.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 pt-1 border-t border-stone-200">
                <span>Total Amount:</span>
                <span className="text-[#0F2C24]">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="w-full py-3 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Secure Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. CHECKOUT & ORDER CONFIRMATION MODAL
// -------------------------------------------------------------
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  appliedDiscount: number;
  onOrderSuccess: () => void;
}

export const JewelboxCheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  appliedDiscount,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('Priya Sharma');
  const [phone, setPhone] = useState('9820012345');
  const [email, setEmail] = useState('priya.sharma@example.com');
  const [address, setAddress] = useState('Flat 402, Sea Breeze Apts, Bandra West');
  const [city, setCity] = useState('Mumbai');
  const [pincode, setPincode] = useState('400050');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [orderId, setOrderId] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const gst = Math.round((subtotal - appliedDiscount) * 0.03);
  const total = Math.max(0, subtotal - appliedDiscount + gst);

  const handlePlaceOrder = () => {
    const fakeId = `JB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(fakeId);
    setStep('success');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-['Inter']">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#0F2C24] text-white flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 font-['Playfair_Display']">
                  Insured Express Delivery Checkout
                </h3>
                <p className="text-[11px] text-stone-500">
                  Tamper-proof transit · 100% Free Shipping
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">Email for IGI Certificate</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">Shipping Address</label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-2">
                <label className="block text-[11px] font-bold text-stone-800 uppercase tracking-wider mb-2">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#0F2C24] bg-emerald-50 text-[#0F2C24] font-bold'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <QrCode className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                    <span>UPI / GPay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#0F2C24] bg-emerald-50 text-[#0F2C24] font-bold'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                    <span>Card / NetBank</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#0F2C24] bg-emerald-50 text-[#0F2C24] font-bold'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <Truck className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                    <span>Cash On Delivery</span>
                  </button>
                </div>
              </div>

              {/* Order Total Overview */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                <span>Final Payable (Incl. 3% GST):</span>
                <span className="text-base font-extrabold text-[#0F2C24]">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full py-3 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-xl cursor-pointer shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Confirm & Place Order</span>
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-['Playfair_Display']">
              Order Placed Successfully!
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Thank you, <strong>{name}</strong>. Your order <strong>#{orderId}</strong> has been received and scheduled for dispatch via insured courier.
            </p>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-left space-y-1">
              <div className="flex justify-between">
                <span className="text-stone-500">Order ID:</span>
                <span className="font-mono font-bold text-stone-800">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Delivery Address:</span>
                <span className="font-semibold text-stone-800">{city}, {pincode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Amount Paid:</span>
                <span className="font-bold text-emerald-800">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">IGI Digital Cert:</span>
                <span className="font-semibold text-blue-700">Sent to {email}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#0F2C24] text-white text-xs font-bold rounded-xl hover:bg-[#163e33] cursor-pointer"
            >
              Continue Exploring Jewelbox
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. RING SIZE GUIDE MODAL
// -------------------------------------------------------------
export const JewelboxRingSizeGuideModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [sliderVal, setSliderVal] = useState(16.5);

  const sizeChart = [
    { india: 9, us: 5, mm: 15.6 },
    { india: 10, us: 5.5, mm: 16.0 },
    { india: 11, us: 5.75, mm: 16.2 },
    { india: 12, us: 6, mm: 16.5 },
    { india: 13, us: 6.5, mm: 16.9 },
    { india: 14, us: 7, mm: 17.3 },
    { india: 15, us: 7.5, mm: 17.7 },
    { india: 16, us: 8, mm: 18.1 },
    { india: 17, us: 8.5, mm: 18.5 },
    { india: 18, us: 9, mm: 18.9 }
  ];

  const matchedSize = sizeChart.reduce((prev, curr) =>
    Math.abs(curr.mm - sliderVal) < Math.abs(prev.mm - sliderVal) ? curr : prev
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 font-['Inter']">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Scale className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="text-lg font-bold text-stone-900 font-['Playfair_Display']">
            Indian & International Ring Size Guide
          </h3>
        </div>

        <p className="text-xs text-stone-500 mb-4 leading-relaxed">
          Place an existing ring on the circle below or adjust the diameter slider to find your exact Indian ring size.
        </p>

        {/* Interactive Circle */}
        <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col items-center justify-center mb-4">
          <div
            className="rounded-full border-2 border-dashed border-[#0F2C24] flex items-center justify-center transition-all bg-white shadow-xs"
            style={{ width: `${sliderVal * 5.5}px`, height: `${sliderVal * 5.5}px` }}
          >
            <span className="text-[11px] font-mono font-bold text-[#0F2C24]">
              {sliderVal.toFixed(1)} mm
            </span>
          </div>

          <div className="w-full max-w-xs mt-6">
            <div className="flex justify-between text-[11px] text-stone-500 mb-1">
              <span>Inner Diameter:</span>
              <span className="font-bold text-stone-900">{sliderVal.toFixed(1)} mm</span>
            </div>
            <input
              type="range"
              min={15.0}
              max={19.5}
              step={0.1}
              value={sliderVal}
              onChange={(e) => setSliderVal(parseFloat(e.target.value))}
              className="w-full accent-[#0F2C24]"
            />
          </div>

          <div className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
            Estimated Indian Size: <strong>Size {matchedSize.india}</strong> (US Size {matchedSize.us})
          </div>
        </div>

        {/* Table of sizes */}
        <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
          <table className="w-full text-left">
            <thead className="bg-[#0F2C24] text-white text-[11px] uppercase tracking-wider">
              <tr>
                <th className="p-2">Indian Size</th>
                <th className="p-2">US / International</th>
                <th className="p-2">Diameter (mm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {sizeChart.map(s => (
                <tr key={s.india} className={s.india === matchedSize.india ? 'bg-amber-50 font-bold' : ''}>
                  <td className="p-2">Size {s.india}</td>
                  <td className="p-2">US {s.us}</td>
                  <td className="p-2">{s.mm} mm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-2.5 bg-[#0F2C24] text-white text-xs font-bold rounded-xl cursor-pointer"
        >
          Got It, Continue Shopping
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. WHY LAB-GROWN EDUCATION MODAL
// -------------------------------------------------------------
export const JewelboxEducationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-['Inter']">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>The Science of Conscious Luxury</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-['Playfair_Display'] mb-3">
          Why Lab-Grown Diamonds are 100% Real Diamonds
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
          Just as ice formed in your modern freezer is 100% real ice (chemically and physically identical to ice from a glacier), lab-grown diamonds are <strong>100% real diamonds</strong>. They are grown by replicating the extreme heat and pressure of the earth's mantle using pure carbon gas plasma.
        </p>

        {/* Side-by-side comparison matrix */}
        <div className="border border-stone-200 rounded-xl overflow-hidden mb-6">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0F2C24] text-white text-[11px] uppercase tracking-wider">
              <tr>
                <th className="p-3">Property</th>
                <th className="p-3 text-emerald-300">Jewelbox Lab Diamond</th>
                <th className="p-3 text-stone-300">Mined Diamond</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Chemical Composition</td>
                <td className="p-3 font-bold text-emerald-800">Pure Carbon (100% Carbon)</td>
                <td className="p-3 text-stone-600">Pure Carbon (100% Carbon)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Crystal System & Lattice</td>
                <td className="p-3 font-bold text-emerald-800">Cubic (Isometric)</td>
                <td className="p-3 text-stone-600">Cubic (Isometric)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Hardness (Mohs Scale)</td>
                <td className="p-3 font-bold text-emerald-800">10 / 10 (Hardest Substance)</td>
                <td className="p-3 text-stone-600">10 / 10 (Hardest Substance)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Refractive Index (Sparkle)</td>
                <td className="p-3 font-bold text-emerald-800">2.42 (Maximum Brilliance)</td>
                <td className="p-3 text-stone-600">2.42 (Maximum Brilliance)</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Certification</td>
                <td className="p-3 font-bold text-emerald-800">IGI & SGL Certified</td>
                <td className="p-3 text-stone-600">IGI & GIA Certified</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Environmental Impact</td>
                <td className="p-3 font-bold text-emerald-800">Zero Open-Pit Mining & Eco-Friendly</td>
                <td className="p-3 text-rose-700">Massive Soil & Water Disruption</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-800">Typical Price for 1.00 Carat</td>
                <td className="p-3 font-bold text-emerald-800">~ ₹45,000 – ₹55,000</td>
                <td className="p-3 text-stone-600">~ ₹1,75,000 – ₹2,50,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Shark Tank Badge */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3 mb-6">
          <Zap className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
              As Featured on Shark Tank India Season 3
            </h4>
            <p className="text-xs text-amber-900 mt-1 leading-relaxed">
              Jewelbox pitched on Shark Tank India Season 3 and received competitive offers from all 5 Sharks! The Sharks praised the brand's commitment to delivering transparent pricing, world-class craftsmanship, and democratizing luxury fine diamonds for everyone.
            </p>
          </div>
        </div>

        {/* FAQs list */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-stone-900 font-['Playfair_Display']">
            Frequently Asked Questions
          </h4>
          {JEWELBOX_FAQS.slice(0, 3).map((faq, i) => (
            <div key={i} className="p-3 rounded-lg bg-stone-50 border border-stone-200">
              <h5 className="text-xs font-bold text-stone-900 mb-1">{faq.q}</h5>
              <p className="text-[11px] text-stone-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-xl cursor-pointer"
        >
          Explore Jewelbox Certified Designs
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 6. STORE LOCATOR & APPOINTMENT MODAL
// -------------------------------------------------------------
export const JewelboxStoreLocatorModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [selectedCity, setSelectedCity] = useState('All');
  const [bookingStore, setBookingStore] = useState<JewelboxStore | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('2026-04-05');
  const [bookingTime, setBookingTime] = useState('04:00 PM');
  const [isBooked, setIsBooked] = useState(false);

  const filteredStores = selectedCity === 'All'
    ? JEWELBOX_STORES
    : JEWELBOX_STORES.filter(s => s.city === selectedCity);

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-['Inter']">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1 text-[#0F2C24] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span>Flagship Experience Lounges</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-['Playfair_Display'] mb-2">
          Experience Jewelbox In-Person
        </h2>

        <p className="text-xs text-stone-500 mb-5">
          Try over 500+ lab-grown solitaire rings, tennis bracelets, and modern designs at our boutiques with complimentary diamond inspection and hospitality.
        </p>

        {/* City Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', 'Mumbai', 'Bangalore', 'Delhi NCR', 'Kolkata', 'Hyderabad'].map(c => (
            <button
              key={c}
              onClick={() => setSelectedCity(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                selectedCity === c
                  ? 'bg-[#0F2C24] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {filteredStores.map(store => (
            <div
              key={store.id}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-[#B48425] bg-amber-50 px-2 py-0.5 rounded">
                    {store.city} Flagship
                  </span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 mt-1">
                  {store.name}
                </h4>
                <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                  {store.address} - PIN {store.pincode}
                </p>
                <div className="mt-2 space-y-1 text-[11px] text-stone-600">
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{store.timings}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>{store.phone}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2">
                <button
                  onClick={() => setBookingStore(store)}
                  className="flex-1 py-1.5 px-3 bg-[#0F2C24] hover:bg-[#163e33] text-white text-[11px] font-bold rounded-lg cursor-pointer transition-colors text-center"
                >
                  Book In-Store Slot
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1.5 px-3 bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 text-[11px] font-bold rounded-lg cursor-pointer text-center"
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* In-Store Appointment Booking Drawer / Submodal */}
        {bookingStore && (
          <div className="mt-6 p-4 sm:p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            {isBooked ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-950 font-['Playfair_Display']">
                  VIP Styling Appointment Confirmed!
                </h4>
                <p className="text-xs text-emerald-800 mt-1 max-w-sm mx-auto">
                  We look forward to hosting you at <strong>{bookingStore.name}</strong> on <strong>{bookingDate} at {bookingTime}</strong>. An SMS confirmation has been sent to {bookingPhone}.
                </p>
                <button
                  onClick={() => {
                    setIsBooked(false);
                    setBookingStore(null);
                  }}
                  className="mt-3 px-4 py-1.5 bg-[#0F2C24] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleConfirmBooking} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                    Book VIP Styling at {bookingStore.city} Store
                  </h4>
                  <button
                    type="button"
                    onClick={() => setBookingStore(null)}
                    className="text-stone-400 hover:text-stone-600 text-xs"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Radhika Merchant"
                      className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">Time Slot</label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs"
                    >
                      <option value="12:00 PM">12:00 PM – 01:00 PM</option>
                      <option value="02:30 PM">02:30 PM – 03:30 PM</option>
                      <option value="04:00 PM">04:00 PM – 05:00 PM</option>
                      <option value="06:30 PM">06:30 PM – 07:30 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#0F2C24] hover:bg-[#163e33] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Confirm Free Styling Session & Karatmeter Test
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
