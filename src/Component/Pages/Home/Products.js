import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shered/Loading/Loading";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useQuery("product", () =>
    fetch("http://localhost:5000/product", {
      method: "GET",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center font-bold text-accent text-2xl">
        Our Populler Products
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
