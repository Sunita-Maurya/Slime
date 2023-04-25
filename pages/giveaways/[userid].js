import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
const data = [
  {
    id: 1,
    img: "/assets/images/cardimg1.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 2,
    img: "/assets/images/cardimg2.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 3,
    img: "/assets/images/cardimg3.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 4,
    img: "/assets/images/cardimg4.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 5,
    img: "/assets/images/cardimg5.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 6,
    img: "/assets/images/cardimg1.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 7,
    img: "/assets/images/cardimg6.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
  {
    id: 8,
    img: "/assets/images/cardimg7.png",
    title: "Lorem Ipsum Great ",
    user: "760,664,34",
    date: "30D 14H 20M  14S",
    coin: "768,921",
    horizon: "Horizon #465",
  },
];

const UserDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const filteredData = data.filter((value) => {
    return value.id == id;
  });

  return (
    <>
      <div
        className="h-[400px]  "
        style={{
          backgroundImage: "url(/assets/images/userbg.png)",
          backgroundSize: "100% ",
        }}
      >
        <Navbar />
        <div className="grid place-items-center">
          <div className="w-[400px] text-center mt-10 p-5 bg-[rgba(255, 255, 255, 0.35)] border border-[#FFFFFF59] backdrop-blur-lg rounded-2xl">
            <h2 className="slime-text ">Slime</h2>
            <h1>Giveaways</h1>
          </div>
        </div>
      </div>
      {filteredData.map((value, i) => (
        <>
          <div key={i} className="grid place-items-center mb-8 px-5">
            <button
              onClick={() => router.back()}
              className="text-[#3C579D] font-bold flex items-center mr-[50%]"
            >
              <img src="/assets/icons/backarrow.png" alt="backarrow" />
              <span>Go back</span>
            </button>
            <div className="flex lg:flex-row flex-col gap-5">
              <div>
                <img
                  src={value.img}
                  alt="user"
                  className=" object-cover rounded-2xl h-[500px] lg:w-[400px]"
                />
                <div
                  className="text-[#3C579D]   px-3 py-10 mt-5 "
                  style={{
                    backgroundImage: "url(/assets/images/titlebg.png)",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <h2 className="text-[#3C579D]  text-center text-3xl my-5">
                    Lorem Ipsum Great
                  </h2>
                  <div className="flex justify-around">
                    Started at
                    <span className="historybg rounded-3xl px-5 py-1 ">
                      09 12 2022
                    </span>
                    <span className="historybg rounded-3xl px-5 py-1 ">
                      10:30 PM
                    </span>
                  </div>
                  <div className="flex justify-around mt-3">
                    Ending at
                    <span className="historybg rounded-3xl px-5 py-1 ">
                      09 12 2022
                    </span>
                    <span className="historybg rounded-3xl px-5 py-1 ">
                      10:30 PM
                    </span>
                  </div>
                  <div className="historybg rounded-3xl flex items-center gap-2 mt-3 py-3 px-2 font-semibold">
                    <img src="/assets/images/user.png" alt="" /> 760,664,34
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="historybg rounded-3xl p-2 px-4 font-semibold">
                      Total Points
                    </div>
                    <div className="historybg rounded-3xl p-2 px-4 font-semibold">
                      780,023
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" pb-5"
                style={{
                  backgroundImage: "url(/assets/images/titlebg.png)",
                  backgroundSize: "100% 100%",
                }}
              >
                <div
                  className="flex md:justify-between justify-center  md:flex-row flex-col px-8 py-3  "
                  style={{
                    background:
                      "linear-gradient(105.01deg, #E394FF 5.15%, #5EFFEC 99.17%)",
                    border: "1px solid rgba(60, 87, 157, 0.11)",
                    backdropFilter: " blur(17.5px)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="">
                    <h3 className="md:text-[35px] text-2xl font-[oduda] pr-8">
                      Lorem Ipsum Great Lorem
                    </h3>
                    <p>Giveaways</p>
                  </div>
                  <div
                    className="flex items-center md:mx-0 mx-auto xl:gap-5 px-5 py-2 w-auto bg-no-repeat md:bg-cover"
                    style={{
                      backgroundImage: "url(/assets/images/points.png)",
                      // backgroundSize: "100% 100%",
                      borderRadius: "46px",
                    }}
                  >
                    <img src="/assets/icons/points.png" alt="poins" />
                    <div>
                      <p className="xl:text-[30px] text-2xl font-[oduda]">
                        768,921
                      </p>
                      <p className="font-semibold">Points</p>
                    </div>
                  </div>
                </div>
                <div className=" px-8 ">
                  <h3 className="text-[#3C579D] text-[20px] font-bold mt-8 opacity-[70%] text-center">
                    Prizes
                  </h3>
                  <div className=" flex justify-between md:flex-row flex-col">
                    <div className="historybg rounded-full py-2 px-1 mt-3 flex  items-center">
                      <img src="/assets/images/cup.png" alt="cup" />
                      <span className="text-[24px] font-[oduda]">
                        768,921
                      </span>
                      COIN
                    </div>
                    <div className="historybg rounded-full py-2 px-1 mt-3 flex  items-center">
                      
                      <img src="/assets/images/cup.png" alt="cup" />
                      <span className="text-[24px] font-[oduda]">
                        768,921
                      </span>
                      COIN
                    </div>
                    <div className="historybg rounded-full py-2 px-1 mt-3 flex  items-center">
                      
                      <img src="/assets/images/cup.png" alt="cup" />
                      <span className="text-[24px] font-[oduda]">
                        768,921
                      </span>
                      COIN
                    </div>
                  </div>
                </div>
                <div className="mx-10">
                  <h3 className="text-[#3C579D] font-bold text-[25px] font-[oduda] text-center my-5">
                    Tasks to Complete
                  </h3>
                  <div className="flex justify-between md:flex-row flex-col items-center gradient-box p-2 rounded-lg ">
                    <div className="flex items-center gap-3">
                      <img src="/assets/icons/twitter.png" alt="twitter" />
                      <h3
                        className="text-[#3C579D] text-xl font-[700] "
                      >
                        Follow Slime on Facebook
                      </h3>
                    </div>
                    <div className="flex items-center xl:gap-5 gap-2">
                      <button
                        className="font-bold px-4 py-3 bg-no-repeat"
                        style={{
                          backgroundImage: "url(/assets/images/points.png)",
                          backgroundSize: "100% 100%",
                          borderRadius: "46px",
                        }}
                      >
                        2 Points
                      </button>
                      <button className="btn font-bold px-5 py-3 rounded-3xl">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between md:flex-row flex-col items-center gradient-box p-2 rounded-lg mt-5 ">
                    <div className="flex items-center gap-3">
                      <img src="/assets/icons/facebook.png" alt="facebook" />
                      <h3
                        className="text-[#3C579D] text-xl font-[700]  "
                      >
                        Follow Slime on Facebook
                      </h3>
                    </div>
                    <div className="flex  items-center xl:gap-5 gap-2">
                      <button
                        className="font-bold px-4 py-3 bg-no-repeat"
                        style={{
                          backgroundImage: "url(/assets/images/points.png)",
                          backgroundSize: "100% 100%",
                          borderRadius: "46px",
                        }}
                      >
                        2 Points
                      </button>
                      <button className="btn font-bold px-5 py-3 rounded-3xl">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between md:flex-row flex-col items-center gradient-box p-2 rounded-lg mt-5 ">
                    <div className="flex items-center gap-3">
                      <img src="/assets/icons/youtube.png" alt="youtube" />
                      <h3
                        className="text-[#3C579D] text-xl font-[700]  "
                      >
                        Follow Slime on Facebook
                      </h3>
                    </div>
                    <div className="flex  items-center xl:gap-5 gap-2">
                      <button
                        className="font-bold px-4 py-3 bg-no-repeat"
                        style={{
                          backgroundImage: "url(/assets/images/points.png)",
                          backgroundSize: "100% 100%",
                          borderRadius: "46px",
                        }}
                      >
                        2 Points
                      </button>
                      <button className="btn font-bold px-5 py-3 rounded-3xl">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between md:flex-row flex-col items-center gradient-box p-2 rounded-lg mt-5 ">
                    <div className="flex items-center gap-3">
                      <img src="/assets/icons/telegram.png" alt="telegram" />
                      <h3
                        className="text-[#3C579D] text-xl font-[700]  "
                      >
                        Follow Slime on Facebook
                      </h3>
                    </div>
                    <div className="flex  items-center xl:gap-5 gap-2">
                      <button
                        className="font-bold px-4 py-3 bg-no-repeat"
                        style={{
                          backgroundImage: "url(/assets/images/points.png)",
                          backgroundSize: "100% 100%",
                          borderRadius: "46px",
                        }}
                      >
                        2 Points
                      </button>
                      <button className="btn font-bold px-5 py-3 rounded-3xl">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between md:flex-row flex-col items-center gradient-box p-2 rounded-lg mt-5 ">
                    <div className="flex items-center gap-3">
                      <img src="/assets/icons/discord.png" alt="discord" />
                      <h3
                        className="text-[#3C579D] text-xl font-[700]  "
                      >
                        Follow Slime on Facebook
                      </h3>
                    </div>
                    <div className="flex  items-center xl:gap-5 gap-2">
                      <button
                        className="font-bold px-4 py-3 bg-no-repeat"
                        style={{
                          backgroundImage: "url(/assets/images/points.png)",
                          backgroundSize: "100% 100%",
                          borderRadius: "46px",
                        }}
                      >
                        2 Points
                      </button>
                      <button className="btn font-bold px-5 py-3 rounded-3xl">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default UserDetails;
