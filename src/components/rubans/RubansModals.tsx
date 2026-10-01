import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Search,
  ChevronDown,
  Heart,
  Package,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react';
import { RubansProduct, RUBANS_PRODUCTS } from '../../data/rubansData';

// -------------------------------------------------------------
// 1. AUTHENTIC RUBANS CART DRAWER
// -------------------------------------------------------------
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: RubansProduct; quantity: number }[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onAddToCart: (product: RubansProduct) => void;
  onOpenCheckout: () => void;
  onOpenProductDetail: (product: RubansProduct) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onAddToCart,
  onOpenCheckout,
  onOpenProductDetail
}) => {
  const [billSummaryOpen, setBillSummaryOpen] = useState(true);

  if (!isOpen) return null;

  // Calculate pricing & B1G1 Discount:
  // For every 2 eligible items, the cheapest 1 is free
  let subtotal = 0;
  const unitPrices: number[] = [];

  items.forEach(item => {
    subtotal += item.product.price * item.quantity;
    for (let i = 0; i < item.quantity; i++) {
      unitPrices.push(item.product.price);
    }
  });

  const freeItemCount = Math.floor(unitPrices.length / 2);
  const sortedUnits = [...unitPrices].sort((a, b) => a - b);
  const b1g1Discount = sortedUnits.slice(0, freeItemCount).reduce((sum, p) => sum + p, 0);

  const isFreeShipping = subtotal >= 999;
  const shippingFee = isFreeShipping ? 0 : 99;
  const finalTotal = Math.max(0, subtotal - b1g1Discount + (subtotal > 0 ? shippingFee : 0));

  // Threshold for 25% extra offer banner (Rs. 1000)
  const threshold = 1000;
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const remainingForOffer = Math.max(0, threshold - subtotal);

  // Upsell candidates (exclude items already in cart)
  const cartProductIds = new Set(items.map(i => i.product.id));
  const upsellProducts = RUBANS_PRODUCTS.filter(p => !cartProductIds.has(p.id)).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end font-['Lato',sans-serif]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 text-stone-600 hover:text-black cursor-pointer"
              aria-label="Back to store"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <h2 className="text-lg font-bold text-stone-900 tracking-wide">
              Cart ({items.reduce((sum, i) => sum + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping & 25% Progress Banner from uploaded HTML */}
        <div className="bg-[#FFF8F6] border-b border-[#F7DFDB] p-3.5 mx-4 mt-3 rounded-md">
          <div className="flex items-center justify-between text-xs font-bold text-[#47080C] mb-1.5">
            <span>{isFreeShipping ? '🎉 FREE Shipping Unlocked!' : 'Get FLAT 25% OFF + Free Shipping'}</span>
            <span className="text-[11px] font-mono text-[#c9a24a]">B1G1 APPLIED</span>
          </div>

          <div className="text-[11px] text-stone-700 mb-2">
            {subtotal >= threshold ? (
              <span className="text-emerald-700 font-semibold">
                Congratulations! You qualified for extra discounts.
              </span>
            ) : (
              <span>
                Add products worth <strong className="text-[#47080C]">₹{remainingForOffer}</strong> more to unlock 25% extra!
              </span>
            )}
          </div>

          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#e85d5d] h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Scrollable Items & Upsell Area */}
        <div className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="py-16 text-center text-stone-500">
              <ShoppingBag className="w-12 h-12 mx-auto text-stone-300 mb-3" />
              <p className="text-base font-semibold text-stone-800">Your bag is empty</p>
              <p className="text-xs text-stone-400 mt-1 mb-6">
                Explore our festive jewellery and enjoy Buy 1 Get 1 Free!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111111] hover:bg-[#47080C] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 pt-1">
                In your bag
              </div>

              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 bg-white p-2.5 rounded-lg border border-stone-100 shadow-2xs">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-md border border-stone-100 shrink-0 cursor-pointer"
                    onClick={() => onOpenProductDetail(product)}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4
                          onClick={() => onOpenProductDetail(product)}
                          className="text-xs font-bold text-stone-900 line-clamp-2 hover:text-[#47080C] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-stone-400 hover:text-red-600 p-1 cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs font-bold text-stone-900">
                          ₹{product.price}
                        </span>
                        <span className="text-[11px] text-stone-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                        <span className="text-[10px] text-[#28b061] font-semibold">
                          ({product.discountPercent}% Off)
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-1 text-[10px] text-[#28b061] font-semibold">
                        <Sparkles className="w-3 h-3 text-[#28b061]" />
                        <span>B1G1 Offer Active</span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      <span className="text-[11px] text-stone-500 font-medium">Quantity</span>
                      <div className="flex items-center border border-stone-200 rounded-md">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-black hover:bg-stone-50 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800 font-mono">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-black hover:bg-stone-50 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upsell Carousel "You might also like" (from uploaded HTML) */}
          {upsellProducts.length > 0 && (
            <div className="pt-4 pb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
                You might also like
              </div>
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x">
                {upsellProducts.map(p => (
                  <div
                    key={p.id}
                    className="flex-none w-[140px] bg-white border border-stone-100 rounded-lg p-2 flex flex-col justify-between shadow-2xs snap-start"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-24 object-cover rounded-md mb-2 cursor-pointer"
                      onClick={() => onOpenProductDetail(p)}
                    />
                    <div className="flex-1">
                      <div
                        onClick={() => onOpenProductDetail(p)}
                        className="text-[11px] font-medium text-stone-900 line-clamp-2 leading-tight hover:text-[#47080C] cursor-pointer"
                      >
                        {p.name}
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xs font-bold text-stone-900">₹{p.price}</span>
                        <span className="text-[10px] text-stone-400 line-through">₹{p.originalPrice}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(p)}
                      className="mt-2 w-full py-1.5 bg-[#e85d5d] hover:bg-[#d14a4a] text-white text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer / Bill Summary & GoKwik Checkout */}
        {items.length > 0 && (
          <div className="border-t border-stone-200 bg-white p-4 space-y-3">
            {/* Bill Summary Accordion */}
            <div className="bg-[#FAF9F6] p-3 rounded-lg border border-stone-200/80">
              <button
                type="button"
                onClick={() => setBillSummaryOpen(!billSummaryOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-stone-800 cursor-pointer"
              >
                <span>Bill Summary</span>
                <div className="flex items-center gap-1 text-[11px] text-stone-500 font-normal">
                  <span>{unitPrices.length} Items</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${billSummaryOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {billSummaryOpen && (
                <div className="mt-2 pt-2 border-t border-stone-200/60 space-y-1.5 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span className="font-mono font-medium">₹{subtotal}</span>
                  </div>

                  {b1g1Discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Discount (Buy 1 Get 1 FREE)</span>
                      <span className="font-mono">-₹{b1g1Discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>
                      {isFreeShipping ? (
                        <span className="text-emerald-700 font-bold">FREE</span>
                      ) : (
                        <span className="font-mono">₹99</span>
                      )}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-stone-900 text-sm">
                    <span>Grand Total</span>
                    <span className="font-mono text-[#47080C]">₹{finalTotal}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Free Delivery alert text from HTML */}
            <div className="text-center text-[11px] font-semibold text-[#f27f6d] bg-[#FFF8F6] py-1 rounded">
              {isFreeShipping
                ? '✓ Free Delivery Applied on your order'
                : 'Free Delivery on orders above ₹999'}
            </div>

            {/* GoKwik Simulated Checkout CTA */}
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full bg-[#1e1e1e] hover:bg-[#47080C] text-white py-3.5 px-4 rounded-md font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-between cursor-pointer shadow-md"
            >
              <span>Proceed to Checkout</span>
              <div className="flex items-center gap-2 font-mono">
                <span>₹{finalTotal}</span>
                {b1g1Discount > 0 && (
                  <span className="text-xs text-stone-400 line-through">₹{subtotal}</span>
                )}
              </div>
            </button>

            {/* Secure Payments Note */}
            <div className="text-center text-[10px] text-stone-400 uppercase tracking-widest font-semibold pt-1">
              🔒 100% SECURE CHECKOUT · CASH ON DELIVERY AVAILABLE
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. SEARCH POPUP MODAL (from uploaded HTML idam-search)
// -------------------------------------------------------------
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: RubansProduct) => void;
  onNavigateToCategory: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onNavigateToCategory
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trendingTerms = [
    'Demi fine',
    'Bangles',
    'Earrings',
    'Kashmiri earrings',
    'Kundan choker',
    'Temple jewellery',
    'Potli bags',
    '925 Silver ring'
  ];

  const filteredProducts = query.trim()
    ? RUBANS_PRODUCTS.filter(
        p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.craft.toLowerCase().includes(query.toLowerCase()) ||
          p.sku.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 font-['Lato',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden mt-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Header */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for earrings, bangles, necklaces, kundan..."
            autoFocus
            className="flex-1 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-black font-semibold cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Body */}
        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-6">
          {query.trim() === '' ? (
            <>
              {/* Trending Now */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                  Trending Now
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTerms.map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-[#47080C] hover:text-white rounded-full text-xs text-stone-700 transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Categories */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Popular Categories
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Demi Fine', slug: 'demi-fine', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80' },
                    { name: 'Ethnic Sets', slug: 'jewellery-set', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80' },
                    { name: 'Bangles', slug: 'bangles-and-bracelets', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80' },
                    { name: 'Earrings', slug: 'earrings', img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=300&q=80' }
                  ].map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        onClose();
                        onNavigateToCategory(cat.slug);
                      }}
                      className="flex items-center gap-2.5 p-2 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors text-left cursor-pointer group"
                    >
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-10 h-10 object-cover rounded-md"
                      />
                      <span className="text-xs font-semibold text-stone-800 group-hover:text-[#47080C]">
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="text-xs text-stone-500 mb-3">
                Found {filteredProducts.length} items for "{query}"
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-8 text-center text-stone-400 text-sm">
                  No matching items found. Try searching for Kundan, American Diamond, or Bangles.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredProducts.map(p => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onSelectProduct(p);
                      }}
                      className="flex items-center gap-3 p-2 bg-stone-50 hover:bg-stone-100 rounded-lg cursor-pointer transition-colors"
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-14 h-16 object-cover rounded-md shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-stone-900 truncate">{p.name}</div>
                        <div className="text-[11px] text-stone-500">{p.craft} · {p.category}</div>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-xs font-bold text-stone-900 font-mono">₹{p.price}</span>
                          <span className="text-[10px] text-stone-400 line-through">₹{p.originalPrice}</span>
                          <span className="text-[10px] text-[#28b061] font-semibold">({p.discountPercent}% Off)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. PRODUCT DETAIL QUICK MODAL
// -------------------------------------------------------------
interface ProductDetailModalProps {
  product: RubansProduct | null;
  onClose: () => void;
  onAddToCart: (product: RubansProduct) => void;
  onBuyNow: (product: RubansProduct) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: RubansProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imageUrl];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Lato',sans-serif]">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-stone-600 hover:text-black rounded-full shadow-md cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Side */}
          <div className="p-4 sm:p-6 bg-stone-50 flex flex-col justify-between">
            <div className="relative aspect-4/5 rounded-lg overflow-hidden bg-white border border-stone-200/80 mb-3">
              <img
                src={images[selectedImage] || product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Swallowtail Ribbon badge */}
              <div
                className="absolute top-3 left-0 z-10 text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 shadow-sm"
                style={{
                  background: '#622627',
                  clipPath: 'polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%)'
                }}
              >
                {product.ribbonBadge || 'B1G1 Free'}
              </div>
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 cursor-pointer transition-all ${
                      selectedImage === idx ? 'border-[#47080C] shadow-sm' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & SKU */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>{product.craft} · {product.category}</span>
                <span className="font-mono">SKU: {product.sku}</span>
              </div>

              <h1 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-2">
                {product.name}
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 rounded text-xs font-bold">
                  <span>★</span>
                  <span>{product.rating}</span>
                </span>
                <span className="text-xs text-stone-500">
                  Based on {product.reviewCount} reviews
                </span>
              </div>

              {/* Price Row */}
              <div className="p-3 bg-stone-50 rounded-lg mb-4">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-extrabold text-stone-900 font-mono">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-stone-400 line-through font-mono">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-[#28b061]">
                    ({product.discountPercent}% Off)
                  </span>
                </div>
                <div className="mt-1 text-xs font-bold text-[#47080C]">
                  Extra 25% OFF on Cart Price: ₹{product.offerPrice25Off}
                </div>
                <div className="mt-0.5 text-[11px] text-stone-500">
                  Included in Sitewide Buy 1 Get 1 Free Promotion
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="border-t border-stone-100 pt-3 space-y-1.5 text-xs text-stone-600 mb-6">
                <div className="flex justify-between">
                  <span className="text-stone-400 font-medium">Metal:</span>
                  <span className="font-semibold text-stone-800">{product.metal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 font-medium">Stone Work:</span>
                  <span className="font-semibold text-stone-800">{product.stone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 font-medium">Plating:</span>
                  <span className="font-semibold text-stone-800">{product.plating}</span>
                </div>
                {product.dimensions && (
                  <div className="flex justify-between">
                    <span className="text-stone-400 font-medium">Dimensions:</span>
                    <span className="font-semibold text-stone-800">{product.dimensions}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2 border-t border-stone-200">
              <div className="flex gap-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 py-3 bg-stone-900 hover:bg-[#47080C] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 border rounded-none cursor-pointer transition-colors ${
                    isWishlisted
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-stone-300 text-stone-700 hover:bg-stone-50'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                onClick={() => onBuyNow(product)}
                className="w-full py-3 bg-[#47080C] hover:bg-[#340508] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Buy Now (B1G1 Applied)
              </button>

              <div className="pt-2 flex items-center justify-around text-[10px] text-stone-500">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  <span>Free shipping above ₹999</span>
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
                  <span>7-Day Return / Exchange</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. DEMO CHECKOUT MODAL
// -------------------------------------------------------------
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { product: RubansProduct; quantity: number }[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  const [formData, setFormData] = useState({
    fullName: 'Ananya Sharma',
    phone: '9845012345',
    email: 'ananya.sharma@example.com',
    address: 'Flat 402, Prestige Palms, 12th Main Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    paymentMethod: 'upi'
  });
  const [placed, setPlaced] = useState(false);

  if (!isOpen) return null;

  let subtotal = 0;
  const unitPrices: number[] = [];
  items.forEach(i => {
    subtotal += i.product.price * i.quantity;
    for (let c = 0; c < i.quantity; c++) unitPrices.push(i.product.price);
  });
  const freeCount = Math.floor(unitPrices.length / 2);
  const b1g1Discount = [...unitPrices].sort((a, b) => a - b).slice(0, freeCount).reduce((s, p) => s + p, 0);
  const finalTotal = subtotal - b1g1Discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Lato',sans-serif]">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-6 sm:p-8 animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-stone-400 hover:text-black cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!placed ? (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-extrabold text-base tracking-[0.2em] text-[#47080C]">RUBANS</span>
              <span className="text-xs text-stone-400">· Demo Checkout</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-4">Complete Your Order</h2>

            {/* Order summary box */}
            <div className="bg-[#FFF8F6] p-3 rounded border border-[#F7DFDB] mb-4 text-xs">
              <div className="flex justify-between mb-1">
                <span>Items Subtotal:</span>
                <span className="font-mono">₹{subtotal}</span>
              </div>
              {b1g1Discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold mb-1">
                  <span>B1G1 Promotion Discount:</span>
                  <span className="font-mono">-₹{b1g1Discount}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600 mb-1">
                <span>Shipping:</span>
                <span className="text-emerald-700 font-bold">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#47080C] pt-1 border-t border-stone-200">
                <span>Amount to Pay:</span>
                <span className="font-mono">₹{finalTotal}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Delivery Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full border border-stone-300 rounded px-3 py-2 text-stone-900"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div className="pt-2">
                <label className="block text-stone-700 font-semibold mb-1">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'upi', label: 'UPI / GPay' },
                    { id: 'cod', label: 'Cash on Delivery' },
                    { id: 'card', label: 'Credit / Debit Card' }
                  ].map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                      className={`p-2 rounded text-center border text-xs font-semibold cursor-pointer ${
                        formData.paymentMethod === m.id
                          ? 'border-[#47080C] bg-[#FFF8F6] text-[#47080C]'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#111111] hover:bg-[#47080C] text-white py-3.5 rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  Place Order (₹{finalTotal})
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-stone-900">Order Confirmed!</h3>
            <p className="text-xs text-stone-600 mt-1 mb-4">
              Order ID: <strong className="font-mono text-stone-900">RB-849204</strong>
            </p>
            <div className="bg-stone-50 p-4 rounded-lg text-left text-xs space-y-2 mb-6 border border-stone-200">
              <div className="flex justify-between">
                <span className="text-stone-500">Shipping To:</span>
                <span className="font-semibold text-stone-800">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Delivery Address:</span>
                <span className="font-semibold text-stone-800 text-right max-w-[200px] truncate">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Estimated Delivery:</span>
                <span className="font-semibold text-emerald-700">3-4 Business Days</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#47080C] text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-black transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 5. TRACK PACKAGE MODAL (from uploaded HTML)
// -------------------------------------------------------------
export const TrackPackageModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const [orderId, setOrderId] = useState('RB-849204');
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 font-['Lato',sans-serif]">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-6 sm:p-8 animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-stone-400 hover:text-black cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Package className="w-5 h-5 text-[#47080C]" />
          <h2 className="text-lg font-bold text-stone-900">Track Your Order</h2>
        </div>

        <p className="text-xs text-stone-600 mb-4">
          Enter your Order ID (e.g. RB-849204) or registered 10-digit mobile number.
        </p>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={orderId}
            onChange={e => setOrderId(e.target.value)}
            placeholder="Order ID / Mobile Number"
            className="flex-1 border border-stone-300 px-3 py-2 text-xs rounded text-stone-900"
          />
          <button
            onClick={() => setSearched(true)}
            className="bg-[#47080C] hover:bg-black text-white px-4 py-2 text-xs font-bold rounded uppercase cursor-pointer transition-colors"
          >
            Track
          </button>
        </div>

        {searched && (
          <div className="border border-stone-200 rounded-lg p-4 bg-stone-50">
            <div className="flex justify-between items-center text-xs pb-3 border-b border-stone-200 mb-4">
              <div>
                <span className="text-stone-400">Order:</span>{' '}
                <strong className="font-mono text-stone-900">{orderId}</strong>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                Out for Delivery
              </span>
            </div>

            {/* Timeline */}
            <div className="space-y-4 text-xs">
              {[
                { title: 'Order Confirmed', time: 'Yesterday, 10:30 AM', done: true },
                { title: 'Packed & Dispatched from Bangalore Warehouse', time: 'Yesterday, 4:15 PM', done: true },
                { title: 'Arrived at Local Delivery Hub', time: 'Today, 8:45 AM', done: true },
                { title: 'Out for Delivery by Bluedart Logistics', time: 'Today, 10:15 AM', done: true, current: true },
                { title: 'Estimated Delivery by 6:00 PM Today', time: 'Expected', done: false }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full ${
                        step.done
                          ? step.current
                            ? 'bg-amber-500 ring-4 ring-amber-100'
                            : 'bg-emerald-600'
                          : 'bg-stone-300'
                      }`}
                    />
                    {idx < 4 && <div className="w-0.5 h-8 bg-stone-200" />}
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">{step.title}</div>
                    <div className="text-[11px] text-stone-500">{step.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
