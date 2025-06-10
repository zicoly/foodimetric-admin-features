import { useState, useEffect } from "react";
import AnalyticsCards from "../components/Dashboard/AnalyticsCards";
import UserCharts from "../components/Dashboard/UserCharts";
import DashboardSkeleton from "../components/Dashboard/DashboardSkeleton";
import UserTable from "../components/Dashboard/UserTable";

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: 1500 },
    { label: "Active Today", value: 320 },
    { label: "Total Meals", value: 750 },
    { label: "Top Meal", value: "Spaghetti Bolognese" },
  ];

  const signups = [
    { month: "Jan", count: 200 },
    { month: "Feb", count: 180 },
    { month: "Mar", count: 220 },
    { month: "Apr", count: 310 },
  ];

  const distribution = [
    { type: "Breakfast", value: 250 },
    { type: "Lunch", value: 300 },
    { type: "Dinner", value: 200 },
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div>
      <h2 className="text-2xl lg:font-[cursive] text-[#147e03] font-bold mb-4">
        Dashboard Overview
      </h2>
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <div className="">
          <AnalyticsCards stats={stats} />
          <UserCharts signups={signups} distribution={distribution} />
          <UserTable />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
