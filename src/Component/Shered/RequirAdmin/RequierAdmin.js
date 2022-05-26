import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    toast(error?.message);
  }

  if (!user || !admin) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAuth;
