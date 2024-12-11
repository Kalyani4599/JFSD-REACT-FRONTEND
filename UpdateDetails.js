import React, { useState } from "react";

const UpdateDetails = () => {
  // Hardcoded list of details (name and message pairs)
  const [detailsList, setDetailsList] = useState([
    { name: "Haripriya", message: "Article 21-Right to privacy" },
    { name: "Kalyani", message: "Article 21A (Right to Education)" },
    { name: "Vasavi", message: "Article 15(6) (Reservation for Economically Weaker Sections)" },
    { name: "Bhavya", message: "Article 370 (Jammu and Kashmir)" },
    { name: "Gayathri", message: "Article 64A (Special Powers of the President)" },
    { name: "Shrijitha", message: "Article 16(6) (Reservation in Public Employment)" }
  ]);

  // State for tracking the item being edited
  const [editIndex, setEditIndex] = useState(null);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  // Handle delete action
  const handleDelete = (index) => {
    const updatedList = detailsList.filter((_, idx) => idx !== index);
    setDetailsList(updatedList);
  };

  // Handle edit action - set the current values to input fields
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewName(detailsList[index].name);
    setNewMessage(detailsList[index].message);
  };

  // Handle save after editing
  const handleSave = () => {
    const updatedList = detailsList.map((detail, index) => 
      index === editIndex 
        ? { name: newName, message: newMessage } 
        : detail
    );
    setDetailsList(updatedList);
    setEditIndex(null);  // Reset the edit state
    setNewName("");
    setNewMessage("");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>View Details</h2>
        {detailsList.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.tableHeaderItem}>S.No</th>
                <th style={styles.tableHeaderItem}>Name</th>
                <th style={styles.tableHeaderItem}>Message</th>
                <th style={styles.tableHeaderItem}>Action</th>
              </tr>
            </thead>
            <tbody>
              {detailsList.map((detail, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>{detail.name}</td>
                  <td style={styles.tableCell}>{detail.message}</td>
                  <td style={styles.tableCell}>
                    <button 
                      onClick={() => handleEdit(index)} 
                      style={styles.editButton}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(index)} 
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.noDetails}>No details available.</p>
        )}
        
        {editIndex !== null && (
          <div style={styles.editForm}>
            <h3>Edit Details</h3>
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              style={styles.input} 
              placeholder="Name"
            />
            <textarea 
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)} 
              style={styles.textarea} 
              placeholder="Message"
            />
            <div>
              <button onClick={handleSave} style={styles.saveButton}>Save</button>
              <button 
                onClick={() => setEditIndex(null)} 
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
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
    maxWidth: "900px", // Set maximum width to 900px for a wider view
    width: "100%", // Ensure the container takes the full width up to maxWidth
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow for a soft 3D effect
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#4CAF50", // Green color for heading
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    backgroundColor: "#4CAF50", // Green background for table header
    color: "white",
  },
  tableHeaderItem: {
    padding: "12px",
    fontSize: "18px",
    textAlign: "left",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "12px",
    fontSize: "16px",
    textAlign: "left",
  },
  editButton: {
    backgroundColor: "#FF9800", // Orange color for edit button
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    marginRight: "10px",
    fontSize: "14px",
  },
  deleteButton: {
    backgroundColor: "#f44336", // Red color for delete button
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "14px",
  },
  editForm: {
    marginTop: "20px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    height: "100px",
  },
  saveButton: {
    backgroundColor: "#4CAF50", // Green for save button
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginRight: "10px",
  },
  cancelButton: {
    backgroundColor: "#FF6347", // Red for cancel button
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  noDetails: {
    fontSize: "18px",
    color: "#FF6347", // Red color to show "No details available" message
  },
};

export default UpdateDetails;
