import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BusinessWebsite,
  BusinessCategory,
  ItemOrService,
  WebsiteOffer,
  GalleryImage,
  WebsiteStatus,
  BookingPatternType
} from '../../types';
import { TEMPLATES, CATEGORY_INFO } from '../../data/templateDefs';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Plus,
  Trash2,
  Upload,
  Sparkles,
  Smartphone,
  Monitor,
  Eye,
  Save,
  Globe,
  Tag,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  ExternalLink,
  Palette
} from 'lucide-react';
import { DeviceFrame } from '../common/DeviceFrame';
import { SiteRenderer } from '../site/SiteRenderer';
import { ReferenceSite, getCategoryReferences } from '../../data/categories130Data';

export interface BuilderInitialData {
  category?: string;
  referenceSiteId?: string;
  businessName?: string;
  ownerName?: string;
  phone?: string;
  city?: string;
  notes?: string;
}

interface BuilderWizardProps {
  onCancel: () => void;
  onComplete: () => void;
  editSiteId?: string | null;
  initialData?: BuilderInitialData | null;
}

export const BuilderWizard: React.FC<BuilderWizardProps> = ({
  onCancel,
  onComplete,
  editSiteId,
  initialData
}) => {
  const { websites, createWebsite, updateWebsite, categoryReferences } = useApp();

  const existingSite = editSiteId ? websites.find(w => w.id === editSiteId || w.slug === editSiteId) : null;

  // Wizard Step (1 to 6)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State: Step 1 - Business Information
  const [businessName, setBusinessName] = useState(
    existingSite?.businessName || initialData?.businessName || ''
  );
  const [slug, setSlug] = useState(
    existingSite?.slug ||
    (initialData?.businessName
      ? initialData.businessName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : '')
  );
  const [category, setCategory] = useState<BusinessCategory>(
    (existingSite?.category || initialData?.category || 'cafe') as BusinessCategory
  );
  const [tagline, setTagline] = useState(
    existingSite?.tagline ||
    (initialData?.businessName ? `Premier ${initialData?.category || 'Services'} in ${initialData?.city || 'Delhi NCR'}` : '')
  );
  const [description, setDescription] = useState(
    existingSite?.description || initialData?.notes || ''
  );
  const [ownerName, setOwnerName] = useState(
    existingSite?.ownerName || initialData?.ownerName || ''
  );
  const [phone, setPhone] = useState(
    existingSite?.phone || initialData?.phone || '+91 '
  );
  const [whatsapp, setWhatsapp] = useState(
    existingSite?.whatsapp || initialData?.phone || '+91 '
  );
  const [email, setEmail] = useState(existingSite?.email || '');
  const [address, setAddress] = useState(existingSite?.address || '');
  const [city, setCity] = useState(existingSite?.city || initialData?.city || 'Delhi NCR');
  const [mapsUrl, setMapsUrl] = useState(existingSite?.mapsUrl || '');
  const [openingHours, setOpeningHours] = useState(existingSite?.openingHours || 'Mon - Sun: 9:00 AM – 10:00 PM');
  const [instagramUrl, setInstagramUrl] = useState(existingSite?.instagramUrl || '');
  const [facebookUrl, setFacebookUrl] = useState(existingSite?.facebookUrl || '');
  const [logoUrl, setLogoUrl] = useState(existingSite?.logoUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80');
  const [coverUrl, setCoverUrl] = useState(existingSite?.coverUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80');
  const [bookingType, setBookingType] = useState<BookingPatternType>(
    existingSite?.bookingType || CATEGORY_INFO[(existingSite?.category || initialData?.category || 'cafe') as BusinessCategory]?.defaultBooking || 'whatsapp_order'
  );
  const [bookingCtaLabel, setBookingCtaLabel] = useState<string>(
    existingSite?.bookingCtaLabel || CATEGORY_INFO[(existingSite?.category || initialData?.category || 'cafe') as BusinessCategory]?.defaultCta || 'Order on WhatsApp'
  );

  // Step 2 - Reference Website & Design Driver
  const [selectedTemplateId, setSelectedTemplateId] = useState(existingSite?.templateId || 'cafe-modern');
  const [selectedReferenceId, setSelectedReferenceId] = useState<string>(existingSite?.referenceSiteId || '');
  const [referenceSiteName, setReferenceSiteName] = useState<string>(existingSite?.referenceSiteName || '');
  const [referenceSiteUrl, setReferenceSiteUrl] = useState<string>(existingSite?.referenceSiteUrl || '');
  const [referenceFeatures, setReferenceFeatures] = useState<string>(existingSite?.referenceFeatures || '');
  const [designSignature, setDesignSignature] = useState<any>(existingSite?.designSignature || null);
  const [primaryColor, setPrimaryColor] = useState<string>(existingSite?.primaryColor || '#4f46e5');
  const [fontFamily, setFontFamily] = useState<string>(existingSite?.fontFamily || 'Plus Jakarta Sans');
  const [showAllRefsBrowser, setShowAllRefsBrowser] = useState<boolean>(false);

  const handleSelectReference = (ref: ReferenceSite) => {
    setSelectedReferenceId(ref.id);
    setReferenceSiteName(ref.name);
    setReferenceSiteUrl(ref.url);
    setReferenceFeatures(ref.features);
    setDesignSignature(ref.designSignature);
    if (ref.designSignature?.palette?.accentColor) {
      setPrimaryColor(ref.designSignature.palette.accentColor);
    }
    if (ref.designSignature?.typography?.headlineFont) {
      const cleanFont = ref.designSignature.typography.headlineFont.split(',')[0].replace(/['"]/g, '').trim();
      setFontFamily(cleanFont);
    }
    if (ref.designSignature?.bookingStyle) {
      setBookingType(ref.designSignature.bookingStyle);
    }
  };

  // Auto-apply initial reference or category reference if starting fresh with initialData
  useEffect(() => {
    if (!existingSite && initialData) {
      if (initialData.referenceSiteId) {
        for (const cat of categoryReferences) {
          const matched = cat.references.find(r => r.id === initialData.referenceSiteId);
          if (matched) {
            handleSelectReference(matched);
            return;
          }
        }
      } else if (initialData.category) {
        const catItem = categoryReferences.find(
          c => c.id === initialData.category || c.categoryName.toLowerCase() === initialData.category?.toLowerCase()
        );
        if (catItem && catItem.references && catItem.references.length > 0) {
          handleSelectReference(catItem.references[0]);
        }
      }
    }
  }, [initialData, existingSite, categoryReferences]);

  // Step 3 - Content / Items
  const [items, setItems] = useState<ItemOrService[]>(
    existingSite?.items || [
      {
        id: 'item-new-1',
        name: 'Signature Special',
        description: 'Our top recommendation crafted with premium ingredients.',
        price: 250,
        discountPrice: 199,
        category: 'Best Sellers',
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      }
    ]
  );

  // Step 4 - Offers
  const [offers, setOffers] = useState<WebsiteOffer[]>(
    existingSite?.offers || [
      {
        id: 'offer-new-1',
        title: 'Opening Special 20% Off',
        description: 'Enjoy 20% off on your first order this month.',
        discountPercent: 20,
        couponCode: 'WELCOME20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ]
  );

  // Step 5 - Photos & Gallery
  const [gallery, setGallery] = useState<GalleryImage[]>(
    existingSite?.gallery || [
      {
        id: 'gal-1',
        title: 'Main Entrance & Ambiance',
        category: 'exterior',
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
      }
    ]
  );

  // Step 6 - Preview & Publish
  const [previewDeviceMode, setPreviewDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [pricingPlanId, setPricingPlanId] = useState<'starter' | 'professional' | 'premium'>(existingSite?.pricingPlanId || 'professional');
  const [amountPaid, setAmountPaid] = useState<number>(existingSite?.amountPaid || 1499);
  const [paymentStatus, setPaymentStatus] = useState<'paid' | 'pending' | 'unpaid'>(existingSite?.paymentStatus || 'paid');
  const [status, setStatus] = useState<WebsiteStatus>(existingSite?.status || 'draft');

  // Auto generate slug from businessName
  const handleNameChange = (val: string) => {
    setBusinessName(val);
    if (!existingSite) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(generated);
    }
  };

  // Add Item Helper
  const addItem = () => {
    const newItem: ItemOrService = {
      id: `item-${Date.now()}`,
      name: 'New Service / Item',
      description: 'Brief description of the item or service',
      price: 299,
      category: category === 'clinic' ? 'Consultation & Treatment' : category === 'salon' ? 'Hair & Skin' : 'Menu Special',
      isAvailable: true,
      isVeg: true
    };
    setItems([...items, newItem]);
  };

  const updateItem = (index: number, field: keyof ItemOrService, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Add Offer Helper
  const addOffer = () => {
    const newOffer: WebsiteOffer = {
      id: `offer-${Date.now()}`,
      title: 'Special Weekend Discount',
      description: 'Flat 15% off on bookings this weekend',
      discountPercent: 15,
      couponCode: 'WEEKEND15',
      startDate: new Date().toISOString().slice(0, 10),
      endDate: '2026-12-31',
      isActive: true
    };
    setOffers([...offers, newOffer]);
  };

  // Add Gallery Image Helper
  const addGalleryImage = () => {
    const newImg: GalleryImage = {
      id: `img-${Date.now()}`,
      title: 'Interior Ambiance',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    };
    setGallery([...gallery, newImg]);
  };

  // Assembled site object for preview and saving
  const currentSiteObject: BusinessWebsite = {
    id: existingSite ? existingSite.id : slug || `site-${Date.now()}`,
    slug: slug || 'my-business-site',
    businessName: businessName || 'My Business Website',
    category,
    templateId: selectedTemplateId,
    tagline: tagline || 'Welcome to our professional business',
    description: description || 'We provide top-notch quality and service to all our valued customers.',
    ownerName: ownerName || 'Proprietor',
    phone: phone || '+91 98765 43210',
    whatsapp: whatsapp || '+91 98765 43210',
    email: email || 'contact@mybusiness.com',
    address: address || 'Main Road, City, India',
    city: city || 'City',
    mapsUrl: mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(address || businessName)}`,
    openingHours: openingHours || 'Mon - Sun: 9 AM - 9 PM',
    instagramUrl,
    facebookUrl,
    logoUrl,
    coverUrl,
    items,
    offers,
    gallery,
    sections: existingSite?.sections || [
      { id: 'about', title: 'About Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Special Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: category === 'clinic' ? 'Treatments & OPD' : category === 'salon' ? 'Services & Pricing' : 'Menu & Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Hours & Location', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Contact & Bookings', isEnabled: true, order: 6 }
    ],
    status,
    bookingType,
    bookingCtaLabel,
    referenceSiteId: selectedReferenceId,
    referenceSiteName,
    referenceSiteUrl,
    referenceFeatures,
    designSignature,
    primaryColor,
    fontFamily,
    pricingPlanId,
    amountPaid,
    paymentStatus,
    createdAt: existingSite ? existingSite.createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const handleSaveDraft = async () => {
    const draftSite: BusinessWebsite = {
      ...currentSiteObject,
      status: 'draft'
    };
    if (existingSite) {
      await updateWebsite(existingSite.id, draftSite);
    } else {
      await createWebsite(draftSite);
    }
    onComplete();
  };

  const handleSendForApproval = async () => {
    const approvalSite: BusinessWebsite = {
      ...currentSiteObject,
      status: 'pending_approval'
    };
    if (existingSite) {
      await updateWebsite(existingSite.id, approvalSite);
    } else {
      await createWebsite(approvalSite);
    }
    onComplete();
  };

  const handlePublish = async () => {
    const liveSite: BusinessWebsite = {
      ...currentSiteObject,
      status: 'published'
    };
    if (existingSite) {
      await updateWebsite(existingSite.id, liveSite);
    } else {
      await createWebsite(liveSite);
    }
    onComplete();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Wizard Header Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              {existingSite ? `Editing: ${existingSite.businessName}` : 'Create New Business Website'}
            </h2>
            <p className="text-xs text-slate-500">
              Step {currentStep} of 6: {
                currentStep === 1 ? 'Business Information' :
                currentStep === 2 ? 'Choose Template' :
                currentStep === 3 ? 'Business Content & Services' :
                currentStep === 4 ? 'Offers & Discounts' :
                currentStep === 5 ? 'Photos & Gallery' :
                'Preview & Final Publishing'
              }
            </p>
          </div>
        </div>

        {/* Wizard Step Pills for Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6].map(s => (
            <button
              key={s}
              onClick={() => setCurrentStep(s)}
              className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                currentStep === s
                  ? 'bg-indigo-600 text-white shadow-md'
                  : currentStep > s
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
            >
              {currentStep > s ? <Check className="w-4 h-4" /> : s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleSaveDraft}
            className="px-2.5 sm:px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Draft
          </button>
          {currentStep === 6 ? (
            <button
              onClick={handlePublish}
              className="px-3 sm:px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Publish Now
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, 6))}
              className="px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Step Mini-Progress Bar */}
      <div className="lg:hidden bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs text-slate-600 font-medium sticky top-[69px] z-30">
        <span>Step {currentStep} of 6</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5, 6].map(s => (
            <button
              key={s}
              onClick={() => setCurrentStep(s)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentStep === s ? 'w-5 bg-indigo-600' : currentStep > s ? 'w-2 bg-emerald-500' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to step ${s}`}
            />
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-8">
        {/* STEP 1: BUSINESS INFO */}
        {currentStep === 1 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Step 1: Business Information</h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter your client's core business identity, contact details, and location.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Chai & Samosa Hub"
                  value={businessName}
                  onChange={e => handleNameChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Website URL Slug * (raositez.in/slug)
                </label>
                <input
                  type="text"
                  required
                  placeholder="royal-chai-hub"
                  value={slug}
                  onChange={e => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                  className="w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Category *
                </label>
                <select
                  value={category}
                  onChange={e => {
                    const newCat = e.target.value as BusinessCategory;
                    setCategory(newCat);
                    if (CATEGORY_INFO[newCat]) {
                      setBookingType(CATEGORY_INFO[newCat].defaultBooking);
                      setBookingCtaLabel(CATEGORY_INFO[newCat].defaultCta);
                    }
                  }}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  {Object.entries(CATEGORY_INFO).map(([key, info]) => (
                    <option key={key} value={key}>
                      {info.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Owner / Doctor / Proprietor Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amit Rao"
                  value={ownerName}
                  onChange={e => setOwnerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Catchy Tagline / Short Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Authentic Wood-Fired Pizzas & Artisanal Single-Origin Coffee"
                  value={tagline}
                  onChange={e => setTagline(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  About Business / Full Story Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell customers about your journey, hygiene standards, specialization, and why they should choose you..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Call Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Number * (For Direct Orders & Leads)
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Physical Address
                </label>
                <input
                  type="text"
                  placeholder="Shop No. 12, Market Square, Sector 15, Gurugram, Haryana"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City / State
                </label>
                <input
                  type="text"
                  placeholder="Gurugram"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Timings / OPD Hours
                </label>
                <input
                  type="text"
                  placeholder="Mon - Sat: 9:00 AM - 9:00 PM | Sun Closed"
                  value={openingHours}
                  onChange={e => setOpeningHours(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Logo Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={logoUrl}
                  onChange={e => setLogoUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Hero Cover Photo URL
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={coverUrl}
                  onChange={e => setCoverUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: CHOOSE REFERENCE WEBSITE & DESIGN SIGNATURE */}
        {currentStep === 2 && (() => {
          const currentCatRefs = categoryReferences.find(c => c.id === category) || getCategoryReferences(category);
          const references = currentCatRefs?.references || [];

          return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Reference-Driven Design Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Step 2: Choose Reference Website
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                    Select one of the 3 researched reference websites for{' '}
                    <strong className="text-slate-800">{currentCatRefs?.categoryName || category}</strong>. The generated site reproduces its distinctive typography, color palette, hero layout, and conversion structure.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllRefsBrowser(!showAllRefsBrowser)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 transition-colors cursor-pointer self-start sm:self-auto shrink-0"
                >
                  {showAllRefsBrowser ? 'Show Recommended' : 'Browse All 130 Categories'}
                </button>
              </div>

              {/* 3 Reference Sites Cards */}
              {!showAllRefsBrowser && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Verified Reference Websites for {currentCatRefs?.categoryName || category}:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {references.map((ref, idx) => {
                      const isSelected = selectedReferenceId === ref.id;

                      return (
                        <div
                          key={ref.id}
                          onClick={() => handleSelectReference(ref)}
                          className={`rounded-2xl border-2 p-5 cursor-pointer transition-all flex flex-col justify-between relative ${
                            isSelected
                              ? 'border-indigo-600 ring-4 ring-indigo-50 shadow-lg bg-indigo-50/20'
                              : 'border-slate-200 hover:border-slate-300 shadow-sm bg-white'
                          }`}
                        >
                          <div>
                            {/* Card Top: Number badge & External Link */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                                #{idx + 1}
                              </span>

                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
                              >
                                <span>Visit Original</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>

                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-extrabold text-slate-900 text-base">
                                {ref.name}
                              </h4>
                              {isSelected && (
                                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                                  <Check className="w-3.5 h-3.5" />
                                </span>
                              )}
                            </div>

                            <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 mb-3">
                              {ref.designSignature.vibeTag}
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                              {ref.features}
                            </p>
                          </div>

                          {/* Signature Design Specs */}
                          <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px]">
                            {/* Palette Preview */}
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Palette:</span>
                              <div className="flex items-center gap-1.5">
                                <span
                                  className="w-4 h-4 rounded-full border border-black/10 inline-block shadow-xs"
                                  style={{ backgroundColor: ref.designSignature.palette.baseBg }}
                                  title={`Base: ${ref.designSignature.palette.baseBg}`}
                                />
                                <span
                                  className="w-4 h-4 rounded-full border border-black/10 inline-block shadow-xs"
                                  style={{ backgroundColor: ref.designSignature.palette.accentColor }}
                                  title={`Accent: ${ref.designSignature.palette.accentColor}`}
                                />
                                <span
                                  className="w-4 h-4 rounded-full border border-black/10 inline-block shadow-xs"
                                  style={{ backgroundColor: ref.designSignature.palette.secondaryAccent }}
                                  title={`Secondary: ${ref.designSignature.palette.secondaryAccent}`}
                                />
                              </div>
                            </div>

                            {/* Typography */}
                            <div className="flex items-center justify-between font-mono">
                              <span className="text-slate-400">Typography:</span>
                              <span className="font-semibold text-slate-700">
                                {ref.designSignature.typography.fontPairingLabel}
                              </span>
                            </div>

                            {/* Layout Archetype */}
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Hero Layout:</span>
                              <span className="capitalize px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[10px]">
                                {ref.designSignature.heroArchetype.replace('-', ' ')}
                              </span>
                            </div>

                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => handleSelectReference(ref)}
                                className={`w-full py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700'
                                }`}
                              >
                                {isSelected ? '✓ Design Driver Active' : 'Select This Reference'}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Cross-Category Browser (when toggled) */}
              {showAllRefsBrowser && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-medium">
                    Pick a reference design from any of the 130 categories to adapt to this website:
                  </div>

                  <div className="max-h-96 overflow-y-auto space-y-4 pr-1">
                    {categoryReferences.map(c => (
                      <div key={c.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-xs text-slate-900">{c.categoryName}</h4>
                          <span className="text-[10px] uppercase font-bold text-slate-400">{c.group}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {c.references.map(r => (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => {
                                handleSelectReference(r);
                                setShowAllRefsBrowser(false);
                              }}
                              className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                                selectedReferenceId === r.id
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold'
                                  : 'border-slate-200 bg-white hover:border-indigo-300'
                              }`}
                            >
                              <div className="font-semibold truncate">{r.name}</div>
                              <div className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">{r.url}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* STEP 3: BUSINESS CONTENT & ITEMS */}
        {currentStep === 3 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Step 3: {category === 'clinic' ? 'Doctor Profiles & Treatments' : category === 'salon' ? 'Services & Rate Card' : 'Products & Menu Items'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Add items with prices in Indian Rupees (₹), discounts, descriptions, and category tags.
                </p>
              </div>

              <button
                onClick={addItem}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                Add Item / Service
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      #{idx + 1}
                    </span>
                    <button
                      onClick={() => removeItem(idx)}
                      className="text-rose-500 hover:text-rose-700 text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Name / Title
                      </label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={e => updateItem(idx, 'name', e.target.value)}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Category Tab
                      </label>
                      <input
                        type="text"
                        value={item.category}
                        onChange={e => updateItem(idx, 'category', e.target.value)}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Price (₹)
                        </label>
                        <input
                          type="number"
                          value={item.price}
                          onChange={e => updateItem(idx, 'price', Number(e.target.value))}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Discount (₹)
                        </label>
                        <input
                          type="number"
                          placeholder="Optional"
                          value={item.discountPrice || ''}
                          onChange={e => updateItem(idx, 'discountPrice', e.target.value ? Number(e.target.value) : undefined)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Category Specific fields */}
                  {(category === 'clinic' || category === 'vet_clinic' || category === 'physiotherapy' || category === 'pathology_lab') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Doctor / Specialist Qualifications & Reg.
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. MBBS, MD / BVSc / BPT / NABL Accredited"
                          value={item.doctorQualification || ''}
                          onChange={e => updateItem(idx, 'doctorQualification', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Experience / Turnaround Time
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 14+ Yrs Exp / 6-Hour Digital Report"
                          value={item.doctorExperience || ''}
                          onChange={e => updateItem(idx, 'doctorExperience', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          OPD Timings / Sample Collection Hours
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mon-Sat: 8:00 AM – 7:00 PM"
                          value={item.doctorOpdTimings || ''}
                          onChange={e => updateItem(idx, 'doctorOpdTimings', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {(category === 'ca_tax' || category === 'lawyer' || category === 'notary_legal' || category === 'insurance_agent' || category === 'loan_dsa') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Registration / Bar Council / IRDAI No.
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ICAI Fellow / Bar Council D/1244 / IRDAI 8943"
                          value={item.registrationNo || ''}
                          onChange={e => updateItem(idx, 'registrationNo', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Experience / Practice Jurisdiction
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 15+ Yrs / High Court & NCLT / Pan-India"
                          value={item.doctorExperience || ''}
                          onChange={e => updateItem(idx, 'doctorExperience', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Filing / Turnaround Time
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Same-Day Draft / 24-48 Hours"
                          value={item.turnaroundTime || ''}
                          onChange={e => updateItem(idx, 'turnaroundTime', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {(category === 'interior_design' || category === 'architect' || category === 'solar_installer' || category === 'painting_contractor') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Design Style / Specifications
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Minimalist Contemporary / 3kW Mono PERC / Asian Paints Royale"
                          value={item.specifications || ''}
                          onChange={e => updateItem(idx, 'specifications', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Project Turnaround / 3D Renders
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 48hr 3D Walkthrough / 25-Day Handover"
                          value={item.turnaroundTime || ''}
                          onChange={e => updateItem(idx, 'turnaroundTime', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Billing Unit / Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. per sq ft / per kW / complete turnkey"
                          value={item.unit || ''}
                          onChange={e => updateItem(idx, 'unit', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {(category === 'banquet_hall' || category === 'cold_storage_warehouse') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Guest / Pallet Capacity
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 200 - 1,200 Floating Guests / 500 Pallets"
                          value={item.capacityDetails || ''}
                          onChange={e => updateItem(idx, 'capacityDetails', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Amenities / Temp Range
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. AC Centralized + Bridal Suite / -20°C to +4°C"
                          value={item.specifications || ''}
                          onChange={e => updateItem(idx, 'specifications', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Pricing Rate Unit
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. per plate / per day hall rental / per pallet/month"
                          value={item.unit || ''}
                          onChange={e => updateItem(idx, 'unit', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {(category === 'ac_repair' || category === 'cctv_security' || category === 'ro_water_purifier' || category === 'pest_control' || category === 'packers_movers' || category === 'courier_delivery' || category === 'auto_garage' || category === 'cycle_repair' || category === 'vehicle_scrapping') && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Service Guarantee & Warranty
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 90-Day Service Guarantee / 1-Yr Membrane Warranty"
                          value={item.specifications || ''}
                          onChange={e => updateItem(idx, 'specifications', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Turnaround / Arrival Time
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 60-Min Doorstep Arrival / Same Day Service"
                          value={item.turnaroundTime || ''}
                          onChange={e => updateItem(idx, 'turnaroundTime', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Unit / Model Scope
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Split & Window ACs / 4-Camera Kit / per visit"
                          value={item.unit || ''}
                          onChange={e => updateItem(idx, 'unit', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {(category === 'salon' || category === 'bridal_makeup') && (
                    <div className="pt-1">
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Service Duration & Inclusions
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 45 Mins / HD Makeup + Hair Styling + Draping"
                        value={item.duration || ''}
                        onChange={e => updateItem(idx, 'duration', e.target.value)}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                      />
                    </div>
                  )}

                  {(category === 'jewellery_shop' || category === 'optical_shop' || category === 'home_baker' || category === 'arts_academy' || category === 'dance_fitness' || category === 'preschool_daycare') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Special Features / Highlights
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. BIS 916 Hallmarked / Blue-Cut Anti-Glare / 100% Eggless / Beginner to Advanced"
                          value={item.specifications || ''}
                          onChange={e => updateItem(idx, 'specifications', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Unit / Batch Timings / Advance Notice
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. per gram / per frame / 24hr notice / Mon-Wed-Fri batch"
                          value={item.unit || ''}
                          onChange={e => updateItem(idx, 'unit', e.target.value)}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Description / Ingredients / Highlights
                    </label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={e => updateItem(idx, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Item Photo URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={item.imageUrl || ''}
                      onChange={e => updateItem(idx, 'imageUrl', e.target.value)}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: OFFERS & DISCOUNTS */}
        {currentStep === 4 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 4: Offers and Discounts</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Create promotional discounts such as 20% off, BOGO, happy hours, or festival waivers.
                </p>
              </div>
              <button
                onClick={addOffer}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Offer
              </button>
            </div>

            <div className="space-y-4">
              {offers.map((offer, idx) => (
                <div key={offer.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-700">Offer #{idx + 1}</span>
                    <button
                      onClick={() => setOffers(offers.filter((_, i) => i !== idx))}
                      className="text-rose-500 hover:text-rose-700 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Offer Headline
                      </label>
                      <input
                        type="text"
                        value={offer.title}
                        onChange={e => {
                          const updated = [...offers];
                          updated[idx].title = e.target.value;
                          setOffers(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Optional Promo Code
                      </label>
                      <input
                        type="text"
                        value={offer.couponCode || ''}
                        onChange={e => {
                          const updated = [...offers];
                          updated[idx].couponCode = e.target.value.toUpperCase();
                          setOffers(updated);
                        }}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Offer Description & Terms
                    </label>
                    <input
                      type="text"
                      value={offer.description}
                      onChange={e => {
                        const updated = [...offers];
                        updated[idx].description = e.target.value;
                        setOffers(updated);
                      }}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: PHOTOS & GALLERY */}
        {currentStep === 5 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 5: Photos & Gallery</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Add photos for shop exterior, interior, food, facilities, and staff.
                </p>
              </div>
              <button
                onClick={addGalleryImage}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Photo
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((img, idx) => (
                <div key={img.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="h-32 rounded-xl overflow-hidden bg-slate-200">
                    <img src={img.imageUrl} alt={img.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Caption / Area Title"
                      value={img.title || ''}
                      onChange={e => {
                        const updated = [...gallery];
                        updated[idx].title = e.target.value;
                        setGallery(updated);
                      }}
                      className="w-full px-2.5 py-1 text-xs rounded-md border border-slate-200 bg-white mb-1.5"
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={img.imageUrl}
                      onChange={e => {
                        const updated = [...gallery];
                        updated[idx].imageUrl = e.target.value;
                        setGallery(updated);
                      }}
                      className="w-full px-2.5 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-600"
                    />
                  </div>
                  <button
                    onClick={() => setGallery(gallery.filter((_, i) => i !== idx))}
                    className="w-full py-1 text-rose-600 text-[11px] font-semibold hover:bg-rose-50 rounded-md transition-colors"
                  >
                    Delete Photo
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: PREVIEW & PUBLISH */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  Step 6: Review & Approval
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Inspect Website Before Going Live
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Target URL: <span className="font-mono text-indigo-600 font-bold">raositez.in/{slug}</span>
                </p>
              </div>

              {/* Status and Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleSaveDraft}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Save as Draft
                </button>
                <button
                  onClick={handleSendForApproval}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-amber-950 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Send for Customer Approval
                </button>
                <button
                  onClick={handlePublish}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Globe className="w-4 h-4" />
                  Publish Website Live
                </button>
              </div>
            </div>

            {/* Billing & Package configuration */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Package Plan
                </label>
                <select
                  value={pricingPlanId}
                  onChange={e => setPricingPlanId(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white"
                >
                  <option value="starter">Starter Plan (₹999)</option>
                  <option value="professional">Professional Plan (₹1,499)</option>
                  <option value="premium">Premium Plan (₹1,999)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Fee Charged (₹)
                </label>
                <input
                  type="number"
                  value={amountPaid}
                  onChange={e => setAmountPaid(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Payment Status
                </label>
                <select
                  value={paymentStatus}
                  onChange={e => setPaymentStatus(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white"
                >
                  <option value="paid">Paid (₹{amountPaid})</option>
                  <option value="pending">Pending Payment</option>
                  <option value="unpaid">Unpaid / In Negotiation</option>
                </select>
              </div>
            </div>

            {/* Live Interactive Preview Device Frame */}
            <div className="h-[750px]">
              <DeviceFrame
                mode={previewDeviceMode}
                onModeChange={setPreviewDeviceMode}
                siteSlug={slug}
                businessName={businessName}
              >
                <SiteRenderer site={currentSiteObject} isPreview />
              </DeviceFrame>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
