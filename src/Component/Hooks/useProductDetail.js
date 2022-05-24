import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `http://localhost:5000/id_product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, [id]);

  return [service, loading];
};

export default useProductDetail;
