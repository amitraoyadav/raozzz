export interface PracticeAreaItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  subPractices: string[];
  keyLaws: string[];
  caseHighlights: string[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  category: 'partner' | 'associate_partner' | 'senior_associate' | 'associate' | 'advisor';
  image: string;
  experienceYears?: number;
  qualifications: string;
  barAdmission?: string;
  specialization: string[];
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  image: string;
  badge: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Office' | 'Events' | 'Roundtables';
  description: string;
  image: string;
}

export const MAHESHWARI_FIRM_INFO = {
  name: 'Maheshwari & Co.',
  legalName: 'Maheshwari & Co. Advocates and Legal Consultants',
  tagline: 'Leading Full Service Law Firm in Delhi, India',
  phone: '+91 9643106874',
  landlineDelhi: '+91-11-4601-3853',
  landlineMumbai: '+91-22-6884-1510',
  whatsapp: '+919643106874',
  email: 'info@maheshwariandco.com',
  website: 'https://www.maheshwariandco.com/',
  foundedYear: '2000',
  managingPartner: 'Mr. Vipul Maheshwari',
  headOffice: {
    title: 'New Delhi (Head Office)',
    address: 'B 7/1, Safdarjung Enclave Extension',
    city: 'New Delhi',
    postalCode: '110029',
    country: 'India',
    phone: '+91 9643106874 / +91-11-4601-3853',
    email: 'info@maheshwariandco.com',
    hours: 'Monday – Saturday: 9:00 AM – 7:30 PM',
    mapUrl: 'https://maps.google.com/?q=Safdarjung+Enclave+Extension+New+Delhi+110029'
  },
  mumbaiOffice: {
    title: 'Mumbai Office',
    address: 'G Block, Plot C 59, 11th Floor, Platina, Bandra Kurla Complex (BKC)',
    city: 'Mumbai',
    postalCode: '400051',
    country: 'India',
    phone: '+91-22-6884-1510',
    email: 'info@maheshwariandco.com',
    hours: 'Monday – Saturday: 9:30 AM – 7:00 PM',
    mapUrl: 'https://maps.google.com/?q=Bandra+Kurla+Complex+Mumbai'
  },
  newYorkOffice: {
    title: 'New York Associate Office',
    address: '640 Fifth Avenue, New York',
    city: 'New York',
    postalCode: 'NY 10019',
    country: 'USA',
    phone: '+1 (212) 555-0199',
    email: 'info@maheshwariandco.com',
    hours: 'Monday – Friday: 9:00 AM – 5:00 PM EST'
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/maheshwari-and-co/',
    twitter: 'https://twitter.com/maheshwarico',
    facebook: 'https://www.facebook.com/maheshwariandco/',
    instagram: 'https://www.instagram.com/maheshwariandco/'
  },
  disclaimer: `The Bar Council of India does not permit advertisement or solicitation by advocates. By accessing this website (https://www.maheshwariandco.com/), you acknowledge and confirm that you are seeking information relating to Maheshwari & Co., Advocates and Legal Consultants (hereinafter referred to as “Maheshwari & Co.”), of your own accord and that there has been no form of solicitation, advertisement, or inducement by Maheshwari & Co., or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. No material/information provided on this website should be construed as legal advice. Maheshwari & Co. shall not be liable for the consequences of any action taken by relying on the material/information provided on this website.`
};

