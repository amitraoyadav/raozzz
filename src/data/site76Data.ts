import { BusinessWebsite } from '../types';
import { site76Config } from '../config/site76Config';

export interface ProductVariantColor {
  name: string;
  hex: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  gender: 'women' | 'men' | 'lifestyle' | 'home';
  category: string;
  subcategory: string;
  material: string;
  fabricDetails: string;
  price: number;
  originalPrice: number;
  discountPercent?: number;
  badge?: string;
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
  images: string[];
  hoverImage: string;
  availableSizes: string[];
  availableColors: ProductVariantColor[];
  description: string;
  fitDetails: string;
  craftStory: string;
  origin: string;
  careInstructions: string[];
  features: string[];
  sustainabilityTag: string;
}

export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  gender: 'women' | 'men' | 'materials' | 'lifestyle' | 'collections';
  description: string;
  image: string;
  itemCount: number;
}

export interface MaterialDetail {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  texture: string;
  benefits: string[];
  craftingProcess: { step: string; title: string; description: string }[];
  origin: string;
  careGuide: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  relatedProductIds: string[];
}

export interface CollectionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  productCount: number;
  moodTag: string;
  productIds: string[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  coverImage: string;
  contentSections: {
    heading: string;
    body: string;
  }[];
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  verified: boolean;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
}

export interface FaqItem {
  id: string;
  category: 'Shipping' | 'Returns & Exchanges' | 'Sizing & Fit' | 'Materials & Care' | 'Orders & Payment';
  question: string;
  answer: string;
}

