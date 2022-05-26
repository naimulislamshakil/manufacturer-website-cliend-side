import React from "react";
import { Link } from "react-router-dom";

const ManageOrderTable = ({ order, index }) => {
  const { name, status, _id } = order;

  const handelDelete = (id) => {};
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
        {order?.panding === "panding" && (
          <button className="btn btn-outline btn-success">Complete</button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderTable;
