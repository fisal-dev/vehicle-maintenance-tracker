import React, { useState } from "react";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    reminderFrequency: "Weekly",
    preferredServiceProvider: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Preferences</h2>

          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">Enable Notifications</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Reminder Frequency</label>
            <select
              name="reminderFrequency"
              value={settings.reminderFrequency}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Preferred Service Provider</label>
            <input
              type="text"
              name="preferredServiceProvider"
              value={settings.preferredServiceProvider}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter service provider name"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
