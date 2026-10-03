import { BusinessWebsite } from '../types';

export type GroupAchLoanType = 'home_loan' | 'loan_against_property';

export interface GroupAchLeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  loanType: GroupAchLoanType;
  loanAmount: number | string;
  cityPincode: string;
  city?: string;
  employmentType?: 'salaried' | 'self_employed' | 'business_owner';
  monthlyIncome?: number | string;
  existingEmi?: number | string;
  propertyType?: string;
  message?: string;
  leadSource?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface BankPartner {
  name: string;
  category: 'Public Bank' | 'Private Bank' | 'Housing Finance Co' | 'NBFC';
  homeLoanRate: string;
  lapRate: string;
  maxTenure: string;
  popularFor: string;
}

export interface LoanProduct {
  id: string;
  title: string;
  type: GroupAchLoanType;
  tagline: string;
  interestRateStarting: string;
  maxTenureYears: number;
  maxLtv: string;
  description: string;
  variants: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  eligibility: string[];
  documentsRequired: {
    salaried: string[];
    selfEmployed: string[];
  };
}

export const BRAND_CONFIG = {
  name: 'Group ACH',
  fullName: 'Group ACH Loan Solutions',
  tagline: 'Expert Home Loan & Property Loan Advisors',
  domain: 'www.achlinks.in',
  domainUrl: 'https://www.achlinks.in',
  phone: '+91 94825 37337',
  phoneClean: '+919482537337',
  whatsappNumber: '+91 94825 37337',
  whatsappRaw: '919482537337',
  email: 'hello@achlinks.in',
  workingHours: 'Mon–Sat · 9:30 AM – 7:00 PM IST',
  address: 'Connaught Place / South Delhi Central Hub, New Delhi - 110001',
  panIndiaStatement: 'Group ACH operates as a pan-India channel partner with door-step service across major metros. Write to us for the advisor nearest you.',
  legalDisclaimer:
    'Group ACH is an independent loan channel partner/connector and is not a bank or financial institution. We facilitate connections with multiple registered banks and financial institutions. Loan approval, interest rates, eligibility, processing fees and other terms are subject to the respective lender\'s policies, assessment and approval.'
};

export const PARTNER_BANKS: BankPartner[] = [
  {
    name: 'State Bank of India',
    category: 'Public Bank',
    homeLoanRate: '8.40% onwards',
    lapRate: '9.35% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Lowest overall interest & zero prepayment penalties'
  },
  {
    name: 'HDFC Bank',
    category: 'Private Bank',
    homeLoanRate: '8.45% onwards',
    lapRate: '9.40% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Lightning fast sanctions & flexible repayment structures'
  },
  {
    name: 'ICICI Bank',
    category: 'Private Bank',
    homeLoanRate: '8.50% onwards',
    lapRate: '9.50% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Instant digital pre-approvals & pre-approved builder projects'
  },
  {
    name: 'Axis Bank',
    category: 'Private Bank',
    homeLoanRate: '8.55% onwards',
    lapRate: '9.60% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: '12 EMI waiver schemes & high LTV property funding'
  },
  {
    name: 'Kotak Mahindra Bank',
    category: 'Private Bank',
    homeLoanRate: '8.45% onwards',
    lapRate: '9.35% onwards',
    maxTenure: 'Up to 25 Yrs',
    popularFor: 'Best balance transfer rates & special women borrower pricing'
  },
  {
    name: 'Bank of Baroda',
    category: 'Public Bank',
    homeLoanRate: '8.40% onwards',
    lapRate: '9.30% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Baroda Home Loan Advantage (Overdraft facility linked)'
  },
  {
    name: 'PNB Housing Finance',
    category: 'Housing Finance Co',
    homeLoanRate: '8.60% onwards',
    lapRate: '9.75% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Self-employed profile flexibility & customized tenure'
  },
  {
    name: 'Tata Capital',
    category: 'NBFC',
    homeLoanRate: '8.65% onwards',
    lapRate: '9.65% onwards',
    maxTenure: 'Up to 20 Yrs',
    popularFor: 'High-ticket LAP for business expansion with easy paperwork'
  },
  {
    name: 'Bajaj Finserv',
    category: 'NBFC',
    homeLoanRate: '8.60% onwards',
    lapRate: '9.50% onwards',
    maxTenure: 'Up to 25 Yrs',
    popularFor: 'Flexi-Hybrid credit line on property mortgage'
  },
  {
    name: 'Aditya Birla Capital',
    category: 'NBFC',
    homeLoanRate: '8.70% onwards',
    lapRate: '9.80% onwards',
    maxTenure: 'Up to 20 Yrs',
    popularFor: 'Commercial property LAP & debt consolidation'
  },
  {
    name: 'LIC Housing Finance',
    category: 'Housing Finance Co',
    homeLoanRate: '8.50% onwards',
    lapRate: '9.60% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Panchayat & semi-urban property approval acceptance'
  },
  {
    name: 'Godrej Housing Finance',
    category: 'Housing Finance Co',
    homeLoanRate: '8.55% onwards',
    lapRate: '9.70% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Smooth digital process & balance transfer top-ups'
  }
];