export const PRACTICE_AREAS: PracticeAreaItem[] = [
  {
    id: 'corporate-commercial',
    slug: 'corporate-and-commercial',
    title: 'Corporate & Commercial',
    shortDesc: 'Comprehensive advisory on cross-border M&A, private equity, joint ventures, regulatory structuring, and commercial contracts.',
    fullDesc: 'Maheshwari & Co. provides end-to-end corporate and commercial legal solutions to domestic conglomerates, multinational enterprises, and emerging scale-ups. Our seasoned team guides clients through the entire business lifecycle — from company formation and foreign direct investment (FDI) approvals to multi-million dollar mergers, asset acquisitions, spin-offs, and strategic joint ventures. We draft, negotiate, and review mission-critical commercial pacts with rigorous regulatory foresight.',
    icon: 'Briefcase',
    image: '/assets/maheshwari/Corporate-Commercial-1.jpg',
    subPractices: [
      'Mergers & Acquisitions (M&A)',
      'Private Equity & Venture Capital',
      'Joint Ventures & Strategic Alliances',
      'Transfer Pricing & Structuring',
      'Commercial Contracts & Due Diligence'
    ],
    keyLaws: [
      'Companies Act, 2013',
      'Foreign Exchange Management Act (FEMA), 1999',
      'Competition Act, 2002',
      'SEBI Takeover Regulations'
    ],
    caseHighlights: [
      'Structured $120M cross-border technology acquisition involving multi-jurisdictional IP holding entities.',
      'Advised prominent European retail conglomerate on 100% FDI entry into Indian consumer market.',
      'Negotiated high-stakes shareholders agreements for Series B venture-funded mobility platform.'
    ]
  },
  {
    id: 'litigation',
    slug: 'litigation',
    title: 'Litigation & Court Representation',
    shortDesc: 'Formidable advocacy before the Supreme Court of India, High Courts, NCLT, NCLAT, and specialized appellate tribunals.',
    fullDesc: 'Our litigation practice delivers steadfast courtroom representation and dispute strategy for high-stakes commercial disputes, constitutional challenges, debt recovery, and corporate defense. Led by seasoned advocates with appearances across trial courts and appellate benches, we blend deep jurisprudential knowledge with aggressive procedural strategy to protect client rights and corporate reputation.',
    icon: 'Scale',
    image: '/assets/maheshwari/Litigation.jpg',
    subPractices: [
      'Supreme Court & High Court Appeals',
      'Commercial & Civil Suits',
      'NCLT & NCLAT Corporate Disputes',
      'Writs & Constitutional Law',
      'White Collar Defense & Enforcement Directorate'
    ],
    keyLaws: [
      'Code of Civil Procedure, 1908',
      'Commercial Courts Act, 2015',
      'Constitution of India',
      'Prevention of Money Laundering Act (PMLA)'
    ],
    caseHighlights: [
      'Secured favorable landmark ruling before the Supreme Court of India regarding statutory infrastructure lease renewals.',
      'Successfully defended leading private bank against complex injunction petitions before Delhi High Court.',
      'Represented infrastructure consortium in multi-crore contractual recovery proceeding.'
    ]
  },
  {
    id: 'arbitration',
    slug: 'arbitration',
    title: 'Arbitration & ADR',
    shortDesc: 'Expert counsel in domestic and international commercial arbitrations under UNCITRAL, SIAC, LCIA, and ICC rules.',
    fullDesc: 'Maheshwari & Co. is globally acknowledged for excellence in Alternative Dispute Resolution (ADR). Our arbitration attorneys handle complex cross-border contractual breaches, infrastructure delays, shareholder disputes, and maritime claims. We assist clients from clause drafting and appointment of arbitrators to emergency relief, hearing advocacy, and enforcement or challenge of arbitral awards under Section 34 & 36 of the Arbitration Act.',
    icon: 'Gavel',
    image: '/assets/maheshwari/Litigation-1.jpg',
    subPractices: [
      'Domestic Institutional Arbitration',
      'International Commercial Arbitration (SIAC, LCIA, ICC)',
      'Arbitration Clause & Seat Drafting',
      'Section 9 Interim Measures & Injunctions',
      'Enforcement & Challenge of Foreign Awards'
    ],
    keyLaws: [
      'Arbitration and Conciliation Act, 1996 (as amended 2015 & 2019)',
      'New York Convention on Arbitral Awards',
      'UNCITRAL Model Law on International Commercial Arbitration'
    ],
    caseHighlights: [
      'Represented EPC contractor in a SIAC arbitration seated in Singapore involving $45M port development project.',
      'Achieved full award enforcement and recovery of ₹85 Crores for state-owned manufacturing entity in ICC proceedings.',
      'Successfully defended against setting-aside applications in high-profile highway concession arbitration.'
    ]
  },
  {
    id: 'intellectual-property',
    slug: 'intellectual-property',
    title: 'Intellectual Property Rights',
    shortDesc: 'Holistic protection, prosecution, monetization, and litigation for trademarks, patents, copyrights, and designs.',
    fullDesc: 'In today’s innovation economy, intangible assets drive corporate valuation. Maheshwari & Co. protects and monetizes brands, technologies, software, artistic works, and industrial designs across India and 60+ foreign jurisdictions. Our IP litigators aggressively combat counterfeiting, trademark infringement, cybersquatting, and patent piracy with interim injunctions and Anton Piller orders.',
    icon: 'ShieldCheck',
    image: '/assets/maheshwari/Intellectual-Property-.jpg',
    subPractices: [
      'Trademark Prosecution & Opposition',
      'Patent Drafting, Prior Art & Filing',
      'Copyright Protection & Licensing',
      'Design Registrations & Brand Enforcement',
      'Geographical Indications (GI) & Trade Secrets'
    ],
    keyLaws: [
      'Trade Marks Act, 1999',
      'Patents Act, 1970 (amended)',
      'Copyright Act, 1957',
      'Designs Act, 2000'
    ],
    caseHighlights: [
      'Secured ex-parte ad-interim injunction against deceptive counterfeit medical devices across 4 major Indian states.',
      'Managed international trademark portfolio of 350+ marks for prestigious FMCG enterprise.',
      'Negotiated global software licensing and IP assignment pact for AI-driven healthtech startup.'
    ]
  },
  {
    id: 'information-technology',
    slug: 'technology-media-and-telecommunications',
    title: 'Technology, Media & Telecommunications',
    shortDesc: 'Next-generation advisory on DPDP compliance, cybersecurity, cloud agreements, AI regulations, and telecom licensing.',
    fullDesc: 'Our TMT lawyers navigate cutting-edge tech frontiers. We guide global hyperscalers, SaaS companies, fintech platforms, and media giants through the Digital Personal Data Protection Act, 2023 (DPDP), CERT-In cybersecurity directives, intermediary guidelines, OTT media laws, and Department of Telecommunications (DoT) licensing.',
    icon: 'Cpu',
    image: '/assets/maheshwari/Information-Technology.jpg',
    subPractices: [
      'DPDP Act 2023 Compliance & Consent Architecture',
      'SaaS, Cloud & Software License Agreements',
      'Cybersecurity & Incident Response Protocols',
      'Telecommunications OSP & Unified Licensing',
      'Media, OTT Streaming & Broadcasting Regulations'
    ],
    keyLaws: [
      'Information Technology Act, 2000',
      'Digital Personal Data Protection Act, 2023',
      'Indian Telegraph Act, 1885',
      'CERT-In Cyber Security Directions'
    ],
    caseHighlights: [
      'Drafted complete DPDP consent manager framework and data audit protocol for a tier-1 Indian payment aggregator.',
      'Advised US enterprise SaaS leader on Indian cross-border data transfer mechanisms and cloud storage norms.',
      'Structured content licensing pacts for premier digital streaming platform.'
    ]
  },
  {
    id: 'energy-infrastructure',
    slug: 'energy-and-infrastructure',
    title: 'Energy & Infrastructure',
    shortDesc: 'Strategic counsel for solar, wind, green hydrogen, oil & gas concessions, and major public-private partnerships (PPP).',
    fullDesc: 'Maheshwari & Co. boasts recognized depth in conventional and renewable energy projects. We represent developers, financiers, off-takers, and government bodies in solar parks, offshore wind initiatives, National Green Hydrogen Mission incentives, cross-country gas pipelines, and toll-operate-transfer highway concessions.',
    icon: 'Zap',
    image: '/assets/maheshwari/Sports-Entertainment.png',
    subPractices: [
      'Renewable Energy & Power Purchase Agreements (PPA)',
      'National Green Hydrogen Mission Regulations',
      'Oil & Gas Exploration Concessions (HELP / NELP)',
      'EPC & Turnkey Infrastructure Contracts',
      'Regulatory Filings before CERC & State ERCs'
    ],
    keyLaws: [
      'Electricity Act, 2003',
      'Petroleum and Natural Gas Regulatory Board Act, 2006',
      'National Green Hydrogen Mission Guidelines',
      'Environment (Protection) Act, 1986'
    ],
    caseHighlights: [
      'Advised 300 MW hybrid solar-wind independent power producer on multi-state PPA negotiations with DISCOMs.',
      'Assisted international green ammonia consortium on bid compliance and land allotment under National Hydrogen Mission.',
      'Represented city gas distribution licensee in dispute before PNGRB Appellate Tribunal.'
    ]
  },
  {
    id: 'sports-gaming',
    slug: 'sports-and-gaming',
    title: 'Sports, Esports & Gaming Law',
    shortDesc: 'Pioneering legal services for gaming operators, sports leagues, player contracts, and anti-doping compliance.',
    fullDesc: 'With the explosive rise of esports, online real money gaming (RMG), and franchise sporting leagues, our dedicated Sports & Gaming practice delivers specialized counsel on game classification (skill vs. chance), IT Rules 2023 gaming amendments, sponsorship contracts, player management, and disciplinary arbitrations before CAS.',
    icon: 'Gamepad2',
    image: '/assets/maheshwari/Sports-Entertainment.png',
    subPractices: [
      'Online Gaming & Skill vs Chance Advisory',
      'Franchise League & Team Ownership Agreements',
      'Player Representation & Endorsement Deals',
      'Broadcasting & Media Rights Structuring',
      'Disciplinary Proceedings & Court of Arbitration for Sport (CAS)'
    ],
    keyLaws: [
      'Information Technology (Intermediary Guidelines) Amendment Rules, 2023',
      'Public Gambling Act, 1867 & State Specific Statutes',
      'National Anti-Doping Act, 2022'
    ],
    caseHighlights: [
      'Structured legal compliance architecture for premier multi-game online esports platform.',
      'Negotiated marquee player endorsement and apparel contracts with leading cricket franchise.',
      'Represented prominent game developer against state online gaming blocking orders.'
    ]
  },
  {
    id: 'secretarial-services',
    slug: 'secretarial-services',
    title: 'Secretarial, BIS & Compliance',
    shortDesc: 'FDI filings, corporate secretarial audits, BIS certifications, GST structuring, and turnkey India business setup.',
    fullDesc: 'Navigating India’s multi-layered statutory compliances requires precision. Our company secretarial and regulatory desk assists foreign corporations and domestic founders in setting up wholly owned subsidiaries, liaison offices, obtaining Bureau of Indian Standards (BIS) product certifications, and maintaining flawless ROC statutory registers.',
    icon: 'FileCheck',
    image: '/assets/maheshwari/Industrial-Licence.png',
    subPractices: [
      'India Business Setup & Entity Incorporation',
      'Foreign Direct Investment (FDI) & FC-GPR Filings',
      'Bureau of Indian Standards (BIS) Certification',
      'Corporate Governance Audits & Annual ROC Filings',
      'Goods & Services Tax (GST) Advisory'
    ],
    keyLaws: [
      'Companies Act, 2013 & MCA Rules',
      'Bureau of Indian Standards Act, 2016',
      'Foreign Exchange Management (Non-debt Instruments) Rules, 2019'
    ],
    caseHighlights: [
      'Facilitated BIS Compulsory Registration Scheme (CRS) for 42 electronic and industrial products for East Asian manufacturer.',
      'Incorporated Indian subsidiary and arranged end-to-end tax and RBI clearances in under 18 business days.',
      'Conducted extensive secretarial audit for listed enterprise preparing for secondary equity offering.'
    ]
  },
  {
    id: 'insolvency-bankruptcy',
    slug: 'insolvency-and-bankruptcy',
    title: 'Insolvency & Bankruptcy (IBC)',
    shortDesc: 'Strategic representation for Financial Creditors, Operational Creditors, and Resolution Applicants under IBC 2016.',
    fullDesc: 'Maheshwari & Co. is a prominent force in corporate insolvency resolution and liquidation. We represent banks, asset reconstruction companies (ARCs), homebuyer associations, and prospective resolution applicants before NCLT benches and NCLAT across India, ensuring maximal asset recovery and rigorous statutory adherence.',
    icon: 'Building2',
    image: '/assets/maheshwari/Homebuyer-Rights-Under-IBC-When-a-Builder-Fails-47.png',
    subPractices: [
      'Section 7 & 9 IBC Applications for Creditors',
      'Homebuyer Consortium Representation',
      'Resolution Plan Formulation & Evaluation',
      'Avoidance & Fraudulent Transaction Defense',
      'Voluntary Liquidation & Fast-track Restructuring'
    ],
    keyLaws: [
      'Insolvency and Bankruptcy Code, 2016',
      'IBBI (Insolvency Resolution Process for Corporate Persons) Regulations, 2016',
      'SARFAESI Act, 2002'
    ],
    caseHighlights: [
      'Represented committee of homebuyers in successfully reviving stalled 1,200-unit residential township through IBC.',
      'Secured full settlement for tier-1 operational creditor in ₹42 Crore contested insolvency proceeding against major EPC debtor.',
      'Advised winning Resolution Applicant on post-approval takeover of stressed manufacturing facility.'
    ]
  },
  {
    id: 'labour-employment',
    slug: 'labour-and-employment',
    title: 'Labour & Employment',
    shortDesc: 'Workforce structuring, executive contracts, POSH compliance, Labour Codes transition, and industrial disputes.',
    fullDesc: 'Our employment law practice helps human resource directors and general counsel create compliant, modern, and harmonious workplaces. We formulate robust employment agreements, non-compete covenants, severance packages, POSH (Prevention of Sexual Harassment) policies, and guide enterprises through the consolidation of India’s 4 new Labour Codes.',
    icon: 'Users',
    image: '/assets/maheshwari/Centre-Notifies-INR-25000-Wage-Ceiling-under-the-Code-on-Social-Security-2020.png',
    subPractices: [
      'Executive Employment Contracts & Non-Compete Clauses',
      'POSH Policy Formulation & Internal Committee (IC) Training',
      'Code on Social Security 2020 Transition & Wage Audits',
      'Workforce Reductions, Retrenchment & Mutual Separation',
      'Industrial Disputes & Labour Court Litigation'
    ],
    keyLaws: [
      'Code on Wages, 2019',
      'Occupational Safety, Health and Working Conditions Code, 2020',
      'Industrial Relations Code, 2020',
      'Code on Social Security, 2020',
      'Sexual Harassment of Women at Workplace (POSH) Act, 2013'
    ],
    caseHighlights: [
      'Overhauled employment handbooks and benefit structures for 4,500+ employees of an IT services multinational.',
      'Handled sensitive C-suite termination and non-disclosure enforcement with zero media exposure.',
      'Guided manufacturing unit through workforce restructuring while ensuring zero production stoppage.'
    ]
  },
  {
    id: 'tax-banking',
    slug: 'banking-and-finance',
    title: 'Banking, Finance & Taxation',
    shortDesc: 'Loan documentation, debt syndication, trade finance, international tax planning, and transfer pricing defense.',
    fullDesc: 'Our financial services team assists private and public sector lenders, NBFCs, and borrowers in structured finance, project loans, external commercial borrowings (ECB), and direct/indirect tax advisory. Our tax litigators represent clients before the Income Tax Appellate Tribunal (ITAT), High Courts, and GST authorities.',
    icon: 'Landmark',
    image: '/assets/maheshwari/RBIs-Continuing-FEMA-Rationalization.png',
    subPractices: [
      'Project Finance & Consortium Loan Documentation',
      'External Commercial Borrowings (ECB) & FEMA Compliance',
      'International Tax Structuring & Double Tax Avoidance (DTAA)',
      'Direct Tax Assessments, Appeals & ITAT Representation',
      'Goods & Services Tax (GST) Advisory & Litigations'
    ],
    keyLaws: [
      'Banking Regulation Act, 1949',
      'Reserve Bank of India Act, 1934',
      'Income Tax Act, 1961',
      'Central Goods and Services Tax Act, 2017'
    ],
    caseHighlights: [
      'Documented ₹450 Crore syndicated term loan facility for medical infrastructure expansion in western India.',
      'Successfully defended cross-border software royalty taxation matter before ITAT, saving client over ₹18 Crores.',
      'Advised private equity fund on tax-optimized exit structure.'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'vipul-maheshwari',
    slug: 'vipul-maheshwari',
    name: 'Vipul Maheshwari',
    role: 'Managing Partner',
    category: 'partner',
    image: '/assets/maheshwari/18-555x600.jpg',
    experienceYears: 25,
    qualifications: 'B.A. LL.B (Hons.), Advocate on Record (AOR), Supreme Court of India',
    barAdmission: 'Bar Council of Delhi, Supreme Court Bar Association',
    specialization: ['Commercial Litigation', 'Cross-Border M&A', 'Arbitration', 'White Collar Defense'],
    bio: 'Vipul Maheshwari is the Managing Partner and visionary founder of Maheshwari & Co. With over two and a half decades of stellar legal practice, he has advised Fortune 500 corporations, government entities, and high-net-worth individuals on complex corporate transactions, international arbitration, and landmark Supreme Court appeals. Widely acclaimed for his tactical acumen and strategic foresight, Mr. Maheshwari is consistently ranked among India’s top legal luminaries by IFLR 1000, Legal 500, and AsiaLaw Profiles.',
    email: 'v.maheshwari@maheshwariandco.com',
    phone: '+91 9643106874',
    linkedin: 'https://www.linkedin.com/in/vipul-maheshwari/'
  },
  {
    id: 'jyotsna-chaturvedi',
    slug: 'jyotsna-chaturvedi',
    name: 'Jyotsna Chaturvedi',
    role: 'Head - Corporate Practice & Partner',
    category: 'partner',
    image: '/assets/maheshwari/2-555x600.jpg',
    experienceYears: 18,
    qualifications: 'LL.B, LL.M (Corporate & Commercial Law), FCS',
    barAdmission: 'Bar Council of Maharashtra & Goa, Supreme Court Bar Association',
    specialization: ['Corporate Law', 'Private Equity', 'FDI Regulatory', 'Joint Ventures'],
    bio: 'Jyotsna Chaturvedi heads the firm’s Corporate & Commercial practice. She has spearheaded multi-jurisdictional mergers, strategic acquisitions, and venture investments across telecom, retail, FMCG, and technology sectors. Renowned for her business-centric advice and sharp negotiation skills, she routinely serves as trusted general counsel to multinational boards entering the Indian marketplace.',
    email: 'j.chaturvedi@maheshwariandco.com',
    phone: '+91 9643106874',
    linkedin: 'https://www.linkedin.com/in/jyotsna-chaturvedi/'
  },
  {
    id: 'akhand-pratap-singh-chauhan',
    slug: 'akhand-pratap-singh-chauhan',
    name: 'Akhand Pratap Singh Chauhan',
    role: 'Partner - Dispute Resolution',
    category: 'partner',
    image: '/assets/maheshwari/3.jpg',
    experienceYears: 16,
    qualifications: 'B.A. LL.B (Hons.), National Law University',
    barAdmission: 'Bar Council of Delhi, Delhi High Court Bar Association',
    specialization: ['Commercial Litigation', 'Insolvency & Bankruptcy', 'Tribunal Advocacy'],
    bio: 'Akhand Pratap Singh Chauhan leads key litigation and arbitration mandates at Maheshwari & Co. He has appeared in hundreds of contentious matters before the High Court of Delhi, NCLT, and appellate bodies. His deep mastery over civil procedure and insolvency laws has resulted in critical recoveries for domestic financial institutions and foreign creditors.',
    email: 'aps.chauhan@maheshwariandco.com'
  },
  {
    id: 'tarun-biswas',
    slug: 'tarun-biswas',
    name: 'Tarun Biswas',
    role: 'Associate Partner - Corporate & IP',
    category: 'associate_partner',
    image: '/assets/maheshwari/4.jpg',
    experienceYears: 14,
    qualifications: 'B.Sc., LL.B, Registered Patent & Trademark Attorney',
    barAdmission: 'Bar Council of India, Patent Office of India',
    specialization: ['Intellectual Property', 'Patent Prosecution', 'Technology Transfer'],
    bio: 'Tarun Biswas oversees intellectual property prosecution, brand enforcement, and tech transactions. He brings extensive experience advising electronics, pharmaceutical, and software enterprises on safeguarding patents, prosecuting oppositions, and negotiating multi-million-dollar technology licenses.',
    email: 't.biswas@maheshwariandco.com'
  },
  {
    id: 'dhananjay-anant-athavale',
    slug: 'dhananjay-anant-athavale',
    name: 'Dhananjay Anant Athavale',
    role: 'Partner - Banking & Project Finance',
    category: 'partner',
    image: '/assets/maheshwari/22-555x600.jpg',
    experienceYears: 17,
    qualifications: 'B.Com, LL.B, CFA',
    barAdmission: 'Bar Council of Maharashtra & Goa',
    specialization: ['Banking Regulations', 'Structured Finance', 'Infrastructure Projects'],
    bio: 'Dhananjay Athavale anchors the Mumbai office and leads Banking & Finance. He brings extensive expertise in project debt documentation, securitization, NBFC compliance, and cross-border commercial borrowings.',
    email: 'd.athavale@maheshwariandco.com'
  },
  {
    id: 'praveen-maratha',
    slug: 'praveen-maratha',
    name: 'Praveen Maratha',
    role: 'Partner - Real Estate & Infrastructure',
    category: 'partner',
    image: '/assets/maheshwari/5.jpg',
    experienceYears: 15,
    qualifications: 'LL.B, Diploma in Cyber & Environmental Law',
    barAdmission: 'Bar Council of Delhi',
    specialization: ['Real Estate Law', 'RERA Compliance', 'Infrastructure Concessions'],
    bio: 'Praveen Maratha advises leading property developers, private funds, and contractors on real estate acquisitions, title due diligence, joint developments, and regulatory compliance under RERA.',
    email: 'p.maratha@maheshwariandco.com'
  },
  {
    id: 'akshi-seem',
    slug: 'akshi-seem',
    name: 'Akshi Seem',
    role: 'Associate Partner - Labour & Regulatory',
    category: 'associate_partner',
    image: '/assets/maheshwari/6.jpg',
    experienceYears: 12,
    qualifications: 'B.A. LL.B, Certified POSH Trainer',
    barAdmission: 'Bar Council of Delhi',
    specialization: ['Labour Laws', 'POSH Compliance', 'Corporate Governance'],
    bio: 'Akshi Seem specializes in employment regulations, workplace compliance, and executive contracts. She has drafted comprehensive compliance frameworks for Fortune 500 multinationals.',
    email: 'a.seem@maheshwariandco.com'
  },
  {
    id: 'ketan-joshi',
    slug: 'ketan-joshi',
    name: 'Ketan Joshi',
    role: 'Associate Partner - Corporate Advisory',
    category: 'associate_partner',
    image: '/assets/maheshwari/16-555x600.jpg',
    experienceYears: 11,
    qualifications: 'B.B.A. LL.B (Hons.), LL.M',
    barAdmission: 'Bar Council of Gujarat & Delhi',
    specialization: ['Commercial Contracts', 'M&A Advisory', 'Startups & Venture Capital'],
    bio: 'Ketan Joshi advises high-growth startups and established corporates on capital structuring, regulatory approvals, secretarial compliance, and complex commercial agreements.',
    email: 'k.joshi@maheshwariandco.com'
  },
  {
    id: 'karishma-jaiswal',
    slug: 'karishma-jaiswal',
    name: 'Karishma Jaiswal',
    role: 'Senior Associate',
    category: 'senior_associate',
    image: '/assets/maheshwari/15-555x600.jpg',
    experienceYears: 8,
    qualifications: 'B.A. LL.B (Hons.)',
    barAdmission: 'Bar Council of Delhi',
    specialization: ['Commercial Litigation', 'Arbitration', 'Consumer Protection'],
    bio: 'Karishma Jaiswal represents clients in commercial arbitration and high court litigation with a sharp focus on consumer claims and contract enforcement.',
    email: 'k.jaiswal@maheshwariandco.com'
  },
  {
    id: 'j-b-singh',
    slug: 'j-b-singh',
    name: 'J B Singh',
    role: 'Senior Associate - Dispute Resolution',
    category: 'senior_associate',
    image: '/assets/maheshwari/1-2.jpg',
    experienceYears: 9,
    qualifications: 'B.A. LL.B',
    barAdmission: 'Bar Council of Delhi',
    specialization: ['NCLT Litigation', 'Debt Recovery', 'Arbitration'],
    bio: 'J B Singh focuses on insolvency litigations and commercial dispute advocacy, regularly appearing before tribunals and appellate courts in Delhi NCR.',
    email: 'jb.singh@maheshwariandco.com'
  },
  {
    id: 'sheetal-patodiya',
    slug: 'sheetal-patodiya',
    name: 'Sheetal Patodiya',
    role: 'Senior Associate - Corporate & Secretarial',
    category: 'senior_associate',
    image: '/assets/maheshwari/7.jpg',
    experienceYears: 8,
    qualifications: 'ACS, LL.B',
    barAdmission: 'Bar Council of Delhi',
    specialization: ['Company Law', 'FEMA Filings', 'Secretarial Audits'],
    bio: 'Sheetal Patodiya handles MCA compliances, FDI notifications to the Reserve Bank of India, and corporate governance documentation.',
    email: 's.patodiya@maheshwariandco.com'
  },
  {
    id: 'shyamli-shukla',
    slug: 'shyamli-shukla',
    name: 'Shyamli Shukla',
    role: 'Senior Associate - IP & TMT',
    category: 'senior_associate',
    image: '/assets/maheshwari/8.jpg',
    experienceYears: 7,
    qualifications: 'B.Tech (CS), LL.B',
    barAdmission: 'Bar Council of Delhi',
    specialization: ['Data Privacy & DPDP', 'IP Enforcement', 'IT Contracts'],
    bio: 'Combining technical background in computer science with legal training, Shyamli leads compliance audits under the DPDP Act and IT Rules.',
    email: 's.shukla@maheshwariandco.com'
  },
  {
    id: 'akhil-agarwal',
    slug: 'akhil-agarwal',
    name: 'Akhil Agarwal',
    role: 'CA | Senior Advisor - Taxation',
    category: 'advisor',
    image: '/assets/maheshwari/9.jpg',
    experienceYears: 20,
    qualifications: 'FCA, B.Com (Hons.)',
    specialization: ['Direct Tax', 'Transfer Pricing', 'GST Structuring'],
    bio: 'Akhil Agarwal provides expert strategic counsel on direct taxation, cross-border transfer pricing, and indirect tax optimization for domestic and foreign entities.',
    email: 'a.agarwal@maheshwariandco.com'
  },
  {
    id: 'markus-hoffmann',
    slug: 'markus-hoffmann-von-wolffersdorff',
    name: 'Markus Hoffmann von Wolffersdorff',
    role: 'Head - Indo-German Desk',
    category: 'advisor',
    image: '/assets/maheshwari/1.jpg',
    experienceYears: 22,
    qualifications: 'Rechtsanwalt (German Bar), LL.M',
    specialization: ['Indo-German Investments', 'EU Cross-Border Trade', 'Automotive & Engineering'],
    bio: 'Markus anchors our Indo-German desk, assisting German, Austrian, and Swiss enterprises in entering and navigating the Indian market with bilateral treaty optimization.',
    email: 'indo.german@maheshwariandco.com'
  },
  {
    id: 'umberto-grella',
    slug: 'mr-umberto-grella',
    name: 'Umberto Grella',
    role: 'Head - Indo-Italian Desk',
    category: 'advisor',
    image: '/assets/maheshwari/2.jpg',
    experienceYears: 24,
    qualifications: 'Avvocato (Italian Bar), LL.M',
    specialization: ['Indo-Italian Joint Ventures', 'Design & Luxury Brand Licensing'],
    bio: 'Umberto leads the Indo-Italian desk, advising Italian industrial manufacturers, luxury fashion houses, and food & beverage companies on Indian joint ventures and franchise operations.',
    email: 'indo.italian@maheshwariandco.com'
  },
  {
    id: 'chitra-rajagopal',
    slug: 'prof-dr-chitra-rajagopal',
    name: 'Prof. (Dr.) Chitra Rajagopal',
    role: 'Senior Advisor - Process Safety & Risk Management',
    category: 'advisor',
    image: '/assets/maheshwari/3.jpg',
    experienceYears: 30,
    qualifications: 'Ph.D. (Chemical Engineering), Ex-Distinguished Scientist DRDO',
    specialization: ['Hazardous Chemicals Law', 'Process Safety Compliance', 'Environmental Impact'],
    bio: 'Dr. Rajagopal advises the energy and chemical manufacturing practice on safety risk management, environmental compliance, and regulatory risk mitigation.',
    email: 'risk.advisor@maheshwariandco.com'
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'iflr-2024',
    title: 'Ranked Firm for Banking and M&A 2024',
    organization: 'IFLR 1000',
    year: '2024',
    image: '/assets/maheshwari/2024-IFLR-1000-Banking-and-Mergers-Acquisitions.jpg',
    badge: 'Tier-1 Recognized',
    description: 'Recognized for standout advisory in high-value cross-border mergers, acquisitions, and banking syndication.'
  },
  {
    id: 'asialaw-tech',
    title: 'Ranked for Technology and Telecommunication',
    organization: 'AsiaLaw Profiles',
    year: '2024',
    image: '/assets/maheshwari/Ranked-For-Technology-and-Telecommunication-by-Asia-Law.png',
    badge: 'Industry Leader',
    description: 'Acknowledged as a leading practice across India for data privacy, cybersecurity, and telecommunication advisory.'
  },
  {
    id: 'alb-ma-2024',
    title: 'Featured in ALB Asia M&A Rankings',
    organization: 'Asian Legal Business (Thomson Reuters)',
    year: '2024',
    image: '/assets/maheshwari/Featured-in-ALB-Asia-MA-Rankings-2024.png',
    badge: 'Top Regional Firm',
    description: 'Honored among elite law firms across Asia for transaction volume and regulatory sophistication in M&A.'
  },
  {
    id: 'benchmark-litigation-2024',
    title: 'Commercial & Transactions - Recommended Firm',
    organization: 'Benchmark Litigation Asia-Pacific',
    year: '2024',
    image: '/assets/maheshwari/Benchmark-2024-Award.jpg',
    badge: 'Dispute Resolution Leader',
    description: 'Commended for exceptional courtroom advocacy and arbitral victories in New Delhi and Mumbai.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'dpdp-act-framework',
    slug: 'the-digital-personal-data-protection-consent-manager-framework',
    title: 'The Digital Personal Data Protection (DPDP) Consent Manager Framework',
    excerpt: 'An in-depth analysis of the statutory obligations for Data Fiduciaries and Consent Managers under the DPDP Act 2023.',
    content: `The Digital Personal Data Protection Act, 2023 represents a paradigm shift in India's regulatory posture towards individual privacy and enterprise data handling. Among the most innovative features of the statutory architecture is the formal recognition of the 'Consent Manager' — an interoperable, transparent intermediary accountable directly to the Data Principal.\n\nData Fiduciaries must implement clear notice architectures, verifiable consent logging, and automated withdrawal mechanisms. Entities operating in fintech, healthcare, and consumer internet must urgently audit their user onboarding funnels to avoid severe penalties of up to ₹250 Crores for statutory non-compliance.`,
    category: 'Technology & Privacy',
    readTime: '6 min read',
    date: 'February 2026',
    author: 'Jyotsna Chaturvedi',
    image: '/assets/maheshwari/The-Digital-Personal-Data-Protection-Consent-Manager-Framework.png'
  },
  {
    id: 'homebuyer-rights-ibc',
    slug: 'homebuyer-rights-under-ibc-when-a-builder-fails',
    title: 'Homebuyer Rights Under IBC When a Builder Fails',
    excerpt: 'How allottees can enforce their status as financial creditors to protect their life investments when real estate developers default.',
    content: `When a residential or commercial developer enters Corporate Insolvency Resolution (CIRP), individual allottees find themselves caught between delayed construction, mortgage obligations, and statutory uncertainty.\n\nUnder Section 5(8)(f) of the Insolvency and Bankruptcy Code, homebuyers are categorized as Financial Creditors. Acting collectively, allottees can participate in the Committee of Creditors (CoC), review Resolution Plans, and ensure their rights to flat possession and title execution are prioritized over speculative creditor interests.`,
    category: 'Insolvency & Real Estate',
    readTime: '8 min read',
    date: 'January 2026',
    author: 'Akhand Pratap Singh Chauhan',
    image: '/assets/maheshwari/Homebuyer-Rights-Under-IBC-When-a-Builder-Fails-47.png'
  },
  {
    id: 'rera-vs-nclt-vs-ncdrc',
    slug: 'rera-vs-nclt-vs-ncdrc',
    title: 'RERA vs NCLT vs NCDRC: Choosing the Right Forum for Property Grievances',
    excerpt: 'A strategic comparison of relief horizons, timeline speed, and enforcement efficacy across competing Indian judicial forums.',
    content: `Aggrieved real estate investors and purchasers face a critical tactical choice: whether to file before the Real Estate Regulatory Authority (RERA), initiate consumer complaint proceedings before NCDRC, or move the National Company Law Tribunal (NCLT) under the IBC.\n\nEach forum offers distinct advantages depending on whether the primary remedy sought is interest compensation, refund with penalty, structural defect rectification, or complete corporate takeover of an insolvent developer.`,
    category: 'Dispute Resolution',
    readTime: '5 min read',
    date: 'December 2025',
    author: 'Praveen Maratha',
    image: '/assets/maheshwari/RERA-vs-NCLT-vs-NCDRC.png'
  },
  {
    id: 'wage-ceiling-social-security',
    slug: 'centre-notifies-inr-25000-wage-ceiling-under-the-code-on-social-security-2020',
    title: 'Centre Notifies INR 25,000 Wage Ceiling under the Code on Social Security 2020',
    excerpt: 'Crucial payroll adjustments, statutory coverage impacts, and employer liability changes under the notified Social Security rules.',
    content: `The Union Government has announced key parameters under the Code on Social Security 2020, significantly impacting calculation methodologies for provident fund, gratuity, and employee state insurance.\n\nCorporate employers must proactively restructure salary templates, ensure compliance with the 50% basic wage rule, and prepare for increased coverage among gig and platform workers.`,
    category: 'Labour & Employment',
    readTime: '4 min read',
    date: 'November 2025',
    author: 'Akshi Seem',
    image: '/assets/maheshwari/Centre-Notifies-INR-25000-Wage-Ceiling-under-the-Code-on-Social-Security-2020.png'
  },
  {
    id: 'uae-class-33-trademark',
    slug: 'uae-class-33-trademark-filing-for-alcohol-brands',
    title: 'UAE Class 33 Trademark Filing: Critical Nuances for International Brands',
    excerpt: 'Navigating trademark registration, sharia compliance considerations, and local agent requirements in the UAE market.',
    content: `Entering the Middle Eastern hospitality and spirits market demands thorough brand protection under Nice Classification Class 33. The UAE Ministry of Economy has recently revised documentation standards for foreign alcoholic and beverage brands.\n\nThis article outlines pre-requisite local commercial license verifications, Arabic transliteration checks, and cross-border enforcement strategies against parallel importation.`,
    category: 'Intellectual Property',
    readTime: '7 min read',
    date: 'October 2025',
    author: 'Tarun Biswas',
    image: '/assets/maheshwari/UAE-Class-33-Trademark-Filing-for-Alcohol-Brands.png'
  },
  {
    id: 'fema-rationalization-rbi',
    slug: 'rbis-continuing-fema-rationalization',
    title: 'RBI’s Continuing FEMA Rationalization: Key Takeaways for Corporate India',
    excerpt: 'Liberalized overseas direct investment (ODI) routes, non-debt instrument updates, and easier cross-border compounding.',
    content: `The Reserve Bank of India continues its drive towards simplifying foreign exchange operations. Recent circulars have streamlined the reporting mechanisms for downstream investments, overseas holding structures, and export-import factoring.\n\nCorporate treasuries and CFOs must leverage these rationalized provisions to optimize foreign capital deployments while remaining insulated from FEMA compounding scrutiny.`,
    category: 'Corporate Finance',
    readTime: '5 min read',
    date: 'September 2025',
    author: 'Vipul Maheshwari',
    image: '/assets/maheshwari/RBIs-Continuing-FEMA-Rationalization.png'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Siddharth Shah',
    role: 'Partnerships Manager',
    organization: 'Grid Master Solutions',
    quote: `I thank Mr. Ketan Joshi and the Maheshwari & Co. team immensely for expediting the legal assessment and delivering us the high-precision legal opinion well ahead of our contractual deadline. We are deeply grateful. The opinion proved pivotal in our investor closing, and I recommend them without reservation for any corporate legal counsel.`,
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Gurpreet Singh',
    role: 'Senior Project Director',
    organization: 'National Highways & Infrastructure Development Corporation Limited (NHIDCL)',
    quote: `I personally joined the scheduled hearing and was thoroughly impressed by the exceptional, well-researched presentation delivered by the assigned litigation team from Maheshwari & Co. Their grasp of concession agreement nuances and courtroom poise secured a crucial order in our favor.`,
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Legal Department',
    role: 'Director of Cultural & Diplomatic Operations',
    organization: 'Instituto Cervantes – Embassy of Spain',
    quote: `Instituto Cervantes – Embassy of Spain has received ongoing legal and statutory consultation services from Maheshwari & Co. and we are really happy with the outcome. This law firm is extraordinarily professional, responsive, and understands the unique needs of diplomatic and cultural institutions. High quality standards were delivered consistently.`,
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Book Launch Event at India International Centre (IIC)',
    category: 'Events',
    description: 'Maheshwari & Co. partners presenting on evolving dispute resolution and commercial jurisprudence before senior judges and jurists in New Delhi.',
    image: '/assets/maheshwari/Litigation.jpg'
  },
  {
    id: 'gal-2',
    title: 'Headquarters & Practice Chambers',
    category: 'Office',
    description: 'Safdarjung Enclave Extension law chambers featuring dedicated client conference suites and modern research wings.',
    image: '/assets/maheshwari/Corporate-Commercial-1.jpg'
  },
  {
    id: 'gal-3',
    title: 'Managing Partner Executive Office',
    category: 'Office',
    description: 'Chambers of Mr. Vipul Maheshwari overlooking the central New Delhi administrative avenue.',
    image: '/assets/maheshwari/18-555x600.jpg'
  },
  {
    id: 'gal-4',
    title: 'Clean EDGE Tech Mission - USCS & USISPF',
    category: 'Roundtables',
    description: 'Senior legal partners advising bilateral energy delegations on regulatory compliance under India’s Green Hydrogen Mission.',
    image: '/assets/maheshwari/Sports-Entertainment.png'
  },
  {
    id: 'gal-5',
    title: 'Women in Energy Leadership Round Table',
    category: 'Roundtables',
    description: 'Maheshwari & Co. hosting women leaders from renewable energy, legal, and environmental regulatory institutions.',
    image: '/assets/maheshwari/Information-Technology.jpg'
  },
  {
    id: 'gal-6',
    title: 'Mumbai Financial District Office',
    category: 'Office',
    description: 'Platina, Bandra Kurla Complex (BKC) office serving capital markets, private equity, and banking clients.',
    image: '/assets/maheshwari/Intellectual-Property-.jpg'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 'exp',
    title: 'Extensive Experience',
    desc: 'With over two and a half decades of collective practice, our seasoned attorneys bring deep insights and proven courtroom strategies to resolve the most intricate commercial and civil disputes.',
    icon: 'Award'
  },
  {
    id: 'client',
    title: 'Client-Centric Approach',
    desc: 'We prioritize our clients’ objectives, crafting customized, legally robust, and cost-effective solutions. Your corporate resilience and success remain our paramount priority at every step.',
    icon: 'HeartHandshake'
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Service Range',
    desc: 'From cross-border M&A and venture capital to Supreme Court appeals, intellectual property protection, and DPDP cybersecurity compliance — an all-encompassing suite under one roof.',
    icon: 'Layers'
  },
  {
    id: 'global',
    title: 'Global Reach & International Desks',
    desc: 'Dedicated Indo-German and Indo-Italian desks with seamless associate affiliations across Europe, the United States, UAE, Singapore, and Asia-Pacific.',
    icon: 'Globe'
  }
];

export const STATS_ITEMS = [
  { number: '25+', label: 'Years of Legal Excellence' },
  { number: '1,500+', label: 'Transactions & Disputes Resolved' },
  { number: '35+', label: 'Industry Sectors Served' },
  { number: '98%', label: 'Client Retention & Satisfaction' }
];
