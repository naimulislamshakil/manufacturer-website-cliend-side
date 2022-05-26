import React from "react";
import { Link } from "react-router-dom";

const AdminProduct = ({ index, product }) => {
  console.log(product);
  const { _id, name } = product;

  const handelDelete = (id) => {
    const confirm = window.confirm("Are you sure delete it?");
    if (confirm) {
      fetch(
        `https://frozen-brushlands-71944.herokuapp.com/adminproductdelete/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Berar ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            window.location.reload(false);
          }
        });
    }
  };
  return (
    <tr key={index} className="mt-5">
      <th>{index + 1}</th>
      <td className="text-center">{name}</td>

      <td className="text-center">
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-outline btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminProduct;
