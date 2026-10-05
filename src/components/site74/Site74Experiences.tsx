import React from 'react';
import { Waves, Crown, Mountain, Building, ArrowRight, Check } from 'lucide-react';

interface Site74ExperiencesProps {
  onSelectCategory: (category: string) => void;
}

const EXPERIENCES = [
  {
    id: 'beach',
    title: 'Beachfront Sanctuaries',
    tagline: 'Ocean spray vows, barefoot luxury & sunset cocktail shacks',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    icon: Waves,
    highlights: [
      'Private oceanfront lawns up to 45,000 sq.ft.',
      'Dedicated sunset mandap platforms over the water',
      'Lagoon cocktail decks & live seafood barbecue stations'
    ],
    destinations: 'Goa · Kerala · Dubai · Bali'
  },
  {
    id: 'royal',
    title: 'Palaces & Royal Heritage',
    tagline: 'Imperial dynasties, sandstone ramparts & royal nagada processions',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    icon: Crown,
    highlights: [
      'Centuries of authentic Rajputana & Mughal stone craftwork',
      'Elephant & royal cavalry arrival courtyard clearances',
      'Mewari & Marwari imperial thali banqueting under silver domes'
    ],
    destinations: 'Jaipur · Udaipur · Jodhpur · Agra'
  },
  {
    id: 'mountain',
    title: 'Mountain & Hill Resorts',
    tagline: 'Misty pine ridges, Doon valley vistas & high-altitude acoustic sangeets',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    icon: Mountain,
    highlights: [
      'Panoramic 180° views of snowcapped Himalayan peaks',
      'Outdoor cedar amphitheaters with crackling bonfire pits',
      'Pahari organic banquet courses with local wild mountain honey'
    ],
    destinations: 'Mussoorie · Shimla · Dehradun'
  },
  {
    id: 'city',
    title: 'Metropolitan Ballrooms',
    tagline: 'Pillarless mega-halls, crystal chandeliers & high-voltage concert production',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    icon: Building,
    highlights: [
      '24,000 sq.ft. pillarless ballrooms accommodating up to 2,000 guests',
      'State-of-the-art concert audio-visual and kinetic stage rigging',
      'Flawless transit connectivity for NRI & international attendees'
    ],
    destinations: 'Mumbai · Bengaluru · Delhi NCR · Hyderabad'
  }
];

export const Site74Experiences: React.FC<Site74ExperiencesProps> = ({
  onSelectCategory
}) => {
  return (
    <section className="py-20 lg:py-28 px-5 sm:px-6 bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400">
            Distinctive Wedding Archetypes
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl text-white">
            Curated Wedding Experiences
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Every love story carries its own rhythm. Whether your dream is an imperial palace courtyard in Rajasthan or a serene sunset mandap by the Arabian Sea, we build the world around your vision.
          </p>
        </div>

        {/* 2x2 Rich Experiences Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERIENCES.map(exp => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                onClick={() => onSelectCategory(exp.id)}
                className="group relative rounded-3xl bg-[#1C1A17] border border-stone-800 overflow-hidden shadow-2xl hover:border-amber-400/60 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Image container */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17] via-[#1C1A17]/30 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 w-11 h-11 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                      {exp.destinations}
                    </span>
                    <h3 className="font-serif font-medium text-2xl sm:text-3xl text-white">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                {/* Details body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {exp.tagline}
                  </p>

                  <ul className="space-y-2 text-xs text-stone-400 pt-2 border-t border-stone-800/80">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 group-hover:text-white transition-colors">
                      Explore {exp.title}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-800 group-hover:bg-amber-400 text-stone-300 group-hover:text-[#141210] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Site74Experiences;
