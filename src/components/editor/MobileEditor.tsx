import React, { useState } from 'react';
import {
  ArrowLeft,
  Smartphone,
  Tablet,
  Monitor,
  Check,
  Palette,
  Layers,
  FileText,
  Image as ImageIcon,
  Settings as SettingsIcon,
  ChevronUp,
  ChevronDown,
  Trash2,
  Plus,
  RotateCcw,
  RotateCw,
  Eye,
  ExternalLink,
  Sparkles,
  X,
  Upload
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite, ItemOrService } from '../../types';
import { DeviceFrame } from '../common/DeviceFrame';
import { SiteRenderer } from '../site/SiteRenderer';
import { TEMPLATES } from '../../data/templateDefs';

interface MobileEditorProps {
  siteId: string | null;
  onBackToDashboard: () => void;
}

export const MobileEditor: React.FC<MobileEditorProps> = ({
  siteId,
  onBackToDashboard
}) => {
  const { websites, updateWebsite, setActiveView } = useApp();

  const currentSite = websites.find(w => w.id === siteId || w.slug === siteId) || websites[0];

  // Working site state
  const [site, setSite] = useState<BusinessWebsite>(currentSite);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [previewDeviceMode, setPreviewDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('mobile');

  // Active Bottom Sheet ('design' | 'sections' | 'content' | 'images' | 'settings' | null)
  const [activeSheet, setActiveSheet] = useState<
    'design' | 'sections' | 'content' | 'images' | 'settings' | null
  >(null);

  // Undo / Redo history
  const [history, setHistory] = useState<BusinessWebsite[]>([currentSite]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const applySiteChange = (updater: (prev: BusinessWebsite) => BusinessWebsite) => {
    setSite(prev => {
      const next = updater(prev);
      // Push to history
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(next);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      return next;
    });
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
    }, 600);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setSite(history[nextIndex]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setSite(history[nextIndex]);
    }
  };

  const handlePublish = async () => {
    setSaveStatus('saving');
    await updateWebsite(site.id, { ...site, status: 'published', updatedAt: new Date().toISOString() });
    setSaveStatus('saved');
    setToastMessage(`"${site.businessName}" published successfully!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Section Reordering (Move Up / Down)
  const moveSection = (index: number, direction: 'up' | 'down') => {
    const sections = [...site.sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;

    const temp = sections[index];
    sections[index] = sections[targetIndex];
    sections[targetIndex] = temp;

    // Recalculate order
    sections.forEach((sec, idx) => {
      sec.order = idx + 1;
    });

    applySiteChange(prev => ({ ...prev, sections }));
  };

  const toggleSection = (id: string) => {
    const sections = site.sections.map(sec =>
      sec.id === id ? { ...sec, isEnabled: !sec.isEnabled } : sec
    );
    applySiteChange(prev => ({ ...prev, sections }));
  };

  return (
    <div className="min-h-screen bg-[#0F111E] text-white flex flex-col font-['Inter'] antialiased overflow-hidden select-none">
      {/* Top Toolbar */}
      <header className="h-14 sm:h-16 px-3 sm:px-6 bg-[#14162B] border-b border-slate-800 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={onBackToDashboard}
            className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-300 hover:text-white active:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            title="Back to Dashboard"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="min-w-0">
            <h2 className="text-xs sm:text-sm font-bold text-white truncate max-w-[140px] sm:max-w-xs font-['Fraunces']">
              {site.businessName}
            </h2>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full ${saveStatus === 'saved' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
              <span className="capitalize">{saveStatus}</span>
            </div>
          </div>
        </div>

        {/* Undo / Redo + Viewport + Publish */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={handleUndo}
            disabled={historyIndex <= 0}
            className={`min-h-[38px] min-w-[38px] p-2 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
              historyIndex > 0 ? 'text-slate-300 hover:text-white active:bg-slate-800' : 'text-slate-600 opacity-40 cursor-not-allowed'
            }`}
            title="Undo"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleRedo}
            disabled={historyIndex >= history.length - 1}
            className={`min-h-[38px] min-w-[38px] p-2 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
              historyIndex < history.length - 1 ? 'text-slate-300 hover:text-white active:bg-slate-800' : 'text-slate-600 opacity-40 cursor-not-allowed'
            }`}
            title="Redo"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* Device toggle */}
          <div className="hidden xs:flex items-center bg-slate-900 border border-slate-800 p-0.5 rounded-xl">
            <button
              onClick={() => setPreviewDeviceMode('mobile')}
              className={`min-h-[34px] min-w-[34px] p-1.5 rounded-lg text-xs flex items-center justify-center cursor-pointer ${
                previewDeviceMode === 'mobile' ? 'bg-[#4338CA] text-white' : 'text-slate-400'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPreviewDeviceMode('desktop')}
              className={`min-h-[34px] min-w-[34px] p-1.5 rounded-lg text-xs flex items-center justify-center cursor-pointer ${
                previewDeviceMode === 'desktop' ? 'bg-[#4338CA] text-white' : 'text-slate-400'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handlePublish}
            className="min-h-[40px] px-3.5 sm:px-4 py-2 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Publish</span>
          </button>
        </div>
      </header>

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xl flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Workspace Preview */}
      <div className="flex-1 overflow-auto bg-[#0B0D18] flex items-center justify-center p-2 sm:p-6 pb-20 sm:pb-24 relative">
        <DeviceFrame
          mode={previewDeviceMode}
          onModeChange={setPreviewDeviceMode}
          siteSlug={site.slug}
          businessName={site.businessName}
          onOpenNewTab={() => setActiveView('site', site.slug)}
        >
          <SiteRenderer site={site} isPreview={true} />
        </DeviceFrame>
      </div>

      {/* Bottom Sheet Modal Drawer when a toolbar option is tapped */}
      {activeSheet && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex flex-col justify-end animate-fadeIn">
          <div
            className="bg-[#14162B] text-white border-t border-slate-800 rounded-t-3xl max-h-[80vh] flex flex-col shadow-2xl animate-reveal"
            onClick={e => e.stopPropagation()}
          >
            {/* Sheet Handle & Header */}
            <div className="p-3 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2" />
              <div className="pt-2">
                <span className="text-xs font-bold text-[#FF6B4A] uppercase tracking-wider block">
                  Website Customizer
                </span>
                <h3 className="text-sm sm:text-base font-extrabold capitalize">
                  {activeSheet} Settings
                </h3>
              </div>
              <button
                onClick={() => setActiveSheet(null)}
                className="min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white flex items-center justify-center rounded-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sheet Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {/* TAB 1: DESIGN */}
              {activeSheet === 'design' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      Template Theme
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {TEMPLATES.map(tpl => (
                        <button
                          key={tpl.id}
                          onClick={() => applySiteChange(prev => ({ ...prev, templateId: tpl.id }))}
                          className={`p-3 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                            site.templateId === tpl.id
                              ? 'bg-[#4338CA] border-[#4338CA] text-white font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="truncate">{tpl.name}</div>
                          <div className="text-[10px] text-slate-400 font-normal mt-0.5">
                            {tpl.style}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      Primary Accent Color
                    </label>
                    <div className="flex items-center gap-3">
                      {['#4338CA', '#FF6B4A', '#059669', '#D97706', '#E11D48', '#0F172A'].map(color => (
                        <button
                          key={color}
                          onClick={() => applySiteChange(prev => ({ ...prev, primaryColor: color }))}
                          className={`w-9 h-9 rounded-full border-2 transition-transform cursor-pointer ${
                            site.primaryColor === color ? 'border-white scale-110 shadow-lg' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SECTIONS */}
              {activeSheet === 'sections' && (
                <div className="space-y-2">
                  <span className="text-xs text-slate-400 block mb-2">
                    Enable, disable, or reorder sections with accessible Move Up / Down controls.
                  </span>
                  {site.sections.map((sec, idx) => (
                    <div
                      key={sec.id}
                      className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={sec.isEnabled}
                          onChange={() => toggleSection(sec.id)}
                          className="w-4 h-4 rounded text-indigo-600 cursor-pointer"
                        />
                        <span className={`text-xs font-semibold ${sec.isEnabled ? 'text-white' : 'text-slate-500 line-through'}`}>
                          {sec.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => moveSection(idx, 'up')}
                          disabled={idx === 0}
                          className={`p-1.5 rounded-lg ${
                            idx === 0 ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                          }`}
                          aria-label="Move Up"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveSection(idx, 'down')}
                          disabled={idx === site.sections.length - 1}
                          className={`p-1.5 rounded-lg ${
                            idx === site.sections.length - 1 ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                          }`}
                          aria-label="Move Down"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: CONTENT */}
              {activeSheet === 'content' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={site.businessName}
                      onChange={e => applySiteChange(prev => ({ ...prev, businessName: e.target.value }))}
                      className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Tagline</label>
                    <input
                      type="text"
                      value={site.tagline}
                      onChange={e => applySiteChange(prev => ({ ...prev, tagline: e.target.value }))}
                      className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={site.description}
                      onChange={e => applySiteChange(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={site.phone}
                        onChange={e => applySiteChange(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">WhatsApp</label>
                      <input
                        type="tel"
                        value={site.whatsapp}
                        onChange={e => applySiteChange(prev => ({ ...prev, whatsapp: e.target.value }))}
                        className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Opening Hours</label>
                    <input
                      type="text"
                      value={site.openingHours}
                      onChange={e => applySiteChange(prev => ({ ...prev, openingHours: e.target.value }))}
                      className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: IMAGES */}
              {activeSheet === 'images' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Logo Image URL</label>
                    <input
                      type="url"
                      value={site.logoUrl || ''}
                      onChange={e => applySiteChange(prev => ({ ...prev, logoUrl: e.target.value }))}
                      className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Cover Image URL</label>
                    <input
                      type="url"
                      value={site.coverUrl || ''}
                      onChange={e => applySiteChange(prev => ({ ...prev, coverUrl: e.target.value }))}
                      className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}

              {/* TAB 5: SETTINGS */}
              {activeSheet === 'settings' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Website URL Slug</label>
                    <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 min-h-[44px]">
                      <span className="text-xs text-slate-500">raositez.in/</span>
                      <input
                        type="text"
                        value={site.slug}
                        onChange={e => applySiteChange(prev => ({ ...prev, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') }))}
                        className="flex-1 bg-transparent text-xs text-white outline-hidden pl-1 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Booking Button Label</label>
                    <input
                      type="text"
                      value={site.bookingCtaLabel || ''}
                      onChange={e => applySiteChange(prev => ({ ...prev, bookingCtaLabel: e.target.value }))}
                      className="w-full min-h-[44px] px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sheet Footer */}
            <div className="p-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveSheet(null)}
                className="px-5 py-2.5 bg-[#4338CA] hover:bg-[#372ea8] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sticky Toolbar (5 items) */}
      <footer className="fixed bottom-0 left-0 right-0 h-16 bg-[#14162B]/95 backdrop-blur-md border-t border-slate-800 z-30 px-2 pb-safe">
        <div className="max-w-md mx-auto h-full grid grid-cols-5 items-center">
          <button
            onClick={() => setActiveSheet('design')}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors cursor-pointer ${
              activeSheet === 'design' ? 'text-[#FF6B4A]' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Design</span>
          </button>

          <button
            onClick={() => setActiveSheet('sections')}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors cursor-pointer ${
              activeSheet === 'sections' ? 'text-[#FF6B4A]' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Sections</span>
          </button>

          <button
            onClick={() => setActiveSheet('content')}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors cursor-pointer ${
              activeSheet === 'content' ? 'text-[#FF6B4A]' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Content</span>
          </button>

          <button
            onClick={() => setActiveSheet('images')}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors cursor-pointer ${
              activeSheet === 'images' ? 'text-[#FF6B4A]' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Images</span>
          </button>

          <button
            onClick={() => setActiveSheet('settings')}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors cursor-pointer ${
              activeSheet === 'settings' ? 'text-[#FF6B4A]' : 'text-slate-400 hover:text-white'
            }`}
          >
            <SettingsIcon className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-1">Settings</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
