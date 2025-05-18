import React, { useState } from "react";
import { ImagesAndIcons } from "../constants/globalImageImports";
import ComplaintsLogHeader from "../components/complaintsUI/ComplaintsHeader";

const ComplaintsLog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "resolved">("pending");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const demoComplaints = Array.from({ length: 20 }, (_, i) => ({
    accountNumber: `ACCT00${i + 1}`,
    customerName: `Customer ${i + 1}`,
    submissionDate: `2025-05-${String(i + 1).padStart(2, "0")}`,
    category: i % 2 === 0 ? "Billing" : "Service",
  }));

  return (
    <div className="relative h-screen flex flex-col">
      {/* Fixed Header */}
      <div className="bg-white shadow-md z-10">
        <ComplaintsLogHeader />
      </div>

        {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-[#E4F0FF] p-5">
       
        <div className="mb-3 mt-2">
          <h2 className="text-xl font-semibold text-black">Complaints: Log</h2>
          <p className="text-sm text-gray-700">
            View details of logged complaints and log new ones here.
          </p>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#98A2B3] my-3" />

        {/* Filter Tabs + Action Button */}
        <div className="flex items-center justify-between mt-4">
          {/* Tabs */}
          <div className="flex bg-white rounded-lg border border-[#D0D5DD] overflow-hidden">
            {["pending", "resolved"].map((status) => {
              const isActive = activeTab === status;
              return (
                <div
                  key={status}
                  className={`relative px-4 py-2 cursor-pointer flex items-center gap-2 transition-all ${
                    isActive ? "bg-[#D0D5DD]" : ""
                  }`}
                  onClick={() => setActiveTab(status as "pending" | "resolved")}
                >
                  {isActive && (
                    <span className="w-2 h-2 bg-[#014DAF] rounded-full" />
                  )}
                  <span className="capitalize text-sm font-medium">
                    {status}
                  </span>
                  {status === "pending" && (
                    <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-[#D0D5DD] rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action button */}
          <button className="flex items-center gap-2 bg-[#014DAF] text-white text-sm px-4 py-2 rounded-[10px] shadow">
            <img
              src={ImagesAndIcons.complaint}
              alt="Complaints Icon"
              className="w-4 h-4 object-contain"
            />
            <span>Complaints Log</span>
          </button>
        </div>

        {/* Search and Actions */}
        <div className="bg-[#F9FAFB] w-full rounded-md mt-5">
          <div className="p-[5px] flex items-center justify-between">
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
            <div className="flex items-center gap-3 ml-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-[5px] text-sm text-gray-700 cursor-pointer">
                <img
                  src={ImagesAndIcons.calender}
                  alt="Date"
                  className="w-4 h-4 object-contain"
                />
                <span>Date</span>
              </div>
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

          {/* Table Header */}
          <div className="grid grid-cols-4 bg-[#F9FAFB] border-t border-[#D0D5DD] mt-1">
            {[
              "Account Number",
              "Customer Name",
              "Submission Date",
              "Category",
            ].map((header, idx) => (
              <div
                key={header}
                className={`
              p-3 text-sm font-medium text-gray-700 bg-[#F9FAFB] border-b border-[#D0D5DD]
              ${idx !== 0 ? "text-center" : ""}
              ${idx !== 0 ? "border-l" : ""}
              ${idx !== 3 ? "border-r" : ""}
            `}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {demoComplaints.map((complaint, index) => (
            <div
              key={index}
              className="grid grid-cols-4 bg-white border-t border-[#EAECE9]"
            >
              <div className="p-3 text-sm text-gray-800 border-b border-[#EAECE9]">
                {complaint.accountNumber}
              </div>
              <div className="p-3 text-sm text-gray-800 text-center border-b border-l border-[#EAECE9]">
                {complaint.customerName}
              </div>
              <div className="p-3 text-sm text-gray-800 text-center border-b border-l border-[#EAECE9]">
                {complaint.submissionDate}
              </div>
              <div className="p-3 text-sm text-gray-800 text-center border-b border-l border-[#EAECE9]">
                {complaint.category}
              </div>
            </div>
          ))}
        </div>

        {/* Spacer to prevent content under pagination */}
        <div className="h-[70px]" />
      </div>

      {/* Fixed Pagination at Bottom */}
      <div className="bg-white z-10 px-4 py-3 border-t border-gray-200 flex items-center justify-between">
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-white text-sm text-gray-700 border border-[rgba(208,213,221,1)] rounded-[5px] disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-white text-sm text-gray-700 border border-[rgba(208,213,221,1)] rounded-[5px] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsLog;
