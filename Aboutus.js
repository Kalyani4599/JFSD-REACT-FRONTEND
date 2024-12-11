import React from 'react';
import './Aboutus.css'; // Importing the CSS file

// Images imported from the local system
import image1 from '../assets/image1.jpeg'; // Add your local image path
import image2 from '../assets/image2.jpeg'; // Add your local image path
import image3 from '../assets/image3.jpeg'; // Add your local image path

export default function AboutUs() {
  return (
    <div className="aboutus-container">

      <div className="aboutus-content">
        <h1>About Us</h1>
        <div className="aboutus-images">
          {/* Image 1 with description */}
          <div className="aboutus-image-box">
            <img src={image1} alt="Team Member 1" className="aboutus-image" />
            <p>Team Member 1: Team Lead</p>
          </div>

          {/* Image 2 with description */}
          <div className="aboutus-image-box">
            <img src={image2} alt="Team Member 2" className="aboutus-image" />
            <p>Team Member 2: Team Member and Developer</p>
          </div>

          {/* Image 3 with description */}
          <div className="aboutus-image-box">
            <img src={image3} alt="Team Member 3" className="aboutus-image" />
            <p>Team Member 3: Team Member and Developer </p>
          </div>
        </div>
      </div>
    </div>
  );
}
