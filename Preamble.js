// src/components/Preamble.js
import React from 'react';
import './Preamble.css';
import indiaFlag from '../assets/prem1.png'; // Import the image

const Preamble = () => {
  return (
    <div className="preamble-container">
      <h1>Preamble of the Indian Constitution</h1>
      <img src={indiaFlag} alt="Indian Flag" className="preamble-image" /> {/* Add image */}
      <p>
        "We, the people of India, having solemnly resolved to constitute India into a Sovereign,
        Socialist, Secular, Democratic Republic and to secure to all its citizens:
        Justice, social, economic, and political;
        Liberty of thought, expression, belief, faith, and worship;
        Equality of status and of opportunity; and to promote among them all;
        Fraternity assuring the dignity of the individual and the unity and integrity of the Nation."
      </p>
    </div>
  );
};

export default Preamble;

