import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "./Review.css";

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

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div className="ml-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard key={review._id} review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Review;
