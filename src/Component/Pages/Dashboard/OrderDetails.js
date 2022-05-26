import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.config";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => {
        if (res.status === 403) {
          localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setOrder(data));
  }, [id]);
  const {
    email,
    name,
    number,
    persone,
    price,
    totalPrice,
    status,
    address,
    quantity,
  } = order;
  return (
    <div className="overflow-x-auto ">
      <h2 className="text-center text-xl text-purple-500 font-bold my-6">
        Order Detail for {name}
      </h2>
      <table className="table-zebra w-full  table-auto">
        <thead>
          <tr>
            <th className="text-sm font-bold text-center uppercase">mame</th>
            <th className="text-sm font-bold text-center ">{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-sm font-bold text-center uppercase md:w-1/4">
              Person Name
            </th>
            <td className="text-sm font-bold text-center md:w-16">{persone}</td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              Person email
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">{email}</td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              Phone Number
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">{number}</td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              Delivary address
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">
              {address}
            </td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              quantity
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">
              {quantity} Pices
            </td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              Price
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">
              <b>$</b>
              {price}
            </td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              total price
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">
              <b>$</b>
              {totalPrice}
            </td>
          </tr>
          <tr>
            <th className="text-sm font-bold text-center uppercase sm:w-1/4">
              Payment status
            </th>
            <td className="text-sm font-bold text-center sm:w-3/4">
              {status === "unpaid" ? (
                <button disabled className="btn btn-outline btn-error">
                  UNPAID
                </button>
              ) : (
                <button disabled className="btn btn-outline btn-success">
                  PAID
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
