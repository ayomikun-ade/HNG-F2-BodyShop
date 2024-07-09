import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title, nav }) => {
  return (
    <div className="mt-6 relative">
      <Link to={nav}>
        <img
          src="/back.svg"
          alt="back button"
          className="absolute -top-9 sm:top-0"
        />
      </Link>
      <h1 className="text-4xl mt-2 font-bold text-center">{title}</h1>
    </div>
  );
};

export default Title;
