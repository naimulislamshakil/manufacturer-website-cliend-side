import React from "react";

const AddReview = () => {
  return (
    <form className="flex flex-col justify-center w-full items-center">
      <select name="slot" className="select select-bordered w-full max-w-xs">
        <option value="1 star">1 star</option>
        <option value="2 star">2 star</option>
        <option value="3 star">3 star</option>
        <option value="4 star">4 star</option>
        <option value="5 star">5 star</option>
      </select>
    </form>
  );
};

export default AddReview;
