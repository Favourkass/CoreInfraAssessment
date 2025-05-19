import React from 'react';
import { ImagesAndIcons } from '../../constants/globalImageImports';

const analyticsData = [
  {
    icon: ImagesAndIcons.activeCard,
    label: "Total Active Cards",
    value: "26,478",
    percentageIcon: ImagesAndIcons.arrowUp,
    percentage: '+9%',
    thisMonthText: 'This month',
  },
  {
    icon: ImagesAndIcons.personalized,
    label: "Total Personalized Cards",
    value: "15,703",
    percentageIcon: ImagesAndIcons.arrowUp,
    percentage: '-2%',
    thisMonthText: 'This month',
  },
  {
    icon: ImagesAndIcons.revenue,
    label: "Today's Revenue",
    value: "₦9.3M",
    percentageIcon: ImagesAndIcons.arrowUp,
    percentage: '+5%',
    thisMonthText: 'This month',
  },
  {
    icon: ImagesAndIcons.pendingRequest,
    label: "Pending Requests",
    value: "38",
    pendingRequestIcon: ImagesAndIcons.alertCircle,
    thisMonthText: 'Requires attention',
  },
];

const AnalyticsCards: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* Analytics Header */}
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold">Analytics</h2>
        <div className="flex-1 h-px bg-[rgba(208,213,221,1)]" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {analyticsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-4 flex flex-col justify-between"
          >
            {/* Icon */}
            <img src={item.icon} alt={item.label} className="w-6 h-6 mb-3" />

            {/* Label */}
            <p className="text-[14px] text-[rgba(0,0,0,0.56)] mb-1">{item.label}</p>

            {/* Value + Stats Row */}
            <div className="flex items-center justify-between">
              {/* Value */}
              <span className="text-[24px] font-semibold text-black">{item.value}</span>

              {/* Stats Info */}
              {item.pendingRequestIcon ? (
                <div className="flex items-center space-x-1">
                  <img
                    src={item.pendingRequestIcon}
                    alt="Pending"
                    className="w-4 h-4"
                  />
                  <span className="text-[12px] text-[rgba(231,128,32,1)] font-medium">
                    {item.thisMonthText}
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-[rgba(239,250,246,1)] px-2 py-0.5 rounded">
                    <img
                      src={item.percentageIcon}
                      alt="trend"
                      className="w-3 h-3"
                    />
                    <span className="text-[12px] text-[rgba(41,161,116,1)] font-medium">
                      {item.percentage}
                    </span>
                  </div>
                  <span className="text-[12px] text-[rgba(0,0,0,0.56)]">
                    {item.thisMonthText}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsCards;
