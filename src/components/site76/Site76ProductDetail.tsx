import React, { useState } from 'react';
import {
  Heart,
  ShoppingBag,
  Share2,
  Check,
  ShieldCheck,
  RotateCcw,
  Truck,
  Leaf,
  Ruler,
  ChevronRight,
  Info,
  Sparkles,
  ArrowLeft,
  Feather
} from 'lucide-react';
import { ProductItem } from '../../data/site76Data';
import { site76Config } from '../../config/site76Config';
import { Site76ProductCard } from './Site76ProductCard';

interface Site76ProductDetailProps {
  product: ProductItem;
  allProducts: ProductItem[];
  onBack: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem, size: string, color: string, quantity: number) => void;
  onBuyNow: (product: ProductItem, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
  onOpenSizeGuide: () => void;
  recentlyViewed: ProductItem[];
}

export const Site76ProductDetail: React.FC<Site76ProductDetailProps> = ({
  product,
  allProducts,
  onBack,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide,
  recentlyViewed
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]?.name || 'Natural');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'craft' | 'fit' | 'care' | 'shipping'>('craft');
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    onBuyNow(product, selectedSize, selectedColor, quantity);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `${product.name} — Handcrafted natural wear by Aranya Earth.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-8 sm:py-12 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#544133] hover:text-[#C16A52] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collection</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#6F736D] font-mono">
            <span>Shop</span>
            <span aria-hidden="true">/</span>
            <span className="capitalize">{product.gender}</span>
            <span aria-hidden="true">/</span>
            <span>{product.category}</span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-[#544133] hover:text-[#C16A52] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Piece'}</span>
          </button>
        </div>

        {/* Primary Contiguous Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Image Gallery (Sticky on desktop) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnail Column */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-visible shrink-0 pb-2 sm:pb-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImageIndex === idx ? 'border-[#C16A52] shadow-sm' : 'border-[#E8E1D5] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Main Featured Photo with Zoom Framing */}
            <div className="flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-[#F5EFEB] border border-[#E8E1D5] shadow-lg relative group">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} main view`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#FDFBF7]/90 backdrop-blur-xs text-[#1E1F21] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-sm border border-[#E8E1D5]">
                  {product.badge}
                </span>
              )}
              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-xs text-white text-[11px] px-3 py-1 rounded-full font-mono">
                {selectedImageIndex + 1} / {product.images.length} · Click thumbnails to preview
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header: Title, Category & Ratings */}
            <div className="space-y-2 border-b border-[#E8E1D5] pb-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                <span>{product.material}</span>
                <span aria-hidden="true">·</span>
                <span>{product.origin.split(',')[0]}</span>
              </div>

              <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21] leading-tight">
                {product.name}
              </h1>

              {/* Price & Rating Row */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-bold text-[#1E1F21] tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="font-mono text-sm text-[#9FA895] line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {product.discountPercent && (
                    <span className="text-xs font-semibold text-[#C16A52] bg-[#F5EFEB] px-2 py-0.5 rounded-sm">
                      Save {product.discountPercent}%
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#544133]">
                  <span className="text-[#C16A52]">★</span>
                  <span className="font-bold tabular-nums">{product.rating}</span>
                  <span className="text-[#6F736D]">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* HIGH VISIBILITY MATERIAL CALLOUT (Requirement 9 & 10) */}
            <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#D5C7B5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#263422] uppercase tracking-wider">
                <Leaf className="w-4 h-4 text-[#586737]" />
                <span>Fiber Composition &amp; Origin</span>
              </div>
              <p className="text-xs text-[#544133] leading-relaxed">
                {product.fabricDetails}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-[#6F736D]">
                <span className="px-2 py-0.5 bg-[#FDFBF7] rounded border border-[#E8E1D5]">
                  {product.sustainabilityTag}
                </span>
                <span className="px-2 py-0.5 bg-[#FDFBF7] rounded border border-[#E8E1D5]">
                  Origin: {product.origin}
                </span>
              </div>
            </div>

            {/* Color Swatches Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1E1F21] uppercase tracking-wider">
                  Color: <span className="font-normal text-[#544133] capitalize">{selectedColor}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                {product.availableColors.map((color, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative p-1 rounded-full transition-all ${
                      selectedColor === color.name ? 'ring-2 ring-[#C16A52]' : 'hover:scale-110'
                    }`}
                    title={color.name}
                  >
                    <span
                      className="block w-6 h-6 rounded-full border border-black/20"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector + Size Guide Link */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1E1F21] uppercase tracking-wider">
                  Select Size
                </span>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="inline-flex items-center gap-1 text-[#C16A52] hover:underline font-semibold"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size &amp; Fit Guide</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      selectedSize === size
                        ? 'bg-[#263422] text-[#FDFBF7] border-[#263422] shadow-xs'
                        : 'bg-white border-[#D5C7B5] text-[#1E1F21] hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#6F736D]">
                {product.fitDetails}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1F21]">Quantity:</span>
              <div className="inline-flex items-center border border-[#D5C7B5] rounded-lg bg-white overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 hover:bg-[#F5EFEB] text-[#544133]"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 py-1.5 font-mono font-semibold tabular-nums text-[#1E1F21]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 hover:bg-[#F5EFEB] text-[#544133]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <span className="text-[11px] text-[#586737] font-medium">
                {product.stockCount > 0 ? `In Stock (${product.stockCount} left on loom)` : 'Crafted to Order'}
              </span>
            </div>

            {/* CTAs: Add to Cart & Buy Now */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#263422] hover:bg-[#354830] text-[#FDFBF7] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D5C7B5]" />
                  <span>{addedNotice ? 'Added to Bag!' : 'Add to Bag'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  className={`p-3.5 rounded-full border border-[#D5C7B5] transition-colors ${
                    isWishlisted
                      ? 'bg-[#C16A52] text-white border-[#C16A52]'
                      : 'bg-white text-[#1E1F21] hover:text-[#C16A52]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 rounded-full bg-[#C16A52] hover:bg-[#9C4C36] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                Buy Now (Fast Checkout)
              </button>
            </div>

            {/* Service & Guarantee Trust Markers */}
            <div className="border-t border-[#E8E1D5] pt-5 grid grid-cols-2 gap-4 text-xs text-[#544133]">
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#586737] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1E1F21]">Plastic-Free Delivery</span>
                  <span className="text-[11px] text-[#6F736D]">Dispatches in 24h · Free above ₹{site76Config.FREE_SHIPPING_THRESHOLD}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <RotateCcw className="w-4 h-4 text-[#586737] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1E1F21]">14-Day Exchanges</span>
                  <span className="text-[11px] text-[#6F736D]">Complimentary reverse pickup</span>
                </div>
              </div>
            </div>

            {/* Detailed Accordion Tabs (Craft, Fit, Care, Shipping) */}
            <div className="border-t border-[#E8E1D5] pt-5 space-y-4">
              <div className="flex border-b border-[#E8E1D5] text-xs">
                {[
                  { id: 'craft', label: 'Artisan Story' },
                  { id: 'fit', label: 'Fit & Details' },
                  { id: 'care', label: 'Launder & Care' },
                  { id: 'shipping', label: 'Delivery Terms' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-2 px-3 font-semibold tracking-wider uppercase transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-[#C16A52] border-b-2 border-[#C16A52]'
                        : 'text-[#6F736D] hover:text-[#1E1F21]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#544133] leading-relaxed pt-1">
                {activeTab === 'craft' && (
                  <div className="space-y-3">
                    <p>{product.description}</p>
                    <p className="font-medium text-[#263422]">Craft Provenance: {product.craftStory}</p>
                    <ul className="list-disc pl-4 space-y-1 text-[#6F736D]">
                      {product.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'fit' && (
                  <div className="space-y-2">
                    <p>{product.fitDetails}</p>
                    <div className="bg-[#F5EFEB] p-3 rounded-lg border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#1E1F21] block">Standard Tailoring Measurements:</span>
                      <p className="text-[11px] text-[#6F736D]">
                        Chest/Bust: S (36") · M (38") · L (40") · XL (42") · XXL (44")
                      </p>
                      <p className="text-[11px] text-[#6F736D]">
                        We leave a 1.5-inch hidden side seam allowance in all handloom garments for easy local alterations.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'care' && (
                  <div className="space-y-2">
                    <p className="font-medium text-[#1E1F21]">Recommended Slow Fashion Laundering:</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-[#6F736D]">
                      {product.careInstructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-2 text-[#6F736D]">
                    <p>Orders are packaged with unbleached parchment and compostable cornstarch bags.</p>
                    <p>• Metros: Delivered in 3 to 5 working days.</p>
                    <p>• Tier 2/3 and hill regions: Delivered in 5 to 7 working days.</p>
                    <p>• Doorstep returns & size exchanges are arranged via WhatsApp.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#E8E1D5] pt-12 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Curated Pairings
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1E1F21]">
                  Pieces From the Same Loom
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <Site76ProductCard
                  key={p.id}
                  product={p}
                  onSelect={onSelectProduct}
                  onQuickView={onSelectProduct}
                  onQuickAdd={(item, sz) => onAddToCart(item, sz || item.availableSizes[0] || 'M', item.availableColors[0]?.name || 'Natural', 1)}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={isWishlisted}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Strip */}
        {recentlyViewed.length > 0 && (
          <div className="border-t border-[#E8E1D5] pt-10 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#6F736D] font-mono">
              Recently Viewed Pieces
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {recentlyViewed.map(item => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="w-44 shrink-0 bg-white border border-[#E8E1D5] rounded-lg p-2 hover:border-[#C16A52] transition-colors cursor-pointer"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-xs font-semibold text-[#1E1F21] truncate">{item.name}</p>
                  <p className="text-[11px] font-mono text-[#544133]">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
