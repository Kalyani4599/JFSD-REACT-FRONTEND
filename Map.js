// src/components/IndianMap.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Inline styles for the map container and centering it
const mapContainerWrapperStyle = {
  display: 'flex',               // Use flexbox for centering
  justifyContent: 'center',      // Center horizontally
  alignItems: 'center',          // Center vertically
  height: '100vh',               // Ensure it takes up the full viewport height
  backgroundColor: 'white',      // Set background to white
  flexDirection: 'column',       // Stack the map and button vertically
};

const mapContainerStyle = {
  width: '80%',    // Adjust width as needed
  height: '60%',   // Adjust height as needed
};

const MoreButtonStyle = {
  backgroundColor: 'green', // Green background for the button
  color: 'white',
  padding: '12px 2px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
};

const IndianMap = () => {
  // Use the navigate function from react-router-dom to redirect
  const navigate = useNavigate();

  // Set the center of the map (India's approximate center)
  const center = [20.5937, 78.9629]; // Latitude and Longitude for India
  const zoomLevel = 5; // Adjust zoom level for country-wide view

  // Define bounds for India to restrict panning (optional)
  const bounds = [
    [6.4623, 68.1260],  // South-west corner (Lat, Long)
    [37.0902, 97.4160], // North-east corner (Lat, Long)
  ];

  return (
    <div style={mapContainerWrapperStyle}>
      {/* Map Container */}
      <MapContainer
        center={center}
        zoom={zoomLevel}
        style={mapContainerStyle}
        maxBounds={bounds}  // Restrict panning within India
        maxBoundsViscosity={1.0}  // Make sure bounds are strictly enforced
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Example Marker (Delhi) */}
        <Marker position={[28.6139, 77.2090]} icon={new L.Icon.Default()}>
          <Popup>
            New Delhi - Capital of India
          </Popup>
        </Marker>
      </MapContainer>

      {/* More Button - Redirect to another page */}
      <button 
        style={MoreButtonStyle} 
        onClick={() => navigate('/state-details')}> {/* Redirect to the new StateDetails page */}
        More
      </button>
    </div>
  );
};

export default IndianMap;
