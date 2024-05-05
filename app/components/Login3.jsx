import Image from "next/image";
import React from "react";
Image;

const Login3 = () => {
  return (
    <div>
      {/* yeşil kare */}
      <div className="bg-[#1AEBB7] h-[878px] w-[45vw] absolute top-0 left-0 z-1"></div>

      {/* Form and image */}
      <div className="flex  items-center w-[1251px] mx-auto gap-32 mt-16 shadow-2xl bg-white bg-opacity-10 relative">
        <Image
          src="/image-lion.png"
          width={500}
          height={500}
          className=" my-32"
        />
        {/* Login Section */}
        <div className="flex items-center flex-col justify-center gap-5 w-[442px] m-20">
          <h1 className="font-[700] text-[50px] opacity-70">LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
            className="p-2 h-[58px] border w-[442px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 h-[58px] border w-[442px]"
          />
          <div className="flex justify-between items-center w-full">
            <button className="w-[233px] h-[60px]  bg-[#1AEBB7] border-gray-600 border text-[25px] font-[700] text-white capitalize">
              LOGIN
            </button>
            <div className="flex flex-col items-end">
              {/* Forgot Password */}
              <a
                href="#"
                className="font-[600] text-[20px] text-black opacity-70"
              >
                Forgot Password
              </a>
              {/* Register */}
              <a
                href="#"
                className="font-[600] text-[20px] text-black opacity-70"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login3;
