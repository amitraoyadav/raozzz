import { BusinessWebsite } from '../types';

export interface GoldsGymLocation {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central';
  address: string;
  phone: string;
  email: string;
  gymType: 'GG Flagship' | 'GG Express' | 'GG Activ';
  zone: string;
  gender: 'Unisex';
  operatingHours: {
    weekdays: string;
    sunday: string;
  };
  annualPrice: number;
  monthlyPrice: number;
  featuredImage: string;
  galleryImages: string[];
  amenities: string[];
  description: string;
  isPreSale?: boolean;
  isComingSoon?: boolean;
}

export interface GoldsGymCourse {
  id: string;
  title: string;
  code: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  duration: string;
  price: number;
  originalPrice: number;
  certification: string;
  description: string;
  image: string;
  highlights: string[];
  syllabus: string[];
}

export interface GoldsGymProgram {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

export interface GoldsGymEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'Convention' | 'Fitness Expo' | 'Championship' | 'Community';
  description: string;
  image: string;
}

export interface GoldsGymBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Fitness Science' | 'Nutrition' | 'Workout Routines' | 'Lifestyle';
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export interface GoldsGymTestimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  achievement: string;
  avatar: string;
}

export const GOLDS_GYM_LOCATIONS: GoldsGymLocation[] = [
  {
    id: 'gg-mum-bandra',
    name: "Gold's Gym Mumbai Bandra",
    slug: 'golds-gym-mumbai-bandra',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    address: 'Bandra West, Pali Hill Road, Near Turner Road Junction, Mumbai, Maharashtra 400050',
    phone: '+91 22 2640 1234',
    email: 'bandra@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'Mumbai Western Suburbs',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 11:00 PM',
      sunday: '8:00 AM – 8:00 PM'
    },
    annualPrice: 38000,
    monthlyPrice: 5500,
    featuredImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Life Fitness Cardio', 'Hammer Strength Free Weights', 'Steam & Sauna', 'Spinning Studio', 'Nutritionist', 'Valet Parking', 'Locker & Showers', 'Physiotherapy Room'],
    description: "The crown jewel of fitness in Bandra. Spanning over 12,000 sq ft across 3 air-conditioned levels, Gold's Gym Bandra has been the workout home of Bollywood celebrities, top athletes, and fitness enthusiasts since 2002."
  },
  {
    id: 'gg-del-gk',
    name: "Gold's Gym Delhi Greater Kailash",
    slug: 'golds-gym-delhi-greater-kailash',
    city: 'New Delhi',
    state: 'Delhi NCR',
    region: 'North',
    address: 'M-Block Market, Greater Kailash 2 (GK-2), New Delhi, Delhi 110048',
    phone: '+91 11 4163 5678',
    email: 'gk2@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'South Delhi',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:30 PM',
      sunday: '7:00 AM – 7:00 PM'
    },
    annualPrice: 36000,
    monthlyPrice: 5200,
    featuredImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Olympic Lifting Platforms', 'TRX Suspension Zone', 'Cardio Cinema', 'Steam & Sauna', 'Juice Bar', 'Certified Personal Trainers', 'Travel Pass Accepted'],
    description: "Premier fitness sanctuary in South Delhi equipped with global-standard biomechanical equipment, group exercise studios for Zumba & Yoga, and luxury wellness lounges."
  },
  {
    id: 'gg-blr-indiranagar',
    name: "Gold's Gym Bengaluru Indiranagar",
    slug: 'golds-gym-bengaluru-indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    region: 'South',
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    phone: '+91 80 4125 9876',
    email: 'indiranagar@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'East Bengaluru',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '5:30 AM – 11:00 PM',
      sunday: '7:00 AM – 8:00 PM'
    },
    annualPrice: 34000,
    monthlyPrice: 4900,
    featuredImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Functional Cross-Training Turf', 'Body Composition Analyzer', 'Spinning Arena', 'Steam Rooms', 'Protein Shake Bar', 'Private Lockers'],
    description: "Located on prestigious 100ft Road Indiranagar, featuring a massive open-span strength floor, dedicated HIIT turf, and certified elite trainers guiding your fitness transformation."
  },
  {
    id: 'gg-pune-kalyani',
    name: "Gold's Gym Pune Kalyani Nagar",
    slug: 'golds-gym-pune-kalyaninagar',
    city: 'Pune',
    state: 'Maharashtra',
    region: 'West',
    address: 'Fortaleza Complex, Central Avenue, Kalyani Nagar, Pune, Maharashtra 411006',
    phone: '+91 20 6609 4521',
    email: 'kalyaninagar@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'East Pune',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:30 PM',
      sunday: '8:00 AM – 6:00 PM'
    },
    annualPrice: 31000,
    monthlyPrice: 4500,
    featuredImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Hammer Strength Zone', 'Zumba & Bollywood Dance Studio', 'Steam & Locker', 'Nutrition Consulting', 'Free WiFi', 'Covered Parking'],
    description: "One of Pune's most beloved fitness landmarks. Boasting cutting-edge resistance training stations, invigorating GGX group classes, and a warm, supportive fitness community."
  },
  {
    id: 'gg-hyd-banjara',
    name: "Gold's Gym Hyderabad Banjara Hills",
    slug: 'golds-gym-hyderabad-banjara-hills',
    city: 'Hyderabad',
    state: 'Telangana',
    region: 'South',
    address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 40 2339 8899',
    email: 'banjarahills@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'Central Hyderabad',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:30 PM',
      sunday: '7:30 AM – 7:30 PM'
    },
    annualPrice: 35000,
    monthlyPrice: 5000,
    featuredImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['World-Class Life Fitness Cardio', 'Powerlifting Racks', 'Aerobics Studio', 'Steam & Sauna', 'Diet Clinic', 'Valet Parking'],
    description: "High-end luxury fitness center situated on Road No. 12 Banjara Hills. Designed with superior acoustics, imported biomechanical machinery, and certified strength coaches."
  },
  {
    id: 'gg-sonipat-sec14',
    name: "Gold's Gym Sonipat Sector 14",
    slug: 'golds-gym-sonipat-sector-14',
    city: 'Sonipat',
    state: 'Haryana',
    region: 'North',
    address: 'Plot No. 18, Commercial Belt, Sector 14, Sonipat, Haryana 131001',
    phone: '+91 130 223 4567',
    email: 'sonipat@goldsgym.in',
    gymType: 'GG Express',
    zone: 'Sonipat City',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:00 PM',
      sunday: '8:00 AM – 6:00 PM'
    },
    annualPrice: 23000,
    monthlyPrice: 3500,
    featuredImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Strength Floor', 'Cardio Section', 'Personal Training', 'Steam Room', 'Air Conditioned', 'Lockers'],
    description: "Official pre-sale launch club offering cutting-edge fitness infrastructure to Sonipat at an exclusive introductory founder membership rate.",
    isPreSale: true
  },
  {
    id: 'gg-pune-chakan',
    name: "Gold's Gym Pune Chakan",
    slug: 'golds-gym-pune-chakan',
    city: 'Pune',
    state: 'Maharashtra',
    region: 'West',
    address: 'Near Talegaon Chowk, Pune-Nashik Highway, Chakan, Pune, Maharashtra 410501',
    phone: '+91 2135 249 100',
    email: 'chakan@goldsgym.in',
    gymType: 'GG Express',
    zone: 'Industrial Pune North',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '5:30 AM – 10:00 PM',
      sunday: '7:00 AM – 5:00 PM'
    },
    annualPrice: 26000,
    monthlyPrice: 3800,
    featuredImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Cardio Training', 'Heavy Free Weights', 'Cross-Training Zone', 'Shower & Changing Rooms', 'Parking Space'],
    description: "Serving the bustling industrial corridor of Chakan with premium fitness standards, high-end imported machines, and certified fitness guidance."
  },
  {
    id: 'gg-mohali-pb',
    name: "Gold's Gym Mohali Punjab",
    slug: 'golds-gym-mohali-punjab',
    city: 'Mohali',
    state: 'Punjab',
    region: 'North',
    address: 'Phase 7, Industrial Area, Sector 73, SAS Nagar, Mohali, Punjab 160055',
    phone: '+91 172 509 8811',
    email: 'mohali@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'Tricity',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:30 PM',
      sunday: '8:00 AM – 6:00 PM'
    },
    annualPrice: 28000,
    monthlyPrice: 4200,
    featuredImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Grand Strength Arena', 'Les Mills Certified Group Workouts', 'Steam & Sauna', 'Recovery Zone', 'Locker Rooms'],
    description: "Coming soon to Mohali! A sprawling 14,000 sq ft fitness facility ready to redefine physical training in the Tricity region with VIP amenities.",
    isComingSoon: true
  },
  {
    id: 'gg-pune-kothrud',
    name: "Gold's Gym MIT Kothrud Pune",
    slug: 'golds-gym-mit-kothrud-pune',
    city: 'Pune',
    state: 'Maharashtra',
    region: 'West',
    address: 'Paud Road, Near MIT College Campus, Kothrud, Pune, Maharashtra 411038',
    phone: '+91 20 2544 7722',
    email: 'kothrud@goldsgym.in',
    gymType: 'GG Activ',
    zone: 'West Pune',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:30 PM',
      sunday: '8:00 AM – 7:00 PM'
    },
    annualPrice: 27000,
    monthlyPrice: 3900,
    featuredImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Student Discount Plans', 'Functional Strength Hub', 'Zumba & Yoga', 'Steam', 'Personal Training'],
    description: "Coming soon to Kothrud student & tech hub! Energetic GG Activ format tailored for active youth, working professionals, and health seekers.",
    isComingSoon: true
  },
  {
    id: 'gg-kol-saltlake',
    name: "Gold's Gym Kolkata Salt Lake",
    slug: 'golds-gym-kolkata-salt-lake',
    city: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    address: 'Sector 5, Salt Lake City, Near Webel Bhawan, Kolkata, West Bengal 700091',
    phone: '+91 33 4004 8833',
    email: 'saltlake@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'Salt Lake Tech Hub',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 10:00 PM',
      sunday: '8:00 AM – 6:00 PM'
    },
    annualPrice: 32000,
    monthlyPrice: 4700,
    featuredImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Life Fitness Cardio Suite', 'Power Racks', 'Yoga & Pilates', 'Steam & Locker', 'Health Cafe'],
    description: "Kolkata's landmark wellness destination in the IT epicenter. Designed for corporate achievers and dedicated bodybuilders seeking unmatched workout standards."
  },
  {
    id: 'gg-chn-alwarpet',
    name: "Gold's Gym Chennai Alwarpet",
    slug: 'golds-gym-chennai-alwarpet',
    city: 'Chennai',
    state: 'Tamil Nadu',
    region: 'South',
    address: 'TTK Road, Alwarpet, Near Music Academy, Chennai, Tamil Nadu 600018',
    phone: '+91 44 2499 6655',
    email: 'alwarpet@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'Central Chennai',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '5:30 AM – 10:30 PM',
      sunday: '7:00 AM – 7:00 PM'
    },
    annualPrice: 33000,
    monthlyPrice: 4800,
    featuredImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Imported Plate-Loaded Machines', 'Aerobics & Spinning Studio', 'Steam', 'Locker & Towel Service', 'Personal Training'],
    description: "Premium fitness club in central Chennai with state-of-the-art strength training, cardiovascular equipment, certified personal instructors, and hygienic locker amenities."
  },
  {
    id: 'gg-ahmd-sg',
    name: "Gold's Gym Ahmedabad SG Highway",
    slug: 'golds-gym-ahmedabad-sg-highway',
    city: 'Ahmedabad',
    state: 'Gujarat',
    region: 'West',
    address: 'SG Highway, Bodakdev, Near Iscon Cross Road, Ahmedabad, Gujarat 380054',
    phone: '+91 79 4005 3322',
    email: 'sghighway@goldsgym.in',
    gymType: 'GG Flagship',
    zone: 'West Ahmedabad',
    gender: 'Unisex',
    operatingHours: {
      weekdays: '6:00 AM – 11:00 PM',
      sunday: '7:00 AM – 8:00 PM'
    },
    annualPrice: 32000,
    monthlyPrice: 4600,
    featuredImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['15,000 sq ft Floor', 'Hammer Strength Equipment', 'Steam & Sauna', 'Diet & Nutrition Lounge', 'Valet Parking'],
    description: "Gujarat's premier fitness powerhouse. Packed with international lifting gear, expansive cardio decks, and certified dietitians helping thousands transform their physique."
  }
];

