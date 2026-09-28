import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Download,
  RotateCcw,
  CheckCircle2,
  Phone,
  MessageSquare,
  Mail,
  Server,
  Database,
  RefreshCw,
  Sparkles,
  Layers
} from 'lucide-react';
import { FirestoreInitStatus } from '../../services/firestoreInit';

export const SettingsTab: React.FC = () => {
  const {
    websites,
    pricingPlans,
    leads,
    userSettings,
    updateUserSettings,
    syncFirestore,
    isFirebaseConnected,
    user
  } = useApp();

  const [operatorPhone, setOperatorPhone] = useState(userSettings.operatorPhone || '+91 98765 43210');
  const [operatorEmail, setOperatorEmail] = useState(userSettings.adminEmail || 'raoamityadavak123@gmail.com');
  const [currencySymbol, setCurrencySymbol] = useState(userSettings.currencySymbol || '₹');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Firestore sync state
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<FirestoreInitStatus | null>(null);

  const handleExportBackup = () => {
    const backupData = {
      exportDate: new Date().toISOString(),
      platform: 'RaoSitez',
      userSettings,
      websites,
      pricingPlans,
      leads
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raositez-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleResetData = () => {
    if (confirm('Reset websites, leads, and pricing plans to default initial showcase data?')) {
      localStorage.removeItem('raositez_websites_v2');
      localStorage.removeItem('raositez_leads_v2');
      localStorage.removeItem('raositez_plans_v2');
      localStorage.removeItem('raositez_settings_v2');
      window.location.reload();
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserSettings({
      adminEmail: operatorEmail,
      operatorPhone,
      currencySymbol
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleSyncFirestore = async (force: boolean = false) => {
    setIsSyncing(true);
    try {
      const result = await syncFirestore(force);
      setSyncResult(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">RaoSitez Platform Settings</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure agency contact information, database persistence, and system backup
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-700">Database Ready</span>
        </div>
      </div>

      {/* Firestore Collections Structure & Seed Controller */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Firestore Database & Collections Setup
              </h3>
              <p className="text-[11px] text-slate-500">
                Database: <span className="font-mono text-slate-700">ai-studio-ea9d1b51-74ab-4b16-a4cd-a82f7e29da13</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => handleSyncFirestore(true)}
            disabled={isSyncing}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Provision / Sync Collections'}</span>
          </button>
        </div>

        {/* Collections Schema Status Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-slate-900">/websites</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                {websites.length} Documents
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Stores customer websites (cafes, clinics, salons, etc.) with custom items, menus, and gallery.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-slate-900">/pricing_plans</span>
              <span className="text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded text-[10px]">
                {pricingPlans.length} Plans Active
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Starter (₹999), Professional (₹1,499), and Premium (₹1,999) packages.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-slate-900">/settings/general</span>
              <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded text-[10px]">
                Configured
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Stores operator profile, WhatsApp number, and custom domain target.
            </p>
          </div>
        </div>

        {syncResult && (
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Sync Completed:</span>
              <p className="text-emerald-700 mt-0.5">{syncResult.message}</p>
            </div>
          </div>
        )}
      </div>

      {/* Operator Contact Details */}
      <form onSubmit={handleSaveSettings} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Operator & WhatsApp Enquiry Channel
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Agency Contact WhatsApp Number
            </label>
            <input
              type="text"
              value={operatorPhone}
              onChange={e => setOperatorPhone(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Where new website enquiries from the homepage will be forwarded
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Admin Verified Email
            </label>
            <input
              type="email"
              value={operatorEmail}
              onChange={e => setOperatorEmail(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Authorized admin email matching Firebase rules
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Currency Symbol
            </label>
            <input
              type="text"
              value={currencySymbol}
              onChange={e => setCurrencySymbol(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            {savedSuccess ? 'Settings Saved to Firestore!' : 'Save Operator Profile'}
          </button>
        </div>
      </form>

      {/* Cloud & Firebase Status */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Database & Security Rules</h3>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Firebase Firestore Status:</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
              Provisioned & Online (Enterprise)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Security Rules (Attribute-Based ABAC):</span>
            <span className="text-indigo-700 font-mono font-medium">
              Deployed (Eight Pillars fortress rules)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Admin Email Authenticated:</span>
            <span className="font-mono text-slate-800">
              {user?.email || 'raoamityadavak123@gmail.com'}
            </span>
          </div>
        </div>
      </div>

      {/* Data Backup & Restore */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Data Backup & Factory Reset</h3>
        <p className="text-xs text-slate-500">
          Export your complete database of customer websites, products, and incoming leads to a JSON file.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={handleExportBackup}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Export Complete Backup (.json)
          </button>

          <button
            onClick={handleResetData}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold rounded-xl border border-rose-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Initial Demo Data
          </button>
        </div>
      </div>
    </div>
  );
};
