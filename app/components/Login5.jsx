import Image from "next/image";
import React from "react";

const Login5 = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-[#095F59] text-white">
        <h1 className="text-[35px] font-[700]">SHEY</h1>
        <div>
          <ul className="flex gap-9 text-[20px] font-[600] opacity-70">
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Login Form */}
      <div className="max-w-[554px] flex flex-col bg-white bg-opacity-90 shadow-2xl p-12 mx-auto mt-[150px] relative z-10 ">
        <div>
          <main className="text-[70px] font-[600] text-[#095F59]">LOGIN</main>
          <div className="flex flex-col gap-5">
            <input
              placeholder="Username"
              className=" p-3 border rounded-lg text-[20px] font-[400]"
            />
            <input
              placeholder="Password"
              className=" p-3 border rounded-lg text-[20px] font-[400]"
            />
            <button className=" py-2 px-16 rounded-lg bg-[#095F59] text-white w-[222px] text-[25px] font-[600] mt-3">
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

        <div>
          <p className="text-[20px] font-[600] opacity-[75%] text-[#095F59] mt-12 text-center">
            Not yet registered , Click here to sign up
          </p>
        </div>
      </div>

      {/* Elements */}

      {/* Greenfiller */}
      <div>
        <img
          src="/Rectangle12.png"
          className=" absolute top-[380px] z-0 w-full h-[556px]"
        />
      </div>

      {/* Ellipse1 */}
      <div>
        <img src="/Ellipse1.png" className=" absolute bottom-0 right-0 z-0 " />
      </div>

      {/* Ellipse2 */}
      <div>
        <img
          src="/Ellipse2.png"
          className=" absolute top-[488px] left-[220px] z-0 "
        />
      </div>
    </div>
  );
};

export default Login5;
