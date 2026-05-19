import React, { useState } from "react";

const ComplaintHistory = () => {
  const [complaints, setComplaints] = useState([
    { vehicle: "Toyota Corolla", complaint: "Engine overheating", date: "2025-02-10", status: "Pending" },
    { vehicle: "Honda Civic", complaint: "Brake issue", date: "2025-01-25", status: "Resolved" },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Complaint History</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Complaints</h2>
          {complaints.length === 0 ? (
            <p className="text-gray-600">No complaints logged yet.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Vehicle</th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Complaint</th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Date</th>
                  <th className="px-4 py-2 border border-gray-300 text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">{complaint.vehicle}</td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">{complaint.complaint}</td>
                    <td className="px-4 py-2 border border-gray-300 text-gray-600">{complaint.date}</td>
                    <td className={`px-4 py-2 border border-gray-300 text-white ${complaint.status === "Resolved" ? "bg-green-500" : "bg-red-500"}`}>{complaint.status}</td>
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

export default ComplaintHistory;
