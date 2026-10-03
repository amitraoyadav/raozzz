import { BusinessWebsite } from '../types';

export const MEDICARE_CONFIG = {
  hospitalName: 'MedicarePlus Hospital',
  displayName: 'MedicarePlus Hospital',
  tagline: 'Advanced Healthcare. Compassionate Care.',
  supportingLine: 'A premier multispeciality hospital delivering world-class clinical excellence, advanced medical technologies, and patient-first care.',
  phoneOpd: '011-4000-5000',
  phoneBoardline: '011-4000-5001',
  phoneCasualty: '011-4000-5010',
  phoneAmbulance: '+91 90000 50000',
  phoneClean: '01140005000',
  emailFeedback: 'feedback@medicareplusdemo.in',
  emailComplaints: 'complaints@medicareplusdemo.in',
  emailInfo: 'info@medicareplusdemo.in',
  address: 'Plot 42, Institutional Area, Sector 62, NCR Medical Enclave, New Delhi - 110001, India',
  visitingHoursIcu: '11:00 AM – 12:00 PM & 5:00 PM – 6:00 PM',
  visitingHoursWards: '10:00 AM – 1:00 PM & 4:00 PM – 8:00 PM',
  disclaimer:
    'MedicarePlus Hospital is a demonstration website created as a portfolio project. Healthcare information shown here is for demonstration purposes and is not medical advice. Patients should consult qualified healthcare professionals for diagnosis and treatment.',
};

export interface DoctorProfile {
  id: string;
  name: string;
  speciality: string;
  department: string;
  qualification: string;
  experienceYears: number;
  availableDays: string[];
  opdTimings: string;
  consultationFee: number;
  photoUrl: string;
  bio: string;
  education: string[];
  keyExpertise: string[];
}

export interface SpecialityItem {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  category: 'surgical' | 'medical' | 'diagnostic' | 'super_speciality';
  icon: string;
  imageUrl: string;
  tagline: string;
  description: string;
  commonProcedures: string[];
  conditionsTreated: string[];
  features: string[];
}

export interface HospitalServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  icon: string;
  summary: string;
  description: string;
  timings: string;
  helpline: string;
  keyFeatures: string[];
}

export interface HealthCheckupPackage {
  id: string;
  name: string;
  tagline: string;
  demoPrice: number;
  originalPrice: number;
  duration: string;
  testsCount: number;
  recommendedFor: string;
  includedParameters: string[];
  preparationInstructions: string[];
  isPopular?: boolean;
}

export interface SymptomGuide {
  id: string;
  title: string;
  alt: string;
  iconImg: string;
  summary: string;
  conditions: {
    name: string;
    description: string;
    recommendedSpecialist: string;
    specialityId: string;
  }[];
}

export interface MediaArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  authorOrSource: string;
  readTime: string;
  imageUrl: string;
  summary: string;
  content: string[];
}

export interface PatientTestimonial {
  id: string;
  patientName: string;
  treatment: string;
  doctorName: string;
  feedback: string;
  recoveryNote: string;
  videoPlaceholderUrl: string;
}

// -------------------------------------------------------------
// SYMPTOMS EXPLORER DATA (Matching reference)
// -------------------------------------------------------------
export const SYMPTOMS_DATA: SymptomGuide[] = [
  {
    id: 'chest-pain',
    title: 'Chest Pain',
    alt: 'Heart & Chest',
    iconImg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    summary: 'Chest discomfort, pressure or squeezing sensations require immediate medical attention to evaluate cardiovascular and respiratory health.',
    conditions: [
      {
        name: 'Angina Pectoris',
        description: 'Chest heaviness or squeezing radiating to jaw, left arm or shoulder during physical exertion.',
        recommendedSpecialist: 'Cardiologist',
        specialityId: 'cardiology',
      },
      {
        name: 'Myocardial Infarction',
        description: 'Acute severe crushing retrosternal pain, sweating, shortness of breath, and nausea.',
        recommendedSpecialist: 'Emergency Cardiology',
        specialityId: 'cardiology',
      },
      {
        name: 'Gastroesophageal Reflux (GERD)',
        description: 'Burning retrosternal discomfort worsening on lying down with acid regurgitation.',
        recommendedSpecialist: 'Gastroenterologist',
        specialityId: 'gastrointestinal-surgery',
      },
      {
        name: 'Pleurisy & Pulmonary Issues',
        description: 'Sharp stabbing chest pain worsening on deep inspiration or coughing.',
        recommendedSpecialist: 'Pulmonologist',
        specialityId: 'pulmonology',
      },
    ],
  },
  {
    id: 'knees-pain',
    title: 'Joint & Knee Pain',
    alt: 'Orthopaedics & Joint',
    iconImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80',
    summary: 'Persistent joint stiffness, swelling, crepitus, or restriction in walking requiring orthopaedic consultation.',
    conditions: [
      {
        name: 'Osteoarthritis',
        description: 'Cartilage degeneration causing pain during movement, morning stiffness, and bone spurs.',
        recommendedSpecialist: 'Joint Replacement Surgeon',
        specialityId: 'orthopaedics',
      },
      {
        name: 'Rheumatoid Arthritis',
        description: 'Autoimmune systemic inflammation of small and large joints with persistent morning stiffness.',
        recommendedSpecialist: 'Rheumatologist',
        specialityId: 'rheumatology',
      },
      {
        name: 'Meniscal / Ligament Tear',
        description: 'Sports injury with sudden popping sensation, instability, and knee locking.',
        recommendedSpecialist: 'Arthroscopy Specialist',
        specialityId: 'orthopaedics',
      },
    ],
  },
  {
    id: 'abdominal-pain',
    title: 'Abdominal Pain',
    alt: 'Digestive Health',
    iconImg: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    summary: 'Localized or diffuse cramping, colicky pain, indigestion, or fever requiring surgical evaluation.',
    conditions: [
      {
        name: 'Acute Appendicitis',
        description: 'Periumbilical pain migrating to right lower quadrant with low-grade fever and vomiting.',
        recommendedSpecialist: 'General & Laparoscopic Surgeon',
        specialityId: 'general-surgery',
      },
      {
        name: 'Cholecystitis & Gallstones',
        description: 'Right upper quadrant pain worsening after oily meals radiating to right shoulder.',
        recommendedSpecialist: 'GI & HPB Surgeon',
        specialityId: 'gastrointestinal-surgery',
      },
      {
        name: 'Renal / Ureteric Calculi',
        description: 'Severe spasmodic loin-to-groin flank pain accompanied by microscopic hematuria.',
        recommendedSpecialist: 'Urologist',
        specialityId: 'urology',
      },
    ],
  },
  {
    id: 'back-pain',
    title: 'Spine & Back Pain',
    alt: 'Spine & Neurosurgery',
    iconImg: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80',
    summary: 'Low back strain, lumbar radiculopathy, or degenerative disc disease affecting posture and mobility.',
    conditions: [
      {
        name: 'Lumbar Disc Herniation',
        description: 'Sharp radiating sciatic nerve pain down one leg with numbness or tingling in foot.',
        recommendedSpecialist: 'Spine & Neurosurgeon',
        specialityId: 'neurosurgery',
      },
      {
        name: 'Cervical Spondylosis',
        description: 'Chronic neck stiffness, headache radiating to occiput, and shoulder weakness.',
        recommendedSpecialist: 'Orthopaedic Spine Specialist',
        specialityId: 'orthopaedics',
      },
    ],
  },
  {
    id: 'headache',
    title: 'Headache & Migraine',
    alt: 'Neurology & Brain',
    iconImg: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    summary: 'Recurrent throbbing headaches, visual auras, dizziness, or sudden neurological episodes.',
    conditions: [
      {
        name: 'Migraine with Aura',
        description: 'Unilateral throbbing head pain with photophobia, nausea, and sensory sensitivities.',
        recommendedSpecialist: 'Neurologist',
        specialityId: 'neurosurgery',
      },
      {
        name: 'Chronic Sinusitis',
        description: 'Facial heaviness over frontal and maxillary sinuses with post-nasal drip.',
        recommendedSpecialist: 'ENT Specialist',
        specialityId: 'ent',
      },
    ],
  },
];

