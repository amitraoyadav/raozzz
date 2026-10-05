import React, { useState } from 'react';
import {
  MapPin, Calendar, Users, ArrowRight, CheckCircle2, Sparkles, Phone,
  Mail, Shield, Globe, Eye, FileText, Check, Search
} from 'lucide-react';
import { site74Config } from '../../config/site74Config';
import {
  DESTINATIONS_DATA, DESTINATION_CATEGORIES, SERVICES_DATA, OFFERS_DATA,
  GALLERY_PHOTOS, HONEYMOON_DATA, FAQS_SITE74, DestinationItem, OfferItem
} from '../../data/site74Data';
import { Site74PlanningForm } from './Site74PlanningForm';

// ==========================================
// 1. ALL DESTINATIONS DIRECTORY PAGE
// ==========================================
export const DestinationsDirectoryPage: React.FC<{
  onSelectDestination: (dest: DestinationItem) => void;
  onOpenPlanning: () => void;
}> = ({ onSelectDestination, onOpenPlanning }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = DESTINATIONS_DATA.filter(item => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = !searchQuery.trim() || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.stateCountry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#FAF8F5] py-14 md:py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Iconic Geographies
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-6xl text-[#141210]">
            The Grandeur Destination Portfolio
          </h1>
          <p className="text-base text-[#6B6155] leading-relaxed">
            From centuries-old royal Rajputana forts in Jaipur and Udaipur to serene Arabian Sea shores in Goa and Himalayan ridgelines in Mussoorie. Discover our 18 iconic destinations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#E8E1D5] pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {DESTINATION_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#141210] text-[#E8DFD3] font-bold shadow-md'
                    : 'bg-white text-[#6B6155] border border-[#E8E1D5] hover:border-[#141210]'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by city or state..."
              className="w-full pl-9 pr-3.5 py-2 rounded-full border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(dest => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] tracking-wider uppercase bg-[#141210]/80 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full border border-white/20">
                      {dest.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-[10px] uppercase text-stone-300 tracking-wider">
                      {dest.stateCountry}
                    </span>
                    <h3 className="font-serif font-medium text-2xl text-white">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-[#52483E] leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="pt-2 text-xs text-[#6B6155] space-y-1 font-mono">
                    <div className="flex justify-between">
                      <span>Properties:</span>
                      <span className="font-bold text-[#141210]">{dest.venueCount} Resorts &amp; Palaces</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Capacities:</span>
                      <span className="font-bold text-[#141210]">{dest.capacityRange}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-[#F5EFE5] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C6D37]">{dest.startingPrice.split('(')[0]}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#141210] group-hover:text-[#8C6D37] transition-colors">
                    <span>Explore Destination</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. ALL OFFERS CATALOG PAGE
// ==========================================
export const OffersDirectoryPage: React.FC<{
  onSelectOffer: (offer: OfferItem) => void;
}> = ({ onSelectOffer }) => {
  return (
    <div className="bg-[#FAF8F5] py-14 md:py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Limited Period Privileges
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-6xl text-[#141210]">
            Exclusive Wedding Offers &amp; Packages
          </h1>
          <p className="text-base text-[#6B6155] leading-relaxed">
            Reserve your wedding dates at our iconic properties to enjoy complimentary bridal presidential suites, architectural lighting subsidies, and worldwide honeymoon nights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS_DATA.map(offer => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-amber-400 text-[#141210] font-bold px-2.5 py-0.5 rounded shadow-xs">
                      {offer.badge}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-white bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                      {offer.destination}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-serif font-medium text-2xl text-white">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#52483E] leading-relaxed">{offer.description}</p>
                  <div className="space-y-2 pt-2 border-t border-[#F5EFE5]">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#141210] block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#6B6155]">
                      {offer.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 text-[11px] text-[#8A7B6E] font-mono">
                    <span className="font-bold text-[#141210]">Validity:</span> {offer.validTill}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectOffer(offer)}
                  className="w-full py-3 bg-[#141210] hover:bg-[#8C6D37] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire for This Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. HONEYMOON SANCTUARIES PAGE
// ==========================================
export const HoneymoonDirectoryPage: React.FC<{
  onOpenPlanning: () => void;
}> = ({ onOpenPlanning }) => {
  return (
    <div className="bg-[#FAF8F5] py-14 md:py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Post-Celebration Intimacy
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-6xl text-[#141210]">
            The Honeymoon Collection
          </h1>
          <p className="text-base text-[#6B6155] leading-relaxed">
            Secluded private plunge pool villas, couples Ayurvedic journeys, and champagne boat tours across Lake Pichola, the Arabian Sea, and Himalayan pine valleys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HONEYMOON_DATA.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white font-mono text-[10px] uppercase border border-white/20">
                    <MapPin className="w-3 h-3 text-amber-300 inline mr-1" />
                    {item.destination}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest font-bold block mb-1">
                      {item.packageNights}
                    </span>
                    <h3 className="font-serif font-medium text-2xl text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#52483E] leading-relaxed">{item.tagline}</p>
                  <ul className="space-y-2 text-xs text-[#6B6155] pt-2 border-t border-[#F5EFE5]">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenPlanning}
                  className="w-full py-3 bg-[#141210] hover:bg-[#8C6D37] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Reserve Honeymoon Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. CONTACT & CONCIERGE PAGE
// ==========================================
export const ContactConciergePage: React.FC<{
  onOpenCallback: () => void;
}> = ({ onOpenCallback }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Goa',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] py-14 md:py-24 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Global Concierge Desks
          </span>
          <h1 className="font-serif font-medium text-4xl sm:text-6xl text-[#141210]">
            Speak with our Wedding Directors
          </h1>
          <p className="text-base text-[#6B6155] leading-relaxed">
            Our specialized destination directors across Delhi NCR, Mumbai, Jaipur, and Dubai are available 24/7 to discuss resort availability, property inspections, and bespoke banqueting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E1D5] shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-[#141210]">Send a Direct Message</h3>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#141210] font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohini & Kabir"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#141210] font-semibold mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rohini@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#141210] font-semibold mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98210 00000"
                      className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#141210] font-semibold mb-1">Destination of Interest</label>
                  <select
                    value={formData.destination}
                    onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                  >
                    <option>Goa Beach Resorts</option>
                    <option>Jaipur Royal Palaces</option>
                    <option>Udaipur Lake Pichola</option>
                    <option>Mussoorie Himalayan Ridges</option>
                    <option>Mumbai Seafront Ballrooms</option>
                    <option>Dubai &amp; Desert Venues</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#141210] font-semibold mb-1">Your Celebration Notes</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your estimated guest count, preferred months, or specific questions..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D5C9B8] text-xs bg-white focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#141210] hover:bg-[#8C6D37] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Inquiry to Grandeur Concierge
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-2xl text-[#141210] font-medium">Inquiry Dispatched</h4>
                <p className="text-xs text-[#6B6155] max-w-sm mx-auto">
                  Thank you, {formData.name}. Our Senior Wedding Specialist for {formData.destination} will connect via phone and email within 4 hours.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E8E1D5] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#8C6D37] font-bold block">Toll-Free Priority Desk</span>
              <p className="font-serif text-2xl font-bold text-[#141210]">{site74Config.TOLL_FREE}</p>
              <p className="text-xs text-[#6B6155]">Available 09:00 AM – 09:00 PM IST daily</p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E8E1D5] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#8C6D37] font-bold block">Direct Concierge Email</span>
              <p className="font-serif text-lg font-bold text-[#141210]">{site74Config.EMAIL}</p>
              <p className="text-xs text-[#6B6155]">For RFPs, vendor inquiries, and palace buyout bids</p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E8E1D5] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#8C6D37] font-bold block">Corporate Pavilion</span>
              <p className="text-xs text-[#3D352E] leading-relaxed">
                {site74Config.ADDRESS}
              </p>
            </div>

            <button
              onClick={onOpenCallback}
              className="w-full py-3.5 bg-stone-900 hover:bg-black text-amber-300 rounded-2xl text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Or Request a Fast Callback Instead</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. LEGAL PAGES (TERMS, PRIVACY, ACCESSIBILITY, SITEMAP)
// ==========================================
export const LegalDocumentPage: React.FC<{ type: 'terms' | 'privacy' | 'accessibility' | 'sitemap' }> = ({ type }) => {
  const titles = {
    terms: 'Terms & Conditions of Hospitality',
    privacy: 'Privacy Policy & Guest Data Protection',
    accessibility: 'Web Accessibility & Physical Hospitality Statement',
    sitemap: 'Grandeur Weddings HTML Directory & Sitemap'
  };

  return (
    <div className="bg-[#FAF8F5] py-14 md:py-24 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#8C6D37]">
            Official Documentation
          </span>
          <h1 className="font-serif font-medium text-4xl text-[#141210] mt-1">
            {titles[type]}
          </h1>
          <p className="text-xs text-[#8A7B6E] font-mono mt-1">
            {site74Config.BRAND_NAME} · Updated October 2026
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#E8E1D5] shadow-xs text-xs text-[#52483E] leading-relaxed space-y-5">
          {type === 'terms' && (
            <>
              <p>These terms govern booking reservations, wedding banquet contracts, and luxury resort buyouts executed through Grandeur Weddings &amp; Resorts.</p>
              <p>All dates are reserved upon receipt of formal advance deposit agreements. Cancellation guidelines, postponement riders, and weather contingency guarantees are codified transparently within each property’s customized master agreement.</p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>At Grandeur, we hold the privacy of our couples, VIP attendees, and celebrity guests with the utmost confidentiality.</p>
              <p>Guest room allocations, dietary sensitivities, flight itineraries, and wedding schedules are safeguarded with strict 256-bit encryption. We never sell or share wedding guest rosters with external third-party advertisers.</p>
            </>
          )}

          {type === 'accessibility' && (
            <>
              <p>Grandeur Weddings is committed to ensuring full digital and physical accessibility across all properties and platforms.</p>
              <p>Our website adheres to WCAG 2.1 AA accessibility standards. All flagship resorts provide step-free ramp access, dedicated elevators, and accessible guest suites for elderly family members and guests with mobility considerations.</p>
            </>
          )}

          {type === 'sitemap' && (
            <div className="space-y-4">
              <p>Explore all key sections and directories across the Grandeur Weddings &amp; Resorts portal:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-[11px]">
                <div>
                  <span className="font-bold text-[#141210] block mb-1">Destinations</span>
                  <ul className="space-y-1 text-[#6B6155]">
                    <li>Goa Beachfronts</li>
                    <li>Jaipur Palaces</li>
                    <li>Udaipur Lakes</li>
                    <li>Mussoorie Hills</li>
                    <li>Mumbai Ballrooms</li>
                    <li>Dubai Skyline</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-[#141210] block mb-1">Services</span>
                  <ul className="space-y-1 text-[#6B6155]">
                    <li>Wedding Planning</li>
                    <li>Cuisine &amp; Banqueting</li>
                    <li>Designer Décor</li>
                    <li>Bridal Suite &amp; Spa</li>
                    <li>Guest Transfers</li>
                    <li>Entertainment</li>
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-[#141210] block mb-1">Experience</span>
                  <ul className="space-y-1 text-[#6B6155]">
                    <li>Special Offers</li>
                    <li>Honeymoon Suites</li>
                    <li>Inspiration Gallery</li>
                    <li>Start Planning Form</li>
                    <li>Concierge Callback</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