export const PRODUCTS_DATA: LoanProduct[] = [
  {
    id: 'home-loan',
    title: 'Home Loans',
    type: 'home_loan',
    tagline: 'Your dream home made effortless with lowest rates & up to 90% funding.',
    interestRateStarting: '8.35% p.a.',
    maxTenureYears: 30,
    maxLtv: 'Up to 90% of Agreement Value',
    description:
      'Whether you are purchasing a new ready-to-move apartment, constructing an independent villa, or transferring an existing high-cost home loan for lower EMIs, Group ACH connects you with 70+ partner banks for optimal rate sanctioning and fast-track processing.',
    variants: [
      {
        title: 'New Home Purchase Loan',
        description: 'For buying under-construction or ready-to-move flats, villas, and row houses from approved builders or resale owners.'
      },
      {
        title: 'Home Construction Loan',
        description: 'Staged disbursal loan tailored specifically for constructing a house on your owned freehold plot.'
      },
      {
        title: 'Home Loan Balance Transfer (HLBT)',
        description: 'Switch your ongoing home loan from high interest rates (9.5%+) to starting 8.35% with an instant top-up loan option.'
      },
      {
        title: 'Composite Loan (Plot + Construction)',
        description: 'Single comprehensive loan sanction covering both residential land acquisition and subsequent house construction.'
      },
      {
        title: 'Home Improvement & Renovation Loan',
        description: 'Fund interior redesign, structural expansion, or modular furnishing with convenient extended tenure.'
      }
    ],
    keyBenefits: [
      'Interest rates starting from 8.35% p.a. from premier Indian banks',
      'Long tenure up to 30 years for affordable, stress-free EMIs',
      'High Loan-to-Value (LTV) up to 90% for properties up to ₹30 Lakhs (80% for higher ticket sizes)',
      'Tax deduction benefits up to ₹1.5 Lakhs (Sec 80C) & up to ₹2 Lakhs (Sec 24b)',
      'Doorstep document pickup and complete multi-bank representation by your Group ACH advisor',
      'Zero advisory charges to borrower'
    ],
    eligibility: [
      'Resident Indians & Non-Resident Indians (NRIs)',
      'Age: 21 years to 65 years (at time of loan maturity)',
      'Employment: Salaried (min 1-2 years experience) or Self-Employed / Professional (min 2 years vintage)',
      'Minimum Net Monthly Income: ₹25,000 / month',
      'Preferred Credit Score (CIBIL): 700+ for best interest rate tiers'
    ],
    documentsRequired: {
      salaried: [
        'PAN Card, Aadhaar Card, Passport / Voter ID',
        'Last 3 months salary slips with company seal',
        'Last 6 months salary bank account statement',
        'Form 16 (last 2 assessment years) / Latest ITR',
        'Property documents: Allotment letter, sale agreement draft, builder payment receipts'
      ],
      selfEmployed: [
        'PAN Card, Aadhaar Card, Business KYC (GST registration, Shop Act)',
        'Last 3 years audited financial statements (P&L and Balance Sheet)',
        'Last 2-3 years Income Tax Returns with computation sheet',
        'Last 12 months current & savings bank account statements',
        'Title deeds, sanctioned building plan, encumbrance certificate (EC)'
      ]
    }
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property (LAP)',
    type: 'loan_against_property',
    tagline: 'Unlock maximum liquidity from your residential, commercial, or industrial asset.',
    interestRateStarting: '9.25% p.a.',
    maxTenureYears: 20,
    maxLtv: 'Up to 70% of Property Market Value',
    description:
      'Loan Against Property (Mortgage Loan) is the smartest route to secure substantial funding for working capital, business expansion, debt consolidation, medical emergency, or family milestones at significantly lower interest rates than unsecured business or personal loans.',
    variants: [
      {
        title: 'Residential Property Mortgage',
        description: 'Pledge self-occupied, vacant, or rented residential houses, apartments, and villas for substantial capital.'
      },
      {
        title: 'Commercial Property LAP',
        description: 'Borrow against commercial offices, retail shops, showrooms, or doctor clinics with flexible repayment structures.'
      },
      {
        title: 'Industrial & Warehouse Property Funding',
        description: 'Mortgage approved industrial sheds, factories, and logistics warehouses for operational scaling.'
      },
      {
        title: 'LAP Balance Transfer & High Top-Up',
        description: 'Refinance existing high-rate property mortgage with another bank and unlock supplementary capital at lower cost.'
      },
      {
        title: 'Lease Rental Discounting (LRD)',
        description: 'Raise capital based on the discounted present value of rental cash flows from premier corporate tenants.'
      }
    ],
    keyBenefits: [
      'Substantial loan sanctions from ₹20 Lakhs up to ₹25+ Crores',
      'Interest rates much lower than personal loans (starting 9.25% vs 14-20% for unsecured loans)',
      'Comfortable tenure up to 15 to 20 years enabling manageable cash outflows',
      'Zero end-use restrictions — utilize for business growth, inventory, machinery, or private needs',
      'Overdraft (OD) / Drop-line Flexi facility options to pay interest only on utilized funds',
      'Retain complete ownership and usage rights of your pledged property'
    ],
    eligibility: [
      'Salaried individuals, Self-employed professionals (Doctors, CAs, Architects), and Business Proprietors / Pvt Ltd',
      'Property owners with clear, marketable title free from disputes',
      'Minimum business vintage: 2–3 years for self-employed entities',
      'Clear property approval from municipal corporation or urban development authority',
      'CIBIL score 675+ accepted, with tailored NBFC pathways for nuanced profiles'
    ],
    documentsRequired: {
      salaried: [
        'KYC: PAN, Aadhaar, address proof',
        'Last 6 months salary account bank statements',
        'Last 3 months salary slips & latest Form 16',
        'Complete property chain of title documents, registered sale deed, parent deeds, approved plan'
      ],
      selfEmployed: [
        'Business entity proof: Certificate of Incorporation, Partnership Deed, GST Returns',
        'Last 3 years audited balance sheet & P&L statements with Tax Audit reports',
        'Last 12 months primary banking statements (current + operational accounts)',
        'Registered Title Deed, Mutation / Khata certificate, Property Tax paid receipts, Encumbrance Certificate (13–30 yrs)'
      ]
    }
  }
];

