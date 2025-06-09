import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import type { SignupData, MealDistribution } from "../../types";

interface Props {
  signups: SignupData[];
  distribution: MealDistribution[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const UserCharts: React.FC<Props> = ({ signups, distribution }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-4 shadow rounded-xl border border-gray-100">
        <h3 className="text-lg font-[cursive] font-bold text-[#147e03] mb-2">
          Monthly Signups
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={signups}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 shadow rounded-xl border border-gray-100">
        <h3 className="text-lg font-[cursive] font-bold text-[#147e03] mb-2">
          Meal Type Distribution
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={distribution}
              dataKey="value"
              nameKey="type"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {distribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserCharts;
