import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Upload,
  Plus,
  Trash2,
  Smartphone,
  Monitor,
  Camera,
  Layers,
  Store,
  Utensils,
  Scissors,
  Stethoscope,
  Dumbbell,
  Building,
  GraduationCap,
  Briefcase,
  AlertCircle,
  Eye,
  CheckCircle2,
  X,
  RefreshCw,
  Share2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessCategory, BusinessWebsite, ItemOrService, GalleryImage } from '../../types';
import { CATEGORY_INFO, TEMPLATES } from '../../data/templateDefs';
import { DeviceFrame } from '../common/DeviceFrame';
import { SiteRenderer } from '../site/SiteRenderer';

interface MobileWizardProps {
  onCancel: () => void;
  onComplete: (site: BusinessWebsite) => void;
  initialSite?: Partial<BusinessWebsite> | null;
}

const STORAGE_KEY_WIZARD = 'raositez_wizard_draft_v1';

export const MobileWizard: React.FC<MobileWizardProps> = ({
  onCancel,
  onComplete,
  initialSite
}) => {
  const { createWebsite, updateWebsite } = useApp();

  // Step 1 to 7
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [generationStatus, setGenerationStatus] = useState<string>('Analyzing business details...');

  // Form states with initial fallback or localStorage
  const [category, setCategory] = useState<BusinessCategory>(
    initialSite?.category || 'cafe'
  );
  const [businessName, setBusinessName] = useState<string>(
    initialSite?.businessName || ''
  );
  const [description, setDescription] = useState<string>(
    initialSite?.description || ''
  );
  const [tagline, setTagline] = useState<string>(
    initialSite?.tagline || ''
  );
  const [address, setAddress] = useState<string>(
    initialSite?.address || ''
  );
  const [city, setCity] = useState<string>(
    initialSite?.city || 'Delhi NCR'
  );
  const [phone, setPhone] = useState<string>(
    initialSite?.phone || '+91 '
  );
  const [whatsapp, setWhatsapp] = useState<string>(
    initialSite?.whatsapp || '+91 '
  );
  const [email, setEmail] = useState<string>(
    initialSite?.email || ''
  );
  const [openingHours, setOpeningHours] = useState<string>(
    initialSite?.openingHours || 'Mon - Sun: 9:00 AM – 9:00 PM'
  );
  const [instagramUrl, setInstagramUrl] = useState<string>(
    initialSite?.instagramUrl || ''
  );
  const [facebookUrl, setFacebookUrl] = useState<string>(
    initialSite?.facebookUrl || ''
  );

  // Step 3 - Products & Services
  const [items, setItems] = useState<ItemOrService[]>(
    initialSite?.items || [
      {
        id: 'item-1',
        name: 'Signature Product / Service',
        description: 'Our top popular offering crafted for maximum satisfaction.',
        price: 299,
        category: 'Best Sellers',
        isAvailable: true,
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80'
      }
    ]
  );
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');

  // Step 4 - Photos & Logo
  const [logoUrl, setLogoUrl] = useState<string>(
    initialSite?.logoUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80'
  );
  const [coverUrl, setCoverUrl] = useState<string>(
    initialSite?.coverUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80'
  );
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>(
    initialSite?.gallery?.map(g => g.imageUrl).filter(Boolean) || [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    ]
  );

  // Step 5 - Selected Template
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    initialSite?.templateId || 'modern'
  );

  // Step 7 - Preview Mode
  const [previewDeviceMode, setPreviewDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('mobile');

  // File input refs for mobile camera/gallery
  const logoInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  // Primary categories for Step 1
  const categoryCards: Array<{
    id: BusinessCategory;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    desc: string;
    sampleDefaultItem: string;
  }> = [
    { id: 'cafe', title: 'Cafe & Bakery', icon: Utensils, desc: 'Coffee, desserts, snacks & tables', sampleDefaultItem: 'Artisan Cold Brew' },
    { id: 'restaurant', title: 'Restaurant & Bar', icon: Utensils, desc: 'Dine-in menu, party bookings & platters', sampleDefaultItem: 'Tandoori Platter' },
    { id: 'salon', title: 'Salon & Spa', icon: Scissors, desc: 'Hair, beauty, facials & bridal styling', sampleDefaultItem: 'Hydra Glow Facial' },
    { id: 'clinic', title: 'Clinic & Doctor', icon: Stethoscope, desc: 'Appointments, OPD consults & health tests', sampleDefaultItem: 'Consultation & Checkup' },
    { id: 'retail', title: 'Shop & Retail', icon: Store, desc: 'Products, catalog, discounts & store pickup', sampleDefaultItem: 'Premium Collection Pack' },
    { id: 'gym', title: 'Gym & Fitness', icon: Dumbbell, desc: 'Memberships, personal trainers & classes', sampleDefaultItem: 'Monthly Pro Membership' },
    { id: 'hotel', title: 'Hotel & Stays', icon: Building, desc: 'Rooms, amenities, reservations & banquet', sampleDefaultItem: 'Deluxe Executive Suite' },
    { id: 'coaching', title: 'Coaching & Tuition', icon: GraduationCap, desc: 'Courses, batches, test series & faculty', sampleDefaultItem: 'Complete Foundation Course' },
    { id: 'services', title: 'Other Businesses', icon: Briefcase, desc: 'Repair, trades, agency & consultation', sampleDefaultItem: 'Standard Service Package' }
  ];

  // Auto-fill defaults when category changes
  const handleSelectCategory = (cat: BusinessCategory) => {
    setCategory(cat);
    const meta = CATEGORY_INFO[cat];
    if (meta && !businessName) {
      setTagline(`Quality ${meta.label} Services & Products`);
    }
  };

  // Image Upload Handler (reads base64 for immediate mobile preview without server dependency)
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'logo' | 'cover' | 'gallery'
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (type === 'logo') {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = ev => {
        if (ev.target?.result) setLogoUrl(ev.target.result as string);
      };
      reader.readAsDataURL(file);
    } else if (type === 'cover') {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = ev => {
        if (ev.target?.result) setCoverUrl(ev.target.result as string);
      };
      reader.readAsDataURL(file);
    } else if (type === 'gallery') {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = ev => {
          if (ev.target?.result) {
            setGalleryPhotos(prev => [...prev, ev.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Step Validation
  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!category) errs.category = 'Please select a business category to continue.';
    }

    if (step === 2) {
      if (!businessName.trim()) {
        errs.businessName = 'Business name is required.';
      }
      if (!phone.trim() || phone.trim() === '+91') {
        errs.phone = 'Phone number is required for customer calls.';
      }
      if (!address.trim()) {
        errs.address = 'Address helps local customers locate your shop.';
      }
    }

    if (step === 3) {
      if (items.length === 0) {
        errs.items = 'Please add at least one product, service, or menu item.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      // Scroll to first invalid field
      const firstError = document.querySelector('.form-error-marker');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (currentStep === 5) {
      // Transition to Step 6 (AI Generation Simulation)
      setCurrentStep(6);
      startGeneration();
      return;
    }

    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onCancel();
    }
  };

  // Step 6: Instant Generation Simulation
  const startGeneration = () => {
    setIsGenerating(true);
    setGenerationProgress(15);
    setGenerationStatus(`Tailoring layout for ${category.toUpperCase()} trade...`);

    setTimeout(() => {
      setGenerationProgress(45);
      setGenerationStatus('Synthesizing direct WhatsApp booking button & menu...');
    }, 700);

    setTimeout(() => {
      setGenerationProgress(75);
      setGenerationStatus('Generating mobile-optimized catalog & SEO schema...');
    }, 1400);

    setTimeout(() => {
      setGenerationProgress(100);
      setGenerationStatus('Website ready! Loading live preview...');
      setTimeout(() => {
        setIsGenerating(false);
        setCurrentStep(7);
      }, 500);
    }, 2100);
  };

  // Compile final BusinessWebsite object
  const compiledSite: BusinessWebsite = {
    id: initialSite?.id || `site-user-${Date.now()}`,
    slug:
      initialSite?.slug ||
      businessName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') ||
      'my-business-site',
    businessName: businessName || 'My Business',
    category,
    templateId: selectedTemplateId,
    tagline: tagline || 'Quality Products & Services for You',
    description: description || 'Welcome to our official business website. Browse our products and contact us directly.',
    ownerName: initialSite?.ownerName || 'Business Owner',
    phone: phone || '+91 98765 43210',
    whatsapp: whatsapp || phone || '+91 98765 43210',
    email: email || 'contact@mybusiness.in',
    address: address || 'Main Market Road, City Center',
    city: city || 'Local Area',
    mapsUrl: initialSite?.mapsUrl || 'https://maps.google.com',
    openingHours: openingHours || 'Mon - Sun: 9:00 AM – 9:00 PM',
    instagramUrl,
    facebookUrl,
    logoUrl,
    coverUrl,
    primaryColor: initialSite?.primaryColor || '#4338CA',
    secondaryColor: initialSite?.secondaryColor || '#FF6B4A',
    fontFamily: initialSite?.fontFamily || 'Inter',
    bookingType: initialSite?.bookingType || CATEGORY_INFO[category]?.defaultBooking || 'whatsapp_order',
    bookingCtaLabel: initialSite?.bookingCtaLabel || CATEGORY_INFO[category]?.defaultCta || 'Order on WhatsApp',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 999,
    paymentStatus: 'paid',
    createdAt: initialSite?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: [
      { id: 'about', title: 'About Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Special Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Products & Services', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Photo Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Hours & Location', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Contact & Booking', isEnabled: true, order: 6 }
    ],
    items: items.length > 0 ? items : [
      {
        id: 'item-1',
        name: 'Special Offering',
        price: 250,
        description: 'Quality assured service.',
        isAvailable: true,
        category: 'Services'
      }
    ],
    offers: initialSite?.offers || [
      {
        id: 'off-1',
        title: 'Special 10% Inaugural Discount',
        description: 'Mention RaoSitez website to get 10% off on your bill.',
        discountPercent: 10,
        couponCode: 'RAO10',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    gallery: galleryPhotos.map((url, idx) => ({
      id: `gal-${idx + 1}`,
      title: `Store Photo ${idx + 1}`,
      category: 'interior',
      imageUrl: url
    }))
  };

  const handleFinishPublish = async () => {
    if (initialSite?.id) {
      await updateWebsite(compiledSite.id, compiledSite);
    } else {
      await createWebsite(compiledSite);
    }
    onComplete(compiledSite);
  };

  const addItem = () => {
    if (!newItemName.trim()) return;
    const item: ItemOrService = {
      id: `item-${Date.now()}`,
      name: newItemName.trim(),
      price: parseFloat(newItemPrice) || 199,
      description: newItemDesc.trim() || 'Premium item freshly prepared on order.',
      category: 'Specialties',
      isAvailable: true,
      imageUrl: coverUrl
    };
    setItems(prev => [item, ...prev]);
    setNewItemName('');
    setNewItemPrice('');
    setNewItemDesc('');
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] flex flex-col font-['Inter'] antialiased">
      {/* Top Header - Compact with RaoSitez branding & progress */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8E7F0] px-4 py-3 sm:px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-600 hover:text-slate-900 active:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4338CA]">
              Website Creation Wizard
            </span>
            <h1 className="text-sm sm:text-base font-extrabold text-[#14162B]">
              Step {currentStep} of 7
            </h1>
          </div>

          <button
            onClick={onCancel}
            className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-xs font-semibold text-slate-400 hover:text-slate-600 active:bg-slate-100 rounded-xl cursor-pointer"
            aria-label="Exit wizard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 7-Step Visual Progress Bar */}
        <div className="max-w-3xl mx-auto mt-2 grid grid-cols-7 gap-1">
          {[1, 2, 3, 4, 5, 6, 7].map(step => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step <= currentStep ? 'bg-[#4338CA]' : 'bg-[#E8E7F0]'
              }`}
            />
          ))}
        </div>
      </header>

      {/* Main Form Body */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-6 pb-28">
        {/* STEP 1: BUSINESS CATEGORY */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-reveal">
            <div>
              <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wide">
                Step 1 · Category
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
                What type of business do you run?
              </h2>
              <p className="text-xs sm:text-sm text-[#51556E] mt-1">
                Select your business type. We will pre-configure suitable fonts, color palettes, and WhatsApp ordering workflows for you.
              </p>
            </div>

            {errors.category && (
              <div className="form-error-marker p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.category}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {categoryCards.map(cat => {
                const Icon = cat.icon;
                const isSelected = category === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`min-h-[88px] p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#4338CA] shadow-md shadow-[#4338CA]/10 ring-2 ring-[#4338CA]'
                        : 'bg-white border-[#E8E7F0] hover:border-slate-300 active:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#4338CA] text-white shadow-xs'
                          : 'bg-[#FAFAF8] text-slate-700 border border-[#E8E7F0]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#14162B] truncate">
                          {cat.title}
                        </span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-[#4338CA] text-white flex items-center justify-center text-[10px]">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#636882] line-clamp-2 mt-0.5 leading-snug">
                        {cat.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: BUSINESS INFORMATION */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-reveal">
            <div>
              <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wide">
                Step 2 · Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
                Tell us about your business
              </h2>
              <p className="text-xs sm:text-sm text-[#51556E] mt-1">
                These contact details and address will appear directly on your website and Google Maps directions.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E7F0] shadow-xs space-y-4">
              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold text-[#14162B] mb-1">
                  Business Name <span className="text-[#FF6B4A]">*</span>
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                  placeholder="e.g. Royal Chai & Bakery, Dr. Sharma Clinic"
                  className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                />
                {errors.businessName && (
                  <p className="form-error-marker text-xs font-medium text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.businessName}
                  </p>
                )}
              </div>

              {/* Tagline */}
              <div>
                <label className="block text-xs font-bold text-[#14162B] mb-1">
                  Tagline / Catchphrase <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={e => setTagline(e.target.value)}
                  placeholder="e.g. Freshly brewed coffee & authentic sourdough since 2018"
                  className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-[#14162B] mb-1">
                  Business Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Briefly describe what makes your store or service special..."
                  className="w-full p-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                />
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#14162B] mb-1">
                    Phone Number <span className="text-[#FF6B4A]">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                  />
                  {errors.phone && (
                    <p className="form-error-marker text-xs font-medium text-rose-600 mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14162B] mb-1">
                    WhatsApp Number <span className="text-[#4338CA] font-medium">(for direct orders)</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                  />
                </div>
              </div>

              {/* Address & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#14162B] mb-1">
                    Full Address <span className="text-[#FF6B4A]">*</span>
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Shop No. 12, Main Market Road"
                    className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                  />
                  {errors.address && (
                    <p className="form-error-marker text-xs font-medium text-rose-600 mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14162B] mb-1">
                    City & State
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="e.g. Delhi NCR, Bangalore, Mumbai"
                    className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                  />
                </div>
              </div>

              {/* Opening Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#14162B] mb-1">
                    Opening Hours
                  </label>
                  <input
                    type="text"
                    value={openingHours}
                    onChange={e => setOpeningHours(e.target.value)}
                    placeholder="Mon - Sun: 9:00 AM – 10:00 PM"
                    className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14162B] mb-1">
                    Email Address <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="contact@business.in"
                    className="w-full min-h-[46px] px-3.5 text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#4338CA] outline-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: PRODUCTS, MENU OR SERVICES */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-reveal">
            <div>
              <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wide">
                Step 3 · Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
                Products, menu items & services
              </h2>
              <p className="text-xs sm:text-sm text-[#51556E] mt-1">
                Add what you offer with prices. Customers can tap any item to order directly to your WhatsApp.
              </p>
            </div>

            {/* Quick Add Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E7F0] shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#14162B] block">Add New Item</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  value={newItemName}
                  onChange={e => setNewItemName(e.target.value)}
                  placeholder="Item Name (e.g. Masala Dosa)"
                  className="sm:col-span-2 min-h-[44px] px-3 text-xs sm:text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white outline-hidden"
                />
                <input
                  type="number"
                  inputMode="decimal"
                  value={newItemPrice}
                  onChange={e => setNewItemPrice(e.target.value)}
                  placeholder="Price ₹"
                  className="min-h-[44px] px-3 text-xs sm:text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white outline-hidden"
                />
              </div>
              <input
                type="text"
                value={newItemDesc}
                onChange={e => setNewItemDesc(e.target.value)}
                placeholder="Short description (e.g. Crispy with fresh coconut chutney)"
                className="w-full min-h-[44px] px-3 text-xs sm:text-sm bg-[#FAFAF8] border border-slate-300 rounded-xl focus:bg-white outline-hidden"
              />
              <button
                type="button"
                onClick={addItem}
                className="w-full min-h-[44px] py-2.5 bg-[#4338CA] hover:bg-[#372ea8] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add to Website List
              </button>
            </div>

            {/* Current Items List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 block">
                Your Items ({items.length})
              </span>
              {items.map(item => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#E8E7F0] flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#14162B] truncate">{item.name}</span>
                      <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        ₹{item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.description}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="min-h-[38px] min-w-[38px] p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: UPLOAD PHOTOS AND LOGO */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-reveal">
            <div>
              <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wide">
                Step 4 · Visuals
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
                Upload shop photos & logo
              </h2>
              <p className="text-xs sm:text-sm text-[#51556E] mt-1">
                Upload photos using your phone gallery or take a picture right now. You can also change these later.
              </p>
            </div>

            {/* Hidden native file inputs */}
            <input
              type="file"
              accept="image/*"
              ref={logoInputRef}
              onChange={e => handleFileUpload(e, 'logo')}
              className="hidden"
            />
            <input
              type="file"
              accept="image/*"
              ref={coverInputRef}
              onChange={e => handleFileUpload(e, 'cover')}
              className="hidden"
            />
            <input
              type="file"
              accept="image/*"
              multiple
              ref={galleryInputRef}
              onChange={e => handleFileUpload(e, 'gallery')}
              className="hidden"
            />

            {/* Logo and Cover Banner Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Logo Box */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8E7F0] space-y-3">
                <span className="text-xs font-bold text-[#14162B] block">Business Logo</span>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                    <img src={logoUrl} alt="Logo preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => logoInputRef.current?.click()}
                      className="min-h-[44px] px-3.5 py-2 bg-[#14162B] hover:bg-[#4338CA] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Camera className="w-4 h-4" />
                      Choose Logo
                    </button>
                    <p className="text-[10px] text-slate-400 mt-1">Square image (PNG or JPG)</p>
                  </div>
                </div>
              </div>

              {/* Cover Banner Box */}
              <div className="bg-white p-4 rounded-2xl border border-[#E8E7F0] space-y-3">
                <span className="text-xs font-bold text-[#14162B] block">Hero Cover Photo</span>
                <div className="relative h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={coverUrl} alt="Cover preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => coverInputRef.current?.click()}
                    className="absolute bottom-2 right-2 px-2.5 py-1.5 bg-black/75 hover:bg-black text-white text-[11px] font-bold rounded-lg backdrop-blur-md cursor-pointer flex items-center gap-1"
                  >
                    <Upload className="w-3 h-3" />
                    Replace
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Upload section */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E7F0] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#14162B] block">Gallery Photos</span>
                  <p className="text-[11px] text-slate-500">Showcase storefront, interior, food, or work samples.</p>
                </div>
                <button
                  type="button"
                  onClick={() => galleryInputRef.current?.click()}
                  className="min-h-[40px] px-3 py-1.5 bg-[#4338CA] hover:bg-[#372ea8] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Photos
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2">
                {galleryPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 group"
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setGalleryPhotos(prev => prev.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 p-1 bg-rose-600 text-white rounded-md opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: SELECT TEMPLATE */}
        {currentStep === 5 && (
          <div className="space-y-5 animate-reveal">
            <div>
              <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wide">
                Step 5 · Style & Layout
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
                Select your website template
              </h2>
              <p className="text-xs sm:text-sm text-[#51556E] mt-1">
                Choose a visual vibe for your business. Each design is 100% responsive on all mobile phones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {TEMPLATES.map(tpl => {
                const isSelected = selectedTemplateId === tpl.id;
                return (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => setSelectedTemplateId(tpl.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-white border-[#4338CA] ring-2 ring-[#4338CA] shadow-md'
                        : 'bg-white border-[#E8E7F0] hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-[#14162B]">{tpl.name}</span>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-white bg-[#4338CA] px-2 py-0.5 rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">{tpl.description}</p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Vibe: {tpl.style}</span>
                      <span className="font-semibold text-[#4338CA]">Tap to Apply</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: GENERATE WEBSITE (Instant Interactive Synthesis) */}
        {currentStep === 6 && (
          <div className="py-12 sm:py-16 text-center max-w-md mx-auto space-y-6 animate-reveal">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-100 animate-ping opacity-25" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#14162B] to-[#4338CA] text-white flex items-center justify-center shadow-xl shadow-indigo-600/30">
                <Sparkles className="w-10 h-10 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#14162B] font-['Fraunces']">
                Synthesizing Your Website
              </h2>
              <p className="text-xs sm:text-sm text-[#51556E] mt-2">
                {generationStatus}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#E8E7F0] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#4338CA] h-full transition-all duration-500 rounded-full"
                style={{ width: `${generationProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 7: PREVIEW, EDIT & PUBLISH */}
        {currentStep === 7 && (
          <div className="space-y-5 animate-reveal">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E8E7F0]">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                  ✓ Website Synthesized
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
                  Preview & Publish {compiledSite.businessName}
                </h2>
              </div>

              {/* Viewport switchers */}
              <div className="flex items-center gap-1 bg-white border border-[#E8E7F0] p-1 rounded-xl self-start">
                <button
                  onClick={() => setPreviewDeviceMode('mobile')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    previewDeviceMode === 'mobile' ? 'bg-[#14162B] text-white' : 'text-slate-600'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 inline mr-1" /> Mobile
                </button>
                <button
                  onClick={() => setPreviewDeviceMode('desktop')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer hidden xs:inline-flex ${
                    previewDeviceMode === 'desktop' ? 'bg-[#14162B] text-white' : 'text-slate-600'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 inline mr-1" /> Desktop
                </button>
              </div>
            </div>

            {/* Interactive Preview Container */}
            <div className="bg-slate-900 rounded-3xl p-2 sm:p-4 border border-slate-800 shadow-xl overflow-hidden min-h-[500px]">
              <DeviceFrame
                mode={previewDeviceMode}
                onModeChange={setPreviewDeviceMode}
                siteSlug={compiledSite.slug}
                businessName={compiledSite.businessName}
              >
                <SiteRenderer site={compiledSite} isPreview={true} />
              </DeviceFrame>
            </div>
          </div>
        )}
      </main>

      {/* Sticky Bottom Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#E8E7F0] z-30 shadow-lg">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="min-h-[44px] px-4 py-2.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            {currentStep === 1 ? 'Cancel' : 'Back'}
          </button>

          {currentStep < 7 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 sm:flex-none min-h-[44px] px-6 py-2.5 bg-[#4338CA] hover:bg-[#372ea8] active:bg-[#2b248a] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>{currentStep === 5 ? 'Generate My Website' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinishPublish}
              className="flex-1 sm:flex-none min-h-[44px] px-7 py-2.5 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Publish Live Website (₹999)</span>
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
