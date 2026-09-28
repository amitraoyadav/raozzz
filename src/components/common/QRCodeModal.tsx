import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Download, Share2, ExternalLink, Check } from 'lucide-react';
import { BusinessWebsite } from '../../types';

interface QRCodeModalProps {
  site: BusinessWebsite | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ site, isOpen, onClose }) => {
  const [qrUrl, setQrUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const websiteUrl = site
    ? site.customDomain?.status === 'active' && site.customDomain.domain
      ? `https://${site.customDomain.domain}`
      : `${window.location.origin}/#/site/${site.slug}`
    : '';

  useEffect(() => {
    if (websiteUrl && isOpen) {
      QRCode.toDataURL(websiteUrl, {
        width: 360,
        margin: 2,
        color: {
          dark: '#0f172a',
          light: '#ffffff'
        }
      })
        .then(url => setQrUrl(url))
        .catch(err => console.error(err));
    }
  }, [websiteUrl, isOpen]);

  if (!isOpen || !site) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!qrUrl) return;
    const a = document.createElement('a');
    a.href = qrUrl;
    a.download = `${site.slug}-qr-code.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-md max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 shrink-0">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{site.businessName}</h3>
            <p className="text-xs text-slate-500">Scan to visit website instantly</p>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close QR Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center text-center">
          <div className="p-3 sm:p-4 bg-white rounded-2xl border-2 border-dashed border-slate-200 shadow-inner mb-4 max-w-full">
            {qrUrl ? (
              <img
                src={qrUrl}
                alt={`QR code for ${site.businessName}`}
                className="w-48 h-48 sm:w-56 sm:h-56 max-w-full object-contain"
              />
            ) : (
              <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center text-slate-400">
                Generating QR...
              </div>
            )}
          </div>

          <div className="w-full bg-slate-50 rounded-xl p-3 mb-5 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 block mb-1">Public URL</span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-slate-800 truncate">
                {websiteUrl}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Print this QR code on your restaurant table stands, clinic reception counter, or customer visiting cards.
          </p>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              Download PNG
            </button>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-xl transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Open Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
