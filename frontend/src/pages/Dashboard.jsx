import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700">Total Vehicles</h2>
          <p className="text-3xl font-semibold text-blue-600">5</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700">Pending Services</h2>
          <p className="text-3xl font-semibold text-red-600">2</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700">Total Expenses</h2>
          <p className="text-3xl font-semibold text-green-600">$1,250</p>
        </div>
      </div>
      
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Recent Maintenance Records</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Vehicle</th>
              <th className="px-4 py-2 border">Service</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Toyota Camry</td>
              <td className="px-4 py-2 border">Oil Change</td>
              <td className="px-4 py-2 border">2025-02-10</td>
              <td className="px-4 py-2 border">$50</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Ford F-150</td>
              <td className="px-4 py-2 border">Brake Replacement</td>
              <td className="px-4 py-2 border">2025-02-08</td>
              <td className="px-4 py-2 border">$300</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center">
        <Link to="/vehicles" className="text-blue-600 hover:underline">View All Vehicles</Link>
      </div>
    </div>
  );
};

export default Dashboard;
