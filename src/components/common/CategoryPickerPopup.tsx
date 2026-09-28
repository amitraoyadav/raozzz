import React, { useState } from 'react';
import {
  X,
  Coffee,
  Scissors,
  Stethoscope,
  ShoppingBag,
  Dumbbell,
  Wrench,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Building2,
  Gamepad2,
  KeyRound,
  PenTool,
  GraduationCap,
  Plane,
  Apple,
  Briefcase,
  Gift,
  Palette,
  UtensilsCrossed,
  Truck,
  Scale,
  Cake,
  Pill,
  Dog,
  Camera
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface CategoryPickerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CategoryPickerPopup: React.FC<CategoryPickerPopupProps> = ({ isOpen, onClose }) => {
  const { setActiveView, setDemoCategoryFilter } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen) return null;

  const popularCategories = [
    {
      id: 'cafe',
      label: 'Café & Dining',
      shortLabel: 'Café',
      icon: Coffee,
      color: 'bg-amber-500/10 text-amber-700 border-amber-200'
    },
    {
      id: 'salon',
      label: 'Salon & Beauty',
      shortLabel: 'Salon',
      icon: Scissors,
      color: 'bg-rose-500/10 text-rose-700 border-rose-200'
    },
    {
      id: 'clinic',
      label: 'Doctor Clinic',
      shortLabel: 'Clinic',
      icon: Stethoscope,
      color: 'bg-blue-500/10 text-blue-700 border-blue-200'
    },
    {
      id: 'retail',
      label: 'Retail & Kirana',
      shortLabel: 'Retail',
      icon: ShoppingBag,
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-200'
    },
    {
      id: 'gym',
      label: 'Fitness Gym',
      shortLabel: 'Gym',
      icon: Dumbbell,
      color: 'bg-indigo-500/10 text-indigo-700 border-indigo-200'
    },
    {
      id: 'ac_repair',
      label: 'Repair Shop',
      shortLabel: 'Repair Shop',
      icon: Wrench,
      color: 'bg-orange-500/10 text-orange-700 border-orange-200'
    }
  ];

  const allOtherCategories = [
    { id: 'realestate', label: 'Real Estate & Housing', icon: Building2 },
    { id: 'coworking_space', label: 'Co-Working Space', icon: Briefcase },
    { id: 'gaming_cafe', label: 'Gaming & VR Lounge', icon: Gamepad2 },
    { id: 'escape_room', label: 'Escape Room', icon: KeyRound },
    { id: 'tattoo_studio', label: 'Tattoo & Piercing Studio', icon: PenTool },
    { id: 'home_tutor', label: 'Home Tutor & Classes', icon: GraduationCap },
    { id: 'drone_service', label: 'Drone & Aerial Photography', icon: Plane },
    { id: 'organic_farm', label: 'Organic Farm & Veg Boxes', icon: Apple },
    { id: 'party_rental', label: 'Party & Event Rental', icon: Gift },
    { id: 'corporate_gifting', label: 'Corporate Gifting', icon: Gift },
    { id: 'handicraft_store', label: 'Handicraft & Artisan', icon: Palette },
    { id: 'rooftop_cafe', label: 'Rooftop & Terrace Café', icon: Coffee },
    { id: 'office_tiffin', label: 'B2B Office Tiffin Service', icon: Truck },
    { id: 'ca_tax', label: 'CA & Tax Advisory', icon: Scale },
    { id: 'bakery', label: 'Bakery & Cake Studio', icon: Cake },
    { id: 'pharmacy', label: 'Pharmacy & Medical', icon: Pill },
    { id: 'vet_clinic', label: 'Veterinary & Pet Care', icon: Dog },
    { id: 'photography', label: 'Photography Studio', icon: Camera }
  ];

  const handleSelectCategory = (categoryId: string) => {
    setDemoCategoryFilter(categoryId);
    setActiveView('demo-websites', categoryId);
    onClose();
  };

  const handleSkipToAll = () => {
    setDemoCategoryFilter('all');
    setActiveView('demo-websites');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#14162B]/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-[#E8E7F0] overflow-hidden animate-scaleUp font-['Inter'] my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Strip with Skip button */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Find Your Industry</span>
          </div>

          {/* Visible Skip / Close Option */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close category picker"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body with independent scrolling */}
        <div className="px-4 sm:px-6 py-3 overflow-y-auto flex-1">
          <h2 className="text-xl sm:text-3xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            What's your business?
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#474B64] leading-relaxed">
            Select your industry to immediately view live, tailored demo websites with real Indian ₹ pricing and WhatsApp ordering.
          </p>

          {/* Popular Row: 6 Category Icons */}
          <div className="mt-4 sm:mt-5">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#8E92A8] uppercase tracking-wider block mb-2">
              Popular Industries
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
              {popularCategories.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-2xl border border-[#E8E7F0] hover:border-[#4338CA] hover:bg-[#FAFAF8] active:bg-[#E8E7F0]/40 hover:shadow-md transition-all text-center group cursor-pointer"
                  >
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-1.5 sm:mb-2 border ${cat.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#14162B] group-hover:text-[#4338CA] transition-colors leading-tight">
                      {cat.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expandable "Browse all categories" */}
          <div className="mt-3.5 pt-3 border-t border-[#E8E7F0]">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-2 text-xs font-bold text-[#4338CA] hover:text-[#3730A3] transition-colors cursor-pointer"
            >
              <span>Browse all categories ({allOtherCategories.length}+ more)</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#4338CA]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#4338CA]" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-2 max-h-48 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-3 gap-1.5 animate-fadeIn text-left">
                {allOtherCategories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className="flex items-center gap-2 p-2 rounded-xl border border-slate-100 bg-[#FAFAF8] hover:bg-white hover:border-[#4338CA] active:bg-[#E8E7F0]/60 hover:shadow-xs transition-all text-left cursor-pointer group"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#4338CA] shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-800 group-hover:text-[#4338CA] truncate">
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer with visible Skip Text Link */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#FAFAF8] border-t border-[#E8E7F0] flex flex-wrap items-center justify-between gap-2 shrink-0">
          <button
            onClick={handleSkipToAll}
            className="text-xs font-semibold text-[#636882] hover:text-[#14162B] underline transition-colors cursor-pointer"
          >
            Just show me everything →
          </button>

          <button
            onClick={handleSkipToAll}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-[#4338CA] hover:bg-[#3730A3] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Explore All Demos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
