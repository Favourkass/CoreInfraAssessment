import React from 'react';
import { ImagesAndIcons } from '../../constants/globalImageImports';

const DashboardHeader: React.FC = () => {
  return (
    <div className="w-full">
      {/* White header bar */}
      <div className="bg-white h-12 flex justify-between items-center px-6">
        {/* Left: Icon and Title */}
        <div className="flex items-center space-x-2">
          <img
            src={ImagesAndIcons.homeIcn}
            alt="Complaints Log"
            className="h-5 w-5"
            style={{ filter: 'brightness(0)' }}
          />
          <span className="text-black font-medium text-sm">Dashboard</span>
        </div>

        {/* Right: Search, Bell, and Dropdown */}
        <div className="flex items-center space-x-4">
          {/* Search box */}
          <div className="relative" style={{ width: '214px', height: '32px' }}>
            <img
              src={ImagesAndIcons.searchsm}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-3 h-full w-full rounded-full border border-gray-300 text-sm focus:outline-none"
            />
          </div>

          <img src={ImagesAndIcons.bellIcon} alt="Notifications" className="h-8 w-8" />
          <img src={ImagesAndIcons.Dropdown} alt="Dropdown" className="h-6 w-6" />
        </div>
      </div>

      {/* Full-width bottom border line */}
      <div style={{ backgroundColor: 'rgba(222,230,226,1)', height: '1px', width: '100%' }} />
    </div>
  );
};

export default DashboardHeader;
