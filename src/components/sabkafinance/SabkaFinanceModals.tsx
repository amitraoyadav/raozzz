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
  LONKARO_NAME,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER,
  SABKA_FINANCE_PRODUCTS
} from '../../data/sabkaFinanceData';
import { useApp } from '../../context/AppContext';

// 1. APPLICATION MODAL
interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLoanType?: string;
  defaultAmount?: number;
}

export const SabkaFinanceApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultLoanType = 'Personal Loan',
  defaultAmount = 250000
}) => {
  const { submitLead } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState<number>(defaultAmount);
  const [loanType, setLoanType] = useState<string>(defaultLoanType);
  const [employmentType, setEmploymentType] = useState<'Salaried' | 'Self-Employed'>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('35000');
  const [city, setCity] = useState<string>('Delhi NCR');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber || !agreeTerms) return;

    setIsSubmitting(true);
    const ref = `SF-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    try {
      await submitLead({
        websiteSlug: 'sabka-finance',
        businessName: 'Sabka Finance Digital Loan Request',
        customerName: fullName,
        customerPhone: mobileNumber.replace(/\D/g, ''),
        customerEmail: email,
        serviceRequested: `Loan Type: ${loanType} | Amount: ₹${loanAmount.toLocaleString('en-IN')}`,
        message: `Employment: ${employmentType} | Income: ₹${monthlyIncome} | City: ${city} | Ref: ${ref}`,
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
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-teal-100 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#042f2e] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] uppercase font-bold text-teal-300 tracking-wider block mb-1">
            Digital Loan Application
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Apply with {BRAND_DISPLAY}
          </h2>
          <p className="text-xs text-teal-100/80 mt-1">
            Assistance across eligible lenders with zero upfront fees.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Application Registered!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Your loan inquiry for{' '}
              <strong>₹{loanAmount.toLocaleString('en-IN')}</strong> ({loanType}) has been logged under Application Reference:
            </p>
            <div className="p-3 bg-teal-50 rounded-2xl border border-teal-200 inline-block font-mono font-bold text-teal-900 text-sm">
              {referenceId}
            </div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              A dedicated financial coordinator will contact you at <strong>{mobileNumber}</strong> within 24 working hours for document verification.
            </p>
            <button
              onClick={onClose}
              className="py-3 px-8 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-700 transition-colors"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden font-medium"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden font-medium"
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
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Delhi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Loan Requirement (₹) *
                </label>
                <input
                  type="number"
                  required
                  min={15000}
                  max={2500000}
                  step={5000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Loan Purpose / Type
                </label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden bg-white font-medium"
                >
                  {SABKA_FINANCE_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name}
                    </option>
                  ))}
                  <option value="Other">Other Purpose</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Employment Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Salaried', 'Self-Employed'] as const).map((emp) => (
                    <button
                      type="button"
                      key={emp}
                      onClick={() => setEmploymentType(emp)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                        employmentType === emp
                          ? 'bg-teal-50 border-teal-600 text-teal-800'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {emp}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Monthly Net Income (₹)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 35000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-hidden font-medium"
                />
              </div>
            </div>

            <div className="pt-2 flex items-start gap-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded mt-0.5"
              />
              <label htmlFor="agreeTerms" className="text-[11px] text-slate-600 leading-snug">
                I authorize Sabka Finance to share my details with partner RBI-regulated lending institutions for loan assessment. I understand that loan approvals are subject to lender policies and are not guaranteed.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !agreeTerms}
              className="w-full py-3.5 rounded-full bg-amber-400 hover:bg-yellow-400 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 cursor-pointer transition-all hover:scale-105 flex items-center justify-center gap-2 mt-4"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Apply Now — Free Pre-Assessment'}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 2. LEGAL POLICY MODAL
interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | 'cookie' | 'data-deletion' | 'grievance' | null;
  onClose: () => void;
}

export const SabkaFinanceLegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How Sabka Finance handles and protects your personal data',
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'We collect information provided directly by you, including your name, contact numbers, email address, employment details, income brackets, and loan requirement parameters.'
        },
        {
          heading: '2. Purpose of Collection',
          body: 'Information is collected solely to assess pre-qualification parameters and connect you with partner RBI-regulated lending institutions. We never sell your data to unaffiliated third parties.'
        },
        {
          heading: '3. Data Security & Encryption',
          body: 'All communications with our platform use 256-bit SSL encryption. We employ strict access controls and periodic audits to safeguard customer data against unauthorized access.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Guidelines governing the use of Sabka Finance platforms',
      sections: [
        {
          heading: '1. Nature of Facilitation',
          body: 'Sabka Finance operates as a digital technology assistance and loan facilitation platform. We are not a bank, non-banking financial company (NBFC), or money lender. Loan contracts are executed directly between you and the respective lending partner.'
        },
        {
          heading: '2. No Guarantee of Approval',
          body: 'Submission of an application does not guarantee loan approval or sanction. The lending partner reserves the sole discretion to approve, modify terms, or reject any application based on internal underwriting policies.'
        },
        {
          heading: '3. Zero Upfront Platform Fees',
          body: 'Sabka Finance does not charge borrowers upfront cash fees for discovering or applying for loans. Any legitimate lender processing fee is clearly itemized in the sanction letter.'
        }
      ]
    },
    disclaimer: {
      title: 'Regulatory Disclaimer',
      subtitle: 'Official non-banking disclosure and customer notice',
      sections: [
        {
          heading: 'Facilitator Notice',
          body: MANDATORY_LEGAL_DISCLAIMER
        },
        {
          heading: 'Anti-Fraud Alert',
          body: 'Sabka Finance employees or coordinators will NEVER ask you to deposit money into personal accounts, purchase gift cards, or pay upfront "file clearance" charges. Report any suspicious contact immediately to care@sabkafinance.in.'
        }
      ]
    },
    cookie: {
      title: 'Cookie Policy',
      subtitle: 'Usage of essential session cookies on Sabka Finance',
      sections: [
        {
          heading: 'What are cookies?',
          body: 'Cookies are small text files stored on your device that enable our platform to recall your preferences, maintain secure sessions, and optimize loan application form responsiveness.'
        },
        {
          heading: 'Managing Cookies',
          body: 'You may modify your browser settings to decline non-essential cookies. However, disabling all cookies may impair the performance of interactive eligibility tools.'
        }
      ]
    },
    'data-deletion': {
      title: 'Data Deletion Policy',
      subtitle: 'Your right to request erasure of your personal data',
      sections: [
        {
          heading: 'Customer Rights',
          body: 'In accordance with applicable digital data protection regulations, you have the right to request the permanent deletion of your profile, contact numbers, and submitted financial records from our active databases.'
        },
        {
          heading: 'How to Request Deletion',
          body: 'To request data deletion, send an email to care@sabkafinance.in with the subject line "Data Deletion Request" from your registered email address, specifying your mobile number. Requests are processed within 15 business days.'
        }
      ]
    },
    grievance: {
      title: 'Grievance Redressal Mechanism',
      subtitle: 'Dedicated escalation matrix for customer concerns',
      sections: [
        {
          heading: 'Level 1: Support Helpdesk',
          body: 'For routine queries, application status checks, or feedback, email us at care@sabkafinance.in or call +91 92181 13668 (Mon–Sat, 9:00 AM – 7:00 PM).'
        },
        {
          heading: 'Level 2: Grievance Officer',
          body: 'If your concern remains unresolved after 3 business days, write to our designated Grievance Officer at grievance@sabkafinance.in. All complaints receive formal acknowledgment within 24 hours.'
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
          <span className="text-[10px] uppercase font-bold text-teal-600 tracking-wider block">
            {BRAND_NAME} Regulatory Documentation
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">{item.title}</h2>
          <p className="text-xs text-slate-500">{item.subtitle}</p>
        </div>

        <div className="space-y-5 text-xs text-slate-700 leading-relaxed">
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
