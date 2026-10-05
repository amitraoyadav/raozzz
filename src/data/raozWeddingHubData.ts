import { BusinessWebsite } from '../types';
import { raozWeddingHubConfig } from '../config/raozWeddingHubConfig';

export interface ScheduleEvent {
  id: string;
  dayNumber: number;
  dayLabel: string;
  date: string;
  time: string;
  title: string;
  location: string;
  dressCode: string;
  description: string;
  transportProvided: boolean;
  notes: string;
}

export interface GuestItem {
  id: string;
  name: string;
  partySize: number;
  group: 'Family' | 'Bridal Party' | 'University Friends' | 'Colleagues' | 'International';
  rsvpStatus: 'Attending' | 'Declined' | 'Awaiting';
  dietary: string;
  roomAssigned: string;
  flightArrival: string;
  transportRequired: boolean;
  songRequest?: string;
  tableNumber?: number;
}

export interface BudgetItem {
  id: string;
  category: 'Venue & Accommodation' | 'Catering & Beverages' | 'Decor & Florals' | 'Photo & Video' | 'Music & Sound' | 'Guest Transport' | 'Stationery & Favours';
  name: string;
  currency: string;
  estimatedCost: number;
  actualCost: number;
  paidAmount: number;
  status: 'Paid' | 'Deposit Paid' | 'Pending';
  dueDays: string;
}

export interface DestinationGuide {
  id: string;
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  bestMonths: string;
  avgFlightTime: string;
  avgWeddingBudget: string;
  legalRequirements: string;
  atmosphere: string;
  curatedVenues: {
    name: string;
    style: string;
    capacity: string;
    approxPrice: string;
    highlight: string;
  }[];
  insiderTips: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Couples' | 'Guests' | 'Planners' | 'Pricing';
  question: string;
  answer: string;
}

export interface PlannerPhase {
  phaseNumber: number;
  phaseName: string;
  timeframe: string;
  tasksCount: number;
  keyMilestones: string[];
  deliverables: string[];
}

// 4-Day Sample Destination Wedding Itinerary
export const SAMPLE_SCHEDULE: ScheduleEvent[] = [
  {
    id: 'ev-1',
    dayNumber: 1,
    dayLabel: 'Day 1 · Welcome',
    date: 'Thursday, 18 June 2026',
    time: '6:00 PM – 10:00 PM',
    title: 'Sunset Welcome Aperitivo & Woodfired Pizza',
    location: 'The Olive Grove Terrace, Villa Rosa',
    dressCode: 'Resort Casual / Linen & Summer Whites',
    description: 'A relaxed gathering to welcome everyone after long journeys. Gelato cart, spritzes, acoustic duo, and wood-fired Neapolitan pizza under the olive trees.',
    transportProvided: true,
    notes: 'Shuttles depart town square hotel lobbies at 5:15 PM and 5:45 PM.'
  },
  {
    id: 'ev-2',
    dayNumber: 2,
    dayLabel: 'Day 2 · The Celebration Eve',
    date: 'Friday, 19 June 2026',
    time: '11:00 AM – 3:30 PM',
    title: 'Private Catamaran Coastal Cruise',
    location: 'Marina Piccolo Pier 3',
    dressCode: 'Swimwear, wraps & sun hats',
    description: 'An optional coastal cruise exploring hidden sea grottoes with swimming stops, chilled Prosecco, and a relaxed Mediterranean lunch on board.',
    transportProvided: true,
    notes: 'Towels provided onboard. Sunscreen provided.'
  },
  {
    id: 'ev-3',
    dayNumber: 2,
    dayLabel: 'Day 2 · The Celebration Eve',
    date: 'Friday, 19 June 2026',
    time: '7:30 PM – 11:30 PM',
    title: 'Rehearsal Dinner & Candlelit Speeches',
    location: 'La Limonaia Pergola',
    dressCode: 'Garden Cocktail',
    description: 'Intimate sit-down feast under fragrant lemon trellises. Family toasts, storytelling, acoustic strings, and regional wine pairings.',
    transportProvided: true,
    notes: 'Family speakers please connect with planner by 7:15 PM.'
  },
  {
    id: 'ev-4',
    dayNumber: 3,
    dayLabel: 'Day 3 · The Wedding Day',
    date: 'Saturday, 20 June 2026',
    time: '4:30 PM – 5:30 PM',
    title: 'The Ceremony · Vows with Cliffside Vista',
    location: 'Belvedere Gardens, Castello di Sole',
    dressCode: 'Formal Summer Elegance / Black Tie Optional',
    description: 'Unplugged vow ceremony framed by ancient stone arches and endless turquoise waters. String quartet accompaniment.',
    transportProvided: true,
    notes: 'Please arrive by 4:00 PM for welcome iced peach tea and seating.'
  },
  {
    id: 'ev-5',
    dayNumber: 3,
    dayLabel: 'Day 3 · The Wedding Day',
    date: 'Saturday, 20 June 2026',
    time: '5:30 PM – 7:30 PM',
    title: 'Cocktail Hour & Passed Antipasti',
    location: 'The Fountain Courtyard',
    dressCode: 'Formal Summer Elegance',
    description: 'Artisanal cheese wheels, fresh oysters, bespoke signature cocktails, and roving saxophone rhythms as golden hour lights the sea.',
    transportProvided: false,
    notes: 'Steps lead from garden to courtyard.'
  },
  {
    id: 'ev-6',
    dayNumber: 3,
    dayLabel: 'Day 3 · The Wedding Day',
    date: 'Saturday, 20 June 2026',
    time: '7:30 PM – 2:30 AM',
    title: 'Dinner Banquet, Millefoglie & The Dancing Vaults',
    location: 'Grand Loggia & The Ancient Cellars',
    dressCode: 'Formal Summer Elegance',
    description: 'Long imperial tables laden with seasonal florals. Traditional live wedding cake assembly, followed by midnight fireworks and a 7-piece brass band in the illuminated stone vaults.',
    transportProvided: true,
    notes: 'Return shuttles operate continuously every 30 minutes between 11:30 PM and 2:45 AM.'
  },
  {
    id: 'ev-7',
    dayNumber: 4,
    dayLabel: 'Day 4 · Farewell',
    date: 'Sunday, 21 June 2026',
    time: '10:30 AM – 2:00 PM',
    title: 'Recovery Brunch & Farewell Coffee Bar',
    location: 'Poolside Lawn & Pergola',
    dressCode: 'Comfy travel attire / Sunglasses optional',
    description: 'Pastries, shakshuka, fresh juices, bloody marys, and artisanal espresso bar before departures.',
    transportProvided: true,
    notes: 'Direct luggage concierge to airport shuttles available at venue.'
  }
];

