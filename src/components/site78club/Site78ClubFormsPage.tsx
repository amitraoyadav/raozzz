import React, { useState } from 'react';
import {
  Download,
  FileText,
  Search,
  CheckCircle2,
  Clock,
  Shield,
  AlertCircle,
  ArrowDownToLine
} from 'lucide-react';
import { CLUB_DOWNLOAD_FORMS, DownloadForm } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

export const Site78ClubFormsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const filteredForms = CLUB_DOWNLOAD_FORMS.filter(form => {
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    const matchesSearch =
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (form: DownloadForm) => {
    setDownloadingId(form.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadToast(`"${form.title}" (${form.fileSize}) download initiated successfully.`);
      setTimeout(() => setDownloadToast(null), 4000);

      // Create a mock blob download so browser actually initiates file save
      const dummyContent = `THE KENSINGTON CLUB - OFFICIAL DOCUMENT\n\nForm Code: ${form.code}\nDocument: ${form.title}\nCategory: ${form.category.toUpperCase()}\nRevised: ${form.updatedDate}\n\nInstructions: Please fill in block capitals and submit along with required identity photocopies at the Club Administrative Secretariat.`;
      const blob = new Blob([dummyContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form.code}_${form.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 700);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      {/* Toast notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#183D2F] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-[#C5A869]/50 animate-fadeIn text-xs">
          <CheckCircle2 className="w-5 h-5 text-[#C5A869]" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-[#0F2537] text-white py-14 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block">
            Administrative Documentation
          </span>
          <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white">
            Download Forms & Dossiers
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Official requisition applications, membership dossiers, banquet agreements, and reciprocal intro card forms.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E5DF]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Forms' },
              { id: 'membership', label: 'Membership' },
              { id: 'banquet', label: 'Banquets & Lawns' },
              { id: 'sports', label: 'Sports & Coaching' },
              { id: 'general', label: 'General Admin' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#183D2F] text-white shadow-sm'
                    : 'bg-[#F9F8F5] text-stone-600 hover:bg-[#F3EFE6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search forms by name or code..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-[#F9F8F5] border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden text-[#1C242C]"
            />
          </div>
        </div>

        {/* Forms Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredForms.map(form => (
            <div
              key={form.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E5DF] hover:border-[#C5A869] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#183D2F] bg-[#F9F8F5] px-2.5 py-1 rounded">
                    {form.code}
                  </span>
                  <span className="text-stone-400 font-light flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A869]" />
                    <span>Revised: {form.updatedDate}</span>
                  </span>
                </div>

                <h3 className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl text-[#0F2537] leading-snug group-hover:text-[#183D2F] transition-colors">
                  {form.title}
                </h3>

                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {form.description}
                </p>

                {form.feeInr && (
                  <div className="text-[11px] font-semibold text-[#C5A869]">
                    Application Processing Fee: ₹{form.feeInr.toLocaleString('en-IN')} /-
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#F3EFE6] flex items-center justify-between">
                <span className="text-xs text-stone-400 font-mono">
                  {form.fileSize}
                </span>

                <button
                  onClick={() => handleDownload(form)}
                  disabled={downloadingId === form.id}
                  className="px-4 py-2 rounded-lg bg-[#0F2537] hover:bg-[#183D2F] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>{downloadingId === form.id ? 'Downloading...' : 'Download Form'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Submission Instructions Box */}
        <div className="p-8 rounded-3xl bg-[#F9F8F5] border border-[#E8E5DF] space-y-4">
          <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#183D2F]" />
            <span>Submission & Verification Protocols</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600 font-light leading-relaxed">
            <div className="space-y-1">
              <div className="font-bold text-[#0F2537] uppercase tracking-wider text-[11px]">
                1. Mode of Submission
              </div>
              <p>
                Duly filled forms may be handed over physically at the Front Office Reception during working hours (10:00 AM – 06:00 PM, Tuesday to Sunday) or emailed as scanned PDFs to secretary@kensingtonclubdelhi.org.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-[#0F2537] uppercase tracking-wider text-[11px]">
                2. Mandatory Enclosures
              </div>
              <p>
                Please attach self-attested copies of Aadhar Card/Passport, two passport-sized color photographs, and proposer/seconder endorsement signatures where applicable.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-bold text-[#0F2537] uppercase tracking-wider text-[11px]">
                3. Processing & Timelines
              </div>
              <p>
                Routine RFID stickers and dependent passes are processed within 48 hours. Membership dossiers undergo Balloting & Scrutiny Committee review as per schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
