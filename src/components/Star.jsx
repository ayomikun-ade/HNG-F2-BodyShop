import React from "react";

const Star = ({ filled }) => {
  return (
    <span>
      {filles ? <img src="/star.scg" alt="" /> : <img src="/starempty.svg" />}
    </span>
  );
};

export default Star;
