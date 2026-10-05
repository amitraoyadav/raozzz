import React, { useState } from 'react';
import {
  Leaf,
  ShieldCheck,
  Feather,
  Mail,
  ArrowRight,
  Heart,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { site76Config } from '../../config/site76Config';

interface Site76FooterProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const Site76Footer: React.FC<Site76FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
  };

  return (
    <footer className="bg-[#1E1F21] text-[#FDFBF7] pt-16 pb-12 border-t border-[#353839]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Newsletter & Brand Manifesto Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-white/10">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C16A52] font-mono block">
              Slow Living Chronicles
            </span>
            <h3 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold text-white">
              Subscribe to Seasonal Loom Releases
            </h3>
            <p className="text-xs sm:text-sm text-[#D5C7B5] font-light max-w-lg leading-relaxed">
              Receive intimations when small-batch indigo vats open, new khadi cuts leave the loom sheds, and slow fashion essays are published. Zero spam.
            </p>
          </div>

          <div className="lg:col-span-6">
            {newsletterSuccess ? (
              <div className="p-4 bg-[#263422] rounded-2xl border border-[#354830] text-xs text-[#EAE2D7]">
                ✓ Welcome to the Aranya Earth collective. A 15% conscious welcome code has been reserved for your inaugural order.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your personal email..."
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-full text-xs text-white placeholder-[#87977F] focus:outline-hidden focus:border-[#C16A52]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#C16A52] hover:bg-[#9C4C36] text-white font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Join Atelier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Sitemap Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold tracking-widest text-white block">
              {site76Config.WORDMARK}
            </span>
            <p className="text-xs text-[#D5C7B5] leading-relaxed font-light">
              {site76Config.TAGLINE}
            </p>
            <p className="text-[11px] text-[#9FA895] font-mono">
              Atelier 76, Mehrauli Heritage Precinct, New Delhi
            </p>
          </div>

          {/* Col 1: Shop */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C16A52] font-semibold">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-[#D5C7B5]">
              <li>
                <button type="button" onClick={() => onNavigate('shop', { gender: 'women' })} className="hover:text-white transition-colors">
                  Women's Natural Wear
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('shop', { gender: 'men' })} className="hover:text-white transition-colors">
                  Men's Khadi &amp; Linen
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('shop', { gender: 'lifestyle' })} className="hover:text-white transition-colors">
                  Hemp Bags &amp; Silk Scarves
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('shop', { gender: 'home' })} className="hover:text-white transition-colors">
                  Home Table Linen &amp; Throws
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  View All Pieces
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Materials & Craft */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C16A52] font-semibold">
              The 6 Fibers
            </h4>
            <ul className="space-y-2 text-[#D5C7B5]">
              <li>
                <button type="button" onClick={() => onNavigate('material-detail', 'organic-cotton')} className="hover:text-white transition-colors">
                  Organic Desi Cotton
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('material-detail', 'linen')} className="hover:text-white transition-colors">
                  Pure French Linen
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('material-detail', 'hemp')} className="hover:text-white transition-colors">
                  Wild Himalayan Hemp
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('material-detail', 'khadi')} className="hover:text-white transition-colors">
                  Handspun Charkha Khadi
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('material-detail', 'natural-dyes')} className="hover:text-white transition-colors">
                  Botanical Plant Dyes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Editorial */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C16A52] font-semibold">
              Philosophy
            </h4>
            <ul className="space-y-2 text-[#D5C7B5]">
              <li>
                <button type="button" onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Our Founders
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('craft')} className="hover:text-white transition-colors">
                  Artisan Weaving Clusters
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('sustainability')} className="hover:text-white transition-colors">
                  Zero Polyester Manifesto
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('journal')} className="hover:text-white transition-colors">
                  Slow Living Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Concierge & Policies */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C16A52] font-semibold">
              Concierge &amp; Care
            </h4>
            <ul className="space-y-2 text-[#D5C7B5]">
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Studio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('shipping')} className="hover:text-white transition-colors">
                  Plastic-Free Shipping
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('refund-policy')} className="hover:text-white transition-colors">
                  14-Day Exchanges &amp; Returns
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications & Badges Row */}
        <div className="py-6 border-y border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#D5C7B5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#98A391]" />
            <span>GOTS Certified Organic Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-[#98A391]" />
            <span>Ministry of Textiles Handloom Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#98A391]" />
            <span>100% Plant &amp; Earth Biodegradable</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#C16A52]">★ 4.95 / 5.0</span>
            <span>Artisan Customer Acclaim</span>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Social Channels */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9FA895] pt-4">
          <p>
            © {site76Config.ESTABLISHED}–2026 {site76Config.LEGAL_NAME}. Handcrafted in Delhi NCR. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-white">
            <a
              href={site76Config.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C16A52] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={site76Config.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C16A52] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={site76Config.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C16A52] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
