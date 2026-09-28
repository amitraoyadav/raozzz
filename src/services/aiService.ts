import { BusinessWebsite, ItemOrService } from '../types';

export interface AIGenerateResult {
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  suggestedOfferTitle?: string;
  suggestedOfferDescription?: string;
  specialBadge?: string;
  aiGenerated: boolean;
}

export interface AIEditResult {
  success: boolean;
  site?: BusinessWebsite;
  changeNote?: string;
  error?: string;
  aiGenerated?: boolean;
}

export async function generateAIWebsiteContent(params: {
  businessName: string;
  category: string;
  city?: string;
  state?: string;
  description?: string;
  items?: ItemOrService[];
  phone?: string;
  whatsapp?: string;
}): Promise<AIGenerateResult> {
  try {
    const res = await fetch('/api/ai/generate-website', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        return data;
      }
    }
  } catch (e) {
    console.warn('Backend AI generation call failed, falling back to local enhancement', e);
  }

  // Graceful deterministic fallback
  const catPretty = params.category.replace(/_/g, ' ');
  return {
    tagline: `${params.businessName} · Premium ${catPretty} in ${params.city || 'India'}`,
    description: params.description || `Welcome to ${params.businessName}. We pride ourselves on exceptional craftsmanship, transparent pricing, and trusted service for all our valued patrons.`,
    seoTitle: `${params.businessName} | Best ${catPretty} in ${params.city || 'India'}`,
    seoDescription: `Visit ${params.businessName} in ${params.city || 'India'} for top-rated ${catPretty}. Contact ${params.phone || params.whatsapp || ''} for bookings and enquiries.`,
    specialBadge: 'Verified Local Business',
    aiGenerated: false
  };
}

export async function editWebsiteWithAI(
  site: BusinessWebsite,
  command: string
): Promise<AIEditResult> {
  try {
    const res = await fetch('/api/ai/edit-website', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site, command })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.site) {
        return data;
      }
    }
  } catch (e) {
    console.warn('Backend AI edit call failed, applying client rule heuristics', e);
  }

  // Client-side rule heuristics
  const lower = command.toLowerCase();
  const updated = { ...site };
  let note = 'Applied quick theme adjustment.';

  if (lower.includes('gold') || lower.includes('luxury') || lower.includes('black')) {
    updated.primaryColor = '#1F1A17';
    updated.secondaryColor = '#D4AF37';
    updated.fontFamily = 'Playfair Display, serif';
    note = 'Transformed to Luxury Dark & Imperial Gold theme with Playfair serif typography.';
  } else if (lower.includes('blue') || lower.includes('modern') || lower.includes('clean')) {
    updated.primaryColor = '#0F172A';
    updated.secondaryColor = '#2563EB';
    updated.fontFamily = 'Plus Jakarta Sans, sans-serif';
    note = 'Switched to Crisp Modern Navy & Indigo.';
  } else if (lower.includes('offer') || lower.includes('discount')) {
    updated.offers = [
      ...(updated.offers || []),
      {
        id: `off-${Date.now()}`,
        title: 'Special Introductory 20% Discount',
        description: 'Enjoy 20% off on all items and services for a limited period.',
        discountPercent: 20,
        couponCode: 'WELCOME20',
        isActive: true
      }
    ];
    note = 'Added a new promotional offer banner to the site.';
  } else if (lower.includes('whatsapp') || lower.includes('order')) {
    updated.bookingCtaLabel = 'Instant WhatsApp Order';
    note = 'Updated primary CTA to Instant WhatsApp Order.';
  }

  return {
    success: true,
    site: updated,
    changeNote: note,
    aiGenerated: false
  };
}

export async function extractMenuContentWithAI(
  rawText: string,
  category: string
): Promise<ItemOrService[]> {
  try {
    const res = await fetch('/api/ai/extract-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rawText, category })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.items) && data.items.length > 0) {
        return data.items;
      }
    }
  } catch (e) {
    console.warn('AI extraction failed, parsing text lines locally', e);
  }

  // Local parser
  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  return lines.slice(0, 20).map((line, idx) => {
    const parts = line.split(/[,–-]|₹/);
    const name = parts[0]?.trim() || `Item ${idx + 1}`;
    const priceMatch = line.match(/\d+/);
    const price = priceMatch ? parseInt(priceMatch[0], 10) : 199;
    return {
      id: `ext-item-${Date.now()}-${idx}`,
      name,
      description: 'Prepared fresh with quality ingredients and authentic care.',
      price,
      category: 'General Catalog',
      isAvailable: true,
      isVeg: true
    };
  });
}
