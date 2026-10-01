import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Shield,
  Phone,
  Mail,
  User,
  Building,
  IndianRupee,
  MapPin,
  Briefcase,
  FileText,
  Lock,
  MessageSquare,
  Sparkles,
  Check
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER,
  BRIGHT_LOAN_PRODUCTS
} from '../../data/sabkaLoansData';
import { useApp } from '../../context/AppContext';

// 1. APPLICATION MODAL FOR SABKA LOANS
interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLoanType?: string;
  defaultAmount?: number;
  preselectedProduct?: string;
  preselectedAmount?: number;
}

export const SabkaLoansApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultLoanType = 'Personal Loan',
  defaultAmount = 500000,
  preselectedProduct,
  preselectedAmount
}) => {
  const { submitLead } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState<number>(preselectedAmount || defaultAmount);
  const [loanType, setLoanType] = useState<string>(preselectedProduct || defaultLoanType);
  const [employmentType, setEmploymentType] = useState<'Salaried' | 'Self-Employed'>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('40000');
  const [city, setCity] = useState<string>('Delhi NCR');
  const [cibilScore, setCibilScore] = useState<string>('750+ (Excellent)');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber || !agreeTerms) return;

    setIsSubmitting(true);
    const ref = `SL-BL-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    try {
      await submitLead({
        websiteSlug: 'sabka-loans',
        businessName: 'Sabka Loans BrightLoans Application',
        customerName: fullName,
        customerPhone: mobileNumber.replace(/\D/g, ''),
        customerEmail: email,
        serviceRequested: `Loan: ${loanType} | Amount: ₹${loanAmount.toLocaleString('en-IN')}`,
        message: `Employment: ${employmentType} | Income: ₹${monthlyIncome} | CIBIL: ${cibilScore} | City: ${city} | Ref: ${ref}`,
        status: 'new'
      });
    } catch {
      // Fallback
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-blue-100 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0b1b36] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider block mb-1">
            Fast Digital Sanction
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Apply with {BRAND_DISPLAY}
          </h2>
          <p className="text-xs text-blue-100/80 mt-1">
            Multi-lender loan assessment with competitive rates.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Congratulations, <strong>{fullName}</strong>. Your loan application for{' '}
              <strong>₹{loanAmount.toLocaleString('en-IN')}</strong> ({loanType}) has been logged under Reference:
            </p>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200 inline-block font-mono font-bold text-blue-900 text-sm">
              {referenceId}
            </div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Our automated system is comparing pre-qualification offers across 30+ lenders. A relationship manager will call you at <strong>{mobileNumber}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="py-3 px-8 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="As per PAN card"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore, Delhi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Loan Amount (₹) *
                </label>
                <input
                  type="number"
                  required
                  min={50000}
                  max={5000000}
                  step={25000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Loan Product
                </label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden bg-white font-medium"
                >
                  {BRIGHT_LOAN_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Monthly Income (₹)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 45000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-hidden font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Estimated CIBIL Score
                </label>
                <select
                  value={cibilScore}
                  onChange={(e) => setCibilScore(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                >
                  <option value="750+ (Excellent)">750+ (Excellent)</option>
                  <option value="700 - 749 (Good)">700 - 749 (Good)</option>
                  <option value="650 - 699 (Fair)">650 - 699 (Fair)</option>
                  <option value="New to Credit">New to Credit / No Score</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-start gap-2">
              <input
                type="checkbox"
                id="agreeTermsBL"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded mt-0.5"
              />
              <label htmlFor="agreeTermsBL" className="text-[11px] text-slate-600 leading-snug">
                I authorize Sabka Loans to retrieve credit information and submit my profile to partner banks & NBFCs for sanction evaluation.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !agreeTerms}
              className="w-full py-3.5 rounded-full bg-amber-400 hover:bg-yellow-400 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 cursor-pointer transition-all hover:scale-105 flex items-center justify-center gap-2 mt-4"
            >
              <span>{isSubmitting ? 'Processing...' : 'Apply for Pre-Sanction'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 2. LEGAL POLICY MODAL FOR SABKA LOANS
interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | 'fair-practice' | null;
  onClose: () => void;
}

export const SabkaLoansLegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Data governance and security standards at Sabka Loans',
      sections: [
        {
          heading: '1. Collection of Loan Data',
          body: 'We collect applicant contact data, banking records, credit parameters, and KYC documents strictly for loan eligibility processing with certified partner lenders.'
        },
        {
          heading: '2. Encryption & Protection',
          body: 'Sabka Loans employs banking-grade 256-bit SSL encryption for all network requests. Your data is never sold to commercial third-party marketing brokers.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Agreement governing the Sabka Loans digital platform',
      sections: [
        {
          heading: '1. Role of Facilitator',
          body: 'Sabka Loans is a technology facilitator connecting borrowers to licensed lending institutions. Loan approval and sanction terms are solely determined by partner banks.'
        },
        {
          heading: '2. No Advance Fees',
          body: 'Sabka Loans never collects upfront cash or advance deposits. Official lender processing fees are itemized directly in the sanction letter.'
        }
      ]
    },
    disclaimer: {
      title: 'Regulatory Disclaimer',
      subtitle: 'Statutory non-banking facilitator disclosure',
      sections: [
        {
          heading: 'Mandatory Notice',
          body: MANDATORY_LEGAL_DISCLAIMER
        }
      ]
    },
    'fair-practice': {
      title: 'Fair Practice Code',
      subtitle: 'Commitment to ethical and transparent credit facilitation',
      sections: [
        {
          heading: '1. Transparent Interest Disclosure',
          body: 'All APR ranges, tenure options, processing charges, and penal interest terms are communicated explicitly before loan sanction acceptance.'
        },
        {
          heading: '2. Non-Harassment Guarantee',
          body: 'We adhere strictly to RBI Fair Practices Code. Neither Sabka Loans nor our certified lending partners engage in improper collection tactics.'
        }
      ]
    }
  };

  const item = contentMap[type] || contentMap.privacy;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-6">
          <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider block">
            {BRAND_NAME} Regulatory Documentation
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">{item.title}</h2>
          <p className="text-xs text-slate-500">{item.subtitle}</p>
        </div>

        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          {item.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{sec.heading}</h4>
              <p>{sec.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-full bg-slate-900 text-white font-bold text-xs uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const SabkaLoansApplicationModal = SabkaLoansApplyModal;

// 3. PRODUCT DETAILS MODAL
interface ProductModalProps {
  product: any | null;
  onClose: () => void;
  onApplyForProduct: (product: any) => void;
}

export const SabkaLoansProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onApplyForProduct
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase">
              {product.badge || 'Featured Loan'}
            </span>
          </div>

          <h2 className="text-2xl font-black text-slate-900">{product.name}</h2>
          <p className="text-xs text-slate-600 leading-relaxed">{product.shortDescription || product.tagline}</p>

          <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Interest Rate</span>
              <strong className="text-slate-900 font-bold">{product.interestRateDisplay || 'Competitive Rates'}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Processing Fee</span>
              <strong className="text-slate-900 font-bold">{product.processingFee || 'Standard'}</strong>
            </div>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Features</h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {product.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onApplyForProduct(product)}
              className="flex-1 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
            >
              Apply For This Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

