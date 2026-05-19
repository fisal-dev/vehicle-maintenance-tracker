import React, { useState } from "react";

const Maintenance = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      vehicle: "Toyota Camry",
      date: "2024-02-10",
      service: "Oil Change",
      cost: "$50",
      provider: "QuickFix Auto",
    },
    {
      id: 2,
      vehicle: "Honda Civic",
      date: "2024-01-15",
      service: "Brake Replacement",
      cost: "$200",
      provider: "AutoCare Center",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Maintenance Records
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {records.length === 0 ? (
            <p className="text-gray-600">No maintenance records available.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">
                    Vehicle
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">
                    Date
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">
                    Service
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">
                    Cost
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">
                    Service Provider
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id} className="border-t">
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">
                      {record.vehicle}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">
                      {record.date}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">
                      {record.service}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">
                      {record.cost}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">
                      {record.provider}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
