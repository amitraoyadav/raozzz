import React, { useState } from 'react';
import { Navigation, ChevronDown, Menu as MenuIcon, X, MapPin } from 'lucide-react';

interface FitpassHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCity: string;
  selectedLocality: string;
  onOpenCityModal: () => void;
  onOpenLoginModal: () => void;
  onOpenSubscribeModal: () => void;
}

export const FitpassHeader: React.FC<FitpassHeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCity,
  selectedLocality,
  onOpenCityModal,
  onOpenLoginModal,
  onOpenSubscribeModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'explore', label: 'BROWSE STUDIOS' },
    { id: 'onepass', label: 'ONE PASS' },
    { id: 'fitcoach', label: 'FITCOACH' },
    { id: 'fitfeast', label: 'FITFEAST' },
    { id: 'tv', label: 'FITPASS-TV' },
    { id: 'plans', label: 'MEMBERSHIP' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] bg-white z-[9999] shadow-md border-b border-gray-100 flex items-center">
      <div className="max-w-[1250px] w-full mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Logo & Location Pill */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={() => setActiveTab('explore')}
            aria-label="FITPASS HOME"
            className="flex items-center cursor-pointer group shrink-0"
          >
            {/* Authentic FITPASS SVG Wordmark & Runner Emblem */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[26px] sm:h-[30px] lg:h-[34px]"
              viewBox="0 0 651.449 99.873"
            >
              <g id="FITPASS-logo" transform="translate(16368.5 23803.5)">
                <path
                  id="Path_85928"
                  data-name="Path 85928"
                  d="M555.458,87.418l7.394-8.672c6.7,5.72,13.394,8.969,22.089,8.969,7.59,0,12.386-3.449,12.386-8.769,0-5.025-2.8-7.682-15.786-10.64-14.885-3.55-23.281-7.887-23.281-20.695,0-12.019,9.988-20.1,23.881-20.1a39.12,39.12,0,0,1,25.378,8.668l-6.592,9.162c-6.293-4.634-12.588-7.093-18.986-7.093-7.194,0-11.392,3.651-11.392,8.274,0,5.419,3.2,7.792,16.588,10.937,14.79,3.547,22.481,8.773,22.481,20.3,0,13-10.295,20.687-24.978,20.687A43.458,43.458,0,0,1,555.458,87.418Zm-72.942,0,7.4-8.672c6.7,5.72,13.39,8.969,22.085,8.969,7.594,0,12.386-3.449,12.386-8.769,0-5.025-2.792-7.682-15.782-10.64-14.891-3.55-23.283-7.887-23.283-20.695,0-12.019,9.992-20.1,23.883-20.1a39.131,39.131,0,0,1,25.378,8.668l-6.59,9.162C521.694,40.709,515.4,38.25,509,38.25c-7.192,0-11.388,3.651-11.388,8.274,0,5.419,3.194,7.792,16.584,10.937,14.786,3.547,22.485,8.773,22.485,20.3,0,13-10.295,20.687-24.98,20.687A43.463,43.463,0,0,1,482.516,87.418ZM453.351,98.452l-7.1-17H413.173l-7.19,17H393.389l30.78-70.941h11.39l30.778,70.941ZM417.676,70.478h24.083l-12.1-28.18ZM329.639,98.45V27.511h27.582c16.289,0,26.584,9.331,26.584,23.818,0,16.011-12.6,24.321-27.98,24.321H341.936v22.8Zm12.3-34.045h14.287c9.295,0,15.093-5.167,15.093-12.777,0-8.405-5.9-12.763-15.093-12.763H341.936ZM619.412,32.622v-.086a15.519,15.519,0,1,1,31.037-.086v.086a15.519,15.519,0,1,1-31.037.086Zm1.8-.086v.086a13.716,13.716,0,1,0,27.432-.086V32.45a13.716,13.716,0,1,0-27.432.086ZM61.322,44.235a10.172,10.172,0,0,1-7.2-3.364,10.336,10.336,0,0,1-1.987-3.362,10.5,10.5,0,0,1-.6-3.836,10.052,10.052,0,0,1,3.322-7.091,10.326,10.326,0,0,1,3.329-2,10.145,10.145,0,0,1,2.737-.589,10.194,10.194,0,0,1,7.087,2.333,10.049,10.049,0,0,1,3.609,6.95,10.538,10.538,0,0,1-.442,3.855,10.139,10.139,0,0,1-1.853,3.436,9.776,9.776,0,0,1-3.137,2.541,10.174,10.174,0,0,1-3.141,1.027,11.032,11.032,0,0,1-1.481.1Q61.447,44.238,61.322,44.235Zm576.74-3.9-3.347-5.019H632.7V40.34h-4.587v-16.5h7.67c2.617,0,4.415.686,5.575,1.846a5.059,5.059,0,0,1,1.411,3.766v.093a5.157,5.157,0,0,1-3.388,5.051l3.947,5.748ZM632.7,31.767h3c1.587,0,2.484-.731,2.484-1.935v-.08c0-1.326-.983-1.971-2.528-1.971H632.7Zm-529.248,2.7V0h7.194V34.462Zm-90.993-.008V0h7.194V34.454ZM0,28.165V6.3H7.192V28.165Zm115.92-.01V6.3h7.192V28.155ZM23.374,19.895V12.7H99.814v7.2Z"
                  transform="translate(-16368 -23803)"
                  fill="#071827"
                />
                <path
                  id="Path_85929"
                  data-name="Path 85929"
                  d="M242.878,70.94V11.559H220.7V0h56.758v11.56H255.27V70.94Zm-58.145,0V0h12.291V70.94Zm-76.236,0V0h52.061V11.355H120.785V30.707H156.06V42.059H120.785V70.94ZM26.216,60.182c-.676-1.166-1.362-2.356-2.027-3.51-1.808-3.129-3.482-6.028-4.5-7.794C17.049,44.285,7.87,28.785,4.924,23.8q-.429-.671-.811-1.369L4,22.25A32.355,32.355,0,0,1,.693,0H15.249A18.4,18.4,0,1,0,49.524,0H64.072a32.322,32.322,0,0,1-3.846,23.188,1.735,1.735,0,0,1-.091.149c-.029.051-.057.1-.084.139-1.478,2.5-12.034,20.291-14.979,25.4-1.013,1.766-2.7,4.665-4.5,7.794-.67,1.154-1.358,2.345-2.034,3.51-3.179,5.508-6.162,10.68-6.162,10.68S29.4,65.69,26.216,60.182Z"
                  transform="translate(-16338.789 -23775.488)"
                  fill="#dc343d"
                />
              </g>
            </svg>
          </button>

          {/* Location Selector Pill */}
          <button
            onClick={onOpenCityModal}
            className="border border-gray-200 rounded-[50px] px-3 sm:px-4 py-2 sm:flex gap-1.5 items-center hidden min-w-0 max-w-[240px] xl:max-w-[280px] bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F14C50] shrink-0 rotate-45" />
            <span className="text-[12px] font-medium text-[#0A1F34] truncate">
              {selectedLocality}, {selectedCity}
            </span>
            <ChevronDown className="w-3 h-3 text-[#0A1F34] opacity-60 shrink-0" />
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map(link => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`py-1.5 px-3 lg:px-4 text-[12px] lg:text-[14px] font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#D6383B] font-bold'
                    : 'text-[#0A1F34] hover:text-[#D6383B]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={onOpenSubscribeModal}
            className="bg-[#D6383B] hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-[100px] transition-all shadow-xs cursor-pointer"
          >
            Get Started
          </button>

          <button
            onClick={onOpenLoginModal}
            className="hidden md:block font-bold text-xs sm:text-sm text-[#0A1F34] hover:text-[#D6383B] transition-colors cursor-pointer uppercase tracking-wider"
          >
            LOG IN
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0A1F34] hover:bg-gray-100 rounded-lg cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-gray-200 shadow-xl py-4 px-6 space-y-3 z-50">
          <button
            onClick={() => {
              onOpenCityModal();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 text-left text-xs font-semibold text-[#0A1F34]"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D6383B]" />
              <span>{selectedLocality}, {selectedCity}</span>
            </div>
            <span className="text-[#D6383B]">Change</span>
          </button>

          <div className="pt-2 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2.5 px-3 text-sm font-semibold rounded-lg ${
                  activeTab === link.id ? 'bg-red-50 text-[#D6383B]' : 'text-[#0A1F34] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenLoginModal();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold text-[#0A1F34] uppercase tracking-wider py-2"
            >
              LOG IN TO ACCOUNT
            </button>
            <button
              onClick={() => {
                onOpenSubscribeModal();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 bg-[#D6383B] text-white rounded-full text-xs font-bold"
            >
              Join FITPASS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