export const TRUST_PILLARS = [
  {
    title: '70+ Banks & NBFCs',
    highlight: 'Maximum Approval Chance',
    description: 'We match your specific income and property profile to the exact lending institution with the highest sanction probability.'
  },
  {
    title: 'Door-Step Document Service',
    highlight: 'Zero Branch Hassle',
    description: 'Our dedicated loan advisors collect your paperwork from your home or office and manage all bank liaison end-to-end.'
  },
  {
    title: 'Maximum Eligibility & LTV',
    highlight: 'Optimized Loan Amount',
    description: 'We structure co-applicants, rental income, and business depreciation to unlock the highest permissible loan amount.'
  },
  {
    title: '100% Transparent Process',
    highlight: 'Secure Cost-Free Consultation',
    description: 'No hidden charges or surprise deductions. We negotiate processing fee waivers and competitive ROI directly for you.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Instant Profile Assessment',
    description: 'Share your loan requirement via our quick form or WhatsApp. Your dedicated Group ACH advisor evaluates income, CIBIL, and property eligibility.'
  },
  {
    step: '02',
    title: 'Doorstep Paperwork Pickup',
    description: 'We organize and verify your document checklist at your doorstep, eliminating repetitive visits to multiple bank branches.'
  },
  {
    step: '03',
    title: 'Multi-Bank Rate Negotiation',
    description: 'We present your application across our 70+ partner banking ecosystem to negotiate the lowest interest rate and maximum loan sanction.'
  },
  {
    step: '04',
    title: 'Sanction & Fast Disbursement',
    description: 'Receive your formal sanction letter within 3 to 7 working days, followed by legal/technical clearance and direct account disbursement.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh & Priyanka Sharma',
    role: 'IT Enterprise Director & Senior Architect',
    location: 'Whitefield, Bengaluru',
    loanType: 'Home Loan Balance Transfer + Top Up',
    amount: '₹1.45 Crore',
    savings: 'Saved ₹11,200 monthly EMI',
    quote:
      'We were paying 9.65% with our earlier private lender. Group ACH advisor assigned to us analyzed our portfolio, handled all paperwork at our home, and shifted us to SBI at 8.40% with a ₹25 Lakh top-up for interiors. The entire transition was seamlessly executed without us stepping into a bank branch.'
  },
  {
    name: 'Anand K. Mehra',
    role: 'Managing Director, Precision Tech Components',
    location: 'Andheri East, Mumbai',
    loanType: 'Loan Against Commercial Property',
    amount: '₹3.20 Crore',
    savings: 'Disbursed in 6 working days',
    quote:
      'We needed urgent business liquidity to finance a high-volume export order. Standard bank branches quoted 45 days. Group ACH structured our commercial showroom mortgage with a leading NBFC at 9.35% with an Overdraft facility. Their direct banking relationships made all the difference.'
  },
  {
    name: 'Dr. Sunita V. Rao',
    role: 'Senior Consultant Surgeon',
    location: 'Jubilee Hills, Hyderabad',
    loanType: 'New Luxury Villa Home Loan',
    amount: '₹2.10 Crore',
    savings: 'Zero processing fee negotiated',
    quote:
      'Given my demanding hospital shifts, I had zero bandwidth to visit banks. Group ACH managed everything from legal vetting of builder documents to coordinating bank valuation officers. Transparent, responsive on WhatsApp at any hour, and truly professional.'
  }
];

