import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ManufacturesBrand from "./ManufacturesBrand";
import Products from "./Products";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ManufacturesBrand></ManufacturesBrand>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Review></Review>
    </div>
  );
};

export default Home;