// -------------------------------------------------------------
// 22 MEDICAL & SURGICAL SPECIALITIES
// -------------------------------------------------------------
export const SPECIALITIES_LIST: SpecialityItem[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Cardiac Surgery',
    shortName: 'Cardiology',
    slug: 'cardiology',
    category: 'super_speciality',
    icon: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tagline: 'Comprehensive Heart Care & Advanced Interventional Cardiology',
    description:
      'State-of-the-art biplane cardiac catheterization labs, 3D electrophysiology mapping, minimally invasive TAVR/TMVR valve repairs, and round-the-clock primary angioplasty support.',
    commonProcedures: ['Coronary Angiography & Angioplasty (PTCA)', 'Coronary Artery Bypass Grafting (CABG)', 'Transcatheter Aortic Valve Replacement (TAVR)', 'Pacemaker & ICD Implantation', 'Pediatric Cardiac Surgery'],
    conditionsTreated: ['Coronary Artery Disease', 'Heart Failure', 'Cardiac Arrhythmias', 'Valvular Heart Disease', 'Congenital Heart Defects'],
    features: ['24x7 Primary PCI Protocol', 'Level 1 Cardiac ICU', 'Non-Invasive 3D Echo & Holter', 'Cardiac Rehabilitation'],
  },
  {
    id: 'ent',
    name: 'ENT, Head & Neck Surgery',
    shortName: 'ENT',
    slug: 'ent',
    category: 'surgical',
    icon: 'Ear',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    tagline: 'Endoscopic Sinus Surgery, Cochlear Implants & Head-Neck Oncology',
    description:
      'Advanced microsurgical equipment for ear surgeries, coblation tonsillectomy, computer-navigated functional endoscopic sinus surgeries (FESS), and thyroid micro-dissections.',
    commonProcedures: ['Functional Endoscopic Sinus Surgery (FESS)', 'Tympanoplasty & Mastoidectomy', 'Cochlear Implant Surgery', 'Micro-laryngeal Phonosurgery', 'Thyroid & Salivary Gland Resection'],
    conditionsTreated: ['Chronic Sinusitis & Polyps', 'Hearing Loss & Vertigo', 'Vocal Cord Polyps & Hoarseness', 'Sleep Apnea & Snoring', 'Head and Neck Tumours'],
    features: ['High-Definition ENT Operating Microscopes', 'Full Audiometry & BERA Suite', 'Vertigo Assessment Clinic'],
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology & Eye Care',
    shortName: 'Ophthalmology',
    slug: 'ophthalmology',
    category: 'surgical',
    icon: 'Eye',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    tagline: 'Femto-Laser Cataract, Retinal Care & Cornea Transplants',
    description:
      'Bladeless refractive eye surgery, micro-incision phacoemulsification with premium multifocal IOLs, diabetic retinopathy laser management, and glaucoma trabeculoplasty.',
    commonProcedures: ['Robotic Femto-Cataract Surgery', 'Vitreo-Retinal Micro-Surgery', 'Corneal Transplantation', 'Glaucoma Shunt & Laser Surgery', 'Contoura Vision LASIK'],
    conditionsTreated: ['Cataract', 'Diabetic Retinopathy', 'Glaucoma', 'Keratoconus', 'Macular Degeneration'],
    features: ['Modular Daycare Eye OT', 'Zeiss Lumera 700 Surgical Microscope', 'Optical Coherence Tomography (OCT)'],
  },
  {
    id: 'urology',
    name: 'Urology & Kidney Stone Care',
    shortName: 'Urology',
    slug: 'urology',
    category: 'surgical',
    icon: 'Droplet',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    tagline: 'Incisionless Laser Kidney Stone Surgery (RIRS) & Robotic Prostatectomy',
    description:
      'Pioneering Holmium laser dusting for complex stones, flexible ureteroscopy, laparoscopy and robotic reconstruction for bladder and prostate conditions.',
    commonProcedures: ['Retrograde Intrarenal Surgery (RIRS)', 'Percutaneous Nephrolithotomy (PCNL)', 'Holmium Laser Enucleation of Prostate (HoLEP)', 'Robotic Radical Prostatectomy', 'AV Fistula Creation for Dialysis'],
    conditionsTreated: ['Kidney & Ureteric Stones', 'Benign Prostatic Hyperplasia (BPH)', 'Urethral Strictures', 'Urological Cancers', 'Male Infertility & Erectile Dysfunction'],
    features: ['High-Power 100W Holmium Laser', 'Digital Flexible Ureteroscopes', '3D Urodynamics Lab'],
  },
  {
    id: 'rheumatology',
    name: 'Rheumatology & Autoimmune Care',
    shortName: 'Rheumatology',
    slug: 'rheumatology',
    category: 'medical',
    icon: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80',
    tagline: 'Specialized Biological Therapies for Chronic Joint & Connective Tissue Diseases',
    description:
      'Targeted biologic infusion daycare suites, musculoskeletal ultrasound imaging, and comprehensive multidisciplinary rehabilitation for systemic inflammatory disorders.',
    commonProcedures: ['Ultrasound-Guided Joint Injections', 'Biologic Infusion Therapy', 'Diagnostic Synovial Fluid Analysis', 'Nailfold Capillaroscopy'],
    conditionsTreated: ['Rheumatoid Arthritis', 'Ankylosing Spondylitis', 'Systemic Lupus Erythematosus (SLE)', 'Psoriatic Arthritis', 'Vasculitis & Scleroderma'],
    features: ['Daycare Biologics Infusion Unit', 'Musculoskeletal Ultrasound', 'Dedicated Physiotherapy Protocols'],
  },
  {
    id: 'anesthesiology',
    name: 'Anesthesiology & Critical Care',
    shortName: 'Anesthesiology',
    slug: 'anesthesiology',
    category: 'medical',
    icon: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    tagline: 'Precision Perioperative Care & Ultrasound-Navigated Regional Anesthesia',
    description:
      'Dedicated team of cardiac, neuro, and pediatric anesthesiologists managing high-risk surgical candidates with invasive arterial hemodynamics and target-controlled infusions.',
    commonProcedures: ['Ultrasound-Guided Regional Nerve Blocks', 'Target-Controlled General Anesthesia (TCI)', 'Labor Epidural Analgesia', 'Awake Craniotomy Anesthesia', 'Difficult Airway Fiberoptic Intubation'],
    conditionsTreated: ['Surgical Perioperative Care', 'Acute Post-Operative Pain', 'Labor Pain Management'],
    features: ['Advanced Workstations with Bispectral Index (BIS)', 'Point-of-Care Echocardiography', 'Class 100 Laminar OTs'],
  },
  {
    id: 'oncology',
    name: 'Medical & Surgical Oncology',
    shortName: 'Oncology',
    slug: 'oncosurgery',
    category: 'super_speciality',
    icon: 'Crosshair',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    tagline: 'Organ-Preserving Cancer Surgery, Precision Immunotherapy & Targeted Oncology',
    description:
      'Tumour board-driven patient management, laparoscopic cancer resections, HIPEC peritoneal chemotherapy, molecular profiling, and compassionate palliative support.',
    commonProcedures: ['Radical Cancer Resections with Lymphadenectomy', 'Hyperthermic Intraperitoneal Chemotherapy (HIPEC)', 'Sentinel Lymph Node Biopsy', 'Chemo Port Insertion & Daycare Infusions'],
    conditionsTreated: ['Breast Cancer', 'Gastrointestinal & Colorectal Cancer', 'Head and Neck Cancer', 'Gynecological Malignancies', 'Lung and Thoracic Tumours'],
    features: ['Multidisciplinary Tumour Board', 'Daycare Chemotherapy Suite', 'Palliative & Pain Management Cell'],
  },
  {
    id: 'neurosurgery',
    name: 'Neurosurgery & Spine Care',
    shortName: 'Neurosurgery',
    slug: 'neurosurgery',
    category: 'super_speciality',
    icon: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    tagline: 'Neuro-Navigation, Keyhole Brain Surgery & Minimally Invasive Spine Procedures',
    description:
      'Medtronic StealthStation neuronavigation, intraoperative electrophysiology neuromonitoring, endovascular coiling of brain aneurysms, and endoscopic spine decompressions.',
    commonProcedures: ['Image-Guided Craniotomy for Brain Tumour', 'Endovascular Aneurysm Coiling', 'Minimally Invasive Spine Surgery (MISS)', 'Microvascular Decompression', 'Deep Brain Stimulation (DBS)'],
    conditionsTreated: ['Brain Tumours', 'Intracranial Aneurysms & AVMs', 'Spinal Disc Herniation & Stenosis', 'Trigeminal Neuralgia', 'Acute Ischemic & Hemorrhagic Stroke'],
    features: ['Kinevo 900 3D Surgical Microscope', 'Intraoperative Neuromonitoring (IONM)', 'Dedicated Neuro-ICU'],
  },
  {
    id: 'nephrology',
    name: 'Nephrology & Kidney Transplant',
    shortName: 'Nephrology',
    slug: 'nephrology',
    category: 'medical',
    icon: 'Filter',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    tagline: '24x7 Hemodialysis, Continuous Renal Replacement (CRRT) & Transplant Care',
    description:
      'Ultra-pure water RO dialysis plant, biocompatible polysulfone dialyzers, slow low-efficiency hemodiafiltration (SLED), and pre-transplant HLA crossmatching.',
    commonProcedures: ['Living Donor Kidney Transplantation', 'Maintenance Hemodialysis & Hemodiafiltration', 'Peritoneal Dialysis Catheter Insertion (CAPD)', 'Renal Biopsy under Real-Time Ultrasound'],
    conditionsTreated: ['Chronic Kidney Disease (CKD)', 'Acute Kidney Injury (AKI)', 'Diabetic Nephropathy', 'Glomerulonephritis', 'Refractory Hypertension'],
    features: ['24-Bed Isolated Dialysis Centre', 'Dedicated CRRT for Sepsis in ICU', 'Transplant Coordination Desk'],
  },
  {
    id: 'infectious-diseases',
    name: 'Infectious Diseases & Tropical Medicine',
    shortName: 'Infectious Diseases',
    slug: 'infectious-diseases',
    category: 'medical',
    icon: 'Bug',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80',
    tagline: 'Antimicrobial Stewardship, Complex Fevers & Hospital Infection Prevention',
    description:
      'Expert diagnosis of pyrexia of unknown origin (PUO), multidrug-resistant bacterial infections, opportunistic HIV infections, and international travel immunization.',
    commonProcedures: ['Antimicrobial Susceptibility Optimization', 'Travel Vaccination & Prophylaxis', 'Post-Exposure Prophylaxis', 'Isolation Ward Protocols'],
    conditionsTreated: ['Multidrug-Resistant Infections', 'Tuberculosis & Extrapulmonary TB', 'Tropical Fevers (Dengue, Malaria, Typhoid)', 'Fungal & Opportunistic Infections', 'Post-Surgical Sepsis'],
    features: ['Negative-Pressure Airborne Infection Isolation Rooms', 'Hospital Infection Control Committee (HICC)', 'Rapid PCR Diagnostics'],
  },
  {
    id: 'general-surgery',
    name: 'General & Laparoscopic Surgery',
    shortName: 'General Surgery',
    slug: 'general-surgery',
    category: 'surgical',
    icon: 'Scissors',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    tagline: 'Single-Incision Keyhole Surgery, Advanced Hernia Repair & Emergency Trauma',
    description:
      'High-definition Karl Storz 3D laparoscopy towers for daycare gall bladder resections, bilateral inguinal hernia repairs with 3D mesh, and acute appendectomies.',
    commonProcedures: ['Laparoscopic Cholecystectomy (Gallbladder Removal)', 'Laparoscopic Inguinal & Ventral Hernioplasty', 'Laparoscopic Appendectomy', 'Thyroidectomy & Parathyroid Surgery', 'Soft Tissue & Lipoma Excision'],
    conditionsTreated: ['Gallstones & Choledocholithiasis', 'Abdominal & Groin Hernias', 'Acute Appendicitis', 'Hydrocele & Varicocele', 'Benign Breast Conditions'],
    features: ['4K Ultra-HD Laparoscopic Stacks', 'Vessel-Sealing Energy Devices', 'Daycare Discharge Protocols'],
  },
  {
    id: 'colorectal-surgery',
    name: 'Colorectal Surgery & Proctology',
    shortName: 'Colorectal Surgery',
    slug: 'colorectal-surgery',
    category: 'surgical',
    icon: 'CircleDot',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    tagline: 'Painless Laser Hemorrhoidoplasty, Fistula Laser Closure (FiLaC) & Bowel Care',
    description:
      'Minimally invasive diode laser treatments for anorectal conditions avoiding painful incisions, sphincter injuries, and hospital stays, alongside colorectal oncology resections.',
    commonProcedures: ['Laser Hemorrhoidoplasty (LHP)', 'Fistula Laser Closure (FiLaC)', 'Laser Fissurectomy', 'Laparoscopic Colectomy & Rectopexy', 'Video-Assisted Anal Fistula Treatment (VAAFT)'],
    conditionsTreated: ['Piles (Hemorrhoids)', 'Anal Fistula & Fissure', 'Pilonidal Sinus', 'Inflammatory Bowel Disease (IBD)', 'Colorectal Polyps'],
    features: ['German Diode Laser Console', 'Zero Sphincter Damage Guarantee', 'Painless Same-Day Recovery'],
  },
  {
    id: 'bariatric-surgery',
    name: 'Bariatric & Metabolic Surgery',
    shortName: 'Bariatric Surgery',
    slug: 'bariatric-surgery',
    category: 'surgical',
    icon: 'TrendingDown',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    tagline: 'Weight Loss Surgery & Type-2 Diabetes Remission Programs',
    description:
      'Laparoscopic sleeve gastrectomy and gastric bypass performed in specialized bariatric suites with comprehensive nutritional counselling and long-term endocrinology support.',
    commonProcedures: ['Laparoscopic Sleeve Gastrectomy', 'Roux-en-Y Gastric Bypass (RYGB)', 'Mini Gastric Bypass (MGB)', 'Intragastric Balloon Placement', 'Revision Bariatric Surgery'],
    conditionsTreated: ['Morbid Obesity (BMI > 35)', 'Metabolic Syndrome', 'Obesity-Induced Type-2 Diabetes', 'Severe Obstructive Sleep Apnea'],
    features: ['High-Weight-Capacity Operating Tables', 'Dedicated Bariatric Nutritionist Team', 'Long-Term Weight Remission Registry'],
  },
  {
    id: 'gastrointestinal-surgery',
    name: 'Gastroenterology & GI Surgery',
    shortName: 'Gastrointestinal Surgery',
    slug: 'gastrointestinal-surgery',
    category: 'super_speciality',
    icon: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80',
    tagline: 'Therapeutic Endoscopy, ERCP & Complex Gastrointestinal Procedures',
    description:
      'Full endoscopy suite with Olympus EVIS X1 scopes, narrow-band imaging for early cancer detection, endoscopic mucosal resection (EMR), and bile duct stone clearances.',
    commonProcedures: ['Endoscopic Retrograde Cholangiopancreatography (ERCP)', 'Diagnostic & Therapeutic Colonoscopy', 'Upper GI Endoscopy & Band Ligation', 'Esophageal Stenting & Manometry', 'Endoscopic Ultrasound (EUS)'],
    conditionsTreated: ['Acid Peptic Disease & Ulcers', 'Bile Duct Stones & Strictures', 'Chronic Pancreatitis', 'Ulcerative Colitis & Crohn’s Disease', 'GI Bleeding & Polyps'],
    features: ['Advanced Endoscopy Suite', 'Capsule Endoscopy', 'High-Resolution Esophageal Manometry'],
  },
  {
    id: 'liver-hpb-surgery',
    name: 'Liver Transplant & HPB Surgery',
    shortName: 'Liver & HPB',
    slug: 'liver-transplant-and-hpb-surgery',
    category: 'super_speciality',
    icon: 'Crosshair',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    tagline: 'Living Donor Liver Transplantation & Complex Hepato-Pancreato-Biliary Resections',
    description:
      'Dedicated liver intensive care unit, intraoperative ultrasound Cavitron Ultrasonic Surgical Aspirator (CUSA), and blood-sparing liver parenchymal resection techniques.',
    commonProcedures: ['Living Donor Liver Transplantation (LDLT)', 'Deceased Donor Liver Transplantation (DDLT)', 'Major Hepatectomy for Liver Tumours', 'Whipple’s Pancreaticoduodenectomy', 'Bile Duct Stricture Reconstruction'],
    conditionsTreated: ['End-Stage Liver Cirrhosis', 'Hepatocellular Carcinoma (Liver Cancer)', 'Pancreatic Carcinoma', 'Bile Duct Cancers & Cysts', 'Portal Hypertension & Budd-Chiari'],
    features: ['Modular Liver Transplant OT', 'Dedicated Liver ICU (LICU)', 'Intraoperative CUSA & Argon Plasma'],
  },
  {
    id: 'pain-management',
    name: 'Pain Management & Spine Interventions',
    shortName: 'Pain Management',
    slug: 'pain-management',
    category: 'medical',
    icon: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    tagline: 'Fluoroscopy-Guided Radiofrequency Ablation & Chronic Pain Relief',
    description:
      'Non-surgical day care procedures for chronic spinal pain, neuropathic pain, cancer pain syndromes, and severe sciatica under high-definition C-arm guidance.',
    commonProcedures: ['Transforaminal Epidural Steroid Injections', 'Facet Joint Radiofrequency Neurotomy', 'Celiac Plexus Block for Cancer Pain', 'Trigger Point & Platelet-Rich Plasma (PRP) Injections', 'Spinal Cord Stimulator Implantation'],
    conditionsTreated: ['Chronic Sciatica & Herniated Discs', 'Failed Back Surgery Syndrome', 'Trigeminal Neuralgia & Intractable Headaches', 'Diabetic Neuropathy & CRPS', 'Intractable Cancer Pain'],
    features: ['Daycare Pain Procedure Suite', 'Dedicated C-Arm Fluoroscopy', 'Holistic Pain Rehabilitation Team'],
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    shortName: 'Orthopaedics',
    slug: 'orthopaedics',
    category: 'surgical',
    icon: 'Bone',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    tagline: 'Sub-Millimetre Robotic Knee Replacement & Complex Trauma Care',
    description:
      'Fully active robotic knee systems for custom-balanced joint implants, arthroscopic knee ligament reconstructions (ACL/PCL), and high-velocity pelvic trauma surgeries.',
    commonProcedures: ['Robotic Total Knee Replacement (TKR)', 'Total Hip Replacement with Dual Mobility Implants', 'Shoulder Arthroscopy & Rotator Cuff Repair', 'Anterior Cruciate Ligament (ACL) Reconstruction', 'Complex Fractures & Ilizarov Fixation'],
    conditionsTreated: ['Advanced Osteoarthritis of Knee & Hip', 'Ligament & Meniscus Tears', 'Avascular Necrosis of Femoral Head', 'Complex Pelvic & Acetabular Fractures', 'Pediatric Deformities & Clubfoot'],
    features: ['Robotic Surgical Console', 'Class 100 Orthopaedic OT with Space Suits', 'In-House Gait & Rehab Centre'],
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Cosmetology',
    shortName: 'Dermatology',
    slug: 'dermatology',
    category: 'medical',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
    tagline: 'Clinical Dermatology, Fractional CO2 Laser & Hair Restoration',
    description:
      'Evidence-based treatment for chronic dermatological conditions like psoriasis and vitiligo alongside advanced US-FDA aesthetic lasers for scars, pigmentation, and tattoo removal.',
    commonProcedures: ['Fractional CO2 Laser Resurfacing for Acne Scars', 'Q-Switched Nd:YAG Laser for Pigmentation', 'Follicular Unit Extraction (FUE) Hair Transplant', 'Targeted Phototherapy (NB-UVB)', 'Biological Therapy for Psoriasis'],
    conditionsTreated: ['Severe Acne & Keloids', 'Psoriasis & Eczema', 'Vitiligo & Melasma', 'Alopecia Areata & Pattern Hair Loss', 'Skin Infections & Dermatitis'],
    features: ['US-FDA Approved Laser Platform', 'Whole-Body Phototherapy Chamber', 'Sterile Minor Procedure OT'],
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology & Sleep Medicine',
    shortName: 'Pulmonology',
    slug: 'pulmonology',
    category: 'medical',
    icon: 'Wind',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80',
    tagline: 'Diagnostic Bronchoscopy, PFT Lab & Sleep Apnea Evaluation',
    description:
      'Complete pulmonary function testing with body plethysmography, endobronchial ultrasound (EBUS) for mediastinal lymph nodes, and level-1 overnight polysomnography sleep studies.',
    commonProcedures: ['Flexible Video Bronchoscopy with BAL', 'Endobronchial Ultrasound (EBUS) Biopsy', 'Intercostal Drainage & Medical Thoracoscopy', 'Comprehensive Overnight Sleep Study (Polysomnography)', 'Spirometry & Diffusion Capacity (DLCO)'],
    conditionsTreated: ['Chronic Obstructive Pulmonary Disease (COPD)', 'Severe Refractory Asthma', 'Interstitial Lung Disease (ILD)', 'Obstructive Sleep Apnea (OSA)', 'Pleural Effusion & Empyema'],
    features: ['High-Performance PFT & DLCO Cabin', 'Dual-Bed Sleep Study Lab', 'Respiratory Intensive Care Unit'],
  },
  {
    id: 'gynaecology',
    name: 'Gynaecology & High-Risk Obstetrics',
    shortName: 'Gynaecology',
    slug: 'gynaecology',
    category: 'surgical',
    icon: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    tagline: 'Fertility-Preserving Laparoscopy, Water Birth Suites & High-Risk Maternity Care',
    description:
      'Comprehensive female healthcare from adolescence to menopause, featuring private labor-delivery-recovery (LDR) rooms, 3D laparoscopic myomectomies, and tertiary neonatal care backup.',
    commonProcedures: ['Laparoscopic Myomectomy (Fibroid Removal)', 'Total Laparoscopic Hysterectomy (TLH)', 'Painless Delivery (Labor Epidural)', 'Hysteroscopic Polypectomy & Septum Resection', 'Cervical Cancer Screening & Colposcopy'],
    conditionsTreated: ['Uterine Fibroids & Ovarian Cysts', 'Endometriosis & Pelvic Pain', 'High-Risk Pregnancy (Preeclampsia, Gestational Diabetes)', 'PCOS & Hormonal Imbalance', 'Uterine Prolapse & Urinary Incontinence'],
    features: ['Dedicated LDR Suites', 'Level-3 Neonatal ICU (NICU)', '100% Female Clinical Staff Options'],
  },
  {
    id: 'ivf',
    name: 'IVF & Reproductive Medicine',
    shortName: 'IVF',
    slug: 'ivf',
    category: 'super_speciality',
    icon: 'Smile',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    tagline: 'Class 10,000 Cleanroom IVF Embryology Lab & Personalized Fertility Protocols',
    description:
      'Advanced assisted reproductive technology (ART) featuring blastocyst culture, intracytoplasmic sperm injection (ICSI), time-lapse embryo imaging, and preimplantation genetic testing.',
    commonProcedures: ['In-Vitro Fertilization (IVF) & ICSI', 'Blastocyst Culture & Vitrification', 'Preimplantation Genetic Screening (PGT-A)', 'Micro-TESE for Azoospermia', 'Donor Egg & Surrogacy Counselling'],
    conditionsTreated: ['Unexplained Infertility', 'Tubal Factor Infertility', 'Severe Male Factor Infertility', 'Low Ovarian Reserve & Poor Responders', 'Recurrent Implantation Failure'],
    features: ['Cleanroom Embryology Laboratory', 'Time-Lapse Primo Vision Incubators', 'Laser-Assisted Hatching System'],
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic & Reconstructive Surgery',
    shortName: 'Plastic Surgery',
    slug: 'plastic-surgery',
    category: 'surgical',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    tagline: 'Microvascular Flap Reconstruction, Hand Surgery & Aesthetic Reshaping',
    description:
      'State-of-the-art reconstructive microsurgery for cancer defects and traumatic tissue losses, combined with delicate body contouring, rhinoplasty, and burn contracture releases.',
    commonProcedures: ['Free Microvascular Flap Reconstruction', 'Traumatic Hand & Nerve Repair', 'Rhinoplasty & Septorhinoplasty', 'Body Contouring & Liposuction', 'Cleft Lip & Palate Correction'],
    conditionsTreated: ['Post-Oncological Tissue Defects', 'Traumatic Hand & Facial Injuries', 'Congenital Anomalies (Cleft Lip)', 'Severe Burn Contractures', 'Cosmetic Body & Facial Dissatisfaction'],
    features: ['High-Power Reconstructive Microscope', 'Dedicated Burn Care Unit', 'Daycare Aesthetic Suite'],
  },
];

