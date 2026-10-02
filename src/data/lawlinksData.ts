// Auto-generated Law Links master data file

export interface LawyerProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  role: string;
  image: string;
  email: string;
  experience: string;
  enrolment: string;
  education: string;
  description: string;
  bio: string[];
  expertise: string[];
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroImage: string;
  paragraphs: string[];
  forums?: string[];
  features?: string[];
  areas?: string[];
  sections?: { title: string; content: string }[];
}

export interface PublicationItem {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  summary: string;
  fullContent: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  presenter: string;
  duration: string;
  description: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

export const LAWLINKS_INFO = {
  name: "Law Links",
  legalName: "Law Links, Advocates & Legal Consultants",
  tagline: "Advocates & Legal Consultants",
  established: 2004,
  founders: "Ms. Lalit Mohini Bhat, Mr. Naveen R. Nath (Senior Advocate), and Ms. Hetu Arora Sethi",
  headOffice: {
    city: "New Delhi",
    address: "C-47 (LGF), Nizamuddin East, New Delhi – 110 013",
    phone: "011- 43017435 / 46452172",
    email: "mail@lawlinksoffice.com"
  },
  branchOffice: {
    city: "Bengaluru",
    address: "No.23/1, 5th Floor, 1st Main Road, Seshadripuram, Bengaluru - 560020",
    phone: "080- 41242407",
    email: "mail@lawlinksoffice.com"
  },
  socials: {
    facebook: "https://www.facebook.com/109443294088641/",
    linkedin: "https://www.linkedin.com/company/law-links",
    youtube: "https://www.youtube.com/channel/UCNMfmoI2ilsFWCuVEvJDOHw"
  },
  aboutSummary: "Law Links is a boutique legal service firm founded by Ms. Lalit Mohini Bhat, Mr. Naveen R. Nath (designated senior advocate since February 2021) and Ms. Hetu Arora Sethi. The firm operates out of their owned office premises in the posh Nizamuddin East area of New Delhi since 2004. With a litigation experience ranging from three to thirty-five years, our team routinely appears before the Hon’ble Supreme Court of India, Hon’ble High Court of Delhi and other High Courts and Tribunals pan-India.",
  disclaimer: "The Bar Council of India rules do not permit advertisement or solicitation by legal professionals. This website does not seek to advertise, solicit, invite or induce potential clients. The contents of this website are solely for the purposes of information and to provide necessary contact details. You have the choice not to proceed to view the contents of this website. However, if you wish to access information regarding the owner of this website, you may do so by clicking the “AGREE” button."
};

export const HERO_SLIDES = [
  {
    id: "slide-1",
    image: "/assets/lawlinks/banner4.png",
    subtitle: "PRACTICING ADVOCATES & LEGAL CONSULTANTS",
    title: "Dedicated Litigation & Legal Advisory Across India",
    highlight: "30+ Years of Distinction & Over 10,000+ Cases Handled Pan-India"
  },
  {
    id: "slide-2",
    image: "/assets/lawlinks/banner5.png",
    subtitle: "SUPREME COURT & HIGH COURTS PRACTICE",
    title: "Niche Expertise in Appellate & Constitutional Matters",
    highlight: "Over 500 Reported Judgments from Supreme Court of India to Our Credit"
  },
  {
    id: "slide-3",
    image: "/assets/lawlinks/banner6.png",
    subtitle: "ALTERNATIVE DISPUTE RESOLUTION & ARBITRATION",
    title: "Pioneering Commercial Arbitration, Mediation & Conciliation",
    highlight: "Partners Routinely Appointed as Arbitrators by High Court of Delhi"
  }
];

export const STATISTICS = [
  { value: "11 +", label: "Qualified Lawyers", icon: "Users" },
  { value: "30 +", label: "Years of Experience", icon: "Clock" },
  { value: "1000 +", label: "Trusted Clients", icon: "Building" },
  { value: "10,000 +", label: "Successful Cases", icon: "Award" }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    "id": "litigation",
    "slug": "litigation",
    "title": "Litigation",
    "shortDesc": "Law Links litigation practice is one of the best and dedicated practices in the Country with over 500 reported judgments from the Supreme Court alone.",
    "heroImage": "/assets/lawlinks/about-banner.png",
    "paragraphs": [
      "Law Links litigation practice is one of the best and dedicated practices in the Country. The Founding Partners of the firm have built this practice over the last 35 years and due to their expertise and experience, Law Links has been able to handle matters before the courts, quasi-judicial authorities, and tribunals including the Supreme Court of India, Arbitral Tribunals, High Courts of various states, District Courts, Company Law Tribunals, Consumer Courts and all other major Authorities and Tribunals.",
      "Our civil, criminal and service litigation practice especially in the courts of Delhi and Supreme Court has made us stand out among the litigation practicing firms in Delhi and India alike. We are regularly engaged by leading law firms and corporate clients to handle the litigation matters on their behalf in the Supreme Court of India. We have more than 500 reported judgments from the Supreme Court alone to our credit, which speaks volumes of our work, dedication and niche in this practice area.",
      "We regularly represent our clients before all Judicial & Quasi-Judicial Bodies across the country, providing end-to-end strategy, pleadings drafting, interim emergency stays, regular hearings, and appellate proceedings."
    ],
    "forums": [
      "Supreme Court of India",
      "All High Courts of the country (Delhi, Karnataka, Bombay, Madras, Allahabad, etc.)",
      "District & Sessions Courts across Delhi NCR & India",
      "Appellate Tribunal for Electricity (APTEL)",
      "Armed Forces Tribunal (AFT)",
      "Central Administrative Tribunal (CAT)",
      "Competition Commission of India (CCI)",
      "Competition Appellate Tribunal (COMPAT)",
      "Customs, Excise and Service Tax Appellate Tribunal (CESTAT)",
      "Income Tax Appellate Tribunal (ITAT)",
      "National Consumer Disputes Redressal Commission (NCDRC)",
      "National Company Law Tribunal (NCLT)",
      "National Company Law Appellate Tribunal (NCLAT)",
      "National Green Tribunal (NGT)",
      "Securities Appellate Tribunal (SAT)"
    ]
  },
  {
    "id": "arbitration",
    "slug": "arbitration",
    "title": "Arbitration",
    "shortDesc": "Complete spectrum of domestic and international arbitration, emergency interim measures, award enforcement, and arbitrator appointments.",
    "heroImage": "/assets/lawlinks/about-banner.png",
    "paragraphs": [
      "Law Links advises and represents clients across all sectors and locations on the entire spectrum of the arbitration process, including early case assessment and devising arbitration strategies, pre-dispute negotiations, selection of arbitrators, filing and conduct of arbitration proceedings, filing interim applications and relief thereof, advocacy at arbitration hearings, the discovery process, witness examination, the confirmation, challenge and enforcement of arbitral awards. Other legal services relating to arbitration include the filing or defense of applications for interim measures before domestic courts, such as injunctions, attachments and orders to preserve evidence.",
      "Law Links is well equipped and has expertise in liaising with local counsel, witnesses, experts (such as forensic accountants, damages experts and industry experts), and other outside vendors such as e-discovery and litigation support services, on an as-needed basis. The firm also advises corporate clients on drafting, negotiating and/or reviewing domestic or international arbitration clauses in a variety of contracts and situations.",
      "Law Links also has expertise in the adjudication of arbitration proceedings. Our partners regularly act as Arbitrators and have been nominated by the High Court of Delhi in a number of arbitration disputes. Our partners in their capacity as arbitrators hear, decide disputes and render final awards in arbitration proceedings on a regular basis. Our partners are sought after and regularly appointed as arbitrators because of their knowledge and expertise of the Arbitral proceedings. Their knowledge of industry and possess and knack for finding solutions and deciding disputes make them sought after arbitrators."
    ],
    "features": [
      "Domestic & International Commercial Arbitration",
      "Court-appointed Arbitrators by High Court of Delhi",
      "Section 9 & Section 17 Interim Protection Petitions",
      "Section 11 Arbitrator Appointment Petitions",
      "Section 34 & Section 37 Challenge & Appeals of Awards",
      "Enforcement & Execution of Arbitral Awards Pan-India",
      "Complex Construction, Infrastructure & Joint Venture Disputes"
    ]
  },
  {
    "id": "dispute-resolution",
    "slug": "dispute-resolution",
    "title": "Dispute Resolution - Mediation & Conciliation",
    "shortDesc": "Pioneers in Alternative Dispute Resolution (ADR) and Online Dispute Resolution (ODR) with over 500 mediations and a 70% settlement rate.",
    "heroImage": "/assets/lawlinks/about-banner.png",
    "paragraphs": [
      "Law Links has experience with alternative disputes resolution methods such as mediation (often included in combination with arbitration in commercial contracts) and expert determinations; advises on the particular option best suited to a particular client’s business needs. We are pioneers in development of Dispute Resolution - Mediation & Conciliation strategies and explore advanced Online Dispute Resolution - Mediation & Conciliation techniques for maximum benefit of the client. Our partners are associated with one of the country’s leading Conflict Resolution Center (CRC) for Online Dispute Resolution - Mediation & Conciliation.",
      "Law Links Alternate Dispute Resolution - Mediation & Conciliation (ADR) practice is one of the important practice areas and we have over a period been regarded as the go to firm for mediation and ADR. Law Links has the experience of handling multi-million claims for its clients and has also helped their clients settle large disputes through mediation. We have gained a reputation of conducting our practice in a manner that has been appreciated for its integrity and respected as one of the finest litigation law firms in India.",
      "The firm also advises corporate clients on drafting, negotiating and/or reviewing domestic or international mediation clauses and/or ADR clauses in a variety of contracts and situations. We have experience with complex Dispute Resolution - Mediation & Conciliation clauses, including multi-tiered arbitration or litigation clauses that combine mediation, arbitration and ADR clauses with specific carve-outs (for example, carving out specific items for expert procedures), as well as multiple arbitration and/or litigation clauses in groups of contracts situations and/or multi-party situations."
    ],
    "features": [
      "Certified Mediators by Supreme Court MCPC & NALSA",
      "Over 500 Completed Mediations with 70% Success Rate",
      "Online Dispute Resolution (ODR) & Conflict Resolution Center (CRC)",
      "Multi-Tiered Dispute Resolution Clauses & Negotiations",
      "Pre-Litigation Mediation under Commercial Courts Act",
      "High-Value Settlement Accords & Consent Decrees"
    ]
  },
  {
    "id": "transactional-and-corporate-advisory",
    "slug": "transactional-1and-corporate-advisory",
    "title": "Transactional and Corporate Advisory",
    "shortDesc": "Company Secretarial, Corporate Governance, Transactional Drafting, Joint Ventures, FDI, and Full Regulatory Compliance.",
    "heroImage": "/assets/lawlinks/about-banner.png",
    "paragraphs": [
      "Law Links are experts in the discipline of corporate law and have helped its clients achieve their business goals. We are experts in providing customized solutions to our clients.",
      "We offer a spectrum of services under Transactional and Corporate Advisory practice covering company secretarial compliances, high-level corporate governance advisory, commercial drafting of contracts and joint ventures, and deep regulatory compliance across diverse industries."
    ],
    "sections": [
      {
        "title": "(i) COMPANY SECRETARIAL",
        "content": "Law Links provides company secretarial services for private entities (Private Limited Companies, Unlisted Companies, and LLPs), and help oversee good corporate governance and compliance with the Companies Act, 2013, Limited Liability Partnership Act, 2008, and The Partnership Act, 1932. We provide cost-effective and comprehensive solutions on a wide range of corporate governance needs including company incorporation and LLP incorporation."
      },
      {
        "title": "(ii) CORPORATE GOVERNANCE",
        "content": "At Law Links we understand that good corporate governance is integral to the success of conducting business, and attracting investments from the institutional investor community. We see it as central to our role as trusted advisers to help our clients comply with all regulatory aspects of the Companies Act, 2013 and the relevant rules thereunder."
      },
      {
        "title": "(iii) DRAFTING",
        "content": "Our commercial transactional drafting includes handling of issues and providing strategy and advice in business formation, commercial loans, joint venture agreements, investment agreements, shareholder agreements, term sheets, MOA/AOA, liquidation and dissolution of companies, mergers and amalgamations, FDI (foreign direct investment) advisory, corporate loans, negotiable instrument advisory and the like. Our team has drafted a number of operational agreements to represent a wide variety of commercial arrangements, and has experience in understanding long term strategic business relationships between our clients and their partners. Examples of some agreements that we have helped draft – Purchase agreements, supply contracts, employment and consulting agreements, terms of purchase and sale, extended warranty agreements, franchise agreements, manufacturing agreements, turnkey agreements, supply contracts, requirement contracts, marking agreements, intellectual property licenses and assignments, sourcing and transactional agreements."
      },
      {
        "title": "(iv) REGULATORY COMPLIANCE",
        "content": "At Law Links, we understand that every aspect of business life is becoming more regulated and the regulations vary from state to state, and from year to year. Our regulatory practice spans the key concerns that our clients have to deal with, including anti-bribery, labour compliance, government procurement contracts compliance, general compliance and financial regulatory compliance. We advise on matters of corporate governance, reporting, and disclosure requirements applicable to manufacturing companies, technology related companies, media companies, energy companies, financial and banking companies, and retail-based companies, along with other general sectors."
      }
    ]
  },
  {
    "id": "specialization-areas",
    "slug": "specialization-areas",
    "title": "Specialization Areas",
    "shortDesc": "Public & Constitutional Law, Commercial Law, Land Acquisition, IPR, Indirect Tax, Development & Town Planning, IT & Cyber Laws.",
    "heroImage": "/assets/lawlinks/about-banner.png",
    "paragraphs": [
      "Litigation and Advisory Services in Public & Constitutional Law, Commercial Law, Land Acquisition law, Intellectual Property Right Laws, Indirect Tax Laws, Alternate Dispute Resolution (Domestic and International), Infrastructure & Construction Arbitration, Development and Town Planning Law, Competition Law, Infrastructure Laws, IT & Cyber Laws, Service, Labour & Employment Laws; Banking Law, Education Law, Environment Laws, Consumer Laws, Matrimonial and Personal Law.",
      "Our Partners and Associates regularly practice before the Supreme Court of India, the Delhi High Court and the High Courts across the Country. We also handle Arbitrations, appear before the National Consumer Disputes Redressal Commission, National Green Tribunal, National Company Law Appellate Tribunal, Central Administrative Tribunal, Environmental and Mining Tribunal, etc.",
      "The firm also specializes in assisting and instructing leading Senior Counsels of the Supreme Court, including Attorney General, Solicitor General and Additional Solicitor General on regular basis before Supreme Court and High Courts.",
      "Apart from the litigation the partners are regularly engaged as Mediators and Arbitrators by private parties and governmental corporations."
    ],
    "areas": [
      "Public & Constitutional Law",
      "Commercial Law & Business Contracts",
      "Land Acquisition & KIADB Matters",
      "Intellectual Property Rights (IPR & Trademarks)",
      "Indirect Tax Laws & GST",
      "Alternate Dispute Resolution (Domestic & International)",
      "Infrastructure & Construction Arbitration",
      "Development and Town Planning Laws",
      "Competition Law (CCI & COMPAT)",
      "IT & Cyber Laws",
      "Service, Labour & Employment Laws",
      "Banking & Financial Laws (IBC, SARFAESI, DRT)",
      "Education Laws & University Regulations",
      "Environment Laws (NGT)",
      "Consumer Laws (NCDRC & State Commissions)",
      "Matrimonial and Personal Law"
    ]
  }
];

