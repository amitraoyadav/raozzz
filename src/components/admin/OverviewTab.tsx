import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Globe,
  CheckCircle2,
  FileClock,
  Users,
  IndianRupee,
  TrendingUp,
  Plus,
  ExternalLink,
  MessageSquare,
  QrCode,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BusinessWebsite } from '../../types';

interface OverviewTabProps {
  onCreateWebsite: () => void;
  onEditWebsite: (id: string) => void;
  onSwitchTab: (tab: string) => void;
  onShowQR: (site: BusinessWebsite) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  onCreateWebsite,
  onEditWebsite,
  onSwitchTab,
  onShowQR
}) => {
  const { websites, leads, revenueMetrics, setActiveView } = useApp();

  const totalSites = websites.length;
  const liveSites = websites.filter(w => w.status === 'published').length;
  const draftSites = websites.filter(w => w.status === 'draft').length;
  const pendingSites = websites.filter(w => w.status === 'pending_approval').length;
  const totalCustomers = totalSites;

  const statCards = [
    {
      title: 'Total Websites',
      value: totalSites,
      sub: `${liveSites} live on web`,
      icon: Globe,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
    },
    {
      title: 'Live Websites',
      value: liveSites,
      sub: 'Publicly accessible',
      icon: CheckCircle2,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      title: 'Pending Approvals',
      value: pendingSites,
      sub: 'Awaiting client OK',
      icon: FileClock,
      color: 'bg-amber-50 text-amber-700 border-amber-100'
    },
    {
      title: 'Draft Websites',
      value: draftSites,
      sub: 'In-progress edits',
      icon: FileClock,
      color: 'bg-slate-50 text-slate-700 border-slate-200'
    },
    {
      title: 'Total Revenue',
      value: `₹${revenueMetrics.totalRevenue.toLocaleString('en-IN')}`,
      sub: `${revenueMetrics.totalPaidWebsites} client payments recorded`,
      icon: IndianRupee,
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      title: 'Monthly Revenue',
      value: `₹${revenueMetrics.monthlyRevenue.toLocaleString('en-IN')}`,
      sub: 'This billing cycle',
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-700 border-purple-100'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Top Welcome & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RaoSitez Agency Operator Console</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome, Amit Rao
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage your client websites, incoming leads, custom domains, and pricing from one centralized dashboard.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onSwitchTab('leads')}
            className="flex-1 sm:flex-none min-h-[40px] px-3.5 sm:px-4 py-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
            <span>Leads ({leads.filter(l => l.status === 'new').length} New)</span>
          </button>

          <button
            onClick={onCreateWebsite}
            className="flex-1 sm:flex-none min-h-[40px] px-4 sm:px-5 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Create Website</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map(stat => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 truncate">{stat.title}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block font-['Plus_Jakarta_Sans']">
                  {stat.value}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1 truncate">
                  {stat.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Websites & Recent Leads Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Websites List (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">Recent Customer Websites</h3>
              <p className="text-xs text-slate-500">Latest business portals created</p>
            </div>
            <button
              onClick={() => onSwitchTab('websites')}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
            >
              View All ({websites.length}) →
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {websites.slice(0, 5).map(site => (
              <div
                key={site.id}
                className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/50 rounded-xl px-2 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={site.logoUrl || site.coverUrl}
                      alt={site.businessName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {site.businessName}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                      <span>raositez.in/{site.slug}</span>
                      <span>·</span>
                      <span className="capitalize">{site.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full capitalize ${
                      site.status === 'published'
                        ? 'bg-emerald-50 text-emerald-700'
                        : site.status === 'pending_approval'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {site.status.replace('_', ' ')}
                  </span>

                  <button
                    onClick={() => setActiveView('site', site.slug)}
                    title="Open Live Website"
                    className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onShowQR(site)}
                    title="Shop QR Code"
                    className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onEditWebsite(site.id)}
                    className="px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Leads Inbox (1 Col) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Latest Customer Leads</h3>
              <button
                onClick={() => onSwitchTab('leads')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer"
              >
                Inbox ({leads.length})
              </button>
            </div>

            <div className="space-y-3">
              {leads.slice(0, 4).map(lead => (
                <div key={lead.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 truncate">{lead.customerName}</span>
                    <span className="text-[10px] text-slate-400">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-mono">{lead.customerPhone}</p>
                  <p className="text-slate-500 line-clamp-2 text-[11px] pt-1 leading-snug">
                    {lead.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={() => onSwitchTab('pricing')}
              className="w-full py-2.5 px-3 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Manage Service Pricing (₹999 / ₹1499 / ₹1999)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
