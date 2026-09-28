import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LeadEnquiry, WebsiteRequest } from '../../types';
import {
  MessageSquare,
  Phone,
  Calendar,
  Search,
  Sparkles,
  Building2,
  MapPin,
  Wand2,
  UserCheck
} from 'lucide-react';

interface LeadsTabProps {
  onBuildForRequest?: (req: WebsiteRequest) => void;
}

export const LeadsTab: React.FC<LeadsTabProps> = ({ onBuildForRequest }) => {
  const {
    leads,
    updateLeadStatus,
    discountLeads,
    websiteRequests = [],
    updateWebsiteRequestStatus
  } = useApp();

  const [activeTab, setActiveTab] = useState<'requests' | 'leads' | 'discounts'>('requests');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Requests filtering
  const filteredRequests = (websiteRequests || []).filter(r => {
    const matchesStatus = filterStatus === 'all' || r.status.toLowerCase() === filterStatus.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesStatus;

    const matchesSearch =
      r.businessName.toLowerCase().includes(query) ||
      r.ownerName.toLowerCase().includes(query) ||
      r.phone.includes(query) ||
      r.category.toLowerCase().includes(query) ||
      r.city.toLowerCase().includes(query) ||
      (r.notes && r.notes.toLowerCase().includes(query));

    return matchesStatus && matchesSearch;
  });

  // Website enquiries filtering
  const filtered = (leads || []).filter(l => {
    const matchesStatus = filterStatus === 'all' || l.status === filterStatus;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesStatus;

    const matchesSearch =
      l.customerName.toLowerCase().includes(query) ||
      l.customerPhone.includes(query) ||
      l.businessName.toLowerCase().includes(query) ||
      l.message.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  // Discount leads filtering
  const filteredDiscounts = (discountLeads || []).filter(d => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const matchesSearch =
      d.name.toLowerCase().includes(query) ||
      d.phone.includes(query) ||
      d.couponCode.toLowerCase().includes(query);
    return matchesSearch;
  });

  const handleWhatsAppRequest = (req: WebsiteRequest) => {
    const cleanPhone = req.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${req.ownerName || 'there'}! This is RaoSitez. We received your request to build a professional website for "${req.businessName}" (${req.category}) in ${req.city}. We would love to discuss your website design and launch it for you. When is a good time to speak?`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    updateWebsiteRequestStatus(req.id, 'Contacted');
  };

  const handleWhatsAppContact = (lead: LeadEnquiry) => {
    const cleanPhone = lead.customerPhone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${lead.customerName}! Thank you for contacting ${lead.businessName}. We received your inquiry: "${lead.message}". How can we help you today?`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    updateLeadStatus(lead.id, 'contacted');
  };

  const handleWhatsAppDiscountLead = (item: any) => {
    const cleanPhone = item.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${item.name}! We noticed you unlocked a 15% instant discount coupon (${item.couponCode}) on RaoSitez. Would you like us to help you set up your professional business website for just ₹849 today?`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  const newRequestsCount = (websiteRequests || []).filter(r => r.status === 'New').length;
  const newLeadsCount = (leads || []).filter(l => l.status === 'new').length;

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Customer Requests & Inquiries</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Website build orders submitted by prospective business clients, customer bookings, and discount leads
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <button
              onClick={() => {
                setActiveTab('requests');
                setFilterStatus('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'requests'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Website Requests</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeTab === 'requests'
                    ? 'bg-white/20 text-white'
                    : newRequestsCount > 0
                    ? 'bg-rose-100 text-rose-700 font-bold'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {websiteRequests.length}
                {newRequestsCount > 0 && ` (${newRequestsCount} new)`}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('leads');
                setFilterStatus('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'leads'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Website Bookings & Enquiries</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeTab === 'leads'
                    ? 'bg-white/20 text-white'
                    : newLeadsCount > 0
                    ? 'bg-amber-100 text-amber-700 font-bold'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {leads.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('discounts');
                setFilterStatus('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'discounts'
                  ? 'bg-[#FF6B4A] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>15% Discount Leads</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeTab === 'discounts' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {(discountLeads || []).length}
              </span>
            </button>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                activeTab === 'requests'
                  ? 'Search client requests...'
                  : activeTab === 'leads'
                  ? 'Search inquiries...'
                  : 'Search discount coupons...'
              }
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {activeTab === 'requests' && (
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white"
            >
              <option value="all">All Statuses ({websiteRequests.length})</option>
              <option value="new">New ({newRequestsCount})</option>
              <option value="contacted">Contacted</option>
              <option value="in discussion">In Discussion</option>
              <option value="converted">Converted</option>
              <option value="closed">Closed</option>
            </select>
          )}

          {activeTab === 'leads' && (
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white"
            >
              <option value="all">All Statuses ({leads.length})</option>
              <option value="new">New ({leads.filter(l => l.status === 'new').length})</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
              <option value="closed">Closed</option>
            </select>
          )}
        </div>
      </div>

      {/* Main Table Display */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="md:hidden px-4 py-2 bg-slate-50 border-b border-slate-200 text-[11px] text-slate-500 font-medium">
          ⇄ Swipe horizontally to view full customer details & actions
        </div>

        {/* Tab 1: Customer Website Requests */}
        {activeTab === 'requests' && (
          <div className="overflow-x-auto scroll-smooth">
            <table className="w-full min-w-[700px] text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Business & Owner</th>
                  <th className="py-3.5 px-4">Category & City</th>
                  <th className="py-3.5 px-4">Client Requirements & Notes</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Received Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 text-xs">
                      <div className="max-w-sm mx-auto space-y-2">
                        <Sparkles className="w-8 h-8 text-slate-300 mx-auto" />
                        <p className="font-semibold text-slate-600">No client website requests found</p>
                        <p className="text-[11px] text-slate-400">
                          When visitors fill out "Get Your Website Built by RaoSitez", their raw requirements appear here for manual building.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map(req => (
                    <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-bold text-slate-900 block text-xs">
                          {req.businessName}
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5 text-slate-600 text-[11px]">
                          <UserCheck className="w-3 h-3 text-slate-400" />
                          <span>{req.ownerName || 'Business Owner'}</span>
                        </div>
                        <span className="font-mono text-slate-500 block text-[11px] mt-0.5">
                          {req.phone}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <span className="inline-block bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded text-[11px] capitalize">
                          {req.category}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{req.city || 'Delhi NCR'}</span>
                        </div>
                      </td>

                      <td className="py-4 px-4 max-w-xs">
                        <p className="text-slate-700 line-clamp-3 leading-relaxed">
                          {req.notes || 'No specific notes entered. Ready to consult and build.'}
                        </p>
                      </td>

                      <td className="py-4 px-4">
                        <select
                          value={req.status}
                          onChange={e => updateWebsiteRequestStatus(req.id, e.target.value as any)}
                          className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none capitalize ${
                            req.status === 'New'
                              ? 'bg-rose-50 text-rose-700 border-rose-200'
                              : req.status === 'Contacted'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : req.status === 'In Discussion'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : req.status === 'Converted'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          <option value="New">New Request</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Discussion">In Discussion</option>
                          <option value="Converted">Converted (Building)</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>

                      <td className="py-4 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                        {new Date(req.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>

                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {onBuildForRequest && (
                            <button
                              onClick={() => onBuildForRequest(req)}
                              title="Open in Builder with Client Details"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
                            >
                              <Wand2 className="w-3.5 h-3.5" />
                              <span>Build Site</span>
                            </button>
                          )}

                          <button
                            onClick={() => handleWhatsAppRequest(req)}
                            title="Chat on WhatsApp"
                            className="p-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>

                          <a
                            href={`tel:${req.phone.replace(/[^0-9+]/g, '')}`}
                            title="Call Customer"
                            className="p-1.5 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Website Inquiries */}
        {activeTab === 'leads' && (
          <div className="overflow-x-auto scroll-smooth">
            <table className="w-full min-w-[640px] text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Customer Details</th>
                  <th className="py-3.5 px-4">Business / Source</th>
                  <th className="py-3.5 px-4">Service & Message</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(lead => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-bold text-slate-900 block text-xs">
                        {lead.customerName}
                      </span>
                      <span className="font-mono text-slate-500 block text-[11px] mt-0.5">
                        {lead.customerPhone}
                      </span>
                      {lead.customerEmail && (
                        <span className="text-slate-400 block text-[10px] truncate max-w-[180px]">
                          {lead.customerEmail}
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4">
                      <span className="font-medium text-slate-800 block truncate max-w-[180px]">
                        {lead.businessName}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 block">
                        {lead.websiteSlug}
                      </span>
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      {lead.serviceRequested && (
                        <span className="inline-block bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded text-[10px] mb-1">
                          {lead.serviceRequested}
                        </span>
                      )}
                      <p className="text-slate-600 line-clamp-2 leading-relaxed">
                        {lead.message}
                      </p>
                      {lead.preferredDate && (
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          Target: {lead.preferredDate}
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4">
                      <select
                        value={lead.status}
                        onChange={e => updateLeadStatus(lead.id, e.target.value as any)}
                        className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none capitalize ${
                          lead.status === 'new'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : lead.status === 'contacted'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : lead.status === 'converted'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        <option value="new">New Lead</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>

                    <td className="py-4 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                      {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </td>

                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleWhatsAppContact(lead)}
                          title="Chat on WhatsApp"
                          className="p-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>

                        <a
                          href={`tel:${lead.customerPhone.replace(/[^0-9+]/g, '')}`}
                          title="Call Customer"
                          className="p-1.5 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: 15% Discount Leads */}
        {activeTab === 'discounts' && (
          <div className="overflow-x-auto scroll-smooth">
            <table className="w-full min-w-[580px] text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Visitor Name</th>
                  <th className="py-3.5 px-4">Phone Number</th>
                  <th className="py-3.5 px-4">Generated Coupon</th>
                  <th className="py-3.5 px-4">Offer Details</th>
                  <th className="py-3.5 px-4">Generated Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDiscounts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                      No discount leads captured yet. Popup triggers after 5 seconds on the homepage.
                    </td>
                  </tr>
                ) : (
                  filteredDiscounts.map(d => (
                    <tr key={d.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-bold text-slate-900 block text-xs">{d.name}</span>
                        <span className="text-[10px] text-slate-400">Visitor session coupon</span>
                      </td>

                      <td className="py-4 px-4">
                        <span className="font-mono text-slate-800 font-semibold text-xs">{d.phone}</span>
                      </td>

                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#FF6B4A]/10 text-[#FF6B4A] font-mono-price font-bold text-xs tracking-wider border border-[#FF6B4A]/20">
                          {d.couponCode}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                          15% OFF (Pay ₹849 instead of ₹999)
                        </span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">
                          Valid for 7 days
                        </span>
                      </td>

                      <td className="py-4 px-4 text-slate-400 whitespace-nowrap text-[11px]">
                        {new Date(d.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>

                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleWhatsAppDiscountLead(d)}
                            title="Send Discount WhatsApp Offer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer font-bold text-xs"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp Lead</span>
                          </button>

                          <a
                            href={`tel:${d.phone.replace(/[^0-9+]/g, '')}`}
                            title="Call Lead"
                            className="p-1.5 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
