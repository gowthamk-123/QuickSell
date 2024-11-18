// Importing React library for component creation
import React from "react";

// Importing styles for Avatar component
import "../styles/Layout.css";

// Array of colors for avatar background
const avatarColors = ["green", "blue", "red", "orange", "purple"];

// Array of colors for availability indicator
const availabilityColors = ["#ccc", "#2ecc71"];

// Avatar functional component
const Layout = ({ initial, id, available = false }) => {
  const availabilityColor = available ? availabilityColors[1] : availabilityColors[0];

  return (
    <div className="layout" style={{ backgroundColor: avatarColors[id % 5], marginRight: "12px" }}>
      <span style={{ fontSize: "smaller" }}>{initial}</span>
      <div
        className="indicator"
        style={{ backgroundColor: availabilityColor }}
      ></div>
    </div>
  );
};

// Exporting Layout component as the default export
export default Layout;