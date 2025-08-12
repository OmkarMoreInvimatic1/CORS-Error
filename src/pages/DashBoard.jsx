import React from "react";
import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  return (
    <div>
      <FilterBar />
      <div style={{ padding: "20px" }}>
        <h2>Dashboard</h2>
        <p>Your AI travel itinerary and packing recommendations will appear here.</p>
      </div>
    </div>
  );
}
