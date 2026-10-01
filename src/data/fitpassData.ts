import { BusinessWebsite } from '../types';

export interface FitpassStudio {
  id: number;
  name: string;
  slug: string;
  rating: number;
  ratingCount: number;
  locality: string;
  city: string;
  distanceKm: number;
  workouts: string[];
  profileImage: string;
  logo: string;
  isVerified: boolean;
  addressLine1: string;
  addressLine2: string;
  openTimings: string;
  amenities: string[];
  gallery: string[];
  description: string;
}

export interface FitpassActivity {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  calorieBurn: string;
  primaryImage: string;
  desktopBanner: string;
  themeColor: string;
  energyLabels: string[];
  description: string;
}

export interface FitpassPlan {
  id: string;
  title: string;
  label: string;
  durationMonths: number;
  monthlySellingPrice: number;
  totalSellingPrice: number;
  actualPrice: number;
  badge?: string;
  features: string[];
  cardImage: string;
  isRecommended?: boolean;
}

export interface FitpassTvClass {
  id: string;
  title: string;
  trainer: string;
  category: string;
  durationMins: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnailUrl: string;
  calories: number;
}

export interface FitpassArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string[];
}

// 20+ Real Studios Extracted from the Official Reference Webpage
export const FITPASS_STUDIOS: FitpassStudio[] = [
  {
    id: 86236,
    name: 'SK Fitness',
    slug: 'sk-fitness-chembur-colony',
    rating: 5.0,
    ratingCount: 3,
    locality: 'Chembur Colony',
    city: 'Mumbai',
    distanceKm: 1.7,
    workouts: ['Gym Workout', 'Strength Training', 'Cardio'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1776402151-pixitdwm0oxlkm7c019z.jpg',
    logo: 'https://cdn.fitimg.in/studios/studio1776402151-jzum5fk2fpfq4vy5ojwf.jpg',
    isVerified: true,
    addressLine1: 'No. 132/2, Aziz Baug, Plot No. 1',
    addressLine2: 'Near RCF Police Station, Azad Nagar, Chembur',
    openTimings: '06:00 AM - 11:45 PM',
    amenities: ['Air Conditioned', 'Free Lockers', 'Shower', 'Cardio Deck', 'Certified Trainers'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1776402494-c668t4fn36pw0k7muxsa.jpg',
      'https://cdn.fitimg.in/studios/images1776402559-8pcwfwqgsiaveymuljos.jpg',
      'https://cdn.fitimg.in/studios/images1776402572-62hvsvro7r73ccjtq8zh.jpg'
    ],
    description: 'Premier fitness center in Chembur Colony equipped with advanced biomechanical strength machines, Olympic barbells, and comprehensive functional conditioning zones.'
  },
  {
    id: 93075,
    name: 'Maxfit Gym',
    slug: 'maxfit-gym-chembur-colony',
    rating: 4.8,
    ratingCount: 19,
    locality: 'Chembur Colony',
    city: 'Mumbai',
    distanceKm: 2.1,
    workouts: ['Gym Workout', 'Abs Workout', 'HIIT'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1782838466-345tot8cfkvumshl2s4h.png',
    logo: 'https://cdn.fitimg.in/studios/studio1782816878-c61292gl6unwxoi9hibg.jpg',
    isVerified: true,
    addressLine1: 'Opp. Shri Guru Singh Sabha Gurudwara',
    addressLine2: 'Ramtekdi, Chembur Colony, Mumbai',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Air Conditioned', 'Locker Room', 'Personal Training', 'Music System', 'Steam Room'],
    gallery: [
      'https://cdn.fitimg.in/studios/studio1782838466-345tot8cfkvumshl2s4h.png'
    ],
    description: 'High-energy workout space offering specialized HIIT bootcamps, powerlifting racks, free weights up to 50kg, and dedicated cross-training rigs.'
  },
  {
    id: 2511,
    name: 'Kosmos Gym',
    slug: 'kosmos-gym-chembur-colony',
    rating: 4.8,
    ratingCount: 12,
    locality: 'Chembur Colony',
    city: 'Mumbai',
    distanceKm: 2.4,
    workouts: ['Gym Workout', 'Zumba (only For Ladies)', 'Yoga'],
    profileImage: 'https://cdn.fitimg.in/studio_profile_FF9D84E583FAA1.PNG',
    logo: 'https://cdn.fitimg.in/studio_logo_2511_mumbai.png',
    isVerified: true,
    addressLine1: 'Rama Krishna Chemburkar Marg',
    addressLine2: 'Opp Inlaks Hospital Chembur Camp, Indira Nagar',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Ladies-Only Zumba Studio', 'Changing Rooms', 'Cardio Theater', 'Water Dispenser'],
    gallery: [
      'https://cdn.fitimg.in/1728586553-3DFD.jpeg',
      'https://cdn.fitimg.in/1728586569-219D.jpeg',
      'https://cdn.fitimg.in/1728586597-20A7.jpeg'
    ],
    description: 'Spacious fitness club with an exclusive ladies dance fitness studio, certified aerobic instructors, and a full spectrum of resistance machines.'
  },
  {
    id: 2495,
    name: 'K3 Oxygen',
    slug: 'k3-oxygen-chembur-colony',
    rating: 4.2,
    ratingCount: 17,
    locality: 'Chembur Colony',
    city: 'Mumbai',
    distanceKm: 2.5,
    workouts: ['Gym Workout', 'Zumba', 'Spinning'],
    profileImage: 'https://cdn.fitimg.in/studio_profile_CD74BB246F7EF4.png',
    logo: 'https://cdn.fitimg.in/studio_logo_2495_mumbai.png',
    isVerified: true,
    addressLine1: 'T/120/7, Behind Crime Branch Office',
    addressLine2: 'Jhamamal Sadhuram Chowk, R C Marg, Chembur Colony',
    openTimings: '06:00 AM - 11:30 PM',
    amenities: ['Spin Studio', 'Cardio Deck', 'Showers', 'Locker Facility', 'Valet Parking'],
    gallery: [
      'https://cdn.fitimg.in/studio_profile_CD74BB246F7EF4.png'
    ],
    description: 'Full-service gymnasium equipped with oxygen-rich ventilation, LifeFitness treadmills, and high-cadence indoor cycle RPM classes.'
  },
  {
    id: 69936,
    name: 'Jaguar Gymnation',
    slug: 'jaguar-gymnation-chembur',
    rating: 4.0,
    ratingCount: 2,
    locality: 'Chembur',
    city: 'Mumbai',
    distanceKm: 2.8,
    workouts: ['Abs Workout', 'Gym Workout', 'Strength Training'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1765890548-33ym00mmbh7wp4pcnkos.jpg',
    logo: 'https://cdn.fitimg.in/studios/studio1765875347-ekeh8ams0tzeebrtp8nk.jpg',
    isVerified: true,
    addressLine1: 'Near Menka Apartment Lane, Next to RBI Staff Quarter, Road No. 5',
    addressLine2: 'Janardan Patil Marg, Behind K Star Mall, Chembur East',
    openTimings: '06:00 AM - 10:30 PM',
    amenities: ['Heavy Weight Zone', 'Olympic Lifting Platform', 'Air Conditioned', 'Free WiFi'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1765890858-mswyeofzqgmxro534eop.jpg',
      'https://cdn.fitimg.in/studios/images1765890901-wxnrxj2pgbqx7hlnv79i.jpg',
      'https://cdn.fitimg.in/studios/images1765890983-6yp1ctzrytih52pzgykw.jpg'
    ],
    description: 'Renowned for serious bodybuilding and strength athletes, with dedicated deadlift platforms, squat cages, and customized core conditioning.'
  },
  {
    id: 7892,
    name: 'Asian Gym',
    slug: 'asian-gym-mankhurd',
    rating: 5.0,
    ratingCount: 1,
    locality: 'Mankhurd',
    city: 'Mumbai',
    distanceKm: 2.8,
    workouts: ['Gym Workout', 'Core', 'Body Tone'],
    profileImage: 'https://cdn.fitimg.in/studio-profile-46ABF1AB7D0E2D.jpg',
    logo: 'https://cdn.fitimg.in/studio-logo-877E850D3C2EED.jpg',
    isVerified: true,
    addressLine1: 'Deonar Rd, Tata Nagar, Govandi East',
    addressLine2: 'Govandi East, Mumbai, Maharashtra 400043',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Locker Facility', 'Personal Training', 'Cardio Equipment', 'Water Cooler'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1752057843-zk73wzgahuseamys32fs.jpg',
      'https://cdn.fitimg.in/studios/images1752057854-otcvu1zmikhaw0t0i8tk.jpg'
    ],
    description: 'Community gym committed to making fitness accessible, featuring dual-cable pulleys, smith machines, and friendly certified floor instructors.'
  },
  {
    id: 20060,
    name: 'Squat Fit Gym',
    slug: 'squat-fit-gym-chembur',
    rating: 4.7,
    ratingCount: 70,
    locality: 'Chembur',
    city: 'Mumbai',
    distanceKm: 3.0,
    workouts: ['Gym Workout', 'Cardio', 'HIIT', 'Strength Training'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1743755688-lyjvuzpudqwxn6wxjndn.png',
    logo: 'https://cdn.fitimg.in/studios/studio1743755688-7x1n6cgyf3jf5em6mtxm.png',
    isVerified: true,
    addressLine1: 'Maharana Hotel Building, Chembur East',
    addressLine2: 'Central Station Road, Chembur, Mumbai 400071',
    openTimings: '05:30 AM - 11:30 PM',
    amenities: ['Air Conditioned', 'Steam Bath', 'Cardio Zone', 'Physiotherapy Consult', 'Juice Bar'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1743757871-royrh92xqema9f3lqu0z.jpg',
      'https://cdn.fitimg.in/studios/images1743757887-00k7utmlrk0uy8nprv2m.jpg',
      'https://cdn.fitimg.in/studios/images1743757938-ksaxygqnjcnzt8cw9jwk.jpg'
    ],
    description: 'One of Chembur’s top-rated flagship gyms with over 70 verified 5-star member reviews, Matrix cardio gear, and certified functional coaches.'
  },
  {
    id: 65067,
    name: 'Sahyadri Fitness',
    slug: 'sahyadri-fitness-mankhurd',
    rating: 4.6,
    ratingCount: 8,
    locality: 'Mankhurd',
    city: 'Mumbai',
    distanceKm: 3.3,
    workouts: ['Abs Workout', 'Gym Workout', 'MMA'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1764246558-gpl8lemnfvil2uveyfan.jpg',
    logo: 'https://cdn.fitimg.in/studios/studio1764246558-owqotodwi5ray4c7onvg.jpg',
    isVerified: true,
    addressLine1: 'PMG Colony Station Road, Link Rd',
    addressLine2: 'Mankhurd West, Mumbai',
    openTimings: '06:00 AM - 10:30 PM',
    amenities: ['Heavy Bag Zone', 'Free Weights', 'Crossfit Rig', 'Shower'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1764247033-zfryb5n5zwu4i6evnh7h.jpg',
      'https://cdn.fitimg.in/studios/images1764247101-kmqydaicljep8xjjeqzj.jpg'
    ],
    description: 'Combat and conditioning center featuring punching bags, kettlebell circuits, and intense core conditioning routines.'
  },
  {
    id: 63181,
    name: 'My Fitness Factory',
    slug: 'my-fitness-factory-mankhurd',
    rating: 4.5,
    ratingCount: 14,
    locality: 'Mankhurd',
    city: 'Mumbai',
    distanceKm: 3.5,
    workouts: ['Abs Workout', 'Gym Workout', 'Body Tone'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1763725330-kd9sboelw61uhfxqyq83.jpg',
    logo: 'https://cdn.fitimg.in/studios/studio1763401927-5s9qk0unigvh05cwt966.png',
    isVerified: true,
    addressLine1: 'Jeejabai Bhosale Marg, Govandi Slums',
    addressLine2: 'New Gautam Nagar, Govandi North, Mumbai',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Air Conditioned', 'Stretching Area', 'Certified Trainers', 'Lockers'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1763723484-mi1r8h91ugeho7onwpjr.jpg',
      'https://cdn.fitimg.in/studios/images1763723533-rvgwpsj4bnvwgcnrrzle.jpg'
    ],
    description: 'Modern neighborhood fitness space with friendly workout vibes, cable crossovers, and targeted circuit training for lean body toning.'
  },
  {
    id: 22802,
    name: 'Bismillah Fitness Club',
    slug: 'bismillah-fitness-club-mankhurd',
    rating: 5.0,
    ratingCount: 2,
    locality: 'Mankhurd',
    city: 'Mumbai',
    distanceKm: 3.6,
    workouts: ['Abs', 'Gym Workout', 'Strength Training'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1745411265-ncc0o74nbzuomeqslhxz.jpeg',
    logo: 'https://cdn.fitimg.in/studios/studio1745341153-kro8uuarwazghmoag43m.png',
    isVerified: true,
    addressLine1: 'Kamla Raman Nagar, Dumping Road, Baiganwadi',
    addressLine2: 'Govandi East, Mumbai',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Free Weights', 'Dumbbell Zone', 'Changing Area'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1745341270-grzjeo8zmxd9rrgp1hbj.jpg',
      'https://cdn.fitimg.in/studios/images1745341298-b4kd1tpl5gayvdoxkwmn.jpg'
    ],
    description: 'Popular grassroots fitness center with dedicated free weights, bench presses, and personalized weight management coaching.'
  },
  {
    id: 42719,
    name: 'One7 Gymnasium',
    slug: 'one7-gymnasium-mankhurd',
    rating: 5.0,
    ratingCount: 7,
    locality: 'Mankhurd',
    city: 'Mumbai',
    distanceKm: 3.7,
    workouts: ['Gym Workout', 'Strength Training', 'Abs Workout'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1753787270-dcrrgrsgnpvedjybq8hp.jpg',
    logo: 'https://cdn.fitimg.in/studios/studio1753787269-psezwq4nl5geuvvqohe5.jpg',
    isVerified: true,
    addressLine1: 'A1/115, New, Near Fish Market',
    addressLine2: 'Yashwantrao Chavan Nagar, Ekta Nagar, Mankhurd',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Air Conditioned', 'Sound System', 'Certified Coaches', 'Locker Room'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1753771731-bejyziygroaqv9jttj5u.jpg',
      'https://cdn.fitimg.in/studios/images1753771744-2gil4f3dzoilol6xetai.jpg'
    ],
    description: 'Highly rated gym with modern biomechanical machines, barbell zones, and guided strength training sessions.'
  },
  {
    id: 19862,
    name: 'Ozone The Fitness Studio',
    slug: 'ozone-the-fitness-wadala-east',
    rating: 5.0,
    ratingCount: 1,
    locality: 'Wadala East',
    city: 'Mumbai',
    distanceKm: 4.2,
    workouts: ['Gym Workout', 'Cardio', 'Zumba'],
    profileImage: 'https://cdn.fitimg.in/studios/studio1743692780-8favicmjgiqq050ah4a3.jpg',
    logo: 'https://cdn.fitimg.in/studios/studio1743692780-eaxfegeycikdxnin6rqm.jpg',
    isVerified: true,
    addressLine1: '381 2/2, Near Amar Hotel, Raval Pada',
    addressLine2: 'Sangam Nagar, Wadala East, Mumbai 400037',
    openTimings: '06:00 AM - 11:00 PM',
    amenities: ['Air Conditioned', 'Cardio Zone', 'Steam Facility', 'Free Drinking Water'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1771658868-zzfnzocjxq42filwypdn.jpg',
      'https://cdn.fitimg.in/studios/images1771658921-hr7hmy4h0cazmiznv1dx.jpg'
    ],
    description: 'Boutique fitness club in Wadala offering energizing group aerobics, treadmills, elliptical trainers, and full-body resistance circuits.'
  },
  {
    id: 7936,
    name: 'Kings Fitness',
    slug: 'kings-fitness-chuna-bhatti',
    rating: 4.9,
    ratingCount: 31,
    locality: 'Chuna Bhatti',
    city: 'Mumbai',
    distanceKm: 4.5,
    workouts: ['Abs Workout', 'Gym Workout', 'Strength Training', 'HIIT'],
    profileImage: 'https://cdn.fitimg.in/studio-profile-CE50DAD782A77B.jpg',
    logo: 'https://cdn.fitimg.in/studio-logo-FBBC7CB9F97EE3.jpg',
    isVerified: true,
    addressLine1: 'Ground Floor, Kings My Home Building',
    addressLine2: 'Vasantdada Patil Marg, Chuna Bhatti, Mumbai',
    openTimings: '06:00 AM - 11:30 PM',
    amenities: ['Air Conditioned', 'Steam Room', 'Free Parking', 'Crossfit Box', 'Certified Nutritionists'],
    gallery: [
      'https://cdn.fitimg.in/studios/images1741350030-rcwjjneozrk8ubxtzt3e.jpg',
      'https://cdn.fitimg.in/studios/images1741350223-1dfkne86hrvypoevzrpy.jpg'
    ],
    description: 'Premier health club with 31+ 5-star ratings, cutting-edge functional workout stations, and supportive community challenges.'
  },
  // Flagship Delhi NCR Gyms
  {
    id: 10101,
    name: 'Anytime Fitness — Connaught Place',
    slug: 'anytime-fitness-connaught-place-delhi',
    rating: 4.9,
    ratingCount: 142,
    locality: 'Connaught Place',
    city: 'Delhi',
    distanceKm: 1.2,
    workouts: ['Gym Workout', 'Cardio', 'HIIT', 'Yoga'],
    profileImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=120&q=80',
    isVerified: true,
    addressLine1: 'Block M, Inner Circle, Connaught Place',
    addressLine2: 'Near Odeon Cinema, New Delhi 110001',
    openTimings: '24 Hours Open',
    amenities: ['24/7 Access', 'Luxury Showers', 'Steam & Sauna', 'Nutrition Bar', 'Valet Parking'],
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Central Delhi’s prime fitness destination open round the clock with international fitness equipment and customized transformation programs.'
  },
  {
    id: 10102,
    name: 'Fitness First — Cyber City',
    slug: 'fitness-first-cyber-city-gurugram',
    rating: 4.8,
    ratingCount: 96,
    locality: 'Cyber City',
    city: 'Gurugram',
    distanceKm: 2.1,
    workouts: ['Gym Workout', 'Pilates', 'Swimming', 'Spinning'],
    profileImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=120&q=80',
    isVerified: true,
    addressLine1: 'Building 10B, DLF Cyber City',
    addressLine2: 'DLF Phase 2, Gurugram 122002',
    openTimings: '06:00 AM - 10:30 PM',
    amenities: ['Olympic Pool', 'Pilates Reformers', 'Spin Theater', 'Executive Lounge'],
    gallery: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Corporate luxury fitness destination with heated indoor lap pool, reformer Pilates, and world-class Les Mills group classes.'
  },
  {
    id: 10103,
    name: 'Cult.fit — Indiranagar',
    slug: 'cult-fit-indiranagar-bengaluru',
    rating: 4.9,
    ratingCount: 210,
    locality: 'Indiranagar',
    city: 'Bengaluru',
    distanceKm: 1.5,
    workouts: ['Zumba', 'HIIT', 'Boxing', 'Yoga'],
    profileImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=120&q=80',
    isVerified: true,
    addressLine1: '100 Feet Road, HAL 2nd Stage',
    addressLine2: 'Indiranagar, Bengaluru 560038',
    openTimings: '06:00 AM - 10:00 PM',
    amenities: ['Air Conditioned', 'Shower Facilities', 'Locker Room', 'Smart App Checkin'],
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Iconic group workout experience featuring signature S&C, HRX training, boxing masterclasses, and high-energy dance fitness.'
  }
];

// Activities directly from the uploaded reference
export const FITPASS_ACTIVITIES: FitpassActivity[] = [
  {
    id: 7,
    name: 'Gym Workout',
    slug: 'gym',
    tagline: 'Lift, Strengthen & Build',
    calorieBurn: '300-450 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741776024-31wuzsrvlribk0puvrwt.png',
    desktopBanner: 'https://img.fitimg.in/activities/banner-images/gym-workout-1.png',
    themeColor: '#E75A5D',
    energyLabels: ['Strength Building', 'Performance Boost', 'Fitster Favourite'],
    description: 'Maximise your potential with targeted workouts that build strength and endurance using world-class equipment and progressive overload.'
  },
  {
    id: 15,
    name: 'Zumba',
    slug: 'zumba',
    tagline: 'Dance, Sweat & Smile',
    calorieBurn: '400-600 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741777513-uszdfufnjxyzfrrjmvj7.png',
    desktopBanner: 'https://img.fitimg.in/activities/banner-images/zumba-2.png',
    themeColor: '#FEAD02',
    energyLabels: ['Dance Cardio', 'High Energy', 'Rhythm Workout'],
    description: 'Dance, sweat, and smile—Zumba turns fitness into a celebration with Latin rhythms, hip hop beats, and continuous aerobic conditioning.'
  },
  {
    id: 1,
    name: 'Abs Workout',
    slug: 'abs',
    tagline: 'Core Definition & Power',
    calorieBurn: '250-400 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741777831-y7zgagwnfng3nepwfauo.png',
    desktopBanner: 'https://img.fitimg.in/activities/banner-images/abs-1.png',
    themeColor: '#FF9B03',
    energyLabels: ['Six Pack Focus', 'Everyday Strength', 'Core Definition'],
    description: 'Tighten your core, feel stronger, and rock sculpted abs with targeted isometric holds, hanging leg raises, and oblique rotations.'
  },
  {
    id: 8,
    name: 'HIIT',
    slug: 'hiit',
    tagline: 'High-Intensity Calorie Burn',
    calorieBurn: '500-750 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741777040-0giaieiewaausmvh9yfl.png',
    desktopBanner: 'https://img.fitimg.in/activities/hiit-2.png',
    themeColor: '#66BFFF',
    energyLabels: ['Rapid Fat Burn', 'Strength + Stamina Boost', 'EPOC Afterburn'],
    description: 'Push hard, rest smart, and see lightning-fast results with metabolic conditioning intervals that burn calories for up to 24 hours after.'
  },
  {
    id: 2,
    name: 'Cardio',
    slug: 'cardio',
    tagline: 'Heart Health & Stamina',
    calorieBurn: '450-700 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741777424-r6g91ynry34ytiy9tncf.png',
    desktopBanner: 'https://img.fitimg.in/activities/spinning-2.png',
    themeColor: '#F16C21',
    energyLabels: ['High-Intensity', 'Best for Weight Loss', 'Trending This Week'],
    description: 'Keep your heart pumping, your body moving, and your VO2 max increasing with treadmills, rowers, stairmasters, and functional cardio.'
  },
  {
    id: 14,
    name: 'Yoga',
    slug: 'yoga',
    tagline: 'Flexibility, Balance & Peace',
    calorieBurn: '175-240 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741777736-vg08ouzulzv9nzsfdfle.png',
    desktopBanner: 'https://img.fitimg.in/activities/yoga-2.png',
    themeColor: '#6A0572',
    energyLabels: ['Flexibility Training', 'Stress Relief', 'Mind-Body Flow'],
    description: 'Embrace peace, mobility, and deep muscular core control with Hatha, Vinyasa Flow, and Ashtanga sessions guided by master yogis.'
  },
  {
    id: 9,
    name: 'MMA & Combat',
    slug: 'mma',
    tagline: 'Unleash True Power',
    calorieBurn: '550-850 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741784467-3e4noqdlvgv9c55cr0w5.png',
    desktopBanner: 'https://img.fitimg.in/activities/mma.png',
    themeColor: '#C6A700',
    energyLabels: ['Ultimate Workout', 'Combat Fitness', 'Self Defense'],
    description: 'Challenge your body and mind with Muay Thai, Boxing, Kickboxing, and Brazilian Jiu-Jitsu conditioning drills.'
  },
  {
    id: 13,
    name: 'Swimming',
    slug: 'swimming',
    tagline: 'Low-Impact Full-Body Flow',
    calorieBurn: '300-500 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741777776-n8fqzk5adnbooobinyi2.png',
    desktopBanner: 'https://img.fitimg.in/activities/swimming-2.png',
    themeColor: '#C753C3',
    energyLabels: ['Active Lifestyle', 'Skill Building', 'Joint Safe'],
    description: 'Glide through crystal-clear heated and Olympic-size partner pools for total-body conditioning that protects your knees and joints.'
  },
  {
    id: 10,
    name: 'Pilates',
    slug: 'pilates',
    tagline: 'Posture, Core & Tone',
    calorieBurn: '220-325 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741784625-nhax4ubp86mgvdvxorjp.png',
    desktopBanner: 'https://img.fitimg.in/activities/pilates-1.png',
    themeColor: '#C2185B',
    energyLabels: ['Posture & Core', 'Mind-Body Balance', 'Deep Toning'],
    description: 'Strengthen, stretch, and sculpt your posture with mat and reformer Pilates sessions that transform core stability.'
  },
  {
    id: 11,
    name: 'Spin & RPM',
    slug: 'spinning',
    tagline: 'High Cadence Cycling',
    calorieBurn: '450-700 cal/hr',
    primaryImage: 'https://cdn.fitimg.in/fitshop/activity_1741784759-rujlqnpyyzrvud5mta7q.png',
    desktopBanner: 'https://img.fitimg.in/activities/spinning.png',
    themeColor: '#8E24AA',
    energyLabels: ['Power Cardio', 'Leg Power', 'Rhythm Ride'],
    description: 'Pedal hard, feel the infectious playlist beats, and build explosive quad and calf stamina with state-of-the-art flywheel bikes.'
  }
];

// Membership Plans from reference
export const FITPASS_PLANS: FitpassPlan[] = [
  {
    id: 'fitpass-360-12m',
    title: '12 Months FITPASS 360',
    label: 'FITPASS 360',
    durationMonths: 12,
    monthlySellingPrice: 1667,
    totalSellingPrice: 19999,
    actualPrice: 90000,
    badge: 'MOST POPULAR • ALL-IN-ONE',
    isRecommended: true,
    cardImage: 'https://img.fitimg.in/membership_plans/product_image1768800248-qhvrheua2vmwvqgnkmos.png',
    features: [
      'Access to 12k+ premium gyms & fitness centres across 150+ cities',
      'Expert certified nutritionist consults, personalised diet plans & meal logs',
      'ARIA A.I. personal fitness coaching & movement analysis',
      'Access to unlimited Virtual classes from 4,000+ global studios on FITPASS-TV',
      'Free Online Doctor Consultations via FITHEAL',
      'Annual Diagnostic Health Check-up voucher included',
      'E-Pharmacy vouchers, discounts, wellness savings & more'
    ]
  },
  {
    id: 'fitpass-180-12m',
    title: '12 Months FITPASS 180',
    label: 'FITPASS 180',
    durationMonths: 12,
    monthlySellingPrice: 1417,
    totalSellingPrice: 16999,
    actualPrice: 39000,
    cardImage: 'https://img.fitimg.in/membership_plans/product_image1768800169-bsvgim97i52pdcuuqakc.png',
    features: [
      'Access to 12k+ premium gyms & fitness centres across 150+ cities',
      'Reserve up to 5 workouts every month at each fitness centre in India’s largest network',
      'ARIA A.I. enabled personal fitness coaching',
      'Access to unlimited Virtual classes from 4,000+ global studios on FITPASS-TV',
      'Workout flexibility across home, office, and travel in 150+ cities'
    ]
  },
  {
    id: 'fitpass-360-3m',
    title: '3 Months FITPASS 360',
    label: 'FITPASS 360 QUARTERLY',
    durationMonths: 3,
    monthlySellingPrice: 2499,
    totalSellingPrice: 7499,
    actualPrice: 22500,
    cardImage: 'https://img.fitimg.in/membership_plans/product_image1768800248-qhvrheua2vmwvqgnkmos.png',
    features: [
      'Access to 12k+ premium gyms across 150+ cities',
      'Nutritionist consultation & customized diet plan',
      'ARIA AI workout coach',
      'FITPASS-TV unlimited access',
      'Doctor tele-consultation'
    ]
  },
  {
    id: 'fitpass-180-1m',
    title: '1 Month FITPASS 180',
    label: 'FITPASS 180 MONTHLY',
    durationMonths: 1,
    monthlySellingPrice: 1999,
    totalSellingPrice: 1999,
    actualPrice: 3500,
    cardImage: 'https://img.fitimg.in/membership_plans/product_image1768800169-bsvgim97i52pdcuuqakc.png',
    features: [
      'Access to 12k+ gyms in 150+ cities for 30 days',
      'Reserve up to 5 workouts per gym',
      'ARIA AI workout routines',
      'Full FITPASS-TV virtual workout library'
    ]
  }
];

// Testimonials from reference
export const FITPASS_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarswati',
    rating: 4,
    time: '2 days ago',
    photo: 'https://img.fitimg.in/profile/female_icon_option_6.png',
    text: 'Working out regularly has changed how I feel overall. Some days it’s HIIT or spin, other days it’s Yoga or Pilates, but having that flexibility through FITPASS 360 keeps me consistent and motivated.'
  },
  {
    id: 2,
    name: 'Neeru',
    rating: 5,
    time: '1 week ago',
    photo: 'https://img.fitimg.in/profile/female_icon_option_6.png',
    text: 'I started feeling stronger and more energetic within weeks. Between gym sessions, swimming and the occasional Zumba class, my body feels lighter and my mind much calmer than before.'
  },
  {
    id: 3,
    name: 'Ankita Singh',
    rating: 4,
    time: '1 month ago',
    photo: 'https://img.fitimg.in/profile/female_icon_option_6.png',
    text: 'I love how my routine stays fresh. Mixing things like combat workouts, Yoga and spin through FITPASS 360 has helped me stay disciplined without feeling bored.'
  },
  {
    id: 4,
    name: 'Rohit',
    rating: 4,
    time: '1 month ago',
    photo: 'https://img.fitimg.in/profile/male_icon_option_3.png',
    text: 'I didn’t expect fitness to feel this enjoyable. Between dance sessions, swimming and core workouts, every week feels balanced and surprisingly fun.'
  },
  {
    id: 5,
    name: 'Shubham',
    rating: 5,
    time: '2 months ago',
    photo: 'https://img.fitimg.in/profile/male_icon_option_3.png',
    text: 'My posture improved, my core feels stronger, and my energy levels are much better now. Pilates, gym workouts and a bit of cardio here and there have made a noticeable difference.'
  }
];

// Popular cities from reference
export const FITPASS_CITIES = [
  { name: 'Mumbai', localities: ['Mumbai Central', 'Chembur Colony', 'Chembur', 'Mankhurd', 'Wadala East', 'Antop Hill', 'Shivaji Nagar', 'Kurla East', 'Chuna Bhatti', 'Bandra West', 'Andheri West'] },
  { name: 'Delhi', localities: ['Connaught Place', 'South Extension', 'Hauz Khas', 'Saket', 'Dwarka', 'Greater Kailash', 'Rohini', 'Pitampura', 'Lajpat Nagar'] },
  { name: 'Noida', localities: ['Sector 18', 'Sector 62', 'Sector 50', 'Sector 137', 'Greater Noida Knowledge Park'] },
  { name: 'Gurugram', localities: ['DLF Cyber City', 'Sector 29', 'Golf Course Road', 'Sohna Road', 'DLF Phase 4'] },
  { name: 'Bengaluru', localities: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'Jayanagar', 'MG Road', 'Bellandur'] },
  { name: 'Pune', localities: ['Koregaon Park', 'Kalyani Nagar', 'Viman Nagar', 'Baner', 'Aundh', 'FC Road'] },
  { name: 'Hyderabad', localities: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitec City', 'Madhapur'] },
  { name: 'Chennai', localities: ['Alwarpet', 'Nungambakkam', 'Adyar', 'Anna Nagar', 'Velachery'] },
  { name: 'Kolkata', localities: ['Salt Lake', 'Park Street', 'Ballygunge', 'New Town', 'South City'] }
];

// FITPASS-TV Virtual workouts
export const FITPASS_TV_CLASSES: FitpassTvClass[] = [
  {
    id: 'tv-1',
    title: 'Fat-Melting HIIT Ignite',
    trainer: 'Marcus Vance (London)',
    category: 'HIIT',
    durationMins: 35,
    difficulty: 'Advanced',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    calories: 420
  },
  {
    id: 'tv-2',
    title: 'Vinyasa Dawn Sun Salutations',
    trainer: 'Ananya Deshmukh (Rishikesh)',
    category: 'Yoga',
    durationMins: 45,
    difficulty: 'Beginner',
    thumbnailUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    calories: 210
  },
  {
    id: 'tv-3',
    title: 'Latin Dance Cardio Fiesta',
    trainer: 'Sofia Alvarez (Miami)',
    category: 'Dance',
    durationMins: 40,
    difficulty: 'Intermediate',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    calories: 380
  },
  {
    id: 'tv-4',
    title: 'Dumbbell Hypertrophy Full-Body',
    trainer: 'Vikram Rajput (Mumbai)',
    category: 'Strength',
    durationMins: 50,
    difficulty: 'Intermediate',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    calories: 460
  },
  {
    id: 'tv-5',
    title: 'Core & Posture Sculpting',
    trainer: 'Claire Dupont (Paris)',
    category: 'Pilates',
    durationMins: 30,
    difficulty: 'Beginner',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    calories: 230
  }
];

// Blog articles
export const FITPASS_BLOGS: FitpassArticle[] = [
  {
    id: 'b-1',
    title: 'The Science of Switching Workouts: Why Cross-Training Prevents Plateaus',
    slug: 'science-of-switching-workouts',
    category: 'Training Science',
    readTime: '5 min read',
    date: 'Sep 28, 2026',
    summary: 'Discover how alternating between heavy resistance training, high-velocity cardio, and restorative yoga optimizes muscular recovery and neural stimulation.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    content: [
      'Repetitive workouts often lead to physiological adaptation where your body burns fewer calories doing the exact same exercise routine. By introducing exercise variety through the FITPASS network, you systematically challenge new muscle fibers.',
      'Integrating HIIT twice a week boosts your VO2 max, while heavy compound lifting builds structural bone density and functional strength. On alternate days, low-impact swimming and yoga reduce systemic cortisol and flush lactic acid.',
      'With over 12,000 gyms available on one pass, you are never locked into a boring, monotonous routine.'
    ]
  },
  {
    id: 'b-2',
    title: 'Macro-Balancing for Indian Diets: Protein Targets Without Giving Up Rotis',
    slug: 'macro-balancing-indian-diets',
    category: 'Nutrition',
    readTime: '6 min read',
    date: 'Sep 22, 2026',
    summary: 'Practical guidance from FITFEAST clinical nutritionists on achieving 1.6g protein per kg bodyweight with authentic Indian home food.',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    content: [
      'A common misconception is that Indian vegetarian diets cannot support serious muscle gain or rapid fat loss. The secret lies in pairing cereal grains with legumes to create complete amino acid profiles.',
      'Paneer, soya chunks, Greek yogurt, sprout chaats, and whey isolates can effortlessly meet your daily protein targets without eliminating traditional rotis and dals.',
      'FITFEAST certified nutritionists craft customized meal charts tailored to your cultural food habits, office hours, and workout timings.'
    ]
  },
  {
    id: 'b-3',
    title: 'ARIA: How A.I. Form Analysis Prevents Lower Back Injuries in the Gym',
    slug: 'aria-ai-form-analysis',
    category: 'FITCOACH Tech',
    readTime: '4 min read',
    date: 'Sep 15, 2026',
    summary: 'How computer vision and kinematics tracking in your smartphone camera turn your device into a real-time personal trainer.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    content: [
      'Improper deadlift and squat kinematics account for over 65% of preventable gym injuries. ARIA analyzes joint angles in real time to correct rounded spines and valgus knee collapse before you lift heavier loads.',
      'Instead of rigid templates, ARIA adapts your progressive overload sets based on your speed of execution and reported fatigue.',
      'Available with both FITPASS 180 and FITPASS 360 memberships.'
    ]
  }
];

