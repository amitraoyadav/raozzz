import React, { useState } from 'react';
import {
  Scissors,
  Stethoscope,
  Droplets,
  Heart,
  CheckCircle2,
  Check,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Award,
  Send,
  Building2,
  UserCheck
} from 'lucide-react';
import {
  BodycraftService,
  BodycraftDoctor,
  BODYCRAFT_SERVICES,
  BODYCRAFT_DOCTORS,
  BODYCRAFT_LEADERSHIP,
  BODYCRAFT_OUTLETS
} from '../../data/bodycraftData';

// ----------------------------------------------------------------------
// 1. DEDICATED SALON VIEW
// ----------------------------------------------------------------------
interface SalonViewProps {
  onSelectService: (service: BodycraftService) => void;
  onBookService: (category: 'salon', serviceName: string) => void;
}

export const BodycraftSalonView: React.FC<SalonViewProps> = ({
  onSelectService,
  onBookService
}) => {
  const [salonSubFilter, setSalonSubFilter] = useState<string>('All');
  const salonServices = BODYCRAFT_SERVICES.filter(s => s.category === 'salon');

  const filtered = salonSubFilter === 'All'
    ? salonServices
    : salonServices.filter(s => s.subCategory.toLowerCase().includes(salonSubFilter.toLowerCase()));

  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16 animate-fadeIn">
      {/* Salon Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#121212] to-[#2B231D] text-white p-8 sm:p-14 border border-[#C5A880]/30 shadow-xl">
          <div className="max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#C5A880] text-xs font-bold uppercase tracking-wider">
              Bespoke Hair, Color & Nail Sanctuary
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
              Creative Hair Styling & <br />
              <span className="text-[#C5A880] italic">French Color Artistry</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Every haircut begins with a personalized face-contour diagnostic. Experience ammonia-free L'Oréal Inoa glossing, Kérastase Fusio-Dose customized caviar cocktails, and formaldehyde-free Nanoplastia smoothing by Vidal Sassoon trained directors.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onBookService('salon', 'Bespoke Precision Haircut & Styling')}
                className="px-6 py-3 rounded-xl bg-[#C5A880] hover:bg-[#d8bb91] text-[#121212] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book Salon Appointment
              </button>
              <div className="text-xs text-stone-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                <span>Flat 30% Off First Visit (Code: FIRST30)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <h2 className="text-2xl font-black font-serif text-[#121212]">
              Salon Services Menu
            </h2>
            <p className="text-xs text-stone-600 mt-0.5">
              Transparent starting prices with bespoke consultations included.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {['All', 'Hair', 'Hair Color', 'Rituals', 'Hands & Feet', 'Men', 'Kids'].map(tab => (
              <button
                key={tab}
                onClick={() => setSalonSubFilter(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  salonSubFilter === tab
                    ? 'bg-[#121212] text-[#C5A880] shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all group"
            >
              <div className="space-y-3">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#121212]/90 text-[#C5A880] text-[10px] font-bold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 text-stone-800 text-[10px] font-bold">
                    {service.duration}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase text-[#8C7A65] font-bold block">
                  {service.subCategory}
                </span>

                <h3
                  onClick={() => onSelectService(service)}
                  className="font-serif font-black text-lg text-[#121212] group-hover:text-[#8C7A65] transition-colors cursor-pointer"
                >
                  {service.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1 pt-1">
                  {service.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Price</span>
                  <span className="text-base font-black text-[#121212]">
                    ₹{service.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBookService('salon', service.name)}
                    className="px-4 py-1.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. DEDICATED CLINIC VIEW
// ----------------------------------------------------------------------
interface ClinicViewProps {
  onSelectDoctor: (doc: BodycraftDoctor) => void;
  onBookService: (category: 'clinic', serviceName: string) => void;
}

export const BodycraftClinicView: React.FC<ClinicViewProps> = ({
  onSelectDoctor,
  onBookService
}) => {
  const clinicServices = BODYCRAFT_SERVICES.filter(s => s.category === 'clinic');

  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16 animate-fadeIn">
      {/* Clinic Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17202A] via-[#121212] to-[#1C2833] text-white p-8 sm:p-14 border border-amber-300/30 shadow-xl">
          <div className="max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              Doctor-Led Aesthetic Dermatology
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
              Clinical Precision & <br />
              <span className="text-[#C5A880] italic">US-FDA Certified Technology</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Every procedure is preceded by a computerized 3D skin and scalp diagnostic scan and supervised by experienced board-certified dermatologists. Zero downtime results for acne, hyperpigmentation, collagen loss, and permanent hair reduction.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectDoctor(BODYCRAFT_DOCTORS[0])}
                className="px-6 py-3 rounded-xl bg-[#C5A880] hover:bg-[#d8bb91] text-[#121212] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schedule Doctor Consultation
              </button>
              <div className="text-xs text-amber-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Doctor Supervised · Hospital-Grade Sterilization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Tech Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: 'HydraFacial MD Elite', tag: 'Patented 4-Step Vortex', desc: 'Painless blackhead vacuum extraction and peptide infusion.' },
            { name: 'Morpheus8 RF', tag: 'Subdermal Remodeling', desc: 'Gold microneedling + radiofrequency for jowl lifting and deep acne scars.' },
            { name: 'Triple-Wavelength Diode', tag: 'Sub-Zero ICE Cooling', desc: 'Safe, permanent, and painless laser hair reduction for Indian skin.' },
            { name: 'CoolSculpting & Onda', tag: 'Non-Surgical Cryo', desc: 'Permanently freezes stubborn fat cells on abdomen, arms, and flanks.' }
          ].map((tech, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2 shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider block">
                {tech.tag}
              </span>
              <h4 className="font-serif font-black text-[#121212] text-base">{tech.name}</h4>
              <p className="text-xs text-stone-500 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Treatments Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-4 border-b border-stone-200">
          <h2 className="text-2xl font-black font-serif text-[#121212]">
            Advanced Clinical Dermatology Procedures
          </h2>
          <p className="text-xs text-stone-600 mt-0.5">
            Administered in sterile private clinical suites across Bengaluru, Mumbai, Gurugram, and Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all group"
            >
              <div className="space-y-3">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-amber-900 text-amber-100 text-[10px] font-bold uppercase tracking-wider">
                    {service.badge || 'Doctor Led'}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 text-stone-800 text-[10px] font-bold">
                    {service.duration}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase text-[#8C7A65] font-bold block">
                  {service.subCategory}
                </span>

                <h3 className="font-serif font-black text-lg text-[#121212] group-hover:text-[#8C7A65] transition-colors leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1 pt-1">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Procedure Cost</span>
                  <span className="text-base font-black text-[#121212]">
                    ₹{service.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  onClick={() => onBookService('clinic', service.name)}
                  className="px-4 py-2 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider cursor-pointer"
                >
                  Consult & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. DEDICATED SPA & WELLNESS VIEW
// ----------------------------------------------------------------------
interface SpaViewProps {
  onBookService: (category: 'spa', serviceName: string) => void;
}

export const BodycraftSpaView: React.FC<SpaViewProps> = ({ onBookService }) => {
  const spaServices = BODYCRAFT_SERVICES.filter(s => s.category === 'spa');

  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16 animate-fadeIn">
      {/* Spa Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#211B17] via-[#121212] to-[#2B231D] text-white p-8 sm:p-14 border border-[#C5A880]/30 shadow-xl">
          <div className="max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#C5A880] text-xs font-bold uppercase tracking-wider">
              Holistic Urban Wellness Sanctuary
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
              Restorative Body Therapies & <br />
              <span className="text-[#C5A880] italic">24K Gold Indulgence</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Step into private, sound-isolated wellness suites scented with organic lemongrass and lavender oils. Traditional Balinese acupressure, Swedish deep tissue relief, and antioxidant cocoa wraps curated by master massage therapists.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onBookService('spa', 'Authentic Balinese Aromatherapy Massage')}
                className="px-6 py-3 rounded-xl bg-[#C5A880] hover:bg-[#d8bb91] text-[#121212] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reserve Spa Session
              </button>
              <div className="text-xs text-amber-200">
                Weekday 20% Off Privilege (Mon–Thu 11 AM – 5 PM · Code: BLISS20)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-4 border-b border-stone-200">
          <h2 className="text-2xl font-black font-serif text-[#121212]">
            Massage & Body Scrub Menu
          </h2>
          <p className="text-xs text-stone-600 mt-0.5">
            Every session includes hot herbal foot soak, dry brushing, and shower steam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all group"
            >
              <div className="space-y-3">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 text-stone-800 text-[10px] font-bold">
                    {service.duration}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase text-[#8C7A65] font-bold block">
                  {service.subCategory}
                </span>

                <h3 className="font-serif font-black text-lg text-[#121212] group-hover:text-[#8C7A65] transition-colors leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1 pt-1">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Therapy Fee</span>
                  <span className="text-base font-black text-[#121212]">
                    ₹{service.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  onClick={() => onBookService('spa', service.name)}
                  className="px-4 py-2 bg-[#121212] hover:bg-[#252525] text-[#C5A880] text-xs font-bold rounded-xl uppercase tracking-wider cursor-pointer"
                >
                  Book Therapy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------
// 4. DEDICATED ABOUT VIEW
// ----------------------------------------------------------------------
export const BodycraftAboutView: React.FC = () => {
  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16 animate-fadeIn">
      {/* Heritage Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A65]">
              Established in 1997 · Bengaluru
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#121212] tracking-tight leading-tight">
              28 Years of Reimagining <br />
              <span className="text-[#C5A880] italic">Indian Personal Care.</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              What began in 1997 as a boutique aesthetic salon founded by Manjul Gupta has evolved into India's premier hybrid network combining luxury salon pampering with board-certified dermatology and wellness spas.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Today, Bodycraft operates over 30 state-of-the-art sanctuaries across Bengaluru, Mumbai, Gurugram, and Chennai, serving over 10 Lakh discerning guests with uncompromised hygiene and clinical efficacy.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-stone-200">
                <div className="text-2xl font-serif font-black text-[#121212]">10 Lakh+</div>
                <div className="text-xs text-stone-500 mt-1">Happy Guests Pampered</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-stone-200">
                <div className="text-2xl font-serif font-black text-[#121212]">30+</div>
                <div className="text-xs text-stone-500 mt-1">Metropolitan Centers</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80"
                alt="Bodycraft Indiranagar Flagship Lounge"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A65]">
            Visionaries & Directors
          </span>
          <h2 className="text-3xl font-black font-serif text-[#121212]">
            The Leadership Driving Bodycraft
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BODYCRAFT_LEADERSHIP.map((leader, i) => (
            <div key={i} className="bg-white rounded-3xl border border-stone-200 p-6 space-y-4 shadow-2xs">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#C5A880]/40">
                <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg text-[#121212]">{leader.name}</h3>
                <p className="text-xs text-[#8C7A65] font-semibold">{leader.role}</p>
                <p className="text-[11px] text-stone-400 mt-0.5">{leader.experience}</p>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. DEDICATED CONTACT VIEW
// ----------------------------------------------------------------------
interface ContactViewProps {
  onSubmitInquiry: (data: { name: string; phone: string; email: string; message: string; outlet: string }) => void;
}

export const BodycraftContactView: React.FC<ContactViewProps> = ({ onSubmitInquiry }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [outlet, setOutlet] = useState('Indiranagar Flagship Salon, Spa & Clinic');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    onSubmitInquiry({ name, phone, email, message, outlet });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16 animate-fadeIn">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Helpline & Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7A65]">
              Customer Concierge Desk
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#121212]">
              Connect With Bodycraft
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Have a question regarding appointments, clinical skin assessments, corporate packages, or feedback? Our guest care desk is operational 7 days a week from 9:00 AM to 9:00 PM IST.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Centennial Helpline</span>
                  <a href="tel:08046896000" className="text-sm font-black text-[#121212] hover:text-[#C5A880]">
                    080 4689 6000
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">Direct reservations for all 30+ centers</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Customer Care Email</span>
                  <a href="mailto:customercare@bodycraft.co.in" className="text-sm font-black text-[#121212] hover:underline">
                    customercare@bodycraft.co.in
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Corporate Headquarters</span>
                  <p className="text-stone-600 leading-relaxed mt-0.5">
                    1st Cross, 13th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-serif font-black text-stone-900">Message Received!</h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Our front-desk coordinator will reach out to you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C7A65] font-bold">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-xl font-black font-serif text-[#121212]">
                    Send Us A Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shalini Roy"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 XXXXX"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Preferred Center</label>
                    <select
                      value={outlet}
                      onChange={e => setOutlet(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl font-semibold"
                    >
                      {BODYCRAFT_OUTLETS.map(o => (
                        <option key={o.id} value={o.name}>{o.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">How Can We Assist You?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements, preferred timing, or questions..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121212] hover:bg-[#252525] text-[#C5A880] font-black rounded-xl uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
