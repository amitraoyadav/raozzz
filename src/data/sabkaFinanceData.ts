import { BusinessWebsite } from '../types';

export interface LoanProduct {
  id: string;
  slug: string;
  name: string;
  category: 'personal' | 'medical' | 'education' | 'wedding' | 'travel' | 'short-term' | 'home-renovation' | 'other';
  tagline: string;
  shortDescription: string;
  longDescription: string;
  minAmount: number;
  maxAmount: number;
  minTenureMonths: number;
  maxTenureMonths: number;
  indicativeInterestRate: string;
  processingFee: string;
  features: string[];
  eligibility: string[];
  documents: {
    salaried: string[];
    selfEmployed: string[];
  };
  suitableFor: string[];
  bannerImage: string;
}

export interface LoanFaqItem {
  question: string;
  answer: string;
  category?: string;
}

// Configurable contact & branding variables for SABKA FINANCE (Site #50)
export const BRAND_NAME = 'SABKA FINANCE';
export const BRAND_DISPLAY = 'Sabka Finance';
export const BRAND_TAGLINE = 'Simple Financial Solutions for Everyday Needs';
export const LONKARO_NAME = 'Lonkaro';

export const PHONE_NUMBER = '+91 92181 13668';
export const EMAIL_ADDRESS = 'care@sabkafinance.in';
export const WHATSAPP_NUMBER = '919218113668';
export const OFFICE_ADDRESS = 'Tower B, 4th Floor, Sector 12, Dwarka, New Delhi - 110078, India';

// Configurable URLs for the 8 primary business categories in the platform
export const RESTAURANT_URL = '#restaurant';
export const SALON_URL = '#salon';
export const CAFE_URL = '#cafe';
export const JEWELLERY_URL = '#jewellery';
export const GYM_URL = '#gym';
export const SABKA_LOANS_URL = '#sabka-loans';
export const SABKA_FINANCE_URL = '#sabka-finance';
export const REAL_ESTATE_URL = '#square-yard-dealers';

export const SABKA_FINANCE_CONFIG = {
  brandName: BRAND_NAME,
  brandDisplay: BRAND_DISPLAY,
  lonkaroName: LONKARO_NAME,
  tagline: BRAND_TAGLINE,
  shortBio: 'Sabka Finance is a customer-focused financial assistance platform designed to make the loan application journey simpler, clearer and more accessible across India.',
  helplinePhone: PHONE_NUMBER,
  supportEmail: EMAIL_ADDRESS,
  whatsappNumber: WHATSAPP_NUMBER,
  workingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM (IST)',
  headOffice: OFFICE_ADDRESS,
  websiteNumber: 50
};

// The 8 categories in the updated collection
export interface MainCategoryItem {
  id: string;
  name: string;
  displayName: string;
  url: string;
  iconName: 'utensils' | 'scissors' | 'coffee' | 'gem' | 'dumbbell' | 'landmark' | 'credit-card' | 'building';
  description: string;
  count?: number;
  isActive?: boolean;
}

export const MAIN_EIGHT_CATEGORIES: MainCategoryItem[] = [
  {
    id: 'restaurant',
    name: 'RESTAURANT',
    displayName: 'Restaurant',
    url: RESTAURANT_URL,
    iconName: 'utensils',
    description: 'Fine dining, cloud kitchens, QSR chains & food delivery solutions'
  },
  {
    id: 'salon',
    name: 'SALON',
    displayName: 'Salon & Spa',
    url: SALON_URL,
    iconName: 'scissors',
    description: 'Luxury salons, beauty studios, aesthetic clinics & barber shops'
  },
  {
    id: 'cafe',
    name: 'CAFE',
    displayName: 'Cafe & Roastery',
    url: CAFE_URL,
    iconName: 'coffee',
    description: 'Specialty coffee, artisanal roasteries & high-street cafes'
  },
  {
    id: 'jewellery',
    name: 'JEWELLERY',
    displayName: 'Jewellery',
    url: JEWELLERY_URL,
    iconName: 'gem',
    description: 'Fine gold, diamond jewellery, polki & bridal collections'
  },
  {
    id: 'gym',
    name: 'GYM',
    displayName: 'Gym & Fitness',
    url: GYM_URL,
    iconName: 'dumbbell',
    description: 'Fitness centers, premium gyms, crossfit & wellness'
  },
  {
    id: 'sabka-loans',
    name: 'FINANCE — SABKA LOANS',
    displayName: 'Sabka Loans',
    url: SABKA_LOANS_URL,
    iconName: 'landmark',
    description: 'BrightLoans-style personal, home & business digital loan marketplace'
  },
  {
    id: 'sabka-finance',
    name: 'FINANCE — SABKA FINANCE',
    displayName: 'Sabka Finance',
    url: SABKA_FINANCE_URL,
    iconName: 'credit-card',
    description: 'Sabka Finance (Lonkaro) — Simple Financial Solutions for Everyday Needs',
    isActive: true
  },
  {
    id: 'real-estate',
    name: 'REAL ESTATE',
    displayName: 'Square Yard Dealers',
    url: REAL_ESTATE_URL,
    iconName: 'building',
    description: 'Square Yard Dealers — Indian property discovery & marketplace'
  }
];

