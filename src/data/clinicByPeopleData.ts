import { BusinessWebsite, ItemOrService, WebsiteOffer, SectionConfig, GalleryImage } from '../types';

export interface ClinicSpeciality {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  treatments: string[];
  features: string[];
}

export interface ClinicDoctor {
  id: string;
  name: string;
  speciality: string;
  specialityId: string;
  qualification: string;
  experienceYears: number;
  location: string;
  city: string;
  consultationFee: number;
  opdTimings: string;
  rating: number;
  ratingCount: number;
  surgeriesCount: number;
  bio: string;
  hospitalAffiliation: string;
}

export interface ClinicCentre {
  id: string;
  name: string;
  city: string;
  location: string;
  address: string;
  bedCapacity: number;
  modularOTCount: number;
  accreditation: string[];
  specialities: string[];
  emergencyAvailable: boolean;
  contactNumber: string;
}

export interface HealthfeedArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  keyTakeaways: string[];
  content: string[];
}

export interface PatientStory {
  id: string;
  patientName: string;
  age: number;
  city: string;
  treatment: string;
  doctorName: string;
  recoveryDays: string;
  feedback: string;
  rating: number;
}

export const CLINIC_CONFIG = {
  brandName: 'ClinicByPeople',
  displayName: 'ClinicByPeople',
  tagline: 'Specialist Care. Trusted Doctors. Better Recovery.',
  supportingLine: 'Find trusted healthcare specialists, explore treatment options and get personalised care guidance.',
  phone: '+91 98100 24000',
  phoneClean: '919810024000',
  whatsappRaw: '919810024000',
  email: 'help@clinicbypeople.in',
  careEmail: 'care@clinicbypeople.in',
  workingHours: '24x7 Dedicated Care Helpline · Mon–Sun',
  primaryColor: '#0C5BE2',
  secondaryColor: '#FF6B4A',
  accentTeal: '#0E8A78',
  address: 'DLF Cyber City, Tower B, Gurugram · Connaught Place, New Delhi',
  disclaimer: 'ClinicByPeople provides healthcare information and consultation assistance. Information shown on this demo website is for general informational purposes and is not a substitute for professional medical diagnosis or treatment.'
};

export const CITIES_LIST = [
  'Delhi NCR',
  'Gurugram',
  'Noida',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow'
];

export const SPECIALITIES_DATA: ClinicSpeciality[] = [
  {
    id: 'general-surgery',
    name: 'General Surgery',
    shortName: 'General Surgery',
    tagline: 'Minimally Invasive Laparoscopic Procedures',
    description: 'Advanced 3D-laparoscopic & laser surgical treatments with minimal tissue trauma, negligible blood loss, and same-day discharge.',
    iconName: 'Activity',
    color: '#0C5BE2',
    treatments: [
      'Laparoscopic Inguinal / Umbilical Hernia Repair',
      'Gallbladder Stone Removal (Cholecystectomy)',
      'Laser Appendectomy for Acute Appendicitis',
      'Hydrocele & Varicocele Surgical Repair',
      'Sebaceous Cyst & Lipoma Excision'
    ],
    features: [
      '3D-HD laparoscopic optics',
      'Smallest 5mm incisions',
      'Hospital stay < 24 hours',
      'Full insurance cashless approval'
    ]
  },
  {
    id: 'womens-health',
    name: "Women's Health & Gynaecology",
    shortName: "Women's Health",
    tagline: 'Compassionate, Board-Certified Gynaecology',
    description: 'Confidential, evidence-based care for uterine fibroids, ovarian cysts, menstrual irregularities, and female wellness.',
    iconName: 'Heart',
    color: '#E11D48',
    treatments: [
      'Uterine Fibroid Removal (Myomectomy)',
      'Ovarian Cyst Laparoscopic Excision',
      'PCOS & Hormonal Imbalance Clinic',
      'Minimally Invasive Hysterectomy',
      'Diagnostic Hysteroscopy & Laparoscopy'
    ],
    features: [
      '100% Female gynaecologists available',
      'Uterus-preserving myomectomy techniques',
      'Private sanitized recovery lounges',
      'Complete post-surgery hormone advisory'
    ]
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics & Joint Care',
    shortName: 'Orthopaedics',
    tagline: 'Restoring Pain-Free Mobility & Athletic Strength',
    description: 'Cutting-edge robotic joint replacement, knee arthroscopy, ACL reconstructions, and spine care led by premier surgeons.',
    iconName: 'Shield',
    color: '#0284C7',
    treatments: [
      'Robotic Total Knee Replacement (TKR)',
      'Total Hip Replacement (THR)',
      'Arthroscopic ACL / Meniscus Repair',
      'Rotator Cuff & Shoulder Arthroscopy',
      'Carpal Tunnel & Trigger Finger Release'
    ],
    features: [
      'Sub-millimetre robotic alignment',
      'High-flexion implant longevity (25+ yrs)',
      'Next-day assisted walking protocol',
      'Complimentary physiotherapy session'
    ]
  },
  {
    id: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    shortName: 'ENT',
    tagline: 'Advanced Sinus, Airway & Hearing Interventions',
    description: 'Precision microscopic eardrum repair, functional endoscopic sinus surgery (FESS), and coblation tonsillectomy.',
    iconName: 'Ear',
    color: '#0D9488',
    treatments: [
      'FESS (Endoscopic Sinus Surgery)',
      'Septoplasty for Deviated Nasal Septum (DNS)',
      'Microscopic Tympanoplasty (Eardrum Repair)',
      'Coblation Painless Tonsillectomy',
      'Adenoidectomy & Snoring Solutions'
    ],
    features: [
      'Zero-bleed coblation wand technology',
      'No external facial scars',
      'Quick 1-day hospital stay',
      'Immediate airway & breathing relief'
    ]
  },
  {
    id: 'urology',
    name: 'Urology & Kidney Care',
    shortName: 'Urology',
    tagline: 'Incisionless Laser Dusting for Stones & Prostate',
    description: 'Breakthrough Holmium laser lithotripsy for kidney stones and bi-polar plasma resection for enlarged prostate.',
    iconName: 'Droplet',
    color: '#2563EB',
    treatments: [
      'RIRS (Retrograde Intrarenal Surgery for Stones)',
      'Holmium Laser Lithotripsy (URSL)',
      'TURP for Benign Prostatic Hyperplasia (BPH)',
      'Laser Circumcision (Phimosis / Balanitis)',
      'Urethral Stricture Laser Urethrotomy'
    ],
    features: [
      'No cuts or incisions on skin',
      'Complete kidney stone pulverization',
      'Zero risk of urinary incontinence',
      'Overnight discharge & early return to desk'
    ]
  },
  {
    id: 'proctology',
    name: 'Proctology & Colorectal Care',
    shortName: 'Proctology',
    tagline: 'US-FDA Approved Painless Laser Rectal Care',
    description: '15-minute daycare laser procedures for piles, fissures, and fistulas with zero cutting, no painful dressings, and quick recovery.',
    iconName: 'Flame',
    color: '#EA580C',
    treatments: [
      'Laser Piles Treatment (LHP - Hemorrhoids)',
      'Laser Fissurectomy for Anal Fissures',
      'FiLaC (Fistula Laser Closure)',
      'EPSiT for Pilonidal Sinus',
      'Anal Skin Tag & Polyp Laser Ablation'
    ],
    features: [
      'No stitches, no cutting of sphincter',
      'Painless laser beam energy delivery',
      'Discharge within 3 to 6 hours',
      'Resume normal work in 48 hours'
    ]
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Skin Science',
    shortName: 'Dermatology',
    tagline: 'Clinical Dermatology & Dermatological Surgery',
    description: 'Evidence-backed clinical skin surgery for stubborn keloids, cystic acne scars, vitiligo grafting, and skin lesion excision.',
    iconName: 'Sparkles',
    color: '#9333EA',
    treatments: [
      'Fractional CO2 Laser for Acne Scars',
      'Vitiligo Melanocyte Cell Grafting',
      'Sebaceous Cyst Minimal Excision',
      'Keloid & Hypertrophic Scar Laser Care',
      'Mole, Wart & Skin Tag Radiofrequency Ablation'
    ],
    features: [
      'Board-certified MD dermatologists',
      'US-FDA cleared aesthetic energy platforms',
      'Sterile minor OT environment',
      'Personalized post-procedure skin barrier regimen'
    ]
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic & Cosmetic Surgery',
    shortName: 'Plastic Surgery',
    tagline: 'Refined Aesthetic Contouring with Natural Results',
    description: 'Body contouring, male breast reduction, ultrasonic liposuction, and high-density hair restoration by board-certified plastic surgeons.',
    iconName: 'UserCheck',
    color: '#4F46E5',
    treatments: [
      'Gynecomastia (Male Chest Sculpting)',
      'High-Definition VASER Liposuction',
      'Rhinoplasty (Functional & Aesthetic Nose Surgery)',
      'Bio-FUE Micro-Grafting Hair Transplant',
      'Blepharoplasty (Eyelid Rejuvenation)'
    ],
    features: [
      'Concealed incision lines',
      'Micro-cannula ultrasonic contouring',
      'Glandular excision + fat aspiration',
      'High graft survival rate in hair procedures'
    ]
  }
];

