import React, { useState, useEffect } from 'react';

const SessionTimeout = () => {
  const [inactive, setInactive] = useState(false); // Tracks inactivity state
  const [timer, setTimer] = useState(null); // Stores the inactivity timeout timer
  const timeoutDuration = 5 * 1000; // 5 seconds inactivity timeout

  // Function to handle logout
  const logout = () => {
    setInactive(true); // Set inactive state to true
    alert("You have been logged out due to inactivity.");
    // Redirect or reset app state as needed after logout
    window.location.reload(); // Reloads the app or resets session
  };

  // Reset the inactivity timer on user activity
  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer); // Clear the previous timer
    }
    const newTimer = setTimeout(logout, timeoutDuration); // Set a new timer
    setTimer(newTimer); // Store the new timer in state
    setInactive(false); // Reset inactivity state
  };

  // Add event listeners for user activity and setup timer
  useEffect(() => {
    // Listen for user activity (mouse movement, clicks, key presses)
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);

    // Start the inactivity timer when the component mounts
    const initialTimer = setTimeout(logout, timeoutDuration); // Initial timer
    setTimer(initialTimer);

    // Cleanup: Remove event listeners and clear timers when unmounting
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      clearTimeout(initialTimer);
    };
  }, []); // Run once when component mounts

  return (
    <div>
      <h1>{inactive ? "You are logged out." : "You are active."}</h1>
      <p>Move your mouse or press any key to stay active.</p>
    </div>
  );
};

export default SessionTimeout;
