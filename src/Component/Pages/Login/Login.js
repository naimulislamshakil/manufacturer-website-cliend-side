import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialMedia from "../../Shered/SocialMedia/SocialMedia";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl w-2/4">
        <h3 className="text-2xl font-bold text-center capitalize mb-5">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block mb-2 text-sm font-bold text-gray-700 ml-3"
            htmlFor="email"
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
            htmlFor="Password"
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

          <input
            className="w-full btn btn-primary px-4 py-2 font-bold text-white rounded-full bg-gradient-to-r from-secondary to-primary focus:outline-none focus:shadow-outline"
            type="submit"
            value="LogIn"
          />
          <div className="text-center mt-6">
            <Link
              //   onClick={resetPassword}
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 font-bold"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 align-baseline font-bold hover:text-blue-800"
              to="/register"
            >
              No Account Yet! Register
            </Link>
          </div>

          <div className="divider">OR</div>
          <SocialMedia></SocialMedia>
        </form>
      </div>
    </div>
  );
};

export default Login;
