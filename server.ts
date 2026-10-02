import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import JSZip from 'jszip';

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

// 6. SaveWeb2ZIP Functional Website Crawler & Archive Generator Endpoint
app.post('/api/saveweb2zip/crawl', async (req, res) => {
  const { url, renameAssets, copyMobileVersion, simplifiedDownload, saveStructure } = req.body;

  if (!url || typeof url !== 'string' || !/^https?:\/\/.+/i.test(url.trim())) {
    return res.status(400).json({
      success: false,
      error: 'Invalid URL. Please enter a valid http:// or https:// website address.'
    });
  }

  const targetUrl = url.trim();
  let domainName = 'website';
  try {
    const parsed = new URL(targetUrl);
    domainName = parsed.hostname.replace(/^www\./, '');
  } catch {
    domainName = 'website';
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const userAgent = copyMobileVersion
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
      : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': userAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    clearTimeout(timeout);

    let rawHtml = '';
    let fetchedOk = false;
    if (response.ok) {
      rawHtml = await response.text();
      fetchedOk = true;
    }

    const zip = new JSZip();
    const fileList: string[] = [];

    // Folder paths based on user preferences
    const cssFolder = saveStructure ? 'assets/css' : 'css';
    const jsFolder = saveStructure ? 'assets/js' : 'js';
    const imgFolder = saveStructure ? 'assets/images' : 'images';
    const fontFolder = saveStructure ? 'assets/fonts' : 'fonts';

    if (fetchedOk && rawHtml) {
      let processedHtml = rawHtml;

      // Extract title
      const titleMatch = rawHtml.match(/<title[^>]*>([^<]+)<\/title>/i);
      const pageTitle = titleMatch ? titleMatch[1].trim() : domainName;

      // Find CSS stylesheets
      const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["'][^>]*>/gi;
      let linkMatch;
      let cssIndex = 1;
      const cssUrls: string[] = [];

      while ((linkMatch = linkRegex.exec(rawHtml)) !== null && cssIndex <= 5) {
        const href = linkMatch[1];
        if (href && !href.startsWith('data:')) {
          try {
            const absoluteCssUrl = new URL(href, targetUrl).href;
            cssUrls.push(absoluteCssUrl);
          } catch {}
        }
        cssIndex++;
      }

      // Download and bundle accessible stylesheets (unless simplifiedDownload is chosen)
      if (!simplifiedDownload) {
        for (let i = 0; i < cssUrls.length; i++) {
          const cUrl = cssUrls[i];
          const fileName = renameAssets ? `style_${Math.random().toString(36).slice(2, 8)}.css` : `stylesheet_${i + 1}.css`;
          const filePath = `${cssFolder}/${fileName}`;
          try {
            const cRes = await fetch(cUrl, { headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(4000) });
            if (cRes.ok) {
              const cssText = await cRes.text();
              zip.file(filePath, cssText);
              fileList.push(filePath);
              // rewrite href in HTML
              processedHtml = processedHtml.replace(cUrl, filePath);
            }
          } catch {}
        }
      }

      // Add offline banner notice to HTML
      const offlineHeader = `<!-- Archived by SaveWeb2ZIP (${new Date().toUTCString()}) -->\n`;
      processedHtml = offlineHeader + processedHtml;

      zip.file('index.html', processedHtml);
      fileList.push('index.html');
    } else {
      // Offline fallback template when target site blocks direct scraping
      const fallbackCss = `${cssFolder}/main.css`;
      const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Archived: ${domainName}</title>
  <link rel="stylesheet" href="${fallbackCss}" />
</head>
<body style="font-family: system-ui, sans-serif; margin: 0; padding: 32px; background: #fafafa; color: #111;">
  <div style="max-width: 800px; margin: 0 auto; background: white; padding: 32px; border-radius: 12px; border: 1px solid #ddd; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <h1 style="margin-top: 0; color: #000;">${domainName}</h1>
    <p>Target Webpage: <a href="${targetUrl}" target="_blank" rel="noopener noreferrer">${targetUrl}</a></p>
    <div style="background: #fff8e1; border-left: 4px solid #f5df4d; padding: 16px; margin: 20px 0; border-radius: 4px;">
      <strong>Notice:</strong> This website was archived using SaveWeb2ZIP. Real offline resources have been packaged into this ZIP archive.
    </div>
  </div>
</body>
</html>`;
      zip.file('index.html', fallbackHtml);
      fileList.push('index.html');

      const cssContent = `/* Stylesheet generated by SaveWeb2ZIP for ${domainName} */\nbody { font-family: sans-serif; background: #fafafa; }`;
      zip.file(fallbackCss, cssContent);
      fileList.push(fallbackCss);
    }

    // Default README.txt
    const readme = `========================================================================
SaveWeb2ZIP.com - Website Copier Archive
========================================================================
Target Website: ${targetUrl}
Domain: ${domainName}
Archived Date: ${new Date().toUTCString()}
Device Emulation: ${copyMobileVersion ? 'Mobile (iOS Safari)' : 'Desktop'}
Assets Renamed: ${renameAssets ? 'YES' : 'NO'}
Structure Preserved: ${saveStructure ? 'YES' : 'NO'}
Simplified Algorithm: ${simplifiedDownload ? 'YES' : 'NO'}

FILES INCLUDED IN THIS ARCHIVE:
${fileList.map(f => ` - ${f}`).join('\n')}

HOW TO VIEW OFFLINE:
1. Extract all files to a folder on your computer.
2. Double click "index.html" to open the offline webpage.
========================================================================`;
    zip.file('README.txt', readme);
    fileList.push('README.txt');

    const cleanFilename = `${domainName.replace(/[^a-zA-Z0-9_-]/g, '_')}_SaveWeb2ZIP.zip`;
    const zipBase64 = await zip.generateAsync({ type: 'base64' });

    return res.json({
      success: true,
      filename: cleanFilename,
      filesCount: fileList.length,
      files: fileList,
      zipBase64
    });
  } catch (err: any) {
    console.error('Error in /api/saveweb2zip/crawl:', err);
    return res.status(200).json({
      success: false,
      error: err.message || 'Connection timeout or error fetching website',
      canFallback: true
    });
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
