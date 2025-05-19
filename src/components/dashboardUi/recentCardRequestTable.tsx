import React, { useState } from "react";
import { ImagesAndIcons } from "../../constants/globalImageImports";

const cardRequestsData = [
  { branch: "Corporate", cardType: "Instant", quantity: 10, status: "ready" },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "inprogress",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "acknowledged",
  },
  { branch: "Corporate", cardType: "Instant", quantity: 10, status: "pending" },
  { branch: "Corporate", cardType: "Instant", quantity: 10, status: "pending" },
];

const statusStyles = {
  ready: {
    bg: "bg-[rgba(236,253,243,1)]",
    text: "text-[rgba(171,239,198,1)]",
    border: "border-[rgba(171,239,198,1)]",
  },
  inprogress: {
    bg: "bg-[rgba(255,250,235,1)]",
    text: "text-[rgba(254,223,137,1)]",
    border: "border-[rgba(254,223,137,1)]",
  },
  acknowledged: {
    bg: "bg-[rgba(239,248,255,1)]",
    text: "text-[rgba(178,221,255,1)]",
    border: "border-[rgba(178,221,255,1)]",
  },
  pending: {
    bg: "bg-[rgba(249,250,251,1)]",
    text: "text-[rgba(234,236,240,1)]",
    border: "border-[rgba(234,236,240,1)]",
  },
};

function Modal({ children, onClose }: any) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 shadow-lg max-w-6xl max-h-[90vh] overflow-auto w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="text-gray-700 hover:text-gray-900 font-bold text-2xl mb-4 float-right"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export function RecentCardRequestsTable() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-1/2 p-2 h-full">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[16px] font-semibold text-gray-800">
            Recent Card Requests
          </h3>
          <button
            onClick={() => setExpanded(true)}
            aria-label="Expand Recent Card Requests Table"
            className="hover:text-gray-900"
          >
             <img src={ImagesAndIcons.maximize} className="w-4 h-4" alt="maximize"/>
          </button>
        </div>

        {/* Table Header */}
        {/* Table Header */}
        <div
          className="flex text-center font-semibold text-[13px] text-[rgba(71,84,103,1)]"
          style={{ backgroundColor: "rgba(241,247,255,1)" }}
        >
          <div className="w-1/4 py-3 flex justify-center items-center">
            Branch
          </div>
          <div className="w-1/4 py-3 flex justify-center items-center">
            Card Type
          </div>
          <div className="w-1/6 py-3 flex justify-center items-center">
            Quantity
          </div>
          <div className="w-1/6 py-3 flex justify-center items-center">
            Status
          </div>
          <div className="w-1/6 py-3 flex justify-center items-center">
            Action
          </div>
        </div>

        {/* Table Rows */}
        <div className="bg-white rounded-b-xl flex flex-col flex-grow overflow-auto">
          {cardRequestsData.map(({ branch, cardType, quantity, status }, i) => {
            const s = statusStyles[status as keyof typeof statusStyles];
            return (
              <div
                key={i}
                className="flex text-center text-[12px] text-[rgba(71,84,103,1)] items-center border-t border-gray-200 px-5 py-3"
              >
                <div className="w-1/4 flex justify-start items-center">
                  {branch}
                </div>
                <div className="w-1/4 flex justify-center items-center">
                  {cardType}
                </div>
                <div className="w-1/6 flex justify-center items-center">
                  {quantity}
                </div>
                <div className="w-1/6 flex justify-center items-center">
                  <span
                    className={`${s.bg} ${s.text} ${s.border} border rounded-[20px] px-4 py-1.5 font-semibold inline-block`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </div>
                <div
                  className="w-1/6 text-[rgba(1,77,175,1)] font-bold cursor-pointer flex justify-end items-center"
                  role="button"
                  tabIndex={0}
                >
                  View
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Expanded Table */}
      {expanded && (
        <Modal onClose={() => setExpanded(false)}>
          <h2 className="mb-6 text-[24px] font-semibold text-[rgba(71,84,103,1)]">
            Recent Card Requests
          </h2>
          <div
            className="flex text-center font-bold text-[18px] text-[rgba(71,84,103,1)]"
            style={{ backgroundColor: "rgba(241,247,255,1)" }}
          >
            <div className="flex-1 py-3 flex justify-center items-center">
              Branch
            </div>
            <div className="flex-1 py-3 flex justify-center items-center">
              Card Type
            </div>
            <div className="flex-1 py-3 flex justify-center items-center">
              Quantity
            </div>
            <div className="flex-1 py-3 flex justify-center items-center">
              Status
            </div>
            <div className="flex-1 py-3 flex justify-center items-center">
              Action
            </div>
          </div>

          <div className="bg-white rounded-b-xl max-h-[60vh] overflow-y-auto">
            {cardRequestsData.map(
              ({ branch, cardType, quantity, status }, i) => {
                const s = statusStyles[status as keyof typeof statusStyles];
                return (
                  <div
                    key={i}
                    className="flex text-center text-[14px] text-[rgba(71,84,103,1)] items-center border-t border-gray-200 px-5 py-4"
                  >
                    <div className="flex-1 flex justify-center items-center">
                      {branch}
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      {cardType}
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      {quantity}
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      <span
                        className={`${s.bg} ${s.text} ${s.border} border rounded-[20px] px-5 py-2 font-semibold inline-block`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </div>
                    <div
                      className="flex-1 text-[rgba(1,77,175,1)] font-bold cursor-pointer flex justify-center items-center"
                      role="button"
                      tabIndex={0}
                    >
                      View
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
