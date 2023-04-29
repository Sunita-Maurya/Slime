import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

const create = () => {
  const router = useRouter();

  return (
    <>
      <div className="headerbg-2 h-[400px]">
        <Navbar />
        <div className="grid place-items-center">
          <div className="w-[400px] text-center mt-10 p-5 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
            <h2 className="slime-text ">Slime</h2>
            <h1>Giveaways</h1>
          </div>
        </div>
      </div>
      {/* ------------ */}
      <div className=" mx-auto  mb-8 lg:px-0 md:px-32 px-5">
        <div className="flex   justify-center lg:flex-row flex-col  gap-5 font-semibold mb-5 ">
          <div className="dragbg p-4 ">
            <div className="h-full border-2 border-dashed border-[#B13DDA] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <img src="/assets/images/plus.png" alt="pluse" />
              <h2 className="text-[#3C579D] text-[20px] my-5 ">
                Drag & Drop your image for Giveaway
              </h2>
            </div>
          </div>
          <div className="dragbg p-8 ">
            <div className="flex  gap-3 items-center ">
              <input
                type="text"
                placeholder="Enter Title"
                className="inputbg  py-3 px-5  placeholder:text-[#3C579D] font-semibold bg-transparent  opacity-[0.8]"
              />
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Sort by</option>
                </select>
              </div>
            </div>
            <div className="my-3">
              <input
                type="text"
                placeholder="Project / Community / Individual Name"
                className="inputbg py-3 px-5 w-full  placeholder:text-[#3C579D] bg-transparent  opacity-[0.8]"
              />
            </div>
            <div className="flex  gap-3 items-center">
              <input
                type="text"
                placeholder="Enter Starting Date"
                className="inputbg py-3 px-5   placeholder:text-[#3C579D] bg-transparent  opacity-[0.8]"
              />
              <input
                type="time"
                placeholder="Time"
                className="inputbg py-3 px-5 w-full   placeholder:text-[#3C579D] bg-transparent opacity-[0.8]"
              />
            </div>
            <div className="flex  gap-3 items-center mt-3">
              <input
                type="text"
                placeholder="Enter Ending Date"
                className="inputbg py-3 px-5   placeholder:text-[#3C579D] bg-transparent  opacity-[0.8]"
              />
              <input
                type="time"
                placeholder="Time"
                className="inputbg py-3 px-5 w-full   placeholder:text-[#3C579D] bg-transparent"
              />
            </div>
          </div>
        </div>
        {/* ------ */}

        <div className="flex justify-center lg:flex-row flex-col gap-5 font-semibold ">
          <div className="dragbg p-6 basis-1/4">
            <div
              className="p-2 rounded-xl"
              style={{ border: "1px solid rgba(60, 87, 157, 0.18" }}
            >
              <div className="flex gap-3 items-center ">
                <input
                  type="text"
                  placeholder="Prize Name"
                  className=" inputbg py-3 px-5 w-full placeholder:text-[#3C579D] font-semibold bg-transparent  opacity-[0.8]"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  placeholder="Contract"
                  className="inputbg py-3 px-5 w-full  placeholder:text-[#3C579D] bg-transparent  opacity-[0.8]"
                />
              </div>
              <div className="flex  gap-3 items-center w-[350px]">
                <div className="inputbg w-[50%] py-3 px-5 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                  <select name="" id="" className="bg-transparent w-full">
                    <option value="Sort by ">Type</option>
                  </select>
                </div>
                <div className="inputbg py-3 px-5 w-[50%] text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                  <select name="" id="" className="bg-transparent w-full">
                    <option value="Sort by ">Network</option>
                  </select>
                </div>
              </div>
              <div className="inputbg flex  gap-3 items-center mt-3">
                <input
                  type="text"
                  placeholder="Token/NFTs per user"
                  className=" py-3 px-5 w-full  placeholder:text-[#3C579D] bg-transparent  opacity-[0.8]"
                />
                <button className=" inputbg  font-bold h-10 w-14 bg-cover flex justify-center border  border-black items-center text-[#3C579D]">
                  {" "}
                  &#43;
                </button>
                <button className=" inputbg  font-bold h-10 w-14 bg-cover flex justify-center border  border-black items-center text-[#3C579D]">
                  {" "}
                  &#8722;
                </button>
              </div>
              <div className="inputbg flex  gap-3 items-center mt-3">
                <input
                  type="text"
                  placeholder="Token/NFTs per user"
                  className=" py-3 px-5 w-full  placeholder:text-[#3C579D] bg-transparent  opacity-[0.8]"
                />
                <button className=" inputbg  font-bold h-10 w-14 bg-cover flex justify-center border  border-black items-center text-[#3C579D]">
                  {" "}
                  &#43;
                </button>
                <button className=" inputbg  font-bold h-10 w-14 bg-cover flex justify-center border  border-black items-center text-[#3C579D]">
                  {" "}
                  &#8722;
                </button>
              </div>
            </div>
          </div>
          <div
            className="dragbg py-5 lg:p-5 p-5 "
            // style={{
            //   backgroundImage: "url(/assets/images/dragbg.png)",
            //   backgroundSize: "100% 100% ",
            // }}
          >
            <h2 className="text-[#3C579D] text-[20px] my-5 text-center ">
              Set Task
            </h2>
            <div
              className="flex gap-3 items-center p-2"
              style={{
                border: "1px solid rgba(60, 87, 157, 0.18)",
                borderRadius: "12px",
              }}
            >
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Choose Platform</option>
                </select>
              </div>
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Select Task</option>
                </select>
              </div>
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Select Points</option>
                </select>
              </div>
            </div>
            <div
              className="flex gap-3 items-center p-2 mt-3"
              style={{
                border: "1px solid rgba(60, 87, 157, 0.18)",
                borderRadius: "12px",
              }}
            >
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Instagram</option>
                </select>
              </div>
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Follow</option>
                </select>
              </div>
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">2 Points</option>
                </select>
              </div>
            </div>
            <div
              className="flex gap-3 items-center p-2 mt-3"
              style={{
                border: "1px solid rgba(60, 87, 157, 0.18)",
                borderRadius: "12px",
              }}
            >
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Instagram</option>
                </select>
              </div>
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">Follow</option>
                </select>
              </div>
              <div className="inputbg py-3 px-5 w-44 text-[#3C579D] rounded-full font-bold  opacity-[0.8]">
                <select name="" id="" className="bg-transparent w-full">
                  <option value="Sort by ">2 Points</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end items-center gap-8 mt-5">
              <button
                onClick={() => router.back()}
                className="text-[#3C579D] font-bold flex items-center  gap-2"
              >
                <img src="/assets/icons/backarrow.png" alt="backarrow" />
                <span>Go back</span>
              </button>
              <button className="btn px-5 py-3">Submit and Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default create;
