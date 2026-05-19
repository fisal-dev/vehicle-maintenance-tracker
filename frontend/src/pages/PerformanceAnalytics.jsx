import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PerformanceAnalytics = () => {
  const maintenanceData = [
    { month: "Jan", cost: 200 },
    { month: "Feb", cost: 150 },
    { month: "Mar", cost: 300 },
    { month: "Apr", cost: 250 },
    { month: "May", cost: 400 },
    { month: "Jun", cost: 350 },
  ];

  const fuelConsumptionData = [
    { month: "Jan", liters: 50 },
    { month: "Feb", liters: 45 },
    { month: "Mar", liters: 55 },
    { month: "Apr", liters: 60 },
    { month: "May", liters: 65 },
    { month: "Jun", liters: 70 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Performance Analytics</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Maintenance Cost Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={maintenanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fuel Consumption Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={fuelConsumptionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="liters" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
