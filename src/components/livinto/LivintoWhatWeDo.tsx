import React from 'react';
import { ChefHat, BedDouble, Tv, UtensilsCrossed, Sparkle, Baby, ArrowRight, Calendar } from 'lucide-react';
import { PRODUCT_CATEGORIES_DATA, ProductItem } from '../../data/livintoInteriorsData';

interface LivintoWhatWeDoProps {
  onOpenProduct: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const LivintoWhatWeDo: React.FC<LivintoWhatWeDoProps> = ({
  onOpenProduct,
  onOpenConsultation,
}) => {
  return (
    <section id="what-we-do" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <span>Specialized Customization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            WHAT WE DO
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From smart modular kitchens to peaceful bedroom sanctuaries, our customized modular furniture solutions are tailored to your spatial layout.
          </p>
        </div>

        {/* 6 Category Tiles matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenProduct(item.slug)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-slate-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-white/10">
                    Custom-Made
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-extrabold text-2xl tracking-wider uppercase group-hover:text-amber-300 transition-colors">
                    {item.category.toUpperCase().replace('-', ' ')}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1">
                    {item.tagline}
                  </p>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between bg-white text-xs">
                <span className="font-bold text-[#814882] group-hover:underline flex items-center gap-1">
                  <span>Explore {item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-slate-400 font-medium">BWP Plywood</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-extrabold text-xs sm:text-sm shadow-xl transition-all cursor-pointer uppercase tracking-wider transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Talk to Our Design Consultant</span>
          </button>
        </div>
      </div>
    </section>
  );
};
