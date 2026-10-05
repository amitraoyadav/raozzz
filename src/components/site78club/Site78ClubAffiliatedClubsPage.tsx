import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  Search,
  CheckCircle2,
  ExternalLink,
  Shield,
  FileText
} from 'lucide-react';
import { AFFILIATED_CLUBS, AffiliatedClub } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubAffiliatedClubsPageProps {
  onRequestIntroCard: (clubName: string) => void;
}

export const Site78ClubAffiliatedClubsPage: React.FC<Site78ClubAffiliatedClubsPageProps> = ({
  onRequestIntroCard
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClubs = AFFILIATED_CLUBS.filter(club => {
    const matchesFilter =
      filterType === 'all' ||
      club.type.toLowerCase() === filterType.toLowerCase() ||
      club.region.toLowerCase() === filterType.toLowerCase();

    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.stateOrCountry.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      {/* Header Banner */}
      <section className="bg-[#0F2537] text-white py-14 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A869] block">
            Reciprocal Worldwide Privileges
          </span>
          <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white">
            Affiliated Reciprocal Clubs
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Enjoy honorary guest privileges, sports, and accommodations across over 40 venerable member clubs in India and overseas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E5DF]">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All 40+ Clubs' },
              { id: 'domestic', label: 'Domestic (India)' },
              { id: 'west india', label: 'West India' },
              { id: 'south india', label: 'South India' },
              { id: 'north india', label: 'North India' },
              { id: 'east india', label: 'East India' },
              { id: 'international', label: 'Overseas' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#183D2F] text-white shadow-sm'
                    : 'bg-[#F9F8F5] text-stone-600 hover:bg-[#F3EFE6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by club or city..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-[#F9F8F5] border border-[#E8E5DF] focus:border-[#C5A869] focus:outline-hidden text-[#1C242C]"
            />
          </div>
        </div>

        {/* Clubs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredClubs.map(club => (
            <div
              key={club.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E5DF] hover:border-[#C5A869] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#183D2F] bg-[#F9F8F5] px-2.5 py-1 rounded">
                    {club.city}, {club.stateOrCountry}
                  </span>
                  <span className="text-[#C5A869] font-medium tracking-wider uppercase">
                    {club.type}
                  </span>
                </div>

                <h3 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] leading-snug group-hover:text-[#183D2F] transition-colors">
                  {club.name}
                </h3>

                <div className="space-y-2 text-xs text-stone-600 font-light">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>{club.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                    <span>{club.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                    <span className="truncate">{club.email}</span>
                  </div>
                </div>

                {/* Available Facilities Tags */}
                <div className="pt-2">
                  <div className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold mb-1.5">
                    Available Reciprocal Facilities:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {club.facilitiesAvailable.map((fac, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#F9F8F5] text-stone-600 border border-[#E8E5DF]"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#F3EFE6]">
                <button
                  onClick={() => onRequestIntroCard(club.name)}
                  className="w-full py-2.5 rounded-lg bg-[#0F2537] hover:bg-[#183D2F] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>Request Introduction Card</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reciprocal Protocol Guidelines */}
        <div className="p-8 rounded-3xl bg-[#F9F8F5] border border-[#E8E5DF] space-y-4">
          <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#0F2537] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#183D2F]" />
            <span>Reciprocal Club Visiting Guidelines</span>
          </h4>
          <ul className="space-y-2 text-xs text-stone-600 font-light list-disc pl-5 leading-relaxed">
            <li>
              A valid <strong>Letter of Introduction / Reciprocal Guest Card</strong> issued by the Kensington Club Secretariat is mandatory before visiting any affiliated club.
            </li>
            <li>
              Members must carry their original Kensington Club Smart Membership Card and valid government photo ID upon entering affiliated premises.
            </li>
            <li>
              Visiting privileges are typically valid for up to 30 cumulative days in a calendar year per affiliated club.
            </li>
            <li>
              All bills incurred at affiliated clubs must be settled directly at the time of consumption (via Credit/Debit Card or Cash, as per host club norms).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
