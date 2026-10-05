import React from 'react';
import { ArrowRight, ShieldCheck, Users, Trophy, Sparkles, Building, Landmark, Compass } from 'lucide-react';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubIntroductionProps {
  onReadMore: () => void;
  onFacilityClick: (facilitySlug: string) => void;
  onImageClick: (imageSrc: string, caption: string) => void;
}

export const Site78ClubIntroduction: React.FC<Site78ClubIntroductionProps> = ({
  onReadMore,
  onFacilityClick,
  onImageClick
}) => {
  const photoGrid = [
    {
      title: 'The Oak Bar',
      slug: 'bars',
      image: '/assets/site78club/fac_bars.jpg',
      caption: 'The Vintage Oak Bar & Speakeasy Lounge'
    },
    {
      title: 'Club Outlets',
      slug: 'outlets',
      image: '/assets/site78club/fac_outlets.jpg',
      caption: 'Boutique Outlets & Kensington Patisserie'
    },
    {
      title: 'Meetings & Events',
      slug: 'meetings',
      image: '/assets/site78club/fac_meetings.jpg',
      caption: 'Executive Boardrooms & Conference Chambers'
    },
    {
      title: 'Fine Dining',
      slug: 'dining',
      image: '/assets/site78club/fac_dining.jpg',
      caption: 'The Pavilion Restaurant & Fine Dining Hall'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Club Story Narrative (Matching Panchshila layout) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
              <span className="w-8 h-[1px] bg-[#C5A869]" />
              <span>An Oasis of Greenery & Heritage</span>
              <span className="w-8 h-[1px] bg-[#C5A869]" />
            </div>

            <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0F2537] leading-[1.12]">
              The Kensington Club
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              <p>
                The Kensington Club is an exclusive, prestigious, and centrally located sanctuary of lush greenery in the heart of South Delhi. With its warm aristocratic hospitality and timeless charm, the Club has been an enduring social anchor for distinguished families, diplomats, and industry pioneers for over five decades.
              </p>
              <p>
                Founded in 1972, it ranks among the premier neighborhood institutions in the capital and maintains reciprocal affiliations with over 40 venerable clubs across India and worldwide. While honoring its vintage heritage, the Club offers an unmatched suite of state-of-the-art facilities: a temperature-moderated 50-meter Olympic swimming pool, rolling manicured winter lawns, four floodlit red clay tennis courts, hardwood squash and badminton pavilions, and a high-performance fitness studio.
              </p>
              <p>
                The Vintage Oak Bar buzzes with engaging member conversations; our 90-cover Pavilion Restaurant is a cherished multi-cuisine destination; the Poolside Café provides relaxed alfresco leisure; and our grand banquet lawns remain the benchmark for milestone family celebrations and corporate roundtables.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onReadMore}
                className="px-7 py-3 rounded-md bg-[#183D2F] hover:bg-[#0F2537] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 text-[#C5A869]" />
              </button>
            </div>
          </div>

          {/* Right Column: 4-Grid Photo Gallery (Matching Panchshila layout) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-3 bg-[#F9F8F5] rounded-2xl border border-[#E8E5DF] shadow-md">
              {photoGrid.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-stone-900 cursor-pointer shadow-sm"
                  onClick={() => onImageClick(item.image, item.caption)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Caption on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="font-['Cormorant',serif] font-bold text-base sm:text-xl tracking-tight leading-tight">
                      {item.title}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onFacilityClick(item.slug);
                      }}
                      className="w-6 h-6 rounded-full bg-white/20 hover:bg-[#C5A869] hover:text-[#0F2537] text-white flex items-center justify-center transition-colors text-xs"
                      title={`Visit ${item.title}`}
                    >
                      →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heritage Trust Metrics Row */}
        <div className="mt-20 pt-10 border-t border-[#E8E5DF] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="p-4 rounded-xl bg-[#F9F8F5]/60 border border-[#E8E5DF]">
            <div className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
              1972
            </div>
            <div className="text-xs font-semibold text-[#183D2F] uppercase tracking-wider mt-1">
              Established Heritage
            </div>
            <p className="text-[11px] text-stone-500 font-light mt-0.5">50+ Years of Fellowship</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F9F8F5]/60 border border-[#E8E5DF]">
            <div className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
              40+
            </div>
            <div className="text-xs font-semibold text-[#183D2F] uppercase tracking-wider mt-1">
              Affiliated Clubs
            </div>
            <p className="text-[11px] text-stone-500 font-light mt-0.5">Across India & Worldwide</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F9F8F5]/60 border border-[#E8E5DF]">
            <div className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
              25+
            </div>
            <div className="text-xs font-semibold text-[#183D2F] uppercase tracking-wider mt-1">
              Facilities & Venues
            </div>
            <p className="text-[11px] text-stone-500 font-light mt-0.5">Sports, Dining, Lawns & Lounges</p>
          </div>

          <div className="p-4 rounded-xl bg-[#F9F8F5]/60 border border-[#E8E5DF]">
            <div className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
              5,000+
            </div>
            <div className="text-xs font-semibold text-[#183D2F] uppercase tracking-wider mt-1">
              Esteemed Members
            </div>
            <p className="text-[11px] text-stone-500 font-light mt-0.5">Generations of Fellowship</p>
          </div>
        </div>
      </div>
    </section>
  );
};
