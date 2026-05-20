import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, Plus, CalendarClock, Car, MessageSquareWarning } from "lucide-react";
import DashboardLayout from "./DashboardLayout";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { api } from "../utils/api";

const ComplaintHistory = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setLoading(true);
        const data = await api.get("/complaints");
        setComplaints(data);
      } catch (err) {
        console.error("Error loading complaints:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchComplaints();
  }, []);

  return (
    <DashboardLayout>
      <div className="page-wrapper">
        
        {/* Header Block */}
        <div className="page-header">
          <div>
            <h1 className="section-header">Complaint Logs</h1>
            <p className="section-subheader">Review active reports and resolved fleet issue tickets</p>
          </div>
          <Link to="/report-complaint">
            <Button variant="danger" icon={Plus}>
              Report Issue
            </Button>
          </Link>
        </div>

        {/* Complaints history list card */}
        <Card variant="bordered" className="p-0 overflow-hidden bg-surface/80">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
              <MessageSquareWarning className="w-5 h-5 text-indigo-400" /> Ticket History
            </h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-24">
              <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : complaints.length === 0 ? (
            <div className="text-center py-20">
              <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-sm">Your fleet is running perfectly without logged exceptions.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th className="pl-6">Vehicle</th>
                    <th>Complaint Detail</th>
                    <th>Discovery Date</th>
                    <th className="pr-6">Ticket Status</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((item) => (
                    <tr key={item._id}>
                      <td className="pl-6">
                        <div className="font-bold text-foreground flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                            <Car className="w-3 h-3 text-slate-400" />
                          </div>
                          {item.vehicleId ? (
                            <Link to={`/vehicle/${item.vehicleId._id}`} className="hover:text-indigo-400 transition-colors">
                              {item.vehicleId.make} {item.vehicleId.model}
                            </Link>
                          ) : (
                            <span className="text-slate-400">Unknown Vehicle</span>
                          )}
                        </div>
                      </td>
                      <td className="font-semibold text-slate-300 max-w-md truncate" title={item.description}>
                        {item.description}
                      </td>
                      <td className="text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <CalendarClock className="w-3.5 h-3.5 text-indigo-400" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="pr-6">
                        <Badge variant={item.status || "danger"} dot size="sm">{item.label || "Open"}</Badge>
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

export default ComplaintHistory;
