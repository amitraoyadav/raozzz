import React, { useState } from 'react';
import { Gift, Sparkles, CheckCircle2, ArrowRight, Share2, Copy, Check, IndianRupee, Users, ShieldCheck } from 'lucide-react';

export const ReferAndEarnPage: React.FC = () => {
  const [partnerName, setPartnerName] = useState('');
  const [partnerUpi, setPartnerUpi] = useState('');
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [referralCount, setReferralCount] = useState<number>(5);

  const estimatedEarnings = referralCount * 300;

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerName.trim() || !partnerUpi.trim()) return;
    const cleanUpi = partnerUpi.trim().replace(/[^a-zA-Z0-9@.-]/g, '');
    const link = `https://raositez.in/?ref=${encodeURIComponent(partnerName.toLowerCase().replace(/\s+/g, '-'))}&upi=${encodeURIComponent(cleanUpi)}`;
    setGeneratedLink(link);
  };

  const handleCopy = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF6B4A]/10 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            RaoSitez Partner & Referral Program
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14162B] font-['Fraunces'] tracking-tight leading-tight">
            Earn ₹300 For Every Small Business You Bring Online
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
            Help local shopkeepers, cafes, salons, and clinics get their official website. We pay ₹300 direct cash reward straight to your UPI for every successful launch.
          </p>
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-[#14162B] font-['Fraunces']">
            How The Referral Program Works
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#474B64]">
            Zero sign-up fee. Instant payments upon customer website delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#4338CA]/10 text-[#4338CA] font-black text-lg flex items-center justify-center mx-auto mb-4 font-mono">
              1
            </div>
            <h3 className="text-base font-bold text-[#14162B] font-['Fraunces']">
              Generate Your Partner Link
            </h3>
            <p className="text-xs text-[#474B64] mt-2 leading-relaxed">
              Enter your name and UPI ID below to get your unique referral invite link in seconds.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#4338CA]/10 text-[#4338CA] font-black text-lg flex items-center justify-center mx-auto mb-4 font-mono">
              2
            </div>
            <h3 className="text-base font-bold text-[#14162B] font-['Fraunces']">
              Share With Local Businesses
            </h3>
            <p className="text-xs text-[#474B64] mt-2 leading-relaxed">
              Recommend RaoSitez to neighborhood retailers, doctors, or friends who still operate without a digital link.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 font-black text-lg flex items-center justify-center mx-auto mb-4 font-mono">
              3
            </div>
            <h3 className="text-base font-bold text-[#14162B] font-['Fraunces']">
              Instant UPI Cash Reward
            </h3>
            <p className="text-xs text-[#474B64] mt-2 leading-relaxed">
              As soon as their website goes live in 24 hours, you receive ₹300 directly via GPay / PhonePe.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Referral Earnings Calculator */}
      <section className="py-12 bg-white border-y border-[#E8E7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#E8E7F0] shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase text-[#4338CA] tracking-wider block mb-1">
                Earning Potential Calculator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#14162B] font-['Fraunces']">
                How Much Can You Earn Each Month?
              </h3>
            </div>

            <div className="space-y-6 max-w-lg mx-auto">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[#474B64]">Businesses Referred Per Month:</span>
                  <span className="text-[#4338CA] font-mono-price text-sm">{referralCount} Shops</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={referralCount}
                  onChange={e => setReferralCount(Number(e.target.value))}
                  className="w-full accent-[#4338CA]"
                />
                <div className="flex justify-between text-[11px] text-[#8E92A8] mt-1">
                  <span>1 business</span>
                  <span>25 businesses</span>
                  <span>50 businesses</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8E7F0] text-center shadow-xs">
                <span className="text-xs text-[#8E92A8] uppercase font-bold block mb-1">
                  Estimated Monthly Cash Payout
                </span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-600 font-mono-price tracking-tight block">
                  ₹{estimatedEarnings.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#636882] mt-1 block">
                  Plus eligible for free 1-year custom domain (.in) upgrades on your personal site!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generate Link Section */}
      <section className="py-16 max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-[#14162B] font-['Fraunces']">
              Generate Your Referral Link
            </h3>
            <p className="text-xs text-[#474B64] mt-1">
              Start earning right away with zero upfront fees.
            </p>
          </div>

          <form onSubmit={handleGenerateLink} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#14162B] mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ankit Sharma"
                value={partnerName}
                onChange={e => setPartnerName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#14162B] mb-1">Your UPI ID (For Direct Payouts) *</label>
              <input
                type="text"
                required
                placeholder="e.g. ankit@okhdfcbank or 9876543210@paytm"
                value={partnerUpi}
                onChange={e => setPartnerUpi(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA] font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate My Referral Link</span>
            </button>
          </form>

          {generatedLink && (
            <div className="mt-6 p-4 rounded-2xl bg-[#FAFAF8] border border-[#E8E7F0] space-y-3 animate-reveal">
              <span className="text-[10px] uppercase font-bold text-[#8E92A8] block">
                Your Tracking Link
              </span>
              <div className="p-2.5 rounded-xl bg-white border border-[#E8E7F0] text-xs font-mono text-[#14162B] break-all select-all">
                {generatedLink}
              </div>
              <button
                onClick={handleCopy}
                className="w-full py-2 bg-[#14162B] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Link!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link to Share</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
