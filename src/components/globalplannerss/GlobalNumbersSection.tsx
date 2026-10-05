import React from 'react';

export const GlobalNumbersSection: React.FC = () => {
  const stats = [
    { value: '220+', label: 'Destination weddings carried' },
    { value: '31,000+', label: 'Guests hosted' },
    { value: '₹28.5 Cr', label: 'Largest celebration managed' },
    { value: '24', label: 'Full-time team members' },
    { value: '15 Days', label: 'Fastest wedding delivered' },
    { value: '10+', label: 'Destinations across the world' }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B0908] text-stone-200 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
          By the numbers
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-16">
          Proof, quietly stated
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-[#E5D7B7] via-[#C19A4B] to-[#B08D57]">
                {item.value}
              </span>
              <div className="text-xs text-stone-400 font-sans mt-3 max-w-[15ch] leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
