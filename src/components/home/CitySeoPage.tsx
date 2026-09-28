import React, { useEffect, useState } from 'react';
import {
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Globe,
  Star
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite } from '../../types';

export interface CityConfig {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  headlineHighlight: string;
  tagline: string;
  keyLocalities: string[];
  localInsight: string;
  popularCategories: string[];
}

export const SUPPORTED_CITIES: Record<string, CityConfig> = {
  delhi: {
    slug: 'delhi',
    name: 'Delhi NCR',
    state: 'Delhi',
    metaTitle: 'Website Builder for Small Businesses in Delhi NCR | RaoSitez',
    metaDescription: 'Get a bespoke, mobile-friendly website with instant WhatsApp ordering and Google Maps setup for your Delhi, Noida, or Gurugram business for just ₹999.',
    headlineHighlight: 'Delhi NCR’s Local Shops & Doctors',
    tagline: 'From Janakpuri clinics and Chandni Chowk wholesalers to Gurugram consultants — get discovered on mobile.',
    keyLocalities: ['Connaught Place', 'Janakpuri', 'South Extension', 'Dwarka', 'Chandni Chowk', 'Gurugram MG Road', 'Noida Sector 18'],
    localInsight: 'With over 1.8 crore smartphone users in Delhi NCR searching for nearby stores and services, offline word-of-mouth alone cannot compete with Google Maps and instant WhatsApp links.',
    popularCategories: ['Doctor Clinic', 'CA & Tax Consultant', 'Café & Roastery', 'Mobile Repair', 'Packers & Movers']
  },
  mumbai: {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    metaTitle: 'Website Builder for Small Businesses in Mumbai | RaoSitez',
    metaDescription: 'Empowering Mumbai local shops, salons, cafes, and consultants with 24-hr turnkey websites and direct WhatsApp links at ₹999.',
    headlineHighlight: 'Mumbai’s Vibrant Businesses',
    tagline: 'From Bandra boutiques and Lower Parel corporate caterers to Andheri repair shops — dominate your locality.',
    keyLocalities: ['Bandra West', 'Andheri East & West', 'Lower Parel', 'Colaba', 'Borivali', 'Dadar', 'BKC'],
    localInsight: 'In Mumbai’s fast-paced commercial rhythm, customers prefer clicking a WhatsApp link to view verified ₹ menus rather than calling or visiting blindly.',
    popularCategories: ['Boutique & Retail', 'Tattoo Studio', 'Corporate Gifting', 'Office Tiffin', 'Bakery']
  },
  bangalore: {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    metaTitle: 'Website Builder for Small Businesses in Bangalore | RaoSitez',
    metaDescription: 'Modern, high-converting websites for Bangalore cafes, tech service providers, organic farms, and clinics for ₹999. Ready in 24 hours.',
    headlineHighlight: 'Bangalore’s Innovators & Neighborhood Hubs',
    tagline: 'From Indiranagar specialty coffee roasters to Whitefield organic farms and Koramangala studios.',
    keyLocalities: ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Jayanagar', 'Malleshwaram', 'JP Nagar'],
    localInsight: 'Bangalore residents are India’s most digitally active consumers. Having a verified website with exact Google location and QR standees ensures maximum repeat footfall.',
    popularCategories: ['Gaming Lounge', 'Organic Produce', 'Specialty Café', 'Veterinary Clinic', 'Co-Working Space']
  },
  pune: {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    metaTitle: 'Website Builder for Small Businesses in Pune | RaoSitez',
    metaDescription: 'Affordable, mobile-first website creation for Pune coaching institutes, salons, auto garages, and restaurants. Flat ₹999.',
    headlineHighlight: 'Pune’s Entrepreneurs & Academies',
    tagline: 'From FC Road student cafes and Baner co-working hubs to Kothrud family dining.',
    keyLocalities: ['Baner', 'Kothrud', 'Viman Nagar', 'FC Road', 'Hinjewadi', 'Aundh', 'Koregaon Park'],
    localInsight: 'With thousands of students and IT professionals moving to Pune every year, local businesses with transparent digital price cards win the market.',
    popularCategories: ['Coaching & Tuition', 'Salon & Spa', 'Co-Working Hub', 'Dry Cleaning', 'Automobile Garage']
  },
  hyderabad: {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    metaTitle: 'Website Builder for Small Businesses in Hyderabad | RaoSitez',
    metaDescription: 'Professional websites for Hyderabad biryani restaurants, drone studios, banquet halls, and hospitals. Launch for ₹999.',
    headlineHighlight: 'Hyderabad’s Heritage & Tech Businesses',
    tagline: 'From Jubilee Hills rooftop bistros and Hitec City drone creators to Charminar jewellery houses.',
    keyLocalities: ['Jubilee Hills', 'Banjara Hills', 'Hitec City', 'Madhapur', 'Gachibowli', 'Secunderabad', 'Abids'],
    localInsight: 'Hyderabad consumers demand quick WhatsApp ordering and clear location pins. A bespoke RaoSitez site builds authentic credibility.',
    popularCategories: ['Rooftop Café', 'Drone Aerial Cinematography', 'Banquet Palace', 'Jewellery Store', 'Diagnostic Lab']
  },
  jaipur: {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    metaTitle: 'Website Builder for Small Businesses in Jaipur | RaoSitez',
    metaDescription: 'Promote your Jaipur heritage handicraft shop, sweet boutique, royal event rental, or clinic with an honest ₹999 website.',
    headlineHighlight: 'Jaipur’s Master Artisans & Merchants',
    tagline: 'From C-Scheme blue pottery ateliers and Tonk Road sound rentals to Johari Bazaar jewellers.',
    keyLocalities: ['C-Scheme', 'Malviya Nagar', 'Tonk Road', 'Vaishali Nagar', 'Johari Bazaar', 'Mansarovar', 'Raja Park'],
    localInsight: 'Domestic tourists and overseas buyers actively search for verified handicraft studios and authentic sweet makers before visiting in person.',
    popularCategories: ['Handicraft & Artisan', 'Event & Sound Rental', 'Mithai & Farsan', 'Astrology & Pooja', 'Car Taxi Rental']
  },
  lucknow: {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    metaTitle: 'Website Builder for Small Businesses in Lucknow | RaoSitez',
    metaDescription: 'Launch an elegant website for your Lucknow Chikankari boutique, Awadhi cuisine outlet, or clinic for only ₹999.',
    headlineHighlight: 'Lucknow’s Royal Boutiques & Services',
    tagline: 'From Hazratganj fashion houses and Gomti Nagar clinics to Alambagh retail counters.',
    keyLocalities: ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar', 'Alambagh', 'Chowk', 'Aminabad'],
    localInsight: 'Lucknow is experiencing rapid retail digitization. Shop owners who connect their Google Maps business profile to a verified mobile website see 2x higher customer trust.',
    popularCategories: ['Tailor & Boutique', 'Doctor Clinic', 'Restaurant & Kebab', 'Optical Store', 'Preschool Daycare']
  },
  ahmedabad: {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    metaTitle: 'Website Builder for Small Businesses in Ahmedabad | RaoSitez',
    metaDescription: 'Turnkey website builder for Ahmedabad textile merchants, farsan stores, CA consultants, and clinics. Only ₹999.',
    headlineHighlight: 'Ahmedabad’s Traders & Service Providers',
    tagline: 'From SG Highway corporate hubs and Manek Chowk food outlets to Satellite retail complexes.',
    keyLocalities: ['SG Highway', 'Satellite', 'Bodakdev', 'Prahlad Nagar', 'Navrangpura', 'Manek Chowk', 'C.G. Road'],
    localInsight: 'Gujarati business owners understand the value of honest pricing and direct client contact. RaoSitez replaces expensive agency fees with a reliable ₹999 solution.',
    popularCategories: ['CA & Tax Consultant', 'Loan & DSA Agent', 'Farsan & Sweets', 'Hardware & Building', 'Solar Panel Installer']
  }
};