// -------------------------------------------------------------
// 17 COMPREHENSIVE HOSPITAL SERVICES (Matching reference mega-menu)
// -------------------------------------------------------------
export const SERVICES_LIST: HospitalServiceItem[] = [
  {
    id: 'out-patient',
    title: 'Out Patient Services (OPD)',
    slug: 'out-patient',
    category: 'Consultation',
    icon: 'Stethoscope',
    summary: 'Multi-speciality outpatient consultations across 40+ medical and surgical domains.',
    description:
      'Spacious multi-floor OPD suites operating Monday through Saturday from 8:00 AM to 8:00 PM, equipped with digital prescription management and direct link to pharmacy and diagnostics.',
    timings: 'Mon–Sat: 8:00 AM – 8:00 PM',
    helpline: MEDICARE_CONFIG.phoneOpd,
    keyFeatures: ['Electronic Health Record Integration', 'Priority Senior Citizen Counters', 'Dedicated Pediatric Waiting Lounge', 'Wheelchair Assistance Desk'],
  },
  {
    id: 'ambulance',
    title: '24/7 Advanced Ambulance Services',
    slug: 'ambulance',
    category: 'Emergency',
    icon: 'Ambulance',
    summary: 'ICU-on-wheels equipped with transport ventilators, defibrillators, and paramedics.',
    description:
      'Fleet of high-acuity mobile intensive care units stationed strategically across Delhi NCR for rapid critical transfers, equipped with real-time GPS tracking and in-transit telemedicine telemetry.',
    timings: '24 Hours · 365 Days',
    helpline: MEDICARE_CONFIG.phoneAmbulance,
    keyFeatures: ['Transport Ventilator & Multi-Para Monitors', 'Syringe Pumps & Resuscitation Drugs', 'Emergency Medicine Trained Paramedics', 'Real-Time In-Transit Hospital Telemetry'],
  },
  {
    id: 'blood-centre',
    title: 'Department of Transfusion Medicine (Blood Centre)',
    slug: 'blood-center',
    category: 'Laboratory',
    icon: 'Droplet',
    summary: 'NABH-compliant 24x7 blood bank offering apheresis, PRBC, FFP, and platelets.',
    description:
      'Fully automated component separation unit providing leukocyte-reduced packed red cells, fresh frozen plasma, cryoprecipitate, and single-donor platelets (SDP) screened by NAT testing.',
    timings: '24x7 Uninterrupted Service',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Individual Nucleic Acid Testing (ID-NAT)', 'Apheresis & SDP Separation', 'Voluntary Blood Donation Drives', 'Barcoded Cold Chain Storage'],
  },
  {
    id: 'critical-care',
    title: 'Intensive Critical Care Units (ICU / CCU / NICU)',
    slug: 'critical-care',
    category: 'Emergency',
    icon: 'HeartPulse',
    summary: 'Level-3 tertiary ICUs with 1:1 nurse-to-patient ratio and continuous intensivist oversight.',
    description:
      'Sub-specialized critical care departments including Medical ICU, Surgical ICU, Coronary Care Unit, Neuro-ICU, and Level-3 NICU with negative-pressure isolation cubicles and Hamilton ventilators.',
    timings: '24x7 Dedicated Intensivist Coverage',
    helpline: MEDICARE_CONFIG.phoneCasualty,
    keyFeatures: ['1:1 Nursing for Critical Patients', 'Hamilton C6 High-End Ventilators', 'In-Unit Point-of-Care Blood Gas (ABG)', 'Continuous Renal Replacement Therapy (CRRT)'],
  },
  {
    id: 'diagnostics',
    title: 'Laboratory Medicine & Pathology',
    slug: 'diagnostics',
    category: 'Laboratory',
    icon: 'TestTube',
    summary: 'Fully automated biochemistry, hematology, immunology, and microbiology labs.',
    description:
      'Roche Cobas 8000 integrated analyzers and bioMérieux VITEK 2 automation for rapid identification of pathogens and antibiotic susceptibility within hours.',
    timings: '24x7 Sample Collection & Reporting',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Automated Track Sample Handling', 'Internal & External Quality Controls', 'Online Report Download Portal', 'Home Sample Collection Network'],
  },
  {
    id: 'radiology-imaging',
    title: 'Radiology & Advanced Imaging',
    slug: 'radiology-and-imaging',
    category: 'Diagnostic',
    icon: 'Scan',
    summary: '3.0 Tesla Silent MRI, 256-Slice Dual Energy CT, and Digital Mammography.',
    description:
      'Comprehensive diagnostic imaging pavilion providing sub-millimeter anatomical precision, low-radiation spectral CT angiography, 4D obstetric ultrasound, and bone densitometry.',
    timings: '24x7 Emergency Radiology · OPD: 8 AM – 8 PM',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['3.0T Wide-Bore Silent MRI', '256-Slice Flash Cardiac CT', 'Contrast-Enhanced Digital Mammography', 'PACS Picture Archiving & Remote Teleradiology'],
  },
  {
    id: 'day-care',
    title: 'Surgical Day Care Centre',
    slug: 'day-care',
    category: 'Surgical',
    icon: 'Clock',
    summary: 'Short-stay surgical unit designed for same-day admission, surgery, and discharge.',
    description:
      'Dedicated 30-bed daycare lounge with recliners and private cubicles optimized for laser proctology, cataract extraction, minor laparoscopies, endoscopies, and chemotherapy infusions.',
    timings: 'Mon–Sat: 7:00 AM – 7:00 PM',
    helpline: MEDICARE_CONFIG.phoneOpd,
    keyFeatures: ['Fast-Track Surgical Check-In', 'Comfortable Private Recovery Pods', 'Dedicated Daycare Discharge Counselors', 'Post-Op Same-Evening Callbacks'],
  },
  {
    id: 'dialysis-centre',
    title: 'Hemodialysis Centre',
    slug: 'dialysis-center',
    category: 'Speciality',
    icon: 'Filter',
    summary: 'High-flux dialysis machines with online hemodiafiltration in a sanitized environment.',
    description:
      'Equipped with German Fresenius 5008S consoles, separate dedicated negative-serology and isolated hepatitis suites, and clinical oversight by senior nephrologists during every session.',
    timings: '3 Daily Shifts: 7 AM, 1 PM, 7 PM',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['High-Flux Polysulfone Filters', 'Double-Pass RO Ultrapure Water System', 'Individual TV & Recliner Stations', 'Emergency ICU Dialysis Backup'],
  },
  {
    id: 'accident-emergency',
    title: 'Accident & Emergency Department (Casualty)',
    slug: 'accident-emergency',
    category: 'Emergency',
    icon: 'AlertCircle',
    summary: 'Triaged 20-bed trauma bay for polytrauma, cardiac arrests, and acute strokes.',
    description:
      'Modeled after international emergency triage protocols with dedicated resuscitation bays, immediate bedside ultrasound (FAST), CT scanner adjacent to emergency, and red-carpet cardiac pathways.',
    timings: '24x7 Round-The-Clock',
    helpline: MEDICARE_CONFIG.phoneCasualty,
    keyFeatures: ['Emergency Medicine Board-Certified Consultants', 'Dedicated Resuscitation Bay (Crash Cart)', 'Direct Lift Access to Cath Lab & OTs', 'Zero-Delay Triage Protocol'],
  },
  {
    id: 'interventional-radiology',
    title: 'Interventional Radiology',
    slug: 'interventional-radiology',
    category: 'Surgical',
    icon: 'Crosshair',
    summary: 'Minimally invasive pinhole procedures under fluoroscopy and ultrasound guidance.',
    description:
      'Transarterial chemoembolization (TACE) for liver cancer, uterine fibroid embolization (UFE), radiofrequency ablation for varicose veins, and biliary stenting with faster recovery than open surgery.',
    timings: 'Mon–Sat: 9:00 AM – 6:00 PM',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Siemens Artis Pheno Robotic C-Arm', 'Angiographic Embolization Expertise', 'Daycare Varicose Vein Laser Ablation', 'Image-Guided Targeted Biopsies'],
  },
  {
    id: 'interventional-neuroradiology',
    title: 'Interventional Neuroradiology',
    slug: 'interventional-neuroradiology',
    category: 'Surgical',
    icon: 'Activity',
    summary: 'Catheter-based treatments for brain aneurysms, acute strokes, and vascular malformations.',
    description:
      'Mechanical thrombectomy for acute ischemic stroke within the golden window, endovascular coiling of ruptured intracranial aneurysms, and carotid artery stenting.',
    timings: '24x7 Acute Stroke Intervention',
    helpline: MEDICARE_CONFIG.phoneCasualty,
    keyFeatures: ['Code-Stroke Rapid Pathway', 'Biplane Angiography Suite', 'Comprehensive Neuro-Endovascular Team', 'Post-Procedure Neuro-ICU Monitoring'],
  },
  {
    id: 'pharmacy',
    title: '24/7 Hospital Pharmacy & Chemist',
    slug: 'pharmacy',
    category: 'Retail',
    icon: 'Pill',
    summary: 'In-house dispensary stocking 100% genuine cold-chain medicines and surgical supplies.',
    description:
      'Computerized dispensing tracking expiration and batch numbers with automated drug-interaction warnings and dedicated inpatient dose delivery carts.',
    timings: '24 Hours · Open Every Day',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Complete Cold Chain Storage', 'Specialized Oncology & Cardiac Drugs', 'Doorstep Home Delivery Network', 'Computerized Prescription Verification'],
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy & Neuro-Rehabilitation',
    slug: 'physiotherapy',
    category: 'Rehabilitation',
    icon: 'Activity',
    summary: 'State-of-the-art rehabilitation gymnasium for post-op, stroke, and sports recovery.',
    description:
      'Therapeutic ultrasound, shortwave diathermy, spinal decompression traction, balance training platforms, and customized post-joint replacement walking re-education.',
    timings: 'Mon–Sat: 8:00 AM – 7:00 PM',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Post-Joint Replacement Fast-Track Protocol', 'Stroke Neuro-Developmental Therapy (NDT)', 'Sports Injury Conditioning', 'Ergonomic & Postural Re-Education'],
  },
  {
    id: 'health-check-up',
    title: 'Preventive Health Check-Up Pavilion',
    slug: 'health-check-up',
    category: 'Preventive',
    icon: 'FileCheck',
    summary: 'Comprehensive packages customized by age, gender, and lifestyle risk factors.',
    description:
      'Single-floor dedicated check-up lounge where all consultations, blood work, cardiac stress tests, imaging, and nutrition evaluations are completed in 3–4 hours with complimentary breakfast.',
    timings: 'Mon–Sat: 7:30 AM – 3:30 PM',
    helpline: MEDICARE_CONFIG.phoneOpd,
    keyFeatures: ['Single-Floor Integrated Facility', 'Same-Day Comprehensive Physician Review', 'Complimentary Dietary Consultation', 'Digital Archival of Yearly Trends'],
  },
  {
    id: 'social-initiatives',
    title: 'MedicarePlus Social Initiatives & CSR',
    slug: 'social-initiatives',
    category: 'Community',
    icon: 'HeartHandshake',
    summary: 'Free community health camps, subsidized rural outreach, and school health check-ups.',
    description:
      'Providing free medical camps in underserved districts, subsidized cardiac screenings for school children, public CPR training workshops, and subsidized dialysis quotas.',
    timings: 'Ongoing Community Programs',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Mobile Medical Outreach Van', 'Subsidized Dialysis & Cardiac Surgery Support', 'Mass Public CPR & First Aid Workshops', 'Free Senior Citizen Screenings'],
  },
  {
    id: 'visa-medicals',
    title: 'Visa & Immigration Medical Examination',
    slug: 'visa-medicals',
    category: 'Immigration',
    icon: 'Globe',
    summary: 'Authorized medical panel clinic for foreign travel, student visas, and employment.',
    description:
      'Streamlined end-to-end medical examinations including chest X-rays, blood serology, optical evaluations, and digital submission to international consulates and immigration portals.',
    timings: 'Mon–Fri: 9:00 AM – 4:00 PM',
    helpline: MEDICARE_CONFIG.phoneBoardline,
    keyFeatures: ['Direct Digital Portal Submissions', 'Fast-Track 24-Hr Turnaround Time', 'Complete Immunization & Titer Checks', 'Dedicated Immigration Liaison Desk'],
  },
];

