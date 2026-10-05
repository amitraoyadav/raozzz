import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Heart,
  Eye,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  Instagram,
  Quote,
  Feather,
  Droplet
} from 'lucide-react';
import { site76Config } from '../../config/site76Config';
import {
  PRODUCTS_DATA,
  CATEGORIES_DATA,
  MATERIALS_DATA,
  COLLECTIONS_DATA,
  JOURNAL_ARTICLES,
  CUSTOMER_REVIEWS,
  ProductItem
} from '../../data/site76Data';
import { Site76Navbar } from './Site76Navbar';
import { Site76Hero } from './Site76Hero';
import { Site76Shop } from './Site76Shop';
import { Site76ProductCard } from './Site76ProductCard';
import { Site76ProductDetail } from './Site76ProductDetail';
import { Site76Materials } from './Site76Materials';
import { Site76Collections } from './Site76Collections';
import { Site76AboutCraft } from './Site76AboutCraft';
import { Site76Journal } from './Site76Journal';
import { Site76ContactFaq } from './Site76ContactFaq';
import { Site76Footer } from './Site76Footer';
import { Site76CartDrawer, CartItem } from './Site76CartDrawer';
import { Site76WishlistDrawer } from './Site76WishlistDrawer';
import { Site76CheckoutModal } from './Site76CheckoutModal';
import { Site76QuickViewModal } from './Site76QuickViewModal';
import { Site76SizeGuideModal } from './Site76SizeGuideModal';
import { Site76SearchModal } from './Site76SearchModal';
import { Site76AccountModal } from './Site76AccountModal';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';

interface Site76AppProps {
  onBackToHub?: () => void;
}

