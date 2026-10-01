import { BusinessWebsite } from '../types';

export interface BrightLoanProduct {
  id: string;
  slug: string;
  name: string;
  category: 'personal' | 'home' | 'property' | 'business' | 'gold' | 'education';
  tagline: string;
  badge: string;
  shortDescription: string;
  minAmount: number;
  maxAmount: number;
  minTenureMonths: number;
  maxTenureMonths: number;
  interestRateDisplay: string;
  processingFee: string;
  features: string[];
  eligibility: string[];
  documents: string[];
  bannerImage: string;
}

export interface BrightLoanFaq {
  question: string;
  answer: string;
}

// Configurable contact & branding variables for SABKA LOANS (Site #49)
export const BRAND_NAME = 'SABKA LOANS';
export const BRAND_DISPLAY = 'Sabka Loans';
export const BRAND_TAGLINE = 'Fast, Transparent Digital Loans for Every Life Milestone';

export const PHONE_NUMBER = '+91 98110 54219';
export const EMAIL_ADDRESS = 'support@sabkaloans.in';
export const WHATSAPP_NUMBER = '919811054219';
export const OFFICE_ADDRESS = 'Plot 42, Connaught Place, Block C, Central Delhi, New Delhi - 110001, India';

// Configurable URLs for the 8 primary business categories in the platform
export const RESTAURANT_URL = '#restaurant';
export const SALON_URL = '#salon';
export const CAFE_URL = '#cafe';
export const JEWELLERY_URL = '#jewellery';
export const GYM_URL = '#gym';
export const SABKA_LOANS_URL = '#sabka-loans';
export const SABKA_FINANCE_URL = '#sabka-finance';
export const REAL_ESTATE_URL = '#square-yard-dealers';

export const SABKA_LOANS_CONFIG = {
  brandName: BRAND_NAME,
  brandDisplay: BRAND_DISPLAY,
  tagline: BRAND_TAGLINE,
  shortBio: 'Sabka Loans is India’s premier digital credit facilitator, connecting ambitious individuals and businesses with top lending institutions for fast, transparent, and hassle-free loans.',
  helplinePhone: PHONE_NUMBER,
  supportEmail: EMAIL_ADDRESS,
  whatsappNumber: WHATSAPP_NUMBER,
  workingHours: 'Monday – Saturday: 9:30 AM – 7:30 PM (IST)',
  headOffice: OFFICE_ADDRESS,
  websiteNumber: 49
};

export const LONKARO_NAME = 'Lonkaro';

export const SABKA_FINANCE_CONFIG = {
  ...SABKA_LOANS_CONFIG,
  lonkaroName: LONKARO_NAME
};

export type LoanProduct = BrightLoanProduct;

export interface LoanPurposeCardItem {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  highlights: string[];
  icon: string;
  slug: string;
  minAmount: number;
}

