import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);

    localStorage.removeItem("accessToken");
    navigate("/");
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
      <li>
        <Link className="font-bold hover:bg-primary" to="/product">
          All Product
        </Link>
      </li>
      <li>
        <Link className="font-bold hover:bg-primary" to="/blogs">
          Blogs
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard" className="font-bold hover:bg-primary">
            Dashboard
          </Link>
        </li>
      )}
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Laptop Manufactur
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:justify-around">
        <ul className="menu menu-horizontal p-0">{navbarLink}</ul>
      </div>
      <div className="navbar-end">
        <label htmlFor="open" tabIndex="1" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
