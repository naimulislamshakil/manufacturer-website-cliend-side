import React from "react";

const UserTable = ({ index, user }) => {
  return (
    <tr key={index} className="mt-5">
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{user?.email}</td>
      <td className="text-center">
        <button className="btn btn-outline btn-success">Make Admin</button>
      </td>
      <td className="text-center">
        <button className="btn btn-outline btn-error">Delete User</button>
      </td>
    </tr>
  );
};

export default UserTable;
