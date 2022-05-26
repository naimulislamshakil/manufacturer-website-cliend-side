import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `https://frozen-brushlands-71944.herokuapp.com/id_product/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, [id]);

  return [service, loading];
};

export default useProductDetail;
