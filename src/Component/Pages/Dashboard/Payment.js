import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const { name, price, quantity, totalPrice } = order;

  useEffect(() => {
    fetch(`https://frozen-brushlands-71944.herokuapp.com/payment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Please Pay for:{name}</h2>
    </div>
  );
};

export default Payment;
