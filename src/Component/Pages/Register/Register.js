import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMedia from "../../Shered/SocialMedia/SocialMedia";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../Shered/Loading/Loading";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import useToken from "../../Hooks/useToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uerror] = useUpdateProfile(auth);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);

  const from = location.state?.from?.pathname || "/";

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (error || uerror) {
    toast(error?.message || uerror?.message);
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile(name);
    toast("Update Profile.");
  };
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl w-2/4">
        <h3 className="text-2xl font-bold text-center capitalize mb-5">
          Register to your account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block mb-2 text-sm font-bold text-gray-700 ml-3"
            htmlhtmlFor="email"
          >
            Name
          </label>
          <input
            placeholder="Enter Your Email."
            className="w-full mb-3 px-4 py-2 mt-2 border rounded-xl focus:outline-none focus:ring-1 focus:text-secondary text-accent"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label
            className="block mb-2 text-sm font-bold text-gray-700 ml-3"
            htmlhtmlFor="email"
          >
            Email
          </label>
          <input
            placeholder="Enter Your Email."
            className="w-full px-4 py-2 mt-2 border rounded-xl focus:outline-none focus:ring-1 focus:text-secondary text-accent"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label
            className="block mb-2 text-sm font-bold text-gray-700 ml-3"
            htmlhtmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-2 border rounded-xl focus:outline-none focus:ring-1 focus:text-secondary text-accent"
            placeholder="Enter Your Password."
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 8,
                message: "Must be 8 characters or longer",
              },
            })}
          />

          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>

          <div className="form-control mb-5">
            <label className="flex cursor-pointer">
              <input
                type="checkbox"
                onClick={() => setAgree(!agree)}
                // checked="checked"
                className="checkbox mr-5 checkbox-primary"
              />
              <span
                className={`label-text ${
                  agree ? "" : "text-red-500"
                } font-bold text-sm`}
              >
                Laptop Manufactur <b>Protal Terms</b> and <b>Conditions</b>
              </span>
            </label>
          </div>

          <input
            disabled={!agree}
            className="w-full btn btn-primary px-4 py-2 font-bold text-white rounded-full bg-gradient-to-r from-secondary to-primary focus:outline-none focus:shadow-outline"
            type="submit"
            value="Register"
          />

          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 align-baseline font-bold hover:text-blue-800"
              to="/login"
            >
              Alrady Have An Account! LogIn
            </Link>
          </div>

          <div className="divider">OR</div>
          <SocialMedia></SocialMedia>
        </form>
      </div>
    </div>
  );
};

export default Register;
