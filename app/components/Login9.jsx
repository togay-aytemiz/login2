import React from "react";

const Login9 = () => {
  return (
    <div>
      <div>
        {/* Login form */}
        <div className="max-w-[554px] flex flex-col bg-[#00523f] bg-opacity-90 shadow-lg shadow-slate-400/40 p-12 ml-32 mt-[192px] relative z-10 ">
          <div>
            <main className="text-[100px] font-[700] text-[#FFFFFF] opacity-80">
              LOGIN
            </main>
            <div className="flex flex-col gap-5">
              <input
                placeholder="Username"
                className=" p-4 pl-6  rounded-lg text-[25px] font-[400] bg-[#00523f] border-white border-opacity-50  placeholder-white text-white border-2"
              />
              <input
                type="password"
                placeholder="Password"
                className=" p-4 pl-6  rounded-lg text-[25px] font-[400] bg-[#00523f] border-white border-opacity-50  placeholder-white text-white border-2"
              />
              <button className=" py-4 px-16 rounded-lg bg-[#FFFFFF]  bg-opacity-80 text-black  text-[25px] font-[600] mt-3">
                LOGIN
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src="/e3.png" className=" absolute bottom-0 right-0 z-0 " />
        </div>

        <div>
          <img
            src="/jogging.png"
            className=" absolute top-[162px] right-0 z-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Login9;
