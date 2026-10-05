import React from 'react';

interface GlobalDestinationsSectionProps {
  onSelectDestination?: (destName: string) => void;
}

export const GlobalDestinationsSection: React.FC<GlobalDestinationsSectionProps> = ({ onSelectDestination }) => {
  const destinationTiles = [
    {
      name: 'Goa',
      meta: '1,117 photos · 3 venues',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Jaipur',
      meta: '133 photos · 2 venues',
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Bengaluru',
      meta: '207 photos · 4 venues',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Coimbatore',
      meta: '93 photos · 1 venue',
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Colombo & Dubai',
      meta: '140+ photos · 3 venues',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const indiaDestinations = ['Goa', 'Udaipur', 'Delhi NCR', 'Rajasthan', 'Kerala', 'Rishikesh', 'Corbett', 'Himachal'];
  const intlDestinations = ['Dubai', 'Oman', 'Thailand', 'Vietnam', 'Sri Lanka', 'Turkey', 'Morocco', 'Sydney'];

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            Where we celebrate
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Celebrations without borders
          </h2>
        </div>

        {/* 5 Destination Tiles Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {destinationTiles.map((tile, index) => (
            <div
              key={index}
              onClick={() => onSelectDestination && onSelectDestination(tile.name)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-[#C19A4B]/60 transition-all flex flex-col justify-end p-4 shadow-md"
            >
              <img
                src={tile.image}
                alt={tile.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="font-serif text-xl font-bold text-white block group-hover:text-[#E5D7B7] transition-colors">
                  {tile.name}
                </span>
                <span className="text-[10px] text-stone-400 font-sans italic block mt-0.5">
                  {tile.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Regional Lists Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#14110E] border border-stone-800">
            <span className="text-xs font-serif uppercase tracking-widest text-[#C19A4B] font-semibold block mb-4">
              India
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {indiaDestinations.map((d, i) => (
                <span
                  key={i}
                  onClick={() => onSelectDestination && onSelectDestination(d)}
                  className="font-serif text-lg text-stone-200 hover:text-[#C19A4B] cursor-pointer transition"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#14110E] border border-stone-800">
            <span className="text-xs font-serif uppercase tracking-widest text-[#C19A4B] font-semibold block mb-4">
              International
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {intlDestinations.map((d, i) => (
                <span
                  key={i}
                  onClick={() => onSelectDestination && onSelectDestination(d)}
                  className="font-serif text-lg text-stone-200 hover:text-[#C19A4B] cursor-pointer transition"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
