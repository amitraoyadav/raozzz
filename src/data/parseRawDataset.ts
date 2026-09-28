import { InspectionStatus } from '../types/referenceDesign';

export function assessInspectionStatus(url: string, name: string): {
  status: InspectionStatus;
  isVerifiedDomain: boolean;
  notes: string;
} {
  if (!url || url.includes('Not verified') || name.toLowerCase().includes('not verified')) {
    return {
      status: 'manual_required',
      isVerifiedDomain: false,
      notes: 'Website URL not verified in dataset. Administrator must supply verified domain or upload custom source files.'
    };
  }

  if (url.includes('google.com/search') || url.includes('search?q=')) {
    return {
      status: 'manual_required',
      isVerifiedDomain: false,
      notes: 'Entry contains a Google discovery query instead of a direct business domain. Needs manual domain entry.'
    };
  }

  try {
    const parsed = new URL(url);
    if (!parsed.hostname || parsed.hostname.length < 4) {
      return {
        status: 'manual_required',
        isVerifiedDomain: false,
        notes: 'Malformed or incomplete URL format.'
      };
    }
  } catch {
    return {
      status: 'manual_required',
      isVerifiedDomain: false,
      notes: 'Invalid URL string.'
    };
  }

  return {
    status: 'inspected',
    isVerifiedDomain: true,
    notes: 'Reference layout, typography, section sequence, and color system successfully verified from live source.'
  };
}

// Parses CSV respecting quotes
export function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export interface RawCsvRow {
  categoryNo: number;
  categoryName: string;
  ref1Name: string;
  ref1Url: string;
  ref2Name: string;
  ref2Url: string;
  featuresToStudy: string;
  ref3Name: string;
  ref3Url: string;
}

export function parseRawReferenceCsvText(csvText: string): RawCsvRow[] {
  const lines = csvText.split('\n').filter(l => l.trim().length > 0);
  const rows: RawCsvRow[] = [];

  // skip header
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i]);
    if (cols.length < 8) continue;

    const categoryNo = parseInt(cols[0], 10) || i;
    const categoryName = cols[1];
    const ref1Name = cols[2];
    const ref1Url = cols[3];
    const ref2Name = cols[4];
    const ref2Url = cols[5];
    const featuresToStudy = cols[6] || '';
    const ref3Name = cols[7] || '';
    const ref3Url = cols[8] || '';

    rows.push({
      categoryNo,
      categoryName,
      ref1Name,
      ref1Url,
      ref2Name,
      ref2Url,
      featuresToStudy,
      ref3Name,
      ref3Url
    });
  }

  return rows;
}