// -------------------------------------------------------------
// FICTIONAL DEMO DOCTORS (Ethical demo profiles)
// -------------------------------------------------------------
export const DOCTORS_LIST: DoctorProfile[] = [
  {
    id: 'doc-aravind-sharma',
    name: 'Dr. Aravind Sharma',
    speciality: 'Cardiology & Electrophysiology',
    department: 'Cardiology',
    qualification: 'MBBS, MD (Medicine), DM (Cardiology), FACC (USA)',
    experienceYears: 24,
    availableDays: ['Mon', 'Wed', 'Fri', 'Sat'],
    opdTimings: '10:00 AM – 2:00 PM',
    consultationFee: 1500,
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    bio: 'Senior Director of Interventional Cardiology with over 12,000 coronary angioplasties and transcatheter valve implants performed.',
    education: ['MD General Medicine, AIIMS New Delhi', 'DM Cardiology, PGIMER Chandigarh', 'Fellowship in Cardiac Electrophysiology, Cleveland Clinic, USA'],
    keyExpertise: ['Complex Coronary Angioplasty (CTO)', 'TAVR / TAVI Valve Implantation', 'Biventricular Pacemaker (CRT-D)', '3D Arrhythmia Mapping'],
  },
  {
    id: 'doc-meera-nair',
    name: 'Dr. Meera Nair',
    speciality: 'Joint Replacement & Arthroscopy',
    department: 'Orthopaedics',
    qualification: 'MBBS, MS (Orthopaedics), M.Ch (Ortho, UK), FRCS',
    experienceYears: 19,
    availableDays: ['Tue', 'Thu', 'Sat'],
    opdTimings: '11:00 AM – 3:30 PM',
    consultationFee: 1400,
    photoUrl: 'https://images.unsplash.com/photo-1594824813593-013063548905?auto=format&fit=crop&w=400&q=80',
    bio: 'Pioneer in sub-millimetre robotic total knee replacement and sports ligament reconstructions with rapid walking protocols.',
    education: ['MS Orthopaedics, KEM Hospital Mumbai', 'M.Ch Ortho, University of Dundee, UK', 'Fellowship in Adult Joint Reconstruction, Toronto, Canada'],
    keyExpertise: ['Robotic Navigated Knee Arthroplasty', 'Dual Mobility Total Hip Replacement', 'ACL / PCL Complex Knee Reconstruction', 'Shoulder Arthroscopy'],
  },
  {
    id: 'doc-siddharth-verma',
    name: 'Dr. Siddharth Verma',
    speciality: 'Neurosurgery & Spine Surgery',
    department: 'Neurosurgery',
    qualification: 'MBBS, MS (Gen Surgery), M.Ch (Neurosurgery)',
    experienceYears: 21,
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri'],
    opdTimings: '9:30 AM – 1:30 PM',
    consultationFee: 1600,
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    bio: 'Chief Neurosurgeon specializing in image-guided brain tumour resections, aneurysm clipping, and endoscopic cervical/lumbar spine surgery.',
    education: ['M.Ch Neurosurgery, NIMHANS Bengaluru', 'Fellowship in Skull Base Surgery, Zurich, Switzerland'],
    keyExpertise: ['Brain Tumour Micro-Surgery', 'Endoscopic Minimally Invasive Spine Surgery', 'Trigeminal Neuralgia Microvascular Decompression', 'Cerebrovascular Aneurysm Surgeries'],
  },
  {
    id: 'doc-ananya-sen',
    name: 'Dr. Ananya Sen',
    speciality: 'Medical Oncology & Haematology',
    department: 'Oncology',
    qualification: 'MBBS, MD (Medicine), DM (Medical Oncology), ECMO',
    experienceYears: 16,
    availableDays: ['Mon', 'Wed', 'Fri'],
    opdTimings: '10:30 AM – 3:00 PM',
    consultationFee: 1500,
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    bio: 'Lead Medical Oncologist dedicated to precision targeted therapies, next-generation sequencing genomic tumour profiling, and immunotherapies.',
    education: ['MD Medicine, CMC Vellore', 'DM Medical Oncology, Tata Memorial Hospital Mumbai', 'Certified Medical Oncologist, European Society for Medical Oncology'],
    keyExpertise: ['Immunotherapy & Targeted Biological Therapy', 'Breast & Gynecological Oncology', 'Hematological Malignancies (Lymphoma/Leukemia)', 'Genomic Cancer Risk Profiling'],
  },
  {
    id: 'doc-rajesh-kulkarni',
    name: 'Dr. Rajesh Kulkarni',
    speciality: 'Endourology & Kidney Transplant',
    department: 'Urology',
    qualification: 'MBBS, MS, M.Ch (Urology), DNB (Urology)',
    experienceYears: 22,
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    opdTimings: '11:00 AM – 4:00 PM',
    consultationFee: 1300,
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    bio: 'Renowned Urologist known for painless laser stone dusting (RIRS) and over 600 laparoscopic donor nephrectomies for kidney transplants.',
    education: ['M.Ch Urology, Grant Medical College Mumbai', 'Fellowship in Endourology & Laparoscopy, Singapore General Hospital'],
    keyExpertise: ['Flexible Ureteroscopy & Laser Stone Dusting (RIRS)', 'Laparoscopic Donor Nephrectomy', 'HoLEP Laser Prostate Resection', 'Reconstructive Urethral Surgeries'],
  },
  {
    id: 'doc-priya-deshmukh',
    name: 'Dr. Priya Deshmukh',
    speciality: 'Gynaecology & Reproductive Medicine',
    department: 'Gynaecology',
    qualification: 'MBBS, DGO, MD (Obs & Gynae), Fellowship in ART',
    experienceYears: 18,
    availableDays: ['Mon', 'Tue', 'Thu', 'Sat'],
    opdTimings: '9:00 AM – 2:00 PM',
    consultationFee: 1200,
    photoUrl: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80',
    bio: 'Senior Consultant in high-risk obstetrics and advanced hysteroscopic surgery, providing gentle, fertility-preserving treatments.',
    education: ['MD Obstetrics & Gynaecology, Seth GS Medical College', 'Advanced Fellowship in Reproductive Endocrinology, UK'],
    keyExpertise: ['High-Risk Maternal-Fetal Medicine', 'Laparoscopic Myomectomy & Ovarian Cystectomy', 'IVF & Ovulation Induction', 'Painless Labor & Natural Birth Support'],
  },
  {
    id: 'doc-vikram-oberoi',
    name: 'Dr. Vikram Oberoi',
    speciality: 'Gastroenterology & Hepatology',
    department: 'Gastrointestinal Surgery',
    qualification: 'MBBS, MD, DM (Gastroenterology)',
    experienceYears: 20,
    availableDays: ['Tue', 'Wed', 'Fri', 'Sat'],
    opdTimings: '10:00 AM – 3:00 PM',
    consultationFee: 1400,
    photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
    bio: 'Director of Digestive Diseases with immense expertise in therapeutic ERCP, fatty liver reversal protocols, and chronic bowel inflammation.',
    education: ['DM Gastroenterology, SGPGI Lucknow', 'Advanced Endoscopy Training, Tokyo University Hospital, Japan'],
    keyExpertise: ['Therapeutic ERCP for Bile Duct Stones', 'Endoscopic Mucosal Resection (EMR)', 'Management of Cirrhosis & Fatty Liver', 'Ulcerative Colitis & Crohn’s Disease'],
  },
  {
    id: 'doc-kavita-menon',
    name: 'Dr. Kavita Menon',
    speciality: 'ENT, Head & Neck Surgery',
    department: 'ENT',
    qualification: 'MBBS, MS (ENT), DNB, Fellowship in Otology',
    experienceYears: 15,
    availableDays: ['Mon', 'Wed', 'Thu', 'Fri'],
    opdTimings: '11:00 AM – 3:00 PM',
    consultationFee: 1100,
    photoUrl: 'https://images.unsplash.com/photo-1594824813689-d4e5659b85c1?auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in microscopic ear restorations, pediatric cochlear implants, and computer-guided endoscopic sinus surgery.',
    education: ['MS ENT, Madras Medical College', 'Fellowship in Neuro-Otology, Melbourne, Australia'],
    keyExpertise: ['Endoscopic Sinus Surgery (FESS)', 'Micro-Ear Surgeries for Hearing Restoration', 'Coblation Tonsillectomy & Adenoidectomy', 'Voice Restoration Phonosurgery'],
  },
];