// 8 Purpose Cards for Sabka Finance
export const SABKA_FINANCE_PRODUCTS: LoanProduct[] = [
  {
    id: 'prod-personal',
    slug: 'personal-loan',
    name: 'Personal Loan',
    category: 'personal',
    tagline: 'Flexible financing for eligible personal requirements',
    shortDescription: 'Unsecured personal loan assistance with minimal documentation, competitive interest rates, and tailored tenure up to 60 months.',
    longDescription: 'Our personal loan facilitation helps salaried professionals and self-employed individuals meet immediate financial needs such as debt consolidation, home improvement, emergency expenses, or planned milestones.',
    minAmount: 25000,
    maxAmount: 1500000,
    minTenureMonths: 12,
    maxTenureMonths: 60,
    indicativeInterestRate: '10.5% - 24% p.a.',
    processingFee: '1.5% - 3% + GST',
    features: [
      'Digital application with fast pre-assessment',
      'No collateral or guarantor required',
      'Flexible repayment options between 12 to 60 months',
      'Assistance through documentation & lender sanction'
    ],
    eligibility: [
      'Indian resident aged 21 to 58 years',
      'Minimum monthly net salary of ₹15,000 (Salaried)',
      'Minimum 1 year of continuous employment or business continuity',
      'Valid PAN card and Aadhaar with mobile linkage'
    ],
    documents: {
      salaried: [
        'PAN Card & Aadhaar Card',
        'Last 3 months salary slips',
        'Last 6 months bank statement showing salary credits',
        'Current address proof (utility bill/rent agreement)'
      ],
      selfEmployed: [
        'PAN Card & Aadhaar Card',
        'Business registration proof (GST/MSME/Shop Act)',
        'Last 2 years Income Tax Returns (ITR) with computation',
        'Last 12 months primary current bank account statement'
      ]
    },
    suitableFor: [
      'Medical emergencies & health checkups',
      'Home repair, painting & interior upgradation',
      'Unplanned personal or family expenses',
      'Debt consolidation into single manageable EMI'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-medical',
    slug: 'medical-loan',
    name: 'Medical Emergency',
    category: 'medical',
    tagline: 'Financial assistance for hospital and medical needs',
    shortDescription: 'Prioritized loan facilitation for unexpected medical treatments, surgeries, hospitalization, or diagnostic procedures.',
    longDescription: 'Medical emergencies cannot wait. We offer expedited loan processing assistance designed to support patients and their families when dealing with healthcare costs not fully covered by insurance.',
    minAmount: 20000,
    maxAmount: 1000000,
    minTenureMonths: 6,
    maxTenureMonths: 36,
    indicativeInterestRate: '11% - 22% p.a.',
    processingFee: '1% - 2.5% + GST',
    features: [
      'Priority assessment with dedicated loan coordinator',
      'Hospital estimate accepted for enhanced assessment',
      'Quick disbursal subject to lender sanction',
      'Tenure tailored to reduce monthly installment burden'
    ],
    eligibility: [
      'Indian citizen aged 21 to 60 years',
      'Patient or family member with steady income',
      'Valid identity and residential address proofs'
    ],
    documents: {
      salaried: [
        'KYC: PAN & Aadhaar Card',
        'Last 3 months bank statements',
        'Hospital estimate letter or treatment summary (if available)'
      ],
      selfEmployed: [
        'KYC: PAN & Aadhaar Card',
        'Last 6 months bank statement',
        'Hospital estimate bill or doctor prescription'
      ]
    },
    suitableFor: [
      'Planned or emergency surgeries',
      'Diagnostic tests and specialized medication',
      'Post-operative care and rehabilitation',
      'Bridging gaps in medical insurance coverage'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-education',
    slug: 'education-loan',
    name: 'Education Loan',
    category: 'education',
    tagline: 'Supporting tuition fees, courses, coaching and study needs',
    shortDescription: 'Financing solutions to fund degree programs, professional certifications, upskilling bootcamps, and competitive exam coaching.',
    longDescription: 'Invest in educational advancement and career growth. Sabka Finance assists students, parents, and working professionals in discovering education loan options with flexible repayment schedules and competitive terms.',
    minAmount: 50000,
    maxAmount: 2000000,
    minTenureMonths: 12,
    maxTenureMonths: 84,
    indicativeInterestRate: '9.5% - 18% p.a.',
    processingFee: '1% - 2% + GST',
    features: [
      'Covers tuition fees, hostel, study material & equipment',
      'Parent or legal guardian can apply as co-applicant',
      'Moratorium or interest-only options available with partner lenders',
      'Applicable for domestic courses & recognized online credentials'
    ],
    eligibility: [
      'Confirmed admission letter or fee demand notice from institute',
      'Co-applicant (parent/spouse) with stable monthly income',
      'Indian resident with complete KYC documents'
    ],
    documents: {
      salaried: [
        'Student KYC & Co-applicant KYC (PAN & Aadhaar)',
        'Course admission letter with fee structure',
        'Co-applicant last 3 months salary slips & 6 months bank statement'
      ],
      selfEmployed: [
        'Student KYC & Co-applicant KYC',
        'Admission offer and fee breakdown',
        'Co-applicant last 2 years ITR and 12 months bank statements'
      ]
    },
    suitableFor: [
      'Undergraduate & postgraduate degree programs',
      'Executive MBA, Data Science & AI certification bootcamps',
      'NEET, JEE, UPSC & competitive coaching institute fees',
      'Study laptop, laboratory equipment & academic travel'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-wedding',
    slug: 'wedding-loan',
    name: 'Wedding Loan',
    category: 'wedding',
    tagline: 'Assistance for marriage celebrations and associated expenses',
    shortDescription: 'Plan your special celebration without financial strain. Manage venue booking, catering, jewellery, and wedding travel smoothly.',
    longDescription: 'Weddings bring unforgettable memories but often require substantial upfront liquidity. Our wedding loan facilitation provides access to unsecured personal financing with fixed EMIs, enabling families to plan events without liquidating long-term investments.',
    minAmount: 50000,
    maxAmount: 1500000,
    minTenureMonths: 12,
    maxTenureMonths: 60,
    indicativeInterestRate: '11% - 22% p.a.',
    processingFee: '1.5% - 3% + GST',
    features: [
      'No collateral needed for eligible applicants',
      'Disbursal directly to applicant bank account',
      'Convenient repayment tenures to suit post-wedding cashflows',
      'Transparent schedule with zero hidden service charges'
    ],
    eligibility: [
      'Age 21 to 58 years with regular employment/business income',
      'Minimum monthly income of ₹20,000',
      'Satisfactory credit bureau history'
    ],
    documents: {
      salaried: [
        'PAN Card, Aadhaar Card',
        'Last 3 months salary slips & 6 months bank statement',
        'Current residential address proof'
      ],
      selfEmployed: [
        'PAN Card, Aadhaar Card, Business registration proof',
        'Last 12 months bank statements & recent ITR'
      ]
    },
    suitableFor: [
      'Banquet hall, resort & wedding venue advance bookings',
      'Bridal couture, jewellery & trousseau purchases',
      'Catering, photography, floral decor & music arrangements',
      'Honeymoon travel packages & logistics'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-travel',
    slug: 'travel-loan',
    name: 'Travel Loan',
    category: 'travel',
    tagline: 'Finance vacation, overseas travel or family trips',
    shortDescription: 'Make your bucket-list vacation or family holiday a reality with affordable monthly installments and fast loan assistance.',
    longDescription: 'Explore the world on your terms. Sabka Finance assists travellers in discovering short-to-medium term personal financing for flights, hotel accommodations, holiday packages, and visa expenses.',
    minAmount: 25000,
    maxAmount: 800000,
    minTenureMonths: 6,
    maxTenureMonths: 36,
    indicativeInterestRate: '11.5% - 22% p.a.',
    processingFee: '1.5% - 2.5% + GST',
    features: [
      'Fast digital application review',
      'Disbursed directly into your account to book flights & stays',
      'No collateral or hypothecation required',
      'Tenure options from 6 to 36 months'
    ],
    eligibility: [
      'Resident of India aged 21 to 58 years',
      'Employed with salaried or established business income',
      'Net monthly income of ₹18,000+'
    ],
    documents: {
      salaried: [
        'PAN & Aadhaar Card',
        'Last 3 months salary slips',
        'Last 3 months bank statements'
      ],
      selfEmployed: [
        'PAN & Aadhaar Card',
        'Business proof & last 6 months bank statements'
      ]
    },
    suitableFor: [
      'International vacations & Europe/Asia tours',
      'Domestic family holiday packages & pilgrimage trips',
      'Flight tickets, visa documentation & hotel bookings',
      'Solo travel, backpacking & leisure expeditions'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-home-renovation',
    slug: 'home-renovation-loan',
    name: 'Home Renovation',
    category: 'home-renovation',
    tagline: 'Funds for home improvement, repair, modular kitchen and interiors',
    shortDescription: 'Upgrade, repaint, expand or furnish your living space with convenient home renovation loan facilitation.',
    longDescription: 'Give your home the makeover it deserves. Whether you want to install a modern modular kitchen, repaint before the festive season, or upgrade electrical and plumbing fixtures, our loan assistance helps you fund home improvements with ease.',
    minAmount: 50000,
    maxAmount: 2500000,
    minTenureMonths: 12,
    maxTenureMonths: 84,
    indicativeInterestRate: '10.5% - 20% p.a.',
    processingFee: '1% - 2.5% + GST',
    features: [
      'No property mortgage required for unsecured renovation loans',
      'High sanction amount up to ₹25 Lakhs for qualified profiles',
      'Longer repayment tenures up to 7 years to keep EMI low',
      'Available for self-owned homes or parental residences'
    ],
    eligibility: [
      'Indian resident aged 23 to 60 years',
      'Proof of residence ownership or parental ownership',
      'Stable regular income source'
    ],
    documents: {
      salaried: [
        'PAN & Aadhaar Card',
        'Proof of property ownership (electricity bill/property tax/registry copy)',
        'Last 3 months salary slips & 6 months bank statement'
      ],
      selfEmployed: [
        'PAN & Aadhaar Card',
        'Property ownership document',
        'Business proof, last 2 years ITR & 12 months bank statements'
      ]
    },
    suitableFor: [
      'Modular kitchen & bathroom fittings renovation',
      'Interior designer charges, false ceiling & lighting',
      'Exterior waterproofing, terrace repair & painting',
      'Flooring upgrade, wooden tiling & furniture purchase'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-short-term',
    slug: 'short-term-financial-requirement',
    name: 'Short-Term Financial Requirement',
    category: 'short-term',
    tagline: 'Quick digital credit assistance for urgent cashflow bridges',
    shortDescription: 'Bridge temporary cashflow crunches, pending payments, or month-end liquidity needs with flexible short-tenure loan options.',
    longDescription: 'Short-term liquidity gaps can disrupt personal budgets and business operations. Sabka Finance facilitates quick assessment of short-tenure digital credit options with structured repayment tenures from 3 to 18 months.',
    minAmount: 15000,
    maxAmount: 300000,
    minTenureMonths: 3,
    maxTenureMonths: 18,
    indicativeInterestRate: '1.2% - 2.5% per month',
    processingFee: '2% - 4% + GST',
    features: [
      'Swift digital pre-qualification',
      'Short tenure for quick repayment without long-term commitment',
      'Minimal paperwork requirement',
      'Transparent repayment schedule provided prior to acceptance'
    ],
    eligibility: [
      'Salaried employee with salary credited via bank account',
      'Minimum monthly income of ₹15,000',
      'Age between 21 and 55 years'
    ],
    documents: {
      salaried: [
        'PAN Card & Aadhaar Card',
        'Latest 3 months bank statement in PDF format',
        'Company ID card or employment letter'
      ],
      selfEmployed: [
        'PAN & Aadhaar Card',
        'Last 6 months bank statements with active UPI/business credits'
      ]
    },
    suitableFor: [
      'Month-end budget shortfall & school fee deadlines',
      'Urgent vehicle repairs & maintenance bills',
      'Advance security deposits for rental accommodation',
      'Temporary cashflow gap before festival bonus or salary'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prod-other',
    slug: 'other-financial-support',
    name: 'Other Financial Support',
    category: 'other',
    tagline: 'Customized loan guidance for unique personal requirements',
    shortDescription: 'Tailored financial guidance for equipment purchases, agricultural needs, small business working capital, and specialized credit.',
    longDescription: 'Every financial situation is unique. If your requirement does not neatly fit into standard categories, our customer coordinators evaluate your scenario to identify suitable lender programs matching your specific needs and profile.',
    minAmount: 25000,
    maxAmount: 2000000,
    minTenureMonths: 6,
    maxTenureMonths: 60,
    indicativeInterestRate: '11% - 24% p.a.',
    processingFee: '1.5% - 3% + GST',
    features: [
      'One-on-one consultation with loan coordinator',
      'Multi-lender program matching based on applicant profile',
      'Customized repayment structure where permitted by lenders',
      'Clear regulatory disclosures and assistance throughout'
    ],
    eligibility: [
      'Individual, proprietor or business partner aged 21 to 65',
      'Demonstrable source of regular income',
      'Clear identity and address documentation'
    ],
    documents: {
      salaried: [
        'PAN Card, Aadhaar Card, Address Proof',
        'Latest 3-6 months income & banking records'
      ],
      selfEmployed: [
        'PAN Card, Aadhaar Card, Trade/Business proofs',
        'Bank statements, tax returns & financial statements'
      ]
    },
    suitableFor: [
      'Home appliance purchases & electronic gadgets',
      'Family functions & ceremonial expenses',
      'Freelancer & creator equipment purchases (camera, workstation)',
      'General personal financing needs'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80'
  }
];

// 10 Detailed FAQs for Sabka Finance
export const SABKA_FINANCE_FAQS: LoanFaqItem[] = [
  {
    question: 'What is Sabka Finance and how does it assist borrowers?',
    answer: 'Sabka Finance (also operating under the short name Lonkaro) is a customer-focused loan facilitation and financial assistance platform. We help borrowers understand loan eligibility criteria, compare suitable financing options from partner RBI-registered NBFCs and banks, and navigate the application process smoothly. We do not charge upfront processing fees to explore options.'
  },
  {
    question: 'Is Sabka Finance a bank or an NBFC?',
    answer: 'No. Sabka Finance is an independent digital loan facilitator and corporate assistance platform. We connect applicants with regulated financial institutions (banks and RBI-registered NBFCs). All loan sanction decisions, interest rate determinations, and fund disbursements are handled solely by the lending partners.'
  },
  {
    question: 'What loan amounts and tenures can I explore through Sabka Finance?',
    answer: 'Depending on your employment type, monthly income, credit score, and purpose, you can explore loan options ranging from ₹15,000 to ₹25,00,000. Available repayment tenures typically range from 3 months for short-term needs up to 84 months for education and renovation loans.'
  },
  {
    question: 'What are the basic eligibility criteria for loan application?',
    answer: 'Standard criteria include: (1) Indian citizen aged between 21 and 58 years, (2) Minimum regular net monthly income of ₹15,000 (salaried) or continuous business activity (self-employed), (3) Valid PAN card and Aadhaar with active mobile linkage, and (4) An active Indian bank account.'
  },
  {
    question: 'What documents are required to apply?',
    answer: 'Basic documents needed are: (1) Identity Proof (PAN Card), (2) Address Proof (Aadhaar Card, Passport, or Voter ID), (3) Income Proof (last 3 months salary slips or recent ITR), and (4) Banking Proof (last 3 to 6 months bank statement showing regular salary or business income credits).'
  },
  {
    question: 'How long does the application assessment and disbursement take?',
    answer: 'Initial digital pre-assessment on our platform is completed within minutes. Once complete documentation is uploaded and verified by the partner lender, formal in-principle approval is typically communicated within 24 to 48 working hours, followed by direct disbursal to your bank account.'
  },
  {
    question: 'Does applying through Sabka Finance guarantee loan approval?',
    answer: 'No. We believe in complete transparency: loan approval, interest rate, and sanction limits are strictly determined by our partner lending institutions based on your credit profile, repayment capacity, and risk policies. Sabka Finance never promises guaranteed approvals.'
  },
  {
    question: 'Are there any hidden fees or upfront advance payments?',
    answer: 'Absolutely not. Sabka Finance never requests upfront token payments, cash advances, or security deposits from customers. Official lender processing fees (ranging from 1% to 3% plus GST) are deducted directly from the sanctioned loan amount at the time of disbursement by the regulated lender.'
  },
  {
    question: 'How do I repay my loan EMIs?',
    answer: 'All loan repayments must be made directly to the lending institution via official NACH auto-debit, e-mandate, or through the lender\'s verified banking portal. Sabka Finance never collects EMI cash or transfers into personal accounts.'
  },
  {
    question: 'How is my personal information protected?',
    answer: 'We adhere to stringent data protection standards including 256-bit SSL encryption. We never sell customer information to third-party telemarketers. Customers can request complete data deletion at any time in accordance with our Data Deletion Policy.'
  }
];

// Mandatory Legal Disclaimer
export const MANDATORY_LEGAL_DISCLAIMER =
  'Sabka Finance is a financial assistance and loan facilitation platform and is not a bank, NBFC or government authority. Loan availability, eligibility, processing fees, interest rates and disbursals are strictly subject to applicant qualifications and partner lender policies. Sabka Finance does not promise guaranteed loan approval and never demands upfront fees for loan processing.';

// Exported BusinessWebsite model for Sabka Finance (Site #50)
export const SABKA_FINANCE_WEBSITE: BusinessWebsite = {
  id: 'sabka-finance',
  slug: 'sabka-finance',
  businessName: 'Sabka Finance',
  category: 'loan_dsa' as any,
  templateId: 'template-finance-facilitator',
  tagline: 'Simple Financial Solutions for Everyday Needs',
  description: 'Customer-focused financial assistance platform helping eligible borrowers explore suitable loan options with a transparent digital application and professional assistance.',
  ownerName: 'Sabka Finance Advisory',
  phone: PHONE_NUMBER,
  whatsapp: WHATSAPP_NUMBER,
  email: EMAIL_ADDRESS,
  address: OFFICE_ADDRESS,
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com',
  openingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  secondaryColor: '#0f172a',
  logoUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0d9488',
  fontFamily: 'Inter, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Apply Now',
  specialBadge: 'Website #50 · Finance Website #2',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Financial Support When You Need It', isEnabled: true, order: 1 },
    { id: 'offers', title: 'Solutions for Different Financial Needs', isEnabled: true, order: 2 },
    { id: 'eligibility', title: 'Check Your Eligibility', isEnabled: true, order: 3 },
    { id: 'process', title: 'Simple 3-Step Process', isEnabled: true, order: 4 },
    { id: 'security', title: 'Security & Compliance', isEnabled: true, order: 5 },
    { id: 'partners', title: 'Lending Partners & Facilitation', isEnabled: true, order: 6 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 7 }
  ],
  offers: [],
  gallery: [],
  items: []
};
