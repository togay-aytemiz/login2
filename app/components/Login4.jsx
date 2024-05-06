import Image from "next/image";
import React from "react";

const Login4 = () => {
  return (
    <div>
      {/* Polygon1 */}
      <img src="/Polygon1.png" className=" absolute top-6 left-0" />

      {/* login form */}
      <div className="flex  flex-col gap-8 w-[442px] m-20 mx-auto mt-72">
        <h1 className="font-[700] text-[70px] opacity-50 text-white">LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          className="py-2 pl-10 h-[60px] border w-[470px] text-[25px] font-[400] bg-[#1A2162] bg-opacity-50 border-opacity-10 border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 pl-10 h-[60px] border w-[470px] text-[25px] font-[400] bg-[#1A2162] bg-opacity-50 border-opacity-10 border-white"
        />
        <div className="flex justify-between items-center w-full">
          <button className="w-[233px] h-[60px]  bg-[#050D5E]   text-[25px] font-[600] text-white capitalize">
            Login
          </button>
        </div>
      </div>

      {/* Polygon2 */}
      <img src="/Polygon2.png" className=" absolute top-6 right-0" />
    </div>
  );
};

export default Login4;