export const DOCTORS_DATA: ClinicDoctor[] = [
  {
    id: 'dr-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    speciality: 'General & Laparoscopic Surgeon',
    specialityId: 'general-surgery',
    qualification: 'MBBS, MS - General Surgery, FIAGES, FMAS',
    experienceYears: 18,
    location: 'ClinicByPeople Delhi Central Centre & Gurugram Hub',
    city: 'Delhi NCR',
    consultationFee: 0,
    opdTimings: 'Mon – Sat: 10:00 AM – 4:00 PM',
    rating: 4.9,
    ratingCount: 1420,
    surgeriesCount: 4200,
    bio: 'Pioneering laparoscopic surgeon with over 18 years of clinical experience specializing in 3D keyhole hernia repairs, gallbladder removals, and complex abdominal wall reconstructions.',
    hospitalAffiliation: 'ClinicByPeople Centre & Apex Surgical Hospital'
  },
  {
    id: 'dr-neha-kapoor',
    name: 'Dr. Neha Kapoor',
    speciality: 'Senior Consultant Gynaecologist',
    specialityId: 'womens-health',
    qualification: 'MBBS, DGO, DNB - Obstetrics & Gynaecology, MNAMS',
    experienceYears: 16,
    location: 'ClinicByPeople Gurugram Care Centre',
    city: 'Gurugram',
    consultationFee: 0,
    opdTimings: 'Mon – Sat: 11:00 AM – 5:00 PM',
    rating: 4.95,
    ratingCount: 1890,
    surgeriesCount: 3800,
    bio: 'Dedicated female wellness and laparoscopic gynaecologist specializing in fertility-preserving fibroid removal, ovarian cystectomies, and advanced hysteroscopic surgery with gentle patient care.',
    hospitalAffiliation: 'ClinicByPeople Centre & Motherhood Pavilion'
  },
  {
    id: 'dr-rahul-sharma',
    name: 'Dr. Rahul Sharma',
    speciality: 'Orthopaedic & Robotic Joint Surgeon',
    specialityId: 'orthopaedics',
    qualification: 'MBBS, MS - Orthopaedics, Fellowship in Adult Joint Reconstruction (UK)',
    experienceYears: 20,
    location: 'ClinicByPeople Noida Surgical Hub',
    city: 'Noida',
    consultationFee: 0,
    opdTimings: 'Tue, Thu, Sat: 9:30 AM – 3:30 PM',
    rating: 4.88,
    ratingCount: 1650,
    surgeriesCount: 5100,
    bio: 'Renowned joint replacement specialist proficient in computer-navigated and robotic total knee replacement, revision joint surgery, and sports medicine arthroscopy.',
    hospitalAffiliation: 'ClinicByPeople Centre & OrthoLife Institute'
  },
  {
    id: 'dr-priya-malhotra',
    name: 'Dr. Priya Malhotra',
    speciality: 'Consultant ENT & Head-Neck Surgeon',
    specialityId: 'ent',
    qualification: 'MBBS, MS - ENT, Fellowship in Rhinology & Endoscopic Skull Base',
    experienceYears: 14,
    location: 'ClinicByPeople Delhi Central Centre',
    city: 'Delhi NCR',
    consultationFee: 0,
    opdTimings: 'Mon – Fri: 10:00 AM – 3:00 PM',
    rating: 4.92,
    ratingCount: 1120,
    surgeriesCount: 2900,
    bio: 'Expert in micro-ear surgeries and laser-assisted endoscopic sinus procedures, famous for bloodless coblation tonsillectomy and septoplasty delivering immediate nasal patency.',
    hospitalAffiliation: 'ClinicByPeople Centre & Metro ENT Institute'
  },
  {
    id: 'dr-vikramaditya-rao',
    name: 'Dr. Vikramaditya Rao',
    speciality: 'Chief Urologist & Andrologist',
    specialityId: 'urology',
    qualification: 'MBBS, MS, MCh - Urology, DNB - Genito-Urinary Surgery',
    experienceYears: 17,
    location: 'ClinicByPeople Mumbai West Care Centre',
    city: 'Mumbai',
    consultationFee: 0,
    opdTimings: 'Mon – Sat: 11:30 AM – 6:30 PM',
    rating: 4.91,
    ratingCount: 1540,
    surgeriesCount: 4600,
    bio: 'High-volume laser endourologist specializing in retrograde intrarenal surgery (RIRS) for large kidney stones without cuts, plasma TURP for prostate, and laser circumcision.',
    hospitalAffiliation: 'ClinicByPeople Centre & West Coast UroCare'
  },
  {
    id: 'dr-ananya-sen',
    name: 'Dr. Ananya Sen',
    speciality: 'Board-Certified Plastic & Cosmetic Surgeon',
    specialityId: 'plastic-surgery',
    qualification: 'MBBS, MS, MCh - Plastic & Reconstructive Surgery',
    experienceYears: 13,
    location: 'ClinicByPeople Bengaluru Care Centre',
    city: 'Bengaluru',
    consultationFee: 0,
    opdTimings: 'Mon – Sat: 10:30 AM – 4:30 PM',
    rating: 4.94,
    ratingCount: 980,
    surgeriesCount: 2300,
    bio: 'Aesthetic plastic surgeon focused on male gynecomastia sculpting, body contouring through VASER liposuction, and scar revision surgeries yielding natural anatomical contours.',
    hospitalAffiliation: 'ClinicByPeople Centre & Aesthetic Arts Hospital'
  }
];

