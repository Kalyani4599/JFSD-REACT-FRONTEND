import React, { useState } from "react";

const AddDetails = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert("Submitted successfully!"); // Popup message
    setName(""); // Clear the form after submission
    setMessage("");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Add Details</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name Input */}
          <label style={styles.label}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </label>

          {/* Message Input */}
          <label style={styles.label}>
            New Updation:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.textarea}
              rows="4"
              required
            ></textarea>
          </label>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Updated inline styles for centering the form
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f5f5f5", // Light background color
    margin: "0", // Remove default margin
  },
  container: {
    backgroundColor: "white", // White background for the form
    color: "#333", // Dark text color
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for form card
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#4CAF50", // Green accent for the heading
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Space between form elements
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    backgroundColor: "#4CAF50", // Green button
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Add hover and focus effects for interactivity
styles.input[':focus'] = styles.textarea[':focus'] = {
  borderColor: "#4CAF50", // Green focus border
};

styles.button[':hover'] = {
  backgroundColor: "#45a049", // Darker green on hover
};

export default AddDetails;
