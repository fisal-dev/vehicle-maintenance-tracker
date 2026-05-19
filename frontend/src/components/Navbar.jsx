import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold font-serif text-black">
          🚗 Vehicle Maintenance Tracker
        </h1>

        <div className="hidden md:flex space-x-6 font-mono text-xl font-semibold">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/vehicles" className="nav-link">Vehicles</Link>
          <Link to="/maintenance-records" className="nav-link">Maintenance</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-md py-4">
          <div className="flex flex-col space-y-4 text-center">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/dashboard" className="nav-link" onClick={() => setIsOpen(false)}>Dashboard</Link>
            <Link to="/vehicles" className="nav-link" onClick={() => setIsOpen(false)}>Vehicles</Link>
            <Link to="/reports" className="nav-link" onClick={() => setIsOpen(false)}>Reports</Link>
            <Link to="/profile" className="nav-link" onClick={() => setIsOpen(false)}>Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