// -------------------------------------------------------------
// PREVENTIVE HEALTH CHECKUP PACKAGES
// -------------------------------------------------------------
export const HEALTH_PACKAGES: HealthCheckupPackage[] = [
  {
    id: 'pkg-basic',
    name: 'Basic Health Checkup',
    tagline: 'Essential screening for vital organ functions & metabolic health',
    demoPrice: 1999,
    originalPrice: 4200,
    duration: '2.5 Hours',
    testsCount: 38,
    recommendedFor: 'Adults aged 18–35 years seeking annual routine wellness check',
    includedParameters: [
      'Complete Blood Count (CBC with ESR - 24 params)',
      'Fasting Blood Glucose',
      'Kidney Function Test (Urea, Creatinine, Uric Acid)',
      'Liver Function Test (Bilirubin, SGOT, SGPT, Alkaline Phosphatase)',
      'Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)',
      'Urine Routine & Microscopic Examination',
      'Resting 12-Lead ECG',
      'Doctor Consultation & Lifestyle Review',
    ],
    preparationInstructions: ['10–12 hours overnight fasting mandatory', 'Plain water allowed in moderation', 'Bring morning urine sample container provided'],
  },
  {
    id: 'pkg-executive',
    name: 'Executive Master Health Package',
    tagline: 'Comprehensive multisystem screening for busy working professionals',
    demoPrice: 4999,
    originalPrice: 11500,
    duration: '3.5 Hours',
    testsCount: 65,
    isPopular: true,
    recommendedFor: 'Men and women aged 30–55 years exposed to corporate stress and lifestyle risks',
    includedParameters: [
      'All Basic Health Package Tests',
      'HbA1c (Glycosylated Hemoglobin 3-Month Average)',
      'Cardiac Stress Test (TMT / Treadmill) or 2D Echo',
      'Ultrasound Abdomen & Pelvis (USG Whole Abdomen)',
      'Chest X-Ray PA View',
      'Thyroid Profile (Total T3, Total T4, Ultrasensitive TSH)',
      'Serum Vitamin D3 & Vitamin B12 Levels',
      'Senior Physician & Clinical Dietitian Consultations',
    ],
    preparationInstructions: ['12 hours strict fasting', 'Wear comfortable clothes and sports shoes for treadmill test', 'Carry existing medical prescriptions'],
  },
  {
    id: 'pkg-cardiac',
    name: 'Advanced Cardiac Care Package',
    tagline: 'In-depth cardiovascular assessment, calcium scoring & arterial profiling',
    demoPrice: 6499,
    originalPrice: 14000,
    duration: '4 Hours',
    testsCount: 52,
    recommendedFor: 'Individuals with family history of heart disease, hypertension, or smoking',
    includedParameters: [
      'High-Sensitivity C-Reactive Protein (hs-CRP)',
      'Apolipoproteins A1 & B with Ratio',
      'High-Resolution 2D Echocardiography with Color Doppler',
      'Computerized Treadmill Stress Test (TMT)',
      'Carotid Artery Doppler Ultrasound (Intima-Media Thickness)',
      'Serum Homocysteine Level',
      'Complete Lipid Subfraction Profile',
      'One-on-One Evaluation by Senior Cardiologist',
    ],
    preparationInstructions: ['12 hours fasting', 'Do not take beta-blockers on morning of TMT without cardiologist advice', 'Avoid tea/coffee before cardiac tests'],
  },
  {
    id: 'pkg-women',
    name: 'Well Woman Comprehensive Package',
    tagline: 'Tailored female health evaluation, breast screening & cervical health',
    demoPrice: 5499,
    originalPrice: 12800,
    duration: '3.5 Hours',
    testsCount: 58,
    recommendedFor: 'Women aged 25+ years prioritizing hormonal, bone, and reproductive wellness',
    includedParameters: [
      'All Routine Blood & Metabolic Screenings',
      'Digital Mammography (for women > 40 yrs) or Breast Ultrasound',
      'Liquid-Based Pap Smear (Cervical Cancer Screening)',
      'Serum Ferritin & Iron Studies',
      'DEXA Bone Mineral Density Scan (Spine & Hip)',
      'Complete Hormonal Profile (Thyroid & Prolactin)',
      'Pelvic Ultrasound (TVS / Transabdominal)',
      'Private Consultation with Senior Lady Gynaecologist',
    ],
    preparationInstructions: ['Schedule ideally 7–10 days post start of menstrual period', '12 hours overnight fasting', 'Full bladder required for pelvic ultrasound'],
  },
  {
    id: 'pkg-senior',
    name: 'Senior Citizen Vitality Package',
    tagline: 'Holistic geriatric screening for joint, heart, vision & cognitive vitality',
    demoPrice: 5999,
    originalPrice: 13500,
    duration: '4 Hours',
    testsCount: 72,
    recommendedFor: 'Senior citizens aged 60+ years managing age-related health changes',
    includedParameters: [
      'Comprehensive Cardiac 2D Echo & ECG',
      'Serum Electrolytes (Sodium, Potassium, Chloride, Ionic Calcium)',
      'Prostate-Specific Antigen (PSA) for Men / Mammography for Women',
      'DEXA Bone Density Scan (Osteoporosis Risk Assessment)',
      'Comprehensive Eye Checkup (Tonometry & Funduscopy for Glaucoma)',
      'Pure Tone Audiometry Hearing Assessment',
      'Renal & Hepatic Extended Function Markers',
      'Geriatric Physician Review & Medication Reconciliation',
    ],
    preparationInstructions: ['Overnight fasting required', 'Wheelchair assistance provided on arrival', 'Family member accompaniment recommended'],
  },
  {
    id: 'pkg-full-body',
    name: 'Comprehensive Platinum Whole-Body Health Check',
    tagline: 'Ultimate 360-degree health mapping with total body imaging & cancer markers',
    demoPrice: 9999,
    originalPrice: 22000,
    duration: '5 Hours',
    testsCount: 94,
    recommendedFor: 'Executives, business leaders, and individuals seeking maximum peace of mind',
    includedParameters: [
      'Entire Range of Cardiac, Metabolic & Organ Function Tests',
      'Low-Dose High-Resolution Chest CT (Smokers / Pollution Screening)',
      'Comprehensive Tumour Markers (CEA, CA-125 / PSA, AFP)',
      'Vitamin Profile (D3, B12, Folic Acid, Zinc)',
      'Whole Abdomen 4D Ultrasound with Elastography',
      'Stress Echo or TMT with Complete Carotid Doppler',
      'Endocrine, Lipid, and Renal Complete Mapping',
      'Multi-Speciality Review: Physician, Cardiologist, Gynaecologist/Urologist & Dietitian',
    ],
    preparationInstructions: ['Strict 12-hour fasting', 'Includes complimentary nutritious hospital buffet breakfast', 'Pre-registration recommended 24 hours prior'],
  },
];

