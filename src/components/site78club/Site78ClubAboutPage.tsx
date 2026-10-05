import React, { useState } from 'react';
import {
  Shield,
  Landmark,
  Award,
  Users,
  Calendar,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { MANAGEMENT_COMMITTEE, CommitteeMember } from '../../data/site78ClubData';
import { site78ClubConfig } from '../../config/site78ClubConfig';

interface Site78ClubAboutPageProps {
  initialTab?: 'history' | 'committee';
  onNavigateContact: () => void;
  onNavigateFacilities: () => void;
}

export const Site78ClubAboutPage: React.FC<Site78ClubAboutPageProps> = ({
  initialTab = 'history',
  onNavigateContact,
  onNavigateFacilities
}) => {
  const [activeTab, setActiveTab] = useState<'history' | 'committee'>(initialTab);
  const [committeeFilter, setCommitteeFilter] = useState<'all' | 'office_bearer' | 'executive_member'>('all');

  const filteredCommittee = committeeFilter === 'all'
    ? MANAGEMENT_COMMITTEE
    : MANAGEMENT_COMMITTEE.filter(m => m.category === committeeFilter);

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      {/* Hero Header */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#0F2537] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/assets/site78club/about_heritage.jpg"
            alt="The Kensington Club Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A869]/40 text-[#C5A869] text-xs font-semibold uppercase tracking-[0.2em]">
              About The Kensington Club
            </span>
            <h1 className="font-['Cormorant',serif] font-bold text-4xl sm:text-6xl text-white leading-tight">
              A Legacy of Distinction <br />
              <span className="italic font-normal text-[#C5A869]">& Comradeship</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              Established in 1972 on South Delhi’s Outer Ring Road, upholding constitutional club values, sportsmanship, and gracious living across five decades.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Switcher: History vs Management Committee */}
        <div className="flex items-center justify-center gap-3 mb-16 border-b border-[#E8E5DF] pb-4">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'history'
                ? 'bg-[#183D2F] text-white shadow-md'
                : 'bg-[#F9F8F5] text-stone-600 hover:bg-[#F3EFE6]'
            }`}
          >
            Club Heritage & Timeline
          </button>
          <button
            onClick={() => setActiveTab('committee')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'committee'
                ? 'bg-[#183D2F] text-white shadow-md'
                : 'bg-[#F9F8F5] text-stone-600 hover:bg-[#F3EFE6]'
            }`}
          >
            Management Committee (2025–2027)
          </button>
        </div>

        {/* TAB 1: HISTORY & HERITAGE */}
        {activeTab === 'history' && (
          <div className="space-y-20">
            {/* Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em] block">
                  The Genesis
                </span>
                <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537]">
                  From a Green Enclave to an Iconic Capital Institution
                </h2>
                <div className="w-16 h-[2px] bg-[#C5A869]" />
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  In the early 1970s, as South Delhi began expanding into prominent residential sectors, a collective of civil servants, legal luminaries, armed forces officers, and educationalists came together with a unified vision: to create a green haven dedicated to wholesome sporting facilities, high-quality dining, and community bonding.
                </p>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  The Club opened its doors on 14th November 1972 with two tennis courts, a modest reading room, and an open-air veranda. Over the following fifty years, through dedicated contributions from successive Management Committees, the club expanded into its present 6-acre championship complex.
                </p>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E8E5DF] aspect-[4/3]">
                <img
                  src="/assets/site78club/about_heritage.jpg"
                  alt="Heritage club grounds"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Heritage Milestones Timeline */}
            <div className="p-8 sm:p-14 bg-[#F9F8F5] rounded-3xl border border-[#E8E5DF]">
              <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#0F2537] text-center mb-12">
                Five Decades of Excellence
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <div className="font-['Cormorant',serif] font-bold text-3xl text-[#C5A869]">1972</div>
                  <h4 className="font-semibold text-sm text-[#0F2537]">Foundation & First Courts</h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    Club incorporated by founding resident trustees with inaugural tennis matches and pavilion opening.
                  </p>
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <div className="font-['Cormorant',serif] font-bold text-3xl text-[#C5A869]">1984</div>
                  <h4 className="font-semibold text-sm text-[#0F2537]">Olympic Aquatic Pavilion</h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    Inauguration of the 50-meter Olympic-size swimming pool and the Poolside Café.
                  </p>
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <div className="font-['Cormorant',serif] font-bold text-3xl text-[#C5A869]">2003</div>
                  <h4 className="font-semibold text-sm text-[#0F2537]">Global Reciprocal Network</h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    Crossed 30 affiliated clubs across India, London, Singapore, Colombo, and Dubai.
                  </p>
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <div className="font-['Cormorant',serif] font-bold text-3xl text-[#C5A869]">2026</div>
                  <h4 className="font-semibold text-sm text-[#0F2537]">Modern Green Infrastructure</h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    100% solar rooftop generation, digitized member smart cards, and advanced squash courts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MANAGEMENT COMMITTEE */}
        {activeTab === 'committee' && (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
                Democratic Leadership
              </span>
              <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-[#0F2537]">
                Management Committee
              </h2>
              <p className="text-sm text-stone-600 font-light">
                Elected by members to safeguard club assets, ensure fiduciary excellence, and foster gracious social traditions.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button
                onClick={() => setCommitteeFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${
                  committeeFilter === 'all'
                    ? 'bg-[#0F2537] text-white'
                    : 'bg-[#F9F8F5] text-stone-700 hover:bg-[#F3EFE6]'
                }`}
              >
                All Members
              </button>
              <button
                onClick={() => setCommitteeFilter('office_bearer')}
                className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${
                  committeeFilter === 'office_bearer'
                    ? 'bg-[#0F2537] text-white'
                    : 'bg-[#F9F8F5] text-stone-700 hover:bg-[#F3EFE6]'
                }`}
              >
                Office Bearers
              </button>
              <button
                onClick={() => setCommitteeFilter('executive_member')}
                className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${
                  committeeFilter === 'executive_member'
                    ? 'bg-[#0F2537] text-white'
                    : 'bg-[#F9F8F5] text-stone-700 hover:bg-[#F3EFE6]'
                }`}
              >
                Sub-Committee Chairs
              </button>
            </div>

            {/* Committee Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCommittee.map(member => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl p-6 border border-[#E8E5DF] shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Avatar Initials Badge */}
                    <div className="w-14 h-14 rounded-full bg-[#183D2F] text-[#C5A869] font-['Cormorant',serif] font-bold text-xl flex items-center justify-center border-2 border-[#C5A869]">
                      {member.avatarText}
                    </div>

                    <div>
                      <h4 className="font-['Cormorant',serif] font-bold text-xl text-[#0F2537] leading-tight">
                        {member.name}
                      </h4>
                      <div className="text-xs font-semibold text-[#183D2F] mt-1">
                        {member.role}
                      </div>
                      <div className="text-[10px] text-stone-500 font-light mt-0.5">
                        Tenure: {member.tenure}
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 font-light leading-relaxed pt-1 border-t border-[#F3EFE6]">
                      {member.bio}
                    </p>
                  </div>

                  {member.subCommittee && (
                    <div className="text-[11px] text-[#C5A869] font-medium pt-2">
                      Sub-Committee: {member.subCommittee}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
