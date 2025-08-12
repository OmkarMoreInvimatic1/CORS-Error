import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/DashBoard";
import "./App.css"; // Ensure you have an App.css for global layout

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideBar />
        {/* This div will contain your main content and should take the remaining width */}
        <div style={{
          marginLeft: "220px", // This should match the width of your sidebar
          flexGrow: 1, // Allows this div to take up all available space
          width: "calc(100% - 220px)" // Explicitly set width to remaining space
        }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes for other pages here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;