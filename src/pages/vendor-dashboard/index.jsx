import React, { useEffect, useState } from "react";
import { apiGetVendorAds } from "../../services/vendor";
// import { LineChart, BarChart, PieChart } from "react-chartjs-2";
import { MdAdd, MdManageAccounts } from "react-icons/md";
import { useSelector } from "react-redux";

const VendorDashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [stats, setStats] = useState({
    activeAds: 10,
    totalClicks: 1200,
    impressions: 5000,
    revenue: "$340",
  });

  return (
    <div className="p-6 h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vendor Dashboard Overview</h1>
        <div className="text-gray-500">
          Welcome, {user.name} | {new Date().toLocaleDateString()}
        </div>
      </header>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Active Ads</h2>
          <p className="text-2xl">{stats.activeAds}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Clicks</h2>
          <p className="text-2xl">{stats.totalClicks}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Impressions</h2>
          <p className="text-2xl">{stats.impressions}</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl">{stats.revenue}</p>
        </div>
      </div>

      {/* Graphs & Charts */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            Ad Performance Over Time
          </h3>
          {/* <LineChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "Clicks",
                  data: [100, 200, 150, 300, 250],
                  borderColor: "#4a90e2",
                  fill: false,
                },
              ],
            }}
            options={{ responsive: true }}
          /> */}
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Top Performing Ads</h3>
          {/* <BarChart
            data={{
              labels: ["Ad 1", "Ad 2", "Ad 3"],
              datasets: [
                {
                  label: "Clicks",
                  data: [400, 250, 300],
                  backgroundColor: ["#4a90e2", "#50e3c2", "#f5a623"],
                },
              ],
            }}
            options={{ responsive: true }}
          /> */}
        </div>
      </div>

      {/* Recent Ads */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Ads</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Mock ad cards */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="font-semibold">Ad 1</h4>
            <p>Status: Active</p>
            <p>Clicks: 200</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded-lg">
              View
            </button>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="font-semibold">Ad 2</h4>
            <p>Status: Expired</p>
            <p>Clicks: 150</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded-lg">
              View
            </button>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h4 className="font-semibold">Ad 3</h4>
            <p>Status: Pending</p>
            <p>Clicks: 50</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded-lg">
              View
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg">
          <MdAdd className="mr-2" /> Create New Ad
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg">
          <MdManageAccounts className="mr-2" /> Manage Ads
        </button>
      </div>
    </div>
  );
};

export default VendorDashboard;