export const INDUSTRY_SECTORS = [
  {
    "name": "Automobile",
    "icon": "Car"
  },
  {
    "name": "Aviation",
    "icon": "Plane"
  },
  {
    "name": "Banking",
    "icon": "Landmark"
  },
  {
    "name": "Contracts",
    "icon": "FileText"
  },
  {
    "name": "Consumer",
    "icon": "ShieldCheck"
  },
  {
    "name": "Criminal",
    "icon": "Scale"
  },
  {
    "name": "Defence",
    "icon": "Shield"
  },
  {
    "name": "Educational Institutions",
    "icon": "GraduationCap"
  },
  {
    "name": "Water Disputes",
    "icon": "Droplets"
  },
  {
    "name": "Constitutional matters",
    "icon": "Scroll"
  },
  {
    "name": "Electricity",
    "icon": "Zap"
  },
  {
    "name": "Employment & Labour",
    "icon": "Users"
  },
  {
    "name": "Energy",
    "icon": "Flame"
  },
  {
    "name": "Environment",
    "icon": "Leaf"
  },
  {
    "name": "Hospitality",
    "icon": "Building2"
  },
  {
    "name": "Information Technology",
    "icon": "Laptop"
  },
  {
    "name": "Competition",
    "icon": "TrendingUp"
  },
  {
    "name": "Insurance",
    "icon": "Umbrella"
  },
  {
    "name": "Intellectual Property",
    "icon": "Award"
  },
  {
    "name": "Media",
    "icon": "Tv"
  },
  {
    "name": "Metrology",
    "icon": "Compass"
  },
  {
    "name": "Infrastructure",
    "icon": "HardHat"
  },
  {
    "name": "Pharmaceutical & Hospitals",
    "icon": "Activity"
  },
  {
    "name": "Real Estate & Property",
    "icon": "Home"
  },
  {
    "name": "Renewable Energy",
    "icon": "Sun"
  },
  {
    "name": "Taxation",
    "icon": "Receipt"
  },
  {
    "name": "Metal & Minerals",
    "icon": "Layers"
  },
  {
    "name": "Joint Venture",
    "icon": "Handshake"
  },
  {
    "name": "M & A",
    "icon": "Briefcase"
  },
  {
    "name": "White collar crimes",
    "icon": "Lock"
  },
  {
    "name": "Insolvency (IBC)",
    "icon": "Banknote"
  },
  {
    "name": "Telecommunication",
    "icon": "Radio"
  }
];

