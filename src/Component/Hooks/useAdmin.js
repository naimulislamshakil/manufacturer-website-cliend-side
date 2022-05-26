// import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import auth from "../../firebase.config";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;

    if (email) {
      fetch(`https://frozen-brushlands-71944.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Berar ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setIsLoading(false);
        });
    }
  }, [user]);
  return [admin, isLoading];
};

export default useAdmin;
