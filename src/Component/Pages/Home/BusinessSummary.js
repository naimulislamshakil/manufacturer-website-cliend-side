import React from "react";
import payment from "../../../assect/Commitment/2.png";
import Policy from "../../../assect/Commitment/3.png";
import Experience from "../../../assect/Commitment/4.png";
import support from "../../../assect/Commitment/1.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BusinessSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 bg-slate-200 py-10">
      <div data-aos="fade-left">
        <div className="grid justify-center items-center">
          <img className="w-1/4 mx-auto" src={payment} alt="" />
          <h2 className="text-xl font-bold text-center">Secure Payment</h2>
          <p className="text-center">Pay with secure payment methods</p>
        </div>
      </div>
      <div data-aos="fade-down">
        <div className="grid justify-center items-center">
          <img className="w-1/4 mx-auto" src={Policy} alt="" />
          <h2 className="text-xl font-bold text-center">
            30-day Return Policy
          </h2>
          <p className="text-center">
            If your item is not as described or damaged,you may return it within
            30 days upon delivery
          </p>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className="grid justify-center items-center">
          <img className="w-1/4 mx-auto" src={Experience} alt="" />
          <h2 className="text-xl font-bold text-center">
            14 Years of Experience
          </h2>
          <p className="text-center">
            14 years experience of cross-border electtic business plants
          </p>
        </div>
      </div>
      <div data-aos="fade-right">
        <div className="grid justify-center items-center">
          <img className="w-1/4 mx-auto" src={support} alt="" />
          <h2 className="text-xl font-bold text-center">
            24/7 Customer Service
          </h2>
          <p className="text-center">We'll respond to you within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
