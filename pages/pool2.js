import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Pool2 = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/images/pool2bg.png')",
          backgroundSize: "100% 100%",
        }}
        className="h-[350px]"
      >
        <Navbar />
        <div
          className="flex justify-center"
          style={{ maxWidth: "1630px", marginInline: "auto" }}
        >
          <div className=" flex items-center gap-3 text-center mt-10 p-5 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
            <img src="/assets/images/poollogo.png" alt="logo" />
            <div>
              <h2 className="slime-text ">Slime</h2>
              <h1>Pool</h1>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1630px", marginInline: "auto" }} className="">
        <div className="flex md:justify-between md:flex-row flex-col justify-center my-8">
          <div className="flex gap-5 items-center md:justify-start justify-center">
            <p className="text-[#3C579D] font-bold">Live</p>
            <input type="checkbox" className="toggle-btn"></input>
            <div className="historybg px-3 py-2 w-44 text-[#3C579D] rounded-full font-bold">
              <select name="" id="" className="bg-transparent w-full">
                <option value="Sort by ">Sort by</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5 font-bold mt-5 justify-center ">
            <button className="btn   flex justify-center gap-2 pr-2 items-center">
              <img
                src="/assets/images/poollogo.png"
                alt="logo"
                className="w-10"
              />
              Buy Slime
            </button>
            <button className="btn px-5 py-2 rounded-3xl">
              Connect your wallet
            </button>
          </div>
        </div>
        {/* ---------- accordion ------------------ */}
        <div
          className={`accordionbg px-5 py-3 text-[#3C579D] flex justify-between  md:flex-row flex-col cursor-pointer transition-all`}
          onClick={() => setActive(!active)}
        >
          <div className="flex items-center md:mx-0 mx-auto">
            <img
              src="/assets/images/poollogo.png"
              alt="pool"
              className="w-12"
            />
            <h3 className="text-2xl font-bold font-[oduda]">Slime Pool</h3>
          </div>
          <div className="text-start md:text-center">
            <p className="text-samibold">APR</p>
            <h3 className="text-2xl font-bold font-[oduda] flex items-center gap-2">
              16.80% <img src="/assets/images/apr.png" alt="apr" />
            </h3>
          </div>
          <div className="text-start md:text-center md:my-0 my-5">
            <p className="text-samibold">Total Stacked</p>
            <h3 className="text-2xl font-bold font-[oduda] flex items-center gap-2">
              257,617,678
            </h3>
          </div>
          <div className="text-start md:text-center">
            <p className="text-samibold">Ending Time</p>
            <h3 className="text-2xl font-bold font-[oduda] flex items-center gap-2">
              Already Ended
            </h3>
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/assets/images/arrow.png"
              alt="arrow"
              className={`transition-all duration-500 ${
                active ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`accordionbg px-5  text-[#3C579D] flex md:flex-row flex-col  justify-between  transition-property:h  duration-500  ${
            active ? "py-5" : "h-0 overflow-hidden"
          }`}
        >
          <div className="md:w-[20%] md:py-0 py-5 flex flex-col justify-center items-center">
            <p className="text-samibold">Staking Fee</p>
            <h3 className="text-2xl font-bold font-[oduda] flex items-center gap-2">
              0.000012
            </h3>
          </div>
          <div className="w-[80%] flex md:flex-row flex-col mx-auto lg:gap-8 gap-2">
            <div className="accordionbg  w-full flex xl:gap-10 gap-2 xl:px-10 px-5 items-center  border-2 border-[#3C579D26] rounded-xl">
              <img
                src="/assets/images/poollogo.png"
                alt="pool"
                className="w-12"
              />
              <div>
                <p className="text-samibold">You Staked</p>
                <h3 className="text-2xl font-bold font-[oduda] flex items-center gap-2">
                  Staking Fee
                </h3>
              </div>
            </div>
            <div className=" accordionbg w-full flex xl:gap-20 gap-5  items-center xl:px-10 px-5 py-5 border-2 border-[#3C579D26] rounded-xl">
              <div>
                <p className="text-samibold">Staking Fee</p>
                <h3 className="text-2xl font-bold font-[oduda] flex items-center gap-2">
                  0.000012
                </h3>
              </div>
              <button className="btn px-4 py-2 text-white font-[700]">
                Stake
              </button>
            </div>
            <div className="accordionbg w-full lg:px-10 py-2 flex justify-center items-center  border-2 border-[#3C579D26] rounded-xl">
              <button className="btn px-5 py-2 text-white  font-[700]">
                Buy Token
              </button>
            </div>
          </div>
        </div>
        {/* ----------------- */}
      </div>
    </>
  );
};

export default Pool2;