export const Site76App: React.FC<Site76AppProps> = ({ onBackToHub }) => {
  // Navigation View State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedMaterialSlug, setSelectedMaterialSlug] = useState<string | null>(null);
  const [selectedCollectionSlug, setSelectedCollectionSlug] = useState<string | null>(null);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  // Shop filter presets passed from navbar or home
  const [shopFilterGender, setShopFilterGender] = useState<string>('all');
  const [shopFilterCategory, setShopFilterCategory] = useState<string>('all');
  const [shopFilterMaterial, setShopFilterMaterial] = useState<string>('all');

  // Ecommerce States with LocalStorage Persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aranya_cart_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    // Seed initial thoughtful items
    return [
      {
        id: 'cart-init-1',
        product: PRODUCTS_DATA[0], // Unbleached Khadi Dress
        size: 'S',
        color: 'Unbleached Ecru',
        quantity: 1
      },
      {
        id: 'cart-init-2',
        product: PRODUCTS_DATA[8], // Artisanal Khadi Shirt
        size: 'M',
        color: 'Undyed Ecru',
        quantity: 1
      }
    ];
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aranya_wishlist_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    return ['prod-w-02', 'prod-m-02'];
  });

  const [recentlyViewed, setRecentlyViewed] = useState<ProductItem[]>(() => {
    return [PRODUCTS_DATA[1], PRODUCTS_DATA[3]];
  });

  const [placedOrders, setPlacedOrders] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('aranya_orders_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Coupons & Pricing
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  // Modals & Drawers
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  // Toast Feedback State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem('aranya_cart_v1', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aranya_wishlist_v1', JSON.stringify(wishlistIds));
    } catch {}
  }, [wishlistIds]);

  useEffect(() => {
    try {
      localStorage.setItem('aranya_orders_v1', JSON.stringify(placedOrders));
    } catch {}
  }, [placedOrders]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct, selectedMaterialSlug, selectedCollectionSlug, selectedArticleSlug]);

  // Sync SEO Metadata for Site #76
  useEffect(() => {
    document.title = `${site76Config.BRAND_NAME} | ${site76Config.TAGLINE}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'India’s conscious slow fashion atelier crafting premium clothing from 100% GOTS organic cotton, pure French linen, wild Himalayan hemp, and handspun khadi. Colored with living botanical plant dyes.'
      );
    }
  }, []);

  // Cart Handlers
  const handleAddToCart = (product: ProductItem, size: string, color: string, quantity: number) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        i => i.product.id === product.id && i.size === size && i.color === color
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          product,
          size,
          color,
          quantity
        }
      ];
    });

    // Recompute coupon if spend changed
    recomputeDiscount(appliedCoupon);
    showToast(`Added "${product.name}" (${size}) to your bag`);
    setCartDrawerOpen(true);
  };

  const handleUpdateCartQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
    showToast('Removed item from bag');
  };

  // Wishlist Handlers
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from saved wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to your conscious wishlist');
        return [...prev, productId];
      }
    });
  };

  const handleMoveWishlistToCart = (product: ProductItem, size?: string) => {
    handleAddToCart(product, size || product.availableSizes[0] || 'M', product.availableColors[0]?.name || 'Natural', 1);
    handleToggleWishlist(product.id);
  };

  // Coupon Handlers
  const recomputeDiscount = (code: string | null) => {
    if (!code) {
      setDiscountAmount(0);
      return;
    }
    const found = site76Config.AVAILABLE_COUPONS.find(c => c.code === code);
    if (!found) {
      setDiscountAmount(0);
      return;
    }
    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const calculated = Math.round((subtotal * found.discountPercent) / 100);
    setDiscountAmount(calculated);
  };

  const handleApplyCoupon = (code: string) => {
    const found = site76Config.AVAILABLE_COUPONS.find(c => c.code === code);
    const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    if (!found) {
      return { success: false, message: 'Invalid coupon code. Try EARTH10 or FIRSTBUY' };
    }
    if (subtotal < found.minSpend) {
      return { success: false, message: `Minimum cart value of ₹${found.minSpend} required for ${found.code}` };
    }

    const calculated = Math.round((subtotal * found.discountPercent) / 100);
    setAppliedCoupon(found.code);
    setDiscountAmount(calculated);
    return { success: true, message: `Applied ${found.code} (${found.discountPercent}% off saved ₹${calculated})` };
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
    showToast('Coupon removed');
  };

  // Navigation router
  const handleNavigate = (view: string, payload?: any) => {
    if (view === 'shop') {
      if (payload?.gender) setShopFilterGender(payload.gender);
      if (payload?.category) setShopFilterCategory(payload.category);
      if (payload?.material) setShopFilterMaterial(payload.material);
      setCurrentView('shop');
      return;
    }
    if (view === 'product') {
      setSelectedProduct(payload);
      // Track recently viewed
      if (payload) {
        setRecentlyViewed(prev => [payload, ...prev.filter(p => p.id !== payload.id)].slice(0, 6));
      }
      setCurrentView('product');
      return;
    }
    if (view === 'material-detail') {
      setSelectedMaterialSlug(payload);
      setCurrentView('material-detail');
      return;
    }
    if (view === 'collection-detail') {
      setSelectedCollectionSlug(payload);
      setCurrentView('collection-detail');
      return;
    }
    if (view === 'journal-article') {
      setSelectedArticleSlug(payload);
      setCurrentView('journal-article');
      return;
    }
    setCurrentView(view);
  };

  const wishlistProducts = PRODUCTS_DATA.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E1F21] font-['Inter',system-ui,sans-serif] selection:bg-[#263422] selection:text-[#FDFBF7]">
      {/* Reference Switcher Bar for multi-site preview & return to hub */}
      <ReferenceSiteSwitcher currentSiteId="site-76-aranya-earth" />

      {/* Main Responsive Header */}
      <Site76Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenAccount={() => setAccountModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        categories={CATEGORIES_DATA}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#263422] text-[#FDFBF7] px-5 py-3 rounded-full text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 border border-[#354830] animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#98A391]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* VIEW: HOMEPAGE */}
      {currentView === 'home' && (
        <main>
          {/* 1. Hero Section */}
          <Site76Hero
            onExploreShop={(gender) => handleNavigate('shop', { gender: gender || 'all' })}
            onExploreMaterials={() => handleNavigate('materials')}
          />

          {/* 2. Shop by Category Bar */}
          <section className="py-16 sm:py-20 border-b border-[#E8E1D5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Natural Categories
                </span>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                  Shop by Silhouette &amp; Use
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate('shop')}
                className="text-xs font-semibold text-[#263422] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES_DATA.slice(0, 6).map(cat => (
                <div
                  key={cat.id}
                  onClick={() => handleNavigate('shop', { category: cat.name.split(' ')[0] })}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#D5C7B5] hover:shadow-md transition-all cursor-pointer text-center p-3"
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-[#F5EFEB] mb-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#1E1F21] group-hover:text-[#C16A52]">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] text-[#6F736D] font-mono">
                    {cat.itemCount} pieces
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. New Arrivals on the Loom */}
          <section className="py-16 sm:py-20 border-b border-[#E8E1D5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Fresh from Weaving Clusters
                </span>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                  New Arrivals: Autumn Solstice
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate('shop')}
                className="text-xs font-semibold text-[#263422] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1"
              >
                <span>View All New Loom Pieces</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS_DATA.filter(p => p.isNew).slice(0, 4).map(product => (
                <Site76ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => handleNavigate('product', p)}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onQuickAdd={(p, size) => handleAddToCart(p, size || 'M', p.availableColors[0]?.name || 'Natural', 1)}
                  onToggleWishlist={handleToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              ))}
            </div>
          </section>

          {/* 4. Featured Collection: The Solstice Linen Edit */}
          <section className="py-16 sm:py-20 border-b border-[#E8E1D5] bg-[#F5EFEB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                    Featured Seasonal Edit
                  </span>
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold text-[#1E1F21] leading-tight">
                    The Solstice Linen Edit
                  </h2>
                  <p className="text-sm text-[#544133] leading-relaxed font-light">
                    Pure French flax linen garments tailored for effortless warmth and tropical breezes. An exploration of clean wrap midi dresses, pleated palazzo trousers, and unstructured mandarin kurtas.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleNavigate('collection-detail', 'solstice-linen-edit')}
                      className="px-6 py-3 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
                    >
                      Explore The Solstice Edit
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {PRODUCTS_DATA.filter(p => p.material.includes('Linen')).slice(0, 2).map(product => (
                    <Site76ProductCard
                      key={product.id}
                      product={product}
                      onSelect={(p) => handleNavigate('product', p)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onQuickAdd={(p, size) => handleAddToCart(p, size || 'M', p.availableColors[0]?.name || 'Natural', 1)}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={wishlistIds.includes(product.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. The 6 Natural Fibers Feature */}
          <section className="py-16 sm:py-24 border-b border-[#E8E1D5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                Pure Natural Fiber Materiality
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                Woven from Plants, Water &amp; Earth
              </h2>
              <p className="text-sm text-[#544133] font-light">
                Click any fiber to inspect its provenance, tactile handfeel, and environmental footprint.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {MATERIALS_DATA.map(mat => (
                <div
                  key={mat.id}
                  onClick={() => handleNavigate('material-detail', mat.slug)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#C16A52] p-4 text-center cursor-pointer transition-all hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F5EFEB] mx-auto flex items-center justify-center text-[#586737] mb-3 group-hover:bg-[#C16A52] group-hover:text-white transition-colors">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#1E1F21] group-hover:text-[#C16A52]">
                    {mat.name}
                  </h4>
                  <p className="text-[10px] text-[#6F736D] font-mono mt-1">
                    {mat.origin.split(',')[0]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Best Sellers */}
          <section className="py-16 sm:py-20 border-b border-[#E8E1D5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Timeless Classics
                </span>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                  Loved by Mindful Seekers
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate('shop')}
                className="text-xs font-semibold text-[#263422] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1"
              >
                <span>View Full Storefront</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS_DATA.filter(p => p.isBestSeller).slice(0, 4).map(product => (
                <Site76ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => handleNavigate('product', p)}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onQuickAdd={(p, size) => handleAddToCart(p, size || 'M', p.availableColors[0]?.name || 'Natural', 1)}
                  onToggleWishlist={handleToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              ))}
            </div>
          </section>

          {/* 7. Craftsmanship & Sustainability Banner */}
          <section className="py-16 sm:py-24 bg-[#263422] text-[#FDFBF7] border-b border-[#354830]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D5C7B5] font-mono">
                    Zero Compromise Slow Fashion
                  </span>
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold leading-tight">
                    Every thread is hand-spun. <br />
                    Every color is steeped in plants.
                  </h2>
                  <p className="text-sm text-[#EAE2D7] font-light leading-relaxed max-w-xl">
                    By eliminating petroleum polyester, synthetic fixatives, and automated sweatshops, we return fashion to human scale. We support over 1,200 master weavers across Kutch, Bengal, and Uttarakhand with fair living wages.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => handleNavigate('craft')}
                      className="px-6 py-3 rounded-full bg-[#C16A52] hover:bg-[#9C4C36] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Our Artisan Clusters
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavigate('sustainability')}
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/20"
                    >
                      Zero Polyester Manifesto
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#D5C7B5]">100%</span>
                    <p className="text-xs font-medium text-white">Biodegradable</p>
                    <p className="text-[11px] text-[#98A391] leading-tight">Composts back to soil in 6 months</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#D5C7B5]">Zero</span>
                    <p className="text-xs font-medium text-white">Synthetic Toxic Dyes</p>
                    <p className="text-[11px] text-[#98A391] leading-tight">Fermented indigo & madder root</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#D5C7B5]">1,200+</span>
                    <p className="text-xs font-medium text-white">Artisans Sustained</p>
                    <p className="text-[11px] text-[#98A391] leading-tight">Fair trade living wages</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#D5C7B5]">Plastic 0</span>
                    <p className="text-xs font-medium text-white">Packaging & Trims</p>
                    <p className="text-[11px] text-[#98A391] leading-tight">Cornstarch mailers & wood buttons</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Editorial Testimonials */}
          <section className="py-16 sm:py-24 border-b border-[#E8E1D5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                Client Reflections
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                Worn Across India &amp; Worldwide
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CUSTOMER_REVIEWS.map(rev => (
                <div key={rev.id} className="p-6 bg-white rounded-2xl border border-[#E8E1D5] space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex text-[#C16A52] text-xs">
                      {'★'.repeat(rev.rating)}
                    </div>
                    <h4 className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#1E1F21] leading-snug">
                      "{rev.title}"
                    </h4>
                    <p className="text-xs text-[#544133] leading-relaxed font-light">
                      {rev.comment}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E1D5] text-[11px] text-[#6F736D]">
                    <span className="font-bold text-[#1E1F21] block">{rev.author}</span>
                    <span>{rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Slow Living Journal Feature */}
          <section className="py-16 sm:py-20 border-b border-[#E8E1D5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                  Slow Living Journal
                </span>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-[#1E1F21]">
                  Essays from the Loom Shed
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate('journal')}
                className="text-xs font-semibold text-[#263422] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1"
              >
                <span>Read Full Journal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {JOURNAL_ARTICLES.slice(0, 2).map(art => (
                <div
                  key={art.id}
                  onClick={() => handleNavigate('journal-article', art.slug)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#D5C7B5] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#F5EFEB]">
                    <img
                      src={art.coverImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[11px] text-[#9C4C36] font-mono uppercase tracking-widest">
                      {art.category} · {art.readTime}
                    </span>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21] group-hover:text-[#C16A52] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#544133] line-clamp-2 leading-relaxed font-light">
                      {art.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW: SHOP */}
      {currentView === 'shop' && (
        <Site76Shop
          products={PRODUCTS_DATA}
          onSelectProduct={(p) => handleNavigate('product', p)}
          onQuickView={(p) => setQuickViewProduct(p)}
          onQuickAdd={(p, size) => handleAddToCart(p, size || 'M', p.availableColors[0]?.name || 'Natural', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          initialGender={shopFilterGender}
          initialCategory={shopFilterCategory}
          initialMaterial={shopFilterMaterial}
        />
      )}

      {/* VIEW: PRODUCT DETAIL (PDP) */}
      {currentView === 'product' && selectedProduct && (
        <Site76ProductDetail
          product={selectedProduct}
          allProducts={PRODUCTS_DATA}
          onBack={() => setCurrentView('shop')}
          onSelectProduct={(p) => handleNavigate('product', p)}
          onAddToCart={(prod, size, color, qty) => handleAddToCart(prod, size, color, qty)}
          onBuyNow={(prod, size, color, qty) => {
            handleAddToCart(prod, size, color, qty);
            setCartDrawerOpen(false);
            setCheckoutModalOpen(true);
          }}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onOpenSizeGuide={() => setSizeGuideOpen(true)}
          recentlyViewed={recentlyViewed}
        />
      )}

      {/* VIEW: MATERIALS (Directory or Detail) */}
      {(currentView === 'materials' || currentView === 'material-detail') && (
        <Site76Materials
          materials={MATERIALS_DATA}
          selectedMaterialSlug={currentView === 'material-detail' ? selectedMaterialSlug : null}
          onSelectMaterial={(slug) => handleNavigate('material-detail', slug)}
          onBackToDirectory={() => setCurrentView('materials')}
          allProducts={PRODUCTS_DATA}
          onSelectProduct={(p) => handleNavigate('product', p)}
          onQuickView={(p) => setQuickViewProduct(p)}
          onQuickAdd={(p, size) => handleAddToCart(p, size || 'M', p.availableColors[0]?.name || 'Natural', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />
      )}

      {/* VIEW: COLLECTIONS (Directory or Detail) */}
      {(currentView === 'collections' || currentView === 'collection-detail') && (
        <Site76Collections
          collections={COLLECTIONS_DATA}
          selectedCollectionSlug={currentView === 'collection-detail' ? selectedCollectionSlug : null}
          onSelectCollection={(slug) => handleNavigate('collection-detail', slug)}
          onBackToCollections={() => setCurrentView('collections')}
          allProducts={PRODUCTS_DATA}
          onSelectProduct={(p) => handleNavigate('product', p)}
          onQuickView={(p) => setQuickViewProduct(p)}
          onQuickAdd={(p, size) => handleAddToCart(p, size || 'M', p.availableColors[0]?.name || 'Natural', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />
      )}

      {/* VIEW: ABOUT / CRAFT / SUSTAINABILITY */}
      {(currentView === 'about' || currentView === 'craft' || currentView === 'sustainability') && (
        <Site76AboutCraft
          section={currentView as any}
          onNavigateToShop={() => handleNavigate('shop')}
          onNavigateToMaterials={() => handleNavigate('materials')}
        />
      )}

      {/* VIEW: JOURNAL & ARTICLE READER */}
      {(currentView === 'journal' || currentView === 'journal-article') && (
        <Site76Journal
          articles={JOURNAL_ARTICLES}
          selectedArticleSlug={currentView === 'journal-article' ? selectedArticleSlug : null}
          onSelectArticle={(slug) => handleNavigate('journal-article', slug)}
          onBackToJournal={() => setCurrentView('journal')}
          onNavigateToShop={() => handleNavigate('shop')}
        />
      )}

      {/* VIEW: CONTACT, FAQ, POLICIES */}
      {(currentView === 'contact' ||
        currentView === 'faq' ||
        currentView === 'shipping' ||
        currentView === 'refund-policy' ||
        currentView === 'privacy-policy' ||
        currentView === 'terms') && (
        <Site76ContactFaq
          view={currentView as any}
          onNavigateToShop={() => handleNavigate('shop')}
        />
      )}

      {/* Footer */}
      <Site76Footer onNavigate={handleNavigate} />

      {/* SLIDE-OUT CART DRAWER */}
      <Site76CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setCartDrawerOpen(false);
          setCheckoutModalOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
        discountAmount={discountAmount}
      />

      {/* SLIDE-OUT WISHLIST DRAWER */}
      <Site76WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveWishlistToCart}
        onSelectProduct={(p) => handleNavigate('product', p)}
      />

      {/* CHECKOUT MODAL */}
      <Site76CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cart={cart}
        appliedCoupon={appliedCoupon}
        discountAmount={discountAmount}
        onOrderSuccess={(orderData) => {
          setPlacedOrders(prev => [orderData, ...prev]);
          setCart([]);
          setAppliedCoupon(null);
          setDiscountAmount(0);
        }}
      />

      {/* QUICK VIEW MODAL */}
      <Site76QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, size, color, qty) => handleAddToCart(prod, size, color, qty)}
        onViewFullDetails={(prod) => handleNavigate('product', prod)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
      />

      {/* SIZE GUIDE MODAL */}
      <Site76SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* SEARCH MODAL */}
      <Site76SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={PRODUCTS_DATA}
        onSelectProduct={(p) => handleNavigate('product', p)}
        onSearchQuerySubmit={(q) => {
          handleNavigate('shop');
        }}
      />

      {/* ACCOUNT & ORDERS MODAL */}
      <Site76AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
        placedOrders={placedOrders}
        onOpenWishlist={() => {
          setAccountModalOpen(false);
          setWishlistDrawerOpen(true);
        }}
      />
    </div>
  );
};
