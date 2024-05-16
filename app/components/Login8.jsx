import Image from "next/image";
import React from "react";

const Login8 = () => {
  return (
    <div>
      <div>
        {/* Login Form */}
        <div className="max-w-[554px] flex flex-col bg-white rounded-3xl shadow-2xl  pt-12 px-12 pb-4 mx-auto mt-[150px] relative z-10 ">
          <div>
            <main className="text-[70px] font-[600] text-[#2CC468]">LOGIN</main>
            <div className="flex flex-col gap-5">
              <input
                placeholder="Username"
                className=" p-3 border rounded-lg text-[20px] font-[400]"
              />
              <input
                placeholder="Password"
                className=" p-3 border rounded-lg text-[20px] font-[400]"
              />
              <button className=" py-2 px-16 rounded-lg bg-[#2CC468] text-white w-[222px] text-[25px] font-[600] mt-3">
                LOGIN
              </button>
            </div>
          </div>
          <div className="mt-10 flex gap-2 items-center">
            <div className="h-[1px] bg-black w-full"></div>
            <p className="text-[25px] mx-2">OR</p>
            <div className="h-[1px] bg-black w-full"></div>
          </div>
          <div className="flex gap-10 justify-center mt-10">
            <Image src="/image_1.png" width={30} height={30} />
            <Image src="/image_2.png" width={30} height={30} />
          </div>

          <div className="flex justify-between">
            <p className="text-[20px] font-[600] opacity-[75%] text-[#2CC468] mt-12 ml-[-30px] text-center">
              Forgot Password
            </p>
            <p className="text-[20px] font-[600] opacity-[75%] text-[#2CC468] mt-12 mr-[-30px] text-center">
              Register
            </p>
          </div>
        </div>

        <div>
          <img src="/E1.png" className=" absolute bottom-0 left-0 z-0 " />
        </div>

        <div>
          <img src="/E2.png" className=" absolute top-0 right-0 z-0 " />
        </div>
      </div>
    </div>
  );
};

export default Login8;