export const CENTRES_DATA: ClinicCentre[] = [
  {
    id: 'centre-delhi-central',
    name: 'ClinicByPeople Delhi Central Centre',
    city: 'Delhi NCR',
    location: 'Pusa Road, Karol Bagh / Connaught Place',
    address: 'Plot 14, Main Pusa Road, Near Metro Pillar 112, Central Delhi, New Delhi 110005',
    bedCapacity: 45,
    modularOTCount: 3,
    accreditation: ['NABH Accredited', 'ISO 9001:2015', 'Cashless TPA Desk'],
    specialities: ['General Surgery', "Women's Health", 'Urology', 'ENT', 'Proctology'],
    emergencyAvailable: true,
    contactNumber: '+91 98100 24000'
  },
  {
    id: 'centre-gurugram-hub',
    name: 'ClinicByPeople Gurugram Super-Speciality Hub',
    city: 'Gurugram',
    location: 'Sector 29 / Golf Course Extension',
    address: 'Building 7A, Commercial Complex, Sector 29, Gurugram, Haryana 122002',
    bedCapacity: 60,
    modularOTCount: 4,
    accreditation: ['NABH Certified', 'NABL Pathology Lab', '24x7 Pharmacy'],
    specialities: ['Orthopaedics', 'General Surgery', 'Plastic Surgery', "Women's Health", 'Proctology'],
    emergencyAvailable: true,
    contactNumber: '+91 98100 24000'
  },
  {
    id: 'centre-noida-hub',
    name: 'ClinicByPeople Noida Surgical Centre',
    city: 'Noida',
    location: 'Sector 18 Commercial Hub',
    address: 'Block K, Sector 18, Near Radisson Hotel, Noida, Uttar Pradesh 201301',
    bedCapacity: 35,
    modularOTCount: 2,
    accreditation: ['NABH Accredited', 'Full Insurance Desk'],
    specialities: ['General Surgery', 'Proctology', 'ENT', 'Urology'],
    emergencyAvailable: false,
    contactNumber: '+91 98100 24000'
  },
  {
    id: 'centre-mumbai-west',
    name: 'ClinicByPeople Mumbai West Care Centre',
    city: 'Mumbai',
    location: 'Bandra West / Linking Road',
    address: '302, Palm View Medical Chambers, Linking Road, Bandra West, Mumbai 400050',
    bedCapacity: 50,
    modularOTCount: 3,
    accreditation: ['NABH Accredited', 'Daycare Surgical Excellence'],
    specialities: ['Proctology', 'Urology', 'Plastic Surgery', "Women's Health"],
    emergencyAvailable: true,
    contactNumber: '+91 98100 24000'
  },
  {
    id: 'centre-bengaluru-care',
    name: 'ClinicByPeople Bengaluru Care Centre',
    city: 'Bengaluru',
    location: 'Indiranagar 100 Feet Road',
    address: '412, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    bedCapacity: 40,
    modularOTCount: 3,
    accreditation: ['NABH Certified', 'Robotic Surgery Suite'],
    specialities: ['Orthopaedics', 'Plastic Surgery', 'General Surgery', 'Dermatology'],
    emergencyAvailable: true,
    contactNumber: '+91 98100 24000'
  },
  {
    id: 'centre-hyderabad-care',
    name: 'ClinicByPeople Hyderabad Healthcare Centre',
    city: 'Hyderabad',
    location: 'Road No. 12, Banjara Hills',
    address: 'Fortune Chambers, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034',
    bedCapacity: 45,
    modularOTCount: 3,
    accreditation: ['NABH Accredited', 'Zero Infection Protocol'],
    specialities: ['Urology', 'General Surgery', 'ENT', "Women's Health"],
    emergencyAvailable: true,
    contactNumber: '+91 98100 24000'
  }
];

