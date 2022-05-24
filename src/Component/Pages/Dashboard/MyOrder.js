import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
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

  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="text-sm font-bold text-center uppercase">NO.</th>
            <th className="text-sm font-bold text-center uppercase">Name</th>
            <th className="text-sm font-bold text-center uppercase">Details</th>
            <th className="text-sm font-bold text-center uppercase">Delete</th>
            <th className="text-sm font-bold text-center uppercase">Pay</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
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
                  <button class="btn btn-outline btn-error">Delete</button>
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
