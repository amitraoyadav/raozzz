import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Share2,
  Heart,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  User,
  SlidersHorizontal,
  Home,
  FileText,
  Clock,
  Compass,
  TrendingUp,
  Layers,
  AlertCircle
} from 'lucide-react';
import {
  PropertyItem,
  RealEstateProject,
  PropertyDealer,
  RealEstateArticle,
  SAMPLE_PROPERTIES,
  SAMPLE_PROJECTS,
  SAMPLE_DEALERS,
  REAL_ESTATE_TOOLS,
  REAL_ESTATE_FAQS,
  REAL_ESTATE_BLOG_ARTICLES,
  MANDATORY_LEGAL_DISCLAIMER,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  POPULAR_CITIES,
  formatIndianCurrency,
  BRAND_DISPLAY
} from '../../data/squareYardDealersData';
import { SquareYardDealersPropertyCard } from './SquareYardDealersPropertyCard';
import { SquareYardDealersProjectCard } from './SquareYardDealersProjectCard';
import { SquareYardDealersEmiCalculator } from './SquareYardDealersEmiCalculator';
import { useApp } from '../../context/AppContext';

interface ViewProps {
  onNavigate: (tab: string) => void;
  onOpenScheduleVisit: (item: PropertyItem | RealEstateProject) => void;
  onOpenPostProperty: () => void;
  onSelectProperty: (property: PropertyItem) => void;
  onSelectProject: (project: RealEstateProject) => void;
  onToggleFavorite?: (id: string) => void;
  favoriteIds?: string[];
}

