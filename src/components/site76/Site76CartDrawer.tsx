import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Sparkles } from 'lucide-react';
import { ProductItem } from '../../data/site76Data';
import { site76Config } from '../../config/site76Config';

export interface CartItem {
  id: string; // unique cart entry id
  product: ProductItem;
  size: string;
  color: string;
  quantity: number;
}

interface Site76CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onCheckout: () => void;
  appliedCoupon: string | null;
  onApplyCoupon: (code: string) => { success: boolean; message: string };
  onRemoveCoupon: () => void;
  discountAmount: number;
}

export const Site76CartDrawer: React.FC<Site76CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
  discountAmount
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const isFreeShipping = subtotal >= site76Config.FREE_SHIPPING_THRESHOLD;
  const shippingFee = cart.length === 0 ? 0 : isFreeShipping ? 0 : site76Config.DEFAULT_SHIPPING_FEE;
  const amountToFreeShipping = Math.max(0, site76Config.FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / site76Config.FREE_SHIPPING_THRESHOLD) * 100));
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    if (!couponInput.trim()) return;

    const res = onApplyCoupon(couponInput.trim().toUpperCase());
    if (res.success) {
      setCouponSuccess(res.message);
      setCouponInput('');
    } else {
      setCouponError(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FDFBF7] shadow-2xl flex flex-col z-50 border-l border-[#E8E1D5]">
        {/* Header */}
        <div className="p-5 border-b border-[#E8E1D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#263422]" />
            <h2 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
              Your Handcrafted Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6F736D] hover:text-[#1E1F21] rounded-md transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="p-4 bg-[#F5EFEB] border-b border-[#E8E1D5] space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-[#1E1F21]">
              {isFreeShipping ? (
                <span className="text-[#586737] font-semibold">
                  ✓ You have unlocked Free Plastic-Free Delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#C16A52] font-mono">₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for Free Shipping
                </span>
              )}
            </span>
            <span className="text-[11px] text-[#6F736D] font-mono tabular-nums">
              {freeShippingProgress}%
            </span>
          </div>
          <div className="w-full bg-[#EAE2D7] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#263422] h-full transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F5EFEB] mx-auto flex items-center justify-center text-[#6F736D]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
                Your bag is empty
              </p>
              <p className="text-xs text-[#6F736D] max-w-xs mx-auto">
                Explore our handspun khadi, Belgian linen, and wild hemp garments to begin your conscious wardrobe.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-6 py-2 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-white rounded-xl border border-[#E8E1D5] hover:border-[#D5C7B5] transition-all"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#F5EFEB] shrink-0 border border-[#E8E1D5]">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#1E1F21] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#9FA895] hover:text-[#C16A52] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#6F736D]">
                      Size: <span className="font-semibold text-[#1E1F21] font-mono">{item.size}</span> · Color: <span className="font-semibold text-[#1E1F21]">{item.color}</span>
                    </p>
                    <p className="text-[10px] text-[#9C4C36] font-mono uppercase tracking-wider">
                      {item.product.material}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Stepper */}
                    <div className="inline-flex items-center border border-[#D5C7B5] rounded-md bg-[#FDFBF7] text-xs">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 hover:bg-[#EAE2D7] text-[#544133]"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 font-mono font-semibold tabular-nums text-[#1E1F21]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 hover:bg-[#EAE2D7] text-[#544133]"
                      >
                        +
                      </button>
                    </div>

                    {/* Line total */}
                    <span className="font-mono text-sm font-bold text-[#1E1F21] tabular-nums">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer: Promo Code & Checkout Totals */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8E1D5] bg-white space-y-4">
            {/* Promo Code Form */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 bg-[#F5EFEB] rounded-lg border border-[#D5C7B5] text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-[#586737]" />
                    <span className="font-semibold text-[#1E1F21] font-mono">{appliedCoupon} Applied</span>
                    <span className="text-[#586737] font-mono">(-₹{discountAmount.toLocaleString('en-IN')})</span>
                  </div>
                  <button
                    type="button"
                    onClick={onRemoveCoupon}
                    className="text-[#C16A52] hover:underline text-[11px] font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Coupon: EARTH10 / FIRSTBUY"
                    className="flex-1 px-3 py-2 bg-[#FDFBF7] border border-[#D5C7B5] rounded-lg text-xs font-mono uppercase focus:outline-hidden focus:border-[#C16A52]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#263422] text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponError && <p className="text-[11px] text-[#C16A52] mt-1">{couponError}</p>}
              {couponSuccess && <p className="text-[11px] text-[#586737] mt-1">{couponSuccess}</p>}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#544133] pt-2 border-t border-[#E8E1D5]">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-mono tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-[#586737]">
                  <span>Artisan Conscious Discount</span>
                  <span className="font-mono tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Plastic-Free Delivery</span>
                <span className="font-mono tabular-nums">
                  {shippingFee === 0 ? (
                    <span className="text-[#586737] font-semibold">FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#1E1F21] pt-2 border-t border-[#E8E1D5]">
                <span>Total Amount</span>
                <span className="font-mono text-base tabular-nums">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              type="button"
              onClick={onCheckout}
              className="w-full py-3.5 px-6 rounded-full bg-[#C16A52] hover:bg-[#9C4C36] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#6F736D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#586737]" />
              <span>100% Secure SSL Checkout · 14-Day Free Exchange</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