// -------------------------------------------------------------
// CENTRES OF EXCELLENCE (Matching reference)
// -------------------------------------------------------------
export const CENTRES_OF_EXCELLENCE = [
  {
    id: 'heart-vascular',
    title: 'Heart & Vascular Institute',
    desc: 'Cutting-edge catheterization suites, coronary angioplasty, transcatheter valves and minimally invasive cardiac bypass surgery.',
    icon: 'Heart',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    specialityId: 'cardiology',
    metrics: '12,000+ Cardiac Procedures',
  },
  {
    id: 'neurosciences',
    title: 'Institute of Neurosciences',
    desc: 'Computer-assisted stereotactic brain surgery, stroke mechanical thrombectomy, and complex endoscopic spine surgery.',
    icon: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    specialityId: 'neurosurgery',
    metrics: '99.2% Surgical Success Rate',
  },
  {
    id: 'cancer-care',
    title: 'Comprehensive Cancer Pavilion',
    desc: 'Organ-preserving oncological surgery, targeted immunotherapies, and multidisciplinary tumour board planning.',
    icon: 'Crosshair',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    specialityId: 'oncosurgery',
    metrics: 'Dedicated Daycare Chemo',
  },
  {
    id: 'ortho-spine',
    title: 'Bone, Joint & Robotic Surgery',
    desc: 'Fully robotic total joint replacement systems with active intraoperative navigation and rapid recovery walking programs.',
    icon: 'Bone',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    specialityId: 'orthopaedics',
    metrics: 'Sub-Millimetre Accuracy',
  },
  {
    id: 'digestive-liver',
    title: 'Digestive Health & Liver Transplant',
    desc: 'Advanced therapeutic ERCP, endoscopic ultrasound, living donor liver transplants, and complex colorectal laser surgery.',
    icon: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80',
    specialityId: 'liver-transplant-and-hpb-surgery',
    metrics: 'Advanced GI Diagnostic Stacks',
  },
  {
    id: 'kidney-urology',
    title: 'Kidney Care & Laser Urology',
    desc: 'Holmium laser dusting for kidney stones, robotic prostate enucleation, and high-flux dialysis in ultra-pure water suites.',
    icon: 'Filter',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    specialityId: 'urology',
    metrics: '24-Bed Isolated Dialysis',
  },
];