export const FAQ_LIST = [
  {
    q: 'How does Group ACH help me get a better loan rate than applying directly at a bank?',
    a: 'When you apply directly at a single bank branch, you are limited to their fixed internal rate card and strict single-lender risk parameters. Group ACH operates as an authorized loan channel partner connected to 70+ leading public, private banks and NBFCs. Because we originate high loan volumes monthly, we have access to priority processing desks, special rate concessions, processing fee waivers, and customized valuation norms that individual retail walk-in applicants cannot access.'
  },
  {
    q: 'Does Group ACH charge any upfront service fees to borrowers?',
    a: 'No. Group ACH does not charge any upfront consulting or service fees to loan applicants. As an authorized institutional channel partner, our services to borrowers are completely free of charge. You only pay standard, transparent bank processing fees and statutory stamp duty directly to the lending institution upon sanction.'
  },
  {
    q: 'What is the key difference between a Home Loan and a Loan Against Property (LAP)?',
    a: 'A Home Loan is specifically taken to purchase, construct, or renovate a residential dwelling, with strict fund end-use rules and income tax deductions under Section 80C and Section 24b. In contrast, Loan Against Property (LAP) allows you to mortgage an already owned residential or commercial property to raise unrestricted liquidity for business working capital, personal milestones, debt consolidation, or emergency funding.'
  },
  {
    q: 'What is the minimum CIBIL score required for approval?',
    a: 'A credit score of 750 and above unlocks the best tier-1 interest rates from premier banks like SBI, HDFC, and Kotak. However, if your CIBIL score is between 650 and 749, Group ACH works with specialized partner NBFCs and housing finance companies that evaluate your banking cash flow and asset strength to approve loans that traditional branch managers might reject.'
  },
  {
    q: 'How much loan can I get on my property (LTV)?',
    a: 'For Home Loans, banks can fund up to 90% of agreement value for properties up to ₹30 Lakhs, and up to 75% to 80% for higher value properties. For Loan Against Property (LAP), lending institutions usually sanction between 50% to 70% of the independent market valuation report for residential property, and 50% to 65% for commercial premises.'
  },
  {
    q: 'Can I do a balance transfer of my existing loan to lower my EMI?',
    a: 'Yes! If you took a Home Loan or LAP 1–3 years ago at a higher interest rate (e.g. 9.5% or above), a Balance Transfer can save you tens of lakhs in lifetime interest. We calculate your exact break-even period, handle the foreclosure letter coordination from your existing lender, and secure an additional top-up loan at low rates if you need extra funds.'
  },
  {
    q: 'How fast can I get loan sanction through Group ACH?',
    a: 'With complete initial documentation, initial digital sanction/in-principle approval is obtained within 24 to 48 hours. Final legal and technical valuation clearance and physical sanction letter are typically issued within 3 to 7 working days.'
  }
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'home-loan-eligibility-criteria-guide',
    title: 'Home Loan Eligibility: Complete Guide to FOIR and Salary Multipliers',
    category: 'Eligibility',
    date: 'March 28, 2026',
    readTime: '6 min read',
    author: 'Amit Yadav (Lead Advisory Partner)',
    summary:
      'Learn how banks evaluate your net monthly salary, existing debts, FOIR ratio, and CIBIL score to calculate your maximum borrowing limit.',
    keyTakeaways: [
      'Banks generally cap FOIR at 50% to 65% of net monthly income.',
      'A CIBIL score above 750 unlocks prime repo-linked interest rates.',
      'Adding an earning co-applicant significantly enhances joint eligibility.',
      'Pre-closing high-interest credit card balances and personal loans boosts home loan capacity.'
    ],
    content: [
      'Securing a home loan sanction begins with understanding how bank underwriters assess credit risk and financial capacity. While property selection is crucial, your borrowing eligibility determines the quantum of capital lenders are willing to disburse.',
      '1. Understanding Fixed Obligation to Income Ratio (FOIR): FOIR is the percentage of your take-home monthly salary committed to existing EMIs. If your net monthly salary is ₹1,20,000 and you pay an auto loan EMI of ₹20,000, your current obligation ratio is 16.6%. If the lender has a maximum permissible FOIR of 60%, your total debt allocation can reach ₹72,000 per month, leaving ₹52,000 available for your new home loan EMI.',
      '2. The Net Salary Multiplier: For standard 20-year home loans, top lenders typically sanction approximately 55 to 60 times your net monthly income. A borrower earning ₹1,50,000 monthly with clean credit history can anticipate an indicative sanction of ₹80 to ₹90 Lakhs.',
      '3. Strategic Steps to Boost Your Eligibility: Before applying, clear outstanding credit card balances, consolidate short-term personal debts, add an earning spouse as co-borrower, and opt for a 25 or 30-year tenure to lower monthly installment calculations.'
    ]
  },
  {
    slug: 'complete-documents-checklist-home-loan',
    title: 'Documents Required for Home Loan in India: Salaried & Self-Employed Checklist',
    category: 'Documentation',
    date: 'March 20, 2026',
    readTime: '5 min read',
    author: 'Group ACH Credit Underwriting Desk',
    summary:
      'Exhaustive paperwork checklist for salaried employees, business owners, and property title vetting to prevent sanction rejections.',
    keyTakeaways: [
      'Salaried applicants require 3 months salary slips, 6 months bank statement, and 2 years Form 16.',
      'Self-employed applicants need 3 years audited ITR with CA-certified balance sheets and 12 months banking.',
      'Chain of title deeds must be verified for at least 30 continuous years.',
      'Sanctioned architectural building plan and Occupancy Certificate (OC) are mandatory for builder floors.'
    ],
    content: [
      'Document mismatches and incomplete title chains are the single most common cause of home loan processing delays in Delhi NCR. Having your financial dossier organized before initial credit submission ensures rapid approval.',
      'For Salaried Employees: Ensure that all salary slips reflect consistent provident fund (PF) deductions and that salary credits in your primary bank statement precisely match the net pay recorded on your payslips.',
      'For Self-Employed & MSMEs: Lenders scrutinize gross annual turnover, profit after tax (PAT), depreciation add-backs, and GST compliance. A clean bank account with healthy average quarterly balance (AQB) signals financial discipline.',
      'Legal Property Due Diligence: In resale acquisitions, verify that the seller possesses the original conveyance deed, mother deed, mutation certificates, and latest property tax assessment receipts.'
    ]
  },
  {
    slug: 'loan-against-property-vs-home-loan-differences',
    title: 'Home Loan vs Loan Against Property: Key Differences in Rates, Tenure & Tax',
    category: 'Property Finance',
    date: 'March 14, 2026',
    readTime: '7 min read',
    author: 'Mortgage Advisory Team',
    summary:
      'Comparison of Home Loans vs Loan Against Property (LAP) covering interest rate spreads, collateral rules, end-use restrictions, and tax treatments.',
    keyTakeaways: [
      'Home loans are restricted strictly to buying or constructing residential homes.',
      'Loan Against Property offers 100% end-use freedom for business or liquidity.',
      'Home loan interest rates are lower (benchmark linked) than LAP spreads.',
      'LAP offers up to 15-20 year repayment horizons compared to expensive 3-5 year business loans.'
    ],
    content: [
      'While both home loans and loans against property involve real estate collateral, their regulatory frameworks and end-use permissions differ substantially under RBI guidelines.',
      'End-Use Permissions: When you avail a home loan, disbursements are made directly to the developer, seller, or construction contractor. You cannot use these funds for personal or business needs. In contrast, Loan Against Property (LAP) funds are credited to your personal or current account and can be deployed freely for working capital, business expansion, or personal milestones.',
      'Interest Rates & Collateral: Home loans enjoy the lowest interest rates in the retail lending market. LAP rates carry a modest spread (usually 0.75% to 1.50% higher than home loans) but remain far cheaper than unsecured business or personal financing.'
    ]
  },
  {
    slug: 'home-loan-balance-transfer-savings-calculator',
    title: 'What Is Home Loan Balance Transfer? Calculate Interest Savings & Break-Even',
    category: 'Loan Transfer',
    date: 'March 05, 2026',
    readTime: '5 min read',
    author: 'Financial Advisory Desk',
    summary:
      'Learn how transferring an existing high-interest home loan to a lower repo-linked rate can save lakhs in interest and reduce tenure.',
    keyTakeaways: [
      'Switching from an old MCLR or high spread loan can save ₹3 to ₹8 Lakhs over 15 years.',
      'Foreclosure charges on floating rate home loans for individual borrowers are 0% as per RBI rules.',
      'Compute break-even by comparing upfront processing fees against monthly EMI savings.',
      'Avail additional top-up loans during transfer at prime mortgage rates.'
    ],
    content: [
      'Borrowers who initiated their home loans 3 to 7 years ago often find themselves paying higher floating spreads than currently offered to new applicants.',
      'Why Balance Transfer Works: When RBI reduces repo rates or when an applicant\'s credit score improves significantly (e.g. from 680 to 780), refinancing your outstanding balance to a new bank reduces monthly interest outlays immediately.',
      'Zero Prepayment Penalty: Under RBI directives, banks and HFCs cannot levy any foreclosure penalty or prepayment fee on floating rate home loans sanctioned to individual borrowers.'
    ]
  },
  {
    slug: 'home-loan-tax-benefits-section-80c-24b',
    title: 'Home Loan Tax Benefits Explained: Section 80C, 24(b) & Joint Deduction Rules',
    category: 'Financial Planning',
    date: 'February 22, 2026',
    readTime: '6 min read',
    author: 'Tax & Real Estate Advisory',
    summary:
      'Detailed overview of income tax deductions on home loan principal and interest repayments under the Old Tax Regime.',
    keyTakeaways: [
      'Principal repayment qualifies for deduction up to ₹1.5 Lakhs under Section 80C.',
      'Interest payment on self-occupied home qualifies for deduction up to ₹2 Lakhs under Section 24(b).',
      'Joint borrowers (e.g., husband and wife) can both claim separate deductions, doubling tax benefits.',
      'Stamp duty and registration fees can be claimed under Section 80C in the year of purchase.'
    ],
    content: [
      'A residential home loan is not only a mechanism for property acquisition but also one of the most effective tax-saving tools for salaried and self-employed taxpayers in India.',
      'Section 24(b) Interest Deduction: You can deduct up to ₹2,00,000 annually against interest paid on a home loan for a self-occupied property. For rented properties, the entire interest can be set off against rental income subject to annual loss limits.',
      'Section 80C Principal Deduction: Up to ₹1,50,000 can be claimed annually towards principal repayment. Furthermore, one-time stamp duty and registration fees paid during the financial year qualify under this overall ceiling.'
    ]
  },
  {
    slug: 'self-employed-home-loan-income-proof-guide',
    title: 'Home Loan for Self-Employed Individuals: Approvals Without Standard ITR',
    category: 'Self-Employed Applicants',
    date: 'February 10, 2026',
    readTime: '6 min read',
    author: 'SME Mortgage Credit Desk',
    summary:
      'How business proprietors, traders, and consultants can qualify for high-ticket home loans using banking surrogates and GST turnover.',
    keyTakeaways: [
      'Banking surrogate programs evaluate average monthly bank balances rather than net taxable ITR.',
      'GST turnover schemes sanction loans based on verified gross business receipts and industry profit margins.',
      'Depreciation and directors remuneration can be added back to compute true cash flow.',
      'Co-applicant inclusion strengthens business stability scores.'
    ],
    content: [
      'Entrepreneurs and business proprietors often reinvest gross revenues into operating inventory, resulting in modest net profit figures on their ITR. Traditional algorithms that rely strictly on Form 16 or net taxable income may undervalue their repayment capacity.',
      'The Banking Surrogate Method: Lenders review 12 months current and savings account statements, calculating average bank balance (ABB) and debit-credit velocity to determine real cash generation.',
      'GST Turnover Assessment: By applying benchmark industry profit margins (typically 8% to 15%) against annual GST return filings (GSTR-3B), specialized underwriters compute an adjusted net income to sanction eligible loan amounts.'
    ]
  }
];

