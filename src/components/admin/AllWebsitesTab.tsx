import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite, BusinessCategory, WebsiteStatus } from '../../types';
import {
  Search,
  Plus,
  Filter,
  ExternalLink,
  Edit,
  Copy,
  Archive,
  Trash2,
  QrCode,
  Globe,
  CheckCircle2,
  Clock,
  MoreVertical
} from 'lucide-react';

interface AllWebsitesTabProps {
  onCreateWebsite: () => void;
  onEditWebsite: (id: string) => void;
  onShowQR: (site: BusinessWebsite) => void;
  onPreviewSite: (site: BusinessWebsite) => void;
}

export const AllWebsitesTab: React.FC<AllWebsitesTabProps> = ({
  onCreateWebsite,
  onEditWebsite,
  onShowQR,
  onPreviewSite
}) => {
  const {
    websites,
    duplicateWebsite,
    archiveWebsite,
    publishWebsite,
    deleteWebsite,
    setActiveView
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = websites.filter(site => {
    const matchesSearch =
      site.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.phone.includes(searchQuery);

    const matchesStatus = selectedStatus === 'all' || site.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">All Client Websites</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing {filtered.length} of {websites.length} total business portals
            </p>
          </div>

          <button
            onClick={onCreateWebsite}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            Create New Website
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by business, slug, owner or phone..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published & Live</option>
              <option value="draft">Drafts</option>
              <option value="pending_approval">Pending Approval</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="all">All Categories</option>
              <option value="cafe">Café & Restaurant</option>
              <option value="clinic">Clinic & Doctor</option>
              <option value="salon">Salon & Spa</option>
              <option value="retail">Boutique & Retail</option>
              <option value="gym">Gym & Fitness</option>
              <option value="coaching">Coaching & Tutors</option>
            </select>
          </div>
        </div>
      </div>

      {/* Website Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(site => (
          <div
            key={site.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Top thumbnail & status */}
            <div className="relative h-44 bg-slate-100 overflow-hidden">
              <img
                src={site.coverUrl || site.items[0]?.imageUrl}
                alt={site.businessName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-900 shadow-xs">
                  {site.category}
                </span>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs ${
                    site.status === 'published'
                      ? 'bg-emerald-500 text-white'
                      : site.status === 'pending_approval'
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-700 text-white'
                  }`}
                >
                  {site.status.replace('_', ' ')}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-bold text-sm truncate">{site.businessName}</h3>
                <p className="font-mono text-[11px] text-slate-300 truncate">
                  raositez.in/{site.slug}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Owner: {site.ownerName || 'Not specified'}</span>
                  <span>{site.items.length} Items</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">{site.phone}</span>
                  <span className="font-bold text-slate-900">₹{site.amountPaid || 1499} ({site.paymentStatus})</span>
                </div>
                {site.customDomain?.domain && (
                  <div className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded flex items-center gap-1 truncate">
                    <Globe className="w-3 h-3 shrink-0" />
                    <span>{site.customDomain.domain}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => onEditWebsite(site.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 px-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <Edit className="w-3.5 h-3.5" />
                  Edit
                </button>

                <button
                  onClick={() => setActiveView('site', site.slug)}
                  title="View Live"
                  className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onShowQR(site)}
                  title="Generate QR Code"
                  className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => duplicateWebsite(site.id)}
                  title="Duplicate Website"
                  className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>

                {site.status === 'published' ? (
                  <button
                    onClick={() => archiveWebsite(site.id)}
                    title="Archive Website"
                    className="p-1.5 text-amber-600 hover:bg-amber-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <Archive className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => publishWebsite(site.id)}
                    title="Publish Live"
                    className="p-1.5 text-emerald-600 hover:bg-emerald-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete ${site.businessName}?`)) {
                      deleteWebsite(site.id);
                    }
                  }}
                  title="Delete Website"
                  className="p-1.5 text-rose-500 hover:bg-rose-50 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
