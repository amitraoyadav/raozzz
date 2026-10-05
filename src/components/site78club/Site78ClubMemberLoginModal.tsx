import React, { useState } from 'react';
import {
  X,
  User,
  Lock,
  Shield,
  CreditCard,
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  LogOut,
  ArrowRight,
  Download
} from 'lucide-react';
import { MOCK_MEMBER_ACCOUNT } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubMemberLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledClubIntroName?: string;
}

export const Site78ClubMemberLoginModal: React.FC<Site78ClubMemberLoginModalProps> = ({
  isOpen,
  onClose,
  prefilledClubIntroName
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberIdInput, setMemberIdInput] = useState('MEM-1972-884');
  const [passwordInput, setPasswordInput] = useState('••••••••');
  const [activePortalTab, setActivePortalTab] = useState<'overview' | 'bills' | 'courts' | 'reciprocal'>('overview');
  const [requestedClubName, setRequestedClubName] = useState(prefilledClubIntroName || 'Bombay Gymkhana');
  const [introRequestSuccess, setIntroRequestSuccess] = useState(false);
  const [courtBookSuccess, setCourtBookSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleDemoLogin = () => {
    setMemberIdInput('MEM-1972-884');
    setPasswordInput('secret123');
    setIsLoggedIn(true);
  };

  const handleIntroCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIntroRequestSuccess(true);
    setTimeout(() => {
      setIntroRequestSuccess(false);
    }, 4000);
  };

  const handleQuickBookCourt = (courtName: string) => {
    setCourtBookSuccess(`Booking confirmed for ${courtName} tomorrow at 06:30 AM.`);
    setTimeout(() => setCourtBookSuccess(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs font-['Jost',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E5DF] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header bar */}
        <div className="bg-[#0F2537] text-white p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C5A869] flex items-center justify-center font-['Cormorant',serif] font-bold text-xl text-[#C5A869]">
              K
            </div>
            <div>
              <span className="font-['Cormorant',serif] font-bold text-xl block leading-tight">
                Member Portal
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A869] block">
                {site78ClubConfig.CLUB_NAME}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <h3 className="font-['Cormorant',serif] font-bold text-2xl sm:text-3xl text-[#0F2537]">
                  Member Sign In
                </h3>
                <p className="text-xs text-stone-500 font-light">
                  Access your monthly accounts, court bookings, guest passes, and reciprocal club introduction cards.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Member Account ID</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={memberIdInput}
                      onChange={e => setMemberIdInput(e.target.value)}
                      placeholder="e.g. MEM-1972-884"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-700">Smart Card Password / PIN</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={passwordInput}
                      onChange={e => setPasswordInput(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Remember on this terminal</span>
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert("Please contact Club Reception at 011 4175 8800 to reset your Smart Card PIN."); }} className="text-[#183D2F] hover:underline">
                    Forgot PIN?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0F2537] hover:bg-[#183D2F] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-[#C5A869]" />
                  <span>Log In to Member Account</span>
                </button>

                {/* One Click Demo Access button */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="text-xs text-[#183D2F] hover:text-[#0F2537] font-semibold underline cursor-pointer"
                  >
                    Quick Preview: One-Click Demo Member Login (Rajiv & Ananya Malhotra)
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Logged In Member Dashboard */
            <div className="space-y-6">
              {/* Member Profile Badge */}
              <div className="p-5 rounded-2xl bg-[#F9F8F5] border border-[#E8E5DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#183D2F] text-[#C5A869] font-['Cormorant',serif] font-bold text-xl flex items-center justify-center border border-[#C5A869]">
                    RM
                  </div>
                  <div>
                    <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] leading-tight">
                      {MOCK_MEMBER_ACCOUNT.memberName}
                    </h4>
                    <div className="text-xs font-mono font-medium text-stone-500">
                      ID: {MOCK_MEMBER_ACCOUNT.memberId} · {MOCK_MEMBER_ACCOUNT.membershipType}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg border border-[#E8E5DF] hover:bg-stone-200 text-stone-600 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>

              {/* Portal Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-[#E8E5DF] pb-3 text-xs font-semibold tracking-wider uppercase">
                <button
                  onClick={() => setActivePortalTab('overview')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activePortalTab === 'overview' ? 'text-[#183D2F] border-b-2 border-[#183D2F]' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Account Ledger
                </button>
                <button
                  onClick={() => setActivePortalTab('bills')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activePortalTab === 'bills' ? 'text-[#183D2F] border-b-2 border-[#183D2F]' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Recent Invoices
                </button>
                <button
                  onClick={() => setActivePortalTab('courts')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activePortalTab === 'courts' ? 'text-[#183D2F] border-b-2 border-[#183D2F]' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Court Bookings
                </button>
                <button
                  onClick={() => setActivePortalTab('reciprocal')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activePortalTab === 'reciprocal' ? 'text-[#183D2F] border-b-2 border-[#183D2F]' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Intro Card Request
                </button>
              </div>

              {/* TAB: Overview / Ledger */}
              {activePortalTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Account Status</div>
                      <div className="font-semibold text-emerald-700 text-sm mt-1">{MOCK_MEMBER_ACCOUNT.status}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Current Balance / Due</div>
                      <div className="font-['Cormorant',serif] font-bold text-2xl text-stone-900 mt-0.5">
                        ₹4,250 <span className="text-xs font-normal text-stone-500">Credit</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Unbilled Spends</div>
                      <div className="font-['Cormorant',serif] font-bold text-2xl text-stone-900 mt-0.5">
                        ₹{MOCK_MEMBER_ACCOUNT.unbilledSpendsInr}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-2">
                    <div className="font-semibold flex items-center gap-1.5 text-amber-950">
                      <CheckCircle2 className="w-4 h-4 text-amber-700" />
                      <span>Smart Card & RFID Gate Pass Active</span>
                    </div>
                    <p className="font-light leading-relaxed">
                      3 Dependent smart cards and 2 vehicle RFID tags are registered to your household. To request replacement or guest passes, visit the Reception Desk.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB: Invoices */}
              {activePortalTab === 'bills' && (
                <div className="space-y-4">
                  <div className="text-xs text-stone-500">Previous 3 Billing Cycles:</div>
                  <div className="space-y-2.5">
                    {MOCK_MEMBER_ACCOUNT.recentBills.map(bill => (
                      <div
                        key={bill.invoiceNo}
                        className="p-3.5 rounded-xl border border-[#E8E5DF] flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-semibold text-[#0F2537]">{bill.month} Statement</div>
                          <div className="text-stone-400 font-mono text-[11px]">{bill.invoiceNo} · {bill.date}</div>
                        </div>
                        <div className="text-right flex items-center gap-4">
                          <div>
                            <div className="font-bold text-[#0F2537]">₹{bill.amount.toLocaleString('en-IN')}</div>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              {bill.status}
                            </span>
                          </div>
                          <button
                            onClick={() => alert(`Downloading Statement PDF for ${bill.month}...`)}
                            className="p-1.5 rounded hover:bg-stone-100 text-stone-500"
                            title="Download Invoice"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Court Bookings */}
              {activePortalTab === 'courts' && (
                <div className="space-y-5">
                  {courtBookSuccess && (
                    <div className="p-3 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{courtBookSuccess}</span>
                    </div>
                  )}

                  <div className="text-xs font-semibold text-[#0F2537]">Your Confirmed Court Slots:</div>
                  <div className="space-y-2">
                    {MOCK_MEMBER_ACCOUNT.courtBookings.map((b, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#F9F8F5] border border-[#E8E5DF] flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-[#0F2537]">{b.sport}</div>
                          <div className="text-stone-500 text-[11px]">{b.date}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                          {b.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-semibold text-[#0F2537] mb-2">Quick Slot Reservation:</div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleQuickBookCourt('Tennis Court 1 (Clay)')}
                        className="p-2.5 rounded-lg border border-[#E8E5DF] hover:border-[#C5A869] text-xs text-left cursor-pointer hover:bg-[#F9F8F5]"
                      >
                        <div className="font-medium text-[#0F2537]">Book Clay Tennis</div>
                        <div className="text-[10px] text-stone-400">Tomorrow · 06:30 AM</div>
                      </button>
                      <button
                        onClick={() => handleQuickBookCourt('Hardwood Squash 2')}
                        className="p-2.5 rounded-lg border border-[#E8E5DF] hover:border-[#C5A869] text-xs text-left cursor-pointer hover:bg-[#F9F8F5]"
                      >
                        <div className="font-medium text-[#0F2537]">Book Squash Court</div>
                        <div className="text-[10px] text-stone-400">Tomorrow · 07:15 AM</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: Reciprocal Intro Card */}
              {activePortalTab === 'reciprocal' && (
                <div className="space-y-4">
                  {introRequestSuccess ? (
                    <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-200 text-center space-y-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <div className="font-bold text-sm">Reciprocal Letter of Introduction Issued</div>
                      <p className="font-light">
                        Official introduction letter for <strong>{requestedClubName}</strong> has been emailed to your registered address and dispatched to the host club secretary.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleIntroCardSubmit} className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <label className="font-medium text-stone-700">Select Affiliated Destination Club</label>
                        <input
                          type="text"
                          required
                          value={requestedClubName}
                          onChange={e => setRequestedClubName(e.target.value)}
                          placeholder="e.g. Bombay Gymkhana or Tanglin Club Singapore"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="font-medium text-stone-700">Proposed Travel Start Date</label>
                          <input
                            type="date"
                            defaultValue="2026-10-20"
                            className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8E5DF] bg-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-medium text-stone-700">Duration of Visit</label>
                          <select className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8E5DF] bg-white">
                            <option>Up to 7 Days</option>
                            <option>Up to 14 Days</option>
                            <option>Up to 30 Days (Maximum)</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#183D2F] hover:bg-[#0F2537] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#C5A869]" />
                        <span>Issue Official Reciprocal Letter</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
