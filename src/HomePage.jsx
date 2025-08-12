import SideBar from "./components/SideBar";
import FilterBar from "./components/FilterBar";
import React from "react";
import Suggestions from "./components/suggestions";
const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
        <SideBar />
        {/* This div will contain your main content and should take the remaining width */}
        <div style={{
          marginLeft: "220px", // This should match the width of your sidebar
          flexGrow: 1, // Allows this div to take up all available space
          width: "calc(100% - 220px)" // Explicitly set width to remaining space
        }}>
          <div>
                <FilterBar />
                <div style={{ padding: "20px" }}>
                <h2>Suggestions for your next trip</h2>
                  <Suggestions />
                </div>
              </div>
        </div>
      </div>
  );
};

export default HomePage;