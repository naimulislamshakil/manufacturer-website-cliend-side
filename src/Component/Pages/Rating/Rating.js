import React from "react";

const Rating = ({ i, num }) => {
  return (
    <input
      type="radio"
      name="rating-6"
      class="mask mask-star-2  bg-orange-400"
      checked={i < num}
    />
  );
};

export default Rating;
