import React from "react";
import Navbar from "@/components/Navbar";

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <>
      <div className="mt-20">
        <div className="flex justify-between items-center">
          <span className="text-3xl  font-[oduda] slime-text">${done}/100</span>
          <span className="font-bold opacity-[20%]">Progress to Draw</span>
        </div>
        <div className="progress">
          <div className="progress-done" style={style}></div>
        </div>
      </div>
    </>
  );
};

const lottery = () => {
  return (
    <div className="lotterybg h-[100vh]">
      <Navbar />
      <div className="relative flex items-center flex-col justify-center">
        <div className=" w-[450px]  flex items-center  flex-col gap-3 text-center my-5 p-5 px-10 pb-14 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
          <div>
            <h2 className="slime-text ">Slime</h2>
            <h1>Lottery</h1>
          </div>
        </div>
        <img
          src="/assets/images/xllogo.png"
          alt="logo"
          className="absolute z-50  top-[20%] ]"
        />
        <div className="">
          <div className="z-0 px-20 py-10 text-[#3C579D] bg-[#ffffff59] mt-10 rounded-xl backdrop-blur-[10px]">
            <h2 className="slime-text font-[oduda]">743,687,6545</h2>
            <p className="text-[#3C579D] font-bold text-3xl opacity-[20%] text-center font-[oduda]">
              in prizes
            </p>
            <Progress done="60" />
          </div>
          <div className=" flex justify-between items-center bg-[#ffffff59]  mt-10  backdrop-blur-[10px]  py-2 pl-8 pr-2 rounded-full border font-bold  ">
            <span className="font-[oduda] text-2xl"> Stake to participat</span>
            <button className="btn p-2 font-bold px-5">Stake Pools</button>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="flex justify-center ">
        <div className="  flex items-center  flex-col gap-3 text-center my-5 p-5 px-10 pb-14 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
          <table class="table-auto">
            <thead className="text-[#3C579D] ">
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody className="text-[#3C579D] ">
              <tr>
                <td>The Sliding </td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default lottery;