export const LOAN_PURPOSE_CARDS: LoanPurposeCardItem[] = [
  {
    id: 'lpc-personal',
    title: 'Personal Loan',
    badge: 'Quick Disbursal',
    shortDescription: 'Flexible unsecured credit for medical emergencies, travel, wedding, or debt consolidation with fast digital disbursement.',
    highlights: ['Sanction within 4 hours', 'Zero physical collateral', 'Tenure 12 to 60 months'],
    icon: 'UserCheck',
    slug: 'personal-loan',
    minAmount: 50000
  },
  {
    id: 'lpc-home',
    title: 'Home Loan',
    badge: 'Lowest Interest',
    shortDescription: 'Competitive home financing for purchasing apartments, independent villas, construction, or balance transfer.',
    highlights: ['Up to 85% property cost', 'Flexible tenure to 30 yrs', 'PMAY interest subsidy'],
    icon: 'Home',
    slug: 'home-loan',
    minAmount: 500000
  },
  {
    id: 'lpc-business',
    title: 'Business Loan',
    badge: 'Working Capital',
    shortDescription: 'Fuel SME expansion, machinery acquisition, bulk inventory purchase, and everyday operational cash flows.',
    highlights: ['Collateral-free up to ₹50L', 'Fast digital sanctions', 'Flexible repayment cycle'],
    icon: 'Zap',
    slug: 'business-loan',
    minAmount: 200000
  },
  {
    id: 'lpc-education',
    title: 'Education Loan',
    badge: 'Study Abroad',
    shortDescription: 'Comprehensive student loans covering university tuition, hostel accommodation, flight tickets, and study equipment.',
    highlights: ['Course moratorium buffer', 'Up to 100% expense cover', 'Pre-visa sanction letters'],
    icon: 'GraduationCap',
    slug: 'education-loan',
    minAmount: 100000
  },
  {
    id: 'lpc-medical',
    title: 'Medical Emergency Loan',
    badge: 'Urgent Care',
    shortDescription: 'Immediate funds to cover unforeseen medical treatments, surgeries, hospitalization, and health emergencies.',
    highlights: ['Priority same-day approval', 'Minimal documentation', 'No collateral required'],
    icon: 'HeartPulse',
    slug: 'personal-loan',
    minAmount: 30000
  },
  {
    id: 'lpc-wedding',
    title: 'Wedding Loan',
    badge: 'Celebrations',
    shortDescription: 'Celebrate life milestones with planned financial peace of mind for banquet, catering, jewellery, and gifts.',
    highlights: ['Customizable credit limits', 'Manage family expenses', 'Easy monthly installments'],
    icon: 'Sparkles',
    slug: 'personal-loan',
    minAmount: 100000
  },
  {
    id: 'lpc-travel',
    title: 'Travel & Holiday Loan',
    badge: 'Getaways',
    shortDescription: 'Finance family vacations, domestic holidays, or international getaways with stress-free repayment terms.',
    highlights: ['Pre-approved flight & hotel funds', 'Pocket-friendly EMIs', 'Instant paperless approval'],
    icon: 'Plane',
    slug: 'personal-loan',
    minAmount: 50000
  },
  {
    id: 'lpc-lap',
    title: 'Loan Against Property',
    badge: 'High Value',
    shortDescription: 'Unlock hidden equity in residential or commercial real estate for long-term expansion at lower interest rates.',
    highlights: ['High loan quantum to ₹5 Cr', 'Long tenure up to 15 yrs', 'Lower borrowing cost'],
    icon: 'CreditCard',
    slug: 'property-loan',
    minAmount: 1000000
  }
];

export const SUPPORT_PROMISES = [
  {
    id: 'sp-1',
    title: 'Multi-Lender Access',
    description: 'Compare offers from 30+ leading public & private banks and RBI-registered NBFCs simultaneously.'
  },
  {
    id: 'sp-2',
    title: 'Dedicated Guidance',
    description: 'Expert financial coordinators assist with document verification, eligibility, and underwriting.'
  },
  {
    id: 'sp-3',
    title: 'Transparent Terms',
    description: 'Zero hidden fees, zero surprise deductions. Complete clarity on interest rates and processing fees.'
  },
  {
    id: 'sp-4',
    title: 'Status Updates',
    description: 'Real-time SMS and WhatsApp progress alerts from initial application to final disbursal.'
  }
];

