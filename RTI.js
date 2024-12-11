// src/components/RTI.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RTI.css';

const RTI = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);  // Toggle dropdown visibility
  };

  return (
    <div className="rti-container">
      {/* RTI Dropdown Button */}
      <button className="rti-dropdown-button" onClick={toggleDropdown}>
        RTI
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="rti-dropdown-menu">
          <ul>
            <li>
              <Link to="/preamble">Preamble</Link>
            </li>
            <li>
              <Link to="/fundamental-rights">Fundamental Rights</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RTI;
