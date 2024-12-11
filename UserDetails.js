import React from "react";

const UserDetails = () => {
  const users = [
    { id: 1, name: "Haripriya", email: "haripriya@example.com" },
    { id: 2, name: "Priya", email: "priya@example.com" },
    { id: 3, name: "Latha", email: "latha@example.com" },
    { id: 4, name: "Chaithu", email: "chaithu@example.com" },
    { id: 5, name: "Pragna", email: "pragna@example.com" },
    { id: 6, name: "Amit", email: "amit@example.com" },
    { id: 7, name: "Ravi", email: "ravi@example.com" },
    { id: 8, name: "Sunita", email: "sunita@example.com" },
    { id: 9, name: "Vijay", email: "vijay@example.com" },
    { id: 10, name: "Sneha", email: "sneha@example.com" },
    { id: 11, name: "Rajesh", email: "rajesh@example.com" },
    { id: 12, name: "Kavya", email: "kavya@example.com" },
    { id: 13, name: "Manoj", email: "manoj@example.com" },
    { id: 14, name: "Neha", email: "neha@example.com" },
    { id: 15, name: "Arun", email: "arun@example.com" },
    { id: 16, name: "Rani", email: "rani@example.com" },
    { id: 17, name: "Sandeep", email: "sandeep@example.com" },
    { id: 18, name: "Deepa", email: "deepa@example.com" },
    { id: 19, name: "Krishna", email: "krishna@example.com" },
    { id: 20, name: "Geetha", email: "geetha@example.com" }
  ];

  return (
    <div>
      <h1>User Details</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          /* General Styles */
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }

          /* Container Styling */
          div {
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

          .user-table th, .user-table td {
            padding: 12px;
            text-align: center;
            border: 1px solid #ddd;
          }

          .user-table th {
            background-color: #4CAF50;
            color: white;
          }

          .user-table tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          .user-table tr:hover {
            background-color: #ddd;
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

export default UserDetails;
