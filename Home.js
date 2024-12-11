// src/components/Home.js
import React from 'react';
import './Home.css';
import pic5 from '../assets/pic5.jpg'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the Indian Constitution Awareness Platform</h1>
        <p>
          Our mission is to educate citizens about their rights, duties, and the framework of the Indian Constitution. 
          Discover interactive resources, engaging discussions, and valuable insights to empower yourself and promote 
          awareness of the Constitution.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={pic5} alt="Indian Constitution" className="pic5" />
      </div>
    </div>
  );
};

export default Home;
