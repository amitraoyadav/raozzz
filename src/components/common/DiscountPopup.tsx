import React, { useState, useEffect } from 'react';
import { X, Sparkles, Copy, Check, MessageSquare, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { DiscountLead } from '../../types';

const SESSION_DISCOUNT_KEY = 'raositez_discount_popup_session_v1';

export const DiscountPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedCoupon, setGeneratedCoupon] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if dismissed or already claimed in this session
    const hasBeenHandled = sessionStorage.getItem(SESSION_DISCOUNT_KEY);
    if (hasBeenHandled) return;

    // Trigger once per session after 5-second delay
    const timer = setTimeout(() => {
      const recheck = sessionStorage.getItem(SESSION_DISCOUNT_KEY);
      if (!recheck) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(SESSION_DISCOUNT_KEY, 'dismissed');
    setIsOpen(false);
  };

  const generateCouponCode = (): string => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let rand = '';
    for (let i = 0; i < 4; i++) {
      rand += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `RAO15-${rand}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const code = generateCouponCode();
    const leadId = `dl-${Date.now()}`;
    const now = new Date();
    const expiry = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    const discountLead: DiscountLead = {
      id: leadId,
      name: name.trim(),
      phone: phone.trim(),
      couponCode: code,
      discountPercent: 15,
      status: 'new',
      expiresAt: expiry.toISOString(),
      createdAt: now.toISOString()
    };

    // Save to Firestore discount_leads
    try {
      await setDoc(doc(db, 'discount_leads', leadId), discountLead);
    } catch (err) {
      console.warn('Firestore discount lead save failed, storing locally:', err);
      handleFirestoreError(err, OperationType.CREATE, 'discount_leads');
    }

    // Also cache locally for offline/admin view resilience
    try {
      const stored = localStorage.getItem('raositez_discount_leads_v1');
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem('raositez_discount_leads_v1', JSON.stringify([discountLead, ...existing]));
    } catch {
      // ignore
    }

    // Mark session as completed so it never reappears
    sessionStorage.setItem(SESSION_DISCOUNT_KEY, 'claimed');
    setGeneratedCoupon(code);
    setIsSubmitting(false);
  };

  const handleCopy = () => {
    if (!generatedCoupon) return;
    navigator.clipboard.writeText(generatedCoupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppSend = () => {
    if (!generatedCoupon) return;
    const text = encodeURIComponent(
      `Hello RaoSitez! I claimed my 15% instant discount coupon: *${generatedCoupon}*.\nName: ${name}\nPhone: ${phone}\nPlease apply this to my website package!`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#14162B]/60 backdrop-blur-xs animate-reveal overflow-y-auto">
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-[#FAFAF8] rounded-3xl p-5 sm:p-8 border border-[#E8E7F0] shadow-2xl text-[#14162B] font-['Inter'] my-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 min-h-[44px] min-w-[44px] p-2 flex items-center justify-center rounded-full text-[#8E92A8] hover:text-[#14162B] hover:bg-[#E8E7F0] active:bg-[#E8E7F0] transition-colors cursor-pointer"
          aria-label="Close discount popup"
        >
          <X className="w-5 h-5" />
        </button>

        {!generatedCoupon ? (
          <div>
            {/* Header Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B4A]/10 text-[#FF6B4A] text-[11px] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Special First-Time Offer
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#14162B] font-['Fraunces'] leading-tight tracking-tight">
              Get 15% Instant Discount On Your Website
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#474B64] leading-relaxed">
              Launch your business website today for even less. Enter your details to reveal your exclusive voucher code valid on any RaoSitez package.
            </p>

            {/* 2-Field Form (Name & Phone only) */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#14162B] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA] text-xs font-['Inter']"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#14162B] mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E7F0] bg-white focus:outline-none focus:ring-2 focus:ring-[#4338CA] text-xs font-['Inter']"
                />
              </div>

              {/* Coral Conversion Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Code...</span>
                ) : (
                  <>
                    <span>Claim 15% Discount Coupon</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#E8E7F0] flex items-center justify-center gap-2 text-[11px] text-[#8E92A8]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant WhatsApp delivery · No spam ever</span>
            </div>
          </div>
        ) : (
          /* Success / Coupon Display State */
          <div className="text-center py-2 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>

            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold mb-1">
                Coupon Generated Successfully
              </span>
              <h3 className="text-2xl font-black text-[#14162B] font-['Fraunces']">
                Here Is Your 15% Voucher!
              </h3>
              <p className="text-xs text-[#474B64] mt-1">
                Use this coupon when placing your website order with RaoSitez.
              </p>
            </div>

            {/* Coupon Box in Space Mono */}
            <div className="p-4 rounded-2xl bg-white border-2 border-dashed border-[#4338CA] relative">
              <span className="text-[10px] uppercase font-bold text-[#8E92A8] tracking-widest block mb-1">
                Your Exclusive Voucher Code
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#4338CA] font-mono-price tracking-wider select-all block">
                {generatedCoupon}
              </span>
              {/* 7-day validity note */}
              <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#636882]">
                <Clock className="w-3.5 h-3.5 text-[#FF6B4A]" />
                <span>Valid for <strong>7 days</strong> from today</span>
              </div>
            </div>

            {/* Actions: Copy & Send to WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={handleCopy}
                className="flex-1 py-2.5 px-4 rounded-xl border border-[#E8E7F0] hover:bg-white text-xs font-semibold text-[#14162B] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#4338CA]" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppSend}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send to WhatsApp</span>
              </button>
            </div>

            <button
              onClick={handleClose}
              className="text-xs text-[#8E92A8] hover:text-[#14162B] hover:underline pt-2 cursor-pointer block mx-auto"
            >
              Continue Browsing RaoSitez
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