// Sample Guest List for Interactive Demo
export const SAMPLE_GUESTS: GuestItem[] = [
  { id: 'g-1', name: 'Eleanor & Marcus Vance', partySize: 2, group: 'Family', rsvpStatus: 'Attending', dietary: 'Vegetarian (Marcus)', roomAssigned: 'Villa Suite 101', flightArrival: 'FCO 17 June 14:20', transportRequired: true, songRequest: 'L-O-V-E - Nat King Cole', tableNumber: 1 },
  { id: 'g-2', name: 'Dr. Rohan & Priya Sharma', partySize: 2, group: 'Family', rsvpStatus: 'Attending', dietary: 'Gluten-Free (Priya)', roomAssigned: 'Villa Suite 102', flightArrival: 'FCO 17 June 16:45', transportRequired: true, songRequest: 'Chaiyya Chaiyya - A.R. Rahman', tableNumber: 1 },
  { id: 'g-3', name: 'Chloe Montgomery', partySize: 1, group: 'Bridal Party', rsvpStatus: 'Attending', dietary: 'Nut allergy (Severe)', roomAssigned: 'Tower Bedroom 3', flightArrival: 'NAP 16 June 11:00', transportRequired: false, songRequest: 'Gimme! Gimme! Gimme! - ABBA', tableNumber: 2 },
  { id: 'g-4', name: 'Julian Hayes', partySize: 1, group: 'Bridal Party', rsvpStatus: 'Attending', dietary: 'None', roomAssigned: 'Tower Bedroom 4', flightArrival: 'NAP 16 June 11:00', transportRequired: false, songRequest: 'September - Earth, Wind & Fire', tableNumber: 2 },
  { id: 'g-5', name: 'Liam & Sophia Chen', partySize: 2, group: 'University Friends', rsvpStatus: 'Attending', dietary: 'Pescatarian', roomAssigned: 'Hotel Bellevue Room 204', flightArrival: 'NAP 17 June 18:30', transportRequired: true, songRequest: 'You Make My Dreams - Hall & Oates', tableNumber: 3 },
  { id: 'g-6', name: 'Alexander Wright', partySize: 1, group: 'Colleagues', rsvpStatus: 'Awaiting', dietary: 'Awaiting response', roomAssigned: 'Unassigned', flightArrival: 'Not provided', transportRequired: false, songRequest: '', tableNumber: 4 },
  { id: 'g-7', name: 'Mathieu & Camille Laurent', partySize: 2, group: 'International', rsvpStatus: 'Attending', dietary: 'None', roomAssigned: 'Hotel Bellevue Room 206', flightArrival: 'FCO 17 June 13:15', transportRequired: true, songRequest: 'La Vie en Rose', tableNumber: 3 },
  { id: 'g-8', name: 'Tara & Oliver Brooks', partySize: 2, group: 'University Friends', rsvpStatus: 'Attending', dietary: 'Dairy-Free (Tara)', roomAssigned: 'Hotel Bellevue Room 208', flightArrival: 'NAP 18 June 09:40', transportRequired: true, songRequest: 'Dancing in the Moonlight', tableNumber: 3 },
  { id: 'g-9', name: 'David & Hannah King', partySize: 2, group: 'Colleagues', rsvpStatus: 'Declined', dietary: 'N/A', roomAssigned: 'N/A', flightArrival: 'N/A', transportRequired: false, songRequest: '', tableNumber: 0 }
];

