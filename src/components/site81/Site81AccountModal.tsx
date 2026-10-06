import React, { useState } from 'react';
import {
  X,
  User,
  Heart,
  Search,
  MessageSquare,
  Lock,
  Mail,
  CheckCircle2,
  Trash2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { PropertyListing, LUXURY_PROPERTIES } from '../../data/site81Data';
import { formatCurrencyPrice } from './Site81PropertyCard';

interface Site81AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'saved' | 'inquiries' | 'searches';
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: PropertyListing) => void;
  currency: string;
}

export const Site81AccountModal: React.FC<Site81AccountModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'login',
  favorites,
  onToggleFavorite,
  onSelectProperty,
  currency
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'saved' | 'inquiries' | 'searches'>(initialTab);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Baron Sterling Vance');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Mock Saved Searches
  const [savedSearches, setSavedSearches] = useState([
    { id: 'ss-1', label: 'Beverly Hills Modernist > $50M', date: 'March 2026' },
    { id: 'ss-2', label: 'French Riviera Waterfront with Yacht Berth', date: 'February 2026' },
    { id: 'ss-3', label: 'Lake Como Belle Époque Palazzos', date: 'January 2026' }
  ]);

  // Mock Inquiries
  const inquiries = [
    {
      id: 'inq-101',
      property: 'The Bel-Air Promontory Estate',
      date: 'March 05, 2026',
      status: 'Prospectus Dispatched',
      broker: 'Julian Vance-Moreau'
    },
    {
      id: 'inq-102',
      property: 'Villa Palazzo di Luna, Saint-Tropez',
      date: 'February 28, 2026',
      status: 'Private Viewing Confirmed',
      broker: 'Hélène de Montmirail'
    }
  ];

  if (!isOpen) return null;

  const favoriteProperties = LUXURY_PROPERTIES.filter((p) => favorites.includes(p.id));

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveTab('saved');
  };

  const handleRemoveSearch = (id: string) => {
    setSavedSearches((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full text-neutral-900 shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl font-normal text-neutral-950">
              Valtierra Private Client Account
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-neutral-200 px-6 bg-neutral-50/70 overflow-x-auto">
          {!isLoggedIn ? (
            <button
              onClick={() => setActiveTab('login')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'login'
                  ? 'border-neutral-950 text-neutral-950'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Sign In / Register
            </button>
          ) : (
            <div className="py-3 px-2 text-xs font-mono text-amber-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{userName}</span>
            </div>
          )}

          <button
            onClick={() => setActiveTab('saved')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'saved'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Saved Estates ({favorites.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('searches')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'searches'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Saved Searches ({savedSearches.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'inquiries'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Inquiries ({inquiries.length})</span>
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* 1. Login Tab */}
          {activeTab === 'login' && !isLoggedIn && (
            <div className="max-w-md mx-auto py-4">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-normal text-neutral-950">
                  Welcome to Valtierra
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Access confidential off-market catalogs, synchronized bookmarks, and personalized broker communications.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3 w-4 h-4 text-neutral-400" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="client@familyoffice.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-300 rounded focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                    Passcode / Security Token
                  </label>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-3 w-4 h-4 text-neutral-400" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-300 rounded focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Sign In to Private Portal
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail('client@valtierra.luxury');
                      setLoginPassword('DemoPassword123');
                      setIsLoggedIn(true);
                      setActiveTab('saved');
                    }}
                    className="text-xs font-mono text-amber-700 hover:underline cursor-pointer"
                  >
                    Quick Sign-In with Demo Client Profile →
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 2. Saved Properties Tab */}
          {activeTab === 'saved' && (
            <div>
              {favoriteProperties.length === 0 ? (
                <div className="text-center py-10 text-neutral-500">
                  <Heart className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
                  <h4 className="font-serif text-lg font-bold text-neutral-900">
                    No Saved Residences
                  </h4>
                  <p className="text-xs mt-1">
                    Click the heart icon on any property card to curate your private shortlist.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {favoriteProperties.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors bg-white gap-3"
                    >
                      <div
                        onClick={() => {
                          onClose();
                          onSelectProperty(p);
                        }}
                        className="flex items-center gap-3 cursor-pointer flex-1"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-16 h-12 rounded object-cover"
                        />
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-neutral-950">
                            {p.title}
                          </h4>
                          <p className="text-xs text-neutral-500">
                            {p.city}, {p.country} · {formatCurrencyPrice(p.priceUsd, currency)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectProperty(p);
                          }}
                          className="px-3 py-1 bg-neutral-900 text-white rounded text-xs uppercase cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          onClick={() => onToggleFavorite(p.id)}
                          className="p-1.5 text-neutral-400 hover:text-rose-600 cursor-pointer"
                          title="Remove from saved"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. Saved Searches Tab */}
          {activeTab === 'searches' && (
            <div className="space-y-3">
              {savedSearches.length === 0 ? (
                <div className="text-center py-10 text-neutral-500">
                  <p className="text-xs">No active saved searches found.</p>
                </div>
              ) : (
                savedSearches.map((search) => (
                  <div
                    key={search.id}
                    className="flex items-center justify-between p-3.5 rounded-lg border border-neutral-200 bg-neutral-50"
                  >
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-neutral-900">
                        {search.label}
                      </h4>
                      <span className="text-[11px] text-neutral-400 font-mono">
                        Saved in {search.date} · Real-time alerts enabled
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={onClose}
                        className="text-xs font-semibold text-amber-700 hover:underline cursor-pointer"
                      >
                        Run Search →
                      </button>
                      <button
                        onClick={() => handleRemoveSearch(search.id)}
                        className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* 4. Inquiries Tab */}
          {activeTab === 'inquiries' && (
            <div className="space-y-3">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 rounded-lg border border-neutral-200 bg-white space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-400">Ref: #{inq.id}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                      {inq.status}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-neutral-950">
                    {inq.property}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                    <span>Assigned Broker: {inq.broker}</span>
                    <span className="font-mono">{inq.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <span>Encrypted under 256-bit Swiss Banking Privacy Standards</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-200 hover:bg-neutral-300 rounded text-neutral-800 font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
