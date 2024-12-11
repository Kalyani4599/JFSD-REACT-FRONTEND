import React from "react";

const ExpertDetails = () => {
  // Hardcoded list of details (name and message pairs)
  const detailsList = [
    { name: "Haripriya", message: "Article 21-Right to privacy" },
    { name: "Kalyani", message: "Article 21A (Right to Education)" },
    { name: "Vasavi", message: "Article 15(6) (Reservation for Economically Weaker Sections)" },
    { name: "Bhavya", message: "Article 370 (Jammu and Kashmir)" },
    { name: "Gayathri", message: "Article 64A (Special Powers of the President)" },
    { name: "Shrijitha", message: "Article 16(6) (Reservation in Public Employment)" }
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>View Details</h2>
        {detailsList.length > 0 ? (
          <div style={styles.details}>
            {detailsList.map((detail, index) => (
              <div key={index} style={styles.detailItem}>
                <p><strong>Name:</strong> {detail.name}</p>
                <p><strong>Message:</strong> {detail.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={styles.noDetails}>No details available.</p>
        )}
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f9f9f9", // Light grey background for the entire page
  },
  container: {
    backgroundColor: "#fff", // White background for the content
    color: "#333", // Dark text color
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "800px", // Set maximum width to 800px
    width: "100%", // Ensure the container takes the full width up to maxWidth
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow for a soft 3D effect
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#4CAF50", // Green color for heading
  },
  details: {
    textAlign: "left",
    marginTop: "20px",
  },
  detailItem: {
    fontSize: "18px",
    marginBottom: "20px", // Added more space between each detail item
    borderBottom: "1px solid #ddd", // Optional: Add a separator between entries
    paddingBottom: "10px",
  },
  noDetails: {
    fontSize: "18px",
    color: "#FF6347", // Red color to show "No details available" message
  },
};

export default ExpertDetails;