// ----------------------------------------------------
// 1. PRODUCTS DATA (30+ natural apparel & lifestyle items)
// ----------------------------------------------------
export const PRODUCTS_DATA: ProductItem[] = [
  // --- WOMEN'S APPAREL ---
  {
    id: 'prod-w-01',
    slug: 'unbleached-khadi-tier-dress',
    name: 'Unbleached Khadi Tiered Maxi Dress',
    gender: 'women',
    category: 'Dresses',
    subcategory: 'Maxi Dresses',
    material: 'Handspun Khadi Cotton',
    fabricDetails: '100% Raw Cotton hand-spun on Amber Charkha, 56-count natural slub weave',
    price: 4850,
    originalPrice: 5800,
    discountPercent: 16,
    badge: 'Artisan Crafted',
    inStock: true,
    stockCount: 14,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 38,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    availableColors: [
      { name: 'Unbleached Ecru', hex: '#F5EFEB' },
      { name: 'Kala Sand', hex: '#D7C7B0' },
      { name: 'Charcoal Wash', hex: '#2A2A2A' }
    ],
    description: 'An ethereal floor-length tiered silhouette crafted from tactile handspun khadi cotton. Features gentle raglan billow sleeves, mother-of-pearl buttons, and raw selvage hemlines that celebrate slow Indian loom traditions.',
    fitDetails: 'Relaxed, flowing silhouette. Designed to drape naturally over the body. Model is 5\'9" wearing size Small.',
    craftStory: 'Spun by women artisans of the Wardha Khadi Collective using indigenous desi cotton that thrives on pure rainwater without chemicals.',
    origin: 'Wardha, Maharashtra, India',
    careInstructions: [
      'Hand wash separately in cold water with mild ph-neutral soap nuts',
      'Do not wring or tumble dry',
      'Line dry in ambient shade to preserve the raw cotton lustre',
      'Warm steam iron on reverse'
    ],
    features: ['Zero microplastics', 'Compostable natural fiber', 'Breathable open weave', 'Deep concealed pockets'],
    sustainabilityTag: '100% GOTS & KVIC Certified'
  },
  {
    id: 'prod-w-02',
    slug: 'pure-french-linen-wrap-dress',
    name: 'Pure French Linen Wrap Midi Dress',
    gender: 'women',
    category: 'Dresses',
    subcategory: 'Midi Dresses',
    material: 'Pure French Linen',
    fabricDetails: '180 GSM European flax woven on heritage shuttle looms with natural garment enzyme wash',
    price: 5490,
    originalPrice: 6500,
    discountPercent: 15,
    badge: 'Bestseller',
    inStock: true,
    stockCount: 9,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 44,
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Terracotta Earth', hex: '#C16A52' },
      { name: 'Sage Olive', hex: '#98A391' },
      { name: 'Bleached Ivory', hex: '#FDFBF7' }
    ],
    description: 'A timeless wrap dress with an adjustable internal tie and sculptural kimono collar. Pre-washed with natural bio-enzymes to give an ultra-soft cloud-like handfeel that softens and breathes with every wash.',
    fitDetails: 'True to size with adjustable waist tie. A-line skirt with gentle side slit. Length hits mid-calf.',
    craftStory: 'Woven from long-staple Normandy flax known for immense tensile strength and thermo-regulating breathability.',
    origin: 'Phulia & Kolkata Atelier, India',
    careInstructions: [
      'Gentle machine wash or hand wash at 30°C',
      'Use botanical plant detergent',
      'Dry flat in shade; embrace the natural organic linen wrinkles',
      'Warm iron while slightly damp'
    ],
    features: ['Thermo-regulating natural flax', 'Double-stitched french seams', 'Zero chemical sizing', 'Adjustable cinch tie'],
    sustainabilityTag: 'Zero Waste Patterning'
  },
  {
    id: 'prod-w-03',
    slug: 'himalayan-hemp-oversized-shirt',
    name: 'Wild Himalayan Hemp Oversized Shirt',
    gender: 'women',
    category: 'Shirts',
    subcategory: 'Overshirts',
    material: 'Himalayan Hemp & Organic Cotton',
    fabricDetails: '55% Wild Harvested Hemp, 45% Organic Desi Cotton, 210 GSM durable twill',
    price: 3950,
    originalPrice: 4600,
    discountPercent: 14,
    badge: 'Carbon Negative',
    inStock: true,
    stockCount: 18,
    isNew: true,
    rating: 4.8,
    reviewCount: 29,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S', 'M', 'L', 'XL'],
    availableColors: [
      { name: 'Sage Green', hex: '#87977F' },
      { name: 'Raw Sand', hex: '#E2D5C4' },
      { name: 'Bark Walnut', hex: '#584435' }
    ],
    description: 'A relaxed menswear-inspired boyfriend shirt tailored in wild Himalayan hemp twill. Features dropped shoulders, clean patch pockets, carved sheesham wooden buttons, and a curved high-low hemline.',
    fitDetails: 'Intentionally oversized boyfriend cut. Size down if you prefer a closer architectural fit.',
    craftStory: 'Hemp fibers naturally harvested in Almora, Uttarakhand, spun by mountain village cooperatives without synthetic fertilisers.',
    origin: 'Almora, Uttarakhand, India',
    careInstructions: [
      'Machine wash gentle cycle with eco detergent',
      'Hemp becomes noticeably softer after every laundering cycle',
      'Air dry naturally in open breeze',
      'Steam iron on medium high'
    ],
    features: ['UV-protective natural fiber', 'Antibacterial & odor-resistant', 'Reinforced gusset tabs', 'Plant-based wood buttons'],
    sustainabilityTag: 'Water-Neutral Hemp'
  },
  {
    id: 'prod-w-04',
    slug: 'jamdani-handloom-relaxed-kurta',
    name: 'Artisan Jamdani Handloom Kurta',
    gender: 'women',
    category: 'Kurtas',
    subcategory: 'Straight Kurtas',
    material: 'Handloom Cotton & Zari Weave',
    fabricDetails: '100% Fine Mulberry Organic Cotton with discontinuous weft floral Jamdani motifs',
    price: 6200,
    originalPrice: 7200,
    discountPercent: 13,
    badge: 'Heritage Craft',
    inStock: true,
    stockCount: 7,
    rating: 5.0,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    availableColors: [
      { name: 'Indigo River', hex: '#26425A' },
      { name: 'Pomegranate Cream', hex: '#F6EFE7' }
    ],
    description: 'An ode to centuries of Bengal weaving heritage. Each geometric floral motif is woven by hand directly into the warp threads without machine intervention, taking 18 days of master artisan craftsmanship.',
    fitDetails: 'Classic straight cut kurta with side slits and mandarin collar. Length 46 inches.',
    craftStory: 'Handwoven in Nadia district, West Bengal, by national award-winning 4th generation Jamdani master weavers.',
    origin: 'Nadia, West Bengal, India',
    careInstructions: [
      'Dry clean gently for first two cleans, or hand wash with gentle amla-reetha liquid',
      'Do not brush or twist',
      'Dry flat on a towel in the shade',
      'Low steam iron'
    ],
    features: ['UNESCO Intangible Cultural Heritage technique', '18 days per single piece', 'Natural plant-indigo dyed yarn', 'Hand-knotted tassel detail'],
    sustainabilityTag: 'Artisan Direct Fair Trade'
  },
  {
    id: 'prod-w-05',
    slug: 'organic-cotton-coord-set',
    name: 'Waffle Organic Cotton Relaxed Co-ord Set',
    gender: 'women',
    category: 'Co-ords',
    subcategory: 'Lounge Sets',
    material: 'Organic Cotton Waffle Knit',
    fabricDetails: '100% GOTS Organic Cotton, 260 GSM textured breathable honeycomb knit',
    price: 4950,
    originalPrice: 5900,
    discountPercent: 16,
    badge: 'All-Day Comfort',
    inStock: true,
    stockCount: 16,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 52,
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    availableColors: [
      { name: 'Oatmeal Natural', hex: '#EBE4D8' },
      { name: 'Earthy Charcoal', hex: '#313233' },
      { name: 'Clay Terracotta', hex: '#BA6851' }
    ],
    description: 'The definitive slow-living pairing: a slouchy boxy pullover top and relaxed cropped drawstring trousers tailored in tactile organic cotton honeycomb waffle weave.',
    fitDetails: 'Relaxed easy fit. Elasticated paperbag waistband with organic cotton drawstring tie. Wide-leg cropped trousers.',
    craftStory: 'Knit from Rainfed Desi Organic Cotton cultivated in Adilabad without toxic synthetic inputs.',
    origin: 'Tirupur & Mehrauli, India',
    careInstructions: [
      'Machine wash gentle 30°C inside out',
      'Reshape gently while damp and flat dry',
      'Do not tumble dry to maintain waffle elasticity'
    ],
    features: ['GOTS certified organic cotton', 'Heavyweight breathable waffle', 'Deep side pockets in pants', 'Pre-shrunk finish'],
    sustainabilityTag: 'GOTS Organic Certified'
  },
  {
    id: 'prod-w-06',
    slug: 'linen-wide-leg-palazzo-trousers',
    name: 'Pure Linen Wide-Leg Pleated Trousers',
    gender: 'women',
    category: 'Trousers',
    subcategory: 'Wide Leg Pants',
    material: 'Pure European Flax Linen',
    fabricDetails: '200 GSM dense yet airy woven linen with soft stonewashed hand',
    price: 3650,
    originalPrice: 4200,
    discountPercent: 13,
    inStock: true,
    stockCount: 22,
    rating: 4.8,
    reviewCount: 37,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
    availableColors: [
      { name: 'Raw Sand', hex: '#DFD4C3' },
      { name: 'Forest Olive', hex: '#4F5E3C' },
      { name: 'Deep Indigo', hex: '#1C2C3F' }
    ],
    description: 'Architectural high-waist trousers featuring deep front double pleats, seamless slash pockets, and a clean wide-leg sweep that pairs effortlessly with crop tops, shirts, and tunics.',
    fitDetails: 'High-waisted fit with relaxed room through the hip and thigh. Clean hook-and-bar front with discreet elastic back.',
    craftStory: 'Tailored by master tailors in our Mehrauli atelier using single-needle construction for generational longevity.',
    origin: 'New Delhi, India',
    careInstructions: [
      'Hand or machine wash cold on delicate cycle',
      'Hang dry in ambient breeze; iron damp or leave unpressed for authentic relaxed linen character'
    ],
    features: ['High-waisted tailoring', 'Deep lined pockets', 'Discreet back comfort elastic', 'Corozo nut hardware'],
    sustainabilityTag: 'OEKO-TEX Certified'
  },
  {
    id: 'prod-w-07',
    slug: 'natural-madder-root-wrap-skirt',
    name: 'Madder Root Plant-Dyed Wrap Skirt',
    gender: 'women',
    category: 'Skirts',
    subcategory: 'Wrap Skirts',
    material: 'Handloom Cotton & Natural Madder Dye',
    fabricDetails: 'Handloom Cotton Khadi dyed with genuine Rubia Cordifolia (Indian Madder) roots and alum mordant',
    price: 3490,
    originalPrice: 4200,
    discountPercent: 16,
    badge: '100% Plant Dye',
    inStock: true,
    stockCount: 11,
    isNew: true,
    rating: 4.9,
    reviewCount: 19,
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['XS-S', 'M-L', 'XL-XXL'],
    availableColors: [
      { name: 'Terracotta Madder', hex: '#A8533D' },
      { name: 'Ochre Turmeric', hex: '#CFA15A' }
    ],
    description: 'A breezy wrap skirt drenched in rich, earthy madder root dye. The organic variation in dye absorption gives each garment a one-of-a-kind chromatic depth.',
    fitDetails: 'One-size-flexible wrap construction with double belt loops. Flattering midi length with gentle flare.',
    craftStory: 'Naturally dyed in Bagru, Rajasthan, in open earthen vats using centuries-old river washing and sun fixation techniques.',
    origin: 'Bagru, Rajasthan, India',
    careInstructions: [
      'Natural dyes react to pH: avoid lemon or acidic detergents',
      'Hand wash separately in cold water with soapberry extract',
      'Dry in deep shade; store away from direct sunlight'
    ],
    features: ['Zero synthetic azo dyes', 'Pure madder root & pomegranate peel', 'Biodegradable packaging', 'Side tie cinch'],
    sustainabilityTag: 'Chemical-Free Botanical'
  },
  {
    id: 'prod-w-08',
    slug: 'bamboo-cotton-kimono-lounger',
    name: 'Bamboo Cotton Kimono House Robe',
    gender: 'women',
    category: 'Loungewear',
    subcategory: 'Robes & Kimonos',
    material: 'Organic Bamboo & Desi Cotton',
    fabricDetails: '60% Bamboo Fiber, 40% Organic Khadi Cotton, 170 GSM feather-light gauze',
    price: 4200,
    originalPrice: 4800,
    discountPercent: 12,
    inStock: true,
    stockCount: 20,
    rating: 5.0,
    reviewCount: 41,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S/M', 'L/XL'],
    availableColors: [
      { name: 'Natural Sand', hex: '#EDE3D5' },
      { name: 'Sage Leaf', hex: '#93A08C' },
      { name: 'Charcoal Mist', hex: '#373A3C' }
    ],
    description: 'A luxuriously fluid lounge robe crafted from closed-loop organic bamboo and handloom cotton gauze. Features wide traditional kimono sleeves, a detachable belt sash, and internal anchor ties.',
    fitDetails: 'Voluminous relaxed cut designed for barefoot morning rituals and mindful weekend evenings.',
    craftStory: 'Woven in Maheshwar by women weavers who specialize in fine gossamer borders and sheer breathable counts.',
    origin: 'Maheshwar, Madhya Pradesh, India',
    careInstructions: [
      'Gentle machine wash or hand wash in cold water',
      'Hang to dry naturally',
      'Steam iron for sleek drape, or let the textured crinkle speak for itself'
    ],
    features: ['Antibacterial bamboo properties', 'Thermal balancing weave', 'Deep patch pockets', 'Wide cuffs'],
    sustainabilityTag: 'Circular Bamboo Fiber'
  },

  // --- MEN'S APPAREL ---
  {
    id: 'prod-m-01',
    slug: 'artisanal-khadi-mandarin-shirt',
    name: 'Artisanal Khadi Mandarin Collar Shirt',
    gender: 'men',
    category: 'Shirts',
    subcategory: 'Collarless Shirts',
    material: 'Pure Handspun Khadi',
    fabricDetails: '100% Desi organic cotton spun on traditional Charkha, medium slub count with raw handfeel',
    price: 3650,
    originalPrice: 4200,
    discountPercent: 13,
    badge: 'Signature Essential',
    inStock: true,
    stockCount: 25,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 63,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Undyed Ecru', hex: '#FAF6EE' },
      { name: 'Indigo Yarn-Dyed', hex: '#2C3E50' },
      { name: 'Forest Olive', hex: '#4D5838' }
    ],
    description: 'The foundation of the mindful wardrobe. Tailored with a clean mandarin stand collar, coconut shell buttons, and a curved hem. The handspun yarn lets air pass freely through the weave for unmatched tropical breathability.',
    fitDetails: 'Regular relaxed tailoring. Model is 6\'1" wearing size Medium.',
    craftStory: 'Handcrafted by weavers in Murshidabad, West Bengal, reviving 100-count traditional khadi spinning.',
    origin: 'Murshidabad, West Bengal, India',
    careInstructions: [
      'Hand wash or delicate machine wash cold with gentle soap',
      'Do not bleach or dry clean with harsh solvents',
      'Hang dry in shade to preserve pure cotton fibers'
    ],
    features: ['Natural coconut shell buttons', 'Breathable open pore weave', 'Box pleat back yoke', 'Chest pocket with pen sleeve'],
    sustainabilityTag: 'Zero-Electricity Weaving'
  },
  {
    id: 'prod-m-02',
    slug: 'pure-french-linen-relaxed-kurta',
    name: 'Pure French Linen Relaxed Kurta',
    gender: 'men',
    category: 'Kurtas',
    subcategory: 'Short & Long Kurtas',
    material: 'Pure French Linen',
    fabricDetails: '100% Certified Normandy Flax, 190 GSM pre-softened weave',
    price: 4450,
    originalPrice: 5200,
    discountPercent: 14,
    badge: 'Bestseller',
    inStock: true,
    stockCount: 15,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 48,
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Forest Moss', hex: '#3B4D30' },
      { name: 'Natural Sandstone', hex: '#DDD2C1' },
      { name: 'Terracotta Clay', hex: '#B85E47' }
    ],
    description: 'An understated modern kurta with a partial button placket, deep side seam pockets, and high side vents. Cut longer through the torso to fall gracefully over linen trousers or raw denim.',
    fitDetails: 'Relaxed tailored fit. Falls just above the knee. Side vents permit free unrestricted movement.',
    craftStory: 'Spun from high-grade European flax and loom-woven in West Bengal with hand-finished collar stitching.',
    origin: 'Phulia & New Delhi, India',
    careInstructions: [
      'Machine wash cold with gentle detergent',
      'Shake out creases while damp and air dry on a broad hanger',
      'Steam iron or leave natural'
    ],
    features: ['High side vents for mobility', 'Two deep concealed side pockets', 'Mother-of-pearl hardware', 'French seams throughout'],
    sustainabilityTag: 'Flax Biodegradable'
  },
  {
    id: 'prod-m-03',
    slug: 'wild-hemp-field-overshirt',
    name: 'Wild Himalayan Hemp Field Overshirt',
    gender: 'men',
    category: 'Overshirts',
    subcategory: 'Field Jackets',
    material: 'Wild Himalayan Hemp Twill',
    fabricDetails: '60% Wild Himalayan Hemp, 40% Rainfed Desi Cotton, 280 GSM heavy jacket twill',
    price: 5200,
    originalPrice: 6200,
    discountPercent: 16,
    badge: 'Heavyweight Heirloom',
    inStock: true,
    stockCount: 12,
    isNew: true,
    rating: 4.9,
    reviewCount: 22,
    images: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Earth Umber', hex: '#5E4A3B' },
      { name: 'Washed Olive', hex: '#556143' },
      { name: 'Charcoal Black', hex: '#222325' }
    ],
    description: 'Built for decades of wear. A rugged overshirt featuring four utility flap pockets, horn-style corozo nut buttons, and reinforced elbow patches. Hemp naturally repels moisture and becomes softer with age.',
    fitDetails: 'Boxy jacket fit designed for layering over t-shirts and shirts.',
    craftStory: 'Sourced from the wild slopes of Almora and Chamoli in Uttarakhand, harvested by hand using traditional water-retting.',
    origin: 'Uttarakhand & Rajasthan Atelier',
    careInstructions: [
      'Machine wash cold on sturdy cycle',
      'Hemp fiber increases in tensile strength when wet',
      'Line dry outdoors'
    ],
    features: ['4 functional utility pockets', 'Reinforced elbow panels', 'Naturally mildew resistant', 'Tough double-needle topstitching'],
    sustainabilityTag: 'Carbon Negative Fiber'
  },
  {
    id: 'prod-m-04',
    slug: 'handloom-linen-drawstring-trousers',
    name: 'Handloom Linen Drawstring Trousers',
    gender: 'men',
    category: 'Trousers',
    subcategory: 'Linen Pants',
    material: 'Pure Handloom Linen',
    fabricDetails: '100% Linen woven on pit looms, 210 GSM with textured cross-grain slub',
    price: 3850,
    originalPrice: 4500,
    discountPercent: 14,
    badge: 'Warm-Weather Hero',
    inStock: true,
    stockCount: 19,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 40,
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Raw Oat Sand', hex: '#DCD1BD' },
      { name: 'Classic Slate', hex: '#484E55' },
      { name: 'Botanical Olive', hex: '#4B5738' }
    ],
    description: 'Designed for relentless summer heat. Features a flat-front tailored waistband with an internal cotton drawstring, discreet elasticated back, and deep slash pockets.',
    fitDetails: 'Tapered relaxed cut that hits cleanly on the shoe without stacking.',
    craftStory: 'Loomed by master weavers in Bhagalpur using non-chemically treated natural flax yarns.',
    origin: 'Bhagalpur, Bihar, India',
    careInstructions: [
      'Gentle machine wash cold or hand wash',
      'Air dry away from direct scorching sun',
      'Press with medium heat while lightly misted'
    ],
    features: ['Hidden internal waist drawstring', 'Discreet back elastic insert', 'Secure coin pocket', 'Clean tapered leg opening'],
    sustainabilityTag: 'Plastic-Free Trims'
  },
  {
    id: 'prod-m-05',
    slug: 'botanical-indigo-kala-cotton-kurta',
    name: 'Botanical Indigo Kala Cotton Short Kurta',
    gender: 'men',
    category: 'Kurtas',
    subcategory: 'Short Kurtas',
    material: 'Rainfed Kala Cotton & Fermented Indigo',
    fabricDetails: '100% Indigenous Desi Kala Cotton dyed with live fermented Indigofera Tinctoria vats',
    price: 3450,
    originalPrice: 4100,
    discountPercent: 15,
    badge: 'Kutch Handloom',
    inStock: true,
    stockCount: 14,
    rating: 4.9,
    reviewCount: 35,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Deep Sea Indigo', hex: '#1C3144' },
      { name: 'Sky Indigo Wash', hex: '#4C6A85' }
    ],
    description: 'Crafted from indigenous rainfed Kala cotton that has grown naturally in the arid salt lands of Kutch for 5,000 years. Submerged in genuine fermented natural indigo vats 6 times for hypnotic oceanic blue depth.',
    fitDetails: 'Mid-thigh short kurta length with bandh gala stand collar.',
    craftStory: 'Spun and woven by the Vankar community in Bhujodi, Kutch, on traditional wooden pit looms.',
    origin: 'Kutch, Gujarat, India',
    careInstructions: [
      'First wash separately: natural indigo may show slight bleed of excess surface particles',
      'Use cold water and mild neutral cleanser',
      'Dry in ambient shade to preserve indigo luminosity'
    ],
    features: ['Pre-industrial genetically pure seed', 'Zero chemical irrigation', 'Six-dip natural indigo dyeing', 'Carved wood buttons'],
    sustainabilityTag: 'Ancient Desi Seed'
  },
  {
    id: 'prod-m-06',
    slug: 'hemp-cotton-loungewear-joggers',
    name: 'Hemp & Organic Cotton Loungewear Joggers',
    gender: 'men',
    category: 'Loungewear',
    subcategory: 'Joggers & Pants',
    material: 'Organic Hemp & Cotton French Terry',
    fabricDetails: '55% Organic Cotton, 45% Hemp French Terry, 320 GSM plush loopback',
    price: 3250,
    originalPrice: 3800,
    discountPercent: 14,
    inStock: true,
    stockCount: 22,
    rating: 4.8,
    reviewCount: 30,
    images: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    availableColors: [
      { name: 'Ash Grey', hex: '#636569' },
      { name: 'Raw Natural', hex: '#ECE5DB' },
      { name: 'Olive Drab', hex: '#4B523D' }
    ],
    description: 'Heavyweight organic lounge joggers engineered with unbrushed French terry loops. Designed with a wide comfort ribbed waistband, organic cotton drawcord, and deep welt pockets.',
    fitDetails: 'Relaxed through the seat and thigh with gentle ankle taper.',
    craftStory: 'Knitted without synthetic elastomer cords; natural stretch achieved purely through mechanical knitting tension.',
    origin: 'Tirupur & Mehrauli, India',
    careInstructions: [
      'Machine wash cold on gentle',
      'Do not use chemical fabric softeners',
      'Tumble dry low or air dry'
    ],
    features: ['100% plastic-free ribbing', 'Zero microplastic fleece shedding', 'Deep phone-friendly pockets', 'Reinforced crotch gusset'],
    sustainabilityTag: 'Zero Microplastics'
  },

  // --- LIFESTYLE & ACCESSORIES ---
  {
    id: 'prod-l-01',
    slug: 'handwoven-hemp-canvas-weekender-tote',
    name: 'Handwoven Hemp Canvas Weekender Tote',
    gender: 'lifestyle',
    category: 'Bags',
    subcategory: 'Totes & Bags',
    material: '100% Himalayan Heavy Hemp Canvas',
    fabricDetails: '480 GSM dense handwoven canvas with vegetable-tanned full-grain leather trim and brass hardware',
    price: 4950,
    originalPrice: 5800,
    discountPercent: 14,
    badge: 'Artisan Heirloom',
    inStock: true,
    stockCount: 16,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 39,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['One Size (38L)'],
    availableColors: [
      { name: 'Natural Sand Canvas', hex: '#D8CAB4' },
      { name: 'Forest Olive Canvas', hex: '#48563A' }
    ],
    description: 'An indestructible travel and market companion. Woven from thick wild Himalayan hemp yarn that is naturally water-repellent and resistant to abrasion. Features interior padded laptop sleeve and solid brass zipper.',
    fitDetails: 'Dimensions: 48cm x 36cm x 18cm. Fits 16" laptop with room for 3 days of travel.',
    craftStory: 'Hand-loomed in Almora and crafted into bags in our Delhi leather-craft guild using upcycled vegetable-tanned harness leather.',
    origin: 'Almora & New Delhi, India',
    careInstructions: [
      'Spot clean canvas with wet sponge and mild soap',
      'Condition leather handles once a year with coconut or beeswax balm',
      'Air dry thoroughly'
    ],
    features: ['Solid unlacquered brass hardware', 'Fits 16-inch laptop', 'Interior zippered passport pocket', 'Reinforced base rivets'],
    sustainabilityTag: 'Generational Longevity'
  },
  {
    id: 'prod-l-02',
    slug: 'botanical-indigo-silk-cotton-stole',
    name: 'Natural Plant-Dyed Silk & Linen Stole',
    gender: 'lifestyle',
    category: 'Scarves',
    subcategory: 'Stoles & Scarves',
    material: 'Eri Wild Silk & Pure Linen',
    fabricDetails: '50% Ahimsa Eri Silk (Peace Silk), 50% Organic Linen with hand-rolled hems',
    price: 2450,
    originalPrice: 2900,
    discountPercent: 15,
    badge: 'Ahimsa Peace Silk',
    inStock: true,
    stockCount: 28,
    isNew: true,
    rating: 4.9,
    reviewCount: 47,
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['200cm x 70cm'],
    availableColors: [
      { name: 'Indigo Ombre', hex: '#2C4964' },
      { name: 'Madder Rose', hex: '#C27563' },
      { name: 'Myrobalan Ochre', hex: '#C7A258' }
    ],
    description: 'A diaphanous, featherweight wrap created with cruelty-free Ahimsa Eri silk (spun after the moth has naturally flown from its cocoon) and fine organic linen. Naturally dyed in subtle ombre gradations.',
    fitDetails: 'Generous 200cm length allows versatile draping as a shawl, scarf, or travel wrap.',
    craftStory: 'Reeled by indigenous Bodo women in Assam and woven on backstrap looms with plant mordants.',
    origin: 'Assam & Mehrauli, India',
    careInstructions: [
      'Dry clean or gentle hand wash in cool water with silk-safe cleanser',
      'Roll in a clean dry towel to absorb moisture',
      'Warm iron on silk setting'
    ],
    features: ['Cruelty-free peace silk', 'Hand-rolled & hand-stitched borders', 'Natural thermal insulator', 'Ultra lightweight (110g)'],
    sustainabilityTag: 'Ahimsa Peace Silk'
  },

  // --- HOME TEXTILES ---
  {
    id: 'prod-h-01',
    slug: 'pure-linen-dining-table-runner',
    name: 'Pure French Linen Fringe Table Runner',
    gender: 'home',
    category: 'Home Textiles',
    subcategory: 'Table Linen',
    material: 'Pure Heavyweight Linen',
    fabricDetails: '240 GSM unbleached flax with hand-pulled fringed edges',
    price: 1950,
    originalPrice: 2400,
    discountPercent: 18,
    badge: 'Home Dining',
    inStock: true,
    stockCount: 30,
    rating: 4.8,
    reviewCount: 33,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['180cm x 40cm', '240cm x 40cm'],
    availableColors: [
      { name: 'Natural Oatmeal', hex: '#E2D5C3' },
      { name: 'Terracotta Earth', hex: '#B5654E' },
      { name: 'Olive Branch', hex: '#637250' }
    ],
    description: 'Transform every meal into an earthy feast. Hand-woven on pit looms with substantial 240 GSM flax yarn that protects dining tables while aging with gorgeous rumpled texture.',
    fitDetails: 'Available in 6-seater (180cm) and 8-seater (240cm) options.',
    craftStory: 'Woven in Bhagalpur, India, where linen and silk weaving date back to the Vedic era.',
    origin: 'Bhagalpur, Bihar, India',
    careInstructions: [
      'Machine wash 40°C on normal cycle',
      'Linen softens and becomes more absorbent with every wash',
      'Line dry or tumble dry low'
    ],
    features: ['Hand-pulled 2cm fringe border', 'Heavyweight 240 GSM protection', 'Stain-releasing natural flax fiber', 'Machine washable'],
    sustainabilityTag: 'Biodegradable Tableware'
  },
  {
    id: 'prod-h-02',
    slug: 'kala-cotton-fringe-throw-blanket',
    name: 'Kutch Kala Cotton Fringe Throw Blanket',
    gender: 'home',
    category: 'Home Textiles',
    subcategory: 'Throws & Blankets',
    material: 'Indigenous Kala Cotton & Indigo',
    fabricDetails: '100% Desi Handspun Cotton with extra-weft geometric Bhujodi patterns',
    price: 4200,
    originalPrice: 4900,
    discountPercent: 14,
    badge: 'Artisan Masterpiece',
    inStock: true,
    stockCount: 15,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 42,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['150cm x 220cm (Throw)'],
    availableColors: [
      { name: 'Indigo & Ecru', hex: '#2E475D' },
      { name: 'Charcoal & Sand', hex: '#3E3835' }
    ],
    description: 'A tactile heirloom throw designed to drape over sofas, beds, or reading armchairs. Woven from rugged indigenous Kala cotton yarns with hand-twisted tassels.',
    fitDetails: '150cm x 220cm: Generous full-sofa or bed throw dimensions.',
    craftStory: 'Woven on frame looms by master artisan Shamji Vankar in Bhujodi, Kutch, using traditional motifs representing desert rain.',
    origin: 'Bhujodi, Kutch, Gujarat, India',
    careInstructions: [
      'Machine wash gentle cold or hand wash in basin',
      'Line dry flat in shade',
      'Do not bleach'
    ],
    features: ['100% rainfed indigenous cotton', 'Hand-twisted braided tassels', 'Substantial 380 GSM weight', 'Heirloom lifespan'],
    sustainabilityTag: 'Rainfed Indigenous Crop'
  },
  {
    id: 'prod-h-03',
    slug: 'botanical-neem-dyed-meditation-mat',
    name: 'Ayurvastra Botanical Neem Yoga & Meditation Mat',
    gender: 'home',
    category: 'Home Textiles',
    subcategory: 'Yoga & Meditation',
    material: 'Organic Cotton & Herbal Medicinal Dyes',
    fabricDetails: 'Organic cotton woven with natural rubber ribbed backing, infused with Neem, Tulsi, and Turmeric extracts',
    price: 3850,
    originalPrice: 4500,
    discountPercent: 14,
    badge: 'Ayurvastra Wellness',
    inStock: true,
    stockCount: 18,
    isNew: true,
    rating: 4.9,
    reviewCount: 26,
    images: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
    availableSizes: ['185cm x 65cm x 4mm'],
    availableColors: [
      { name: 'Neem Herbal Green', hex: '#687755' },
      { name: 'Turmeric Golden Ochre', hex: '#CBA052' }
    ],
    description: 'An ancient Ayurvastra practice brought to modern mindfulness. Woven from 100% organic cotton boiled with medicinal neem leaves and wild turmeric, then backed with tree rubber for grip.',
    fitDetails: '185cm length x 65cm width with non-slip natural tree latex underside.',
    craftStory: 'Crafted in Balaramapuram, Kerala, following traditional Ayurvedic textile manuscripts.',
    origin: 'Balaramapuram, Kerala, India',
    careInstructions: [
      'Wipe down with damp cloth after practice',
      'Occasional gentle hand wash with water only (soap can degrade herbal dye infusion)',
      'Air dry flat in shaded area'
    ],
    features: ['Zero toxic PVC or synthetic rubber', 'Infused with medicinal neem herbs', 'Tree-tap natural latex grip', 'Cotton carry strap included'],
    sustainabilityTag: 'Ayurvedic Plant Medicine'
  }
];

