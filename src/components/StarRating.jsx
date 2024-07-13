import React from "react";
import Star from "./Star";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const starArray = Array.from({ length: totalStars }, (v, i) => i < rating);
  return (
    <div className="flex gap-1">
      {starArray.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
};

export default StarRating;