export const CLIENT_LOGOS = [
  {
    "name": "Adani",
    "image": "/assets/lawlinks/adani.png"
  },
  {
    "name": "Delhi Metro",
    "image": "/assets/lawlinks/delhi-metro.png"
  },
  {
    "name": "ATS",
    "image": "/assets/lawlinks/ats.png"
  },
  {
    "name": "DS Group",
    "image": "/assets/lawlinks/ds-group.png"
  },
  {
    "name": "NHPC",
    "image": "/assets/lawlinks/nhpc.png"
  },
  {
    "name": "NCC",
    "image": "/assets/lawlinks/ncc.png"
  },
  {
    "name": "Canara Bank",
    "image": "/assets/lawlinks/canara-bank.png"
  },
  {
    "name": "Noida Authority",
    "image": "/assets/lawlinks/noida.png"
  },
  {
    "name": "Simplex",
    "image": "/assets/lawlinks/simplex.png"
  },
  {
    "name": "Union Bank",
    "image": "/assets/lawlinks/union.png"
  },
  {
    "name": "CCI",
    "image": "/assets/lawlinks/cci.png"
  },
  {
    "name": "BRNL",
    "image": "/assets/lawlinks/brnl.png"
  },
  {
    "name": "Eeco Green",
    "image": "/assets/lawlinks/eeco-green.png"
  },
  {
    "name": "Eurodrug",
    "image": "/assets/lawlinks/eurodrug.png"
  },
  {
    "name": "GRM",
    "image": "/assets/lawlinks/grm.png"
  },
  {
    "name": "Hutti",
    "image": "/assets/lawlinks/hutti.png"
  },
  {
    "name": "KBJNL",
    "image": "/assets/lawlinks/kbjnl.png"
  },
  {
    "name": "KNNL",
    "image": "/assets/lawlinks/knnl.png"
  },
  {
    "name": "KSIIDC",
    "image": "/assets/lawlinks/ksiidc.png"
  },
  {
    "name": "Mysore",
    "image": "/assets/lawlinks/mysore.png"
  },
  {
    "name": "NBC",
    "image": "/assets/lawlinks/nbc.png"
  },
  {
    "name": "NIAC",
    "image": "/assets/lawlinks/niac.png"
  },
  {
    "name": "NIC",
    "image": "/assets/lawlinks/nic.png"
  },
  {
    "name": "Nigam",
    "image": "/assets/lawlinks/nigam.png"
  },
  {
    "name": "Oddy",
    "image": "/assets/lawlinks/oddy.png"
  },
  {
    "name": "Qualtech",
    "image": "/assets/lawlinks/qualtech.png"
  },
  {
    "name": "VJNL",
    "image": "/assets/lawlinks/vjnl.png"
  },
  {
    "name": "Yenepoya",
    "image": "/assets/lawlinks/yenepoya.png"
  }
];

