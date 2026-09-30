import React from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, category?: string, subCategory?: string) => void;
  onOpenPage: (page: string) => void;
}

export const BeautyBerryFooter: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPage
}) => {
  return (
    <footer className="bg-[#71DBD4] text-black font-['Montserrat',sans-serif] pt-12 pb-6 border-t border-[#5bc9c1]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-black/15">
          {/* Column 1: Hot Deals */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider text-black mb-4">
              <strong>Hot Deals</strong>
            </h2>
            <ul className="space-y-2 text-xs font-semibold text-black/80">
              <li>
                <button
                  onClick={() => onNavigate('collection', 'eye')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  EYE
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection', 'face')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  FACE
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection', 'lips')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  LIPS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection', 'hair')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  HAIR
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Information */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider text-black mb-4">
              <strong>Information</strong>
            </h2>
            <ul className="space-y-2 text-xs font-semibold text-black/80">
              <li>
                <button
                  onClick={() => onOpenPage('track-order')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Track Your Order ✈️
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('returns-refund')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Returns & Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('shipping-policy')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('privacy-policy')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('terms-service')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Terms Of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Usefull link */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider text-black mb-4">
              <strong>Usefull link</strong>
            </h2>
            <ul className="space-y-2 text-xs font-semibold text-black/80">
              <li>
                <button
                  onClick={() => onOpenPage('contact')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Contact us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('about')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('faqs')}
                  className="hover:underline hover:text-black transition-colors cursor-pointer"
                >
                  Faqs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Community */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-wider text-black mb-4">
              <strong>Follow Us</strong>
            </h2>
            <p className="text-xs text-black/80 leading-relaxed mb-4">
              Stay connected with Beauty Berry on social media for daily beauty inspiration, tutorials, and exclusive giveaway announcements.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/beautyberrycosmetic/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 text-black" />
              </a>
              <a
                href="https://www.instagram.com/beautyberry_official/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-black" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-3uSl4uaJw9k02uDdoeIuA"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4 text-black" />
              </a>
              <a
                href="https://www.linkedin.com/company/beautyberrycosmetic/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and payment icons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/70">
          <div>
            &copy; 2026, <strong>Beauty Berry</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold">
            <span className="px-2 py-0.5 rounded bg-white/60 border border-black/10">UPI / GPay</span>
            <span className="px-2 py-0.5 rounded bg-white/60 border border-black/10">Visa</span>
            <span className="px-2 py-0.5 rounded bg-white/60 border border-black/10">Mastercard</span>
            <span className="px-2 py-0.5 rounded bg-white/60 border border-black/10">Cash On Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
