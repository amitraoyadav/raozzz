import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Calendar,
  MapPin,
  Building,
  Award,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  ChefHat,
  BedDouble,
  Tv,
  UtensilsCrossed,
  Sparkle,
  Baby,
  Hammer,
} from 'lucide-react';
import { LivintoLogo } from './LivintoLogo';
import { LIVINTO_CONFIG, PRODUCT_CATEGORIES_DATA, SHOWROOMS_DATA } from '../../data/livintoInteriorsData';

interface LivintoNavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
  onOpenProduct: (slug: string) => void;
  onOpenSubPage: (pageType: string) => void;
}

export const LivintoNavbar: React.FC<LivintoNavbarProps> = ({
  onNavigateToSection,
  onOpenConsultation,
  onOpenProduct,
  onOpenSubPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleMobileSub = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigateToSection(sectionId);
  };

  const handleProductClick = (slug: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenProduct(slug);
  };

  const handleSubPageClick = (pageType: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenSubPage(pageType);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-white border-b border-slate-100 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer focus:outline-none"
        >
          <LivintoLogo theme="dark" size="md" showSubline={true} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-sm font-semibold text-slate-700">
          {/* HOME */}
          <button
            onClick={() => handleNavClick('hero')}
            className="px-2.5 py-2 hover:text-[#814882] rounded-lg transition-colors cursor-pointer uppercase"
          >
            Home
          </button>

          {/* COMPANY */}
          <button
            onClick={() => handleSubPageClick('company')}
            className="px-2.5 py-2 hover:text-[#814882] rounded-lg transition-colors cursor-pointer uppercase"
          >
            Company
          </button>

          {/* WHAT WE DO DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('what-we-do')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('what-we-do')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase ${
                activeDropdown === 'what-we-do' ? 'text-[#814882] bg-purple-50' : 'hover:text-[#814882]'
              }`}
            >
              <span>What We Do</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'what-we-do' && (
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <button
                  onClick={() => handleSubPageClick('customized-interiors')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-purple-50 hover:text-[#814882] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#814882]" />
                    <span>Customized Interiors</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleSubPageClick('design-and-build')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-purple-50 hover:text-[#814882] transition-colors text-xs font-bold flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Hammer className="w-4 h-4 text-[#814882]" />
                    <span>Design and Build</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            )}
          </div>

          {/* PRODUCTS MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('what-we-do')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase ${
                activeDropdown === 'products' ? 'text-[#814882] bg-purple-50' : 'hover:text-[#814882]'
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'products' && (
              <div className="absolute left-0 mt-1 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {PRODUCT_CATEGORIES_DATA.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleProductClick(prod.slug)}
                    className="text-left p-2.5 rounded-xl hover:bg-purple-50 hover:text-[#814882] transition-colors text-xs group flex items-start gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#814882] flex items-center justify-center shrink-0 mt-0.5">
                      {prod.slug === 'kitchen' && <ChefHat className="w-4 h-4" />}
                      {prod.slug === 'bedroom' && <BedDouble className="w-4 h-4" />}
                      {prod.slug === 'living-room' && <Tv className="w-4 h-4" />}
                      {prod.slug === 'dining-room' && <UtensilsCrossed className="w-4 h-4" />}
                      {prod.slug === 'decorative-units' && <Sparkle className="w-4 h-4" />}
                      {prod.slug === 'kids-room' && <Baby className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#814882]">
                        {prod.name}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">
                        {prod.tagline}
                      </p>
                    </div>
                  </button>
                ))}
                <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-2">
                  <span>100% Boiling Waterproof Marine Ply Carcass</span>
                  <span className="font-bold text-[#814882]">10 Years Warranty</span>
                </div>
              </div>
            )}
          </div>

          {/* OFFERS */}
          <button
            onClick={() => handleNavClick('offers')}
            className="px-2.5 py-2 hover:text-[#814882] rounded-lg transition-colors cursor-pointer uppercase flex items-center gap-1"
          >
            <span>Offers</span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 text-amber-900 font-bold">28% OFF</span>
          </button>

          {/* GALLERY */}
          <button
            onClick={() => handleNavClick('gallery')}
            className="px-2.5 py-2 hover:text-[#814882] rounded-lg transition-colors cursor-pointer uppercase"
          >
            Gallery
          </button>

          {/* TESTIMONIALS */}
          <button
            onClick={() => handleNavClick('testimonials')}
            className="px-2.5 py-2 hover:text-[#814882] rounded-lg transition-colors cursor-pointer uppercase"
          >
            Testimonials
          </button>

          {/* LOCATIONS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('locations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('locations')}
              className={`px-2.5 py-2 flex items-center gap-1 rounded-lg transition-colors cursor-pointer uppercase ${
                activeDropdown === 'locations' ? 'text-[#814882] bg-purple-50' : 'hover:text-[#814882]'
              }`}
            >
              <span>Locations</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'locations' && (
              <div className="absolute right-0 mt-1 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-xs">
                <div>
                  <div className="font-bold text-[#814882] uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-purple-100">
                    Karnataka &amp; Haryana
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {['Bengaluru (HSR Layout)', 'Bengaluru (Whitefield)', 'Mangaluru', 'Mysuru', 'Gurugram'].map((loc) => (
                      <li key={loc}>
                        <button
                          onClick={() => handleNavClick('locations')}
                          className="hover:text-[#814882] text-left transition-colors"
                        >
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-[#814882] uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-purple-100">
                    Kerala &amp; Tamil Nadu
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {['Kochi (Vyttila)', 'Trivandrum', 'Calicut', 'Chennai (Anna Nagar)', 'Coimbatore'].map((loc) => (
                      <li key={loc}>
                        <button
                          onClick={() => handleNavClick('locations')}
                          className="hover:text-[#814882] text-left transition-colors"
                        >
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-[#814882] uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-purple-100">
                    Maharashtra &amp; NCR
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {['Mumbai (Andheri)', 'Navi Mumbai', 'Pune (Hinjawadi)', 'Delhi NCR', 'Noida', 'Ahmedabad'].map((loc) => (
                      <li key={loc}>
                        <button
                          onClick={() => handleNavClick('locations')}
                          className="hover:text-[#814882] text-left transition-colors"
                        >
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] bg-purple-50 p-2.5 rounded-xl">
                  <span className="text-slate-700 font-medium">
                    29 Company-Direct Showrooms Across India
                  </span>
                  <button
                    onClick={() => handleNavClick('locations')}
                    className="font-bold text-[#814882] hover:underline flex items-center gap-1"
                  >
                    <span>View All Showrooms</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* MORE (FAQ, BLOG, CSR, CAREERS) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('more')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                activeDropdown === 'more' ? 'text-[#814882] bg-purple-50' : 'hover:text-[#814882]'
              }`}
              title="More Pages"
            >
              <div className="flex flex-col gap-0.5 w-4 items-center">
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="w-1 h-1 rounded-full bg-slate-600" />
              </div>
            </button>

            {activeDropdown === 'more' && (
              <div className="absolute right-0 mt-1 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-xs font-semibold text-slate-800">
                <button
                  onClick={() => handleNavClick('blogs')}
                  className="w-full text-left p-2 rounded-xl hover:bg-purple-50 hover:text-[#814882]"
                >
                  Latest Blogs &amp; Guides
                </button>
                <button
                  onClick={() => handleNavClick('faqs')}
                  className="w-full text-left p-2 rounded-xl hover:bg-purple-50 hover:text-[#814882]"
                >
                  FAQs &amp; 10-Yr Warranty
                </button>
                <button
                  onClick={() => handleSubPageClick('platinum-membership')}
                  className="w-full text-left p-2 rounded-xl hover:bg-purple-50 hover:text-[#814882]"
                >
                  Platinum Membership
                </button>
                <button
                  onClick={() => handleSubPageClick('csr')}
                  className="w-full text-left p-2 rounded-xl hover:bg-purple-50 hover:text-[#814882]"
                >
                  CSR &amp; Sustainability
                </button>
                <button
                  onClick={() => handleSubPageClick('careers')}
                  className="w-full text-left p-2 rounded-xl hover:bg-purple-50 hover:text-[#814882]"
                >
                  Careers (1,700+ Team)
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#814882] via-[#6d396e] to-[#814882] hover:from-[#6d396e] hover:to-[#542855] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wide"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#814882] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="p-3 bg-purple-50 rounded-xl flex items-center justify-between text-xs">
            <span className="font-bold text-[#814882]">22+ Years in Modular Interiors</span>
            <span className="text-slate-600 font-semibold">16,000+ Homes</span>
          </div>

          <div className="space-y-1 divide-y divide-slate-100 text-sm font-semibold text-slate-800">
            <button
              onClick={() => handleNavClick('hero')}
              className="w-full text-left py-2.5 uppercase"
            >
              Home
            </button>

            <button
              onClick={() => handleSubPageClick('company')}
              className="w-full text-left py-2.5 uppercase"
            >
              Company
            </button>

            {/* WHAT WE DO ACCORDION */}
            <div className="pt-2">
              <button
                onClick={() => toggleMobileSub('what-we-do')}
                className="w-full text-left py-2 flex items-center justify-between uppercase"
              >
                <span>What We Do</span>
                <span className="text-xs text-[#814882]">{mobileExpanded['what-we-do'] ? '-' : '+'}</span>
              </button>
              {mobileExpanded['what-we-do'] && (
                <div className="pl-3 pb-2 space-y-2 text-xs text-slate-600">
                  <button
                    onClick={() => handleSubPageClick('customized-interiors')}
                    className="block text-left py-1 hover:text-[#814882]"
                  >
                    Customized Interiors
                  </button>
                  <button
                    onClick={() => handleSubPageClick('design-and-build')}
                    className="block text-left py-1 hover:text-[#814882]"
                  >
                    Design and Build
                  </button>
                </div>
              )}
            </div>

            {/* PRODUCTS ACCORDION */}
            <div className="pt-2">
              <button
                onClick={() => toggleMobileSub('products')}
                className="w-full text-left py-2 flex items-center justify-between uppercase"
              >
                <span>Products</span>
                <span className="text-xs text-[#814882]">{mobileExpanded['products'] ? '-' : '+'}</span>
              </button>
              {mobileExpanded['products'] && (
                <div className="pl-3 pb-2 space-y-2 text-xs text-slate-600">
                  {PRODUCT_CATEGORIES_DATA.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleProductClick(prod.slug)}
                      className="block text-left py-1 hover:text-[#814882]"
                    >
                      {prod.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('offers')}
              className="w-full text-left py-2.5 uppercase flex items-center justify-between"
            >
              <span>Offers</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">28% OFF</span>
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className="w-full text-left py-2.5 uppercase"
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavClick('testimonials')}
              className="w-full text-left py-2.5 uppercase"
            >
              Testimonials
            </button>

            {/* LOCATIONS ACCORDION */}
            <div className="pt-2">
              <button
                onClick={() => toggleMobileSub('locations')}
                className="w-full text-left py-2 flex items-center justify-between uppercase"
              >
                <span>Showroom Locations (29)</span>
                <span className="text-xs text-[#814882]">{mobileExpanded['locations'] ? '-' : '+'}</span>
              </button>
              {mobileExpanded['locations'] && (
                <div className="pl-3 pb-2 space-y-1.5 text-xs text-slate-600 max-h-48 overflow-y-auto">
                  {SHOWROOMS_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick('locations')}
                      className="block text-left py-1 hover:text-[#814882]"
                    >
                      {s.city} - {s.branchName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('blogs')}
              className="w-full text-left py-2.5 uppercase"
            >
              Blogs
            </button>

            <button
              onClick={() => handleNavClick('faqs')}
              className="w-full text-left py-2.5 uppercase"
            >
              FAQs &amp; 10-Yr Warranty
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#814882] to-[#6d396e] text-white font-bold text-center shadow-lg cursor-pointer uppercase tracking-wider"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  );
};
