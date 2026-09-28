import React, { useState } from 'react';
import {
  ArrowLeft,
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Share2,
  Clock,
  MapPin,
  ChevronRight,
  Eye
} from 'lucide-react';
import { BusinessWebsite } from '../../types';
import { DeviceFrame } from '../common/DeviceFrame';
import { SiteRenderer } from './SiteRenderer';
import { CATEGORY_INFO } from '../../data/templateDefs';
import { getCategoryToken } from '../../data/categoryDesignTokens';

interface TemplatePreviewModalProps {
  site: BusinessWebsite | null;
  isOpen: boolean;
  onClose: () => void;
  onUseDesign: (site: BusinessWebsite) => void;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  site,
  isOpen,
  onClose,
  onUseDesign
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('mobile');
  const [activeTab, setActiveTab] = useState<'interactive' | 'photos'>('interactive');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !site) return null;

  const catMeta = CATEGORY_INFO[site.category] || CATEGORY_INFO.cafe;
  const designToken = getCategoryToken(site.category);

  // Collect all preview photos
  const allPhotos: string[] = [];
  if (site.coverUrl) allPhotos.push(site.coverUrl);
  if (Array.isArray(site.gallery)) {
    site.gallery.forEach(g => {
      if (g.imageUrl && !allPhotos.includes(g.imageUrl)) allPhotos.push(g.imageUrl);
    });
  }
  if (Array.isArray(site.items)) {
    site.items.forEach(i => {
      if (i.imageUrl && !allPhotos.includes(i.imageUrl)) allPhotos.push(i.imageUrl);
    });
  }

  const handleShare = async () => {
    const url = `${window.location.origin}/#site/${site.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: site.businessName,
          text: `Check out the ${site.businessName} website design on RaoSitez!`,
          url
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0F111E] text-white animate-fadeIn overflow-hidden">
      {/* Top Header - Compact (height ~56px) */}
      <header className="h-14 sm:h-16 px-3 sm:px-6 bg-[#14162B] border-b border-slate-800 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 active:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Back to gallery"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-bold text-white truncate max-w-[160px] sm:max-w-xs md:max-w-md font-['Fraunces']">
                {site.businessName}
              </h2>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF6B4A]/20 text-[#FF6B4A] border border-[#FF6B4A]/30 font-['Inter']">
                {catMeta.label}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate hidden xs:block font-['Inter']">
              raositez.in/{site.slug} · {site.city || 'India'}
            </p>
          </div>
        </div>

        {/* Viewport switchers & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Device Toggles */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 p-0.5 sm:p-1 rounded-xl">
            <button
              onClick={() => {
                setActiveTab('interactive');
                setDeviceMode('mobile');
              }}
              className={`min-h-[36px] min-w-[36px] p-1.5 rounded-lg text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                deviceMode === 'mobile' && activeTab === 'interactive'
                  ? 'bg-[#4338CA] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile Phone View (375px)"
              aria-label="Mobile preview"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setActiveTab('interactive');
                setDeviceMode('tablet');
              }}
              className={`min-h-[36px] min-w-[36px] p-1.5 rounded-lg text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer hidden xs:flex ${
                deviceMode === 'tablet' && activeTab === 'interactive'
                  ? 'bg-[#4338CA] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View (768px)"
              aria-label="Tablet preview"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setActiveTab('interactive');
                setDeviceMode('desktop');
              }}
              className={`min-h-[36px] min-w-[36px] p-1.5 rounded-lg text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer hidden md:flex ${
                deviceMode === 'desktop' && activeTab === 'interactive'
                  ? 'bg-[#4338CA] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View (1200px)"
              aria-label="Desktop preview"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleShare}
            className="min-h-[44px] min-w-[44px] p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
            title="Share Design Link"
            aria-label="Share Design"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Desktop/Tablet CTA Button in Header */}
          <button
            onClick={() => onUseDesign(site)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer font-['Inter']"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Use This Design</span>
          </button>
        </div>
      </header>

      {/* Main Preview Workspace */}
      <div className="flex-1 overflow-hidden relative flex flex-col justify-between bg-[#0B0D18]">
        {/* Device Switcher Pills on Small Mobile Viewport */}
        <div className="flex sm:hidden items-center justify-between px-3 py-1.5 bg-[#14162B]/80 border-b border-slate-800/80 text-[11px] font-['Inter']">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Mode:</span>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-2 py-0.5 rounded font-bold transition-colors ${
                activeTab === 'interactive' ? 'bg-[#4338CA] text-white' : 'text-slate-400'
              }`}
            >
              Interactive Site
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-2 py-0.5 rounded font-bold transition-colors ${
                activeTab === 'photos' ? 'bg-[#4338CA] text-white' : 'text-slate-400'
              }`}
            >
              Photos ({allPhotos.length})
            </button>
          </div>

          <span className="text-emerald-400 flex items-center gap-1 font-semibold text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Preview
          </span>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6 pb-20 sm:pb-6">
          {activeTab === 'interactive' ? (
            <div className="w-full h-full flex items-center justify-center">
              <DeviceFrame
                mode={deviceMode}
                onModeChange={setDeviceMode}
                siteSlug={site.slug}
                businessName={site.businessName}
                onOpenNewTab={() => {
                  window.open(`/#site/${site.slug}`, '_blank');
                }}
              >
                <SiteRenderer site={site} isPreview={true} />
              </DeviceFrame>
            </div>
          ) : (
            /* Screenshot & Photo Swipe Gallery */
            <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center space-y-4">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl relative">
                {allPhotos[selectedPhotoIndex] ? (
                  <img
                    src={allPhotos[selectedPhotoIndex]}
                    alt={`${site.businessName} preview ${selectedPhotoIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500">
                    No preview photo
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-white">
                  Photo {selectedPhotoIndex + 1} of {allPhotos.length}
                </div>
              </div>

              {/* Horizontal Photo Thumbnail Carousel */}
              <div className="w-full flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
                {allPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedPhotoIndex === idx
                        ? 'border-[#FF6B4A] scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Mobile Bottom Action Bar */}
        <div className="sticky bottom-0 left-0 right-0 p-3 sm:p-4 bg-[#14162B]/95 backdrop-blur-md border-t border-slate-800 flex items-center justify-between gap-3 z-30 font-['Inter']">
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs text-slate-400">
              Ready to launch your own website with this {catMeta.label} layout?
            </p>
            <p className="text-xs font-bold text-white">
              Complete setup at ₹999 · Ready in 24 hours
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none min-h-[44px] px-4 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-750 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
            >
              Back to Gallery
            </button>

            <button
              onClick={() => onUseDesign(site)}
              className="flex-[2] sm:flex-none min-h-[44px] px-5 py-2.5 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Use This Design</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
