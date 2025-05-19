import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ImagesAndIcons } from "../../constants/globalImageImports";

const barData = [
  { month: "May", Personalized: 20, Instant: 100 },
  { month: "Jun", Personalized: 50, Instant: 60 },
  { month: "Jul", Personalized: 60, Instant: 80 },
  { month: "Aug", Personalized: 70, Instant: 70 },
  { month: "Sep", Personalized: 60, Instant: 90 },
  { month: "Oct", Personalized: 80, Instant: 100 },
  { month: "Nov", Personalized: 70, Instant: 95 },
];

export default function MonthlyIssuanceChart() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Main Chart Container */}
      <div className="w-1/2 p-2">
        <div className="bg-white rounded-xl shadow p-4 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold">Monthly Issuance</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Expand chart"
              className="text-gray-600 hover:text-gray-900"
            >
              <img src={ImagesAndIcons.maximize} className="w-4 h-4" alt="maximize"/>
            </button>
          </div>

          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} barCategoryGap={40} barSize={40}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="Personalized"
                stackId="a"
                fill="rgba(1, 77, 175, 1)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="Instant"
                stackId="a"
                fill="rgba(204, 226, 255, 1)"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

          {/* Horizontal dividing line */}
          <div className="border-t border-gray-300 mt-4"></div>

          {/* Legend */}
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center space-x-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(1, 77, 175, 1)" }}
              ></span>
              <span>Personalized</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(204, 226, 255, 1)" }}
              ></span>
              <span>Instant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl p-6 shadow-lg w-[90%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header with close button */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Monthly Issuance</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Larger Bar Chart in Modal */}
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={barData} barCategoryGap={40} barSize={60}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="Personalized"
                  stackId="a"
                  fill="rgba(1, 77, 175, 1)"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="Instant"
                  stackId="a"
                  fill="rgba(204, 226, 255, 1)"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

            {/* Horizontal dividing line */}
            <div className="border-t border-gray-300 mt-6"></div>

            {/* Legend */}
            <div className="flex justify-center space-x-8 mt-6">
              <div className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "rgba(1, 77, 175, 1)" }}
                ></span>
                <span className="text-lg">Personalized</span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "rgba(204, 226, 255, 1)" }}
                ></span>
                <span className="text-lg">Instant</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
