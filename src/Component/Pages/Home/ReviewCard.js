import React from "react";
import Rating from "../Rating/Rating";

const ReviewCard = ({ review }) => {
  const { name, star, text } = review;
  const rating = [1, 2, 3, 4, 5];
  const num = star;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div class="rating rating-sm">
          {rating.map((r, i) => (
            <Rating i={i} num={num}></Rating>
          ))}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
