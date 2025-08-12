import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-header">
        <h3>Navigation</h3>
      </div> */}
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="/dashboard">Dashboard</a>
          <a href= "/login"> Log out</a>
        </li>
        {/* Add more menu items here as you create new pages */}
      </ul>
    </div>
  );
}