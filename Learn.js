// Learn.js
import React, { useState } from 'react';
import FAQ from './FAQ';
import LeadersAndActs from './LeadersAndActs'; // Updated import
import Webinar from './Webinar';
import './Learn.css';

function Learn() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Handle component selection when an option is clicked
  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="learn-container">
      <div className="learn-dropdown">
        <button className="learn-btn">
          Learn
        </button>

        <div className="learn-dropdown-content">
          <a
            href="#"
            className="learn-link"
            onClick={() => handleComponentSelect('faq')}
          >
            FAQ
          </a>
          <a
            href="#"
            className="learn-link"
            onClick={() => handleComponentSelect('references')}
          >
            References
          </a>
          <a
            href="#"
            className="learn-link"
            onClick={() => handleComponentSelect('webinar')}
          >
            Webinar
          </a>
        </div>
      </div>

      {/* Render the selected component below the dropdown */}
      {selectedComponent === 'faq' && <FAQ />}
      {selectedComponent === 'leaders-acts' && <LeadersAndActs />}
      {selectedComponent === 'webinar' && <Webinar />}
    </div>
  );
}

export default Learn;
