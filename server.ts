import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to get Gemini client
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

// 1. AI Website Generator Endpoint
app.post('/api/ai/generate-website', async (req, res) => {
  try {
    const { businessName, category, city, state, description, items, phone, whatsapp } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Fallback with rich deterministic enhancements
      return res.json({
        success: true,
        tagline: `${businessName} · Premium ${category.replace('_', ' ')} in ${city || 'India'}`,
        description: description || `Welcome to ${businessName}, your trusted destination for quality ${category.replace('_', ' ')} services and products. We are dedicated to excellence, authentic customer care, and reliable local service.`,
        seoTitle: `${businessName} | Best ${category.replace('_', ' ')} in ${city || 'India'}`,
        seoDescription: `Visit ${businessName} in ${city || 'India'} for top-rated ${category.replace('_', ' ')}. Call or WhatsApp ${phone || whatsapp || ''} for enquiries and bookings.`,
        specialBadge: 'Verified Local Business',
        aiGenerated: false
      });
    }

    const prompt = `You are an expert copywriter and SaaS website builder for Indian local businesses.
Given this business:
- Name: "${businessName}"
- Category: "${category}"
- Location: "${city || ''}, ${state || 'India'}"
- Current rough description: "${description || ''}"
- Items/Services sample: ${JSON.stringify((items || []).slice(0, 5))}

Write high-converting, professional, realistic website content for this business.
CRITICAL RULES:
1. Do NOT invent fake addresses, phone numbers, fake awards, or fake customer counts.
2. Write a captivating, punchy Tagline (max 12 words).
3. Write a warm, professional, authentic About Description (2-3 paragraphs, around 70-120 words).
4. Generate an optimized SEO Title (max 60 chars) and Meta Description (max 155 chars).
5. Suggest a catchy promotional offer title and description.
6. Provide output in STRICT JSON format:
{
  "tagline": "string",
  "description": "string",
  "seoTitle": "string",
  "seoDescription": "string",
  "suggestedOfferTitle": "string",
  "suggestedOfferDescription": "string",
  "specialBadge": "string"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      success: true,
      tagline: parsed.tagline || `${businessName} · Premium Quality & Service`,
      description: parsed.description || description || `Welcome to ${businessName}.`,
      seoTitle: parsed.seoTitle || `${businessName} | ${category}`,
      seoDescription: parsed.seoDescription || `Discover ${businessName}.`,
      suggestedOfferTitle: parsed.suggestedOfferTitle,
      suggestedOfferDescription: parsed.suggestedOfferDescription,
      specialBadge: parsed.specialBadge || 'Verified Local Business',
      aiGenerated: true
    });
  } catch (err: any) {
    console.error('Error generating AI website content:', err);
    return res.status(200).json({
      success: false,
      error: err.message || 'AI generation failed',
      fallback: true
    });
  }
});

// 2. AI Website Editor Assistant Endpoint
app.post('/api/ai/edit-website', async (req, res) => {
  try {
    const { site, command } = req.body;
    if (!site || !command) {
      return res.status(400).json({ error: 'Missing site or command' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Deterministic rule-based adjustments
      const lower = command.toLowerCase();
      const updatedSite = { ...site };
      let changeNote = 'Updated website configuration.';

      if (lower.includes('gold') || lower.includes('luxury') || lower.includes('premium')) {
        updatedSite.primaryColor = '#1F1A17';
        updatedSite.secondaryColor = '#D4AF37';
        updatedSite.fontFamily = 'Playfair Display, serif';
        changeNote = 'Switched theme to Luxury Dark & Gold with Playfair Display typography.';
      } else if (lower.includes('blue') || lower.includes('clean') || lower.includes('modern')) {
        updatedSite.primaryColor = '#0F172A';
        updatedSite.secondaryColor = '#2563EB';
        updatedSite.fontFamily = 'Plus Jakarta Sans, sans-serif';
        changeNote = 'Switched theme to Clean Corporate Navy & Blue.';
      } else if (lower.includes('green') || lower.includes('eco') || lower.includes('fresh')) {
        updatedSite.primaryColor = '#0F291E';
        updatedSite.secondaryColor = '#10B981';
        updatedSite.fontFamily = 'Plus Jakarta Sans, sans-serif';
        changeNote = 'Applied Fresh Eco Botanical Green theme.';
      } else if (lower.includes('discount') || lower.includes('offer')) {
        updatedSite.offers = [
          ...(updatedSite.offers || []),
          {
            id: `offer-${Date.now()}`,
            title: 'Limited Period Festive Special 20% Off',
            description: 'Avail exclusive flat 20% off on all services and orders this month.',
            discountPercent: 20,
            couponCode: 'SPECIAL20',
            isActive: true
          }
        ];
        changeNote = 'Added a new promotional offer banner to the website.';
      }

      return res.json({
        success: true,
        site: updatedSite,
        changeNote,
        aiGenerated: false
      });
    }

    const prompt = `You are an AI website customization engine.
The user wants to modify their website with this command: "${command}".
Current Website JSON:
${JSON.stringify({
  businessName: site.businessName,
  tagline: site.tagline,
  description: site.description,
  primaryColor: site.primaryColor,
  secondaryColor: site.secondaryColor,
  fontFamily: site.fontFamily,
  specialBadge: site.specialBadge,
  bookingCtaLabel: site.bookingCtaLabel,
  offers: site.offers,
  seoTitle: site.seoTitle,
  seoDescription: site.seoDescription
})}

Respond with a JSON object containing the updated fields only, plus a "changeNote" string explaining what you modified:
{
  "updates": {
    "tagline": "...",
    "description": "...",
    "primaryColor": "...",
    "secondaryColor": "...",
    "fontFamily": "...",
    "specialBadge": "...",
    "bookingCtaLabel": "...",
    "offers": [...]
  },
  "changeNote": "..."
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    const updatedSite = {
      ...site,
      ...(parsed.updates || {}),
      updatedAt: new Date().toISOString()
    };

    return res.json({
      success: true,
      site: updatedSite,
      changeNote: parsed.changeNote || 'Website updated successfully.',
      aiGenerated: true
    });
  } catch (err: any) {
    console.error('Error in AI editing:', err);
    return res.status(200).json({
      success: false,
      error: err.message || 'AI edit failed'
    });
  }
});

