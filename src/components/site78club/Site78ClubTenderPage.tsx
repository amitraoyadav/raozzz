import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Download,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
  ArrowDownToLine
} from 'lucide-react';
import { CLUB_TENDERS, ClubTender } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

export const Site78ClubTenderPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'Open' | 'Under Evaluation' | 'Closed'>('all');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredTenders = statusFilter === 'all'
    ? CLUB_TENDERS
    : CLUB_TENDERS.filter(t => t.status === statusFilter);

  const handleDownloadTenderDoc = (tender: ClubTender) => {
    setDownloadingId(tender.id);
    setTimeout(() => {
      setDownloadingId(null);
      setToastMessage(`Tender document "${tender.tenderNo}" (${tender.documentSize}) downloaded.`);
      setTimeout(() => setToastMessage(null), 4000);

      // Trigger download
      const content = `THE KENSINGTON CLUB - NOTICE INVITING TENDER\n\nTender No: ${tender.tenderNo}\nTitle: ${tender.title}\nPublish Date: ${tender.publishDate}\nClosing Date: ${tender.closingDate}\nEMD: ${tender.emdAmountInr}\nTender Fee: ${tender.tenderFeeInr}\n\nScope of Work:\n${tender.description}\n\nSubmission: Send sealed envelope marked with Tender No. to Honorary Secretary, The Kensington Club, Outer Ring Road, South Delhi.`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tender.tenderNo.replace(/\//g, '_')}_Document.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#183D2F] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-[#C5A869]/50 animate-fadeIn text-xs">
          <CheckCircle2 className="w-5 h-5 text-[#C5A869]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-[#0F2537] text-white py-14 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block">
            Procurement & Works
          </span>
          <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white">
            Tenders & Notices
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Notices inviting bids from reputed vendors, civil contractors, and service partners for club projects.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#E8E5DF]">
          {[
            { id: 'all', label: 'All Tenders' },
            { id: 'Open', label: 'Active & Open' },
            { id: 'Under Evaluation', label: 'Under Technical Evaluation' },
            { id: 'Closed', label: 'Archived / Awarded' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                statusFilter === tab.id
                  ? 'bg-[#183D2F] text-white shadow-sm'
                  : 'bg-[#F9F8F5] text-stone-600 hover:bg-[#F3EFE6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tenders List Stack */}
        <div className="space-y-6 mb-16">
          {filteredTenders.map(tender => (
            <div
              key={tender.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5DF] hover:border-[#C5A869] shadow-xs hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F3EFE6]">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-xs text-[#0F2537] bg-[#F9F8F5] px-3 py-1 rounded border border-[#E8E5DF]">
                    {tender.tenderNo}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                      tender.status === 'Open'
                        ? 'bg-emerald-100 text-emerald-800'
                        : tender.status === 'Under Evaluation'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {tender.status}
                  </span>
                </div>

                <div className="text-xs text-stone-500 font-light flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>Closing Date: <strong>{tender.closingDate}</strong></span>
                </div>
              </div>

              <div>
                <h3 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] leading-snug">
                  {tender.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 leading-relaxed">
                  {tender.description}
                </p>
              </div>

              {/* Financial & Bid Details Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#F9F8F5] text-xs font-light">
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Published On</div>
                  <div className="font-medium text-[#0F2537] mt-0.5">{tender.publishDate}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Bid Opening Date</div>
                  <div className="font-medium text-[#0F2537] mt-0.5">{tender.openingDate}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">EMD Amount</div>
                  <div className="font-medium text-[#183D2F] mt-0.5">{tender.emdAmountInr}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Tender Fee</div>
                  <div className="font-medium text-[#0F2537] mt-0.5">{tender.tenderFeeInr}</div>
                </div>
              </div>

              {/* Download Action */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-stone-400 font-mono">
                  Document Size: {tender.documentSize}
                </span>

                <button
                  onClick={() => handleDownloadTenderDoc(tender)}
                  disabled={downloadingId === tender.id}
                  className="px-5 py-2.5 rounded-lg bg-[#0F2537] hover:bg-[#183D2F] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>{downloadingId === tender.id ? 'Downloading...' : 'Download Tender Document (NIT)'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bid Submission Instructions Box */}
        <div className="p-8 rounded-3xl bg-[#F9F8F5] border border-[#E8E5DF] space-y-4">
          <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#183D2F]" />
            <span>General Instructions for Bidders</span>
          </h4>
          <div className="space-y-2 text-xs text-stone-600 font-light leading-relaxed">
            <p>
              1. <strong>Two-Cover System:</strong> Bids must be submitted in two separate sealed covers marked <em>Technical Bid</em> and <em>Financial Bid</em>, enclosed within a master envelope superscribed with the Tender Reference Number.
            </p>
            <p>
              2. <strong>Earnest Money Deposit (EMD):</strong> EMD must be submitted in the form of a Demand Draft / Pay Order drawn in favor of <em>"The Kensington Residents & Country Club Limited"</em> payable at New Delhi.
            </p>
            <p>
              3. <strong>Site Inspections:</strong> Prospective bidders can inspect the club site on any working day between 11:00 AM and 04:00 PM with prior intimation to the Secretary / Estate Manager.
            </p>
            <p>
              4. The Management Committee reserves the right to accept or reject any tender without assigning any reason thereof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
