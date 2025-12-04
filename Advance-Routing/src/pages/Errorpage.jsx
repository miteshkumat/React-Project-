import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0908] text-[#fefcfb] px-4">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Errorpage;
