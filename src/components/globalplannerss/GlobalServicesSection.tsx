import React from 'react';

interface GlobalServicesSectionProps {
  onExploreServices: () => void;
}

export const GlobalServicesSection: React.FC<GlobalServicesSectionProps> = ({ onExploreServices }) => {
  const services = [
    {
      title: 'End-to-End Wedding Planning',
      description: 'From the first conversation to the final farewell, we oversee every detail so it is thoughtfully planned and seamlessly executed.'
    },
    {
      title: 'Hospitality & Guest Experience',
      description: 'A wedding is remembered by every guest who attends it. We make each one feel welcomed, cared for and genuinely looked after.'
    },
    {
      title: 'Design & Celebration Curation',
      description: 'Every wedding should feel personal. We curate celebrations that reflect your personality, your traditions and your story.'
    },
    {
      title: 'Destination Weddings',
      description: 'Flights, visas, rooming lists, local logistics and guest movement — we simplify destination celebrations across India and the world.'
    },
    {
      title: 'Entertainment & Experiences',
      description: 'From intimate gatherings to large-scale celebrations, we craft memorable moments through thoughtfully curated experiences.'
    },
    {
      title: 'Wedding Travel & Beyond',
      description: 'Our roots in hospitality and travel let us support proposals, pre-wedding journeys, honeymoons and milestone celebrations.'
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#12100E] text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Everything, under one roof
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#171410] border border-stone-800 border-t-2 border-t-[#C19A4B] hover:border-stone-700 transition flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onExploreServices}
            className="px-6 py-3 rounded border border-[#C19A4B]/40 text-stone-200 hover:text-white hover:bg-white/5 text-xs font-sans uppercase tracking-wider transition"
          >
            Explore our services
          </button>
        </div>
      </div>
    </section>
  );
};
