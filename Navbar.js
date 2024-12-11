import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQ from './FAQ'; // Import FAQ component
import LeadersAndActs from './LeadersAndActs'; // Import LeadersAndActs component
import Webinar from './Webinar'; // Import Webinar component
import { FaBell } from 'react-icons/fa'; // Import FontAwesome bell icon

const Navbar = ({ userType, onLogout }) => {
  const [isRtiDropdownOpen, setIsRtiDropdownOpen] = useState(false); // RTI dropdown state
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false); // Learn dropdown state
  const [notifications, setNotifications] = useState(5); // Example: Set notification count
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove authentication token
    navigate('/'); // Redirect to home page
    onLogout(); // Update parent component state
  };

  // Toggle RTI dropdown
  const toggleRtiDropdown = () => {
    setIsRtiDropdownOpen(!isRtiDropdownOpen);
  };

  // Toggle Learn dropdown
  const toggleLearnDropdown = () => {
    setIsLearnDropdownOpen(!isLearnDropdownOpen);
  };

  // Handle notifications
  const handleNotificationClick = () => {
    setNotifications(0); // Clear notification count
    navigate('/notifications'); // Redirect to notifications page
  };

  return (
    <nav className="navbar">
      <ul>
        {/* Admin Navbar Options */}
        {userType === 'admin' ? (
          <>
            <li><a href="/add-user">Add User</a></li>
            <li><a href="/delete-user">Delete User</a></li>
            <li><a href="/filter-user">Filter User</a></li>
          </>
        ) : userType === 'expert' ? (
          <>
            {/* Expert Navbar Options */}
            <li><a href="/add-details">UserDetails</a></li>
            <li><a href="/update-details">Update Details</a></li>
            <li><a href="/expert-details">Expert Details</a></li>
          </>
        ) : (
          <>
            {/* Regular User Navbar Options */}
            <li><a href="/home">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/indiacode" target="_blank" rel="noopener noreferrer">India Code</a></li>
            <li><a href="/map">Map</a></li>
            <li><a href="/expert-details">ExpertDetails</a></li>
            <li><a href="/pay">Contibutions</a></li>

            {/* RTI Dropdown */}
            <li className="dropdown">
              <button className="dropdown-btn" onClick={toggleRtiDropdown}>
                RTI
              </button>
              {isRtiDropdownOpen && (
                <div className="dropdown-content">
                  <ul>
                    <li><a href="/preamble">Preamble</a></li>
                    <li><a href="/fundamental-rights">Fundamental Rights</a></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Learn Dropdown */}
            <li className="dropdown">
              <button className="dropdown-btn" onClick={toggleLearnDropdown}>
                Learn
              </button>
              {isLearnDropdownOpen && (
                <div className="dropdown-content">
                  <ul>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/webinar">Webinar</a></li>
                    <li><a href="/leaders-acts">Leaders and Acts</a></li>
                  </ul>
                </div>
              )}
            </li>
          </>
        )}

        {/* Notifications */}
        <li className="notification">
          <button onClick={handleNotificationClick} className="notification-btn">
            <FaBell />
            {notifications > 0 && (
              <span className="notification-badge">{notifications}</span>
            )}
          </button>
        </li>

        {/* Logout Button */}
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
