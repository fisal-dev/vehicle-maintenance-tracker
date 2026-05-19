import React from "react";

const NotificationsPage = () => {
  const notifications = [
    { id: 1, message: "Oil change due for Toyota Corolla on 20th Feb 2025.", type: "warning" },
    { id: 2, message: "Your vehicle insurance expires in 5 days!", type: "alert" },
    { id: 3, message: "Tire rotation scheduled for Honda Civic next week.", type: "info" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {notifications.length === 0 ? (
          <p className="text-gray-600">No new notifications.</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id} className={`p-4 mb-2 rounded-md ${
                notification.type === "alert" ? "bg-red-100 text-red-700" :
                notification.type === "warning" ? "bg-yellow-100 text-yellow-700" :
                "bg-blue-100 text-blue-700"
              }`}>
                {notification.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
