import React from "react";
import DashboardStats from "@/components/dashboard/DashboardStats";

const AgencyDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
      <DashboardStats />
    </div>
  );
};

export default AgencyDashboard;
