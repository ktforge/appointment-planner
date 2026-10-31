import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      {/* the bold style in index.css needs both classes (.tile.tile-title) */}
      <p className="tile tile-title">{name}</p>
      {/* one line for each value left in description (phone, email, or contact, date, time) */}
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
