import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-5">
      <div className="divider"></div>
      <div className="text-center font-bold text-accent text-2xl">
        Our Client Review
      </div>
      <div className="divider"></div>
      <div className="ml-3 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
