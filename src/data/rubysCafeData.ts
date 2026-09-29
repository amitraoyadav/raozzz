import { BusinessWebsite } from '../types';

export interface RubysMenuItem {
  id: string;
  name: string;
  category: 'Breakfast & Bowls' | 'Burgers & Sandwiches' | 'Pasta & Mains' | 'Salads & Sides' | 'Coffee & Beverages' | 'Cocktails & Wine';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVegetarian?: boolean;
  isGlutenFreeAvailable?: boolean;
}

export interface RubysLocation {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  resyUrl?: string;
  orderUrl?: string;
}

export const RUBYS_MENU: RubysMenuItem[] = [
  // Breakfast & Bowls
  {
    id: 'ruby-ricotta-hotcakes',
    name: 'Ricotta Hotcakes',
    category: 'Breakfast & Bowls',
    description: 'Light, fluffy seared ricotta pancakes served with honeycomb butter, warm Nutella, fresh sliced banana, and pure maple syrup. Strawberries available upon request.',
    priceUsd: 18.00,
    priceInr: 1800,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'ruby-avocado-toast',
    name: 'Ruby’s Avocado Toast',
    category: 'Breakfast & Bowls',
    description: 'Mashed hass avocado on artisan sourdough toast with heirloom cherry tomatoes, crumbled feta, chili flakes, radish, and fresh lemon. Add poached egg +$3.',
    priceUsd: 16.50,
    priceInr: 1650,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'ruby-crispy-rice-bowl',
    name: 'Crispy Rice Bowl',
    category: 'Breakfast & Bowls',
    description: 'Crispy seasoned jasmine rice, poached farm egg, wild arugula, pickled cucumbers, scallions, avocado, and spicy sesame tamari dressing.',
    priceUsd: 17.50,
    priceInr: 1750,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    isGlutenFreeAvailable: true
  },
  {
    id: 'ruby-acai-bowl',
    name: 'Organic Berry Açaí Bowl',
    category: 'Breakfast & Bowls',
    description: 'Thick blended Amazonian açaí topped with house toasted coconut granola, fresh strawberries, banana, blueberries, chia seeds, and raw honey.',
    priceUsd: 15.00,
    priceInr: 1500,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    isVegetarian: true
  },

  // Burgers & Sandwiches
  {
    id: 'ruby-bronte-burger',
    name: 'The Famous Bronte Burger',
    category: 'Burgers & Sandwiches',
    description: 'Our iconic Australian burger. Premium seasoned beef patty, tomato, crisp lettuce, sweet chili sauce, house mayo, and molten Swiss cheese on toasted artisan ciabatta.',
    priceUsd: 19.50,
    priceInr: 1950,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true
  },
  {
    id: 'ruby-crispy-chicken-sandwich',
    name: 'Crispy Chicken Sandwich',
    category: 'Burgers & Sandwiches',
    description: 'Buttermilk fried chicken breast, red cabbage apple slaw, spicy jalapeño aioli, and dill pickles on toasted brioche bun.',
    priceUsd: 18.50,
    priceInr: 1850,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true
  },
  {
    id: 'ruby-veggie-burger',
    name: 'Bondi Veggie Burger',
    category: 'Burgers & Sandwiches',
    description: 'House-made quinoa, black bean and roasted beet patty, avocado, arugula, tomato, and vegan herb aioli on gluten-free bun.',
    priceUsd: 17.50,
    priceInr: 1750,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    isVegetarian: true
  },

  // Pasta & Mains
  {
    id: 'ruby-spicy-vodka-pasta',
    name: 'Rigatoni Alla Vodka',
    category: 'Pasta & Mains',
    description: 'Al dente rigatoni tossed in our velvety Calabrian chili vodka cream sauce, finished with hand-dipped buffalo ricotta, fresh basil, and Parmigiano-Reggiano.',
    priceUsd: 22.00,
    priceInr: 2200,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'ruby-shrimp-pasta',
    name: 'Garlic Prawn & Lemon Spaghetti',
    category: 'Pasta & Mains',
    description: 'Sautéed jumbo shrimp, blistered cherry tomatoes, white wine, garlic butter, fresh parsley, and toasted breadcrumbs over bronze-cut spaghetti.',
    priceUsd: 24.00,
    priceInr: 2400,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true
  },

  // Salads & Sides
  {
    id: 'ruby-truffle-fries',
    name: 'Fries with Truffle Aioli',
    category: 'Salads & Sides',
    description: 'Golden shoestring fries seasoned with sea salt and rosemary, served with house-made black truffle aioli.',
    priceUsd: 10.50,
    priceInr: 1050,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    isVegetarian: true
  },
  {
    id: 'ruby-chopped-salad',
    name: 'Little Ruby’s Chopped Salad',
    category: 'Salads & Sides',
    description: 'Kale, romaine, chickpeas, cucumber, cherry tomatoes, pickled onions, kalamata olives, feta, and lemon oregano vinaigrette.',
    priceUsd: 16.00,
    priceInr: 1600,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    isVegetarian: true,
    isGlutenFreeAvailable: true
  },

  // Coffee & Beverages
  {
    id: 'ruby-aussie-flat-white',
    name: 'Australian Flat White',
    category: 'Coffee & Beverages',
    description: 'Double ristretto espresso shots topped with micro-foamed milk with a velvety texture, crafted in the authentic Sydney tradition.',
    priceUsd: 5.50,
    priceInr: 550,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true
  },
  {
    id: 'ruby-iced-latte',
    name: 'Iced Vanilla Oat Latte',
    category: 'Coffee & Beverages',
    description: 'Double espresso poured over chilled organic oat milk and natural Madagascar vanilla syrup.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png'
  },
  {
    id: 'ruby-fresh-juice',
    name: 'Ruby’s Glow Cold-Pressed Juice',
    category: 'Coffee & Beverages',
    description: 'Fresh apple, carrot, ginger, beetroot, and lemon pressed raw daily.',
    priceUsd: 9.00,
    priceInr: 900,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png'
  },

  // Cocktails & Wine
  {
    id: 'ruby-espresso-martini',
    name: 'Ruby’s Espresso Martini',
    category: 'Cocktails & Wine',
    description: 'Vodka, fresh pulled espresso, coffee liqueur, and vanilla bean syrup shaken hard and served with coffee beans.',
    priceUsd: 17.00,
    priceInr: 1700,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
    popular: true
  },
  {
    id: 'ruby-aperol-spritz',
    name: 'Classic Aperol Spritz',
    category: 'Cocktails & Wine',
    description: 'Aperol, Prosecco, club soda, and fresh orange slice served over ice in a wine glass.',
    priceUsd: 16.00,
    priceInr: 1600,
    imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png'
  }
];