// ----------------------------------------------------
// 2. CATEGORIES
// ----------------------------------------------------
export const CATEGORIES_DATA: CategoryItem[] = [
  // Women's Categories
  {
    id: 'cat-w-dresses',
    slug: 'women-dresses',
    name: 'Dresses',
    gender: 'women',
    description: 'Breezy tier dresses, minimalist slips, and sculptural wrap silhouettes.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    itemCount: 8
  },
  {
    id: 'cat-w-shirts',
    slug: 'women-shirts',
    name: 'Tops & Shirts',
    gender: 'women',
    description: 'Tailored boxy shirts, tunic blouses, and relaxed organic cotton button-downs.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    itemCount: 6
  },
  {
    id: 'cat-w-kurtas',
    slug: 'women-kurtas',
    name: 'Kurtas & Tunics',
    gender: 'women',
    description: 'Handloom Jamdani, Chanderi, and unbleached khadi everyday kurtas.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    itemCount: 6
  },
  {
    id: 'cat-w-coords',
    slug: 'women-coords',
    name: 'Co-ord Sets',
    gender: 'women',
    description: 'Harmonious monochrome pairs in waffle cotton and enzyme-washed linen.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },
  {
    id: 'cat-w-trousers',
    slug: 'women-trousers',
    name: 'Trousers & Skirts',
    gender: 'women',
    description: 'Pleated wide-leg palazzos, wrap skirts, and relaxed hemp lounge pants.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    itemCount: 5
  },
  {
    id: 'cat-w-loungewear',
    slug: 'women-loungewear',
    name: 'Loungewear & Robes',
    gender: 'women',
    description: 'Organic bamboo gauze robes, drawstring pajamas, and mindful ritual wear.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },

  // Men's Categories
  {
    id: 'cat-m-shirts',
    slug: 'men-shirts',
    name: 'Shirts',
    gender: 'men',
    description: 'Mandarin collar shirts, camp collar linen tops, and everyday khadi essentials.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    itemCount: 6
  },
  {
    id: 'cat-m-kurtas',
    slug: 'men-kurtas',
    name: 'Kurtas',
    gender: 'men',
    description: 'Clean-lined French linen, indigo-dyed Kala cotton, and festive handlooms.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    itemCount: 5
  },
  {
    id: 'cat-m-trousers',
    slug: 'men-trousers',
    name: 'Trousers',
    gender: 'men',
    description: 'Comfortable drawstring waist linen trousers, field pants, and loungers.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    itemCount: 5
  },
  {
    id: 'cat-m-overshirts',
    slug: 'men-overshirts',
    name: 'Overshirts & Jackets',
    gender: 'men',
    description: 'Himalayan hemp field jackets and heavy khadi chore coats.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  },

  // Materials & Lifestyle
  {
    id: 'cat-mat-materials',
    slug: 'natural-materials',
    name: 'Materials Directory',
    gender: 'materials',
    description: 'Explore the provenance and tactile character of our 6 ancient botanical fibers.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    itemCount: 6
  },
  {
    id: 'cat-life-accessories',
    slug: 'lifestyle-accessories',
    name: 'Bags & Scarves',
    gender: 'lifestyle',
    description: 'Hemp canvas weekender totes, Ahimsa peace silk scarves, and accessories.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    itemCount: 5
  },
  {
    id: 'cat-home-textiles',
    slug: 'home-textiles',
    name: 'Home & Living',
    gender: 'lifestyle',
    description: 'French linen table runners, Bhujodi artisan throws, and herbal yoga mats.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    itemCount: 4
  }
];

// ----------------------------------------------------
// 3. MATERIALS DEEP DIVES
// ----------------------------------------------------
export const MATERIALS_DATA: MaterialDetail[] = [
  {
    id: 'mat-organic-cotton',
    slug: 'organic-cotton',
    name: 'Organic Cotton',
    subtitle: 'Rainfed & Genetic Purity',
    tagline: 'Non-GMO seeds nurtured strictly by monsoon rains without synthetic pesticide dependency.',
    description: 'Our organic cotton is sourced from tribal farming collectives in Madhya Pradesh and Gujarat who cultivate indigenous Desi cotton seeds. These ancient varieties have natural pest resistance and require zero chemical defoliants, protecting soil fertility and groundwater tables.',
    texture: 'Light, crisp, remarkably soft against sensitive skin, with organic slubs that breathe and cool.',
    benefits: [
      'GOTS Certified (Global Organic Textile Standard)',
      'Consumes 91% less fresh irrigation water than conventional Bt-cotton',
      'Hypoallergenic & non-toxic for sensitive skin',
      'Supports regenerative farmer-owned cooperatives'
    ],
    craftingProcess: [
      { step: '01', title: 'Rainfed Sowing', description: 'Planted at the onset of monsoon; grows organically using natural neem-cake fertilizers.' },
      { step: '02', title: 'Hand-Picking', description: 'Gently hand-harvested boll by boll to avoid mechanical trash and preserve fiber length.' },
      { step: '03', title: 'Gentle Ginning', description: 'Traditional roller-ginning separates seeds without shearing the delicate organic staple.' },
      { step: '04', title: 'Chemical-Free Spinning', description: 'Spun into yarn without toxic chemical sizing, starch-conditioned with boiled rice water.' }
    ],
    origin: 'Adilabad, Telangana & Nimar, Madhya Pradesh',
    careGuide: 'Machine wash in cool water with eco detergent. Shake and dry in fresh outdoor shade.',
    heroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Synthetic Pesticides', value: '0%' },
      { label: 'Rainwater Fed', value: '100%' },
      { label: 'Farmer Co-ops', value: '42' }
    ],
    relatedProductIds: ['prod-w-01', 'prod-w-05', 'prod-m-01']
  },
  {
    id: 'mat-linen',
    slug: 'linen',
    name: 'Pure Linen',
    subtitle: 'The Noble Flax Fiber',
    tagline: 'Centuries of European flax-farming married with Indian pit-loom weaving precision.',
    description: 'Linen is derived from the resilient flax plant, which requires zero synthetic pesticides and minimal irrigation. Every single part of the flax plant is utilized, leaving zero agricultural waste. Our linen is pre-washed with bio-enzymes to eliminate stiffness and provide an immediate buttery drape.',
    texture: 'Crisp yet fluid, richly textured with an elegant matte sheen and thermo-regulating cool touch.',
    benefits: [
      'Naturally thermo-regulating: keeps cool in summer and retains body warmth in mild winters',
      'High tensile strength: up to 3 times stronger than conventional cotton',
      'Antibacterial and naturally moth-resistant',
      '100% biodegradable and zero waste crop'
    ],
    craftingProcess: [
      { step: '01', title: 'Dew Retting', description: 'Harvested flax stalks are laid in fields where natural morning dew gently dissolves pectin.' },
      { step: '02', title: 'Scutching & Heckling', description: 'Stalks are combed using wooden blades to separate long supple spinnable fibers.' },
      { step: '03', title: 'Wet Spinning', description: 'Fibers are spun in warm water vats for incredible yarn smoothness and tensile strength.' },
      { step: '04', title: 'Handloom Weaving', description: 'Woven on wooden shuttle looms in Bengal, giving our linen its signature tactile hand.' }
    ],
    origin: 'Normandy, France (Farmed) & Phulia, West Bengal (Loom-woven)',
    careGuide: 'Wash with mild plant soap at 30°C. Do not wring. Embrace the effortless natural creases.',
    heroImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Durability vs Cotton', value: '3x' },
      { label: 'Water Savings', value: '70%' },
      { label: 'Plant Waste', value: '0%' }
    ],
    relatedProductIds: ['prod-w-02', 'prod-w-06', 'prod-m-02', 'prod-h-01']
  },
  {
    id: 'mat-hemp',
    slug: 'hemp',
    name: 'Wild Himalayan Hemp',
    subtitle: 'The Carbon-Negative Pioneer',
    tagline: 'Harvested from wild mountain slopes where hemp sequesters four times more carbon than trees.',
    description: 'Hemp is the titan of regenerative agriculture. It requires no synthetic agrochemicals, improves soil health through phytoremediation, and yields four times more usable fiber per acre than industrial cotton. Our wild hemp is harvested by village collectives in Uttarakhand.',
    texture: 'Substantial, rugged yet softens with every wash, with natural linen-like organic grain.',
    benefits: [
      'Carbon-negative plant: sequesters 15 tonnes of CO2 per hectare',
      'Blocks up to 95% of harmful UV rays naturally',
      'Naturally antimicrobial, odor-resistant, and mildew-proof',
      'Toughest natural plant fiber known to human textile history'
    ],
    craftingProcess: [
      { step: '01', title: 'Wild Foraging', description: 'Grown wild in the high-altitude valleys of Almora; harvested by hand at maturity.' },
      { step: '02', title: 'Stream Retting', description: 'Stalks soaked in natural Himalayan mountain streams to separate outer bast fiber.' },
      { step: '03', title: 'Hand Carding', description: 'Artisans hand-card the coarse fibers to remove woody shives and align long strands.' },
      { step: '04', title: 'Cotton Blending', description: 'Blended with rainfed desi organic cotton to impart remarkable drape and skin comfort.' }
    ],
    origin: 'Almora & Chamoli, Uttarakhand, India',
    careGuide: 'Machine wash on normal. Gets softer and more pliable with every single washing cycle.',
    heroImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Carbon Absorbed', value: '4x Trees' },
      { label: 'UV Protection', value: 'UPF 50+' },
      { label: 'Chemical Fertilizer', value: '0%' }
    ],
    relatedProductIds: ['prod-w-03', 'prod-m-03', 'prod-m-06', 'prod-l-01']
  },
  {
    id: 'mat-khadi',
    slug: 'khadi',
    name: 'Handspun Khadi',
    subtitle: 'The Fabric of Freedom & Dignity',
    tagline: 'Spun on wooden Charkhas and woven on handlooms with zero electrical grid consumption.',
    description: 'Khadi is not merely a fabric; it is an ideology of self-reliance, dignity of human handwork, and ecological balance. Every metre is spun on a traditional wooden spinning wheel (Charkha) and woven by hand, creating subtle variations in yarn thickness that make each garment completely unique.',
    texture: 'Earthy, textured slubs, exceptionally light and airy, creates a soothing micro-climate against skin.',
    benefits: [
      'Zero electricity used in spinning and weaving phases',
      'Provides direct livelihood to over 1.2 million rural Indian artisans',
      'Breathes and adapts to body temperature like a second skin',
      '100% compostable and zero microplastic pollution'
    ],
    craftingProcess: [
      { step: '01', title: 'Bale Cleaning', description: 'Raw desi cotton gently fluffed by hand with bamboo bows.' },
      { step: '02', title: 'Charkha Spinning', description: 'Village women spin fine slivers into yarn on Amber Charkhas in rural cooperatives.' },
      { step: '03', title: 'Warp Prepping', description: 'Yarn sized with natural rice gruel and stretched across open-air village streets.' },
      { step: '04', title: 'Pit Loom Weave', description: 'Woven rhythmically with foot pedals and flying shuttles in weaver households.' }
    ],
    origin: 'Wardha, Maharashtra & Murshidabad, West Bengal',
    careGuide: 'Hand wash cold or delicate cycle. Line dry in ambient breeze; iron with warm steam.',
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Carbon Footprint', value: 'Near Zero' },
      { label: 'Livelihoods Sustained', value: '1,200+' },
      { label: 'Handcrafted', value: '100%' }
    ],
    relatedProductIds: ['prod-w-01', 'prod-m-01', 'prod-w-07']
  },
  {
    id: 'mat-handloom',
    slug: 'handloom',
    name: 'Artisan Handloom & Jamdani',
    subtitle: 'Master-Weaver Heritage',
    tagline: 'Complex geometric motifs hand-inserted into the warp without mechanical automation.',
    description: 'Indian handloom represents the pinnacle of human textile achievement. From the featherweight Jamdani weaves of Bengal to the structural tribal weaves of Kutch and the lustrous borders of Maheshwar, our master weavers transform mathematical complexity into poetic, wearable heirlooms.',
    texture: 'Intricate woven surface, crisp relief motifs that catch the light, unmatched artisanal character.',
    benefits: [
      'Preserves generational intangible cultural heritage recognized by UNESCO',
      'Supports fair living wages that keep artisanal weaving communities thriving in their ancestral villages',
      'Distinctive irregular beauty impossible for industrial jacquard machines to mimic',
      'Each garment represents up to 20 days of dedicated artisan focus'
    ],
    craftingProcess: [
      { step: '01', title: 'Naksha Graphing', description: 'The motif is graphed on paper and translated into warp counting by master weavers.' },
      { step: '02', title: 'Loom Dressing', description: 'Thousands of individual warp threads are meticulously tied by hand into the heddles.' },
      { step: '03', title: 'Discontinuous Weft', description: 'The supplementary weft thread is hand-picked into the shed using bamboo needles.' },
      { step: '04', title: 'Edge Finishing', description: 'Selvages and borders are hand-knotted with natural cotton cords.' }
    ],
    origin: 'Nadia, West Bengal & Bhujodi, Kutch, India',
    careGuide: 'Dry clean or gentle basin wash with soap nuts. Do not wring or scrub motifs.',
    heroImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Days Per Piece', value: '14-20 Days' },
      { label: 'Hand Motions', value: '10,000+' },
      { label: 'UNESCO Listed', value: 'Yes' }
    ],
    relatedProductIds: ['prod-w-04', 'prod-m-05', 'prod-h-02']
  },
  {
    id: 'mat-natural-dyes',
    slug: 'natural-dyes',
    name: 'Botanical & Mineral Dyes',
    subtitle: 'Earth, Roots, Flowers & Leaves',
    tagline: 'Zero synthetic petrochemical AZO dyes; colored exclusively with plants and minerals.',
    description: 'We reject industrial petrochemical dyes that contaminate global waterways with heavy metals. Instead, we practice the slow alchemy of botanical color: true fermented indigo for ocean blues, Indian madder root for warm terracotta, pomegranate rind for golden greens, and marigold petals for sunlit ochres.',
    texture: 'Mellow, earthy hues with gentle organic variations that age gracefully with sunlight and life.',
    benefits: [
      '100% AZO-free, heavy-metal-free, and skin-safe',
      'Dye effluents can be safely returned to nourish organic farm compost',
      'Colors possess natural antiseptic and cooling Ayurvedic properties',
      'Ages gracefully like fine wine, developing a beautiful personal patina'
    ],
    craftingProcess: [
      { step: '01', title: 'Foraging & Grinding', description: 'Roots, barks, and leaves are hand-collected and stone-milled into fine powder.' },
      { step: '02', title: 'Myrobalan Mordanting', description: 'Fabric pre-treated with natural harda (myrobalan) tannin to bond plant pigments.' },
      { step: '03', title: 'Live Vat Fermentation', description: 'Indigo vats are kept alive with natural jaggery and limestone, fermented for days.' },
      { step: '04', title: 'River & Sun Curing', description: 'Fabric dipped multiple times, washed in clean running water, and solar-fixed.' }
    ],
    origin: 'Bagru & Sanganer, Rajasthan & Kotpad, Odisha',
    careGuide: 'Wash with pH-neutral soap nuts in cool water. Keep out of scorching direct sun during storage.',
    heroImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Toxic Effluents', value: '0%' },
      { label: 'Plant Ingredients', value: '100%' },
      { label: 'Skin Safe', value: 'Certified' }
    ],
    relatedProductIds: ['prod-w-07', 'prod-m-05', 'prod-l-02']
  }
];

