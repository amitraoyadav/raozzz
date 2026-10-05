import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  Flame,
  Wine,
  Sun,
  Heart,
  Plane
} from 'lucide-react';

interface SamarohCategoriesSectionProps {
  onSelectCategory: (category: string) => void;
  onOpenConsultation: (brief?: string) => void;
}

export const SamarohCategoriesSection: React.FC<SamarohCategoriesSectionProps> = ({
  onSelectCategory,
  onOpenConsultation
}) => {
  const categories = [
    {
      id: 'mandap',
      title: 'Muhurtham & Mandap Decor',
      tag: 'Sacred Elegance',
      subtitle: 'Temple architecture, floral domes & sacred havan setups',
      price: 'From ₹3.49L',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      accent: '#E06D53'
    },
    {
      id: 'reception',
      title: 'Grand Reception Stages',
      tag: 'Haute Glamour',
      subtitle: 'Smoked mirrors, crystal chandeliers & floral clouds',
      price: 'From ₹4.25L',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
      accent: '#D4AF37'
    },
    {
      id: 'sangeet',
      title: 'Sangeet & Cocktail Nights',
      tag: 'Concert Grade',
      subtitle: 'High-res LED walls, moving beams & illuminated bars',
      price: 'From ₹3.75L',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
      accent: '#8B5CF6'
    },
    {
      id: 'haldi',
      title: 'Sunshine Genda Haldi',
      tag: 'Vibrant Day Events',
      subtitle: 'Brass urlis, marigold cascades & organic floral showers',
      price: 'From ₹1.85L',
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80',
      accent: '#F59E0B'
    },
    {
      id: 'mehendi',
      title: 'Bohemian Garden Mehendi',
      tag: 'Chic Lounges',
      subtitle: 'Macramé teepees, Turkish kilims & henna cabanas',
      price: 'From ₹2.20L',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
      accent: '#10B981'
    },
    {
      id: 'destination',
      title: 'Destination Resort Weddings',
      tag: 'All-Inclusive',
      subtitle: 'Goa, Udaipur, Coorg, Chikmagalur & Jim Corbett buyouts',
      price: 'From ₹9.90L Suite',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      accent: '#3B82F6'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
              <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
                Explore by Celebration
              </span>
            </div>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Curated Decor by Ceremony Type
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl">
              Each ceremony in an Indian wedding has its own emotional rhythm and aesthetic language. Discover our signature design themes.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Custom Multi-Ceremony Brief')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E06D53] hover:text-[#C8523B] transition-colors cursor-pointer group"
          >
            <span>Request Custom Concept</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-stone-600 transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview with Zoom */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-stone-200 border border-white/10">
                    {cat.tag}
                  </span>
                </div>

                {/* Price Tag Bottom Right */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-bold text-white bg-[#E06D53] px-3 py-1 rounded-lg shadow-md">
                    {cat.price}
                  </span>
                </div>
              </div>

              {/* Content Bottom */}
              <div className="p-6 space-y-2">
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-white group-hover:text-[#E06D53] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {cat.subtitle}
                </p>

                <div className="pt-3 flex items-center justify-between text-xs font-semibold text-stone-300 group-hover:text-white border-t border-stone-800">
                  <span>View Lookbook &amp; Elements</span>
                  <ArrowRight className="w-4 h-4 text-[#E06D53] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
