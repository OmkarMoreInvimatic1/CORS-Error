import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import "./FilterBar.css";

export default function FilterBar() {
  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection"
    }
  ]);
  const [showPicker, setShowPicker] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB");
  };

  return (
    <div className="filter-bar">
      <input type="text" placeholder="Travel Destination" />

      <div className="date-picker-wrapper">
        <div
          className="date-picker-input"
          onClick={() => setShowPicker(!showPicker)}
        >
          {range[0].startDate && range[0].endDate
            ? `${formatDate(range[0].startDate)} - ${formatDate(range[0].endDate)}`
            : "Select date range"}
        </div>

        {showPicker && (
          <div className="date-picker-popup">
            <DateRangePicker
              onChange={(item) => setRange([item.selection])}
              ranges={range}
              moveRangeOnFirstSelection={false}
            />
          </div>
        )}
      </div>

      <button onClick={() => console.log(range)}>Search</button>
    </div>
  );
}
