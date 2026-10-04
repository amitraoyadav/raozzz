import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Globe, Sparkles, X, Check, Utensils, Coffee, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface ReferenceSiteInfo {
  id: string;
  num: number;
  category: 'cafe' | 'restaurant' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness' | 'loans' | 'real_estate' | 'shop' | 'wedding' | 'commercial_vehicles' | 'wedding_event_planning' | 'destination_weddings' | 'web_tools' | 'lawyer' | 'healthcare';
  name: string;
  originalUrl: string;
  slug: string;
  referencePath: string;
  concept: string;
  themeColor: string;
  badge: string;
}

export const ALL_29_REFERENCE_SITES: ReferenceSiteInfo[] = [
  // 19 CAFES
  {
    id: '2d-cafe',
    num: 1,
    category: 'cafe',
    name: '2D Cafe',
    originalUrl: 'https://2dcafe.in/',
    slug: '2d-cafe',
    referencePath: '/references/2d-cafe/',
    concept: '2D Sketchbook & Comic Monochrome Cafe',
    themeColor: '#0c0c0c',
    badge: 'Sketchbook Comic'
  },
  {
    id: 'blue-tokai',
    num: 2,
    category: 'cafe',
    name: 'Blue Tokai Coffee',
    originalUrl: 'https://bluetokaicoffee.com/',
    slug: 'blue-tokai',
    referencePath: '/references/blue-tokai/',
    concept: 'Single Estate Indian Specialty Coffee',
    themeColor: '#002B49',
    badge: 'Estate Roasters'
  },
  {
    id: 'third-wave',
    num: 3,
    category: 'cafe',
    name: 'Third Wave Coffee',
    originalUrl: 'https://www.thirdwavecoffeeroasters.com/',
    slug: 'third-wave',
    referencePath: '/references/third-wave/',
    concept: '100% Arabica Roastery & Contemporary Cafes',
    themeColor: '#C86D3B',
    badge: '100% Arabica'
  },
  {
    id: 'cafe-coffee-day',
    num: 4,
    category: 'cafe',
    name: 'Cafe Coffee Day (CCD)',
    originalUrl: 'https://www.cafecoffeeday.com/',
    slug: 'cafe-coffee-day',
    referencePath: '/references/cafe-coffee-day/',
    concept: 'A Lot Can Happen Over Coffee — Heritage Icon',
    themeColor: '#960E18',
    badge: 'Indian Icon'
  },
  {
    id: 'koffee-hut',
    num: 5,
    category: 'cafe',
    name: 'Koffee Hut (Sweet Coffee)',
    originalUrl: 'https://koffeehut.in/',
    slug: 'sweet-coffee',
    referencePath: '/references/koffee-hut/',
    concept: 'Cozy Artisanal Pastry & Bakery Cafe',
    themeColor: '#5c3a21',
    badge: 'Artisanal Bakery'
  },
  {
    id: 'tim-wendelboe',
    num: 6,
    category: 'cafe',
    name: 'Tim Wendelboe',
    originalUrl: 'https://timwendelboe.no/',
    slug: 'brew-bloom-tim-wendelboe',
    referencePath: '/references/tim-wendelboe/',
    concept: 'Nordic Light-Roast & Farm Direct Trade (Oslo)',
    themeColor: '#b91c1c',
    badge: 'Nordic Light Roast'
  },
  {
    id: 'onyx-coffee-lab',
    num: 7,
    category: 'cafe',
    name: 'Onyx Coffee Lab EU',
    originalUrl: 'https://onyxcoffeelab.eu/',
    slug: 'brew-bloom-onyx',
    referencePath: '/references/onyx-coffee-lab/',
    concept: 'Never Settle & Radical Transparency (Amsterdam)',
    themeColor: '#c5a059',
    badge: 'Radical Transparency'
  },
  {
    id: 'city-brew',
    num: 8,
    category: 'cafe',
    name: 'City Brew Coffee',
    originalUrl: 'https://citybrew.com/',
    slug: 'brew-bloom-city-brew',
    referencePath: '/references/city-brew/',
    concept: 'Mountain West Signature Drinks & Roastery',
    themeColor: '#1b4332',
    badge: 'Mountain West'
  },
  {
    id: 'gregorys-coffee',
    num: 9,
    category: 'cafe',
    name: 'Gregorys Coffee',
    originalUrl: 'https://gregoryscoffee.com/',
    slug: 'brew-bloom-gregorys',
    referencePath: '/references/gregorys-coffee/',
    concept: 'See Coffee Differently & Cold Brew NYC',
    themeColor: '#e11d48',
    badge: 'NYC High-Energy'
  },
  {
    id: 'rubys-cafe',
    num: 10,
    category: 'cafe',
    name: "Ruby's Cafe",
    originalUrl: 'https://rubyscafe.com/',
    slug: 'rubys-cafe',
    referencePath: '/references/rubys-cafe/',
    concept: 'Australian All-Day Brunch & Ricotta Hotcakes',
    themeColor: '#2b2b2b',
    badge: 'Aussie All-Day'
  },
  {
    id: 'brewed-coffee-shop',
    num: 11,
    category: 'cafe',
    name: 'Brewed Coffee Shop',
    originalUrl: 'https://brewedcoffeeshop.com/',
    slug: 'brewed-coffee-shop',
    referencePath: '/references/brewed-coffee-shop/',
    concept: 'Rhode Island Drive-Thrus & Frozen Awakenings',
    themeColor: '#3c2415',
    badge: 'Drive-Thru Roastery'
  },
  {
    id: 'greenberrys',
    num: 12,
    category: 'cafe',
    name: "Greenberry's Coffee Roasters",
    originalUrl: 'https://greenberrys.com/',
    slug: 'greenberrys',
    referencePath: '/references/greenberrys/',
    concept: 'Craft Hand-Roasted Coffee (Charlottesville, VA)',
    themeColor: '#1d3557',
    badge: 'Craft Roastery'
  },
  {
    id: 'mean-mug',
    num: 13,
    category: 'cafe',
    name: 'Mean Mug Coffeehouse',
    originalUrl: 'https://meanmugcoffee.com/',
    slug: 'mean-mug',
    referencePath: '/references/mean-mug/',
    concept: 'In-House Micro-Roaster & Scratch Bakery (TN)',
    themeColor: '#4a3525',
    badge: 'Micro-Roaster'
  },
  {
    id: 'revival-cafe',
    num: 14,
    category: 'cafe',
    name: 'Revival Cafe & Kitchen',
    originalUrl: 'https://www.revivalcafeandkitchen.com/',
    slug: 'revival-cafe',
    referencePath: '/references/revival-cafe/',
    concept: 'Boston Community Kitchen, Brioche & Craft Coffee',
    themeColor: '#2c3e50',
    badge: 'Boston Kitchen'
  },
  {
    id: 'subko',
    num: 15,
    category: 'cafe',
    name: 'Subko Coffee Roasters',
    originalUrl: 'https://subko.coffee/',
    slug: 'brew-bloom',
    referencePath: '/references/subko/',
    concept: 'From the Subcontinent — Specialty Pods & Bakes',
    themeColor: '#1e293b',
    badge: 'Subcontinent Craft'
  },
  {
    id: 'american-provisions',
    num: 16,
    category: 'cafe',
    name: 'American Provisions',
    originalUrl: 'https://www.americanprovisions.com/',
    slug: 'american-provisions',
    referencePath: '/references/american-provisions/',
    concept: 'Artisan Sandwiches, Farmstead Cheeses & Natural Wine (Boston)',
    themeColor: '#2b3a2f',
    badge: 'Artisan Market'
  },
  {
    id: 'mojo-coffee',
    num: 17,
    category: 'cafe',
    name: 'Mojo Coffee House',
    originalUrl: 'https://mojocoffeehouse.com/',
    slug: 'mojo-coffee',
    referencePath: '/references/mojo-coffee/',
    concept: 'Kyoto Cold Drip & New Orleans Magazine St Roastery',
    themeColor: '#78350f',
    badge: 'Cold Drip Roastery'
  },
  {
    id: 'sweetwaters',
    num: 18,
    category: 'cafe',
    name: 'Sweetwaters Cafe',
    originalUrl: 'https://www.sweetwaterscafe.com/',
    slug: 'sweetwaters',
    referencePath: '/references/sweetwaters/',
    concept: 'Global Real Leaf Teas, Dragon Eye Coffees & Cozy Spaces',
    themeColor: '#0369a1',
    badge: 'Global Teas'
  },
  {
    id: 'benne',
    num: 19,
    category: 'cafe',
    name: 'Benne',
    originalUrl: 'https://benne.in/',
    slug: 'benne',
    referencePath: '/references/benne/',
    concept: 'Authentic Davangere White-Butter Dosas & Kaapi (Bandra)',
    themeColor: '#854d0e',
    badge: 'Heritage Dosa'
  },

  // 10 RESTAURANTS
  {
    id: 'barbeque-nation',
    num: 20,
    category: 'restaurant',
    name: 'Barbeque Nation',
    originalUrl: 'https://www.barbequenation.com/',
    slug: 'barbeque-nation',
    referencePath: '/references/barbeque-nation/',
    concept: 'Live Table Charcoal Grill & Lavish Unlimited Buffet',
    themeColor: '#b91c1c',
    badge: 'Live Grill Buffet'
  },
  {
    id: 'nandos',
    num: 21,
    category: 'restaurant',
    name: "Nando's India",
    originalUrl: 'https://www.nandosindia.com/',
    slug: 'nandos',
    referencePath: '/references/nandos/',
    concept: 'Afro-Portuguese 24-Hr Marinated Flame-Grilled PERi-PERi',
    themeColor: '#dc2626',
    badge: 'Flame-Grilled PERi'
  },
  {
    id: 'mainland-china',
    num: 22,
    category: 'restaurant',
    name: 'Mainland China',
    originalUrl: 'https://www.speciality.co.in/',
    slug: 'mainland-china',
    referencePath: '/references/mainland-china/',
    concept: 'Cantonese Dim Sum, Claypots & Sichuan Wok Masters',
    themeColor: '#881337',
    badge: 'Imperial Chinese'
  },
  {
    id: 'oh-calcutta',
    num: 23,
    category: 'restaurant',
    name: 'Oh! Calcutta',
    originalUrl: 'https://www.speciality.co.in/',
    slug: 'oh-calcutta',
    referencePath: '/references/oh-calcutta/',
    concept: 'Calcutta 300 Years Nawabi, Zamindari & Mustard Seafood',
    themeColor: '#581c87',
    badge: 'Bengali Heritage'
  },
  {
    id: 'punjab-grill',
    num: 24,
    category: 'restaurant',
    name: 'Punjab Grill',
    originalUrl: 'https://www.punjabgrill.in/',
    slug: 'punjab-grill',
    referencePath: '/references/punjab-grill/',
    concept: 'Gourmet Frontier, Royal Clay Oven & Punjabi Haute Cuisine',
    themeColor: '#b45309',
    badge: 'Royal Frontier'
  },
  {
    id: 'bikanervala',
    num: 25,
    category: 'restaurant',
    name: 'Bikanervala',
    originalUrl: 'https://www.bikanervala.com/',
    slug: 'bikanervala',
    referencePath: '/references/bikanervala/',
    concept: 'Pure Desi Ghee Sweets, Delhi Street Chaat & Royal Thalis',
    themeColor: '#ea580c',
    badge: 'Sweets & Chaat 1905'
  },
  {
    id: 'sagar-ratna',
    num: 26,
    category: 'restaurant',
    name: 'Sagar Ratna',
    originalUrl: 'https://www.sagarratna.in/',
    slug: 'sagar-ratna',
    referencePath: '/references/sagar-ratna/',
    concept: 'South Indian Pure Vegetarian Dining & Ghee Roast Dosas',
    themeColor: '#14532d',
    badge: 'Pure Veg Since 1991'
  },
  {
    id: 'karims',
    num: 27,
    category: 'restaurant',
    name: "Karim's",
    originalUrl: 'https://karims.in/',
    slug: 'karims',
    referencePath: '/references/karims/',
    concept: 'Mughal Royal Kitchens Since 1913 at Jama Masjid Old Delhi',
    themeColor: '#064e3b',
    badge: 'Mughal 1913 Dynasty'
  },
  {
    id: 'al-baik',
    num: 28,
    category: 'restaurant',
    name: 'Al Baik',
    originalUrl: 'https://www.al-baik.com/',
    slug: 'al-baik',
    referencePath: '/references/al-baik/',
    concept: 'World-Famous Pressure Broasted Chicken & Secret Garlic Sauce',
    themeColor: '#dc2626',
    badge: 'Broasted Since 1974'
  },
  {
    id: 'mr-idli',
    num: 29,
    category: 'restaurant',
    name: 'Mr. Idli',
    originalUrl: 'https://www.mridli.in/',
    slug: 'mr-idli',
    referencePath: '/references/mr-idli/',
    concept: '100+ Steamed Healthy Idli Creations & Crispy Tiffin Dosas',
    themeColor: '#15803d',
    badge: '100+ Steamed Creations'
  },

  // 5 TOUR & TRAVEL
  {
    id: 'dream-travels',
    num: 30,
    category: 'travel',
    name: 'DreamScape Travels',
    originalUrl: 'https://www.dreamtotravels.com/',
    slug: 'dream-travels',
    referencePath: '/references/dreamtotravels/',
    concept: 'Incredible India Tour Packages, Golden Triangle & AC Car Rentals',
    themeColor: '#0F2C59',
    badge: 'Tour & Travel'
  },
  {
    id: 'southern-travels',
    num: 31,
    category: 'travel',
    name: 'Southern Travels',
    originalUrl: 'https://www.southerntravelsindia.com/brandstore.aspx-new-delhi',
    slug: 'southern-travels',
    referencePath: '/references/southern-travels/',
    concept: 'New Delhi Brandstore, Domestic & International Tour Packages Since 1970',
    themeColor: '#0B2545',
    badge: '50+ Years Legacy'
  },
  {
    id: 'srm-holidays',
    num: 32,
    category: 'travel',
    name: 'SRM Holidays',
    originalUrl: 'https://srmholidays.in/',
    slug: 'srm-holidays',
    referencePath: '/references/srm-holidays/',
    concept: 'Delhi Tour Packages, Golden Triangle & Luxury Tempo Traveller Hire',
    themeColor: '#1E3A8A',
    badge: 'Delhi Cab & Tours'
  },
  {
    id: 'itdc-travels',
    num: 33,
    category: 'travel',
    name: 'Ashok Travels & Tours (ITDC)',
    originalUrl: 'https://itdc.co.in/travels-tours/',
    slug: 'itdc-travels',
    referencePath: '/references/itdc-travels/',
    concept: 'India Tourism Development Corporation (ITDC) · Govt. of India Enterprise',
    themeColor: '#0F2850',
    badge: 'Govt. Enterprise'
  },
  {
    id: 'travel-art',
    num: 34,
    category: 'travel',
    name: 'Travel Art Company',
    originalUrl: 'https://travelartcompany.com/contact/',
    slug: 'travel-art',
    referencePath: '/references/travel-art/',
    concept: 'Luxury Bus, Coach & Tempo Traveller Rentals in Delhi NCR (Sagar Tours)',
    themeColor: '#DC2626',
    badge: 'Luxury Bus Fleet'
  },
  {
    id: 'veena-world',
    num: 35,
    category: 'travel',
    name: 'Veena World',
    originalUrl: 'https://www.veenaworld.com/',
    slug: 'veena-world',
    referencePath: '/references/veena-world/',
    concept: 'Travel, Explore, Celebrate Life — India & World Escorted Group Tours & Speciality Holidays',
    themeColor: '#FDB813',
    badge: 'India Premier Tour Operator'
  },
  {
    id: 'tour-travel-2',
    num: 36,
    category: 'travel',
    name: 'VenturePulse Holidays',
    originalUrl: 'https://venturepulseholidays.com/',
    slug: 'tour-travel-2',
    referencePath: '/references/tour-travel-2/',
    concept: 'Boutique Experiential Travel Itineraries, Himalayan Treks & Luxury Getaways',
    themeColor: '#0284c7',
    badge: 'Curated Escapes'
  },
  {
    id: 'bodycraft',
    num: 37,
    category: 'salon',
    name: 'Bodycraft',
    originalUrl: 'https://www.bodycraft.co.in/',
    slug: 'bodycraft',
    referencePath: '/references/bodycraft/',
    concept: "India's First Hybrid Clinic-Salon · Salon Care Backed by Dermatology Expertise",
    themeColor: '#C5A880',
    badge: 'Hybrid Clinic & Salon'
  },
  {
    id: 'home-salon',
    num: 38,
    category: 'salon',
    name: 'Home Salon & Spa',
    originalUrl: 'https://homesalon.in/',
    slug: 'home-salon',
    referencePath: '/references/home-salon/',
    concept: 'Hygienic Doorstep Salon & Wellness for Women Across Mumbai',
    themeColor: '#D81B60',
    badge: 'Doorstep Salon'
  },
  {
    id: 'dessange-mumbai',
    num: 39,
    category: 'salon',
    name: 'DESSANGE Mumbai',
    originalUrl: 'https://www.dessangemumbai.com/',
    slug: 'dessange-mumbai',
    referencePath: '/references/dessange-mumbai/',
    concept: 'Haute Coiffure Française, Californian Balayage & Parisian Luxury Beauty',
    themeColor: '#1A1A1A',
    badge: 'Parisian Haute Coiffure'
  },
  {
    id: 'tanishq',
    num: 40,
    category: 'jewellery',
    name: 'Tanishq',
    originalUrl: 'https://www.tanishq.co.in/shop/jewellery?lang=en_IN',
    slug: 'tanishq',
    referencePath: '/references/tanishq/',
    concept: 'India’s Most Trusted Jeweller · A TATA Enterprise · 100% BIS Hallmarked Gold & Certified Diamonds',
    themeColor: '#832729',
    badge: 'A TATA Enterprise'
  },
  {
    id: 'jewelbox',
    num: 41,
    category: 'jewellery',
    name: 'Jewelbox',
    originalUrl: 'https://jewelbox.co.in/',
    slug: 'jewelbox',
    referencePath: '/references/jewelbox/',
    concept: 'Conscious Luxury · India’s Leading Lab-Grown Diamond Jewellery · Featured on Shark Tank India S3',
    themeColor: '#0F2C24',
    badge: 'Shark Tank S3'
  },
  {
    id: 'beauty-berry',
    num: 42,
    category: 'beauty_cosmetics',
    name: 'Beauty Berry',
    originalUrl: 'https://www.beautyberry.co.in/',
    slug: 'beauty-berry',
    referencePath: '/references/beauty-berry/',
    concept: 'Buy Beauty and Cosmetics Products Online · Premier Makeup Essentials',
    themeColor: '#71DBD4',
    badge: 'Premier Cosmetics'
  },
  {
    id: 'golds-gym',
    num: 43,
    category: 'gym_fitness',
    name: "Gold's Gym",
    originalUrl: 'https://goldsgym.in/',
    slug: 'golds-gym',
    referencePath: '/references/golds-gym/',
    concept: "The Mecca of Bodybuilding & Fitness · 150+ Gyms Across 95 Cities in India",
    themeColor: '#FFE400',
    badge: '150+ Gyms in India'
  },
  {
    id: 'fitpass',
    num: 44,
    category: 'gym_fitness',
    name: 'FITPASS',
    originalUrl: 'https://fitpass.co.in/',
    slug: 'fitpass',
    referencePath: '/references/fitpass/',
    concept: "India's Largest Fitness Network · 12,000+ Gyms, FITCOACH, FITFEAST & FITPASS-TV",
    themeColor: '#D6383B',
    badge: '12,000+ Gyms in India'
  },
  {
    id: 'krishna-jewellers',
    num: 45,
    category: 'jewellery',
    name: 'Krishna Jewellers',
    originalUrl: 'https://krishnajewellers.com/',
    slug: 'krishna-jewellers',
    referencePath: '/references/krishna-jewellers/',
    concept: 'Hyderabad’s Renowned Heritage Jewellers Since 1983 · 22K Gold, Diamonds, Polki, Kundan & Silver',
    themeColor: '#543E3A',
    badge: 'Est. 1983 · Hyderabad Heritage'
  },
  {
    id: 'hazoorilal-jewellers',
    num: 46,
    category: 'jewellery',
    name: 'Hazoorilal Jewellers',
    originalUrl: 'https://hazoorilaljewellers.com/',
    slug: 'hazoorilal-jewellers',
    referencePath: '/references/hazoorilal-jewellers/',
    concept: 'By Sandeep Narang Since 1952 · High Jewellery, Bespoke Diamonds, Solitaires & Polki',
    themeColor: '#000000',
    badge: 'Since 1952 · High Jewellery'
  },
  {
    id: 'sabka-finance',
    num: 47,
    category: 'loans',
    name: 'Sabka Finance',
    originalUrl: 'https://lonkaro.com/',
    slug: 'sabka-finance',
    referencePath: '/references/sabka-loan/',
    concept: 'Sabka Finance (Lonkaro) — Customer-Focused Financial Assistance & Everyday Loans',
    themeColor: '#0D9488',
    badge: 'Site 47 · Finance Website #2'
  },
  {
    id: 'square-yard-dealers',
    num: 48,
    category: 'real_estate',
    name: 'Square Yard Dealers',
    originalUrl: 'https://www.squareyards.com/',
    slug: 'square-yard-dealers',
    referencePath: '/references/square-yards/',
    concept: 'Property Discovery & Real-Estate Advisory Made Simpler · Buy, Rent & Sell Properties',
    themeColor: '#0F172A',
    badge: 'Site 48 · Real Estate'
  },
  {
    id: 'sabka-loans',
    num: 49,
    category: 'loans',
    name: 'Sabka Loans',
    originalUrl: 'https://www.brightloans.in/',
    slug: 'sabka-loans',
    referencePath: '/references/brightloans/',
    concept: 'Simple, Transparent Digital Loan Assistance for Personal, Home & Property Loans',
    themeColor: '#1E40AF',
    badge: 'Site 49 · Finance Website #1'
  },
  {
    id: 'choudhary-realestate',
    num: 50,
    category: 'real_estate',
    name: 'Choudhary Realestate',
    originalUrl: 'https://www.arvindestates.com/',
    slug: 'choudhary-realestate',
    referencePath: '/references/choudhary-realestate/',
    concept: 'Best Property Consultant in Dwarka, Delhi · 100% Legally Verified Freehold DDA Builder Floors & Society Flats',
    themeColor: '#0F1E36',
    badge: 'Site 50 · Real Estate'
  },
  {
    id: 'dlc-group',
    num: 51,
    category: 'real_estate',
    name: 'DLC Group',
    originalUrl: 'https://dlcgroup.in/real-estate-agents-in-delhi/',
    slug: 'dlc-group',
    referencePath: '/references/dlc-group/',
    concept: 'Best Real Estate Agents in Delhi NCR · Luxury Residential, Commercial, Farmhouses & Land Advisory',
    themeColor: '#0a192f',
    badge: 'Site 51 · Real Estate'
  },
  {
    id: 'raoz-properties',
    num: 52,
    category: 'real_estate',
    name: 'Raoz Properties',
    originalUrl: 'https://hrrealtech.com/',
    slug: 'raoz-properties',
    referencePath: '/references/raoz-properties/',
    concept: 'Plots & Property in Delhi NCR & Faridabad · Legally Verified Documents, Builder Floors, Commercial & Farmhouses',
    themeColor: '#1e3a8a',
    badge: 'Site 52 · Real Estate'
  },
  {
    id: 'raoz-motors',
    num: 53,
    category: 'commercial_vehicles',
    name: 'RAOZ MOTORS',
    originalUrl: 'https://smlisuzu.com/',
    slug: 'raoz-motors',
    referencePath: '/references/raoz-motors/',
    concept: 'Raoz Motors Commercial Vehicles · Trucks, School Buses, Executive Coaches & SML Saarthi Telematics',
    themeColor: '#f59e0b',
    badge: 'Site 53 · Commercial Vehicles'
  },
  {
    id: 'raoz-bazaar',
    num: 54,
    category: 'shop',
    name: 'RAOZ BAZAAR',
    originalUrl: 'https://smartkirana.co.in/',
    slug: 'raoz-bazaar',
    referencePath: '/references/smartkirana/',
    concept: 'Har Ghar Ka Smart Kirana & Online Grocery Store · 100% Pure Ghee, 15L Cooking Oil B1G1 Free Deals, Staples, Dry Fruits & Pan Corner',
    themeColor: '#2d5a27',
    badge: 'Site 54 · Store / Shop Category'
  },
  {
    id: 'raoz-weddings',
    num: 55,
    category: 'wedding',
    name: 'RAOZ WEDDINGS',
    originalUrl: 'https://www.theweddingcompany.com/',
    slug: 'raoz-weddings',
    referencePath: '/references/theweddingcompany/',
    concept: "India's Premier Wedding Planning & Venue Discovery Platform · 2,500+ Verified Luxury Venues across Bengaluru, Delhi, Mumbai, Goa, Jaipur & Udaipur",
    themeColor: '#9A2157',
    badge: 'Site 55 · Wedding Category'
  },
  {
    id: 'smlwindia',
    num: 56,
    category: 'wedding',
    name: 'SMLW LUXURY WEDDINGS',
    originalUrl: 'https://www.smlwindia.com/',
    slug: 'smlwindia',
    referencePath: '/references/smlwindia/',
    concept: "Shubh Muhurat Luxury Weddings (SMLW) · Best Destination Wedding Planners in Delhi NCR & India · Palaces, Forts, Beachfronts & 24-Hr Venue Availability",
    themeColor: '#d2cd48',
    badge: 'Site 56 · Wedding Category'
  },
  {
    id: 'rathore-weddings',
    num: 57,
    category: 'wedding_event_planning',
    name: 'RATHORE WEDDINGS',
    originalUrl: 'https://www.bmpweddings.in/',
    slug: 'rathore-weddings',
    referencePath: '/references/bmpweddings/',
    concept: "Rathore Weddings · Luxury Wedding & Event Planners · Bespoke Decor, Royal Palaces, 50+ Venues & End-to-End Hospitality",
    themeColor: '#FFD481',
    badge: 'Site 57 · Wedding & Event Planning'
  },
  {
    id: 'all-in-one-destination-weddings',
    num: 58,
    category: 'destination_weddings',
    name: 'DESTINATION WEDDINGS',
    originalUrl: 'https://www.destinationweddings.com/',
    slug: 'all-in-one-destination-weddings',
    referencePath: '/references/destinationweddings/',
    concept: "All In One Destination Weddings · 100% Free Certified Specialist Planning · Top Resorts & Venues in Mexico, Dominican Republic, Jamaica & Caribbean",
    themeColor: '#b3275a',
    badge: 'Site 58 · Destination Weddings'
  },
  {
    id: 'luxespace-htx',
    num: 59,
    category: 'wedding',
    name: 'LUXESPACE HTX',
    originalUrl: 'https://luxespacehtx.com/',
    slug: 'luxespace-htx',
    referencePath: '/references/luxespacehtx/',
    concept: "LuxeSpace HTX · Modern Architectural Wedding & Event Venue in Houston, Texas · 150 Guests, Bookmatched Marble Wall & Mood Lighting",
    themeColor: '#c5a059',
    badge: 'Site 59 · Wedding Category'
  },
  {
    id: 'saveweb2zip',
    num: 60,
    category: 'web_tools',
    name: 'SAVEWEB2ZIP',
    originalUrl: 'https://saveweb2zip.com/en',
    slug: 'saveweb2zip',
    referencePath: '/references/saveweb2zip/',
    concept: "SaveWeb2ZIP · Online Website Copier & Archiver · Download Full Webpages to ZIP Archive with Assets, HTML, CSS, JS & Fonts",
    themeColor: '#f5df4d',
    badge: 'Site 60 · Web Tools / Utilities'
  },
  {
    id: 'lawlinks',
    num: 61,
    category: 'lawyer',
    name: 'LAW LINKS',
    originalUrl: 'https://lawlinks.in/',
    slug: 'lawlinks',
    referencePath: '/references/lawlinks/',
    concept: "Law Links · Advocates & Legal Consultants · Supreme Court & High Courts Litigation, Commercial Arbitration, Mediation & 32 Industry Sectors",
    themeColor: '#03A9F5',
    badge: 'Site 61 · Advocates & Legal Consultants'
  },
  {
    id: 'maheshwari',
    num: 62,
    category: 'lawyer',
    name: 'MAHESHWARI & CO.',
    originalUrl: 'https://www.maheshwariandco.com/',
    slug: 'maheshwari',
    referencePath: '/references/maheshwari/',
    concept: "Maheshwari & Co. · Advocates & Legal Consultants · Full Service Law Firm in Delhi & Mumbai, Corporate M&A, Supreme Court Litigation, International Arbitration & IPR",
    themeColor: '#8B1E2B',
    badge: 'Site 62 · Full Service Law Firm'
  },
  {
    id: 'group-ach',
    num: 63,
    category: 'loans',
    name: 'GROUP ACH LOAN SOLUTIONS',
    originalUrl: 'https://www.achlinks.in/',
    slug: 'group-ach',
    referencePath: '/portfolio/group-ach-loan-solutions',
    concept: "Group ACH Loan Solutions · Expert Home Loan & Loan Against Property Advisors · 70+ Partner Banks, EMI & Balance Transfer Calculators, Doorstep Verification & WhatsApp Advisory",
    themeColor: '#2F483E',
    badge: 'Site 63 · Loan & Finance Website'
  },
  {
    id: 'clinicbypeople',
    num: 64,
    category: 'healthcare',
    name: 'CLINICBYPeople',
    originalUrl: 'https://clinicbypeople.in/',
    slug: '64-clinicbypeople',
    referencePath: '/portfolio/64-clinicbypeople',
    concept: "ClinicByPeople · Healthcare & Clinic Platform · Specialist Discovery, Daycare Laparoscopy, Laser Proctology & Cashless Insurance",
    themeColor: '#0C5BE2',
    badge: 'Site 64 · Healthcare & Clinic Website'
  },
  {
    id: 'medicareplus',
    num: 65,
    category: 'healthcare',
    name: 'MEDICAREPLUS HOSPITAL',
    originalUrl: 'https://www.lilavatihospital.com/',
    slug: '65-medicareplus-hospital',
    referencePath: '/portfolio/65-medicareplus-hospital',
    concept: "MedicarePlus Hospital · Multispeciality Hospital Website · 22 Specialities, 400+ Specialists, OPD Booking, Emergency Support, Online Payment & Inpatient Care",
    themeColor: '#0C4A60',
    badge: 'Site 65 · Healthcare / Multispeciality Hospital'
  },
  {
    id: 'skinsciene-naturals',
    num: 66,
    category: 'healthcare',
    name: 'SKINSCIENE NATURALS',
    originalUrl: 'https://www.olivaclinic.com/',
    slug: '66-skinsciene-naturals',
    referencePath: '/portfolio/66-skinsciene-naturals',
    concept: "SkinSciene Naturals · Premium Skin, Hair & Aesthetic Clinic · 120+ MD Dermatologists, 36+ Clinics in 10 Cities, US-FDA Lasers, Before/After Slider & Online Booking",
    themeColor: '#064E3B',
    badge: 'Site 66 · Beauty / Dermatology / Aesthetic Clinic'
  },
  {
    id: 'livinto-interiors',
    num: 67,
    category: 'real_estate',
    name: 'LIVINTO HOME INTERIORS',
    originalUrl: 'https://dlifeinteriors.com/',
    slug: '67-livinto-interiors',
    referencePath: '/portfolio/67-livinto-interiors',
    concept: "Livinto Home Interiors · Premium Home Interior Design & Execution · 29 Direct Showrooms, 350k Sq Ft German Factory, 40-Day Handover & 10-Yr Warranty",
    themeColor: '#814882',
    badge: 'Site 67 · Interior Design / Modular Living'
  },
  {
    id: 'devdas-wedding',
    num: 68,
    category: 'destination_weddings',
    name: 'DEVDAS WEDDING',
    originalUrl: 'https://www.diwas.in/',
    slug: '68-devdas-wedding',
    referencePath: '/portfolio/68-devdas-wedding',
    concept: "Devdas Wedding · Luxury Destination Wedding Planners in India & Worldwide · Palace Weddings in Rajasthan, Beachfront in Goa, Wilderness in Jim Corbett, Cost Estimator & Transparent Fees",
    themeColor: '#7A1C30',
    badge: 'Site 68 · Luxury Destination Wedding Planners'
  }
];

