import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    upi: "",
  });

  const [isUPIValid, setIsUPIValid] = useState(false); // State to track UPI validity
  const [isAccepted, setIsAccepted] = useState(false); // State to track if "Accept" is clicked

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "upi") {
      setIsUPIValid(value.endsWith("@ybl") || value.endsWith("@upi")); // Validate UPI dynamically
    }
  };

  const handleAccept = (e) => {
    e.preventDefault();
    setIsAccepted(true); // Show "Submitted Details" button
  };

  const handleShowDetails = () => {
    alert(
      `Submitted Details:\nName: ${formData.name}\nEmail: ${formData.email}\nUPI ID: ${formData.upi}`
    );
  };

  return (
    <div className="payment-container">
      <form className="payment-form">
        <h2>Payment Form</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="upi">UPI Name:</label>
          <input
            type="text"
            id="upi"
            name="upi"
            value={formData.upi}
            onChange={handleChange}
            required
            placeholder="Enter your UPI ID (e.g., example@ybl)"
          />
        </div>

        {/* Show "Accept" button if UPI is valid */}
        {isUPIValid && !isAccepted && (
          <button type="button" className="submit-btn" onClick={handleAccept}>
            Accept
          </button>
        )}

        {/* Show "Submitted Details" button after "Accept" is clicked */}
        {isAccepted && (
          <button type="button" className="submit-btn" onClick={handleShowDetails}>
            Submitted Details
          </button>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