export const TEAM_MEMBERS: LawyerProfile[] = [
  {
    "id": "lalit-mohini-bhat",
    "slug": "ms-lalit-mohini-bhat",
    "name": "Ms. Lalit Mohini Bhat",
    "title": "Senior Partner",
    "role": "Senior Partner & Certified Mediator",
    "image": "/assets/lawlinks/team-1.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "30+ Years",
    "enrolment": "Bar Council of Delhi (1991)",
    "education": "LL.B. from University of Meerut",
    "description": "Ms. Bhat has been practicing before the Supreme Court of India, High Court of Delhi and other High Courts across the country and various National Tribunals. Her domain of expertise is Education Law, Land Acquisition, Matrimonial Law, Commercial Law, Commercial & Infrastructure Arbitrations, Service Law and Alternate Dispute Resolution. She is a pioneer in development of Dispute Resolution - Mediation & Conciliation strategies and exploring advanced Online Dispute Resolution techniques for maximum benefit of the client.",
    "bio": [
      "Ms. Bhat has been practicing before the Supreme Court of India, High Court of Delhi and other High Courts across the country and various National Tribunals. Her domain of expertise is Education Law, Land Acquisition, Matrimonial Law, Commercial Law, Commercial & Infrastructure Arbitrations, Service Law and Alternate Dispute Resolution. She is a pioneer in development of Dispute Resolution - Mediation & Conciliation strategies and exploring advanced Online Dispute Resolution techniques for maximum benefit of the client.",
      "Ms. Bhat has a keen interest in Arbitration and regularly acts as arbitrator or counsel in high stake arbitration matters. She has been appointed by the High Court of Delhi in a number of arbitration disputes on a regular basis. She has also acted as the Mediator in over 500 mediations with a success rate of 70%. She is also an APCAM certified International Mediator and is also enrolled as a Senior Mediator with the Bombay Chambers of Commerce and Industry.",
      "Ms. Bhat’s forte in mediation lies in commercial, labour (employment) and family related disputes. She completed the ‘Advanced Mediation Course’ conducted by the Delhi High Court Mediation Centre (Samadhan) in 2008 and also underwent the ‘Train the Trainer’ mediation program at Utah University, Salt Lake City, USA in 2011. She is also an advisory member of the Arbitration and Dispute Resolution - Mediation & Conciliation Cell, Punjab Haryana and Delhi (PHD) Chambers of Commerce and Industry. She also holds life membership of FLO (FICCI Ladies Organization) and regularly imparts mediation training at sessions organized by the FICCI in association with the Government of India."
    ],
    "expertise": [
      "Education Law",
      "Land Acquisition",
      "Matrimonial Law",
      "Commercial Law",
      "Commercial & Infrastructure Arbitrations",
      "Service Law",
      "Alternate Dispute Resolution (ADR)"
    ]
  },
  {
    "id": "naveen-r-nath",
    "slug": "mr-naveen-r-nath",
    "name": "Mr. Naveen R. Nath",
    "title": "Founding Partner & Senior Advocate",
    "role": "Founding Partner & Senior Advocate (designated Feb 2021)",
    "image": "/assets/lawlinks/team-2.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "33+ Years",
    "enrolment": "Bar Council of Delhi (1991), Advocate-on-Record Examination (2000)",
    "education": "B.Sc. (Hons.) Botany, Sri Venkateswara College (1987); LL.B., Campus Law Centre, Delhi University (1990)",
    "description": "Mr. Naveen R. Nath is a founding partner of Law Links and sits in the Delhi office. He qualified the Advocate-on-Record (AOR) examination conducted by Supreme Court of India in 2000, and registered/enrolled as Advocate on Record of the Supreme Court. He has appeared in several Constitution Bench matters before the Hon’ble Supreme Court and has more than 200 reported Supreme Court judgments to his credit.",
    "bio": [
      "Mr. Naveen R. Nath is a founding partner of Law Links and sits in the Delhi office. He qualified the Advocate-on-Record (AOR) examination conducted by Supreme Court of India in 2000, and registered/enrolled as Advocate on Record of the Supreme Court. He is empanelled and designated counsel for a number of Public Sector Undertakings, Banks such as Council of Architecture, Competition Commission of India, Delhi High Court’s counsel in Supreme Court, Canara Bank, Delhi State Legal Services Authority, Karnataka Neeravari Nigam Limited (KNNL), Container Corporation of India and several other government agencies.",
      "Mr. Naveen specialises in litigation, arbitration and corporate advisory to individuals, corporates & various institutions. He is primarily practicing before the Supreme Court of India, High Court of Delhi, other High Courts across the country, various national Tribunals and regulatory bodies. Apart from the firm’s practice, he is regularly briefed as a senior counsel by the central as well as various state governments, individual lawyers and law firms. He is famous for his out of the box thinking and solutions.",
      "His approach and case solving strategies are such that they offer utmost comfort and benefit to the client and at the same time he is able to get client oriented relief from the courts. He has a variety of experience and has handled matters in almost all areas of law. He has appeared in several Constitution Bench matters before the Hon’ble Supreme Court and has more than 200 reported Supreme Court judgments to his credit.",
      "Mr. Naveen has had enriching experience in assisting and instructing top Senior Counsel of the Supreme Court, including Attorney General, Solicitor General and Additional Solicitor Generals on a regular basis. He maintains a regular professional relationship with top Senior Counsel in the Supreme Court, High Court of Delhi and is at ease in engaging and briefing them at short notice."
    ],
    "expertise": [
      "Arbitration",
      "Banking and Financial Law",
      "Constitutional Law",
      "Civil Law",
      "Commercial Law",
      "Consumer Laws",
      "Corporate Laws",
      "Electricity Laws",
      "Land Acquisition",
      "Town & Country Planning Law",
      "Mining and Minerals Laws",
      "White Collar Crime"
    ]
  },
  {
    "id": "hetu-arora-sethi",
    "slug": "ms-hetu-arora-seth",
    "name": "Ms. Hetu Arora Sethi",
    "title": "Partner & Advocate-on-Record",
    "role": "Partner & Advocate-on-Record (AOR)",
    "image": "/assets/lawlinks/team-3.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "20+ Years",
    "enrolment": "Advocate-on-Record (AOR) since 2003",
    "education": "LL.B., Campus Law Centre",
    "description": "Ms. Sethi is a qualified Advocate-on-Record (AOR) since 2003, regularly practicing before the Supreme Court of India, the High Court of Delhi and the National Consumer Dispute Redressal Commission.",
    "bio": [
      "Ms. Sethi is a qualified Advocate-on-Record (AOR) since 2003, she regularly practices before the Supreme Court of India, the High Court of Delhi and the National Consumer Dispute Redressal Commission representing the firm’s clients, including several professional educational institutions.",
      "She has also held the position of Additional Standing Counsel for GNCTD in the Delhi High Court. She is also a certified Mediator by Mediation & Conciliation Project Committee (MCPC), Supreme Court of India in association with National Legal Services Authority (NALSA).",
      "Ms. Sethi specialises in litigation, arbitration, meditation and also advises corporates & various institutions. She is a go-getter for litigation related matters and has a ready solution for almost all problems. She has a variety of experience and has handled matters in almost all areas of law."
    ],
    "expertise": [
      "Supreme Court Litigation",
      "Consumer Protection (NCDRC)",
      "Educational Institutions Law",
      "Arbitration & Mediation",
      "Commercial Disputes"
    ]
  },
  {
    "id": "rahul-jain",
    "slug": "mr-rahul-jain",
    "name": "Mr. Rahul Jain",
    "title": "Partner & Advocate-on-Record",
    "role": "Partner & Certified Arbitrator / Mediator",
    "image": "/assets/lawlinks/team-5.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "15+ Years",
    "enrolment": "Advocate-on-Record, Supreme Court of India",
    "education": "LL.B. (Hons)",
    "description": "Rahul is a qualified Advocate-on-Record (AOR) and has been practicing before the Supreme Court of India, various High Courts including Delhi/Bangalore/Chennai, subordinate courts and National Tribunals.",
    "bio": [
      "Rahul is a qualified Advocate-on-Record (AOR) and has been practicing before the Supreme Court of India, various High Courts including Delhi/Bangalore/Chennai, subordinate courts and National Tribunals including NCDRC, NCLT, NCLAT, NGT, etc.",
      "Rahul is a certified Arbitrator from the Indian Institute of Arbitration and Mediation (IIAM) and has conducted several arbitrations on behalf of the parties. Rahul is also a certified Mediator by Mediation & Conciliation Project Committee (MCPC), Supreme Court of India in association with National Legal Services Authority (NALSA).",
      "Apart from core litigation practice, Rahul is also a corporate lawyer and advises corporate clients on general corporate, contracts and compliance matters. Rahul provides transactional and corporate advisory services to corporate clients on a regular basis."
    ],
    "expertise": [
      "Arbitration",
      "Banking & Finance",
      "Company Law & IBC",
      "Corporate Advisory",
      "Electricity Laws",
      "Environmental Law",
      "Land Acquisition Law",
      "M&A",
      "Private Equity"
    ]
  },
  {
    "id": "siddharth-agarwal",
    "slug": "mr-siddharth-agarwal",
    "name": "Mr. Siddharth Agarwal",
    "title": "Advocate",
    "role": "Advocate - Civil & ADR Practice",
    "image": "/assets/lawlinks/team-6.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "8+ Years",
    "enrolment": "Bar Council of Delhi",
    "education": "B.A. LL.B.",
    "description": "Siddharth has been practicing before the Supreme Court of India, High Court of Delhi, subordinate courts and Tribunals in Delhi.",
    "bio": [
      "Siddharth has been practicing before the Supreme Court of India, High Court of Delhi, subordinate courts and Tribunals in Delhi. His domain of practice in the firm, apart from civil litigation, also extends to the specific fields of ADR, Company Law, Insolvency Law, Public Interest Litigation, Mediation, Property Law and Service Law.",
      "Siddharth while working at Law Links has appeared and argued before the Supreme Court and other Courts and has also briefed the top Senior Counsels both for the government and non-government clients."
    ],
    "expertise": [
      "Civil Litigation",
      "ADR & Mediation",
      "Company Law",
      "Insolvency Law",
      "Public Interest Litigation",
      "Service Law"
    ]
  },
  {
    "id": "anirudh-bhat",
    "slug": "mr-anirudh-Baht",
    "name": "Mr. Anirudh Bhat",
    "title": "Associate",
    "role": "Associate (Delhi Office)",
    "image": "/assets/lawlinks/team-7.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "5+ Years",
    "enrolment": "Bar Council of Delhi",
    "education": "B.A. LL.B. (Hons)",
    "description": "Anirudh is an Associate at the Delhi office of Law Links. Prior to joining Law Links, Anirudh worked with Agarwal Law Associates and as a Law Clerk-cum-Research Assistant to Hon’ble Justice Uday U. Lalit.",
    "bio": [
      "Anirudh is an Associate at the Delhi office of Law Links. He has been practicing before the Supreme Court of India, Delhi High Court, subordinate courts and Tribunals in Delhi.",
      "Prior to joining Law Links, Anirudh worked as an associate with Agarwal Law Associates, under the guidance of Mr. Rishi Agrawala, and as a Law Clerk-cum-Research Assistant to Hon’ble Justice Uday U. Lalit, Judge, Supreme Court of India. During his work with these offices he actively worked on civil and commercial disputes pertaining to Arbitration, Intellectual Property Law, Insolvency & Bankruptcy Code (IBC), company law."
    ],
    "expertise": [
      "Arbitration",
      "Intellectual Property Law",
      "Insolvency & Bankruptcy Code (IBC)",
      "Company Law",
      "Supreme Court Research"
    ]
  },
  {
    "id": "sanidhya-kumar",
    "slug": "mr-sanidhya",
    "name": "Mr. Sanidhya Kumar",
    "title": "Senior Associate",
    "role": "Senior Associate (Delhi Office)",
    "image": "/assets/lawlinks/team-8.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "7+ Years",
    "enrolment": "Bar Council of Delhi",
    "education": "B.A. LL.B. (Hons)",
    "description": "Sanidhya is a senior associate at the Delhi office of Law Links with substantial experience handling Civil, Commercial and IBC Matters before the Supreme Court and Delhi High Court.",
    "bio": [
      "Sanidhya is a senior associate at the Delhi office of Law Links. He has substantial experience in handling Civil, Commercial and IBC Matters before the Hon’ble Supreme Court of India, The Hon’ble High Court of Delhi, The National Company Law Appellate Tribunal, The National Company Law Tribunal-New Delhi Bench, The National Consumer Dispute Redressal Commission and various District Courts of Delhi.",
      "His work in various high stakes litigation across judicial forums has brought him a keen expertise in the Insolvency and Bankruptcy Code, Arbitration and Conciliation Act, Code of Civil Procedure, Companies Act, Consumer Protection Act and other Civil/Commercial statute.",
      "Prior to joining Law Links, Sanidhya worked with the Chambers of Mr. Nagarkatti, AOR and Mr. Amrendra Kr. Singh, Advocate, for two and a half years and before that with Gandhi & Partners for about a year."
    ],
    "expertise": [
      "Insolvency & Bankruptcy Code (IBC)",
      "NCLT & NCLAT Litigation",
      "Arbitration Act",
      "Consumer Protection Act",
      "High Stakes Commercial Litigation"
    ]
  },
  {
    "id": "prakhar-mani-tripathi",
    "slug": "mr-prakhar",
    "name": "Mr. Prakhar Mani Tripathi",
    "title": "Associate",
    "role": "Associate (Delhi Office)",
    "image": "/assets/lawlinks/team-9.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "4+ Years",
    "enrolment": "Bar Council of Delhi",
    "education": "B.A. LL.B. (Hons)",
    "description": "Prakhar regularly appears before the High Court of Delhi, District Courts across Delhi NCR, NCLT and NCDRC holding experience in Civil, Commercial and Corporate Matters.",
    "bio": [
      "Prakhar is an Associate at the Delhi office of Law Links. He regularly appears before the Hon’ble High Court of Delhi, District Courts across Delhi NCR, NCLT and NCDRC through which he holds experience in Civil, Commercial and Corporate Matters.",
      "He has also worked in the High Court of Allahabad, wherein he has worked on cases pertaining to the Motor Vehicle Act and Service Law.",
      "Prakhar is inclined towards academics and during his law graduation, he published numerous research papers on topics ranging from Cyber Security, Media Law and IPR. After graduating from college, he worked under an AoR at the Supreme Court of India."
    ],
    "expertise": [
      "Civil & Commercial Litigation",
      "NCLT & NCDRC Practice",
      "Motor Vehicle Act",
      "Cyber Security & Media Law",
      "IPR"
    ]
  },
  {
    "id": "kanak-bathwal",
    "slug": "ms-kanak-bathwal",
    "name": "Ms. Kanak Bathwal",
    "title": "Associate",
    "role": "Associate (Delhi Office)",
    "image": "/assets/lawlinks/team-12.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "2+ Years",
    "enrolment": "Bar Council of Delhi (2024)",
    "education": "B.A. LL.B. (Hons.), BML Munjal University (Class of 2024)",
    "description": "Ms. Kanak Bathwal is a graduate of the inaugural B.A. LL.B. (Hons.) batch of BML Munjal University, Class of 2024, and advocate with the Bar Council of Delhi.",
    "bio": [
      "Ms. Kanak Bathwal is a graduate of the inaugural B.A. LL.B. (Hons.) batch of BML Munjal University, Class of 2024, and has been enrolled as an advocate with the Bar Council of Delhi since 2024.",
      "During her academic tenure, she served as the President of Udaan, a student-led initiative dedicated to human empowerment, and was also an active member of the University’s Legal Aid Committee, working extensively on community outreach and access to justice programs."
    ],
    "expertise": [
      "Legal Research",
      "Civil Pleadings",
      "Consumer Rights",
      "Legal Aid & Pro Bono Outreach"
    ]
  },
  {
    "id": "reshma-thammaiah",
    "slug": "ms-reshma-thammaiah",
    "name": "Ms. Reshma Thammaiah",
    "title": "Advocate",
    "role": "Panel Advocate - Land Acquisition & Corporate",
    "image": "/assets/lawlinks/team-13.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "10+ Years",
    "enrolment": "Karnataka State Bar Council",
    "education": "LL.B.",
    "description": "Panel advocate for Karnataka Industrial Areas Development Board (KIADB) with deep experience conducting land acquisition litigation and non-litigation contract practice.",
    "bio": [
      "Being a panel advocate for Karnataka Industrial Areas Development Board, she has experience in conducting matters pertaining to Land Acquisition. She also conducts litigation pertaining to Karnataka Societies Registration Act, Co-operative Societies Act and matters pertaining to Consumer Protection Act and Appeals before the District Consumer Forum and State Commissions, Complaints under Negotiable Instruments Act, Family matters and service matters.",
      "Prior to joining Law Links, she worked with Atman Law Partners and Uday Shankar Associates where she was actively involved in Non Litigation Practice and has conducted property due diligence, independently drafted, reviewed and negotiated various contracts including Software contracts, Lease Agreements, Joint Development Agreements, Master Service Agreements, Franchise Agreements, Share Purchase and Share Subscription Agreements etc. She has conducted Due Diligence for mergers for well-known companies."
    ],
    "expertise": [
      "Land Acquisition (KIADB)",
      "Property Due Diligence",
      "Joint Development Agreements",
      "Software & IT Contracts",
      "Consumer Forum Appeals",
      "Negotiable Instruments Act"
    ]
  },
  {
    "id": "rashmi-s",
    "slug": "ms-rashmi-s",
    "name": "Ms. Rashmi S.",
    "title": "Senior Associate",
    "role": "Senior Associate (Bengaluru Office)",
    "image": "/assets/lawlinks/team-14.png",
    "email": "mail@lawlinksoffice.com",
    "experience": "9+ Years",
    "enrolment": "Karnataka State Bar Council",
    "education": "LL.B.",
    "description": "Senior Associate with Law Links in the Bengaluru office appearing before the High Court of Karnataka, Civil and Criminal Courts, and DRT.",
    "bio": [
      "Ms. Rashmi. S is a Senior Associate with Law Links and sits in our Bengaluru office. She regularly appears before the High Court, Civil and Criminal Courts, Debt Recovery Tribunal, Family Court and other forums in and around Bengaluru.",
      "Her domain of practice includes matters pertaining to property, succession, specific performance, negotiable instruments, insurance, banking and family laws. She is also involved in rendering title opinions and documentation.",
      "Prior to joining Law Links, she worked with M.T. Nanaiah & Associates, wherein she was involved in the litigation practice of the firm."
    ],
    "expertise": [
      "Property & Title Due Diligence",
      "Debt Recovery Tribunal (DRT)",
      "Karnataka High Court Practice",
      "Succession & Family Laws",
      "Negotiable Instruments"
    ]
  },
  {
    "id": "madhuri-gaikwad",
    "slug": "ms-madhuri-gaikwad",
    "name": "Ms. Madhuri Gaikwad",
    "title": "Advocate",
    "role": "Advocate (Bengaluru Office)",
    "image": "/assets/lawlinks/ms-madhuri-gaikwad.jpg",
    "email": "mail@lawlinksoffice.com",
    "experience": "7+ Years",
    "enrolment": "Karnataka State Bar Council",
    "education": "LL.B.",
    "description": "Practicing before the High Court of Karnataka, Civil and Criminal Courts, handling writ jurisdiction, trademarks, penal laws, and corporate opinions.",
    "bio": [
      "Ms. Madhuri Gaikwad has been practicing before the High Court, Civil and Criminal Courts and other forums in and around Bengaluru. Her domain of practice includes writ jurisdiction, penal laws, negotiable instruments, property, succession, trademarks, damages, insurance and family laws and arbitration. She provides opinions on Company Law, Property Laws, Employment Laws and Trademarks.",
      "Ms. Madhuri began her career with Siddharth Muchandi & Associates and has thereafter worked with Viswanathan and Co., wherein she was involved with the litigation and corporate practice of the firms. She was entrusted with responsibilities of drafting pleadings, rendering opinions, client counseling and regularly appeared before the High Court."
    ],
    "expertise": [
      "Writ Jurisdiction",
      "Trademarks & IP",
      "Penal & Criminal Laws",
      "Employment Opinions",
      "Arbitration & Damages"
    ]
  }
];