export const RUBYS_LOCATIONS: RubysLocation[] = [
  {
    id: 'ruby-loc-soho',
    name: 'Little Ruby’s Mulberry (SoHo)',
    neighborhood: 'SoHo',
    city: 'New York',
    address: '219 Mulberry St, New York, NY 10012',
    hours: 'Sun–Thu 8:30 AM – 10:00 PM, Fri–Sat 8:30 AM – 11:00 PM',
    phone: '(212) 925-5755',
    resyUrl: 'https://resy.com/cities/ny/rubys-cafe-soho'
  },
  {
    id: 'ruby-loc-east-village',
    name: 'Ruby’s East Village',
    neighborhood: 'East Village',
    city: 'New York',
    address: '435 E 9th St, New York, NY 10009',
    hours: 'Daily 9:00 AM – 10:30 PM',
    phone: '(212) 674-0600',
    resyUrl: 'https://resy.com/cities/ny/rubys-east-village'
  },
  {
    id: 'ruby-loc-west-village',
    name: 'Ruby’s West Village',
    neighborhood: 'West Village',
    city: 'New York',
    address: '225 W 4th St, New York, NY 10014',
    hours: 'Mon–Sun 9:00 AM – 11:00 PM',
    phone: '(212) 804-8977',
    resyUrl: 'https://resy.com/cities/ny/rubys-west-village'
  },
  {
    id: 'ruby-loc-murray-hill',
    name: 'Ruby’s Murray Hill',
    neighborhood: 'Murray Hill',
    city: 'New York',
    address: '442 3rd Ave, New York, NY 10016',
    hours: 'Daily 9:00 AM – 10:00 PM',
    phone: '(212) 300-4040',
    resyUrl: 'https://resy.com/cities/ny/rubys-murray-hill'
  },
  {
    id: 'ruby-loc-williamsburg',
    name: 'Ruby’s Williamsburg',
    neighborhood: 'Williamsburg',
    city: 'Brooklyn',
    address: '107 N 3rd St, Brooklyn, NY 11249',
    hours: 'Mon–Sun 9:00 AM – 11:00 PM',
    phone: '(718) 782-2200',
    resyUrl: 'https://resy.com/cities/ny/rubys-williamsburg'
  },
  {
    id: 'ruby-loc-dallas',
    name: 'Little Ruby’s Uptown Dallas',
    neighborhood: 'Uptown',
    city: 'Dallas',
    address: '2305 Cedar Springs Rd, Suite 150, Dallas, TX 75201',
    hours: 'Daily 8:00 AM – 10:00 PM',
    phone: '(214) 736-8800',
    resyUrl: 'https://resy.com/cities/dal/rubys-dallas'
  }
];

