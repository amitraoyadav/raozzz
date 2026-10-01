import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface KrishnaFooterProps {
  onNavigate: (tab: string, subCat?: string) => void;
  onOpenVideoCall: () => void;
  onOpenRates: () => void;
}

export const KrishnaFooter: React.FC<KrishnaFooterProps> = ({
  onNavigate,
  onOpenVideoCall,
  onOpenRates
}) => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#ECE5E3] text-[#543E3A] border-t border-[#543E3A]/15 font-['Open_Sans',sans-serif]">
      {/* Main 5-Column Section */}
      <div className="max-w-[1840px] mx-auto px-6 sm:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Information */}
          <div>
            <h4 className="font-['Cinzel'] font-bold text-sm tracking-wider uppercase mb-5 text-[#543E3A]">
              Information.
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Store Locator (Jubilee Hills & Kokapet)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  FAQ & Care Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  The Krishna Journal / Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRates}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left font-semibold text-amber-900"
                >
                  Today's Gold Rate in Hyderabad
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRates}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left font-semibold text-stone-900"
                >
                  Today's Silver Rate in Hyderabad
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal Policy */}
          <div>
            <h4 className="font-['Cinzel'] font-bold text-sm tracking-wider uppercase mb-5 text-[#543E3A]">
              Legal Policy.
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li>
                <span className="cursor-pointer hover:underline">Privacy Policy</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">Terms of Use</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">Shipping & Insurance Policy</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">7-Day Return and Refund Policy</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">Track Orders</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">Loyalty Points Program</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">BIS Hallmark 916 Verification</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Exhibitions */}
          <div>
            <h4 className="font-['Cinzel'] font-bold text-sm tracking-wider uppercase mb-5 text-[#543E3A]">
              Exhibitions.
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li>
                <button
                  onClick={() => onNavigate('bridal')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Shubhalagnam Bridal Exhibition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('silver')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Silver Articles & Pooja Expo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gold', 'Pearls')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Pearl Grading & Styling Workshop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Pan India Jewellery Exhibition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('polki')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Deccan Polki & Jadau Showcase
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div>
            <h4 className="font-['Cinzel'] font-bold text-sm tracking-wider uppercase mb-5 text-[#543E3A]">
              Our Services.
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li>
                <span className="cursor-pointer hover:underline">
                  Monthly Gold Savings Scheme - Kanakavruksham
                </span>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bridal')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Bridal Jewellery Customization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Happy Customers & Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house')}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left"
                >
                  Jubilee Hills Bridal Jewellery Lounge
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">NRI Consultation Services</span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">
                  Global Doorstep Insured Shipping
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:underline">Old Gold Exchange Guarantee</span>
              </li>
              <li>
                <button
                  onClick={onOpenVideoCall}
                  className="hover:text-[#543E3A] hover:underline cursor-pointer text-left font-semibold text-emerald-900"
                >
                  Video Call Shopping Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter & Social */}
          <div>
            <h4 className="font-['Cinzel'] font-bold text-sm tracking-wider uppercase mb-2 text-[#543E3A]">
              INBOX TO JEWELLERY
            </h4>
            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              Sign up for private preview sales, high-jewellery launches, bridal trends, and gold rate updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                required
                value={subscribedEmail}
                onChange={e => setSubscribedEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#543E3A]/20 rounded-md text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#543E3A]"
              />
              <button
                type="submit"
                className="w-full bg-[#543E3A] hover:bg-[#3D2C29] text-white py-2.5 px-4 rounded-md text-xs font-['Cinzel'] font-bold tracking-wider uppercase transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {isSubscribed && (
              <div className="mt-2 text-xs text-emerald-800 flex items-center gap-1 font-medium animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Thank you for joining the Krishna Jewellers circle!</span>
              </div>
            )}

            {/* Social icons */}
            <div className="mt-6 pt-4 border-t border-[#543E3A]/10">
              <div className="text-[11px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#543E3A] mb-3">
                Follow Our Creations
              </div>
              <div className="flex items-center gap-3 text-[#543E3A]">
                <a
                  href="https://www.facebook.com/KrishnaJewellersPearlsandGems"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#543E3A]/20 flex items-center justify-center hover:bg-[#543E3A] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/krishna.jewellers.jubileehills/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#543E3A]/20 flex items-center justify-center hover:bg-[#543E3A] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@KrishnaJewellersPearlsandGems"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-[#543E3A]/20 flex items-center justify-center hover:bg-[#543E3A] hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Serving Locations Strips (faithfully matched from reference) */}
        <div className="mt-12 pt-8 border-t border-[#543E3A]/15 space-y-4 text-xs text-stone-600">
          <div>
            <span className="font-bold text-[#543E3A]">Jewellery Stores Near You: </span>
            <span>Jewellery Shop in Hyderabad | Jewellery shop in Jubilee Hills (Road No 36) | Jewellery Shop in Kokapet</span>
          </div>

          <div>
            <span className="font-bold text-[#543E3A]">Krishna Jewellers Serving in India: </span>
            <span className="leading-relaxed">
              Bangalore | Vijayawada | Tirupati | Visakhapatnam | Guntur | Nellore | Kurnool | Rajahmundry | Kakinada | Chittoor | Best jewellery shop in Hyderabad | Warangal | Nizamabad | Karnataka | Chennai | Best jewellers in Hyderabad | Banjara Hills | Madhapur | Gachibowli | Panjagutta
            </span>
          </div>

          <div>
            <span className="font-bold text-[#543E3A]">Krishna Jewellers Now Serving Worldwide: </span>
            <span className="leading-relaxed">
              Canada | San Diego | Texas | Surrey | British Columbia | Scarborough | Brampton | Atlanta | Georgia | Chicago | Illinois | Queens | Jersey City | Edison | New Jersey / New York | Houston | Dallas | Boston | Ontario | Toronto | Mississauga | Alberta | Vancouver | Calgary | Edmonton | Los Angeles | California
            </span>
          </div>
        </div>
      </div>

      {/* Sub-bar Copyright */}
      <div className="bg-[#543E3A] text-white py-3.5 px-6 text-center text-xs">
        <div className="max-w-[1840px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-300">
          <div>
            © 2026 Krishna Jewellers Pearls and Gems Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>BIS Hallmark 916</span>
            <span>•</span>
            <span>100% Certified Diamonds</span>
            <span>•</span>
            <span>Deccan Artisans Since 1983</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
