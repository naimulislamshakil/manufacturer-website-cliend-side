import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/order/${email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user]);

  // using handelDelete delete a order from mongodb
  const handelDelete = (id) => {
    const confirm = window.confirm("Are You Sure To Delete It!");

    if (confirm) {
      const url = `http://localhost:5000/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            window.location.reload(false);
            toast.success("Delete Successfull!");
          }
        });
    }
  };

  return (
    <div class="overflow-x-auto my-5">
      <h2 className="text-center text-xl font-bold text-purple-500 mb-5">
        My Order
      </h2>
      <table class="table-zebra w-full  table-auto">
        {/* <!-- head --> */}
        <thead>
          <tr className="mt-5">
            <th className="text-sm font-bold text-center uppercase">NO.</th>
            <th className="text-sm font-bold text-center uppercase">Name</th>
            <th className="text-sm font-bold text-center uppercase">Details</th>
            <th className="text-sm font-bold text-center uppercase">Delete</th>
            <th className="text-sm font-bold text-center uppercase">Pay</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="mt-5">
              <th>{index + 1}</th>
              <td>{order?.name}</td>
              <td>
                <Link
                  to={`/dashboard/${order._id}`}
                  class="btn btn-outline btn-info"
                >
                  View Details
                </Link>
              </td>
              <td>
                {order?.status === "unpaid" && (
                  <button
                    onClick={() => handelDelete(order._id)}
                    class="btn btn-outline btn-error"
                  >
                    Delete
                  </button>
                )}
              </td>
              <td>
                {order?.status === "unpaid" && (
                  <button class="btn btn-outline btn-success">PAY</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
