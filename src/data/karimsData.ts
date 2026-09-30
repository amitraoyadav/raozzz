import { BusinessWebsite } from '../types';

export interface MughlaiItem {
  id: string;
  name: string;
  category: 'Royal Tandoori Kebabs' | 'Degi Mughlai Curries & Korma' | 'Dum Gosht Biryani' | 'Khamiri Breads & Rotis' | 'Royal Shahi Desserts';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
}

export const KARIMS_ITEMS: MughlaiItem[] = [
  {
    id: 'km-burra-kebab',
    name: 'Karim’s Original Mutton Burra Kebab (4 pcs)',
    category: 'Royal Tandoori Kebabs',
    description: 'Prime mutton chops tenderized with raw papaya, roasted gram flour, nutmeg, mace, and secret royal spice potli, grilled over incandescent charcoal.',
    priceInr: 680,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Legend Since 1913'
  },
  {
    id: 'km-shahi-korma',
    name: 'Karim’s Shahi Badam Mutton Korma',
    category: 'Degi Mughlai Curries & Korma',
    description: 'Succulent mutton slow-simmered in golden deg with browned onions, hung yogurt, almond paste, green cardamom, and fragrant kewra water.',
    priceInr: 590,
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Mughal Royal Recipe'
  },
  {
    id: 'km-mutton-roganjosh',
    name: 'Mutton Rogan Josh Special',
    category: 'Degi Mughlai Curries & Korma',
    description: 'Slow-braised mutton pieces cooked in rich Kashmiri deghi chili oil, mawal flower extract, ginger powder, and aromatic whole spices.',
    priceInr: 580,
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true
  },
  {
    id: 'km-butter-chicken-jahangiri',
    name: 'Butter Chicken Jahangiri',
    category: 'Degi Mughlai Curries & Korma',
    description: 'Charcoal-smoked chicken simmered in rich buttery tomato and cashew gravy, finished with fresh clotted cream and fragrant dried fenugreek.',
    priceInr: 560,
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true
  },
  {
    id: 'km-mutton-seekh',
    name: 'Old Delhi Mutton Seekh Kebab (4 pcs)',
    category: 'Royal Tandoori Kebabs',
    description: 'Double-minced mutton spiced with fresh green mint, coriander, roasted cumin, and royal herbs skewered and chargrilled.',
    priceInr: 440,
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true
  },
  {
    id: 'km-dum-biryani',
    name: 'Karim’s Special Mutton Dum Biryani',
    category: 'Dum Gosht Biryani',
    description: 'Aged long-grain basmati rice dum cooked on slow woodfire embers with marinated mutton, saffron milk, browned fried onions, and green chilies.',
    priceInr: 520,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Woodfire Dum'
  },
  {
    id: 'km-khamiri-roti',
    name: 'Traditional Tandoori Khamiri Roti',
    category: 'Khamiri Breads & Rotis',
    description: 'Thick, pillow-soft naturally leavened sourdough bread baked on the hot clay wall of Old Delhi tandoors, brushed with melted butter.',
    priceInr: 55,
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'km-shahi-tukda',
    name: 'Purani Dilli Shahi Tukda (2 pcs)',
    category: 'Royal Shahi Desserts',
    description: 'Crisp golden ghee-fried bread slices drenched in cardamom sugar syrup, smothered in thick saffron rabri and slivered dry fruits.',
    priceInr: 160,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Jama Masjid Sweet'
  }
];

export const KARIMS_WEBSITE: BusinessWebsite = {
  id: 'site-karims',
  slug: 'karims',
  templateId: 'karims',
  businessName: 'KARIM’S HISTORIC OLD DELHI JAMA MASJID 1913',
  category: 'restaurant',
  tagline: 'Royal Mughlai Culinary Dynasty Since 1913 at Gali Kababian, Jama Masjid',
  description: 'Founded by Haji Karimuddin in 1913, royal chef to the Mughal emperors, Karim’s has fed generations of kings, presidents, and connoisseurs with world-famous Mutton Burra Kebabs, Badam Pasanda, and slow-deg kormas.',
  ownerName: 'Karim Hotel Pvt. Ltd.',
  phone: '+91 11 2326 9880',
  whatsapp: '+911123269880',
  email: 'heritage@karimsdelhi.in',
  address: '16, Gali Kababian, Jama Masjid, Old Delhi 110006',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Karims+Jama+Masjid+Old+Delhi',
  openingHours: 'Mon - Sun: 11:00 AM – 11:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#064e3b',
  secondaryColor: '#d97706',
  fontFamily: 'Fraunces',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve Dastarkhwan Table',
  specialBadge: 'Mughal Imperial Royal Dynasty 1913',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: KARIMS_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: i.isVeg,
    badge: i.badge
  })),
  offers: [
    {
      id: 'km-dastarkhwan',
      title: 'Royal Dastarkhwan Feast for Four',
      discount: '₹400 Off',
      code: 'ROYAL1913',
      description: 'Grand family banquet: Mutton Burra, Seekh Kebabs, Shahi Korma, Dum Biryani, 4 Khamiri Rotis, and Shahi Tukda.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-km-1',
      title: 'Charcoal Skewers on Gali Kababian Live Hearth',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-km-2',
      title: 'Vintage Jama Masjid 1913 Courtyard Dining',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Jama Masjid 1913 Mughal Dynasty', isEnabled: true, order: 1 },
    { id: 'kebabs', title: 'Royal Burra & Seekh Kebabs', isEnabled: true, order: 2 },
    { id: 'korma', title: 'Copper Deg Slow Simmered Korma', isEnabled: true, order: 3 },
    { id: 'reserve', title: 'Dastarkhwan Reservation & Takeaway', isEnabled: true, order: 4 }
  ]
};
