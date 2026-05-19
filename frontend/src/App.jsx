import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/NotificationsPage";
import VehicleList from "./pages/VehicleList";
import VehicleDetails from "./pages/VehicleDetails";
import AddVehicle from "./pages/AddVehicle";
import Maintenance from "./pages/Maintenance";
import UpcomingServices from "./pages/UpcomingServices";
import ServiceCenters from "./pages/ServiceCenters";
import ExpenseReports from "./pages/ExpenseReports";
import FuelConsumption from "./pages/FuelConsumption";
import PerformanceAnalytics from "./pages/PerformanceAnalytics";
import Report from "./pages/Report";
import ComplaintHistory from "./pages/ComplaintHistory";
import UserProfile from "./pages/UserProfile";
import SettingsPage from "./pages/SettingsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notifications" element={<Notifications />} />

            <Route path="/vehicles" element={<VehicleList />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="/add-vehicle" element={<AddVehicle />} />

      
            <Route path="/maintenance-records" element={<Maintenance />} />
            <Route path="/upcoming-services" element={<UpcomingServices />} />
            <Route path="/service-centers" element={<ServiceCenters />} />

    
            <Route path="/expense-reports" element={<ExpenseReports />} />
            <Route path="/fuel-consumption" element={<FuelConsumption />} />
            <Route path="/performance-analytics" element={<PerformanceAnalytics />} />

        
            <Route path="/report-complaint" element={<Report />} />
            <Route path="/complaint-history" element={<ComplaintHistory />} />

         
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<About/>}/>

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