// Sample Budget Planner
export const SAMPLE_BUDGET: BudgetItem[] = [
  { id: 'b-1', category: 'Venue & Accommodation', name: 'Exclusive Villa 4-Night Buyout', currency: 'EUR', estimatedCost: 32000, actualCost: 31500, paidAmount: 18000, status: 'Deposit Paid', dueDays: 'Due 30 days prior' },
  { id: 'b-2', category: 'Catering & Beverages', name: 'Welcome Dinner, Wedding Banquet & Recovery Brunch', currency: 'EUR', estimatedCost: 26000, actualCost: 24800, paidAmount: 10000, status: 'Deposit Paid', dueDays: 'Due 14 days prior' },
  { id: 'b-3', category: 'Decor & Florals', name: 'Artisan Florals, Imperial Tables & Lighting Canopies', currency: 'EUR', estimatedCost: 15000, actualCost: 14200, paidAmount: 7000, status: 'Deposit Paid', dueDays: 'Due 21 days prior' },
  { id: 'b-4', category: 'Photo & Video', name: '3-Day Documentary Coverage & Drone Cinematography', currency: 'EUR', estimatedCost: 8500, actualCost: 8500, paidAmount: 8500, status: 'Paid', dueDays: 'Fully Settled' },
  { id: 'b-5', category: 'Music & Sound', name: 'Ceremony Strings, Cocktail Sax, Live 7-Piece Band & DJ', currency: 'EUR', estimatedCost: 7200, actualCost: 7000, paidAmount: 3500, status: 'Deposit Paid', dueDays: 'Due on performance day' },
  { id: 'b-6', category: 'Guest Transport', name: 'Private Mercedes Sprinters (Airport & Multi-Day Transfers)', currency: 'EUR', estimatedCost: 4800, actualCost: 4400, paidAmount: 2200, status: 'Deposit Paid', dueDays: 'Due 7 days prior' },
  { id: 'b-7', category: 'Stationery & Favours', name: 'Handmade Deckled Edge Paper, Calligraphy & Olive Oil Favours', currency: 'EUR', estimatedCost: 2400, actualCost: 2200, paidAmount: 2200, status: 'Paid', dueDays: 'Fully Settled' }
];

