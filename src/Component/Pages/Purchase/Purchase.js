import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.config";
import useProductDetail from "../../Hooks/useProductDetail";
import Loading from "../../Shered/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [service, loading] = useProductDetail(id);
  const [user, loading2] = useAuthState(auth);

  if (loading || loading2) {
    return <Loading></Loading>;
  }
  const { name, price, minimum_order } = service;

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
      <div class="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
        <h2 class="mb-4 text-xl antialiased font-bold text-accent text-center ">
          Place Order For: {name}
        </h2>
        <form class="mx-8 space-y-8">
          <div>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Full Name"
              required
              readOnly
              disabled
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              value={user?.email}
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Full Name"
              required
              readOnly
              disabled
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Product Name
            </label>
            <input
              type="text"
              value={name}
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Full Name"
              required
              readOnly
              disabled
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Address
            </label>
            <input
              type="text"
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Enter Your Address."
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Phone Number
            </label>
            <input
              type="number"
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 text-accent"
              placeholder="Enter Your Phone Number"
            />
          </div>

          <button class="btn btn-primary w-full bg-gradient-to-r from-secondary to-primary outline-none text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
