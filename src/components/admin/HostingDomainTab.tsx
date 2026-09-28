import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, Shield, Server, RefreshCw } from 'lucide-react';

export const HostingDomainTab: React.FC = () => {
  const { websites, updateWebsite } = useApp();
  const [selectedSiteId, setSelectedSiteId] = useState<string>(websites[0]?.id || '');
  const [customDomainInput, setCustomDomainInput] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [verifying, setVerifying] = useState<boolean>(false);

  const selectedSite = websites.find(w => w.id === selectedSiteId || w.slug === selectedSiteId) || websites[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSaveDomain = async () => {
    if (!selectedSite || !customDomainInput) return;
    const cleanDomain = customDomainInput.toLowerCase().replace(/https?:\/\//, '').replace(/\/$/, '');
    await updateWebsite(selectedSite.id, {
      customDomain: {
        domain: cleanDomain,
        status: 'pending_verification',
        cnameTarget: 'cname.raositez.in'
      }
    });
  };

  const handleSimulateVerify = async () => {
    if (!selectedSite || !selectedSite.customDomain) return;
    setVerifying(true);
    setTimeout(async () => {
      await updateWebsite(selectedSite.id, {
        customDomain: {
          ...selectedSite.customDomain!,
          status: 'active',
          verifiedAt: new Date().toISOString()
        }
      });
      setVerifying(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Hosting & Domain Architecture</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage RaoSitez subpath URLs (raositez.in/slug) and custom domain DNS mapping
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-700">RaoSitez Edge CDN: Online</span>
        </div>
      </div>

      {/* Select Website to Configure */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-2">
            Select Customer Website to Configure:
          </label>
          <select
            value={selectedSiteId}
            onChange={e => {
              setSelectedSiteId(e.target.value);
              const found = websites.find(w => w.id === e.target.value);
              setCustomDomainInput(found?.customDomain?.domain || '');
            }}
            className="w-full sm:w-96 px-3.5 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white"
          >
            {websites.map(site => (
              <option key={site.id} value={site.id}>
                {site.businessName} (raositez.in/{site.slug})
              </option>
            ))}
          </select>
        </div>

        {selectedSite && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
            {/* Left: Free Subpath Hosting */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Included Free Subpath Hosting
                </h3>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Public URL:</span>
                  <span className="font-mono font-bold text-indigo-700">
                    https://raositez.in/{selectedSite.slug}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Status:</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Active & Globally Cached
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">SSL Security:</span>
                  <span className="text-slate-700 font-medium flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    256-bit TLS / HTTPS Included
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                This URL is permanent and free for the customer. All links, QR codes, and WhatsApp sharing messages utilize this reliable endpoint.
              </p>
            </div>

            {/* Right: Custom Domain Connect */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  Connect Custom Domain (Optional)
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Customer's Custom Domain Name
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. www.theroasterycafe.in"
                      value={customDomainInput || selectedSite.customDomain?.domain || ''}
                      onChange={e => setCustomDomainInput(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                    />
                    <button
                      onClick={handleSaveDomain}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Save Domain
                    </button>
                  </div>
                </div>

                {/* DNS Instructions */}
                <div className="p-4 bg-slate-900 text-slate-200 rounded-2xl text-xs space-y-3 font-mono">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                    <span>DNS Record Configuration:</span>
                    <span>Provider: GoDaddy / Namecheap</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <div>
                        <span className="text-indigo-400 font-bold">CNAME</span> | Host: <span className="text-amber-300">www</span> → Target: <span className="text-emerald-400">cname.raositez.in</span>
                      </div>
                      <button
                        onClick={() => handleCopy('cname.raositez.in', 'cname')}
                        className="text-slate-400 hover:text-white"
                      >
                        {copiedKey === 'cname' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <div>
                        <span className="text-indigo-400 font-bold">A Record</span> | Host: <span className="text-amber-300">@</span> → IP: <span className="text-emerald-400">76.76.21.21</span>
                      </div>
                      <button
                        onClick={() => handleCopy('76.76.21.21', 'arecord')}
                        className="text-slate-400 hover:text-white"
                      >
                        {copiedKey === 'arecord' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Domain Verification Action */}
                {selectedSite.customDomain?.domain && (
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Domain Status:</span>
                      <span className={`font-bold capitalize ${
                        selectedSite.customDomain.status === 'active' ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                        {selectedSite.customDomain.status.replace('_', ' ')}
                      </span>
                    </div>

                    {selectedSite.customDomain.status !== 'active' ? (
                      <button
                        onClick={handleSimulateVerify}
                        disabled={verifying}
                        className="px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <RefreshCw className={`w-3 h-3 ${verifying ? 'animate-spin' : ''}`} />
                        {verifying ? 'Checking DNS...' : 'Verify DNS Records'}
                      </button>
                    ) : (
                      <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Verified & Live
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