// ----------------------------------------------------
// 4. COLLECTIONS
// ----------------------------------------------------
export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'col-solstice-linen',
    slug: 'solstice-linen-edit',
    title: 'The Solstice Linen Edit',
    subtitle: 'Airy, Undyed & Stone-Washed Silhouettes',
    description: 'Pure French flax linen garments tailored for effortless warmth and tropical breezes. An exploration of clean wraps, wide trousers, and architectural tunics.',
    heroImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
    productCount: 8,
    moodTag: 'Pure Linen · Terracotta & Sand',
    productIds: ['prod-w-02', 'prod-w-06', 'prod-m-02', 'prod-m-04', 'prod-h-01']
  },
  {
    id: 'col-khadi-classics',
    slug: 'timeless-khadi-classics',
    title: 'Timeless Khadi Classics',
    subtitle: 'Handspun by Village Weavers on Charkhas',
    description: 'Generational slow fashion honoring the dignity of human hands. Tiered maxis, mandarin collar shirts, and unbleached lounge staples that live beyond trends.',
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    productCount: 10,
    moodTag: 'Handspun Khadi · Raw Ecru',
    productIds: ['prod-w-01', 'prod-m-01', 'prod-w-07', 'prod-h-02']
  },
  {
    id: 'col-natural-essentials',
    slug: 'natural-essentials',
    title: 'Natural Essentials',
    subtitle: 'Everyday Breathable Uniforms',
    description: 'The foundation pieces you reach for every morning: breathable waffle knit co-ords, organic cotton tees, relaxed linen trousers, and canvas totes.',
    heroImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    productCount: 12,
    moodTag: 'Minimalist · 100% Organic',
    productIds: ['prod-w-05', 'prod-w-06', 'prod-m-01', 'prod-m-04', 'prod-l-01']
  },
  {
    id: 'col-artisan-heritage',
    slug: 'artisan-heritage-collection',
    title: 'Artisan Heritage Collection',
    subtitle: 'Museum-Quality Jamdani & Bhujodi Craft',
    description: 'Intricate master-weaver pieces created in limited quantities. Each piece celebrates weeks of painstaking hand-loom manipulation and natural indigo dyeing.',
    heroImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    productCount: 6,
    moodTag: 'Jamdani & Bhujodi · Master Weavers',
    productIds: ['prod-w-04', 'prod-m-05', 'prod-l-02', 'prod-h-02']
  },
  {
    id: 'col-wild-hemp-bamboo',
    slug: 'wild-hemp-bamboo',
    title: 'Wild Hemp & Bamboo Weaves',
    subtitle: 'Carbon-Negative Performance Fibers',
    description: 'High-altitude Himalayan hemp and closed-loop bamboo gauze. Naturally antimicrobial, UPF-protective, and structured for modern utilitarian living.',
    heroImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    productCount: 7,
    moodTag: 'Wild Hemp · Carbon Negative',
    productIds: ['prod-w-03', 'prod-w-08', 'prod-m-03', 'prod-m-06', 'prod-l-01']
  },
  {
    id: 'col-botanical-dyes',
    slug: 'forest-botanical-dyes',
    title: 'Forest Botanical Dyes',
    subtitle: 'Living Colors from Indigo, Madder & Pomegranate',
    description: 'Garments brought to life by sunlight, river water, and plant pigments. No synthetic petrochemicals, zero toxic effluents, and skin-nourishing botanical goodness.',
    heroImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
    productCount: 9,
    moodTag: 'Natural Dyes · Pure Indigo & Madder',
    productIds: ['prod-w-07', 'prod-m-05', 'prod-l-02', 'prod-h-03']
  }
];