// 10 Planning Phases with ~280 Tasks Overview
export const PLANNER_PHASES: PlannerPhase[] = [
  {
    phaseNumber: 1,
    phaseName: 'Foundation & Calm Intent',
    timeframe: '12–14 Months Prior',
    tasksCount: 24,
    keyMilestones: ['Define the 3–5 day chapter scope', 'Multi-currency budget architecture', 'Curated destination shortlist', 'Guest count and attendance probability model'],
    deliverables: ['Destination Wedding Blueprint', 'Currency Risk Buffer Calculation', 'Guest Tiering Sheet']
  },
  {
    phaseNumber: 2,
    phaseName: 'Destination & Venue Curation',
    timeframe: '10–12 Months Prior',
    tasksCount: 32,
    keyMilestones: ['Site inspection itineraries', 'Private buyout vs hotel block contracts', 'Curfew, sound limiter & local permit audit', 'Backup weather plan validation'],
    deliverables: ['Venue Comparison Matrix', 'Contract Rider Checklist', 'Rain Contingency Mapping']
  },
  {
    phaseNumber: 3,
    phaseName: 'Guest Experience & Travel Framework',
    timeframe: '9–10 Months Prior',
    tasksCount: 28,
    keyMilestones: ['Launch multi-language Guest Hub link', 'Save-the-date dispatch with airport guidance', 'Room block reservations and subsidization strategy', 'Visa and passport advisory notice'],
    deliverables: ['Live Guest Hub', 'Travel Route & Airport Cheat-Sheet', 'Accommodation Concierge Portal']
  },
  {
    phaseNumber: 4,
    phaseName: 'Creative Direction & In-Depth Design',
    timeframe: '7–9 Months Prior',
    tasksCount: 35,
    keyMilestones: ['Visual moodboard and spatial elevation sketches', 'Local floral seasonal availability audit', 'Lighting plan & evening luminance testing', 'Linens, tablescapes & bespoke hire selection'],
    deliverables: ['Design Deck & Spatial CAD', 'Lighting & Power Distribution Plan', 'Sample Tablescape Confirmation']
  },
  {
    phaseNumber: 5,
    phaseName: 'Vendor Collective Assembly',
    timeframe: '6–8 Months Prior',
    tasksCount: 30,
    keyMilestones: ['English-proficient local team vetting', 'Catering tasting and multi-course wine pairing', 'Documentary photography and video contracts', 'Entertainment lineup & artist rider reviews'],
    deliverables: ['Executed Vendor Contracts', 'Tasting Notes & Menu Approval', 'Production Crew Briefings']
  },
  {
    phaseNumber: 6,
    phaseName: 'Legal, Bureaucracy & Ceremony',
    timeframe: '5–6 Months Prior',
    tasksCount: 26,
    keyMilestones: ['Atto Notorio & Nulla Osta / legal filings', 'Sworn translator & celebrant engagement', 'Ceremony ritual sequencing & personalized vow prep', 'Music cues and procession timing'],
    deliverables: ['Legal Embassy File Approval', 'Ceremony Script Draft', 'Order of Service Program']
  },
  {
    phaseNumber: 7,
    phaseName: 'Guest Logistics & Dietary Precision',
    timeframe: '3–4 Months Prior',
    tasksCount: 34,
    keyMilestones: ['RSVP lock date & dietary allergy master cross-check', 'Flight tracking and group shuttle scheduling', 'Seating chart assignments and table layouts', 'Welcome gift bag curation and local artisan sourcing'],
    deliverables: ['Dietary Matrix for Kitchen', 'Shuttle Manifest & Driver Run Sheet', 'Final Seating Plan']
  },
  {
    phaseNumber: 8,
    phaseName: 'Production & Master Run Sheet',
    timeframe: '1–2 Months Prior',
    tasksCount: 38,
    keyMilestones: ['Minute-by-minute 4-day master timeline', 'Vendor load-in / load-out schedule', 'Contingency emergency playbook', 'On-ground production team role allocations'],
    deliverables: ['Master Production Run Sheet', 'Load-In Protocol & Access Badges', 'Family VIP Timeline Cards']
  },
  {
    phaseNumber: 9,
    phaseName: 'On-Ground Chapter Execution',
    timeframe: 'Wedding Week',
    tasksCount: 22,
    keyMilestones: ['Airport concierge welcome points', 'Rehearsal walk-through and acoustic check', 'Continuous shuttle coordination', 'Real-time vendor management and sound monitoring'],
    deliverables: ['Live Day-of Coordinator Monitoring', 'Guest Assistance Hotline', 'Vendor Payment Handover']
  },
  {
    phaseNumber: 10,
    phaseName: 'Wrap, Memories & Archival',
    timeframe: 'Post-Wedding',
    tasksCount: 15,
    keyMilestones: ['Vendor security deposit reconciliation', 'Guest Hub memories photo drop collection', 'Thank you note dispatch and vendor reviews', 'High-res film and photo archive delivery'],
    deliverables: ['Final Financial Reconciliation', 'Digital Guest Memory Book', 'Vendor Audit Archive']
  }
];

