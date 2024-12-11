import React, { useState } from "react";
import "./Webinar.css";

const Webinar = () => {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [registeredWebinars, setRegisteredWebinars] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false); // To show the registration success popup

  const webinars = [
    { id: 1, title: "Constitutional Law Webinar", date: "2024-10-05", time: "10:00 AM" },
    { id: 2, title: "Fundamental Rights Webinar", date: "2024-10-12", time: "2:00 PM" },
    { id: 3, title: "Preamble Insights Webinar", date: "2024-10-19", time: "11:30 AM" },
    { id: 4, title: "Judicial Review Webinar", date: "2024-10-26", time: "3:00 PM" },
    { id: 5, title: "Public Interest Litigation Webinar", date: "2024-11-02", time: "1:00 PM" },
    { id: 6, title: "Women’s Rights Webinar", date: "2024-11-09", time: "9:00 AM" },
    { id: 7, title: "Children’s Rights Webinar", date: "2024-11-16", time: "4:00 PM" },
    { id: 8, title: "Environmental Law Webinar", date: "2024-11-23", time: "10:00 AM" },
    { id: 9, title: "Directive Principles Webinar", date: "2024-11-30", time: "2:30 PM" },
    { id: 10, title: "Constitutional Amendments Webinar", date: "2024-12-07", time: "11:00 AM" },
    { id: 11, title: "Right to Education Webinar", date: "2024-12-14", time: "5:00 PM" },
    { id: 12, title: "Freedom of Speech Webinar", date: "2024-12-21", time: "3:30 PM" },
    { id: 13, title: "Fundamental Duties Webinar", date: "2024-12-28", time: "12:00 PM" },
    { id: 14, title: "Human Rights Law Webinar", date: "2025-01-04", time: "10:00 AM" },
    { id: 15, title: "Right to Privacy Webinar", date: "2025-01-11", time: "9:30 AM" },
  ];

  const handleWebinarClick = (webinar) => {
    setSelectedWebinar(webinar);
  };

  const handleRegister = () => {
    if (selectedWebinar && !registeredWebinars.includes(selectedWebinar)) {
      setRegisteredWebinars([...registeredWebinars, selectedWebinar]);
      setShowRegisterPopup(true); // Show success popup after registration
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="webinar-container">
      <h2>Available Webinars</h2>
      <ul className="webinar-list">
        {webinars.map((webinar) => (
          <li
            key={webinar.id}
            onClick={() => handleWebinarClick(webinar)}
            className="webinar-item"
          >
            {webinar.title} - {webinar.date} at {webinar.time}
          </li>
        ))}
      </ul>

      {selectedWebinar && (
        <div className="webinar-details">
          <h3>{selectedWebinar.title}</h3>
          <p>Date: {selectedWebinar.date}</p>
          <p>Time: {selectedWebinar.time}</p>
          <button onClick={handleRegister} className="register-btn">
            Register
          </button>
        </div>
      )}

      {/* Registration Success Popup */}
      {showRegisterPopup && (
        <div className="popup">
          <p>Successfully registered for {selectedWebinar.title}!</p>
        </div>
      )}

      {/* Registered Webinars Notification Dropdown */}
      {registeredWebinars.length > 0 && showNotifications && (
        <div className="notification-dropdown">
          <h4>Registered Webinars</h4>
          <ul>
            {registeredWebinars.map((webinar, index) => (
              <li key={index}>
                {webinar.title} - {webinar.date} at {webinar.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Webinar;
