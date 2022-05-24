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
  const { name, price, minimum_order } = service;

  if (loading || loading2) {
    return <Loading></Loading>;
  }
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
      <div class="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
        <h2 class="mb-4 text-xl antialiased font-bold text-accent text-center ">
          Place Order For: {name}
        </h2>
        <form class="mx-8 space-y-8">
          <div>
            <input
              type="text"
              class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Full Name"
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
