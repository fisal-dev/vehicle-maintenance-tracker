import React, { useState } from "react";
import { ReceiptText, Filter, Search, DollarSign, CalendarClock, Car, ArrowDownToLine } from "lucide-react";
import DashboardLayout from "./DashboardLayout";
import Card from "./ui/Card";
import Button from "./ui/Button";

const ExpenseReports = () => {
  const [expenses] = useState([
    { id: 1, vehicle: "Toyota Corolla", date: "Feb 01, 2024", category: "Oil Change", cost: 50 },
    { id: 2, vehicle: "Honda Civic", date: "Feb 05, 2024", category: "Tire Replacement", cost: 200 },
    { id: 3, vehicle: "Ford F-150", date: "Feb 08, 2024", category: "Brake Service", cost: 300 },
    { id: 4, vehicle: "Tesla Model 3", date: "Feb 10, 2024", category: "Detailing", cost: 120 },
  ]);
  
  const [filters, setFilters] = useState({ vehicle: "", category: "", startDate: "", endDate: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (filters.vehicle ? expense.vehicle.toLowerCase().includes(filters.vehicle.toLowerCase()) : true) &&
      (filters.category ? expense.category.toLowerCase().includes(filters.category.toLowerCase()) : true) &&
      (filters.startDate ? new Date(expense.date) >= new Date(filters.startDate) : true) &&
      (filters.endDate ? new Date(expense.date) <= new Date(filters.endDate) : true)
    );
  });

  const totalCost = filteredExpenses.reduce((sum, item) => sum + item.cost, 0);

  return (
    <DashboardLayout>
      <div className="page-wrapper">
        
        {/* Header Block */}
        <div className="page-header">
          <div>
            <h1 className="section-header">Expense Reports</h1>
            <p className="section-subheader">Track, audit, and analyze vehicle expenditures</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center gap-3 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Filtered:</span>
              <span className="text-xl font-extrabold text-white flex items-center">
                <span className="text-indigo-400 mr-0.5">$</span>{totalCost}
              </span>
            </div>
            <Button variant="secondary" icon={ArrowDownToLine}>
               Export CSV
            </Button>
          </div>
        </div>

        {/* Filters Form Card */}
        <Card variant="bordered" className="p-6 bg-[#0D1424]/80">
          <div className="flex items-center gap-2 text-indigo-400 font-bold mb-4 uppercase tracking-widest text-xs">
            <Filter className="w-4 h-4" /> Filter Parameters
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                name="vehicle"
                placeholder="Search Vehicle Name..."
                value={filters.vehicle}
                onChange={handleFilterChange}
                className="input-field pl-10"
              />
            </div>

            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                name="category"
                placeholder="Search Category..."
                value={filters.category}
                onChange={handleFilterChange}
                className="input-field pl-10"
              />
            </div>

            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="input-field"
            />

            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="input-field"
            />
          </div>
        </Card>

        {/* Expenses List Card */}
        <Card variant="bordered" className="p-0 overflow-hidden bg-[#0D1424]/80">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-extrabold text-white">Expenditure Log</h2>
          </div>

          {filteredExpenses.length === 0 ? (
            <div className="text-center py-20">
               <ReceiptText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
               <p className="text-slate-400 text-sm">No expenditures matching criteria found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th className="pl-6">Vehicle</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th className="pr-6">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExpenses.map((expense) => (
                    <tr key={expense.id}>
                      <td className="pl-6 font-bold text-white flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                          <Car className="w-3 h-3 text-slate-400" />
                        </div>
                        {expense.vehicle}
                      </td>
                      <td className="font-semibold text-slate-300">{expense.category}</td>
                      <td className="text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarClock className="w-3.5 h-3.5 text-indigo-400" />
                          {expense.date}
                        </span>
                      </td>
                      <td className="pr-6 font-extrabold text-emerald-400">
                        ${expense.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ExpenseReports;