export const PHOTO_GALLERY: PhotoItem[] = [
  {
    "id": "photo-1",
    "src": "/assets/lawlinks/photo-1.jpg",
    "title": "Law Links Gallery Photo #1",
    "category": "Court & Conferences"
  },
  {
    "id": "photo-2",
    "src": "/assets/lawlinks/photo-2.jpg",
    "title": "Law Links Gallery Photo #2",
    "category": "Court & Conferences"
  },
  {
    "id": "photo-3",
    "src": "/assets/lawlinks/photo-3.jpg",
    "title": "Law Links Gallery Photo #3",
    "category": "Court & Conferences"
  },
  {
    "id": "photo-4",
    "src": "/assets/lawlinks/photo-4.jpg",
    "title": "Law Links Gallery Photo #4",
    "category": "Court & Conferences"
  },
  {
    "id": "photo-5",
    "src": "/assets/lawlinks/photo-5.jpg",
    "title": "Law Links Gallery Photo #5",
    "category": "Court & Conferences"
  },
  {
    "id": "photo-6",
    "src": "/assets/lawlinks/photo-6.jpg",
    "title": "Law Links Gallery Photo #6",
    "category": "Team & Partners"
  },
  {
    "id": "photo-7",
    "src": "/assets/lawlinks/photo-7.jpg",
    "title": "Law Links Gallery Photo #7",
    "category": "Team & Partners"
  },
  {
    "id": "photo-8",
    "src": "/assets/lawlinks/photo-8.jpg",
    "title": "Law Links Gallery Photo #8",
    "category": "Team & Partners"
  },
  {
    "id": "photo-9",
    "src": "/assets/lawlinks/photo-9.jpg",
    "title": "Law Links Gallery Photo #9",
    "category": "Team & Partners"
  },
  {
    "id": "photo-10",
    "src": "/assets/lawlinks/photo-10.jpg",
    "title": "Law Links Gallery Photo #10",
    "category": "Team & Partners"
  },
  {
    "id": "photo-11",
    "src": "/assets/lawlinks/photo-11.jpg",
    "title": "Law Links Gallery Photo #11",
    "category": "Seminars & Arbitrations"
  },
  {
    "id": "photo-12",
    "src": "/assets/lawlinks/photo-12.jpg",
    "title": "Law Links Gallery Photo #12",
    "category": "Seminars & Arbitrations"
  },
  {
    "id": "photo-13",
    "src": "/assets/lawlinks/photo-13.jpg",
    "title": "Law Links Gallery Photo #13",
    "category": "Seminars & Arbitrations"
  },
  {
    "id": "photo-14",
    "src": "/assets/lawlinks/photo-14.jpg",
    "title": "Law Links Gallery Photo #14",
    "category": "Seminars & Arbitrations"
  },
  {
    "id": "photo-15",
    "src": "/assets/lawlinks/photo-15.jpg",
    "title": "Law Links Gallery Photo #15",
    "category": "Seminars & Arbitrations"
  },
  {
    "id": "photo-16",
    "src": "/assets/lawlinks/photo-16.jpg",
    "title": "Law Links Gallery Photo #16",
    "category": "Office & Events"
  },
  {
    "id": "photo-17",
    "src": "/assets/lawlinks/photo-17.jpg",
    "title": "Law Links Gallery Photo #17",
    "category": "Office & Events"
  },
  {
    "id": "photo-18",
    "src": "/assets/lawlinks/photo-18.jpg",
    "title": "Law Links Gallery Photo #18",
    "category": "Office & Events"
  },
  {
    "id": "photo-19",
    "src": "/assets/lawlinks/photo-19.jpg",
    "title": "Law Links Gallery Photo #19",
    "category": "Office & Events"
  },
  {
    "id": "photo-20",
    "src": "/assets/lawlinks/photo-20.jpg",
    "title": "Law Links Gallery Photo #20",
    "category": "Office & Events"
  }
];

