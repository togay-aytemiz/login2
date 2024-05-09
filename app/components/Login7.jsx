import Image from "next/image";
import React from "react";

const Login7 = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url('/Rectangle14.png')` }}
    >
      <div className="bg-black opacity-50 h-full w-full absolute bottom-0"></div>

      {/* Login Form */}
      <div className="max-w-[681px] flex flex-col bg-white bg-opacity-20 rounded-3xl shadow-2xl px-12 py-16 pb-32 mx-auto  z-10 text-center absolute top-80 left-1/2 transform -translate-x-1/2">
        <div>
          <main className="text-[50px] font-[700] text-white mb-6">LOGIN</main>
          <div className="flex flex-col gap-5">
            <input
              placeholder="Username"
              className=" p-3 text-[20px] font-[400] placeholder-opacity-85 placeholder-white bg-white bg-opacity-20"
            />
            <input
              placeholder="Password"
              className=" p-3 text-[20px] font-[400] placeholder-opacity-85 placeholder-white bg-white bg-opacity-20"
            />
            <div className="flex justify-between items-center gap-24">
              <button className=" py-2 px-20  bg-black bg-opacity-70 opacity-70 text-white text-[25px] font-[600] mt-3">
                LOGIN
              </button>
              <div className="flex flex-col text-right mt-4">
                <a
                  href="#"
                  className="font-[600] text-[20px] text-white opacity-70"
                >
                  Forgot password
                </a>
                <a
                  href="#"
                  className="font-[600] text-[20px] text-white opacity-70"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/Ellipse3.png"
          className=" absolute top-20 left-1/4 transform -translate-x-1/2 z-0 "
        />
      </div>
    </div>
  );
};

export default Login7;