// Calculation Functions
export function calculateEmi(principal: number, annualRate: number, tenureYears: number) {
  if (principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
    return {
      monthlyEmi: 0,
      totalInterest: 0,
      totalPayment: 0,
      principalPercent: 100,
      interestPercent: 0
    };
  }

  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;
  const principalPercent = Math.round((principal / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return {
    monthlyEmi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principalPercent,
    interestPercent
  };
}

export function generateAmortizationSchedule(principal: number, annualRate: number, tenureYears: number) {
  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let remainingBalance = principal;
  const yearlySchedule = [];

  for (let year = 1; year <= tenureYears; year++) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let month = 1; month <= 12; month++) {
      if (remainingBalance <= 0) break;
      const interestForMonth = remainingBalance * monthlyRate;
      const principalForMonth = Math.min(emi - interestForMonth, remainingBalance);
      yearlyInterest += interestForMonth;
      yearlyPrincipal += principalForMonth;
      remainingBalance = Math.max(0, remainingBalance - principalForMonth);
    }

    yearlySchedule.push({
      year,
      yearlyEmi: Math.round(emi * 12),
      yearlyPrincipal: Math.round(yearlyPrincipal),
      yearlyInterest: Math.round(yearlyInterest),
      endingBalance: Math.round(remainingBalance)
    });

    if (remainingBalance <= 0) break;
  }

  return yearlySchedule;
}

