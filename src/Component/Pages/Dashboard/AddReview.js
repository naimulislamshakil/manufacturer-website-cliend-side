import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import Rating from "../Rating/Rating";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [star, setStar] = useState(0);
  const [text, setText] = useState("");

  const hendelPost = (event) => {
    event.preventDefault();
    const name = user?.displayName;
    const review = {
      name: name,
      star: star,
      text: text,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks For Your Review");
        }
      });
    event.target.reset();
  };
  return (
    <div>
      <h1 className="text-center text-xl text-accent font-bold py-6">
        Post A Review
      </h1>
      <form
        onSubmit={hendelPost}
        className="flex flex-col justify-center w-full items-center"
      >
        <select
          onBlur={(event) => setStar(event.target.value)}
          name="star"
          className="select select-bordered w-full max-w-xs"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          name="message"
          onBlur={(event) => setText(event.target.value)}
          className="w-2/4 p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
          placeholder="Enter your message"
        ></textarea>
        <input
          className="btn btn-primary w-1/4 mt-4 bg-gradient-to-r from-secondary to-primary outline-none text-white"
          type="submit"
          value="POST"
        ></input>
      </form>
    </div>
  );
};

export default AddReview;
