import React from "react";
import DashboardStatsGrid from "../../components/Admin/DashboardStatsGrid";
import TransactionChart from "../../components/Admin/TransactionChart";
import BuyerProfilePieChart from "../../components/Admin/BuyerProfilePieChart";
import RecentOrders from "../../components/Admin/RecentOrders";
import PopularProducts from "../../components/Admin/PopularProducts";
import Sidebar from "../../components/Admin/Layout/Sidebar";
import Header from "../../components/Admin/Layout/Header";
const AdminDashboardPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <div className="flex flex-col gap-4">
              <DashboardStatsGrid />
              <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart />
              </div>
              <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <PopularProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
