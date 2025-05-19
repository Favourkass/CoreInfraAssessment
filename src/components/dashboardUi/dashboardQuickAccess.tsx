import React from "react";
import { ImagesAndIcons } from "../../constants/globalImageImports";

const DashboardQuickAccess: React.FC = () => {
  return (
    <div className="w-full mb-6 space-y-4">
      {/* Top Header */}
      <div className="flex justify-between items-start">
        {/* Left: Greeting + Last Login */}
        <div>
          <h2 className="text-xl font-semibold">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Last login: 26/11/2024 14:39:58
          </p>
        </div>

        {/* Right: Date box */}
        <div className="flex items-center border border-gray-300 rounded-[5px] px-3 py-1 space-x-2">
          <img
            src={ImagesAndIcons.calender}
            alt="Date Icon"
            className="h-4 w-4"
          />
          <span className="text-sm text-gray-700">Today | 11 Nov 2024</span>
        </div>
      </div>

      {/* Quick Access Card */}
      <div className="bg-white w-full p-2.5 rounded-[5px]">
        <p className="text-base font-medium mb-3">Your Quick Access</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              icon: ImagesAndIcons.manageIcon,
              label: "Manage a Card",
            },
            {
              icon: ImagesAndIcons.issueInstant,
              label: "Issue Instant Card",
            },
            {
              icon: ImagesAndIcons.issuePersonalized,
              label: "Issue Personalized Card",
            },
            {
              icon: ImagesAndIcons.reviewIcon,
              label: "Review Card Requests",
            },
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full h-[45px] flex items-center  bg-[rgba(241,247,255,1)] px-4 rounded-[3px] text-sm"
            >
              <div className="flex items-center space-x-2">
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              <img
                src={ImagesAndIcons.rightArrow}
                alt="arrow"
                className="w-4 h-4 ml-3"
                // style={{marginLeft:-100}}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardQuickAccess;
