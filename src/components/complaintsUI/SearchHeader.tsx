import React from "react";
import { ImagesAndIcons } from "../../constants/globalImageImports";

const SearchHeader: React.FC = () => {
  return (
    <div className="bg-[#F9FAFB] p-[5px] w-full rounded-md flex items-center justify-between">
      {/* Search Input */}
      <div className="flex items-center bg-white px-3 py-2 rounded-md w-full max-w-sm">
        <img
          src={ImagesAndIcons.searchsm}
          alt="Search"
          className="w-4 h-4 mr-2 object-contain"
        />
        <input
          type="text"
          placeholder="Search complaints..."
          className="outline-none w-full text-sm bg-transparent placeholder-gray-500"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 ml-4">
        {/* Date */}
        <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-[5px] text-sm text-gray-700 cursor-pointer">
          <img
            src={ImagesAndIcons.calender}
            alt="Date"
            className="w-4 h-4 object-contain"
          />
          <span>Date</span>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-[5px] text-sm text-gray-700 cursor-pointer">
          <img
            src={ImagesAndIcons.filterlines}
            alt="Filter"
            className="w-4 h-4 object-contain"
          />
          <span>Filter</span>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