export function calculateEligibility(
  monthlyIncome: number,
  existingEmi: number,
  annualRate: number = 8.5,
  tenureYears: number = 20
) {
  if (monthlyIncome <= 0) {
    return {
      maxEmiAllowed: 0,
      eligibleLoanAmount: 0,
      foirPercentage: 50
    };
  }

  let foirPercentage = 50;
  if (monthlyIncome > 100000) foirPercentage = 60;
  else if (monthlyIncome > 50000) foirPercentage = 55;

  const totalCap = monthlyIncome * (foirPercentage / 100);
  const maxEmiAllowed = Math.max(0, totalCap - (existingEmi || 0));

  if (maxEmiAllowed <= 0) {
    return {
      maxEmiAllowed: 0,
      eligibleLoanAmount: 0,
      foirPercentage
    };
  }

  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const factor = Math.pow(1 + monthlyRate, totalMonths);
  const eligibleLoanAmount = (maxEmiAllowed * (factor - 1)) / (monthlyRate * factor);

  return {
    maxEmiAllowed: Math.round(maxEmiAllowed),
    eligibleLoanAmount: Math.round(eligibleLoanAmount),
    foirPercentage
  };
}

export function calculateBalanceTransferSavings(
  outstandingPrincipal: number,
  currentRate: number,
  newRate: number,
  remainingYears: number
) {
  const currentCalc = calculateEmi(outstandingPrincipal, currentRate, remainingYears);
  const newCalc = calculateEmi(outstandingPrincipal, newRate, remainingYears);
  const monthlySavings = Math.max(0, currentCalc.monthlyEmi - newCalc.monthlyEmi);
  const totalInterestSavings = Math.max(0, currentCalc.totalInterest - newCalc.totalInterest);

  return {
    currentEmi: currentCalc.monthlyEmi,
    newEmi: newCalc.monthlyEmi,
    monthlySavings,
    totalInterestSavings,
    currentTotalInterest: currentCalc.totalInterest,
    newTotalInterest: newCalc.totalInterest
  };
}