export const PATIENT_JOURNEY_STEPS = [
  {
    stepNumber: '01',
    title: 'Expert Consultation & Insurance Check',
    subtitle: 'Free Doctor OPD & Instant Claim Assessment',
    description: 'Meet our senior board-certified specialist doctor for a thorough clinical examination. Our on-desk insurance desk pre-authorizes your cashless claim with your insurer within 30 minutes with zero hassle.',
    highlights: ['Zero consultation fee for pre-surgery review', 'Instant TPA policy pre-screening', 'Full breakdown of medical procedure']
  },
  {
    stepNumber: '02',
    title: 'Pre-Surgery Preparation & Diagnostics',
    subtitle: 'Comprehensive Pre-Anaesthesia Check',
    description: 'We conduct all required diagnostic investigations (ultrasound, blood profiles, ECG) at certified NABL labs with doorstep sample collection or priority hospital booking.',
    highlights: ['Home sample collection available', 'Physician clearance before surgery', 'Dietary instructions sent via WhatsApp']
  },
  {
    stepNumber: '03',
    title: 'Patient Logistics & Doorstep Cab Support',
    subtitle: 'Free Hospital Pickup & Dedicated Care Buddy',
    description: 'On surgery day, a private sanitized cab picks you up from your doorstep. A personal ClinicByPeople Care Buddy meets you at hospital entrance to handle all admission formalities.',
    highlights: ['Complimentary round-trip cab service', 'Dedicated hospital escort on arrival', 'Family guidance lounge']
  },
  {
    stepNumber: '04',
    title: 'Advanced Treatment & Surgical Care',
    subtitle: 'US-FDA Approved Minimally Invasive Tech',
    description: 'Procedures are performed in state-of-the-art modular operating theatres using US-FDA approved laser fibres and 3D laparoscopic instrumentation, ensuring negligible pain and micro incisions.',
    highlights: ['Top-ranking surgeons with 12+ yrs experience', 'Single-room private hospital stay', 'Minimal blood loss & zero stitches option']
  },
  {
    stepNumber: '05',
    title: 'Smooth Discharge & Zero Paperwork Delay',
    subtitle: 'Hassle-Free 100% Cashless Settlement',
    description: 'Our dedicated TPA team finalizes hospital billing and cashless claim settlement directly with your insurance provider. You walk out without long discharge counter queues.',
    highlights: ['Zero waiting time at billing desk', 'Discharge summary & medication kit provided', 'Same-day or 24-hr discharge in most cases']
  },
  {
    stepNumber: '06',
    title: 'Recovery & Continued Follow-Up Care',
    subtitle: 'Free Post-Op Reviews & 24/7 Helpline',
    description: 'Your recovery does not end at discharge. We provide free follow-up doctor consultations, a customized healing nutrition chart, and a 24/7 post-op recovery hotline for any query.',
    highlights: ['Free follow-up consultations included', 'Weekly recovery milestone check-ins', 'Prescription home delivery support']
  }
];

export const PATIENT_EXPERIENCE_DATA = {
  preSurgery: {
    title: 'Pre-Surgery Assistance: Thoughtful & Stress-Free',
    description: 'From your first symptom inquiry to verified clinical diagnosis, we manage every coordination step so you focus on getting well.',
    points: [
      {
        title: 'Dedicated Medical Coordinator',
        desc: 'A single assigned care manager assists you with scheduling, doctor questions, and hospital selection.'
      },
      {
        title: 'Free Cashless Insurance Pre-Authorization',
        desc: 'Our in-house billing specialists review your health insurance policy and secure cashless approvals before you arrive.'
      },
      {
        title: 'Complimentary Doorstep Cab',
        desc: 'Clean, sanitized cab arranges your hospital arrival on surgery day without parking stress.'
      }
    ]
  },
  duringSurgery: {
    title: 'During Surgery: Safety, Modern Science & Dignity',
    description: 'Every ClinicByPeople partner healthcare centre adheres to stringent international infection-control protocols.',
    points: [
      {
        title: 'Personal Care Buddy at Hospital',
        desc: 'Our care manager stays on-site to handle admission files, room allocation, and patient comfort.'
      },
      {
        title: 'US-FDA Approved Daycare Technologies',
        desc: 'Laser and laparoscopic innovations designed to minimize tissue manipulation and post-operative pain.'
      },
      {
        title: 'Sanitized Private Accommodations',
        desc: 'Air-conditioned private rooms with personalized nursing care and companion seating.'
      }
    ]
  },
  recovery: {
    title: 'Post-Surgery & Recovery: Unmatched Follow-Up Care',
    description: 'We believe genuine healthcare extends well past the operating theatre door.',
    points: [
      {
        title: 'Free Follow-Up Check-ups',
        desc: 'Complimentary in-clinic or video follow-up consultations with your operating surgeon.'
      },
      {
        title: 'Customized Diet & Healing Chart',
        desc: 'Clinical nutrition guidelines specifically designed for your surgery to hasten soft-tissue recovery.'
      },
      {
        title: '24/7 Medical Emergency Support',
        desc: 'Direct hotline access to duty doctors for any post-operative questions or wound management.'
      }
    ]
  }
};