export const VIDEO_GALLERY: VideoItem[] = [
  {
    "id": "vid-1",
    "youtubeId": "evdCj9v0_JU",
    "title": "Drafting Strategies & Practice in Supreme Court",
    "presenter": "Ms. Lalit Mohini Bhat",
    "duration": "42:15",
    "description": "Insights on practical aspects of legal drafting, structuring SLPs, and advocacy strategies."
  },
  {
    "id": "vid-2",
    "youtubeId": "L1x3eFLdcmA",
    "title": "Force Majeure & Contractual Breaches During Crisis",
    "presenter": "Senior Legal Panel",
    "duration": "38:40",
    "description": "Detailed legal analysis of Section 56 of the Indian Contract Act and frustration of contracts."
  },
  {
    "id": "vid-3",
    "youtubeId": "BxV-Bfs_g28",
    "title": "Arbitration Proceedings & Section 9 Interim Relief",
    "presenter": "Mr. Naveen R. Nath",
    "duration": "51:20",
    "description": "Navigating emergency arbitrations, court assistance in evidence preservation, and injunctions."
  },
  {
    "id": "vid-4",
    "youtubeId": "8y5ulzlTk_I",
    "title": "Mediation Techniques & Conflict Resolution in India",
    "presenter": "Ms. Lalit Mohini Bhat",
    "duration": "35:10",
    "description": "Best practices in commercial mediation, ethical boundaries, and structuring binding settlement accords."
  },
  {
    "id": "vid-5",
    "youtubeId": "xL5QSfqkDSE",
    "title": "Insolvency and Bankruptcy Code (IBC) Trends",
    "presenter": "Law Links Corporate Team",
    "duration": "47:05",
    "description": "Recent landmark decisions of NCLAT and Supreme Court shaping resolution plans and creditor priorities."
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    "id": "pub-1",
    "title": "Drafting Strategies",
    "date": "10 January 2022",
    "author": "Ms. Lalit Mohini Bhat",
    "image": "/assets/lawlinks/about-banner.png",
    "summary": "I have chosen Drafting Strategies for this talk to share my experience on practical aspects of drafting. Let us try to analyze the anatomy of a persuasive legal brief.",
    "fullContent": "Drafting Strategies: The Art and Precision of Legal Pleadings\\n\\nBy Ms. Lalit Mohini Bhat, Senior Partner, Law Links\\n\\n1. Introduction\\nLegal drafting is at the very core of advocacy. A well-crafted petition, whether a Special Leave Petition (SLP) before the Supreme Court of India, a Writ Petition under Article 226 before the High Court, or a statement of claim in an international arbitration, creates the first and often lasting impression upon the court.\\n\\n2. Precision Over Verbosity\\nThe primary virtue in legal drafting is clarity. Courts are inundated with voluminous filings. A concise brief that pinpoints the fundamental error in the impugned order or the precise breach of contract will always command the judge's focus.\\n\\n3. The Question of Law\\nIn the Supreme Court, articulating the substantial question of law in the opening paragraphs is decisive. It is essential to demonstrate not merely that an error occurred, but that the decision has broader jurisdictional or constitutional ramifications.\\n\\n4. Chronology as the Spine of the Case\\nA meticulous, uncontroverted list of dates and events constitutes the backbone of every civil and commercial pleading. When the chronology is airtight, the conclusion flows naturally.\\n\\n5. Conclusion\\nMastering legal drafting requires years of disciplined engagement with precedent, rigorous fact-checking, and empathy for the judicial reader. At Law Links, every draft undergoes iterative peer review to ensure uncompromising fidelity to the client's cause."
  },
  {
    "id": "pub-2",
    "title": "FORCE MAJEURE - Impact on Commercial Contracts",
    "date": "26 July 2020",
    "author": "Mr. Naveen R. Nath & Law Links Advisory Team",
    "image": "/assets/lawlinks/publication-2.jpg",
    "summary": "Good evening friends. The topic for today's talk may be of interest to ordinary people, not merely to the lawyers, because of unprecedented economic disruptions.",
    "fullContent": "FORCE MAJEURE: Navigating Contractual Obligations During Unprecedented Disruptions\\n\\nBy Mr. Naveen R. Nath (Designated Senior Advocate) & Law Links Corporate Team\\n\\n1. Doctrine of Frustration vs. Force Majeure Clauses\\nUnder Indian law, Force Majeure is governed either by the contractual terms (under Section 32 of the Indian Contract Act, 1872) or by statutory frustration of contract under Section 56. The Supreme Court in Energy Watchdog v. CERC settled that where parties have explicitly allocated risk through a force majeure clause, Section 56 has no independent operation.\\n\\n2. Notice Requirements and Mitigation\\nA party seeking to invoke force majeure must comply strictly with contractual notice requirements, including timelines, specifying the occurrence of the qualifying event, and demonstrating active steps taken to mitigate losses.\\n\\n3. Government Directives as Qualifying Events\\nLockdown orders, statutory prohibitions, and supply chain disruptions may qualify as government interventions, but their causal link to the impossibility of performance must be established with objective evidence.\\n\\n4. Interim Relief Before Arbitral Tribunals and Courts\\nParties frequently seek interim injunctions under Section 9 of the Arbitration and Conciliation Act to restrain invocation of bank guarantees. Courts have consistently held that force majeure disputes regarding payment obligations rarely warrant injunctions against unconditional bank guarantees unless irretrievable injustice or egregious fraud is proven.\\n\\n5. Practical Guidance for Corporations\\nCommercial entities must audit standard procurement, supply, and concession agreements to modernize their dispute resolution and force majeure clauses for future resilience."
  },
  {
    "id": "pub-3",
    "title": "Drafting Strategies - Part 1: Anatomy of Written Submissions",
    "date": "17 April 2020",
    "author": "Ms. Lalit Mohini Bhat",
    "image": "/assets/lawlinks/about-banner.png",
    "summary": "Practical frameworks for preparing written synopsis, statutory interpretations, and structuring appellate arguments in high-stake commercial disputes.",
    "fullContent": "Written Submissions and Oral Advocacy: Harmonizing the Two\\n\\nBy Ms. Lalit Mohini Bhat\\n\\nIn modern commercial litigation and arbitration, written submissions frequently determine the trajectory of the outcome. Oral hearings provide the sparks, but written submissions provide the enduring architecture upon which the tribunal renders its award.\\n\\nKey principles discussed in this lecture:\\n- Structuring propositions of law with pinpoint citations\\n- Distinguishing unfavorable precedents with factual precision\\n- Summarizing quantum of damages with expert accounting exhibits\\n- Formulating alternative prayers for interim relief without compromising the principal claim."
  }
];
