import React from "react";

const About = () => {
  return (
    <div className="about">

    <div className="relative min-h-screen flex flex-col items-center justify-center">

      <div className="relative z-10 bg-white/40 backdrop-blur-lg p-10 rounded-2xl shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-black-900 mb-4 font-serif">About Our App</h1>
        <p className="text-lg text-black-700 font-poppins">
          The <span className="font-semibold font-serif text-black-800">Vehicle Maintenance Tracker</span> helps you manage 
          your vehicle’s health efficiently. Track maintenance records, fuel consumption, and expenses 
          all in one place.
        </p>


        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-xl font-semibold font-serif text-gray-800 pb-3">📅 Maintenance Reminders</h2>
            <p className="text-gray-800 font-poppins">Never miss an oil change or tire rotation again.</p>
          </div>
          <div className="p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-xl font-semibold font-serif text-gray-800 pb-3">⛽ Fuel Tracking</h2>
            <p className="text-gray-800 font-poppins">Monitor fuel efficiency and costs over time.</p>
          </div>
          <div className="p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-xl font-semibold font-serif text-gray-800 pb-3">💰 Expense Reports</h2>
            <p className="text-gray-800 font-poppins">Analyze spending and optimize vehicle maintenance costs.</p>
          </div>
          <div className="p-4 bg-white/50 backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-xl font-semibold font-serif text-gray-800 pb-3">🔔 Smart Alerts</h2>
            <p className="text-gray-800 font-poppins">Receive notifications for upcoming maintenance tasks.</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default About;
