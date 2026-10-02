import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import {
  Sparkles,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Download,
  FolderArchive,
  FileCode,
  FileText,
  Layers,
  ChevronDown,
  ChevronUp,
  X,
  Share2,
  Copy,
  Info
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  SupportedLanguage,
  I18N_CONTENT,
  SAVEWEB_FAQS,
  SAMPLE_PRESETS,
  SamplePreset
} from './saveWeb2ZipData';

export const SaveWeb2ZipApp: React.FC = () => {
  // Language selection
  const [lang, setLang] = useState<SupportedLanguage>('en');
  const t = I18N_CONTENT[lang];

  // Form options state
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [renameAssets, setRenameAssets] = useState(false);
  const [copyMobileVersion, setCopyMobileVersion] = useState(false);
  const [simplifiedDownload, setSimplifiedDownload] = useState(false);
  const [saveStructure, setSaveStructure] = useState(false);

  // Download simulation / processing state
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadedCount, setDownloadedCount] = useState(0);
  const [popupActive, setPopupActive] = useState(false);
  const [popupType, setPopupType] = useState<'success' | 'error'>('success');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastBlob, setLastBlob] = useState<Blob | null>(null);
  const [lastZipFilename, setLastZipFilename] = useState('SaveWeb2ZIP.zip');
  const [archivedFilesList, setArchivedFilesList] = useState<string[]>([]);
  const [showFileTree, setShowFileTree] = useState(false);

  // Active tooltip hover state
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Update page title
  useEffect(() => {
    document.title = `${t.brandName} - ${t.tagline}`;
    window.scrollTo(0, 0);
  }, [lang, t]);

  // URL Validation
  const isValidUrl = (url: string) => {
    if (!url || url.trim().length === 0) return false;
    if (url.includes('.onion')) return false;
    return /^https?:\/\/.+/i.test(url.trim());
  };

  // Trigger file download helper
  const triggerBrowserDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Generate real ZIP archive
  const handleStartSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = websiteUrl.trim();

    if (!isValidUrl(cleanUrl)) {
      setErrorMessage(t.incorrectLink);
      setPopupType('error');
      setPopupActive(true);
      return;
    }

    setIsDownloading(true);
    setDownloadedCount(1);
    setArchivedFilesList([]);
    setShowFileTree(false);

    try {
      // Parse domain for customized sample content
      let domainName = 'website';
      try {
        const parsed = new URL(cleanUrl);
        domainName = parsed.hostname.replace('www.', '');
      } catch {
        domainName = 'website';
      }

      // Determine folder structure based on options
      const cssPath = renameAssets
        ? (saveStructure ? `assets/css/a7f9b2_${domainName}.css` : `css/a7f9b2.css`)
        : (saveStructure ? `assets/stylesheets/main.css` : `css/main.css`);

      const jsPath = renameAssets
        ? (saveStructure ? `assets/js/c3e8d1_${domainName}.js` : `js/c3e8d1.js`)
        : (saveStructure ? `assets/javascript/app.js` : `js/app.js`);

      const imgLogoPath = renameAssets
        ? `images/x94k_${domainName}_logo.svg`
        : `images/logo.svg`;

      const fontPath = `fonts/Inter-Variable.woff2`;

      // Real ZIP creation via JSZip
      const zip = new JSZip();

      // HTML Content
      const htmlContent = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Archived: ${cleanUrl}</title>
  <meta name="generator" content="SaveWeb2ZIP Copier" />
  <meta name="archived-date" content="${new Date().toISOString()}" />
  <meta name="source-url" content="${cleanUrl}" />
  ${copyMobileVersion ? '<meta name="target-device" content="mobile" />' : ''}
  <link rel="stylesheet" href="${cssPath}" />
</head>
<body class="saveweb2zip-archived-body">
  <header class="archived-header">
    <div class="container">
      <div class="badge">Offline Archive created by SaveWeb2ZIP</div>
      <h1>${cleanUrl}</h1>
      <p>Original Source: <a href="${cleanUrl}" target="_blank" rel="noopener noreferrer">${cleanUrl}</a></p>
    </div>
  </header>
  <main class="container content">
    <section class="overview-box">
      <h2>Webpage successfully archived for offline inspection</h2>
      <p>This package contains full client-side HTML, CSS stylesheets, JavaScript files, images, and fonts extracted from <strong>${cleanUrl}</strong>.</p>
      <ul>
        <li><strong>Renamed Assets:</strong> ${renameAssets ? 'Enabled (Random Hash Salts Applied)' : 'Disabled (Preserved Clean Names)'}</li>
        <li><strong>Saved Structure:</strong> ${saveStructure ? 'Enabled (Original Resource Hierarchy)' : 'Default (Standard /css, /js, /images Folders)'}</li>
        <li><strong>Mobile Version:</strong> ${copyMobileVersion ? 'Enabled (Mobile Viewport Emulation)' : 'Standard Desktop'}</li>
        <li><strong>Algorithm:</strong> ${simplifiedDownload ? 'Alternative / Simplified Scraping' : 'Standard Full Recursive DOM Crawl'}</li>
      </ul>
    </section>
  </main>
  <script src="${jsPath}"></script>
</body>
</html>`;

      // CSS Content
      const cssContent = `/* Stylesheet generated by SaveWeb2ZIP for ${cleanUrl} */
body.saveweb2zip-archived-body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #212529;
  line-height: 1.6;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
}
.archived-header {
  background: #111111;
  color: #ffffff;
  padding: 32px 0;
  border-bottom: 3px solid #f5df4d;
}
.archived-header h1 {
  margin: 8px 0 4px;
  font-size: 28px;
  word-break: break-all;
}
.archived-header a {
  color: #f5df4d;
  text-decoration: underline;
}
.badge {
  display: inline-block;
  background: #f5df4d;
  color: #000000;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  border-radius: 4px;
}
.overview-box {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.overview-box h2 {
  margin-top: 0;
  color: #000000;
}
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}`;

      // JS Content
      const jsContent = `/**
 * Client Script generated by SaveWeb2ZIP
 * Target: ${cleanUrl}
 * Downloaded: ${new Date().toLocaleString()}
 */
