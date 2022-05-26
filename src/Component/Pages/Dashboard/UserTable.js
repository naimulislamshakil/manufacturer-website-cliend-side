import React from "react";
import { toast } from "react-toastify";

const UserTable = ({ index, user }) => {
  const { _id, email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user_admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          window.location.reload(false);
          toast.success(`${email} is make admin.`);
        }
      });
  };

  const deleteUser = (id) => {
    const comfirm = window.confirm(`Are you sure delete ${email}`);
    if (comfirm) {
      fetch(`http://localhost:5000/onlyuser/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("User is delete successfully.");
            window.location.reload(false);
          }
        });
    }
  };
  return (
    <tr key={index} className="mt-5">
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{email}</td>
      <td className="text-center">
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-outline btn-success">
            Make Admin
          </button>
        ) : (
          <h2 className="text-center text-success text-lg">Alrady Admin</h2>
        )}
      </td>
      <td className="text-center">
        <button
          onClick={() => deleteUser(_id)}
          className="btn btn-outline btn-error"
        >
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
