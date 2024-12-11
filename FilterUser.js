import React, { useState } from "react";

const FilterUser = () => {
  const users = [
    { id: 1, name: "Haripriya", email: "haripriya@example.com" },
    { id: 2, name: "Priya", email: "priya@example.com" },
    { id: 3, name: "Latha", email: "latha@example.com" },
    { id: 4, name: "Chaithu", email: "chaithu@example.com" },
    { id: 5, name: "Pragna", email: "pragna@example.com" },
    { id: 6, name: "Ananya", email: "ananya@example.com" },
    { id: 7, name: "Rajesh", email: "rajesh@example.com" },
    { id: 8, name: "Sanya", email: "sanya@example.com" },
    { id: 9, name: "Vikram", email: "vikram@example.com" },
    { id: 10, name: "Ravi", email: "ravi@example.com" },
    { id: 11, name: "Nisha", email: "nisha@example.com" },
    { id: 12, name: "Kiran", email: "kiran@example.com" },
    { id: 13, name: "Arjun", email: "arjun@example.com" },
    { id: 14, name: "Deepa", email: "deepa@example.com" },
    { id: 15, name: "Madhavi", email: "madhavi@example.com" },
    { id: 16, name: "Harish", email: "harish@example.com" },
    { id: 17, name: "Suman", email: "suman@example.com" },
    { id: 18, name: "Aarav", email: "aarav@example.com" },
    { id: 19, name: "Sneha", email: "sneha@example.com" },
    { id: 20, name: "Krishna", email: "krishna@example.com" },
  ];
  
  const [searchId, setSearchId] = useState("");
  const [filteredUser, setFilteredUser] = useState(null);

  const handleSearch = () => {
    const user = users.find((user) => user.id === parseInt(searchId));
    setFilteredUser(user || null);
  };

  return (
    <div className="filter-user-container">
      <h1>Filter User by ID</h1>
      <div className="search-input">
        <input
          type="number"
          placeholder="Enter User ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredUser ? (
        <div className="user-info">
          <h2>User Found:</h2>
          <p><strong>ID:</strong> {filteredUser.id}</p>
          <p><strong>Name:</strong> {filteredUser.name}</p>
          <p><strong>Email:</strong> {filteredUser.email}</p>
        </div>
      ) : (
        searchId && <p>No user found with ID {searchId}</p>
      )}

      <style>
        {`
          /* General Styles */
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }

          .filter-user-container {
            max-width: 1000px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }

          h1 {
            text-align: center;
            color: #333;
          }

          .search-input {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }

          .search-input input {
            padding: 10px;
            width: 70%;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
            font-size: 16px;
          }

          .search-input button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          .search-input button:hover {
            background-color: #45a049;
          }

          .user-info {
            margin-top: 200px;
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 6px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .user-info p {
            font-size: 18px;
            color: #333;
          }

          .user-info p strong {
            font-weight: bold;
          }

          /* Mobile Responsiveness */
          @media (max-width: 600px) {
            .search-input input {
              width: 100%;
              margin-right: 0;
              margin-bottom: 10px;
            }

            .search-input button {
              width: 100%;
            }

            .filter-user-container {
              padding: 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FilterUser;
