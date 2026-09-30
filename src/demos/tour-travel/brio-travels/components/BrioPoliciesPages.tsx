import React from 'react';
import { ArrowLeft, Shield, FileText, RefreshCw } from 'lucide-react';

interface BrioPoliciesPagesProps {
  policyType: 'terms' | 'privacy' | 'refund';
  onBack: () => void;
}

export const BrioPoliciesPages: React.FC<BrioPoliciesPagesProps> = ({
  policyType,
  onBack
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-600 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-6">
          {policyType === 'terms' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <FileText className="w-8 h-8 text-teal-600" />
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 font-['Poppins']">
                    Terms & Conditions
                  </h1>
                  <p className="text-xs text-slate-500">Last updated: March 2026 · Brio Travels Delhi</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
                <p>
                  <strong>1. Booking Confirmation:</strong> All tour reservations are confirmed upon receipt of advance booking deposit and verified KYC details.
                </p>
                <p>
                  <strong>2. Itinerary Pacing:</strong> Daily sightseeing timing and route sequencing may be adjusted by our licensed tour managers in the event of adverse weather, roadblock clearances, or government protocol directives.
                </p>
                <p>
                  <strong>3. Passport & Visas:</strong> For international journeys, passengers are responsible for holding valid passports with a minimum of 6 months validity. Brio Travels acts as a facilitation agency for electronic visa submissions.
                </p>
                <p>
                  <strong>4. Demo Notice:</strong> This website represents a portfolio demo template designed for travel agencies. No financial transactions or bookings are processed on this showcase domain.
                </p>
              </div>
            </>
          )}

          {policyType === 'privacy' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <Shield className="w-8 h-8 text-teal-600" />
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 font-['Poppins']">
                    Privacy Policy
                  </h1>
                  <p className="text-xs text-slate-500">Last updated: March 2026 · Confidential Data Protection</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
                <p>
                  <strong>1. Information Collection:</strong> We collect contact details, passenger names, and travel preferences submitted via our inquiry forms solely to formulate travel itineraries and quotes.
                </p>
                <p>
                  <strong>2. Data Sharing:</strong> Personal travel documents are shared exclusively with certified airline reservation systems, consular visa departments, and booked hotels to issue confirmed vouchers.
                </p>
                <p>
                  <strong>3. Security:</strong> All client information is encrypted and never sold, rented, or distributed to third-party telemarketers.
                </p>
              </div>
            </>
          )}

          {policyType === 'refund' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <RefreshCw className="w-8 h-8 text-teal-600" />
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 font-['Poppins']">
                    Refund & Cancellation Policy
                  </h1>
                  <p className="text-xs text-slate-500">Last updated: March 2026 · Transparent Cancellation Guidelines</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
                <p>
                  <strong>1. Cancellation More Than 30 Days Prior:</strong> Full refund of land package charges minus nominal administrative banking charges (typically 5%).
                </p>
                <p>
                  <strong>2. Cancellation Between 15 to 29 Days:</strong> 70% refund of total tour cost.
                </p>
                <p>
                  <strong>3. Cancellation Between 7 to 14 Days:</strong> 40% refund of total tour cost.
                </p>
                <p>
                  <strong>4. Flight & Non-refundable Hotel Bookings:</strong> Subject to individual airline and hotel supplier policies as per passenger contract.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
