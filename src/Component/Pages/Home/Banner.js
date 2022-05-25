import React from "react";
import banner1 from "../../../assect/Banner/banner1.jpg";
import banner2 from "../../../assect/Banner/banner2.jpg";
import banner3 from "../../../assect/Banner/banner (3).jpg";

const Banner = () => {
  return (
    <div className=" min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={banner3}
              className="w-full rounded-xl shadow-2xl"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={banner1}
              className="w-full rounded-xl shadow-2xl"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={banner2}
              className="w-full rounded-xl shadow-2xl"
              alt=""
            />{" "}
            /
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
