import React, { useState } from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { HAZOORILAL_STORES } from '../../data/hazoorilalData';

interface HazoorilalFooterProps {
  onNavigate: (tab: string, subCategory?: string) => void;
  onOpenAppointment: () => void;
}

export const HazoorilalFooter: React.FC<HazoorilalFooterProps> = ({
  onNavigate,
  onOpenAppointment
}) => {
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsappPhone.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setWhatsappPhone('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#EEEEEE] text-[#04192A] font-['Open_Sans',sans-serif]">
      {/* 1. JOIN OUR INNER CIRCLE ON WHATSAPP (Exact recreation from uploaded HTML) */}
      <section className="bg-[#E7E3DF] py-12 px-6 text-center border-b border-stone-200">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#04192A] shadow-xs">
            <Phone className="w-6 h-6 text-emerald-700" />
          </div>

          <h3 className="font-['Chronicle_Display_Roman'] text-xl sm:text-2xl font-normal tracking-wider text-[#5B5B5B] uppercase">
            JOIN OUR INNER CIRCLE ON WHATSAPP
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 tracking-wider uppercase font-light leading-relaxed">
            DISCOVER THE LATEST COLLECTION NEWS AND EXCLUSIVE LAUNCHES FROM HAZOORILAL JEWELLERS
          </p>

          <form onSubmit={handleWhatsappSubmit} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="tel"
              required
              minLength={10}
              maxLength={12}
              value={whatsappPhone}
              onChange={e => setWhatsappPhone(e.target.value)}
              placeholder="Enter WhatsApp Number"
              className="bg-white border border-stone-400 text-stone-900 text-xs px-4 py-3 rounded-none focus:outline-none focus:border-black text-center sm:text-left flex-1"
            />
            <button
              type="submit"
              className="bg-black hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest px-8 py-3 transition-colors cursor-pointer"
            >
              Submit
            </button>
          </form>

          {subscribed && (
            <div className="text-xs text-emerald-800 font-semibold flex items-center justify-center gap-1.5 pt-1 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>You have joined the Hazoorilal Inner Circle!</span>
            </div>
          )}

          {/* Social Icons Strip in circles */}
          <div className="pt-6 flex justify-center items-center gap-3">
            <a
              href="https://www.instagram.com/hazoorilaljewellers/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#5B5B5B] hover:bg-black text-white flex items-center justify-center transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/hazoorilaljewellersgk"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#5B5B5B] hover:bg-black text-white flex items-center justify-center transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCQLut5AU8eLnTFsalgWyuzw"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#5B5B5B] hover:bg-black text-white flex items-center justify-center transition-colors"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919811223344&text=Hello"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#5B5B5B] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              title="WhatsApp Concierge"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN 5-COLUMN FOOTER LINKS */}
      <div className="max-w-[1536px] mx-auto px-6 sm:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: OUR STORES */}
          <div>
            <h3 className="font-['Chronicle_Display_Roman'] font-normal text-sm sm:text-base tracking-wider uppercase text-[#5B5B5B] mb-4">
              OUR STORES
            </h3>
            <div className="space-y-4 text-xs text-stone-700 leading-relaxed font-['Open_Sans']">
              <div>
                <strong className="block text-black font-semibold">FLAGSHIP STORE</strong>
                <span>Greater Kailash Part I,<br />M-44, M-Block Market,<br />New Delhi – 110048</span>
              </div>
              <div>
                <strong className="block text-black font-semibold">GURUGRAM STORE</strong>
                <span>Urban Estate Shop No. 4-5,<br />Golf Avenue 42,<br />Gurugram, Haryana – 122002</span>
              </div>
              <div>
                <strong className="block text-black font-semibold">DLF EMPORIO</strong>
                <span>305, 2nd Floor, Vasant Kunj,<br />New Delhi – 110070</span>
              </div>
              <div>
                <strong className="block text-black font-semibold">ITC MAURYA</strong>
                <span>Shopping Arcade Diplomatic Enclave,<br />New Delhi – 110021</span>
              </div>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div>
            <h3 className="font-['Chronicle_Display_Roman'] font-normal text-sm sm:text-base tracking-wider uppercase text-[#5B5B5B] mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-xs text-stone-700 font-semibold tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  HOUSE OF HAZOORILAL
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('high_jewellery')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  HIGH JEWELLERY
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  SHOP
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="hover:text-black hover:underline cursor-pointer text-left text-amber-900"
                >
                  BOOK AN APPOINTMENT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stores')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: INFORMATION */}
          <div>
            <h3 className="font-['Chronicle_Display_Roman'] font-normal text-sm sm:text-base tracking-wider uppercase text-[#5B5B5B] mb-4">
              INFORMATION
            </h3>
            <ul className="space-y-3 text-xs text-stone-700 font-semibold tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  MY ACCOUNT
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">TERMS & CONDITIONS</span>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">PRIVACY POLICY</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">RESPONSIBLE SOURCING</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">A LIFETIME OF CARE</span>
              </li>
            </ul>
          </div>

          {/* Column 4: ENGAGEMENT RINGS */}
          <div>
            <h3 className="font-['Chronicle_Display_Roman'] font-normal text-sm sm:text-base tracking-wider uppercase text-[#5B5B5B] mb-4">
              ENGAGEMENT RINGS
            </h3>
            <ul className="space-y-3 text-xs text-stone-700 font-semibold tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('engagement', "Women's Wedding Ring")}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  WOMENS WEDDING RING
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('engagement', "Men's Wedding Ring")}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  MENS WEDDING RING
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('engagement', 'Eternity Rings')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  ETERNITY RINGS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('engagement', "Women's Wedding Bands")}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  WOMENS WEDDING BAND
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('engagement', "Men's Wedding Bands")}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  MENS WEDDING BAND
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: SHOP */}
          <div>
            <h3 className="font-['Chronicle_Display_Roman'] font-normal text-sm sm:text-base tracking-wider uppercase text-[#5B5B5B] mb-4">
              SHOP
            </h3>
            <ul className="space-y-3 text-xs text-stone-700 font-semibold tracking-wider uppercase">
              <li>
                <button
                  onClick={() => onNavigate('gold')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  GOLD JEWELLERY
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diamond')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  DIAMOND JEWELLERY
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('polki')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  POLKI JEWELLERY
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mens')}
                  className="hover:text-black hover:underline cursor-pointer text-left"
                >
                  MEN JEWELLERY
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT STRIP (White background as in reference CSS `#footer-outer #copyright { background-color: #ffffff; color: #04192a; }`) */}
      <div className="bg-white text-[#04192A] py-5 px-6 border-t border-stone-200 text-xs">
        <div className="max-w-[1536px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-600">
          <p>© 2026 Hazoorilal Jewellers. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-['Open_Sans'] uppercase tracking-wider">
            <span>By Sandeep Narang</span>
            <span>•</span>
            <span>Since 1952</span>
            <span>•</span>
            <span>GIA Certified Solitaires</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
