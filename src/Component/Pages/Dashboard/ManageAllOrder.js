import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageOrderTable from "./ManageOrderTable";

const ManageAllOrder = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`https://frozen-brushlands-71944.herokuapp.com/order`, {
      method: "GET",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div className="overflow-x-auto my-5">
      <h2 className="text-center text-xl font-bold text-purple-500 mb-5">
        Manage All Order
      </h2>
      <table className="table-zebra w-full  table-auto">
        {/* <!-- head --> */}
        <thead>
          <tr className="mt-5">
            <th className="text-sm font-bold text-center uppercase">NO.</th>
            <th className="text-sm font-bold text-center uppercase">Name</th>
            <th className="text-sm font-bold text-center uppercase">Details</th>
            <th className="text-sm font-bold text-center uppercase">Delete</th>
            <th className="text-sm font-bold text-center uppercase">panding</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <ManageOrderTable
              key={order._id}
              index={index}
              order={order}
            ></ManageOrderTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
