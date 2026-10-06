import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Scale,
  Phone,
  Home,
  Building2,
  Calendar,
  BookOpen,
  Newspaper,
  Compass,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';

interface Site82HeaderProps {
  currentView: string;
  onNavigate: (view: string, cityOrCategory?: string) => void;
  wishlistCount: number;
  compareCount: number;
  onOpenWishlist: () => void;
  onOpenCompare: () => void;
  onOpenConsultation: () => void;
}

export const Site82Header: React.FC<Site82HeaderProps> = ({
  currentView,
  onNavigate,
  wishlistCount,
  compareCount,
  onOpenWishlist,
  onOpenCompare,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [extraMenuOpen, setExtraMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#F0D9CC]/70 shadow-sm transition-all duration-300">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-8 xl:px-10 2xl:px-16 py-3 flex items-center justify-between gap-4">
        {/* 1. Brand Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 cursor-pointer group text-left"
          aria-label="Wealth Nexus Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F54900] to-[#F36F21] flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] leading-tight font-sans">
              WEALTH<span className="text-[#F54900]">NEXUS</span>
            </div>
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F36F21] -mt-0.5">
              Realty With Relationship
            </div>
          </div>
        </button>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-5 xl:gap-x-7 2xl:gap-x-10 text-[14px] xl:text-[15px] font-semibold uppercase tracking-[1.2px]">
          {/* Home */}
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'home'
                ? 'text-[#F54900] border-b-2 border-[#F54900]'
                : 'text-[#0F172A] hover:text-[#F54900]'
            }`}
          >
            Home
          </button>

          {/* Properties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPropertiesDropdownOpen(true)}
            onMouseLeave={() => setPropertiesDropdownOpen(false)}
          >
            <button
              onClick={() => onNavigate('properties')}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                currentView === 'properties' || currentView === 'residential' || currentView === 'commercial'
                  ? 'text-[#F54900] border-b-2 border-[#F54900]'
                  : 'text-[#0F172A] hover:text-[#F54900]'
              }`}
            >
              <span>Properties</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {propertiesDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-[520px] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-2xl">
                  <div className="grid grid-cols-2 gap-5">
                    {/* Residential */}
                    <div className="border-r border-orange-100 pr-5 flex flex-col justify-between">
                      <div>
                        <button
                          onClick={() => {
                            setPropertiesDropdownOpen(false);
                            onNavigate('residential');
                          }}
                          className="flex items-center gap-2.5 border-b border-orange-100 pb-3 text-left w-full hover:text-[#F54900] transition-colors cursor-pointer"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#F54900]">
                            <Home className="w-4 h-4" />
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                            Residential
                          </span>
                        </button>
                        <div className="flex flex-col gap-1.5 pt-3 text-xs text-neutral-600">
                          {['Noida Expressways', 'Sector 150 Sports City', 'Greater Noida West', 'Yamuna Expressway Plots'].map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                setPropertiesDropdownOpen(false);
                                onNavigate('residential', item);
                              }}
                              className="text-left py-1 hover:text-[#F54900] transition-colors cursor-pointer"
                            >
                              • {item}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setPropertiesDropdownOpen(false);
                          onNavigate('residential');
                        }}
                        className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#F54900] hover:text-[#C7510B] cursor-pointer"
                      >
                        <span>View all Residential</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Commercial */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <button
                          onClick={() => {
                            setPropertiesDropdownOpen(false);
                            onNavigate('commercial');
                          }}
                          className="flex items-center gap-2.5 border-b border-orange-100 pb-3 text-left w-full hover:text-[#F54900] transition-colors cursor-pointer"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#F54900]">
                            <Building2 className="w-4 h-4" />
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                            Commercial
                          </span>
                        </button>
                        <div className="flex flex-col gap-1.5 pt-3 text-xs text-neutral-600">
                          {['Grade-A Office Suites', 'High Street Retail Shops', 'Multiplex & Food Courts', 'Serviced Hotel Apartments'].map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                setPropertiesDropdownOpen(false);
                                onNavigate('commercial', item);
                              }}
                              className="text-left py-1 hover:text-[#F54900] transition-colors cursor-pointer"
                            >
                              • {item}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setPropertiesDropdownOpen(false);
                          onNavigate('commercial');
                        }}
                        className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#F54900] hover:text-[#C7510B] cursor-pointer"
                      >
                        <span>View all Commercial</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Browse All Footer button */}
                  <button
                    onClick={() => {
                      setPropertiesDropdownOpen(false);
                      onNavigate('properties');
                    }}
                    className="mt-5 w-full py-2.5 rounded-2xl bg-orange-50 text-xs font-bold uppercase tracking-wider text-[#F54900] hover:bg-orange-100 transition-colors cursor-pointer text-center"
                  >
                    Browse All 500+ Properties →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Events */}
          <button
            onClick={() => onNavigate('events')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'events'
                ? 'text-[#F54900] border-b-2 border-[#F54900]'
                : 'text-[#0F172A] hover:text-[#F54900]'
            }`}
          >
            Events
          </button>

          {/* Blogs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBlogsDropdownOpen(true)}
            onMouseLeave={() => setBlogsDropdownOpen(false)}
          >
            <button
              onClick={() => onNavigate('blogs')}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                currentView === 'blogs'
                  ? 'text-[#F54900] border-b-2 border-[#F54900]'
                  : 'text-[#0F172A] hover:text-[#F54900]'
              }`}
            >
              <span>Blogs</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
            </button>

            {blogsDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-3xl border border-orange-100 bg-white p-3 shadow-2xl flex flex-col gap-1 text-xs">
                  {[
                    { label: 'Vastu Guide', slug: 'vastu-guide' },
                    { label: 'Home & Interiors', slug: 'home-interior' },
                    { label: 'Legal & Documentation Guide', slug: 'legal-documentation-guide' },
                    { label: 'City & Local Living Guides', slug: 'city-local-living-guide' },
                    { label: "India's Luxury Real Estate", slug: 'luxury-real-estate' },
                    { label: 'All Blogs', slug: 'all' }
                  ].map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        setBlogsDropdownOpen(false);
                        onNavigate('blogs', cat.slug);
                      }}
                      className="rounded-xl px-4 py-2.5 text-left font-medium text-gray-700 hover:bg-orange-50 hover:text-[#F54900] transition-colors cursor-pointer"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* News */}
          <button
            onClick={() => onNavigate('news')}
            className={`transition-colors cursor-pointer py-1 ${
              currentView === 'news'
                ? 'text-[#F54900] border-b-2 border-[#F54900]'
                : 'text-[#0F172A] hover:text-[#F54900]'
            }`}
          >
            News
          </button>
        </nav>

        {/* 3. Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Compare Properties */}
          <button
            onClick={onOpenCompare}
            title="Compare properties"
            aria-label="Compare properties"
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#F0D9CC] bg-white shadow-sm flex items-center justify-center text-neutral-700 hover:text-[#F54900] hover:border-orange-300 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Scale className="w-5 h-5" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F54900] text-white text-[10px] font-bold flex items-center justify-center shadow">
                {compareCount}
              </span>
            )}
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            title="Saved properties wishlist"
            aria-label="Toggle wishlist"
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#F0D9CC] bg-white shadow-sm flex items-center justify-center text-[#F54900] hover:border-orange-300 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0F172A] text-white text-[10px] font-bold flex items-center justify-center shadow">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Extra / Quick Menu */}
          <button
            onClick={() => setExtraMenuOpen(!extraMenuOpen)}
            title="More Options"
            aria-label="Open extra menu"
            className="hidden xl:flex w-11 h-11 rounded-full border border-[#F0D9CC] bg-white shadow-sm items-center justify-center text-neutral-800 hover:border-orange-300 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Book Consultation CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden xl:flex items-center gap-2 px-5 2xl:px-7 py-3 rounded-xl text-xs 2xl:text-sm font-bold uppercase tracking-[1.2px] border-2 border-[#F54900] bg-white text-[#F54900] hover:bg-[#F54900] hover:text-white transition-all duration-300 shadow-sm hover:shadow-orange-500/20 cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-[#F0D9CC] bg-white shadow-sm flex items-center justify-center text-neutral-800 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 4. Desktop Extra Menu Dropdown Modal */}
      {extraMenuOpen && (
        <div className="hidden xl:block absolute right-10 top-full pt-2 z-50 w-72 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-2xl space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F54900] font-bold">
                Company &amp; Portals
              </span>
              <div className="flex flex-col gap-2 mt-2 text-xs text-neutral-700">
                <button onClick={() => { setExtraMenuOpen(false); onNavigate('about-us'); }} className="text-left hover:text-[#F54900]">About Wealth Nexus</button>
                <button onClick={() => { setExtraMenuOpen(false); onNavigate('happy-customers'); }} className="text-left hover:text-[#F54900]">Happy Customers &amp; Stories</button>
                <button onClick={() => { setExtraMenuOpen(false); onNavigate('career'); }} className="text-left hover:text-[#F54900]">Career at Wealth Nexus</button>
                <button onClick={() => { setExtraMenuOpen(false); onNavigate('life-at-wc'); }} className="text-left hover:text-[#F54900]">Life at Wealth Nexus</button>
                <button onClick={() => { setExtraMenuOpen(false); onNavigate('contact-us'); }} className="text-left hover:text-[#F54900]">Branch Offices &amp; Contact</button>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F54900] font-bold">
                RERA Compliance
              </span>
              <p className="text-[11px] text-neutral-500 mt-1">
                UP RERA: {site82Config.RERA_NUMBERS.UP}<br />
                Delhi RERA: {site82Config.RERA_NUMBERS.DELHI}
              </p>
              <button
                onClick={() => { setExtraMenuOpen(false); onNavigate('disclaimer'); }}
                className="mt-2 text-[11px] text-[#F54900] font-semibold underline block"
              >
                View RERA Disclaimers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F0D9CC] shadow-xl py-5 px-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 font-semibold text-sm text-[#0F172A]">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#F54900]"
            >
              Home
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('properties'); }}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#F54900]"
            >
              All Properties
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('residential'); }}
              className="text-left py-2 pl-4 text-xs text-neutral-600 hover:text-[#F54900]"
            >
              • Residential Projects
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('commercial'); }}
              className="text-left py-2 pl-4 text-xs text-neutral-600 hover:text-[#F54900]"
            >
              • Commercial &amp; Retail Hubs
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('events'); }}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#F54900]"
            >
              Events &amp; Expos
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('blogs'); }}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#F54900]"
            >
              Blogs &amp; Vastu Guides
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('news'); }}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#F54900]"
            >
              Real Estate News
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('contact-us'); }}
              className="text-left py-2 border-b border-neutral-100 hover:text-[#F54900]"
            >
              Contact &amp; Offices
            </button>
          </div>

          <div className="mt-5 pt-3 border-t border-neutral-200">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-3 bg-[#F54900] text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center shadow-md shadow-orange-500/30"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
