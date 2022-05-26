import { useState, useEffect } from "react";

const useToken = (users) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = users?.user?.email;
    const user = {
      email: email,
    };

    if (email) {
      fetch(`https://frozen-brushlands-71944.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  });
  return [token];
};

export default useToken;