export const CitySeoPage: React.FC<{
  citySlug: string;
  onOpenOrderModal: () => void;
  onSelectCity: (slug: string) => void;
}> = ({ citySlug, onOpenOrderModal, onSelectCity }) => {
  const { websites, setActiveView } = useApp();

  const cityKey = citySlug.toLowerCase().replace(/[^a-z]/g, '');
  const city = SUPPORTED_CITIES[cityKey] || SUPPORTED_CITIES['delhi'];

  // Inject Meta Title & Description
  useEffect(() => {
    document.title = city.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', city.metaDescription);
    }
  }, [city]);

  // Filter websites from this city (or supplement if fewer than 4)
  const cityMatchingWebsites = websites.filter(site => {
    const siteCity = (site.city || '').toLowerCase();
    const siteAddress = (site.address || '').toLowerCase();
    const target = city.name.toLowerCase();
    const slugTarget = city.slug.toLowerCase();
    return siteCity.includes(slugTarget) || siteAddress.includes(slugTarget) || siteCity.includes(target) || siteAddress.includes(target);
  });

  const displayWebsites = cityMatchingWebsites.length >= 3
    ? cityMatchingWebsites
    : [...cityMatchingWebsites, ...websites.slice(0, 6 - cityMatchingWebsites.length)];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* City Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* City Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#4338CA]" />
              <span>Locally Focused in {city.name}, {city.state}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14162B] font-['Fraunces'] leading-tight tracking-tight">
              A Complete Website For{' '}
              <span className="text-[#4338CA] italic block sm:inline">
                {city.headlineHighlight}
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
              {city.tagline} {city.localInsight}
            </p>

            {/* Flat ₹999 Box */}
            <div className="mt-8 p-6 bg-white rounded-3xl border border-[#E8E7F0] shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[11px] font-bold text-[#8E92A8] uppercase tracking-wider block">
                  One-Time Turnkey Cost
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#14162B] font-mono-price">
                    ₹999
                  </span>
                  <span className="text-sm text-[#8E92A8] line-through">
                    ₹9,999
                  </span>
                  <span className="text-xs font-bold text-[#FF6B4A] bg-[#FF6B4A]/10 px-2 py-0.5 rounded">
                    90% OFF
                  </span>
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                  ✓ Ready in 24 Hours · 1 Year Cloud Hosting Included
                </span>
              </div>

              {/* Coral Conversion Button */}
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-6 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Launch in {city.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Popular Localities Chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#636882]">
              <span className="font-semibold text-[#14162B]">Covering Localities:</span>
              {city.keyLocalities.map((loc, idx) => (
                <span key={idx} className="bg-white px-2.5 py-1 rounded-lg border border-[#E8E7F0]">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Switcher Bar */}
      <section className="py-3 sm:py-4 bg-[#14162B] text-white border-b border-[#232742]">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-[#8E92A8] shrink-0 uppercase tracking-wider">
            Explore Other Cities:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {Object.values(SUPPORTED_CITIES).map(c => (
              <button
                key={c.slug}
                onClick={() => onSelectCity(c.slug)}
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  c.slug === city.slug
                    ? 'bg-[#4338CA] text-white shadow-xs'
                    : 'text-[#D5D4E3] hover:bg-white/10 active:bg-white/20'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Websites in This City */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wider block mb-1">
            Live Demo Websites
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14162B] font-['Fraunces']">
            Featured Demos Ready for {city.name} Businesses
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#474B64]">
            Every site is mobile-first, features ₹ pricing, Google Maps routing, and connects straight to your WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayWebsites.slice(0, 6).map(site => (
            <div
              key={site.slug}
              onClick={() => setActiveView('site', site.slug)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E7F0] shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-16/10 relative overflow-hidden bg-slate-100">
                <img
                  src={site.coverUrl || site.logoUrl}
                  alt={site.businessName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#14162B]/80 backdrop-blur-xs text-white text-[10px] font-bold">
                  {site.category.replace('_', ' ')}
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold">
                  Verified
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#14162B] line-clamp-1 group-hover:text-[#4338CA] transition-colors">
                    {site.businessName}
                  </h3>
                  <p className="text-xs text-[#474B64] mt-1 line-clamp-2">
                    {site.tagline}
                  </p>
                  <p className="text-[11px] text-[#8E92A8] mt-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#4338CA] shrink-0" />
                    <span className="truncate">{site.address}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E7F0] mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#14162B] font-mono-price">
                    ₹999 Turnkey
                  </span>
                  <span className="text-xs font-bold text-[#4338CA] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Live Site <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Localized Bottom CTA */}
        <div className="mt-16 bg-[#14162B] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-black font-['Fraunces']">
            Ready to Take Your {city.name} Business Online?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D5D4E3] max-w-xl mx-auto">
            No technical knowledge needed. Simply send us your photos, menu, or prices on WhatsApp and we will deliver your complete website in 24 hours.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto px-6 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Your {city.name} Website (₹999)</span>
            </button>
            <a
              href={`https://wa.me/919876543210?text=Hello%20RaoSitez,%20I%20want%20to%20create%20a%20website%20for%20my%20business%20in%20${encodeURIComponent(city.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
