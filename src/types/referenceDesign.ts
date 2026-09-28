import { BookingPatternType } from './index';

export type InspectionStatus = 'inspected' | 'pending' | 'inaccessible' | 'manual_required';
export type TemplateGenerationStatus = 'ready' | 'draft' | 'needs_review';

export type DynamicSectionType =
  | 'hero'
  | 'brand-story'
  | 'highlights-grid'
  | 'catalog'
  | 'stats-counter'
  | 'timeline'
  | 'gallery'
  | 'booking-banner'
  | 'faq-accordion'
  | 'location-map'
  | 'testimonials-marquee'
  | 'offers-banner'
  | 'chef-spotlight'
  | 'trust-badges'
  | 'property-rera-portal'
  | 'custom-features';

export interface DynamicSectionDefinition {
  id: string;
  type: DynamicSectionType;
  title: string;
  subtitle?: string;
  variant: string;
  order: number;
  isEnabled: boolean;
  customData?: Record<string, any>;
}

export interface ReferenceDesignBlueprint {
  layoutArchetype:
    | 'editorial-magazine'
    | 'dense-commercial'
    | 'luxury-minimal'
    | 'bold-artisan'
    | 'split-hero-booking'
    | 'high-tech-dark'
    | 'clean-catalog';
  contentWidth: 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl' | 'max-w-full';
  header: {
    navStyle: 'floating-glass' | 'solid-compact' | 'split-centered' | 'action-heavy' | 'minimal-transparent' | 'top-bar-dual';
    showTopBar: boolean;
    isSticky: boolean;
    ctaVariant: 'button' | 'whatsapp-pill' | 'phone-icon' | 'dual-cta';
  };
  hero: {
    archetype:
      | 'split-form'
      | 'cinematic-overlay'
      | 'product-showcase'
      | 'badge-card'
      | 'interactive-booking'
      | 'split-hero-booking'
      | 'minimal-editorial'
      | 'asymmetric-cards';
    alignment: 'left' | 'center' | 'split';
    height: 'screen' | 'compact' | 'standard';
    overlayDarkness: number;
    showBadges: boolean;
    highlightPill?: string;
  };
  palette: {
    baseBg: string;
    surfaceBg: string;
    textColor: string;
    bodyTextColor: string;
    accentColor: string;
    secondaryAccent: string;
    borderMuted?: string;
  };
  typography: {
    headlineFont: string;
    bodyFont: string;
    fontPairingLabel: string;
    baseFontSize?: string;
  };
  catalog: {
    style: 'grid-cards' | 'dense-table' | 'visual-cards' | 'categorized-accordion' | 'horizontal-scroll' | 'feature-list';
    columns: 2 | 3 | 4;
    showPriceBadge: boolean;
    cardCornerRadius: 'rounded-none' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl';
  };
  sections: DynamicSectionDefinition[];
  footer: {
    style: 'minimal-compact' | 'multi-column-rich' | 'brand-centered' | 'action-banner';
    showNewsletter: boolean;
    showWorkingHours: boolean;
  };
  specialFeatures?: string[];
  vibeTag: string;
}

export interface ReferenceComponentConfig {
  enableFloatingCta: boolean;
  showQrScannerModal: boolean;
  showQuickQuoteDrawer: boolean;
  customCssVariables?: Record<string, string>;
}

export interface ReferenceResponsiveConfig {
  mobileNavType: 'drawer' | 'bottom-sheet' | 'dropdown' | 'floating-bar';
  mobileHeroBehavior: 'stack-form' | 'collapse-badges' | 'full-banner';
  mobileCatalogScroll: 'vertical-stack' | 'horizontal-snap' | 'compact-table';
}

export interface ReferenceDesignRegistryItem {
  categoryNo: number;
  categoryId: string;
  categoryName: string;
  group: string;
  referenceId: string;
  referenceNumber: 1 | 2 | 3;
  referenceWebsiteName: string;
  originalReferenceUrl: string;
  featuresToStudy: string;
  screenshotUrl?: string;
  mobileScreenshotUrl?: string;
  inspectionStatus: InspectionStatus;
  inspectionTimestamp?: string;
  inspectionNotes?: string;
  templateGenerationStatus: TemplateGenerationStatus;
  blueprint: ReferenceDesignBlueprint;
  componentConfig: ReferenceComponentConfig;
  responsiveConfig: ReferenceResponsiveConfig;
  isActive: boolean;
  isVerifiedDomain: boolean;
}
