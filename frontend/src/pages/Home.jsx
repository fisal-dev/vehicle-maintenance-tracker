import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaCalendarCheck, FaChartLine } from "react-icons/fa";

const HomePage = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen">

      <div className="relative h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-70"></div>
        <div className="relative z-10 px-8">
          <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Track Your Vehicle’s Health</h1>
          <p className="text-lg mb-6 animate-fadeIn">Stay on top of maintenance, reduce costs, and extend your vehicle’s life.</p>
          <Link to="/login">
            <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Get Started 🚗
            </button>
          </Link>
        </div>
      </div>

   
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Maintenance Tracking</h3>
            <p className="text-gray-600">Log and manage all vehicle maintenance activities.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <FaCalendarCheck className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Service Reminders</h3>
            <p className="text-gray-600">Never miss a service with automated reminders.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <FaChartLine className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Reports & Analytics</h3>
            <p className="text-gray-600">Track expenses, fuel efficiency, and vehicle health.</p>
          </div>
        </div>
      </div>

 
      <div className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg mb-6">Join thousands of users tracking their vehicle’s maintenance with ease.</p>
        <Link to="/signup">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
            Sign Up Now 🚀
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