export const GOLDS_GYM_COURSES: GoldsGymCourse[] = [
  {
    id: 'ggfi-mpt',
    title: 'Master Personal Trainer (MPT) Certification',
    code: 'GGFI-MPT-01',
    mode: 'Hybrid',
    duration: '6 Months (240 Hours)',
    price: 65000,
    originalPrice: 85000,
    certification: 'GGFI International & Government Skill India Recognized',
    description: 'Comprehensive flagship diploma covering exercise physiology, biomechanics, functional anatomy, advanced client screening, injury management, and business marketing for fitness coaches.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '100% Guaranteed Job Placement Assistance at Gold’s Gym India',
      'Hands-on Practical Training on Life Fitness & Hammer Strength',
      'Nutritional Biochemistry & Periodization Modules',
      'CPR, AED & First Aid Emergency Certification Included'
    ],
    syllabus: [
      'Anatomy & Kinesiology of Human Movement',
      'Bioenergetics & Exercise Physiology',
      'Advanced Resistance Training Techniques',
      'Sports Nutrition & Ergogenic Aids',
      'Client Consultation & Fitness Assessment',
      'Special Populations & Post-Rehab Training',
      'Gym Business, Marketing & Client Retention'
    ]
  },
  {
    id: 'ggfi-cpt',
    title: 'Certified Personal Trainer (CPT)',
    code: 'GGFI-CPT-02',
    mode: 'Offline',
    duration: '3 Months (120 Hours)',
    price: 38000,
    originalPrice: 50000,
    certification: 'GGFI Certified Personal Trainer',
    description: 'The golden standard certification for aspiring gym instructors and gym trainers. Learn how to design tailored workout protocols, correct lifting posture, and motivate clients.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Recognized by top gyms across India and GCC countries',
      '60 Hours Classroom Theory + 60 Hours Floor Practical',
      'Mentorship by Gold’s Gym Master Trainers',
      'Internship at Gold’s Gym branches'
    ],
    syllabus: [
      'Fundamentals of Strength Training',
      'Cardiorespiratory Conditioning',
      'Flexibility & Mobility Programming',
      'Exercise Execution & Form Correction',
      'Basic Nutrition & Diet Planning'
    ]
  },
  {
    id: 'ggfi-ace-prep',
    title: 'ACE (American Council on Exercise) Prep Course',
    code: 'GGFI-ACE-03',
    mode: 'Online',
    duration: '2 Months (60 Hours Live)',
    price: 28000,
    originalPrice: 38000,
    certification: 'ACE Global CPT Exam Preparation',
    description: 'Gold’s Gym is an authorized educational partner for ACE in India. Prepare for the prestigious NCCA-accredited ACE Personal Trainer examination with expert faculty.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Official ACE Study Manuals & Practice Question Banks',
      'Live Online Classes with Interactive Q&A',
      'Mock Examinations & Case Study Analysis',
      'International Credential Valid in 80+ Countries'
    ],
    syllabus: [
      'The ACE Integrated Fitness Training (IFT) Model',
      'Movement Training & Load Conditioning',
      'Behavior Change & Motivational Interviewing',
      'Scope of Practice & Legal Guidelines'
    ]
  },
  {
    id: 'ggfi-sports-nutrition',
    title: 'Sports & Clinical Nutrition Specialist',
    code: 'GGFI-NUT-04',
    mode: 'Online',
    duration: '6 Weeks (40 Hours)',
    price: 22000,
    originalPrice: 30000,
    certification: 'GGFI Certified Sports Nutritionist',
    description: 'Deep-dive into macronutrient cycling, metabolic calculations, body re-composition diets, hydration strategies, and supplement safety for athletes and fitness enthusiasts.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Meal Planning Software Training',
      'Evidence-based Supplement Guide',
      'Vegetarian & Indian Diet Case Studies',
      'Fat Loss vs Hypertrophy Protocols'
    ],
    syllabus: [
      'Macronutrients & Micronutrient Metabolism',
      'BMR, TDEE & Caloric Calculations',
      'Pre, Intra & Post Workout Nutrition',
      'Supplementation Truths & Myths',
      'Clinical Conditions: Diabetes, PCOS & Thyroid Management'
    ]
  },
  {
    id: 'ggfi-functional',
    title: 'Functional Training & Kettlebell Masterclass',
    code: 'GGFI-SC-05',
    mode: 'Offline',
    duration: '4 Weeks Weekend Batch',
    price: 15000,
    originalPrice: 20000,
    certification: 'GGFI Functional Movement Specialist',
    description: 'Short course on mastering kettlebells, battle ropes, medicine balls, sleds, and suspension trainers to program high-intensity athletic conditioning.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Intensive Weekend Practical Workshops',
      'Kettlebell Hardstyle Swing & Snatch Coaching',
      'Mobility & Core Stability Flow Protocols',
      'Small Group Class Programming'
    ],
    syllabus: [
      'Fundamental Movement Patterns',
      'Kettlebell Mechanics & Progression',
      'Metabolic Conditioning Circuits',
      'Warm-up & Recovery Integration'
    ]
  }
];

