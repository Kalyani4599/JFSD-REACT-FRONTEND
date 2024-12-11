import React from 'react';

const IndiaCode = () => {
  const handleVisitIndiaCode = () => {
    // Redirect to the external India Code website
    window.location.href = "https://www.indiacode.nic.in";
  };

  // Inline CSS styles for the component
  const styles = {
    // Updated to center the container both horizontally and vertically
    container: {
      backgroundColor: "white", // White background
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for a subtle 3D effect
      maxWidth: "4000px", // Set a maximum width for the content
      margin: "0 auto", // Horizontally center the container
      height: "100vh", // Full viewport height
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Vertically center the container
      alignItems: "center", // Align content to the center horizontally
    },
    button: {
      backgroundColor: "#4CAF50", // Green color for the button
      color: "white",
      padding: "12px 2px",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      marginTop: "2px",
    },
    buttonHover: {
      backgroundColor: "#45a049", // Darker green on hover
    },
    heading: {
      fontSize: "28px",
      color: "#333",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "18px",
      color: "#555",
      marginBottom: "20px",
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the India Code Page</h1>
      <p style={styles.paragraph}>
        This page provides a brief introduction to the <strong>India Code</strong> website, 
        which offers a comprehensive repository of Indian laws.
      </p>
      <p style={styles.paragraph}>
        To explore the laws of India, click the button below to visit the official India Code website.
      </p>
      <button 
        style={styles.button} 
        onClick={handleVisitIndiaCode}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} 
        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Visit India Code Website
      </button>
    </div>
  );
};

export default IndiaCode;
