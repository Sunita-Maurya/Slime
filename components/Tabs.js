import React, { useState } from "react";
import Link from "next/link";
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

const Tabs = () => {
  const [cardData, setCardData] = useState(data);
  return (
    <div style={{ maxWidth: "1630px", marginInline: "auto" }}>
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
          <button className="btn px-5 py-2">Buy Slime</button>
          <button className="btn px-5 py-2 rounded-3xl">
            Connect your wallet
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-16 gap-5 font-bold">
        {cardData.map((carditem, i) => (
          <Link
            href={{ pathname: "/giveaways/[]", query: { id: carditem.id } }}
          >
            <div
              key={i}
              className="p-2 text-center"
              style={{
                backgroundImage: "url(/assets/images/card.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "20px",
              }}
            >
              <img src={carditem.img} alt="" />
              <h3 className="text-[#3C579D] text-[30px] font-bold font-[Poppins] my-5">
                {carditem.title}
              </h3>
              <div className="flex justify-between text-[#3C579D]">
                <div className="historybg p-1 px-3 flex items-center gap-1">
                  <img src="/assets/images/user.png" alt="user" />
                  <span className="opacity-[60%]">{carditem.user}</span>
                </div>
                <div className="historybg p-1 px-3 flex items-center gap-1">
                  <img src="/assets/images/timer.png" alt="timer" />
                  <span className="opacity-[60%]">{carditem.date}</span>
                </div>
              </div>
              <h3 className="text-[#3C579D] text-[20px] font-bold mt-8 opacity-[70%]">
                Prizes
              </h3>
              <div className="historybg py-2 px-1 mt-3 flex  items-center">
                <img src="/assets/images/cup.png" alt="cup" />
                <span className="text-[24px]"> {carditem.coin} </span> COIN
              </div>
              <div className="historybg py-2 px-1 mt-3 flex  items-center justify-between">
                <div className="flex gap-1">
                  <img src="/assets/images/cup.png" alt="cup" />
                  <span className="text-[24px]"> {carditem.horizon}</span>
                </div>
                <div className="bg-[url('/assets/images/nftbg.png')] bg-contain bg-no-repeat text-[10px]  p-2">
                  NFT
                </div>
              </div>
              <button
                style={{
                  backgroundImage: "url(/assets/images/particepate.png)",
                  backgroundSize: "100% 100%",
                }}
                className="w-full py-4 mt-3  "
              >
                Participate
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
