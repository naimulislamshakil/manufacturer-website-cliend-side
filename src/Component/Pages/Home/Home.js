import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ManufacturesBrand from "./ManufacturesBrand";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ManufacturesBrand></ManufacturesBrand>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
