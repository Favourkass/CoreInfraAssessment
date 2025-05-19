import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ImagesAndIcons } from "../../constants/globalImageImports";

const pieData = [
  { name: "Active", value: 1040, color: "#00C49F" },
  { name: "Expired", value: 400, color: "#FFBB28" },
  { name: "Inactive", value: 600, color: "#8884d8" },
  { name: "Blocked", value: 200, color: "#FF8042" },
  { name: "Lost", value: 210, color: "#A83279" },
];

const totalCards = pieData.reduce((acc, cur) => acc + cur.value, 0);

const CustomLegend = () => (
  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
    {pieData.map((entry, index) => (
      <div key={`legend-${index}`} className="flex items-center space-x-2">
        <div
          className="rounded-full"
          style={{
            width: 8,
            height: 8,
            backgroundColor: entry.color,
          }}
        />
        <span className="text-sm text-gray-600">{entry.name}</span>
      </div>
    ))}
  </div>
);

const Modal = ({ children, onClose }: any) => (
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

export function CardStatusDistribution() {
  const [expanded, setExpanded] = useState(false);

  const chart = (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-[250px] h-[250px] flex items-center justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={95} // thinner donut
            outerRadius={105} // larger circle
            paddingAngle={1}
            isAnimationActive={false}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p
            style={{
              fontSize: 13,
              color: "rgba(128, 128, 128, 1)",
            }}
          >
            Total Cards
          </p>
          <p
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#000",
            }}
          >
            {totalCards.toLocaleString()}
          </p>
        </div>
      </div>

      <CustomLegend />
    </div>
  );

  return (
    <div className="w-1/2 p-2">
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold">Card Status Distribution</h3>
          <button
            onClick={() => setExpanded(true)}
            aria-label="Expand Card Status Chart"
            className="hover:text-gray-900"
          >
             <img src={ImagesAndIcons.maximize} className="w-4 h-4" alt="maximize"/>
          </button>
        </div>
        {chart}
      </div>

      {expanded && (
        <Modal onClose={() => setExpanded(false)}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Card Status Distribution
          </h2>
          {chart}
        </Modal>
      )}
    </div>
  );
}
