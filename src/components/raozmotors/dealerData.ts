import { DealerNetworkItem, NewsItem, CareerOpening } from './types';

export const ALL_DEALERS: DealerNetworkItem[] = [
  // Maharashtra
  {
    id: 'd-mum-1',
    name: 'Raoz Motors Commercial Hub - Mumbai Central',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Maharashtra',
    city: 'Mumbai',
    address: 'Plot 48, Commercial Transport Nagar, Off Western Express Highway, Goregaon East, Mumbai - 400063',
    pincode: '400063',
    phone: '+91 22 2876 5400',
    email: 'mumbai.central@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:30 PM | 24x7 Breakdown Service',
    hasWorkshop: true
  },
  {
    id: 'd-pune-1',
    name: 'Raoz Motors Industrial Gateway - Pune',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Maharashtra',
    city: 'Pune',
    address: 'Survey No. 112/3, Chakan-Talegaon MIDC Industrial Highway, Chakan, Pune - 410501',
    pincode: '410501',
    phone: '+91 20 6689 3200',
    email: 'pune.sales@raozmotors.com',
    timing: 'Mon - Sat: 8:30 AM - 8:00 PM',
    hasWorkshop: true
  },
  {
    id: 'd-nag-1',
    name: 'Raoz Motors Logistics Centre - Nagpur',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Maharashtra',
    city: 'Nagpur',
    address: 'Sector 5, Multi-modal International Hub Airport (MIHAN), Wardha Road, Nagpur - 441108',
    pincode: '441108',
    phone: '+91 712 254 9911',
    email: 'nagpur.3s@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:00 PM',
    hasWorkshop: true
  },

  // Delhi NCR
  {
    id: 'd-del-1',
    name: 'Raoz Motors Capital Dealership - Delhi',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    address: 'B-14, Sanjay Gandhi Transport Nagar (SGTN), GT Karnal Road, Delhi - 110042',
    pincode: '110042',
    phone: '+91 11 2785 8900',
    email: 'delhi.sgtn@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 8:00 PM | 24x7 Roadside Assistance',
    hasWorkshop: true
  },
  {
    id: 'd-gur-1',
    name: 'Raoz Motors Millennium City - Gurugram',
    facilityType: 'Authorized Showroom',
    state: 'Delhi NCR',
    city: 'Gurugram',
    address: 'Khasra 420, Sector 37 Industrial Area, Hero Honda Chowk, Gurugram, Haryana - 122001',
    pincode: '122001',
    phone: '+91 124 456 7800',
    email: 'gurugram.dealers@raozmotors.com',
    timing: 'Mon - Sun: 9:30 AM - 7:30 PM',
    hasWorkshop: true
  },
  {
    id: 'd-noi-1',
    name: 'Raoz Motors Expressway Hub - Noida',
    facilityType: 'Authorized Service Workshop',
    state: 'Delhi NCR',
    city: 'Noida',
    address: 'Phase-II Extn, Block D, Noida Special Economy Zone (NSEZ), Gautam Buddha Nagar - 201305',
    pincode: '201305',
    phone: '+91 120 256 8920',
    email: 'noida.service@raozmotors.com',
    timing: 'Mon - Sat: 8:00 AM - 8:00 PM',
    hasWorkshop: true
  },

  // Karnataka
  {
    id: 'd-blr-1',
    name: 'Raoz Motors Silicon Corridors - Bengaluru',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Karnataka',
    city: 'Bengaluru',
    address: 'Plot 78, Peenya 2nd Stage, Industrial Estate, Tumkur Road, Bengaluru - 560058',
    pincode: '560058',
    phone: '+91 80 2839 4500',
    email: 'bengaluru.peenya@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 8:00 PM | 24x7 Fleet Assistance',
    hasWorkshop: true
  },
  {
    id: 'd-blr-2',
    name: 'Raoz Motors Electronic City - Bengaluru South',
    facilityType: 'Authorized Showroom',
    state: 'Karnataka',
    city: 'Bengaluru',
    address: 'Hosur Main Road, Attibele Industrial Area, Bengaluru - 562107',
    pincode: '562107',
    phone: '+91 80 2782 1200',
    email: 'attibele.sales@raozmotors.com',
    timing: 'Mon - Sat: 9:30 AM - 7:00 PM',
    hasWorkshop: false
  },
  {
    id: 'd-hub-1',
    name: 'Raoz Motors North Karnataka - Hubballi',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Karnataka',
    city: 'Hubballi',
    address: 'Tarihal Industrial Estate, Old PB Road, Hubballi - 580026',
    pincode: '580026',
    phone: '+91 836 231 4500',
    email: 'hubballi.3s@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:00 PM',
    hasWorkshop: true
  },

  // Tamil Nadu
  {
    id: 'd-chn-1',
    name: 'Raoz Motors Coastal Logistics - Chennai',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Tamil Nadu',
    city: 'Chennai',
    address: 'No. 24, Ambattur Industrial Estate, Chennai Bypass Road, Chennai - 600058',
    pincode: '600058',
    phone: '+91 44 2625 3300',
    email: 'chennai.ambattur@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:30 PM',
    hasWorkshop: true
  },
  {
    id: 'd-cbe-1',
    name: 'Raoz Motors Kongu Hub - Coimbatore',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Tamil Nadu',
    city: 'Coimbatore',
    address: 'NH-544 Avinashi Road, Near Neelambur Toll Plaza, Coimbatore - 641062',
    pincode: '641062',
    phone: '+91 422 262 7800',
    email: 'coimbatore@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:00 PM',
    hasWorkshop: true
  },

  // Telangana & Andhra Pradesh
  {
    id: 'd-hyd-1',
    name: 'Raoz Motors Deccan Commercial - Hyderabad',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Telangana',
    city: 'Hyderabad',
    address: 'Plot 35, Autonagar, Vanasthalipuram, Vijayawada Highway, Hyderabad - 500070',
    pincode: '500070',
    phone: '+91 40 2412 8800',
    email: 'hyderabad.autonagar@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 8:00 PM | 24x7 Quick Towing',
    hasWorkshop: true
  },
  {
    id: 'd-vij-1',
    name: 'Raoz Motors Krishna Valley - Vijayawada',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Andhra Pradesh',
    city: 'Vijayawada',
    address: 'Block E, New Auto Nagar, Kanuru Road, Vijayawada - 520007',
    pincode: '520007',
    phone: '+91 866 254 7700',
    email: 'vijayawada@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:00 PM',
    hasWorkshop: true
  },

  // Gujarat
  {
    id: 'd-ahm-1',
    name: 'Raoz Motors Western Hub - Ahmedabad',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    address: 'Plot 104, Sarkhej-Bavla Highway, Changodar Industrial Zone, Ahmedabad - 382213',
    pincode: '382213',
    phone: '+91 79 2693 4500',
    email: 'ahmedabad.changodar@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:30 PM',
    hasWorkshop: true
  },
  {
    id: 'd-sur-1',
    name: 'Raoz Motors Diamond City - Surat',
    facilityType: 'Authorized Showroom',
    state: 'Gujarat',
    city: 'Surat',
    address: 'GIDC Industrial Estate, Sachin, Surat-Navsari Road, Surat - 394230',
    pincode: '394230',
    phone: '+91 261 239 6700',
    email: 'surat@raozmotors.com',
    timing: 'Mon - Sat: 9:30 AM - 7:00 PM',
    hasWorkshop: true
  },

  // Rajasthan
  {
    id: 'd-jai-1',
    name: 'Raoz Motors Pink City Commercial - Jaipur',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Rajasthan',
    city: 'Jaipur',
    address: 'Road No. 14, Vishwakarma Industrial Area (VKIA), Sikar Road, Jaipur - 302013',
    pincode: '302013',
    phone: '+91 141 233 4500',
    email: 'jaipur.vkia@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:30 PM',
    hasWorkshop: true
  },
  {
    id: 'd-uda-1',
    name: 'Raoz Motors Mewar Hub - Udaipur',
    facilityType: 'Authorized Service Workshop',
    state: 'Rajasthan',
    city: 'Udaipur',
    address: 'MIA Industrial Area, Madri Road No. 4, Udaipur - 313002',
    pincode: '313002',
    phone: '+91 294 249 1100',
    email: 'udaipur@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 6:30 PM',
    hasWorkshop: true
  },

  // West Bengal
  {
    id: 'd-kol-1',
    name: 'Raoz Motors Eastern Gateway - Kolkata',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'West Bengal',
    city: 'Kolkata',
    address: 'NH-6 Bombay Road, Kona Expressway Junction, Dhulagarh Truck Terminal, Howrah - 711302',
    pincode: '711302',
    phone: '+91 33 2661 7800',
    email: 'kolkata.howrah@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:30 PM',
    hasWorkshop: true
  },

  // Punjab & Haryana
  {
    id: 'd-chd-1',
    name: 'Raoz Motors Corporate Flagship - Chandigarh',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Punjab',
    city: 'Chandigarh / Mohali',
    address: 'Plot 15, Industrial Area Phase II, Near Airport Road, Mohali / Chandigarh - 160002',
    pincode: '160002',
    phone: '+91 172 265 8900',
    email: 'chandigarh@raozmotors.com',
    timing: 'Mon - Sat: 8:30 AM - 7:30 PM',
    hasWorkshop: true
  },
  {
    id: 'd-lud-1',
    name: 'Raoz Motors Grand Trunk Dealership - Ludhiana',
    facilityType: '3S (Sales, Service, Spares)',
    state: 'Punjab',
    city: 'Ludhiana',
    address: 'Dhandari Kalan, Focal Point Phase VII, Sherpur Chowk, GT Road, Ludhiana - 141010',
    pincode: '141010',
    phone: '+91 161 251 3400',
    email: 'ludhiana@raozmotors.com',
    timing: 'Mon - Sat: 9:00 AM - 7:00 PM',
    hasWorkshop: true
  }
];