export const GOLDS_GYM_PROGRAMS: GoldsGymProgram[] = [
  {
    id: 'prog-personal-training',
    title: 'Personal Training Program',
    tagline: 'Goal-Oriented 1-on-1 Transformation',
    description: 'Gold’s Gym India is globally renowned for producing elite personal trainers who deliver results. Whether you want to lose body fat, build lean muscle mass, prepare for competitive sports, or recover from joint issues, our certified trainers design tailored protocols and monitor every repetition.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    features: [
      'Dedicated Certified Fitness Coach',
      'Periodic Body Composition & InBody Testing',
      'Personalized Workout & Cardio Schedules',
      'Custom Diet & Nutrition Counselling',
      'Form & Posture Correction on Every Lift'
    ],
    benefits: [
      'Faster, sustainable weight loss and muscle gain',
      'Minimizes injury risk through expert spot and cueing',
      'High accountability and continuous motivation',
      'Programs adapted to your lifestyle, travels and schedule'
    ]
  },
  {
    id: 'prog-group-exercise',
    title: 'Group Exercise Program (GGX Studio)',
    tagline: 'High Energy Community Workouts',
    description: 'GGX Studio brings together energizing group workouts guided by dynamic certified instructors. Set to pumping playlists in dedicated soundproof studios, you burn hundreds of calories while having an absolute blast.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    features: [
      'Zumba & Bollywood Dance Fitness',
      'Power Yoga & Vinyasa Flow',
      'Spinning / Indoor Cycling Arena',
      'HIIT & Circuit Conditioning',
      'Pilates Core Sculpting'
    ],
    benefits: [
      'Torch 500-800 calories per session',
      'Supportive, electrifying community vibe',
      'Break fitness plateaus through routine variety',
      'Open to all fitness levels from beginners to advanced'
    ]
  },
  {
    id: 'prog-corporate-wellness',
    title: 'Corporate Wellness & Memberships',
    tagline: 'Empowering India’s Healthiest Workforces',
    description: 'Don’t have time to go to the gym? We get the gym to you! Gold’s Gym India partners with over 500 top corporations to deliver corporate fitness programs that slash absenteeism, boost employee energy, and build positive corporate culture.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    features: [
      'Exclusive Corporate Membership Rates for Employees & Families',
      'On-site Health Kiosks & BMI Screening Camps',
      'Deskercise & Ergonomic Posture Seminars',
      'Corporate Step Challenges & Sports Tournaments',
      'Digital Fitness & Nutrition Webinars'
    ],
    benefits: [
      'Reduced medical insurance claims and sick leaves',
      'Enhanced employee engagement and productivity',
      'Elevated employer brand and wellness perks',
      'Pan-India multi-location employee access'
    ]
  }
];

