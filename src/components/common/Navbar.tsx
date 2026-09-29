import React, { useState, useEffect } from 'react';
import {
  Globe,
  LayoutDashboard,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  User,
  PlusCircle,
  Compass,
  CheckCircle,
  LogIn
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const {
    setActiveView,
    isAdminAuthenticated,
    loginDemoAdmin,
    openCategoryPicker,
    user
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on Escape & Prevent Background Scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navigateTo = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E7F0] transition-all">
      {/* Top Special Offer Announcement Bar - Compact on mobile */}
      <div className="bg-[#14162B] text-[#FAFAF8] text-[10px] sm:text-xs font-medium py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap border-b border-[#232742]">
        <span className="bg-[#FF6B4A] text-white px-1.5 py-0.2 rounded text-[9px] uppercase font-bold tracking-wider">
          Deal
        </span>
        <span className="font-['Inter']">
          Get your complete business website for <span className="line-through text-[#8E92A8] font-normal">₹9,999</span> <span className="text-[#FF6B4A] font-extrabold text-xs sm:text-sm">₹999</span>
        </span>
        <span className="text-[#474B64] hidden sm:inline" aria-hidden="true">·</span>
        <span className="hidden sm:inline text-[#D5D4E3]">
          Live in 24 hrs · No hidden charges
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18">
          {/* Brand Logo - Fraunces Headline Serif */}
          <button
            onClick={() => setActiveView('home')}
            className="flex items-center gap-2 group text-left cursor-pointer min-h-[44px]"
            aria-label="RaoSitez Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#14162B] text-white flex items-center justify-center shadow-xs group-hover:bg-[#4338CA] transition-colors">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#FAFAF8]" />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-[#14162B] flex items-center gap-1 font-['Fraunces']">
                RaoSitez
                <span className="text-[10px] sm:text-xs font-bold px-1.5 py-0.2 rounded bg-[#E8E7F0] text-[#4338CA] font-['Inter']">.in</span>
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold text-[#474B64] font-['Inter']">
            <button
              onClick={() => setActiveView('home')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => setActiveView('site', '2d-cafe')}
              className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors cursor-pointer font-bold flex items-center gap-1.5"
            >
              <span>☕</span>
              <span>Brew & Bloom (15 Sites)</span>
            </button>
            <button
              onClick={() => setActiveView('demo-websites')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              130 Categories
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => setActiveView('pricing')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveView('case-studies')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              Proof
            </button>
            <button
              onClick={() => setActiveView('faq')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveView('contact')}
              className="hover:text-[#4338CA] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (!isAdminAuthenticated) loginDemoAdmin();
                setActiveView('dashboard');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#14162B] bg-white hover:bg-[#E8E7F0]/60 border border-[#E8E7F0] rounded-xl transition-colors cursor-pointer font-['Inter']"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#4338CA]" />
              <span>Dashboard</span>
            </button>

            {/* Create Website CTA */}
            <button
              onClick={() => onOpenOrderModal ? onOpenOrderModal() : setActiveView('contact')}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold text-white bg-[#FF6B4A] hover:bg-[#F25A38] rounded-xl shadow-md shadow-[#FF6B4A]/20 transition-all cursor-pointer font-['Inter']"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Your Website</span>
            </button>
          </div>

          {/* Mobile Right Controls: Create Website action, Account/Dashboard icon, and Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Quick Mobile "Get Your Website" Button */}
            <button
              onClick={() => onOpenOrderModal ? onOpenOrderModal() : setActiveView('contact')}
              className="min-h-[40px] px-2.5 py-1.5 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-[11px] font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Get Your Website"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Site</span>
            </button>

            {/* Account / Dashboard Portal icon */}
            <button
              onClick={() => {
                if (!isAdminAuthenticated) loginDemoAdmin();
                setActiveView('dashboard');
              }}
              className="min-h-[40px] min-w-[40px] p-2 flex items-center justify-center text-[#14162B] bg-white border border-[#E8E7F0] active:bg-[#E8E7F0] rounded-xl text-xs cursor-pointer"
              title="Customer Dashboard"
              aria-label="Open Dashboard"
            >
              <User className="w-4 h-4 text-[#4338CA]" />
            </button>

            {/* Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[40px] min-w-[40px] p-2 flex items-center justify-center rounded-xl text-[#14162B] bg-white border border-[#E8E7F0] hover:bg-[#E8E7F0]/50 active:bg-[#E8E7F0] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Professional Mobile Navigation Drawer (Full-screen overlay / slide) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[88px] sm:top-[100px] z-50 bg-[#FAFAF8] flex flex-col justify-between overflow-y-auto p-5 animate-fadeIn font-['Inter']"
        >
          {/* Required Primary Navigation Links */}
          <div className="space-y-1.5 text-base font-semibold text-[#14162B]">
            <button
              onClick={() => navigateTo(() => setActiveView('home'))}
              className="w-full text-left min-h-[48px] py-3 px-4 rounded-2xl hover:bg-white active:bg-[#E8E7F0] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#E8E7F0]"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => navigateTo(() => setActiveView('site', '2d-cafe'))}
              className="w-full text-left min-h-[48px] py-3 px-4 rounded-2xl bg-amber-50 hover:bg-amber-100 active:bg-amber-200 flex items-center justify-between cursor-pointer border border-amber-200 text-amber-900 font-bold"
            >
              <div className="flex items-center gap-2">
                <span>☕</span>
                <span>Brew & Bloom (15 Recreated Sites)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-700" />
            </button>

            <button
              onClick={() => navigateTo(() => setActiveView('demo-websites'))}
              className="w-full text-left min-h-[48px] py-3 px-4 rounded-2xl hover:bg-white active:bg-[#E8E7F0] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#E8E7F0]"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#4338CA]" />
                <span>130 Business Categories</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => navigateTo(() => scrollToSection('process'))}
              className="w-full text-left min-h-[48px] py-3 px-4 rounded-2xl hover:bg-white active:bg-[#E8E7F0] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#E8E7F0]"
            >
              <span>How It Works</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => navigateTo(() => setActiveView('pricing'))}
              className="w-full text-left min-h-[48px] py-3 px-4 rounded-2xl hover:bg-white active:bg-[#E8E7F0] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#E8E7F0]"
            >
              <span>Pricing (₹999 One-Time)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() =>
                navigateTo(() => {
                  if (!isAdminAuthenticated) loginDemoAdmin();
                  setActiveView('dashboard');
                })
              }
              className="w-full text-left min-h-[48px] py-3 px-4 rounded-2xl hover:bg-white active:bg-[#E8E7F0] flex items-center justify-between cursor-pointer border border-transparent hover:border-[#E8E7F0]"
            >
              <div className="flex items-center gap-2">
                <LogIn className="w-4 h-4 text-slate-600" />
                <span>Login / My Dashboard</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Bottom Action Area of Mobile Drawer */}
          <div className="pt-6 border-t border-[#E8E7F0] space-y-3 pb-safe">
            <button
              onClick={() => navigateTo(() => (onOpenOrderModal ? onOpenOrderModal() : setActiveView('contact')))}
              className="w-full min-h-[50px] flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] rounded-2xl shadow-lg shadow-[#FF6B4A]/25 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Your Website Built</span>
            </button>

            <div className="text-center text-xs text-[#636882] pt-1">
              Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">Esc</kbd> or tap outside to close menu
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