export const ALL_68_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_29_REFERENCE_SITES;
export const ALL_67_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_68_REFERENCE_SITES;
export const ALL_66_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_67_REFERENCE_SITES;
export const ALL_65_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_66_REFERENCE_SITES;
export const ALL_64_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_65_REFERENCE_SITES;
export const ALL_63_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_64_REFERENCE_SITES;
export const ALL_62_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_63_REFERENCE_SITES;
export const ALL_61_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_63_REFERENCE_SITES;
export const ALL_60_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_63_REFERENCE_SITES;
export const ALL_59_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_58_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_57_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_56_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_55_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_54_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_53_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_52_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_60_REFERENCE_SITES;
export const ALL_51_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_52_REFERENCE_SITES;
export const ALL_50_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_49_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_46_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_45_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_44_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_43_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_42_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_41_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_40_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_39_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_38_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_37_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_36_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_35_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_34_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_30_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES;
export const ALL_15_REFERENCE_SITES: ReferenceSiteInfo[] = ALL_51_REFERENCE_SITES.slice(0, 15);

interface SwitcherProps {
  currentSiteId: string;
}

export const ReferenceSiteSwitcher: React.FC<SwitcherProps> = ({ currentSiteId }) => {
  const { setActiveView } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'cafe' | 'restaurant' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness' | 'loans' | 'real_estate' | 'shop' | 'wedding' | 'commercial_vehicles' | 'wedding_event_planning' | 'destination_weddings' | 'web_tools' | 'lawyer' | 'healthcare'>('all');

  const currentSite =
    ALL_60_REFERENCE_SITES.find(s => s.id === currentSiteId || s.slug === currentSiteId) ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'devdas-wedding') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'livinto-interiors') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'saveweb2zip') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'luxespace-htx') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'all-in-one-destination-weddings') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'rathore-weddings') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'smlwindia') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'raoz-weddings') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'raoz-motors') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'raoz-bazaar') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'raoz-properties') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'dlc-group') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'choudhary-realestate') ||
    ALL_60_REFERENCE_SITES.find(s => s.id === 'square-yard-dealers') ||
    ALL_60_REFERENCE_SITES[0];

  const filteredSites = ALL_60_REFERENCE_SITES.filter(s => {
    if (categoryFilter === 'all') return true;
    return s.category === categoryFilter;
  });

  const handleSelectSite = (site: ReferenceSiteInfo) => {
    setModalOpen(false);
    if (site.id === 'devdas-wedding' || site.slug === '68-devdas-wedding' || site.slug === 'devdas-wedding' || site.slug === 'devdas') {
      setActiveView('devdas-wedding');
    } else if (site.id === 'livinto-interiors' || site.slug === '67-livinto-interiors' || site.slug === 'livinto-interiors' || site.slug === 'livinto') {
      setActiveView('livinto-interiors');
    } else if (site.id === 'skinsciene-naturals' || site.slug === '66-skinsciene-naturals' || site.slug === 'skinsciene-naturals' || site.slug === 'skinsciene') {
      setActiveView('skinsciene-naturals');
    } else if (site.id === 'medicareplus' || site.slug === '65-medicareplus-hospital' || site.slug === 'medicareplus' || site.slug === 'medicareplus-hospital') {
      setActiveView('medicareplus');
    } else if (site.id === 'clinicbypeople' || site.slug === '64-clinicbypeople' || site.slug === 'clinicbypeople') {
      setActiveView('clinicbypeople');
    } else if (site.id === 'group-ach' || site.slug === 'group-ach' || site.slug === 'group-ach-loan-solutions') {
      setActiveView('group-ach');
    } else if (site.id === 'maheshwari' || site.slug === 'maheshwari') {
      setActiveView('maheshwari');
    } else if (site.id === 'lawlinks' || site.slug === 'lawlinks') {
      setActiveView('lawlinks');
    } else if (site.id === 'saveweb2zip' || site.slug === 'saveweb2zip') {
      setActiveView('saveweb2zip');
    } else if (site.id === 'luxespace-htx' || site.slug === 'luxespace-htx' || site.id === 'luxespace') {
      setActiveView('luxespace-htx');
    } else if (site.id === 'all-in-one-destination-weddings' || site.slug === 'all-in-one-destination-weddings' || site.id === 'destinationweddings') {
      setActiveView('all-in-one-destination-weddings');
    } else if (site.id === 'rathore-weddings' || site.slug === 'rathore-weddings') {
      setActiveView('rathore-weddings');
    } else if (site.id === 'smlwindia' || site.slug === 'smlwindia') {
      setActiveView('smlwindia');
    } else if (site.id === 'raoz-weddings' || site.slug === 'raoz-weddings') {
      setActiveView('raoz-weddings');
    } else if (site.id === 'raoz-motors' || site.slug === 'raoz-motors') {
      setActiveView('raoz-motors');
    } else if (site.id === 'raoz-bazaar' || site.slug === 'raoz-bazaar') {
      setActiveView('raoz-bazaar');
    } else if (site.id === 'raoz-properties' || site.slug === 'raoz-properties') {
      setActiveView('raoz-properties');
    } else if (site.id === 'dlc-group' || site.slug === 'dlc-group') {
      setActiveView('dlc-group');
    } else if (site.id === 'choudhary-realestate' || site.slug === 'choudhary-realestate') {
      setActiveView('choudhary-realestate');
    } else if (site.id === 'square-yard-dealers' || site.slug === 'square-yard-dealers') {
      setActiveView('square-yard-dealers');
    } else if (site.id === 'sabka-loans' || site.slug === 'sabka-loans') {
      setActiveView('sabka-loans');
    } else if (site.id === 'sabka-finance' || site.slug === 'sabka-finance') {
      setActiveView('sabka-finance');
    } else {
      setActiveView('site', site.slug);
    }
  };

  const getCategoryTitle = (cat: string) => {
    if (cat === 'cafe') return 'CAFES';
    if (cat === 'restaurant') return 'RESTAURANTS';
    if (cat === 'travel') return 'TOUR & TRAVEL';
    if (cat === 'salon') return 'SALON';
    if (cat === 'beauty_cosmetics') return 'BEAUTY & COSMETICS';
    if (cat === 'gym_fitness') return 'GYM & FITNESS';
    if (cat === 'loans') return 'LOANS / FINANCIAL SERVICES';
    if (cat === 'real_estate') return 'REAL ESTATE';
    if (cat === 'shop' || cat === 'store') return 'STORE / SHOP';
    if (cat === 'wedding') return 'WEDDING';
    if (cat === 'wedding_event_planning') return 'WEDDING & EVENT PLANNING';
    if (cat === 'destination_weddings') return 'DESTINATION WEDDINGS';
    if (cat === 'web_tools') return 'WEB TOOLS / UTILITIES';
    if (cat === 'commercial_vehicles') return 'AUTOMOBILE / COMMERCIAL VEHICLES';
    return 'JEWELLERY';
  };

  return (
    <>
      <nav aria-label="Reference Website Switcher" className="bg-[#111111] text-white text-xs py-2 px-3 sm:px-4 border-b border-stone-800 flex flex-wrap items-center justify-between gap-2 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: currentSite.themeColor || '#10b981' }}
          />
          <span className="font-bold tracking-wide truncate max-w-[200px] xs:max-w-[320px] sm:max-w-none text-white font-mono text-[11px] sm:text-xs">
            WEBSITE {currentSite.num}/{ALL_60_REFERENCE_SITES.length}: {currentSite.name.toUpperCase()} ({getCategoryTitle(currentSite.category)})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Dropdown Modal Trigger */}
          <button
            onClick={() => setModalOpen(true)}
            className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium text-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Switch Website ({ALL_60_REFERENCE_SITES.length} Sites)</span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
          </button>

          {/* Return to Dashboard */}
          <button
            onClick={() => setActiveView('dashboard')}
            className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-black font-bold text-[11px] cursor-pointer transition-colors"
          >
            Dashboard
          </button>
        </div>
      </nav>

      {/* 60 Reference Websites Picker Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18181b] text-white border border-stone-800 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{ALL_60_REFERENCE_SITES.length} Complete Faithful Website Recreations</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Reference Website Directory — Web Tools, Wedding Venues, Destination Weddings, Event Planning, Real Estate &amp; More
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Fifteen Categories: 1 Web Tools / Utilities (Site 60: SaveWeb2ZIP), 3 Wedding &amp; Event Venues (Sites 55, 56, 59: LuxeSpace HTX), 1 Destination Weddings (Site 58), 1 Wedding &amp; Event Planning (Site 57: Rathore Weddings), 1 Commercial Vehicles, 1 Store/Shop, 5 Real Estate, 2 Loans &amp; Finance, 19 Cafes, 10 Restaurants, 7 Tour &amp; Travel, 3 Salons, 4 Jewellery, 1 Beauty &amp; Cosmetics, 2 Gym &amp; Fitness.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-stone-800 bg-[#141416] flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                All Websites ({ALL_55_REFERENCE_SITES.length})
              </button>
              <button
                onClick={() => setCategoryFilter('cafe')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'cafe'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Cafes ({ALL_37_REFERENCE_SITES.filter(s => s.category === 'cafe').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('restaurant')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'restaurant'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Restaurants ({ALL_37_REFERENCE_SITES.filter(s => s.category === 'restaurant').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('travel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'travel'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Tour & Travel ({ALL_37_REFERENCE_SITES.filter(s => s.category === 'travel').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('salon')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'salon'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Salon ({ALL_37_REFERENCE_SITES.filter(s => s.category === 'salon').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('jewellery')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'jewellery'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Jewellery ({ALL_37_REFERENCE_SITES.filter(s => s.category === 'jewellery').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('beauty_cosmetics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'beauty_cosmetics'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>Beauty & Cosmetics ({ALL_49_REFERENCE_SITES.filter(s => s.category === 'beauty_cosmetics').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('gym_fitness')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'gym_fitness'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Gym & Fitness ({ALL_49_REFERENCE_SITES.filter(s => s.category === 'gym_fitness').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('loans')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'loans'
                    ? 'bg-blue-500 text-white shadow-sm ring-1 ring-blue-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Loans &amp; Finance ({ALL_50_REFERENCE_SITES.filter(s => s.category === 'loans').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('real_estate')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'real_estate'
                    ? 'bg-amber-400 text-slate-950 font-black shadow-sm ring-1 ring-amber-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Real Estate ({ALL_54_REFERENCE_SITES.filter(s => s.category === 'real_estate').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('shop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'shop'
                    ? 'bg-emerald-600 text-white font-black shadow-sm ring-1 ring-emerald-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Store / Shop ({ALL_55_REFERENCE_SITES.filter(s => s.category === 'shop').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('wedding')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'wedding'
                    ? 'bg-[#9A2157] text-white font-black shadow-sm ring-1 ring-rose-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Wedding ({ALL_59_REFERENCE_SITES.filter(s => s.category === 'wedding').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('commercial_vehicles')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'commercial_vehicles'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm ring-1 ring-amber-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Automobile / Commercial Vehicles ({ALL_59_REFERENCE_SITES.filter(s => s.category === 'commercial_vehicles').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('wedding_event_planning')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'wedding_event_planning'
                    ? 'bg-[#FFD481] text-stone-950 font-black shadow-sm ring-1 ring-amber-300'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Wedding &amp; Event Planning ({ALL_59_REFERENCE_SITES.filter(s => s.category === 'wedding_event_planning').length})</span>
              </button>
              <button
                onClick={() => setCategoryFilter('destination_weddings')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  categoryFilter === 'destination_weddings'
                    ? 'bg-[#b3275a] text-white font-black shadow-sm ring-1 ring-pink-400'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>Destination Weddings ({ALL_59_REFERENCE_SITES.filter(s => s.category === 'destination_weddings').length})</span>
              </button>
            </div>

            {/* Grid of Websites */}
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSites.map(s => {
                const isSelected = s.id === currentSite.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSite(s)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-[#202024] border-stone-800 hover:border-stone-700 hover:bg-[#27272b] text-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">
                          #{s.num} · {getCategoryTitle(s.category)}
                        </span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${s.themeColor}22`,
                            color: isSelected ? '#fbbf24' : '#e4e4e7',
                            border: `1px solid ${s.themeColor}44`
                          }}
                        >
                          {s.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-white flex items-center justify-between">
                        <span>{s.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        {s.concept}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-500">
                      <span className="font-mono text-amber-400/80">{s.referencePath}</span>
                      <span className="hover:underline flex items-center gap-1 text-stone-400">
                        Launch →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#141416] border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>All {ALL_37_REFERENCE_SITES.length} reference websites preserved and active in this project.</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-white font-medium rounded-lg cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