export const GOLDS_GYM_MEMBERSHIP_PLANS = [
  {
    id: 'plan-1-month',
    name: '1 Month Kickstart Pass',
    price: 4999,
    duration: '1 Month',
    badge: 'Starter',
    features: [
      'Unlimited Gym Floor & Cardio Access',
      'Access to 1 Home Club',
      'Complimentary Fitness Assessment',
      'Locker & Shower Facility',
      'Steam Room Access'
    ]
  },
  {
    id: 'plan-3-months',
    name: '3 Months Momentum Plan',
    price: 12999,
    duration: '3 Months',
    badge: 'Popular',
    features: [
      'Unlimited Gym Floor & Cardio Access',
      'Access to Home Club',
      '1 Free Personal Training Session',
      'Diet & Nutrition Guideline Session',
      'Unlimited GGX Group Classes (Zumba/Yoga/HIIT)',
      'Steam & Locker Facility'
    ]
  },
  {
    id: 'plan-6-months',
    name: '6 Months Transformation Plan',
    price: 21999,
    duration: '6 Months',
    badge: 'Value',
    features: [
      'Unlimited Gym Floor Access',
      '2 Free Personal Training Sessions',
      'Monthly InBody Body Composition Scans',
      'Unlimited GGX Studio Group Classes',
      '5 Domestic Gold’s Gym Travel Passes',
      '15 Days Membership Freeze Facility'
    ]
  },
  {
    id: 'plan-1-year-classic',
    name: '1 Year Annual Classic Pass',
    price: 32000,
    duration: '12 Months',
    badge: 'Best Value',
    features: [
      'Unlimited 365-Day Access to Home Club',
      '3 Complimentary 1-on-1 Personal Training Sessions',
      'Bi-Monthly Nutrition Consultations',
      '14 Domestic & International Travel Passes',
      'Unlimited GGX Group Exercise Classes',
      '30 Days Free Membership Freeze Facility',
      'Official Gold’s Gym Merchandise Welcome Kit'
    ]
  },
  {
    id: 'plan-1-year-passport',
    name: '1 Year All-India Gold Passport',
    price: 42000,
    duration: '12 Months',
    badge: 'VIP All Access',
    features: [
      'Unlimited Access to All 156+ Gold’s Gyms Across 95 Cities in India',
      'International Travel Privileges in Gold’s Gym USA, GCC & Asia',
      '5 Dedicated Personal Training Sessions',
      'Quarterly Complete Medical & Fitness Evaluation',
      'Priority Locker & Valet Services',
      '60 Days Membership Freeze Option',
      'Free Access to Special Masterclasses & Events'
    ]
  }
];

