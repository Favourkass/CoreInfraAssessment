import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ImagesAndIcons } from "../../constants/globalImageImports";

const lineData = [
  { day: "Mon", income: 40 },
  { day: "Tue", income: 120 },
  { day: "Wed", income: 140 },
  { day: "Thu", income: 60 },
  { day: "Fri", income: 160 },
  { day: "Sat", income: 150 },
  { day: "Sun", income: 170 },
];

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

export function WeeklyIncomeChart() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-1/2 p-2">
      <div className="bg-white rounded-xl shadow p-4 h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold">This Week’s Income</h3>
          <button
            onClick={() => setExpanded(true)}
            aria-label="Expand Weekly Income Chart"
            className="hover:text-gray-900"
          >
            <img
              src={ImagesAndIcons.maximize}
              className="w-4 h-4"
              alt="maximize"
            />
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={lineData}
            margin={{ top: 10, bottom: 10, left: 20, right: 20 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="rgba(242,244,247,1)"
              strokeDasharray="0"
            />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="income"
              stroke="rgba(77, 175, 1, 1)"
              strokeWidth={1.7}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {expanded && (
        <Modal onClose={() => setExpanded(false)}>
          <h2 className="mb-6 text-[24px] font-semibold text-[rgba(71,84,103,1)]">
            This Week’s Income
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={lineData}
              margin={{ top: 10, bottom: 10, left: 30, right: 30 }}
            >
              <CartesianGrid
                vertical={false}
                stroke="rgba(242,244,247,1)"
                strokeDasharray="0"
              />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="rgba(77, 175, 1, 1)"
                strokeWidth={1.7}
                dot={false}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Modal>
      )}
    </div>
  );
}