// Rich Destination Guides
export const DESTINATION_GUIDES: DestinationGuide[] = [
  {
    id: 'guide-bali',
    slug: 'bali-indonesia',
    name: 'Bali, Indonesia',
    region: 'Uluwatu, Ubud & Canggu',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    bestMonths: 'May to October (Dry season, offshore breezes)',
    avgFlightTime: '6 hrs from Sydney, 16 hrs from London',
    avgWeddingBudget: '$35,000 – $75,000 AUD (80 Guests)',
    atmosphere: 'Cliffside ocean amphitheaters, jungle infinity pools, sacred bamboo architecture, and spiritual warmth.',
    legalRequirements: 'Religious & civil ceremonies require joint certificate of no impediment + religious declaration. Most couples choose a celebrant ceremony in Bali after a quick legal signing at home.',
    curatedVenues: [
      { name: 'Tirtha Bridal Uluwatu', style: 'Suspended Glass Pavilion over Indian Ocean', capacity: '120 Guests', approxPrice: '$18,000 AUD', highlight: 'Dramatic 100m cliff drop views and private botanical grounds' },
      { name: 'Alila Villas Uluwatu', style: 'Eco-Luxury Minimalist Overhanging Cabana', capacity: '200 Guests', approxPrice: '$32,000 AUD', highlight: 'Iconic cantilevered sunset pavilion and private pool villas' },
      { name: 'The Royal Pita Maha Ubud', style: 'Lush Ayung River Valley Temple Architecture', capacity: '90 Guests', approxPrice: '$14,000 AUD', highlight: 'Ancient stone carvings, emerald river canyons and jungle tranquility' }
    ],
    insiderTips: [
      'Book group villas in clusters rather than a single resort to balance togetherness and privacy.',
      'Organize dedicated private drivers on WhatsApp for every 4 guests rather than large tour buses on narrow roads.',
      'Schedule ceremonies starting at 4:45 PM for golden hour lighting before the 6:15 PM tropical sunset.'
    ]
  },
  {
    id: 'guide-tuscany',
    slug: 'tuscany-italy',
    name: 'Tuscany, Italy',
    region: 'Val d’Orcia, Chianti & Florence Hills',
    heroImage: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=80',
    bestMonths: 'May, June, September & early October',
    avgFlightTime: '2 hrs from London, 22 hrs from Sydney',
    avgWeddingBudget: '€40,000 – €90,000 EUR (70 Guests)',
    atmosphere: 'Cypress-lined private estates, stone borghi, endless vineyard rows, and multi-course candlelit feasts.',
    legalRequirements: 'Legally binding civil marriages require Atto Notorio (issued at an Italian consulate in your home country) and Nulla Osta. Processing takes 2–4 months.',
    curatedVenues: [
      { name: 'Borgo Santo Pietro', style: '13th-Century Relais & Châteaux Hamlet', capacity: '80 Guests', approxPrice: '€45,000 EUR', highlight: '300-acre organic estate, Michelin-starred kitchen, and private rose gardens' },
      { name: 'Villa di Geggiano (Chianti)', style: 'Historic Neo-Classical Villa & Cypress Alley', capacity: '130 Guests', approxPrice: '€22,000 EUR', highlight: 'Authentic 18th-century frescoes, antique winery courtyard and manicured lawns' },
      { name: 'Castello di Celsa', style: 'Medieval Fairy-Tale Castle & Italian Gardens', capacity: '150 Guests', approxPrice: '€28,000 EUR', highlight: 'Striking crenellated towers with views sweeping to Siena' }
    ],
    insiderTips: [
      'Private villa buyouts require minimum 3–4 night commitments; turn it into an authentic summer holiday for key family.',
      'Italian weddings hinge on food: prioritize an abundant 2-hour passed aperitivo before the seated primi/secondi.',
      'Always have a verified indoor weather backup (loggia or orangerie) that does not ruin your design concept.'
    ]
  },
  {
    id: 'guide-amalfi',
    slug: 'amalfi-coast-italy',
    name: 'Amalfi Coast, Italy',
    region: 'Ravello, Positano & Capri',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    bestMonths: 'May, June & September (Avoid peak August heat & crowds)',
    avgFlightTime: 'Fly to Naples (NAP) + 75 min coastal drive',
    avgWeddingBudget: '€55,000 – €120,000 EUR (60 Guests)',
    atmosphere: 'Dramatic limestone crags, cobalt Tyrrhenian waters, lemon pergolas, and timeless mid-century glamour.',
    legalRequirements: 'Ravello and Positano town halls offer open-air civil ceremonies. Many international couples opt for romantic symbolic vows overlooking the sea.',
    curatedVenues: [
      { name: 'Villa Cimbrone (Ravello)', style: 'Perched Historic Estate & Terrace of Infinity', capacity: '120 Guests', approxPrice: '€38,000 EUR', highlight: 'World-famous cliffside marble statues looking into the horizon' },
      { name: 'Belmond Hotel Caruso (Ravello)', style: '11th-Century Palace & Sky-High Infinity Pool', capacity: '90 Guests', approxPrice: '€48,000 EUR', highlight: 'Unrivalled luxury service and dining among lemon orchards' },
      { name: 'Torre Normanna (Maiori)', style: '13th-Century Coastal Watchtower', capacity: '100 Guests', approxPrice: '€18,000 EUR', highlight: 'Sea spray kissing the terrace and private sea access' }
    ],
    insiderTips: [
      'Transport logistics are crucial: hire private speedboats between Positano, Amalfi, and Capri for memorable transfers.',
      'Warn guests about cobblestone steps and steep inclines; flat comfortable shoes for walkways are non-negotiable.',
      'Ravello sits 365m above sea level and is noticeably cooler with calmer traffic than coastal Positano.'
    ]
  },
  {
    id: 'guide-santorini',
    slug: 'santorini-greece',
    name: 'Santorini, Greece',
    region: 'Imerovigli, Oia & Pyrgos',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    bestMonths: 'Late April to June, September to October',
    avgFlightTime: 'Fly to Athens + 45 min flight or 3 hr Seajet ferry',
    avgWeddingBudget: '€30,000 – €70,000 EUR (50 Guests)',
    atmosphere: 'Whitewashed caldera cliffs, deep blue volcanic vistas, ethereal sunsets, and cycladic minimalism.',
    legalRequirements: 'Civil weddings in Santorini are recognized worldwide. Documents need Hague Apostille stamp and official translation by Greek Ministry of Foreign Affairs.',
    curatedVenues: [
      { name: 'Cavo Ventus Villa', style: 'Private Historic Windmill & Caldera Balcony', capacity: '60 Guests', approxPrice: '€14,000 EUR', highlight: 'Absolute privacy on the edge of the Akrotiri caldera cliff' },
      { name: 'Canaves Oia Epitome', style: 'Earthy Volcanic Stone & Sleek Sunset Terrace', capacity: '80 Guests', approxPrice: '€26,000 EUR', highlight: 'Front-row sunset views without the heavy tourist thoroughfares' },
      { name: 'Santo Wines Pyrgos', style: 'Panoramic Multi-Level Vineyard Terrace', capacity: '120 Guests', approxPrice: '€12,000 EUR', highlight: 'Breathtaking 180-degree view of the entire island crescent' }
    ],
    insiderTips: [
      'Winds can pick up in the late afternoon; ensure floral installations have robust internal steel weighting.',
      'Charter a catamaran for your Welcome sunset cruise to view the red beach and hot springs together.',
      'Provide sunglasses and parasols for guests if the ceremony starts before 6:00 PM.'
    ]
  },
  {
    id: 'guide-goa',
    slug: 'goa-india',
    name: 'Goa, India',
    region: 'South Goa Heritage & Coastal Shores',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    bestMonths: 'November to March (Pleasant coastal breezes, zero rain)',
    avgFlightTime: '2.5 hrs from Delhi/Mumbai, direct from UK/Middle East',
    avgWeddingBudget: '₹40 Lakhs – ₹1.2 Crore (150–250 Guests)',
    atmosphere: 'Portuguese-era grand estates, swaying coconut palms, white sand beachfront mandaps, and sunset festivities.',
    legalRequirements: 'Registered special marriage act filings or symbolic Vedic/Western celebrations. Turnkey documentation handled smoothly.',
    curatedVenues: [
      { name: 'The Leela Goa (Cavelossim)', style: '75-Acre Sprawling Riverside Lagoon & Beachfront', capacity: '400 Guests', approxPrice: '₹35 Lakhs+', highlight: 'Private Mobor beach access, lotus lagoons and grand ballrooms' },
      { name: 'Alila Diwa Goa (Majorda)', style: 'Contemporary Balinese-Goan Paddy View Sanctuaries', capacity: '250 Guests', approxPrice: '₹22 Lakhs+', highlight: 'Infinity pool overlooking lush green paddy fields and peaceful courtyard' },
      { name: 'Cidade de Goa (Vainguinim Beach)', style: 'Portuguese Historic Village Architecture', capacity: '300 Guests', approxPrice: '₹20 Lakhs+', highlight: 'Charming courtyards, cobblestone lanes and beachfront lawns' }
    ],
    insiderTips: [
      'South Goa is significantly quieter, cleaner, and more luxurious for wedding buyouts than bustling North Goa.',
      'Incorporate local feni cocktails, seafood grills, and Goan brass bands for an unforgettable welcome sundowner.',
      'Sound curfews in Goa are strictly 10:00 PM outdoors; ensure the resort has a soundproof indoor ballroom for the afterparty.'
    ]
  },
  {
    id: 'guide-udaipur',
    slug: 'udaipur-india',
    name: 'Udaipur, India',
    region: 'Lake Pichola & Aravalli Hills',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    bestMonths: 'October to March (Crisp royal winters)',
    avgFlightTime: '1 hr flight from Mumbai/Delhi',
    avgWeddingBudget: '₹60 Lakhs – ₹2.5 Crore (150–300 Guests)',
    atmosphere: 'Royal heritage palaces, shimmering lake boat arrivals, regal marble mandaps, and timeless royal Rajput hospitality.',
    legalRequirements: 'Standard Indian marriage laws or bespoke international symbolic vows with royal Vedic ceremonies.',
    curatedVenues: [
      { name: 'Taj Lake Palace', style: 'Floating 18th-Century White Marble Lake Palace', capacity: '100 Guests', approxPrice: '₹55 Lakhs+', highlight: 'Arrive exclusively by royal barge; an ethereal world wonder' },
      { name: 'The Oberoi Udaivilas', style: 'Palatial Domes, Moats, Peacocks & Lakefront Terraces', capacity: '250 Guests', approxPrice: '₹75 Lakhs+', highlight: 'Gold leaf domes, torchlit courtyards and world-class bespoke service' },
      { name: 'Zenana Mahal, City Palace Complex', style: 'Ancient Royal Courtyard & Museum Palace', capacity: '400 Guests', approxPrice: '₹30 Lakhs+', highlight: 'Hundreds of lit candle niches (diyas) and authentic royal banquet heritage' }
    ],
    insiderTips: [
      'Lake water levels vary with monsoons: always verify current boat arrival clearances with your planner.',
      'Organize a royal torchlit arrival with traditional nagada drummers and rose petal showers for your guests.',
      'November and December are peak season dates; book venue holds at least 10–12 months in advance.'
    ]
  }
];

