import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Sparkles,
  MapPin,
  Calendar,
  Phone
} from 'lucide-react';
import { GoldsGymLocation } from '../../data/goldsGymData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenFreeTrial: () => void;
  onSelectGym?: (gym: GoldsGymLocation) => void;
}

export const GoldsGymHeader: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenSearch,
  onOpenFreeTrial
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(prev => (prev === key ? null : key));
  };

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="w-full bg-white z-40 sticky top-0 shadow-sm border-b border-stone-200 font-['Montserrat',sans-serif]">
      {/* 1. TOP BAR (Black with White text and Social Links) */}
      <div className="bg-black text-white text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#FFE400]" />
            <a
              href="mailto:customer.care@goldsgym.in"
              className="text-stone-300 hover:text-[#FFE400] transition-colors font-medium text-[11px] sm:text-xs"
            >
              customer.care@goldsgym.in
            </a>
          </div>

          <div className="hidden md:block text-stone-400 font-medium text-[11px] tracking-wide">
            Welcome to Gold's Gym India — 150+ Clubs Across 95 Cities
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/GoldsGymIndia"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-stone-400 hover:text-[#FFE400] transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com/GoldsGymIndia"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="text-stone-400 hover:text-[#FFE400] transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCCPNLx0irb9sbFdsdTCV6rg"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-stone-400 hover:text-[#FFE400] transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/goldsgymindia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-stone-400 hover:text-[#FFE400] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/gold-s-gym-india/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-stone-400 hover:text-[#FFE400] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN LOGO & ACTIONS HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between border-b border-stone-100">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1.5 rounded-lg text-black hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            {/* Authentic Gold's Gym Logo */}
            <div className="relative">
              <img
                src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/10/fullcolor.png?fit=563%2C564&ssl=1"
                alt="Gold's Gym"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-black tracking-tighter text-black uppercase block leading-none">
                GOLD'S GYM<span className="text-[#FFE400]">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-stone-500 uppercase block mt-1">
                INDIA · SINCE 2002
              </span>
            </div>
          </button>
        </div>

        {/* Right: Search, Free Trial CTA & Cart */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-700 hover:text-black hover:bg-stone-100 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
            title="Search Gyms & Courses"
          >
            <Search className="w-5 h-5" />
            <span className="hidden md:inline text-xs font-semibold text-stone-600">Search</span>
          </button>

          {/* Prominent Free Trial Pill CTA */}
          <button
            onClick={onOpenFreeTrial}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#F9E602] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Trial</span>
          </button>

          {/* Cart Click */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 p-2 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer relative"
            title="Shopping Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-black text-[#FFE400] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden md:flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase font-bold text-stone-400">Cart</span>
              <span className="text-xs font-black text-black">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 3. DESKTOP NAVIGATION MENU (Exact Reference Structure) */}
      <nav className="hidden lg:block bg-white text-black border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <ul className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-tight">
            {/* Item 1: Get Started (Mega / Dropdown) */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown('get-started')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`py-3.5 px-3 flex items-center gap-1 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'gyms' || activeTab === 'membership' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                <span>Get Started</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'get-started' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-stone-200 shadow-xl rounded-b-xl py-2 z-50 text-left normal-case">
                  <button
                    onClick={() => handleNavClick('gyms')}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black flex items-center justify-between"
                  >
                    <span>Our Gyms India</span>
                    <span className="text-[10px] bg-[#FFE400] text-black px-1.5 py-0.5 rounded font-mono">156+</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('gyms')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50 hover:text-black"
                  >
                    Our Gyms Nepal (Kathmandu)
                  </button>
                  <button
                    onClick={() => handleNavClick('gyms')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50 hover:text-black"
                  >
                    Our Gyms Bangladesh (Dhaka)
                  </button>
                  <div className="border-t border-stone-100 my-1"></div>
                  <button
                    onClick={() => handleNavClick('membership')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-amber-700 hover:bg-amber-50"
                  >
                    Buy Membership Now
                  </button>
                  <button
                    onClick={() => handleNavClick('blogs')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Blogs & Fitness Insights
                  </button>
                  <button
                    onClick={() => handleNavClick('events')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Our Events & Expos
                  </button>
                  <button
                    onClick={() => handleNavClick('gyms')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Coming Soon Clubs
                  </button>
                  <button
                    onClick={() => handleNavClick('gyms')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Pre Sale Offers
                  </button>
                </div>
              )}
            </li>

            {/* Item 2: Fitness Institute - GGFI */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown('ggfi')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('ggfi')}
                className={`py-3.5 px-3 flex items-center gap-1 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'ggfi' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                <span>Fitness Institute – GGFI</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'ggfi' && (
                <div className="absolute top-full left-0 w-72 bg-white border border-stone-200 shadow-xl rounded-b-xl py-2 z-50 text-left normal-case">
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black"
                  >
                    GGFI About Us
                  </button>
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50 hover:text-black"
                  >
                    Our Locations Across India
                  </button>
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50 hover:text-black"
                  >
                    Our Faculty & Master Trainers
                  </button>
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50 hover:text-black"
                  >
                    Certification & Accreditations (ACE / Skill India)
                  </button>
                  <div className="border-t border-stone-100 my-1"></div>
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-amber-700 hover:bg-amber-50"
                  >
                    Courses Offered & Pricing
                  </button>
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Book a Free Demo Class
                  </button>
                  <button
                    onClick={() => handleNavClick('ggfi')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Affiliate Partner Program
                  </button>
                </div>
              )}
            </li>

            {/* Item 3: Gallery */}
            <li>
              <button
                onClick={() => handleNavClick('gallery')}
                className={`py-3.5 px-3 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'gallery' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                Gallery
              </button>
            </li>

            {/* Item 4: Programs */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('programs')}
                className={`py-3.5 px-3 flex items-center gap-1 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'programs' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'programs' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-stone-200 shadow-xl rounded-b-xl py-2 z-50 text-left normal-case">
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black"
                  >
                    Corporate Memberships
                  </button>
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black"
                  >
                    Personal Training Program
                  </button>
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black"
                  >
                    Group Program (GGX Studio)
                  </button>
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black"
                  >
                    Corporate Wellness Program
                  </button>
                </div>
              )}
            </li>

            {/* Item 5: Franchise */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown('franchise')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('franchise')}
                className={`py-3.5 px-3 flex items-center gap-1 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'franchise' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                <span>Franchise</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'franchise' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-stone-200 shadow-xl rounded-b-xl py-2 z-50 text-left normal-case">
                  <button
                    onClick={() => handleNavClick('franchise')}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-stone-800 hover:bg-[#FFFDE5] hover:text-black"
                  >
                    Own a Gold’s Gym Franchise
                  </button>
                  <button
                    onClick={() => handleNavClick('franchise')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50"
                  >
                    Franchise ROI & Floor Models
                  </button>
                </div>
              )}
            </li>

            {/* Item 6: Associations & Advertising */}
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className={`py-3.5 px-3 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'advertising' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                Associations & Advertising
              </button>
            </li>

            {/* Item 7: Convention */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDropdown('convention')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('events')}
                className={`py-3.5 px-3 flex items-center gap-1 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'events' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                <span>Convention</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === 'convention' && (
                <div className="absolute top-full left-0 w-56 bg-white border border-stone-200 shadow-xl rounded-b-xl py-2 z-50 text-left normal-case">
                  <button
                    onClick={() => handleNavClick('events')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Bangkok 2023
                  </button>
                  <button
                    onClick={() => handleNavClick('events')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Dubai 2022
                  </button>
                  <button
                    onClick={() => handleNavClick('events')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Kuala Lumpur 2019
                  </button>
                  <button
                    onClick={() => handleNavClick('events')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Kochi 2018
                  </button>
                </div>
              )}
            </li>

            {/* Item 8: Contact Us */}
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className={`py-3.5 px-3 hover:text-[#d4af37] transition-colors cursor-pointer ${
                  activeTab === 'contact' ? 'text-black border-b-2 border-[#FFE400]' : 'text-stone-800'
                }`}
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Direct Gym Locator Button */}
          <button
            onClick={() => handleNavClick('gyms')}
            className="flex items-center gap-1.5 text-xs font-bold text-black bg-stone-100 hover:bg-[#FFE400] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Find A Gym Near You</span>
          </button>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 bg-black text-white flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-2">
                <img
                  src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/10/fullcolor.png?fit=563%2C564&ssl=1"
                  alt="Gold's Gym"
                  className="h-9 w-auto"
                />
                <span className="font-black text-base tracking-wider uppercase">
                  GOLD'S GYM<span className="text-[#FFE400]">.</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions in Drawer */}
            <div className="p-4 bg-[#FFFDE5] border-b border-amber-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeTrial();
                }}
                className="w-full bg-[#F9E602] hover:bg-black hover:text-white text-black font-extrabold text-xs uppercase py-2.5 px-4 rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Free Trial Pass</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('membership');
                }}
                className="w-full bg-black text-white font-extrabold text-xs uppercase py-2.5 px-4 rounded-xl text-center hover:bg-stone-800 transition-colors"
              >
                Buy Membership Now
              </button>
            </div>

            {/* Accordion Menu List */}
            <div className="p-4 flex-1 space-y-1">
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Home</span>
              </button>

              {/* Get Started Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('get-started')}
                  className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
                >
                  <span>Get Started</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileAccordion === 'get-started' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'get-started' && (
                  <div className="pl-4 py-1 space-y-1 bg-stone-50 rounded-lg my-1">
                    <button
                      onClick={() => handleNavClick('gyms')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Our Gyms India (156+ Clubs)
                    </button>
                    <button
                      onClick={() => handleNavClick('membership')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Buy Membership Online
                    </button>
                    <button
                      onClick={() => handleNavClick('blogs')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Fitness Blogs
                    </button>
                    <button
                      onClick={() => handleNavClick('events')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Our Events
                    </button>
                  </div>
                )}
              </div>

              {/* Fitness Institute - GGFI Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('ggfi')}
                  className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
                >
                  <span>Fitness Institute – GGFI</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileAccordion === 'ggfi' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'ggfi' && (
                  <div className="pl-4 py-1 space-y-1 bg-stone-50 rounded-lg my-1">
                    <button
                      onClick={() => handleNavClick('ggfi')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      GGFI Courses & Certifications
                    </button>
                    <button
                      onClick={() => handleNavClick('ggfi')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Master Personal Trainer (MPT)
                    </button>
                    <button
                      onClick={() => handleNavClick('ggfi')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      ACE Exam Prep Course
                    </button>
                    <button
                      onClick={() => handleNavClick('ggfi')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Book a Free Demo Class
                    </button>
                  </div>
                )}
              </div>

              {/* Programs Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileAccordion('programs')}
                  className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileAccordion === 'programs' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'programs' && (
                  <div className="pl-4 py-1 space-y-1 bg-stone-50 rounded-lg my-1">
                    <button
                      onClick={() => handleNavClick('programs')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Personal Training Program
                    </button>
                    <button
                      onClick={() => handleNavClick('programs')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Group Program (GGX Studio)
                    </button>
                    <button
                      onClick={() => handleNavClick('programs')}
                      className="w-full text-left py-2 px-3 text-xs font-semibold text-stone-700 hover:text-black"
                    >
                      Corporate Memberships & Wellness
                    </button>
                  </div>
                )}
              </div>

              {/* Gallery */}
              <button
                onClick={() => handleNavClick('gallery')}
                className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Gallery</span>
              </button>

              {/* Franchise */}
              <button
                onClick={() => handleNavClick('franchise')}
                className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Own a Gold’s Gym Franchise</span>
              </button>

              {/* Contact Us */}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm text-stone-900 hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mobile Footer Info */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>+91 22 2640 1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>customer.care@goldsgym.in</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