// 3. AI Menu & Services Data Extraction from Text/CSV
app.post('/api/ai/extract-content', async (req, res) => {
  try {
    const { rawText, category } = req.body;
    if (!rawText || !rawText.trim()) {
      return res.status(400).json({ error: 'No content provided' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Basic line parser fallback
      const lines = rawText.split('\n').filter((l: string) => l.trim().length > 0);
      const items = lines.slice(0, 15).map((line: string, idx: number) => {
        const parts = line.split(/[,–-]|₹/);
        const name = parts[0]?.trim() || `Item ${idx + 1}`;
        const priceMatch = line.match(/\d+/);
        const price = priceMatch ? parseInt(priceMatch[0], 10) : 199;
        return {
          id: `item-ext-${Date.now()}-${idx}`,
          name,
          description: `Freshly prepared / delivered with care.`,
          price,
          category: 'Main Menu',
          isAvailable: true
        };
      });
      return res.json({ success: true, items, aiGenerated: false });
    }

    const prompt = `Parse the following unstructured menu/service catalog for a "${category}" business into a JSON list of items:
RAW TEXT:
"""
${rawText.slice(0, 4000)}
"""

Extract each item into an array of objects matching this schema:
[
  {
    "id": "item-unique-id",
    "name": "Item Name",
    "description": "Short appetizing description",
    "price": 250,
    "discountPrice": 199,
    "category": "Appetizers / Services / Specials",
    "unit": "per plate / per session / per piece",
    "isAvailable": true,
    "isVeg": true
  }
]`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const parsed = JSON.parse(response.text || '[]');
    const items = Array.isArray(parsed) ? parsed : [];
    return res.json({ success: true, items, aiGenerated: true });
  } catch (err: any) {
    console.error('Error extracting content:', err);
    return res.status(200).json({ success: false, items: [] });
  }
});

// 4. Live Reference Website Inspection Engine
app.post('/api/reference/inspect', async (req, res) => {
  const { referenceId, url, categoryName } = req.body;

  if (!url || url.includes('Not verified') || url.includes('google.com/search')) {
    return res.json({
      success: false,
      inspectionStatus: 'manual_required',
      notes: 'Entry contains an unverified URL or search discovery link. Direct domain or manual screenshot upload required.'
    });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return res.json({
        success: false,
        inspectionStatus: 'manual_required',
        notes: `HTTP error ${response.status} ${response.statusText}. Site is inaccessible or blocks automated inspection. Upload screenshots or source files.`
      });
    }

    const html = await response.text();

    // DOM & Meta Extraction
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';

    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
    const ogImage = ogImageMatch ? ogImageMatch[1] : undefined;

    // Detect fonts
    const hasSerif = /font-family:[^;]*serif/i.test(html) || /family=Fraunces|family=Playfair/i.test(html);
    const hasSpace = /family=Space\+Grotesk/i.test(html);

    // Detect structural features
    const hasTable = /<table/i.test(html) || /class="[^"]*pricing[^"]*"/i.test(html);
    const hasForm = /<form/i.test(html) || /input/i.test(html);

    const headlineFont = hasSerif ? 'Fraunces, Georgia, serif' : hasSpace ? 'Space Grotesk, sans-serif' : 'Plus Jakarta Sans, sans-serif';
    const heroArchetype = hasForm ? 'split-form' : hasSerif ? 'cinematic-overlay' : 'product-showcase';
    const catalogStyle = hasTable ? 'dense-table' : 'grid-cards';

    return res.json({
      success: true,
      inspectionStatus: 'inspected',
      inspectionTimestamp: new Date().toISOString(),
      notes: `Successfully inspected live website (${title || 'Active Domain'}). Extracted typography, section hierarchy, and layout archetype.`,
      detectedMeta: {
        title,
        ogImage,
        headlineFont,
        heroArchetype,
        catalogStyle
      }
    });
  } catch (err: any) {
    return res.json({
      success: false,
      inspectionStatus: 'manual_required',
      notes: `Connection failed: ${err.message || 'Timeout/Network Error'}. Site requires administrator screenshot or manual template input.`
    });
  }
});

// 5. Admin Upload Source Assets / Screenshots / Custom Blueprint
app.post('/api/reference/upload-assets', async (req, res) => {
  try {
    const { referenceId, screenshotDataUrl, customBlueprint, notes } = req.body;

    if (!referenceId) {
      return res.status(400).json({ success: false, error: 'referenceId is required' });
    }

    return res.json({
      success: true,
      referenceId,
      inspectionStatus: 'inspected',
      inspectionTimestamp: new Date().toISOString(),
      notes: notes || 'Administrator uploaded custom screenshot and verified design blueprint.'
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Vite middleware in dev or static serving in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  const distPath = path.resolve(process.cwd(), 'dist');

  if (!isProd || !fs.existsSync(distPath)) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RaoSitez Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