// Comprehensive FAQs categorized
export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Raoz Wedding Hub?',
    answer: 'Raoz Wedding Hub is a calm, all-in-one destination wedding platform designed specifically for multi-day weddings. Instead of juggling fragmented spreadsheets, generic planning apps built only for a single afternoon, and chaotic WhatsApp groups, Raoz Wedding Hub provides one unified digital home for couples, their wedding planners, and their traveling guests.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How is Raoz Wedding Hub different from generic wedding websites?',
    answer: 'Traditional wedding tools are built for single-day hometown weddings. Raoz Wedding Hub was engineered from the ground up for 3–5 day destination chapters: multi-currency budgeting, guest travel & flight trackers, room block allocations, multi-event itineraries, live multi-language guest hubs (no app required for guests), and dedicated collaboration workflows for wedding planners.'
  },
  {
    id: 'faq-3',
    category: 'Couples',
    question: 'What is included in the Couple Hub?',
    answer: 'Couples receive full access to our multi-day itinerary builder, interactive guest list manager with dietary cross-checks, multi-currency budget tracker, seating chart designer, vision moodboards, vendor contract vault, and personal concierge messaging.'
  },
  {
    id: 'faq-4',
    category: 'Couples',
    question: 'What is the difference between Raoz Afar and Raoz Here?',
    answer: 'Raoz Afar is tailored for multi-day celebrations far from home, complete with flight tracking, villa buyouts, travel guides, and translation tools. Raoz Here strips out international logistics and is fine-tuned for couples marrying close to home who want that same calm, elegant dashboard for a single-day celebration without clutter.'
  },
  {
    id: 'faq-5',
    category: 'Guests',
    question: 'Do our guests need to download an app or create an account?',
    answer: 'Never. Guests access their personalized Guest Hub through a single private link. It opens instantly on any mobile or desktop browser in their native language (supporting English, French, Italian, Spanish, German, Hindi, Greek, and Japanese). No downloads, no passwords to forget, no friction.'
  },
  {
    id: 'faq-6',
    category: 'Guests',
    question: 'How do guests submit RSVPs and dietary requirements?',
    answer: 'Guests can complete their RSVP in under 60 seconds directly on their Guest Hub, specifying which multi-day events they are attending, dietary allergies, flight arrival details, and even their favourite dance-floor song request.'
  },
  {
    id: 'faq-7',
    category: 'Planners',
    question: 'Can wedding planners white-label the platform for their clients?',
    answer: 'Yes! Planner Partners on our Atelier and Agency plans can brand both the Couple Hub and the Guest Hub with their own studio logo, brand colors, custom domain, and customized task workflows across multiple concurrent weddings.'
  },
  {
    id: 'faq-8',
    category: 'Planners',
    question: 'What is the 10-Phase 280-Task workflow included for planners?',
    answer: 'Our proprietary planning framework walks teams through every critical milestone of destination coordination — from initial currency risk hedging and international permits to day-of run sheets and post-wedding photo archival. It can be tailored to your agency’s exact SOPs.'
  },
  {
    id: 'faq-9',
    category: 'Pricing',
    question: 'Is there a recurring monthly subscription for couples?',
    answer: 'No. We despise surprise subscription traps. Couples pay a single, transparent one-time fee (AUD $89 / ₹4,999 / USD $59) that provides lifetime access for their wedding chapter until all celebrations and photo galleries wrap. No ads, no hidden vendor commissions, no automatic renewal fees.'
  },
  {
    id: 'faq-10',
    category: 'Pricing',
    question: 'Is there a free starter version available?',
    answer: 'Yes! You can explore the platform, build your initial multi-day schedule, and add up to 15 guests completely free with zero credit card required.'
  }
];