export const TRUST_POINTS = [
  {
    title: 'Experienced Specialists',
    desc: 'All operating doctors hold accredited master degrees (MS/MCh/DNB) with minimum 12+ years of surgical track record.',
    icon: 'Award'
  },
  {
    title: 'Modern Healthcare Facilities',
    desc: 'NABH-accredited partner hospitals equipped with laminar airflow modular OTs and high-precision laser equipment.',
    icon: 'Building2'
  },
  {
    title: 'Personalised Care Support',
    desc: 'A dedicated Care Coordinator assigned to every patient from appointment booking to discharge and recovery.',
    icon: 'UserHeart'
  },
  {
    title: 'Transparent Consultation',
    desc: 'No hidden fees, no diagnostic markups. Honest surgical recommendations and exact cost estimates upfront.',
    icon: 'ShieldCheck'
  },
  {
    title: 'End-to-End Care Logistics',
    desc: 'Complimentary doorstep cab pickup & drop, insurance cashless documentation, and meal arrangements.',
    icon: 'Car'
  },
  {
    title: 'Qualified Medical Professionals',
    desc: 'Compassionate nursing staff, certified anaesthetists, and 24/7 on-call duty medical officers.',
    icon: 'Stethoscope'
  }
];

export const INSURANCE_PARTNERS = [
  'HDFC ERGO',
  'Star Health',
  'ICICI Lombard',
  'Care Health',
  'Niva Bupa',
  'Bajaj Allianz',
  'Tata AIG',
  'New India Assurance',
  'Oriental Insurance',
  'National Insurance',
  'Paramount TPA',
  'Medi Assist',
  'Vidal Health',
  'FHPL'
];