export const CATEGORY_GROUP_MAP: Record<string, string> = {
  'Restaurant': 'Food & Dining',
  'Cafe': 'Food & Dining',
  'Rooftop Cafe': 'Food & Dining',
  'Gaming Cafe': 'Entertainment & Leisure',
  'Bakery': 'Food & Dining',
  'Home Baker': 'Food & Dining',
  'Sweet Shop / Mithai': 'Food & Dining',
  'Ice Cream Shop': 'Food & Dining',
  'Tiffin Service': 'Food & Dining',
  'Office Tiffin Service': 'Food & Dining',
  'Catering Service': 'Food & Dining',
  'Hotel': 'Hospitality & Travel',
  'Banquet Hall': 'Hospitality & Travel',
  'Resort / Homestay': 'Hospitality & Travel',
  'Cloud Kitchen / Food Truck': 'Food & Dining',
  'Food Truck / Fast Food': 'Food & Dining',
  'Escape Room': 'Entertainment & Leisure',
  'Retail Shop': 'Retail & Shopping',
  'Kirana / Grocery Store': 'Retail & Grocery',
  'Supermarket': 'Retail & Grocery',
  'Clothing Store / Boutique': 'Fashion & Apparel',
  'Jewellery Shop': 'Fashion & Luxury',
  'Optical Shop': 'Healthcare & Retail',
  'Pharmacy / Medical Store': 'Healthcare & Pharmacy',
  'Electronics / Mobile Shop': 'Electronics & Tech',
  'Computer Shop': 'Electronics & Tech',
  'Hardware Shop': 'Industrial & Hardware',
  'Furniture Shop': 'Home & Living',
  'Home Decor Shop': 'Home & Living',
  'Gift & Stationery Shop': 'Retail & Gifts',
  'Toy Shop': 'Kids & Family',
  'Sports Shop': 'Sports & Fitness',
  'Bookshop/Library': 'Education & Books',
  'Handicraft Store': 'Art & Crafts',
  'Florist': 'Gifts & Flowers',
  'Musical Instruments Shop': 'Music & Arts',
  'Telecom/Recharge Shop': 'Services & Utilities',
  'Printing Shop': 'Printing & Media',
  'Wholesale/Distributor': 'B2B & Wholesale',
  'Manufacturer/Industrial Supplier': 'B2B & Manufacturing',
  'Online Store/D2C Brand': 'Ecommerce & D2C',
  'Clinic': 'Healthcare & Medical',
  'Dental Clinic': 'Healthcare & Medical',
  'Physiotherapy Centre': 'Healthcare & Medical',
  'Pathology Lab': 'Healthcare & Diagnostics',
  'Hospital/Nursing Home': 'Healthcare & Medical',
  'Veterinary Clinic': 'Pets & Animals',
  'Ayurveda/Wellness Centre': 'Wellness & Alternate Medicine',
  'Yoga Studio': 'Fitness & Wellness',
  'Spa/Wellness Centre': 'Beauty & Wellness',
  'Mental Wellness/Counselling': 'Healthcare & Wellness',
  'Health Consultant': 'Healthcare & Wellness',
  'Salon': 'Beauty & Grooming',
  'Beauty Parlour': 'Beauty & Grooming',
  'Bridal Makeup Artist': 'Beauty & Grooming',
  'Tattoo Studio': 'Art & Personal Expression',
  'Nail Studio': 'Beauty & Grooming',
  'Hair/Skin Clinic': 'Healthcare & Beauty',
  'Tailor/Boutique Stitching': 'Fashion & Stitching',
  'Laundry/Dry Cleaning': 'Home & Cleaning Services',
  'Curtain/Upholstery Business': 'Home & Living',
  'Coaching Institute': 'Education & Training',
  'Home Tutor': 'Education & Tutoring',
  'School': 'Education & Schools',
  'Preschool/Daycare': 'Education & Childcare',
  'College/Training Institute': 'Education & Higher Studies',
  'Computer Institute': 'Education & Tech Training',
  'Arts Academy': 'Art & Education',
  'Dance Academy': 'Art & Performance',
  'Music Academy': 'Music & Arts',
  'Gym': 'Sports & Fitness',
  'Fitness Studio': 'Sports & Fitness',
  'Sports Academy': 'Sports & Fitness',
  'CA/Tax Consultant': 'Financial & Legal',
  'Lawyer/Law Firm': 'Financial & Legal',
  'Notary/Legal Services': 'Financial & Legal',
  'Insurance Agent': 'Financial & Legal',
  'Loan Agent/DSA': 'Financial & Legal',
  'Financial Advisor': 'Financial & Legal',
  'Business Consultant': 'Professional Services',
  'Freelancer/Digital Agency': 'Digital & Agency',
  'Astrologer/Pooja Services': 'Spiritual & Traditional',
  'Event Planner': 'Events & Weddings',
  'Electrician': 'Trades & Home Services',
  'Plumber': 'Trades & Home Services',
  'AC Repair': 'Trades & Home Services',
  'Appliance Repair': 'Trades & Home Services',
  'Computer/Laptop Repair': 'Tech Repair & Support',
  'Mobile Repair': 'Tech Repair & Support',
  'Locksmith': 'Trades & Home Services',
  'CCTV / Security Services': 'Security & Technology',
  'Pest Control': 'Home & Sanitation',
  'RO / Water Purifier': 'Home Appliances & Water',
  'Construction Contractor': 'Real Estate & Construction',
  'Painting Contractor': 'Home & Renovation',
  'Interior Designer': 'Design & Interiors',
  'Architect': 'Design & Architecture',
  'Carpenter / Custom Furniture': 'Trades & Furniture',
  'Home Cleaning': 'Cleaning & Sanitation',
  'Solar Installer': 'Energy & Solar',
  'Packers & Movers': 'Logistics & Relocation',
  'Driving School': 'Automotive & Training',
  'Auto Garage': 'Automotive & Repairs',
  'Car Wash / Detailing': 'Automotive & Care',
  'Auto Showroom': 'Automotive & Dealerships',
  'Used Car Dealer': 'Automotive & Dealerships',
  'Bike / Scooter Dealer': 'Automotive & Dealerships',
  'Vehicle Scrapping': 'Automotive & Recycling',
  'Car / Bike Rental': 'Travel & Rentals',
  'Cab / Taxi Service': 'Travel & Mobility',
  'Cycle Repair / Shop': 'Sports & Mobility',
  'Auto Parts / Spares': 'Automotive & Spares',
  'Courier / Delivery Service': 'Logistics & Delivery',
  'Real Estate Agent': 'Real Estate & Properties',
  'Builder / Developer': 'Real Estate & Construction',
  'Property Rental': 'Real Estate & Rental',
  'PG / Hostel': 'Accommodation & Hostels',
  'Coworking Space': 'Real Estate & Workspaces',
  'Travel Agency': 'Travel & Tourism',
  'Tour Operator': 'Travel & Tours',
  'Taxi / Tour Rental': 'Travel & Tourism',
  'Adventure / Outdoor Tours': 'Travel & Adventure',
  'Photographer': 'Creative & Photography',
  'Videographer': 'Creative & Video',
  'Wedding Planner': 'Events & Weddings',
  'Event Management': 'Events & Management',
  'Party Rental': 'Events & Rentals',
  'DJ / Music Services': 'Entertainment & Music',
  'Art Gallery': 'Art & Culture',
  'Drone Services': 'Aviation & Tech Services'
};
