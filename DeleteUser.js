import React, { useState } from "react";

const DeleteUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Haripriya", email: "haripriya@example.com" },
    { id: 2, name: "Priya", email: "priya@example.com" },
    { id: 3, name: "Latha", email: "latha@example.com" },
    { id: 4, name: "Chaithu", email: "chaithu@example.com" },
    { id: 5, name: "Pragna", email: "pragna@example.com" },
    { id: 6, name: "Aarav", email: "aarav@example.com" },
    { id: 7, name: "Ishaan", email: "ishaan@example.com" },
    { id: 8, name: "Saanvi", email: "saanvi@example.com" },
    { id: 9, name: "Aadhya", email: "aadhya@example.com" },
    { id: 10, name: "Vihaan", email: "vihaan@example.com" },
    { id: 11, name: "Ananya", email: "ananya@example.com" },
    { id: 12, name: "Reyansh", email: "reyansh@example.com" },
    { id: 13, name: "Neha", email: "neha@example.com" },
    { id: 14, name: "Rohan", email: "rohan@example.com" },
    { id: 15, name: "Diya", email: "diya@example.com" },
    { id: 16, name: "Shivansh", email: "shivansh@example.com" },
    { id: 17, name: "Meera", email: "meera@example.com" },
    { id: 18, name: "Karthik", email: "karthik@example.com" },
    { id: 19, name: "Simran", email: "simran@example.com" },
    { id: 20, name: "Arjun", email: "arjun@example.com" },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    alert("User deleted successfully.");
  };

  return (
    <div className="delete-user-container">
      <h1>Delete User</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          /* General Styles */
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }

          /* Container Styling */
          .delete-user-container {
            max-width: 8000px;
            margin: 30px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
            color: #333;
          }

          /* Table Styles */
          .user-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          .user-table th,
          .user-table td {
            padding: 12px;
            text-align: center;
            border: 1px solid #ddd;
          }

          .user-table th {
            background-color: #4CAF50;
            color: white;
          }

          .user-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .user-table tr:hover {
            background-color: #ddd;
          }

          /* Delete Button Styles */
          .delete-btn {
            padding: 8px 16px;
            background-color: #ff4d4d;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
          }

          .delete-btn:hover {
            background-color: #f44336;
          }

          /* Mobile Responsiveness */
          @media (max-width: 600px) {
            .user-table {
              font-size: 14px;
            }

            .user-table th, .user-table td {
              padding: 8px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DeleteUser;
