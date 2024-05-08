import Image from "next/image";
import React from "react";
Image;

const Login6 = () => {
  return (
    <div>
      <div className="max-w-[554px] flex flex-col bg-[#0d0d0d] bg-opacity-90 shadow-2xl p-12 mx-auto mt-[192px] relative z-10 ">
        <div>
          <main className="text-[70px] font-[600] text-[#FFFFFF] opacity-50">
            LOGIN
          </main>
          <div className="flex flex-col gap-5">
            <input
              placeholder="Username"
              className=" p-3  rounded-lg text-[20px] font-[400] bg-black placeholder-opacity-50 placeholder-white text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className=" p-3  rounded-lg text-[20px] font-[400] bg-black  placeholder-opacity-50 placeholder-white text-white"
            />
            <button className=" py-2 px-16 rounded-lg bg-[#FFFFFF] text-opacity-50 bg-opacity-10 text-white w-[222px] text-[25px] font-[600] mt-3">
              LOGIN
            </button>
          </div>
        </div>
        <div className="mt-10 flex gap-2 items-center">
          <div className="h-[1px]  w-full bg-white opacity-50"></div>
          <p className="text-[25px] mx-2 text-white opacity-65">OR</p>
          <div className="h-[1px]  w-full bg-white opacity-50"></div>
        </div>
        <div className="flex gap-10 justify-center mt-10">
          <Image src="/image_1.png" width={30} height={30} />
          <Image src="/image_2.png" width={30} height={30} />
        </div>
      </div>

      <div>
        <img
          src="/Rectangle12.png"
          className=" absolute bottom-0 left-0 z-0 "
        />
      </div>

      <div>
        <img src="/Rectangle13.png" className=" absolute top-0 right-0 z-0 " />
      </div>

      <div>
        <img
          src="/Polygon1.png"
          className=" absolute top-[122px] left-[99px] z-0 "
        />
      </div>

      <div>
        <img
          src="/Polygon2.png"
          className=" absolute bottom-[75px] right-[141px] z-0 "
        />
      </div>
    </div>
  );
};

export default Login6;
