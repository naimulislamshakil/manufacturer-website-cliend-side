import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
AOS.init();

const Product = ({ product }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    image,
    animation,
    price,
    available_quantity,
    minimum_order,
    short_description,
  } = product;

  const handelRedirectPurchasePage = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div data-aos={animation}>
      <div className="card card-compact w-96 bg-base-100 transition ease-in-out delay-150  hover:translate-y-6 ml-2 my-9  hover:scale-100  duration-300 shadow-2xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">Price: ${price} (per unit)</p>
          <p>Minimum Order: {minimum_order}</p>
          <p>Available Quantity: {available_quantity}</p>
          <p>{short_description.slice(0, 200)}</p>
          <div className="card-actions justify-start m-5">
            <button
              onClick={() => handelRedirectPurchasePage(_id)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
