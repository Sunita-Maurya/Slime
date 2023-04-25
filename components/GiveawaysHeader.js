import React from "react";

const GiveawaysHeader = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex justify-center items-center flex-col">
        <h2 className="slime-text">Slime</h2>
        <h1>Giveaways</h1>
      </div>
      <div className="flex gap-8  md:flex-row flex-col my-10">
        <div
          className=" flex items-center flex-col justify-center text-white py-8 px-10"
          style={{
            /* background-color: rgba(255, 255, 255, 0.22); */
            backgroundColor: "rgba(255, 255, 255, 0.22)",
            border: " 1px solid #ffffff59",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
          }}
        >
          <p>Total users participated</p>
          <h2>786,256,6890</h2>
        </div>
        <div className="">
          <div className="gradient-box  text-white py-3 px-3">
            <h2 className="text-[30px]">786,256,6890</h2>
            <p>Total users participated</p>
          </div>
          <div className="gradient-box  text-white p-3 my-3">
            <h2 className="text-[30px]">786,256,6890</h2>
            <p>Total users participated</p>
          </div>
        </div>
      </div>
      <div>
        <div className="historybg p-2 rounded-full border font-bold  ">
          Create your History with us
          <button className="btn p-2 font-bold px-5">Create yours</button>
        </div>
      </div>
    </div>
  );
};

export default GiveawaysHeader;
