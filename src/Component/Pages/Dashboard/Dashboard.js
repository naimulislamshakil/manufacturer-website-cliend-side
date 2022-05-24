import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="open" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <h2 className="text-center text-3xl text-secondary font-bold">
          Wellcome To Your Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="open" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="w-full btn btn-outline rounded-full mt-3" to="/">
              My Orders
            </Link>
          </li>
          <li>
            <Link className="w-full btn btn-outline rounded-full mt-3" to="/">
              Add A Review
            </Link>
          </li>
          <li>
            <Link className="w-full btn btn-outline rounded-full mt-3" to="/">
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
