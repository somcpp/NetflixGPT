import React from "react";
import Header from "./Header";

export const Login = () => {
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg"
        alt="background"
      />

      {/* Centered Form */}
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex flex-col w-3/12 p-12 bg-black/60 text-white rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 bg-gray-800 rounded outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-6 bg-gray-800 rounded outline-none"
          />

          <button className="p-3 bg-red-600 rounded font-semibold hover:bg-red-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
