import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.config";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Shered/Loading/Loading";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);

  if (isLoading) {
    return <Loading></Loading>;
  }
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
        <ul class="menu p-4 overflow-y-auto w-80 bg-secondary text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              <li>
                <Link
                  className="w-full btn btn-outline rounded-full mt-3"
                  to="/dashboard "
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  className="w-full btn btn-outline rounded-full mt-3"
                  to="/dashboard/add_review"
                >
                  Add A Review
                </Link>
              </li>
            </>
          )}

          <li>
            <Link
              className="w-full btn btn-outline rounded-full mt-3 shadow-xl"
              to="/dashboard/my_profile"
            >
              My Profile
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link
                  className="w-full btn btn-outline rounded-full mt-3"
                  to="/dashboard "
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  className="w-full btn btn-outline rounded-full mt-3"
                  to="/dashboard/add_review"
                >
                  Add A Review
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
