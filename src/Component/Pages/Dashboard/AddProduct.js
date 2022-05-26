import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const imgSecretKey = "dbb2fdf6a0d5c9b3b005d3a2dcdcc677";

  const onSubmit = async (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgSecretKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((datas) => {
        if (datas.success) {
          const useProductDetail = {
            name: data.titel,
            image: datas.data.url,
            short_description: data.dis,
            minimum_order: data.min,
            available_quantity: data.available,
            price: data.price,
            animation: data.animation,
          };
          fetch("https://frozen-brushlands-71944.herokuapp.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Berar ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(useProductDetail),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast.success("Product Added.");
              }
            });
        }
      });
    reset();
  };
  return (
    <div>
      <h2 className="text-2xl text-center my-5">Add a New Doctor</h2>
      <form
        className="flex flex-col justify-center w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Enter Your Titel"
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("titel")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Enter Your Price"
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("price")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Available Pices"
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("available")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Minimum Pices"
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("min")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Enter Your Animation"
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("animation")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            placeholder="Minimum Pices"
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("photo")}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <textarea
            type="text"
            placeholder="Discription"
            className="mt-3 mb-3 input input-bordered w-full max-w-xs"
            {...register("dis")}
          />
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