export const ALL_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    date: 'September 24, 2026',
    category: 'Product Launch',
    title: 'Raoz Motors Unveils Next-Gen BS6 Phase 2 Sartaj & Samrat Fleet with Integrated Saarthi 3.0 Telematics',
    excerpt: 'Featuring enhanced fuel efficiency up to 8% and standard dual airbag driver cabin safety, the newly updated lineup addresses the growing demands of India’s express logistics ecosystem.',
    readTime: '3 min read',
    image: '/assets/raozmotors/truck_samrat_gs.jpg'
  },
  {
    id: 'news-2',
    date: 'August 14, 2026',
    category: 'Award',
    title: 'Raoz Motors Awarded "School Bus Manufacturer of the Year" at Indian Commercial Vehicle Awards',
    excerpt: 'Recognized for pioneering AIS 063 child-safety measures, anti-pinch pneumatic passenger doors, and 360-degree blind spot camera integration across over 4,500 schools.',
    readTime: '4 min read',
    image: '/assets/raozmotors/bus_school_saathi.jpg'
  },
  {
    id: 'news-3',
    date: 'July 10, 2026',
    category: 'Sustainability',
    title: 'Zero-Emission EV Bus Prototype Enters Real-World Field Validation at Asron Manufacturing Facility',
    excerpt: 'Marking a decisive step into green transit, Raoz Motors commences extensive 50,000-km endurance trials for its upcoming 9-meter full-electric city transit bus.',
    readTime: '5 min read',
    image: '/assets/raozmotors/tech_rd_testing.jpg'
  },
  {
    id: 'news-4',
    date: 'June 02, 2026',
    category: 'Corporate',
    title: 'Raoz Motors Surpasses 300+ Authorized 3S Dealership & Service Touchpoints Across India',
    excerpt: 'With rapid expansion in Tier-2 and Tier-3 transportation corridors, fleet operators now enjoy guaranteed on-highway technical support within 4 hours anywhere on golden quadrilateral routes.',
    readTime: '2 min read',
    image: '/assets/raozmotors/service_center_workshop.jpg'
  }
];

