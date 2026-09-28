import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  PlusCircle,
  Globe,
  Layers,
  Palette,
  MessageSquare,
  IndianRupee,
  Server,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { OverviewTab } from './OverviewTab';
import { AllWebsitesTab } from './AllWebsitesTab';
import { CategoriesTab } from './CategoriesTab';
import { TemplatesTab } from './TemplatesTab';
import { LeadsTab } from './LeadsTab';
import { PricingPlansTab } from './PricingPlansTab';
import { HostingDomainTab } from './HostingDomainTab';
import { SettingsTab } from './SettingsTab';
import { BatchManagerTab } from './BatchManagerTab';
import { BuilderWizard, BuilderInitialData } from './BuilderWizard';
import { BusinessWebsite } from '../../types';
import { QRCodeModal } from '../common/QRCodeModal';

export const AdminLayout: React.FC = () => {
  const {
    user,
    isAdminAuthenticated,
    loginAdminWithGoogle,
    loginDemoAdmin,
    logoutAdmin,
    setActiveView,
    leads,
    websiteRequests = []
  } = useApp();

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isBuilderOpen, setIsBuilderOpen] = useState<boolean>(false);
  const [editingSiteId, setEditingSiteId] = useState<string | null>(null);
  const [builderInitialData, setBuilderInitialData] = useState<BuilderInitialData | null>(null);
  const [qrModalSite, setQrModalSite] = useState<BusinessWebsite | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const newLeadsCount = (leads || []).filter(l => l.status === 'new').length;
  const newRequestsCount = (websiteRequests || []).filter(r => r.status === 'New').length;
  const totalIncomingBadge = newRequestsCount + newLeadsCount;

  const handleStartCreate = (initialData?: BuilderInitialData) => {
    setEditingSiteId(null);
    setBuilderInitialData(initialData || null);
    setIsBuilderOpen(true);
  };

  const handleStartEdit = (id: string) => {
    setEditingSiteId(id);
    setBuilderInitialData(null);
    setIsBuilderOpen(true);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'batches', label: 'Batches (Batch 001 Active)', icon: Layers, badge: '20 Refs' },
    { id: 'builder', label: 'Create New Website', icon: PlusCircle, isAction: true },
    { id: 'websites', label: 'All Websites (Active Batch)', icon: Globe },
    { id: 'categories', label: 'Business Categories', icon: Layers },
    { id: 'templates', label: 'Templates', icon: Palette },
    { id: 'leads', label: 'Leads & Enquiries', icon: MessageSquare, badge: totalIncomingBadge > 0 ? totalIncomingBadge : null },
    { id: 'pricing', label: 'Pricing Plans', icon: IndianRupee },
    { id: 'hosting', label: 'Hosting & Publishing', icon: Server },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // If not authenticated, show friendly operator login screen
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/30">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">RaoSitez Admin Portal</h2>
            <p className="text-xs text-slate-400 mt-1">
              Secure dashboard for platform owner & website manager
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-left space-y-2 text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Owner Access: raoamityadavak123@gmail.com</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Sign in with your Google account or access the pre-authenticated operator dashboard immediately.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={loginDemoAdmin}
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              Enter Operator Console
            </button>

            <button
              onClick={loginAdminWithGoogle}
              className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Sign In with Google
            </button>

            <button
              onClick={() => setActiveView('home')}
              className="text-xs text-slate-500 hover:text-slate-300 pt-2 block mx-auto cursor-pointer"
            >
              ← Back to RaoSitez Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Full Screen Multi-step builder wizard
  if (isBuilderOpen) {
    return (
      <BuilderWizard
        editSiteId={editingSiteId}
        initialData={builderInitialData}
        onCancel={() => {
          setIsBuilderOpen(false);
          setBuilderInitialData(null);
        }}
        onComplete={() => {
          setIsBuilderOpen(false);
          setBuilderInitialData(null);
          setActiveTab('websites');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-['Plus_Jakarta_Sans']">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-950 text-slate-400 border-r border-slate-800 shrink-0">
        {/* Brand */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-600/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-extrabold text-white tracking-tight">
                RaoSitez
              </span>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                Admin Console
              </p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            if (item.isAction) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleStartCreate()}
                  className="w-full mt-2 mb-3 py-2.5 px-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/25 flex items-center gap-2.5 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Footer in Sidebar */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="truncate max-w-[150px] font-medium text-slate-300">
              {user?.email || 'raoamityadavak123@gmail.com'}
            </span>
            <button
              onClick={logoutAdmin}
              title="Logout"
              className="text-slate-500 hover:text-rose-400 transition-colors p-1"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setActiveView('home')}
            className="w-full py-2 px-2.5 text-[11px] font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-850 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Public Website</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center text-slate-600 hover:bg-slate-100 active:bg-slate-200 rounded-xl cursor-pointer"
              aria-label={mobileSidebarOpen ? 'Close admin sidebar' : 'Open admin sidebar'}
              aria-expanded={mobileSidebarOpen}
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 capitalize">
                {activeTab.replace('_', ' ')}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleStartCreate()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>New Site</span>
            </button>

            <button
              onClick={() => setActiveView('home')}
              className="min-h-[40px] inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">RaoSitez</span> Home
            </button>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div className="md:hidden bg-slate-950 p-4 text-slate-400 space-y-2 border-b border-slate-800">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileSidebarOpen(false);
                    if (item.isAction) {
                      handleStartCreate();
                    } else {
                      setActiveTab(item.id);
                    }
                  }}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-medium flex items-center gap-2 ${
                    activeTab === item.id ? 'bg-indigo-600 text-white' : 'hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Dynamic Tab Body */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && (
              <OverviewTab
                onCreateWebsite={handleStartCreate}
                onEditWebsite={handleStartEdit}
                onSwitchTab={tab => setActiveTab(tab)}
                onShowQR={site => setQrModalSite(site)}
              />
            )}

            {activeTab === 'batches' && <BatchManagerTab />}

            {activeTab === 'websites' && (
              <AllWebsitesTab
                onCreateWebsite={handleStartCreate}
                onEditWebsite={handleStartEdit}
                onShowQR={site => setQrModalSite(site)}
                onPreviewSite={site => setActiveView('site', site.slug)}
              />
            )}

            {activeTab === 'categories' && (
              <CategoriesTab
                onSelectCategory={(catId, referenceId) => {
                  handleStartCreate({ category: catId, referenceSiteId: referenceId });
                }}
              />
            )}

            {activeTab === 'templates' && (
              <TemplatesTab
                onCreateWithTemplate={templateId => {
                  handleStartCreate();
                }}
              />
            )}

            {activeTab === 'leads' && (
              <LeadsTab
                onBuildForRequest={req => {
                  handleStartCreate({
                    businessName: req.businessName,
                    category: req.category,
                    ownerName: req.ownerName,
                    phone: req.phone,
                    city: req.city,
                    notes: req.notes
                  });
                }}
              />
            )}

            {activeTab === 'pricing' && <PricingPlansTab />}

            {activeTab === 'hosting' && <HostingDomainTab />}

            {activeTab === 'settings' && <SettingsTab />}
          </div>
        </main>
      </div>

      {/* QR Code Modal for any site in admin */}
      <QRCodeModal
        site={qrModalSite}
        isOpen={Boolean(qrModalSite)}
        onClose={() => setQrModalSite(null)}
      />
    </div>
  );
};
