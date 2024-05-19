import Image from "next/image";
import React from "react";

const Login10 = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        {/* Register */}

        <div className="bg-[#DC5B11] w-[40vw] h-[100vh] px-20 flex flex-col items-left justify-center">
          <h1 className="text-[60px] font-[700] text-white">Welcome Back</h1>
          <p className="text-[20px] font-[700] text-white opacity-70 max-w-[362px] text-left mt-14">
            Sign in with your credentionals to enjoy our uninterupted services
          </p>

          <p className="text-[20px] font-[600] text-black opacity-40 max-w-[362px] text-left mt-11">
            Dont have an account yet ?{" "}
          </p>

          <div className=" mt-16 mx-auto">
            <Image src="/image_4.png" width={152} height={139} />
          </div>

          <button className=" mt-14 mx-auto w-[400px] border border-white rounded-full h-[60px] text-white font-[700] text-[20px]">
            CLICK HERE TO SIGN UP
          </button>
        </div>

        {/* Login Form */}

        <div className="w-[60vw] flex justify-center items-center flex-col h-[100vh] bg-white px-12">
          <main className="text-[70px] font-[700] text-black opacity-80 text-center">
            SIGN IN TO SHEY
          </main>

          <div className="w-[542px] ">
            <div className="flex gap-10 justify-center m-2 my-5">
              <Image src="/image_1.png" width={50} height={50} />
              <Image src="/image_2.png" width={50} height={50} />
              <Image src="/image_3.png" width={53} height={50} />
            </div>

            <div className="mt-10 flex gap-2 items-center">
              <div className="h-[1px] bg-black w-full"></div>
              <p className="text-[25px] mx-2">OR</p>
              <div className="h-[1px] bg-black w-full"></div>
            </div>

            <p className="font-[600] text-[25px] text-black opacity-40 mt-2 text-center">
              use email and password
            </p>

            <div className="flex flex-col gap-5 mt-8">
              <input
                placeholder="Username"
                className=" h-[66px] bg-[#F0F0F0] rounded-full text-[20px] font-[500] w-full pl-6 placeholder-opacity-20 placeholder-[#000000]"
              />
              <input
                placeholder="Password"
                className=" h-[66px] bg-[#F0F0F0] rounded-full text-[20px] font-[500] w-full pl-6 placeholder-opacity-20 placeholder-[#000000]"
              />
              <button className=" py-2 h-[66px] rounded-full bg-[#DC5B11] text-white  text-[25px] font-[600]">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login10;
