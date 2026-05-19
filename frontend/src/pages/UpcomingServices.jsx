import React, { useState } from "react";

const UpcomingServices = () => {
  const [services, setServices] = useState([
    { id: 1, vehicle: "Toyota Corolla", service: "Oil Change", date: "2025-03-10" },
    { id: 2, vehicle: "Honda Civic", service: "Brake Inspection", date: "2025-03-15" },
    { id: 3, vehicle: "Ford Focus", service: "Tire Rotation", date: "2025-03-20" }
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Services</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {services.length === 0 ? (
            <p className="text-gray-600">No upcoming services scheduled.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Vehicle</th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Service</th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-t">
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">{service.vehicle}</td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">{service.service}</td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">{service.date}</td>
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

export default UpcomingServices;
