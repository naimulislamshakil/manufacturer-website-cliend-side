import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import useToken from "../../Hooks/useToken";
import Loading from "../Loading/Loading";

const SocialMedia = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fuser, floading, ferror] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, huser, hloading, herror] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(guser || fuser || huser);

  const from = location.state?.from?.pathname || "/";

  if (gloading || floading || hloading) {
    return <Loading></Loading>;
  }

  if (gerror || ferror || herror) {
    toast.error(gerror?.message || ferror?.message || herror?.message);
  }

  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="w-full btn btn-outline rounded-full mt-3"
      >
        Continue with Google
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="w-full btn btn-outline rounded-full mt-3"
      >
        Continue with FaceBook
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="w-full btn btn-outline rounded-full mt-3"
      >
        Continue with GitHub
      </button>
    </div>
  );
};

export default SocialMedia;
