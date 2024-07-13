import React from "react";

const Star = ({ filled }) => {
  return (
    <span>
      {filled ? (
        <img src="/star.svg" className="w-5" alt="filled star" />
      ) : (
        <img src="/starempty.svg" className="w-5" alt="empty star" />
      )}
    </span>
  );
};

export default Star;
