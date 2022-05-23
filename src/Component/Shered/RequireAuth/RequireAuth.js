import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    toast(error?.message);
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAuth;
