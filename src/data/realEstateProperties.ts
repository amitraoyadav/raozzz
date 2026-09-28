import { RealEstateProperty } from '../types';

export interface RealEstateAgentProfile {
  name: string;
  agency: string;
  reraRegNo: string;
  experienceYears: number;
  phone: string;
  whatsapp: string;
  email: string;
  officeAddress: string;
  city: string;
  bio: string;
  avatarUrl: string;
  rating: number;
  dealsClosed: number;
  specializations: string[];
}

export const REAL_ESTATE_AGENT: RealEstateAgentProfile = {
  name: 'Vikas Batra & Ankur Jain',
  agency: 'Prime Spaces NCR Real Estate Advisors',
  reraRegNo: 'HRERA-PKL-REA-451-2018',
  experienceYears: 16,
  phone: '+91 99100 89012',
  whatsapp: '+91 99100 89012',
  email: 'advisors@primespaces.in',
  officeAddress: 'Office 402, Time Tower, Main MG Road, Gurugram, Haryana 122002',
  city: 'Gurugram',
  bio: 'With over 16 years of specialized luxury property consultancy across Golf Course Extension Road, Southern Peripheral Road, and Dwarka Expressway, Prime Spaces has assisted over 1,400 high-net-worth families and corporate investors in acquiring zero-brokerage direct builder assets.',
  avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  rating: 4.95,
  dealsClosed: 1420,
  specializations: [
    'Golf Course Ext. Luxury Apartments',
    'High-Street Commercial Retail Floors',
    'Independent Builder Floors',
    'Pre-Leased Bank & Corporate Assets',
    'RERA Legal Compliance & Due Diligence'
  ]
};