export const RUBYS_WEBSITE: BusinessWebsite = {
  id: 'brew-bloom-rubys',
  slug: 'brew-bloom-rubys',
  businessName: 'BREW & BLOOM — Australian Cafe & Dining (Ruby’s Cafe Recreation)',
  category: 'cafe',
  templateId: 'rubys-cafe',
  tagline: 'Australian-Influenced Neighborhood Dining · NYC & Dallas',
  description: 'Iconic Australian café and all-day dining born on Mulberry Street in SoHo. Known worldwide for our Bronte Burger, Ricotta Hotcakes, Rigatoni Vodka, and sunny flat whites.',
  ownerName: 'Wish You Were Here Group / BREW & BLOOM',
  phone: '(212) 925-5755',
  whatsapp: '12129255755',
  email: 'info@rubyscafe.com',
  address: '219 Mulberry St, New York, NY 10012, USA',
  city: 'New York',
  state: 'New York',
  mapsUrl: 'https://maps.google.com/?q=Rubys+Cafe+Mulberry+St+NYC',
  openingHours: 'Mon–Sun 8:30 AM – 11:00 PM',
  logoUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
  coverUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
  primaryColor: '#a0322b',
  secondaryColor: '#f4f1eb',
  fontFamily: 'Playfair Display',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve on Resy',
  specialBadge: 'Since 2003 on Mulberry St',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-20T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Little Ruby’s Australian Cafe', isEnabled: true, order: 1 },
    { id: 'menu', title: 'All Day Dining & Hotcakes', isEnabled: true, order: 2 },
    { id: 'locations', title: 'NYC & Dallas Neighborhoods', isEnabled: true, order: 3 },
    { id: 'story', title: 'Our Story & Bondi Roots', isEnabled: true, order: 4 },
    { id: 'private-events', title: 'Private Dining & Celebrations', isEnabled: true, order: 5 }
  ],
  items: RUBYS_MENU.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !!i.isVegetarian,
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-ruby-brunch',
      title: 'Weekday Morning Coffee Special',
      discount: 'Complimentary Flat White',
      code: 'RUBYMORNINGS',
      description: 'Receive a complimentary Australian Flat White with any breakfast bowl or Ricotta Hotcakes ordered before 11 AM.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-ruby-1',
      imageUrl: 'https://images.getbento.com/accounts/b1463c771efd7f54f15c8c2371390f1f/media/images/69709logo.png',
      title: 'SoHo Mulberry Street Dining Room',
      category: 'interior'
    }
  ]
};
