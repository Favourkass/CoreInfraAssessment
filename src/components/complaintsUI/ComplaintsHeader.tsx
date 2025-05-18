import React from 'react';
import { ImagesAndIcons } from '../../constants/globalImageImports';

const ComplaintsLogHeader: React.FC = () => {
  return (
    
    <div className="w-full">
      {/* White header bar */}
      <div className="bg-white h-12 flex justify-between items-center px-6">
        {/* Left: Icon and Title */}
        <div className="flex items-center space-x-2">
          <img
            src={ImagesAndIcons.complaintsLog}
            alt="Complaints Log"
            className="h-5 w-5"
            style={{ filter: 'brightness(0)' }} // black tint effect
          />
          <span className="text-black font-medium text-sm">Complaints: Log</span>
        </div>

        {/* Right: Bell and Dropdown */}
        <div className="flex items-center space-x-4">
          <img src={ImagesAndIcons.bellIcon} alt="Notifications" className="h-8 w-8" />
          <img src={ImagesAndIcons.Dropdown} alt="Dropdown" className="h-6 w-6" />
        </div>
      </div>

      {/* Full-width bottom border line */}
      <div style={{ backgroundColor: 'rgba(222,230,226,1)', height: '1px', width: '100%' }} />
    </div>
  );
};

export default ComplaintsLogHeader;