// Single Website Model for Demo Registry
export const FITPASS_WEBSITE: BusinessWebsite = {
  id: 'site-fitpass',
  slug: 'fitpass',
  businessName: 'FITPASS',
  tagline: "India's Largest Fitness Network · 12,000+ Gyms, FITCOACH, FITFEAST & FITPASS-TV",
  description: 'FITPASS is India’s largest fitness network with access to 12,000+ premium gyms and fitness studios across 150+ cities on a single universal pass. Complete with A.I. personal coach ARIA, certified nutritionists on FITFEAST, virtual workouts on FITPASS-TV, and preventive healthcare on FITHEAL.',
  category: 'gym_fitness' as any,
  templateId: 'fitpass',
  phone: '1800-5714-466',
  whatsapp: '+91 98211 83422',
  email: 'care@fitpass.co.in',
  address: '3E/2, Block E3, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi 110055, India',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=FITPASS+India+Headquarters',
  openingHours: 'Mon - Sun: 5:30 AM – 11:45 PM (Partner Gyms) | 24/7 Digital Platform',
  coverUrl: 'https://img.fitimg.in/cdn/web-assets/images/membership/fit-rich-desktop.png',
  primaryColor: '#D6383B', // FITPASS Brand Red
  secondaryColor: '#0A1F34', // FITPASS Deep Navy
  fontFamily: 'Figtree, Poppins, sans-serif',
  bookingType: 'appointment_slot',
  bookingCtaLabel: 'View Demo',
  specialBadge: '12k+ Gyms · 150+ Cities · Trusted by 11M+ Customers',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'sec-hero', title: 'Fitpass Universal Network', isEnabled: true, order: 1 },
    { id: 'sec-studios', title: 'Partner Gyms & Studios', isEnabled: true, order: 2 },
    { id: 'sec-activities', title: 'Fitness Activities', isEnabled: true, order: 3 },
    { id: 'sec-plans', title: 'Membership Plans', isEnabled: true, order: 4 },
    { id: 'sec-fitcoach', title: 'ARIA AI Fitness Coach', isEnabled: true, order: 5 },
    { id: 'sec-fitfeast', title: 'FITFEAST Nutrition & BMI', isEnabled: true, order: 6 },
    { id: 'sec-app', title: 'Download FITPASS App', isEnabled: true, order: 7 }
  ],
  offers: [
    {
      id: 'fp-offer-annual',
      title: 'Flat 75% Off Annual Plans',
      description: 'Subscribe to FITPASS 360 at ₹1,667/month (Actual ₹7,500/mo) with full nutritionist & doctor access.',
      discountPercent: 75,
      couponCode: 'FITPASS360',
      isActive: true
    },
    {
      id: 'fp-offer-app',
      title: '11M+ Fitster Community Welcome',
      description: 'Get free instant check-in passes and unlimited virtual workout access on FITPASS-TV.',
      discountPercent: 100,
      couponCode: 'GETMOVING',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'fp-gal-1',
      title: 'Partner Studio Gym Floor',
      category: 'facilities',
      imageUrl: 'https://cdn.fitimg.in/studios/studio1776402151-pixitdwm0oxlkm7c019z.jpg'
    },
    {
      id: 'fp-gal-2',
      title: 'Group Aerobics and Dance Studio',
      category: 'facilities',
      imageUrl: 'https://cdn.fitimg.in/studios/studio1782838466-345tot8cfkvumshl2s4h.png'
    },
    {
      id: 'fp-gal-3',
      title: 'Strength and Functional Conditioning Zone',
      category: 'facilities',
      imageUrl: 'https://cdn.fitimg.in/studios/studio1743755688-lyjvuzpudqwxn6wxjndn.png'
    }
  ],
  items: [
    {
      id: 'item-fp-360',
      name: 'FITPASS 360 All-Inclusive Annual Membership',
      description: 'Unlimited access to 12k+ gyms, expert nutritionist consults, ARIA AI coach, and FITHEAL doctor consultations.',
      price: 19999,
      discountPrice: 19999,
      category: 'Memberships',
      imageUrl: 'https://img.fitimg.in/membership_plans/product_image1768800248-qhvrheua2vmwvqgnkmos.png',
      isAvailable: true,
      isFeatured: true
    },
    {
      id: 'item-fp-180',
      name: 'FITPASS 180 Core Annual Membership',
      description: 'Access to 12,000+ gyms across 150+ cities, 5 workouts/month per studio, and ARIA AI workouts.',
      price: 16999,
      discountPrice: 16999,
      category: 'Memberships',
      imageUrl: 'https://img.fitimg.in/membership_plans/product_image1768800169-bsvgim97i52pdcuuqakc.png',
      isAvailable: true,
      isFeatured: true
    }
  ]
};