export const HEALTHFEED_ARTICLES: HealthfeedArticle[] = [
  {
    slug: 'laser-vs-traditional-surgery-comparison',
    title: 'Laser vs Traditional Surgery: Why Daycare Procedures Ensure Faster Recovery',
    category: 'General Surgery',
    readTime: '5 min read',
    date: 'March 25, 2026',
    author: 'Dr. Arjun Mehta (Senior Laparoscopic Surgeon)',
    excerpt: 'Explore how US-FDA approved laser technologies for piles, fissures, and hernias minimize blood loss and enable next-day return to normal routine.',
    keyTakeaways: [
      'Laser energy coagulates blood vessels simultaneously, causing near-zero bleeding.',
      'Traditional incisions require weeks of dressing, whereas laser leaves no open wounds.',
      'Patients resume sedentary desk work within 48 to 72 hours.',
      'Most laser daycare treatments qualify for complete cashless insurance coverage.'
    ],
    content: [
      'For decades, traditional open surgical interventions were accompanied by significant postoperative discomfort, hospital stays spanning 4–7 days, and extensive wound dressings that disrupted personal and professional routines.',
      'The advent of medical diode laser technology has transformed colorectal and general surgical care. Laser energy is precisely delivered through a flexible optical fibre directly into the target pathological tissue without cutting healthy surrounding muscle or mucosal layers.',
      'In conditions like grade 3 and 4 hemorrhoids, the laser energy induces photocoagulation of the hemorrhoidal arterial nodes, shrinking the enlargement from within while preserving anal sphincter integrity. This eliminates painful open excision wounds.',
      'Patients treated with daycare laser techniques typically experience up to 80% less postoperative pain, require minimal analgesics, and are safely discharged on the very day of the procedure.'
    ]
  },
  {
    slug: 'uterine-fibroids-symptoms-myomectomy-guide',
    title: 'Understanding Uterine Fibroids: Symptoms, Diagnosis & Uterus-Preserving Myomectomy',
    category: "Women's Health",
    readTime: '6 min read',
    date: 'March 18, 2026',
    author: 'Dr. Neha Kapoor (Senior Consultant Gynaecologist)',
    excerpt: 'Comprehensive clinical guide on detecting fibroid red flags and how minimally invasive laparoscopic myomectomy preserves female fertility.',
    keyTakeaways: [
      'Heavy menstrual bleeding, pelvic pressure, and frequent urination are primary warning signs.',
      'Pelvic ultrasound and MRI determine exact fibroid count, size, and anatomical layer.',
      'Laparoscopic myomectomy removes fibroids while completely safeguarding the uterus.',
      'Recovery timeline is significantly faster compared to traditional open abdominal surgery.'
    ],
    content: [
      'Uterine fibroids (leiomyomas) are non-cancerous muscular tumours that develop in the uterine wall. While frequently asymptomatic in early stages, larger fibroids cause severe menorrhagia (prolonged heavy periods), iron-deficiency anaemia, lower back pain, and pelvic fullness.',
      'Historically, hysterectomy (removal of the entire uterus) was routinely recommended. However, contemporary minimally invasive gynaecology prioritizes uterine preservation, particularly for women who desire future pregnancy.',
      'Laparoscopic myomectomy involves making 3 to 4 tiny 5mm punctures in the lower abdomen. Utilizing high-definition cameras and precision electrosurgical tools, the surgeon safely dissects each fibroid from the uterine myometrium and meticulously sutures the uterine muscle layer by layer.',
      'This advanced procedure prevents extensive abdominal scarring, reduces adhesions, and allows women to return home within 24 hours with preserved reproductive anatomy.'
    ]
  },
  {
    slug: 'robotic-knee-replacement-advantages',
    title: 'Robotic Total Knee Replacement: Why Sub-Millimetre Alignment Matters for Longevity',
    category: 'Orthopaedics',
    readTime: '6 min read',
    date: 'March 10, 2026',
    author: 'Dr. Rahul Sharma (Joint Replacement Specialist)',
    excerpt: 'Learn how CT-guided robotic arms assist surgeons in achieving precise joint balance, reducing bone resection, and boosting implant durability.',
    keyTakeaways: [
      'Robotic navigation maps patient-specific 3D knee anatomy prior to any surgical bone cuts.',
      'Dynamic ligament balancing ensures natural joint feel and immediate flexion.',
      'Significantly less soft-tissue trauma translates into lower blood loss and reduced swelling.',
      'Patients often begin assisted ambulation within 12 to 24 hours post-surgery.'
    ],
    content: [
      'Severe osteoarthritis of the knee can severely compromise independence and quality of life. When conservative therapies like intra-articular injections and physiotherapy fail, total knee arthroplasty provides dramatic pain relief.',
      'In conventional knee replacement, surgeons rely on manual cutting blocks and visual estimation. In contrast, robotic-assisted knee arthroplasty begins with a high-resolution 3D virtual model generated from preoperative imaging.',
      'During surgery, tracking optical sensors continuously feed real-time spatial coordinates of the joint to the robotic computer. The robotic arm assists the surgeon by preventing any bone preparation outside the safe boundary, preserving vital ligaments.',
      'Studies confirm that sub-millimetre implant alignment significantly decreases eccentric polyethylene wear, contributing to implant lifespans exceeding 25 years.'
    ]
  },
  {
    slug: 'kidney-stones-prevention-laser-rirs-treatment',
    title: 'Kidney Stones: Dietary Prevention, Warning Signs & Modern Laser RIRS Procedures',
    category: 'Urology',
    readTime: '5 min read',
    date: 'February 28, 2026',
    author: 'Dr. Vikramaditya Rao (Chief Urologist)',
    excerpt: 'Everything you need to know about severe flank pain, adequate hydration, and how flexible ureteroscopes dust large kidney stones without skin punctures.',
    keyTakeaways: [
      'Sharp flank pain radiating to the groin with nausea requires prompt ultrasound evaluation.',
      'Hydration aiming for 2.5–3 litres daily is the single most effective preventive measure.',
      'RIRS enters through the natural urinary tract—completely incisionless.',
      'Holmium laser pulverizes stones into fine microscopic dust that flushes out naturally.'
    ],
    content: [
      'Renal calculi (kidney stones) are solid mineral deposits that form when urine becomes overly concentrated with calcium, oxalate, or uric acid. When a stone moves into the narrow ureter, it causes sudden, unbearable spasmodic pain known as renal colic.',
      'For stones larger than 6mm or those lodged inside kidney calyces, spontaneous passage is unlikely. Traditional open surgery or percutaneous nephrolithotomy (PCNL) necessitated deep incisions through the back muscle.',
      'Modern Retrograde Intrarenal Surgery (RIRS) represents an extraordinary leap. A flexible ultra-thin ureteroscope is gently navigated through the natural urinary passage directly into the kidney calyx. A high-frequency Holmium laser fibre is then deployed to break the stone into minute sand-like particles.',
      'Because no skin incisions are made, patients suffer zero muscular trauma, require no abdominal dressings, and typically return to work within 48 hours.'
    ]
  },
  {
    slug: 'chronic-sinusitis-fess-endoscopic-surgery',
    title: 'Chronic Sinusitis & Deviated Septum: When to Consider Endoscopic Sinus Surgery (FESS)',
    category: 'ENT',
    readTime: '4 min read',
    date: 'February 20, 2026',
    author: 'Dr. Priya Malhotra (Consultant ENT Surgeon)',
    excerpt: 'How chronic facial pressure, nasal obstruction, and recurring sinus infections can be permanently cured using high-definition endoscopes.',
    keyTakeaways: [
      'Symptoms persisting beyond 12 weeks indicate chronic rhinosinusitis.',
      'CT Paranasal Sinuses (PNS) highlights exact anatomical blockages and polyps.',
      'FESS clears natural sinus drainage pathways without external facial incisions.',
      'Combined with septoplasty, it permanently restores effortless nasal breathing.'
    ],
    content: [
      'Millions endure chronic nasal congestion, postnasal drip, persistent headaches, and impaired sense of smell, frequently treating them with recurring courses of antibiotics and temporary nasal decongestant sprays.',
      'When sinus ostia (drainage channels) become chronically blocked by swollen mucosa or polyps, bacteria thrive in trapped secretions. Functional Endoscopic Sinus Surgery (FESS) directly addresses this root mechanical blockage.',
      'Guided by micro-optical endoscopes, the surgeon enters through the nostrils to gently widen the natural sinus drainage openings, clear diseased tissue, and restore ventilation. If a deviated nasal septum (DNS) obstructs air inflow, a simultaneous septoplasty straightens the central cartilage.',
      'Patients enjoy permanent relief from recurring facial headaches and breathe freely without external facial bruises or packing discomfort.'
    ]
  },
  {
    slug: 'gynecomastia-male-chest-contouring-guide',
    title: 'Gynecomastia: Causes, Grades & Permanent Sculpting Through VASER Liposuction',
    category: 'Plastic Surgery',
    readTime: '5 min read',
    date: 'February 12, 2026',
    author: 'Dr. Ananya Sen (Board-Certified Plastic Surgeon)',
    excerpt: 'Detailed clinical walkthrough on understanding enlarged male breast tissue, hormonal triggers, and permanent contouring with hidden micro-incisions.',
    keyTakeaways: [
      'True gynecomastia involves both glandular breast tissue and surrounding adipose fat.',
      'Diet and gym exercises alone cannot reduce firm glandular tissue.',
      'VASER ultrasonic liquefaction + micro-incision gland excision yields a flat, athletic chest.',
      'Incision is discreetly concealed along the natural lower areolar border.'
    ],
    content: [
      'Gynecomastia is the benign enlargement of male breast tissue caused by an imbalance between testosterone and oestrogen. It is remarkably common and frequently leads to severe self-consciousness in athletic clothing or at the beach.',
      'Many men spend years attempting vigorous chest workouts, unaware that while exercise can burn overlying subcutaneous fat, it has zero effect on dense glandular breast tissue.',
      'Modern cosmetic surgery combines VASER ultrasound-assisted liposuction with micro-surgical gland excision. Ultrasonic sound waves gently emulsify fibrous fat deposits, which are aspirated using fine cannulas. A minute semi-circular incision along the lower areolar margin allows complete excision of the underlying firm glandular disc.',
      'The result is a flat, masculine chest contour with permanent results, as excised glandular cells do not regenerate.'
    ]
  }
];

