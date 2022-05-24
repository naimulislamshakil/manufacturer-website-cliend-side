import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";

const AddReview = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1 className="text-center text-xl text-accent font-bold py-6">
        Post A Review
      </h1>
      <form className="flex flex-col justify-center w-full items-center">
        <select name="star" className="select select-bordered w-full max-w-xs">
          <option value="1 star">1 star</option>
          <option value="2 star">2 star</option>
          <option value="3 star">3 star</option>
          <option value="4 star">4 star</option>
          <option value="5 star">5 star</option>
        </select>
        <textarea
          name="message"
          className="w-2/4 p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
          placeholder="Enter your message"
        ></textarea>
        <input
          className="btn btn-primary w-1/4 mt-4 bg-gradient-to-r from-secondary to-primary outline-none text-white"
          type="submit"
          value="POST"
        />
      </form>
    </div>
  );
};

export default AddReview;
