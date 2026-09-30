import React, { useState } from 'react';
import {
  Globe,
  PlusCircle,
  ExternalLink,
  Edit3,
  QrCode,
  Share2,
  Trash2,
  Sparkles,
  HelpCircle,
  Settings,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite } from '../../types';
import { QRCodeModal } from '../common/QRCodeModal';
import { TemplatePreviewModal } from '../site/TemplatePreviewModal';

interface MobileDashboardProps {
  onCreateNew: () => void;
  onEditSite: (siteId: string) => void;
  onPreviewSite: (site: BusinessWebsite) => void;
}

export const MobileDashboard: React.FC<MobileDashboardProps> = ({
  onCreateNew,
  onEditSite,
  onPreviewSite
}) => {
  const { websites, deleteWebsite, setActiveView, user } = useApp();

  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [qrModalSite, setQrModalSite] = useState<BusinessWebsite | null>(null);
  const [previewSite, setPreviewSite] = useState<BusinessWebsite | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [showSupportModal, setShowSupportModal] = useState<boolean>(false);

  const filteredWebsites = websites.filter(site => {
    if (filter === 'published') return site.status === 'published';
    if (filter === 'draft') return site.status === 'draft';
    return true;
  });

  const handleShare = async (site: BusinessWebsite) => {
    const url = `${window.location.origin}/#site/${site.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: site.businessName,
          text: `Visit our official website: ${site.businessName}`,
          url
        });
        return;
      } catch {
        // Fallback
      }
    }
    await navigator.clipboard.writeText(url);
    setCopiedSlug(site.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const handleDelete = async (id: string) => {
    await deleteWebsite(id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] flex flex-col font-['Inter'] antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8E7F0] px-4 py-3 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#14162B] text-white flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-base font-extrabold text-[#14162B] font-['Fraunces']">
                RaoSitez
              </span>
              <span className="text-[10px] text-[#4338CA] font-bold block sm:inline sm:ml-1">
                Dashboard
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSupportModal(true)}
              className="min-h-[40px] px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-250 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#4338CA]" />
              <span className="hidden xs:inline">Support</span>
            </button>

            <button
              onClick={() => setActiveView('home')}
              className="min-h-[40px] px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 active:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Public Site →
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-6 pb-20">
        {/* Welcome Banner Card */}
        <div className="bg-gradient-to-br from-[#14162B] to-[#252A4A] text-white rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#FF6B4A] text-white font-['Inter']">
              <Sparkles className="w-3 h-3" />
              Creator Hub
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold font-['Fraunces'] tracking-tight">
              Welcome back, {user?.displayName || 'Business Owner'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Manage your published storefronts, edit catalogs, view direct WhatsApp enquiries, and track your online visitors.
            </p>

            <div className="pt-2">
              <button
                onClick={onCreateNew}
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Create New Website</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Header & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#14162B] font-['Fraunces']">
              My Websites ({filteredWebsites.length})
            </h2>
            <p className="text-xs text-[#51556E]">
              Tap any site to customize text, prices, or live status.
            </p>
          </div>

          {/* Published vs Draft Segmented Tabs */}
          <div className="flex items-center bg-white border border-[#E8E7F0] p-1 rounded-xl shadow-2xs self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-[#14162B] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({websites.length})
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'published' ? 'bg-[#14162B] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Published
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'draft' ? 'bg-[#14162B] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Drafts
            </button>
          </div>
        </div>

        {/* Website Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWebsites.map(site => {
            const isPublished = site.status === 'published';

            return (
              <div
                key={site.id}
                className="bg-white rounded-2xl border border-[#E8E7F0] shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Thumbnail & Title */}
                <div>
                  <div className="relative h-40 bg-slate-100 overflow-hidden">
                    <img
                      src={
                        site.coverUrl ||
                        site.items?.[0]?.imageUrl ||
                        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'
                      }
                      alt={site.businessName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                          isPublished
                            ? 'bg-emerald-500 text-white shadow-xs'
                            : 'bg-amber-500 text-white shadow-xs'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {site.status}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#14162B]/80 text-white backdrop-blur-md">
                        {site.category}
                      </span>
                    </div>

                    {/* Title in thumbnail */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-bold text-base truncate font-['Fraunces']">
                        {site.businessName}
                      </h3>
                      <p className="text-slate-300 text-xs truncate">
                        raositez.in/{site.slug}
                      </p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 space-y-2 text-xs text-[#51556E]">
                    <p className="line-clamp-2">{site.tagline}</p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Updated {new Date(site.updatedAt || site.createdAt || Date.now()).toLocaleDateString()}</span>
                      <span className="font-medium text-slate-700">
                        {site.items?.length || 0} Products / Items
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Edit, Preview, Share, QR, Delete) */}
                <div className="p-3 bg-[#FAFAF8] border-t border-[#E8E7F0] flex items-center justify-between gap-1.5">
                  <button
                    onClick={() => onEditSite(site.id)}
                    className="flex-1 min-h-[40px] px-3 py-1.5 bg-[#4338CA] hover:bg-[#372ea8] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Site</span>
                  </button>

                  <button
                    onClick={() => onPreviewSite(site)}
                    className="min-h-[40px] px-3 py-1.5 bg-white border border-[#E8E7F0] hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1"
                    title="Open Live Website"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Site</span>
                  </button>

                  <button
                    onClick={() => handleShare(site)}
                    className="min-h-[40px] min-w-[40px] p-2 bg-white border border-[#E8E7F0] hover:bg-slate-50 text-slate-600 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                    title="Share Link"
                  >
                    {copiedSlug === site.slug ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => setQrModalSite(site)}
                    className="min-h-[40px] min-w-[40px] p-2 bg-white border border-[#E8E7F0] hover:bg-slate-50 text-slate-600 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                    title="QR Code"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setDeleteConfirmId(site.id)}
                    className="min-h-[40px] min-w-[40px] p-2 bg-white border border-[#E8E7F0] hover:bg-rose-50 text-rose-500 rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                    title="Delete Site"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl border border-slate-200 animate-reveal">
            <h3 className="text-base font-bold text-slate-900">Delete this website?</h3>
            <p className="text-xs text-slate-600">
              Are you sure you want to remove this website? This action cannot be undone.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 min-h-[44px] py-2 bg-slate-100 hover:bg-slate-200 text-xs font-semibold rounded-xl text-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 min-h-[44px] py-2 bg-rose-600 hover:bg-rose-700 text-xs font-bold rounded-xl text-white shadow-md cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Help & Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-slate-200 animate-reveal">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900 font-['Fraunces']">
                RaoSitez Support
              </h3>
              <button
                onClick={() => setShowSupportModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Need assistance modifying your website, linking your custom domain, or configuring WhatsApp notifications? Our engineers are on standby 24/7.
            </p>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold text-xs text-emerald-950 block">WhatsApp Priority Helpline</span>
                <span className="text-[11px] text-emerald-800">+91 98765 43210 (Reply in &lt; 15 mins)</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowSupportModal(false)}
                className="px-4 py-2 bg-[#14162B] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      <QRCodeModal
        site={qrModalSite}
        isOpen={Boolean(qrModalSite)}
        onClose={() => setQrModalSite(null)}
      />

      {/* Template Preview Modal */}
      <TemplatePreviewModal
        site={previewSite}
        isOpen={Boolean(previewSite)}
        onClose={() => setPreviewSite(null)}
        onUseDesign={s => onEditSite(s.id)}
      />
    </div>
  );
};
