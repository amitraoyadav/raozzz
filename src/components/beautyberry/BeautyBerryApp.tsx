import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Heart,
  Eye,
  Star,
  Truck,
  ShieldCheck,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  Tag,
  CheckCircle2,
  Calendar,
  User,
  Search,
  Filter,
  SlidersHorizontal,
  Play
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { BeautyBerryHeader } from './BeautyBerryHeader';
import { BeautyBerryFooter } from './BeautyBerryFooter';
import {
  BeautyBerryProductModal,
  BeautyBerryCartDrawer,
  BeautyBerrySearchModal,
  BeautyBerryPageModal,
  BeautyBerryCartItem
} from './BeautyBerryModals';
import {
  BEAUTY_BERRY_PRODUCTS,
  BEAUTY_BERRY_BLOGS,
  BeautyBerryProduct,
  BeautyBerryBlogArticle
} from '../../data/beautyBerryData';

export const BeautyBerryApp: React.FC = () => {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState<'home' | 'collection' | 'blog' | 'account'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  // Cart State (Initialized with 1 default item to feel lively)
  const [cart, setCart] = useState<BeautyBerryCartItem[]>([
    {
      id: 'init-bb-1',
      product: BEAUTY_BERRY_PRODUCTS[0], // Twin Turbo Mascara
      variant: 'Intense Jet Black',
      quantity: 1
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);

  // Modals & Popups
  const [selectedProduct, setSelectedProduct] = useState<BeautyBerryProduct | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalPage, setModalPage] = useState<string | null>(null);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BeautyBerryBlogArticle | null>(null);

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Twin Turbo Dual Application Mascara',
      productHandle: 'beauty-berry-twin-turbo-dual-application-mascara',
      desktopImage: 'https://www.beautyberry.co.in/cdn/shop/files/M-2_banner_Gif_New_Size.gif?v=1776503219&width=2000',
      mobileImage: 'https://www.beautyberry.co.in/cdn/shop/files/M-2_Banner_Mobile_Size_Gif.gif?v=1776503230&width=800'
    },
    {
      id: 2,
      title: 'Vitamin C Sunscreen SPF 50 PA+++',
      productHandle: 'vitamin-c-sunscreen-spf-50-pa',
      desktopImage: 'https://www.beautyberry.co.in/cdn/shop/files/S-02_suncream_banner_new_Size.jpg?v=1759562265&width=2000',
      mobileImage: 'https://www.beautyberry.co.in/cdn/shop/files/Mobile_Size_Banner_S-02_f05183e1-d233-447c-a584-4a68947ff8d2.jpg?v=1769238210&width=800'
    },
    {
      id: 3,
      title: 'Insta Dry Nail Lacquer',
      productHandle: 'beauty-berry-insta-dry-nail-lacquer',
      desktopImage: 'https://www.beautyberry.co.in/cdn/shop/files/N-72_Banner_New_Size.jpg?v=1776503263&width=2000',
      mobileImage: 'https://www.beautyberry.co.in/cdn/shop/files/N-72_Mobile_Size_1.jpg?v=1776503274&width=800'
    },
    {
      id: 4,
      title: 'Poppins Matte Lip Crayon',
      productHandle: 'beauty-berry-poppins-matte-lip-crayon',
      desktopImage: 'https://www.beautyberry.co.in/cdn/shop/files/Pop-24_Banner_New_Size.jpg?v=1776503307&width=2000',
      mobileImage: 'https://www.beautyberry.co.in/cdn/shop/files/POP-24_mobile_Size.jpg?v=1776503318&width=800'
    }
  ];

  // Auto-play hero slider every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Cart actions
  const handleAddToCart = (product: BeautyBerryProduct, variant: string, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          product,
          variant,
          quantity
        }
      ];
    });
    setCartOpen(true);
  };

  const handleBuyNow = (product: BeautyBerryProduct, variant: string, quantity: number) => {
    handleAddToCart(product, variant, quantity);
    setSelectedProduct(null);
    alert('Proceeding to GoKwik 1-Click Fast Checkout! Order placement simulation completed.');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Filtered Products for Collection View
  const filteredProducts = useMemo(() => {
    return BEAUTY_BERRY_PRODUCTS.filter((p) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'bestseller') return p.isBestseller;
      if (selectedCategory === 'new-launch') return p.isNewLaunch;
      if (selectedCategory === 'sale') return p.discountPercent && p.discountPercent > 0;
      if (p.category !== selectedCategory) return false;
      if (selectedSubCategory && p.subCategory !== selectedSubCategory) return false;
      return true;
    });
  }, [selectedCategory, selectedSubCategory]);

  return (
    <div className="min-h-screen bg-[#F5EDED] text-stone-900 font-['Montserrat',sans-serif] flex flex-col selection:bg-[#71DBD4] selection:text-black">
      {/* 1. Global Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="beauty-berry" />

      {/* 2. Main Header */}
      <BeautyBerryHeader
        activeTab={activeTab}
        setActiveTab={(tab: string) => setActiveTab(tab as any)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 3. Main Views */}
      <main className="flex-1">
        {/* ============================================================== */}
        {/* VIEW 1: HOMEPAGE                                               */}
        {/* ============================================================== */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Banner Slider */}
            <section className="relative w-full overflow-hidden bg-stone-100">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="min-w-full relative cursor-pointer"
                    onClick={() => {
                      const matched = BEAUTY_BERRY_PRODUCTS.find((p) => p.handle === slide.productHandle);
                      if (matched) setSelectedProduct(matched);
                    }}
                  >
                    <img
                      src={slide.desktopImage}
                      alt={slide.title}
                      className="w-full h-auto hidden md:block object-cover max-h-[580px]"
                    />
                    <img
                      src={slide.mobileImage}
                      alt={slide.title}
                      className="w-full h-auto block md:hidden object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentSlide === i ? 'w-8 bg-black' : 'w-2.5 bg-black/30'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* Section 1: "⸺ Best sellers ⸺" */}
            <section className="py-10 sm:py-14 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-wide">
                  <strong>⸺ Best sellers ⸺</strong>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                {BEAUTY_BERRY_PRODUCTS.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {/* Bestseller Top Banner */}
                    <div className="bg-[#B22222] text-white text-[9px] sm:text-[10px] font-black uppercase text-center py-1 tracking-wider">
                      BESTSELLER
                    </div>

                    {/* Image Box */}
                    <div
                      className="relative aspect-square overflow-hidden bg-stone-50 cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt={product.title}
                          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      )}
                      {product.discountPercent && (
                        <span className="absolute bottom-2 left-2 bg-[#71DBD4] text-black text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                          -{product.discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Product Information */}
                    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          onClick={() => setSelectedProduct(product)}
                          className="font-bold text-xs sm:text-sm text-stone-900 line-clamp-2 hover:text-[#B22222] cursor-pointer min-h-[36px]"
                        >
                          {product.title}
                        </h3>

                        {/* Reviews stars */}
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-[#FFAC0B]">
                          <span>{'★'.repeat(5)}</span>
                          <span className="text-stone-500 font-medium">({product.reviewsCount})</span>
                        </div>

                        {/* Price */}
                        <div className="mt-1.5 flex items-baseline gap-2">
                          <span className="text-xs sm:text-sm font-black text-black">
                            From Rs. {product.price.toFixed(2)}
                          </span>
                          {product.compareAtPrice && (
                            <span className="text-[11px] line-through text-red-600 font-semibold">
                              Rs. {product.compareAtPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Select / Quick Add Button */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="mt-3 w-full py-2 px-3 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-xs"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setSelectedCategory('bestseller');
                    setActiveTab('collection');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-black hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors tracking-wider uppercase"
                >
                  View all
                </button>
              </div>
            </section>

            {/* Section 2: Promo Banner Cards Section (Teal #6ebdb7 background) */}
            <section className="bg-[#6EBDB7] py-10 px-4 sm:px-6 lg:px-8">
              <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Free Delivery */}
                <div className="bg-[#6BCDC6] rounded-2xl p-6 sm:p-8 flex items-center gap-5 shadow-sm border border-white/30 hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#71DBD4] flex items-center justify-center shrink-0 shadow-md">
                    <Truck className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider mb-1">
                      Hot Deal
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-black">
                      Free Delivery
                    </h3>
                    <p className="text-xs sm:text-sm text-black mt-1">
                      On all orders above <span className="font-black bg-white/40 px-2 py-0.5 rounded">₹499</span>
                    </p>
                  </div>
                </div>

                {/* Card 2: Instant Discount */}
                <div className="bg-[#6BCDC6] rounded-2xl p-6 sm:p-8 flex items-center gap-5 shadow-sm border border-white/30 hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-[#71DBD4] flex items-center justify-center shrink-0 shadow-md">
                    <Tag className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider mb-1">
                      Save Now
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-black">
                      Instant Discount
                    </h3>
                    <p className="text-xs sm:text-sm text-black mt-1">
                      Get <span className="font-black bg-white/40 px-2 py-0.5 rounded">10% OFF</span> on all prepaid orders
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: "⸺ New Launch ⸺" */}
            <section className="py-10 sm:py-14 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-wide">
                  <strong>⸺ New Launch ⸺</strong>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                {BEAUTY_BERRY_PRODUCTS.slice(4, 8).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {/* Badge */}
                    <div className="relative aspect-square overflow-hidden bg-stone-50 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.images[1] && (
                        <img
                          src={product.images[1]}
                          alt={product.title}
                          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      )}
                      {product.isSoldOut ? (
                        <span className="absolute top-2 left-2 bg-stone-800 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          Sold out
                        </span>
                      ) : (
                        product.discountPercent && (
                          <span className="absolute top-2 left-2 bg-[#71DBD4] text-black text-[10px] font-black px-2 py-0.5 rounded">
                            -{product.discountPercent}% OFF
                          </span>
                        )
                      )}
                    </div>

                    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          onClick={() => setSelectedProduct(product)}
                          className="font-bold text-xs sm:text-sm text-stone-900 line-clamp-2 hover:text-[#B22222] cursor-pointer min-h-[36px]"
                        >
                          {product.title}
                        </h3>

                        <div className="mt-1.5 flex items-baseline gap-2">
                          <span className="text-xs sm:text-sm font-black text-black">
                            Rs. {product.price.toFixed(2)}
                          </span>
                          {product.compareAtPrice && (
                            <span className="text-[11px] line-through text-red-600 font-semibold">
                              Rs. {product.compareAtPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        disabled={product.isSoldOut}
                        className={`mt-3 w-full py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-xs ${
                          product.isSoldOut
                            ? 'bg-stone-200 text-stone-500 cursor-not-allowed'
                            : 'bg-[#71DBD4] hover:bg-[#5bc9c1] text-black'
                        }`}
                      >
                        {product.isSoldOut ? 'Sold out' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setSelectedCategory('new-launch');
                    setActiveTab('collection');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-black hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors tracking-wider uppercase"
                >
                  View all
                </button>
              </div>
            </section>

            {/* Section 4: "SHOP BY PRODUCT" Video Reels */}
            <section className="py-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#71DBD4] tracking-wider uppercase">
                  SHOP BY PRODUCT
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {[
                  { title: 'Illuminati Base', handle: 'beauty-berry-illuminati-base', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80', price: '₹399' },
                  { title: 'Concealer Palette', handle: 'bb-true-tone-concealer-palette', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80', price: '₹224' },
                  { title: 'Poppins Lip Crayon', handle: 'beauty-berry-poppins-matte-lip-crayon', img: 'https://www.beautyberry.co.in/cdn/shop/files/01CRANBERRY_OpenWithSwtach.jpg?v=1736151648&width=400', price: '₹251' },
                  { title: 'Booster Foundation', handle: 'beauty-berry-beauty-booster-foundation', img: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&w=400&q=80', price: '₹299' },
                  { title: 'Insta Dry Nail Lacquer', handle: 'beauty-berry-insta-dry-nail-lacquer', img: 'https://www.beautyberry.co.in/cdn/shop/files/01_d702faf2-6baa-404e-a7d9-ff1579793531.jpg?v=1744454162&width=400', price: '₹179' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      const matched = BEAUTY_BERRY_PRODUCTS.find((p) => p.handle === item.handle);
                      if (matched) setSelectedProduct(matched);
                    }}
                    className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-black cursor-pointer shadow-md"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-3 text-white">
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold leading-tight truncate">{item.title}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-black text-[#71DBD4]">{item.price}</span>
                          <span className="text-[10px] bg-[#71DBD4] text-black font-black px-2 py-0.5 rounded">
                            Add to Bag
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Blog Section (#F5EDED background) */}
            <section className="py-12 bg-[#F5EDED] border-t border-stone-200">
              <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-black tracking-tight">Blog</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {BEAUTY_BERRY_BLOGS.map((article) => (
                    <article
                      key={article.id}
                      className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between border border-stone-200"
                    >
                      <div
                        className="relative aspect-video overflow-hidden cursor-pointer"
                        onClick={() => {
                          setSelectedBlogArticle(article);
                          setActiveTab('blog');
                        }}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] text-stone-500 font-semibold mb-1 flex items-center gap-1.5">
                            <span>✍️ {article.author}</span>
                          </div>
                          <h3
                            onClick={() => {
                              setSelectedBlogArticle(article);
                              setActiveTab('blog');
                            }}
                            className="font-bold text-xs sm:text-sm text-black line-clamp-2 hover:text-[#B22222] cursor-pointer leading-snug"
                          >
                            {article.title}
                          </h3>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedBlogArticle(article);
                            setActiveTab('blog');
                          }}
                          className="mt-4 px-4 py-2 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black text-xs font-bold rounded-lg cursor-pointer transition-colors self-start flex items-center gap-1"
                        >
                          <span>View</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => {
                      setSelectedBlogArticle(null);
                      setActiveTab('blog');
                    }}
                    className="px-8 py-3 bg-black hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors uppercase tracking-wider"
                  >
                    View All Articles
                  </button>
                </div>
              </div>
            </section>

            {/* Section 6: Newsletter Section (Teal #71DBD4 background) */}
            <section className="bg-[#71DBD4] py-14 px-4 sm:px-6 lg:px-8 border-t border-[#5bc9c1]">
              <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 text-black text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                    <span>Newsletter</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                    Get Beauty Tips & Exclusive Offers
                  </h2>

                  <p className="text-xs sm:text-sm text-black/85 leading-relaxed max-w-lg">
                    Join thousands of beauty lovers and get insider access to new products, expert tips, and special discounts delivered straight to your inbox.
                  </p>

                  <div className="flex gap-6 pt-2">
                    <div>
                      <div className="text-2xl font-black text-black">50K+</div>
                      <div className="text-xs text-black/70 font-semibold">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-black">4.9★</div>
                      <div className="text-xs text-black/70 font-semibold">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-black">100%</div>
                      <div className="text-xs text-black/70 font-semibold">Secure Payment</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200">
                  {newsletterSubscribed ? (
                    <div className="text-center py-4 space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h4 className="font-bold text-base text-black">Thank you for subscribing!</h4>
                      <p className="text-xs text-stone-600">
                        Check your inbox for a special 10% welcome coupon.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (newsletterEmail.trim()) {
                          setNewsletterSubscribed(true);
                        }
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-bold text-black mb-1.5">
                          Your email address
                        </label>
                        <input
                          type="email"
                          required
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#71DBD4]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black font-black text-xs rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                      >
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          Spam free
                        </span>
                        <span>•</span>
                        <span>Unsubscribe anytime</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: COLLECTION / CATEGORY PAGE                             */}
        {/* ============================================================== */}
        {activeTab === 'collection' && (
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb & Title */}
            <div className="pb-6 border-b border-stone-200">
              <div className="text-xs text-stone-500 flex items-center gap-1.5 mb-1.5 font-medium">
                <button onClick={() => setActiveTab('home')} className="hover:underline">Home</button>
                <span>/</span>
                <span className="text-black font-bold uppercase">{selectedCategory}</span>
                {selectedSubCategory && <span>/ {selectedSubCategory}</span>}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-wide">
                {selectedCategory === 'all'
                  ? 'All Products'
                  : selectedCategory === 'bestseller'
                  ? 'Best Sellers'
                  : selectedCategory === 'new-launch'
                  ? 'New Launches'
                  : selectedCategory === 'sale'
                  ? 'Sale & Offers'
                  : `${selectedCategory.toUpperCase()} COLLECTION`}
              </h1>
              <p className="text-xs text-stone-600 mt-1">
                Showing {filteredProducts.length} makeup essentials
              </p>
            </div>

            {/* Category Quick Filter Pills */}
            <div className="py-4 flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'lips', label: 'LIPS' },
                { id: 'eye', label: 'EYE' },
                { id: 'face', label: 'FACE' },
                { id: 'hair', label: 'HAIR' },
                { id: 'nails', label: 'NAILS' },
                { id: 'skin-care', label: 'SKIN CARE' },
                { id: 'combo', label: 'COMBO' },
                { id: 'accessories', label: 'ACCESSORIES' },
                { id: 'bestseller', label: 'BEST SELLERS' },
                { id: 'sale', label: 'SALE' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCategory(c.id);
                    setSelectedSubCategory('');
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                    selectedCategory === c.id
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white text-black hover:bg-stone-100 border border-stone-300'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group relative"
                >
                  {product.badge && (
                    <div className="bg-[#B22222] text-white text-[9px] sm:text-[10px] font-black uppercase text-center py-1 tracking-wider">
                      {product.badge}
                    </div>
                  )}

                  <div
                    className="relative aspect-square overflow-hidden bg-stone-50 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.images[1] && (
                      <img
                        src={product.images[1]}
                        alt={product.title}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )}
                    {product.isSoldOut ? (
                      <span className="absolute top-2 left-2 bg-stone-800 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Sold out
                      </span>
                    ) : (
                      product.discountPercent && (
                        <span className="absolute bottom-2 left-2 bg-[#71DBD4] text-black text-[10px] font-black px-2 py-0.5 rounded">
                          -{product.discountPercent}% OFF
                        </span>
                      )
                    )}
                  </div>

                  <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-bold text-xs sm:text-sm text-stone-900 line-clamp-2 hover:text-[#B22222] cursor-pointer min-h-[36px]"
                      >
                        {product.title}
                      </h3>

                      <div className="flex items-center gap-1 mt-1 text-[11px] text-[#FFAC0B]">
                        <span>{'★'.repeat(5)}</span>
                        <span className="text-stone-500 font-medium">({product.reviewsCount})</span>
                      </div>

                      <div className="mt-1.5 flex items-baseline gap-2">
                        <span className="text-xs sm:text-sm font-black text-black">
                          From Rs. {product.price.toFixed(2)}
                        </span>
                        {product.compareAtPrice && (
                          <span className="text-[11px] line-through text-red-600 font-semibold">
                            Rs. {product.compareAtPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      disabled={product.isSoldOut}
                      className={`mt-3 w-full py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-xs ${
                        product.isSoldOut
                          ? 'bg-stone-200 text-stone-500 cursor-not-allowed'
                          : 'bg-[#71DBD4] hover:bg-[#5bc9c1] text-black'
                      }`}
                    >
                      {product.isSoldOut ? 'Sold out' : 'Select'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: BLOG LISTING & SINGLE ARTICLE                          */}
        {/* ============================================================== */}
        {activeTab === 'blog' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {selectedBlogArticle ? (
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-6">
                <button
                  onClick={() => setSelectedBlogArticle(null)}
                  className="text-xs font-bold text-[#B22222] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to all articles</span>
                </button>

                <div className="space-y-2">
                  <div className="text-xs text-stone-500 font-semibold">
                    {selectedBlogArticle.date} · By {selectedBlogArticle.author}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black text-black leading-tight">
                    {selectedBlogArticle.title}
                  </h1>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-video max-h-[460px]">
                  <img
                    src={selectedBlogArticle.image}
                    alt={selectedBlogArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose max-w-none text-xs sm:text-sm text-stone-800 leading-relaxed space-y-4">
                  {selectedBlogArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setActiveTab('collection');
                    }}
                    className="px-6 py-2.5 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Shop Recommended Products
                  </button>
                  <button
                    onClick={() => setSelectedBlogArticle(null)}
                    className="text-xs font-bold text-stone-600 hover:text-black cursor-pointer"
                  >
                    Back to Articles
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl sm:text-4xl font-black text-black">Beauty Berry Tips & Blog</h1>
                  <p className="text-xs text-stone-600 mt-2">
                    Makeup tutorials, skincare insights, and product guides from our certified cosmetics experts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {BEAUTY_BERRY_BLOGS.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => setSelectedBlogArticle(article)}
                      className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer border border-stone-200 flex flex-col justify-between group"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] text-stone-500 font-semibold mb-1">
                            {article.date} · ✍️ {article.author}
                          </div>
                          <h3 className="text-lg font-bold text-black leading-snug group-hover:text-[#B22222]">
                            {article.title}
                          </h3>
                          <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#B22222]">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 4: MY ACCOUNT DEMO                                        */}
        {/* ============================================================== */}
        {activeTab === 'account' && (
          <div className="max-w-md mx-auto px-4 py-14">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-stone-200 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#71DBD4] flex items-center justify-center mx-auto text-black font-black text-xl">
                BB
              </div>
              <h2 className="text-xl font-black text-black uppercase">My Account</h2>
              <p className="text-xs text-stone-600">
                Log in to check out faster, view past purchases and track deliveries.
              </p>
              <div className="space-y-3 text-left">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                    Mobile Number / Email
                  </label>
                  <input
                    type="text"
                    defaultValue="priya.sharma@example.com"
                    className="w-full px-3 py-2 border rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                    Password / OTP
                  </label>
                  <input
                    type="password"
                    defaultValue="••••••••"
                    className="w-full px-3 py-2 border rounded-lg text-xs"
                  />
                </div>
                <button
                  onClick={() => alert('Logged in successfully! Redirecting to orders dashboard.')}
                  className="w-full py-3 bg-[#71DBD4] hover:bg-[#5bc9c1] text-black font-bold text-xs rounded-lg cursor-pointer"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 4. Main Footer */}
      <BeautyBerryFooter
        onNavigate={(tab, cat, sub) => {
          setActiveTab(tab as any);
          if (cat) setSelectedCategory(cat);
          if (sub !== undefined) setSelectedSubCategory(sub);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPage={(page) => setModalPage(page)}
      />

      {/* 5. Modals */}
      {/* Product Quick-Add Modal */}
      <BeautyBerryProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Cart Drawer */}
      <BeautyBerryCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setCartOpen(false);
          alert('Redirecting to GoKwik 1-Click Fast Checkout! Order simulation placed.');
        }}
      />

      {/* Predictive Search Modal */}
      <BeautyBerrySearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={BEAUTY_BERRY_PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Information / Policy Modal */}
      <BeautyBerryPageModal
        pageType={modalPage}
        onClose={() => setModalPage(null)}
      />
    </div>
  );
};
