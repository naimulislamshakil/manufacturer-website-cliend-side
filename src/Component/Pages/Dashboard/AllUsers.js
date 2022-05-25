import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";

const AllUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin", {
      method: "GET",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="overflow-x-auto my-5">
      <h2 className="text-center text-xl font-bold text-purple-500 mb-5">
        My Order
      </h2>
      <table className="table-zebra w-full  table-auto">
        {/* <!-- head --> */}
        <thead>
          <tr className="mt-5">
            <th className="text-sm font-bold text-center uppercase">NO.</th>
            <th className="text-sm font-bold text-center uppercase">email</th>
            <th className="text-sm font-bold text-center uppercase">
              make Admin
            </th>
            <th className="text-sm font-bold text-center uppercase">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserTable key={user._id} index={index} user={user}></UserTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