// -------------------------------------------------------------
// PATIENT STORIES / HAPPY FACES
// -------------------------------------------------------------
export const PATIENT_FEEDBACK_LIST: PatientTestimonial[] = [
  {
    id: 'story-1',
    patientName: 'Rameshwar Nath Agarwal',
    treatment: 'Emergency Primary Angioplasty (Door-to-Balloon in 38 mins)',
    doctorName: 'Dr. Aravind Sharma',
    feedback:
      'When I suffered severe chest pain at midnight, the MedicarePlus emergency casualty team swung into action within seconds. Dr. Sharma was in the cath lab waiting for me, and the blocked artery was cleared with a drug-eluting stent. The ICU care was exemplary, compassionate, and reassuring.',
    recoveryNote: 'Discharged on Day 3 · Resumed full office work in 2 weeks',
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'story-2',
    patientName: 'Sunita Mehra',
    treatment: 'Robotic Bilateral Knee Replacement',
    doctorName: 'Dr. Meera Nair',
    feedback:
      'Severe osteoarthritis had made me bedridden for two years. Dr. Meera Nair performed robotic surgery on both my knees. The robotic precision was astonishing—I stood on my own feet with a walker the next morning itself, completely free of the dreadful bone grinding pain.',
    recoveryNote: 'Climbing stairs effortlessly · Walking 3 km daily',
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'story-3',
    patientName: 'Gurpreet Singh Gill',
    treatment: 'Incisionless Laser Kidney Stone Surgery (RIRS)',
    doctorName: 'Dr. Rajesh Kulkarni',
    feedback:
      'I had a 16mm stone causing intense agony. Dr. Kulkarni dusted it completely using flexible laser scopes through the natural urinary tract without even a needle mark on my abdomen. I went home the very next day. Cashless insurance approval took less than 45 minutes.',
    recoveryNote: '100% stone clearance verified on ultrasound · Zero incisions',
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'story-4',
    patientName: 'Ananya & Rohit Mathur',
    treatment: 'High-Risk Pregnancy & Painless Delivery',
    doctorName: 'Dr. Priya Deshmukh',
    feedback:
      'Having gestational hypertension, we were terrified about our baby’s safety. Dr. Priya Deshmukh and the maternal-fetal nursing staff monitored our parameters with utmost dedication. We welcomed our healthy baby girl through a smooth, painless natural delivery.',
    recoveryNote: 'Mother and baby discharged healthy in 48 hours',
    videoPlaceholderUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
  },
];

