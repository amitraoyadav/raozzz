import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { ProductItem } from '../../data/site76Data';

interface Site76ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
  onQuickView: (product: ProductItem) => void;
  onQuickAdd: (product: ProductItem, size?: string) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export const Site76ProductCard: React.FC<Site76ProductCardProps> = ({
  product,
  onSelect,
  onQuickView,
  onQuickAdd,
  onToggleWishlist,
  isWishlisted
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.availableSizes[0] || 'M';
    onQuickAdd(product, defaultSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product.id);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView(product);
  };

  return (
    <div
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col bg-[#FDFBF7] rounded-xl overflow-hidden border border-[#E8E1D5] hover:border-[#D5C7B5] hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5EFEB]">
        {!imageError ? (
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.images[0]}
            alt={`${product.name} - ${product.material}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Zero-broken-image fallback container */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#EAE2D7]">
            <span className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#544133]">
              {product.name}
            </span>
            <span className="text-xs text-[#6F736D] mt-1">{product.material}</span>
          </div>
        )}

        {/* Subtle Badge (Top Left - Max 1 subtle tag) */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#FDFBF7]/90 backdrop-blur-xs text-[#1E1F21] text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm border border-[#E8E1D5]/80">
            {product.badge}
          </div>
        )}

        {/* Wishlist Button (Top Right) */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isWishlisted
              ? 'bg-[#C16A52] text-white shadow-md'
              : 'bg-[#FDFBF7]/85 text-[#1E1F21] hover:text-[#C16A52] hover:bg-white shadow-xs'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Floating Quick Action Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="flex-1 py-2 px-3 bg-[#FDFBF7]/95 hover:bg-white text-[#1E1F21] text-xs font-medium tracking-wider uppercase rounded-lg shadow-sm border border-[#E8E1D5] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#6F736D]" />
            <span>Quick View</span>
          </button>

          <button
            type="button"
            onClick={handleQuickAddClick}
            className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-sm ${
              addedAnimation
                ? 'bg-[#586737] text-white'
                : 'bg-[#263422] text-white hover:bg-[#354830]'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
        <div className="space-y-1">
          {/* Material & Gender Tag */}
          <div className="flex items-center justify-between text-[11px] text-[#6F736D]">
            <span className="uppercase tracking-wider font-mono">{product.material}</span>
            <span className="capitalize">{product.category}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-['Cormorant_Garamond',serif] text-base sm:text-lg font-bold text-[#1E1F21] group-hover:text-[#C16A52] transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>

          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 pt-1">
            {product.availableColors.slice(0, 4).map((color, idx) => (
              <span
                key={idx}
                title={color.name}
                className="w-3 h-3 rounded-full border border-black/15 shrink-0"
                style={{ backgroundColor: color.hex }}
              />
            ))}
            {product.availableColors.length > 4 && (
              <span className="text-[10px] text-[#6F736D] font-mono">
                +{product.availableColors.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Price & Sizes Strip */}
        <div className="pt-2 border-t border-[#E8E1D5] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-sm sm:text-base font-bold text-[#1E1F21] tabular-nums">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="font-mono text-xs text-[#9FA895] line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#6F736D] font-mono">
            {product.availableSizes.slice(0, 3).map((s, i) => (
              <span key={i} className="hover:text-[#1E1F21]">{s}</span>
            ))}
            {product.availableSizes.length > 3 && <span>...</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
