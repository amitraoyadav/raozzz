import { BusinessWebsite } from '../types';

export interface ProvisionItem {
  id: string;
  name: string;
  category: 'Specialty Sandwiches' | 'Artisan Cheese & Charcuterie' | 'Specialty Coffee & Beverages' | 'Natural Wine & Cider' | 'Pantry & Provisions';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVegetarian?: boolean;
  badge?: string;
}

export interface ProvisionLocation {
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  features: string[];
}

export const PROVISIONS_LOCATIONS: ProvisionLocation[] = [
  {
    name: 'South Boston Flagship Store',
    neighborhood: 'South Boston',
    address: '613 E 8th St, South Boston, MA 02127',
    city: 'Boston, MA',
    phone: '(617) 269-6100',
    hours: 'Mon–Sat: 8:00 AM – 7:00 PM · Sun: 9:00 AM – 6:00 PM',
    features: ['Full Deli & Sandwich Counter', 'Cut-to-Order Cheese Case', 'Natural Wine Shop', 'Specialty Coffee Bar']
  },
  {
    name: 'Dorchester Neighborhood Market',
    neighborhood: 'Dorchester / Ashmont',
    address: '1528 Dorchester Ave, Dorchester, MA 02122',
    city: 'Boston, MA',
    phone: '(617) 514-4599',
    hours: 'Mon–Fri: 7:30 AM – 7:00 PM · Sat: 8:00 AM – 7:00 PM · Sun: 9:00 AM – 5:00 PM',
    features: ['Espresso & Filter Coffee', 'Local Beer & Cider', 'Farmstead Cheeses', 'Prepared Foods & Catering']
  }
];

export const PROVISION_ITEMS: ProvisionItem[] = [
  {
    id: 'prov-the-italian',
    name: 'The Classic Italian Sandwich',
    category: 'Specialty Sandwiches',
    description: 'Prosciutto di Parma, Genoa salami, hot capicola, sharp provolone, shaved red onion, shredded iceberg, house pickled peppers, oil & vinegar on braided sesame roll.',
    priceUsd: 15.50,
    priceInr: 1550,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    popular: true,
    badge: 'Boston Best'
  },
  {
    id: 'prov-turkey-avocado',
    name: 'Smoked Turkey, Cheddar & Bacon Jam',
    category: 'Specialty Sandwiches',
    description: 'Slow-roasted herb turkey breast, Grafton 2-year aged Vermont cheddar, smoky bacon-onion jam, dijonnaise, arugula on seeded sourdough.',
    priceUsd: 14.50,
    priceInr: 1450,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'prov-burrata-toast',
    name: 'Whipped Local Burrata & Fig Sandwich',
    category: 'Specialty Sandwiches',
    description: 'Hand-stretched New England burrata, mission fig mostarda, wildflower honey, cracked black pepper, baby arugula on toasted ciabatta.',
    priceUsd: 13.50,
    priceInr: 1350,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    badge: 'Vegetarian Favorite'
  },
  {
    id: 'prov-cheese-board',
    name: 'Artisan New England Farmstead Cheese Box',
    category: 'Artisan Cheese & Charcuterie',
    description: 'Chef’s trio of hand-cut New England farmstead cheeses (Jasper Hill Cabot Clothbound, Bayley Hazen Blue, Moses Sleeper), marcona almonds, Castelvetrano olives, sea salt flatbread crackers.',
    priceUsd: 28.00,
    priceInr: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'prov-charcuterie-platter',
    name: 'Master Salumi & Cured Meats Slate',
    category: 'Artisan Cheese & Charcuterie',
    description: 'Thinly sliced Prosciutto San Daniele, Fennel Finocchiona, spicy Coppa, cornichons, grain mustard, and grissini breadsticks.',
    priceUsd: 32.00,
    priceInr: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prov-draft-latte',
    name: 'Draft Cold Brew & Oat Milk Latte',
    category: 'Specialty Coffee & Beverages',
    description: 'Locally roasted single-origin Ethiopian cold brew charged with nitrogen, poured over creamy barista oat milk.',
    priceUsd: 6.00,
    priceInr: 600,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'prov-pour-over',
    name: 'Single-Origin Kalita Wave Pour-Over',
    category: 'Specialty Coffee & Beverages',
    description: 'Rotating micro-lot beans roasted in New England; delicate floral jasmine aroma, stone fruit acidity, and sweet cane finish.',
    priceUsd: 5.50,
    priceInr: 550,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prov-pet-nat',
    name: 'Pet-Nat Sparkling Natural Wine (Bottle)',
    category: 'Natural Wine & Cider',
    description: 'Ancestral method sparkling wine from organic low-intervention vineyards; crisp green apple, citrus zest, lively naturally occurring bubbles.',
    priceUsd: 34.00,
    priceInr: 3400,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prov-orange-wine',
    name: 'Skin-Contact Macerated Orange Wine',
    category: 'Natural Wine & Cider',
    description: 'Organic white grapes fermented on skins for 21 days; dried apricot, amber resin, savory herb finish, zero sulfur added.',
    priceUsd: 38.00,
    priceInr: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1558001373-4b9345df57d3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prov-truffle-honey',
    name: 'White Truffle Infused Wildflower Honey',
    category: 'Pantry & Provisions',
    description: 'Raw Italian wildflower honey steeped with real white truffle slivers. The ultimate pairing for aged Pecorino and washed rind cheeses.',
    priceUsd: 18.00,
    priceInr: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80'
  }
];

export const AMERICAN_PROVISIONS_WEBSITE: BusinessWebsite = {
  id: 'site-american-provisions',
  slug: 'american-provisions',
  templateId: 'american-provisions',
  businessName: 'FEDERAL PROVISIONS & PANTRY',
  category: 'cafe',
  tagline: 'Artisan Sandwiches, Farm Cheese, Natural Wine & Specialty Coffee in South Boston & Dorchester',
  description: 'Neighborhood specialty market and cafe celebrating small-scale growers, real cheese-makers, natural winemakers, and slow-roasted specialty coffee.',
  ownerName: 'Federal Provisions Hospitality',
  phone: '(617) 269-6100',
  whatsapp: '16172696100',
  email: 'hello@federalprovisions.com',
  address: '613 E 8th St, South Boston, MA 02127, United States',
  city: 'Boston',
  mapsUrl: 'https://maps.google.com/?q=American+Provisions+South+Boston',
  openingHours: 'Mon–Sat: 8:00 AM – 7:00 PM · Sun: 9:00 AM – 6:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#2b3a2f',
  secondaryColor: '#c79c5e',
  fontFamily: 'Fraunces',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Sandwich Pickup',
  specialBadge: 'South Boston & Dorchester',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: PROVISION_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: !!i.isVegetarian,
    badge: i.badge || i.category
  })),
  offers: [
    {
      id: 'prov-lunch-combo',
      title: 'Sandwich & Cold Brew Pairing',
      discount: '15% Off',
      code: 'PROVISIONS15',
      description: 'Receive 15% off when you pair any specialty deli sandwich with a draft cold brew or iced latte.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-prov-1',
      title: 'Cut-to-Order Farmstead Cheese Counter',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-prov-2',
      title: 'The Signature Italian on Sesame Braided Roll',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-prov-3',
      title: 'Natural & Biodynamic Wine Cellar',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'South Boston Specialty Market', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Specialty Sandwiches & Provisions', isEnabled: true, order: 2 },
    { id: 'locations', title: 'South Boston & Dorchester Stores', isEnabled: true, order: 3 },
    { id: 'story', title: 'Our Producers & Philosophy', isEnabled: true, order: 4 }
  ]
};