export const TRUST_PILLARS = [
  {
    id: 'tp-1',
    title: 'Bank-Grade Security',
    description: '256-bit SSL encrypted platform safeguarding all customer data and uploaded documents.'
  },
  {
    id: 'tp-2',
    title: 'Zero Upfront Fees',
    description: 'We never ask for cash advances or registration fees. Official charges are deducted by lenders on disbursal.'
  },
  {
    id: 'tp-3',
    title: 'RBI-Regulated Partners',
    description: 'Loans are processed and disbursed exclusively through regulated financial institutions.'
  },
  {
    id: 'tp-4',
    title: 'Privacy Compliance',
    description: 'We respect your privacy and never sell customer data to unvetted third-party marketing companies.'
  }
];

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
    description: 'BrightLoans-style personal, home & business digital loan marketplace',
    isActive: true
  },
  {
    id: 'sabka-finance',
    name: 'FINANCE — SABKA FINANCE',
    displayName: 'Sabka Finance',
    url: SABKA_FINANCE_URL,
    iconName: 'credit-card',
    description: 'Sabka Finance (Lonkaro) — Simple Financial Solutions for Everyday Needs'
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

// BrightLoans-style Core Loan Offerings
export const BRIGHT_LOAN_PRODUCTS: BrightLoanProduct[] = [
  {
    id: 'bl-personal',
    slug: 'personal-loan',
    name: 'Personal Loan',
    category: 'personal',
    tagline: 'Instant Paperless Personal Loans Up to ₹15 Lakhs',
    badge: 'Fast Sanction',
    shortDescription: 'Flexible unsecured credit for medical emergencies, travel, wedding, or debt consolidation with fast digital disbursement.',
    minAmount: 50000,
    maxAmount: 1500000,
    minTenureMonths: 12,
    maxTenureMonths: 60,
    interestRateDisplay: '10.25% - 21% p.a.',
    processingFee: '1% to 2.5% + GST',
    features: [
      'Instant online sanction letter within 4 hours',
      'Zero collateral or physical guarantor required',
      'Flexible tenure ranging from 12 to 60 months',
      'Direct account transfer via NEFT/RTGS'
    ],
    eligibility: [
      'Salaried employee or self-employed professional',
      'Age between 21 and 58 years',
      'Minimum monthly take-home salary of ₹20,000',
      'CIBIL credit score of 700+ preferred'
    ],
    documents: [
      'PAN Card & Aadhaar Card (e-KYC verified)',
      'Last 3 months salary slips or Income Tax Returns',
      'Last 6 months salary account bank statements',
      'Current residential address proof'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bl-home',
    slug: 'home-loan',
    name: 'Home Loan',
    category: 'home',
    tagline: 'Lowest Interest Home Loans for Your Dream Property',
    badge: 'Popular',
    shortDescription: 'Fund your apartment purchase, builder floor, independent villa, or plot construction with extended 30-year tenures.',
    minAmount: 500000,
    maxAmount: 50000000,
    minTenureMonths: 60,
    maxTenureMonths: 360,
    interestRateDisplay: '8.40% - 10.50% p.a.',
    processingFee: '0.25% to 0.50% + GST',
    features: [
      'Financing up to 80-85% of total property value',
      'Long tenure up to 30 years for affordable EMIs',
      'Balance transfer facility with top-up loan option',
      'Doorstep legal and technical valuation assistance'
    ],
    eligibility: [
      'Indian Resident or Non-Resident Indian (NRI)',
      'Age 23 to 65 years at loan maturity',
      'Stable employment (minimum 2 years experience) or business (3 years)',
      'Property title must be legally clear and searchable'
    ],
    documents: [
      'KYC documents of all primary and co-applicants',
      'Last 2 years Form 16 / ITR with computation',
      'Last 6 months operating bank account statements',
      'Property documents: Allotment Letter, ATS, Chain deeds'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bl-property',
    slug: 'loan-against-property',
    name: 'Loan Against Property (LAP)',
    category: 'property',
    tagline: 'Unlock the Hidden Cash Value of Your Real Estate',
    badge: 'High Value',
    shortDescription: 'Leverage your self-occupied residential or commercial property to secure substantial working capital or personal liquidity.',
    minAmount: 1000000,
    maxAmount: 100000000,
    minTenureMonths: 36,
    maxTenureMonths: 180,
    interestRateDisplay: '9.00% - 12.50% p.a.',
    processingFee: '0.50% to 1.00% + GST',
    features: [
      'Substantially lower interest rates compared to personal loans',
      'Loan amounts up to 65-70% of market property valuation',
      'Continued full occupancy and usage of your property',
      'Flexible end-use: business expansion, debt payoff, or weddings'
    ],
    eligibility: [
      'Property owner (individual, firm, or private limited)',
      'Freehold residential, commercial, or industrial property',
      'Clean credit history with adequate repayment capacity'
    ],
    documents: [
      'Original title deeds and sanctioned layout plan',
      'Last 3 years audited financial statements & ITR',
      'Last 12 months primary banking statements',
      'Property tax receipts & occupancy certificate'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bl-business',
    slug: 'business-loan',
    name: 'Business Loan',
    category: 'business',
    tagline: 'Collateral-Free MSME & Working Capital Loans Up to ₹50 Lakhs',
    badge: 'For MSMEs',
    shortDescription: 'Fast working capital financing for inventory stocking, machinery purchase, supplier payments, and business scaling.',
    minAmount: 100000,
    maxAmount: 5000000,
    minTenureMonths: 12,
    maxTenureMonths: 60,
    interestRateDisplay: '12.00% - 24% p.a.',
    processingFee: '1.5% to 3.0% + GST',
    features: [
      'No collateral security or property pledge required',
      'Overdraft limit and dropline credit line facilities',
      'Assessment based on banking cashflows and GST returns',
      'Sanction within 48 business hours for eligible firms'
    ],
    eligibility: [
      'Proprietorship, Partnership, LLP, or Private Limited',
      'Business in operations for at least 2 consecutive years',
      'Annual turnover of minimum ₹25 Lakhs',
      'Active GST registration with filed returns'
    ],
    documents: [
      'Promoter KYC (PAN, Aadhaar) & Business PAN',
      'GST returns for last 12 months (GSTR-3B)',
      'Last 12 months bank statement for current accounts',
      'Last 2 years Income Tax Returns with balance sheet'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bl-gold',
    slug: 'gold-loan',
    name: 'Gold Loan',
    category: 'gold',
    tagline: 'Instant Cash Against Physical Gold Jewellery',
    badge: 'Same-Day Cash',
    shortDescription: 'Instant liquidity against 18K to 24K hallmarked gold ornaments with secure vault storage and zero prepayment penalties.',
    minAmount: 20000,
    maxAmount: 5000000,
    minTenureMonths: 3,
    maxTenureMonths: 36,
    interestRateDisplay: '8.75% - 15.00% p.a.',
    processingFee: '0.25% - 0.75%',
    features: [
      'Instant appraisal and disbursement within 30 minutes',
      'Insurance-backed bank vault custody for your jewellery',
      'Bullet repayment or monthly interest servicing schemes',
      'Zero penalty on early loan closure'
    ],
    eligibility: [
      'Any adult citizen possessing gold ornaments',
      'No formal income proof or credit score prerequisite',
      'Minimum purity of 18 Carats'
    ],
    documents: [
      'Identity Proof (PAN Card / Aadhaar / Voter ID)',
      'Current residential address proof',
      'Passport-size photograph'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bl-education',
    slug: 'education-loan',
    name: 'Education Loan',
    category: 'education',
    tagline: 'Fund Domestic & Overseas Higher Studies',
    badge: 'Global Studies',
    shortDescription: 'Comprehensive student loans covering tuition fees, hostel expenses, travel, and study supplies with flexible moratorium.',
    minAmount: 100000,
    maxAmount: 7500000,
    minTenureMonths: 12,
    maxTenureMonths: 180,
    interestRateDisplay: '9.25% - 13.50% p.a.',
    processingFee: '0.50% to 1.50%',
    features: [
      'Course moratorium period plus 6-12 months post-study buffer',
      'Covers up to 100% of academic and living expenses',
      'Pre-visa sanction letters for overseas university admissions',
      'Tax deduction benefits under Section 80E of Income Tax Act'
    ],
    eligibility: [
      'Indian student secured admission in recognized university',
      'Co-borrower (parent, guardian, or spouse) with steady income',
      'Good academic track record'
    ],
    documents: [
      'Admission confirmation letter & fee structure breakdown',
      'Academic marksheets (Class 10, 12, Graduation)',
      'Co-borrower KYC, salary slips, and 6 months bank statement'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SABKA_LOAN_PRODUCTS = BRIGHT_LOAN_PRODUCTS;

// BrightLoans FAQs
export const BRIGHT_LOAN_FAQS: BrightLoanFaq[] = [
  {
    question: 'How is Sabka Loans different from traditional bank branches?',
    answer: 'Sabka Loans operates an intelligent digital multi-lender platform. Instead of visiting multiple bank branches and submitting repeated paper applications, our algorithm assesses your credit profile against 30+ leading banks and NBFCs simultaneously, ensuring you receive the highest sanction amount at the most competitive interest rate.'
  },
  {
    question: 'What is the minimum credit score required to secure a loan?',
    answer: 'A CIBIL credit score of 700 or above is ideal for personal and unsecured business loans to secure prime interest rates. However, for applicants with limited credit history or lower scores, we partner with specialized NBFCs offering secured programs or asset-backed alternatives like Gold Loans and LAP.'
  },
  {
    question: 'How is the monthly EMI calculated?',
    answer: 'Your monthly Equated Monthly Installment (EMI) is calculated using the standard reducing balance formula based on: (1) Principal loan amount, (2) Annual interest rate, and (3) Loan tenure in months. You can use our interactive EMI Calculator on this page to test different amounts and tenures before applying.'
  },
  {
    question: 'Are there any prepayment or foreclosure charges?',
    answer: 'In accordance with Reserve Bank of India (RBI) guidelines, floating-rate personal loans and home loans sanctioned to individual borrowers carry ZERO prepayment or foreclosure charges. For fixed-rate loans or non-individual business entities, nominal foreclosure fees (typically 2% to 4%) may apply as per lender agreement.'
  },
  {
    question: 'How quickly will the sanctioned funds reach my bank account?',
    answer: 'For pre-qualified personal loans with completed digital e-KYC and e-NACH mandate, funds are disbursed directly into your bank account within 4 to 24 hours. Secured loans (Home Loans and LAP) typically take 5 to 7 working days due to physical title verification and legal search.'
  },
  {
    question: 'Can I apply if I am self-employed or run a small enterprise?',
    answer: 'Yes! We have customized lending options for self-employed professionals, traders, retailers, and service providers. Evaluation is based on last 2 years ITR, GST returns, and primary current account bank statements.'
  },
  {
    question: 'Does Sabka Loans charge any fee to check loan eligibility?',
    answer: 'No. Checking your loan eligibility and comparing lender offers on Sabka Loans is 100% free. Any applicable lender processing fee is clearly disclosed in the sanction letter and deducted only upon successful loan disbursal.'
  }
];

export const LOAN_FAQS = BRIGHT_LOAN_FAQS;

// Mandatory Legal Disclaimer
export const MANDATORY_LEGAL_DISCLAIMER =
  'Sabka Loans is an independent loan facilitation platform connecting borrowers with partner banks and RBI-registered NBFCs. Sabka Loans does not disburse funds directly or guarantee loan approvals. All loan sanctions, interest rates, processing charges, and tenures are determined solely by the respective lending institution based on applicant eligibility and underwriting guidelines. Sabka Loans never requests upfront cash or processing fees directly from borrowers.';

// Exported BusinessWebsite model for Sabka Loans (Site #49)
export const SABKA_LOANS_WEBSITE: BusinessWebsite = {
  id: 'sabka-loans',
  slug: 'sabka-loans',
  businessName: 'Sabka Loans',
  category: 'loan_dsa' as any,
  templateId: 'template-finance-brightloans',
  tagline: 'Fast, Transparent Digital Loans for Every Life Milestone',
  description: 'Premier digital loan facilitation marketplace helping individuals and businesses access competitive personal, home, business, and property loans across India.',
  ownerName: 'Sabka Loans Advisory',
  phone: PHONE_NUMBER,
  whatsapp: WHATSAPP_NUMBER,
  email: EMAIL_ADDRESS,
  address: OFFICE_ADDRESS,
  city: 'Central Delhi',
  mapsUrl: 'https://maps.google.com',
  openingHours: 'Mon - Sat: 9:30 AM - 7:30 PM',
  secondaryColor: '#0f172a',
  logoUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#1e40af',
  fontFamily: 'Inter, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Apply for Loan',
  specialBadge: 'Website #49 · Finance Website #1',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Fast Digital Loans', isEnabled: true, order: 1 },
    { id: 'products', title: 'Our Loan Products', isEnabled: true, order: 2 },
    { id: 'calculator', title: 'Interactive EMI Calculator', isEnabled: true, order: 3 },
    { id: 'eligibility', title: 'Eligibility & Documents', isEnabled: true, order: 4 },
    { id: 'process', title: 'How It Works', isEnabled: true, order: 5 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 6 }
  ],
  offers: [],
  gallery: [],
  items: []
};
