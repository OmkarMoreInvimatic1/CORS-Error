import React from "react";

const suggestions = [
  {
    name: "Goa",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Goa_beach_scene.jpg",
    itinerary: [
      "Day 1: Relax at Calangute Beach & enjoy water sports",
      "Day 2: Explore Old Goa churches & spice plantations",
      "Day 3: Sunset cruise on the Mandovi River"
    ]
  },
  {
    name: "Manali",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Manali_town%2C_Himachal_Pradesh.jpg",
    itinerary: [
      "Day 1: Visit Hidimba Temple & Mall Road",
      "Day 2: Solang Valley adventure sports",
      "Day 3: Rohtang Pass snow activities"
    ]
  },
  {
    name: "Coimbatore",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Marudhamalai_temple.jpg",
    itinerary: [
      "Day 1: Visit Marudhamalai Temple & VOC Park",
      "Day 2: Explore Kovai Kutralam Falls",
      "Day 3: Shopping & local cuisine tasting"
    ]
  }
];

const Suggestions = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {suggestions.map((place, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "300px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <img
              src={place.img}
              alt={place.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
            <h3>{place.name}</h3>
            <ul>
              {place.itinerary.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