// 1. PROPERTY DETAILS VIEW (/property/:slug)
export const SquareYardDealersPropertyDetailsView: React.FC<ViewProps & { property: PropertyItem }> = ({
  property,
  onNavigate,
  onOpenScheduleVisit,
  onToggleFavorite,
  favoriteIds = []
}) => {
  const { submitLead } = useApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('I am interested in this property. Please share details.');
  const [enquirySent, setEnquirySent] = useState(false);

  const handleEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    try {
      await submitLead({
        websiteSlug: 'square-yard-dealers',
        businessName: 'Property Lead Enquiry',
        customerName: contactName,
        customerPhone: contactPhone.replace(/\D/g, ''),
        serviceRequested: `Enquiry for ${property.title} (ID: ${property.id})`,
        message: contactMsg,
        status: 'new'
      });
    } catch {
      // Fallback
    }
    setEnquirySent(true);
  };

  const isFav = favoriteIds.includes(property.id);

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <button onClick={() => onNavigate('home')} className="hover:text-slate-900 cursor-pointer">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate(property.listingType)} className="capitalize hover:text-slate-900 cursor-pointer">
          {property.listingType === 'buy' ? 'Properties for Sale' : 'Properties for Rent'}
        </button>
        <span>/</span>
        <span className="text-slate-900 font-bold truncate max-w-xs">{property.title}</span>
      </div>

      {/* Main Property Overview Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[11px] uppercase tracking-wider">
              {property.propertyType}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
              For {property.listingType === 'buy' ? 'Sale' : 'Rent'}
            </span>
            {property.verified && (
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] uppercase flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Property</span>
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
            {property.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{property.location}</span>
          </p>
        </div>

        <div className="text-left md:text-right space-y-1 shrink-0">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
            {property.listingType === 'buy' ? 'Asking Price' : 'Monthly Rent'}
          </span>
          <div className="text-3xl sm:text-4xl font-black text-slate-900">
            {property.priceDisplay}
          </div>
          {property.pricePerSqFt && (
            <span className="text-xs text-blue-600 font-semibold block">
              {property.pricePerSqFt}
            </span>
          )}
        </div>
      </div>

      {/* High-Resolution Image Gallery */}
      <div className="space-y-4">
        <div className="relative h-80 sm:h-120 rounded-3xl overflow-hidden bg-slate-900 shadow-xl">
          <img
            src={property.images[activeImageIndex] || property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite?.(property.id)}
              className="p-3 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
            >
              <Heart className={`w-5 h-5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {property.images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-24 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Grid: Details Left, Contact Agent Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* Key Property Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 block font-bold uppercase text-[10px]">Bedrooms</span>
              <strong className="text-base text-slate-900 font-extrabold flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-blue-600" />
                <span>{property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Studio'}</span>
              </strong>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-bold uppercase text-[10px]">Super Area</span>
              <strong className="text-base text-slate-900 font-extrabold flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-blue-600" />
                <span>{property.area} {property.areaUnit}</span>
              </strong>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-bold uppercase text-[10px]">Furnishing</span>
              <strong className="text-base text-slate-900 font-extrabold">
                {property.furnishing}
              </strong>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-bold uppercase text-[10px]">Possession</span>
              <strong className="text-base text-emerald-700 font-extrabold">
                {property.possessionStatus}
              </strong>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900">Property Description</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities & Facilities */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900">Amenities &amp; Features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Advantages & Nearby Landmarks */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900">Location Advantages &amp; Connectivity</h3>
            <div className="space-y-2 text-xs text-slate-700">
              {property.nearbyLandmarks.map((lm, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{lm}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plan Placeholder */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900">Architectural Floor Plan</h3>
            <div className="h-64 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 space-y-2">
              <Layers className="w-10 h-10 text-slate-400" />
              <span className="font-bold text-xs uppercase tracking-wider">Architectural 2D Layout Plan</span>
              <p className="text-[11px] text-slate-400">Available upon request or scheduled dealer inspection</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Dealer Info & Quick Contact Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-5 sticky top-24">
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider block">
                Listing Facilitator
              </span>
              <h3 className="text-base font-black text-slate-900">
                {property.dealerName || property.postedBy}
              </h3>
              <p className="text-xs text-slate-500">
                Verified Representative · {property.city}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenScheduleVisit(property)}
                className="py-3 px-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer transition-colors shadow-sm"
              >
                Schedule Visit
              </button>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="py-3 px-3 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center cursor-pointer transition-colors"
              >
                Call Dealer
              </a>
            </div>

            {/* Quick Enquiry Form */}
            <div className="pt-4 border-t border-slate-100">
              {enquirySent ? (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <strong className="text-xs font-bold text-emerald-950 block">Enquiry Received!</strong>
                  <p className="text-[11px] text-slate-600">The dealer will call you back shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquiry} className="space-y-3 text-xs">
                  <h4 className="font-bold text-slate-900">Send an Immediate Message</h4>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit Mobile"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    rows={2}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Contact Dealer
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. PROJECT DETAILS VIEW (/project/:slug)
export const SquareYardDealersProjectDetailsView: React.FC<ViewProps & { project: RealEstateProject }> = ({
  project,
  onNavigate,
  onOpenScheduleVisit
}) => {
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <button onClick={() => onNavigate('home')} className="hover:text-slate-900 cursor-pointer">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('projects')} className="hover:text-slate-900 cursor-pointer">
          Projects
        </button>
        <span>/</span>
        <span className="text-slate-900 font-bold truncate">{project.name}</span>
      </div>

      {/* Project Banner Hero */}
      <div className="relative h-96 sm:h-120 rounded-3xl overflow-hidden shadow-2xl bg-slate-950">
        <img src={project.bannerImage} alt={project.name} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
              {project.status}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase backdrop-blur-xs">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white">{project.name}</h1>
          <p className="text-sm text-slate-300 font-medium">By {project.developer} · {project.locationDetails}</p>
          <div className="text-2xl sm:text-3xl font-black text-amber-300">
            {project.priceRange}
          </div>
        </div>
      </div>

      {/* Configurations & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-black text-slate-900">Project Overview</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-black text-slate-900">Amenities &amp; Master Features</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 text-xs text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-black text-slate-900">Location Advantages</h2>
            <div className="space-y-2 text-xs text-slate-700">
              {project.locationAdvantages.map((adv, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4 sticky top-24">
            <h3 className="text-lg font-black text-slate-900">Get Project Brochure</h3>
            <p className="text-xs text-slate-500">
              Receive pricing sheets, floor plan PDFs, and developer payment plans.
            </p>
            <button
              onClick={() => onOpenScheduleVisit(project)}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Get Project Details
            </button>
            <button
              onClick={() => onOpenScheduleVisit(project)}
              className="w-full py-3 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. BUY PROPERTIES VIEW (/buy)
export const SquareYardDealersBuyView: React.FC<ViewProps> = ({
  onSelectProperty,
  onOpenScheduleVisit,
  onToggleFavorite,
  favoriteIds = []
}) => {
  const [selectedSubCat, setSelectedSubCat] = useState<'all' | 'Apartment' | 'Villa' | 'Builder Floor' | 'Plot' | 'Commercial'>('all');

  const buyProperties = SAMPLE_PROPERTIES.filter((p) => {
    if (p.listingType !== 'buy') return false;
    if (selectedSubCat === 'all') return true;
    if (selectedSubCat === 'Commercial') return p.propertyCategory === 'commercial';
    return p.propertyType === selectedSubCat;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          Marketplace
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Properties for Sale
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Explore verified apartments, builder floors, independent houses, luxury villas, and commercial real estate across top Indian cities.
        </p>

        {/* Quick Filter Pills */}
        <div className="flex gap-2 flex-wrap pt-2">
          {['all', 'Apartment', 'Villa', 'Builder Floor', 'Plot', 'Commercial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubCat(cat as any)}
              className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedSubCat === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All Properties for Sale' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyProperties.map((p) => (
          <SquareYardDealersPropertyCard
            key={p.id}
            property={p}
            onViewDetails={onSelectProperty}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favoriteIds.includes(p.id)}
          />
        ))}
      </div>
    </div>
  );
};

// 4. RENT PROPERTIES VIEW (/rent)
export const SquareYardDealersRentView: React.FC<ViewProps> = ({
  onSelectProperty,
  onOpenScheduleVisit,
  onToggleFavorite,
  favoriteIds = []
}) => {
  const rentProperties = SAMPLE_PROPERTIES.filter((p) => p.listingType === 'rent');

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          Rental Market
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Properties for Rent
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Find fully furnished flats, family homes, commercial workspaces, and co-working spaces available on rent with verified agreements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentProperties.map((p) => (
          <SquareYardDealersPropertyCard
            key={p.id}
            property={p}
            onViewDetails={onSelectProperty}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favoriteIds.includes(p.id)}
          />
        ))}
      </div>
    </div>
  );
};

// 5. PROJECTS VIEW (/projects)
export const SquareYardDealersProjectsView: React.FC<ViewProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Trending' | 'New Launch' | 'Ready to Move' | 'Under Construction' | 'Premium' | 'Affordable'>('All');

  const filteredProjects = SAMPLE_PROJECTS.filter((p) => {
    if (activeTab === 'All') return true;
    return p.category === activeTab || p.status === activeTab;
  });

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          New Real Estate Projects
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Discover New Real Estate Projects
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Handpicked residential developments, township projects, and commercial hubs from top trusted real estate developers across India.
        </p>

        {/* Project Category Tabs */}
        <div className="flex gap-2 flex-wrap pt-2">
          {['All', 'Trending', 'New Launch', 'Ready to Move', 'Under Construction', 'Premium', 'Affordable'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <SquareYardDealersProjectCard
            key={proj.id}
            project={proj}
            onViewProject={onSelectProject}
          />
        ))}
      </div>
    </div>
  );
};

// 6. PROPERTY DEALERS / AGENTS VIEW (/agents)
export const SquareYardDealersAgentsView: React.FC<ViewProps> = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          Dealer Network
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Connect With Property Dealers
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Work with local market specialists who understand circle rates, micro-market pricing trends, and registry paperwork.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SAMPLE_DEALERS.map((d) => (
          <div key={d.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 mx-auto">
                <img src={d.photoUrl} alt={d.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base text-slate-900">{d.name}</h3>
                <span className="text-xs text-blue-600 font-semibold block">{d.agencyName}</span>
                <span className="text-[11px] text-slate-400">{d.experienceYears} Years Exp · {d.city}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed text-center">{d.about}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${d.phone.replace(/\s+/g, '')}`}
                className="w-full py-2 px-3 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider text-center block"
              >
                Call Dealer
              </a>
              <a
                href={`https://wa.me/${d.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold uppercase tracking-wider text-center block"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. REAL ESTATE TOOLS VIEW (/tools)
export const SquareYardDealersToolsView: React.FC<ViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          Analytical Instruments
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Real Estate Tools &amp; Calculators
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Make data-backed decisions with our suite of property valuation, EMI calculation, and budget planning tools.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REAL_ESTATE_TOOLS.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-base text-slate-900">{t.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.description}</p>
            </div>
            <button
              onClick={() => onNavigate(t.slug)}
              className="w-full py-2.5 px-4 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.ctaText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// 8. ABOUT US VIEW (/about)
export const SquareYardDealersAboutView: React.FC<ViewProps> = ({ onOpenPostProperty }) => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-4">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          About {BRAND_DISPLAY}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Your Partner in Property Discovery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Square Yard Dealers is an independent property marketplace and real estate advisory portal designed to make property transactions transparent and straightforward across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-lg font-black text-slate-900">Our Vision</h2>
          <p>
            The Indian real estate landscape is dynamic and multifaceted. From fast-growing expressway corridors to established heritage enclaves, buyers and tenants require credible information, authentic photographs, and trustworthy local guidance.
          </p>
          <p>
            Square Yard Dealers bridges the trust deficit by connecting seekers with verified properties and local real estate dealers who understand the ground realities of title verification and society procedures.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <h3 className="font-bold text-slate-900 text-sm">Our Commitments</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Zero Fake Data:</strong> Realistic prices based on actual market benchmarks.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Owner Listings:</strong> Direct connection without unnecessary broker layers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Regulatory Compliance:</strong> We advocate adherence to state RERA guidelines and legal due diligence.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
        <strong className="block text-[11px] uppercase font-bold text-amber-900 mb-1">
          Statutory Disclosure
        </strong>
        <p>{MANDATORY_LEGAL_DISCLAIMER}</p>
      </div>
    </div>
  );
};

// 9. BLOG / INSIGHTS VIEW (/blog)
export const SquareYardDealersBlogView: React.FC<ViewProps> = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Real Estate Insights
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Comprehensive guides on property buying, legal document verification, rental rights, and micro-market investment analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REAL_ESTATE_BLOG_ARTICLES.map((article) => (
          <article key={article.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="h-56 bg-slate-100 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>{article.publishedDate}</span>
              <span className="font-bold text-blue-600">Read Article →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

// 10. CONTACT US VIEW (/contact)
export const SquareYardDealersContactView: React.FC<ViewProps> = () => {
  const { submitLead } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Gurgaon');
  const [req, setReq] = useState('Buy Property');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      await submitLead({
        websiteSlug: 'square-yard-dealers',
        businessName: 'Square Yard Dealers Contact Enquiry',
        customerName: name,
        customerPhone: phone.replace(/\D/g, ''),
        customerEmail: email,
        serviceRequested: `Contact: ${req} in ${city}`,
        message: msg || 'Contact form submission',
        status: 'new'
      });
    } catch {
      // Fallback
    }
    setSent(true);
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          Assistance Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Contact Us</h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Connect with our property coordinators for listing queries, dealer onboarding, or property search guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4 text-xs text-slate-700">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="font-bold text-slate-900 block text-sm">Helpline</span>
            <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-blue-600 font-bold">
              {PHONE_NUMBER}
            </a>
            <span className="block text-[11px] text-slate-400">Monday - Sunday: 9:00 AM - 8:00 PM</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="font-bold text-slate-900 block text-sm">Email Address</span>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-blue-600 font-bold">
              {EMAIL_ADDRESS}
            </a>
            <span className="block text-[11px] text-slate-400">Response within 24 business hours</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="font-bold text-slate-900 block text-sm">Advisory Office</span>
            <p className="text-slate-600 leading-relaxed">{OFFICE_ADDRESS}</p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
          {sent ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-base text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600">A coordinator will get in touch with you shortly.</p>
              <button
                onClick={() => setSent(false)}
                className="py-2 px-6 rounded-full bg-slate-900 text-white text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContact} className="space-y-4 text-xs">
              <h3 className="font-bold text-sm text-slate-900">Send Enquiry</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Requirement</label>
                  <select
                    value={req}
                    onChange={(e) => setReq(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                  >
                    <option value="Buy Property">Buy Property</option>
                    <option value="Rent Property">Rent Property</option>
                    <option value="Sell Property">Sell Property</option>
                    <option value="Dealer Partnership">Dealer Partnership</option>
                    <option value="Other">General Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you are looking for..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider"
              >
                Contact Us
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 11. SELL / RENT PROPERTY DEDICATED VIEW (/sell)
export const SquareYardDealersSellView: React.FC<ViewProps> = ({ onNavigate }) => {
  const { submitLead } = useApp();

  // Multi-step form state (5 Steps)
  const [currentStep, setCurrentStep] = useState(1);
  const [userRole, setUserRole] = useState<'Owner' | 'Property Dealer' | 'Builder'>('Owner');
  const [intent, setIntent] = useState<'Sale' | 'Rent'>('Sale');
  const [category, setCategory] = useState<'residential' | 'commercial' | 'land'>('residential');

  // Step 2 details
  const [propertyType, setPropertyType] = useState('Apartment');
  const [bhk, setBhk] = useState('3 BHK');
  const [bathrooms, setBathrooms] = useState('2');
  const [areaSqFt, setAreaSqFt] = useState('');
  const [furnishing, setFurnishing] = useState<'Furnished' | 'Semi-Furnished' | 'Unfurnished'>('Semi-Furnished');
  const [floorNumber, setFloorNumber] = useState('5th of 14');
  const [possession, setPossession] = useState<'Ready To Move' | 'Under Construction' | 'Immediate'>('Ready To Move');

  // Step 3 location & price
  const [city, setCity] = useState('Gurgaon');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [negotiable, setNegotiable] = useState(true);

  // Step 4 amenities
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    'Covered Parking',
    'Lift',
    '24/7 Security',
    'Power Backup'
  ]);

  // Step 5 contact
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bestTimeToCall, setBestTimeToCall] = useState('Anytime (9 AM - 8 PM)');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [listingRefId, setListingRefId] = useState('');

  const toggleAmenity = (item: string) => {
    setSelectedAmenities(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !phone) return;

    const ref = `SYD-LST-${Math.floor(100000 + Math.random() * 900000)}`;
    setListingRefId(ref);

    try {
      await submitLead({
        websiteSlug: 'square-yard-dealers',
        businessName: `Square Yard Dealers - ${intent} Listing`,
        customerName: ownerName,
        customerPhone: phone.replace(/\D/g, ''),
        customerEmail: email,
        serviceRequested: `List Property for ${intent}: ${bhk} ${propertyType} in ${locality}, ${city} at ₹${price}`,
        message: `Role: ${userRole} | Area: ${areaSqFt} sq.ft | Furnishing: ${furnishing} | Floor: ${floorNumber} | Address: ${address} | Best Time: ${bestTimeToCall}`,
        status: 'new'
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-amber-500 block">
          Owner &amp; Broker Marketplace
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Sell or Rent Your Property
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Post your property for sale or rent with verified buyers and tenants. Fast, direct, and zero hassle.
        </p>
      </div>

      {/* 5 Value Props Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { title: 'Free Property Listing', desc: 'Zero upfront listing fee for property owners' },
          { title: 'Genuine Buyers', desc: 'Reach thousands of verified home seekers daily' },
          { title: 'Dealer Support', desc: 'Optional local expert assistance for site visits' },
          { title: 'Assisted Visits', desc: 'Screened prospects with identity verification' },
          { title: 'RERA Guidance', desc: 'Compliant documentation and agreement templates' }
        ].map((feat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1 text-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-xs text-slate-900">{feat.title}</h4>
            <p className="text-[11px] text-slate-500 leading-tight">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Step by Step Post Property Form */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Progress Tracker */}
        <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { num: 1, label: 'Basic Info' },
              { num: 2, label: 'Property Details' },
              { num: 3, label: 'Location & Price' },
              { num: 4, label: 'Amenities' },
              { num: 5, label: 'Contact Details' }
            ].map(s => (
              <div key={s.num} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                    currentStep === s.num
                      ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/20'
                      : currentStep > s.num
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {currentStep > s.num ? '✓' : s.num}
                </div>
                <span className={`text-[10px] sm:text-xs font-medium mt-1.5 hidden sm:block ${currentStep === s.num ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Property Listing Submitted!</h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Your property has been registered under Reference ID: <strong className="text-blue-600 font-mono text-base">{listingRefId}</strong>.
              Our property verification team will review details and publish your listing within 2 hours.
            </p>
            <div className="bg-slate-50 max-w-md mx-auto p-4 rounded-2xl border border-slate-200 text-xs text-left space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Property:</span>
                <span className="font-bold">{bhk} {propertyType} for {intent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold">{locality}, {city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Expected Amount:</span>
                <span className="font-bold">₹ {price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact:</span>
                <span className="font-bold">{ownerName} ({phone})</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="py-2.5 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Post Another Property
              </button>
              <button
                onClick={() => onNavigate('buy')}
                className="py-2.5 px-6 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 cursor-pointer"
              >
                Explore Active Properties
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* STEP 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 1: Basic Listing Information
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">I am an:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Owner', 'Property Dealer', 'Builder'] as const).map(role => (
                      <button
                        type="button"
                        key={role}
                        onClick={() => setUserRole(role)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          userRole === role
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">I want to:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['Sale', 'Rent'] as const).map(i => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setIntent(i)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          intent === i
                            ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {i === 'Sale' ? 'Sell Property' : 'Rent Out Property'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Property Category:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['residential', 'commercial', 'land'] as const).map(cat => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold capitalize border transition-all cursor-pointer ${
                          category === cat
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="py-3 px-8 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Property Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 2: Property Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Type</label>
                    <select
                      value={propertyType}
                      onChange={e => setPropertyType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                    >
                      <option value="Apartment">Apartment / Flat</option>
                      <option value="Builder Floor">Independent Builder Floor</option>
                      <option value="Villa">Luxury Villa</option>
                      <option value="Independent House">Independent House / Kothi</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Plot">Residential Plot / Land</option>
                      <option value="Office Space">Commercial Office Space</option>
                      <option value="Shop">Retail Shop</option>
                      <option value="Warehouse">Warehouse / Industrial Godown</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Configuration (BHK)</label>
                    <select
                      value={bhk}
                      onChange={e => setBhk(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                    >
                      <option value="1 RK / Studio">1 RK / Studio</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="4 BHK">4 BHK</option>
                      <option value="5+ BHK">5+ BHK</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Bathrooms</label>
                    <select
                      value={bathrooms}
                      onChange={e => setBathrooms(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                    >
                      <option value="1">1 Bathroom</option>
                      <option value="2">2 Bathrooms</option>
                      <option value="3">3 Bathrooms</option>
                      <option value="4+">4+ Bathrooms</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Super Built-up Area (Sq.Ft) *</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 1450"
                      value={areaSqFt}
                      onChange={e => setAreaSqFt(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Furnishing Status</label>
                    <select
                      value={furnishing}
                      onChange={e => setFurnishing(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                    >
                      <option value="Furnished">Fully Furnished</option>
                      <option value="Semi-Furnished">Semi-Furnished (Kitchen + Wardrobes)</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Floor Details</label>
                    <input
                      type="text"
                      placeholder="e.g. 4th of 18 Floors"
                      value={floorNumber}
                      onChange={e => setFloorNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Possession Status</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['Ready To Move', 'Under Construction', 'Immediate'] as const).map(p => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => setPossession(p)}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border cursor-pointer ${
                            possession === p
                              ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold'
                              : 'bg-white text-slate-700 border-slate-200'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="py-3 px-8 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Step 3</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Location & Pricing */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 3: Location &amp; Pricing
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City *</label>
                    <select
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                    >
                      {POPULAR_CITIES.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Locality / Sector *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sector 65, Golf Course Extension"
                      value={locality}
                      onChange={e => setLocality(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Society / Project / Building Name</label>
                    <input
                      type="text"
                      placeholder="e.g. M3M Heights / DLF Phase 5"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Expected {intent === 'Sale' ? 'Price (₹)' : 'Monthly Rent (₹)'} *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-slate-500 font-bold text-xs">₹</span>
                      <input
                        type="text"
                        required
                        placeholder={intent === 'Sale' ? 'e.g. 1,65,00,000' : 'e.g. 45,000 / month'}
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="negotiable"
                      checked={negotiable}
                      onChange={e => setNegotiable(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <label htmlFor="negotiable" className="text-xs text-slate-700">
                      Price is negotiable for genuine immediate buyers/tenants
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="py-3 px-8 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Step 4</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Photos & Amenities */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 4: Amenities &amp; Photos
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-3">
                    Key Society Amenities (Select all applicable):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      'Covered Parking', 'Lift', '24/7 Security', 'Power Backup',
                      'Swimming Pool', 'Gymnasium', 'Clubhouse', 'Children Play Area',
                      'Jogging Track', 'Tennis Court', 'Piped Gas', 'EV Charging Station'
                    ].map(a => {
                      const isSelected = selectedAmenities.includes(a);
                      return (
                        <button
                          type="button"
                          key={a}
                          onClick={() => toggleAmenity(a)}
                          className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate">{a}</span>
                          {isSelected && <span className="text-blue-600 text-xs font-bold">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">High-Resolution Photos (Optional at this stage)</h4>
                  <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                    Properties with at least 5 photos receive 4x more buyer inquiries. You can upload photos now or send them over WhatsApp once your coordinator contacts you.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 text-[10px] font-bold">
                    WhatsApp Photo Upload Available
                  </span>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="py-3 px-8 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Final Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Contact Details */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Step 5: Contact &amp; Verification Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={ownerName}
                      onChange={e => setOwnerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number (For Verification) *</label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit phone number"
                      value={phone}
                      onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Time for Call</label>
                    <select
                      value={bestTimeToCall}
                      onChange={e => setBestTimeToCall(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                    >
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                      <option value="Anytime (9 AM - 8 PM)">Anytime (9 AM - 8 PM)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={e => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded mt-0.5"
                    />
                    <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed">
                      I confirm that I am authorized to list this property and agree to receive verification calls and prospective buyer/tenant leads on my registered number.
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="py-3 px-6 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!agreeTerms}
                    className="py-3.5 px-8 rounded-full bg-amber-400 hover:bg-yellow-400 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                  >
                    <span>Submit Property Listing</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

// 12. OUR REAL ESTATE SERVICES DEDICATED VIEW (/services)
export const SquareYardDealersServicesView: React.FC<ViewProps> = ({ onNavigate }) => {
  const { submitLead } = useApp();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactCity, setContactCity] = useState('Gurgaon');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const SIX_KEY_SERVICES = [
    {
      id: 'home-loan',
      title: 'Home Loan Assistance',
      tagline: 'Competitive Rates & Fast Approvals',
      description: 'Navigating loan sanctions can be complex. We connect you with top public and private lending institutions to secure competitive interest rates with zero processing delays.',
      features: [
        'Partnerships with 20+ leading Indian banks & NBFCs',
        'Pre-approved home loan offers within 48 hours',
        'Doorstep paperwork collection and documentation support',
        'Balance transfer assistance to reduce current EMI burden'
      ],
      iconName: 'IndianRupee',
      popular: true
    },
    {
      id: 'legal-title',
      title: 'Legal Title Verification',
      tagline: 'Protect Your Lifetime Savings',
      description: 'Never sign an agreement without comprehensive title due diligence. Our experienced real estate advocates check ownership records, mutation history, and encumbrance records.',
      features: [
        '30-Year encumbrance certificate (EC) search',
        'Occupancy Certificate (OC) & layout approval verification',
        'RERA registration check and court dispute screening',
        'Drafting of Sale Agreement, GPA & ATS documentation'
      ],
      iconName: 'ShieldCheck',
      popular: true
    },
    {
      id: 'interior-design',
      title: 'Interior Design & Fitout',
      tagline: 'Turn Spaces into Dream Homes',
      description: 'From modular kitchens and custom wardrobes to full turnkey commercial fitouts. Work with certified interior designers who balance aesthetics, durability, and budget.',
      features: [
        'Realistic 3D visualizations before execution',
        'Factory-manufactured modular carpentry with 10-year warranty',
        'Transparent itemized pricing with zero surprise costs',
        'Guaranteed 45-day move-in delivery commitment'
      ],
      iconName: 'Sparkles',
      popular: false
    },
    {
      id: 'property-management',
      title: 'Property Management',
      tagline: 'Peace of Mind for NRIs & Landlords',
      description: 'Complete hands-off property management for outstation owners and NRI landlords. We manage tenant screening, rent collection, physical inspections, and society dues.',
      features: [
        'Police verification & background screening of tenants',
        'Timely rental deposit collection into owner accounts',
        'Quarterly photographic condition inspection reports',
        'Assisted move-in, move-out, and society registration'
      ],
      iconName: 'Home',
      popular: false
    },
    {
      id: 'valuation-inspection',
      title: 'Valuation & Inspection',
      tagline: 'Structural & Financial Assessment',
      description: 'Accurate property valuation based on local registry circle rates and actual micro-market transacted prices, combined with physical structural audits.',
      features: [
        'Civil structural integrity and seepage/dampness audit',
        'Independent certified property valuation report',
        'Circle rate vs market asking price comparative matrix',
        'Assessment of electrical, plumbing, and safety fixtures'
      ],
      iconName: 'TrendingUp',
      popular: false
    },
    {
      id: 'vastu-consultation',
      title: 'Vastu Consultation',
      tagline: 'Harmonious Energy & Layout Guidance',
      description: 'Traditional Vastu Shastra principles blended with modern residential architectural layouts to foster prosperity, positive energy, and peace of mind.',
      features: [
        'Main entrance direction and cosmic compass audit',
        'Kitchen, master bedroom, and puja space alignment',
        'Practical remedial suggestions without structural demolition',
        'Plot and floor plan pre-purchase feasibility analysis'
      ],
      iconName: 'Compass',
      popular: false
    }
  ];

  const handleServiceInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone || !selectedService) return;

    try {
      await submitLead({
        websiteSlug: 'square-yard-dealers',
        businessName: `Service Request: ${selectedService}`,
        customerName: contactName,
        customerPhone: contactPhone.replace(/\D/g, ''),
        customerEmail: '',
        serviceRequested: `Inquiry for ${selectedService} in ${contactCity}`,
        message: `Service inquiry submitted from Square Yard Dealers services portal.`,
        status: 'new'
      });
    } catch {
      // fallback
    }

    setInquirySuccess(true);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
          End-to-End Proptech Solutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Our Real Estate Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
          Comprehensive property services designed to eliminate transaction risk, expedite financing, and ensure smooth real estate ownership across India.
        </p>
      </div>

      {/* Grid of the 6 core services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SIX_KEY_SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 relative"
          >
            {srv.popular && (
              <span className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] uppercase">
                Most Inquired
              </span>
            )}

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold shadow-md">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">{srv.title}</h3>
                <span className="text-xs text-blue-600 font-bold block mt-0.5">{srv.tagline}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {srv.description}
              </p>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  What is included:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {srv.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedService(srv.title);
                setInquirySuccess(false);
              }}
              className="w-full py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Inquiry Form Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
            >
              ✕
            </button>

            {inquirySuccess ? (
              <div className="text-center space-y-3 py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Inquiry Received!</h3>
                <p className="text-xs text-slate-600">
                  Our service coordinator for <strong>{selectedService}</strong> will call you within 2 business hours.
                </p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-2.5 px-6 rounded-full bg-slate-900 text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleServiceInquiry} className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Service Booking</span>
                  <h3 className="text-lg font-black text-slate-900">{selectedService}</h3>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile"
                    value={contactPhone}
                    onChange={e => setContactPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">City</label>
                  <select
                    value={contactCity}
                    onChange={e => setContactCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    {POPULAR_CITIES.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Request Callback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
