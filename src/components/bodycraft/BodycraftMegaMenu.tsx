import React from 'react';
import { ArrowRight, Sparkles, Scissors, Stethoscope, Droplets, Heart, MapPin, Award } from 'lucide-react';
import { BodycraftTab } from './BodycraftApp';

interface BodycraftMegaMenuProps {
  activeMenu: string | null;
  onClose: () => void;
  onNavigate: (tab: BodycraftTab) => void;
  onOpenBooking: (category: 'salon' | 'clinic' | 'spa' | 'bridal', service?: string) => void;
}

export const BodycraftMegaMenu: React.FC<BodycraftMegaMenuProps> = ({
  activeMenu,
  onClose,
  onNavigate,
  onOpenBooking
}) => {
  if (!activeMenu) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-stone-200 shadow-2xl z-50 animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 1. SALON MEGA MENU */}
        {activeMenu === 'salon' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Hair Artistry
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Bespoke Face-Contour Haircut</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">French Balayage & Glossing</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">L'Oréal Inoa Ammonia-Free Color</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Nanoplastia Smoothing & Hair Botox</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Kérastase Fusio-Dose Booster</button></li>
              </ul>
            </div>

            <div className="col-span-3 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Skin, Nails & Grooming
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Organic Herbal Clean-Up & D-Tan</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Paraffin & Milk-Honey Mani-Pedi</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Acrylic Nail Extensions & Gel Art</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Men's Executive Fade & Beard Sculpt</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Kids Gentle Haircut & Braiding</button></li>
              </ul>
            </div>

            <div className="col-span-3 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Luxury Rituals
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Chronologiste Caviar Pearl Spa</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Olaplex No. 1 & 2 Molecular Repair</button></li>
                <li><button onClick={() => { onNavigate('salon'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Rica Brazilian Waxing & Threading</button></li>
              </ul>
            </div>

            <div className="col-span-3 bg-stone-50 rounded-2xl p-5 border border-stone-200/80 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#C5A880] text-[#121212] font-black text-[10px] uppercase tracking-wider">
                  First Salon Visit
                </span>
                <h4 className="text-base font-serif font-black text-[#121212] mt-2">
                  Flat 30% OFF Hair & Skin
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Enjoy introductory privileges across all 30+ salon outlets. Use code <strong>FIRST30</strong>.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking('salon', 'Bespoke Precision Haircut & Styling');
                }}
                className="mt-4 w-full py-2.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book Salon Appointment
              </button>
            </div>
          </div>
        )}

        {/* 2. CLINIC MEGA MENU */}
        {activeMenu === 'clinic' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Medi-Facials & Peels
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">HydraFacial MD Elite (US-FDA)</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Carbon Laser Hollywood Peel</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Ferulic & Mandelic Clinical Peels</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Melasma & Pigmentation Correction</button></li>
              </ul>
            </div>

            <div className="col-span-3 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Aesthetics & Anti-Ageing
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Morpheus8 RF Collagen Remodeling</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Allergan Botox & Wrinkle Relaxers</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Juvederm Dermal Contour Fillers</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Profhilo Bio-Remodeling Boosters</button></li>
              </ul>
            </div>

            <div className="col-span-3 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Laser & Body Contouring
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Painless Triple-Wavelength Diode Laser</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">CoolSculpting Non-Surgical Fat Loss</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Onda Coolwaves Deep Fat Reduction</button></li>
                <li><button onClick={() => { onNavigate('clinic'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">GFC & PRP Scalp Hair Regrowth</button></li>
              </ul>
            </div>

            <div className="col-span-3 bg-amber-50/70 rounded-2xl p-5 border border-amber-200/80 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-black text-[10px] uppercase tracking-wider">
                  Doctor-Led Guarantee
                </span>
                <h4 className="text-base font-serif font-black text-[#121212] mt-2">
                  Free 3D Skin Scan + 20% Off
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Conducted by board-certified dermatologists. Use code <strong>CLINIC20</strong>.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking('clinic', 'HydraFacial MD Elite (US-FDA 4-Step Vortex)');
                }}
                className="mt-4 w-full py-2.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book Doctor Consultation
              </button>
            </div>
          </div>
        )}

        {/* 3. SPA MEGA MENU */}
        {activeMenu === 'spa' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Holistic Body Massages
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Authentic Balinese Aromatherapy (60/90m)</button></li>
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Classic Swedish Relaxation Therapy</button></li>
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Deep Tissue Knot & Muscle Recovery</button></li>
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Volcanic Hot Stone Therapy</button></li>
              </ul>
            </div>

            <div className="col-span-4 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black">
                Polishes & Body Scrubs
              </span>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Pure Gold Indulgence 24K Spa Ritual</button></li>
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Warm Chocolate & Sea Salt Polishing</button></li>
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Coffee Anti-Cellulite Firming Scrub</button></li>
                <li><button onClick={() => { onNavigate('spa'); onClose(); }} className="hover:text-[#8C7A65] text-left transition-colors">Calendula & Soya Bean Tan Removal</button></li>
              </ul>
            </div>

            <div className="col-span-4 bg-stone-50 rounded-2xl p-5 border border-stone-200/80 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#C5A880] text-[#121212] font-black text-[10px] uppercase tracking-wider">
                  Weekday Privilege
                </span>
                <h4 className="text-base font-serif font-black text-[#121212] mt-2">
                  Flat 20% OFF Mon–Thu
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Relaxation awaits. Valid on all 60 & 90 min massages between 11 AM – 5 PM with code <strong>BLISS20</strong>.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking('spa', 'Authentic Balinese Aromatherapy Massage');
                }}
                className="mt-4 w-full py-2.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reserve Spa Slot
              </button>
            </div>
          </div>
        )}

        {/* 4. LOCATIONS MEGA MENU */}
        {activeMenu === 'outlets' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black block">
                Bengaluru (18 Centers)
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Indiranagar, Sadashivanagar, Jayanagar, Koramangala, Whitefield, Lavelle Road, HSR Layout, Electronic City.
              </p>
            </div>

            <div className="col-span-3 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black block">
                Mumbai (Flagships)
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bandra West (Waterfield Rd), Kemps Corner (Chinoy Mansion), Powai Supreme Business Park.
              </p>
            </div>

            <div className="col-span-3 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] font-black block">
                Gurugram & Chennai
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Gurugram: Golf Course Road Central Plaza & Sector 29.<br />
                Chennai: Nungambakkam KNK Road & Anna Nagar.
              </p>
            </div>

            <div className="col-span-3 bg-stone-50 rounded-2xl p-5 border border-stone-200/80 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-serif font-black text-[#121212]">
                  Find Nearest Outlet
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Call our central reservation desk or view complete addresses and maps.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('outlets');
                  onClose();
                }}
                className="mt-4 w-full py-2.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
              >
                View 30+ Outlets
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
