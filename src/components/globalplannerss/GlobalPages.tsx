import React, { useState } from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';
import { GLOBAL_WEDDINGS, WeddingStory, GLOBAL_FAQS } from '../../data/globalPlannerssData';
import { GlobalPlanningToolsSection } from './GlobalPlanningToolsSection';

interface PageProps {
  onCheckDate: () => void;
  onSelectWedding: (wedding: WeddingStory) => void;
  setActiveTab: (tab: string) => void;
}

/* =========================================================================
   1. WEDDINGS PORTFOLIO PAGE
   ========================================================================= */
export const GlobalWeddingsPage: React.FC<PageProps> = ({ onCheckDate, onSelectWedding }) => {
  const [filter, setFilter] = useState<'all' | 'udaipur' | 'goa' | 'jaipur'>('all');

  const filtered = GLOBAL_WEDDINGS.filter((w) => {
    if (filter === 'udaipur') return w.destination.toLowerCase().includes('udaipur');
    if (filter === 'goa') return w.destination.toLowerCase().includes('goa');
    if (filter === 'jaipur') return w.destination.toLowerCase().includes('jaipur');
    return true;
  });

  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-3">
            Real Celebrations
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight mb-6">
            Weddings We Have Carried
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            Every celebration here was designed, coordinated, and executed by our full-time 24-person team. No stock photography; only genuine moments and real couples.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Celebrations' },
              { id: 'udaipur', label: 'Udaipur Palaces' },
              { id: 'goa', label: 'Goa Coastal' },
              { id: 'jaipur', label: 'Jaipur Fortresses' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition border ${
                  filter === tab.id
                    ? 'bg-[#C19A4B] text-[#171410] border-[#C19A4B] font-bold shadow-md'
                    : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Wedding Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filtered.map((wedding) => (
            <div
              key={wedding.id}
              onClick={() => onSelectWedding(wedding)}
              className="group bg-[#171410] rounded-2xl overflow-hidden border border-stone-800 hover:border-[#C19A4B]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-900">
                  <img
                    src={wedding.coverImage}
                    alt={wedding.couple}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171410] via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-[#C19A4B]/40 flex items-center justify-center text-[11px] font-serif font-bold text-[#E5D7B7]">
                    {wedding.monogram}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 rounded-full bg-[#C19A4B] text-[#171410] font-sans font-bold text-xs uppercase tracking-wider shadow-lg">
                      Explore Celebration →
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-serif uppercase tracking-widest text-[#C19A4B] mb-1">
                    {wedding.destination}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-[#E5D7B7] transition-colors">
                    {wedding.couple}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">{wedding.venue}</p>
                  <p className="text-xs text-stone-300 font-sans mt-3 line-clamp-2 leading-relaxed">
                    {wedding.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-stone-800/60 mt-4">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-sans">
                  {wedding.guestCount} Guests · {wedding.duration}
                </span>
                <div className="flex items-center gap-1.5">
                  {wedding.palette.map((c, i) => (
                    <span key={i} className="w-3 h-3 rounded-full border border-stone-700" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Date Availability Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#201811] via-[#2A1F16] to-[#181310] border border-[#C19A4B]/40 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-3">
            Want your celebration carried with this level of detail?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto mb-6 font-sans">
            We limit our capacity to {globalPlannerssConfig.ANNUAL_CAP} couples a year to preserve this intimacy.
          </p>
          <button
            onClick={onCheckDate}
            className="px-8 py-3.5 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition"
          >
            {globalPlannerssConfig.CTAS.checkDate}
          </button>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   2. OUR STORY & PHILOSOPHY PAGE
   ========================================================================= */
export const GlobalStoryPage: React.FC<PageProps> = ({ onCheckDate, setActiveTab }) => {
  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B]">
            Our Story &amp; Philosophy
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight">
            We Carry Weddings.
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A luxury wedding planning house in Gurugram, Delhi NCR, built on quiet conviction, radical fee transparency, and an unwavering respect for family presence.
          </p>
        </div>

        {/* Founding Philosophy Narrative */}
        <div className="prose prose-invert max-w-none space-y-6 font-sans text-xs sm:text-sm text-stone-300 leading-relaxed">
          <div className="p-8 rounded-2xl bg-[#14110E] border border-stone-800 space-y-4">
            <h2 className="font-serif text-2xl text-white font-semibold">
              Founded in {globalPlannerssConfig.ESTABLISHED_YEAR}
            </h2>
            <p>
              {globalPlannerssConfig.SITE_NAME} was founded with a singular observation: Indian weddings are among the most joyous milestones in human culture, yet parents and couples often spend the days leading up to them exhausted, juggling 40 vendor phone calls, lost luggage, and muhurat timing anxieties.
            </p>
            <p>
              We asked a simple question: What if a wedding planning company existed not to merely "manage" checklists, but to <strong>carry the celebration</strong> entirely — absorbing all friction so families can be 100% present in the emotion?
            </p>
          </div>

          {/* The Sixty a Year Rule */}
          <div className="p-8 rounded-2xl bg-[#171410] border border-[#C19A4B]/40 space-y-4">
            <span className="text-[10px] uppercase font-serif tracking-widest text-[#C19A4B] block">
              Pillar I · The Absolute Cap
            </span>
            <h3 className="font-serif text-2xl text-white font-semibold">
              Why Exactly 60 Weddings a Year?
            </h3>
            <p>
              Most event agencies scale by taking on 150+ weddings a season, delegating on-ground execution to temporary freelancers who meet the family for the first time on the wedding morning.
            </p>
            <p>
              At {globalPlannerssConfig.SITE_NAME}, we made an uncompromising rule: <strong>we cap at 60 weddings annually</strong>. Every celebration is personally led by one of our Senior Directors and managed by our 24-person full-time squad. When you call us, you speak directly with the team who will stand behind your mandap.
            </p>
          </div>

          {/* Transparent Fees */}
          <div className="p-8 rounded-2xl bg-[#14110E] border border-stone-800 space-y-4">
            <span className="text-[10px] uppercase font-serif tracking-widest text-[#C19A4B] block">
              Pillar II · Honest Accounting
            </span>
            <h3 className="font-serif text-2xl text-white font-semibold">
              Published Fees, 100% Open-Book
            </h3>
            <p>
              The luxury wedding industry is infamous for opaque kickbacks and hidden vendor commissions. We rejected that entirely. Our planning fee collections are published upfront from ₹2,50,000 + GST.
            </p>
            <p>
              All hotel master folios, floral invoices, artist riders, and transport bills are passed directly to our clients at cost with zero hidden markups. You always see exactly where every rupee is invested.
            </p>
          </div>

          {/* In-House Production Atelier */}
          <div className="p-8 rounded-2xl bg-[#14110E] border border-stone-800 space-y-4">
            <span className="text-[10px] uppercase font-serif tracking-widest text-[#C19A4B] block">
              Pillar III · Real Craftsmanship
            </span>
            <h3 className="font-serif text-2xl text-white font-semibold">
              In-House Atelier &amp; 3D Virtual Pre-Renders
            </h3>
            <p>
              Rather than brokering decor to third-party sub-contractors, our in-house decor atelier constructs, fabricates, and tests structures in scale before arrival at the destination. We build full photorealistic 3D CAD renders of your mandap, sangeet trussing, and floral tunnels months in advance so there are zero surprises.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8 border-t border-stone-800 space-y-4">
          <p className="font-serif text-xl text-white italic">
            “Your only job on the wedding day is to walk in, embrace your loved ones, and celebrate.”
          </p>
          <div className="pt-2">
            <button
              onClick={onCheckDate}
              className="px-8 py-3.5 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition"
            >
              Start a Conversation With Our Director →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   3. SERVICES & WHAT WE DO PAGE
   ========================================================================= */
export const GlobalServicesPage: React.FC<PageProps> = ({ onCheckDate, setActiveTab }) => {
  const serviceCards = [
    {
      title: 'End-to-End Turnkey Planning',
      icon: '✦',
      desc: 'Complete architectural oversight from your first venue selection to the last guest airport transfer. We formulate the overall budget matrix, build detailed run-of-show cue sheets, and synchronize every vendor.',
      deliverables: [
        'Contract negotiations & hotel master folio audits',
        'Detailed minute-by-minute family & vendor timelines',
        'Permits, police NOCs, excise & music licensing (PPL/IPRS)',
        'Dedicated senior wedding director and 12-member ops squad'
      ]
    },
    {
      title: 'In-House Décor Design & 3D Atelier',
      icon: '🏛',
      desc: 'Our dedicated production studio crafts custom thematic environments for every single ceremony across the wedding arc.',
      deliverables: [
        'Photorealistic 3D spatial CAD renders for all functions',
        'Custom mandap engineering & structural wind load testing',
        'Direct floral sourcing from Bangalore, Holland & Kenya',
        'Stage, concert trussing, intelligent lighting & ambient acoustics'
      ]
    },
    {
      title: 'Hospitality & Guest Concierge',
      icon: '🛎',
      desc: 'We treat your 200–500 guests as royalty from the moment their flight lands until their luggage is safely loaded for the flight home.',
      deliverables: [
        '24/7 airport arrival desks with personalized signboards',
        'Luxury air-conditioned coach & private fleet coordination',
        'Custom luggage tagging, porterage, and in-room welcome hampers',
        'Dedicated guest WhatsApp helpline for room queries and assistance'
      ]
    },
    {
      title: 'Artist Booking & Celebration Curation',
      icon: '🎙',
      desc: 'Unforgettable entertainment curated specifically to bridge generations — from morning shehnai masters to midnight Bollywood headliners.',
      deliverables: [
        'Direct booking of celebrity singers, DJs, Sufi vocalists & anchors',
        'Technical sound rider compliance & L-Acoustics sound rigs',
        'Sangeet dance choreography management & rehearsal spaces',
        'F&B bar consultation, mixology squads & late-night street carts'
      ]
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-3">
            Scope of Management
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight mb-4">
            Everything Under One Accountable Roof
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            We do not hand you a list of external numbers. We design, produce, and manage the entire celebration ourselves.
          </p>
        </div>

        {/* 4 In-Depth Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#14110E] border border-stone-800 space-y-4 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl text-[#C19A4B]">{s.icon}</span>
                  <h3 className="font-serif text-2xl text-white font-semibold">{s.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="space-y-2 border-t border-stone-800/80 pt-4">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-[#C19A4B] block">
                    What is delivered:
                  </span>
                  {s.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-300 font-sans">
                      <span className="text-[#C19A4B] mt-0.5">✔</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800/80">
                <button
                  onClick={onCheckDate}
                  className="text-xs font-serif text-[#C19A4B] hover:text-white transition flex items-center gap-1.5"
                >
                  Request scope consultation for your date →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Collections Strip */}
        <div className="p-8 rounded-2xl bg-[#171410] border border-[#C19A4B]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-white">Full Planning Collections from ₹2,50,000</h4>
            <p className="text-xs text-stone-400 font-sans mt-1">
              Transparent, published tier matrix with zero hidden commissions. View collection breakdowns.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab('pricing-planning')}
              className="px-5 py-2.5 rounded bg-[#C19A4B] text-[#171410] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition"
            >
              View Pricing Tiers →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   4. DESTINATIONS GUIDE PAGE
   ========================================================================= */
export const GlobalDestinationsPage: React.FC<PageProps> = ({ onCheckDate }) => {
  const destinations = [
    {
      name: 'Goa (North & South)',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      tagline: 'Coastal Sophistication & Oceanfront Vows',
      recommendedVenues: ['ITC Grand Goa', 'W Goa (Vagator Cliffs)', 'Alila Diwa Goa', 'Taj Exotica Benaulim'],
      idealMonths: 'October – April',
      guestVibe: 'Sundowner Haldi, barefoot beach pheras, open-air sangeet under starlit palm canopies.'
    },
    {
      name: 'Udaipur (The City of Lakes)',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      tagline: 'Mewar Heritage, Floating Mandaps & Royal Splendor',
      recommendedVenues: ['The Oberoi Udaivilas', 'The Leela Palace Udaipur', 'Taj Lake Palace', 'Fateh Garh Palace'],
      idealMonths: 'September – March',
      guestVibe: 'Private boat arrivals over Lake Pichola, royal Shehnai welcomes, floating lotus mandap architecture.'
    },
    {
      name: 'Jaipur (The Pink City)',
      image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80',
      tagline: 'Fortress Glamour, Grand Ballrooms & Historic Jharokhas',
      recommendedVenues: ['Fairmont Jaipur', 'The Leela Palace Jaipur', 'Rambagh Palace', 'Jai Mahal Palace'],
      idealMonths: 'October – March',
      guestVibe: 'Regal elephant processions, royal Rajasthani royal dining, beaten brass lanterns and courtyard sangeet.'
    },
    {
      name: 'Dubai & Emirates',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      tagline: 'Modern Opulence, Desert Dunes & Skyline Backdrops',
      recommendedVenues: ['Atlantis The Palm', 'Bab Al Shams Desert Resort', 'Ritz-Carlton JBR', 'One&Only Royal Mirage'],
      idealMonths: 'November – March',
      guestVibe: 'Black-tie luxury, duneside twilight cocktail lounges, international artist stages and effortless travel.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-3">
            Curated Terrains
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight mb-4">
            Where Celebrations Take Shape
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            With 220+ destination celebrations carried, our logistics footprint ensures smooth guest transfers, local council permits, and vendor harmony in every city.
          </p>
        </div>

        <div className="space-y-12">
          {destinations.map((d, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#14110E] border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl"
            >
              <div className="lg:col-span-5 h-72 lg:h-80 rounded-2xl overflow-hidden relative">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-serif text-xl font-bold text-white">
                  {d.name}
                </span>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-serif uppercase tracking-widest text-[#C19A4B]">
                  {d.tagline}
                </p>
                <h3 className="font-serif text-3xl text-white font-light">{d.name}</h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {d.guestVibe}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800 text-xs font-sans">
                  <div>
                    <span className="text-stone-400 block mb-1 font-medium">Recommended Venues:</span>
                    <ul className="space-y-1 text-white">
                      {d.recommendedVenues.map((v, i) => (
                        <li key={i}>• {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-stone-400 block mb-1 font-medium">Optimal Months:</span>
                    <span className="text-[#C19A4B] font-semibold">{d.idealMonths}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onCheckDate}
                    className="px-6 py-2.5 rounded bg-stone-900 hover:bg-stone-800 text-[#C19A4B] border border-[#C19A4B]/40 text-xs uppercase font-sans tracking-wider transition"
                  >
                    Check Date Availability in {d.name} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   5. JOURNAL & ARTICLES PAGE
   ========================================================================= */
export const GlobalJournalPage: React.FC<PageProps> = ({ onCheckDate }) => {
  const articles = [
    {
      title: 'The Real Math: Destination Wedding in Goa vs Udaipur',
      date: 'Published for 2026–27 Couples',
      tag: 'Budgeting & Cost Matrix',
      readTime: '6 min read',
      excerpt: 'A line-by-line comparison of hotel room buyouts, coastal logistics, palace royalty fees, and F&B taxes between Goa and Udaipur.'
    },
    {
      title: 'Why We Strict-Cap at Sixty Celebrations a Year',
      date: 'From Our Directors',
      tag: 'Philosophy & Craft',
      readTime: '4 min read',
      excerpt: 'What happens when a wedding company decides to say no to growth for the sake of true presence and craft.'
    },
    {
      title: 'Hindu Wedding Muhurat Calendar 2026–2027: The Complete Guide',
      date: 'Astrology & Planning',
      tag: 'Auspicious Windows',
      readTime: '5 min read',
      excerpt: 'Auspicious wedding dates breakdown across Winter 2026 and Spring 2027, along with hotel booking windows.'
    },
    {
      title: 'The 10 Questions to Ask Any Wedding Planner Before Signing',
      date: 'Vendor Accountability',
      tag: 'Checklist & Advice',
      readTime: '7 min read',
      excerpt: 'The critical questions on vendor markups, sick leave protocol, and guest handling that safeguard your family peace.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B]">
            Editorial Journal
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight">
            Perspectives on Modern Luxury
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Essays, budget breakdowns, and practical knowledge from our ten years carrying weddings across India and the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#14110E] border border-stone-800 hover:border-[#C19A4B]/50 transition flex flex-col justify-between space-y-4 shadow-lg group cursor-pointer"
              onClick={onCheckDate}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-sans text-stone-500 mb-2">
                  <span className="text-[#C19A4B] uppercase tracking-wider font-semibold">{art.tag}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl text-white group-hover:text-[#E5D7B7] transition leading-snug mb-3">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-sans">
                <span>{art.date}</span>
                <span className="text-[#C19A4B] group-hover:translate-x-1 transition-transform">Read Article →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Guide Download Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#171410] border border-[#C19A4B]/40 text-center space-y-4">
          <h3 className="font-serif text-2xl text-white">Receive Our Complete 2026–27 Destination Planning Guide</h3>
          <p className="text-xs text-stone-400 font-sans max-w-md mx-auto">
            A 48-page PDF detailing venue room counts, negotiated averages, and floral budgets for Goa, Udaipur, and Jaipur.
          </p>
          <div className="pt-2">
            <button
              onClick={onCheckDate}
              className="px-6 py-3 rounded bg-[#C19A4B] text-[#171410] font-serif font-bold text-xs uppercase tracking-wider hover:brightness-110 transition"
            >
              Request Free Guide via WhatsApp →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   6. CONTACT & DATE AVAILABILITY CONCIERGE PAGE
   ========================================================================= */
export const GlobalContactPage: React.FC<PageProps> = ({ onCheckDate }) => {
  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B]">
            Reach Our Directorate
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight">
            Start a Conversation
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We reply within 30 minutes with real date availability and transparent initial estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Direct Details Box */}
          <div className="p-8 rounded-3xl bg-[#14110E] border border-stone-800 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#C19A4B]/60 flex items-center justify-center bg-gradient-to-br from-[#2D241A] to-[#171410] text-[#E5D7B7] font-serif font-bold text-sm tracking-wider">
                GP
              </div>
              <div>
                <h3 className="font-serif text-xl text-white font-semibold">{globalPlannerssConfig.SITE_NAME}</h3>
                <span className="text-[10px] uppercase font-sans text-[#C19A4B] tracking-widest">
                  Atelier &amp; Headquarters
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-stone-300">
              <div className="flex items-start gap-3">
                <span className="text-[#C19A4B] text-base">📍</span>
                <div>
                  <strong className="text-white block font-medium">Studio Address:</strong>
                  <span>{globalPlannerssConfig.ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#C19A4B] text-base">📞</span>
                <div>
                  <strong className="text-white block font-medium">Direct Telephone:</strong>
                  <a href={`tel:${globalPlannerssConfig.PHONE.replace(/\s+/g, '')}`} className="text-[#E5D7B7] hover:underline">
                    {globalPlannerssConfig.PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#C19A4B] text-base">💬</span>
                <div>
                  <strong className="text-white block font-medium">WhatsApp Direct:</strong>
                  <a
                    href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hi%20Global%20Plannerss,%20we%20would%20love%20to%20discuss%20our%20wedding.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    {globalPlannerssConfig.WHATSAPP_DISPLAY} (Instant)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#C19A4B] text-base">✉</span>
                <div>
                  <strong className="text-white block font-medium">Director Concierge Email:</strong>
                  <a href={`mailto:${globalPlannerssConfig.EMAIL}`} className="text-stone-300 hover:underline">
                    {globalPlannerssConfig.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400 font-sans">
              <span className="text-white font-semibold block mb-1">Operating Hours:</span>
              <span>{globalPlannerssConfig.SEASON_YEARS} Booking Window Open · 24/7 On-Ground Emergency Concierge for ongoing celebrations.</span>
            </div>
          </div>

          {/* Quick Consultation Request Button Box */}
          <div className="p-8 rounded-3xl bg-[#171410] border border-[#C19A4B]/40 space-y-6 text-center shadow-xl">
            <span className="text-3xl">🗓</span>
            <h3 className="font-serif text-2xl text-white font-semibold">
              Ready to Lock In Your Date?
            </h3>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              With only {globalPlannerssConfig.REMAINING_DATES_COUNT} open dates remaining for this season, secure your wedding consultation today.
            </p>

            <button
              onClick={onCheckDate}
              className="w-full py-4 rounded bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] font-serif font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition"
            >
              Open Date Checking Form →
            </button>

            <a
              href={`https://wa.me/${globalPlannerssConfig.WHATSAPP}?text=Hello%20Global%20Plannerss,%20we%20are%20planning%20our%20wedding%20and%20want%20to%20check%20availability.`}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40 text-xs font-sans font-semibold text-center hover:bg-emerald-900/60 transition"
            >
              Chat on WhatsApp Directly →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


/* =========================================================================
   7. PRICING: FULL PLANNING & COORDINATION
   ========================================================================= */
export const GlobalPricingPlanningPage: React.FC<PageProps> = ({ onCheckDate, setActiveTab }) => {
  const tiers = [
    {
      name: 'Essential Collection',
      price: '₹2,50,000',
      tagline: 'Single Accountable Directorate for Intimate Celebrations',
      desc: 'Designed for couples with up to 150 guests wanting complete peace of mind, budget auditing, and on-ground management.',
      features: [
        'Dedicated Senior Wedding Director',
        '6-Member on-ground execution crew',
        'Hotel master folio negotiations & vendor audits',
        'Minute-by-minute family run sheets',
        '24/7 guest WhatsApp concierge line',
        'Zero vendor markups (all bills passed at cost)'
      ]
    },
    {
      name: 'Grand Destination Collection',
      price: '₹4,75,000',
      popular: true,
      tagline: 'Our Most Chosen Multi-Day Experience',
      desc: 'Comprehensive end-to-end planning and decor supervision for 200–350 guests across 3 days in Goa, Udaipur, or Jaipur.',
      features: [
        'Two Senior Directors + 14-member operations squad',
        'In-house 3D CAD decor renders for all functions',
        'Airport hospitality desks with fleet management',
        'Luggage tagging & in-room hamper logistics',
        'Excise, licensing & police permissions handled',
        'Artist rider compliance & sound engineering',
        'Dedicated bride & groom personal shadows'
      ]
    },
    {
      name: 'Royal Bespoke Atelier',
      price: '₹8,50,000+',
      tagline: 'Ultra-Luxury Custom Architecture & Concierge',
      desc: 'For monumental palace buyouts, international destinations, and celebrations exceeding 400 guests.',
      features: [
        'Full directorial team (24-member dedicated deployment)',
        'Bespoke custom-engineered mandap architecture',
        'Chartered aircraft & train coordination',
        'International artist management & security protocols',
        'Post-wedding wrap-up, billing closure & photo delivery concierge'
      ]
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#0D0B0A] text-stone-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-3">
            Radical Transparency
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight mb-4">
            Published Planning Collections
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            No guessing games. We state our management fees upfront so you can make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#14110E] border flex flex-col justify-between shadow-2xl relative ${
                t.popular ? 'border-[#C19A4B] ring-1 ring-[#C19A4B]/50' : 'border-stone-800'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C19A4B] text-[#171410] font-sans font-bold text-[10px] uppercase tracking-wider">
                  Most Selected
                </div>
              )}

              <div>
                <span className="text-[10px] font-serif uppercase tracking-widest text-[#C19A4B] block mb-1">
                  Collection Tier
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold">{t.name}</h3>
                <div className="my-4">
                  <span className="font-serif text-3xl sm:text-4xl text-white font-bold">{t.price}</span>
                  <span className="text-xs text-stone-500 font-sans ml-2">+ GST</span>
                </div>
                <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
                  {t.desc}
                </p>

                <div className="space-y-2.5 border-t border-stone-800 pt-6">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-stone-400 block mb-1">
                    Deliverables:
                  </span>
                  {t.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-300 font-sans">
                      <span className="text-[#C19A4B] mt-0.5">✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onCheckDate}
                  className={`w-full py-3 rounded font-serif font-bold text-xs uppercase tracking-widest transition ${
                    t.popular
                      ? 'bg-gradient-to-r from-[#B08D57] via-[#C19A4B] to-[#9C7B4E] text-[#171410] shadow-lg hover:brightness-110'
                      : 'bg-stone-900 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  Reserve For Your Date →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calculator Redirect */}
        <div className="text-center pt-8 border-t border-stone-800">
          <p className="text-xs text-stone-400 font-sans mb-3">
            Want to see how your entire wedding budget divides across venue, food, decor, and clothes?
          </p>
          <button
            onClick={() => setActiveTab('calculator')}
            className="text-xs font-serif text-[#C19A4B] underline underline-offset-4 hover:text-[#E5D7B7] transition"
          >
            Open Interactive Budget Calculator →
          </button>
        </div>
      </div>
    </div>
  );
};
