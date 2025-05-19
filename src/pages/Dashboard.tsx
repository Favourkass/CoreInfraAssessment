import React from "react";
// import { ImagesAndIcons } from "../constants/globalImageImports";
import DashboardHeader from "../components/dashboardUi/dashboardUi";
import DashboardQuickAccess from "../components/dashboardUi/dashboardQuickAccess";
import AnalyticsCards from "../components/dashboardUi/analyticsUi";
import MonthlyIssuanceChart from "../components/dashboardUi/monthlyInsuranceBar";
import { RecentCardRequestsTable } from "../components/dashboardUi/recentCardRequestTable";
import { WeeklyIncomeChart } from "../components/dashboardUi/weekIncomeChart";
import { CardStatusDistribution } from "../components/dashboardUi/pieDataUi";

const Dashboard = () => {
  

  return (
    <div className="relative h-screen flex flex-col">
      {/* Top Nav */}
      <DashboardHeader />
      <div className="flex-1 overflow-y-auto bg-[#E4F0FF] p-5">
        <DashboardQuickAccess />
        <AnalyticsCards />
        <div className="flex flex-row">
          <MonthlyIssuanceChart />
          <RecentCardRequestsTable />
        </div>
        <div className="flex flex-row">
          <WeeklyIncomeChart />
          <CardStatusDistribution />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
