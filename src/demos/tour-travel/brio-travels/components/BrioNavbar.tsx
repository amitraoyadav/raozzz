import React, { useState } from 'react';
import {
  Compass,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  MapPin,
  Calendar,
  Sparkles,
  Car,
  Heart,
  Camera,
  Video,
  FileText,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { DOMESTIC_PACKAGES } from '../data/domesticPackages';
import { INTERNATIONAL_PACKAGES } from '../data/internationalPackages';

interface BrioNavbarProps {
  activeTab: string;
  onNavigate: (tab: string, packageSlug?: string) => void;
  onOpenBookingModal: (prefillTour?: string) => void;
}

export const BrioNavbar: React.FC<BrioNavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenBookingModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domesticDropdownOpen, setDomesticDropdownOpen] = useState(false);
  const [intlDropdownOpen, setIntlDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  // Mobile accordion states
  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(false);
  const [mobileIntlOpen, setMobileIntlOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  const topDomestic = DOMESTIC_PACKAGES.slice(0, 12);
  const topIntl = INTERNATIONAL_PACKAGES.slice(0, 10);

  const handleNav = (tab: string, slug?: string) => {
    onNavigate(tab, slug);
    setMobileMenuOpen(false);
    setDomesticDropdownOpen(false);
    setIntlDropdownOpen(false);
    setMediaDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-slate-900 font-['Poppins'] tracking-tight">
                  Brio<span className="text-teal-600">Travels</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-100 text-amber-800 tracking-wider">
                  Demo
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Premier Tour & Travel Agency · Delhi
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'home'
                  ? 'text-teal-600 bg-teal-50/80 font-bold'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* 2. About Us */}
            <button
              onClick={() => handleNav('about')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'about'
                  ? 'text-teal-600 bg-teal-50/80 font-bold'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* 3. Domestic Tours Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDomesticDropdownOpen(true)}
              onMouseLeave={() => setDomesticDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('domestic')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'domestic' || activeTab === 'package-detail'
                    ? 'text-teal-600 bg-teal-50/80 font-bold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <span>Domestic Tours</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-transform" />
              </button>

              {domesticDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] p-4 bg-white rounded-2xl border border-slate-200 shadow-xl grid grid-cols-2 gap-3 animate-fadeIn">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Popular Domestic Destinations (30 Total)
                    </span>
                    <button
                      onClick={() => handleNav('domestic')}
                      className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All 30 Packages</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    {topDomestic.slice(0, 6).map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => handleNav('package-detail', pkg.slug)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-teal-50/80 transition-colors flex items-center justify-between group cursor-pointer text-xs"
                      >
                        <span className="font-medium text-slate-800 group-hover:text-teal-700">
                          {pkg.title.split(' ')[0]} {pkg.title.split(' ')[1] || ''}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          from ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1">
                    {topDomestic.slice(6, 12).map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => handleNav('package-detail', pkg.slug)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-teal-50/80 transition-colors flex items-center justify-between group cursor-pointer text-xs"
                      >
                        <span className="font-medium text-slate-800 group-hover:text-teal-700">
                          {pkg.title.split(' ')[0]} {pkg.title.split(' ')[1] || ''}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          from ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Special Shortcuts inside dropdown */}
                  <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => handleNav('taj-mahal')}
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Same Day Taj Mahal Tour</span>
                    </button>
                    <span className="text-slate-300">•</span>
                    <button
                      onClick={() => handleNav('honeymoon')}
                      className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5" />
                      <span>Honeymoon Packages</span>
                    </button>
                    <span className="text-slate-300">•</span>
                    <button
                      onClick={() => handleNav('car-rentals')}
                      className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Car Rentals</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. International Tours Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIntlDropdownOpen(true)}
              onMouseLeave={() => setIntlDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('international')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'international'
                    ? 'text-teal-600 bg-teal-50/80 font-bold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <span>International Tours</span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform" />
              </button>

              {intlDropdownOpen && (
                <div className="absolute top-full left-0 w-[520px] p-4 bg-white rounded-2xl border border-slate-200 shadow-xl grid grid-cols-2 gap-3 animate-fadeIn">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Popular International Vacations (15 Total)
                    </span>
                    <button
                      onClick={() => handleNav('international')}
                      className="text-xs font-bold text-teal-600 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All 15 Countries</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    {topIntl.slice(0, 5).map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => handleNav('package-detail', pkg.slug)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-teal-50/80 transition-colors flex items-center justify-between group cursor-pointer text-xs"
                      >
                        <span className="font-medium text-slate-800 group-hover:text-teal-700">
                          {pkg.title.split(' ')[0]} {pkg.title.split(' ')[1] || ''}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          from ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1">
                    {topIntl.slice(5, 10).map(pkg => (
                      <button
                        key={pkg.id}
                        onClick={() => handleNav('package-detail', pkg.slug)}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-teal-50/80 transition-colors flex items-center justify-between group cursor-pointer text-xs"
                      >
                        <span className="font-medium text-slate-800 group-hover:text-teal-700">
                          {pkg.title.split(' ')[0]} {pkg.title.split(' ')[1] || ''}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          from ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Media Dropdown (Photos, Videos) */}
            <div
              className="relative"
              onMouseEnter={() => setMediaDropdownOpen(true)}
              onMouseLeave={() => setMediaDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('media')}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'media'
                    ? 'text-teal-600 bg-teal-50/80 font-bold'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                <span>Media</span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform" />
              </button>

              {mediaDropdownOpen && (
                <div className="absolute top-full left-0 w-48 p-2 bg-white rounded-xl border border-slate-200 shadow-lg space-y-1 animate-fadeIn">
                  <button
                    onClick={() => handleNav('media')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-teal-50 transition-colors text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-2 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-teal-600" />
                    <span>Photo Gallery</span>
                  </button>
                  <button
                    onClick={() => handleNav('media')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-teal-50 transition-colors text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-2 cursor-pointer"
                  >
                    <Video className="w-3.5 h-3.5 text-teal-600" />
                    <span>Travel Videos</span>
                  </button>
                </div>
              )}
            </div>

            {/* 6. Blog */}
            <button
              onClick={() => handleNav('blog')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'blog'
                  ? 'text-teal-600 bg-teal-50/80 font-bold'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </button>

            {/* 7. Contact Us */}
            <button
              onClick={() => handleNav('contact')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'contact'
                  ? 'text-teal-600 bg-teal-50/80 font-bold'
                  : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action: Book Now button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-orange-500 text-white cursor-pointer"
            >
              Book Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto space-y-2 animate-fadeIn shadow-2xl">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm cursor-pointer ${
              activeTab === 'home' ? 'bg-teal-50 text-teal-700' : 'text-slate-800'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm cursor-pointer ${
              activeTab === 'about' ? 'bg-teal-50 text-teal-700' : 'text-slate-800'
            }`}
          >
            About Us
          </button>

          {/* Mobile Domestic Accordion */}
          <div>
            <button
              onClick={() => setMobileDomesticOpen(!mobileDomesticOpen)}
              className="w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>Domestic Tours (30)</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileDomesticOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileDomesticOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                <button
                  onClick={() => handleNav('domestic')}
                  className="w-full text-left py-1.5 px-3 text-xs font-bold text-teal-600 hover:underline cursor-pointer"
                >
                  → View All 30 Domestic Packages
                </button>
                {topDomestic.slice(0, 8).map(pkg => (
                  <button
                    key={pkg.id}
                    onClick={() => handleNav('package-detail', pkg.slug)}
                    className="w-full text-left py-1.5 px-3 text-xs text-slate-700 hover:text-teal-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{pkg.title}</span>
                    <span className="text-[10px] text-slate-400">₹{pkg.startingPrice}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile International Accordion */}
          <div>
            <button
              onClick={() => setMobileIntlOpen(!mobileIntlOpen)}
              className="w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm text-slate-800 flex items-center justify-between cursor-pointer"
            >
              <span>International Tours (15)</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileIntlOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileIntlOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                <button
                  onClick={() => handleNav('international')}
                  className="w-full text-left py-1.5 px-3 text-xs font-bold text-teal-600 hover:underline cursor-pointer"
                >
                  → View All 15 International Tours
                </button>
                {topIntl.slice(0, 8).map(pkg => (
                  <button
                    key={pkg.id}
                    onClick={() => handleNav('package-detail', pkg.slug)}
                    className="w-full text-left py-1.5 px-3 text-xs text-slate-700 hover:text-teal-600 flex items-center justify-between cursor-pointer"
                  >
                    <span>{pkg.title}</span>
                    <span className="text-[10px] text-slate-400">₹{pkg.startingPrice}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Special Pages Links */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => handleNav('taj-mahal')}
              className="p-2.5 rounded-xl bg-orange-50 text-orange-800 text-xs font-semibold text-left cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Taj Mahal Tour</span>
            </button>
            <button
              onClick={() => handleNav('honeymoon')}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold text-left cursor-pointer flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-rose-600" />
              <span>Honeymoon</span>
            </button>
            <button
              onClick={() => handleNav('car-rentals')}
              className="p-2.5 rounded-xl bg-teal-50 text-teal-800 text-xs font-semibold text-left cursor-pointer flex items-center gap-1.5"
            >
              <Car className="w-3.5 h-3.5 text-teal-600" />
              <span>Car Rentals</span>
            </button>
            <button
              onClick={() => handleNav('media')}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold text-left cursor-pointer flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-slate-600" />
              <span>Photos & Videos</span>
            </button>
          </div>

          <button
            onClick={() => handleNav('blog')}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm cursor-pointer ${
              activeTab === 'blog' ? 'bg-teal-50 text-teal-700' : 'text-slate-800'
            }`}
          >
            Blog Articles
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm cursor-pointer ${
              activeTab === 'contact' ? 'bg-teal-50 text-teal-700' : 'text-slate-800'
            }`}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};
