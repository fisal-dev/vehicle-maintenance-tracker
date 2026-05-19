import React, { useState } from "react";

const ExpenseReports = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, vehicle: "Toyota Corolla", date: "2024-02-01", category: "Oil Change", cost: 50 },
    { id: 2, vehicle: "Honda Civic", date: "2024-02-05", category: "Tire Replacement", cost: 200 },
  ]);
  const [filters, setFilters] = useState({ vehicle: "", category: "", startDate: "", endDate: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (filters.vehicle ? expense.vehicle.includes(filters.vehicle) : true) &&
      (filters.category ? expense.category.includes(filters.category) : true) &&
      (filters.startDate ? new Date(expense.date) >= new Date(filters.startDate) : true) &&
      (filters.endDate ? new Date(expense.date) <= new Date(filters.endDate) : true)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Expense Reports</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Filter Expenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input type="text" name="vehicle" placeholder="Vehicle Name" value={filters.vehicle} onChange={handleFilterChange} className="p-2 border rounded" />
          <input type="text" name="category" placeholder="Category" value={filters.category} onChange={handleFilterChange} className="p-2 border rounded" />
          <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} className="p-2 border rounded" />
          <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} className="p-2 border rounded" />
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Expense History</h2>
        {filteredExpenses.length === 0 ? (
          <p className="text-gray-600">No expenses found.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Vehicle</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Cost ($)</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="border-t">
                  <td className="px-4 py-2 border">{expense.vehicle}</td>
                  <td className="px-4 py-2 border">{expense.category}</td>
                  <td className="px-4 py-2 border">{expense.date}</td>
                  <td className="px-4 py-2 border">${expense.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExpenseReports;
