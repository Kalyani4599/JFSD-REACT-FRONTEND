import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import History from "./components/History";
import RTI from "./components/RTI";
import Preamble from "./components/Preamble";
import FundamentalRights from "./components/FundamentalRights";
import IndiaCode from "./components/IndiaCode";
import Map from "./components/Map";
import StateDetails from "./components/StateDetails";
import Learn from "./components/Learn";
import Webinar from "./components/Webinar";
import FAQ from "./components/FAQ";
import LeadersAndActs from "./components/LeadersAndActs";
import AddDetails from "./components/AddDetails";
import UpdateDetails from "./components/UpdateDetails";
import ExpertDetails from "./components/ExpertDetails";
import UserDetails from "./components/UserDetails";
import DeleteUser from "./components/DeleteUser";
import FilterUser from "./components/FilterUser";
import Navbar from "./components/Navbar";
import Payment from "./components/PaymentForm"; // Import the Payment component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [userType, setUserType] = useState(localStorage.getItem("userType") || null);

  // Handle login
  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userType", type);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userType");
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setIsAuthenticated(true);
      setUserType(localStorage.getItem("userType"));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Show Navbar only when authenticated */}
        {isAuthenticated && <Navbar userType={userType} onLogout={handleLogout} />}

        <Routes>
          {/* Default route - Login */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace /> // Redirect to Home if already authenticated
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/history" element={<History />} />
              <Route path="/RTI" element={<RTI />} />
              <Route path="/preamble" element={<Preamble />} />
              <Route path="/fundamental-rights" element={<FundamentalRights />} />
              <Route path="/indiacode" element={<IndiaCode />} />
              <Route path="/map" element={<Map />} />
              <Route path="/state-details" element={<StateDetails />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/webinar" element={<Webinar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/leaders-acts" element={<LeadersAndActs />} />
              <Route path="/add-details" element={<AddDetails />} />
              <Route path="/expert-details" element={<ExpertDetails />} />
              <Route path="/update-details" element={<UpdateDetails />} />
              <Route path="/add-user" element={<UserDetails />} />
              <Route path="/delete-user" element={<DeleteUser />} />
              <Route path="/filter-user" element={<FilterUser />} />
              <Route path="/pay" element={<Payment />} /> {/* Add Payment Route */}
            </>
          ) : (
            // Redirect all unauthenticated requests to login
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