// ----------------------------------------------------
// 5. JOURNAL ARTICLES
// ----------------------------------------------------
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    slug: 'resurgence-of-kala-cotton',
    title: 'The Resurgence of Desi Kala Cotton: Indigenous Rainfed Fibers of Kutch',
    category: 'Indigenous Fiber',
    author: 'Devika Varma',
    authorRole: 'Textile Conservator & Co-Founder',
    readTime: '6 min read',
    publishedDate: 'September 28, 2026',
    excerpt: 'Before industrial monoculture, India grew genetically diverse tree cottons that required zero synthetic pesticides and survived severe droughts on rainwater alone.',
    coverImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
    contentSections: [
      {
        heading: 'An Ancient Seed That Defied the Industrial Machine',
        body: 'In the salt-crusted lands of Kutch, Gujarat, a humble shrub has survived for five millennia. Known locally as Kala Cotton, it is one of the few genetically pure, non-hybrid cottons left on the planet. Unlike hybrid Bt-cotton, which demands chemical fertilizers and millions of litres of groundwater, Kala cotton thrives purely on rainfall.'
      },
      {
        heading: 'From Seed to Loom: Reviving the Weaver-Farmer Continuum',
        body: 'For centuries, local farmers and the Vankar weaving community existed in mutual harmony: farmers grew the cotton, local ginners separated the seeds, village women spun the coarse yarn, and master weavers loomed the cloth. When fast fashion centralized industrial mills, this ecosystem fractured. Today, through conscious slow fashion collectives, over 300 farming families are once again earning fair livelihood.'
      },
      {
        heading: 'The Tactile Character of Authentic Kala Cotton',
        body: 'Because the short-staple fiber is hand-harvested and spun with minimal mechanical tension, the resulting cloth has a glorious slubbed texture. It possesses an organic elasticity, a weight that protects without overheating, and a natural warmth that synthetics cannot duplicate.'
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'linen-vs-hemp-ancient-fibers',
    title: 'Linen vs Hemp: Why These Ancient Fibers Outperform Modern Synthetics',
    category: 'Material Science',
    author: 'Kabir Varma',
    authorRole: 'Materials Architect & Co-Founder',
    readTime: '5 min read',
    publishedDate: 'August 14, 2026',
    excerpt: 'Both linen and hemp are bast fibers extracted from the outer stems of resilient plants. Here is an honest comparative look at durability, water footprint, and skin comfort.',
    coverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80',
    contentSections: [
      {
        heading: 'The Environmental Toll of Polyester & Fast Cotton',
        body: 'Over 60% of modern clothing contains polyester—essentially spun liquid petroleum that sheds hundreds of thousands of microplastic fibers into our oceans during every laundry cycle. In contrast, both linen (flax) and hemp are 100% natural cellulose fibers that decompose back into organic humus in under six months.'
      },
      {
        heading: 'Flax Linen: The Monarch of Summer Breathability',
        body: 'Flax fibers are hollow, allowing air to circulate freely through the weave and conducting heat away from the skin five times faster than wool and eighteen times faster than silk. Linen absorbs up to 20% of its own weight in moisture before feeling damp, keeping the body cool in sweltering humidity.'
      },
      {
        heading: 'Wild Hemp: The Carbon Sequestration Champion',
        body: 'Hemp grows with astonishing vigor, sequestering more carbon per hectare than commercial pine forests. Its tensile strength is nearly three times that of cotton, making it the most rugged natural fiber in human history. Blended with organic cotton, it produces garments that literally withstand decades of wear.'
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'alchemy-of-living-indigo',
    title: 'The Magic of Myrobalan & Indigo: The Alchemy of Plant-Based Dyes',
    category: 'Natural Dyeing',
    author: 'Meenakshi Sundaram',
    authorRole: 'Master Natural Colorist',
    readTime: '7 min read',
    publishedDate: 'July 22, 2026',
    excerpt: 'Industrial dyes treat fabric with toxic synthetic fixatives. Natural dyeing, by contrast, is a living microbiological fermentation that breathes with the rhythm of the sun and season.',
    coverImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
    contentSections: [
      {
        heading: 'The Living Indigo Vat',
        body: 'An indigo vat is not a chemical solution; it is a live microbial culture. The indigo leaves (Indigofera Tinctoria) contain indican, which must be reduced using natural alkaline slaked lime and jaggery (raw cane sugar). The dyer cares for the vat like a sourdough mother, feeding it daily and listening to the scent of fermentation.'
      },
      {
        heading: 'The Dance of Oxidation',
        body: 'When fabric is first pulled from the indigo vat, it is not blue—it emerges a vivid golden yellow-green. Only as oxygen touches the wet textile does the alchemy happen before your eyes, shifting from chartreuse to turquoise and finally settling into deep, hypnotic oceanic indigo.'
      },
      {
        heading: 'Skin-Nourishing Ayurvastra Traditions',
        body: 'In ancient Indian Ayurvastra traditions, clothing was considered preventative medicine. Indigo contains natural anti-inflammatory compounds; madder root is cooling; turmeric and neem possess antibacterial properties. To wear natural-dyed clothing is to wrap your skin in botanical nourishment.'
      }
    ]
  },
  {
    id: 'art-04',
    slug: 'slow-fashion-garment-care-guide',
    title: 'Slow Fashion Care: How to Wash, Sun-Dry and Preserve Handloom Fabric',
    category: 'Garment Longevity',
    author: 'Aparna Sen',
    authorRole: 'Textile Conservator',
    readTime: '4 min read',
    publishedDate: 'June 05, 2026',
    excerpt: 'Natural fibers are living materials. With mindful laundering, soap nuts, and ambient drying, your handloom and linen pieces will outlive fast-fashion garments by decades.',
    coverImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
    contentSections: [
      {
        heading: 'Skip the Harsh Chemical Detergents',
        body: 'Commercial laundry detergents contain optical brighteners, synthetic fragrances, and aggressive bleaching agents designed to chemically strip synthetic polyester. For natural plant-dyed fibers, these chemicals strip the natural oils and cause colors to fade prematurely. Use simple soapberry (reetha) liquid or pH-neutral eco detergents.'
      },
      {
        heading: 'Cold Water & Ambient Air',
        body: 'Hot water shocks natural cotton and flax fibers, causing unnecessary shrinkage and fiber weakness. Always wash in cold water (30°C or below). Avoid mechanical tumble dryers at all costs: the tumbling action breaks delicate slub yarns and creates friction pills. Dry your garments flat or on broad wooden hangers in open shade.'
      },
      {
        heading: 'Embrace the Natural Wrinkle',
        body: 'Linen and handspun khadi are celebrated across Milan and Tokyo precisely for their organic rumpled texture. It signals authenticity, ease, and quality. If you do wish to press, iron while the garment is slightly damp using gentle steam on the reverse side.'
      }
    ]
  }
];

// ----------------------------------------------------
// 6. CUSTOMER REVIEWS
// ----------------------------------------------------
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    author: 'Ananya Deshmukh',
    location: 'Mumbai, Maharashtra',
    verified: true,
    rating: 5,
    date: 'September 2026',
    title: 'The linen wrap dress is perfection',
    comment: 'I wore the Terracotta Linen Wrap Dress during a week in Goa. It kept me completely cool in 34°C humidity, feels like a second skin, and received endless compliments from friends. The craft quality is evident in every single stitch.',
    productName: 'Pure French Linen Wrap Midi Dress'
  },
  {
    id: 'rev-02',
    author: 'Dr. Siddharth Rao',
    location: 'Bengaluru, Karnataka',
    verified: true,
    rating: 5,
    date: 'August 2026',
    title: 'Outstanding handspun khadi shirt',
    comment: 'As someone with sensitive skin, finding genuine non-synthetic shirts was a struggle. Aranya Earth’s Khadi Mandarin Shirt is breathable, substantial, and the coconut buttons are a wonderful touch. Already ordered two more in Ecru and Indigo.',
    productName: 'Artisanal Khadi Mandarin Collar Shirt'
  },
  {
    id: 'rev-03',
    author: 'Tara Krishnamurthy',
    location: 'Chennai, Tamil Nadu',
    verified: true,
    rating: 5,
    date: 'August 2026',
    title: 'True slow fashion with deep soul',
    comment: 'The Jamdani kurta is literally a piece of wearable art. You can feel the patience of the Bengal weaver in the motifs. It arrived wrapped in unbleached organic cotton with a handwritten note. This is what clothing should feel like.',
    productName: 'Artisan Jamdani Handloom Kurta'
  },
  {
    id: 'rev-04',
    author: 'Vikramaditya Mehta',
    location: 'New Delhi',
    verified: true,
    rating: 5,
    date: 'July 2026',
    title: 'The hemp field overshirt will last 20 years',
    comment: 'Heavyweight, rugged, yet surprisingly comfortable. The four pockets are deeply practical for travel and outdoor architectural site visits. It has already softened after two washes.',
    productName: 'Wild Himalayan Hemp Field Overshirt'
  }
];

