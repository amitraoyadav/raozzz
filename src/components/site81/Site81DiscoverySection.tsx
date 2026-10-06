import React, { useState } from 'react';
import { ArrowRight, Globe, MapPin, Sparkles } from 'lucide-react';
import { GLOBAL_DESTINATIONS, GlobalDestination } from '../../data/site81Data';

interface Site81DiscoverySectionProps {
  onSelectDestination: (destName: string) => void;
  onExploreAll: () => void;
}

export const Site81DiscoverySection: React.FC<Site81DiscoverySectionProps> = ({
  onSelectDestination,
  onExploreAll
}) => {
  const [activeTab, setActiveTab] = useState<'countries' | 'cities' | 'regions'>('countries');

  const countries = GLOBAL_DESTINATIONS.filter((d) => d.type === 'country');
  const cities = GLOBAL_DESTINATIONS.filter((d) => d.type === 'city');
  const regions = GLOBAL_DESTINATIONS.filter((d) => d.type === 'region');

  const displayedDestinations =
    activeTab === 'countries' ? countries : activeTab === 'cities' ? cities : regions;

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>International Territorial Presence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 font-normal">
              Explore Prime Global Destinations
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl font-light">
              From sun-drenched Mediterranean archipelagos to high-altitude alpine retreats and sovereign financial centers.
            </p>
          </div>

          {/* Segmented Filter Buttons: Countries / Cities / Regions */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('countries')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'countries'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Top Countries ({countries.length})
            </button>
            <button
              onClick={() => setActiveTab('cities')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'cities'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Top Cities ({cities.length})
            </button>
            <button
              onClick={() => setActiveTab('regions')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'regions'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Iconic Regions ({regions.length})
            </button>
          </div>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.name)}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Destination Image */}
              <img
                src={dest.imageUrl}
                alt={dest.name}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent group-hover:via-neutral-900/20 transition-colors" />

              {/* Top Badge: Listing Count */}
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded">
                  {dest.listingCount.toLocaleString()} Estates
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  {dest.country}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal group-hover:text-amber-200 transition-colors mt-0.5">
                  {dest.name}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light">
                  {dest.description}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-300 group-hover:translate-x-1 transition-transform">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Homes CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase rounded cursor-pointer"
          >
            <span>View All Global Listings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