export const FAQS_DATA = [
  {
    q: 'What does ClinicByPeople do?',
    a: 'ClinicByPeople is a full-stack digital healthcare platform connecting patients with senior board-certified specialist surgeons, NABH-accredited surgical hospital centres, and end-to-end care coordinators. We facilitate hassle-free specialist discovery, second opinions, daycare minimally invasive surgeries, and complete cashless insurance settlements across 30+ major cities.'
  },
  {
    q: 'How can I book an appointment?',
    a: 'Booking an appointment is simple and takes under 30 seconds. You can fill out the online consultation form on this platform, call our 24x7 helpline (+91 98100 24000), or click "Start WhatsApp Chat". A dedicated personal Care Coordinator will contact you within 15 minutes to confirm a convenient date, time slot, and specialist doctor near you.'
  },
  {
    q: 'Can I speak with a specialist before surgery?',
    a: 'Yes, absolutely. We believe transparent doctor-patient communication is paramount. You can book an in-person OPD consultation at our healthcare centres or schedule a video call with our senior specialist to discuss your diagnostic reports, understand treatment options, and clear all clinical questions before making any decision.'
  },
  {
    q: 'How can I find a healthcare centre near me?',
    a: 'Use our interactive healthcare centre locator by selecting your city. We operate modern, fully-equipped surgical hubs in Delhi NCR, Gurugram, Noida, Mumbai, Bengaluru, Hyderabad, and other metropolitan centres. Every centre features laminar-airflow modular operation theatres, private recovery rooms, and dedicated patient assistance lounges.'
  },
  {
    q: 'Does ClinicByPeople help with insurance and cashless approvals?',
    a: 'Yes. Our specialized hospital insurance desk coordinates directly with all major insurance companies and third-party administrators (TPAs) like HDFC ERGO, Star Health, ICICI Lombard, Niva Bupa, and Care Health. We handle all paperwork, obtain cashless pre-authorizations before surgery, and offer 0% no-cost EMI financing if your policy does not cover the full amount.'
  },
  {
    q: 'Can I request a second opinion on my treatment?',
    a: 'Yes. If you have been advised a surgical procedure elsewhere and wish to verify whether a minimally invasive daycare alternative or conservative management is feasible, you can upload your diagnostic scans and lab reports. Our senior surgical panel provides unbiased, evidence-based second opinions within 24 hours.'
  },
  {
    q: 'How does the consultation and surgery process work?',
    a: 'Our seamless 6-step care journey includes: (1) Free specialist consultation & instant cashless insurance check, (2) Doorstep or priority pre-surgery lab diagnostics, (3) Free doorstep cab pickup on surgery day, (4) Advanced laser or laparoscopic treatment in modular OTs, (5) Rapid discharge with zero counter delays, and (6) Complimentary follow-up consultations and customized recovery diet charts.'
  },
  {
    q: 'Is follow-up support available after discharge?',
    a: 'Yes. We provide comprehensive post-discharge care including complimentary follow-up visits with your operating surgeon, digital prescription delivery, a personalized healing nutrition plan, and 24x7 phone access to our dedicated medical helpline for any recovery questions.'
  }
];

export const PATIENT_STORIES_DATA: PatientStory[] = [
  {
    id: 'story-1',
    patientName: 'Rameshwar Nath',
    age: 44,
    city: 'Delhi NCR',
    treatment: 'Laser Piles Treatment (LHP)',
    doctorName: 'Dr. Arjun Mehta',
    recoveryDays: '2 Days to Resume Desk Work',
    feedback: 'Sample Patient Experience: I was terrified of painful surgery for grade 3 piles for two years. The ClinicByPeople care coordinator arranged free cab pickup, handled all my Star Health cashless paperwork, and Dr. Mehta completed the laser procedure in just 20 minutes with zero stitches. Discharged the very same evening!',
    rating: 5
  },
  {
    id: 'story-2',
    patientName: 'Sunita Mehra',
    age: 38,
    city: 'Gurugram',
    treatment: 'Laparoscopic Uterine Fibroid Removal',
    doctorName: 'Dr. Neha Kapoor',
    recoveryDays: 'Same-Week Normal Routine',
    feedback: 'Sample Patient Experience: Dr. Neha Kapoor explained the entire laparoscopic myomectomy procedure so gently. My uterus was completely preserved, pain was minimal, and the hospital care buddy managed my room and discharge files seamlessly. Extremely thankful to the entire ClinicByPeople team.',
    rating: 5
  },
  {
    id: 'story-3',
    patientName: 'Col. K. S. Bakshi (Retd.)',
    age: 67,
    city: 'Noida',
    treatment: 'Robotic Total Knee Replacement',
    doctorName: 'Dr. Rahul Sharma',
    recoveryDays: 'Walking on Day 2 with Walker',
    feedback: 'Sample Patient Experience: Severe osteoarthritis had confined me to a wheelchair for nearly a year. Dr. Rahul Sharma performed robotic knee replacement at the Noida centre. The robotic alignment was so precise that I was taking steps the very next morning. Truly world-class surgical care.',
    rating: 5
  },
  {
    id: 'story-4',
    patientName: 'Deepak Varma',
    age: 32,
    city: 'Mumbai',
    treatment: 'Laser Kidney Stone Removal (RIRS)',
    doctorName: 'Dr. Vikramaditya Rao',
    recoveryDays: 'Zero Incisions · Next Day Home',
    feedback: 'Sample Patient Experience: When acute flank pain struck, ClinicByPeople got me into an ultrasound scan within 2 hours. Dr. Rao used a flexible laser scope through the natural urinary tract—no skin cuts whatsoever. Stone was dusted completely and insurance was 100% cashless.',
    rating: 5
  }
];