export const RAOZ_WEDDING_HUB_WEBSITE: BusinessWebsite = {
  id: 'raoz-wedding-hub',
  businessName: 'RAOZ WEDDING HUB',
  templateId: 'destination_wedding_platform_73',
  category: 'destination_weddings',
  slug: '73-raoz-wedding-hub',
  tagline: 'Destination Wedding Planning, in One Calm Place',
  description: 'One calm platform for multi-day destination weddings — time for the conversations and memories that last. Dedicated Couple Hubs, interactive Guest Hubs in 8 languages with zero app download, and 10-phase task workflows for professional wedding planners.',
  ownerName: 'Raoz Wedding Hub Directors',
  city: 'Gurugram & Sydney',
  address: raozWeddingHubConfig.ADDRESS,
  phone: raozWeddingHubConfig.PHONE,
  whatsapp: raozWeddingHubConfig.WHATSAPP,
  email: raozWeddingHubConfig.EMAIL,
  mapsUrl: 'https://maps.google.com/?q=Golf+Course+Road+Gurugram',
  openingHours: '24/7 Digital Platform · Global Concierge Support',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Start Planning Free',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 89,
  paymentStatus: 'paid',
  primaryColor: '#A85C3D',
  secondaryColor: '#1F1B16',
  coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  items: [],
  sections: [
    { id: 'hero', title: 'One Calm Place', isEnabled: true, order: 1 },
    { id: 'thesis', title: 'The Thesis', isEnabled: true, order: 2 },
    { id: 'experience', title: 'Three Experiences', isEnabled: true, order: 3 },
    { id: 'here-afar', title: 'Raoz Afar vs Raoz Here', isEnabled: true, order: 4 },
    { id: 'dashboard', title: 'Interactive Hub Previews', isEnabled: true, order: 5 },
    { id: 'destinations', title: 'Destination Guides', isEnabled: true, order: 6 },
    { id: 'pricing', title: 'Clear One-Time Pricing', isEnabled: true, order: 7 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 8 }
  ],
  gallery: [
    {
      id: 'gal-rwh-1',
      title: 'Cliffside Sunset Ceremony, Uluwatu Bali',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-rwh-2',
      title: 'Tuscan Pergola Candlelit Long Tables',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-rwh-3',
      title: 'Coastal Catamaran Welcome Cruise, Amalfi',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-rwh-4',
      title: 'Santorini Caldera Sunset Terrace Vows',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  offers: [
    {
      id: 'off-rwh-calm',
      title: 'Early Season Destination Concierge Consultation',
      description: 'Book your couple hub this month to receive a personalized multi-currency budget roadmap and regional flight route analysis.',
      discountPercent: 10,
      validTill: '2026-12-31'
    }
  ],
  createdAt: '2026-03-01T00:00:00Z',
  updatedAt: '2026-10-04T00:00:00Z'
};
