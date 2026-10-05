import React from 'react';

export const GlobalTestimonials: React.FC = () => {
  const reviews = [
    {
      stars: '★★★★★',
      quote: 'They became our planners, our problem-solvers, and somewhere along the way, our friends.',
      client: 'Riya & Mihir',
      location: 'Goa, 2024'
    },
    {
      stars: '★★★★★',
      quote: 'I told them my mother is particular about everything. They said they’d handle her. They weren’t joking.',
      client: 'Ishita',
      location: 'Udaipur, 2024'
    },
    {
      stars: '★★★★★',
      quote: 'We planned the entire thing from London. It was more organised than anything we’ve managed here.',
      client: 'Ananya & Neil',
      location: 'Dubai, 2023'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-2">
            What families say
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight">
            Quiet Words of Enduring Trust
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#14110E] border border-stone-800 flex flex-col justify-between shadow-lg"
            >
              <div>
                <p className="text-amber-400 text-xs tracking-widest mb-4">
                  {rev.stars}
                </p>
                <p className="font-serif text-lg text-stone-100 italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800 text-xs font-sans text-stone-400">
                <strong className="text-white block font-serif text-sm">{rev.client}</strong>
                <span>{rev.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Resource Links Strip */}
        <div className="flex flex-wrap gap-4 justify-center text-xs font-sans text-[#E5D7B7] pt-4">
          <span className="hover:underline cursor-pointer">Google Reviews 5.0 ★</span>
          <span className="opacity-40">·</span>
          <span className="hover:underline cursor-pointer">Planning Fees from ₹2.5L</span>
          <span className="opacity-40">·</span>
          <span className="hover:underline cursor-pointer">Goa vs Udaipur Comparison</span>
          <span className="opacity-40">·</span>
          <span className="hover:underline cursor-pointer">Delhi NCR Luxury Guide</span>
        </div>
      </div>
    </section>
  );
};