export const GOLDS_GYM_BLOGS: GoldsGymBlog[] = [
  {
    id: 'blog-1',
    title: 'The Science of the “Second Half”: Why Recovery Is the Real Competitive Edge in Professional Sports',
    slug: 'science-of-recovery-competitive-edge',
    category: 'Fitness Science',
    date: 'February 24, 2026',
    author: 'Dr. Rahul Sharma, GGFI Sports Scientist',
    readTime: '5 min read',
    excerpt: 'Training breaks down muscle tissue; recovery rebuilds it stronger. Discover the physiological mechanisms of sleep, cold contrast, and active recovery.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    content: `In the world of high-performance athletics and dedicated fitness enthusiasts, workout intensity often takes the spotlight. We pride ourselves on heavy deadlifts, high heart-rate intervals, and pushing past fatigue. However, elite sports science over the last decade has proven unequivocally that your gains do not happen on the gym floor—they happen while you recover.

When you lift weights, you create microscopic tears in actin and myosin filaments and deplete intracellular glycogen stores. Without adequate sleep (specifically Slow-Wave Sleep where Human Growth Hormone surges), targeted nutrition, and tissue mobilization, chronic overtraining sets in.

Key recovery pillars practiced at Gold's Gym:
1. Sleep Hygiene: Minimum 7-8 hours in dark, cool environments.
2. Nutrient Timing: 20-30g of high biological value protein consumed within 45 minutes of training.
3. Active Flushes: Low-intensity steady state cycling or walking to circulate blood without elevating cortisol.
4. Soft Tissue Work: Foam rolling, percussive therapy, and mobility drills to restore myofascial elasticity.`
  },
  {
    id: 'blog-2',
    title: 'Evidence-Based Approaches to Improve Nutrition Without Calorie Counting',
    slug: 'evidence-based-nutrition-without-counting',
    category: 'Nutrition',
    date: 'February 12, 2026',
    author: 'Priya Narang, Lead Sports Nutritionist',
    readTime: '6 min read',
    excerpt: 'Obsessive calorie counting can lead to burnout. Here is how mindful portion control, protein pacing, and fiber density can transform body composition sustainably.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    content: `While the first law of thermodynamics (calories in versus calories out) governs weight management, obsessively logging every gram of cumin and oil into an app often leads to dietary burnout and unhealthy psychological relationships with food.

At Gold’s Gym, we teach our members the Hand Portion Method:
- Palm = 1 serving of dense protein (chicken, paneer, tofu, fish, eggs)
- Fist = 1 serving of fibrous vegetables (broccoli, spinach, cucumber, beans)
- Cupped Hand = 1 serving of carbohydrates (rice, roti, oats, sweet potatoes)
- Thumb = 1 serving of healthy fats (olive oil, almonds, seeds, peanut butter)

By pacing protein intake every 3-4 hours and drinking 3-4 liters of water daily, you control satiety hormones like ghrelin and leptin naturally while retaining lean mass during fat loss.`
  },
  {
    id: 'blog-3',
    title: '5 Core Compound Movements Everyone Must Master in the Gym',
    slug: '5-core-compound-movements',
    category: 'Workout Routines',
    date: 'January 28, 2026',
    author: 'Vikram Rajput, Master Coach',
    readTime: '4 min read',
    excerpt: 'Isolation exercises have their place, but compound multi-joint lifts form the bedrock of raw strength, bone density, and hormonal vitality.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    content: `If you only had time for five exercises in your weekly routine, what should they be? The human body is designed to move as an integrated kinetic chain. Multi-joint compound lifts recruit maximum motor units, trigger anabolic hormonal responses, and build practical functional capacity.

1. The Barbell Back Squat (King of Lower Body)
2. The Conventional Deadlift (Posterior Chain Powerhouse)
3. The Barbell Overhead Press (Shoulder Stability & Core Strength)
4. The Flat or Incline Bench Press (Horizontal Push Mastery)
5. The Pull-Up / Barbell Bent-Over Row (Back Density & Scapular Health)

Master these with proper hip hinges, neutral spinal alignment, and full range of motion before loading maximal weights.`
  }
];

export const GOLDS_GYM_TESTIMONIALS: GoldsGymTestimonial[] = [
  {
    id: 'test-1',
    name: 'Mayur Abnave',
    location: 'Gold’s Gym Pune Kalyani Nagar',
    quote: "It's a very nice gym with world top class equipment of Life Fitness and Hammer Strength. The staff of this branch is very kind, they help members very well and all the trainers are certified with good knowledge of teaching. Good place to achieve your goals!",
    rating: 5,
    achievement: 'Lost 18 kg & built lean muscle',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Utkrisht Kaushik',
    location: 'Gold’s Gym Delhi GK-2',
    quote: "So this place is more than just a gym. You can walk in and make friends that will guide you and help you out each time. They have great programs such as kickboxing, yoga, Zumba etc that you can opt for to change the routine once in a while. Dedicated cardio and spinning sections with mood lighting and good instructors.",
    rating: 5,
    achievement: 'Completed First Half Marathon',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Natasha Mondegari',
    location: 'Gold’s Gym Mumbai Bandra',
    quote: "Amazing staff! Hygiene is always a priority here. There are lockers to keep our bags. The personal trainers are extremely helpful. I have been training under Pranay Bane and sir has been most motivating throughout my fitness journey.",
    rating: 5,
    achievement: 'Overcame Chronic Back Pain',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const GOLDS_GYM_EVENTS: GoldsGymEvent[] = [
  {
    id: 'event-bkk-2023',
    title: 'Gold’s Gym Annual Convention - Bangkok',
    date: 'October 14-17, 2023',
    location: 'Bangkok Convention Centre, Thailand',
    category: 'Convention',
    description: 'The premier annual gathering of franchise partners, master trainers, international delegates, and bodybuilding champions to celebrate milestones and unveil technological advancements.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'event-dubai-2022',
    title: 'Gold’s Gym Leadership Summit - Dubai',
    date: 'November 20-23, 2022',
    location: 'Dubai World Trade Centre, UAE',
    category: 'Convention',
    description: 'Bringing together fitness executives and global fitness legends to discuss holistic wellness, expansion across South Asia, and youth athlete incubation.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'event-fitexpo-2025',
    title: 'IHFF Fitness Expo & Classic Bodybuilding Championship',
    date: 'December 5-7, 2025',
    location: 'Pragati Maidan, New Delhi',
    category: 'Fitness Expo',
    description: 'Gold’s Gym India powered the national stage featuring 800+ national athletes, live powerlifting challenges, and GGFI trainer certification workshops.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  }
];

export const GOLDS_GYM_GALLERY_IMAGES = [
  {
    id: 'gal-1',
    title: 'Strength Training Arena',
    category: 'Gym Floor',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-2',
    title: 'Cardio Deck & Treadmill Row',
    category: 'Cardio Deck',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-3',
    title: 'Free Weights & Dumbbells Zone',
    category: 'Free Weights',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-4',
    title: 'GGX Studio Zumba Session',
    category: 'Group Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-5',
    title: 'Personal Training 1-on-1 Coaching',
    category: 'Personal Training',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-6',
    title: 'Spinning Studio RPM Class',
    category: 'Group Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-7',
    title: 'Olympic Lifting & Power Racks',
    category: 'Strength Floor',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gal-8',
    title: 'GGFI Institute Classroom & Practical Training',
    category: 'Institute',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=80'
  }
];

export const GOLDS_GYM_WEBSITE: BusinessWebsite = {
  id: 'site-golds-gym',
  slug: 'golds-gym',
  businessName: "Gold's Gym",
  tagline: "The Mecca of Bodybuilding & Fitness · 150+ Gyms Across 95 Cities in India",
  description: "Gold’s Gym India is a trusted fitness center with 150+ gyms and a leading fitness institute (GGFI) across India. Featuring world-class Life Fitness and Hammer Strength equipment, group fitness classes, certified personal training, and corporate wellness programs.",
  category: 'gym_fitness' as any,
  phone: '+91 22 2640 1234',
  whatsapp: '+91 98200 12345',
  email: 'customer.care@goldsgym.in',
  address: "Gold's Gym India Corporate HQ, F2 Fun & Fitness India Pvt. Ltd., Turner Road, Bandra West, Mumbai, Maharashtra 400050",
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Golds+Gym+India+Bandra+Mumbai',
  openingHours: 'Mon - Sat: 6:00 AM – 10:30 PM | Sun: 8:00 AM – 8:00 PM',
  coverUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
  primaryColor: '#FFE400', // Iconic Gold's Gym Yellow
  secondaryColor: '#000000', // Pure Black
  fontFamily: 'Montserrat, sans-serif',
  bookingType: 'appointment_slot',
  bookingCtaLabel: 'View Demo',
  specialBadge: '150+ Gyms Across 95 Cities · Legacy Since 1965',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Home Page Slider', isEnabled: true, order: 1 },
    { id: 'stats', title: 'What Makes Us Different', isEnabled: true, order: 2 },
    { id: 'legacy', title: 'Our Legacy', isEnabled: true, order: 3 },
    { id: 'verticals', title: 'Our Business Verticals', isEnabled: true, order: 4 },
    { id: 'freetrial', title: 'Book Your Free Trial', isEnabled: true, order: 5 },
    { id: 'formats', title: 'Club Formats', isEnabled: true, order: 6 },
    { id: 'presale', title: 'Pre Sale', isEnabled: true, order: 7 },
    { id: 'comingsoon', title: 'Gyms Coming Soon', isEnabled: true, order: 8 },
    { id: 'programs', title: 'Our Programs', isEnabled: true, order: 9 },
    { id: 'ggfi', title: 'Fitness Institute (GGFI)', isEnabled: true, order: 10 },
    { id: 'testimonials', title: 'Testimonials', isEnabled: true, order: 11 },
    { id: 'contact', title: 'Get In Touch', isEnabled: true, order: 12 }
  ],
  offers: [
    {
      id: 'gg-offer-freetrial',
      title: 'Free 1-Day VIP Workout Pass',
      description: 'Experience world-class Life Fitness & Hammer Strength equipment with zero commitments.',
      discountPercent: 100,
      couponCode: 'FREETRIAL',
      isActive: true
    },
    {
      id: 'gg-offer-annual',
      title: 'Special Annual Membership Offer',
      description: 'Get up to 25% off on 1-Year All-India memberships + 14 Free Travel Passes.',
      discountPercent: 25,
      couponCode: 'GOLDSGOLD',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gg-gal-1',
      title: 'World-Class Life Fitness Strength Floor',
      category: 'equipment',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=720'
    },
    {
      id: 'gg-gal-2',
      title: 'Hammer Strength Plate Loaded Area',
      category: 'weights',
      imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=720'
    },
    {
      id: 'gg-gal-3',
      title: 'GGX Studio Dynamic Group Workouts',
      category: 'classes',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=720'
    },
    {
      id: 'gg-gal-4',
      title: 'Certified Personal Training Guidance',
      category: 'training',
      imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=720'
    }
  ],
  items: [
    {
      id: 'item-annual-membership',
      name: "Gold's Gym 1-Year Annual Classic Membership",
      category: 'Membership',
      price: 32000,
      description: '365 days unlimited workout access, 3 personal training sessions, travel pass privileges, and full group exercise class access.',
      isAvailable: true,
      badge: 'Best Value'
    },
    {
      id: 'item-quarterly-membership',
      name: "Gold's Gym 3-Month Momentum Membership",
      category: 'Membership',
      price: 12999,
      description: '90 days access to gym floor, group exercise studio, nutrition guidelines, and locker amenities.',
      isAvailable: true,
      badge: 'Popular'
    },
    {
      id: 'item-ggfi-mpt',
      name: 'GGFI Master Personal Trainer Certification Course',
      category: 'GGFI Course',
      price: 65000,
      description: '6-Month diploma with 100% job placement assistance, practical floor hours, and internationally recognized certification.',
      isAvailable: true,
      badge: 'Career Diploma'
    },
    {
      id: 'item-free-trial',
      name: "Gold's Gym 1-Day VIP Trial Pass",
      category: 'Trial',
      price: 0,
      description: 'Full complimentary day pass to experience Gold’s Gym equipment, steam & shower, and group class.',
      isAvailable: true,
      badge: 'Free'
    }
  ]
};