console.log("SaveWeb2ZIP archive loaded successfully for: ${cleanUrl}");
document.addEventListener("DOMContentLoaded", function() {
  console.log("All offline resources initialized.");
});`;

      // SVG Logo content
      const svgLogoContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="50" cy="50" r="45" fill="#f5df4d" stroke="#000000" stroke-width="3"/>
  <text x="50" y="58" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#000000">${domainName.slice(0, 3).toUpperCase()}</text>
</svg>`;

      // README Content
      const readmeContent = `========================================================================
SaveWeb2ZIP.com - Website Copier Archive
========================================================================
Target Website: ${cleanUrl}
Downloaded Date: ${new Date().toUTCString()}

OPTIONS APPLIED:
- Rename Assets: ${renameAssets ? 'YES' : 'NO'}
- Mobile Version: ${copyMobileVersion ? 'YES' : 'NO'}
- Simplified Download: ${simplifiedDownload ? 'YES' : 'NO'}
- Save Website Structure: ${saveStructure ? 'YES' : 'NO'}

HOW TO VIEW OFFLINE:
1. Extract the contents of this ZIP archive to any folder on your computer.
2. Double-click "index.html" to open the site in your favorite web browser.
3. Enjoy offline browsing of all saved HTML, CSS, JavaScript, and media assets!

Telegram bot for downloading on mobile: https://telegram.me/webtozip_bot
Service provided by SaveWeb2ZIP.com
========================================================================`;

      // Add files to zip
      zip.file('index.html', htmlContent);
      zip.file(cssPath, cssContent);
      zip.file(jsPath, jsContent);
      zip.file(imgLogoPath, svgLogoContent);
      zip.file(fontPath, '/* Embedded OpenType / WOFF2 Font Resource */');
      zip.file('README.txt', readmeContent);

      const files = [
        'index.html',
        cssPath,
        jsPath,
        imgLogoPath,
        fontPath,
        'README.txt'
      ];
      setArchivedFilesList(files);

      // Multi-step progressive animation matching original behavior
      const totalFilesTarget = Math.floor(25 + Math.random() * 50);
      let count = 1;
      const interval = setInterval(() => {
        count += Math.floor(2 + Math.random() * 4);
        if (count >= totalFilesTarget) {
          clearInterval(interval);
          setDownloadedCount(totalFilesTarget);

          // Finish zip generation
          zip.generateAsync({ type: 'blob' }).then((blob) => {
            const filename = `${domainName.replace(/[^a-zA-Z0-9_-]/g, '_')}_SaveWeb2ZIP.zip`;
            setLastBlob(blob);
            setLastZipFilename(filename);

            // Auto trigger browser download
            triggerBrowserDownload(blob, filename);

            setIsDownloading(false);
            setPopupType('success');
            setPopupActive(true);
          });
        } else {
          setDownloadedCount(count);
        }
      }, 70);
    } catch (err: any) {
      setIsDownloading(false);
      setErrorMessage(err?.message || t.popupDeclineTitle);
      setPopupType('error');
      setPopupActive(true);
    }
  };

  // Close Popup
  const closePopup = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setPopupActive(false);
  };

  // Quick Preset Selection
  const applyPreset = (preset: SamplePreset) => {
    setWebsiteUrl(preset.url);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans relative flex flex-col selection:bg-[#f5df4d] selection:text-black">
      {/* 1. Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="saveweb2zip" />

      {/* Decorative Warm Background Image (Matching original site's main-backgound.png) */}
      <div
        className="absolute top-0 left-0 w-full h-[850px] pointer-events-none z-0 opacity-90"
        style={{
          background: 'url(/images/main-backgound.png) no-repeat 50% 0%',
          backgroundSize: 'cover'
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-between w-full">
        {/* Header Bar */}
        <header className="flex items-center justify-between pb-6 sm:pb-12 border-b border-black/10">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#/" className="flex items-center gap-2.5 text-black hover:opacity-80 transition-opacity">
              <img
                src="/images/logo.svg"
                alt="SaveWeb2ZIP Logo"
                className="w-6 h-7 sm:w-7 sm:h-8"
              />
              <span className="font-bold text-2xl sm:text-3xl tracking-tight text-black">
                {t.brandName}
              </span>
            </a>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-black/5 text-stone-600 border border-black/10">
              Site #60 &bull; Web Tools / Utilities
            </span>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as SupportedLanguage)}
              className="appearance-none bg-white/70 hover:bg-white border border-black/20 hover:border-black rounded-lg px-3.5 py-1.5 pr-8 font-bold text-sm tracking-wider uppercase cursor-pointer transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="en">EN English</option>
              <option value="es">ES Español</option>
              <option value="ru">RU Русский</option>
            </select>
            <ChevronDown className="w-4 h-4 text-black absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </header>

        {/* Hero & Downloader Form Section */}
        <main className="py-8 sm:py-16">
          <div className="max-w-4xl">
            {/* Title: SAVE A WEBSITE TO ZIP */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black uppercase mb-8 sm:mb-12 leading-[1.08]">
              {t.saveTitle}
            </h1>

            {/* Downloader Form */}
            <form onSubmit={handleStartSave} className="mb-10">
              <div className="flex flex-col md:flex-row items-stretch gap-4 mb-6">
                {/* URL Input field with original underline styling */}
                <input
                  type="text"
                  name="websiteLink"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder={t.placeholderUrl}
                  required
                  className="flex-1 text-lg sm:text-2xl font-bold text-black bg-white/70 hover:bg-white/90 focus:bg-white border-b-2 border-black px-4 py-4 focus:outline-none transition-all placeholder:text-stone-400 placeholder:font-normal"
                />

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isDownloading}
                  className={`min-w-[280px] sm:min-w-[320px] px-8 py-4 font-bold text-xl sm:text-2xl text-center border-b-2 border-black transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isDownloading
                      ? 'bg-white text-black shadow-md cursor-wait'
                      : 'bg-white/70 hover:bg-white text-black shadow-sm'
                  }`}
                >
                  {isDownloading ? (
                    <div className="flex items-center gap-3">
                      <span>{t.downloadingButton} {downloadedCount} files</span>
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin inline-block" />
                    </div>
                  ) : (
                    <span>{t.saveButton}</span>
                  )}
                </button>
              </div>

              {/* Checkboxes Row matching original layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base font-semibold text-stone-900">
                {/* 1. Rename all assets */}
                <label className="inline-flex items-center gap-2.5 cursor-pointer hover:text-black">
                  <input
                    type="checkbox"
                    checked={renameAssets}
                    onChange={(e) => setRenameAssets(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-400 text-black focus:ring-black accent-black cursor-pointer"
                  />
                  <span>{t.optionRename}</span>
                </label>

                {/* 2. Copy mobile version */}
                <label className="inline-flex items-center gap-2.5 cursor-pointer hover:text-black">
                  <input
                    type="checkbox"
                    checked={copyMobileVersion}
                    onChange={(e) => setCopyMobileVersion(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-400 text-black focus:ring-black accent-black cursor-pointer"
                  />
                  <span>{t.optionMobile}</span>
                </label>

                {/* 3. Simplified download (with tooltip) */}
                <div
                  className="relative inline-flex items-center gap-2.5 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip('simplified')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <label className="inline-flex items-center gap-2.5 cursor-pointer hover:text-black">
                    <input
                      type="checkbox"
                      checked={simplifiedDownload}
                      onChange={(e) => setSimplifiedDownload(e.target.checked)}
                      className="w-4 h-4 rounded border-stone-400 text-black focus:ring-black accent-black cursor-pointer"
                    />
                    <span>{t.optionSimplified}</span>
                  </label>
                  <Info className="w-4 h-4 text-stone-500 hover:text-black cursor-help" />

                  {/* Tooltip box */}
                  {activeTooltip === 'simplified' && (
                    <div className="absolute left-0 bottom-full mb-2 w-72 p-3 bg-black text-white text-xs rounded-lg shadow-xl z-30 font-normal leading-relaxed pointer-events-none">
                      {t.tooltipSimplified}
                    </div>
                  )}
                </div>

                {/* 4. Save website structure (with tooltip) */}
                <div
                  className="relative inline-flex items-center gap-2.5 cursor-pointer"
                  onMouseEnter={() => setActiveTooltip('structure')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <label className="inline-flex items-center gap-2.5 cursor-pointer hover:text-black">
                    <input
                      type="checkbox"
                      checked={saveStructure}
                      onChange={(e) => setSaveStructure(e.target.checked)}
                      className="w-4 h-4 rounded border-stone-400 text-black focus:ring-black accent-black cursor-pointer"
                    />
                    <span>{t.optionSaveStructure}</span>
                  </label>
                  <Info className="w-4 h-4 text-stone-500 hover:text-black cursor-help" />

                  {/* Tooltip box */}
                  {activeTooltip === 'structure' && (
                    <div className="absolute left-0 bottom-full mb-2 w-72 p-3 bg-black text-white text-xs rounded-lg shadow-xl z-30 font-normal leading-relaxed pointer-events-none">
                      {t.tooltipSaveStructure}
                    </div>
                  )}
                </div>
              </div>
            </form>

            {/* Quick Sample Presets */}
            <div className="mb-12 p-3.5 bg-white/60 border border-black/10 rounded-xl flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-stone-700">{t.sampleSitesTitle}</span>
              {SAMPLE_PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => applyPreset(p)}
                  className="px-2.5 py-1 rounded bg-white hover:bg-black hover:text-white text-stone-800 border border-stone-300 font-mono transition-colors cursor-pointer text-[11px]"
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Preferences / What files are downloaded section */}
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase mb-3">
                {t.prefTitle}
              </h2>
              <p
                className="text-base sm:text-lg text-stone-800 leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: t.prefDescHtml }}
              />

              {/* 4 Category Badges matching original assets: Html, CSS & JS, Images, Fonts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {/* HTML */}
                <div className="flex flex-col items-center justify-between p-4 bg-white/70 border border-black/10 rounded-xl shadow-sm text-center">
                  <img
                    src="/images/html.png"
                    alt="HTML"
                    className="w-16 h-18 object-contain mb-2"
                  />
                  <h5 className="font-bold uppercase text-sm tracking-wider m-0">
                    {t.htmlCard}
                  </h5>
                </div>

                {/* CSS & JavaScript */}
                <div className="flex flex-col items-center justify-between p-4 bg-white/70 border border-black/10 rounded-xl shadow-sm text-center">
                  <img
                    src="/images/cssjavascript.png"
                    alt="CSS & JavaScript"
                    className="w-16 h-18 object-contain mb-2"
                  />
                  <h5 className="font-bold uppercase text-sm tracking-wider m-0">
                    {t.cssCard}
                  </h5>
                </div>

                {/* Images */}
                <div className="flex flex-col items-center justify-between p-4 bg-white/70 border border-black/10 rounded-xl shadow-sm text-center">
                  <img
                    src="/images/images.png"
                    alt="Images"
                    className="w-18 h-14 object-contain mb-2 mt-2"
                  />
                  <h5 className="font-bold uppercase text-sm tracking-wider m-0">
                    {t.imagesCard}
                  </h5>
                </div>

                {/* Fonts */}
                <div className="flex flex-col items-center justify-between p-4 bg-white/70 border border-black/10 rounded-xl shadow-sm text-center">
                  <img
                    src="/images/fonts.png"
                    alt="Fonts"
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <h5 className="font-bold uppercase text-sm tracking-wider m-0">
                    {t.fontsCard}
                  </h5>
                </div>
              </div>

              {/* Telegram Bot Link */}
              <div className="mb-12">
                <a
                  href="https://telegram.me/webtozip_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-black hover:text-[#0088cc] font-semibold text-sm sm:text-base transition-colors"
                >
                  <img
                    src="/images/telegram.svg"
                    alt="Telegram"
                    className="w-5 h-5 shrink-0"
                  />
                  <span>{t.telegramText}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed FAQ Section */}
          <div className="max-w-4xl pt-12 border-t border-black/10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-6">
              {t.faqTitle}
            </h3>

            <div className="space-y-3">
              {SAVEWEB_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white/80 border border-black/10 rounded-xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-base sm:text-lg flex items-center justify-between gap-4 cursor-pointer hover:bg-white"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm sm:text-base text-stone-700 leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="pt-12 pb-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 font-mono">
          <div>
            &copy; 2026 {t.brandName}. All rights reserved &bull; Online Website Copier
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-black">Site #60 &bull; WEB TOOLS / UTILITIES</span>
            <span>&bull;</span>
            <a
              href="https://telegram.me/webtozip_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0088cc] hover:underline"
            >
              @webtozip_bot
            </a>
          </div>
        </footer>
      </div>

      {/* Official Success / Result Popup Modal (Exact SaveWeb2ZIP design & colors: #1a1a1a background & #f5df4d gold button) */}
      {popupActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] text-white rounded-2xl w-full max-w-2xl p-6 sm:p-10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Popup Header with White Logo */}
            <div className="flex items-center justify-between pb-6 border-b border-stone-800 mb-6">
              <a href="#/" className="flex items-center gap-2.5 text-white">
                <img
                  src="/images/white-logo.svg"
                  alt="SaveWeb2ZIP Logo"
                  className="w-6 h-7"
                />
                <span className="font-bold text-2xl tracking-tight">
                  {t.brandName}
                </span>
              </a>
              <button
                type="button"
                onClick={closePopup}
                className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {popupType === 'success' ? (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-300 mb-3">
                  {t.popupSuccessTitle}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                  {t.popupSuccessParagraph}
                  <span className="text-[#f5df4d] uppercase font-mono">
                    {t.popupBookmarkSpan}
                  </span>
                  ,<br />
                  to bookmark the service so that you don't lose us!
                </p>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {lastBlob && (
                    <button
                      type="button"
                      onClick={() => triggerBrowserDownload(lastBlob, lastZipFilename)}
                      className="px-6 py-3.5 bg-[#f5df4d] hover:bg-white text-black font-bold text-base rounded-md transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      <span>{t.popupDownloadAgain}</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closePopup}
                    className="px-6 py-3.5 border-1.5 border-[#f5df4d] hover:border-white text-[#f5df4d] hover:text-white font-bold text-base rounded-md transition-all cursor-pointer"
                  >
                    {t.popupCloseBtn}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowFileTree(!showFileTree)}
                    className="px-4 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-xs rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <FolderArchive className="w-4 h-4 text-[#f5df4d]" />
                    <span>{showFileTree ? 'Hide Files' : t.popupViewTree}</span>
                  </button>
                </div>

                {/* Archive file list inspection */}
                {showFileTree && archivedFilesList.length > 0 && (
                  <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl mb-6 font-mono text-xs text-stone-300 space-y-1.5 max-h-48 overflow-y-auto">
                    <div className="text-[10px] uppercase tracking-widest text-[#f5df4d] font-bold mb-1">
                      Archived Package Files ({archivedFilesList.length} items):
                    </div>
                    {archivedFilesList.map((file, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FileCode className="w-3.5 h-3.5 text-stone-500" />
                        <span>{file}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Telegram Bot Link inside Popup */}
                <div>
                  <a
                    href="https://telegram.me/webtozip_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-stone-300 hover:text-white text-sm"
                  >
                    <img
                      src="/images/telegram-blue.svg"
                      alt="Telegram"
                      className="w-5 h-5"
                    />
                    <span>{t.telegramText}</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-rose-400 mb-2">
                  {t.popupDeclineTitle}
                </h3>
                <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                  {errorMessage || t.incorrectLink}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="px-6 py-3 bg-[#f5df4d] hover:bg-white text-black font-bold text-sm rounded-md transition-colors cursor-pointer"
                  >
                    {t.popupCloseBtn}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
