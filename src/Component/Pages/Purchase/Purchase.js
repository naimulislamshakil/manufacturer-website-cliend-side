import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import useProductDetail from "../../Hooks/useProductDetail";
import Loading from "../../Shered/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(0);
  const [service, loading] = useProductDetail(id);
  const [user, loading2] = useAuthState(auth);

  if (loading || loading2) {
    return <Loading></Loading>;
  }
  const { name, price, available_quantity, minimum_order } = service;

  const purchaseHandel = (event) => {
    event.preventDefault();
    const personName = user?.displayName;
    const email = user?.email;
    const totalPrice = price * quantity;
    const orderDetails = {
      name: name,
      price: price,
      quantity: quantity,
      persone: personName,
      email: email,
      address: address,
      number: number,
      totalPrice: totalPrice,
    };

    if (quantity < minimum_order) {
      toast.error(`Less Then ${minimum_order}`);
    } else if (quantity > available_quantity) {
      toast.error(`Sorry! We Do Not Have Over ${available_quantity}`);
    } else {
      fetch();
    }
  };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
      <div class="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
        <h2 class="mb-4 text-xl antialiased font-bold text-accent text-center ">
          Place Order For: {name}
        </h2>
        <form onSubmit={purchaseHandel} class="mx-8 space-y-8">
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
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              onBlur={(event) => setQuantity(event.target.value)}
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder={`Min Order ${minimum_order}`}
              required
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
              name="address"
              onBlur={(event) => setAddress(event.target.value)}
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
              name="number"
              onBlur={(event) => setNumber(event.target.value)}
              class="w-full p-2 text-md border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 text-accent"
              placeholder="Enter Your Phone Number"
            />
          </div>

          <input
            className="w-full btn btn-primary px-4 py-2 font-bold text-white rounded-full bg-gradient-to-r from-secondary to-primary focus:outline-none focus:shadow-outline"
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