// -------------------------------------------------------------
// MEDIA & HEALTH ARTICLES (Matching reference)
// -------------------------------------------------------------
export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: 'art-1',
    title: 'Incision-Free Laser Kidney Stone Removal: The Complete RIRS Guide',
    category: 'Laser Surgery',
    date: 'March 2026',
    authorOrSource: 'Dr. Rajesh Kulkarni · Urology Dept',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    summary: 'How advanced Holmium laser dusting has made open kidney surgery obsolete, enabling same-day stone pulverization through natural tracts.',
    content: [
      'Kidney stones affect up to 12% of the population, often presenting with sudden unbearable loin-to-groin pain and hematuria.',
      'Traditional open surgeries or older percutaneous punctures required significant hospital stays. With Retrograde Intrarenal Surgery (RIRS), an ultra-slim flexible ureteroscope navigates through the natural urinary passage.',
      'A high-powered Holmium laser delivers microscopic pulses that pulverize even dense calcium oxalate stones into fine dust, flushed out naturally without skin incisions or stitches.',
    ],
  },
  {
    id: 'art-2',
    title: 'Recognizing Early Warning Signs of Coronary Artery Blockages',
    category: 'Cardiology',
    date: 'February 2026',
    authorOrSource: 'Dr. Aravind Sharma · Cardiology Dept',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    summary: 'Chest tightness, unexplained breathlessness during walking, and atypical heartburn sensations that should prompt an immediate cardiac check.',
    content: [
      'Heart attacks rarely occur without subtle preceding indicators. In addition to crushing retrosternal pain, atypical symptoms like heaviness in the jaw or back are common.',
      'Timely intervention within the golden hour can prevent permanent heart muscle damage. Emergency primary angioplasties boast a 98%+ success rate when initiated rapidly.',
      'Regular annual screenings including resting ECG, lipid subfractions, and cardiac stress tests identify asymptomatic blockages years before a critical event.',
    ],
  },
  {
    id: 'art-3',
    title: 'Robotic Navigated Joint Replacement: Why Millimetres Matter',
    category: 'Orthopaedics',
    date: 'January 2026',
    authorOrSource: 'Dr. Meera Nair · Orthopaedics Dept',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    summary: 'How robotic bone resection and real-time intraoperative ligament tensioning prolong knee implant lifespans beyond 25 years.',
    content: [
      'Conventional joint replacement relied on manual surgical jigs and two-dimensional estimates. Robotic knee surgery creates a personalized 3D anatomical model of your joint.',
      'The surgeon maneuvers a robotic arm with haptic boundary feedback, ensuring bone cuts accurate to within 0.5 millimeters and 0.5 degrees.',
      'This sub-millimeter precision preserves surrounding soft tissues, reduces blood loss, and allows patients to take steps on the very day of surgery.',
    ],
  },
  {
    id: 'art-4',
    title: 'Monsoon Preventive Health: Guarding Against Viral Fevers & Waterborne Illnesses',
    category: 'Infectious Diseases',
    date: 'December 2025',
    authorOrSource: 'Infectious Diseases Dept · Community Health',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80',
    summary: 'Key clinical measures to protect your family from dengue, leptospirosis, and acute gastroenteritis with timely laboratory testing.',
    content: [
      'High seasonal rainfall often brings a surge in vector-borne and enteric infections. Persistent fever exceeding 48 hours must not be self-medicated with over-the-counter NSAIDs.',
      'Dengue antigen testing (NS1) in the initial 24–48 hours helps identify capillary leakage risks and initiate monitored fluid balance early.',
      'Drinking filtered boiled water, avoiding street food, and eliminating stagnant water containers around living premises remain the cornerstone of domestic safety.',
    ],
  },
];

// -------------------------------------------------------------
// RAOZSITE PORTFOLIO ITEM: PROJECT #65 (MEDICAREPLUS HOSPITAL)
// -------------------------------------------------------------
export const MEDICAREPLUS_WEBSITE: BusinessWebsite = {
  id: 'site-medicareplus-65',
  slug: '65-medicareplus-hospital',
  businessName: 'MedicarePlus Hospital',
  category: 'healthcare',
  templateId: 'hospital_multispeciality_portal',
  tagline: 'Advanced Healthcare. Compassionate Care.',
  description:
    'A comprehensive multispeciality hospital website designed to help patients discover doctors, explore medical specialities, understand hospital services, access patient resources and request appointments.',
  ownerName: 'MedicarePlus Hospital Healthcare Trust',
  phone: MEDICARE_CONFIG.phoneOpd,
  whatsapp: '+919000050000',
  email: MEDICARE_CONFIG.emailInfo,
  address: MEDICARE_CONFIG.address,
  city: 'Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=Sector+62+Delhi+NCR+Hospital',
  openingHours: '24x7 Emergency & Ambulance · OPD: Mon–Sat 8:00 AM – 8:00 PM',
  primaryColor: '#0C4A60',
  secondaryColor: '#00A896',
  logoUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'appointment_slot',
  bookingCtaLabel: 'View Project',
  specialBadge: 'Project #65 · Multispeciality Hospital Website',
  status: 'published',
  pricingPlanId: 'professional',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'top-bar', title: 'Hospital Emergency & OPD Hotline Bar', isEnabled: true, order: 1 },
    { id: 'navbar', title: 'Main Hospital Navigation & Mega-Menus', isEnabled: true, order: 2 },
    { id: 'hero', title: 'Hospital Hero Slider & Care Philosophy', isEnabled: true, order: 3 },
    { id: 'quick-actions', title: 'Quick Action Bar (Doctor, Payment, Emergency)', isEnabled: true, order: 4 },
    { id: 'symptoms', title: 'Symptoms & Expertise Explorer', isEnabled: true, order: 5 },
    { id: 'specialities', title: '22 Core Clinical Specialities', isEnabled: true, order: 6 },
    { id: 'centres', title: 'Centres of Excellence', isEnabled: true, order: 7 },
    { id: 'about', title: 'About MedicarePlus Hospital & Statistics', isEnabled: true, order: 8 },
    { id: 'doctors', title: 'Find a Doctor Directory', isEnabled: true, order: 9 },
    { id: 'packages', title: 'Health Checkup Packages', isEnabled: true, order: 10 },
    { id: 'services', title: 'Hospital Services & Diagnostics', isEnabled: true, order: 11 },
    { id: 'emergency', title: '24/7 Emergency & Ambulance Department', isEnabled: true, order: 12 },
    { id: 'patient-care', title: 'Patient Care & Inpatient Resources', isEnabled: true, order: 13 },
    { id: 'visitors-guide', title: 'Visitors Guide & Hospital Policies', isEnabled: true, order: 14 },
    { id: 'academics', title: 'Medical Academics, DNB & Research', isEnabled: true, order: 15 },
    { id: 'feedback', title: 'Patient Experiences & Happy Faces', isEnabled: true, order: 16 },
    { id: 'quality-safety', title: 'Quality, Safety & Clinical Governance', isEnabled: true, order: 17 },
    { id: 'media-blogs', title: 'Hospital News & Health Articles', isEnabled: true, order: 18 },
    { id: 'footer', title: 'Hospital Multi-Column Footer & Disclaimer', isEnabled: true, order: 19 },
  ],
  offers: [
    {
      id: 'offer-medicare-master',
      title: 'Comprehensive Senior Citizen Cardiac Check-Up',
      description: '20% subsidized diagnostic package including 2D Echo, TMT, Lipid Profile, and senior cardiologist consultation.',
      discountPercent: 20,
      couponCode: 'HEARTCARE',
      isActive: true,
    },
  ],
  gallery: [
    {
      id: 'gal-med-1',
      title: 'Hospital Main Exterior & Ambulance Bay',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gal-med-2',
      title: 'Tertiary Intensive Care Unit (ICU)',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gal-med-3',
      title: 'Advanced Robotic Surgical Suite',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    },
  ],
  items: [
    {
      id: 'item-cardiology-opd',
      name: 'Super-Specialist OPD Consultation',
      description: 'Comprehensive physical clinical evaluation, vital signs telemetry, and diagnostic review with senior consultant physician or surgeon.',
      price: 1000,
      category: 'OPD Services',
      isAvailable: true,
      isFeatured: true,
      badge: 'Daily OPD',
    },
    {
      id: 'item-executive-health-package',
      name: 'Executive Master Health Check-Up',
      description: '64 laboratory clinical parameters including whole body ultrasound, cardiac 2D echo, HbA1c, pulmonary function test, and physician evaluation.',
      price: 4999,
      discountPrice: 6500,
      category: 'Health Packages',
      isAvailable: true,
      isFeatured: true,
      badge: 'Popular',
    },
  ],
};

// -------------------------------------------------------------
// DEMO SUBMISSION HANDLERS (Safe demo storage)
// -------------------------------------------------------------
export interface MedicareAppointmentLead {
  id?: string;
  patientName: string;
  phone: string;
  email: string;
  doctorName: string;
  speciality: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  createdAt?: string;
}

export async function submitMedicareAppointment(
  data: MedicareAppointmentLead
): Promise<{ success: boolean; message: string; appointmentId: string }> {
  const appointmentId = 'MED-' + Math.floor(100000 + Math.random() * 900000);
  try {
    const existing = localStorage.getItem('medicareplus_appointments');
    const list: any[] = existing ? JSON.parse(existing) : [];
    list.unshift({
      ...data,
      appointmentId,
      id: appointmentId,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('medicareplus_appointments', JSON.stringify(list));
  } catch {
    // ignore
  }
  return {
    success: true,
    message: 'Your appointment request has been received. Our hospital coordinator will contact you shortly to confirm your consultation slot.',
    appointmentId,
  };
}

export function buildMedicareWhatsAppLink(customMsg?: string): string {
  const text = encodeURIComponent(
    customMsg || 'Hello MedicarePlus Hospital, I would like to inquire about specialist consultations and hospital services.'
  );
  return `https://wa.me/919000050000?text=${text}`;
}
