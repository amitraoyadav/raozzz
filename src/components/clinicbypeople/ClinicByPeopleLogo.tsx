import React from 'react';

export const ClinicByPeopleIcon: React.FC<{ className?: string }> = ({
  className = 'w-9 h-9',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ClinicByPeople Logo Icon"
    >
      <circle cx="50" cy="50" r="46" fill="#0C5BE2" />
      {/* People connection ring */}
      <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.4" />
      {/* Medical Cross merged with protective shield */}
      <path
        d="M43 28H57V43H72V57H57V72H43V57H28V43H43V28Z"
        fill="white"
      />
      {/* Heart / Human touch accent in coral */}
      <circle cx="50" cy="50" r="6.5" fill="#FF6B4A" />
    </svg>
  );
};

export const ClinicByPeopleLogo: React.FC<{
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', theme = 'light', size = 'md' }) => {
  const isDark = theme === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      <ClinicByPeopleIcon className={iconSizes[size]} />
      <div className="flex flex-col leading-tight">
        <div className={`font-black tracking-tight flex items-baseline ${textSizes[size]}`}>
          <span className={isDark ? 'text-white' : 'text-[#0B1528]'}>ClinicBy</span>
          <span className="text-[#0C5BE2] font-black">People</span>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 -mt-0.5">
          Specialist Care Network
        </span>
      </div>
    </div>
  );
};
