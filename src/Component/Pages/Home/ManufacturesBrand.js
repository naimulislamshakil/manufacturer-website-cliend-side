import React from "react";
import hp from "../../../assect/Coustomer/manufacturer_HP_Compaq.gif";
import dell from "../../../assect/Coustomer/manufacturer_dell.gif";
import apple from "../../../assect/Coustomer/manufacturer_apple.gif";
import asus from "../../../assect/Coustomer/manufacturer_ASUS.gif";
import lg from "../../../assect/Coustomer/manufacturer_LG.gif";
import sony from "../../../assect/Coustomer/manufacturer_sony.gif";
import toshiba from "../../../assect/Coustomer/manufacturer_toshiba.gif";
import ibm from "../../../assect/Coustomer/manufacturer_IBM_lenovo.gif";

const ManufacturesBrand = () => {
  return (
    <div className="my-5 w-full mx-auto">
      <div class="divider"></div>
      <h2 className="text-2xl font-bold text-center text-accent my-5">
        Top Coustomer Laptop Brands
      </h2>
      <div class="divider"></div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-3">
        <img src={apple} alt="" />
        <img src={dell} alt="" />
        <img src={hp} alt="" />
        <img src={asus} alt="" />
        <img src={lg} alt="" />
        <img src={sony} alt="" />
        <img src={toshiba} alt="" />
        <img src={ibm} alt="" />
      </div>
    </div>
  );
};

export default ManufacturesBrand;