// -------------------------------------------------------------
// RAOZSITE PORTFOLIO ITEM: PROJECT #64 (CLINICBYPEOPLE)
// -------------------------------------------------------------
export const CLINICBYPEOPLE_WEBSITE: BusinessWebsite = {
  id: 'site-clinicbypeople-64',
  slug: '64-clinicbypeople',
  businessName: 'ClinicByPeople',
  category: 'clinic',
  templateId: 'healthcare_specialist_network',
  tagline: 'Specialist Care. Trusted Doctors. Better Recovery.',
  description:
    'A modern healthcare platform designed to help patients discover specialist care, explore treatments, find healthcare centres, connect with doctors and request consultations.',
  ownerName: 'ClinicByPeople Healthcare Network',
  phone: '+91 98100 24000',
  whatsapp: '+919810024000',
  email: 'help@clinicbypeople.in',
  address: 'DLF Cyber City, Tower B, Gurugram · Connaught Place, New Delhi',
  city: 'Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=DLF+Cyber+City+Gurugram',
  openingHours: '24x7 Dedicated Care Helpline · OPD: 9:30 AM – 7:30 PM',
  primaryColor: '#0C5BE2',
  secondaryColor: '#FF6B4A',
  logoUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'appointment_slot',
  bookingCtaLabel: 'View Project',
  specialBadge: 'Project #64 · Healthcare & Clinic Website',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Healthcare Hero & Search', isEnabled: true, order: 1 },
    { id: 'consultation', title: 'Book Free Consultation', isEnabled: true, order: 2 },
    { id: 'specialities', title: '8 Core Specialities', isEnabled: true, order: 3 },
    { id: 'experience', title: 'Patient Experience (3 Stages)', isEnabled: true, order: 4 },
    { id: 'hospitals', title: 'Centres & Hospitals', isEnabled: true, order: 5 },
    { id: 'journey', title: '6-Step Patient Journey', isEnabled: true, order: 6 },
    { id: 'doctors', title: 'Top Specialists', isEnabled: true, order: 7 },
    { id: 'centres', title: 'Specialized Surgical Institutes', isEnabled: true, order: 8 },
    { id: 'trust', title: 'Why ClinicByPeople Trust', isEnabled: true, order: 9 },
    { id: 'insurance', title: 'Cashless Insurance Support', isEnabled: true, order: 10 },
    { id: 'healthfeed', title: 'Medical Healthfeed Articles', isEnabled: true, order: 11 },
    { id: 'stories', title: 'Patient Success Stories', isEnabled: true, order: 12 },
    { id: 'about', title: 'About ClinicByPeople', isEnabled: true, order: 13 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 14 },
    { id: 'app', title: 'Mobile App CTA', isEnabled: true, order: 15 },
    { id: 'footer', title: 'Footer & Disclaimer', isEnabled: true, order: 16 }
  ],
  offers: [
    {
      id: 'offer-cbp-free-opd',
      title: 'Free Surgical Consultation',
      description: 'Zero consultation fee for second opinions and surgical evaluation with senior surgeons.',
      discountPercent: 100,
      couponCode: 'CBPRELIEF',
      isActive: true
    }
  ],
  gallery: [],
  items: [
    {
      id: 'item-cbp-general',
      name: 'General Laparoscopic Surgery (Hernia & Gallbladder)',
      description: 'Advanced 3D keyhole surgery with same-day or 24-hr discharge and minimal tissue trauma.',
      price: 0,
      category: 'General Surgery',
      isAvailable: true,
      isFeatured: true,
      badge: 'Daycare'
    },
    {
      id: 'item-cbp-proctology',
      name: 'Laser Proctology (Piles, Fissure & Fistula)',
      description: 'US-FDA approved painless diode laser treatments with zero cuts, no stitches, and quick recovery.',
      price: 0,
      category: 'Proctology',
      isAvailable: true,
      isFeatured: true,
      badge: '15-Min Laser'
    },
    {
      id: 'item-cbp-ortho',
      name: 'Robotic Joint Replacement & Arthroscopy',
      description: 'Sub-millimetre robotic alignment for total knee and hip replacement with 25+ yr implant longevity.',
      price: 0,
      category: 'Orthopaedics',
      isAvailable: true,
      isFeatured: true,
      badge: 'Robotic Precision'
    },
    {
      id: 'item-cbp-urology',
      name: 'Incisionless Laser Kidney Stone Surgery (RIRS)',
      description: 'Holmium laser dusting navigated through natural urinary tract with no skin incisions.',
      price: 0,
      category: 'Urology',
      isAvailable: true,
      isFeatured: true,
      badge: 'Incisionless'
    }
  ]
};

// Local storage submission for demo consultation requests
export interface ClinicConsultationLead {
  id?: string;
  fullName: string;
  phone: string;
  city: string;
  speciality: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  createdAt?: string;
}

export async function submitClinicConsultation(data: ClinicConsultationLead): Promise<{ success: boolean; message: string }> {
  try {
    const existing = localStorage.getItem('clinicbypeople_consultation_leads');
    const list: any[] = existing ? JSON.parse(existing) : [];
    list.unshift({
      ...data,
      id: 'cbp-' + Date.now(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('clinicbypeople_consultation_leads', JSON.stringify(list));
  } catch {
    // ignore
  }
  return {
    success: true,
    message: 'Thank you. Your consultation request has been received. A dedicated care coordinator will contact you within 15 minutes.'
  };
}

export function buildClinicWhatsAppLink(customMsg?: string): string {
  const text = encodeURIComponent(
    customMsg || 'Hello ClinicByPeople, I would like to book a specialist consultation.'
  );
  return `https://wa.me/${CLINIC_CONFIG.whatsappRaw}?text=${text}`;
}
