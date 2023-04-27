import React from "react";
import Navbar from "@/components/Navbar";
const SelectNFTs = () => {
  return (
    <>
      <div
        className="h-[350px]"
        style={{
          backgroundImage: "url(/assets/images/userbg.png)",
          backgroundSize: "100% ",
        }}
      >
        <Navbar />
        <div className="grid place-items-center">
          <div className="w-[400px]  text-center mt-10 p-5 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
            <h2 className="slime-text ">Slime</h2>
            <h1>Giveaways</h1>
          </div>
        </div>
      </div>
      {/* ------ */}
      <div className="grid place-items-center">
        <div className="nftbg  w-[400px] p-5">
          <div className="flex justify-end">
            {" "}
            <button className=" inputbg  font-bold h-10 w-10 bg-cover flex justify-center border  border-black items-center text-[#3C579D]">
              {" "}
              &#215;{" "}
            </button>
          </div>

          <h3 className="text-[#3C579D] text-[26px] font-[oduda] text-center">
            Select NFTs
          </h3>
          <div className="inputbg py-3 px-5 w-full text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
            <select name="" id="" className="bg-transparent w-full">
              <option value="Sort by ">
                {/* <img src="/assets/icons/wallet.png" alt="" /> */}
                0x85438543854385438543
              </option>
            </select>
          </div>
          <div className="my-8">
            <div className="flex items-center gap-2">
              <div
                className="my-5 py-3 px-5 w-[90%]  rounded-full font-bold  opacity-[0.8] bg-no-repeat bg-cover"
                style={{ backgroundImage: "url(/assets/images/selectnft.png)" }}
              >
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Select NFTs</option>
                </select>
              </div>
              <div
                className="h-10 w-10 bg-cover flex justify-center items-center"
                style={{ backgroundImage: "url(/assets/images/plusbg.png)" }}
              >
                {" "}
                &#43;
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="inputbg py-3 px-5 w-[90%] text-[#3C579D]  rounded-full font-bold  opacity-[0.8] bg-no-repeat bg-cover">
                Forza Horizon #245
              </div>
              <div className=" inputbg h-10 w-10 bg-cover flex justify-center items-center text-[#3C579D]">
                {" "}
                &#8722;
              </div>
            </div>
          </div>
          <button
            className=" rounded-3xl text-xl font-bold w-full py-2 my-3 bg-cover"
            style={{ backgroundImage: "url(/assets/images/confirmbtn.png)" }}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectNFTs;
