import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shered/Loading/Loading";
import AdminProduct from "./AdminProduct";

const ManageProduct = () => {
  const { data: products, isLoading } = useQuery("product", () =>
    fetch("https://frozen-brushlands-71944.herokuapp.com/products", {
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
    <div className="overflow-x-auto my-5">
      <h2 className="text-center text-xl font-bold text-purple-500 mb-5">
        Manage All Product
      </h2>
      <table className="table-zebra w-full  table-auto">
        {/* <!-- head --> */}
        <thead>
          <tr className="mt-5">
            <th className="text-sm font-bold text-center uppercase">NO.</th>
            <th className="text-sm font-bold text-center uppercase">Name</th>
            <th className="text-sm font-bold text-center uppercase">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <AdminProduct
              key={product._id}
              index={index}
              product={product}
            ></AdminProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
