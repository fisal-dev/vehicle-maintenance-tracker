import React from "react";
import { useParams } from "react-router-dom";

const VehicleDetails = () => {
  const { vehicleId } = useParams();

  const vehicle = {
    id: vehicleId,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    vin: "1HGCM82633A123456",
    registration: "ABC-1234",
    serviceHistory: [
      { date: "2024-01-10", description: "Oil Change", cost: "₹4500" },
      { date: "2023-12-05", description: "Tire Rotation", cost: "₹3000" },
    ],
    upcomingMaintenance: [
      { date: "2024-03-15", description: "Brake Inspection" },
    ],
    fuelLog: [
      { date: "2024-02-01", liters: 40, cost: "₹4200" },
    ],
    totalCost: "₹11700"
  };

  return (

    <div className="vehicledetails">

    <div className="bg-gray-100 min-h-screen pt-12">
      <div className="container mx-auto bg-white p-6 pt-12 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {vehicle.make} {vehicle.model} ({vehicle.year})
        </h1>
        <p className="text-gray-700">VIN: {vehicle.vin}</p>
        <p className="text-gray-700">Registration: {vehicle.registration}</p>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Service History</h2>
          <ul className="list-disc ml-6 text-gray-600">
            {vehicle.serviceHistory.map((service, index) => (
              <li key={index}>{service.date} - {service.description} ({service.cost})</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Upcoming Maintenance</h2>
          <ul className="list-disc ml-6 text-gray-600">
            {vehicle.upcomingMaintenance.map((maintenance, index) => (
              <li key={index}>{maintenance.date} - {maintenance.description}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Fuel Log</h2>
          <ul className="list-disc ml-6 text-gray-600">
            {vehicle.fuelLog.map((log, index) => (
              <li key={index}>{log.date} - {log.liters}L ({log.cost})</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Total Maintenance Cost</h2>
          <p className="text-lg text-gray-800">{vehicle.totalCost}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VehicleDetails;
