import React from "react";
import { Link } from "react-router-dom";

const vehicles = [
  { id: 1, make: "Toyota", model: "Corolla", year: 2020, vin: "1HGCM82633A123456", registration: "ABC-1234" },
  { id: 2, make: "Honda", model: "Civic", year: 2019, vin: "1HGCM82633A654321", registration: "XYZ-5678" },
  { id: 3, make: "Ford", model: "F-150", year: 2021, vin: "1HGCM82633A789012", registration: "LMN-9101" }
];

const VehicleList = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vehicle List</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">Make</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">Model</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">Year</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">VIN</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">Registration</th>
                <th className="border border-gray-300 px-4 py-2 text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="border-t">
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{vehicle.make}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{vehicle.model}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{vehicle.year}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{vehicle.vin}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{vehicle.registration}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    <Link to={`/vehicle/${vehicle.id}`} className="text-blue-600 hover:underline">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6">
            <Link to="/add-vehicle" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add New Vehicle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
