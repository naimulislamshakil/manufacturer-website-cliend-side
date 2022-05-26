import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageOrderTable = ({ order, index }) => {
  const { name, panding, status, _id } = order;

  const handelDelete = (id) => {
    const confirm = window.confirm("Are you sure delete it?");
    if (confirm) {
      fetch(`https://frozen-brushlands-71944.herokuapp.com/manage/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            window.location.reload(false);
          }
        });
    }
  };

  const complet = (id) => {
    const confirm = window.confirm("Are you sure");
    if (confirm) {
      fetch(`https://frozen-brushlands-71944.herokuapp.com/manage/${id}`, {
        method: "PUT",
        headers: {
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount > 0) {
            window.location.reload(false);
          }
        });
    }
  };
  return (
    <tr key={index} className="mt-5">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <Link
          to={`/dashboard/order/${_id}`}
          className="btn btn-outline btn-info"
        >
          View Details
        </Link>
      </td>
      <td>
        {status === "unpaid" && (
          <button
            onClick={() => handelDelete(_id)}
            className="btn btn-outline btn-error"
          >
            Delete
          </button>
        )}
      </td>
      <td>
        {panding === "panding" ? (
          <button
            onClick={() => complet(_id)}
            className="btn btn-outline btn-success"
          >
            Complete
          </button>
        ) : (
          <h2 className="text-center font-bold text-md text-success">
            COMPLETED!
          </h2>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderTable;
