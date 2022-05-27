import React from "react";
import checkbox from "../../../assect/icon/check.png";

const MyPortfolio = () => {
  return (
    <div className="ml-10">
      <h2 className="text-center text-purple-500 text-4xl font-bold mt-5">
        About Myself
      </h2>
      <div className="divider"></div>
      <div>
        <h2 className="text-lg font-bold mt-5">
          Name: MD. Naimul Islam Shakil
        </h2>
      </div>
      <div className="divider"></div>
      <div>
        <h2 className="text-lg font-bold mt-5">
          Email: naimulislamshakil265@gmail.com
        </h2>
      </div>
      <div className="divider"></div>
      <div>
        <h2 className="text-lg font-bold mt-5">Educational Background:</h2>
        <p className="text-lg font-bold mt-3">HSC:</p>
        <p className="text-lg font-bold mt-3">
          I studied with <b>Shahid Smriti Degree College</b> in
          Nesarabad(Swarupkati), Pirozpur, Barishal. I have got 4.50 in
          Humanites. I am passed in 2021.
        </p>
        <p className="text-lg font-bold mt-3">SSC:</p>
        <p className="text-lg font-bold mt-3">
          I studied with <b>Uttarkul High School</b> in Uttarkul, Banaripara,
          Barishal. I have got 4.50 in Commerce. I am passed in 2018.
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <h2 className="text-lg font-bold mt-5">
          List of technologies or skills all i have know as a web developer:
        </h2>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">HTML (Also HTML5)</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">CSS (Also CSS3)</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">
            Responsive Layout Design(Also Css Flexbox, Bootstrap, Tailwind CSS)
          </h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">GITHUB</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">JavaScript</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">
            JavaScript Problem Solving.
          </h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">JavaScript API</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">Explore Browser and Debug.</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">React</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">React Router and State</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">
            React Authentication Using Firebase.
          </h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">Node.js(express.js)</h2>
        </p>
        <p className="flex w-full items-center mt-3">
          <img className="w-[25px]" src={checkbox} alt="" />
          <h2 className="text-md font-bold ml-3">Mongodb(CRUD Opraction)</h2>
        </p>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default MyPortfolio;
