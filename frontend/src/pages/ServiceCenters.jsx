import React, { useState } from "react";

const ServiceCenters = () => {
  const [centers] = useState([
    { name: "Auto Care Garage", location: "New York, NY", contact: "(123) 456-7890" },
    { name: "Elite Mechanics", location: "Los Angeles, CA", contact: "(987) 654-3210" },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Service Centers</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Registered Service Centers</h2>
        {centers.length === 0 ? (
          <p className="text-gray-600">No service centers added yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-gray-700">Name</th>
                <th className="px-4 py-2 border border-gray-300 text-gray-700">Location</th>
                <th className="px-4 py-2 border border-gray-300 text-gray-700">Contact</th>
              </tr>
            </thead>
            <tbody>
              {centers.map((center, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border border-gray-300 text-gray-600">{center.name}</td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-600">{center.location}</td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-600">{center.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ServiceCenters;