export const REAL_ESTATE_PROPERTIES: RealEstateProperty[] = [
  {
    id: 'prop-1',
    title: 'The Camellias Signature High-Rise (3 BHK + Servant)',
    slug: 'the-camellias-signature-3bhk',
    price: 27500000,
    priceFormatted: '₹2.75 Cr',
    propertyType: 'Luxury Apartment',
    bhk: '3 BHK',
    location: 'Golf Course Extension Road',
    city: 'Gurugram',
    areaSqFt: 2250,
    status: 'Ready to Move',
    description: 'Ultra-luxurious sun-drenched residence with VRV climate control, Italian Botticino marble flooring, wrap-around private deck overlooking Aravalli hills, automated home lighting, and 3 covered basement parkings.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      '50,000 sq.ft Luxury Clubhouse',
      'Heated Olympic Swimming Pool',
      '100% DG Power Backup',
      'Multi-Tier Biometric Security',
      'EV Car Charging Station',
      'Tennis & Squash Courts',
      'High-Speed Schindler Elevators',
      'Landscaped Zen Reflexology Garden'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    reraNumber: 'HRERA-PKL-GGM-1245-2021',
    agentName: 'Vikas Batra',
    agentPhone: '+91 99100 89012',
    isFeatured: true
  },
  {
    id: 'prop-2',
    title: 'Grandeur Sky Penthouse (4 BHK Duplex with Private Pool)',
    slug: 'grandeur-sky-penthouse-4bhk',
    price: 52000000,
    priceFormatted: '₹5.20 Cr',
    propertyType: 'Penthouse',
    bhk: '4 BHK',
    location: 'Cyber City Sector 24',
    city: 'Gurugram',
    areaSqFt: 4600,
    status: 'Ready to Move',
    description: 'Iconic 32nd-floor double-height penthouse featuring a private temperature-controlled infinity plunge pool, personal elevator landing, German Poggenpohl modular kitchen, and uninterrupted skyline views of Cyber Hub.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Private Plunge Pool on Deck',
      'Private Elevator Access',
      'Double Height Living Ceiling',
      'Concierge & Valet Service',
      'Smart Home Automation',
      'Cigar Lounge & Wine Cellar',
      '4 Covered Stilt Parkings',
      'Helipad Access'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    reraNumber: 'HRERA-PKL-GGM-892-2020',
    agentName: 'Ankur Jain',
    agentPhone: '+91 99100 89012',
    isFeatured: true
  },
  {
    id: 'prop-3',
    title: 'Boulevard High-Street Retail Corner Shop (Ground Floor)',
    slug: 'boulevard-high-street-retail-shop',
    price: 11500000,
    priceFormatted: '₹1.15 Cr',
    propertyType: 'High-Street Retail',
    bhk: 'Commercial',
    location: 'Dwarka Expressway',
    city: 'Gurugram',
    areaSqFt: 520,
    status: 'Ready to Move',
    description: 'Prime ground-floor double-height 18ft retail shop on 150m wide Dwarka Expressway with 8.5% initial lease guarantee. Facing high-footfall central piazza surrounded by 15,000 occupied premium apartments.',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      '18-Foot Double Height Ceiling',
      'Direct Frontage on 150m Expressway',
      'Central Chilled Water Air-Conditioning',
      'Escalators & Service Lifts',
      'Dedicated Basement Visitor Parking',
      '24/7 Security & Fire Hydrant System'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    reraNumber: 'HRERA-PKL-GGM-1402-2022',
    agentName: 'Vikas Batra',
    agentPhone: '+91 99100 89012'
  },
  {
    id: 'prop-4',
    title: 'Aravalli Hills Gated Luxury Villa (5 BHK with Lawn)',
    slug: 'aravalli-hills-luxury-villa-5bhk',
    price: 68000000,
    priceFormatted: '₹6.80 Cr',
    propertyType: 'Independent Villa',
    bhk: '4 BHK',
    location: 'Sohna Road',
    city: 'Gurugram',
    areaSqFt: 5500,
    status: 'Ready to Move',
    description: 'Sprawling Mediterranean independent luxury villa set in a 500 sq.yard private plot. Lush private landscaped front and back lawns, private jacuzzi, separate domestic staff quarters, and 10 kW rooftop solar net-metering.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Private 500 Sq.Yard Landscaped Plot',
      '10 kW Solar Net-Metering Installed',
      'Private Outdoor Jacuzzi',
      'Gated Community 3-Tier Security',
      'Staff & Driver Quarters',
      'Clubhouse with Golf Putting Green'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    reraNumber: 'HRERA-PKL-GGM-610-2019',
    agentName: 'Ankur Jain',
    agentPhone: '+91 99100 89012'
  },
  {
    id: 'prop-5',
    title: 'Modern Compact 2 BHK High-Rise with Balcony',
    slug: 'modern-compact-2bhk-highrise',
    price: 8900000,
    priceFormatted: '₹89 Lakh',
    propertyType: 'Luxury Apartment',
    bhk: '2 BHK',
    location: 'Dwarka Expressway',
    city: 'Gurugram',
    areaSqFt: 1150,
    status: 'Under Construction',
    description: 'Efficiently planned 2 BHK home with zero space wastage, modular kitchen with chimney, anti-skid balcony tiles, and direct walking connectivity to upcoming metro corridor.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Clubhouse with Swimming Pool',
      'Children Play Area with Sandpit',
      'Jogging & Cycling Track',
      'Power Backup 24/7',
      'Gated Entry with RFID Barrier'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    reraNumber: 'HRERA-PKL-GGM-1889-2023',
    agentName: 'Vikas Batra',
    agentPhone: '+91 99100 89012'
  },
  {
    id: 'prop-6',
    title: 'Grade-A Commercial Office Floor (Pre-Leased to MNC)',
    slug: 'grade-a-commercial-office-floor',
    price: 38000000,
    priceFormatted: '₹3.80 Cr',
    propertyType: 'Commercial Office',
    bhk: 'Commercial',
    location: 'Golf Course Extension Road',
    city: 'Gurugram',
    areaSqFt: 3100,
    status: 'Ready to Move',
    description: 'Pre-leased Grade-A commercial office space returning 7.8% net annual rental yield with 9-year lease lock-in to an American fintech MNC. High liquidity asset with quarterly rental escalations.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Pre-Leased with 7.8% Annual ROI',
      'US Fintech MNC Tenant (9-Yr Lease)',
      'LEED Platinum Certified Green Building',
      'Dual 100% DG Backups',
      'High-Speed Destination Elevators'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    reraNumber: 'HRERA-PKL-GGM-1120-2021',
    agentName: 'Ankur Jain',
    agentPhone: '+91 99100 89012'
  }
];
