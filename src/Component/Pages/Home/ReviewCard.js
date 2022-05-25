import React from "react";
import Rating from "../Rating/Rating";

const ReviewCard = ({ review }) => {
  const { name, star, text } = review;
  const rating = [1, 2, 3, 4, 5];
  const num = star;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl my-6">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="rating rating-sm">
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
