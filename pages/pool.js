import Navbar from "@/components/Navbar";
import React from "react";

const pool = () => {
  return (
    <div className="poolbg h-[100vh]">
      <Navbar />
      <div className="flex items-center flex-col justify-center">
        <div className=" flex items-center gap-3 text-center mt-10 p-5 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
          <img src="/assets/images/poollogo.png" alt="logo" />
          <div>
            <h2 className="slime-text ">Slime</h2>
            <h1>Pool</h1>
          </div>
        </div>
        <div className=" px-5 text-[#3C579D] bg-[#ffffff59] p-8 mt-10 rounded-xl backdrop-blur-[10px]">
          <div className="flex justify-between mt-5">
            <p>
              APR
              <br />
              <span className="text-2xl font-bold font-[oduda] opacity-[80%]">
                16.80%
              </span>
            </p>
            <p>
              Total Stacked
              <br />
              <span className="text-2xl font-bold font-[oduda] opacity-[80%]">
                257,617,678
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center md:gap-20 my-10">
            <p>
              APR
              <br />
              <span className="text-2xl font-bold font-[oduda] opacity-[80%]">
                0.000012
              </span>
            </p>
            <p>
              Total Stacked
              <br />
              <span className="text-2xl font-bold font-[oduda] opacity-[80%]">
                0.000012
              </span>
            </p>
            <button className="btn text-white  font-bold text-[18px] px-8 py-3 bg-cover rounded-3xl ">
              Stake
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-5">
            <p>
              APR
              <br />
              <span className="text-2xl font-bold font-[oduda] opacity-[80%]">
                0.000012
              </span>
            </p>
            <button className="btn text-white  font-bold text-[18px] px-8 py-3 bg-cover rounded-3xl ">
              Claim
            </button>
            <button className="btn text-white  font-bold text-[18px] px-8 py-3 bg-cover rounded-3xl ">
              Buy slimes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pool;