// ----------------------------------------------------
// 7. FAQS
// ----------------------------------------------------
export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-01',
    category: 'Shipping',
    question: 'How long does delivery take across India and internationally?',
    answer: 'Standard domestic delivery takes 3 to 5 business days for major metros (Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad) and 5 to 7 days for regional pin codes. Every order is packaged in 100% biodegradable, plastic-free paper mailers. We offer free delivery on orders above ₹2,499.'
  },
  {
    id: 'faq-02',
    category: 'Shipping',
    question: 'Do you offer Cash on Delivery (COD)?',
    answer: 'Yes, Cash on Delivery is available across 18,000+ pin codes in India for orders up to ₹10,000. For higher-value artisan pieces, we recommend secure online payments (UPI, credit/debit card, net banking) to guarantee priority courier dispatch.'
  },
  {
    id: 'faq-03',
    category: 'Returns & Exchanges',
    question: 'What is your return and exchange policy?',
    answer: 'We offer a hassle-free 14-day return and exchange window from the date of delivery. If the size or fit isn’t ideal, we arrange a doorstep reverse pickup at zero additional charge. Garments must be unworn, unwashed, with original fabric tags intact.'
  },
  {
    id: 'faq-04',
    category: 'Returns & Exchanges',
    question: 'How are refunds processed?',
    answer: 'Once our atelier inspects the returned item (within 48 hours of receipt), refunds are credited back to your original payment method (card/UPI) or issued via instant store credit. For COD orders, we transfer the refund directly to your bank account via UPI or IMPS.'
  },
  {
    id: 'faq-05',
    category: 'Sizing & Fit',
    question: 'How do I choose the right size? Are your silhouettes slim or relaxed?',
    answer: 'Most Aranya Earth garments are cut in generous, relaxed, and breathable silhouettes that honor natural ease. We provide precise garment measurements (bust/chest, waist, hip, shoulder, and length) in both inches and centimetres on every product page. If you are between sizes, we recommend sizing down for a closer fit or choosing your usual size for an airy relaxed drape.'
  },
  {
    id: 'faq-06',
    category: 'Sizing & Fit',
    question: 'Do you offer custom tailoring or bespoke sizing?',
    answer: 'Yes! Because every garment is produced in small batch ateliers, we can provide custom sleeve adjustments or length alterations. Simply contact our concierge via WhatsApp (+91 98108 76076) before or immediately after placing your order.'
  },
  {
    id: 'faq-07',
    category: 'Materials & Care',
    question: 'Why are there subtle slubs, specks, and color variations in my garment?',
    answer: 'These are the authentic hallmarks of human craftsmanship! Handspun yarn on a charkha naturally carries subtle thick and thin variations (slubs), and unbleached cotton retains tiny fragments of the cotton boll. Botanical dyes react to sunlight and ambient water, producing organic color depth that cannot be replicated by synthetic industrial machines.'
  },
  {
    id: 'faq-08',
    category: 'Materials & Care',
    question: 'Will natural indigo or madder root dye bleed onto other clothes?',
    answer: 'Genuine botanical indigo and madder are living pigments. For the very first wash, we advise washing the garment separately in cold water with a pinch of rock salt or mild soapberry liquid. Any excess surface pigment will rinse away, leaving a permanently bonded, luminous natural shade that will not rub off on everyday wear.'
  },
  {
    id: 'faq-09',
    category: 'Orders & Payment',
    question: 'Which payment methods are accepted?',
    answer: 'We accept all major Indian and international payment methods via secure SSL encrypted checkout: UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), Net Banking across 50+ banks, and Cash on Delivery.'
  },
  {
    id: 'faq-10',
    category: 'Orders & Payment',
    question: 'Can I cancel or modify my order after placing it?',
    answer: 'Orders can be modified or cancelled within 4 hours of placement by messaging our concierge on WhatsApp or emailing orders@aranyaearth.com before our fulfillment team prepares your plastic-free parcel.'
  }
];

