import React, { useState } from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-gray-900 text-white text-center py-6 w-full mt-auto">
      <h2 className="text-3xl font-semibold font-serif">Vehicle Maintenance Tracker</h2>
      <p className="font-serif text-lg">© 2025 All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6 font-mono text-xl underline">
      <Link to="/settings" className="nav-link">Settings</Link>
      <Link to="/report-complaint" className="nav-link">Report</Link>
      <Link to="/about" className="nav-link">About</Link>
      </div>
      <div className="mt-4 flex justify-center space-x-4 text-2xl">
        <Link to="https://www.facebook.com/" className="nav-link"><i className="fab fa-facebook"></i></Link>
        <Link to="https://x.com/?lang=en" className="nav-link"><i className="fab fa-twitter"></i></Link>
        <Link to="https://in.linkedin.com/" className="nav-link"><i className="fab fa-linkedin"></i></Link>
      </div>
    </footer>
  );
};

export default Footer;
