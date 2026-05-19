import React, { useState } from "react";

const FuelConsumption = () => {
  const [fuelLogs, setFuelLogs] = useState([]);
  const [newLog, setNewLog] = useState({
    vehicle: "",
    date: "",
    liters: "",
    cost: "",
    mileage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLog({ ...newLog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newLog.vehicle && newLog.date && newLog.liters && newLog.cost && newLog.mileage) {
      setFuelLogs([...fuelLogs, newLog]);
      setNewLog({ vehicle: "", date: "", liters: "", cost: "", mileage: "" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Fuel Consumption</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Log Fuel Entry</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="vehicle" placeholder="Vehicle Name" value={newLog.vehicle} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="date" name="date" value={newLog.date} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="number" name="liters" placeholder="Liters Purchased" value={newLog.liters} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="number" name="cost" placeholder="Total Cost" value={newLog.cost} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="number" name="mileage" placeholder="Current Mileage" value={newLog.mileage} onChange={handleChange} className="w-full p-2 border rounded" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Log Fuel</button>
          </form>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Fuel History</h2>
          {fuelLogs.length === 0 ? (
            <p className="text-gray-600">No fuel logs available.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Vehicle</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Liters</th>
                  <th className="px-4 py-2 border">Cost</th>
                  <th className="px-4 py-2 border">Mileage</th>
                </tr>
              </thead>
              <tbody>
                {fuelLogs.map((log, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border">{log.vehicle}</td>
                    <td className="px-4 py-2 border">{log.date}</td>
                    <td className="px-4 py-2 border">{log.liters}L</td>
                    <td className="px-4 py-2 border">${log.cost}</td>
                    <td className="px-4 py-2 border">{log.mileage} km</td>
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

export default FuelConsumption;
