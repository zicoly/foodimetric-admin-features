import React from "react";
import type { StatCard } from "../../types";
import {
  UsersIcon,
  ActivityIcon,
  UtensilsIcon,
  TrophyIcon,
} from "lucide-react";

interface Props {
  stats: StatCard[];
}

const AnalyticsCards: React.FC<Props> = ({ stats }) => {
  const getCardConfig = (label: string) => {
    switch (label) {
      case "Total Users":
        return {
          icon: <UsersIcon className="w-5 h-5" />,
          gradient: "from-blue-200 to-blue-300",
        };
      case "Active Today":
        return {
          icon: <ActivityIcon className="w-5 h-5" />,
          gradient: "from-green-200 to-green-300",
        };
      case "Total Meals":
        return {
          icon: <UtensilsIcon className="w-5 h-5" />,
          gradient: "from-purple-200 to-purple-300",
        };
      case "Top Meal":
        return {
          icon: <TrophyIcon className="w-5 h-5" />,
          gradient: "from-amber-200 to-amber-300",
        };
      default:
        return {
          icon: null,
          gradient: "from-gray-100 to-gray-200",
        };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const { icon, gradient } = getCardConfig(stat.label);

        return (
          <div
            key={index}
            className={`bg-gradient-to-r ${gradient} shadow-md rounded-xl p-4 text-black/70 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="p-2 rounded-lg">{icon}</div>
                <p className="text-sm font-medium opacity-80">{stat.label}</p>
                <h2 className="lg:text-2xl text-xl font-semibold mt-1">
                  {stat.value}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsCards;
