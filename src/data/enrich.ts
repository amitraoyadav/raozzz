export interface EnrichCity {
  name: string;
  slug: string;
  salonCount: number;
  url: string;
  popularAreas: string[];
}

export interface EnrichService {
  name: string;
  slug: string;
  category: 'hair' | 'skin' | 'nails';
  tag: string;
  description: string;
  url: string;
}

export interface EnrichBrand {
  name: string;
  category: string;
  url: string;
  origin?: string;
  highlight: string;
}

export const ENRICH_DATA = {
  name: 'Enrich Beauty',
  url: 'https://www.enrichbeauty.com',
  tagline: 'Book a salon appointment or shop professional hair and skin care',
  description:
    'India’s largest unisex salon chain and premier beauty destination. Experience master hair stylists, certified skin experts, luxury hair rituals, and 100% authentic international beauty brands.',
  brandColor: '#f82148',
  stats: {
    salons: 107,
    citiesCount: 7,
    professionals: '2000+',
    rating: '4.7★',
    reviews: '2L+ Google reviews'
  },
  cities: [
    {
      name: 'Mumbai',
      slug: 'mumbai',
      salonCount: 57,
      url: 'https://www.enrichbeauty.com/stores/mumbai',
      popularAreas: ['Bandra', 'Juhu', 'Andheri West', 'Powai', 'Colaba', 'Borivali']
    },
    {
      name: 'Ahmedabad',
      slug: 'ahmedabad',
      salonCount: 21,
      url: 'https://www.enrichbeauty.com/stores/ahmedabad',
      popularAreas: ['Bodakdev', 'Satellite', 'Vastrapur', 'Prahlad Nagar', 'Navrangpura']
    },
    {
      name: 'Bengaluru',
      slug: 'bengaluru',
      salonCount: 16,
      url: 'https://www.enrichbeauty.com/stores/bengaluru',
      popularAreas: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'Jayanagar']
    },
    {
      name: 'Pune',
      slug: 'pune',
      salonCount: 10,
      url: 'https://www.enrichbeauty.com/stores/pune',
      popularAreas: ['Koregaon Park', 'Kothrud', 'Aundh', 'Viman Nagar', 'Baner']
    },
    {
      name: 'Vadodara',
      slug: 'vadodara',
      salonCount: 6,
      url: 'https://www.enrichbeauty.com/stores/vadodara',
      popularAreas: ['Alkapuri', 'Vasna Road', 'Manjalpur', 'Gotri Road']
    },
    {
      name: 'Surat',
      slug: 'surat',
      salonCount: 4,
      url: 'https://www.enrichbeauty.com/stores/surat',
      popularAreas: ['Ghod Dod Road', 'Vesu', 'City Light', 'Adajan']
    },
    {
      name: 'Indore',
      slug: 'indore',
      salonCount: 1,
      url: 'https://www.enrichbeauty.com/stores/indore',
      popularAreas: ['Vijay Nagar', 'AB Road']
    }
  ] as EnrichCity[],
  services: [
    {
      name: 'Hair Cut',
      slug: 'hair-cut',
      category: 'hair',
      tag: 'Styling & Precision',
      description: 'Consultative haircuts by certified masters tailored to your face shape, lifestyle, and hair texture.',
      url: 'https://www.enrichbeauty.com/services/women/hair-cut'
    },
    {
      name: 'Hair Wash',
      slug: 'hair-wash',
      category: 'hair',
      tag: 'Cleanse & Refresh',
      description: 'Invigorating scalp cleanse with professional shampoo, nourishing conditioning, and blast dry.',
      url: 'https://www.enrichbeauty.com/services/women/hair-wash'
    },
    {
      name: 'Colour',
      slug: 'hair-colour',
      category: 'hair',
      tag: 'Balayage & Root Touchup',
      description: 'Ammonia-free global color, seamless balayage, trendy highlights, and grey coverage by color experts.',
      url: 'https://www.enrichbeauty.com/services/women/hair-colour'
    },
    {
      name: 'Treatments',
      slug: 'hair-treatments',
      category: 'hair',
      tag: 'Damage Repair & Spa',
      description: 'Intense reconstructive hair spas, detox scalps treatments, and hydration therapy for dry or damaged tresses.',
      url: 'https://www.enrichbeauty.com/services/women/hair-treatments'
    },
    {
      name: 'Texture',
      slug: 'hair-texture',
      category: 'hair',
      tag: 'Keratin & Straightening',
      description: 'Frizz-free smoothing, nanoplastia, botox, and straightening treatments for glass-like shine.',
      url: 'https://www.enrichbeauty.com/services/women/hair-texture'
    },
    {
      name: 'Kérastase Rituals',
      slug: 'hair-kerastase',
      category: 'hair',
      tag: 'Luxury Parisian Haircare',
      description: 'Tailored Fusio-Dose boosters and caviar-infused Chronologiste rituals for instant hair transformation.',
      url: 'https://www.enrichbeauty.com/services/women/hair-kerastase'
    },
    {
      name: 'Styling',
      slug: 'hair-styling',
      category: 'hair',
      tag: 'Blowouts & Updos',
      description: 'Signature bouncy blowouts, beach waves, party updos, and editorial styling for any occasion.',
      url: 'https://www.enrichbeauty.com/services/women/hair-styling'
    },
    {
      name: 'Threading',
      slug: 'skin-threading',
      category: 'skin',
      tag: 'Brows & Face Definition',
      description: 'Gentle, hygienic eyebrow shaping and facial threading using organic antimicrobial cotton thread.',
      url: 'https://www.enrichbeauty.com/services/women/skin-threading'
    },
    {
      name: 'Manicure',
      slug: 'mani-pedi-manicure',
      category: 'nails',
      tag: 'Nail Grooming & Polish',
      description: 'Therapeutic hand exfoliation, cuticle care, relaxing massage, and high-shine gel or classic polish.',
      url: 'https://www.enrichbeauty.com/services/women/mani-pedi-manicure'
    }
  ] as EnrichService[],
  brands: [
    {
      name: 'Kérastase',
      category: 'Luxury Haircare',
      highlight: 'French bespoke hair rituals & homecare',
      url: 'https://www.enrichbeauty.com/products?brand=K%C3%A9rastase'
    },
    {
      name: "L'Oréal Professionnel",
      category: 'Salon Pro Color & Care',
      highlight: 'Vibrant color science & Serie Expert solutions',
      url: 'https://www.enrichbeauty.com/products?brand=L%27Or%C3%A9al%20Professionnel'
    },
    {
      name: 'Thalgo',
      category: 'Marine Cosmeceuticals',
      highlight: 'Algae-infused skincare & anti-aging rituals',
      url: 'https://www.enrichbeauty.com/products?brand=Thalgo'
    },
    {
      name: 'The Face Shop',
      category: 'K-Beauty Skincare',
      highlight: 'Natural Korean botanicals & gentle serums',
      url: 'https://www.enrichbeauty.com/products?brand=The%20Face%20Shop'
    },
    {
      name: 'Redken',
      category: 'New York Hair Science',
      highlight: 'Protein-based strengthening & Acidic Bonding',
      url: 'https://www.enrichbeauty.com/products?brand=Redken'
    },
    {
      name: 'Moroccanoil',
      category: 'Argan Oil Luxury',
      highlight: 'Nutrient-rich conditioning & signature scent',
      url: 'https://www.enrichbeauty.com/products?brand=Moroccanoil'
    },
    {
      name: 'Remy Laure',
      category: 'French Moor Skincare',
      highlight: 'Moor mud therapies & organic mineral beauty',
      url: 'https://www.enrichbeauty.com/products?brand=Remy%20Laure'
    },
    {
      name: '3TENX',
      category: 'Pro Styling & Care',
      highlight: 'Next-gen salon formulations & treatments',
      url: 'https://www.enrichbeauty.com/products?brand=3TENX'
    },
    {
      name: 'Dyson',
      category: 'Advanced Hair Tech',
      highlight: 'Supersonic dryers & Airwrap multi-stylers',
      url: 'https://www.enrichbeauty.com/products?brand=Dyson'
    },
    {
      name: 'Luxaderme',
      category: 'Bio-Cellulose Masks',
      highlight: 'Sheet masks & deep hydration booties',
      url: 'https://www.enrichbeauty.com/products?brand=Luxaderme'
    },
    {
      name: 'Amazon Series',
      category: 'Rainforest Botanicals',
      highlight: 'Keratin smoothing & Murumuru butter masks',
      url: 'https://www.enrichbeauty.com/products?brand=Amazon%20Series'
    },
    {
      name: 'Beauty Garage Professional',
      category: 'Scalp & Hair Therapy',
      highlight: 'Botox hair treatments & salon restorative kits',
      url: 'https://www.enrichbeauty.com/products?brand=Beauty%20Garage%20Professional'
    }
  ] as EnrichBrand[],
  membership: {
    title: 'Enrich Membership Club',
    tagline: 'Up to 30% off, every visit',
    startingPrice: 'From ₹1,250 + GST',
    validity: '12 Months Validity',
    perks: [
      'Up to 30% instant discount on all salon services across 107 salons',
      'Wallet credit balance for seamless cashless payments',
      'Earn & redeem Enrich Points on services and retail products',
      'Priority slot reservations and complimentary birthday styling perks'
    ],
    url: 'https://www.enrichbeauty.com/membership'
  },
  contact: {
    phone: '1800 266 5300',
    tollFreeLabel: '1800 266 5300 (Toll Free)',
    whatsapp: 'https://wa.me/919339777777',
    whatsappDisplay: '+91 93397 77777',
    email: 'customercare@enrichbeauty.com',
    hours: 'Daily 9:00 AM – 9:00 PM IST',
    headquarters: 'Enrich Beauty Corporate Office, Mumbai, Maharashtra'
  },
  social: {
    instagram: 'https://instagram.com/enrichbeauty',
    facebook: 'https://facebook.com/enrichbeautyin',
    youtube: 'https://youtube.com/user/EnrichSalonAcademy',
    x: 'https://x.com/enrichbeautyin'
  },
  apps: {
    appStore: 'https://apps.apple.com/in/app/enrich-salons/id1351645361',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.enrich.salonapp',
    appleId: 'id1351645361',
    googlePackage: 'com.enrich.salonapp'
  }
};
