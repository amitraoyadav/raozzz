import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface RubansFooterProps {
  onNavigate: (view: string, subCategory?: string) => void;
}

export const RubansFooter: React.FC<RubansFooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#FDEEEC] text-[#111111] font-['Lato',sans-serif] border-t border-stone-200/80">
      {/* Trust & Guarantee Strip */}
      <div className="border-b border-stone-200/60 py-6 px-4">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center p-2">
            <Truck className="w-6 h-6 text-[#47080C] mb-1.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Free Delivery</span>
            <span className="text-[11px] text-stone-600">On all orders above ₹999</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <RotateCcw className="w-6 h-6 text-[#47080C] mb-1.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Easy Returns</span>
            <span className="text-[11px] text-stone-600">7-day hassle-free exchange</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <ShieldCheck className="w-6 h-6 text-[#47080C] mb-1.5" />
            <span className="text-xs font-bold uppercase tracking-wider">100% Authentic</span>
            <span className="text-[11px] text-stone-600">Premium quality guaranteed</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Sparkles className="w-6 h-6 text-[#47080C] mb-1.5" />
            <span className="text-xs font-bold uppercase tracking-wider">B1G1 Festive Offer</span>
            <span className="text-[11px] text-stone-600">Buy 1 Get 1 Free Sitewide</span>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: CARE */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.2em] uppercase text-stone-900 mb-4 pb-1 border-b border-stone-300/60 inline-block">
              CARE
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li>
                <button
                  onClick={() => onNavigate('track')}
                  className="hover:text-[#47080C] transition-colors cursor-pointer text-left"
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('returns')}
                  className="hover:text-[#47080C] transition-colors cursor-pointer text-left"
                >
                  Exchange / Return
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stores')}
                  className="hover:text-[#47080C] transition-colors cursor-pointer text-left"
                >
                  Store Locator
                </button>
              </li>
              <li>
                <span className="text-stone-600 hover:text-black transition-colors cursor-pointer">
                  Shipping Policy
                </span>
              </li>
              <li>
                <span className="text-stone-600 hover:text-black transition-colors cursor-pointer">
                  Terms And Conditions
                </span>
              </li>
              <li>
                <span className="text-stone-600 hover:text-black transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-stone-600 hover:text-black transition-colors cursor-pointer">
                  Sitemap
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: CONTACT US */}
          <div>
            <h3 className="text-xs font-extrabold tracking-[0.2em] uppercase text-stone-900 mb-4 pb-1 border-b border-stone-300/60 inline-block">
              CONTACT US
            </h3>
            <div className="text-xs text-stone-700 space-y-3 leading-relaxed">
              <p>
                For any queries, please reach out to us between 10:30 AM to 5:30 PM, Monday to Saturday.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/918050556004"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#47080C] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91-8050556004</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:help@rubans.com"
                  className="inline-flex items-center gap-1.5 text-stone-700 hover:text-black"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>help@rubans.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: SIGN UP AND SAVE */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold tracking-[0.2em] uppercase text-stone-900 mb-4 pb-1 border-b border-stone-300/60 inline-block">
              SIGN UP AND SAVE
            </h3>
            <p className="text-xs text-stone-700 mb-3.5 leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/80 rounded-md border border-emerald-400 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you for subscribing! Your 25% welcome coupon has been issued.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-stone-300 px-3.5 py-2.5 text-xs text-stone-900 rounded-none focus:outline-none focus:border-[#47080C]"
                />
                <button
                  type="submit"
                  className="bg-[#111111] hover:bg-[#47080C] text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rubans.in/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-800 hover:bg-[#47080C] hover:text-white transition-all shadow-2xs"
                title="Rubans on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Rubansaccessories"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-800 hover:bg-[#47080C] hover:text-white transition-all shadow-2xs"
                title="Rubans on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCgrmhqmSt25K0fswOZyWNLQ"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-800 hover:bg-[#47080C] hover:text-white transition-all shadow-2xs"
                title="Rubans on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/rubans-accessories/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-stone-800 hover:bg-[#47080C] hover:text-white transition-all shadow-2xs"
                title="Rubans on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / CIN Line */}
        <div className="mt-12 pt-6 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
          <p>CIN number — U17299KA2016PTC096551</p>
          <p>© 2026 Rubans. All rights reserved. Locally recreated demo.</p>
        </div>
      </div>
    </footer>
  );
};