export const ALL_CAREERS: CareerOpening[] = [
  {
    id: 'car-1',
    title: 'Senior Automotive Chassis & Powertrain Design Engineer',
    department: 'Engineering & R&D',
    location: 'Asron / Mohali Technical Centre',
    experience: '5 - 8 Years',
    type: 'Full Time',
    description: 'Lead structural FEA analysis, chassis integration, and suspension geometry tuning for next-generation LCV and ICV commercial platforms.'
  },
  {
    id: 'car-2',
    title: 'Robotic Welding & CED Paint Shop Manager',
    department: 'Plant Operations & Manufacturing',
    location: 'Asron Plant, Punjab',
    experience: '7 - 10 Years',
    type: 'Full Time',
    description: 'Oversee automated robotic body-in-white (BIW) welding cells and ensure six-sigma quality standards across cathode electrodeposition primer lines.'
  },
  {
    id: 'car-3',
    title: 'Regional Fleet Sales Manager (Logistics & E-Commerce Accounts)',
    department: 'Sales & Dealer Development',
    location: 'Mumbai / Delhi NCR',
    experience: '4 - 7 Years',
    type: 'Full Time',
    description: 'Drive strategic relationships with top 3PL logistics giants, cold-chain operators, and institutional school bus fleet managers.'
  },
  {
    id: 'car-4',
    title: 'Telematics IoT Software Specialist (SML Saarthi Platform)',
    department: 'Customer Service',
    location: 'Bengaluru R&D Hub',
    experience: '3 - 6 Years',
    type: 'Full Time',
    description: 'Architect real-time CAN-bus telemetry ingestion pipelines, predictive maintenance alert algorithms, and driver behavior scoring dashboards.'
  }
];
