import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
        <h2 className="mb-4 text-xl antialiased font-bold text-accent text-center ">
          Send Us a Message
        </h2>
        <form className="mx-8 space-y-8">
          <div>
            <input
              type="text"
              className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              name="message"
              className="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button className="btn btn-primary w-full bg-gradient-to-r from-secondary to-primary outline-none text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
