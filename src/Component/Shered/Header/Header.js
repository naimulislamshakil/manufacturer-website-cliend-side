import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.config";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading2] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const navbarLink = (
    <>
      <li>
        <Link className="font-bold hover:bg-primary" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold hover:bg-primary" to="/contact_us">
          ContactUs
        </Link>
      </li>
      {user ? (
        <li>
          <button className="font-bold hover:bg-primary" onClick={logout}>
            Logout
          </button>
        </li>
      ) : (
        <>
          <li>
            <Link className="font-bold hover:bg-primary" to="/login">
              LogIn
            </Link>
          </li>
          <li>
            <Link className="font-bold hover:bg-primary" to="/register">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarLink}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl font-bold">
          Laptop Manufactur
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex lg:justify-around">
        <ul class="menu menu-horizontal p-0">{navbarLink}</ul>
      </div>
    </div>
  );
};

export default Header;