export function formatCurrencyINR(val: number): string {
  if (isNaN(val)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
}

export function formatIndianAmountCompact(val: number): string {
  if (val >= 10000000) {
    const cr = val / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (val >= 100000) {
    const lk = val / 100000;
    return `₹${lk % 1 === 0 ? lk.toFixed(0) : lk.toFixed(1)} Lakh`;
  }
  return formatCurrencyINR(val);
}

export function buildWhatsAppLink(customMessage?: string): string {
  const defaultText = `Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${BRAND_CONFIG.whatsappRaw}?text=${text}`;
}

// -------------------------------------------------------------
// RAOZSITE PORTFOLIO ITEM: PROJECT #63
// -------------------------------------------------------------
export const GROUP_ACH_WEBSITE: BusinessWebsite = {
  id: 'site-group-ach-63',
  slug: 'group-ach',
  businessName: 'Group ACH Loan Solutions',
  category: 'loan_dsa',
  templateId: 'loan_financial_advisory',
  tagline: 'Expert Home Loan & Property Loan Advisors',
  description:
    'Professional home loan and property loan advisory website with loan calculators, lender information, lead generation, SEO-focused pages and responsive design.',
  ownerName: 'Group ACH Financial Advisory Team',
  phone: '+91 94825 37337',
  whatsapp: '+919482537337',
  email: 'hello@achlinks.in',
  address: 'Connaught Place / South Delhi Central Hub',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Connaught+Place+New+Delhi+110001',
  openingHours: 'Mon – Sat: 9:30 AM – 7:00 PM IST',
  primaryColor: '#2F483E',
  secondaryColor: '#85673E',
  logoUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'View Project',
  specialBadge: 'Project #63 · Loan & Finance Website',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Advisory Overview', isEnabled: true, order: 1 },
    { id: 'banks', title: '70+ Bank Network', isEnabled: true, order: 2 },
    { id: 'products', title: 'Home Loans & LAP', isEnabled: true, order: 3 },
    { id: 'calculators', title: 'EMI & Eligibility Calculators', isEnabled: true, order: 4 },
    { id: 'about', title: 'About & 4-Step Process', isEnabled: true, order: 5 },
    { id: 'testimonials', title: 'Client Reviews', isEnabled: true, order: 6 },
    { id: 'faq', title: 'Borrower FAQs', isEnabled: true, order: 7 },
    { id: 'contact', title: 'Direct Advisory Hotline', isEnabled: true, order: 8 }
  ],
  offers: [
    {
      id: 'offer-ach-advisory',
      title: 'Free Multi-Bank Rate Comparison',
      description: 'Get unbiased quotes from 70+ banks and NBFCs with zero advisory or upfront consulting fee.',
      discountPercent: 0,
      couponCode: 'ACHZEROFEES',
      isActive: true
    }
  ],
  gallery: [],
  items: [
    {
      id: 'item-ach-hl',
      name: 'Home Loans (New Purchase & Resale)',
      description: 'Financing for ready flats, builder floors, and villas with starting interest from 8.35% p.a.',
      price: 0,
      category: 'Home Loans',
      isAvailable: true,
      isFeatured: true,
      badge: 'From 8.35%'
    },
    {
      id: 'item-ach-hlbt',
      name: 'Home Loan Balance Transfer + Top-Up',
      description: 'Switch existing high-rate home loan to lower spreads and secure instant top-up funding.',
      price: 0,
      category: 'Home Loans',
      isAvailable: true,
      isFeatured: true,
      badge: 'Save Lakhs'
    },
    {
      id: 'item-ach-lap',
      name: 'Loan Against Property (Residential & Commercial)',
      description: 'Unlock maximum liquidity up to 75% market value with flexible tenures up to 20 years.',
      price: 0,
      category: 'Property Loans',
      isAvailable: true,
      isFeatured: true,
      badge: 'From 9.25%'
    },
    {
      id: 'item-ach-calc',
      name: 'Interactive EMI & Eligibility Calculators',
      description: 'Simulate monthly payments, FOIR ratios, and balance transfer interest savings dynamically.',
      price: 0,
      category: 'Calculators',
      isAvailable: true,
      isFeatured: true,
      badge: 'Real-time'
    }
  ]
};

export async function submitGroupAchLead(data: GroupAchLeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    const existing = localStorage.getItem('group_ach_leads');
    const list: any[] = existing ? JSON.parse(existing) : [];
    list.unshift({
      ...data,
      id: 'ach-' + Date.now(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('group_ach_leads', JSON.stringify(list));
  } catch {
    // ignore localStorage errors
  }
  return {
    success: true,
    message: 'Your inquiry has been received. A senior Group ACH loan specialist will connect with you within 2 hours.'
  };
}