// ----------------------------------------------------
// 8. SITE #76 BUSINESS WEBSITE OBJECT (FOR APP CONTEXT & ROUTING)
// ----------------------------------------------------
export const SITE_76_WEBSITE: BusinessWebsite = {
  id: 'site-76-aranya-earth',
  businessName: site76Config.BRAND_NAME,
  templateId: 'premium_natural_clothing_76',
  category: 'handicraft_store',
  slug: '76-aranya-earth',
  tagline: site76Config.TAGLINE,
  description: `${site76Config.BRAND_NAME} is an Indian conscious slow fashion atelier crafting timeless natural apparel from 100% GOTS organic cotton, pure European flax linen, wild Himalayan hemp, and authentic handspun khadi. Colored exclusively with botanical plant dyes and woven on traditional pit-looms by fair-trade artisan cooperatives.`,
  ownerName: site76Config.FOUNDER,
  city: 'New Delhi',
  address: site76Config.ADDRESS,
  phone: site76Config.PHONE,
  whatsapp: site76Config.WHATSAPP,
  email: site76Config.EMAIL,
  mapsUrl: 'https://maps.google.com/?q=Okhla+Phase+III+New+Delhi',
  openingHours: 'Mon-Sat: 10:00 AM - 7:00 PM IST',
  bookingType: 'whatsapp_order',
  bookingCtaLabel: 'Connect with Textile Concierge',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 2999,
  paymentStatus: 'paid',
  coverUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/images/logo.svg',
  primaryColor: site76Config.COLORS.charcoal,
  secondaryColor: site76Config.COLORS.terracotta,
  fontFamily: site76Config.FONTS.heading,
  sections: [
    { id: 'hero', title: 'Conscious Craftsmanship', isEnabled: true, order: 1 },
    { id: 'about', title: 'Philosophy & Story', isEnabled: true, order: 2 },
    { id: 'categories', title: 'Natural Wardrobe', isEnabled: true, order: 3 },
    { id: 'materials', title: 'Fiber & Dye Transparency', isEnabled: true, order: 4 },
    { id: 'craftsmanship', title: 'Artisan Heritage', isEnabled: true, order: 5 },
    { id: 'journal', title: 'Slow Living Journal', isEnabled: true, order: 6 },
    { id: 'testimonials', title: 'Customer Acclaim', isEnabled: true, order: 7 },
    { id: 'faq', title: 'Care & Sustainability FAQ', isEnabled: true, order: 8 }
  ],
  gallery: [
    { id: 'g-1', title: 'Linen Collection Lookbook', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g-2', title: 'Handloom Pit Weaving', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g-3', title: 'Botanical Indigo Vats', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80' }
  ],
  offers: [
    {
      id: 'offer-welcome',
      title: 'First Order Privilege',
      description: 'Receive 10% off your inaugural order with code ARANYA10',
      couponCode: 'ARANYA10',
      discountPercent: 10,
      validTill: '2026-12-31'
    }
  ],
  items: PRODUCTS_DATA.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    discountPrice: p.originalPrice,
    category: p.category,
    imageUrl: p.images[0],
    isAvailable: p.inStock
  })),
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z'
};

export default SITE_76_WEBSITE;
