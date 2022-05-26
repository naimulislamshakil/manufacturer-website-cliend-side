import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/onlyuser/${email}`, {
      method: "GET",
      headers: {
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [email]);

  const { name, education, location, number, url } = info;
  const update = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const education = event.target.education.value;
    const location = event.target.location.value;
    const number = event.target.number.value;
    const url = event.target.name.value;
    const user = {
      name,
      education,
      location,
      number,
      url,
    };

    fetch(`http://localhost:5000/onlyuser/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Berar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Your Profile is Update successfully.");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="mb-4 text-xl antialiased font-bold text-accent ml-5 ">
        User Name: {name ? name : " Update Your Profile."}
      </h2>
      <h2 className="mb-4 text-xl antialiased font-bold text-accent ml-5 ">
        {`User Email: ${email}`}
      </h2>
      <h2 className="mb-4 text-xl antialiased font-bold text-accent ml-5 ">
        User Education: {education ? education : "Update Your Profile."}
      </h2>
      <h2 className="mb-4 text-xl antialiased font-bold text-accent ml-5 ">
        User Location: {location ? location : "Update Your Profile."}
      </h2>
      <h2 className="mb-4 text-xl antialiased font-bold text-accent ml-5 ">
        User Phone Number: {number ? number : "Update Your Profile."}
      </h2>
      <h2 className="mb-4 text-xl antialiased font-bold text-accent ml-5 ">
        User Linkdin Profile Url:{" "}
        {url ? (
          <a className="text-primary" href={url}>
            Linkdin
          </a>
        ) : (
          "Update Your Profile."
        )}
      </h2>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
          <h2 className="mb-4 text-xl antialiased font-bold text-accent text-center ">
            Update Your Profile
          </h2>
          <form onSubmit={update} className="mx-8 space-y-8">
            <div>
              <input
                name="name"
                type="text"
                className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <input
                name="education"
                type="text"
                className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                placeholder="Enter Your Education"
                required
              />
            </div>
            <div>
              <input
                name="location"
                type="text"
                className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                placeholder="Enter Your Location"
                required
              />
            </div>
            <div>
              <input
                name="number"
                type="text"
                className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div>
              <input
                name="url"
                type="text"
                className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                placeholder="Enter Your Linkdin Profile Url"
              />
            </div>

            <input
              type="submit"
              value="UPDATE"
              className="btn btn-primary w-full bg-gradient-to-r from-secondary to-primary outline-none text-white"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
